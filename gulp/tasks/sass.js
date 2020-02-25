module.exports = function() {
  $.plugins.sass.compiler = require("node-sass");

  $.gulp.task("sass", function() {
    return $.gulp
      .src("src/sass/main.sass")
      .pipe($.plugins.sourcemaps.init())
      .pipe($.plugins.sass().on("error", $.plugins.sass.logError))
      .pipe($.plugins.autoprefixer())
      .on(
        "error",
        $.plugins.notify.onError({
          title: "style"
        })
      )
      .pipe($.plugins.csso())
      .pipe($.plugins.sourcemaps.write())
      .pipe($.gulp.dest("dist/css"))
      .pipe(
        $.browserSync.reload({
          stream: true
        })
      );
  });

  $.gulp.task("sass:dev", function() {
    return $.gulp
      .src("src/sass/main.sass")
      .pipe($.plugins.sass().on("error", $.plugins.sass.logError))
      .pipe($.gulp.dest("dist/css"))
      .pipe(
        $.browserSync.reload({
          stream: true
        })
      );
  });
};
