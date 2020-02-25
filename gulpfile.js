"use strict";

global.$ = {
  gulp: require("gulp"),
  plugins: require("gulp-load-plugins")(),
  browserSync: require("browser-sync").create(),

  path: {
    tasks: require("./gulp/config/tasks.js")
  }
};

$.path.tasks.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task(
  "default",
  $.gulp.series(
    $.gulp.parallel(
      "html:dev",
      "sass:dev",
      "fonts",
      "scripts:lib",
      "scripts",
      "imagemin:dev"
    ),
    $.gulp.parallel("watch", "browserSync")
  )
);

$.gulp.task(
  "dist",
  $.gulp.series(
    $.gulp.parallel(
      "html:dev",
      "sass",
      "fonts",
      "scripts:lib",
      "scripts",
      "imagemin"
    ),
    $.gulp.parallel("watch", "browserSync")
  )
);