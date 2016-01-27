require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    waitSeconds: 0
});

require([
    'vendors/pubsub',
    'vendors/fastclick',
    'routers/router',
    'lib/navigator',
    'noJquery',
    'vendors/three',
    'vendors/OrbitControls',
    'vendors/Detector',
    'vendors/TweenMax',
    'views/menu',
    'views/home',
    'views/work',
    'views/about'

], function(PubSub, FastClick, Router, Navigator, NoJQuery, TREE, OrbitControls, Detector, TweenMax, Menu, Home, Work, About) {
    var Master = function() {
        this.$$ = NoJQuery;
        this.prefixedEventListener = function(element, type, callback) {
            var pfx = ["webkit", "moz", "MS", "o", ""];
            for (var p = 0; p < pfx.length; p++) {
                if (!pfx[p]) type = type.toLowerCase();
                element.addEventListener(pfx[p] + type, callback, false);
            }
        };

        this.currentView;
        this.previousView;
        this.event = PubSub;

        this.router = new Router(this.event);
        this.menu = new Menu(this);
        this.home = new Home(this);
        this.work = new Work(this);
        this.about = new About(this);

        this.initialize = function() {

            //NAVIGATOR
            this.navigator = new Navigator();

            //ROUTER
            this.router.initialize(this.event);
            this.router.on('change', this.routerChange.bind(this));
            this.router.on('cmd', function(evt, paths) {
                paths.map(function(path, index) {
                    this.navigator.addCommand(path, this[path]);
                }.bind(this));
                this.navigator.commands.map(function(command, index) {
                    this.navigator.executeCommand(index);
                }.bind(this));
            }.bind(this));
            this.router.on('details', this.onRouterDetails.bind(this));
            this.router.start();

            //LET ELEMENTS VISIBLE
            this.$$('main').removeClass('hidden');
            this.$$('.footer').removeClass('hidden');
            this.$$('.content').removeClass('hidden');

            //this.showConsoleGreetings();
        };
        this.routerChange = function(evt, data) {
            if (data.length > 0 && data[0] !== 'home' && this.home.loaded === false) {
                this.navigator.addCommand('home', this.home);
                this.navigator.executeCommand();
            }

            data.map(function(elmt, index) {
                this.navigator.addCommand(data[index], this[data[index]]);
            }.bind(this));

            if (data.length === 0) {
                this.navigator.addCommand('home', this.home);
            }

            if (this.navigator.commands.length > 2) {
                this.navigator.removeCommand();
            }

            if (this.navigator.currentView) {
                this.menu.activatetMenu(this.navigator.currentView.el.replace(/\./, ''));
            }

            this.navigator.executeCommand();

            if (data.length < 3) {
                this.navigator.subCommands = [];
            }

            if (this.navigator.subCommands.length) {
                this.work.showSection(this.navigator.subCommands[0].project, this.navigator.subCommands[0].section);
            }

        };
        this.onRouterDetails = function(evt, data) {
            if (this.work.loaded === false) {
                this.routerChange(null, [data[0]]);
            } else {
                this.work.show();
            }

            if (this.navigator.commands.length === 0) {
                this.navigator.addCommand('home', this.home);
                this.navigator.executeCommand();
                this.routerChange(null, ['work']);
            }

            this.navigator.subCommands = [];
            this.navigator.subCommands.push({
                project: data[1],
                section: data[2]
            });

            this.work.showSection(this.navigator.subCommands[0].project, this.navigator.subCommands[0].section);

        };
        this.showConsoleGreetings = function() {
            console.clear();
            console.log("  _    _      _ _       _  ");
            console.log(" | |  | |    | | |     | | ");
            console.log(" | |__| | ___| | | ___ | | ");
            console.log(" |  __  |/ _ \ | |/ _ \| | ");
            console.log(" | |  | |  __/ | | (_) |_| ");
            console.log(" |_|  |_|\___|_|_|\___/(_) ");
            console.log("Thanks for stopping by! =]");
        };
    };

    window.app = new Master();
    window.app.initialize();
});
