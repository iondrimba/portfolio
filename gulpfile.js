var { task, series } = require('gulp');
var injectMe = require('injectme');

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


function injectFiles() {
  var options = {};

  options.cssPath = './public/css/main.css';
  options.jsPath = './public/sw-setup.js';
  options.indexFile = './public/index.html';

  injectMe(options);
}

var clean = require('./tasks/clean.js');
var sass = require('./tasks/sass.js');
var copy = require('./tasks/copy.js');
var rqjs = require('./tasks/requirejs.js');
var cssmin = require('./tasks/cssmin.js');
var minifyjs = require('./tasks/minifyjs.js');
var browserSync = require('./tasks/browser-sync.js');

task('default', function (cb) {
  series(clean, sass, copy, rqjs.bind(requirePaths, 'none'), injectFiles, browserSync);
  cb();
});

task('prod', function (cb) {
  series(clean, sass, copy, cssmin, rqjs.bind(requirePaths, 'none'), minifyjs, injectFiles);
  cb();
});


