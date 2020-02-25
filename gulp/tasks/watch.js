module.exports = function() {
  $.gulp.task("watch", function() {
    $.gulp.watch("src/*.html", $.gulp.series("html:dev"));
    $.gulp.watch("src/sass/**/*.sass", $.gulp.series("sass:dev"));
    $.gulp.watch("src/js/*.js", $.gulp.series("scripts"));
    $.gulp.watch("src/img/*", $.gulp.series("imagemin:dev"));
    $.gulp.watch("src/fonts/*", $.gulp.series("fonts"));
  });
};
