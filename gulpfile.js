'use strict';

var gulp = require('gulp');
var typescript = require('typescript');
var ts = require('gulp-typescript');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var del = require('del');

var webProject = ts.createProject('src/web/tsconfig.json', { typescript: typescript });
var serverProject = ts.createProject('src/server/tsconfig.json', { typescript: typescript });

gulp.task('compileHtml', function () {
    return gulp.src(['src/web/**/*.html']).pipe(gulp.dest('dist/web'));
});

gulp.task('compileWeb', function () {
    var result = gulp.src('src/web/**/*.{ts,tsx}').pipe(ts(webProject));
    return result.js.pipe(gulp.dest('.buildtmp/web'));
});

gulp.task('bundleWeb', ['compileHtml', 'compileWeb'], function () {
    var b = browserify('.buildtmp/web/index.js');
    return b.bundle().pipe(source('bundle.js')).pipe(gulp.dest('dist/web'));
});

gulp.task('compileServer', function () {
    var result = gulp.src('src/server/**/*.ts').pipe(ts(serverProject));
    return result.js.pipe(gulp.dest('dist/server'));
});

gulp.task('clean', function (done) {
    del(['.buildtmp'], done.bind(this));
});

gulp.task('build', ['bundleWeb', 'compileServer']);