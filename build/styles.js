(function () {
  'use strict';

  var gulp = require('gulp');
  var autoprefixer = require('autoprefixer');
  var sass = require('gulp-sass')(require('sass'));
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*'],
  });

  //styles
  gulp.task('styles', function () {
    return gulp
      .src('src/index.scss')
      .pipe(gulp.dest('dist'));
  });

  gulp.task('styles-dist', function () {
    return gulp
      .src('src/index-dist.scss')
      .pipe($.jswork.pkgHeader())
      .pipe(sass({ precision: 4}))
      .pipe($.postcss([autoprefixer()]))
      .pipe($.rename('index.css'))
      .pipe(gulp.dest('dist'));
  });
})();
