const { src , dest , watch } = require('gulp');
const sass =require('gulp-sass')(require('sass'));


function css(done){
    src('/scss/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))

    done();
}


exports.css=css;
