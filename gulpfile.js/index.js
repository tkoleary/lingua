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
	source:							'./src/**/**.*',
	scss:								'./src/scss/**/**.scss',
	htmlFiles:					'./src/**/*.html',
	fontFolders:				'./src/fonts/**/**.*',
	autoprefixerOptions: {
		browsers:						['last 2 versions', '> 5%']
	},
	build:							'./dist',
	buildCss:						['./dist/css'],
	buildCssMin:				['./dist/css/min'],
	fontsFlat:					'./dist/css/fonts/',
	demoCss:						'./demo_site/contents/css/',
	demoFonts:					'./demo_site/contents/css/fonts/'
};

// Clean out the folder for a new build
function wipe(cb) {
	return src(config.build, {read: false})
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
	.pipe(dest(config.buildCssMin))
	.pipe(dest(config.demoCss))
	cb();
}

// Move the fonts from their subfolders to one big folder
function fonts(cb) {
	return src(config.fontFolders)
	.pipe(flatten())
	.pipe(dest(config.fontsFlat))
	.pipe(dest(config.demoFonts))
	cb();
}

function watchScss(cb) {
  watch(config.scss, { ignoreInitial: false }, compileSass)
  cb();
}

task('default', series(wipe, fonts, watchScss));
