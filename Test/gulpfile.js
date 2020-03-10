const gulp = require('gulp');
const pug = require('gulp-pug');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task('pug', function(){
    return gulp.src('frontend/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('prod'))
})

gulp.task('sass', function () {
  return gulp.src('frontend/sass/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('prod/css'));
});

gulp.task('img', function () {
    return gulp.src('frontend/img/*.{jpg,png,svg}')
         .pipe(gulp.dest('prod/img'));
  });
gulp.task('js', function(){
    return gulp.src('frontend/js/*.js')
    .pipe(gulp.dest("prod/js"))
})
   
 
gulp.task('watch', function () {
    gulp.watch('frontend/sass/**/*.sass', gulp.series("sass"));
    gulp.watch('frontend/*.pug', gulp.series("pug"));
    gulp.watch('frontend/img/*.{jpg,png,svg}', gulp.series("img"));
    gulp.watch('frontend/js/*.js', gulp.series("js"));
});
