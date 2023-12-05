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
            'id_lote' => 1,
            'id_componente' => 1,
            'cantidad_disponible' => 10,
        ]);

        \App\Models\Inventario::create([
            'id_lote' => 5,
            'id_componente' => 2,
            'cantidad_disponible' => 17,
        ]);

        \App\Models\Inventario::create([
            'id_lote' => 7,
            'id_componente' => 4,
            'cantidad_disponible' => 20,
        ]);
    }
}
