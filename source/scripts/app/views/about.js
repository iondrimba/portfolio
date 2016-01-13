define(['noJquery'], function(NoJQuery) {
    var About = function(app) {
        this.el = '.about';
        this.$$ = NoJQuery;
        this.completed = false;
        this.initialize = function() {
          
        };
        this.addAnimationsListeners = function() {
            var countleft = 0,
                countcenter = 0,
                countright = 0;

            //FRONT END LINE
            app.prefixedEventListener(this.firstLine.elmts[0], "AnimationEnd", function(e) {
                countleft++;
                if (countleft === 2) {
                    this.$$(e.target).removeClass('animate-in-legend-left');
                    this.$$(e.target).find('ul').addClass('animate-text');
                }
            }.bind(this));

            //BACK END LINE
            app.prefixedEventListener(this.secondLine.elmts[0], "AnimationEnd", function(e) {
                countcenter++;
                if (countcenter === 2) {
                    this.$$(e.target).removeClass('animate-in-legend-center');
                    this.$$(e.target).find('ul').addClass('animate-text');
                }
            }.bind(this));


            //DESIGN LINE
            app.prefixedEventListener(this.thirdLine.elmts[0], "AnimationEnd", function(e) {
                countright++;
                if (countright === 2) {
                    this.$$(e.target).removeClass('animate-in-legend-right');
                    this.$$(e.target).find('ul').addClass('animate-text');
                }
            }.bind(this));

        };
        this.setup = function() {
            this.$el = this.$$(this.el);
            this.firstLine = this.$$('fieldset:first-child');
            this.firstText = this.$$('fieldset:first-child').find('ul');
            this.secondLine = this.$$('fieldset:nth-child(2)');
            this.secondText = this.$$('fieldset:nth-child(2)').find('ul');
            this.thirdLine = this.$$('fieldset:last-child');
            this.thirdText = this.$$('fieldset:last-child').find('ul');

            this.$el.removeClass('hidden');
        };
        this.animate = function() {
            this.$$('p').addClass('animate-text-opacity-about');
            this.firstLine.addClass('animate-in-legend-left');
            this.secondLine.addClass('animate-in-legend-center');
            this.thirdLine.addClass('animate-in-legend-right');
            this.$$('.about-project').addClass('animate-text-project');
        };
        this.execute = function() {
            this.setup();                        
            this.addAnimationsListeners();
            this.animate();
            this.completed = true;
            app.event.publish('completed');

        };
        this.destroy = function() {

            this.$el.addClass('hidden');
            this.$$('.about-project').removeClass('animate-text-project');
            this.$$('p').removeClass('animate-text-opacity-about');
            this.$$('ul').removeClass('animate-text');

            this.$el = null;
        };

        this.initialize();
    };
    return About;
});
