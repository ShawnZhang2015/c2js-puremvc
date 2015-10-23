/**
 * Created by zxh on 15/10/9.
 */

var puremvc = require('puremvc').puremvc;
var GameProxy = require('../../model/proxy/GameProxy.js');

module.exports = puremvc.define
(
    // CLASS INFO
    {
        name: 'controller.command.PrepModelCommand',
        parent:puremvc.SimpleCommand
    },
    // INSTANCE MEMBERS
    {
        execute: function (notification) {
            //在此获取数据,注册Proxy
            this.facade.registerProxy(new GameProxy());
        }
    },
    // STATIC MEMBERS
    {
        NAME: 'PrepModelCommand'
    }
);

