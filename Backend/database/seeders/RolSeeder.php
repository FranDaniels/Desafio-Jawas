<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Rol::create([
            'nombre' => 'Administrador'
        ]);

        \App\Models\Rol::create([
            'nombre' => 'Colaborador'
        ]);

        \App\Models\Rol::create([
            'nombre' => 'Diseñador'
        ]);

        \App\Models\Rol::create([
            'nombre' => 'Clasificador'
        ]);
    }
}
