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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::prefix('v1')->group(function (){
    Route::post('/login/pin', [\App\Http\Controllers\LogController::class, 'pin']);
    Route::post('/logout', [\App\Http\Controllers\LogController::class, 'logout']);
    Route::post('/login', [\App\Http\Controllers\LogController::class, 'login']);


    Route::middleware('md5')->group(function (){
        Route::get('menuCategories', [\App\Http\Controllers\MenuCategoryController::class, 'index']);
        Route::get('menuItems', [\App\Http\Controllers\MenuItemController::class, 'index']);
        Route::post('menuItems', [\App\Http\Controllers\MenuItemController::class, 'store']);
        Route::post('menuItems/{menuItem}', [\App\Http\Controllers\MenuItemController::class, 'update'])->missing(function (){
            return response([
                null
            ],404);
        });
        Route::put('menuItems/{id}', [\App\Http\Controllers\MenuItemController::class, 'update']);
        Route::delete('menuItems/{id}', [\App\Http\Controllers\MenuItemController::class, 'destroy']);
        Route::post('orders', [\App\Http\Controllers\OrderController::class, 'store']);
        Route::get('orders/tables/{id}', [\App\Http\Controllers\OrderController::class, 'show']);
        Route::put('orders/tables/{id}/close', [\App\Http\Controllers\OrderController::class, 'update']);
        Route::post('orderItems', [\App\Http\Controllers\OrderItemController::class, 'store']);
//    TODO : Stats
//    Route::post('orderItems', [\App\Http\Controllers\OrderItemController::class, 'index']);
    });
});


