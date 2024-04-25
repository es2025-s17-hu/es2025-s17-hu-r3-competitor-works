<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    use HasFactory;
    protected $table = 'MenuItem';
    protected $casts = ['price' => 'float'];
    const UPDATED_AT = 'updatedAt';
    const CREATED_AT = 'createdAt';
}
