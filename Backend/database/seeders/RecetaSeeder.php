<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

/**
 * @author Marina Laguna
 */
class RecetaSeeder extends Seeder
{
    public function run()
    {
        \App\Models\Receta::create([
            'id_joya' => 1,
            'id_componente' => 1,
            'cantidad' => 3,
        ]);

        \App\Models\Receta::create([
            'id_joya' => 2,
            'id_componente' => 2,
            'cantidad' => 2,
        ]);

        \App\Models\Receta::create([
            'id_joya' => 3,
            'id_componente' => 4,
            'cantidad' => 5,
        ]);
    }
}