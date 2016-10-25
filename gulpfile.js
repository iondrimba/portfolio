var gulp = require('gulp');
var requirejsOptimize = require('gulp-requirejs-optimize');

var requirePaths = {
    noJquery: 'node_modules/nojquery/nojquery',
    TweenLite: 'src/scripts/vendors/TweenLite',
    handlebars: 'node_modules/handlebars/dist/handlebars',
    notifyCss: 'src/scripts/app/core/notifyCss',
    page: 'node_modules/page/page',
    models: 'src/scripts/app/models',
    views: 'src/scripts/app/views',
    vendors: 'src/scripts/vendors',
    core: 'src/scripts/app/core'
};

//sass - lint
gulp.task('scss-lint', require('./tasks/scss-lint.js'));

//sass - scss task
gulp.task('sass', require('./tasks/sass.js'));

//copy js files task
gulp.task('copy-js', require('./tasks/copy.js'));

//css min task
gulp.task('cssmin', require('./tasks/cssmin.js'));

//js min task
gulp.task('minifyjs', require('./tasks/minifyjs.js'));

//require dev  task
gulp.task('requirejs:dev', function() {
    return require('./tasks/requirejs.js')(requirePaths, 'none');
});



//require production  task
gulp.task('requirejs:prod', function() {
    return require('./tasks/requirejs.js')(requirePaths, 'uglify');
});

//browsersync task
gulp.task('browser-sync', require('./tasks/browser-sync.js'));

//watch task
gulp.task('watch', require('./tasks/watch.js'));

gulp.task('default', ['scss-lint', 'sass', 'copy-js', 'requirejs:dev', 'browser-sync', 'watch']);

gulp.task('prod', ['scss-lint', 'sass', 'copy-js', 'cssmin', 'minifyjs', 'requirejs:prod']);
