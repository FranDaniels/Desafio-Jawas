import { actualizarImg, cambiarDatos, cambiarPassword, obtenerUsuario, subirImagenS3 } from "../http/perfil.js";
import { comprobarPasswordPerfil, comprobarValidacionePerfil } from "../utils/validaciones.js";

var nombre=document.getElementById('nombre');
var apellido=document.getElementById('apellido')
var correo=document.getElementById('correo')
var password=document.getElementById('password')
let formularioDatos=document.getElementById("formularioDatos")
let formularioPassword=document.getElementById("formularioPassword")
let btnPassword=document.getElementById("btnPassword")
let btnDatos=document.getElementById("btnDatos")
let btnSubir=document.getElementById("btnSubir")
let img=document.getElementById("imgSubida")

var idUsuario=localStorage.getItem("usuarioId")

await obtenerUsuario(idUsuario).then(function(data){
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
    var datos=cargarDatosCambiados(idUsuario)
    await cambiarDatos(datos).then(function(data){
    })
    }
})

btnPassword.addEventListener("click",async function(event){
  event.preventDefault()
    if (comprobarPasswordPerfil(password)) {
        var datos=cargarPasswordCambiada(idUsuario)
        await cambiarPassword(datos).then(function(data){
        })

    }
})

function cargarDatos(user){
    nombre.value=user.nombre
    apellido.value=user.apellido
    correo.value=user.correo
    img.src=user.img
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

function subirImagen(){
    var inputImagen=document.getElementById("inputImage")

    var bodyImage=new FormData()

    bodyImage.append("image",inputImagen.files[0])

    subirImagenS3(bodyImage).then(function(image){
        let bodyContent=JSON.stringify({
            "id":idUsuario,
            "image":image.url
        })

        actualizarImg(bodyContent).then(function(){
        })
    }) 
}

btnSubir.addEventListener("click",function(){
    subirImagen()
})