import { listarLote } from "../http/clasificador.js"

var h1=document.getElementById('h1');
var descripcion=document.getElementById('descripcion');
var ubicacion=document.getElementById('ubicacion');
var estado=document.getElementById('estado');

var idLote=localStorage.getItem('idLote')
console.log(idLote)

await listarLote(idLote).then(function(data){
    var lote=data;
    var datos=cargarDatos(lote)
    cargarLote(datos)
})

function cargarDatos(lote){

    var datos={
        id:lote.mens[0].id,
        descripcion:lote.mens[0].descripcion,
        ubicacion:lote.mens[0].ubicacion,
        estado:lote.mens[0].estado
    }

    return datos;
}

function cargarLote(datos){
    h1.textContent='Lote:'+ ' '+datos.id
    descripcion.textContent=datos.descripcion
    ubicacion.textContent=datos.ubicacion
    estado.textContent=datos.estado
}

function generarTablaComponentes(){
    
}
