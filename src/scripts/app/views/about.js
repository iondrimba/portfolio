define(['text!src/templates/about.html'], function (template) {
    var About = function (app) {
        this.el = '.about';
        this.$$ = app.$$;
        this.view = function () {
            var view = app.handlebars.compile(template),
                html = view();

            return html;

        };

        this.init = function () {
            this.setup();
        };

        this.setup = function () {
            this.$el = this.$$(this.el);
            this.$el.html(this.view());
        };

        this.execute = function () {
            var timeOut = setTimeout(function () {
                clearTimeout(timeOut);
                this.animateIn();
            }.bind(this), 100);
        };

        this.animateIn = function () {
            this.$el.addClass('animate');
            this.buttonCloseShow();
            this.titleShow();
            this.introTextShow();
            this.brandsShow();
            this.skillShow();
        };
 
        this.hide = function () {
            this.$el.addClass('animate-out');
            TweenLite.delayedCall(.5, function () {
                this.$el.removeClass('animate');
                this.$el.removeClass('animate-out');
            }.bind(this));

            this.buttonCloseHide();
            this.titleHide();
            this.introTextHide();
            this.brandsHide();
            this.skillsHide();
        };

        this.buttonCloseShow = function () {
            this.$$('.close').addClass('close-animate-in');
        };

        this.buttonCloseHide = function () {
            this.$$('.close').removeClass('close-animate-in');
        };

        this.titleShow = function () {
            this.$$('.title').addClass('title-animate-in');
        };

        this.titleHide = function () {
            this.$$('.title').removeClass('title-animate-in');
        };

        this.skillShow = function () {
            this.$$('.skills').addClass('skills-animate-in');
            this.$$('.primary').addClass('primary-animate-in');
            this.$$('.secondary').addClass('secondary-animate-in');
        };
        this.skillsHide = function () {
            this.$$('.skills').removeClass('skills-animate-in');
            this.$$('.primary').removeClass('primary-animate-in');
            this.$$('.secondary').removeClass('secondary-animate-in');
        };

        this.introTextShow = function () {
            this.$$('.intro').find('p').each(function (elmt, index) {
                TweenLite.delayedCall(.13 + (index * .13), function () {
                    this.$$(elmt).addClass('block-animate-in');
                }.bind(this));
            }.bind(this));
        };
        this.introTextHide = function () {
            this.$$('.intro').find('p').each(function (elmt, index) {
                this.$$(elmt).removeClass('block-animate-in');
            }.bind(this));
        };

        this.brandsShow = function () {
            this.$$('.brands').find('div').each(function (elmt, index) {
                TweenLite.delayedCall(.2 + (index * .05), function () {
                    this.$$(elmt).addClass('icon-animate-in');
                }.bind(this));
            }.bind(this));
        };

        this.brandsHide = function () {
            this.$$('.brands').find('div').each(function (elmt, index) {
                this.$$(elmt).removeClass('icon-animate-in');
            }.bind(this));
        };
    };
    return About;
});
