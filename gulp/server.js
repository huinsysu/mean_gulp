'use strict'

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['nodemon'], function(){
	browserSync.init(null, {
    proxy: 'http://localhost:3000',
    browser: 'chrome',
    port: 7000
  });

	gulp.watch('public/**/*.+(scss|jade|ls)', ['inject'])
	.on('change', browserSync.reload);
});