var gulp = require('gulp')
var plumber = require('gulp-plumber')
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var cssnanon = require('gulp-cssnano');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: "./"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('sass', function() {
	gulp.src(['./styles/scss/**.scss'])
	.pipe(sass())
	.pipe(gulp.dest('./styles/css'))
	.pipe(browserSync.reload({stream:true}));
	});

gulp.task('deploy', function() {
  // minify css
  // minify images or w/e

  // inject min css into HTML
  // minify HTML
  
  })

gulp.task('default', ['browser-sync'], function(){
  gulp.watch("*.html", ['bs-reload']);
  gulp.watch("**/*.scss", ['sass']);
});