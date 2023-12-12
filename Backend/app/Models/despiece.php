<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
/**
 * @author Francisco Álvarez Bellón
 */
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
