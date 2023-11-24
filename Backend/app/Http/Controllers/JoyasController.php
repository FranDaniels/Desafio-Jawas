<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class JoyasController extends Controller
{
    public function crearJoya(Request $request){
        $joya = new Joya;
    }
}
