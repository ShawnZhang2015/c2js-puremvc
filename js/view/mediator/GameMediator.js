/**
 * Created by zxh on 15/10/16.
 */

/**
 * Created by zxh on 15/10/15.
 */
var puremvc = require('puremvc').puremvc;
var GameLayer = require('../component/GameLayer.js');

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

        cityLayer: null,
        childMediator: null,
        init: function() {
            if (!this.viewComponent) {
                this.viewComponent = new GameLayer();
                this.viewComponent.setData(this._gameProxy);
                this.viewComponent.retain();

                this.viewComponent.switchLayer = this.switchLayer.bind(this);
            }
        },

        switchLayer: function() {
            if (this.childMediator === 1) {
                this.facade.sendNotification(Messages.ENTER_COUNTRY);
            } else {
                this.facade.sendNotification(Messages.ENTER_CITY);
            }
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