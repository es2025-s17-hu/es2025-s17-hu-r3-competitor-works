<?php

namespace App\Http\Controllers;

use App\Models\MenuCategory;
use Illuminate\Http\Request;

class MenuCategoryController extends Controller
{
    //

    public function index(Request $request)
    {
        return response()->json(MenuCategory::orderBy("priority")->get(), 200);
    }
}
