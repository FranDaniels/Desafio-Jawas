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

botonRegistro.addEventListener("click", function(){
        if (comprobarValidaciones(nombre,apellido,correo,pass,pass2)) {
          var datos=cargarDatos();
          console.log('hola'+datos)
          crearUsuario(datos).then('Usuario creado');
        }
})

function cargarDatos(){
  var datos={
    nombre:nombre.value,
    apellido:apellido.value,
    correo:correo.value,
    password:pass.value
  }

  return datos;
}

async function crearUsuario(datos){   
  let bodyContent = JSON.stringify(
    {
        "nombre": datos.nombre,
        "apellido": datos.apellido,
        "correo": datos.correo,
        "password": datos.password,
    }
);  
console.log()
  let headersList = {
  "Content-Type": "application/json",
    };

  let response = await fetch("http://127.0.0.1:8000/api/registro", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

let data = await response.json();
return data;
}