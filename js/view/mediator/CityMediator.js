/**
 * Created by zxh on 15/10/15.
 */
var puremvc = require('puremvc').puremvc;
var CityLayer = require('../component/CityLayer.js');

var RobotFSM = require('../../fsm/RobotFSM.js');
module.exports = puremvc.define
(
    // CLASS INFO
    {
        name: 'view.mediator.CityMediator',
        parent: puremvc.Mediator,
        constructor: function () {
            puremvc.Mediator.call(this, this.constructor.NAME);
            var robotFSM = new RobotFSM();
            this.robotFSM = robotFSM.create('robot');
            this.heroFSM = robotFSM.create('hero');

        }
    },
    // INSTANCE MEMBERS
    {

        init: function() {
            if (!this.viewComponent) {
                this.viewComponent = new CityLayer();
                this.viewComponent.retain();
            }
        },

        getRes: function() {
            return resManager.loadGroup(resManager.groups.robot);
        },

        /** @override */
        listNotificationInterests: function () {
            return [
                Messages.ENTER_CITY,
                Messages.ENTER_COUNTRY,
                this.robotFSM.CHANGED,
                this.heroFSM.CHANGED
            ];
        },

        /** @override */
        handleNotification: function (notification) {
            switch (notification.getName()) {
                case Messages.ENTER_CITY:
                    this.facade.sendNotification(Messages.SHOW_VIEW, {
                        name:this.constructor.NAME,
                        zOrder: 1
                    });
                    break;
                case Messages.ENTER_COUNTRY:
                    this.viewComponent.removeFromParent();
                    break;
                case this.robotFSM.CHANGED:
                    this.viewComponent.playRobotAnimation(notification.getBody().name);
                    break;
                case this.heroFSM.CHANGED:
                    this.viewComponent.playHeroAnimation(notification.getBody().name);
                    break;
            }
        },

        /** @override */
        onRegister: function () {

        },

        /** @override */
        onRemove: function () {

        }
    },
    // STATIC MEMBERS
    {
        NAME: 'CityMediator'
    }
);
