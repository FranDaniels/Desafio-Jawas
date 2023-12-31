<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
/**
 * @author Francisco Álvarez Bellón
 */
class Lote extends Model
{
    use HasFactory;

    protected $table='lote';
    public $timestamps = true;

    protected $fillable = [
        'descripcion',
        'latitud',
        'longitud',
        'estado',
        'fecha_entrega'
    ];
}
