define(['lib/NoJQuery'], function (NoJQuery) {
    var Gallery = function (router, el) {
        this.el = '.gallery';
        this.njq = NoJQuery;
        this.initialize = function () {
            this.total = 4;
            this.current = 0;
            this.el = el;

            this.view = this.njq.select(this.el);

            this.btnNext = this.njq.select(this.el + ' .next')[0];
            this.btnPrev = this.njq.select(this.el + ' .prev')[0];
        };
        this.start = function () {
            this.current = 0;

            this.nextHandler = this.onNextClick.bind(this);
            this.prevHandler = this.onPrevClick.bind(this);

            this.njq.on(this.btnNext, 'click', this.nextHandler);
            this.njq.on(this.btnPrev, 'click', this.prevHandler);

            var menuItens = this.njq.select(this.el + ' .images-menu-item'),
                total = menuItens.length,
                i = 0;

            for (i; i < total ; i++) {
                menuItens[i].onclick = this.onMenuItemClick.bind(this, i);
            }

            this.njq.removeClass(this.view, 'hidden');

            this.njq.redraw(this.btnNext);
            this.njq.redraw(this.btnPrev);

            this.njq.addClass(this.njq.select('.next'), 'draw-in');
            this.njq.addClass(this.njq.select('.prev'), 'draw-in');

            this.showImage(this.current);

            this.njq.addClass(this.njq.select(this.el + ' .image-list '), 'animate-in-upper-line');
        };
        
        this.destroy = function () {
            this.njq.addClass(this.view, 'hidden');
            this.njq.off(this.btnNext, 'click', this.nextHandler);
            this.njq.off(this.btnPrev, 'click', this.prevHandler);

            this.njq.removeClass(this.njq.select('.next'), 'draw-in');
            this.njq.removeClass(this.njq.select('.prev'), 'draw-in');
            this.njq.removeClass(this.njq.select(this.el + ' .image-list '), 'animate-in-upper-line');

            var menuItens = this.njq.select(this.el + ' .images-menu-item'),
                total = menuItens.length,
                i = 0;

            for (i; i < total; i++) {
                menuItens[i].onclick = null;
            }
        };

        this.menuActivet = function (el) {
            this.njq.addClass(el, 'active');
        };

        this.showImage = function (index) {
            this.njq.removeClass(this.njq.select(this.el + ' .images-menu-item'), 'active');
            this.menuActivet(this.njq.select(this.el + ' .images-menu-item:nth-child(' + (index + 1) + ')'));
            this.njq.addClass(this.njq.select(this.el + ' .image-list > .ph > img'), 'hidden');
            this.njq.removeClass(this.njq.select(this.el + ' .image-list > .ph > img:nth-child(' + (index + 1) + ')'), 'hidden');
            this.current = index;
        };

        this.prev = function () {
            if (this.current > 0) {
                this.current -= 1;
            }

            this.showImage(this.current);
        };
        this.next = function () {
            if (this.current < this.total - 1) {
                this.current += 1;
            }

            this.showImage(this.current);
        };

        this.onMenuItemClick = function (index) {
            this.showImage(index);
        };

        this.onNextClick = function () {
            this.next();
        };
        this.onPrevClick = function () {
            this.prev();
        };
    };
    return Gallery;
});