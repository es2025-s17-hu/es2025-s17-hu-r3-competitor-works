<?php

namespace App\Http\Controllers;

use App\Models\MenuCategory;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class MenuCategoriesController extends Controller
{
    public function index()
    {
        $categories = MenuCategory::orderByDesc('priority')->get();
        return view('MenuCategories', [
           'categories' => $categories
        ]);
    }

    public static function delete(MenuCategory $menuCategory)
    {
        try{
            $menuCategory->delete();
        }catch(QueryException $e){
            return redirect('/menuCategories');
        }

        return redirect('/menuCategories');
    }
}
