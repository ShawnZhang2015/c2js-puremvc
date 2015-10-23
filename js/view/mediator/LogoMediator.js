/**
 * Created by zxh on 15/10/10.
 */

var puremvc = require('puremvc').puremvc;
var LogoLayer = require('../component/LogoLayer.js');


module.exports = puremvc.define(
    // CLASS INFO
    {
        name: 'view.mediator.LoginMediator',
        parent: puremvc.Mediator,
        constructor: function () {
            puremvc.Mediator.call(this, this.constructor.NAME);
        }
    },
    // INSTANCE MEMBERS
    {

        init: function() {
            this.viewComponent = new LogoLayer();
            var self = this;
            //this.viewComponent.enterGame = function() {
            //    self.sendNotification(Command.RUN_GAME);
            //}
        },

        getRes: function() {
            return G_RES.resources;
        },

        /** @override */
        listNotificationInterests: function () {
            return [
                Command.RUN_GAME,
                Messages.LOAD_COMPLETE
            ];
        },

        /** @override */
        handleNotification: function (notification) {
            switch (notification.getName()) {
                case Command.RUN_GAME:
                    this.facade.removeMediator(this.constructor.NAME);
                    break;
                case Messages.LOAD_COMPLETE:
                    this.sendNotification(Command.RUN_GAME);
                    break;

            }
        },

        /** @override */
        onRegister: function () {
        },

        /** @override */
        onRemove: function () {
            if (this.viewComponent) {
                this.viewComponent.removeFromParent();
                this.viewComponent = null;
            }
        },
    },
    // STATIC MEMBERS
    {
        NAME: 'LoginMediator'
    }
);