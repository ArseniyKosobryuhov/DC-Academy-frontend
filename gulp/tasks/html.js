module.exports = function() {
  $.gulp.task("html:dev", function() {
    return $.gulp
      .src("src/*.html")
      .pipe($.gulp.dest("dist"))
      .on("end", $.browserSync.reload);
  });
};
