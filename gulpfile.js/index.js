const { watch, series, task }	= require('gulp');
const demoBuild 							= require("./tasks/demo");
const linguaBuild 						= require("./tasks/lingua");
const browserSync							= require('browser-sync').create();

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
	watch('src/**/**.*', series(linguaBuild.lingua, demoBuild.demo, refresh));
	cb();
}

task('default', series(linguaBuild.lingua));

task('all', series(linguaBuild.lingua, demoBuild.demo, serve, watchAll));
