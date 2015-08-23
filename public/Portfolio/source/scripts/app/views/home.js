define(['lib/NoJQuery', 'views/grid3d'], function (NoJQuery, Grid3D) {
    var Home = function (app) {
        this.el = '.home';
        this.njq = NoJQuery;
        this.completed = false;
        this.menu = app.menu;

        this.initialize = function () {
            this.$el = this.njq.select(this.el);
            this.grid3D = new Grid3D();
            this.njq.addClass(this.njq.select('.loading-arrow'), 'hidden');
        };
        this.execute = function () {
            if (this.grid3D.executed == false) {
                this.grid3D.execute();
            }

            console.clear();

            console.log("  _    _      _ _       _  ");
            console.log(" | |  | |    | | |     | | ");
            console.log(" | |__| | ___| | | ___ | | ");
            console.log(" |  __  |/ _ \ | |/ _ \| | ");
            console.log(" | |  | |  __/ | | (_) |_| ");
            console.log(" |_|  |_|\___|_|_|\___/(_) ");
            console.log("Thanks for stopping by! =]");
                          
            this.njq.removeClass(this.$el, 'hidden');
            this.full();
            app.event.publish('completed');
        };

        this.full = function () {
            this.njq.removeClass(this.$el, 'show-min');

            this.njq.addClass(this.$el, 'show-full', true);

            this.njq.removeClass(this.njq.select('.scroll-down-button'), 'hidden');
            this.njq.removeClass(this.njq.select('body'), 'show-scroll');
            this.njq.addClass(this.njq.select('.scroll-down-button'), 'draw-in');
            this.completed = true;

            this.menu.hide();
        };
        this.minimize = function () {
            this.njq.removeClass(this.$el, 'show-full');

            this.njq.addClass(this.$el, 'show-min', true);

            this.njq.addClass(this.njq.select('.scroll-down-button'), 'hidden');
            this.njq.addClass(this.njq.select('body'), 'show-scroll');
            this.njq.redraw(this.njq.select('.scroll-down-button')[0]);
            this.njq.removeClass(this.njq.select('.scroll-down-button'), 'draw-in');
            this.completed = true;

            this.menu.animate();
        };

        this.initialize();
    };
    return Home;
});