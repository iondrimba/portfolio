define(['noJquery'], function(NoJQuery) {
    var Info = function(options) {
        this.el = options.el;
        this.$$ = NoJQuery;
        this.initialize = function() {
            this.setup();
        };

        this.execute = function() {
            this.setup();
            this.show();
        };

        this.setup = function() {
            this.$el = this.$$(this.el);
        };

        this.show = function() {
            this.$el.removeClass('hidden');
            this.animateIn();
        };

        this.hide = function() {
            this.$el.addClass('hidden');
        };

        this.animateIn = function() {

            this.$$(this.el + ' .picture-one').addClass('picture-one-animatein');
            this.$$(this.el + ' .picture-two').addClass('picture-two-animatein');
            this.$$(this.el + ' .picture-tree').addClass('picture-tree-animatein');
            this.$$(this.el + ' .picture-four').addClass('picture-four-animatein');
            this.$$(this.el + ' .picture-five').addClass('picture-five-animatein');
        };

        this.removeAnimation = function() {
            this.$$(this.el + ' .picture-one').removeClass('picture-one-animatein');
            this.$$(this.el + ' .picture-two').removeClass('picture-two-animatein');
            this.$$(this.el + ' .picture-tree').removeClass('picture-tree-animatein');
            this.$$(this.el + ' .picture-four').removeClass('picture-four-animatein');
            this.$$(this.el + ' .picture-five').removeClass('picture-five-animatein');
        };

        this.destroy = function() {
            this.hide();
            this.removeAnimation();
        };

        this.initialize();
    };
    return Info;
});
