<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::create([
            'nombre' => 'Francisco',
            'apellido' => 'Alvarez',
            'correo' => 'francisco@gmail.com',
            'password' => 'admin123',
            'id_rol' => '1'
        ]);

        \App\Models\User::create([
            'nombre' => 'Marina',
            'apellido' => 'Laguna',
            'correo' => 'marina@gmail.com',
            'password' => 'admin123',
            'id_rol' => '2'
        ]);

        \App\Models\User::create([
            'nombre' => 'Badr',
            'apellido' => 'Hamidou',
            'correo' => 'badrhamidou@gmail.com',
            'password' => 'admin123',
            'id_rol' => '3'
        ]);

        \App\Models\User::create([
            'nombre' => 'Ines',
            'apellido' => 'Barrera',
            'correo' => 'nessi@gmail.com',
            'password' => 'admin123',
            'id_rol' => '4'
        ]);
    }
}
