<?php

namespace App\Http\Controllers;

use App\Models\MenuCategory;
use Illuminate\Http\Request;

class MenuCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $menus = MenuCategory::get(['name', 'priority', 'id', 'createdAt', 'updatedAt']);

        return response(
           $menus
        );
    }
}
