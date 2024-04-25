<?php

namespace App\Http\Controllers;

use App\Models\MenuCategory;
use Illuminate\Http\Request;

class MenuCategoryController extends Controller
{
    /**
     * Returns all the menu categories
     */
    public function index()
    {
        return MenuCategory::orderBy('priority')->get();
    }
}
