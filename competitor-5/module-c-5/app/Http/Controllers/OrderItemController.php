<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrderItemController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'orderId' => 'required|integer',
            'menuItemId' => 'required|integer',
            'quantity' => 'required|integer'
        ]);

        if($validator->fails()) {
            return response('The order item could not be created.', 400);
        }

        $orderItem = OrderItem::create([
           ...$request->all(),
           'createdAt' => now(),
           'updatedAt' => now()
        ]);

        return response()->json($orderItem, 201);
    }
}
