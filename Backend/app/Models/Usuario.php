<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    public $timestamps = true;

    protected $fillable = [
        'name',
        'email',
        'password',
        'id_rol'
    ];
}
