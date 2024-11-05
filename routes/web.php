<?php

use App\Http\Controllers\DonationController;
use Illuminate\Support\Facades\Route;

Route::get('/', [DonationController::class, 'index'])->name('donations.index');