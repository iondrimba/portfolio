define([], function () {
    'use strict';
    var Navigator = function Navigator() {
        this.currentCommand = undefined;
        this.previousCommand = undefined;
        this.commands = [];
        this.subCommands = [];
        this.addCommand = function (key, item) {
            var cmd = { item: item, key: key };

            this.commands.push(cmd);
            this.currentCommand = cmd;

            if (this.previousCommand && this.commands.length > 1) {
                this.previousCommand = this.commands[0];
                if (this.commands.length > 1) {
                    this.commands.shift();
                }
            }
        };
        this.executeCommand = function () {
            this.currentCommand = this.commands[0];
            this.currentCommand.item.execute();
        };
        this.simpleCommand = function () {
            if (this.previousCommand && this.previousCommand.key !== 'home') {
                this.previousCommand.item.destroy();
            } else {
                this.previousCommand.item.minimize();
            }

            this.executeCommand();
        };
        this.nextCommand = function () {
            this.previousCommand = this.commands.shift();
            this.currentCommand = this.commands[0];

            if (this.previousCommand) {
                if (this.previousCommand.key === 'home' && this.currentCommand) {
                    this.previousCommand.item.minimize();
                } else if (this.currentCommand) {
                    this.previousCommand.item.destroy();
                }
            }

            if (this.currentCommand) {
                this.executeCommand();
            }
        };
    };

    return Navigator;
});