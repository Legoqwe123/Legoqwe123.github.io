const gulp = require("gulp");
const tinypng = require("gulp-tinypng-compress");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const htmlmin = require("gulp-html-minifier");
const uglify = require("gulp-uglify");

gulp.task("img", function () {
  return gulp
    .src("frontend/img/*.{jpg,png,svg}")
    .pipe(
      tinypng({
        key: "7nLKFgKtc4KKybP4TqVD2DxGm02nBNBP",
        log: true,
      })
    )
    .pipe(gulp.dest("prod/img"));
});

gulp.task("js", function () {
  return gulp.src("js/*.js").pipe(uglify()).pipe(gulp.dest("prod/js"));
});

gulp.task("css", function () {
  return gulp
    .src("css/**/*.css")
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("prod/css"));
});

gulp.task("img", function () {
  return gulp
    .src("img/*.{jpg,png,svg}")
    .pipe(
      tinypng({
        key: "7nLKFgKtc4KKybP4TqVD2DxGm02nBNBP",
        log: true,
      })
    )
    .pipe(gulp.dest("prod/img"));
});

gulp.task("fonts", function () {
  return gulp
    .src("fonts/*.ttf")

    .pipe(gulp.dest("prod/fonts"));
});

gulp.task("html", function () {
  return gulp
    .src("index.html")
    .pipe(htmlmin({ collapseWhitespace: true, ignorePath: "/assets" }))
    .pipe(gulp.dest("prod"));
});
