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

Route::prefix("v1")->group(function () {

    // Login
    Route::post("/login", [\App\Http\Controllers\UserController::class, 'login']);

    // Login Pin
    Route::post("/login/pin", [\App\Http\Controllers\UserController::class, 'loginPin']);

    Route::middleware('auth.check')->group(function () {

        // Logout
        Route::post("/logout", [\App\Http\Controllers\UserController::class, 'logout']);

        // Get All Category
        Route::get('/menuCategories', [\App\Http\Controllers\MenuCategoryController::class, 'index']);

        // Menu Item CRUD
        Route::resource("menuItems", \App\Http\Controllers\MenuItemController::class);

        Route::prefix('orders')->group(function () {

            // Create new Order
            Route::post('/', [\App\Http\Controllers\OrderController::class, 'store']);

            // Get open order
            Route::get("/tables/{tableId}", [\App\Http\Controllers\OrderController::class, 'orderOpen']);

            // Close the order
            Route::put('/tables/{tableId}/close', [\App\Http\Controllers\OrderController::class, 'orderClose']);

        });

        // Create new order item
        Route::post('/orderItems', [\App\Http\Controllers\OrderItemController::class, 'store']);

        // Get statistics
        Route::get('/stats', [\App\Http\Controllers\StatController::class, 'show']);

    });

});
