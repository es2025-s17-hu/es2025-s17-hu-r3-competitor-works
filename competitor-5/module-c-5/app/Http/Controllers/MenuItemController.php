<?php

namespace App\Http\Controllers;

use App\Models\MenuCategory;
use App\Models\MenuItem;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MenuItemController extends Controller
{
    public function index()
    {
        $items = MenuItem::all();

        return response()->json($items);
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'type' => 'required',
            'menuCategoryId' => 'required|integer',
            'price' => 'required|integer'
        ]);

        if($validator->fails()) {
            return response('One of the mandatory fields is missing', 400);
        }

        if($request->type == 'FOOD' || $request->type == 'DRINK' || $request->type == 'OTHER') {

        } else {
            return response('Value of the type field is invalid', 400);
        }

        $menuCategory = MenuCategory::where('id', $request->menuCategoryId)->exists();
        if(!$menuCategory) {
            return response('Menucard category with the given ID does not exist', 400);
        }

        $menuItem = MenuItem::create([
            'name' => $request->name,
            'type' => $request->type,
            'menuCategoryId' => $request->menuCategoryId,
            'price' => $request->price,
            'updatedAt' => now(),
            'createdAt' => now()
        ]);

        return response()->json($menuItem, 201);
    }

    public function update(string $id, Request $request)
    {
        $menuItem = MenuItem::where('id', $id)->first();
        if(!$menuItem) {
            return response('Menu item not found', 404);
        }

        $menuItem->update($request->all());

        return response()->json($menuItem, 201);
    }

    public function destroy(string $id)
    {
        $menuItem = MenuItem::where('id', $id)->first();
        if(!$menuItem) {
            return response('Menu item not found', 404);
        }

        OrderItem::where('menuItemId', $menuItem->id)->delete();

        $menuItem->delete();

        return response('Menu item deleted', 200);
    }
}
