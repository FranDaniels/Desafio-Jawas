import { asignarLoteUsuario, listarLotes } from "../http/clasificador.js"

var tabla=document.getElementById("tbody")

await listarLotes().then(function(data){
    var lotes=data;
    generarTablaLotes(lotes)
    asignarLote(tabla)
})

function generarTablaLotes(lotes) {
    const bodyTabla = document.getElementById("tbody");

    for (let i = 0; i < lotes.length; i++) {
        const row = document.createElement("tr");

        let key = ["lote_id", "lote_descripcion", "lote_estado", "lote_fecha_entrega", "usuario_nombre","lote_disponible"];

        for (let j = 0; j < key.length; j++) {
            const cell = document.createElement("td");

            cell.setAttribute("scope", "row");
    
            cell.textContent = lotes[i][key[j]];
            

            row.appendChild(cell);
        }
        const btn=document.createElement("a")
        btn.text="Asignar Lote"
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
        var idUsuario=localStorage.getItem("usuarioId")

        var datos={
            idUsuario:idUsuario,
            idLote:idLote
        }

        asignarLoteUsuario(datos)
    })
}