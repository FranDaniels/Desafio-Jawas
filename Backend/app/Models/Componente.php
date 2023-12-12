<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Componente extends Model
{
    /**
 * @author Francisco Álvarez Bellón
 */
    use HasFactory;

    protected $table='componente';
    public $timestamps = true;

    protected $fillable = [
        'nombre',
        'tipo',
        'descripcion'
    ];
}
