<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function inicioSesion(Request $request)
    {
        if(Auth::attempt(['correo' => $request->correo, 'password' => $request->password])){
            $auth = Auth::user();
            //return $auth;
            $success['token'] =  $auth->createToken('LaravelSanctumAuth')->plainTextToken;
            $success['name'] =  $auth->name;

            return response()->json(["success"=>true,"data"=>$success, "message" => "User logged-in!"]);
        }
        else{
            return response()->json("Unauthorised",204);
        }
    }
}