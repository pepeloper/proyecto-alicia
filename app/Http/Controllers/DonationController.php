<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Donation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DonationController extends Controller
{
    public function index(Request $request)
    {
        $section = $request->query('section');
        $donations = Donation::orderBy('created_at', 'desc')
            ->when($section, function ($query) use ($section) {
                return $query->whereHas('category', function ($subQuery) use ($section) {
                    $subQuery->where('name', $section);
                });
            })
            ->with(['category', 'images'])
            ->get();
        $categories = Category::where('parent_id', null)->get();

        return Inertia::render('Donations/Index', [
            'donations' => $donations,
            'categories' => $categories,
            'section' => $section,
        ]);
    }
}
