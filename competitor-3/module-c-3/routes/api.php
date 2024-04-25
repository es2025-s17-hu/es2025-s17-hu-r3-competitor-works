<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/**
 * Public auth routes
 */
Route::post('login', [\App\Http\Controllers\AuthController::class, 'login']);
Route::post('login/pin', [\App\Http\Controllers\AuthController::class, 'loginPin']);

/**
 * Protected routes
 */
Route::middleware('auth.bearer')->group(function () {
    /**
     * Logout route
     */
   Route::post('logout', [\App\Http\Controllers\AuthController::class, 'logout']);

   /**
    * Menu item endpoints
    */
   Route::get('menuItems', [\App\Http\Controllers\MenuItemController::class, 'index']);
   Route::post('menuItems', [\App\Http\Controllers\MenuItemController::class, 'store']);
   Route::put('menuItems/{menuItem}', [\App\Http\Controllers\MenuItemController::class, 'update']);
   Route::delete('menuItems/{menuItem}', [\App\Http\Controllers\MenuItemController::class, 'destroy']);

   /**
    * Order endpoints
    */
   Route::post('orders', [\App\Http\Controllers\OrderController::class, 'store']);
   Route::get('orders/tables/{table}', [\App\Http\Controllers\OrderController::class, 'orders'])->name('orders');
   Route::put('orders/tables/{table}/close', [\App\Http\Controllers\OrderController::class, 'close'])->name('close');

   /**
    * Order Item endpoints
    */
   Route::post('orderItems', [\App\Http\Controllers\OrderController::class, 'storeOrderItem']);

   /**
    * Stat
    */
   Route::get('stats', \App\Http\Controllers\StatController::class);

   /**
    * MenuCategory routes
    */
   Route::get('menuCategories', [\App\Http\Controllers\MenuCategoryController::class, 'index']);
});
