<?php

use Illuminate\Support\Facades\Route;
use Modules\Alumni\Http\Controllers\AlumniController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('alumnis', AlumniController::class)->names('alumni');
});
