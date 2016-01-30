/* global Detector */
define(['views/grid3d', 'text!source/templates/home.html'], function(Grid3D, template) {
    var Home = function(app) {
        this.el = '.home';
        this.$$ = app.$$;        
        this.loaded = false;
        this.init = function() {

            this.$$('body').removeClass('body-gradient');
            this.$$(this.el).addClass('body-gradient');
            this.$el = this.$$(this.el);

            //INIT WEBGL GRID ONLY IDF SUPPORTED
            if (Detector.webgl) {
                this.grid3D = new Grid3D();
            }

            var view = app.template.compile(template);           

            console.log(this.view);


            //HIDE LOADER
            this.$$('.loading-arrow').addClass('hidden');
        };
        this.execute = function() {
            if (Detector.webgl) {
                if (this.grid3D.executed == false) {
                    this.grid3D.execute();
                }
            }

            //SHOW VIEW
            this.$el.removeClass('hidden');

            //OPEN FULL MODE
            this.show();

            this.loaded = true;
        };

        this.show = function() {

            this.$el.removeClass('show-min');

            //ANIMATE FULL VIEW
            this.$el.addClass('show-full');

            this.$$('.scroll-down-button').removeClass('hidden');
            this.$$('body').removeClass('show-scroll');
            this.$$('.scroll-down-button').addClass('draw-in');

        };
        this.hide = function() {
            this.$el.removeClass('show-full');

            //ANIMATE MINIMIZED VIEW
            this.$el.addClass('show-min');

            this.$$('.scroll-down-button').addClass('hidden');
            this.$$('body').addClass('show-scroll');
            this.$$('.scroll-down-button').removeClass('draw-in');
        };

    };
    return Home;
});
