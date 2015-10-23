/**
 * Created by zxh on 15/10/9.
 */
"use strict";

var puremvc = require('puremvc').puremvc;
var PrepModelCommand = require('./PrepModelCommand.js');
var PrepViewCommand = require('./PrepViewCommand.js');
var PrepControllerCommand = require('./PrepControllerCommand.js');

module.exports = puremvc.define(
    // CLASS INFO
    {
        name: 'controller.command.StartupCommand',
        parent: puremvc.MacroCommand
    },

    // INSTANCE MEMBERS
    {
        initializeMacroCommand: function() {
            this.addSubCommand(PrepModelCommand);
            this.addSubCommand(PrepViewCommand);
            this.addSubCommand(PrepControllerCommand);
        }
    },

    // STATIC MEMBERS
    {
        NAME: 'StartupCommand'
    }

);
