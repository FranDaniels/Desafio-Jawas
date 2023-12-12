import { listarUsuarios, borrarUsuario, cargarRoles, cambiarPasswordUsuario, modificarUsuario, addRolUsuario, darBaja, darAlta, crearUsuarioss } from "../http/admin.js";
import { comprobarPasswordPerfil, validarUsuarioAdmin } from "../utils/validaciones.js";
import { cabecera, footer } from "../utils/componentes.js";
import { empty } from "../utils/funciones.js";

let btnCrearUsuario=document.getElementById("crearUsuario")

cabecera();
// footer();
await listarUsuarios().then(function(data){
    var usuarios=data;
    crearTablaUsuarios(usuarios)
})

function crearTablaUsuarios(usuarios){
    const bodyTabla = document.getElementById("tbody");

    for (let i = 0; i < usuarios.length; i++) {
        const row = document.createElement("tr");

        let key = ["id", "nombre", "apellido", "correo","nombre_rol"];

        for (let j = 0; j < key.length; j++) {
            const cell = document.createElement("td");

            cell.setAttribute("scope", "row");
    
            cell.textContent = usuarios[i][key[j]];
            

            row.appendChild(cell);
        }
        const btnModificar=document.createElement("a")
        btnModificar.text="Modificar"
        btnModificar.style.color="black"
        btnModificar.addEventListener('click',function(){
            modificarUsuarios(usuarios[i])
        })
        btnModificar.setAttribute("class","btn btn-success")
        btnModificar.setAttribute("data-bs-toggle", "modal");
        btnModificar.setAttribute("data-bs-target", "#modalModificar");
        btnModificar.setAttribute("id",usuarios[i].id)
        btnModificar.setAttribute("name","modificar"+usuarios[i].id)
        row.appendChild(btnModificar)

        const btnRol=document.createElement("a")
        btnRol.text="Añadir Rol"
        btnRol.style.color="black"
        btnRol.addEventListener('click', async function(){
            console.log(usuarios[i].id)
            await cargarRoles(usuarios[i].id).then(function(data){
                var roles=data
                cargarTablaRoles(usuarios[i],roles)
            })
        })
        btnRol.setAttribute("class","btn btn-primary")
        btnRol.setAttribute("data-bs-toggle", "modal");
        btnRol.setAttribute("data-bs-target", "#modalRol");
        btnRol.setAttribute("id",+usuarios[i].id)
        btnRol.setAttribute("name","addRol"+usuarios[i].id)
        row.appendChild(btnRol)
        
        const btnAlta=document.createElement("a")
        btnAlta.text="Dar de Alta"
        btnAlta.style.color="black"
        btnAlta.addEventListener('click',function(){
            altaUsuario(usuarios[i])
        })
        btnAlta.setAttribute("class", "btn btn-danger");
        btnAlta.setAttribute("data-bs-toggle", "modal");
        btnAlta.setAttribute("data-bs-target", "#modalAlta");
        btnAlta.setAttribute("id",+usuarios[i].id)
        btnAlta.setAttribute("name","alta"+usuarios[i].id)
        row.appendChild(btnAlta)

        const btnBaja=document.createElement("a")
        btnBaja.text="Dar de Baja"
        btnBaja.style.color="black"
        btnBaja.addEventListener('click',function(){
            bajaUsuario(usuarios[i])
        })
        btnBaja.setAttribute("class", "btn btn-danger");
        btnBaja.setAttribute("data-bs-toggle", "modal");
        btnBaja.setAttribute("data-bs-target", "#modalBaja");
        btnBaja.setAttribute("id",+usuarios[i].id)
        btnBaja.setAttribute("name","baja"+usuarios[i].id)
        row.appendChild(btnBaja)

        bodyTabla.appendChild(row);
    }
}

function modificarUsuarios(usuario){
    var idUsuario=document.getElementById("userId")
    var nombreUsuario=document.getElementById("nombre")
    var apellidoUsuarioo=document.getElementById("apellido")
    var correoUsuario=document.getElementById("correo")
    var passUsuario=document.getElementById("passwordUsu")
    var btnGuardar=document.getElementById("guardarCambios")
    var btnPassword=document.getElementById("cambiarPassword")

    idUsuario.textContent='Usuario '+usuario.id
    nombreUsuario.value=usuario.nombre
    apellidoUsuarioo.value=usuario.apellido
    correoUsuario.value=usuario.correo

    btnGuardar.addEventListener("click", async function(event){
        event.preventDefault()
          if ( validarUsuarioAdmin(nombre,apellido)) {
          var datos=cargarDatosCambiados(usuario)
          await modificarUsuario(datos).then(function(data){
          })
          }
      })

      btnPassword.addEventListener("click", async function(event){
        event.preventDefault()
        if (comprobarPasswordPerfil(passUsuario)) {
            var datos=cargarPassword(usuario,passUsuario)
            console.log(datos)
            await cambiarPasswordUsuario(datos).then(function(data){
            })
        }
      })
}

function bajaUsuario(usuario){
    var tituloTexto=document.getElementById("borrarTexto")
    var btnBaja=document.getElementById("bajaUsu")
    var errorBaja=document.getElementById("errorBaja")
    errorBaja.textContent=""
    tituloTexto.textContent='¿Deseas dar de baja al usuario '+usuario.nombre+' '+usuario.apellido+'?'

    btnBaja.addEventListener("click", async function(event){
        event.preventDefault()
        if (usuario.usuarioActivo=="0") {
            errorBaja.textContent="El usuario ya esta dado de baja"
            errorBaja.style.color="red"
        }else{
            await darBaja(usuario.id).then(function(data){
                window.location.reload()
              })  
        }    
      })
}

function altaUsuario(usuario){
    var tituloTexto=document.getElementById("borrarTextoAlta")
    var btnAlta=document.getElementById("altaUsu")
    var errorAlta=document.getElementById("errorAlta")
    errorAlta.textContent=""
    tituloTexto.textContent='¿Deseas dar de alta al usuario '+usuario.nombre+' '+usuario.apellido+'?'

    btnAlta.addEventListener("click", async function(event){
        event.preventDefault()
        if (usuario.usuarioActivo=="1") {
            errorAlta.textContent="El usuario ya esta dado de alta"
            errorAlta.style.color="red"
        }else{
            await darAlta(usuario.id).then(function(data){
                window.location.reload()
              })
        }
          
      })
}

function asignarRol(usuario){
    var btnAddRol=document.getElementById("addRol")
    var rolSeleccionado=document.getElementById("select").value

    if (rolSeleccionado=="1") {
        var rol="1"
    }else{
        if (rolSeleccionado=="2") {
            var rol="2"
        }else{
            if (rolSeleccionado=="3") {
                var rol="3"
            }else{
                if (rolSeleccionado=="4") {
                    var rol="4"
                }
            }
        }
    }

    btnAddRol.addEventListener("click", async function(event){
        event.preventDefault()
        console.log(usuario)
        console.log(rol)
        await addRolUsuario(usuario,rol).then(function(data){

        })

    })
    
}

function cargarTablaRoles(usuario,roles){
    var x=document.getElementById("xRol")
    var cancelarRol=document.getElementById("cancelarRol")

    if (roles.length==0) {
        var error=document.getElementById("erroresRol")
        error.innerHTML=usuario.nombre+" es un autentico JEDI"

        x.addEventListener("click", function(){
            error.innerHTML="" 
        })
        cancelarRol.addEventListener("click",function(){
            error.innerHTML="" 
        })
    }else{

    const selecTable=document.getElementById("selectRol")

    const select=document.createElement("select")
    select.setAttribute("class","form-select")
    select.setAttribute("style","width: 150px")
    select.setAttribute("id","select")

    for (let i = 0; i < roles.length; i++) {

        let key=["nombre"]

        for (let j = 0; j < key.length; j++) {
            const option=document.createElement("option")
            
            option.setAttribute("value",roles[i].id)

            option.textContent=roles[i][key[j]]
            select.appendChild(option)
        }
    }
    selecTable.appendChild(select)
    asignarRol(usuario)
    x.addEventListener("click", function(){
            select.remove()
    })
    cancelarRol.addEventListener("click",function(){
        select.remove()
    })
}

}

function cargarDatosCambiados(usuario) {
    var datos={
        id:usuario.id,
        nombre:nombre.value,
        apellido:apellido.value
    }

    return datos
}

function cargarPassword(usuario,passUsuario){
    console.log(passUsuario)
    console.log(passUsuario.value)
    var datos={
        id:usuario.id,
        password:passUsuario.value
    }

    return datos
}

btnCrearUsuario.addEventListener("click",async function(){
    var nombreNuevo=document.getElementById("nombreNuevo")
    var apellidoNuevo=document.getElementById("apellidoNuevo")
    var correoNuevo=document.getElementById("correoNuevo")
    var passwordNuevo=document.getElementById("passwordUsuNuevo")
    var crear=document.getElementById("crear")

    var datos=cargarDatosUsuarioNuevo(nombreNuevo,apellidoNuevo,correoNuevo,passwordNuevo)

    if (datos!=null) {
        await crearUsuarioss(datos).then(function(){
            crear.textContent="Usuario Creado"
            crear.style.color="green"
        })  
    }
    
})

function cargarDatosUsuarioNuevo(nombre,apellido,correo,password){
    var selectedOption=document.getElementById("inputGroupSelectNuevo").value
    var option;
    var datos;
    var errores=[]
    var errorNombre=document.getElementById("errorNombreNuevo")
    var errorApellido=document.getElementById("errorApellidoNuevo")
    var errorCorreo=document.getElementById("errorCorreoNuevo")
    var errorPassword=document.getElementById("errorPasswordNuevo")
    errorNombre.textContent=""
    errorApellido.textContent=""
    errorCorreo.textContent=""
    errorPassword.textContent=""

    if (empty(nombre.value)) {
        errorNombre.textContent="El nombre se encuentra vacio"
        errorNombre.style.color="red"
        errores.push("error")
    }

    if (empty(apellido.value)) {
        errorApellido.textContent="El apellido se encuentra vacio"
        errorApellido.style.color="red"
        errores.push("error")
    }

    if (empty(correo.value)) {
        errorCorreo.textContent="El correo se encuentra vacio"
        errorCorreo.style.color="red"
        errores.push("error")
    }

    if (empty(password.value)) {
        errorPassword.textContent="El password se encuentra vacio"
        errorPassword.style.color="red"
        errores.push("error")
    }

    if (selectedOption=="1") {
        option="1"
    }else{
        if (selectedOption=="2") {
            option="2"
        }else{
            if (selectedOption=="3") {
                option="3"
            }else{
                if (selectedOption=="4") {
                    option="4"
                }
            }
        }
    }

    if (errores.length==0) {
        datos={
            nombre:nombre.value,
            apellido:apellido.value,
            correo:correo.value,
            password:password.value,
            rol:option
        }
    }

    return datos
}