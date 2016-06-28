// 'use strict'
var gulp = require('gulp');
var browserify = require('gulp-sass');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');






gulp.task('default', ['html', 'css', 'js', 'watch'], function (){

});

gulp.task('html', function () {
    gulp.src('./index.html')
        .pipe(gulp.dest('./public'));
    // what to do for this task.
});

// Convert SASS into CSS
gulp.task('css', function () {
    gulp.src('./styles.css')
        .pipe(gulp.dest('./public'));
});

// gulp.task('js', function () {
//     gulp.src('./main.js')
//         .pipe(gulp.dest('./public'));
// });

gulp.task('js', function () {
    gulp.src('./main.js')
       .pipe(browserify({
        //     mangle: true,
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('watch', function () {
    // files to watch, then what tasks to run when they change
    gulp.watch('./styles.css', ['css']);
    gulp.watch('./index.html', ['html']);
    gulp.watch('./*.js', ['js']);
    gulp.watch('./views/*.js',['js']);
    gulp.watch('./models/*.js',['js']);

})
























// let start = new VolumeModel();
//
//
//    let volume = new VolumeView({
//        model: start,
//        el: document.getElementById('D-pad'),
//    });
