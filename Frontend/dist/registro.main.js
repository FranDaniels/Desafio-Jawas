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

/***/ "./src/http/registro.js":
/*!******************************!*\
  !*** ./src/http/registro.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   crearUsuario: () => (/* binding */ crearUsuario)\n/* harmony export */ });\nasync function crearUsuario(datos){   \r\n    let bodyContent = JSON.stringify(\r\n      {\r\n          \"nombre\": datos.nombre,\r\n          \"apellido\": datos.apellido,\r\n          \"correo\": datos.correo,\r\n          \"password\": datos.password,\r\n      }\r\n  );  \r\n\r\n    let headersList = {\r\n    \"Content-Type\": \"application/json\",\r\n      };\r\n  \r\n    let response = await fetch(\"http://127.0.0.1:8000/api/registro\", {\r\n      method: \"POST\",\r\n      body: bodyContent,\r\n      headers: headersList,\r\n    });\r\n\r\n    if (!response.ok) {\r\n      throw new Error('Error')\r\n    }else{\r\n      let data = await response.json();\r\n      \r\n      return data;          \r\n    }\r\n\r\n  }\n\n//# sourceURL=webpack://frontend/./src/http/registro.js?");

/***/ }),

/***/ "./src/registro/registro.js":
/*!**********************************!*\
  !*** ./src/registro/registro.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _http_registro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http/registro.js */ \"./src/http/registro.js\");\n/* harmony import */ var _utils_validaciones_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/validaciones.js */ \"./src/utils/validaciones.js\");\n\r\n\r\n\r\nlet nombre=document.getElementById(\"nombre\");\r\nlet apellido=document.getElementById(\"apellido\");\r\nlet correo=document.getElementById(\"correo\");\r\nlet pass=document.getElementById(\"password\");\r\nlet pass2=document.getElementById(\"confirmPassword\");\r\nlet botonRegistro=document.getElementById(\"btn-registrar\");\r\nlet formulario=document.getElementById(\"formularioRegistro\");\r\n\r\nformulario.addEventListener(\"input\",function(){\r\n    botonRegistro.removeAttribute(\"disabled\",true);\r\n})\r\n\r\nbotonRegistro.addEventListener(\"click\",async function(){\r\n  if ((0,_utils_validaciones_js__WEBPACK_IMPORTED_MODULE_1__.comprobarValidaciones)(nombre,apellido,correo,pass,pass2)) {\r\n          var datos=cargarDatos();\r\n          await (0,_http_registro_js__WEBPACK_IMPORTED_MODULE_0__.crearUsuario)(datos).then(function(data){\r\n            var error=document.getElementById(\"errores\");\r\n            error.innerHTML=\"\";\r\n            error.style.color=\"green\";\r\n            error.innerHTML=\"Usuario Creado\";\r\n          }).catch(function(error){\r\n            var error=document.getElementById(\"errores\");\r\n            error.innerHTML=\"\";\r\n            error.style.color=\"red\";\r\n            error.innerHTML=\"Usuario no creado\";\r\n          });\r\n        }\r\n})\r\n\r\nfunction cargarDatos(){\r\n  var datos={\r\n    nombre:nombre.value,\r\n    apellido:apellido.value,\r\n    correo:correo.value,\r\n    password:pass.value\r\n  }\r\n\r\n  return datos;\r\n}\n\n//# sourceURL=webpack://frontend/./src/registro/registro.js?");

/***/ }),

/***/ "./src/utils/funciones.js":
/*!********************************!*\
  !*** ./src/utils/funciones.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cleanValue: () => (/* binding */ cleanValue),\n/* harmony export */   comprobarLongitudValores: () => (/* binding */ comprobarLongitudValores),\n/* harmony export */   comprobarValores: () => (/* binding */ comprobarValores),\n/* harmony export */   empty: () => (/* binding */ empty),\n/* harmony export */   numChars: () => (/* binding */ numChars)\n/* harmony export */ });\nfunction empty(texto) {\r\n    return texto.length==0;\r\n}\r\n\r\nfunction cleanValue(value){\r\n    return (value.value=\"\");\r\n}\r\n\r\nfunction numChars(strValue){\r\n    return strValue.length;\r\n}\r\n\r\nfunction comprobarValores(value1, value2){\r\n    return value1.value==value2.value;\r\n}\r\n\r\nfunction comprobarLongitudValores(value1,value2){\r\n    return value1.length==value2.length;\r\n}\n\n//# sourceURL=webpack://frontend/./src/utils/funciones.js?");

/***/ }),

/***/ "./src/utils/validaciones.js":
/*!***********************************!*\
  !*** ./src/utils/validaciones.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comprobarApellido: () => (/* binding */ comprobarApellido),\n/* harmony export */   comprobarCorreo: () => (/* binding */ comprobarCorreo),\n/* harmony export */   comprobarNombre: () => (/* binding */ comprobarNombre),\n/* harmony export */   comprobarPassword: () => (/* binding */ comprobarPassword),\n/* harmony export */   comprobarPasswordPerfil: () => (/* binding */ comprobarPasswordPerfil),\n/* harmony export */   comprobarValidacionePerfil: () => (/* binding */ comprobarValidacionePerfil),\n/* harmony export */   comprobarValidaciones: () => (/* binding */ comprobarValidaciones)\n/* harmony export */ });\n/* harmony import */ var _funciones_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funciones.js */ \"./src/utils/funciones.js\");\n\r\n\r\nlet ERNombre=/^[a-zA-Z-\\s]{3,20}$/;\r\nlet ERApellido=/^[a-zA-Z-\\s]{2,30}$/;\r\nlet ERCorreo=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;\r\nlet ERPassword=/^[a-zA-Z0-9\\-.*#$]{6,12}$/;\r\n\r\nvar error=document.getElementById(\"errores\");\r\nlet validacionCorrecta=[];\r\nlet validacionIncorrecta=[];\r\n\r\nlet errores=[\r\n    \"El campo nombre se encuentra vacio\",\r\n    \"El campo apellido se encuentra vacio\",\r\n    \"El campo correo se encuentra vacio\",\r\n    \"El campo contraseña se encuentra vacio\",\r\n    \"El nombre debe tener entre 3 y 20 caracteres\",\r\n    \"El apellido debe tener entre 2 y 30 caracteres\",\r\n    \"El correo electrónico no cumple con los requisitos para ser un correo electrónico <br> ejemplo: usuario@foo.tld\",\r\n    \"La contraseña debe tener entre 6 y 12 caracteres y puede contener los siguientes caracteres especiales: *, #, $\"\r\n]\r\n\r\nfunction comprobarNombre(nombre){\r\n    nombre.style.borderColor=\"\";\r\n    if ((0,_funciones_js__WEBPACK_IMPORTED_MODULE_0__.empty)(nombre.value)) {\r\n        nombre.style.borderColor=\"red\";\r\n        validacionIncorrecta.push(errores[0])\r\n    }else{\r\n        if (ERNombre.test(nombre.value)) {\r\n            \r\n        }else{\r\n            nombre.style.borderColor=\"red\";\r\n            validacionIncorrecta.push(errores[4])\r\n            ;(0,_funciones_js__WEBPACK_IMPORTED_MODULE_0__.cleanValue)(nombre);\r\n        }\r\n    }\r\n    validacionCorrecta.push(nombre.value);\r\n\r\n    var rtnArray=[validacionCorrecta,validacionIncorrecta]\r\n    \r\n    return rtnArray;\r\n}\r\n\r\nfunction comprobarApellido(apellido){\r\n    apellido.style.borderColor=\"\";\r\n    if ((0,_funciones_js__WEBPACK_IMPORTED_MODULE_0__.empty)(apellido.value)) {\r\n        apellido.style.borderColor=\"red\";\r\n        validacionIncorrecta.push(errores[1])\r\n    }else{\r\n        if (ERApellido.test(apellido.value)) {\r\n\r\n        }else{\r\n            apellido.style.borderColor=\"red\";\r\n            validacionIncorrecta.push(errores[5])\r\n            ;(0,_funciones_js__WEBPACK_IMPORTED_MODULE_0__.cleanValue)(apellido);\r\n        }\r\n    }\r\n    validacionCorrecta.push(apellido.value);\r\n    \r\n    var rtnArray=[validacionCorrecta,validacionIncorrecta]\r\n    \r\n    return rtnArray;\r\n}\r\n\r\nfunction comprobarCorreo(correo){\r\n    correo.style.borderColor=\"\";\r\n    if ((0,_funciones_js__WEBPACK_IMPORTED_MODULE_0__.empty)(correo.value)) {\r\n        correo.style.borderColor=\"red\";\r\n        validacionIncorrecta.push(errores[2])\r\n    }else{\r\n        if (ERCorreo.test(correo.value)) {\r\n            \r\n        }else{\r\n            correo.style.borderColor=\"red\";\r\n            validacionIncorrecta.push(errores[6])\r\n            ;(0,_funciones_js__WEBPACK_IMPORTED_MODULE_0__.cleanValue)(correo);\r\n        }\r\n    }\r\n    validacionCorrecta.push(correo.value);\r\n    \r\n    var rtnArray=[validacionCorrecta,validacionIncorrecta]\r\n    \r\n    return rtnArray;\r\n}\r\n\r\nfunction comprobarPassword(password){\r\n    password.style.borderColor=\"\";\r\n    if ((0,_funciones_js__WEBPACK_IMPORTED_MODULE_0__.empty)(password.value)) {\r\n        password.style.borderColor=\"red\";\r\n        validacionIncorrecta.push(errores[3])\r\n    }else{\r\n        if (ERPassword.test(password.value)) {\r\n            \r\n        }else{\r\n            password.style.borderColor=\"red\";\r\n            validacionIncorrecta.push(errores[7])\r\n            ;(0,_funciones_js__WEBPACK_IMPORTED_MODULE_0__.cleanValue)(password);\r\n        }\r\n    }\r\n    validacionCorrecta.push(password.value);\r\n    \r\n    var rtnArray=[validacionCorrecta,validacionIncorrecta]\r\n    \r\n    return rtnArray;\r\n}\r\n\r\nfunction comprobarValidaciones(nombre,apellido,correo,password,password2){\r\n    var esValido=false;\r\n    validacionCorrecta=[];\r\n    validacionIncorrecta=[];\r\n    comprobarNombre(nombre);\r\n    comprobarApellido(apellido);\r\n    comprobarCorreo(correo);\r\n    comprobarPassword(password);\r\n    comprobarPassword(password2);\r\n    \r\n    if ((0,_funciones_js__WEBPACK_IMPORTED_MODULE_0__.comprobarLongitudValores)(password,password2)) {\r\n        if ((0,_funciones_js__WEBPACK_IMPORTED_MODULE_0__.comprobarValores)(password,password2)) {\r\n            if (validacionIncorrecta.length>0) {\r\n\r\n            }else{\r\n                esValido=true\r\n            }\r\n        }else{\r\n            validacionIncorrecta.push('Las contraseñas no coinciden')\r\n            error.innerHTML=\"\";\r\n            error.style.color=\"red\";\r\n            console.log(validacionIncorrecta)\r\n            error.innerHTML=mensajesDeError(validacionIncorrecta);\r\n        }\r\n    }else{\r\n        validacionIncorrecta.push('Las contraseñas no coinciden')\r\n        error.innerHTML=\"\";\r\n        error.style.color=\"red\";\r\n        console.log(validacionIncorrecta)\r\n        error.innerHTML=mensajesDeError(validacionIncorrecta);\r\n    }\r\n    return esValido;\r\n}\r\n\r\nfunction comprobarValidacionePerfil(nombre,apellido,correo,pass){\r\n    var esValido=false;\r\n    validacionCorrecta=[];\r\n    validacionIncorrecta=[];\r\n    comprobarNombre(nombre)\r\n    comprobarApellido(apellido)\r\n    comprobarCorreo(correo)\r\n    \r\n    if (validacionIncorrecta.length>0) {\r\n        console.log('adios')\r\n        error.innerHTML=\"\";\r\n        error.style.color=\"red\";\r\n        console.log(validacionIncorrecta)\r\n        error.innerHTML=mensajesDeError(validacionIncorrecta);\r\n    }else{\r\n        console.log('hola')\r\n        error.innerHTML=\"\";\r\n        error.style.color=\"green\";\r\n        error.innerHTML=\"Datos cambiados\";\r\n        esValido=true\r\n    }\r\n    return esValido;\r\n}\r\n\r\nfunction comprobarPasswordPerfil(password){\r\n    var esValido=false;\r\n    validacionCorrecta=[]\r\n    validacionIncorrecta=[]\r\n    comprobarPassword(password)\r\n\r\n    if (validacionIncorrecta.length>0) {\r\n        console.log('adios')\r\n        error.innerHTML=\"\";\r\n        error.style.color=\"red\";\r\n        console.log(validacionIncorrecta)\r\n        error.innerHTML=mensajesDeError(validacionIncorrecta);\r\n    }else{\r\n        console.log('hola')\r\n        error.innerHTML=\"\";\r\n        error.style.color=\"green\";\r\n        error.innerHTML=\"Contraseña cambiada\";\r\n        esValido=true\r\n    }\r\n    return esValido;\r\n}\r\n\r\nfunction mensajesDeError(errores) {\r\n    let mensajeError=\"\";\r\n    for (let i = 0; i < errores.length; i++) {\r\n        mensajeError += errores[i] + \"<br>\";\r\n    }\r\n    return mensajeError;\r\n}\n\n//# sourceURL=webpack://frontend/./src/utils/validaciones.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/registro/registro.js");
/******/ 	
/******/ })()
;