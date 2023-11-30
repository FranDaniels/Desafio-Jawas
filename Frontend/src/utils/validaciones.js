import { cleanValue, comprobarLongitudValores, comprobarValores, empty } from "./funciones.js";

let ERNombre=/^[a-zA-Z-\s]{3,20}$/;
let ERApellido=/^[a-zA-Z-\s]{2,30}$/;
let ERCorreo=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let ERPassword=/^[a-zA-Z0-9\-.*#$]{6,12}$/;

var error=document.getElementById("errores");
let validacionCorrecta=[];
let validacionIncorrecta=[];

let errores=[
    "El campo nombre se encuentra vacio",
    "El campo apellido se encuentra vacio",
    "El campo correo se encuentra vacio",
    "El campo contraseña se encuentra vacio",
    "El nombre debe tener entre 3 y 20 caracteres",
    "El apellido debe tener entre 2 y 30 caracteres",
    "El correo electrónico no cumple con los requisitos para ser un correo electrónico <br> ejemplo: usuario@foo.tld",
    "La contraseña debe tener entre 6 y 12 caracteres y puede contener los siguientes caracteres especiales: *, #, $"
]

export function comprobarNombre(nombre){
    nombre.style.borderColor="";
    if (empty(nombre.value)) {
        nombre.style.borderColor="red";
        validacionIncorrecta.push(errores[0])
    }else{
        if (ERNombre.test(nombre.value)) {
            
        }else{
            nombre.style.borderColor="red";
            validacionIncorrecta.push(errores[4])
            cleanValue(nombre);
        }
    }
    validacionCorrecta.push(nombre.value);

    var rtnArray=[validacionCorrecta,validacionIncorrecta]
    
    return rtnArray;
}

export function comprobarApellido(apellido){
    apellido.style.borderColor="";
    if (empty(apellido.value)) {
        apellido.style.borderColor="red";
        validacionIncorrecta.push(errores[1])
    }else{
        if (ERApellido.test(apellido.value)) {

        }else{
            apellido.style.borderColor="red";
            validacionIncorrecta.push(errores[5])
            cleanValue(apellido);
        }
    }
    validacionCorrecta.push(apellido.value);
    
    var rtnArray=[validacionCorrecta,validacionIncorrecta]
    
    return rtnArray;
}

export function comprobarCorreo(correo){
    correo.style.borderColor="";
    if (empty(correo.value)) {
        correo.style.borderColor="red";
        validacionIncorrecta.push(errores[2])
    }else{
        if (ERCorreo.test(correo.value)) {
            
        }else{
            correo.style.borderColor="red";
            validacionIncorrecta.push(errores[6])
            cleanValue(correo);
        }
    }
    validacionCorrecta.push(correo.value);
    
    var rtnArray=[validacionCorrecta,validacionIncorrecta]
    
    return rtnArray;
}

export function comprobarPassword(password){
    password.style.borderColor="";
    if (empty(password.value)) {
        password.style.borderColor="red";
        validacionIncorrecta.push(errores[3])
    }else{
        if (ERPassword.test(password.value)) {
            
        }else{
            password.style.borderColor="red";
            validacionIncorrecta.push(errores[7])
            cleanValue(password);
        }
    }
    validacionCorrecta.push(password.value);
    
    var rtnArray=[validacionCorrecta,validacionIncorrecta]
    
    return rtnArray;
}

export function comprobarValidaciones(nombre,apellido,correo,password,password2){
    var esValido=false;
    validacionCorrecta=[];
    validacionIncorrecta=[];
    comprobarNombre(nombre);
    comprobarApellido(apellido);
    comprobarCorreo(correo);
    comprobarPassword(password);
    comprobarPassword(password2);
    
    if (comprobarLongitudValores(password,password2)) {
        if (comprobarValores(password,password2)) {
            if (validacionIncorrecta.length>0) {

            }else{
                esValido=true
            }
        }else{
            validacionIncorrecta.push('Las contraseñas no coinciden')
            error.innerHTML="";
            error.style.color="red";
            console.log(validacionIncorrecta)
            error.innerHTML=mensajesDeError(validacionIncorrecta);
        }
    }else{
        validacionIncorrecta.push('Las contraseñas no coinciden')
        error.innerHTML="";
        error.style.color="red";
        console.log(validacionIncorrecta)
        error.innerHTML=mensajesDeError(validacionIncorrecta);
    }
    return esValido;
}

export function comprobarValidacionePerfil(nombre,apellido,correo){
    var esValido=false;
    validacionCorrecta=[];
    validacionIncorrecta=[];
    comprobarNombre(nombre)
    comprobarApellido(apellido)
    comprobarCorreo(correo)
    
    if (validacionIncorrecta.length>0) {
        var error=document.getElementById("errores");
        console.log('adios')
        error.innerHTML="";
        error.style.color="red";
        console.log(validacionIncorrecta)
        error.innerHTML=mensajesDeError(validacionIncorrecta);
    }else{
        var error=document.getElementById("errores");
        console.log('hola')
        // error.innerHTML="";
        // error.style.color="green";
        // error.innerHTML="Datos cambiados";
        esValido=true
    }
    return esValido;
}

export function comprobarPasswordPerfil(password){
    var esValido=false;
    validacionCorrecta=[]
    validacionIncorrecta=[]
    comprobarPassword(password)

    if (validacionIncorrecta.length>0) {
        var error=document.getElementById("errores");
        console.log('adios')
        error.innerHTML="";
        error.style.color="red";
        console.log(validacionIncorrecta)
        error.innerHTML=mensajesDeError(validacionIncorrecta);
    }else{
        console.log('hola')
        var error=document.getElementById("errores");
        //error.innerHTML="";
        // error.style.color="green";
        // error.innerHTML="Contraseña cambiada";
        esValido=true
    }
    return esValido;
}

function mensajesDeError(errores) {
    let mensajeError="";
    for (let i = 0; i < errores.length; i++) {
        mensajeError += errores[i] + "<br>";
    }
    return mensajeError;
}

export function comprobarPantallaDonar(){
    var opcionEstado=document.getElementById("estado");
    var errorDescripcion=document.getElementById("errorDescripcion");
    var errorFecha=document.getElementById("errorFecha");
    var errorEstado=document.getElementById("errorEstado");
    var descripcion=document.getElementById('descripcion');
    var fecha=document.getElementById('fechaEntrega');

    errorEstado.innerHTML="";
    errorFecha.innerHTML="";
    errorDescripcion.innerHTML="";
    descripcion.style.borderColor="";
    opcionEstado.style.borderColor="";
    fecha.style.borderColor="";

    if (empty(descripcion.value)) {
        descripcion.style.borderColor="red";
        errorDescripcion.style.color="red";
        errorDescripcion.innerHTML="La descripción se encuentra vacia";
    }
    if (empty(fecha.value)) {
        fecha.style.borderColor="red";
        errorFecha.style.color="red";
        errorFecha.innerHTML="Ingrese una fecha de entrega";  
    }

    if (opcionEstado.value=="") {
        opcionEstado.style.borderColor="red";
        errorEstado.style.color="red";
        errorEstado.innerHTML="Seleccione el estado en el que se encuentra el lote";
    }else{
        if (opcionEstado.value=="1") {
            return true
        }else{
            if (opcionEstado.value=="2") {  
                return true
            }
        }
    }
}