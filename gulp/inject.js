var gulp  = require('gulp');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');

gulp.task('inject', ['ls', 'sass', 'jade'], function(){
	var target = gulp.src('./tmp/views/index.html');
	var sources = gulp.src(['./tmp/styles/*.css', './tmp/scripts/*.js'], {read: false});

	return target.pipe(inject(sources))
	.pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
	.pipe(gulp.dest('./tmp'));
});