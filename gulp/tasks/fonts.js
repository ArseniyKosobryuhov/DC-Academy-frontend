module.exports = function() {
  $.gulp.task("fonts", function() {
    return $.gulp
      .src("src/fonts/*")
      .pipe($.plugins.fonter({
        formats: ['woff', 'ttf', 'eot']
      }))
      .pipe($.gulp.dest("dist/fonts"))
      .on("end", $.browserSync.reload);
  });
};
