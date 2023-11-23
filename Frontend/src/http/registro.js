export async function crearUsuario(datos){   
    let bodyContent = JSON.stringify(
      {
          "nombre": datos.nombre,
          "apellido": datos.apellido,
          "correo": datos.correo,
          "password": datos.password,
      }
  );  
  console.log()
    let headersList = {
    "Content-Type": "application/json",
      };
  
    let response = await fetch("http://127.0.0.1:8000/api/registro", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });
  
  let data = await response.json();
  return data;
  }