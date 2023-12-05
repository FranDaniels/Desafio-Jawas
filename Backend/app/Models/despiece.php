<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class despiece extends Model
{
    use HasFactory;

    protected $table='Despiece';
    public $timestamps = true;

    protected $fillable = [
        'id_componente',
        'cantidad'
    ];
}
