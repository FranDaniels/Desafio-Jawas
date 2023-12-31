<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

/**
 * @author Marina Laguna
 */
class Joya extends Model
{
    use HasFactory;

    protected $table = 'joya';

    protected $fillable = [
        'nombre',
        'descripcion',
        'imagen',
        'id_usuario'
    ];

    protected $hidden = [
        'id'
    ];
}
