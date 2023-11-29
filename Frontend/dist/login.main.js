/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/login/login.js":
/*!****************************!*\
  !*** ./src/login/login.js ***!
  \****************************/
/***/ (() => {

eval("function validarInicio(){\r\n    const correo = document.querySelector('input[type = \"email\"]').value;\r\n    const contrasena = document.querySelector('input[type = \"password\"]').value;\r\n\r\n    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));\r\n    var error = document.getElementById('error');\r\n\r\n    if (!correo || !contrasena){\r\n        error.textContent = \"Por favor ingresa tanto el correo electrónico como la contraseña.\";\r\n        setTimeout(function(){\r\n            error.textContent = \"\";\r\n        }, 3500);\r\n    }else{\r\n        if (usuarioGuardado && usuarioGuardado.correo === correo && usuarioGuardado.contrasena === contrasena) {\r\n            Object.assign(usuario, usuarioGuardado);\r\n            btnIniciarSesion();\r\n        } else {\r\n            error.textContent = \"Correo electrónico o contraseña incorrecta. Vuelve a intentarlo.\";\r\n            setTimeout(function(){\r\n                error.textContent = \"\";\r\n            }, 3500);\r\n        }\r\n        return false;\r\n    }\r\n}\r\n\r\nwindow.validarInicio = validarInicio;\r\n\r\nconst correoInput = document.querySelector('input[type=\"email\"]');\r\ncorreoInput.addEventListener('keydown', function (event) {\r\n    if (event.key === 'Enter') {\r\n        document.querySelector('input[type=\"password\"]').focus();\r\n    }\r\n});\r\n\r\nconst contrasenaInput = document.querySelector('input[type=\"password\"]');\r\ncontrasenaInput.addEventListener('keydown', function (event) {\r\n    if (event.key === 'Enter') {\r\n        validarInicio();\r\n    }\r\n});\n\n//# sourceURL=webpack://frontend/./src/login/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/login/login.js"]();
/******/ 	
/******/ })()
;