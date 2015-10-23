/**
 * Created by zxh on 15/10/16.
 */
/**
 * Created by zxh on 15/10/9.
 */
"use strict";

var puremvc = require('puremvc').puremvc;
var GameProxy = require('../../model/proxy/GameProxy.js');
var GameMediator = require('../../view/mediator/GameMediator.js');
var CityMediator = require('../../view/mediator/CityMediator.js');
var CountryMediator = require('../../view/mediator/CountryMediator.js');

module.exports = puremvc.define(
    // CLASS INFO
    {
        name: 'controller.command.InitGame',
        parent: puremvc.SimpleCommand
    },

    // INSTANCE MEMBERS
    {
        execute: function() {
            //注册数据代理
            //this.facade.registerProxy(new GameProxy());
            //注册游戏初始必须的中介
            var gameMediator = new GameMediator();
            this.facade.registerMediator(gameMediator);
            this.facade.registerMediator(new CityMediator());
            this.facade.registerMediator(new CountryMediator());

            gameMediator.switchLayer();
        }
    },

    // STATIC MEMBERS
    {
        NAME: Command.RUN_GAME
    }

);
