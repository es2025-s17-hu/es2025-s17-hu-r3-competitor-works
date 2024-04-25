<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $table = "MenuItem";

    public $timestamps = false;

    public function category()
    {
        return $this->belongsTo(MenuCategory::class, 'menuCategoryId');
    }
}
