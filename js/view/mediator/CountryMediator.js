/**
 * Created by zxh on 15/10/16.
 */

var puremvc = require('puremvc').puremvc;
var CountryLayer = require('../component/CountryLayer.js');

module.exports = puremvc.define
(
    // CLASS INFO
    {
        name: 'view.mediator.CountryMediator',
        parent: puremvc.Mediator,
        constructor: function () {
            puremvc.Mediator.call(this, this.constructor.NAME);
        }
    },
    // INSTANCE MEMBERS
    {

        init: function() {
            if (!this.viewComponent) {
                this.viewComponent = new CountryLayer();
                this.viewComponent.retain();
            }
        },

        getRes: function() {
            return [
                G_RES.res.World_1_png,
                G_RES.res.World_4_png,
                G_RES.res.WorldMap_tmx
            ]
        },

        /** @override */
        listNotificationInterests: function () {
            return [
                Messages.ENTER_COUNTRY,
                Messages.ENTER_CITY
            ];
        },

        /** @override */
        handleNotification: function (notification) {
            switch (notification.getName()) {
                case Messages.ENTER_COUNTRY:
                    this.facade.sendNotification(Messages.SHOW_VIEW, {
                        name:this.constructor.NAME,
                        zOrder: 1
                    });
                    break;
                case Messages.ENTER_CITY:
                    if (this.viewComponent && this.viewComponent.getParent()) {
                        this.viewComponent.removeFromParent();
                    }
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
        NAME: 'CountryMediator'
    }
);