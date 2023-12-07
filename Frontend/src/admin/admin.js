import { listarUsuarios } from "../http/admin.js";
import { modalModificar } from "../utils/componentes.js";

await listarUsuarios().then(function(data){
    var usuarios=data;
    crearTablaUsuarios(usuarios)
})

function crearTablaUsuarios(usuarios){
    const bodyTabla = document.getElementById("tbody");

    for (let i = 0; i < usuarios.length; i++) {
        const row = document.createElement("tr");

        let key = ["id", "nombre", "apellido", "correo","id_rol"];

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
            modificarUsuario(usuarios[i])
        })
        btnModificar.setAttribute("class","btn btn-success")
        btnModificar.setAttribute("id",usuarios[i].id)
        btnModificar.setAttribute("name","modificar"+usuarios[i].id)
        row.appendChild(btnModificar)

        const btnRol=document.createElement("a")
        btnRol.text="Añadir Rol"
        btnRol.style.color="black"
        btnRol.addEventListener('click',function(){
            asignarRol(usuarios[i])
        })
        btnRol.setAttribute("class","btn btn-primary")
        btnRol.setAttribute("id",+usuarios[i].id)
        btnRol.setAttribute("name","addRol"+usuarios[i].id)
        row.appendChild(btnRol)
        
        const btnBorrar=document.createElement("a")
        btnBorrar.text="Borrar"
        btnBorrar.style.color="black"
        btnBorrar.addEventListener('click',function(){
            borrarUsuario(usuarios[i])
        })
        btnBorrar.setAttribute("class","btn btn-danger")
        btnBorrar.setAttribute("id",+usuarios[i].id)
        btnBorrar.setAttribute("name","borrar"+usuarios[i].id)
        row.appendChild(btnBorrar)

        bodyTabla.appendChild(row);
    }
}

function modificarUsuario(usuario){
    var modalBody=document.getElementById("modal")

    var modal=modalModificar()

}

function borrarUsuario(usuario){
    
}

function asignarRol(usuario){
    
}
