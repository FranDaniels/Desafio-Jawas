import { crearUsuario } from "../http/registro.js";
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

botonRegistro.addEventListener("click",async function(){
  if (comprobarValidaciones(nombre,apellido,correo,pass,pass2)) {
          var datos=cargarDatos();
          await crearUsuario(datos).then(function(data){
            var error=document.getElementById("errores");
            error.innerHTML="";
            error.style.color="green";
            error.innerHTML="Usuario Creado";
          }).catch(function(error){
            var error=document.getElementById("errores");
            error.innerHTML="";
            error.style.color="red";
            error.innerHTML="Usuario no creado";
          });
          setTimeout(function(){
            // window.location.href = "../login"
          },5000)
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