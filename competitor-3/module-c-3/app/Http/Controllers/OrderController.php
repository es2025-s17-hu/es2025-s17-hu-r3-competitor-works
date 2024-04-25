<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderItemRequest;
use App\Http\Resources\OrderResource;
use App\Http\Resources\TableDetailResource;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Table;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Creates a new order
     */
    public function store(Request $request)
    {
        // Find the table
        $table = Table::findOrFail($request->tableId);

        // Check whether table already has an open order
        $open = Order::where('tableId', $table->id)->where('closedAt', null)->first();
        if($open) {
            return response('Table already has an open order', 400);
        }

        // Create the order
        $order = Order::create(['tableId' => $request->tableId, 'closedAt' => null]);
        return response()->json($table, 201);
    }

    /**
     * Return the orders
     */
    public function orders(Table $table)
    {
        // Get the open tables
        $open = Order::where('tableId', $table->id)->where('closedAt', null)->get()->load('orderItems');

        // If the table doesnt have open tables
        if($open->count() < 1) {
            return response('Order not found', 404);
        }

        return OrderResource::collection($open);
    }

    /**
     * Closes a table
     */
    public function close(Table $table)
    {
        // Get the open tables
        $open = Order::where('tableId', $table->id)->where('closedAt', null)->first();

        // If the table doesnt have open tables
        if(!$open) {
            return response('Order not found', 404);
        }

        // Close and return
        $open->update(['closedAt' => now()]);
        return response('Order closed successfully');
    }

    /**
     * Creates an order item
     */
    public function storeOrderItem(StoreOrderItemRequest $request)
    {
        // Find the order
        $order = Order::find($request->orderId);
        if(!$order) {
            return response()->noContent(400);
        }

        // If the order is closed
        if($order->closedAt != null) {
            return response()->noContent(400);
        }

        // Create the order item and return it
        $orderItem = OrderItem::create($request->validated());
        return response()->json($orderItem, 201);
    }
}
