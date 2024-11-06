<?php

use App\Http\Controllers\DonationController;
use Illuminate\Support\Facades\Route;

Route::get('/', [DonationController::class, 'index'])->name('donations.index');
Route::post('/donations', [DonationController::class, 'store'])->name('donations.store');
Route::get('/donations/{uuid}', [DonationController::class, 'show'])->name('donations.show');