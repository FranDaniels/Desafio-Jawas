// @author Francisco Álvarez Bellón

import { cargarComponentes, crearComponentess } from "../http/admin.js";
import { empty } from "../utils/funciones.js";
import { seleccionCabecera, footer } from "../utils/componentes.js";

seleccionCabecera();
let btnComponenteNuevo=document.getElementById("crearComponenteNuevo")

var token=sessionStorage.getItem("token")

var tokenSinComillas = token.replace(/^"(.*)"$/, '$1');

await cargarComponentes(tokenSinComillas).then(function(data){
    var componentes=data;
    generarTablaComponentes(componentes)
})

function generarTablaComponentes(componentes){
    const bodyTabla=document.getElementById("tbody")

    for (let i = 0; i < componentes.length; i++) {
        const row=document.createElement("tr")

        let key=["nombre","tipo","descripcion"]
        
        for (let j = 0; j < key.length; j++) {
            const cell=document.createElement("td")

            cell.setAttribute("scope","row")

            cell.textContent=componentes[i][key[j]]

            row.appendChild(cell)
        }
        bodyTabla.appendChild(row)
    }
}

btnComponenteNuevo.addEventListener("click",function(){
    var nombre=document.getElementById("nombre")
    var tipo=document.getElementById("tipo")
    var descripcion=document.getElementById("descripcion")
    let btnCrearComponente=document.getElementById("crearComponente")
    
    btnCrearComponente.addEventListener("click", async function(){
        var datos=cargarDatos(nombre,tipo,descripcion)
        await crearComponentess(datos,tokenSinComillas).then(function(){
            setTimeout(function(){
            window.location.reload()
            },5000)
        })
    })
})

function cargarDatos(nombre,tipo,descripcion){
    debugger
    var errores=[]
    var datos;
    var errorNombre=document.getElementById("errorNombre")
    var errorTipo=document.getElementById("errorTipo")
    var errorDescripcion=document.getElementById("errorDescripcion")
    errorNombre.textContent=""
    errorTipo.textContent=""
    errorDescripcion.textContent=""

    if (empty(nombre.value)) {
        errorNombre.textContent="Nombre se encuentra vacio"
        errorNombre.style.color="red"
        errores.push('error')
    }

    if (empty(tipo.value)) {
        errorTipo.textContent="Tipo se encuentra vacio"
        errorTipo.style.color="red"
        errores.push('error')
    }

    if (empty(descripcion.value)) {
        errorDescripcion.textContent="Descripcion se encuentra vacio"
        errorDescripcion.style.color="red"
        errores.push('error')
    }

    if (errores.length==0) {
        var datos={
            nombre:nombre.value,
            tipo:tipo.value,
            descripcion:descripcion.value
        }
    }

    return datos
}