define(['lib/NoJQuery'], function (NoJQuery) {
    var About = function (app) {
        this.el = '.about';
        this.njq = NoJQuery;
        this.completed = false;
        this.initialize = function () {
            this.$el = this.njq.select(this.el);
        };

        var countleft = 0,
            countcenter = 0,
            countright = 0;

        app.prefixedEventListener(this.njq.select(this.el + ' fieldset:first-child')[0], "AnimationEnd", function (e) {
            countleft++;
            if (countleft === 2) {
                this.njq.removeClass([e.target], 'animate-in-legend-left');
                this.njq.addClass(this.njq.select(this.el + ' fieldset:first-child ul'), 'animate-text');
            }
        }.bind(this));

        app.prefixedEventListener(this.njq.select(this.el + ' fieldset:nth-child(2)')[0], "AnimationEnd", function (e) {
            countcenter++;
            if (countcenter === 2) {
                this.njq.removeClass([e.target], 'animate-in-legend-center');
                this.njq.addClass(this.njq.select(this.el + ' fieldset:nth-child(2) ul'), 'animate-text');
            }
        }.bind(this));

        app.prefixedEventListener(this.njq.select(this.el + ' fieldset:last-child')[0], "AnimationEnd", function (e) {
            countright++;
            if (countright === 2) {
                this.njq.removeClass([e.target], 'animate-in-legend-right');
                this.njq.addClass(this.njq.select(this.el + ' fieldset:last-child ul'), 'animate-text');
            }
        }.bind(this));

        this.execute = function () {
            this.njq.removeClass(this.$el, 'hidden');
            this.completed = true;
            app.event.publish('completed');
            
            this.njq.redraw(this.njq.select(this.el + ' > p')[0]);
            this.njq.addClass(this.njq.select(this.el + ' > p'), 'animate-text-opacity-about');

            this.njq.addClass(this.njq.select(this.el + ' fieldset:first-child'), 'animate-in-legend-left');
            this.njq.addClass(this.njq.select(this.el + ' fieldset:nth-child(2)'), 'animate-in-legend-center');
            this.njq.addClass(this.njq.select(this.el + ' fieldset:last-child'), 'animate-in-legend-right');

            this.njq.redraw(this.njq.select(this.el + ' .about-project')[0]);
            this.njq.addClass(this.njq.select(this.el + ' .about-project'), 'animate-text-project');
        };
        this.destroy = function () {
            countleft = 0;
            countcenter = 0;
            countright = 0;

            this.njq.addClass(this.$el, 'hidden');
            
            this.njq.removeClass(this.njq.select(this.el + ' fieldset:first-child'), 'animate-in-legend-left');
            this.njq.removeClass(this.njq.select(this.el + ' fieldset:nth-child(2)'), 'animate-in-legend-center');
            this.njq.removeClass(this.njq.select(this.el + ' fieldset:last-child'), 'animate-in-legend-right');
            this.njq.removeClass(this.njq.select(this.el + ' .about-project'), 'animate-text-project');
            this.njq.removeClass(this.njq.select(this.el + ' > p'), 'animate-text-opacity-about');

            this.njq.removeClass(this.njq.select(this.el + ' fieldset ul'), 'animate-text');
        };

        this.initialize();
    };
    return About;
});