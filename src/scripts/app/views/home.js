/* global Detector */
/* global TweenLite */
define(['views/grid3d', 'text!src/templates/home.html'], function (Grid3D, template) {
    var Home = function (app) {
        this.el = '.home';
        this.$$ = app.$$;
        this.loaded = false;
        this.btnAbout;
        this.view = function () {
            var view = app.handlebars.compile(template),
                html = view()

            return html;

        };
        this.init = function () {
            this.$$(this.el).addClass('body-gradient');
            this.$el = this.$$(this.el);
            this.$el.html(this.view());
            this.btnAbout = this.$$('.link');

            //INIT WEBGL GRID ONLY IDF SUPPORTED
            if (Detector.webgl) {
                this.$$('body').removeClass('body-gradient');
                this.grid3D = new Grid3D(app);
            }

            //click about
            this.btnAbout.on('click', this.onAboutClick.bind(this));

        };
        this.onAboutClick = function onAboutClick(evt) {
            console.log('click');
            evt.preventDefault();
            this.btnAbout.addClass('hide-button-about');

            app.controller.navigate('/about');

        };
        this.animateSocialIcons = function animateSocialIcons() {
            this.$$('.social').find('a').each(function (elmt, index) {
                TweenLite.delayedCall(.1 * index, function () {
                    this.$$(elmt).addClass('social-animate-in');
                }.bind(this));
            }.bind(this));
        };

        this.removeSocialIcons = function animateSocialIcons() {
            this.$$('.social').find('a').each(function (elmt, index) {
                TweenLite.delayedCall(.1 * index, function () {
                    this.$$(elmt).removeClass('social-animate-in');
                }.bind(this));
            }.bind(this));
        };


        this.execute = function () {
            console.log('execute');
            if (Detector.webgl) {
                if (this.grid3D.executed == false) {
                    this.grid3D.execute();
                }
            }

            //SHOW VIEW
            this.$el.removeClass('hidden');

            //HIDE LOADER
            this.$$('.loading-arrow').remove();

            //OPEN FULL MODE
            this.show();

            this.loaded = true;
        };

        this.show = function () {
            console.log('show');
            this.btnAbout.removeClass('hide-button-about');
            this.animateSocialIcons();
        };
        this.hide = function () {
            console.log('hide');
            this.removeSocialIcons();
        };

    };
    return Home;
});
