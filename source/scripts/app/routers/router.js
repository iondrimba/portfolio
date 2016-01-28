define(['noJquery', 'vendors/page'], function(NoJQuery, page) {

    var Router = function() {
        this.njq = NoJQuery;
        this.initialize = function(event) {
            this.event = event;
            page('/', this.callbackPage.bind(this));
            page('/work', this.callbackPage.bind(this));
            page('/about', this.callbackPage.bind(this));
            page('/work/:project/:section', this.callbackPageDetails.bind(this));
        };
        this.start = function() {
            page();
        };
        this.on = function(eventName, callback) {
            this.event.subscribe(eventName, callback);
        };
        this.off = function(eventName) {
            this.event.unsubscribe(eventName);
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
                if (paths[i] !== '') {
                    commands.push(paths[i]);
                }
            }
            this.event.publish(event, commands);
        };
    };
    return Router;
});
