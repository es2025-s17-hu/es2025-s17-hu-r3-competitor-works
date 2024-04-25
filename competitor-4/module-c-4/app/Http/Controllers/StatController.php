<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;

class StatController extends Controller
{
    //
    public function show(Request $request)
    {
        $orders = Order::all();
        $totalRevenue = 0;
        $orderItems = [];
        foreach ($orders as $order) {
            $ordersOrderItems = OrderItem::where('orderId', $order->id)->get();
            foreach ($ordersOrderItems as $orderItem) {
                $totalRevenue += $orderItem->quality * $orderItem->menuItem->price;
            }
        }
        return response()->json([
            "totalRevenue" => $totalRevenue,
            'countOfOrderItem' => [],
        ]);
    }
}
