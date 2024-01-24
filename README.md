# Cafeteria

Este es un proyecto de cafeteria que utiliza Gulp para automatizar tareas. El propósito principal de este proyecto.

## Configuración

Para comenzar con el proyecto, sigue estos pasos:

1. **Crea un archivo package.json:**
   ```bash
   npm init

2. **Instalar Gulp:**
    ```bash
    npm install --save-dev gulp


## Crear GulFile.js
Luego creamos el archivo gulfile.js

1. **Ejecutando primera Tarea**
    ```bash
    function tarea(done){
    console.log('Mi primera tarea .... ');
    done(); // Aqui finaliza la tarea
    }
    exports.tarea = tarea;
    Desde la consola
    gulp tarea

## Creando estructura sass
crear una carpeta src luego otra carpeta scss y dentro de la carpeta app.scss

cafeteria/
|-- src/
|   |-- scss/
|       |-- app.scss


## Instalar despendencias
    ```bash
    npm i --save-dev sass gulp-sass