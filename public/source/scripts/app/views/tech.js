define(['lib/NoJQuery'], function (NoJQuery) {
    var Tech = function (options) {
        this.el = options.el;
        this.njq = NoJQuery;        
        var countleft = 0,
            countright = 0;



        this.initialize = function () {
            this.$el = this.njq.select(this.el);

            options.app.prefixedEventListener(this.njq.select(this.el + ' .front-end')[0], "AnimationEnd", function (e) {
                countleft++;
                if (countleft === 2) {
                    this.njq.removeClass([e.target], 'animate-in-legend-left');
                    this.njq.addClass(this.njq.select(this.el + ' .front-end ul'), 'animate-text');

                }
            }.bind(this));
            options.app.prefixedEventListener(this.njq.select(this.el + ' .back-end')[0], "AnimationEnd", function (e) {
                countright++;
                if (countright === 2) {
                    this.njq.removeClass([e.target], 'animate-in-legend-right');
                    this.njq.addClass(this.njq.select(this.el + ' .back-end ul'), 'animate-text');
                }
            }.bind(this));
        },
        this.execute = function () {
            this.njq.removeClass(this.$el, 'hidden');
            this.njq.addClass(this.njq.select(this.el + ' .front-end'), 'animate-in-legend-left');
            this.njq.addClass(this.njq.select(this.el + ' .back-end'), 'animate-in-legend-right');
        };

        this.destroy = function () {
            countleft = 0,
            countright = 0;

            this.njq.addClass(this.$el, 'hidden');
            this.njq.removeClass(this.njq.select(this.el + ' .front-end'), 'animate-in-legend-left');
            this.njq.removeClass(this.njq.select(this.el + ' .back-end'), 'animate-in-legend-right');
            this.njq.removeClass(this.njq.select(this.el + ' fieldset ul'), 'animate-text');
        };

        this.initialize();
    };
    return Tech;
});