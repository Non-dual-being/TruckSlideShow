<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

Route::get('/', function (): Response {
    return Inertia::render('Home', [
        'dedication' => 'Voor Wim — een leven op de weg, verteld door de generaties Volvo waarmee vrachtwagenchauffeurs geschiedenis schreven.',
    ]);
})->name('home');