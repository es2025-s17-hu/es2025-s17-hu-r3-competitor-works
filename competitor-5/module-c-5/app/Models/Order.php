<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'tableId',
        'updatedAt',
        'createdAt',
        'closedAt'
    ];

    public $timestamps = false;
    public $table = 'Order';
}
