<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected $guarded = [];

    public $timestamps = false;

    protected $table = "OrderItem";

    public function menuItem()
    {
        return $this->hasOne(MenuItem::class, 'id', 'menuItemId');
    }
}
