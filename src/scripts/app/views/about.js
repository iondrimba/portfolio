define(['text!src/templates/about.html'], function (template) {
  var About = function (app) {
    this.el = '.about';
    this.$$ = app.$$;
    this.view = function () {
      var view = app.handlebars.compile(template),
        html = view();

      return html;

    };

    this.init = function () {
      this.setup();
    };

    this.setup = function () {
      this.$el = this.$$('.about__content');
      this.$el.html(this.view());
    };

    this.execute = function () {
      var timeOut = setTimeout(function () {
        clearTimeout(timeOut);
        this.animateIn();
      }.bind(this), 100);
    };

    this.animateIn = function () {
      this.$$('.about').addClass('animate');
      this.$el.addClass('animate');
      this.buttonCloseShow();
      this.titleShow();
      this.introTextShow();
      this.brandsShow();
      this.skillShow();
    };

    this.hide = function () {
      this.$el.addClass('animate-out');
      this.$$('.about').addClass('animate-out');
      TweenLite.delayedCall(.5, function () {
        this.$$('.about').removeClass('animate-out');
        this.$$('.about').removeClass('animate');
        this.$el.removeClass('animate');
        this.$el.removeClass('animate-out');
      }.bind(this));

      this.buttonCloseHide();
      this.titleHide();
      this.introTextHide();
      this.brandsHide();
      this.skillsHide();
    };

    this.buttonCloseShow = function () {
      requestAnimationFrame(function () {
        this.$$('.close').addClass('close-animate-in');
      }.bind(this));
    };

    this.buttonCloseHide = function () {
      requestAnimationFrame(function () {
        this.$$('.close').removeClass('close-animate-in');
      }.bind(this));
    };

    this.titleShow = function () {
      requestAnimationFrame(function () {
        this.$$('.title').addClass('title-animate-in');
      }.bind(this));
    };

    this.titleHide = function () {
      this.$$('.title').removeClass('title-animate-in');
    };

    this.skillShow = function () {
      requestAnimationFrame(function () {
        this.$$('.skills').addClass('animate-in');
        this.$$('.primary').addClass('animate-in');
        this.$$('.secondary').addClass('animate-in');
        this.$$('.group-list').addClass('animate-in');
      }.bind(this));

    };
    this.skillsHide = function () {
      this.$$('.skills').removeClass('animate-in');
      this.$$('.primary').removeClass('animate-in');
      this.$$('.secondary').removeClass('animate-in');
      this.$$('.group-list').removeClass('animate-in');
    };

    this.introTextShow = function () {
      this.$$('.intro').find('p').each(function (elmt, index) {
        TweenLite.delayedCall(.13 + (index * .13), function () {
          requestAnimationFrame(function () {
            this.$$(elmt).addClass('block-animate-in');
          }.bind(this));
        }.bind(this));
      }.bind(this));
    };
    this.introTextHide = function () {
      this.$$('.intro').find('p').each(function (elmt, index) {
        this.$$(elmt).removeClass('block-animate-in');
      }.bind(this));
    };

    this.brandsShow = function () {
      this.$$('.brands').find('div').each(function (elmt, index) {
        TweenLite.delayedCall(.2 + (index * .05), function () {
          this.$$(elmt).addClass('icon-animate-in');
        }.bind(this));
      }.bind(this));
    };

    this.brandsHide = function () {
      this.$$('.brands').find('div').each(function (elmt, index) {
        this.$$(elmt).removeClass('icon-animate-in');
      }.bind(this));
    };
  };
  return About;
});
