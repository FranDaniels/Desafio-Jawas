export async function cambiarDatos(datos){ 
  
    let bodyContent = JSON.stringify(
      {
        "id":datos.id,
        "nombre": datos.nombre,
        "apellido": datos.apellido,
        "correo": datos.correo
      }
  );  


    let headersList = {
    "Content-Type": "application/json",
      };
  
    let response = await fetch("http://127.0.0.1:8000/api/modificarDatos", { 
        method: "PUT",
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

  export async function cambiarPassword(datos){   
    let bodyContent = JSON.stringify(
      {
        "id":datos.id,
        "password": datos.password
      }
  );  

    let headersList = {
    "Content-Type": "application/json",
      };
  
    let response = await fetch("http://127.0.0.1:8000/api/modificarPass", { 
        method: "PUT",
        body: bodyContent,
        headers: headersList
    });
  
  let data = await response.json();

  return data;
  }

  export async function obtenerUsuario(datos){
    let headersList = {
      "Content-Type": "application/json"
     }
     
     let response = await fetch("http://127.0.0.1:8000/api/usuario/"+datos, { 
       method: "GET",
       headers: headersList
     });
     
     let data = await response.json();
     
     return data
  }