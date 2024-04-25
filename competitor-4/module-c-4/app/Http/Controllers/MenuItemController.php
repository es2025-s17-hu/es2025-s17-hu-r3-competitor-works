<?php

namespace App\Http\Controllers;

use App\Models\MenuCategory;
use App\Models\MenuItem;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MenuItemController extends Controller
{
    //
    public function index(Request $request)
    {
        return response()->json(MenuItem::all(), 200);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            "name" => 'required',
            "type" => 'required|in:FOOD,DRINK,OTHER',
            "menuCategoryId" => 'required',
            "price" => 'required',
        ], [
            'required' => 'One of the mandatory fields is missing',
            'in' => 'Value of the type field is invalid'
        ]);

        if (($category = MenuCategory::find($request->menuCategoryId)) == null) {
            return response('Menucard category with the given ID does not exist', 400);
        }

        $data["createdAt"] = Carbon::now();
        $data["updatedAt"] = Carbon::now();
        $menuItem = MenuItem::create($data);

        return response()->json($menuItem, 201);
    }

    public function update(Request $request, $id)
    {
        $menuItem = MenuItem::find($id);
        if (!$menuItem) {
            return response('Menu item not found', 404);
        }

        $data = $request->validate([
            "name" => 'required',
            "type" => 'required|in:FOOD,DRINK,OTHER',
            "menuCategoryId" => 'required',
            "price" => 'required',
        ], [
            'required' => 'One of the mandatory fields is missing',
            'in' => 'Value of the type field is invalid'
        ]);

        if (($category = MenuCategory::find($request->menuCategoryId)) == null) {
            return response('Menucard category with the given ID does not exist', 400);
        }

        $data["updatedAt"] = Carbon::now();
        $menuItem->update($data);

        return response()->json($menuItem, 200);
    }

    public function destroy(Request $request, $id)
    {
        $menuItem = MenuItem::find($id);
        if (!$menuItem) {
            return response('Menu item not found', 404);
        }

        $menuItem->delete();

        return response("Menu item deleted", 200);
    }
}
