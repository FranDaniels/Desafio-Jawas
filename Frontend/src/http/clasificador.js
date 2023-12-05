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

      let response = await fetch("http://127.0.0.1:8000/api/clasificador/listarMisLotes/"+id, { 
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

  export async function listarLote(id){   

    let headersList = {
    "Content-Type": "application/json",
      };

      let response = await fetch("http://127.0.0.1:8000/api/clasificador/listarLote/"+id, { 
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

export async function listarComponentes(){   

  let headersList = {
  "Content-Type": "application/json",
    };

    let response = await fetch("http://127.0.0.1:8000/api/clasificador/componentes", { 
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

export async function addInventario(datos){
  let headersList = {
    "Content-Type": "application/json"
   }
   
   console.log(datos)
   let bodyContent = JSON.stringify({
     "idLote":datos.idLote,
     "idComponente":datos.idComponente,
     "cantidad":datos.cantidad
   });
   
   let response = await fetch("http://127.0.0.1:8000/api/clasificador/inventario", { 
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

export async function listarComponente(nombre){
  debugger
  console.log(nombre)
  let headersList = {
    "Content-Type": "application/json",
      };
   
   let response = await fetch("http://127.0.0.1:8000/api/clasificador/listarComponente/"+nombre, { 
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