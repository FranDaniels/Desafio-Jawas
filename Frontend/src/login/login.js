let btnIniciarSesion = document.getElementById("btn-iniciar-sesion");

btnIniciarSesion.addEventListener("click", async function () {
    let correo = document.querySelector('input[type="email"]').value;
    let contrasena = document.querySelector('input[type="password"]').value;

    try {
        let usuarioGuardado = await obtenerUsuarioGuardado();
        let error = document.getElementById('error');

        console.log("Correo ingresado:", correo);
        console.log("Usuario guardado:", usuarioGuardado);

        if (!correo || !contrasena) {
            mostrarError("Por favor ingresa tanto el correo electrónico como la contraseña.");
        } else {
            if (usuarioGuardado) {
                console.log("Comparación de correos:", usuarioGuardado.correo === correo);

                if (usuarioGuardado.correo === correo) {
                    if (usuarioGuardado.contrasena === contrasena) {
                        sessionStorage.setItem('usuario', JSON.stringify(usuarioGuardado));
                        window.location.href = "../inicio/index.html";
                    } else {
                        mostrarError("Contraseña incorrecta.");
                    }
                } else {
                    mostrarError("Correo electrónico incorrecto. Vuelve a introducirlo.");
                }
            } else {
                mostrarError("Usuario no encontrado. Verifica tu correo electrónico.");
            }
        }
    } catch (error) {
        console.error("Error al obtener el usuario guardado:", error);
        mostrarError("Error al obtener el usuario guardado. Inténtalo de nuevo.");
    }

    return false;
});

function mostrarError(mensaje) {
    let error = document.getElementById('error');
    error.textContent = mensaje;
    setTimeout(function () {
        error.textContent = "";
    }, 3500);
}

async function obtenerUsuarioGuardado() {
    return new Promise((resolve, reject) => {
        try {
            let usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
            resolve(usuarioGuardado);
        } catch (error) {
            reject(error);
        }
    });
}

let correoInput = document.querySelector('input[type="email"]');
correoInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        document.querySelector('input[type="password"]').focus();
    }
});

let contrasenaInput = document.querySelector('input[type="password"]');
contrasenaInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        btnIniciarSesion.click(); // Llamar al evento de clic del botón al presionar Enter
    }
});
