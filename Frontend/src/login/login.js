import { inicioSesion } from "../http/inicioSesion.js";

const btnIniciarSesion = document.getElementById("btn-iniciar-sesion");
const correoInput = document.querySelector('input[type="email"]');
const contrasenaInput = document.querySelector('input[type="password"]');
const errorContainer = document.getElementById('error');

btnIniciarSesion.addEventListener("click", async function () {
    const correo = correoInput.value;
    const contrasena = contrasenaInput.value;

    btnIniciarSesion.disabled = true;

    try {
        const resultadoInicioSesion = await inicioSesion({ correo, contrasena });

        if (resultadoInicioSesion.mensaje === 'Inicio de sesión exitoso') {
            sessionStorage.setItem('usuario', JSON.stringify(resultadoInicioSesion.usuario));
            window.location.href = "../inicio/index.html";
        } else {
            mostrarError("Correo o contraseña incorrecta");
        }
    } catch (error) {
        console.error("Error al iniciar sesión:", error);

        if (!correo || !contrasena) {
            mostrarError("Por favor ingresa tanto el correo electrónico como la contraseña.");
        } else {
            mostrarError("Error al iniciar sesión. Inténtalo de nuevo.");
        }
    } finally {
        btnIniciarSesion.disabled = false;
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
