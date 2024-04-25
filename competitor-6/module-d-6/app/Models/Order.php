<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends CustomModel
{
    use HasFactory;

    protected $guarded = [];

    public function table()
    {
        return $this->belongsTo(Table::class);
    }

    public function orderItems(){
        return $this->hasMany(OrderItem::class);
    }
}
