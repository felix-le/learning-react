var gulp = require('gulp'),
  sass = require('gulp-sass'),
  plumber = ('gulp-plumber'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  runSequence = require('run-sequence'),
  imagemin = require('gulp-imagemin'),
  pug = require('gulp-pug'),
  concat = require('gulp-concat'), 
  clean = require('gulp-clean'),
  cache = require('gulp-cache'), 
  watch = require('gulp-watch'),
  sourcemaps = require('gulp-sourcemaps');

// ///////////////////////////////////
// convert Pug - HTML 
// ///////////////////////////////////
gulp.task('pug', function () {
  return gulp.src('app/pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist/'))
    .pipe(reload({
      stream:true
    }))
});    

// //////////////////////////////////////////////////////
// convert scss - css
// //////////////////////////////////////////////////////
gulp.task('sass', function () {
  return gulp.src('app/scss/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }))
    .pipe(autoprefixer())
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css/style.css'))
    .pipe(reload({
      stream: true
    }));
    // .pipe(notify({
    //   messeage: 'css task completed'
    // }));
});

gulp.task('clean', function () {
  return gulp.src(['dist/', '!dist/images/', '!dist/fonts/'])
    .pipe(clean({ force: true }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('fonts', function () {
  gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
});
gulp.task('images', function () {
  return gulp.src('app/images/**/*')
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
    .pipe(reload({
      stream: true
    }));
});
gulp.task('scripts', function () {
  return gulp.src('app/js/*.js')
    .pipe(gulp.dest('dist/scripts'))
    .pipe(reload({
      stream: true
    }));
});

// //////////////////////////////////////////////////////
// Browser-sync
// //////////////////////////////////////////////////////
gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 7777,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('watch', function () {
  watch('app/pug/**/*', ['pug']);
  watch('app/scss/**/*.scss', ['sass']);
  watch('app/images/**/*', ['images']);
  gulp.watch('app/js/**/*.js', ['scripts']);
});

gulp.task('build', function (callback) {
  runSequence('clean',['pug', 'images', 'fonts','sass','scripts'])
});

gulp.task('default', 'build', ['serve:dist', 'watch']);