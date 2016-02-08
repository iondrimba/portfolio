define(['page', 'views/menu', 'views/home', 'views/work', 'views/about'], function(page, Menu, Home, Work, About) {

    var Controller = function Controller(app) {
        this.setup = function() {
            this.menu = new Menu(app);
            this.home = new Home(app);
            this.work = new Work(app);
            this.about = new About(app);
            this.previous;
        };

        this.start = function() {
            this.setup();
            this.home.init();
            this.work.init();
            this.menu.init();
            this.about.init();
            this.masterPage();


            page('/', this.onHome.bind(this));
            page('/work', this.onPrerenderWork.bind(this), this.onWork.bind(this));
            page('/about', this.onPrerenderAbout.bind(this), this.onAbout.bind(this));
            page('/work/:project/:section', this.onPrerenderProject.bind(this), this.onProject.bind(this));

            page.exit('/', this.onExitHome.bind(this));
            page.exit('/about', this.onExitAbout.bind(this));
            page.exit('/work', this.onExitWork.bind(this));
            page.exit('/work/:project/:section', this.onExitProject.bind(this));

            page('*', this.notFound.bind(this));

            page();
        };
        this.masterPage = function(ctx, next) {

            //LET ELEMENTS VISIBLE
            app.$$('main').removeClass('hidden');
            app.$$('footer').removeClass('hidden');
            app.$$('.content').removeClass('hidden');

        };
        this.navigate = function(path) {
            page(path);
        };

        this.onExitHome = function(ctx, next) {
            if (this.previous) {
                this.previous.hide();
            }
            this.home.hide();
            next();
        };
        this.onExitWork = function(ctx, next) {
            next();
        };
        this.onExitAbout = function(ctx, next) {
            this.about.hide();
            next();
        };
        this.onExitProject = function(ctx, next) {
            this.work.reset();
            next();
        };

        this.onPrerender = function(view) {
            if (this.home.loaded === false) {
                this.home.execute();
                this.home.hide();
            }
            if (this.previous) {
                this.previous.hide();
            }

            if (this.menu.animated) {
                this.menu.activateMenu(view);
            } else {
                this.menu.execute();
                var s = setTimeout(function() {
                    this.menu.activateMenu(view);

                    clearTimeout(s);
                }.bind(this), 1500);
            }

        };

        this.onPrerenderWork = function(ctx, next) {
            this.onPrerender('work');
            next();
        };
        this.onPrerenderAbout = function(ctx, next) {
            this.onPrerender('about');
            this.work.hide();
            next();
        };

        this.onPrerenderProject = function(ctx, next) {
            this.onPrerender('work');
            if (this.work.$el.hasClass('hidden')) {
                this.work.execute();
                this.work.reset();
                var s = setTimeout(function() {
                    next();
                    clearTimeout(s);

                }.bind(this), 1000);
            } else {
                next();
            }

        };

        this.onHome = function(ctx, next) {
            this.menu.hide();
            this.home.execute();
        };
        this.onWork = function(ctx, next) {
            this.work.execute();
        };
        this.onProject = function(ctx, next) {
            var project = ctx.path.split('/')[2];
            var section = ctx.path.split('/')[3];
            this.work.showSection(project, section);
        };
        this.onAbout = function(ctx, next) {
            this.about.execute();
        };
        this.notFound = function(ctx, next) {
            console.log('notFound');
        };
    };

    return Controller;
});
