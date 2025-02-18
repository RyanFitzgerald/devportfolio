const gulp = require('gulp');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass')); // Use Dart Sass
const wait = require('gulp-wait');
const babel = require('gulp-babel');
const rename = require('gulp-rename');

gulp.task('scripts', function() {
    return gulp.src('./js/scripts.js')
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(babel({
            presets: [['@babel/env', {modules: false}]]
        }))
        .pipe(uglify({
            output: {
                comments: '/^!/'
            }
        }))
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./js'));
});

gulp.task('styles', function () {
    return gulp.src('./scss/styles.scss')
        .pipe(wait(250))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) // ✅ Uses Dart Sass now
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch('./js/scripts.js', gulp.series('scripts'));
    gulp.watch('./scss/styles.scss', gulp.series('styles'));
});

// Default task (Compiles SCSS and JS)
gulp.task('default', gulp.series('styles', 'scripts', 'watch'));