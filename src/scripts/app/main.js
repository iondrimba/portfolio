require([
  'noJquery',
  'core/controller',
  'vendors/OrbitControls',
  'vendors/TweenLite',
  'vendors/modernizr',
  'handlebars'

], function (NoJQuery, Controller, OrbitControls, TweenLite, Modernizr, handlebars) {
  var App = function () {
    this.handlebars = handlebars;
    this.$$ = NoJQuery;
    this.controller = new Controller(this);
    this.controller.start();
  }

  window.app = new App();
});
