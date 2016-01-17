define(['noJquery', 'views/project'], function(NoJQuery, Project) {
    var Work = function(app) {
        this.el = '.work';
        this.$$ = NoJQuery;
        this.router = app.router;
        this.completed = false;
        this.projects = [];
        this.initialize = function() {
            this.setup();
        };
        this.setup = function() {
            this.$el = this.$$(this.el);
        };
        this.execute = function() {
            this.setup();
            this.show();
            this.projetSelect();
            this.completed = true;
            app.event.publish('completed');
        };

        this.show = function() {
            this.$el.removeClass('hidden');
        };
        this.hide = function() {
            this.$el.addClass('hidden');
        };

        this.projetSelect = function() {
            if (this.projects.length === 0) {
                this.projects = this.getProjects();
            }

        };
        this.getProjects = function() {
            var ar = [],
                projectsElmt = [];

            projectsElmt = this.$$('.project').elmts;
            projectsElmt.map(function(elmt, index) {

                var pro = new Project(app, '.' + elmt.attributes.class.value.replace(/\W/g, '.'));
                console.log(index);
                pro.initialize();
                ar[index] = pro;
            }.bind(this));
            projectsElmt = null;
            return ar;
        };

        this.showSection = function(project, section) {
            if (this.projects.length === 0) {
                this.projects = this.getProjects();
            }

            this.projects.map(function(elmt, index) {
                if (elmt.key.toLowerCase() === project.toLowerCase()) {
                    elmt.callbackPageProject(section);
                }
            });
        };

        this.destroy = function() {
            this.hide();
            this.projects.map(function(elmt, index) {
                elmt.destroy();
            });
            this.projects = [];
        };

        this.initialize();
    };
    return Work;
});
