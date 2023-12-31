<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
/**
 * @author Francisco Álvarez Bellón
 */
class lote_usuario extends Model
{
    use HasFactory;

    protected $table='lote_usuario';
    public $timestamps = true;

    protected $fillable = [
        'id_usuario',
        'id_lote'
    ];
}
