const { watch, series, task }	= require('gulp');
const { src, dest }						= require('gulp');
const sass										= require('gulp-sass');
const sourcemaps							= require('gulp-sourcemaps');
const clean										= require('gulp-clean');
const minify									= require('gulp-minify');
const rename									= require('gulp-rename');
const autoprefixer						= require('gulp-autoprefixer');
const runWintersmith 					= require('run-wintersmith');
const browserSync							= require('browser-sync').create();

sass.compiler									= require('dart-sass');

var config = {
	scss:								'./scss/**.*',
	autoprefixerOptions: {
		browsers:					['last 2 versions', '> 5%']
	},
	buildCss:						['./contents/css'],
};

// Clean out the site folder for a new build
function wipe(cb) {
	return src('./contents/css/**.*', {read: false})
	.pipe(clean({force: true}))
	cb();
}

// Buld the demo site sass
function compileCss(cb) {
	return src(config.scss)

	// output non-minified CSS file
	.pipe(sourcemaps.init())
	.pipe(sass({
		outputStyle : 'expanded'
	}).on('error', sass.logError))
	.pipe(autoprefixer(config.autoprefixerOptions.browsers))
	.pipe(dest(config.buildCss))
	cb();
}

function watchScss(cb) {
  watch(config.scss, { ignoreInitial: false }, compileCss)
  cb();
}

task('default', series(compileCss, watchScss));
