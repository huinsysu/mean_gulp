'use strict'

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', ['inject'], function(cb) {
  var started = false;

  return nodemon({
    script: 'app.js'
  }).on('start', function() {
    if (!started) {
      cb();
      started = true;
    }
  });
});
