<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Receta;
use App\Models\Joya;
use App\Models\Componente;

class RecetaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         $joya = Joya::where('nombre', 'Pulsera de placa base')->first();

         $componentes = $joya->componentes;
 
         foreach ($componentes as $componente) {
             Receta::create([
                 'id_joya' => $joya->id,
                 'id_componente' => $componente->id,
                 'cantidad' => 1,
             ]);
         }
 
         $otraJoya = Joya::where('nombre', 'Pendiente de disco duro')->first();
         $otroComponente = Componente::where('nombre', 'Tarjeta de video')->first();
         Receta::create([
             'id_joya' => $otraJoya->id,
             'id_componente' => $otroComponente->id,
             'cantidad' => 1,
         ]);
    }
}
