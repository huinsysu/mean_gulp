'user strict'

var gulp = require('gulp'),
    wrench = require('wrench'),
    clean = require('gulp-clean');

wrench.readdirSyncRecursive('./gulp').filter(function(file){
	return (/\.js/).test(file);
}).map(function(file){
	require('./gulp/' + file);
});

gulp.task('clean', function(){
	return gulp.src('./tmp')
	.pipe(clean());
});
