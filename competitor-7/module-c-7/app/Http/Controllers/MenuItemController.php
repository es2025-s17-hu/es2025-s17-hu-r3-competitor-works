<?php

namespace App\Http\Controllers;

use App\Models\MenuItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use function MongoDB\Driver\Monitoring\removeSubscriber;

class MenuItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $menus = MenuItem::get(['name', 'type', 'menuCategoryId', 'price', 'id', 'createdAt', 'updatedAt']);

        return response(
            $menus
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
           'name' => 'required',
           'type' => 'required|in:FOOD, DRINK, OTHER',
           'menuCategoryId' => 'required|exists:MenuCategory,id',
           'price' => 'required',
        ]);

        if ($validator->fails()){
            return response('If one of the mandatory fields (name, type, menuCategoryId:, price) is missing or if the value of the type is invalid or if the menuCategory with the given ID does not exist.',400);
        }

        $menu = MenuItem::create([
           'name' => $request->name,
           'type' => $request->type,
           'menuCategoryId' => $request->menuCategoryId,
           'price' => $request->price,
           'updatedAt' => new \DateTime(),
           'createdAt' => new \DateTime(),
        ]);

        $menu = MenuItem::find($menu->id);

        return response($menu,201);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $menuItem = MenuItem::find($id);
        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'type' => 'required|in:FOOD, DRINK, OTHER',
            'menuCategoryId' => 'required|exists:menuCategory,id',
            'price' => 'required',
        ]);

        if ($validator->fails()){
            return response('If one of the mandatory fields (name, type, menuCategoryId:, price) is missing or if the value of the type is invalid or if the menuCategory with the given ID does not exist.',400);
        }

        $menuItem->update([
            'name' => $request->name,
            'type' => $request->type,
            'menuCategoryId' => $request->menuCategoryId,
            'price' => $request->price
        ]);

        return response([
            'Menu category deleted.'
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MenuItem $menuItem)
    {
        $menuItem->delete();

        return response(null, 200);
    }
}
