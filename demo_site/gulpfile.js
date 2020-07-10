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
	scss:								'.scss/**/*.scss',
	autoprefixerOptions: {
		browsers:					['last 2 versions', '> 5%']
	},
	buildCss:						['./contents/css'],
	build:							'./build',
};

// Clean out the site folder for a new build
function wipe(cb) {
	return src(config.build, {read: false})
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
	.pipe(dest(config.buildCss,))
	cb();
}

function previewDemo(cb) {
	runWintersmith.preview();
	cb();
}

function buildDemo(cb) {
	runWintersmith.build();
	cb();
}

// Serve locally
function serve(cb) {
	browserSync.init({
		server: {
			baseDir: './demo_site'
		}
	});
	cb();
}

// Reload on change
function refresh(cb) {
	browserSync.reload()
	cb();
}

// Watch
function watchAll(cb) {
	watch('./**', series(wipe, compileCss, buildDemo, refresh));
	cb();
}

task('all', series(wipe, compileCss, buildDemo, serve, watchAll));
