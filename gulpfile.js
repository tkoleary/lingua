const { series }      = require('gulp');
const { src, dest }   = require('gulp');
const sass            = require('gulp-sass');
const flatten         = require('gulp-flatten');
const clean           = require('gulp-clean');
const minify          = require('gulp-minify');

sass.compiler         = require('dart-sass');

// First clean out the folder for a new build
function wipe(cb) {
  return src('./dist', {read: false})
    .pipe(clean())
  cb();
}

// Then in parallel...

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

// Run 'gulp build' for all of the above
exports.build = series(wipe, fonts, css, html, min);
