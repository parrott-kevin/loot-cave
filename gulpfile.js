'use strict';

var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');

var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

//---------------------------------------------------------------------------//
// Tasks for running live/beta
//---------------------------------------------------------------------------//

gulp.task('build', [
  'clean:dist',
  'compress:css',
  'copy:fonts',
  'copy:html',
  'compress:js',
  'compress:lib'
], function() {});


//---------------------------------------------------------------------------//
// Tasks for running dev
//---------------------------------------------------------------------------//

gulp.task('dev', [
  'clean:dist',
  'compress:css',
  'copy:fonts',
  'copy:html',
  'compress:js',
  'compress:lib',
  'watch'
], function() {});

// Clean task for dist
gulp.task('clean:dist', function() {
  return del.sync(['public/dist/*']);
});

// Convert less to css
gulp.task('less:css', function() {
  return gulp.src('./public/src/assets/less/styles.less')
    .pipe(less())
    .pipe(gulp.dest('./public/dist/css/'));
});

// Minify created css, depends on less:css
gulp.task('compress:css', ['less:css'], function() {
  return gulp.src('./public/dist/css/styles.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/dist/css/'));
});

// Copy fonts for css
gulp.task('copy:fonts', function() {
  return gulp.src('./public/src/lib/bootstrap/fonts/*')
    .pipe(gulp.dest('./public/dist/fonts/'));
});

// Copy html to dist
gulp.task('copy:html', function() {
  return gulp.src('./public/src/**/*.html')
    .pipe(gulp.dest('./public/dist/'));
});

// Compress javascript
gulp.task('compress:js', function() {
  return gulp.src('./public/src/app/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.concat.js'))
    //.pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/dist/js'));
});

// Compress javascript libraries
gulp.task('compress:lib', function() {
  var libDirectory = './public/src/lib/';
  var libSrc = [
    'angular/angular.js',
    'angular-route/angular-route.js',
    'angular-bootstrap/ui-bootstrap.js',
    'angular-bootstrap/ui-bootstrap-tpls.js',
    'lodash/lodash.js'
  ];

  var lib = libSrc.map(function(i) {
    return libDirectory + i;
  });

  return gulp.src(lib)
    .pipe(concat('lib.concat.js'))
    .pipe(gulp.dest('./public/dist/js'));
});

// Watch for javascript and less changes
gulp.task('watch', function() {
  gulp.watch('./public/src/app/**/*.js', ['compress:js']);
  gulp.watch('./public/src/assets/less/*.less', ['less:css', 'compress:css']);
  gulp.watch('./public/src/**/*.html', ['copy:html']);
});

