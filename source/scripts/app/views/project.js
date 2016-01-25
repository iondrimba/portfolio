define(['noJquery', 'views/gallery', 'views/tech', 'views/info'], function(NoJQuery, Gallery, Tech, Info) {
    var Project = function(app, el) {
        this.el = '.project';
        this.$$ = NoJQuery;
        this.key = '';
        this.router = app.router;
        this.routerHandler = null;
        this.countatech = 0;
        this.countgallery = 0;
        this.countexternal = 0;
        this.counttitle = 0;

        this.initialize = function() {
            this.setup();
            this.addAnimationListeners();

            //INIT INFO VIEW
            this.info = new Info({
                el: this.el + '> .views > .info'
            });
            this.info.execute();


            //INIT TECH VIEW
            this.tech = new Tech({
                el: this.el + '> .views > .tech',
                app: app
            });

            //INIT GALLERY VIEW
            this.gallery = new Gallery(this.el + '> .views >.gallery');
            this.gallery.initialize();

            this.show();
            this.animateIn();
        };


        this.setup = function() {

            this.el = el;
            this.$el = this.$$(this.el);
            this.key = this.$el.getAttr('id');
            this.titleLink = this.$$(this.el + ' .infos > .btn');
            this.techLink = this.$$(this.el + ' .work-infos > .tech');
            this.galleryLink = this.$$(this.el + ' .work-infos > .gallery');
            this.launchLink = this.$$(this.el + ' .work-infos > .external');
        };

        this.addAnimationListeners = function() {
            var techLine = this.$$(this.el + ' .work-infos > .tech'),
                externalLine = this.$$(this.el + ' .work-infos > .external'),
                galleryLine = this.$$(this.el + ' .work-infos > .gallery'),
                infoBtn = this.$$(this.el + ' .infos > .btn');

            app.prefixedEventListener(techLine.elmts[0], 'AnimationEnd', function(e) {
                this.countatech++;
                if (this.countatech == 1) {
                    this.$$(this.el + ' .work-infos > .tech > .sprite').addClass('animate-sprite');
                }
                if (this.countatech === 2) {
                    this.$$(e.target).removeClass('animate-in-link-tech');
                    this.$$(this.el + ' .work-infos > .tech > span').addClass('animate-span');
                }
            }.bind(this));

            app.prefixedEventListener(externalLine.elmts[0], 'AnimationEnd', function(e) {
                this.countexternal++;
                if (this.countexternal == 1) {
                    this.$$(this.el + ' .work-infos > .external > .sprite').addClass('animate-sprite');
                }
                if (this.countexternal === 2) {
                    this.$$(e.target).removeClass('animate-in-link-external');
                    this.$$(this.el + ' .work-infos > .external > span').addClass('animate-span');
                }
            }.bind(this));

            app.prefixedEventListener(galleryLine.elmts[0], 'AnimationEnd', function(e) {
                this.countgallery++;
                if (this.countgallery == 1) {
                    this.$$(this.el + ' .work-infos > .gallery > .sprite').addClass('animate-sprite');
                }
                if (this.countgallery === 2) {
                    this.$$(e.target).removeClass('animate-in-link-gallery');
                    this.$$(this.el + ' .work-infos > .gallery > span').addClass('animate-span');
                }
            }.bind(this));

            app.prefixedEventListener(infoBtn.elmts[0], 'AnimationEnd', function(e) {
                this.counttitle++;
                if (this.counttitle === 1) {
                    this.$$(e.target).removeClass('animate-in-title');
                    this.$$(this.el + ' .infos > .btn > h2').addClass('animate-title-opacity');
                }
            }.bind(this));

        };

        this.show = function() {
            this.$el.removeClass('hidden');
        };

        this.hide = function() {
            this.$el.addClass('hidden');
        };


        this.animateIn = function() {
            this.countatech = 0;
            this.countgallery = 0;
            this.countexternal = 0;
            this.counttitle = 0;
            this.$$(this.el + ' .infos > p').addClass('animate-text-opacity');
            this.$$(this.el + ' .infos > .btn').addClass('animate-in-title');
            this.techLink.addClass('animate-in-link-tech');
            this.launchLink.addClass('animate-in-link-external');
            this.galleryLink.addClass('animate-in-link-gallery');
        };

        this.close = function() {
            this.tech.destroy();

            if (this.gallery) {
                this.gallery.destroy();
            }
            this.info.execute();
        };

        this.destroy = function() {
            if (this.gallery) {
                this.gallery.destroy();
            }

            this.info.destroy();
            this.info = undefined;

            this.tech.destroy();
            this.tech = undefined;

            this.techLink.removeClass('animate-in-link-tech');
            this.galleryLink.removeClass('animate-in-link-gallery');
            this.launchLink.removeClass('animate-in-link-external');

            //TECH ICON
            this.$$(this.el + ' .work-infos > .tech > span').removeClass('animate-span');
            this.$$(this.el + ' .work-infos > .tech > .sprite').removeClass('animate-sprite');

            //EXTERNAL ICON
            this.$$(this.el + ' .work-infos > .external > span').removeClass('animate-span');
            this.$$(this.el + ' .work-infos > .external > .sprite').removeClass('animate-sprite');

            //GALLERY ICON
            this.$$(this.el + ' .work-infos > .gallery > span').removeClass('animate-span');
            this.$$(this.el + ' .work-infos > .gallery > .sprite').removeClass('animate-sprite');


            this.$$(this.el + ' .infos > .btn').removeClass('animate-in-title');
            this.$$(this.el + ' .infos > .btn > h2').removeClass('animate-title-opacity');
            this.$$(this.el + ' .infos > p').removeClass('animate-text-opacity');
        };
        this.callbackPageProject = function(section) {

            if (this.info) {
                this.info.destroy();
            }
            if (this.tech) {
                this.tech.destroy();
            }

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
