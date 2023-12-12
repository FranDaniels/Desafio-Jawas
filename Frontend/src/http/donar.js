/**
 * @author Francisco Álvarez Bellón
 */

export async function donarLote(datos){   
  
    let bodyContent = JSON.stringify(
      {
        "descripcion":datos.descripcion,
        "latitud": datos.latitud,
        "longitud": datos.longitud,
        "idUsuario":datos.id_usuario
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

  console.log(response)
    if (!response.ok) {
        throw new Error('Error')
      }else{
        let data = await response.json();
        
        return data;          
      }
  }