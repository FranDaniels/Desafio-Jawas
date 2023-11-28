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
    
    }
})

btnPassword.addEventListener("click",function(){
    if (comprobarPasswordPerfil(password)) {
        
    }
})






