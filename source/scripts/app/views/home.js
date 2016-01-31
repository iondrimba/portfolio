/* global Detector */
define(['views/grid3d', 'text!source/templates/home.html'], function(Grid3D, template) {
    var Home = function(app) {
        this.el = '.home';
        this.$$ = app.$$;
        this.loaded = false;
        this.view = function() {
            var view = app.handlebars.compile(template),
                html = view()

            return html;

        };
        this.init = function() {

            this.$$('body').removeClass('body-gradient');
            this.$$(this.el).addClass('body-gradient');
            this.$el = this.$$(this.el);
            this.$el.html(this.view());


            //INIT WEBGL GRID ONLY IDF SUPPORTED
            if (Detector.webgl) {
                this.grid3D = new Grid3D();
            }

            //HIDE LOADER
            this.$$('.loading-arrow').remove();
            this.$el.removeClass('body-gradient');
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
            console.log('show');
            this.$$('.content-wrapper').removeClass('show-min');

            //ANIMATE FULL VIEW
            this.$$('.content-wrapper').addClass('show-full');

            this.$el.find('h1').removeClass('title-show-in');
            this.$el.find('h1').addClass('title-show-out');

            this.$$('.scroll-down-button').removeClass('hidden');
            this.$$('body').removeClass('show-scroll');
            this.$$('.scroll-down-button').addClass('draw-in');

        };
        this.hide = function() {
            console.log('hide');
            this.$$('.content-wrapper').removeClass('show-full');

            this.$el.find('h1').removeClass('title-show-out');
            this.$el.find('h1').addClass('title-show-in');

            //ANIMATE MINIMIZED VIEW
            this.$$('.content-wrapper').addClass('show-min');

            this.$$('.scroll-down-button').addClass('hidden');
            this.$$('body').addClass('show-scroll');
            this.$$('.scroll-down-button').removeClass('draw-in');
        };

    };
    return Home;
});
