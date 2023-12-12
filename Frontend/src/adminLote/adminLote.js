import { cambiarLoteEntregado, cargarLotes } from "../http/admin.js";
/* import { cabecera, footer } from "../utils/componentes.js";

cabecera();
footer(); */
await cargarLotes().then(function(data){
    var lotes=data;
    generarTablaLotes(lotes)
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
        btn.text="Marcar como Entregado"
        btn.style.color="black"
        btn.id=lotes[i].lote_id
        btn.setAttribute("class","btn btn-primary")
        btn.setAttribute("data-bs-toggle","modal")
        btn.setAttribute("data-bs-target","#modalEntregado")
        btn.setAttribute("id",lotes[i].lote_id)
        btn.addEventListener("click",async function(){
            var errores=document.getElementById("errores")
            errores.textContent=""
            if (lotes[i].lote_estado=="Entregado") {
                errores.textContent="El lote ya ha sido entregado"
                errores.style.color="red"
            }else{
               await cambiarLoteEntregado(lotes[i].lote_id).then(function(){
                errores.textContent="El lote se ha cambiado ha entregado"
                errores.style.color="green"
                setTimeout(function(){
                    window.location.reload()
                    },5000)
               })
            }
        })

        row.appendChild(btn)

        bodyTabla.appendChild(row);
    }
}