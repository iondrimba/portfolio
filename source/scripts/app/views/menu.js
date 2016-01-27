define(['noJquery', 'text!source/templates/menu.html'], function(NoJQuery, template) {
    var Menu = function(app) {
        this.el = '.menu';
        this.$$ = NoJQuery;
        this.initialize = function() {
            this.setup();
            this.execute();
        };

        this.setup = function() {
            this.countAbout = 0;
            this.countWork = 0;
            this.$el = this.$$(this.el);

            //ADD TEMPLATE
            this.$el.html(template);

            this.btnWork = this.$$('.btn-work');
            this.btnAbout = this.$$('.btn-about');
            this.workLine = this.$$('.btn-work').find('.line-ph').find('i');
            this.aboutLine = this.$$('.btn-about').find('.line-ph').find('i');
        };

        this.execute = function() {
            this.setup()
            this.addAnimationsListeners();
            this.animate();
        };
        this.animate = function() {
            this.$$('.btn-work').find('.text-ph').addClass('animate-span');
            this.$$('.btn-work').find('.line-ph').find('i').addClass('animate-line');

            this.$$('.btn-about').find('.text-ph').addClass('animate-span-about');
            this.$$('.btn-about').find('.line-ph').find('i').addClass('animate-line-about');
        };

        this.addAnimationsListeners = function() {
            app.prefixedEventListener(this.workLine.elmts[0], 'AnimationEnd', function(e) {
                this.countWork++;
                if (this.countWork === 2) {
                    this.$$(e.target).removeClass('animate-line');
                    this.$$(e.target).addClass('animate-line-fixed');
                    if (this.currentItem) {
                        this.deactivetButton();
                        this.activetButton(this.currentItem);
                    }
                }
            }.bind(this));
            app.prefixedEventListener(this.aboutLine.elmts[0], 'AnimationEnd', function(e) {
                this.countAbout++;
                if (this.countAbout === 2) {
                    this.$$(e.target).removeClass('animate-line-about');
                    this.$$(e.target).addClass('animate-line-fixed');
                    if (this.currentItem) {
                        this.deactivetButton();
                        this.activetButton(this.currentItem);
                    }
                }
            }.bind(this));
        };

        this.hide = function() {
            this.countAbout = 0;
            this.countWork = 0;
            this.$$('.btn-work').find('.text-ph').removeClass('animate-span');
            this.$$('.btn-work').find('.line-ph').find('i').removeClass('animate-line');

            this.$$('.btn-about').find('.text-ph').removeClass('animate-span-about');
            this.$$('.btn-about').find('.line-ph').find('i').removeClass('animate-line-about');

            this.btnWork.removeClass('active-button');
            this.btnAbout.removeClass('active-button');

            this.$$('.btn-work').find('.line-ph').find('i').removeClass('animate-line-fixed');
            this.$$('.btn-about').find('.line-ph').find('i').removeClass('animate-line-fixed');
        };

        this.activatetMenu = function(view) {
            this.currentItem = view;
            if (this.countAbout > 1 && this.countWork > 1) {
                this.deactivetButton();
                this.activetButton(view);
            }
        };

        this.deactivetButton = function() {
            this.btnWork.removeClass('active-button');
            this.btnAbout.removeClass('active-button');
        };

        this.activetButton = function(view) {
            try {
                this.$$('.btn-' + view).addClass('active-button');
            } catch (e) {};
        };

        this.initialize();
    };
    return Menu;
});
