var gulp = require('gulp');
var plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const wait = require('gulp-wait');
const babel = require('gulp-babel');;
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

gulp.task('scripts', function() {
    return gulp.src('./js/scripts.js')
        .pipe(plumber(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        })))
        .pipe(babel({
          presets: [['@babel/env', {modules:false}]]
        }))
        .pipe(uglify({
            output: {
                comments: '/^!/'
            }
        }))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('./js'))
        .pipe(browserSync.stream());  // Inject changes into browser
});

gulp.task('styles', function () {
    return gulp.src('./scss/styles.scss')
        .pipe(wait(250))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());  // Inject changes into browser
});

// Task to serve the site with browser-sync
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './'  // Serve files from 'public' folder
        },
        port: 3000  // Server will run on port 3000
    });

    gulp.watch('./js/scripts.js', gulp.series('scripts'));
    gulp.watch('./scss/styles.scss', gulp.series('styles'));
    gulp.watch('./*.html').on('change', browserSync.reload);  // Reload on HTML changes
});

// Default task to run both 'serve' and 'watch'
gulp.task('default', gulp.series('serve'));
