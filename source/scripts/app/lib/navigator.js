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

            // if (this.commands.length > 2) {
            //     this.previousCommand = this.commands[0];
            //     this.commands.shift();
            // }

            this.currentView = this.commands[0].item;
        };
        this.executeCommand = function(index) {                        
            this.currentCommand = this.commands[index];            
            this.currentView = this.commands[index].item;

            this.currentView.execute();

            console.log('execute', this.currentCommand.key);

            if(this.commands.length>1) {
                this.removeCommand();
            }

            // if (this.commands.length > 1) {
            //     this.previousCommand = this.commands[0];
            //     if (this.currentCommand.key !== this.previousCommand.key) {
            //         this.previousCommand.item.destroy();
            //     }
            // }
        };
        this.removeCommand = function() {
            //this.commands.pop();
            //this.currentCommand = this.commands[this.commands.length - 1];

            if (this.currentView) {
                this.currentView.destroy();
            }
            console.log('remove');
            this.commands.shift();
            console.log(this.commands);
            //this.previousCommand = null;
            //this.currentView = this.currentCommand.item;

        };
    };

    return Navigator;
});
