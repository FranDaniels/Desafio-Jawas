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
Para poder instalar nuestro proyecto nos dirigiremos a GitHub y utilizando el comando `git clone https://github.com/FranDaniels/Desafio-Jawas`.<br>

Cuando se haya clonado el proyecto lo abriremos utilizando Visual Studio Code.

Nos dirigiremos al archivo raíz de Front y ejecutaremos en nuestra terminal de Visual Studio Code el siguiente comando `npm update`, esperaremos a que termine la instalación y nos dirigiremos al directorio raiz del servidor y ejecutaremos el comando `php artisan serve`.<br>

Para finalizar nos dirigiremos a xampp e iniciaremos Apache y MySQL, a continuación, crearemos una base de datos llamada Dualiza e importaremos la base de datos que se encuentra en nuestro repositorio clonado.

## Manual para el usuario
## Mensajes JSON
### Iniciar Sesión
- Ruta: http://127.0.0.1:8000/api/iniciarSesión
- Método: POST
- Body: 
```json 
{
    "correo": "correoexample@gmail.com",
    "password": "admin123"
}
```
### Mostrar Rol
- Ruta: http://127.0.0.1:8000/api/mostrarRol
- Método: GET.
- Body: no espera ningún mensaje JSON
### Asignar Rol
- ruta: http://127.0.0.1:8000/api/asignarRol
- Método: PUT
- Body: 
```json
{
    "correoUsuario": "correoexample@gmail.com",
    "nombreRol": "Administrador"
}
```
