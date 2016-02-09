define(['text!src/templates/project.html', 'views/gallery', 'views/tech', 'views/info'], function(template, Gallery, Tech, Info) {
    var Project = function(app, model) {
        this.el = '.project' + '.' + model.id;
        this.$$ = app.$$;
        this.model = model;
        this.key = model.id;
        this.router = app.router;
        this.routerHandler = null;

        this.view = function() {
            var view = app.handlebars.compile(template),
                html = view(this.model);
            return html;

        };
        this.setup = function() {
            this.$el = this.$$(this.el);


            this.titleLink = this.$$(this.el + ' .infos > .btn');
            this.techLink = this.$$(this.el + ' .work-infos > .tech');
            this.galleryLink = this.$$(this.el + ' .work-infos > .gallery');
            this.launchLink = this.$$(this.el + ' .work-infos > .external');
            this.$$(this.el + ' .infos > p').addClass('animate-text-opacity');
        };
        this.initialize = function() {
            this.setup();
            this.addAnimationListeners();

            //INIT INFO VIEW
            this.info = new Info({
                el: this.el + '> .views > .info',
                app: app
            });
            this.$$(this.el + '> .views' ).append(this.info.view(this.model));            
            this.info.execute();

            //INIT TECH VIEW
            this.tech = new Tech({
                el: this.el + '> .views > .tech',
                app: app
            });
            this.$$(this.el + '> .views' ).append(this.tech.view(this.model));
            this.tech.setup();

            //INIT GALLERY VIEW
            this.gallery = new Gallery(app, this.el + ' > .views > .gallery');
            this.$$(this.el + '> .views' ).append(this.gallery.view(this.model));
            this.gallery.setup();

            this.show();
        };
        this.addAnimationListeners = function() {
            var countatech = 0,
                countgallery = 0,
                countexternal = 0,
                counttitle = 0,
                techLine = this.$$(this.el + ' .work-infos > .tech'),
                externalLine = this.$$(this.el + ' .work-infos > .external'),
                galleryLine = this.$$(this.el + ' .work-infos > .gallery'),
                infoBtn = this.$$(this.el).find('.info').find('.btn');


            app.prefixedEventListener(techLine.elmts[0], 'AnimationEnd', function(e) {
                countatech++;
                if (countatech == 1) {
                    this.$$(this.el + ' .work-infos > .tech > .sprite').addClass('animate-sprite');
                }
                if (countatech === 2) {
                    this.$$(e.target).removeClass('animate-in-link-tech');
                    this.$$(this.el + ' .work-infos > .tech > span').addClass('animate-span');
                }
            }.bind(this));

            app.prefixedEventListener(externalLine.elmts[0], 'AnimationEnd', function(e) {
                countexternal++;
                if (countexternal == 1) {
                    this.$$(this.el + ' .work-infos > .external > .sprite').addClass('animate-sprite');
                }
                if (countexternal === 2) {

                    this.$$(e.target).removeClass('animate-in-link-gallery');
                    this.$$(this.el + ' .work-infos > .external > span').addClass('animate-span');
                }
            }.bind(this));

            app.prefixedEventListener(galleryLine.elmts[0], 'AnimationEnd', function(e) {
                countgallery++;
                if (countgallery == 1) {
                    this.$$(this.el + ' .work-infos > .gallery > .sprite').addClass('animate-sprite');
                }
                if (countgallery === 2) {
                    this.$$(e.target).removeClass('animate-in-link-gallery');
                    this.$$(this.el + ' .work-infos > .gallery > span').addClass('animate-span');
                }
            }.bind(this));
            app.prefixedEventListener(infoBtn.elmts[0], 'AnimationEnd', function(e) {
                counttitle++;
                if (counttitle === 1) {
                    this.$$(e.target).removeClass('animate-in-title');
                    this.$$(this.el + ' .infos > .btn > h2').addClass('animate-title-opacity');
                }
            }.bind(this));

        };

        this.show = function() {
            this.$el.removeClass('hidden');

            this.animateIn();
        };

        this.hide = function() {
            this.$el.addClass('hidden');
        };


        this.animateIn = function() {
            this.$$(this.el + ' .infos > .btn').addClass('animate-in-title');
            this.techLink.addClass('animate-in-link-tech');
            this.launchLink.addClass('animate-in-link-external');
            this.galleryLink.addClass('animate-in-link-gallery');
        };


        this.reset = function() {
            if (this.gallery) {
                this.gallery.destroy();
            }
            this.tech.hide();
            this.info.show();
        };

        this.destroy = function() {
            if (this.gallery) {
                this.gallery.destroy();
            }

            this.info.destroy();
            this.info = null;

            this.tech.destroy();
            this.tech = null;

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
