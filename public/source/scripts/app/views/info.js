define(['lib/NoJQuery'], function (NoJQuery) {
    var Info = function (options) {
        this.el = options.el;
        this.njq = NoJQuery;        
        this.initialize = function () {
            this.$el = this.njq.select(this.el);
        },
        this.execute = function () {            
            this.njq.removeClass(this.$el, 'hidden');
            
            this.njq.addClass(this.njq.select(this.el + ' .picture-one'), 'picture-one-animatein');
            this.njq.addClass(this.njq.select(this.el + ' .picture-two'), 'picture-two-animatein');
            this.njq.addClass(this.njq.select(this.el + ' .picture-tree'), 'picture-tree-animatein');
            this.njq.addClass(this.njq.select(this.el + ' .picture-four'), 'picture-four-animatein');
            this.njq.addClass(this.njq.select(this.el + ' .picture-five'), 'picture-five-animatein');
        };

        this.destroy = function () {
            this.njq.addClass(this.$el, 'hidden');
            
            this.njq.removeClass(this.njq.select(this.el + ' .picture-one'), 'picture-one-animatein');
            this.njq.removeClass(this.njq.select(this.el + ' .picture-two'), 'picture-two-animatein');
            this.njq.removeClass(this.njq.select(this.el + ' .picture-tree'), 'picture-tree-animatein');
            this.njq.removeClass(this.njq.select(this.el + ' .picture-four'), 'picture-four-animatein');
            this.njq.removeClass(this.njq.select(this.el + ' .picture-five'), 'picture-five-animatein');
        };

        this.initialize();
    };
    return Info;
});