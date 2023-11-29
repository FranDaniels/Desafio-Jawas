/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/http/inicioSesion.js":
/*!**********************************!*\
  !*** ./src/http/inicioSesion.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inicioSesion: () => (/* binding */ inicioSesion)\n/* harmony export */ });\nasync function inicioSesion(datos) {\r\n    let bodyContent = JSON.stringify({\r\n        \"correo\": datos.correo,\r\n        \"password\": datos.password,\r\n    });\r\n\r\n    let headersList = {\r\n        \"Content-Type\": \"application/json\",\r\n    };\r\n\r\n    try {\r\n        let response = await fetch(\"http://127.0.0.1:8000/api/inicioSesion\", {\r\n            method: \"POST\",\r\n            headers: headersList,\r\n            body: bodyContent,\r\n        });\r\n\r\n        if (!response.ok) {\r\n            let errorData = await response.json();\r\n            throw new Error(`Error en la solicitud: ${response.status} - ${errorData.message}`);\r\n        }\r\n\r\n        let data = await response.json();\r\n        return data;\r\n    } catch (error) {\r\n        throw error;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/http/inicioSesion.js?");

/***/ }),

/***/ "./src/login/login.js":
/*!****************************!*\
  !*** ./src/login/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _http_inicioSesion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http/inicioSesion.js */ \"./src/http/inicioSesion.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n\r\n    let btnIniciarSesion = document.getElementById(\"btn-iniciar-sesion\");\r\n    let correo = document.getElementById('correoElectronico').value;\r\n    let contrasena = document.getElementById('contrasena').value;\r\n    let errorContainer = document.getElementById('error');\r\n\r\n    async function realizarInicioSesion() {\r\n        try {\r\n            let datos = {\r\n                \"correo\": correo,\r\n                \"password\": contrasena,\r\n            };\r\n\r\n            const usuarioGuardado = await (0,_http_inicioSesion_js__WEBPACK_IMPORTED_MODULE_0__.inicioSesion)(datos);\r\n\r\n            if (usuarioGuardado && usuarioGuardado.mensaje === 'Inicio de sesion exitoso') {\r\n                sessionStorage.setItem('usuario', JSON.stringify(usuarioGuardado));\r\n                window.location.href = \"../inicio\";\r\n            } else {\r\n                mostrarError(\"Inicio de sesión fallido. Mensaje: \" + usuarioGuardado.mensaje);\r\n            }\r\n        } catch (error) {\r\n            console.error(\"Error al iniciar sesión:\", error);\r\n        }\r\n    };\r\n\r\n    if (btnIniciarSesion) {\r\n        btnIniciarSesion.addEventListener('click', realizarInicioSesion);\r\n    } else {\r\n        console.error('No se encontró el botón de inicio de sesión');\r\n    }\r\n\r\n    function mostrarError(mensaje) {\r\n        errorContainer.textContent = mensaje;\r\n        setTimeout(() => {\r\n            errorContainer.textContent = \"\";\r\n        }, 3500);\r\n    }\r\n})\n\n//# sourceURL=webpack://frontend/./src/login/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/login/login.js");
/******/ 	
/******/ })()
;