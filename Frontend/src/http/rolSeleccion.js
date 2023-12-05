import axios from 'axios';

export async function obtenerRoles() {
    try {
      let response = await fetch('http://127.0.0.1:8000/api/mostrarRol');
  
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
      }
  
      let roles = await response.json();
  
      return roles;
    } catch (error) {
      console.error('Error al obtener roles:', error);
      throw error;
    }
  }
  
export async function asignarRol(data) {
    let usuarioString = sessionStorage.getItem('usuario');
  
    let usuario = JSON.parse(usuarioString);
    let correo = usuario.correo;
  
    try {
      let response = await fetch("http://127.0.0.1:8000/api/asignarRol", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correo: correo,
          nombreRol: data.nombreRol,
        }),
      });
  
      /*console.log({
        correo: correo,
        nombreRol: data.nombreRol,
      });*/
      
      let responseData = await response.json();
      console.log(responseData);
      return responseData;

    } catch (error) {
      console.error('Error al asignar rol:', error);
      throw error;
    }
  }