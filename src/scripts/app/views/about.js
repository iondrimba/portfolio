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
            var s = setTimeout(function () {
                clearTimeout(s);
                this.animateIn();
            }.bind(this), 100);
        };
        this.animateIn = function () {
            this.$el.addClass('show');
        };
        this.hide = function () {
            this.$el.removeClass('show');
        };

    };
    return About;
});
