define(['text!src/templates/about.html'], function (template) {
    var About = function (app) {
        this.el = '.about';
        this.$$ = app.$$;
        this.view = function () {
            var view = app.handlebars.compile(template),
                html = view()

            return html;

        };
        this.init = function () {
            this.setup();
        };
        this.setup = function () {
            this.$el = this.$$(this.el);
            this.$el.html(this.view());
             this.$el.addClass('hidden');
        };
        this.execute = function () {
            this.$el.removeClass('hidden');
            this.addAnimationsListeners();
            var s = setTimeout(function () {
                clearTimeout(s);
                this.animateIn();
            }.bind(this), 100);
        };
        this.addAnimationsListeners = function () {
        };
        this.animateIn = function () {

        };
        this.removeAnimation = function () {
        };

        this.hide = function () {
            this.$el.addClass('hidden');
            this.removeAnimation();
        };

    };
    return About;
});
