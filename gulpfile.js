var gulp = require('gulp');

var requirePaths = {
    lib: 'source/scripts/app/lib',
    models: 'source/scripts/app/models',
    views: 'source/scripts/app/views',
    page: 'node_modules/page/page',
    vendors: 'source/scripts/vendors',
    noJquery: 'node_modules/nojquery/nojquery',
    TweenLite: 'source/scripts/vendors/TweenLite',
    handlebars: 'node_modules/handlebars/dist/handlebars',
    core: 'source/scripts/app/core'
};

//sass - scss task
gulp.task('sass', require('./tasks/sass.js'));

//copy js files task
gulp.task('copy-js', require('./tasks/copy.js'));

//css min task
gulp.task('cssmin', require('./tasks/cssmin.js'));

//js min task
gulp.task('minifyjs', require('./tasks/minifyjs.js'));

//require dev  task
gulp.task('requirejs:dev', function(){
    return require('./tasks/requirejs.js')(requirePaths, 'none');
});

//require production  task
gulp.task('requirejs:prod', function(){
    return require('./tasks/requirejs.js')(requirePaths, 'uglify');
});

//browsersync task
gulp.task('browser-sync', require('./tasks/browser-sync.js'));

//watch task
gulp.task('watch', require('./tasks/watch.js'));

gulp.task('default', ['sass', 'copy-js', 'requirejs:dev', 'browser-sync', 'watch']);

gulp.task('prod', ['sass', 'copy-js', 'cssmin', 'minifyjs', 'requirejs:prod']);
