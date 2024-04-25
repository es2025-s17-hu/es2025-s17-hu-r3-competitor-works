<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'createdAt',
        'menuCategoryId',
        'price',
        'type',
        'updatedAt'
    ];

    public $timestamps = false;

    public $table = 'MenuItem';
}
