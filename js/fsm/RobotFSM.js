/**
 * Created by zxh on 15/10/28.
 */

var robot = {
    ACTION_STOP: 1,
    ACTION_RUN: 2,
    ACTION_FLOAT: 3
};

var fsm = {
    //action定义

    //初始状态
    "@initial":"stop",

    //状态数组
    "state": [
        {
            "@name":  "stop",
            "@exiting": Messages.EXIT_STOP,
            "transition": [
                {
                    "@action": robot.ACTION_RUN,
                    "@target": "run"
                },
                {
                    "@action": robot.ACTION_FLOAT,
                    "@target": "float"
                }
            ]
        },
        {
            "@name":  "run",
            "@entering": Messages.ENTER_RUN,
            "transition": [
                {
                    "@action": robot.ACTION_STOP,
                    "@target": "stop"
                },
                {
                    "@action": robot.ACTION_FLOAT,
                    "@target": "float"
                }
            ]
        },
        {
            "@name":  "float",
            "transition": [
                {
                    "@action": robot.ACTION_STOP,
                    "@target": "stop"
                },
                {
                    "@action": robot.ACTION_RUN,
                    "@target": "run"
                }
            ]
        }
    ]
};

module.exports = function(name) {
    return FSMHelper.create(fsm, name);
};
