// @author Francisco Álvarez Bellón

import { donarLote } from "../http/donar.js";
import { comprobarPantallaDonar } from "../utils/validaciones.js";
import { seleccionCabecera, footer } from "../utils/componentes.js";

seleccionCabecera();
var descripcion=document.getElementById('descripcion');
var btnDonar=document.getElementById('btn-donar');
var msgText=document.getElementById("errores");

btnDonar.addEventListener("click", async function(event){
    event.preventDefault()
    console.log('hola')
if (comprobarPantallaDonar()) {
        var datos=cargarDatos();
        console.log('entro')
        await donarLote(datos).then(function(data){
        console.log('bien')
        msgText.innerHTML="";
        msgText.style.color="green";
        msgText.innerHTML="Lote donado";
       }).catch(function(error){
        console.log('mal')
        msgText.innerHTML="";
        msgText.style.color="red";
        msgText.innerHTML="Error al donar el lote";
       })
}
})

function cargarDatos() {
    var idUsuario=localStorage.getItem("usuarioId")
    var latitud=localStorage.getItem("latitud")
    var longitud=localStorage.getItem("longitud")
    var datos={
        descripcion:descripcion.value,
        latitud:latitud,
        longitud:longitud,
        id_usuario:idUsuario
    }
    
    return datos;
}

