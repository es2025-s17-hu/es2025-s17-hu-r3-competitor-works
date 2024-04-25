<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = 'Order';
    const UPDATED_AT = 'updatedAt';
    const CREATED_AT = 'createdAt';

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class, 'orderId');
    }
}
