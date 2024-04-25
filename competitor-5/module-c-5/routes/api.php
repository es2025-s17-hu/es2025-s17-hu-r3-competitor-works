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

Route::prefix('/v1')->group(function () {
    //Menu related stuff
    Route::get('/menuCategories', [\App\Http\Controllers\MenuCategoryController::class, 'index']);
    Route::get('/menuItems', [\App\Http\Controllers\MenuItemController::class, 'index']);
    Route::post('/menuItems', [\App\Http\Controllers\MenuItemController::class, 'create']);
    Route::put('/menuItems/{id}', [\App\Http\Controllers\MenuItemController::class, 'update']);
    Route::delete('/menuItems/{id}', [\App\Http\Controllers\MenuItemController::class, 'destroy']);

    Route::post('/orders', [\App\Http\Controllers\OrderController::class, 'create']);
    Route::get('/orders/tables/{tableId}', [\App\Http\Controllers\OrderController::class, 'show']);
    Route::put('/orders/tables/{tableId}/close', [\App\Http\Controllers\OrderController::class, 'destroy']);

    Route::post('/orderItems', [\App\Http\Controllers\OrderItemController::class, 'create']);

    //Auth
    Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);
    Route::post('/login/pin', [\App\Http\Controllers\AuthController::class, 'pin']);
    Route::post('/logout', [\App\Http\Controllers\AuthController::class, 'logout']);
});

