export async function cambiarDatos(datos,token){ 
  
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
      "Authorization": "Bearer "+token
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

  export async function cambiarPassword(datos,token){   
    let bodyContent = JSON.stringify(
      {
        "id":datos.id,
        "password": datos.password
      }
  );  

    let headersList = {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+token
      };
  
    let response = await fetch("http://127.0.0.1:8000/api/modificarPass", { 
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

  export async function obtenerUsuario(datos,token){
    let headersList = {
      "Content-Type": "application/json",
    "Authorization": "Bearer "+token
     }
     
     let response = await fetch("http://127.0.0.1:8000/api/usuario/"+datos, { 
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

  export async function subirImagenS3(ruta){
     let response = await fetch("http://127.0.0.1:8000/api/subirImagen", { 
       method: "POST",
       body: ruta
     });
     
     if (!response.ok) {
      throw new Error('Error')
    }else{
      let data = await response.json();
      
      return data;          
    }
  }

  export async function actualizarImg(datos){
    let headersList = {
      "Content-Type": "application/json"
     }
     
     let bodyContent = datos;
     
     console.log(bodyContent)
     let response = await fetch("http://127.0.0.1:8000/api/actualizarImagen", { 
       method: "PUT",
       body: bodyContent,
       headers: headersList
     });
     
     let data = await response.text();
     console.log(data);
  }