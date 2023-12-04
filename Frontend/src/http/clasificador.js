export async function listarLotes(){   

    let headersList = {
    "Content-Type": "application/json",
      };
  
      let response = await fetch("http://127.0.0.1:8000/api/clasificador/listarLotesNombre", { 
        method: "GET",
        headers: headersList
      });
  
    if (!response.ok) {
        throw new Error('Error')
      }else{
        let data = await response.json();
        
        return data;          
      }
  }

  export async function asignarLoteUsuario(datos){   
    let headersList = {
      "Content-Type": "application/json"
     }
     console.log(datos)
    console.log(datos.idLote)
     let bodyContent = JSON.stringify({
       "idUsuario":datos.idUsuario,
       "idLote":datos.idLote
     });
     
     let response = await fetch("http://127.0.0.1:8000/api/clasificador/asignarLote", { 
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

  export async function listarMisLotes(id){   

    let headersList = {
    "Content-Type": "application/json",
      };
  console.log(id)
      let response = await fetch("http://127.0.0.1:8000/api/clasificador/listarMisLotes/"+id, { 
        method: "GET",
        headers: headersList
      });
      
    if (!response.ok) {
        throw new Error('Error')
      }else{
        let data = await response.json();
        console.log(data)
        return data;          
      }
  }