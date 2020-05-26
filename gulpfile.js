const { watch, series } = require('gulp');
const { src, dest }     = require('gulp');
const sass              = require('gulp-sass');
const flatten           = require('gulp-flatten');
const clean             = require('gulp-clean');
const minify            = require('gulp-minify');
const browserSync       = require('browser-sync').create();

sass.compiler = require('dart-sass');

// Clean out the folder for a new build
function wipe(cb) {
  return src('./dist', {read: false})
    .pipe(clean())
  cb();
}

// Compile the scss files to css
function css(cb) {
  return src('./src/sass/**/*.scss')
    .pipe(sass({errLogToConsole: true}))
    .pipe(dest('./dist/css'));
  cb();
}

// Complie minified
function min(cb) {
  return src('./src/sass/**/*.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(dest('dist/css/minified'));
  cb();
}

// Move the fonts from their subfolders to one big folder
function fonts(cb) {
  return src('./src/fonts/**/**.*')
    .pipe(flatten())
    .pipe(dest('./dist/css/fonts/'));
  cb();
}

// Copy over HTML demo files
function html(cb) {
  return src('./src/**.*')
    .pipe(dest('./dist/'));
  cb();
}

// Serve locally
function serve(cb) {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  cb();
}

// Reload on change
function refresh(cb) {
  browserSync.reload()
  cb();
}

// Run 'gulp build' for all of the above
exports.build = series(wipe, fonts, css, html, min, serve);

// Run 'gulp build' for all of the above
exports.stream = function() {
  watch('./src/sass/**/*.scss',series(wipe, fonts, css, html, min, refresh));
};
