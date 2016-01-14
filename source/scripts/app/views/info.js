define(['noJquery'], function(NoJQuery) {
    var Info = function(options) {
        this.el = options.el;
        this.$$ = NoJQuery;
        this.initialize = function() {
            this.$el = this.$$(this.el);
        };
        this.execute = function() {
            this.show();
            this.animateIn();
        };

        this.show = function() {
            this.$el.removeClass('hidden');
        };

        this.hide = function() {
            this.$el.addClass('hidden');
        };

        this.animateIn = function() {

            this.$$('.picture-one').addClass('picture-one-animatein');
            this.$$('.picture-two').addClass('picture-two-animatein');
            this.$$('.picture-tree').addClass('picture-tree-animatein');
            this.$$('.picture-four').addClass('picture-four-animatein');
            this.$$('.picture-five').addClass('picture-five-animatein');
        };

        this.removeAnimation = function() {
            this.$$('.picture-one').removeClass('picture-one-animatein');
            this.$$('.picture-two').removeClass('picture-two-animatein');
            this.$$('.picture-tree').removeClass('picture-tree-animatein');
            this.$$('.picture-four').removeClass('picture-four-animatein');
            this.$$('.picture-five').removeClass('picture-five-animatein');
        };

        this.destroy = function() {
            this.hide();
            this.removeAnimation();
        };

        this.initialize();
    };
    return Info;
});
