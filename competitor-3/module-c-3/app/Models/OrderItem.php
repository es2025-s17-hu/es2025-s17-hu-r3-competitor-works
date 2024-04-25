<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;
    protected $table = 'OrderItem';
    const UPDATED_AT = 'updatedAt';
    const CREATED_AT = 'createdAt';

    public function order()
    {
        return $this->belongsTo(Order::class, 'orderId');
    }

    public function menuItem()
    {
        return $this->belongsTo(MenuItem::class, 'menuItemId');
    }
}
