<?php

use App\Http\Controllers\DonationController;
use Illuminate\Support\Facades\Route;

Route::get('/', [DonationController::class, 'index'])->name('donations.index');
Route::post('/donacion', [DonationController::class, 'store'])->name('donations.store');
Route::get('/donacion/publicar', [DonationController::class, 'create'])->name('donations.create');
Route::get('/donacion/{uuid}', [DonationController::class, 'show'])->name('donations.show');
