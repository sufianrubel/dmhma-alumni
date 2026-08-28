<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsletterSubscriptionController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');
Route::post('newsletter/subscribe', NewsletterSubscriptionController::class)
    ->middleware('throttle:6,1')
    ->name('newsletter.subscribe');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::inertia('directory', 'directory')->name('directory');
});

require __DIR__.'/settings.php';
