import { cambiarDatos, cambiarPassword } from "../http/perfil.js";
import { comprobarPasswordPerfil, comprobarValidacionePerfil } from "../utils/validaciones.js";

var nombre=document.getElementById('nombre');
var apellido=document.getElementById('apellido')
var correo=document.getElementById('correo')
var password=document.getElementById('password')
let formularioDatos=document.getElementById("formularioDatos")
let formularioPassword=document.getElementById("formularioPassword")
let btnDatos=document.getElementById("btnDatos")
let btnPassword=document.getElementById("btnPassword")

console.log('hola')
formularioDatos.addEventListener('input', function(){
    btnDatos.removeAttribute("disabled",true)
})

formularioPassword.addEventListener('input',function(){
    btnPassword.removeAttribute("disabled",true)
})

btnDatos.addEventListener("click",function(){
    if ( comprobarValidacionePerfil(nombre,apellido,correo,password)) {
        var usuario=localStorage.getItem("user")
    //Cargaremos los datos del usuario en el login con un getItem
    //Actualizaremos los datos del local con los datos que nos han proporcionado

        if (usuario) {
            cambiarDatos(usuario)//Hay que realizar pruebas en la pantalla perfil
        }
    }
})

btnPassword.addEventListener("click",function(){
    if (comprobarPasswordPerfil(password)) {
        var usuario=localStorage.getItem("user")
        //Cargaremos los datos del usuario en el login con un getItem
        //Actualizaremos los datos del local con los datos que nos han proporcionado

        if (usuario) {
            cambiarPassword(usuario)//Hay que realizar pruebas en la pantalla perfil
        }
    }
})






