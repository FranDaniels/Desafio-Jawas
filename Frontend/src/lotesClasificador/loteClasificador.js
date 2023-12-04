import { asignarLoteUsuario, listarLotes, listarMisLotes } from "../http/clasificador.js"

var tabla=document.getElementById("tbody")
var idUsuario=localStorage.getItem("idUsuario")

await listarMisLotes(idUsuario).then(function(data){
    var lotes=data;
    generarTablaLotes(lotes)
    asignarLote(tabla)
})

function generarTablaLotes(lotes) {
    const bodyTabla = document.getElementById("tbody");

    for (let i = 0; i < lotes.length; i++) {
        const row = document.createElement("tr");

        let key = ["id", "descripcion", "estado", "ubicacion", "fecha_entrega","id_usuario"];

        for (let j = 0; j < key.length; j++) {
            const cell = document.createElement("td");

            cell.setAttribute("scope", "row");
    
            cell.textContent = lotes[i][key[j]];
            

            row.appendChild(cell);
        }
        const btn=document.createElement("a")
        btn.text="Clasificar Lote"
        btn.style.color="black"
        btn.id=lotes[i].lote_id
        btn.setAttribute("class","btn btn-primary")
        row.appendChild(btn)

        bodyTabla.appendChild(row);
    }
}

function asignarLote(btnAsignar) {
    btnAsignar.addEventListener("click",function(event){
        var idLote=event.target.id
        localStorage.setItem("idLote",idLote)
        var idUsuarioItem=3
        var idUsuario=localStorage.setItem("idUsuario",idUsuarioItem)
        var idUsuario=localStorage.getItem("idUsuario")

        var datos={
            idUsuario:idUsuario,
            idLote:idLote
        }

        asignarLoteUsuario(datos)
    })
}