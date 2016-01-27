define([], function() {
    'use strict';
    var Navigator = function Navigator() {
        this.currentCommand;
        this.previousCommand;
        this.currentView;
        this.commands = [];
        this.subCommands = [];
        this.addCommand = function(key, item) {
            var cmd = {
                item: item,
                key: key
            };

            this.commands.push(cmd);

            this.currentCommand = cmd;

            console.log('addcommand', this.commands[0]);

            this.currentView = this.commands[0].item;
        };
        this.executeCommand = function() {
            this.currentCommand = this.commands[this.commands.length-1];
            console.log('executeCommand',this.currentCommand)
            this.currentView = this.commands[this.commands.length-1].item;

            this.currentView.execute();
            if (this.commands.length > 1) {
                this.removeCommand();
            }
        };
        this.removeCommand = function() {

            if (this.currentView) {
                this.currentView.destroy();
            }
            this.commands.shift();

        };
    };

    return Navigator;
});
