'use strict';

const gulp = require('gulp');

const clean = require('gulp-clean');
const concat = require('gulp-concat');
const filesize = require('gulp-filesize');
const uglify = require('gulp-uglify');
const notify = require('gulp-notify');

gulp.task('concat',function(){
  return gulp.src('sourse/*.js')
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('build/vendor.js'))
});

gulp.task('filesize',function(){
  return gulp.src('sourse/*.js')
  .pipe(gulp.dest('build'))
  .pipe(filesize())
  .pipe(concat('vendor.js'))
  .pipe(filesize())
  // .on('error',gutil.log)
});

gulp.task('clean', function(){
  return gulp.src('sourse', {read:false})
  .pipe(clean());
});

gulp.task("uglify", function(){
  return gulp.src('sourse/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('build/vendor.min.js'))
  .pipe(filesize())
});

gulp.task('notify',function(){
  return gulp.src('sourse/test.ext')
  .pipe(notify("Hello gulp!"));
});
