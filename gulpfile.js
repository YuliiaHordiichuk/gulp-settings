'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var pug = require('gulp-pug');



gulp.task('sass', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('index.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/'));
});

gulp.task('pug', function () {
    return gulp.src('./src/pages/*.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('./build/'));
});

gulp.task('default', function () {
    gulp.watch('./src/scss/*.scss', ['sass']);
    gulp.watch('./src/pages/*.pug', ['pug']);

});