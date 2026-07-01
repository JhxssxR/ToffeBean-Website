<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/catalog', function () {
    return Inertia::render('Catalog');
})->name('catalog');

Route::get('/commissions', function () {
    return Inertia::render('Commissions');
})->name('commissions');

Route::get('/order-tracker', function () {
    return Inertia::render('OrderTracker');
})->name('order-tracker');

Route::get('/oc-planner', function () {
    return Inertia::render('OcPlanner');
})->name('oc-planner');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
