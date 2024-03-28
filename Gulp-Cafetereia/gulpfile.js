const{ src, dest, watch, series, parallel} = require('gulp');

//CSS y SASS

const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');

//IMAGENES

const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

const avif = require('gulp-avif');

function css( done ){
    //Compilar sass
    //Pasos: 1 - identificar archivo, 2 -compilar, 3 - guardar el .css
    src('src/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe( sass() )
        .pipe( postcss([ autoprefixer(), cssnano() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/css'))

    done();
}

function imagenes(done){
    src('src/img/**/*')
        .pipe(imagemin({ optimizationlevel: 3 }))
        .pipe(dest('build/img'));


    done();
}

function imgwebp(done){

    const opciones = {
        quality: 50
    }

    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'));

    done();
}

function imgavif(done){

    const opciones = {
        quality: 50
    }
    
    src('src/img/**/*.{png,jpg}')
        .pipe(avif(opciones))
        .pipe(dest('build/img'));


    done();
}
function dev(){
    watch( 'src/scss/**/*.scss', css);
    watch('src/img/**/*', imagenes);

}



exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.imgwebp = imgwebp;
exports.imgavif = imgavif;
exports.default = series( imagenes, imgwebp, imgavif,  css, dev);

// Series - inicia tareas en secuencia
// parallel - todos inician al mismo time