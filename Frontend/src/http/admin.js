/**
 * @author Francisco Álvarez Bellón
 */

export async function listarUsuarios(token){
    let headersList={
      "Content-Type": "application/json",
      "Authorization": "Bearer "+token
    };
       
       let response = await fetch("http://127.0.0.1:8000/api/admin/listarUsuarios", { 
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

export async function listarUsuario(datos,token){
    let headersList = {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+token
       }
       
       let bodyContent = JSON.stringify({
         "id":datos.id
       });
       
       let response = await fetch("http://127.0.0.1:8000/api/listarUsuario", { 
         method: "GET",
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

export async function crearUsuarioss(datos,token){

  let headersList = {
    "Content-Type": "application/json",
      "Authorization": "Bearer "+token
   }
   
   let bodyContent = JSON.stringify({
     "nombre":datos.nombre,
     "apellido":datos.apellido,
     "correo":datos.correo,
     "password":datos.password,
     "rol":datos.rol
   });
   
   let response = await fetch("http://127.0.0.1:8000/api/admin/crearUsuario", { 
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

export async function crearRol(datos,token){
    let headersList = {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+token
       }
       
       let bodyContent = JSON.stringify({
         "nombre": datos.nombre
       });
       
       let response = await fetch("http://127.0.0.1:8000/api/rol", { 
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

export async function modificarUsuario(datos,token){
  let headersList = {
    "Content-Type": "application/json",
    "Authorization": "Bearer "+token
     }
     
     let bodyContent = JSON.stringify({
      "id":datos.id,
       "nombre":datos.nombre,
       "apellido":datos.apellido
     });
     
     let response = await fetch("http://127.0.0.1:8000/api/admin/modificarUsuario", { 
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

export async function addRolUsuario(usuario,rol,token){
  let headersList = {
    "Content-Type": "application/json",
    "Authorization": "Bearer "+token
     }
     console.log(rol)
     console.log(usuario.id)

     let bodyContent = JSON.stringify({
       "idRol": rol,
       "idUsuario":usuario.id
     });
     
     let response = await fetch("http://127.0.0.1:8000/api/admin/rolUsuario", { 
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

export async function darBaja(id,token){
  let headersList = {
    "Content-Type": "application/json",
      "Authorization": "Bearer "+token
      };

   let response = await fetch("http://127.0.0.1:8000/api/admin/darBaja/"+id, { 
     method: "PUT",
     headers:headersList
   });
   
   if (!response.ok) {
    throw new Error('Error')
  }else{
    let data = await response.json();
    
    return data;          
  }
}

export async function darAlta(id,token){
  let headersList = {
    "Content-Type": "application/json",
      "Authorization": "Bearer "+token
      };
      
   let response = await fetch("http://127.0.0.1:8000/api/admin/darAlta/"+id, { 
     method: "PUT",
     headers:headersList
   });
   
   if (!response.ok) {
    throw new Error('Error')
  }else{
    let data = await response.json();
    
    return data;          
  }
}

export async function cambiarPasswordUsuario(datos,token){   
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

    let response = await fetch("http://127.0.0.1:8000/api/admin/modificarPassword", { 
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

export async function cargarRoles(id,token){   
  let headersList = {
    "Content-Type": "application/json",
      "Authorization": "Bearer "+token
   }
   
   let response = await fetch("http://127.0.0.1:8000/api/admin/listarRoles/"+id, { 
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

export async function cargarLotes(token){   
debugger
  let headersList = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    "Authorization":"Bearer " +token
   }

   let options = 
    { 
      method: "GET",
      headers: headersList
    }
   
   let response = await fetch("http://127.0.0.1:8000/api/admin/listarTodosLotes", options);
   
   if (!response.ok) {
    throw new Error('Error')
  }else{
    let data = await response.json();
    
    return data;          
  }
}

  export async function cambiarLoteEntregado(id,token){   
    console.log(id)
    let headersList = {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+token
     }
     
     let response = await fetch("http://127.0.0.1:8000/api/admin/modificarLote/"+id, { 
      method: "PUT",
      headers: headersList
    });
     
     if (!response.ok) {
      throw new Error('Error')
    }else{
      let data = await response.json();
      
      return data;          
    }
}

export async function cargarComponentes(token){
  let headersList = {
    "Content-Type": "application/json",
      "Authorization": "Bearer "+token
   }
   
   let response = await fetch("http://127.0.0.1:8000/api/admin/listarComponentes", { 
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

export async function crearComponentess(datos,token){
console.log(token)
  let headersList = {
    "Content-Type": "application/json",
      "Authorization": "Bearer "+token
   }
   
   console.log(datos)
   let bodyContent = JSON.stringify({
     "nombre":datos.nombre,
     "tipo":datos.tipo,
     "descripcion":datos.descripcion
   });
   
   let response = await fetch("http://127.0.0.1:8000/api/admin/componente", { 
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