module.exports = function() {
  $.gulp.task("imagemin", function() {
    return $.gulp
      .src("src/img/*")
      .pipe(
        $.plugins.imagemin(
          [
            $.plugins.imagemin.gifsicle({
              interlaced: true
            }),
            $.plugins.imagemin.mozjpeg({
              quality: 75,
              progressive: true
            }),
            $.plugins.imagemin.optipng({
              optimizationLevel: 5
            }),
            $.plugins.imagemin.svgo({
              plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
            })
          ],
          { verbose: true }
        )
      )
      .pipe($.gulp.dest("dist/img/"))
      .on("end", $.browserSync.reload);
  });

  $.gulp.task("imagemin:dev", function() {
    return $.gulp
      .src("src/img/*")
      .pipe($.gulp.dest("dist/img/"))
      .on("end", $.browserSync.reload);
  });
};
