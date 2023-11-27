export async function listarUsuarios(){
    let headersList={
        "Content-Type": "application/json",
    };
       
       let response = await fetch("http://127.0.0.1:8000/api/listarUsuarios", { 
         method: "GET",
         headers: headersList
       });
       
       let data = await response.text();
       
       return data
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
       
       let data = await response.text();

       return data;
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
  
  let data = await response.json();

  return data;
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
       
       let data = await response.text();
       
       return data
}

export async function modificarUsuario(datos){
  let headersList = {
      "Content-Type": "application/json"
     }
     
     let bodyContent = JSON.stringify({
       "id": datos.id,
       "rol":datos.rol
     });
     
     let response = await fetch("http://127.0.0.1:8000/api/modificarUsuario", { 
      method: "PUT",
      body: bodyContent,
      headers: headersList
});
     
     let data = await response.text();
     
     return data
}

export async function aniadirRolUsuario(datos){
  let headersList = {
      "Content-Type": "application/json"
     }
     
     let bodyContent = JSON.stringify({
       "idRol": datos.idRol,
       "idUsuario":datos.idUsuario
     });
     
     let response = await fetch("http://127.0.0.1:8000/api/rolUsuario", { 
        method: "POST",
        body: bodyContent,
        headers: headersList
      });
     
     let data = await response.text();
     
     return data
}

export async function borrarUsuario(datos){
  let headersList = {
      "Content-Type": "application/json"
     }
     
     let bodyContent = JSON.stringify({
       "id": datos.id
     });
     
     let response = await fetch("http://127.0.0.1:8000/api/borrarUsuario", { 
        method: "DELETE",
        body: bodyContent,
        headers: headersList
      });
     
     let data = await response.text();
     
     return data
}