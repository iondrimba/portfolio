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

<<<<<<< HEAD
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
=======
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
>>>>>>> local

            if (this.currentView) {
                this.currentView.destroy();
            }
<<<<<<< HEAD
            this.previousCommand = null;
            this.currentView = this.currentCommand.item;
=======
            this.commands.shift();
>>>>>>> local

        };
    };

    return Navigator;
});
