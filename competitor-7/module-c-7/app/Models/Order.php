<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $table = 'Order';

    protected $guarded =[];

    public $timestamps = false;

    function orderItems()
    {
        return $this->hasMany(OrderItem::class, 'orderId');
    }
}
