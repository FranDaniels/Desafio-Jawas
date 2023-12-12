import { addInventario, listarComponentes, listarLote, listarComponente, realizarDespiece } from "../http/clasificador.js"
import { includes, tieneElementosRepetidos } from "../utils/funciones.js";
import { cabecera, footer } from "../utils/componentes.js";

cabecera();
footer();
var h1=document.getElementById('h1');
var descripcion=document.getElementById('descripcion');
var ubicacion=document.getElementById('ubicacion');
var estado=document.getElementById('estado');
var btnAdd=document.getElementById('addComponente')
var btnClasificar=document.getElementById('clasificar')
var btnCancelar=document.getElementById('cancelar')

var componentesMostrados=[]
var tiposComponentes=[]
var cantidadComponentes=[]

var idLote=localStorage.getItem('idLote')
var idUsuario=localStorage.getItem('usuarioId')

await listarLote(idLote).then(function(data){
    var lote=data;
    var datos=cargarDatos(lote)
    cargarLote(datos)
})

await listarComponentes().then(function(data){
    var componentes=data;
    generarTablaComponentes(componentes)
})

function cargarDatos(lote){

    var datos={
        id:lote.mens[0].id,
        descripcion:lote.mens[0].descripcion,
        latitud:lote.mens[0].latitud,
        longitud:lote.mens[0].longitud,
        estado:lote.mens[0].estado
    }

    return datos;
}

function cargarLote(datos){
    h1.textContent='Lote:'+ ' '+datos.id
    descripcion.textContent=datos.descripcion
    ubicacion.textContent=datos.latitud,+datos.longitud
    estado.textContent=datos.estado
}

function generarTablaComponentes(componentes){
    const selectTable=document.getElementById('select')

    const select=document.createElement("select")
    select.setAttribute("class","form-select")
    select.setAttribute("style","width: 150px")
    select.setAttribute("id","selectComponente")

    for (let i = 0; i < componentes.length; i++) {

        let key=["tipo"]

        for (let j = 0; j < key.length; j++) {
            const option=document.createElement("option")
            
            option.setAttribute("value",i)

            option.textContent=componentes[i][key[j]]
            select.appendChild(option)
        }
        selectTable.appendChild(select)
    }
}

function generarFilaComponente(tipoComponente){
    const componenteBody=document.getElementById("tbody")
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");

    const tipo=document.createElement("input")
    tipo.setAttribute("class","form-control")
    tipo.setAttribute("disabled",true)
    tipo.setAttribute("style","width: 150px")
    tipo.setAttribute("id",tipoComponente)
    tipo.setAttribute("name","tipoComponentes")
    tipo.value=tipoComponente

    cell1.appendChild(tipo)
    row.appendChild(cell1)
   
    const cell2 = document.createElement("td");
    const cantidad=document.createElement("input")
    cantidad.setAttribute("class","form-control")
    cantidad.setAttribute("type","number")
    cantidad.setAttribute("id","cantidad"+tipoComponente)
    cantidad.setAttribute("name","cantidadComponentes")
    cantidad.setAttribute("style","width: 150px")

    cell2.appendChild(cantidad)
    row.appendChild(cell2)

    componenteBody.appendChild(row)
}

btnAdd.addEventListener("click",function(){
    try {
    var selectedOption=document.getElementById('selectComponente')
    var error=document.getElementById('errorClasificar')
    var i=0;
    var encontrado=false
    while (encontrado==false) {     
        if (selectedOption[i].selected) {
            if (includes(componentesMostrados,selectedOption[i].textContent)) {
                error.innerHTML="Ya has creado uno aumenta la cantidad del ya creado"
                error.style.color="red"
            }else{
                error.innerHTML=""
                encontrado=true
                var componenteTipo=selectedOption[i].textContent
                componentesMostrados.push(selectedOption[i].textContent)
                generarFilaComponente(componenteTipo)
            }
        } 
        i++   
    }
    } catch (error) {
        console.log('Esta duplicado')           
    }
})

btnClasificar.addEventListener("click", async function(){
    var tipos=document.getElementsByName('tipoComponentes')
    var cantidad=document.getElementsByName('cantidadComponentes')

    for (let i = 0; i < tipos.length; i++) {
        tiposComponentes.push(tipos[i].id)
    }

    for (let i = 0; i < cantidad.length; i++) {
        cantidadComponentes.push(cantidad[i].value)
    }

    for (let i = 0; i < cantidadComponentes.length; i++) {
        await listarComponente(tiposComponentes[i]).then(function(data){
            tiposComponentes[i]=data.mens[0].id
        
        })
        var datos={
            idLote:idLote,
            idUsuario:idUsuario,
            idComponente:tiposComponentes[i],
            cantidad:cantidadComponentes[i]
        }
        await realizarDespiece(datos).then(function(data){
            console.log('Despiece realizado')
        })
        await addInventario(datos).then(function(data){
            console.log('Datos guardados')
        })
    }

})

btnCancelar.addEventListener("click",function(){
    window.location.href="http://localhost:8888/lotesClasificador/loteClasificador.html"
})