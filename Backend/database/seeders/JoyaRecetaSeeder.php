<?php

use Illuminate\Database\Seeder;
use App\Models\Joya_receta;
use App\Models\Joya;
use App\Models\Receta;

class JoyaRecetaSeeder extends Seeder
{
    public function run()
    {
        $joya = Joya::find(1);

        $receta = Receta::find(1);

        Joya_receta::create([
            'id_joya' => $joya->id,
            'id_receta' => $receta->id,
        ]);
    }
}