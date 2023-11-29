import { inicioSesion } from "../http/inicioSesion.js";

const btnIniciarSesion = document.getElementById("btn-iniciar-sesion");
const correoInput = document.querySelector('input[type="email"]');
const contrasenaInput = document.querySelector('input[type="password"]');
const errorContainer = document.getElementById('error');

btnIniciarSesion.addEventListener("click", async function () {
    const correo = correoInput.value;
    const contrasena = contrasenaInput.value;

    try {
        const usuarioGuardado = await inicioSesion();

        if (!correo || !contrasena) {
            mostrarError("Por favor ingresa tanto el correo electrónico como la contraseña.");
        } else if (!usuarioGuardado){
            mostrarError("Usuario no encontrado.");      
        }else if (usuarioGuardado.correo !== correo) {
            mostrarError("Usuario no encontrado. Verifica tu correo electrónico.");
        } else if (usuarioGuardado.contrasena !== contrasena) {
            mostrarError("Contraseña incorrecta.");
        } else {
            sessionStorage.setItem('usuario', JSON.stringify(usuarioGuardado));
            window.location.href = "../inicio/index.html";
        }
    } catch (error) {
        console.error("Error al obtener el usuario guardado:", error);
        mostrarError("Error al obtener el usuario guardado. Inténtalo de nuevo.");
    }
});

correoInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        contrasenaInput.focus();
    }
});

contrasenaInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        btnIniciarSesion.click();
    }
});

function mostrarError(mensaje) {
    errorContainer.textContent = mensaje;
    setTimeout(() => {
        errorContainer.textContent = "";
    }, 3500);
}