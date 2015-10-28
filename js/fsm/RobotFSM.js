/**
 * Created by zxh on 15/10/28.
 */
var puremvc = require('puremvc').puremvc;


var RobotFSM = function() {
};

RobotFSM.ACTION_STOP = 1;
RobotFSM.ACTION_RUN = 2;
RobotFSM.ACTION_FLOAT = 3;

var fsm = {
    //开始
    "@initial":"stop",
    "state": [
        {
            "@name":  "stop",
            "transition": [
                {
                    "@action": RobotFSM.ACTION_RUN,
                    "@target": "oneLegStand"
                },
                {
                    "@action": RobotFSM.ACTION_FLOAT,
                    "@target": "float"
                }
            ]
        },
        {
            "@name":  "oneLegStand",
            "transition": [
                {
                    "@action": RobotFSM.ACTION_STOP,
                    "@target": "pushUp"
                },
                {
                    "@action": RobotFSM.ACTION_FLOAT,
                    "@target": "float"
                }
            ]
        },
        {
            "@name":  "float",
            "transition": [
                {
                    "@action": RobotFSM.ACTION_STOP,
                    "@target": "stop"
                },
                {
                    "@action": RobotFSM.ACTION_RUN,
                    "@target": "run"
                }
            ]
        }
    ]
};


RobotFSM.prototype.create = function(name) {
    var injector = new puremvc.statemachine.FSMInjector(fsm);
    injector.initializeNotifier(facade.multitonKey);
    return injector.inject(name);
};

module.exports = RobotFSM;
