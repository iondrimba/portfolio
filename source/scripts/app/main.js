require([
    'noJquery',
    'core/controller',
    'vendors/three',
    'vendors/OrbitControls',
    'vendors/Detector',
    'vendors/TweenMax',
    'handlebars'

], function(NoJQuery, Controller, TREE, OrbitControls, Detector, TweenMax, handlebars) {
    var App = function() {
        this.prefixedEventListener = function(element, type, callback) {
            var pfx = ["webkit", "moz", "MS", "o", ""];
            for (var p = 0; p < pfx.length; p++) {
                if (!pfx[p]) type = type.toLowerCase();
                element.addEventListener(pfx[p] + type, callback, false);
            }
        };

        this.handlebars = handlebars;
        this.$$ = NoJQuery;
        this.controller = new Controller(this);
        this.controller.start();
    }

    window.app = new App();
});
