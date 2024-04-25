<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Table;
use Illuminate\Http\Request;

class OrderController extends Controller
{


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $table = Table::find($request->tableId);
        if (!$table){
            return response([
                'Table not found.'
            ],404);
        }

        $currentOrders = Order::where('tableId', $request->tableId)->where('closedAt', null)->first();

        if ($currentOrders){
            return response([
                'Bad request, if open order exists for this table.'
            ],400);
        }
        $order = Order::create([
            'tableId' => $request->tableId,
            'updatedAt' => new \DateTime()
        ]);

        $order = Order::find($order->id);

        return response($order,201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order, $id)
    {
        $order = Order::with('orderItems')->where('tableId', $id)->first();
        if (!$order){
            return response([
                'Order not found.'
            ],404);
        }

        return response($order);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $order = Order::where('tableId', $id)->first();
        if (!$order){
            return response([
                'Order not found.'
            ],404);
        }

        $order->update([
           'closedAt' => new \DateTime()
        ]);

        return response(
            'Order closed successfully.'
        ,200);
    }

}
