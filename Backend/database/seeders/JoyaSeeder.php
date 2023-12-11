<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Joya;

/**
 * @author Marina Laguna
 */
class JoyaSeeder extends Seeder
{
    public function run()
    {
        Joya::create([  
            'nombre' => 'Pulsera de placa base',
            'descripcion' => 'Una elegante pulsera de cuero con detalles de placa base.',
            'imagen' => 'pulseras_placa_base.jpg',
            'id_usuario' => 1,
        ]);

        Joya::create([
            'nombre' => 'Pin de placa base',
            'descripcion' => 'Un delicado pendiente de disco duro y un osito en su centro.',
            'imagen' => 'pin_placa_base_rojo.jpg',
            'id_usuario' => 3,
        ]);

        Joya::create([
            'nombre' => 'Collar Osito', 
            'descripcion' => 'Un hermoso collar con un disco duro y un hermoso osito en su interior',
            'imagen' => 'collar_osito.jpg',
            'id_usuario' => 3,
        ]);
    }
}