<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuItem extends CustomModel
{
    use HasFactory;

    protected  $guarded = [];

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
}

