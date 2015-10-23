/**
 * Created by zxh on 15/10/15.
 */
var puremvc = require('puremvc').puremvc;
var CityLayer = require('../component/CityLayer.js');

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
            }
        },

        /** @override */
        listNotificationInterests: function () {
            return [
                Messages.ENTER_CITY,
                Messages.ENTER_COUNTRY
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