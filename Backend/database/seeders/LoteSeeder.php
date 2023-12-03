<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Lote::create([
            'descripcion' => 'Lote 1',
            'ubicacion' => 'Calle Alcantara',
            'estado' => 'Entregado',
            'fecha_entrega' => '2023-12-01 12:01:27',
            'disponible' => '1',
            'id_usuario' => '3'
        ]);

        \App\Models\Lote::create([
            'descripcion' => 'Lote 2',
            'ubicacion' => 'Calle Carrera',
            'estado' => 'En camino',
            'fecha_entrega' => '2023-12-01 12:01:27',
            'disponible' => '1',
            'id_usuario' => '4'
        ]);

        \App\Models\Lote::create([
            'descripcion' => 'Lote 3',
            'ubicacion' => 'Calle Hermanos Herreros',
            'estado' => 'Entregado',
            'fecha_entrega' => '2023-12-01 12:01:27',
            'disponible' => '0',
            'id_usuario' => '1'
        ]);

        \App\Models\Lote::create([
            'descripcion' => 'Lote 3',
            'ubicacion' => 'Paseo San Gregorio',
            'estado' => 'En camino',
            'fecha_entrega' => '2023-12-01 12:01:27',
            'disponible' => '0',
            'id_usuario' => '2'
        ]);
    }
}
