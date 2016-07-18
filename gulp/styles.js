'use strict'

var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function(){
	return gulp.src('public/styles/sass/*.scss')
	.pipe(gulpSass().on('error', gulpSass.logError))
	.pipe(gulp.dest('tmp/styles'))
	.pipe(browserSync.stream({match: 'tmp/styles/**/*.css'}));
});
