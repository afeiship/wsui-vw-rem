(function() {
  'use strict';

  var gulp = require('gulp');
  var autoprefixer = require('autoprefixer');
  var sass = require('gulp-sass')(require('sass'));
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*'],
  });

  //styles
  gulp.task('styles', function() {
    return gulp
      .src('src/index.scss')
      .pipe(gulp.dest('dist'));
  });

  gulp.task('styles-tailwind', function() {
    return gulp
      .src('src/tailwind.scss')
      .pipe($.jswork.pkgHeader())
      .pipe(sass({ precision: 4 }))
      .pipe($.postcss([autoprefixer()]))
      .pipe($.rename('tailwind.dist.css'))
      .pipe(gulp.dest('dist'));
  });
})();
