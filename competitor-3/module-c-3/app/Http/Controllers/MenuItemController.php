<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMenuItemRequest;
use App\Http\Requests\UpdateMenuItemRequest;
use App\Models\MenuItem;
use Illuminate\Http\Request;

class MenuItemController extends Controller
{
    /**
     * Return all of it
     */
    public function index()
    {
        return MenuItem::all();
    }

    /**
     * Create a new menu item
     */
    public function store(StoreMenuItemRequest $request)
    {
        // Create the MenuItem and return
        $menuItem = MenuItem::create($request->validated());
        return response()->json($menuItem, 201);
    }

    /**
     * Update a menu item
     */
    public function update(UpdateMenuItemRequest $request, MenuItem $menuItem)
    {
        // Update and return
        $menuItem->update($request->validated());
        return $menuItem;
    }

    /**
     * Destroy a menu item
     */
    public function destroy(MenuItem $menuItem)
    {
        // Update and return
        $menuItem->delete();
        return response('Menu item deleted');
    }
}
