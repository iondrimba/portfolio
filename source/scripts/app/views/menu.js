define(['lib/NoJQuery'], function (NoJQuery) {
    var Menu = function () {
        this.el = '.menu';
        this.njq = NoJQuery;
        this.initialize = function () {
            this.$el = this.njq.select(this.el);
            this.btnWork = this.njq.select('.btn-work');
            this.btnAbout = this.njq.select('.btn-about');
        },
        this.execute = function () {
            this.animateMenu();
        };
        this.animate = function () {
            this.njq.addClass(this.njq.select('.btn-work > .text-ph'), 'animate-span');
            this.njq.addClass(this.njq.select('.btn-work > .line-ph  i'), 'animate-line');

            this.njq.addClass(this.njq.select('.btn-about> .text-ph'), 'animate-span-about');
            this.njq.addClass(this.njq.select('.btn-about> .line-ph  i'), 'animate-line-about');
        };

        var pfx = ["webkit", "moz", "MS", "o", ""];
        function prefixedEventListener(element, type, callback) {
            for (var p = 0; p < pfx.length; p++) {
                if (!pfx[p]) type = type.toLowerCase();
                element.addEventListener(pfx[p] + type, callback, false);
            }
        };

        var countabout = 0,
            countwork = 0;
        prefixedEventListener(this.njq.select('.btn-work > .line-ph  i')[0], "AnimationEnd", function (e) {
            countwork++;
            if (countwork === 2) {
                this.njq.removeClass([e.target], 'animate-line');
                this.njq.addClass([e.target], 'animate-line-fixed');
                if (this.currentItem) {
                    this.deactivetButton();
                    this.activetButton(this.currentItem);
                }
            }
        }.bind(this));
        prefixedEventListener(this.njq.select('.btn-about > .line-ph  i')[0], "AnimationEnd", function (e) {
            countabout++;
            if (countabout === 2) {
                this.njq.removeClass([e.target], 'animate-line-about');
                this.njq.addClass([e.target], 'animate-line-fixed');
                if (this.currentItem) {
                    this.deactivetButton();
                    this.activetButton(this.currentItem);
                }
            }
        }.bind(this));

        this.hide = function () {
            countabout = 0;
            countwork = 0;
            this.njq.removeClass(this.njq.select('.btn-work > .text-ph'), 'animate-span');
            this.njq.removeClass(this.njq.select('.btn-work > .line-ph  i'), 'animate-line');

            this.njq.removeClass(this.njq.select('.btn-about> .text-ph'), 'animate-span-about');
            this.njq.removeClass(this.njq.select('.btn-about> .line-ph  i'), 'animate-line-about');

            this.njq.removeClass(this.btnWork, 'active-button');
            this.njq.removeClass(this.btnAbout, 'active-button');

            this.njq.removeClass(this.njq.select('.btn-work > .line-ph  i'), 'animate-line-fixed');
            this.njq.removeClass(this.njq.select('.btn-about > .line-ph  i'), 'animate-line-fixed');
        };

        this.activatetMenu = function (view) {
            this.currentItem = view;
            if (countabout > 1 && countwork > 1) {
                this.deactivetButton();
                this.activetButton(view);
            }
        };

        this.deactivetButton = function () {
            this.njq.removeClass(this.btnWork, 'active-button');
            this.njq.removeClass(this.btnAbout, 'active-button');
        };

        this.activetButton = function (view) {
            try {
                this.njq.addClass(this.njq.select('.btn-' + view), 'active-button');
            } catch (e) { };
        };

        this.initialize();
    };
    return Menu;
});