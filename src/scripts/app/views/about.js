define(['text!src/templates/about.html'], function (template) {
    var About = function (app) {
        this.el = '.about';
        this.$$ = app.$$;
        this.notifyCss = app.notifyCss;
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
            var s = setTimeout(function () {
                clearTimeout(s);
                this.animateIn();
            }.bind(this), 100);
        };
        this.animateIn = function () {
            this.$el.addClass('show');
            this.$$('.close').addClass('close-animate-in');
            this.$$('.title').addClass('title-animate-in');

            this.$$('.skills').addClass('skills-animate-in');
            this.$$('.primary').addClass('primary-animate-in');
            this.$$('.secondary').addClass('secondary-animate-in');

            this.$$('.intro').find('p').each(function (elmt, index) {
                TweenLite.delayedCall(.2 + (index * .15), function () {
                    this.$$(elmt).addClass('block-animate-in');
                }.bind(this));
            }.bind(this));

            this.$$('.brands').find('div').each(function (elmt, index) {
                TweenLite.delayedCall(.2 + (index * .05), function () {
                    this.$$(elmt).addClass('icon-animate-in');
                }.bind(this));
            }.bind(this));
 
        };
        this.hide = function () {
            this.$el.addClass('animate-out');
            TweenLite.delayedCall(.5, function () {                
                this.$el.removeClass('show');
                this.$el.removeClass('animate-out');
            }.bind(this));
            
            this.$$('.close').removeClass('close-animate-in');
            this.$$('.title').removeClass('title-animate-in');
            this.$$('.skills').removeClass('skills-animate-in');
            this.$$('.primary').removeClass('primary-animate-in');
            this.$$('.secondary').removeClass('secondary-animate-in');
            this.$$('.intro').find('p').each(function (elmt, index) {
                this.$$(elmt).removeClass('block-animate-in');
            }.bind(this));
            this.$$('.brands').find('div').each(function (elmt, index) {
                this.$$(elmt).removeClass('icon-animate-in');
            }.bind(this));
        };

    };
    return About;
});
