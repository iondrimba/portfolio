define(['lib/NoJQuery', 'views/gallery', 'views/tech', 'views/info'], function (NoJQuery, Gallery, Tech, Info) {
    var Project = function (app, el) {
        this.el = '.project';
        this.njq = NoJQuery;
        this.key = '';
        this.router = app.router;
        this.routerHandler = null;
        var countatech = 0,
            countgallery = 0,
            countexternal = 0,
            counttitle = 0;

        app.prefixedEventListener(this.njq.select(this.el + ' .work-infos > .tech')[0], "AnimationEnd", function (e) {
            countatech++;
            if (countatech == 1) {
                this.njq.addClass(this.njq.select(this.el + ' .work-infos > .tech > .sprite'), 'animate-sprite');
            }
            if (countatech === 2) {
                this.njq.removeClass([e.target], 'animate-in-link-tech');
                this.njq.addClass(this.njq.select(this.el + ' .work-infos > .tech > span'), 'animate-span');
            }
        }.bind(this));

        app.prefixedEventListener(this.njq.select(this.el + ' .work-infos > .external')[0], "AnimationEnd", function (e) {
            countexternal++;
            if (countexternal == 1) {
                this.njq.addClass(this.njq.select(this.el + ' .work-infos > .external > .sprite'), 'animate-sprite');
            }
            if (countexternal === 2) {
                this.njq.removeClass([e.target], 'animate-in-link-tech');
                this.njq.addClass(this.njq.select(this.el + ' .work-infos > .external > span'), 'animate-span');
            }
        }.bind(this));

        app.prefixedEventListener(this.njq.select(this.el + ' .work-infos > .gallery')[0], "AnimationEnd", function (e) {
            countgallery++;
            if (countgallery == 1) {
                this.njq.addClass(this.njq.select(this.el + ' .work-infos > .gallery > .sprite'), 'animate-sprite');
            }
            if (countgallery === 2) {
                this.njq.removeClass([e.target], 'animate-in-link-gallery');
                this.njq.addClass(this.njq.select(this.el + ' .work-infos > .gallery > span'), 'animate-span');
            }
        }.bind(this));
        app.prefixedEventListener(this.njq.select(this.el + ' .infos > .btn')[0], "AnimationEnd", function (e) {
            counttitle++;
            if (counttitle === 1) {
                this.njq.removeClass([e.target], 'animate-in-title');
                this.njq.addClass(this.njq.select(this.el + ' .infos > .btn > h2'), 'animate-title-opacity');
            }
        }.bind(this));

        this.initialize = function () {
        
            this.el = el;
            this.$el = this.njq.select(this.el);
            this.key = this.njq.getAttr(this.$el[0], 'id');

            this.info = new Info({ el: this.el + '> .views > .info' });
            this.info.execute();

            this.tech = new Tech({ el: this.el + '> .views > .tech' , app:app});

            this.gallery = new Gallery(this.router, this.el + '> .views >.gallery');
            this.gallery.initialize();

            this.njq.removeClass(this.$el, 'hidden');

            this.titleLink = this.njq.select(this.el + ' .infos > .btn');
            this.techLink = this.njq.select(this.el + ' .work-infos > .tech');
            this.galleryLink = this.njq.select(this.el + ' .work-infos > .gallery');
            this.launchLink = this.njq.select(this.el + ' .work-infos > .external');

            this.njq.redraw(this.titleLink);

            this.njq.addClass(this.titleLink, 'animate-in-title');
            this.njq.addClass(this.techLink, 'animate-in-link-tech');
            this.njq.addClass(this.galleryLink, 'animate-in-link-gallery');
            this.njq.addClass(this.launchLink, 'animate-in-link-external');

            this.njq.redraw(this.njq.select(this.el + ' .infos > p')[0]);
            this.njq.addClass(this.njq.select(this.el + ' .infos > p'), 'animate-text-opacity');
        };
        this.destroy = function () {
            if (this.gallery) {
                this.gallery.destroy();
            }

            this.info.destroy();
            this.info = undefined;

            this.tech.destroy();
            this.tech = undefined;

            this.njq.removeClass(this.techLink, 'animate-in-link-tech');
            this.njq.removeClass(this.galleryLink, 'animate-in-link-gallery');
            this.njq.removeClass(this.launchLink, 'animate-in-link-external');

            this.njq.removeClass(this.njq.select(this.el + ' .work-infos > .tech > span'), 'animate-span');
            this.njq.removeClass(this.njq.select(this.el + ' .work-infos > .tech > .sprite'), 'animate-sprite');

            this.njq.removeClass(this.njq.select(this.el + ' .work-infos > .external > span'), 'animate-span');
            this.njq.removeClass(this.njq.select(this.el + ' .work-infos > .external > .sprite'), 'animate-sprite');

            this.njq.removeClass(this.njq.select(this.el + ' .work-infos > .gallery > span'), 'animate-span');
            this.njq.removeClass(this.njq.select(this.el + ' .work-infos > .gallery > .sprite'), 'animate-sprite');

            this.njq.removeClass(this.njq.select(this.el + ' .infos > .btn'), 'animate-in-title');
            this.njq.removeClass(this.njq.select(this.el + ' .infos > .btn > h2'), 'animate-title-opacity');
            this.njq.removeClass(this.njq.select(this.el + ' .infos > p'), 'animate-text-opacity');
        };
        this.callbackPageProject = function (section) {
            this.info.destroy()
            this.tech.destroy();

            if (this.gallery) {
                this.gallery.destroy();
            }

            if (section === 'gallery') {
                this.gallery.start();
            } else {
                this[section].execute();
            }
        };
    };
    return Project;
});