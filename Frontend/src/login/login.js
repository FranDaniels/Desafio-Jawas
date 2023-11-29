import { inicioSesion } from "../http/inicioSesion.js";

document.addEventListener('DOMContentLoaded', function() {

    let btnIniciarSesion = document.getElementById("btn-iniciar-sesion");
    let errorContainer = document.getElementById('error');

    async function realizarInicioSesion() {
        console.log("entro");
        let correo = document.getElementById('correoElectronico');
        let contrasena = document.getElementById('contrasena');

        console.log(correo.value);
        console.log(contrasena.value);

        if (!correo || !contrasena) {
            mostrarError('No se encontraron los campos de correo electrónico o contraseña');
            return;
        }

        let correoValor = correo.value;
        let contrasenaValor = contrasena.value;
    
        try {
            let datos = {
                correo: correoValor,
                password: contrasenaValor,
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