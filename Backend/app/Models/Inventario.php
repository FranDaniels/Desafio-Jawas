<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventario extends Model
{
    use HasFactory;

    protected $table='inventario';
    public $timestamps = true;

    protected $fillable = [
        'id_lote',
        'id_componente',
        'cantidad_disponible'
    ];
}
