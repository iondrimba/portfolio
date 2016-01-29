var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');
var requirejsOptimize = require('gulp-requirejs-optimize');
var concatCss = require('gulp-concat-css');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var autoprefixer = require('gulp-autoprefixer');


var requirePaths = {
    lib: 'source/scripts/app/lib',
    views: 'source/scripts/app/views',
    page: 'node_modules/page/page',
    vendors: 'source/scripts/vendors',
    noJquery: 'node_modules/nojquery/nojquery',
    TweenLite: 'source/scripts/vendors/TweenLite',
    core: 'source/scripts/app/core'
};

gulp.task('sass', function() {
    gulp.src('./source/styles/app/main.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./build/css'));
});


gulp.task('copy-js-files', function() {
    gulp.src(['node_modules/gulp-requirejs/node_modules/requirejs/require.js', 'source/scripts/vendors/page.js'])
        .pipe(gulp.dest('./build/scripts/'));
});

gulp.task('cssmin', function() {
    gulp.src('./build/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('minifyjs', function() {
    return gulp.src('./build/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
});


gulp.task('requirejs:dev', function() {
    return gulp.src('source/scripts/app/main.js')
        .pipe(requirejsOptimize(function() {
            return {
                name: 'source/scripts/app/main',
                out: 'build/scripts/main.js',
                baseUrl: '',
                enforceDefine: true,
                waitSeconds: 10000,
                optimizeAllPluginResources: false,
                noGlobal: true,
                optimize: 'none',
                mainConfigFile: 'source/scripts/app/main.js',
                allowSourceOverwrites: false,
                paths: requirePaths
            };
        }))
        .pipe(gulp.dest('./'));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: 'local'
    });


    gulp.watch("build/css/*.css").on('change', browserSync.reload)
    gulp.watch("build/scripts/*.js").on('change', browserSync.reload)
    gulp.watch("*.html").on('change', browserSync.reload)

    gulp.watch('./source/styles/**/*.{sass,scss}', ['sass']);
    gulp.watch('./source/scripts/**/*.js', ['requirejs:dev']);
});


gulp.task('requirejs:prod', function() {
    return gulp.src('source/scripts/app/main.js')
        .pipe(requirejsOptimize(function() {
            return {
                name: 'source/scripts/app/main',
                out: 'build/scripts/main.js',
                baseUrl: '',
                waitSeconds: 0,
                optimizeAllPluginResources: true,
                noGlobal: true,
                optimize: 'uglify',
                mainConfigFile: 'source/scripts/app/main.js',
                allowSourceOverwrites: false,
                paths: requirePaths
            };
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('./source/styles/**/*.{sass,scss}', ['sass']);
    gulp.watch('./source/scripts/**/*.js', ['requirejs:dev']);
});

gulp.task('default', ['sass', 'copy-js-files', 'requirejs:dev', 'browser-sync', 'watch'], function() {});

gulp.task('prod', ['sass', 'copy-js-files', 'cssmin', 'minifyjs', 'requirejs:prod'], function() {});
