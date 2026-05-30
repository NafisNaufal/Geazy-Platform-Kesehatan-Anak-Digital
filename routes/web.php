<?php

use App\Http\Controllers\Admin\AdminArticleController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminDoctorController;
use App\Http\Controllers\BookmarkController;
use App\Http\Controllers\ChildProfileController;
use App\Http\Controllers\ConsultationController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EduHubController;
use App\Http\Controllers\GrowthTrackerController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\Mitra\MitraDashboardController;
use App\Http\Controllers\NutritionLogController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

// Landing Page
Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

// EduHub - publik
Route::get('/eduhub', [EduHubController::class, 'index'])->name('eduhub.index');
Route::get('/eduhub/{article:slug}', [EduHubController::class, 'show'])->name('eduhub.show');

// Parent (Orang Tua) routes
Route::middleware(['auth', 'verified', 'role:orang_tua'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/dashboard/switch-child', [DashboardController::class, 'switchChild'])->name('dashboard.switch-child');

    // Profil Anak
    Route::get('/anak', [ChildProfileController::class, 'index'])->name('anak.index');
    Route::get('/anak/pilih', [ChildProfileController::class, 'pilih'])->name('anak.pilih');
    Route::get('/anak/tambah', [ChildProfileController::class, 'create'])->name('anak.create');
    Route::post('/anak', [ChildProfileController::class, 'store'])->name('anak.store');
    Route::get('/anak/{anak}/edit', [ChildProfileController::class, 'edit'])->name('anak.edit');
    Route::patch('/anak/{anak}', [ChildProfileController::class, 'update'])->name('anak.update');
    Route::delete('/anak/{anak}', [ChildProfileController::class, 'destroy'])->name('anak.destroy');

    // G-Growth Tracker
    Route::get('/tracker', [GrowthTrackerController::class, 'index'])->name('tracker.index');
    Route::post('/tracker', [GrowthTrackerController::class, 'store'])->name('tracker.store');
    Route::delete('/tracker/{record}', [GrowthTrackerController::class, 'destroy'])->name('tracker.destroy');

    // G-NutriLog
    Route::get('/nutrisi', [NutritionLogController::class, 'index'])->name('nutrisi.index');
    Route::post('/nutrisi', [NutritionLogController::class, 'store'])->name('nutrisi.store');
    Route::delete('/nutrisi/{log}', [NutritionLogController::class, 'destroy'])->name('nutrisi.destroy');
    Route::get('/api/foods', [NutritionLogController::class, 'foods'])->name('api.foods');

    // EduHub bookmarks
    Route::post('/eduhub/{article}/bookmark', [BookmarkController::class, 'toggle'])->name('bookmark.toggle');
    Route::get('/simpanan', [BookmarkController::class, 'index'])->name('bookmark.index');

    // Geazy Connect
    Route::get('/connect', [ConsultationController::class, 'index'])->name('connect.index');
    Route::post('/connect/mulai/{doctor}', [ConsultationController::class, 'start'])->name('connect.start');
    Route::get('/konsultasi/{konsultasi}', [ConsultationController::class, 'show'])->name('konsultasi.show');
    Route::post('/konsultasi/{konsultasi}/pesan', [MessageController::class, 'store'])->name('konsultasi.message.store');
    Route::post('/konsultasi/{konsultasi}/tutup', [ConsultationController::class, 'close'])->name('konsultasi.close');
});

// Mitra (Dokter) routes
Route::middleware(['auth', 'role:mitra'])->prefix('mitra')->name('mitra.')->group(function () {
    Route::get('/dashboard', [MitraDashboardController::class, 'index'])->name('dashboard');
    Route::post('/availability', [MitraDashboardController::class, 'toggleAvailability'])->name('availability');
    Route::get('/konsultasi/{konsultasi}', [ConsultationController::class, 'show'])->name('konsultasi.show');
    Route::post('/konsultasi/{konsultasi}/pesan', [MessageController::class, 'store'])->name('konsultasi.message.store');
});

// Admin routes
Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');

    // Manajemen Dokter
    Route::get('/dokter', [AdminDoctorController::class, 'index'])->name('doctors.index');
    Route::post('/dokter/{doctor}/verifikasi', [AdminDoctorController::class, 'verify'])->name('doctors.verify');
    Route::post('/dokter/{doctor}/tolak', [AdminDoctorController::class, 'reject'])->name('doctors.reject');

    // CMS Artikel
    Route::get('/artikel', [AdminArticleController::class, 'index'])->name('articles.index');
    Route::get('/artikel/buat', [AdminArticleController::class, 'create'])->name('articles.create');
    Route::post('/artikel', [AdminArticleController::class, 'store'])->name('articles.store');
    Route::get('/artikel/{article}/edit', [AdminArticleController::class, 'edit'])->name('articles.edit');
    Route::patch('/artikel/{article}', [AdminArticleController::class, 'update'])->name('articles.update');
    Route::delete('/artikel/{article}', [AdminArticleController::class, 'destroy'])->name('articles.destroy');
});

require __DIR__.'/settings.php';
