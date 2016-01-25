define(['noJquery', 'text!source/templates/tech.html', 'models/tech'], function(NoJQuery, template, TechModel) {
    var Tech = function(options) {
        this.el = options.el;
        this.$$ = NoJQuery;

        this.initialize = function() {
            this.setup();
        };

        this.execute = function() {
            this.setup();
            this.addAnimationsListeners();
            this.show()
            this.animateIn();
        };

        this.addAnimationsListeners = function() {
            var countleft = 0,
                countright = 0;

            this.$el = this.$$(this.el);

            //LISTENS TO THE LINE ANIMATION COMPLETE (FRONT END)
            options.app.prefixedEventListener(this.frontendLine.elmts[0], 'AnimationEnd', function(e) {
                countleft++;
                if (countleft === 2) {
                    this.$$(e.target).removeClass('animate-in-legend-left');
                    this.$$(this.el + ' .front-end ul').addClass('animate-text');

                }
            }.bind(this));

            //LISTENS TO THE LINE ANIMATION COMPLETE (BACK END)
            options.app.prefixedEventListener(this.backendLine.elmts[0], 'AnimationEnd', function(e) {
                countright++;
                if (countright === 2) {
                    this.$$(e.target).removeClass('animate-in-legend-right');
                    this.$$(this.el + ' .back-end ul').addClass('animate-text');
                }
            }.bind(this));
        };

        this.setup = function() {
            this.$el = this.$$(this.el);
            this.frontendLine = this.$$(this.el + ' .front-end');
            this.frontendText = this.$$(this.el + ' .front-end').find('ul');
            this.backendLine = this.$$(this.el + ' .back-end');
            this.backendText = this.$$(this.el + ' .back-end').find('ul');
        };

        this.show = function() {
            this.$el.removeClass('hidden');
        };

        this.hide = function() {
            this.$el.addClass('hidden');
        };


        this.animateIn = function() {
            this.frontendLine.addClass('animate-in-legend-left');
            this.backendLine.addClass('animate-in-legend-right');
        };

        this.removeAnimation = function() {
            this.frontendLine.removeClass('animate-in-legend-left');
            this.backendLine.removeClass('animate-in-legend-right');
            this.$$(this.el + 'ul').removeClass('animate-text');
        };

        this.destroy = function() {
            this.hide();
            this.removeAnimation();
        };

        this.initialize();
    };
    return Tech;
});
