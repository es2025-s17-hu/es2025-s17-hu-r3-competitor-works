<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    public $table = 'OrderItem';

    public $timestamps = false;

    protected $fillable = [
        'orderId',
        'menuItemId',
        'quantity',
        'createdAt',
        'updatedAt'
    ];
}
