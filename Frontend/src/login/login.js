import { inicioSesion } from "../http/inicioSesion.js";

document.addEventListener('DOMContentLoaded', function() {

    let btnIniciarSesion = document.getElementById("btn-iniciar-sesion");
    let errorContainer = document.getElementById('error');

    async function realizarInicioSesion() {
        let correo = document.getElementById('correoElectronico').value;
        let contrasena = document.getElementById('contrasena').value;
    
        try {
            let datos = {
                "correo": correo,
                "password": contrasena,
            };

            const usuarioGuardado = await inicioSesion(datos);

            if (usuarioGuardado && usuarioGuardado.mensaje === 'Inicio de sesion exitoso') {
                sessionStorage.setItem('usuario', JSON.stringify(usuarioGuardado));
                window.location.href = "../inicio";
            } else {
                mostrarError("Inicio de sesión fallido. Mensaje: " + usuarioGuardado.mensaje);
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    if (btnIniciarSesion) {
        btnIniciarSesion.addEventListener('click', realizarInicioSesion);
    } else {
        console.error('No se encontró el botón de inicio de sesión');
    }

    function mostrarError(mensaje) {
        errorContainer.textContent = mensaje;
        setTimeout(() => {
            errorContainer.textContent = "";
        }, 3500);
    }
})