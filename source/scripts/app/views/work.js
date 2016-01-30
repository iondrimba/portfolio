define(['text!source/templates/work.html', 'views/project'], function(template, Project) {
    var Work = function(app) {
        this.el = '.work';
        this.$$ = app.$$;
        this.projects = [];
        this.view = function() {
            var view = app.handlebars.compile(template),
                html = view()

            return html;

        };
        this.init = function() {
            this.setup();
        };
        this.setup = function() {
            this.$el = this.$$(this.el);
            this.$el.html(this.view());
        };
        this.execute = function() {
            this.$el.removeClass('hidden');
            this.projetSelect();
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

        this.hide = function() {
            this.$el.addClass('hidden');
            this.projects.map(function(elmt, index) {
                elmt.destroy();
            });
            this.projects = [];
        };
    };
    return Work;
});
