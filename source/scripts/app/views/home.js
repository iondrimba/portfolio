/* global Detector */
define(['noJquery', 'views/grid3d'], function(NoJQuery, Grid3D) {
    var Home = function(app) {
        this.el = '.home';
        this.$$ = NoJQuery;
        this.completed = false;
        this.menu = app.menu;

        this.initialize = function() {

            this.$$('body').removeClass('body-gradient');
            this.$$(this.el).addClass('body-gradient');
            this.$el = this.$$(this.el);

            //INIT WEBGL GRID ONLY IDF SUPPORTED
            if (Detector.webgl) {
                this.grid3D = new Grid3D();
            }

            //HIDE LOADER
            this.$$('.loading-arrow').addClass('hidden');
        };
        this.execute = function() {
            if (Detector.webgl) {
                if (this.grid3D.executed == false) {
                    this.grid3D.execute();
                }
            }

            //app.showConsoleGretings();                          

            //SHOW VIEW
            this.$el.removeClass('hidden');

            //OPEN FULL MODE
            this.full();

            app.event.publish('completed');
        };

        this.full = function() {

            this.$el.removeClass('show-min');

            //ANIMATE FULL VIEW
            this.$el.addClass('show-full');

            this.$$('.scroll-down-button').removeClass('hidden');
            this.$$('body').removeClass('show-scroll');
            this.$$('.scroll-down-button').addClass('draw-in');
            this.completed = true;

            this.menu.hide();
        };
        this.minimize = function() {
            this.$el.removeClass('show-full');

            //ANIMATE MINIMIZED VIEW
            this.$el.addClass('show-min');

            this.$$('.scroll-down-button').addClass('hidden');
            this.$$('body').addClass('show-scroll');
            this.$$('.scroll-down-button').removeClass('draw-in');
            this.completed = true;

            this.menu.animate();
        };

        this.initialize();
    };
    return Home;
});
