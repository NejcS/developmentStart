var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var child = require('child_process');
var autoprefixer = require('gulp-autoprefixer');

var server;

gulp.task('build', function() {
  browserify({
    entries: 'assets/js/index.jsx',   // zakaj to dela, čeprav ni *.jsx
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify, {presets: ['react', 'es2015']})
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('public/js/'));
});

gulp.task('server', function() {
  if (server) server.kill();
  server = child.spawn('node', ['server.js']);
});

gulp.task('styles', function() {
  gulp.src('assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function() {
  gulp.watch('assets/sass/*.scss',['styles']);
  gulp.watch('assets/js/*.jsx', ['build']);
});

gulp.task('default', ['server', 'styles', 'build']);
