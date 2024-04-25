<?php

namespace App\Http\Controllers;

use App\Models\MenuItem;
use App\Models\OrderItem;
use Illuminate\Http\Request;

class StatController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $orderItems = OrderItem::all();

        // Get the total revenue
        $totalRevenue = 0;
        foreach ($orderItems as $item) {
            $totalRevenue += $item->quantity * $item->menuItem->price;
        }

        // Get the count of order item
        $countOfOrderItem = collect([]);
        foreach ($orderItems as $item) {
            $key = $item->menuItem->id;
            if ($countOfOrderItem->has($key)) {
                $countOfOrderItem[$key] += $item->quantity;
            } else {
                $countOfOrderItem[$key] = $item->quantity;
            }
        }

        // Get the final array
        $countOfOrderItemFinal = collect([]);
        foreach ($countOfOrderItem as $menuItemId => $count) {
            $countOfOrderItemFinal->push([
                'menuItemId' => $menuItemId,
                'menuItemName' => MenuItem::find($menuItemId)->name,
                'count' => $count
            ]);
        }

        // Return the response
        return response()->json([
            'totalRevenue' => $totalRevenue,
            'countOfOrderItem' => $countOfOrderItemFinal
        ]);
    }
}
