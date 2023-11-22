import { comprobarValidaciones } from "../utils/validaciones.js";

let nombre=document.getElementById("nombre");
let apellido=document.getElementById("apellido");
let correo=document.getElementById("correo");
let pass=document.getElementById("password");
let pass2=document.getElementById("confirmPassword");
let botonRegistro=document.getElementById("btn-registrar");
let formulario=document.getElementById("formularioRegistro");

formulario.addEventListener("input",function(){
    botonRegistro.removeAttribute("disabled",true);
})

botonRegistro.addEventListener("click",function(){
        if (comprobarValidaciones(nombre,apellido,correo,pass,pass2)) {
        }
})

async function crearUsuario(){     
       let response = await fetch("http://127.0.0.1:8000/api/registro", { 
         method: "POST",
         headers: headersList
       });
       
       let data = await response.text();
       console.log(data);
}