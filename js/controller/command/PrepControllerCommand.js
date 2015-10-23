/**
 * Created by zxh on 15/10/9.
 */

var puremvc = require('puremvc').puremvc;
var LogoMediator = require('../../view/mediator/LogoMediator.js');

module.exports = puremvc.define
(
    // CLASS INFO
    {
        name: 'controller.command.PrepControllerCommand',
        parent:puremvc.SimpleCommand
    },
    // INSTANCE MEMBERS
    {
        execute: function (notification) {
            cc.log('PrepControllerCommand execute');
            this.facade.sendNotification(Messages.RUN_SCENE, {name:LogoMediator.NAME});
        }
    },
    // STATIC MEMBERS
    {
        NAME: 'PrepControllerCommand'
    }
);
