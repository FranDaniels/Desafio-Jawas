import { cambiarDatos, cambiarPassword, obtenerUsuario } from "../http/perfil.js";
import { comprobarPasswordPerfil, comprobarValidacionePerfil } from "../utils/validaciones.js";

var nombre=document.getElementById('nombre');
var apellido=document.getElementById('apellido')
var correo=document.getElementById('correo')
var password=document.getElementById('password')
let formularioDatos=document.getElementById("formularioDatos")
let formularioPassword=document.getElementById("formularioPassword")
let btnPassword=document.getElementById("btnPassword")
let btnDatos=document.getElementById("btnDatos")

var id="1";

await obtenerUsuario(id).then(function(data){
    cargarDatos(data)
  }).catch(function(error){
    return error
  });

formularioDatos.addEventListener('input', function(){
    btnDatos.removeAttribute("disabled")
})

formularioPassword.addEventListener('input',function(){
    btnPassword.removeAttribute("disabled",true)
})

btnDatos.addEventListener("click", async function(event){
  event.preventDefault()

    if ( comprobarValidacionePerfil(nombre,apellido,correo,password)) {
    var datos=cargarDatosCambiados(id)
    await cambiarDatos(datos).then(function(data){
    })
    }
})

btnPassword.addEventListener("click",async function(event){
  event.preventDefault()
    if (comprobarPasswordPerfil(password)) {
        var datos=cargarPasswordCambiada(id)
        await cambiarPassword(datos).then(function(data){
        })

    }
})

function cargarDatos(user){
    nombre.value=user.nombre
    apellido.value=user.apellido
    correo.value=user.correo
}

function cargarDatosCambiados(id) {
    var datos={
        id:id,
        nombre:nombre.value,
        apellido:apellido.value,
        correo:correo.value
    }

    return datos
}

function cargarPasswordCambiada(id){
    var datos={
        id:id,
        password:password.value
    }

    return datos
}