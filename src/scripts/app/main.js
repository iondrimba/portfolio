require([
    'noJquery',
    'core/controller',
    'vendors/three',
    'vendors/OrbitControls',
    'vendors/Detector',
    'vendors/TweenLite',
    'handlebars'

], function (NoJQuery, Controller, THREE, OrbitControls, Detector, TweenLite, handlebars) {

    var App = function () {
        this.handlebars = handlebars;
        this.$$ = NoJQuery;
        this.controller = new Controller(this);
        this.controller.start();
    }

    window.app = new App();
});
