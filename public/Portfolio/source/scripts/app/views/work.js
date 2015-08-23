define(['lib/NoJQuery', 'views/project'], function (NoJQuery, Project) {
    var Work = function (app) {
        this.el = '.work';
        this.njq = NoJQuery;
        this.router = app.router;
        this.completed = false;
        this.projects = [];
        this.initialize = function () {
            this.$el = this.njq.select(this.el);
        },
        this.execute = function () {
            this.njq.removeClass(this.$el, 'hidden');
            if (this.projects.length === 0) {
                this.projects = this.getProjects();
            }

            this.completed = true;
            app.event.publish('completed');
        };
        this.getProjects = function () {
            var ar = [];
            this.njq.each('.project', function (elmt, index) {
                var pro = new Project(app, '.' + elmt.attributes.class.value.replace(/\W/g, '.'));
                pro.initialize();
                ar[index] = pro;
            }.bind(this));

            return ar;
        };

        this.showSection = function (project, section) {
            if (this.projects.length === 0) {
                this.projects = this.getProjects();
            }

            this.projects.map(function (elmt, index) {
                if (elmt.key.toLowerCase() === project.toLowerCase()) {
                    elmt.callbackPageProject(section);                    
                }
            });
        };

        this.destroy = function () {
            var total = this.projects.length,
                i = 0;

            this.njq.addClass(this.$el, 'hidden');

            for (i = 0; i < total; i++) {
                this.projects[i].destroy();
            }

            this.projects = [];
        };

        this.initialize();
    };
    return Work;
});