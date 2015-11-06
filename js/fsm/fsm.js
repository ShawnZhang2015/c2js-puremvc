/**
 * Created by zxh on 15/10/29.
 */
var puremvc = require('puremvc').puremvc;

var FSMHelper = {

    /**
     * 创建状态机
     * @param fsm   状态转换json对象
     * @param name  状态机名
     * @returns {*} 状态机对象
     */
    create: function(fsm, name) {
        var injector = new puremvc.statemachine.FSMInjector(fsm);
        injector.initializeNotifier(facade.multitonKey);
        var stateMachine = injector.inject(name);
        return stateMachine;
    },

    /**
     *
     * @param statemachine|name 状态机对象 或 状态机名
     * @param action
     * @param param
     */
    changeState: function(statemachine, action, param) {
        var fsm = this.getFSM(statemachine);
        this.sendNotification(fsm.ACTION, param, action);
    },


    getFSM: function(statemachine) {
        if (typeof statemachine === 'object') {
            return statemachine;
        }
        return facade.retrieveMediator(statemachine);
    },

    changedMessage: function(name) {
        return name + '/notes/changed';
    },

    actionMessage: function(name) {
        return name + '/notes/action';
    }





};




global.FSMHelper = FSMHelper;