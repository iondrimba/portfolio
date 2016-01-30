define(['noJquery', 'vendors/page'], function(NoJQuery, page) {

    var Router = function() {
        this.njq = NoJQuery;
        this.initialize = function(PubSub) {
            this.pubsub = PubSub;
            page('/', this.callbackPage.bind(this));
            page('/work', this.callbackPage.bind(this));
            page('/about', this.callbackPage.bind(this));
            page('/work/:project/:section', this.callbackPageDetails.bind(this));
        };
        this.start = function() {
            page();
        };
        this.on = function(eventName, callback) {
            this.pubsub.subscribe(eventName, callback);
        };
        this.off = function(eventName) {
            this.pubsub.unsubscribe(eventName);
            this.eventName = '';
        };
        this.callbackPage = function(ctx) {
            this.addPubSub('change', ctx);
        };
        this.callbackPageDetails = function(ctx) {
            this.addPubSub('details', ctx);
        };
        this.addPubSub = function(event, ctx) {
            var paths = ctx.path.split('/'),
                commands = [],
                i = 0,
                total = paths.length;

            for (i; i < total; i++) {
                if (paths[i] !== '' && paths[i] !== 'home') {
                    commands.push(paths[i]);
                }
            }
            this.pubsub.publish(event, commands);
        };
    };
    return Router;
});
