import { listarUsuarios, borrarUsuario, cargarRoles, cambiarPasswordUsuario, modificarUsuario, addRolUsuario } from "../http/admin.js";
import { comprobarPasswordPerfil, validarUsuarioAdmin } from "../utils/validaciones.js";
import { cabecera } from "../utils/componentes.js";

cabecera();
await listarUsuarios().then(function(data){
    var usuarios=data;
    console.log(usuarios)
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
        
        const btnBorrar=document.createElement("a")
        btnBorrar.text="Dar de baja"
        btnBorrar.style.color="black"
        btnBorrar.addEventListener('click',function(){
            borrarUsuarios(usuarios[i])
        })
        btnBorrar.setAttribute("class", "btn btn-danger");
        btnBorrar.setAttribute("data-bs-toggle", "modal");
        btnBorrar.setAttribute("data-bs-target", "#modalBorrar");
        btnBorrar.setAttribute("id",+usuarios[i].id)
        btnBorrar.setAttribute("name","borrar"+usuarios[i].id)
        row.appendChild(btnBorrar)

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

function borrarUsuarios(usuario){
    var tituloTexto=document.getElementById("borrarTexto")
    var btnBorrar=document.getElementById("borrarUsu")
    tituloTexto.textContent='¿Deseas dar de baja al usuario '+usuario.nombre+' '+usuario.apellido+'?'

    btnBorrar.addEventListener("click", async function(event){
        event.preventDefault()
          var datos={
            id:usuario.id
          }
          await borrarUsuario(datos).then(function(data){
          })
          
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