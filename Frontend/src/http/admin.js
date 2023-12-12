export async function listarUsuarios(){
    let headersList={
        "Content-Type": "application/json",
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

export async function listarUsuario(datos){
    let headersList = {
        "Content-Type": "application/json"
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

export async function crearUsuario(datos){
    let bodyContent=JSON.stringify({
        "nombre":datos.nombre,
        "apellido":datos.apellido,
        "correo":datos.correo,
        "password":datos.password,
        "id":datos.id
    });

    let headersList={
        "Content-Type": "application/json",
    };

    let response = await fetch("http://127.0.0.1:8000/api/crearUsuario", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });
  
    if (!response.ok) {
      throw new Error('Error')
    }else{
      let data = await response.json();
      
      return data;          
    }
}

export async function crearRol(datos){
    let headersList = {
        "Content-Type": "application/json"
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

export async function modificarUsuario(datos){
  let headersList = {
      "Content-Type": "application/json"
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

export async function addRolUsuario(usuario,rol){
  let headersList = {
      "Content-Type": "application/json"
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

export async function darBaja(id){
  let headersList = {
    "Content-Type": "application/json",
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

export async function darAlta(id){
  let headersList = {
    "Content-Type": "application/json",
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

export async function cambiarPasswordUsuario(datos){   
  let bodyContent = JSON.stringify(
    {
      "id":datos.id,
      "password": datos.password
    }
);  

  let headersList = {
  "Content-Type": "application/json",
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

export async function cargarRoles(id){   
  let headersList = {
    "Content-Type": "application/json"
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

export async function cargarLotes(){   
  let headersList = {
    "Content-Type": "application/json"
   }
   
   let response = await fetch("http://127.0.0.1:8000/api/admin/listarTodosLotes", { 
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

  export async function cambiarLoteEntregado(id){   
    console.log(id)
    let headersList = {
      "Content-Type": "application/json"
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

export async function cargarComponentes(){
  let headersList = {
    "Content-Type": "application/json"
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

export async function crearComponentess(datos){

  let headersList = {
    "Content-Type": "application/json"
   }
   
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