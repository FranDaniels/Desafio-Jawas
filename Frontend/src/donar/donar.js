import { donarLote } from "../http/donar.js";

var descripcion=document.getElementById('descripcion');
var fechaEntrega=document.getElementById('fechaEntrega');
var btnDonar=document.getElementById('btn-donar');
var msgText=document.getElementById("errores");

var ERfecha = /^(\d{4})(\/|-)(0[1-9]|1[0-2])\2([0-2][0-9]|3[0-1])\s([0-1][0-9]|2[0-3])(:)([0-5][0-9])(:)([0-5][0-9])$/;


fechaEntrega.setAttribute('maxlength','19')

fechaEntrega.addEventListener('click', function() {
    if (fechaEntrega.value.length==4) {
        fechaEntrega.value=fechaEntrega.value+'-'
    }
    if (fechaEntrega.value.length==7) {
        fechaEntrega.value=fechaEntrega.value+'-'
    }
    if (fechaEntrega.value.length==10) {
        fechaEntrega.value=fechaEntrega.value+' '
    }
    if (fechaEntrega.value.length==13) {
        fechaEntrega.value=fechaEntrega.value+':'
    }
    if (fechaEntrega.value.length==16) {
        fechaEntrega.value=fechaEntrega.value+':'
    }
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

btnDonar.addEventListener("click", async function(){
    var opcionEstado=document.getElementById("estado").value;
    var estado=false;

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
        console.log('no se ha podido cargar el estado')
    }
})

function cargarDatos(estado) {
    var datos={
        descripcion:descripcion.value,
        ubicacion:'Mi casa',
        estado:estado,
        fecha_entrega:fechaEntrega.value
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

