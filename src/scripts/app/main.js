require([
    'noJquery',
    'core/controller',
    'vendors/three',
    'vendors/OrbitControls',
    'vendors/TweenLite',
    'handlebars'

], function (NoJQuery, Controller, THREE, OrbitControls,  TweenLite, handlebars) {

    var App = function () {
        this.handlebars = handlebars;
        this.$$ = NoJQuery;
        this.controller = new Controller(this);
        this.controller.start();
    }

    window.app = new App();
});
