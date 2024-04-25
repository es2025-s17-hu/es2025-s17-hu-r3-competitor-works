<?php

namespace App\Http\Controllers;

use App\Models\MenuItem;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Table;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    //
    /**
     * Create a new order
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
        $validator = Validator::make([
            "tableId" => 'required',
        ], [
            'required' => 'Table not found',
        ]);

        if ($validator->errors()->count() > 0) {
            return response('Table not found', 404);
        }

        $table = Table::find($request->tableId);
        if (!$table) {
            return response('Table not found', 404);
        }

        if (Order::where("tableId", $table->id)->where('closedAt', null)->first()) {
            return response('Table already has an open order', 400);
        }
        $data["tableId"] = $request->tableId;
        $data["createdAt"] = Carbon::now();
        $data["updatedAt"] = Carbon::now();
        $order = Order::create($data);
        $order["closedAt"] = $order->closedAt;
        return response()->json($order, 201);
    }

    /**
     * Get Open order
     * @param Request $request
     * @param $tableId
     * @return void
     */
    public function orderOpen(Request $request, $tableId)
    {
        $table = Table::find($tableId);
        if (!$table) {
            return response('Order not found', 404);
        }
        if (!($order = Order::where("tableId", $tableId)->where("closedAt", null)->first())) {
            return response('Order not found', 404);
        }

        $order->OrderItems = OrderItem::where("orderId", $order->id)->get();
        foreach ($order->orderItems as &$orderItem) {
            $orderItem->MenuItem = MenuItem::find($orderItem->menuItemId);
        }
        return response()->json($order, 200);
    }

    /**
     * Close order
     * @param Request $request
     * @param $tableId
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Foundation\Application|\Illuminate\Http\Response
     */
    public function orderClose(Request $request, $tableId)
    {
        $table = Table::find($tableId);
        if (!$table) {
            return response('Order not found', 404);
        }
        if (!($order = Order::where("tableId", $tableId)->where("closedAt", null)->first())) {
            return response('Order not found', 404);
        }

        $order->closedAt = Carbon::now();
        $order->updatedAt = Carbon::now();
        $order->save();
        return response("Order closed successfully", 200);
    }
}
