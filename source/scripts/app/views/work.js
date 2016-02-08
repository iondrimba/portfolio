define(['text!source/templates/work.html', 'models/project', 'views/project'], function(template, ProjectModel, Project) {
    var Work = function(app) {
        this.el = '.work';
        this.$$ = app.$$;
        this.projects = [];
        this.model = ProjectModel;
        this.view = function() {
            var view = app.handlebars.compile(template),
                html = view();

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
            this.projectsRender();

        };

        this.projectsRender = function() {
            this.$$(this.el).empty();
            this.model.map(function(data, index) {
                var project = new Project(app, data);
                this.projects[index] = project;                
                this.$$(this.el).append(project.view());
                project.initialize();
            }.bind(this));
        };
        this.reset = function() {
            this.projects.map(function(item, index) {
                 item.reset();
            });
        };

        this.showSection = function(project, section) {
            this.projects.map(function(item, index) {
                if (item.key.toLowerCase() === project.toLowerCase()) {
                    item.callbackPageProject(section);
                } else {
                    item.reset();
                }
            });
        };

        this.hide = function() {
            this.$el.addClass('hidden');
            this.projects.map(function(project, index) {
                project.destroy();
            });

            this.$el.empty();
            this.projects = [];
        };
    };
    return Work;
});
