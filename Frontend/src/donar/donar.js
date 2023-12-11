import './donar.css';
import { donarLote } from "../http/donar.js";
import { comprobarPantallaDonar } from "../utils/validaciones.js";

var descripcion=document.getElementById('descripcion');
var ubicacion=document.getElementById('mapa')
var fechaEntrega=document.getElementById('fechaEntrega');
var btnDonar=document.getElementById('btn-donar');
var msgText=document.getElementById("errores");

var ERfecha = /^(\d{4})(\/|-)(0[1-9]|1[0-2])\2([0-2][0-9]|3[0-1])\s([0-1][0-9]|2[0-3])(:)([0-5][0-9])(:)([0-5][0-9])$/;


fechaEntrega.setAttribute('maxlength','19')

fechaEntrega.addEventListener('click', function() {
    if (fechaEntrega.value.length === 19) {
        if (ERfecha.test(fechaEntrega.value)) {
            msgText.style.color='green'
            msgText.textContent=('La fecha es correcta')
        }else{
            msgText.style.color='red'
            msgText.textContent=('La fecha es incorrecta')
        } 
    }
});

btnDonar.addEventListener("click", async function(event){
    event.preventDefault()
    var opcionEstado=document.getElementById("estado").value;
    var estado=false;
if (comprobarPantallaDonar()) {
    if (estado=cargarOpcion(opcionEstado)) {
        var datos=cargarDatos(estado);
        await donarLote(datos).then(function(data){
        msgText.innerHTML="";
        msgText.style.color="green";
        msgText.innerHTML="Lote donado";
       }).catch(function(error){
        msgText.innerHTML="";
        msgText.style.color="red";
        msgText.innerHTML="Error al donar el lote";
       })
    }else{
        console.log('No se ha podido cargar el estado')
    }
}
})

function cargarDatos(estado) {
    var idUsuario=localStorage.getItem("usuarioId")
console.log(idUsuario)
    var datos={
        descripcion:descripcion.value,
        ubicacion:'Mi casa',
        estado:estado,
        fecha_entrega:fechaEntrega.value,
        disponible:"1",
        id_usuario:idUsuario
    }
    
    return datos;
}

function cargarOpcion(opcionEstado) {
    var optionCamino=document.getElementById('optionCamino');
    var optionTienda=document.getElementById('optionTienda');

    var resultado=false;

    if (opcionEstado==="1") {
        resultado=optionCamino.textContent
    }else{
        if (opcionEstado==="2") {
            resultado=optionTienda.textContent
        }
    }
    return resultado;
}

