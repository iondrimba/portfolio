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
        var pfx = ["webkit", "moz", "MS", "o", ""];
        this.prefixedEventListener = function(element, type, callback) {
            element['callback'] = callback;
            for (var p = 0; p < pfx.length; p++) {
                if (!pfx[p]) type = type.toLowerCase();                
                element[pfx[p]] = pfx[p] + type;
                element.addEventListener(pfx[p] + type, callback, false);
            }
        };
         this.removePrefixedEventListener = function(element) {
            for (var p = 0; p < pfx.length; p++) {   
                element.removeEventListener(element[pfx[p]], element['callback'] );
            }
        };

        this.handlebars = handlebars;
        this.$$ = NoJQuery;
        this.controller = new Controller(this);
        this.controller.start();
    }

    window.app = new App();
});
