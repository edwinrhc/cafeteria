const { src,dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done){

    //Compilar sass
    //Pasos: 1 - Identificar archivo, 3 - compilarla, 3 - Guardar el .css

    //en que carpeta se encuentra la hoja de estilo
    src('src/scss/app.scss')
        //Compila
        .pipe(sass({ outputStyle:'compressed'}))
        //Gurdamos la hoja compilada
        .pipe( dest('build/css') )
        // Finaliza la ejecución
        done();

}

function dev(){
    //Aqui escucha pero no finaliza hasta que lo canceles
    watch('src/scss/app.scss', css)
}

exports.css = css;
exports.dev = dev;