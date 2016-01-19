define([], function() {
    'use strict';
    var Navigator = function Navigator() {
        this.currentCommand = undefined;
        this.previousCommand = undefined;
        this.commands = [];
        this.subCommands = [];
        this.addCommand = function(key, item) {
            var cmd = {
                item: item,
                key: key
            };

            this.commands.push(cmd);
            this.currentCommand = cmd;

            // if (this.previousCommand && this.commands.length > 1) {
            //     this.previousCommand = this.commands[0];
            //     if (this.commands.length > 1) {
            //         this.commands.shift();
            //     }
            // }

            console.log('navigator addCommand', key);
        };
        this.executeCommand = function() {
            console.log('navigator executeCommand',this.commands[0].key)
            this.currentCommand = this.commands[0];
            this.currentCommand.item.execute();
        };
        this.simpleCommand = function() {
            if (this.previousCommand && this.previousCommand.key !== 'home') {
                this.previousCommand.item.destroy();
            } else {
                this.previousCommand.item.minimize();
            }

            this.executeCommand();
        };
        this.removeCommand = function() {                        
            this.currentCommand = this.commands[0];
            this.commands = [];
        };
        this.nextCommand = function() {
            if (this.commands.length > 1) {
                this.previousCommand = this.commands.shift();
                this.currentCommand = this.commands[0];

                this.executeCommand();
                this.previousCommand = this.commands.shift();
            }
            // this.previousCommand = this.commands.shift();
            // this.currentCommand = this.commands[0];

            // if (this.previousCommand) {
            //     if (this.previousCommand.key === 'home' && this.currentCommand) {
            //         this.previousCommand.item.minimize();
            //     } else if (this.currentCommand) {
            //         this.previousCommand.item.destroy();
            //     }
            // }

        };
    };

    return Navigator;
});
