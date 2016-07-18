var gulp = require('gulp');
var gulpJade = require('gulp-jade');
var browserSync = require('browser-sync');

gulp.task('jade', function(){
	return gulp.src('public/views/*.jade')
	.pipe(gulpJade({pretty: true}))
	.pipe(gulp.dest('tmp/views/'))
	.pipe(browserSync.stream({match: 'tmp/**/*.html'}));
});