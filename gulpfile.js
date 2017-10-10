const gulp = require('gulp');
const browserSync = require('browser-sync');

const reload = browserSync.reload;

gulp.task('default', () => {
  console.log("Hello, world");

  gulp.watch('src/App.css').on('change', reload);

});

