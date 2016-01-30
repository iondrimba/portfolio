define(['text!source/templates/about.html'], function(template) {
    var About = function(app) {
        this.el = '.about';
        this.$$ = app.$$;
        this.view = function() {
            var view = app.handlebars.compile(template),
                html = view()

            return html;

        };
        this.init = function() {
            this.setup();
        };
        this.setup = function() {
            this.$el = this.$$(this.el);
            this.$el.html(this.view());
            this.firstLine = this.$$('fieldset:first-child');
            this.firstText = this.$$('fieldset:first-child').find('ul');
            this.secondLine = this.$$('fieldset:nth-child(2)');
            this.secondText = this.$$('fieldset:nth-child(2)').find('ul');
            this.thirdLine = this.$$('fieldset:last-child');
            this.thirdText = this.$$('fieldset:last-child').find('ul');
            this.addAnimationsListeners();
        };
        this.execute = function() {
            this.$el.removeClass('hidden');
            this.animateIn();
        };
        this.addAnimationsListeners = function() {
            var countleft = 0,
                countcenter = 0,
                countright = 0;

            //LISTENS TO THE LINE ANIMATION COMPLETE (FRONT END)
            app.prefixedEventListener(this.firstLine.elmts[0], 'AnimationEnd', function(e) {
                countleft++;
                if (countleft === 2) {
                    this.$$(e.target).removeClass('animate-in-legend-left');
                    this.$$(e.target).find('ul').addClass('animate-text');
                }
            }.bind(this));

            //LISTENS TO THE LINE ANIMATION COMPLETE (BACK END)
            app.prefixedEventListener(this.secondLine.elmts[0], 'AnimationEnd', function(e) {
                countcenter++;
                if (countcenter === 2) {
                    this.$$(e.target).removeClass('animate-in-legend-center');
                    this.$$(e.target).find('ul').addClass('animate-text');
                }
            }.bind(this));


            //LISTENS TO THE LINE ANIMATION COMPLETE (DESIGN)
            app.prefixedEventListener(this.thirdLine.elmts[0], 'AnimationEnd', function(e) {
                countright++;
                if (countright === 2) {
                    this.$$(e.target).removeClass('animate-in-legend-right');
                    this.$$(e.target).find('ul').addClass('animate-text');
                }
            }.bind(this));

        };
        this.animateIn = function() {
            this.$$('p').addClass('animate-text-opacity-about');
            this.firstLine.addClass('animate-in-legend-left');
            this.secondLine.addClass('animate-in-legend-center');
            this.thirdLine.addClass('animate-in-legend-right');
            this.$$('.about-project').addClass('animate-text-project');
        };
        this.removeAnimation = function() {
            this.$$('.about-project').removeClass('animate-text-project');
            this.$$('p').removeClass('animate-text-opacity-about');
            this.$$('ul').removeClass('animate-text');
        };

        this.hide = function() {
            this.$el.addClass('hidden');
            this.removeAnimation();
        };

    };
    return About;
});
