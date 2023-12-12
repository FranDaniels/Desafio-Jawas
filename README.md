# Desafio-Jawas
## Descripción
Dualiza es una empresa innovadora que surge de la inspiración de los 
entrañables Jawas, esos personajes ingeniosos y astutos de la famosa saga 
cinematográfica. Siguiendo el espíritu de estos pequeños traficantes de 
cacharros electrónicos, Dualiza se embarca en un proyecto único y creativo 
que combina la reutilización de tecnología obsoleta con la creación de joyas 
y abalorios con fines no lucrativos.

La misión principal de Dualiza es promover la sostenibilidad y la creatividad 
a través de la reutilización de dispositivos electrónicos en desuso. La 
empresa actúa como intermediaria entre empresas colaboradoras y usuarios 
clasificadores, ofreciendo una plataforma digital intuitiva y eficiente.
## Requisitos
- Tener instalado NodeJS:<br>
Para poder instalar NodeJS nos dirigiremos a la página oficial de <a href="https://nodejs.org/en">NodeJS</a>.
- Tener una cuenta en GitHub:<br>
Para poder crearnos una cuenta en GitHub nos dirigiremos a la pagina oficial de <a href="https://github.com">GitHub</a>.

- Tener instalado Visual Studio Code:<br>
Para poder instalarlo nos dirigiremos a la página oficial de <a href="https://code.visualstudio.com/download">Visual Studio Code</a>.
- Deberemos tener instalado xampp:<br>
Para poder gestionar la base de datos con xampp nos dirigiremos a la pagina oficial de xampp <a href="https://www.apachefriends.org/es/download.html"></a>.

## Instalación
- Para poder instalar nuestro proyecto nos dirigiremos a GitHub y utilizando el comando `git clone https://github.com/FranDaniels/Desafio-Jawas`.<br>

- Cuando se haya clonado el proyecto lo abriremos utilizando Visual Studio Code.

- Implementaremos el archivo `.env` en el apartado del backend.

- Nos dirigiremos a xampp e iniciaremos Apache y MySQL, a continuación, crearemos una base de datos llamada Dualiza e importaremos la base de datos que se encuentra en nuestro repositorio clonado.

- Nos dirigiremos al archivo raíz de Front y ejecutaremos en nuestra terminal de Visual Studio Code el siguiente comando `npm install` con este comando se nos generará la carpeta `node_modules`, esperaremos a que termine la instalación. 

- Ejecutaremos el comando `npm run build` con este comando generaremos la carpeta `.dist` para finalizar con el fronted ejecutaremos el comando `npm run dev` para ejecutar el webpack.

- Nos dirigiremos al directorio raiz del servidor y ejecutaremos el script `.\script.bat` para cargar todas las migrations y los seeders en la base de datos ya para finalizar en backend utilizaremos el comando `php artisan serve` para poder arrancar el servidor.

## Manual para el administrador de la API

### Obtener Rol de Usuario
- Ruta: `http://127.0.0.1:8000/api/obtenerRol/{isUsuario}`
- Método: `GET`
- Body: no espera ningún mensaje JSON

### Crear Usuario
- Ruta: `http://127.0.0.1:8000/api/admin/crearUsuario`
- Método: `POST`
- Header: `Bearer 26|McDZR6XJK6u6DFy2rJnvQiZmcoeNc4mGr4TjsGFde922b7e4`
- Body:
```json
{
  "nombre": "Francisco",
  "apellido": "Alvarez",
  "correo": "correoexample@gmail.com",
  "password": "jawas123",
  "rol": "1"
}
```
### Listar Usuarios
- Ruta: `http://127.0.0.1:8000/api/admin/listarUsuarios`
- Método: `GET`
- Header: `Bearer 26|McDZR6XJK6u6DFy2rJnvQiZmcoeNc4mGr4TjsGFde922b7e4`
- Body: no espera ningún mensaje JSON

### Modificar Usuario
- Ruta: `http://127.0.0.1:8000/api/admin/modificarUsuario`
- Método: `POST`
- Header: `Bearer 26|McDZR6XJK6u6DFy2rJnvQiZmcoeNc4mGr4TjsGFde922b7e4`
- Body:
```json
{
  "id":"1",
  "nombre":"Fran",
  "apellido":"Fernandez"
}
```
### Dar Alta
- Ruta: `http://127.0.0.1:8000/api/admin/darAlta/{id}`
- Método: `PUT`
- Header: `Bearer 26|McDZR6XJK6u6DFy2rJnvQiZmcoeNc4mGr4TjsGFde922b7e4`
- Body: no espera ningún mensaje JSON

### Dar Baja
- Ruta: `http://127.0.0.1:8000/api/admin/darBaja/{id}`
- Método: `PUT`
- Header: `Bearer 26|McDZR6XJK6u6DFy2rJnvQiZmcoeNc4mGr4TjsGFde922b7e4`
- Body: no espera ningún mensaje JSON

##
## Manual para el Usuario de la API

### Registrar
- Ruta: `http://127.0.0.1:8000/api/registro`
- Método: `POST`
- Body: 
```json
{
  "nombre": "Francisco",
  "apellido": "Alvarez",
  "correo": "correoexample@gmail.com",
  "password": "jawas123"
}
```
### Iniciar Sesión
- Ruta: `http://127.0.0.1:8000/api/iniciarSesión`
- Método: `POST`
- Body: 
```json 
{
    "correo": "correoexample@gmail.com",
    "password": "jawas123"
}
```

### Donar 
- Ruta: `http://127.0.0.1:8000/api/donar`
- Método: `POST`
- Header: `Bearer 26|McDZR6XJK6u6DFy2rJnvQiZmcoeNc4mGr4TjsGFde922b7e4`
- Body: 
```json 
{
    "descripcion": "correoexample@gmail.com",
    "latitud": "38.69296294925023",
    "longitud":"-4.1086506843566895",
    "idUsuario":"1"
}
```

##
## Manual para el Diseñador de la API

### Mostrar Recetas
- Ruta: `http://127.0.0.1:8000/api/mostrarRecetas`
- Método: `GET`
- Body: no espera ningún mensaje JSON

##
## Manual para el Clasificador de la API

### Listar lotes
- Ruta: `http://127.0.0.1:8000/api/clasificador/listarLotes`
- Método: `GET`
- Header: `Bearer 26|McDZR6XJK6u6DFy2rJnvQiZmcoeNc4mGr4TjsGFde922b7e4`
- Body: no espera ningún mensaje JSON

### Listar lotes clasificador
- Ruta: `http://127.0.0.1:8000/api/clasificador/listarMisLotes/{idUsuario}`
- Método: `GET`
- Header: `Bearer 26|McDZR6XJK6u6DFy2rJnvQiZmcoeNc4mGr4TjsGFde922b7e4`
- Body: no espera ningún mensaje JSON

### Modificar Rol del Usuario
- http://127.0.0.1:8000/api/modificarRol/5
- PUT
- 
```json 
{
  "rol": 3
}
```