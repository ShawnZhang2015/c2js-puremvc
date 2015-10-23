/**
 * Created by zxh on 15/10/9.
 */

var puremvc = require('puremvc').puremvc;
var SceneMediator = require('../../view/mediator/SceneMediator.js');
var LoginMediator = require('../../view/mediator/LogoMediator.js');
var CityMediator = require('../../view/mediator/CityMediator.js');


module.exports = puremvc.define (
    // CLASS INFO
    {
        name: 'controller.command.PrepViewCommand',
        parent:puremvc.SimpleCommand
    },
    // INSTANCE MEMBERS
    {
        execute: function (notification) {
            cc.log('PrepViewCommand execute');
            this.facade.registerMediator(new SceneMediator());
            this.facade.registerMediator(new LoginMediator());
        }
    },
    // STATIC MEMBERS
    {
        NAME: 'PrepViewCommand'
    }
);