/**
 * Created by zxh on 15/10/9.
 */
"use strict"

var puremvc = require('puremvc').puremvc;
var StartupCommand = require('./controller/command/StartupCommand.js');

var RunGameCommand = require('./controller/command/RunGameCommand.js');

var AppFacade = puremvc.define(
    // CLASS INFO
    {
        name: 'AppFacade',
        parent: puremvc.Facade,
        constructor: function (multitonKey) {
            puremvc.Facade.call(this, multitonKey);
        }
    },

    // INSTANCE MEMBERS
    {
        initializeController: function () {
            puremvc.Facade.prototype.initializeController.call(this);
            this.registerCommand(AppFacade.STARTUP, StartupCommand);
            this.registerCommand(Command.RUN_GAME, RunGameCommand);
        },

        initializeModel: function () {
            puremvc.Facade.prototype.initializeModel.call(this);
        },

        initializeView: function () {
            puremvc.Facade.prototype.initializeView.call(this);
        },

        startup: function () {
            this.sendNotification(AppFacade.STARTUP);
        }
    },

    // STATIC MEMBERS
    {
        getInstance: function(multitonKey) {
            var instanceMap = puremvc.Facade.instanceMap;
            var instance = instanceMap[multitonKey];
            if (instance) {
                return instance;
            }
            return global.facade = instanceMap[multitonKey] = new AppFacade(multitonKey);
        },
        NAME: 'AppFacade',
        STARTUP: 'StartUp'
    }
);

module.exports = AppFacade;
