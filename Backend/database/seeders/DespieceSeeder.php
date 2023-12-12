<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

/**
 * @author Marina Laguna
 */
class DespieceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Despiece::create([
            'id_lote' => 4,
            'id_usuario_clasificador' => 4,
            'id_componente' => 7,
            'cantidad' => 3,
        ]);
    }
}
