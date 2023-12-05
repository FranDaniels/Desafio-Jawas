<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

/**
 * @author Marina Laguna
 */
class ComponenteLoteSeeder extends Seeder
{
    public function run()
    {
        \App\Models\Componente_lote::create([
            'id_componente' => 1,
            'id_lote' => 3,
        ]);
    }
}