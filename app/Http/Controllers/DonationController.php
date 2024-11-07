<?php

namespace App\Http\Controllers;

use App\Http\Requests\DonationStore;
use App\Models\Category;
use App\Models\Donation;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class DonationController extends Controller
{
    public function index(Request $request)
    {
        $section = $request->query('section');
        $donationsCacheKey = 'donations_' . ($section ?? 'all');

        $categories = cache()->rememberForever('categories', function () {
            return Category::where('parent_id', null)->get();
        });

        $donations = cache()->remember($donationsCacheKey, now()->addMinutes(15), function () use ($section) {
            return Donation::orderBy('created_at', 'desc')
                ->when($section, function ($query) use ($section) {
                    return $query->whereHas('category', function ($subQuery) use ($section) {
                        $subQuery->where('slug', $section);
                    });
                })
                ->with(['category', 'images'])
                ->get();
        });

        return Inertia::render('Donations/Index', [
            'donations' => $donations,
            'categories' => $categories,
            'section' => $section,
        ]);
    }

    public function create()
    {
        $categories = Category::where('parent_id', null)->get();

        return Inertia::render('Donations/Create', [
            'categories' => $categories,
        ]);
    }

    public function store(DonationStore $request)
    {
        $payload = $request->validated();
        $payload['uuid'] = (string) Str::ulid();

        $donation = Donation::create($payload);

        cache()->forget('donations_all');

        if (isset($payload['category_id'])) {
            $category = Category::find($payload['category_id']);
            if ($category) {
                cache()->forget('donations_' . $category->name);
            }
        }

        foreach ($request->file('images') as $index => $image) {
            $donation->images()->create([
                'url' => $image->store('donations', 'public'),
                'order' => $index + 1,
            ]);
        }

        // TODO: Send email to the user creating the donation.

        return redirect()->route('donations.index');
    }

    public function show($uuid)
    {
        $donation = Donation::where('uuid', $uuid)->with(['category', 'images'])->first();

        return Inertia::render('Donations/Show', [
            'donation' => $donation,
        ]);
    }
}
