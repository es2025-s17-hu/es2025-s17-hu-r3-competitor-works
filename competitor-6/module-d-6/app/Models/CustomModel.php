<?php

namespace App\Models;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class CustomModel extends Authenticatable
{
    use HasFactory;

    const UPDATED_AT = "updatedAt";
    const CREATED_AT =   "createdAt";

    public function getTable()
    {
        return class_basename($this);
    }
}
