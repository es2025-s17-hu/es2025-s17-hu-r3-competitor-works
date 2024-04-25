<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    $user = Auth::user();
    if($user != null){
        return redirect('/dashboard');
    }else{
        return view('login');
    }

});

Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);

Route::middleware(\App\Http\Middleware\LoginMiddleware::class)->group(function (){
    Route::get('/dashboard', function(){
        return view('dashboard');
    });
    Route::get('logout', [\App\Http\Controllers\AuthController::class, 'logout']);
    Route::get('/menuCategories', [\App\Http\Controllers\MenuCategoriesController::class, 'index']);
    Route::get('/deleteMenuCategory/{menuCategory}',function(\App\Models\MenuCategory $menuCategory){
        \App\Http\Controllers\MenuCategoriesController::delete($menuCategory);
    });

    Route::get('/menuItems', [\App\Http\Controllers\MenuItemController::class, 'index']);

    Route::get('/deleteMenuItem/{menuItem}',function(\App\Models\MenuItem $menuItem){
        \App\Http\Controllers\MenuItemController::delete($menuItem);
    });

});


