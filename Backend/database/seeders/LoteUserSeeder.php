<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LoteUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\lote_usuario::create([
            'id_usuario' => '1',
            'id_lote' => '3'
        ]);

        \App\Models\lote_usuario::create([
            'id_usuario' => '2',
            'id_lote' => '4'
        ]);
    }
}
