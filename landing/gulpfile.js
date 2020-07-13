const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const babel = require("gulp-babel");
const tinypng = require("gulp-tinypng-compress");
var uglify = require('gulp-uglify');
sass.compiler = require("node-sass");

gulp.task("pug", function () {
  return gulp
    .src("frontend/*.pug")
    .pipe(
      pug({
        pretty: false,
      })
    )
    .pipe(gulp.dest("prod"));
});

gulp.task("sass", function () {
  return gulp
    .src("frontend/sass/style.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest("prod/css"));
});

gulp.task("fonts", function () {
  return gulp.src("frontend/fonts/*.ttf").pipe(gulp.dest("prod/fonts"));
});

gulp.task("img", function () {
  return gulp
    .src("frontend/img/*.{jpgimg,png,svg}")
    .pipe(
      tinypng({
        key: "7nLKFgKtc4KKybP4TqVD2DxGm02nBNBP",
        log: true,
      })
    )
    .pipe(gulp.dest("prod/img"));
});
gulp.task("js", function () {
  return gulp
    .src("frontend/js/*.js")
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest("prod/js"));
});

gulp.task("pdf", function () {
  return gulp.src("frontend/pdf/*.pdf").pipe(gulp.dest("prod/pdf"));
});

gulp.task("watch", function () {
  gulp.watch("frontend/sass/**/*.sass", gulp.series("sass"));
  gulp.watch("frontend/*.pug", gulp.series("pug"));
  gulp.watch("frontend/img/*.{jpg,png,svg}", gulp.series("img"));
  gulp.watch("frontend/js/*.js", gulp.series("js"));
});
