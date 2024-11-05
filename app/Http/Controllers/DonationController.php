<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Donation;
use Inertia\Inertia;

class DonationController extends Controller
{
    public function index()
    {
        $donations = Donation::orderBy('created_at', 'desc')->get();
        $categories = Category::where('parent_id', null)->get();


        return Inertia::render('Donations/Index', [
            'donations' => $donations,
            'categories' => $categories,
        ]);
    }
}
