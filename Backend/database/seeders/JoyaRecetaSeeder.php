<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

/**
 * @author Marina Laguna
 */
class JoyaRecetaSeeder extends Seeder
{
    public function run()
    {
        \App\Models\Joya_receta::create([
            'id_joya' => 1,
            'id_receta' => 3,
        ]);
    }
}