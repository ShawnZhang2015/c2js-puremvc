/**
 * Created by zxh on 15/10/16.
 */

/**
 * Created by zxh on 15/10/15.
 */
var puremvc = require('puremvc').puremvc;
var GameLayer = require('../component/GameLayer.js');
//var InjectHeroFSMCommand = require('../../controller/command/InjectHeroFSMCommand.js');
var _ = require('underscore');

module.exports = puremvc.define
(
    // CLASS INFO
    {
        name: 'view.mediator.GameMediator',
        parent: puremvc.Mediator,
        constructor: function () {
            puremvc.Mediator.call(this, this.constructor.NAME);
        }
    },
    // INSTANCE MEMBERS
    {
        onRegister: function() {
            this._gameProxy = this.facade.retrieveProxy('GameProxy');
        },

        getRes: function() {
            return resManager.loadGroup(resManager.groups.MainMenu);
        },

        cityLayer: null,
        childMediator: null,

        init: function() {
            if (!this.viewComponent) {
                this.viewComponent = new GameLayer();
                this.viewComponent.setData(this._gameProxy);
                this.viewComponent.retain();

                this.viewComponent.switchLayer = this.switchLayer.bind(this);
                this.viewComponent.playAction = this.playAction.bind(this);
            }
        },

        switchLayer: function() {
            if (this.childMediator === 1) {
                this.facade.sendNotification(Messages.ENTER_COUNTRY);
            } else {
                this.facade.sendNotification(Messages.ENTER_CITY);
            }
        },

        playAction: function(action) {

            //var mediator = this.facade.retrieveMediator('hero');
            var action = FSMHelper.actionMessage('hero');
            this.sendNotification(action, {name:'hero'}, _.random(1, 3));

            action = FSMHelper.actionMessage('robot');
            this.sendNotification(action, {name:'robot'}, _.random(1, 3));
        },

        /** @override */
        listNotificationInterests: function () {
            return [
                Messages.ENTER_CITY,
                Messages.ENTER_COUNTRY,
                Messages.GAME_DATA_CHANGE
            ];
        },

        /** @override */
        handleNotification: function (notification) {


            var self = this;
            var gameViewHandle = function() {
                if (self.viewComponent && self.viewComponent.getParent()) {
                    return;
                }

                self.facade.sendNotification(Messages.SHOW_VIEW, {
                    name:self.constructor.NAME,
                    zOrder: 10
                });
            };

            switch (notification.getName()) {
                case Messages.ENTER_CITY:
                    this.childMediator = 1;
                    gameViewHandle();
                    break;

                case Messages.ENTER_COUNTRY:
                    this.childMediator = 2;
                    gameViewHandle();
                    break;
                case Messages.GAME_DATA_CHANGE:
                    this.viewComponent.setData(this._gameProxy);
            }
      }
    },
    // STATIC MEMBERS
    {
        NAME: 'GameMediator'
    }
);
