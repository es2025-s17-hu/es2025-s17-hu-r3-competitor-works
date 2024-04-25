<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use Carbon\Carbon;
use Illuminate\Http\Request;

class OrderItemController extends Controller
{
    //
    /**
     * Create new order item
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            "orderId" => 'required',
            "menuItemId" => 'required',
            "quantity" => 'required',
        ]);

        $data["createdAt"] = Carbon::now();
        $data["updatedAt"] = Carbon::now();

        $orderItem = OrderItem::create($data);
        return response($orderItem, 201);
    }
}
