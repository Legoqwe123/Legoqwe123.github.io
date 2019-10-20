const gulp  = require('gulp');
const cleanCSS = require('gulp-clean-css');
const minifyJs = require('gulp-uglify');
const pump = require('pump');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');

gulp.task('default', defaultTask );

function defaultTask(done){
    console.log("Succes");
    done();
    
}

gulp.task('minify-css', function(done){

    return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('../dest/css'))
    done();
});

gulp.task('minify-js', function(done){

    pump [(
        gulp.src('js/*.js')
        .pipe(minifyJs())
        .pipe(gulp.dest('../dest/js'))
    )]
    done()
});

gulp.task('html-min', function(done){

    return gulp.src('./*.html')
        .pipe(htmlmin({ 
            collapseWhitespace: true 
        } ))
        .pipe(gulp.dest('../dest'))
    
    done()
});

gulp.task('image-min', function(done){

   return  gulp.src('img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: '7nLKFgKtc4KKybP4TqVD2DxGm02nBNBP',
         }))
        .pipe(gulp.dest('../dest/img'))
        
        done()
});

