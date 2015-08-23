define(['lib/NoJQuery', 'vendors/page'], function (NoJQuery, page) {
    var Router = function () {
        this.njq = NoJQuery;        
        this.initialize = function (PubSub) {
            this.pubsub = PubSub;
            page('/', this.callbackPage.bind(this));
            page('/work', this.callbackPage.bind(this));
            page('/about', this.callbackPage.bind(this));
            page('/work/:project/:section', this.callbackPageDetails.bind(this));
        };
        this.start = function () {
            page();
        };
        this.on = function (eventName, callback) {            
            this.pubsub.subscribe(eventName, callback);
        };
        this.off = function (eventName) {
            this.pubsub.unsubscribe(eventName);
            this.eventName = '';
        };
        this.callbackPage = function (ctx) {
            var paths = ctx.path.split('/'),
                commands = [];

            for (var i = 0; i < paths.length; i++) {
                if (paths[i] !== '' && paths[i] !== 'home') {
                    commands.push(paths[i]);
                }
            }
            this.pubsub.publish('change', commands);
        };
        this.callbackPageDetails = function (ctx) {
            var paths = ctx.path.split('/'),
                commands = [];

            for (var i = 0; i < paths.length; i++) {
                if (paths[i] !== '' && paths[i] !== 'home') {
                    commands.push(paths[i]);
                }
            }
            this.pubsub.publish('details', commands);
        };
    };
    return Router;
});