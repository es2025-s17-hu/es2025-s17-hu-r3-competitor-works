<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Table extends CustomModel
{
    use HasFactory;

    public function orders(){
        return $this->hasMany(Order::class);
    }
}
