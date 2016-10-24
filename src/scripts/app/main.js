require([
    'noJquery',
    'core/controller',
    'vendors/three',
    'vendors/OrbitControls',
    'vendors/Detector',
    'vendors/TweenMax',
    'handlebars'

], function (NoJQuery, Controller, TREE, OrbitControls, Detector, TweenMax, handlebars) {
    var App = function () {     
        this.handlebars = handlebars;
        this.$$ = NoJQuery;
        this.controller = new Controller(this);
        this.controller.start();
    }

    window.app = new App();
});
