'use strict'

var gulp = require('gulp');
var gulpLivescript = require('gulp-livescript');
var browserSync = require('browser-sync');

gulp.task('ls', function(){
	return gulp.src('public/scripts/*.ls')
	.pipe(gulpLivescript({bare: true}))
	.pipe(gulp.dest('tmp/scripts/'))
	.pipe(browserSync.stream({match: 'tmp/**/*.js'}));
});
