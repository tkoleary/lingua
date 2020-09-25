const { watch, series, task }	= require('gulp');
const { src, dest }						= require('gulp');
const sass										= require('gulp-sass');
const sourcemaps							= require('gulp-sourcemaps');
const flatten									= require('gulp-flatten');
const clean										= require('gulp-clean');
const minify									= require('gulp-minify');
const rename									= require('gulp-rename');
const autoprefixer						= require('gulp-autoprefixer');

sass.compiler									= require('dart-sass');

var config = {
	scss:								'./scss/**/**.scss',
	fonts:							'./scss/fonts/**/**.*',
	factoryFonts:				'./node_modules/webfont-factory/dist/fonts/**.*',
	autoprefixerOptions: {
		browsers:						['last 2 versions', '> 5%']
	},
	build:							['./css/', '!./'],
	buildCss:						['./css/'],
	buildFonts:					['./css/fonts/'],

};

// Clean out the folder for a new build
function wipeCss(cb) {
	return src(config.build, {read: false})
	.pipe(clean())
	cb();
}

// Clean out the fonts for a new build
function wipeFonts(cb) {
	return src(config.buildFonts, {read: false})
	.pipe(clean())
	cb();
}

function compileSass(cb) {
	return src(config.scss)

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
	.pipe(dest(config.buildCss))
	cb();
}

// Get the user fonts move to CSS
function userFonts(cb) {
	return src(config.fonts)
	.pipe(flatten())
	.pipe(dest(config.buildFonts))
	cb();
}

// Get the webfont-factory fonts and move to CSS
function factoryFonts(cb) {
	return src(config.factoryFonts)
	.pipe(dest(config.buildFonts))
	cb();
}

function watchScss(cb) {
  watch(config.scss, { ignoreInitial: false }, compileSass)
  cb();
}

task('default', series(wipeFonts, wipeCss, userFonts, factoryFonts, watchScss));
