define(['noJquery', 'text!source/templates/gallery.html', 'models/gallery'], function(NoJQuery, template, GalleryModel) {
    
    var Gallery = function( el) {
        this.el = '.gallery';
        this.$$ = NoJQuery;

        this.initialize = function() {
            this.setup();
        };
        
        this.setup = function() {
            this.total = 4;
            this.current = 0;
            this.el = el;
            this.view = this.$$(this.el);
            this.btnNext = this.$$(this.el + ' .next');
            this.btnPrev = this.$$(this.el + ' .prev');
        };
        this.addListeners = function() {
            var menuItens = this.$$(this.el + ' .images-menu-item').elmts;

            this.nextHandler = this.onNextClick.bind(this);
            this.prevHandler = this.onPrevClick.bind(this);

            this.btnNext.on('click', this.nextHandler);
            this.btnPrev.on('click', this.prevHandler);

            menuItens.map(function(elmt, index) {
                elmt.onclick = this.onMenuItemClick.bind(this, index);
            }.bind(this));

        };
        this.show = function() {
            this.view.removeClass('hidden');
        };

        this.drawSVGButtons = function() {
            this.$$('.next').addClass('draw-in');
            this.$$('.prev').addClass('draw-in');
        };

        this.animateLine = function() {
            this.$$(this.el + ' .image-list ').addClass('animate-in-upper-line');
        };

        this.start = function() {
            this.current = 0;

            this.addListeners();

            this.show();

            this.drawSVGButtons();

            this.showImage(this.current);

            this.animateLine();
        };

        this.hide = function() {
            this.view.addClass('hidden');
        };

        this.removeListeners = function() {
            var menuItens = this.$$(this.el + ' .images-menu-item').elmts;
            this.btnNext.off('click', this.nextHandler);
            this.btnPrev.off('click', this.prevHandler);
            menuItens.map(function(elmt, index) {
                elmt.onclick = null;
            });
        };

        this.removeAnimation = function() {
            this.$$('.next').removeClass('draw-in');
            this.$$('.prev').removeClass('draw-in');
            this.$$(this.el + ' .image-list ').removeClass('animate-in-upper-line');
        };

        this.destroy = function() {
            this.hide();
            this.removeListeners();
            this.removeAnimation();
        };

        this.menuActivet = function(el) {
            this.$$(el).addClass('active');
        };

        this.showImage = function(index) {
            this.$$(this.el + ' .images-menu-item').removeClass('active');
            this.menuActivet(this.el + ' .images-menu-item:nth-child(' + (index + 1) + ')');
            this.$$(this.el + ' .image-list > .ph > img').addClass('hidden');
            this.$$(this.el + ' .image-list > .ph > img:nth-child(' + (index + 1) + ')').removeClass('hidden');
            this.current = index;
        };

        this.prev = function() {
            if (this.current > 0) {
                this.current -= 1;
            }

            this.showImage(this.current);
        };
        this.next = function() {
            if (this.current < this.total - 1) {
                this.current += 1;
            }

            this.showImage(this.current);
        };

        this.onMenuItemClick = function(index) {
            this.showImage(index);
        };

        this.onNextClick = function() {
            this.next();
        };
        this.onPrevClick = function() {
            this.prev();
        };
    };

    return Gallery;
});
