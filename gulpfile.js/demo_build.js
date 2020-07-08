const { watch, series } = require('gulp');
const { src, dest }			= require('gulp');
const sass							= require('gulp-sass');
const sourcemaps				= require('gulp-sourcemaps');
const clean							= require('gulp-clean');
const minify						= require('gulp-minify');
const rename						= require('gulp-rename');
const autoprefixer			= require('gulp-autoprefixer');
const browserSync				= require('browser-sync').create();
const metalsmith 				= require('gulp-metalsmith');

sass.compiler						= require('dart-sass');

var config = {
	scss:								'./scss/**/*.scss',
	autoprefixerOptions: {
		browsers:					['last 2 versions', '> 5%']
	},
	build:							'../../demo_site',
	buildCss:						['../../demo_site/css'],
	buildCssMin:				['../../demo_site/css/min'],
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

	// output the minified version
	.pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(sourcemaps.write())
	.pipe(rename({ extname: '.min.css' }))
	.pipe(dest(config.buildCssMin))
	cb();
}

function metal(cb) {
	return src('src/demo/**')
	.pipe(metalsmith())
	.pipe(dest(config.build));
	cb();
}

// Serve locally
function serve(cb) {
	browserSync.init({
		server: {
			baseDir: '../../demo_site'
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
exports.build = series(metal, compileCss, serve);
