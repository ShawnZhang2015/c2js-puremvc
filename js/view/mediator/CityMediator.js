/**
 * Created by zxh on 15/10/15.
 */
var puremvc = require('puremvc').puremvc;
var CityLayer = require('../component/CityLayer.js');

var robotFSM = require('../../fsm/RobotFSM.js');
module.exports = puremvc.define
(
    // CLASS INFO
    {
        name: 'view.mediator.CityMediator',
        parent: puremvc.Mediator,
        constructor: function () {
            puremvc.Mediator.call(this, this.constructor.NAME);

        }
    },
    // INSTANCE MEMBERS
    {

        init: function() {
            if (!this.viewComponent) {
                this.viewComponent = new CityLayer();
                this.viewComponent.retain();

                this.robotFSM = robotFSM('robot');
                this.heroFSM = robotFSM('hero');
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

                //状态机发生变化
                FSMHelper.changedMessage('hero'),
                FSMHelper.changedMessage('robot'),
                //this.robotFSM.CHANGED,
                //this.heroFSM.CHANGED,

                //状态切换时发送的通知
                Messages.ENTER_RUN,  //进入run
                Messages.EXIT_STOP   //退出stop
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
                case FSMHelper.changedMessage('robot'):
                    cc.log("robot 状态变化:" + notification.getBody().name);
                    this.viewComponent.playRobotAnimation(notification.getBody().name);
                    break;
                case FSMHelper.changedMessage('hero'):
                    cc.log("hero 状态变化:" + notification.getBody().name);
                    this.viewComponent.playHeroAnimation(notification.getBody().name);
                    break;

                case Messages.ENTER_RUN:
                    cc.log('将要进入run');
                    break;
                case Messages.EXIT_STOP:
                    cc.log('将要退出stop');
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
