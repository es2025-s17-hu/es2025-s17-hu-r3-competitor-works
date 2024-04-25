<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::group(['prefix' => 'v1'], function (){
    Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);
    Route::post('/login/pin', [\App\Http\Controllers\AuthController::class, 'loginPin']);

    Route::middleware('auth:sanctum')->group(function (){
        Route::post('/logout', [\App\Http\Controllers\AuthController::class, 'logout']);

        Route::group(['prefix' => 'menuItems'], function(){
            Route::get('/', [\App\Http\Controllers\MenuItemController::class, 'index']);
            Route::delete('/{id}', [\App\Http\Controllers\MenuItemController::class, 'destroy']);
            Route::put('/{id}', [\App\Http\Controllers\MenuItemController::class, 'update']);
            Route::post('/', [\App\Http\Controllers\MenuItemController::class, 'store']);
        });

        Route::group(['prefix' => 'orders'], function (){
           Route::post('/', [\App\Http\Controllers\OrderController::class, 'store']);
        });

        Route::get('/menuCategories', [\App\Http\Controllers\MenuCategoryController::class, 'index']);

        Route::post('/orderItems', [\App\Http\Controllers\OrderItemController::class, 'store']);
    });
});
