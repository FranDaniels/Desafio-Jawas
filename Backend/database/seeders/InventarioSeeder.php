<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InventarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Inventario::create([
            'id_usuario' => 1,
            'id_componente' => 1,
            'cantidad_disponible' => 10,
        ]);

        \App\Models\Inventario::create([
            'id_usuario' => 2,
            'id_componente' => 2,
            'cantidad_disponible' => 5,
        ]);

    }
}
