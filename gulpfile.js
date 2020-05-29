const { watch, series } = require('gulp');
const { src, dest }     = require('gulp');
const sass              = require('gulp-sass');
const sourcemaps        = require('gulp-sourcemaps');
const flatten           = require('gulp-flatten');
const clean             = require('gulp-clean');
const minify            = require('gulp-minify');
const rename            = require('gulp-rename');
const autoprefixer      = require('gulp-autoprefixer');
const browserSync       = require('browser-sync').create();

sass.compiler           = require('dart-sass');

var config = {
    source:             './src/**/**.*',
    sassFiles:          './src/sass/**/*.scss',
    htmlFiles:          './src/**/*.html',
    fontFolders:        './src/fonts/**/**.*',
    autoprefixerOptions: {
      browsers:         ['last 2 versions', '> 5%']
    },
    build:              './dist',
    buildCss:           ['./dist/css'],
    buildCssMin:        ['./dist/css/min'],
    fontsFlat:          './dist/css/fonts/'
};

function compileSass(cb) {
  return src(config.sassFiles)

    // output non-minified CSS file
    .pipe(sourcemaps.init())
    .pipe(sass({
       outputStyle : 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer(config.autoprefixerOptions.browsers))
    .pipe(dest(config.buildCss))

    // output the minified version
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest(config.buildCssMin))
  cb();
}


// Clean out the folder for a new build
function wipe(cb) {
  return src(config.build, {read: false})
    .pipe(clean())
  cb();
}

// Move the fonts from their subfolders to one big folder
function fonts(cb) {
  return src(config.fontFolders)
    .pipe(flatten())
    .pipe(dest(config.fontsFlat));
  cb();
}

// Copy over HTML demo files
function html(cb) {
  return src(config.htmlFiles)
    .pipe(dest(config.build));
  cb();
}

// Serve locally
function serve(cb) {
  browserSync.init({
    server: {
      baseDir: './dist'
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
exports.build = series(wipe, fonts, compileSass, html, serve);

// Watch and update on change
exports.stream = function() {
  watch(config.source,series(refresh));
};
