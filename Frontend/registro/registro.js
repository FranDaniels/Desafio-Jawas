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

botonRegistro.addEventListener("click", async function(){
        if (comprobarValidaciones(nombre,apellido,correo,pass,pass2)) {
          var datos=cargarDatos();
          console.log('hola'+datos)
          await crearUsuario(datos);
        }
})

function cargarDatos(){
  var datos={
    nombre:nombre.value,
    apellido:apellido.value,
    correo:correo.value,
    password:pass.value
  }

  console.log(datos)
  return datos;
}

async function crearUsuario(datos){   
  console.log(datos)
  let body = JSON.stringify(
    {
        nombre: datos[0],
        apellido: datos[1],
        correo: datos[2],
        password: datos[3],
    }
);  
console.log(body)
       let response = await fetch("http://127.0.0.1:8000/api/registro", { 
         method: "POST",
         headers: {
          "Content-Type": "application/json"
          },
         body:body
       });
       
       let data = await response.text();
       console.log(data);
}