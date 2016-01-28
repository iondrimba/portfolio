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

            if (this.commands.length > 2) {
                this.previousCommand = this.commands[0];
                this.commands.shift();
            }

            this.currentView = this.commands[this.commands.length - 1].item;
        };
        this.executeCommand = function() {
            this.currentCommand = this.commands[this.commands.length - 1];
            this.currentView.execute();

            if (this.commands.length > 1) {
                this.previousCommand = this.commands[0];
                if (this.currentCommand.key !== this.previousCommand.key) {
                    this.previousCommand.item.destroy();
                }
            }
        };
        this.removeCommand = function() {
            this.commands.pop();
            this.currentCommand = this.commands[this.commands.length - 1];

            if (this.currentView) {
                this.currentView.destroy();
            }
            this.previousCommand = null;
            this.currentView = this.currentCommand.item;

        };
    };

    return Navigator;
});
