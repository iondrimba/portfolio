/* global Detector */
/* global TweenLite */
define(['views/grid3d', 'text!src/templates/home.html'], function (Grid3D, template) {
  var Home = function (app) {
    this.el = '.home';
    this.$$ = app.$$;
    this.loaded = false;
    this.btnAbout;
    this.view = function () {
      var view = app.handlebars.compile(template),
        html = view();
      return html;

    };
    this.init = function () {
      this.$el = this.$$(this.el);
      this.$el.html(this.view());
      this.btnAbout = this.$$('.link');

      //display 3d grid only if WGL supported
      if (this.webglSupport()) {
        this.grid3D = new Grid3D(app);
      }

      //about click
      this.btnAbout.on('click', this.onAboutClick.bind(this));

    };
    this.titleShow = function () {
      this.$$('.hero-title').addClass('title-animate');
    };
    this.titleHide = function () {
      this.$$('.hero-title').removeClass('title-animate');
    };
    this.hideAboutButton = function () {
      this.btnAbout.addClass('hide-button-about');
    };
    this.showAboutButton = function () {
      this.btnAbout.removeClass('hide-button-about');
    };
    this.gotoAbout = function () {
      this.grid3D.paused = true;
      this.grid3D.removeMouseMove();
      app.controller.navigate('/about');
    };
    this.hideLoader = function () {
      this.$$('.loading-arrow').remove();
    };

    this.onAboutClick = function onAboutClick(evt) {
      evt.preventDefault();
      this.hideAboutButton();
      this.gotoAbout();
    };

    this.showSocialIcons = function animateSocialIcons() {
      this.socialIconsAnimation('addClass');
    };

    this.hideSocialIcons = function animateSocialIcons() {
      this.socialIconsAnimation('removeClass');
    };

    this.socialIconsAnimation = function animateSocialIcons(callback) {
      this.$$('.social').find('a').each(function (elmt, index) {
        TweenLite.delayedCall(.1 * index, function () {
          this.$$(elmt)[callback]('social-animate-in');
        }.bind(this));
      }.bind(this));
    };

    this.webglSupport = function () {
      try {
        var canvas = document.createElement('canvas');
        return !!window.WebGLRenderingContext && (
          canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
      } catch (e) {
        return false;
      }
    };
    this.execute = function () {
      if (this.webglSupport()) {
        if (this.grid3D.executed === false) {
          this.grid3D.execute();
        }
      }
      if (this.grid3D.executed === false) {
        this.grid3D.execute();
      }

      this.$el.removeClass('hidden');

      this.hideLoader();

      this.loaded = true;

      this.show();

      this.$$('.loader').addClass('fade-out');
      this.$$('.loader-text').addClass('fade-out');

      var iinterval = setTimeout(function () {
        this.$$('.loader-wrapper').remove();
        this.$el.addClass('fade-in');
        clearTimeout(iinterval);
      }.bind(this), 300);

    };

    this.show = function () {
      this.grid3D.paused = false;
      //this.grid3D.addMouseMove();
      this.grid3D.animate();

      this.titleShow();
      this.showAboutButton();
      this.showSocialIcons();
    };
    this.hide = function () {
      this.titleHide();
      this.hideSocialIcons();
    };

  };
  return Home;
});
