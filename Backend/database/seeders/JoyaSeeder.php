<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

/**
 * @author Marina Laguna
 */
class JoyaSeeder extends Seeder
{
    public function run()
    {
        \App\Models\Joya::create([
            'nombre' => 'Pulsera de placa base',
            'descripcion' => 'Una elegante pulsera de cuero con detalles de placa base.',
            'id_usuario' => 1,
        ]);

        \App\Models\Joya::create([
            'nombre' => 'Pendiente Osito',
            'descripcion' => 'Un delicado pendiente de disco duro y un osito en su centro.',
            'id_usuario' => 3,
        ]);

        \App\Models\Joya::create([
            'nombre' => 'Collar de RAM', 
            'descripcion' => 'Un hermoso collar con detalles de una tarjeta RAM',
            'id_usuario' => 3,
        ]);

        \App\Models\JOya::create([
            'nombre' => 'Anillo de GPU',
            'descripcion' => 'Delicado anillo con pequeños detalles de una GPU',
            'id_usuario' => 2,
        ]);

        \App\Models\Joya::create([
            'nombre' => 'Pulsera de SSD',
            'descripcion' => 'Elegante pulsera de acero, cuero y detalles de una SSD',
            'id_usuario' => 1,
        ]);
    }
}