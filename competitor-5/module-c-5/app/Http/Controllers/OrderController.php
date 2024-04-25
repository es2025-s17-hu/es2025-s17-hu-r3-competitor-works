<?php

namespace App\Http\Controllers;

use App\Models\MenuItem;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Table;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'tableId' => 'required|integer'
        ]);

        $table = Table::where('id', $request->tableId)->first();
        if(!$table) {
            return response('Table not found', 404);
        }

        $orders = Order::where('tableId', $table->id)
            ->where('closedAt', 'NOT LIKE', '%:%')
            ->exists();

        if($orders)  {
            return response('Table already has an open order', 400);
        }

        $order = Order::create([
            'tableId' => $table->id,
            'updatedAt' => now(),
            'createdAt' => now()
        ]);

        return response()->json($order, 201);
    }

    public function show(string $tableId, Request $request)
    {
        $table = Table::where('id', $tableId)->first();

        if(!$table) {
            return response('Order not found', 404);
        }

        $order = Order::where('tableId', $table->id)
            ->where('closedAt', 'LIKE', '%:%')
            ->first();

        if(!$order) {
            return response('Order not found', 404);
        }

        $orderItems = OrderItem::where('orderId', $order->id)->get();
        $orderItems->each(function ($item) {
           $menuItem = MenuItem::where('id', $item->menuItemId)->first();
           $item->MenuItem = $menuItem;
        });

        $order->OrderItems = $orderItems;

        return response()->json($order);
    }

    public function destroy(string $tableId, Request $request) {
        $table = Table::where('id', $tableId)->first();
        if(!$table) {
            return response('Order not found', 404);
        }

        $order = Order::where('tableId', $table->id)
            ->where('closedAt', 'LIKE', '%:%')
            ->first();

        if(!$order) {
            return response('Order not found', 404);
        }

        $order->closedAt = now();
        $order->save();

        return response('Order closed successfully', 200);
    }
}
