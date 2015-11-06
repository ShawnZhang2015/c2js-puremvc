/**
 * Created by zxh on 15/10/29.
 */


var puremvc = require('puremvc').puremvc;

module.exports = puremvc.define (
    // CLASS INFO
    {
        name: 'controller.command.WriteLogCommand',
        parent:puremvc.SimpleCommand
    },
    // INSTANCE MEMBERS
    {
        execute: function (notification) {
            cc.log(JSON.stringify(notification.getBody()));
        }
    },
    // STATIC MEMBERS
    {
        NAME: Command.WRITE_LOG
    }
);