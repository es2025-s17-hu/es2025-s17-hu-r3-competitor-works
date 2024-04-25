<?php

namespace App\Http\Controllers;

use App\Models\MenuCategory;
use App\Models\MenuItem;
use Illuminate\Http\Request;

class MenuItemController extends Controller
{
    public static function delete(MenuItem $menuItem)
    {
        $menuItem->delete();
        return redirect('/menuItems');
    }

    public function index(Request $request)
    {
        $menuItems = MenuItem::orderBy('menuCategoryId')->get();
        $menuCategories = MenuCategory::all();
        $menuCategoryId = $request->query->get('menuCategoryId');

        if($menuCategoryId != null){
            $menuItems = MenuItem::where('menuCategoryId', $menuCategoryId)->get();
            $selectedCategory = MenuCategory::where('id', $menuCategoryId)->first();
            return view('MenuItems', [
                'menuItems' => $menuItems,
                'menuCategories' => $menuCategories,
                'selectedCategory' => $selectedCategory
            ]);
        }else{
            return view('MenuItems', [
                'menuItems' => $menuItems,
                'menuCategories' => $menuCategories,
                'selectedCategory' => null
            ]);
        }


    }
}
