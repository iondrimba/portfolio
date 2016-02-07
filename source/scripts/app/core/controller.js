define(['page', 'views/menu', 'views/home', 'views/work', 'views/about'], function(page, Menu, Home, Work, About) {

    var Controller = function Controller(app) {
        this.setup = function() {
            console.log('Controller setup', app);
            this.menu = new Menu(app);
            this.home = new Home(app);
            this.work = new Work(app);
            this.about = new About(app);
        };

        this.start = function() {
            this.setup();
            this.home.init();
            this.work.init();
            this.menu.init();
            this.about.init();
            this.masterPage();

            page('/', this.onHome.bind(this));
            page('/work', this.onPrerender.bind(this), this.onWork.bind(this));
            page('/about', this.onPrerender.bind(this), this.onAbout.bind(this));
            page('/work/:project/:section', this.onPrerenderProject.bind(this), this.onProject.bind(this));            
            page.exit('/', this.onExit.bind(this));
            page.exit('/about', this.onExit.bind(this));

            page('*', this.notFound.bind(this));

            page();
        };
        this.masterPage = function(ctx, next) {

            //LET ELEMENTS VISIBLE
            app.$$('main').removeClass('hidden');
            app.$$('.footer').removeClass('hidden');
            app.$$('.content').removeClass('hidden');

        };
        this.navigate = function(path) {
            page(path);
        };


        this.onExit = function(ctx, next) {
            console.log('exit', ctx.path, this.current);
            this.current.hide();
            next();
        };
        this.onPrerender = function(ctx, next) {
            if (this.menu.animated) {
                this.menu.activateMenu(ctx.path.replace(/\//, ''));
            } else {

                this.menu.execute();
            }

            if (this.home.loaded === false) {
                this.home.execute();
                this.current = this.home;
                this.home.hide();
                this.menu.activateMenu(ctx.path.replace(/\//, ''));
            }

            next();
        };
        this.onPrerenderProject = function(ctx, next) {
           // this.onHome();
            //this.work.execute();
            //this.current = this.work;
            next();
        };
        this.onHome = function(ctx, next) {
            this.menu.hide();
            this.home.execute();
            this.current = this.home;
        };
        this.onWork = function(ctx, next) {
            this.work.execute();
            this.current = this.work;
        };
        this.onProject = function(ctx, next) {
             console.log('onProject', ctx.path);
             var project = ctx.path.split('/')[2];
             var section = ctx.path.split('/')[3];
             this.work.showSection(project, section);
        };
        this.onAbout = function(ctx, next) {
            this.about.execute();
            this.current = this.about;
        };
        this.notFound = function(ctx, next) {
            console.log('notFound');
        };
    };

    return Controller;
});
