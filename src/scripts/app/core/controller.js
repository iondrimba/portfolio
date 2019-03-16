define(['page', 'views/home', 'views/about'], function (page, Home, About) {

  var Controller = function Controller(app) {
    this.app = app;
    this.setup = function () {
      this.home = new Home(this.app);
      this.about = new About(this.app);
      this.previous;
    };

    this.start = function () {
      this.setup();
      this.home.init();
      this.about.init();

      page('/', this.onHome.bind(this));
      page('/index.html', this.onHome.bind(this));
      page('/about', this.onPrerenderAbout.bind(this), this.onAbout.bind(this));

      page.exit('/', this.onExitHome.bind(this));
      page.exit('/about', this.onExitAbout.bind(this));

      page('*', this.notFound.bind(this));

      page();
    };
    this.navigate = function (path) {
      page(path);
    };

    this.onExitHome = function (ctx, next) {
      if (this.previous) {
        this.previous.hide();
      }
      this.home.hide();
      next();
    };
    this.onExitAbout = function (ctx, next) {
      this.about.hide();
      next();
    };

    this.onPrerender = function (view) {
      if (this.home.loaded === false) {
        this.home.execute();
        this.home.hide();
      }
      if (this.previous) {
        this.previous.hide();
      }
    };

    this.onPrerenderAbout = function (ctx, next) {
      this.onPrerender('about');
      next();
    };

    this.onHome = function (ctx, next) {
      console.log(this.home)
      this.home.execute();
    };
    this.onAbout = function (ctx, next) {
      this.about.execute();
    };
    this.notFound = function (ctx, next) {
      console.log('notFound', ctx, next);
    };
  };

  return Controller;
});
