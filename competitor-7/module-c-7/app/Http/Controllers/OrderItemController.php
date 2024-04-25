<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Validator;

class OrderItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'orderId' => 'required|exists:Order,id',
            'menuItemId' => 'required|exists:MenuItem,id',
            'quantity' => 'required',
        ]);

        if ($validator->fails()){
            return response('The order item could not be created.', 400);
        }

        $order = OrderItem::create([
            'orderId' => $request->orderId,
            'menuItemId' => $request->menuItemId,
            'quantity' => $request->quantity,
            'updatedAt' => new \DateTime()
        ]);

        $order = Order::find($order->id);

        return response($order,201);
    }

    /**
     * Display the specified resource.
     */
    public function show(OrderItem $orderItem)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, OrderItem $orderItem)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OrderItem $orderItem)
    {
        //
    }
}
