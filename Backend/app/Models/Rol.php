<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
/**
 * @author Francisco Álvarez Bellón
 */
class Rol extends Model
{
    use HasFactory;

    protected $table='rol';
    public $timestamps = true;

    protected $fillable = [
        'nombre'
    ];
}
