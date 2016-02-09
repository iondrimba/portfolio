define(['text!src/templates/tech.html'], function(template) {
    var Tech = function(options) {
        this.el = options.el;
        this.$$ = options.app.$$;

        this.setup = function() {
            this.$el = this.$$(this.el);
            this.frontendLine = this.$$(this.el + ' .front-end');
            this.frontendText = this.$$(this.el + ' .front-end').find('ul');
            this.backendLine = this.$$(this.el + ' .back-end');
            this.backendText = this.$$(this.el + ' .back-end').find('ul');
        };

        this.view = function(model) {
            var view = options.app.handlebars.compile(template),
                html = view(model);
            return html;
        };

        this.execute = function() {
            this.setup();
            this.addAnimationsListeners();
            this.show()
        };

        this.addAnimationsListeners = function() {
            var countleft = 0,
                countright = 0;

            this.$el = this.$$(this.el);

            console.log('addAnimationsListeners', this.frontendLine);

            //LISTENS TO THE LINE ANIMATION COMPLETE (FRONT END)
            options.app.prefixedEventListener(this.frontendLine.elmts[0], 'AnimationEnd', function(e) {
                countleft++;
                console.log('f complete', countleft);
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


        this.show = function() {            
            this.$el.removeClass('hidden');
            var s = setTimeout(function(){
                clearTimeout(s);
                this.animateIn();
            }.bind(this), 100)
        };

        this.hide = function() {
            this.$el.addClass('hidden');
            this.removeAnimation();

            options.app.removePrefixedEventListener(this.frontendLine.elmts[0]);
            options.app.removePrefixedEventListener(this.backendLine.elmts[0]);

        };

        this.animateIn = function() {
            this.frontendLine.addClass('animate-in-legend-left');
            this.backendLine.addClass('animate-in-legend-right');
        };

        this.removeAnimation = function() {
            this.frontendLine.removeClass('animate-in-legend-left');
            this.backendLine.removeClass('animate-in-legend-right');
            this.$$('.animate-text').removeClass('animate-text');
        };

        this.destroy = function() {
            this.hide();
        };

    };
    return Tech;
});
