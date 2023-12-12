<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receta extends Model
{
    use HasFactory;

    protected $table = 'receta';
    
    protected $fillable = [
        'nombre',
        'cantidad',
        'id_joya',
        'id_componente'
    ];

    protected $hidden = [
        'id'
    ];
}
