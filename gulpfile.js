const gulp = require('gulp');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));  // Use Dart Sass
const wait = require('gulp-wait');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

// Task to process scripts
gulp.task('scripts', function() {
    return gulp.src('./js/scripts.js')
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
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

// Task to process styles (Sass)
gulp.task('styles', function () {
    return gulp.src('./scss/styles.scss')
        .pipe(wait(250))  // Wait to ensure files are ready
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))  // Use Dart Sass
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());  // Inject changes into browser
});

// Task to serve the site with browser-sync
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './'  // Serve files from root folder
        },
        port: 3000  // Server will run on port 3000
    });

    // Watch for changes in scripts, styles, and HTML files
    gulp.watch('./js/scripts.js', gulp.series('scripts'));
    gulp.watch('./scss/**/*.scss', gulp.series('styles'));  // Watch all .scss files in scss folder
    gulp.watch('./*.html').on('change', browserSync.reload);  // Reload on HTML changes
});

// Default task to run both 'serve' and 'watch'
gulp.task('default', gulp.series('serve'));
