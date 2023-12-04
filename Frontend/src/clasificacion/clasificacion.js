import { listarLote } from "../http/clasificador.js"

var idLote=localStorage.getItem('idLote')
console.log(idLote)

await listarLote(idLote).then(function(data){
    var lote=data;
    generarLote(lote)
})

function generarLote(lote) {
    const divClasificacion = document.getElementById("clasificacion");

    for (let i = 0; i < lote.length; i++) {
        let key = ["id", "descripcion", "estado", "ubicacion", "fecha_entrega", "id_usuario"];

        for (let j = 0; j < key.length; j++) {
            const h1 = document.createElement("h1");
            h1.textContent = `Lote ${key[j]}: ${lote[i][key[j]]}`;
            divClasificacion.appendChild(h1);
        }
    }
}
