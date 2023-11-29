export async function donarLote(datos){   
    let bodyContent = JSON.stringify(
      {
        "descripcion":datos.descripcion,
        "ubicacion": datos.ubicacion,
        "estado": datos.estado,
        "fecha_entrega": datos.fecha_entrega,
        "idUsuario":1
      }
  );  

    let headersList = {
    "Content-Type": "application/json",
      };
  
    let response = await fetch("http://127.0.0.1:8000/api/donar", { 
        method: "POST",
        body: bodyContent,
        headers: headersList
    });
  
    if (!response.ok) {
        throw new Error('Error')
      }else{
        let data = await response.json();
        
        return data;          
      }
  }