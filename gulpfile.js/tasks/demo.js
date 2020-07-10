const { series } 			= require('gulp');
const { src, dest }		= require('gulp');
const sass						= require('gulp-sass');
const sourcemaps			= require('gulp-sourcemaps');
const clean						= require('gulp-clean');
const minify					= require('gulp-minify');
const rename					= require('gulp-rename');
const autoprefixer		= require('gulp-autoprefixer');
const runWintersmith 	= require('run-wintersmith');

sass.compiler					= require('dart-sass');

var config = {
	scss:								'../../demo_site/scss/**/*.scss',
	autoprefixerOptions: {
		browsers:					['last 2 versions', '> 5%']
	},
	buildCss:						['../../demo_site/contents/css'],
	build:							'./build/**/**.*',
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
	return src('./demo_site/**')
	.pipe(runWintersmith.preview());
	cb();
}

function buildDemo(cb) {
	return src('../../demo_site')
	.pipe(runWintersmith.build());
	cb();
}

// Run 'gulp build' for all of the above
const demo = series(wipe, compileCss, buildDemo);

exports.demo = demo;
