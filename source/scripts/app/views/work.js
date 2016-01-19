define(['noJquery', 'views/project'], function(NoJQuery, Project) {
    var Work = function(app) {
        this.el = '.work';
        this.$$ = NoJQuery;
        this.projects = [];
        this.initialize = function() {
            console.log('Work init');
            this.setup();
        };
        this.setup = function() {
            this.$el = this.$$(this.el);
        };
        this.execute = function() {
            console.log('Work execute');
            this.setup();
            this.show();
            this.projetSelect();
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
