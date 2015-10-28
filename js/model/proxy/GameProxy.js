/**
 * Created by zxh on 15/10/16.
 */

"use strict";

var puremvc = require('puremvc').puremvc;
var _ = require('underscore');
module.exports = puremvc.define
(
    // CLASS INFO
    {
        name: 'model.proxy.GameProxy',
        parent: puremvc.Proxy,

        constructor: function () {
            puremvc.Proxy.call(this);

            this.loadData();
        }
    },

    // INSTANCE MEMBERS
    {
        gold: 0,
        food: 0,
        wood: 0,
        intervalId: null,

        loadData: function() {
            var self = this;
            var time = 0;
            //模拟异步加载数据
            setTimeout(function() {
                time += 10;
                self.gold = 1000;
                self.food = 1000;
                self.wood = 1000;
                self.sendNotification(Messages.LOAD_COMPLETE);

                self.asyncData();
            }, 1000);
        },

        asyncData: function() {
            var self = this;
            this.intervalId = setInterval(function() {
                self.gold += _.random(-100, 100);
                self.food += _.random(-100, 100);
                self.wood += _.random(-100, 100);

                self.sendNotification(Messages.GAME_DATA_CHANGE);
            }, 2000);
        }
    },
    // STATIC MEMBERS
    {
        NAME: 'GameProxy'
    }
);

