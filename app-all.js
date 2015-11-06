(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/**
 * Created by zxh on 15/10/9.
 */
"use strict"

var puremvc = require('puremvc').puremvc;
var StartupCommand = require('./controller/command/StartupCommand.js');

var RunGameCommand = require('./controller/command/RunGameCommand.js');
var WriteLogCommand = require('./controller/command/WriteLogCommand.js');

var AppFacade = puremvc.define(
    // CLASS INFO
    {
        name: 'AppFacade',
        parent: puremvc.Facade,
        constructor: function (multitonKey) {
            puremvc.Facade.call(this, multitonKey);
        }
    },

    // INSTANCE MEMBERS
    {
        initializeController: function () {
            puremvc.Facade.prototype.initializeController.call(this);
            this.registerCommand(AppFacade.STARTUP, StartupCommand);
            this.registerCommand(Command.RUN_GAME, RunGameCommand);
            this.registerCommand(Command.WRITE_LOG, WriteLogCommand);
        },

        initializeModel: function () {
            puremvc.Facade.prototype.initializeModel.call(this);
        },

        initializeView: function () {
            puremvc.Facade.prototype.initializeView.call(this);
        },

        startup: function () {
            this.sendNotification(AppFacade.STARTUP);
        }
    },

    // STATIC MEMBERS
    {
        getInstance: function(multitonKey) {
            var instanceMap = puremvc.Facade.instanceMap;
            var instance = instanceMap[multitonKey];
            if (instance) {
                return instance;
            }
            return global.facade = instanceMap[multitonKey] = new AppFacade(multitonKey);
        },
        NAME: 'AppFacade',
        STARTUP: 'StartUp'
    }
);

module.exports = AppFacade;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./controller/command/RunGameCommand.js":7,"./controller/command/StartupCommand.js":8,"./controller/command/WriteLogCommand.js":9,"puremvc":28}],2:[function(require,module,exports){
(function (global){
res = {
"hashFile":{
    "MM20_PNG":"ui/MainMenu/MM20.png",
    "MM12_PNG":"ui/MainMenu/MM12.png",
    "BAS31_PNG":"ui/Login/BaS31.png",
    "ROBOT_XML":"armature/robot.xml",
    "MM04_PNG":"ui/MainMenu/MM04.png",
    "MM03_PNG":"ui/MainMenu/MM03.png",
    "LI07_JPG":"ui/Login/LI07.jpg",
    "WORLD_4_PLIST":"ui/World/World_4.plist",
    "LAYER_JSON":"ui/Layer.json",
    "WORLD_4_PNG":"ui/World/World_4.png",
    "MM10_PNG":"ui/MainMenu/MM10.png",
    "ROBOT_PLIST":"armature/robot.plist",
    "ISO_PNG":"ui/iso.png",
    "MM02_PNG":"ui/MainMenu/MM02.png",
    "MM19_PNG":"ui/MainMenu/MM19.png",
    "MM01_PNG":"ui/MainMenu/MM01.png",
    "WORLD_1_PLIST":"ui/World/World_1.plist",
    "MM18_PNG":"ui/MainMenu/MM18.png",
    "WORLDMAP_TMX":"ui/WorldMap.tmx",
    "MAINMENU_JSON":"ui/MainMenu.json",
    "TILE_ISO_OFFSET_PNG":"ui/tile_iso_offset.png",
    "MM17_PNG":"ui/MainMenu/MM17.png",
    "LOGIN_JSON":"ui/Login.json",
    "MM09_PNG":"ui/MainMenu/MM09.png",
    "WORLD_1_PNG":"ui/World/World_1.png",
    "HELLOWORLD_PNG":"HelloWorld.png",
    "MM24_PNG":"ui/MainMenu/MM24.png",
    "CONTRYLAYER_JSON":"ui/ContryLayer.json",
    "MM16_PNG":"ui/MainMenu/MM16.png",
    "MM08_PNG":"ui/MainMenu/MM08.png",
    "TILE_ISO_OFFSET_TMX":"ui/tile_iso_offset.tmx",
    "MM23_PNG":"ui/MainMenu/MM23.png",
    "ROBOT_PNG":"armature/robot.png",
    "MM15_PNG":"ui/MainMenu/MM15.png",
    "MM07_PNG":"ui/MainMenu/MM07.png",
    "MM22_PNG":"ui/MainMenu/MM22.png",
    "MM14_PNG":"ui/MainMenu/MM14.png",
    "MM06_PNG":"ui/MainMenu/MM06.png",
    "MM21_PNG":"ui/MainMenu/MM21.png",
    "BAS32_PNG":"ui/Login/BaS32.png",
    "MM13_PNG":"ui/MainMenu/MM13.png",
    "MM05_PNG":"ui/MainMenu/MM05.png",
    "ISO-TEST1_TMX":"ui/iso-test1.tmx"
 },

"groups":{
    "logo":[
        "BAS32_PNG",
        "LI07_JPG",
        "LOGIN_JSON",
        "BAS31_PNG"
     ],
    "world":[
        "WORLD_4_PLIST",
        "WORLD_4_PNG",
        "WORLD_1_PLIST",
        "WORLD_1_PNG"
     ],
    "robot":[
        "ROBOT_PNG",
        "ROBOT_PLIST",
        "ROBOT_XML"
     ],
    "MainMenu":[
        "MM22_PNG",
        "MM23_PNG",
        "MM24_PNG",
        "MM10_PNG",
        "MM12_PNG",
        "MM13_PNG",
        "MM14_PNG",
        "MM15_PNG",
        "MM16_PNG",
        "MM17_PNG",
        "MM01_PNG",
        "MM02_PNG",
        "MM18_PNG",
        "MM03_PNG",
        "MM19_PNG",
        "MM04_PNG",
        "MM05_PNG",
        "MM06_PNG",
        "MM07_PNG",
        "MAINMENU_JSON",
        "MM08_PNG",
        "MM09_PNG",
        "MM20_PNG",
        "MM21_PNG"
     ]
   }

};

var ResManager = function() {
    this.groups = res.groups;
};

ResManager.prototype.loadGroup = function(group) {
    if (group) {
        var ret = group.map(function(key) {
            return 'res/' +res.hashFile[key];
        });
        return ret;
    }
};

global.resManager = new ResManager();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
/**
 * Created by zxh on 15/10/9.
 */

require('./resource.js');
require('./define/Message.js');
require('./define/Command.js');
require('./Resources.js');
require('./fsm/fsm.js');

(function() {
    cc.game.onStart = function(){

        cc.log("cc.game.onStart--1");
        cc.view.enableRetina(false);
        cc.view.adjustViewPort(true);
        cc.view.setDesignResolutionSize(640, 960, cc.ResolutionPolicy.FIXED_WIDTH);
        cc.view.resizeWithBrowserSize(true);

        var AppFacade = require('./AppFacade.js');
        var key = 'SLG_WOW';
        AppFacade.getInstance(key).startup();
    };
    cc.game.run();
})();

},{"./AppFacade.js":1,"./Resources.js":2,"./define/Command.js":10,"./define/Message.js":11,"./fsm/fsm.js":13,"./resource.js":17}],4:[function(require,module,exports){
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

},{"../../view/mediator/LogoMediator.js":25,"puremvc":28}],5:[function(require,module,exports){
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


},{"../../model/proxy/GameProxy.js":16,"puremvc":28}],6:[function(require,module,exports){
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
},{"../../view/mediator/CityMediator.js":22,"../../view/mediator/LogoMediator.js":25,"../../view/mediator/SceneMediator.js":26,"puremvc":28}],7:[function(require,module,exports){
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
        } ,
    },

    // STATIC MEMBERS
    {
        NAME: Command.RUN_GAME
    }

);

},{"../../model/proxy/GameProxy.js":16,"../../view/mediator/CityMediator.js":22,"../../view/mediator/CountryMediator.js":23,"../../view/mediator/GameMediator.js":24,"puremvc":28}],8:[function(require,module,exports){
/**
 * Created by zxh on 15/10/9.
 */
"use strict";

var puremvc = require('puremvc').puremvc;
var PrepModelCommand = require('./PrepModelCommand.js');
var PrepViewCommand = require('./PrepViewCommand.js');
var PrepControllerCommand = require('./PrepControllerCommand.js');
//var InjectHeroFSMCommand = require('./InjectHeroFSMCommand.js');

module.exports = puremvc.define(
    // CLASS INFO
    {
        name: 'controller.command.StartupCommand',
        parent: puremvc.MacroCommand
    },

    // INSTANCE MEMBERS
    {
        initializeMacroCommand: function() {

            this.addSubCommand(PrepModelCommand);
            this.addSubCommand(PrepViewCommand);
            this.addSubCommand(PrepControllerCommand);

            //facade.registerCommand(InjectHeroFSMCommand.NAME, InjectHeroFSMCommand);
            //facade.sendNotification(Command.CREATE_HERO_FSM, {name:'robot'});
            //facade.sendNotification(Command.CREATE_HERO_FSM, {name:'hero'});

        }
    },

    // STATIC MEMBERS
    {
        NAME: 'StartupCommand'
    }

);


},{"./PrepControllerCommand.js":4,"./PrepModelCommand.js":5,"./PrepViewCommand.js":6,"puremvc":28}],9:[function(require,module,exports){
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
},{"puremvc":28}],10:[function(require,module,exports){
(function (global){
/**
 * Created by zxh on 15/10/21.
 */

var Command = {
    RUN_GAME: 1000,
    CREATE_HERO_FSM: 1001,
    WRITE_LOG: 1002

};

global.Command = Command;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],11:[function(require,module,exports){
(function (global){
/**
 * Created by zxh on 15/10/13.
 */


var Messages  = {
    RUN_SCENE: 1,        //
    SHOW_VIEW: 2,        //{name:}
    ENTER_CITY: 3,       //进入主城
    GAME_DATA_CHANGE:5,
    ENTER_COUNTRY: 6,     //进入国家
    LOAD_COMPLETE: 7,
    EXIT_STOP: 8,
    ENTER_RUN: 9,
};


global.Messages = Messages;





}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],12:[function(require,module,exports){
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


},{}],13:[function(require,module,exports){
(function (global){
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
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"puremvc":28}],14:[function(require,module,exports){
/**
 * Created by zxh on 15/10/10.
 */

var sz = sz || {};

sz.UILoader = cc.Class.extend({
    _eventPrefix: '_on',
    _memberPrefix: '_',
    _widgetEvents: [],
    /**
     * 加载UI文件
     * @param target将  jsonFile加载出的节点绑定到的目标
     * @param jsonFile  cocostudio UI编辑器生成的json文件
     */
    widgetFromJsonFile: function(target, jsonFile, options) {
        cc.assert(target && jsonFile);
        if (!options) {
            options = {};
        }

        this._eventPrefix  =  options.eventPrefix || sz.UILoader.DEFAULT_EVENT_PREFIX;
        this._memberPrefix = options.memberPrefix || sz.UILoader.DEFAULT_MEMBER_PREFIX;
        //绑定自身
        if (target instanceof cc.Node) {
            this._bindMenbers(target, target);
        }

        //绑定jsonFile
        if (!jsonFile) {
            return;
        }

        var json = cc.loader.getRes(jsonFile);
        var version = json.version || json.Version;
        var rootNode;
        if (version[0] == 1) {
            rootNode = ccs.uiReader.widgetFromJsonFile(jsonFile);
        } else if (version[0] == 2){
            rootNode = ccs.csLoader.createNode(jsonFile);
        }

        if (!rootNode) {
            cc.log("Load json file failed");
        }

        if (rootNode.setTouchEnabled) {
            rootNode.setTouchEnabled(false);
        }

        target.rootNode = rootNode;
        rootNode.setName("rootNode");
        if (target instanceof cc.Node) {
            target.addChild(rootNode);
        }

        this._bindMenbers(rootNode, target);
        return rootNode;
    },

    bindNode: function(node, target) {
        if (!target) {
            return false;
        }
        //this._eventPrefix  =  options.eventPrefix || sz.UILoader.DEFAULT_EVENT_PREFIX;
        //this._memberPrefix = options.memberPrefix || sz.UILoader.DEFAULT_MEMBER_PREFIX;
        var nodeName = node.getName();

        var isMatch = nodeName.substr(0, this._memberPrefix.length) === this._memberPrefix;
        //控件名存在，绑定到target上
        if (isMatch) {
            if (!target[nodeName]) {
                target[nodeName] = node;
            }
            this._registerWidgetEvent(target, node);
        }else if (node.setTouchEnabled){
            node.setTouchEnabled(false);
        }

        if (target.onLoaderBinded) {
            target.onLoaderBinded(node, isMatch);
        }
        return isMatch;
    },
    /**
     * 递归对rootWidget下的子节点进行成员绑定
     * @param rootWidget
     * @param target
     * @private
     */
    _bindMenbers: function(rootWidget, target) {
        var widgetName,
            children = rootWidget.getChildren();

        var self = this;
        children.forEach(function(widget) {
            widgetName = widget.getName();

            //不绑定rootNode节点，因为已经绑定过了
            if (widgetName === "rootNode") {
                return;
            }

            var isMatch = widgetName.substr(0, self._memberPrefix.length) === self._memberPrefix;
            //控件名存在，绑定到target上
            //var prefix = widgetName.substr(0, self._memberPrefix.length);
            if (isMatch) {
                target[widgetName] = widget;
                self._registerWidgetEvent(target, widget);
            }else if (widget.setTouchEnabled){
                widget.setTouchEnabled(false);
            }

            if (target.onLoaderBinded && target !== rootWidget) {
                target.onLoaderBinded(widget, isMatch);
            }

            //绑定子控件,可以实现: a._b._c._d 访问子控件
            if (!rootWidget[widgetName]) {
                rootWidget[widgetName] = widget;
            }

            //如果还有子节点，递归进去
            if (widget.getChildrenCount()) {
                self._bindMenbers(widget, target);
            }

        });
    },

    /**
     * 获取控件事件
     * @param widget
     * @returns {*}
     */
    _getWidgetEvent: function(widget) {
        var bindWidgetEvent = null;
        var events = sz.UILoader.widgetEvents;
        for (var i = 0; i < events.length; i++) {
            bindWidgetEvent = events[i];
            if (bindWidgetEvent && widget instanceof bindWidgetEvent.widgetType) {
                break;
            }
        }
        return bindWidgetEvent;
    },

    /**
     * 注册控件事件
     * @param target
     * @param widget
     * @private
     */
    _registerWidgetEvent: function(target, widget) {

        //截取前缀,首字母大定
        var eventName = this.getWidgetEventName(widget, "Event");
        var isBindEvent = false;
        if (target[eventName]) {
            isBindEvent = true;
        } else {
            //取事控件件名
            var widgetEvent = this._getWidgetEvent(widget);
            if (!widgetEvent) {
                sz.uiloader.registerTouchEvent(widget, target);
                return;
            }
            //检查事件函数,生成事件名数组
            var eventNameArray = [];
            for (var i = 0; i < widgetEvent.events.length; i++) {
                eventName = this.getWidgetEventName(widget, widgetEvent.events[i]);//newName + widgetEvent.events[i];
                eventNameArray.push(eventName);
                if (typeof target[eventName] === "function") {
                    isBindEvent = true;
                }
            }
        }

        //事件响应函数
        var self = this;
        var eventFunc = function(sender, type) {
            var callBack;
            var funcName;
            if (eventNameArray) {
                funcName = eventNameArray[type];
                callBack = target[funcName];
            } else {
                callBack = target[eventName];
            }

            if (callBack && self._widgetEvents) {
                if (self.execWidgetEvent(sender, type) === false) {
                    return;
                }
            }

            //开始
            if (type === ccui.Widget.TOUCH_BEGAN) {
                var time = sz.UILoader.DEFAULT_TOUCH_LONG_TIME;
                if (callBack) {
                    time = callBack.call(target, sender, type);
                }

                //检测长按事件
                funcName = sz.uiloader.getWidgetEventName(sender, sz.UILoader.TOUCH_LONG_EVENT);
                var touchLong = target[funcName];

                if (touchLong) {
                    time = time || sz.UILoader.DEFAULT_TOUCH_LONG_TIME;
                    if (time >= 0 && time < 5) {
                        target.scheduleOnce(touchLong, time);
                        target.__touchLong = true;
                    }

                }
                return;
            }

            //TouchMoved时解除长按事件
            if (type === ccui.Widget.TOUCH_MOVED) {
                funcName = sz.uiloader.getWidgetEventName(sender, sz.UILoader.TOUCH_LONG_EVENT);
                var scheduleFunc = target[funcName];
                if (scheduleFunc && target.__touchLong) {
                    var pt1 = sender.getTouchBeganPosition();
                    var pt2 = sender.getTouchMovePosition();
                    if (Math.abs(pt1.x - pt2.x) > 15 || Math.abs(pt1.y - pt2.y) > 15) {
                        target.unschedule(scheduleFunc);
                        cc.log("TouchMoved: 解除长按事件");
                        target.__touchLong = false;
                    }
                }

            }

            //长按解除
            if (type === ccui.Widget.TOUCH_ENDED || type === ccui.Widget.TOUCH_CANCELED) {
                funcName = sz.uiloader.getWidgetEventName(sender, sz.UILoader.TOUCH_LONG_EVENT);
                var scheduleFunc = target[funcName];
                if (scheduleFunc && target.__touchLong) {
                    //target._touchLong = false;
                    cc.log("TouchEned: 解除长按事件");
                    target.unschedule(scheduleFunc);
                }
            }

            //事件回调
            if (callBack) {
                callBack.call(target, sender, type);
            }
        };

        //注册事件监听
        if (isBindEvent) {
            widget.setTouchEnabled(true);
            if (widget.addEventListener) {
                widget.addEventListener(eventFunc, target);
            } else {
                widget.addTouchEventListener(eventFunc, target);
            }
        }
    },

    execWidgetEvent: function(sender, type) {
        var ret;
        this._widgetEvents.forEach(function(item) {
            if(item.widgetEvent.call(item.target, sender, type) === false){
                ret = false;
            }
        },this);

        return ret;
    },

    /**
     * 控件事件捕获, 可以由子类重写此函数
     * @param sender
     * @param type
     * @private
     */
    //_onWidgetEvent: function(sender, type) {
    //
    //}

    //_onNodeEvent: function(sender, type) {
    //
    //}

    /**
     * @param widget
     * @param event
     * @returns {string}
     */
    getWidgetEventName: function(widget, event) {
        cc.assert(widget);
        var name = widget.getName();
        if (name) {
            name = name[this._memberPrefix.length].toUpperCase() + name.slice(this._memberPrefix.length + 1);
        }
        if (event) {
            return this._eventPrefix + name + event;
        } else {
            return this._eventPrefix + name;
        }
    },

    registerWidgetEvent: function(target, widgetEvent) {
        if (typeof widgetEvent === "function") {
            this._widgetEvents.push({target: target ,widgetEvent: widgetEvent});
        }
    },

    removeWidgetEvent: function(target) {
        for (var i = 0; i < this._widgetEvents.length; i++) {
            if (this._widgetEvents[i].target === target) {
                this._widgetEvents.splice(i,1);
                break;
            }
        }
    }
});

//事件前缀
sz.UILoader.DEFAULT_EVENT_PREFIX = "_on";
//成员前缀
sz.UILoader.DEFAULT_MEMBER_PREFIX = "_";
//默认长按触发时间
sz.UILoader.DEFAULT_TOUCH_LONG_TIME = 0.5;
//长按事件名
sz.UILoader.TOUCH_LONG_EVENT = "TouchLong";
//触摸事件
sz.UILoader.touchEvents = ["TouchBegan", "TouchMoved", "TouchEnded", "TouchCanceled", sz.UILoader.TOUCH_LONG_EVENT];
//控件事件列表
sz.UILoader.widgetEvents = [
    //Button
    {widgetType: ccui.Button, events: sz.UILoader.touchEvents},
    //ImageView
    {widgetType: ccui.ImageView, events: sz.UILoader.touchEvents},
    //TextFiled
    {widgetType: ccui.TextField, events: ["AttachWithIME", "DetachWithIME", "InsertText", "DeleteBackward"]},
    //CheckBox
    {widgetType: ccui.CheckBox, events: ["Selected", "Unselected"]},
    //ListView
    {widgetType: ccui.ListView, events:["SelectedItem"]},
    //Panel
    {widgetType: ccui.Layout, events: sz.UILoader.touchEvents},
    //BMFont
    {widgetType: ccui.TextBMFont, events: sz.UILoader.touchEvents},
    //Text
    {widgetType: ccui.Text, events: sz.UILoader.touchEvents},
    //last must null
    null
];

sz.uiloader = new sz.UILoader();

/**
 * cc.node触摸事件注册函数
 * @param node
 * @param target
 * @param touchEvent
 * @param swallowTouches
 * @returns {*}
 */
sz.uiloader.registerTouchEvent = function(node, target, touchEvent, swallowTouches) {

    if (!node instanceof cc.Node ) {
        cc.log('param "node" is not cc.Node type');
        return null;
    }

    if (node instanceof ccui.Widget) {
        cc.log('param "node" Can not be ccui.Widget type');
        return null;
    }

    target = target || node;

    if (swallowTouches === undefined) {
        swallowTouches = true;
    }

    var touchListener = cc.EventListener.create({
        event: touchEvent || cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: swallowTouches ? true : false
    });

    var nodeEvents = ['onTouchBegan', 'onTouchMoved', 'onTouchEnded'];
    nodeEvents.forEach(function(eventName, index) {

        touchListener[eventName] = function() {
            var touchNode = arguments[1].getCurrentTarget();
            var event = sz.uiloader.getWidgetEventName(touchNode, sz.UILoader.touchEvents[index]);
            if (!target[event]) {
                return false;
            }

            if (index === 0) {
                var point = arguments[0].getLocation();
                point = touchNode.convertToNodeSpace(point);
                var rect = cc.rect(0,0, touchNode.width, touchNode.height);
                if (!cc.rectContainsPoint(rect, point)) {
                    return false;
                }
            }

            var args = Array.prototype.slice.call(arguments);
            args.unshift(touchNode);
            var ret = target[event].apply(target, args);

            //todo: 响应uiload hook事件
            //if (sz.uiloader._onNodeEvent) {
            //    sz.uiloader._onNodeEvent(target, args[1], args[2]);
            //}

            if (index === 0) {
                return ret ? true : false;
            }
        };
    });

    cc.eventManager.addListener(touchListener, node);
    return touchListener;
};

module.exports = sz;

},{}],15:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
    if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
    for (var key in Emitter.prototype) {
        obj[key] = Emitter.prototype[key];
    }
    return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
    Emitter.prototype.addEventListener = function(event, fn){
        this._callbacks = this._callbacks || {};
        (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
            .push(fn);
        return this;
    };

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
    function on() {
        this.off(event, on);
        fn.apply(this, arguments);
    }

    on.fn = fn;
    this.on(event, on);
    return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
    Emitter.prototype.removeListener =
        Emitter.prototype.removeAllListeners =
            Emitter.prototype.removeEventListener = function(event, fn){
                this._callbacks = this._callbacks || {};

                // all
                if (0 == arguments.length) {
                    this._callbacks = {};
                    return this;
                }

                // specific event
                var callbacks = this._callbacks['$' + event];
                if (!callbacks) return this;

                // remove all handlers
                if (1 == arguments.length) {
                    delete this._callbacks['$' + event];
                    return this;
                }

                // remove specific handler
                var cb;
                for (var i = 0; i < callbacks.length; i++) {
                    cb = callbacks[i];
                    if (cb === fn || cb.fn === fn) {
                        callbacks.splice(i, 1);
                        break;
                    }
                }
                return this;
            };

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
    this._callbacks = this._callbacks || {};
    var args = [].slice.call(arguments, 1)
        , callbacks = this._callbacks['$' + event];

    if (callbacks) {
        callbacks = callbacks.slice(0);
        for (var i = 0, len = callbacks.length; i < len; ++i) {
            callbacks[i].apply(this, args);
        }
    }

    return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
    this._callbacks = this._callbacks || {};
    return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
    return !! this.listeners(event).length;
};
},{}],16:[function(require,module,exports){
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


},{"puremvc":28,"underscore":31}],17:[function(require,module,exports){
(function (global){
var res = {
    HelloWorld_png : "res/HelloWorld.png",
    LI07_jpg: "res/ui/Login/LI07.jpg",
    Login_json: "res/ui/Login.json",
    Layer_json: "res/ui/Layer.json",
    BaS31_png: "res/ui/Login/BaS31.png",
    BaS32_png: "res/ui/Login/BaS32.png",
    MainMenu_json: "res/ui/MainMenu.json",
    MM01_png: "res/ui/MainMenu/MM01.png",
    MM02_png: "res/ui/MainMenu/MM02.png",
    MM03_png: "res/ui/MainMenu/MM03.png",
    MM04_png: "res/ui/MainMenu/MM04.png",
    MM05_png: "res/ui/MainMenu/MM05.png",
    MM06_png: "res/ui/MainMenu/MM06.png",
    MM07_png: "res/ui/MainMenu/MM07.png",
    MM08_png: "res/ui/MainMenu/MM08.png",
    MM09_png: "res/ui/MainMenu/MM09.png",
    MM10_png: "res/ui/MainMenu/MM10.png",
    MM12_png: "res/ui/MainMenu/MM12.png",
    MM13_png: "res/ui/MainMenu/MM13.png",
    MM14_png: "res/ui/MainMenu/MM14.png",
    MM15_png: "res/ui/MainMenu/MM15.png",
    MM16_png: "res/ui/MainMenu/MM16.png",
    MM17_png: "res/ui/MainMenu/MM17.png",
    MM18_png: "res/ui/MainMenu/MM18.png",
    MM19_png: "res/ui/MainMenu/MM19.png",
    MM20_png: "res/ui/MainMenu/MM20.png",
    MM21_png: "res/ui/MainMenu/MM21.png",
    MM22_png: "res/ui/MainMenu/MM22.png",
    MM23_png: "res/ui/MainMenu/MM23.png",
    MM24_png: "res/ui/MainMenu/MM24.png",
    CountryLayer_json: "res/ui/ContryLayer.json",
    World_1_png: "res/ui/World/World_1.png",
    World_1_plist: "res/ui/World/World_1.plist",
    World_4_plist: "res/ui/World/World_4.plist",
    World_4_png: "res/ui/World/World_4.png",
    WorldMap_tmx: "res/ui/WorldMap.tmx",
    tile_iso_offset_png: "res/ui/tile_iso_offset.png",
    tile_iso_offset_tmx: "res/ui/tile_iso_offset.tmx",
    iso_png: "res/ui/iso.png",
    iso_test1_tmx: "res/ui/iso-test1.tmx",
    robot_plist: "res/armature/robot.plist",
    robot_png: "res/armature/robot.png",
    robot_xml: "res/armature/robot.xml"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

global.G_RES = {
    res: res,
    resources: g_resources
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],18:[function(require,module,exports){
/**
 * Created by zxh on 15/10/9.
 */

var BaseLayer = require('../widget/BaseLayer.js');
module.exports = BaseLayer.extend({
    ctor: function() {
        this.hasFrame = true;
        this._super();
        this.colorFrame.setColor(cc.color.WHITE);

        ccs.armatureDataManager.addArmatureFileInfo(G_RES.res.robot_png, G_RES.res.robot_plist, G_RES.res.robot_xml);

        this.robot = new ccs.Armature("robot");
        this.robot.setPosition(this.width / 4, this.height / 2);
        this.robot.getAnimation().playWithIndex(0);
        this.addChild(this.robot);

        this.hero = new ccs.Armature("robot");
        this.hero.setPosition(this.width - this.width / 4, this.height / 2);
        this.hero.getAnimation().playWithIndex(0);
        this.addChild(this.hero);

    },

    playRobotAnimation: function(name) {
        this.robot.getAnimation().play(name);
    },

    playHeroAnimation: function(name) {
        this.hero.getAnimation().play(name);
    }
});

},{"../widget/BaseLayer.js":27}],19:[function(require,module,exports){
/**
 * Created by zxh on 15/10/9.
 */

var BaseLayer = require('../widget/BaseLayer.js');
var _ = require('underscore');
module.exports = BaseLayer.extend({
    map: null,
    _isMoved: null,
    ctor: function() {
        this._super();
        var map = new cc.TMXTiledMap(G_RES.res.WorldMap_tmx);
        this.addChild(map, 0);

        map.scale = 0.2;
        //map.anchorX = 0.5;
        //map.anchorY = 0.5;
        map.x = -map.mapWidth * map.tileWidth / 2 + cc.winSize.width / 2;//-map.getBoundingBox().width / 2 + cc.winSize.width / 2;
        map.y = -map.mapHeight * map.tileHeight + cc.winSize.height;  //map.y = -map.getBoundingBox().height + cc.winSize.height / 2;
        this.map = map;

        //this.moveTotile(cc.p(50, 50));
    },

    _onTouchMoved: function(sender, touch) {

        var diff = touch.getDelta();
        var currentPos = this.map.getPosition();
        currentPos = cc.pAdd(diff, currentPos);
        this.map.setPosition(currentPos);
        cc.log("moved:" + JSON.stringify(currentPos));
        this._isMoved = true;

        var p = this.convertTotile(currentPos);
        cc.log(cc.formatStr("tile %d,%d", p.x, p.y));
    },

    _onTouchEnded: function() {
        if (!this._isMoved) {
            this.moveTotile(cc.p(_.random(0, 100), _.random(0, 100)));
        }
        this._isMoved = false;
    },

    moveTotile: function(position) {
        cc.log(">>" + JSON.stringify(position));
        var map = this.map;
        var mapSize = map.getMapSize();
        var tileWidth = map.getBoundingBox().width / map.getMapSize().width;
        var tileHeight = map.getBoundingBox().height / map.getMapSize().height;

        var variable1 = -(position.x + mapSize.width / 2 - mapSize.height) * tileWidth * tileHeight ;
        var variable2 = -(-position.y + mapSize.width / 2 + mapSize.height) * tileWidth * tileHeight ;

        var posx = (variable1 + variable2) / 2 / tileHeight + cc.winSize.width / 2;
        var posy = (variable2 - variable1) / 2 / tileWidth + cc.winSize.height;

        cc.log(cc.formatStr("screen %d,%d", posx, posy));

        var p = this.convertTotile(cc.p(posx, posy));
        cc.log("tile %d,%d", p.x, p.y);
        return map.setPosition(posx, posy);

    },

    convertTotile: function(position) {
        var map = this.map;

        position.x -= cc.winSize.width / 2;
        position.y -= cc.winSize.height;

        var  mapSize = map.getMapSize();
        var  tileWidth = map.getBoundingBox().width / map.getMapSize().width;
        var  tileHeight = map.getBoundingBox().height / map.getMapSize().height;
        //var posx = mapSize.width / 2 + position.x / tileWidth;
        //var posy = mapSize.height + position.y / tileHeight;
        var row = position.y / tileHeight;
        var col = position.x / tileWidth;

        var posx = mapSize.width + row + col + mapSize.width / 2;
        var posy = mapSize.height + row + col + mapSize.width / 2;

        return cc.p(posx, posy);
    }
});
},{"../widget/BaseLayer.js":27,"underscore":31}],20:[function(require,module,exports){
/**
 * Created by zxh on 15/10/15.
 */

var BaseLayer = require('../widget/BaseLayer.js');
var _ = require('underscore');

var GameLayer = BaseLayer.extend({
    data: null,
    index: 0,
    ctor: function() {
        this._super();
        this.loadUI(G_RES.res.MainMenu_json);
    },

    setData: function(data) {
        this.data = data;
        this._food.setString("食物:" + data.food);
        this._wood.string = "木材:" + data.wood;
        this._gold.string = "金币:" + data.gold;
    },

    _onHomeTouchEnded: function() {
        //cc.log("_onHomeTouchEnded");
        if (this.switchLayer) {
            this.switchLayer();
        }
    },

    _onTaskTouchEnded: function() {
        //cc.log("_onTaskTouchEnded");
        //this.index = _.random(1, 3);
        this.playAction(this.index);

    },

    _onPvpTouchEnded: function() {

    }


});

module.exports = GameLayer;

},{"../widget/BaseLayer.js":27,"underscore":31}],21:[function(require,module,exports){
/**
 * Created by zxh on 15/10/9.
 */
var BaseLayer = require('../widget/BaseLayer.js');
var Emitter = require('../../lib/emitter.js');

module.exports = BaseLayer.extend({
    ctor: function() {
        this.hasFrame = true;
        this._super();
        this.loadUI(G_RES.res.Login_json);
    },

    _onTouchEnded: function() {
        this.enterGame();
    }

});

},{"../../lib/emitter.js":15,"../widget/BaseLayer.js":27}],22:[function(require,module,exports){
/**
 * Created by zxh on 15/10/15.
 */
var puremvc = require('puremvc').puremvc;
var CityLayer = require('../component/CityLayer.js');

var robotFSM = require('../../fsm/RobotFSM.js');
module.exports = puremvc.define
(
    // CLASS INFO
    {
        name: 'view.mediator.CityMediator',
        parent: puremvc.Mediator,
        constructor: function () {
            puremvc.Mediator.call(this, this.constructor.NAME);

        }
    },
    // INSTANCE MEMBERS
    {

        init: function() {
            if (!this.viewComponent) {
                this.viewComponent = new CityLayer();
                this.viewComponent.retain();

                this.robotFSM = robotFSM('robot');
                this.heroFSM = robotFSM('hero');
            }
        },

        getRes: function() {
            return resManager.loadGroup(resManager.groups.robot);
        },

        /** @override */
        listNotificationInterests: function () {
            return [
                Messages.ENTER_CITY,
                Messages.ENTER_COUNTRY,

                //状态机发生变化
                FSMHelper.changedMessage('hero'),
                FSMHelper.changedMessage('robot'),
                //this.robotFSM.CHANGED,
                //this.heroFSM.CHANGED,

                //状态切换时发送的通知
                Messages.ENTER_RUN,  //进入run
                Messages.EXIT_STOP   //退出stop
            ];
        },

        /** @override */
        handleNotification: function (notification) {
            switch (notification.getName()) {
                case Messages.ENTER_CITY:
                    this.facade.sendNotification(Messages.SHOW_VIEW, {
                        name:this.constructor.NAME,
                        zOrder: 1
                    });
                    break;
                case Messages.ENTER_COUNTRY:
                    this.viewComponent.removeFromParent();
                    break;
                case FSMHelper.changedMessage('robot'):
                    cc.log("robot 状态变化:" + notification.getBody().name);
                    this.viewComponent.playRobotAnimation(notification.getBody().name);
                    break;
                case FSMHelper.changedMessage('hero'):
                    cc.log("hero 状态变化:" + notification.getBody().name);
                    this.viewComponent.playHeroAnimation(notification.getBody().name);
                    break;

                case Messages.ENTER_RUN:
                    cc.log('将要进入run');
                    break;
                case Messages.EXIT_STOP:
                    cc.log('将要退出stop');
                    break;
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
        NAME: 'CityMediator'
    }
);

},{"../../fsm/RobotFSM.js":12,"../component/CityLayer.js":18,"puremvc":28}],23:[function(require,module,exports){
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
},{"../component/CountryLayer.js":19,"puremvc":28}],24:[function(require,module,exports){
/**
 * Created by zxh on 15/10/16.
 */

/**
 * Created by zxh on 15/10/15.
 */
var puremvc = require('puremvc').puremvc;
var GameLayer = require('../component/GameLayer.js');
//var InjectHeroFSMCommand = require('../../controller/command/InjectHeroFSMCommand.js');
var _ = require('underscore');

module.exports = puremvc.define
(
    // CLASS INFO
    {
        name: 'view.mediator.GameMediator',
        parent: puremvc.Mediator,
        constructor: function () {
            puremvc.Mediator.call(this, this.constructor.NAME);
        }
    },
    // INSTANCE MEMBERS
    {
        onRegister: function() {
            this._gameProxy = this.facade.retrieveProxy('GameProxy');
        },

        getRes: function() {
            return resManager.loadGroup(resManager.groups.MainMenu);

        },

        cityLayer: null,
        childMediator: null,

        init: function() {
            if (!this.viewComponent) {
                this.viewComponent = new GameLayer();
                this.viewComponent.setData(this._gameProxy);
                this.viewComponent.retain();

                this.viewComponent.switchLayer = this.switchLayer.bind(this);
                this.viewComponent.playAction = this.playAction.bind(this);
            }
        },

        switchLayer: function() {
            if (this.childMediator === 1) {
                this.facade.sendNotification(Messages.ENTER_COUNTRY);
            } else {
                this.facade.sendNotification(Messages.ENTER_CITY);
            }
        },

        playAction: function(action) {

            //var mediator = this.facade.retrieveMediator('hero');
            var action = FSMHelper.actionMessage('hero');
            this.sendNotification(action, {name:'hero'}, _.random(1, 3));

            action = FSMHelper.actionMessage('robot');
            this.sendNotification(action, {name:'robot'}, _.random(1, 3));
        },

        /** @override */
        listNotificationInterests: function () {
            return [
                Messages.ENTER_CITY,
                Messages.ENTER_COUNTRY,
                Messages.GAME_DATA_CHANGE
            ];
        },

        /** @override */
        handleNotification: function (notification) {


            var self = this;
            var gameViewHandle = function() {
                if (self.viewComponent && self.viewComponent.getParent()) {
                    return;
                }

                self.facade.sendNotification(Messages.SHOW_VIEW, {
                    name:self.constructor.NAME,
                    zOrder: 10
                });
            };

            switch (notification.getName()) {
                case Messages.ENTER_CITY:
                    this.childMediator = 1;
                    gameViewHandle();
                    break;

                case Messages.ENTER_COUNTRY:
                    this.childMediator = 2;
                    gameViewHandle();
                    break;
                case Messages.GAME_DATA_CHANGE:
                    this.viewComponent.setData(this._gameProxy);
            }
      }
    },
    // STATIC MEMBERS
    {
        NAME: 'GameMediator'
    }
);

},{"../component/GameLayer.js":20,"puremvc":28,"underscore":31}],25:[function(require,module,exports){
/**
 * Created by zxh on 15/10/10.
 */

var puremvc = require('puremvc').puremvc;
var LogoLayer = require('../component/LogoLayer.js');


module.exports = puremvc.define(
    // CLASS INFO
    {
        name: 'view.mediator.LoginMediator',
        parent: puremvc.Mediator,
        constructor: function () {
            puremvc.Mediator.call(this, this.constructor.NAME);
        }
    },
    // INSTANCE MEMBERS
    {

        init: function() {
            this.viewComponent = new LogoLayer();
            var self = this;
            //this.viewComponent.enterGame = function() {
            //    self.sendNotification(Command.RUN_GAME);
            //}
        },

        getRes: function() {
            return resManager.loadGroup(resManager.groups.logo);
        },

        /** @override */
        listNotificationInterests: function () {
            return [
                Command.RUN_GAME,
                Messages.LOAD_COMPLETE
            ];
        },

        /** @override */
        handleNotification: function (notification) {
            switch (notification.getName()) {
                case Command.RUN_GAME:
                    this.facade.removeMediator(this.constructor.NAME);
                    break;
                case Messages.LOAD_COMPLETE:
                    this.sendNotification(Command.RUN_GAME);
                    break;

            }
        },

        /** @override */
        onRegister: function () {
        },

        /** @override */
        onRemove: function () {
            if (this.viewComponent) {
                this.viewComponent.removeFromParent();
                this.viewComponent = null;
            }
        },
    },
    // STATIC MEMBERS
    {
        NAME: 'LoginMediator'
    }
);

},{"../component/LogoLayer.js":21,"puremvc":28}],26:[function(require,module,exports){
/**
 * Created by zxh on 15/10/9.
 */

var puremvc = require('puremvc').puremvc;
var _ = require('underscore');

module.exports = puremvc.define
(
    // CLASS INFO
    {
        name: 'view.mediator.SceneMediator',
        parent: puremvc.Mediator,
        constructor: function () {
            puremvc.Mediator.call(this, this.constructor.NAME);
        }

    },
    // INSTANCE MEMBERS
    {

        /** @override */
        listNotificationInterests: function () {
            return [
                Messages.RUN_SCENE,
                Messages.SHOW_VIEW
            ];
        },

        /** @override */
        handleNotification: function (notification) {


            switch (notification.getName()) {
                case Messages.RUN_SCENE:
                    var name = notification.getBody().name;
                    var viewMediator = this.facade.retrieveMediator(name);
                    this.runScene(viewMediator);
                    break;
                case Messages.SHOW_VIEW:
                    this.showLayer(notification.getBody());
            }
        },

        runScene: function(viewMediator) {

            var self = this,
                res = viewMediator.getRes();

            var handleRunScene = function() {
                viewMediator.init();
                var scene = self.getViewComponent();
                if (!scene) {
                    self.viewComponent = new cc.Scene();
                    scene = self.getViewComponent();
                }

                var child = viewMediator.getViewComponent();
                scene.addChild(child);
                cc.director.runScene(scene);
            };

            if (!cc.sys.isNative && !_.isEmpty(res)) {
                cc.loader.load(res, handleRunScene);
            } else {
                handleRunScene();
            }
        },

        showLayer: function(body) {
            var res,
                parentMediator = this,
                viewMediator = this.facade.retrieveMediator(body.name);

            if (_.isString(body.parent)) {
                parentMediator = this.facade.retrieveMediator(body.parent);
                cc.assert(parentMediator, "不能检索到" + body.parent);
            }

            if (viewMediator.getRes) {
                res = viewMediator.getRes();
            }

            var handleCreateLayer = function() {
                if (_.isFunction(viewMediator.init)) {
                    viewMediator.init();
                }

                var childLayer = viewMediator.getViewComponent();
                parentMediator.getViewComponent().addChild(childLayer, body.zOrder);
            };

            if (!cc.sys.isNative && !_.isEmpty(res)) {
                cc.loader.load(res, handleCreateLayer);
            } else {
                handleCreateLayer();
            }
        }

    },
    // STATIC MEMBERS
    {
        NAME: 'SceneMediator'
    }
);

},{"puremvc":28,"underscore":31}],27:[function(require,module,exports){
/**
 * Created by zxh on 15/10/10.
 */

/**
 （1）半透明背景层；
 （2）点击事件，控制这个层是否可透过点击；
 （3）弹出时是否带弹出动画（如提示弹框Tips，或功能页Page所需要的弹出动画）；
 （4）拓展方法（如，当前页面加载cocostudio的文件的方法，内存控制管理等）
 */
var sz = require('../../lib/UILoader.js');

BaseLayer = cc.Layer.extend({
    isShowAction:       false,      //是否以动画显示
    hasFrame:           false,      //是否显示背景
    colorFrame:         null,       //颜色背景
    ctor: function() {
        this._super();
        //创建半透明窗口
        this.createFrame();
        //显示动画
        this.showAction();
    },

    onEnter: function() {
        this._super();
        //注册触摸事件
        sz.uiloader.registerTouchEvent(this);
    },

    setMediator: function(mediator) {
        this.mediator = mediator;
    },

    createFrame: function() {
        if(this.hasFrame) {
            this.colorFrame = new cc.LayerColor(cc.color(0, 0, 0, 200));
            this.addChild(this.colorFrame, -1);
        }
    },

    showAction: function() {
        if (this.isShowAction) {
            this.setScale(0.8);
            var scaleTo1 = new cc.ScaleTo(0.1, 1.1).easing(cc.easeIn(2));
            var scaleTo2 = new cc.ScaleTo(0.1, 1);
            var sequence = new cc.Sequence(scaleTo1, scaleTo2);
            this.runAction(sequence);
        }
    },

    loadUI: function(uiFile) {
        var root = sz.uiloader.widgetFromJsonFile(this, uiFile);
        //自动适应屏幕
        root.setContentSize(cc.winSize);
        ccui.helper.doLayout(root)
    },

    setColor: function(value) {
        if (this.colorFrame) {
            this.colorFrame.setColor(value);
        }
    },

    _onTouchBegan: function() {
        return this._onTouchMoved || this._onTouchEnded ? true : false;
    }
});

module.exports = BaseLayer;
},{"../../lib/UILoader.js":14}],28:[function(require,module,exports){
exports.puremvc = require("./lib/puremvc-1.0.1-mod.js");
exports.puremvc.statemachine = require("./lib/puremvc-statemachine-1.0-mod.js");
},{"./lib/puremvc-1.0.1-mod.js":29,"./lib/puremvc-statemachine-1.0-mod.js":30}],29:[function(require,module,exports){
/**
 * @fileOverview
 * PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
 * Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * Reuse governed by Creative Commons Attribution 3.0 
 * http://creativecommons.org/licenses/by/3.0/us/
 * @author david.foley@puremvc.org 
 */


 	/* implementation begin */
	
	
/**
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.Observer
 * 
 * A base Observer implementation.
 * 
 * An Observer is an object that encapsulates information
 * about an interested object with a method that should 
 * be called when a particular Notification is broadcast. 
 * 
 * In PureMVC, the Observer class assumes these responsibilities:
 * 
 * - Encapsulate the notification (callback) method of the interested object.
 * - Encapsulate the notification context (this) of the interested object.
 * - Provide methods for setting the notification method and context.
 * - Provide a method for notifying the interested object.
 * 
 * 
 * The notification method on the interested object should take 
 * one parameter of type Notification.
 * 
 * 
 * @param {Function} notifyMethod 
 *  the notification method of the interested object
 * @param {Object} notifyContext 
 *  the notification context of the interested object
 * @constructor
 */
function Observer (notifyMethod, notifyContext)
{
    this.setNotifyMethod(notifyMethod);
    this.setNotifyContext(notifyContext);
};

/**
 * Set the Observers notification method.
 * 
 * The notification method should take one parameter of type Notification
 * @param {Function} notifyMethod
 *  the notification (callback) method of the interested object.
 * @return {void}
 */
Observer.prototype.setNotifyMethod= function (notifyMethod)
{
    this.notify= notifyMethod;
};

/**
 * Set the Observers notification context.
 * 
 * @param {Object} notifyContext
 *  the notification context (this) of the interested object.
 * 
 * @return {void}
 */
Observer.prototype.setNotifyContext= function (notifyContext)
{
    this.context= notifyContext;
};

/**
 * Get the Function that this Observer will invoke when it is notified.
 * 
 * @private
 * @return {Function}
 */
Observer.prototype.getNotifyMethod= function ()
{
    return this.notify;
};

/**
 * Get the Object that will serve as the Observers callback execution context
 * 
 * @private
 * @return {Object}
 */
Observer.prototype.getNotifyContext= function ()
{
    return this.context;
};

/**
 * Notify the interested object.
 * 
 * @param {puremvc.Notification} notification
 *  The Notification to pass to the interested objects notification method
 * @return {void}
 */
Observer.prototype.notifyObserver= function (notification)
{
    this.getNotifyMethod().call(this.getNotifyContext(), notification);
};

/**
 * Compare an object to this Observers notification context.
 * 
 * @param {Object} object
 *  
 * @return {boolean}
 */
Observer.prototype.compareNotifyContext= function (object)
{
    return object === this.context;
};

/**
 * The Observers callback Function
 * 
 * @private
 * @type {Function}
 */
Observer.prototype.notify= null;

/**
 * The Observers callback Object
 * @private
 * @type {Object}
 */
Observer.prototype.context= null;
/**
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.Notification
 * 
 * A base Notification implementation.
 * 
 * PureMVC does not rely upon underlying event models such as the one provided 
 * with the DOM or other browser centric W3C event models.
 * 
 * The Observer Pattern as implemented within PureMVC exists to support 
 * event-driven communication between the application and the actors of the MVC 
 * triad.
 * 
 * Notifications are not meant to be a replacement for events in the browser. 
 * Generally, Mediator implementors place event listeners on their view 
 * components, which they then handle in the usual way. This may lead to the 
 * broadcast of Notifications to trigger commands or to communicate with other 
 * Mediators. {@link puremvc.Proxy Proxy},
 * {@link puremvc.SimpleCommand SimpleCommand}
 * and {@link puremvc.MacroCommand MacroCommand}
 * instances communicate with each other and 
 * {@link puremvc.Mediator Mediator}s
 * by broadcasting Notifications.
 * 
 * A key difference between browser events and PureMVC Notifications is that
 * events follow the 'Chain of Responsibility' pattern, 'bubbling' up the 
 * display hierarchy until some parent component handles the event, while 
 * PureMVC Notification follow a 'Publish/Subscribe' pattern. PureMVC classes 
 * need not be related to each other in a parent/child relationship in order to 
 * communicate with one another using Notifications.
 * 
 * @constructor 
 * @param {string} name
 *  The Notification name
 * @param {Object} [body]
 *  The Notification body
 * @param {Object} [type]
 *  The Notification type
 */
function Notification(name, body, type)
{
    this.name= name;
    this.body= body;
    this.type= type;
};

/**
 * Get the name of the Notification instance
 *
 * @return {string}
 *  The name of the Notification instance
 */
Notification.prototype.getName= function()
{
    return this.name;
};

/**
 * Set this Notifications body. 
 * @param {Object} body
 * @return {void}
 */
Notification.prototype.setBody= function(body)
{
    this.body= body;
};

/**
 * Get the Notification body.
 *
 * @return {Object}
 */
Notification.prototype.getBody= function()
{
    return this.body
};

/**
 * Set the type of the Notification instance.
 *
 * @param {Object} type
 * @return {void}
 */
Notification.prototype.setType= function(type)
{
    this.type= type;
};

/**
 * Get the type of the Notification instance.
 * 
 * @return {Object}
 */
Notification.prototype.getType= function()
{
    return this.type;
};

/**
 * Get a string representation of the Notification instance
 *
 * @return {string}
 */
Notification.prototype.toString= function()
{
    var msg= "Notification Name: " + this.getName();
    msg+= "\nBody:" + ((this.body == null ) ? "null" : this.body.toString());
    msg+= "\nType:" + ((this.type == null ) ? "null" : this.type);
    return msg;
};

/**
 * The Notifications name.
 *
 * @type {string}
 * @private
 */
Notification.prototype.name= null;

/**
 * The Notifications type.
 *
 * @type {string}
 * @private
 */
Notification.prototype.type= null;

/**
 * The Notifications body.
 *
 * @type {Object}
 * @private
 */
Notification.prototype.body= null;
/**
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.Notifier
 * 
 * A Base Notifier implementation.
 * 
 * {@link puremvc.MacroCommand MacroCommand}, 
 * {@link puremvc.SimpleCommand SimpleCommand}, 
 * {@link puremvc.Mediator Mediator} and 
 * {@link puremvc.Proxy Proxy}
 * all have a need to send Notifications
 * 
 * The Notifier interface provides a common method called #sendNotification that 
 * relieves implementation code of the necessity to actually construct 
 * Notifications.
 * 
 * The Notifier class, which all of the above mentioned classes
 * extend, provides an initialized reference to the 
 * {@link puremvc.Facade Facade}
 * Multiton, which is required for the convienience method
 * for sending Notifications but also eases implementation as these
 * classes have frequent 
 * {@link puremvc.Facade Facade} interactions 
 * and usually require access to the facade anyway.
 * 
 * NOTE: In the MultiCore version of the framework, there is one caveat to
 * notifiers, they cannot send notifications or reach the facade until they
 * have a valid multitonKey. 
 * 
 * The multitonKey is set:
 *   - on a Command when it is executed by the Controller
 *   - on a Mediator is registered with the View
 *   - on a Proxy is registered with the Model. 
 * 
 * @constructor
 */
function Notifier()
{
};

/**
 * Create and send a Notification.
 *
 * Keeps us from having to construct new Notification instances in our 
 * implementation code.
 * 
 * @param {string} notificationName
 *  A notification name
 * @param {Object} [body]
 *  The body of the notification
 * @param {string} [type]
 *  The notification type
 * @return {void}
 */
Notifier.prototype.sendNotification = function(notificationName, body, type)
{
    var facade = this.getFacade();
    if(facade)
    {
        facade.sendNotification(notificationName, body, type);
    }
};


/**
 * @protected
 * A reference to this Notifier's Facade. This reference will not be available
 * until #initializeNotifier has been called. 
 * 
 * @type {puremvc.Facade}
 */
Notifier.prototype.facade;

/**
 * Initialize this Notifier instance.
 * 
 * This is how a Notifier gets its multitonKey. 
 * Calls to #sendNotification or to access the
 * facade will fail until after this method 
 * has been called.
 * 
 * Mediators, Command or Proxies may override
 * this method in order to send notifications
 * or access the Multiton Facade instance as
 * soon as possible. They CANNOT access the facade
 * in their constructors, since this method will not
 * yet have been called.
 * 
 *
 * @param {string} key
 *  The Notifiers multiton key;
 * @return {void}
 */
Notifier.prototype.initializeNotifier = function(key)
{
    this.multitonKey = String(key);
    this.facade= this.getFacade();
};

/**
 * Retrieve the Multiton Facade instance
 *
 *
 * @protected
 * @return {puremvc.Facade}
 */
Notifier.prototype.getFacade = function()
{
    if(this.multitonKey == null)
    {
        throw new Error(Notifier.MULTITON_MSG);
    };

    return Facade.getInstance(this.multitonKey);
};

/**
 * @ignore
 * The Notifiers internal multiton key.
 *
 * @protected
 * @type string
 */
Notifier.prototype.multitonKey = null;

/**
 * @ignore
 * The error message used if the Notifier is not initialized correctly and
 * attempts to retrieve its own multiton key
 *
 * @static
 * @protected
 * @const
 * @type string
 */
Notifier.MULTITON_MSG = "multitonKey for this Notifier not yet initialized!";
/**
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.SimpleCommand
 * @extends puremvc.Notifier
 *
 * SimpleCommands encapsulate the business logic of your application. Your 
 * subclass should override the #execute method where your business logic will
 * handle the 
 * {@link puremvc.Notification Notification}
 * 
 * Take a look at 
 * {@link puremvc.Facade#registerCommand Facade's registerCommand}
 * or {@link puremvc.Controller#registerCommand Controllers registerCommand}
 * methods to see how to add commands to your application.
 * 
 * @constructor
 */
function SimpleCommand () { };

SimpleCommand.prototype= new Notifier;
SimpleCommand.prototype.constructor= SimpleCommand;

/**
 * Fulfill the use-case initiated by the given Notification
 * 
 * In the Command Pattern, an application use-case typically begins with some
 * user action, which results in a Notification is handled by the business logic
 * in the #execute method of a command.
 * 
 * @param {puremvc.Notification} notification
 *  The notification to handle.
 * @return {void}
 */
SimpleCommand.prototype.execute= function (notification) { };
/**
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.MacroCommand
 * @extends puremvc.Notifier
 * 
 * A base command implementation that executes other commands, such as
 * {@link puremvc.SimpleCommand SimpleCommand}
 * or {@link puremvc.MacroCommand MacroCommand}
 * subclasses.
 *  
 * A MacroCommand maintains an list of
 * command constructor references called *SubCommands*.
 * 
 * When #execute is called, the MacroCommand
 * instantiates and calls #execute on each of its *SubCommands* in turn.
 * Each *SubCommand* will be passed a reference to the original
 * {@link puremvc.Notification Notification} 
 * that was passed to the MacroCommands #execute method
 * 
 * Unlike {@link puremvc.SimpleCommand SimpleCommand}, 
 * your subclass should not override #execute but instead, should 
 * override the #initializeMacroCommand method, calling #addSubCommand once for 
 * each *SubCommand* to be executed.
 * 
 * If your subclass does define a constructor, be sure to call "super" like so
 * 
 *     function MyMacroCommand ()
 *     {
 *         MacroCommand.call(this);
 *     };
 * @constructor
 */
function MacroCommand()
{
    this.subCommands= [];
    this.initializeMacroCommand();
};

/* subclass Notifier */
MacroCommand.prototype= new Notifier;
MacroCommand.prototype.constructor= MacroCommand;

/**
 * @private
 * @type {Array.<puremvc.SimpleCommand|puremvc.MacroCommand>}
 */
MacroCommand.prototype.subCommands= null;

/**
 * @protected
 * Initialize the MacroCommand.
 * 
 * In your subclass, override this method to 
 * initialize the MacroCommand's *SubCommand*  
 * list with command class references like 
 * this:
 * 
 *     // Initialize MyMacroCommand
 *     MyMacroCommand.prototype.initializeMacroCommand= function ()
 *     {
 *         this.addSubCommand( com.me.myapp.controller.FirstCommand );
 *         this.addSubCommand( com.me.myapp.controller.SecondCommand );
 *         this.addSubCommand( com.me.myapp.controller.ThirdCommand );
 *     };
 * 
 * Note that *SubCommand*s may be any command implementor,
 * MacroCommands or SimpleCommands are both acceptable.
 * @return {void}
 */
MacroCommand.prototype.initializeMacroCommand= function() {}

/**
 * @protected
 * Add a *SubCommand*
 * 
 * The *SubCommand*s will be called in First In / First Out (FIFO) order
 * @param {Function} commandClassRef
 *  A reference to a subclassed SimpleCommand or MacroCommand constructor
 */
MacroCommand.prototype.addSubCommand= function(commandClassRef)
{
    this.subCommands.push(commandClassRef);
};

/**
 * Execute this MacroCommands *SubCommands*
 * 
 * The *SubCommand*s will be called in First In / First Out (FIFO) order
 * @param {puremvc.Notification} note
 *  The Notification object to be passed to each *SubCommand*
 */
MacroCommand.prototype.execute= function(note)
{
    // SIC- TODO optimize
    while(this.subCommands.length > 0)
    {
        var ref= this.subCommands.shift();
        var cmd= new ref;
        cmd.initializeNotifier(this.multitonKey);
        cmd.execute(note);
    }
};
/**
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.Mediator
 * @extends puremvc.Notifier
 * 
 * A base Mediator implementation.
 *
 * In PureMVC, Mediator classes are used to mediate communication between a view 
 * component and the rest of the application.
 *
 * A Mediator should listen to its view components for events, and handle them 
 * by sending notifications (to be handled by other Mediators, 
 * {@link puremvc.SimpleCommand SimpleCommands} 
 * or
 * {@link puremvc.MacroCommand MacroCommands}) 
 * or passing data from the view component directly to a 
 * {@link puremvc.Proxy Proxy}, such as submitting 
 * the contents of a form to a service.
 * 
 * Mediators should not perform business logic, maintain state or other 
 * information for its view component, or break the encapsulation of the view 
 * component by manipulating the view component's children. It should only call 
 * methods or set properties on the view component.
 *  
 * The view component should encapsulate its own behavior and implementation by 
 * exposing methods and properties that the Mediator can call without having to 
 * know about the view component's children.
 * 
 * @constructor
 * @param {string} [mediatorName]
 *  The Mediators name. The Mediators static #NAME value is used by default
 * @param {Object} [viewComponent]
 *  The Mediators {@link #setViewComponent viewComponent}.
 */
function Mediator (mediatorName, viewComponent)
{
    this.mediatorName= mediatorName || this.constructor.NAME;
    this.viewComponent=viewComponent;  
};

/**
 * @static
 * The name of the Mediator.
 * 
 * Typically, a Mediator will be written to serve one specific control or group
 * of controls and so, will not have a need to be dynamically named.
 * 
 * @type {string}
 */
Mediator.NAME= "Mediator";

/* subclass */
Mediator.prototype= new Notifier;
Mediator.prototype.constructor= Mediator;

/**
 * Get the name of the Mediator
 * 
 * @return {string}
 *  The Mediator name
 */
Mediator.prototype.getMediatorName= function ()
{
    return this.mediatorName;
};

/**
 * Set the Mediators view component. This could
 * be a HTMLElement, a bespoke UiComponent wrapper
 * class, a MooTools Element, a jQuery result or a
 * css selector, depending on which DOM abstraction 
 * library you are using.
 * 
 * 
 * @param {Object} the view component
 * @return {void}
 */
Mediator.prototype.setViewComponent= function (viewComponent)
{
    this.viewComponent= viewComponent;
};

/**
 * Get the Mediators view component.
 * 
 * Additionally, an optional explicit getter can be
 * be defined in the subclass that defines the 
 * view components, providing a more semantic interface
 * to the Mediator.
 * 
 * This is different from the AS3 implementation in
 * the sense that no casting is required from the
 * object supplied as the view component.
 * 
 *     MyMediator.prototype.getComboBox= function ()
 *     {
 *         return this.viewComponent;  
 *     }
 * 
 * @return {Object}
 *  The view component
 */
Mediator.prototype.getViewComponent= function ()
{
    return this.viewComponent;
};

/**
 * List the Notification names this Mediator is interested
 * in being notified of.
 * 
 * @return {Array} 
 *  The list of Notification names.
 */
Mediator.prototype.listNotificationInterests= function ()
{
    return [];
};

/**
 * Handle Notifications.
 * 
 * Typically this will be handled in a switch statement
 * with one 'case' entry per Notification the Mediator
 * is interested in
 * 
 * @param {puremvc.Notification} notification
 * @return {void}
 */
Mediator.prototype.handleNotification= function (notification)
{
    return;
};

/**
 * Called by the View when the Mediator is registered
 * @return {void}
 */
Mediator.prototype.onRegister= function ()
{
    return;
};

/**
 * Called by the View when the Mediator is removed
 */
Mediator.prototype.onRemove= function ()
{
    return;
};

/**
 * @ignore
 * The Mediators name. Should only be accessed by Mediator subclasses.
 * 
 * @protected
 * @type string
 */
Mediator.prototype.mediatorName= null;

/**
 * @ignore
 * The Mediators viewComponent. Should only be accessed by Mediator subclasses.
 * 
 * @protected
 * @type Object
 */
Mediator.prototype.viewComponent=null;
/**
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.Proxy
 * @extends puremvc.Notifier
 *
 * A base Proxy implementation. 
 * 
 * In PureMVC, Proxy classes are used to manage parts of the application's data 
 * model.
 * 
 * A Proxy might simply manage a reference to a local data object, in which case 
 * interacting with it might involve setting and getting of its data in 
 * synchronous fashion.
 * 
 * Proxy classes are also used to encapsulate the application's interaction with 
 * remote services to save or retrieve data, in which case, we adopt an 
 * asyncronous idiom; setting data (or calling a method) on the Proxy and 
 * listening for a 
 * {@link puremvc.Notification Notification} 
 * to be sent  when the Proxy has retrieved the data from the service. 
 * 
 * 
 * @param {string} [proxyName]
 *  The Proxy's name. If none is provided, the Proxy will use its constructors
 *  NAME property.
 * @param {Object} [data]
 *  The Proxy's data object
 * @constructor
 */
function Proxy(proxyName, data)
{
    this.proxyName= proxyName || this.constructor.NAME;
    if(data != null)
    {
        this.setData(data);
    }
};


Proxy.NAME= "Proxy";

Proxy.prototype= new Notifier;
Proxy.prototype.constructor= Proxy;

/**
 * Get the Proxy's name.
 *
 * @return {string}
 */
Proxy.prototype.getProxyName= function()
{
    return this.proxyName;
};

/**
 * Set the Proxy's data object
 *
 * @param {Object} data
 * @return {void}
 */
Proxy.prototype.setData= function(data)
{
    this.data= data;
};

/**
 * Get the Proxy's data object
 *
 * @return {Object}
 */
Proxy.prototype.getData= function()
{
    return this.data;
};

/**
 * Called by the {@link puremvc.Model Model} when
 * the Proxy is registered.
 *
 * @return {void}
 */
Proxy.prototype.onRegister= function()
{
    return;
};

/**
 * Called by the {@link puremvc.Model Model} when
 * the Proxy is removed.
 * 
 * @return {void}
 */
Proxy.prototype.onRemove= function()
{
    return;
};

/**
 * @ignore
 * The Proxys name.
 *
 * @protected
 * @type String
 */
Proxy.prototype.proxyName= null;

/**
 * @ignore
 * The Proxy's data object.
 *
 * @protected
 * @type Object
 */
Proxy.prototype.data= null;
/**
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.Facade
 * Facade exposes the functionality of the Controller, Model and View
 * actors to client facing code. 
 * 
 * This Facade implementation is a Multiton, so you should not call the 
 * constructor directly, but instead call the static Factory method, 
 * passing the unique key for this instance to #getInstance
 *
 * @constructor
 * @param {string} key
 * 	The multiton key to use to retrieve the Facade instance.
 * @throws {Error} 
 *  If an attempt is made to instantiate Facade directly
 */
function Facade(key)
{
    if(Facade.instanceMap[key] != null)
    {
        throw new Error(Facade.MULTITON_MSG);
    }

    this.initializeNotifier(key);
    Facade.instanceMap[key] = this;
    this.initializeFacade();
};

/**
 * Initialize the Multiton Facade instance.
 * 
 * Called automatically by the constructor. Override in your subclass to any
 * subclass specific initializations. Be sure to call the 'super' 
 * initializeFacade method, though
 * 
 *     MyFacade.prototype.initializeFacade= function ()
 *     {
 *         Facade.call(this);
 *     };
 * @protected
 * @return {void}
 */
Facade.prototype.initializeFacade = function()
{
    this.initializeModel();
    this.initializeController();
    this.initializeView();
};

/**
 * Facade Multiton Factory method. 
 * Note that this method will return null if supplied a
 * null or undefined multiton key.
 * 
 * @param {string} key
 * 	The multiton key use to retrieve a particular Facade instance
 * @return {puremvc.Facade}
 */
Facade.getInstance = function(key)
{
	if (null == key)
		return null;
		
    if(Facade.instanceMap[key] == null)
    {
        Facade.instanceMap[key] = new Facade(key);
    }

    return Facade.instanceMap[key];
};

/**
 * Initialize the {@link puremvc.Controller Controller}.
 * 
 * Called by the #initializeFacade method.
 * 
 * Override this method in your subclass of Facade
 * if one or both of the following are true:

 * - You wish to initialize a different Controller
 * - You have 
 * {@link puremvc.SimpleCommand SimpleCommand}s
 * or {@link puremvc.MacroCommand MacroCommand}s
 * to register with the Controllerat startup.   
 * 
 * If you don't want to initialize a different Controller, 
 * call the 'super' initializeControlle method at the beginning of your
 * method, then register commands.
 * 
 *     MyFacade.prototype.initializeController= function ()
 *     {
 *         Facade.prototype.initializeController.call(this);
 *         this.registerCommand(AppConstants.A_NOTE_NAME, ABespokeCommand)
 *     }
 * 
 * @protected
 * @return {void}
 */
Facade.prototype.initializeController = function()
{
    if(this.controller != null)
        return;

    this.controller = Controller.getInstance(this.multitonKey);
};

/**
 * @protected
 * Initialize the {@link puremvc.Model Model};
 * 
 * Called by the #initializeFacade method.
 * Override this method in your subclass of Facade if one of the following are
 * true:
 * 
 * - You wish to initialize a different Model.
 * 
 * - You have {@link puremvc.Proxy Proxy}s to 
 *   register with the Model that do not retrieve a reference to the Facade at 
 *   construction time.
 * 
 * If you don't want to initialize a different Model
 * call 'super' #initializeModel at the beginning of your method, then register 
 * Proxys.
 * 
 * Note: This method is *rarely* overridden; in practice you are more
 * likely to use a command to create and registerProxys with the Model>, 
 * since Proxys with mutable data will likely
 * need to send Notifications and thus will likely want to fetch a reference to 
 * the Facade during their construction. 
 * 
 * @return {void}
 */
Facade.prototype.initializeModel = function()
{
    if(this.model != null)
        return;

    this.model = Model.getInstance(this.multitonKey);
};

/**
 * @protected
 * 
 * Initialize the {@link puremvc.View View}.
 * 
 * Called by the #initializeFacade method.
 * 
 * Override this method in your subclass of Facade if one or both of the 
 * following are true:
 *
 * - You wish to initialize a different View.
 * - You have Observers to register with the View
 * 
 * If you don't want to initialize a different View 
 * call 'super' #initializeView at the beginning of your
 * method, then register Mediator instances.
 * 
 *     MyFacade.prototype.initializeView= function ()
 *     {
 *         Facade.prototype.initializeView.call(this);
 *         this.registerMediator(new MyMediator());
 *     };
 * 
 * Note: This method is *rarely* overridden; in practice you are more
 * likely to use a command to create and register Mediators
 * with the View, since Mediator instances will need to send 
 * Notifications and thus will likely want to fetch a reference 
 * to the Facade during their construction. 
 * @return {void}
 */
Facade.prototype.initializeView = function()
{
    if(this.view != null)
        return;

    this.view = View.getInstance(this.multitonKey);
};

/**
 * Register a command with the Controller by Notification name
 * @param {string} notificationName
 *  The name of the Notification to associate the command with
 * @param {Function} commandClassRef
 *  A reference ot the commands constructor.
 * @return {void}
 */
Facade.prototype.registerCommand = function(notificationName, commandClassRef)
{
    this.controller.registerCommand(notificationName, commandClassRef);
};

/**
 * Remove a previously registered command to Notification mapping from the
 * {@link puremvc.Controller#removeCommand Controller}
 * @param {string} notificationName
 *  The name of the the Notification to remove from the command mapping for.
 * @return {void}
 */
Facade.prototype.removeCommand = function(notificationName)
{
    this.controller.removeCommand(notificationName);
};

/**
 * Check if a command is registered for a given notification.
 * 
 * @param {string} notificationName
 *  A Notification name
 * @return {boolean}
 *  Whether a comman is currently registered for the given notificationName
 */
Facade.prototype.hasCommand = function(notificationName)
{
    return this.controller.hasCommand(notificationName);
};

/**
 * Register a Proxy with the {@link puremvc.Model#registerProxy Model}
 * by name.
 * 
 * @param {puremvc.Proxy} proxy
 *  The Proxy instance to be registered with the Model.
 * @return {void}
 */
Facade.prototype.registerProxy = function(proxy)
{
    this.model.registerProxy(proxy);
};

/**
 * Retrieve a Proxy from the Model
 * 
 * @param {string} proxyName
 * @return {puremvc.Proxy}
 */
Facade.prototype.retrieveProxy = function(proxyName)
{
    return this.model.retrieveProxy(proxyName);
};

/**
 * Remove a Proxy from the Model by name
 * @param {string} proxyName
 *  The name of the Proxy
 * @return {puremvc.Proxy}
 *  The Proxy that was removed from the Model
 */
Facade.prototype.removeProxy = function(proxyName)
{
    var proxy = null;
    if(this.model != null)
    {
        proxy = this.model.removeProxy(proxyName);
    }

    return proxy;
};

/**
 * Check it a Proxy is registered.
 * @param {string} proxyName
 *  A Proxy name
 * @return {boolean}
 *  Whether a Proxy is currently registered with the given proxyName
 */
Facade.prototype.hasProxy = function(proxyName)
{
    return this.model.hasProxy(proxyName);
};

/**
 * Register a Mediator with with the View.
 * 
 * @param {puremvc.Mediator} mediator
 *  A reference to the Mediator to register
 * @return {void}
 */
Facade.prototype.registerMediator = function(mediator)
{
    if(this.view != null)
    {
        this.view.registerMediator(mediator);
    }
};

/**
 * Retrieve a Mediator from the View by name
 * 
 * @param {string} mediatorName
 *  The Mediators name
 * @return {puremvc.Mediator}
 *  The retrieved Mediator
 */
Facade.prototype.retrieveMediator = function(mediatorName)
{
    return this.view.retrieveMediator(mediatorName);
};

/**
 * Remove a Mediator from the View.
 * 
 * @param {string} mediatorName
 *  The name of the Mediator to remove.
 * @return {puremvc.Mediator}
 *  The removed Mediator
 */
Facade.prototype.removeMediator = function(mediatorName)
{
    var mediator = null;
    if(this.view != null)
    {
        mediator = this.view.removeMediator(mediatorName);
    }

    return mediator;
};

/**
 * Check if a Mediator is registered or not.
 * 
 * @param {string} mediatorName
 *  A Mediator name
 * @return {boolean}
 *  Whether a Mediator is registered with the given mediatorName
 */
Facade.prototype.hasMediator = function(mediatorName)
{
    return this.view.hasMediator(mediatorName);
};

/**
 * Create and send a 
 * {@link puremvc.Notification Notification}
 * 
 * Keeps us from having to construct new Notification instances in our
 * implementation
 * 
 * @param {string} notificationName
 *  The name of the Notification to send
 * @param {Object} [body]
 *  The body of the notification
 * @param {string} [type]
 *  The type of the notification
 * @return {void}
 */
Facade.prototype.sendNotification = function(notificationName, body, type)
{
    this.notifyObservers(new Notification(notificationName, body, type));
};

/**
 * Notify {@link puremvc.Observer Observer}s
 * 
 * This method is left public mostly for backward compatibility, and to allow
 * you to send custom notification classes using the facade.
 * 
 * Usually you should just call sendNotification and pass the parameters, never 
 * having to construct the notification yourself.
 * 
 * @param {puremvc.Notification} notification
 *  The Notification to send
 * @return {void}
 */
Facade.prototype.notifyObservers = function(notification)
{
    if(this.view != null)
    {
        this.view.notifyObservers(notification);
    }
};

/**
 * Initialize the Facades Notifier capabilities by setting the Multiton key for 
 * this facade instance.
 * 
 * Not called directly, but instead from the constructor when #getInstance is 
 * invoked. It is necessary to be public in order to implement Notifier
 * 
 * @param {string} key
 * @return {void}
 */
Facade.prototype.initializeNotifier = function(key)
{
    this.multitonKey = key;
};

/**
 * Check if a *Core* is registered or not
 *
 * @static
 * @param {string} key
 *  The multiton key for the *Core* in question
 * @return {boolean}
 *  Whether a *Core* is registered with the given key
 */
Facade.hasCore = function(key)
{
    return Facade.instanceMap[key] != null;
};

/**
 * Remove a *Core* 
 * 
 * Remove the Model, View, Controller and Facade for a given key.
 *
 * @static
 * @param {string} key
 * @return {void}
 */
Facade.removeCore = function(key)
{
    if(Facade.instanceMap[key] == null)
        return;

    Model.removeModel(key);
    View.removeView(key);
    Controller.removeController(key);
    delete Facade.instanceMap[key];
};

/**
 * @ignore
 * The Facades corresponding Controller
 *
 * @protected
 * @type puremvc.Controller
 */
Facade.prototype.controller = null;

/**
 * @ignore
 * The Facades corresponding Model instance
 *
 * @protected
 * @type puremvc.Model
 */
Facade.prototype.model = null;

/**
 * @ignore
 * The Facades correspnding View instance.
 *
 * @protected
 * @type puremvc.View
 */
Facade.prototype.view = null;

/**
 * @ignore
 * The Facades multiton key.
 *
 * @protected
 * @type string
 */
Facade.prototype.multitonKey = null;

/**
 * @ignore
 * The Multiton Facade instance map.
 * @static
 * @protected
 * @type Array
 */
Facade.instanceMap = [];

/**
 * @ignore
 * Messages Constants
 * @protected
 * @type {string}
 * @const
 * @static
 */
Facade.MULTITON_MSG = "Facade instance for this Multiton key already constructed!";
/**
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.View
 * 
 * A Multiton View implementation.
 * 
 * In PureMVC, the View class assumes these responsibilities
 * 
 * - Maintain a cache of {@link puremvc.Mediator Mediator}
 *   instances.
 * 
 * - Provide methods for registering, retrieving, and removing 
 *   {@link puremvc.Mediator Mediator}.
 * 
 * - Notifiying {@link puremvc.Mediator Mediator} when they are registered or 
 *   removed.
 * 
 * - Managing the observer lists for each {@link puremvc.Notification Notification}  
 *   in the application.
 * 
 * - Providing a method for attaching {@link puremvc.Observer Observer} to an 
 *   {@link puremvc.Notification Notification}'s observer list.
 * 
 * - Providing a method for broadcasting a {@link puremvc.Notification Notification}.
 * 
 * - Notifying the {@link puremvc.Observer Observer}s of a given 
 *   {@link puremvc.Notification Notification} when it broadcast.
 * 
 * This View implementation is a Multiton, so you should not call the 
 * constructor directly, but instead call the static Multiton 
 * Factory #getInstance method.
 * 
 * @param {string} key
 * @constructor
 * @throws {Error} 
 *  if instance for this Multiton key has already been constructed
 */
function View(key)
{
    if(View.instanceMap[key] != null)
    {
        throw new Error(View.MULTITON_MSG);
    };

    this.multitonKey = key;
    View.instanceMap[this.multitonKey] = this;
    this.mediatorMap = [];
    this.observerMap = [];
    this.initializeView();
};

/**
 * @protected
 * Initialize the Singleton View instance
 * 
 * Called automatically by the constructor, this is your opportunity to
 * initialize the Singleton instance in your subclass without overriding the
 * constructor
 * 
 * @return {void}
 */
View.prototype.initializeView = function()
{
    return;
};

/**
 * View Singleton Factory method.
 * Note that this method will return null if supplied a null 
 * or undefined multiton key.
 *  
 * @return {puremvc.View}
 *  The Singleton instance of View
 */
View.getInstance = function(key)
{
	if (null == key)
		return null;
		
    if(View.instanceMap[key] == null)
    {
        View.instanceMap[key] = new View(key);
    };

    return View.instanceMap[key];
};

/**
 * Register an Observer to be notified of Notifications with a given name
 * 
 * @param {string} notificationName
 *  The name of the Notifications to notify this Observer of
 * @param {puremvc.Observer} observer
 *  The Observer to register.
 * @return {void}
 */
View.prototype.registerObserver = function(notificationName, observer)
{
    if(this.observerMap[notificationName] != null)
    {
        this.observerMap[notificationName].push(observer);
    }
    else
    {
        this.observerMap[notificationName] = [observer];
    }
};

/**
 * Notify the Observersfor a particular Notification.
 * 
 * All previously attached Observers for this Notification's
 * list are notified and are passed a reference to the INotification in 
 * the order in which they were registered.
 * 
 * @param {puremvc.Notification} notification
 *  The Notification to notify Observers of
 * @return {void}
 */
View.prototype.notifyObservers = function(notification)
{
    // SIC
    if(this.observerMap[notification.getName()] != null)
    {
        var observers_ref = this.observerMap[notification.getName()], observers = [], observer

        for(var i = 0; i < observers_ref.length; i++)
        {
            observer = observers_ref[i];
            observers.push(observer);
        }

        for(var i = 0; i < observers.length; i++)
        {
            observer = observers[i];
            observer.notifyObserver(notification);
        }
    }
};

/**
 * Remove the Observer for a given notifyContext from an observer list for
 * a given Notification name
 * 
 * @param {string} notificationName
 *  Which observer list to remove from
 * @param {Object} notifyContext
 *  Remove the Observer with this object as its notifyContext
 * @return {void}
 */
View.prototype.removeObserver = function(notificationName, notifyContext)
{
    // SIC
    var observers = this.observerMap[notificationName];
    for(var i = 0; i < observers.length; i++)
    {
        if(observers[i].compareNotifyContext(notifyContext) == true)
        {
            observers.splice(i, 1);
            break;
        }
    }

    if(observers.length == 0)
    {
        delete this.observerMap[notificationName];
    }
};

/**
 * Register a Mediator instance with the View.
 * 
 * Registers the Mediator so that it can be retrieved by name,
 * and further interrogates the Mediator for its 
 * {@link puremvc.Mediator#listNotificationInterests interests}.
 *
 * If the Mediator returns any Notification
 * names to be notified about, an Observer is created encapsulating 
 * the Mediator instance's 
 * {@link puremvc.Mediator#handleNotification handleNotification}
 * method and registering it as an Observer for all Notifications the 
 * Mediator is interested in.
 * 
 * @param {puremvc.Mediator} 
 *  a reference to the Mediator instance
 */
View.prototype.registerMediator = function(mediator)
{
    if(this.mediatorMap[mediator.getMediatorName()] != null)
    {
        return;
    }

    mediator.initializeNotifier(this.multitonKey);
    // register the mediator for retrieval by name
    this.mediatorMap[mediator.getMediatorName()] = mediator;

    // get notification interests if any
    var interests = mediator.listNotificationInterests();

    // register mediator as an observer for each notification
    if(interests.length > 0)
    {
        // create observer referencing this mediators handleNotification method
        var observer = new Observer(mediator.handleNotification, mediator);
        for(var i = 0; i < interests.length; i++)
        {
            this.registerObserver(interests[i], observer);
        }
    }

    mediator.onRegister();
}

/**
 * Retrieve a Mediator from the View
 * 
 * @param {string} mediatorName
 *  The name of the Mediator instance to retrieve
 * @return {puremvc.Mediator}
 *  The Mediator instance previously registered with the given mediatorName
 */
View.prototype.retrieveMediator = function(mediatorName)
{
    return this.mediatorMap[mediatorName];
};

/**
 * Remove a Mediator from the View.
 * 
 * @param {string} mediatorName
 *  Name of the Mediator instance to be removed
 * @return {puremvc.Mediator}
 *  The Mediator that was removed from the View
 */
View.prototype.removeMediator = function(mediatorName)
{
    var mediator = this.mediatorMap[mediatorName];
    if(mediator)
    {
        // for every notification the mediator is interested in...
        var interests = mediator.listNotificationInterests();
        for(var i = 0; i < interests.length; i++)
        {
            // remove the observer linking the mediator to the notification
            // interest
            this.removeObserver(interests[i], mediator);
        }

        // remove the mediator from the map
        delete this.mediatorMap[mediatorName];

        // alert the mediator that it has been removed
        mediator.onRemove();
    }

    return mediator;
};

/**
 * Check if a Mediator is registered or not.
 * 
 * @param {string} mediatorName
 * @return {boolean}
 *  Whether a Mediator is registered with the given mediatorname
 */
View.prototype.hasMediator = function(mediatorName)
{
    return this.mediatorMap[mediatorName] != null;
};

/**
 * Remove a View instance
 * 
 * @return {void}
 */
View.removeView = function(key)
{
    delete View.instanceMap[key];
};

/**
 * @ignore
 * The Views internal mapping of mediator names to mediator instances
 *
 * @type Array
 * @protected
 */
View.prototype.mediatorMap = null;

/**
 * @ignore
 * The Views internal mapping of Notification names to Observer lists
 *
 * @type Array
 * @protected
 */
View.prototype.observerMap = null;

/**
 * @ignore
 * The internal map used to store multiton View instances
 *
 * @type Array
 * @protected
 */
View.instanceMap = [];

/**
 * @ignore
 * The Views internal multiton key.
 *
 * @type string
 * @protected
 */
View.prototype.multitonKey = null;

/**
 * @ignore
 * The error message used if an attempt is made to instantiate View directly
 *
 * @type string
 * @protected
 * @const
 * @static
 */
View.MULTITON_MSG = "View instance for this Multiton key already constructed!";
/**
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.Model
 *
 * A Multiton Model implementation.
 *
 * In PureMVC, the Model class provides
 * access to model objects (Proxies) by named lookup.
 *
 * The Model assumes these responsibilities:
 *
 * - Maintain a cache of {@link puremvc.Proxy Proxy}
 *   instances.
 * - Provide methods for registering, retrieving, and removing
 *   {@link puremvc.Proxy Proxy} instances.
 *
 * Your application must register 
 * {@link puremvc.Proxy Proxy} instances with the Model. 
 * Typically, you use a 
 * {@link puremvc.SimpleCommand SimpleCommand} 
 * or
 * {@link puremvc.MacroCommand MacroCommand} 
 * to create and register Proxy instances once the Facade has initialized the 
 * *Core* actors.
 *
 * This Model implementation is a Multiton, so you should not call the 
 * constructor directly, but instead call the 
 * {@link #getInstance static Multiton Factory method} 
 * @constructor
 * @param {string} key
 *  The Models multiton key
 * @throws {Error}
 *  An error is thrown if this multitons key is already in use by another instance
 */
function Model(key)
{
    if(Model.instanceMap[key])
    {
        throw new Error(Model.MULTITON_MSG);
    }

    this.multitonKey= key;
    Model.instanceMap[key]= this;
    this.proxyMap= [];
    this.initializeModel();
};

/**
 * Initialize the Model instance.
 * 
 * Called automatically by the constructor, this
 * is your opportunity to initialize the Singleton
 * instance in your subclass without overriding the
 * constructor.
 * 
 * @return void
 */
Model.prototype.initializeModel= function(){};


/**
 * Model Multiton Factory method.
 * Note that this method will return null if supplied a null 
 * or undefined multiton key.
 *  
 * @param {string} key
 *  The multiton key for the Model to retrieve
 * @return {puremvc.Model}
 *  the instance for this Multiton key 
 */
Model.getInstance= function(key)
{
	if (null == key)
		return null;
		
    if(Model.instanceMap[key] == null)
    {
        Model.instanceMap[key]= new Model(key);
    }

    return Model.instanceMap[key];
};

/**
 * Register a Proxy with the Model
 * @param {puremvc.Proxy}
 */
Model.prototype.registerProxy= function(proxy)
{
    proxy.initializeNotifier(this.multitonKey);
    this.proxyMap[proxy.getProxyName()]= proxy;
    proxy.onRegister();
};

/**
 * Retrieve a Proxy from the Model
 * 
 * @param {string} proxyName
 * @return {puremvc.Proxy}
 *  The Proxy instance previously registered with the provided proxyName
 */
Model.prototype.retrieveProxy= function(proxyName)
{
    return this.proxyMap[proxyName];
};

/**
 * Check if a Proxy is registered
 * @param {string} proxyName
 * @return {boolean}
 *  whether a Proxy is currently registered with the given proxyName.
 */
Model.prototype.hasProxy= function(proxyName)
{
    return this.proxyMap[proxyName] != null;
};

/**
 * Remove a Proxy from the Model.
 * 
 * @param {string} proxyName
 *  The name of the Proxy instance to remove
 * @return {puremvc.Proxy}
 *  The Proxy that was removed from the Model
 */
Model.prototype.removeProxy= function(proxyName)
{
    var proxy= this.proxyMap[proxyName];
    if(proxy)
    {
        this.proxyMap[proxyName]= null;
        proxy.onRemove();
    }

    return proxy;
};

/**
 * @static
 * Remove a Model instance.
 * 
 * @param {string} key
 * @return {void}
 */
Model.removeModel= function(key)
{
    delete Model.instanceMap[key];
};

/**
 * @ignore
 * The map used by the Model to store Proxy instances.
 *
 * @protected
 * @type Array
 */
Model.prototype.proxyMap= null;

/**
 * @ignore
 * The map used by the Model to store multiton instances
 *
 * @protected
 * @static
 * @type Array
 */
Model.instanceMap= [];

/**
 * @ignore
 * The Models multiton key.
 *
 * @protected
 * @type string
 */
Model.prototype.multitonKey;

/**
 * @ignore
 * Messages Constants
 * 
 * @static
 * @type {string}
 */
Model.MULTITON_MSG= "Model instance for this Multiton key already constructed!";
/**
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.Controller
 * 
 * In PureMVC, the Controller class follows the 'Command and Controller' 
 * strategy, and assumes these responsibilities:
 * 
 * - Remembering which
 * {@link puremvc.SimpleCommand SimpleCommand}s
 * or 
 * {@link puremvc.MacroCommand MacroCommand}s
 * are intended to handle which 
 * {@link puremvc.Notification Notification}s
 * - Registering itself as an 
 * {@link puremvc.Observer Observer} with
 * the {@link puremvc.View View} for each 
 * {@link puremvc.Notification Notification}
 * that it has an 
 * {@link puremvc.SimpleCommand SimpleCommand} 
 * or {@link puremvc.MacroCommand MacroCommand} 
 * mapping for.
 * - Creating a new instance of the proper 
 * {@link puremvc.SimpleCommand SimpleCommand}s
 * or 
 * {@link puremvc.MacroCommand MacroCommand}s
 * to handle a given 
 * {@link puremvc.Notification Notification} 
 * when notified by the
 * {@link puremvc.View View}.
 * - Calling the command's execute method, passing in the 
 * {@link puremvc.Notification Notification}.
 *
 * Your application must register 
 * {@link puremvc.SimpleCommand SimpleCommand}s
 * or {@link puremvc.MacroCommand MacroCommand}s 
 * with the Controller.
 *
 * The simplest way is to subclass 
 * {@link puremvc.Facade Facade},
 * and use its 
 * {@link puremvc.Facade#initializeController initializeController} 
 * method to add your registrations.
 *
 * @constructor
 * This Controller implementation is a Multiton, so you should not call the 
 * constructor directly, but instead call the static #getInstance factory method, 
 * passing the unique key for this instance to it.
 * @param {string} key
 * @throws {Error}
 *  If instance for this Multiton key has already been constructed
 */
function Controller(key)
{
    if(Controller.instanceMap[key] != null)
    {
        throw new Error(Controller.MULTITON_MSG);
    }

    this.multitonKey= key;
    Controller.instanceMap[this.multitonKey]= this;
    this.commandMap= new Array();
    this.initializeController();
}

/**
 * @protected
 * 
 * Initialize the multiton Controller instance.
 *
 * Called automatically by the constructor.
 *
 * Note that if you are using a subclass of View
 * in your application, you should *also* subclass Controller
 * and override the initializeController method in the
 * following way.
 * 
 *     MyController.prototype.initializeController= function ()
 *     {
 *         this.view= MyView.getInstance(this.multitonKey);
 *     };
 * 
 * @return {void}
 */
Controller.prototype.initializeController= function()
{
    this.view= View.getInstance(this.multitonKey);
};

/**
 * The Controllers multiton factory method. 
 * Note that this method will return null if supplied a null 
 * or undefined multiton key. 
 *
 * @param {string} key
 *  A Controller's multiton key
 * @return {puremvc.Controller}
 *  the Multiton instance of Controller
 */
Controller.getInstance= function(key)
{
	if (null == key)
		return null;
		
    if(null == this.instanceMap[key])
    {
        this.instanceMap[key]= new this(key);
    }

    return this.instanceMap[key];
};

/**
 * If a SimpleCommand or MacroCommand has previously been registered to handle
 * the given Notification then it is executed.
 *
 * @param {puremvc.Notification} note
 * @return {void}
 */
Controller.prototype.executeCommand= function(note)
{
    var commandClassRef= this.commandMap[note.getName()];
    if(commandClassRef == null)
        return;

    var commandInstance= new commandClassRef();
    commandInstance.initializeNotifier(this.multitonKey);
    commandInstance.execute(note);
};

/**
 * Register a particular SimpleCommand or MacroCommand class as the handler for 
 * a particular Notification.
 *
 * If an command already been registered to handle Notifications with this name, 
 * it is no longer used, the new command is used instead.
 *
 * The Observer for the new command is only created if this the irst time a
 * command has been regisered for this Notification name.
 *
 * @param {string} notificationName
 *  the name of the Notification
 * @param {Function} commandClassRef
 *  a command constructor
 * @return {void}
 */
Controller.prototype.registerCommand= function(notificationName, commandClassRef)
{
    if(this.commandMap[notificationName] == null)
    {
        this.view.registerObserver(notificationName, new Observer(this.executeCommand, this));
    }

    this.commandMap[notificationName]= commandClassRef;
};

/**
 * Check if a command is registered for a given Notification
 *
 * @param {string} notificationName
 * @return {boolean}
 *  whether a Command is currently registered for the given notificationName.
 */
Controller.prototype.hasCommand= function(notificationName)
{
    return this.commandMap[notificationName] != null;
};

/**
 * Remove a previously registered command to
 * {@link puremvc.Notification Notification}
 * mapping.
 *
 * @param {string} notificationName
 *  the name of the Notification to remove the command mapping for
 * @return {void}
 */
Controller.prototype.removeCommand= function(notificationName)
{
    if(this.hasCommand(notificationName))
    {
        this.view.removeObserver(notificationName, this);
        this.commandMap[notificationName]= null;
    }
};

/**
 * @static
 * Remove a Controller instance.
 *
 * @param {string} key 
 *  multitonKey of Controller instance to remove
 * @return {void}
 */
Controller.removeController= function(key)
{
    delete this.instanceMap[key];
};

/**
 * Local reference to the Controller's View
 * 
 * @protected
 * @type {puremvc.View}
 */
Controller.prototype.view= null;

/**
 * Note name to command constructor mappings
 * 
 * @protected
 * @type {Object}
 */
Controller.prototype.commandMap= null;

/**
 * The Controller's multiton key
 * 
 * @protected
 * @type {string}
 */
Controller.prototype.multitonKey= null;

/**
 * Multiton key to Controller instance mappings
 * 
 * @static
 * @protected
 * @type {Object}
 */
Controller.instanceMap= [];

/**
 * @ignore
 * 
 * Messages constants
 * @static
 * @protected
 * @type {string}
 */
Controller.MULTITON_MSG= "controller key for this Multiton key already constructed"
/*
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @hide
 * A an internal helper class used to assist classlet implementation. This
 * class is not accessible by client code.
 */
var OopHelp=
{
    /*
     * @private
     * A reference to the global scope. We use this rather than window
     * in order to support both browser based and non browser baed 
     * JavaScript interpreters.
     * @type {Object}
     */
	global: (function(){return this})()
    
    /*
     * @private
     * Extend one Function's prototype by another, emulating classic
     * inheritance.
     * 
     * @param {Function} child
     *  The Function to extend (subclass)
     * 
     * @param {Function} parent
     *  The Function to extend from (superclass)
     * 
     * @return {Function}
     * 
     *  A reference to the extended Function (subclass)
     */
,   extend: function (child, parent)
    {
        if ('function' !== typeof child)
            throw new TypeError('#extend- child should be Function');            
        
        if ('function' !== typeof parent)
            throw new TypeError('#extend- parent should be Function');
            
        if (parent === child)
            return;
            
        var Transitive= new Function;
        Transitive.prototype= parent.prototype;
        child.prototype= new Transitive;
        return child.prototype.constructor= child;
    }
    
    /*
     * @private
     * Decoarate one object with the properties of another. 
     * 
     * @param {Object} object
     *  The object to decorate.
     * 
     * @param {Object} traits
     *  The object providing the properites that the first object
     *  will be decorated with. Note that only properties defined on 
     *  this object will be copied- i.e. inherited properties will
     *  be ignored.
     * 
     * @return {Object}
     *  THe decorated object (first argument)
     */
,   decorate: function (object, traits)
    {   
        for (var accessor in traits)
        {
            object[accessor]= traits[accessor];
        }    
        
        return object;
    }
};


/**
 * @member puremvc
 * 
 * Declare a namespace and optionally make an Object the referent
 * of that namespace.
 * 
 *     console.assert(null == window.tld, 'No tld namespace');
 *     // declare the tld namespace
 *     puremvc.declare('tld');
 *     console.assert('object' === typeof tld, 'The tld namespace was declared');
 * 
 *     // the method returns a reference to last namespace node in a created hierarchy
 *     var reference= puremvc.declare('tld.domain.app');
 *     console.assert(reference === tld.domain.app)
 *    
 *     // of course you can also declare your own objects as well
 *     var AppConstants=
 *         {
 * 	           APP_NAME: 'tld.domain.app.App'
 *         };
 * 
 *     puremvc.declare('tld.domain.app.AppConstants', AppConstants);
 *     console.assert(AppConstants === tld.domain.app.AppConstants
 * 	   , 'AppConstants was exported to the namespace');
 * 
 * Note that you can also #declare within a closure. That way you
 * can selectively export Objects to your own namespaces without
 * leaking variables into the global scope.
 *    
 *     (function(){
 *         // this var is not accessible outside of this
 *         // closures call scope
 *         var hiddenValue= 'defaultValue';
 * 
 *         // export an object that references the hidden
 *         // variable and which can mutate it
 *         puremvc.declare
 *         (
 *              'tld.domain.app.backdoor'
 * 
 *         ,    {
 *                  setValue: function (value)
 *                  {
 *                      // assigns to the hidden var
 *                      hiddenValue= value;
 *                  }
 * 
 *         ,        getValue: function ()
 *                  {
 *                      // reads from the hidden var
 *                      return hiddenValue;
 *                  }
 *              }
 *         );
 *     })();
 *     // indirectly retrieve the hidden variables value
 *     console.assert('defaultValue' === tld.domain.app.backdoor.getValue());
 *     // indirectly set the hidden variables value
 *     tld.domain.app.backdoor.setValue('newValue');
 *     // the hidden var was mutated
 *     console.assert('newValue' === tld.domain.app.backdoor.getValue());
 * 
 * On occasion, primarily during testing, you may want to use declare, 
 * but not have the global object be the namespace root. In these cases you
 * can supply the optional third scope argument.
 * 
 *     var localScope= {}
 *     ,   object= {}
 * 
 *     puremvc.declare('mock.object', object, localScope);
 * 
 *     console.assert(null == window.mock, 'mock namespace is not in global scope');
 *     console.assert(object === localScope.mock.object, 'mock.object is available in localScope');    
 * 
 * @param {string} string
 *  A qualified object name, e.g. 'com.example.Class'
 * 
 * @param {Object} [object]
 *  An object to make the referent of the namespace. 
 * 
 * @param {Object} [scope]
 *  The namespace's root node. If not supplied, the global
 *  scope will be namespaces root node.
 * 
 * @return {Object}
 * 
 *  A reference to the last node of the Object hierarchy created.
 */
function declare (qualifiedName, object, scope)
{
    var nodes= qualifiedName.split('.')
    ,   node= scope || OopHelp.global
    ,   lastNode
    ,   newNode
    ,   nodeName;
                
    for (var i= 0, n= nodes.length; i < n; i++)
    {
        lastNode= node;
        nodeName= nodes[i];
        
        node= (null == node[nodeName] ? node[nodeName] = {} : node[nodeName]);
    }
                    
    if (null == object)
        return node;
                        
    return lastNode[nodeName]= object;
};




/**
 * @member puremvc
 * 
 * Define a new classlet. Current editions of JavaScript do not have classes,
 * but they can be emulated, and this method does this for you, saving you
 * from having to work with Function prototype directly. The method does
 * not extend any Native objects and is entirely opt in. Its particularly
 * usefull if you want to make your PureMvc applications more portable, by
 * decoupling them from a specific OOP abstraction library.
 * 
 * 
 *     puremvc.define
 *     (
 *         // the first object supplied is a class descriptor. None of these
 *         // properties are added to your class, the exception being the
 *         // constructor property, which if supplied, will be your classes
 *         // constructor.
 *         {
 *             // your classes namespace- if supplied, it will be 
 *             // created for you
 *             name: 'com.example.UserMediator'
 * 
 *             // your classes parent class. If supplied, inheritance 
 *             // will be taken care of for you
 *         ,   parent: puremvc.Mediator
 * 
 *             // your classes constructor. If not supplied, one will be 
 *             // created for you
 *         ,   constructor: function UserMediator (component)
 *             {
 *                  puremvc.Mediator.call(this, this.constructor.NAME, component);  
 *             }
 *         }
 *         
 *         // the second object supplied defines your class traits, that is
 *         // the properties that will be defined on your classes prototype
 *         // and thereby on all instances of this class
 *     ,   {
 *             businessMethod: function ()
 *             {
 *                 // impl 
 *             }
 *         }
 * 
 *         // the third object supplied defines your classes 'static' traits
 *         // that is, the methods and properties which will be defined on
 *         // your classes constructor
 *     ,   {
 *             NAME: 'userMediator'
 *         }
 *     );
 * 
 * @param {Object} [classinfo]
 *  An object describing the class. This object can have any or all of
 *  the following properties:
 * 
 *  - name: String  
 *      The classlets name. This can be any arbitrary qualified object
 *      name. 'com.example.Classlet' or simply 'MyClasslet' for example 
 *      The method will automatically create an object hierarchy refering
 *      to your class for you. Note that you will need to capture the 
 *      methods return value to retrieve a reference to your class if the
 *      class name property is not defined.

 *  - parent: Function
 *      The classlets 'superclass'. Your class will be extended from this
 *      if supplied.
 * 
 *  - constructor: Function
 *      The classlets constructor. Note this is *not* a post construct 
 *      initialize method, but your classes constructor Function.
 *      If this attribute is not defined, a constructor will be created for 
 *      you automatically. If you have supplied a parent class
 *      value and not defined the classes constructor, the automatically
 *      created constructor will invoke the super class constructor
 *      automatically. If you have supplied your own constructor and you
 *      wish to invoke it's super constructor, you must do this manually, as
 *      there is no reference to the classes parent added to the constructor
 *      prototype.
 *      
 *  - scope: Object.
 *      For use in advanced scenarios. If the name attribute has been supplied,
 *      this value will be the root of the object hierarchy created for you.
 *      Use it do define your own class hierarchies in private scopes,
 *      accross iFrames, in your unit tests, or avoid collision with third
 *      party library namespaces.
 * 
 * @param {Object} [traits]
 *  An Object, the properties of which will be added to the
 *  class constructors prototype.
 * 
 * @param {Object} [staitcTraits]
 *  An Object, the properties of which will be added directly
 *  to this class constructor
 * 
 * @return {Function}
 *  A reference to the classlets constructor
 */
function define (classInfo, traits, staticTraits)
{
    if (!classInfo)
    {
        classInfo= {}
    }

    var className= classInfo.name
    ,   classParent= classInfo.parent
    ,   doExtend= 'function' === typeof classParent
    ,   classConstructor
    ,   classScope= classInfo.scope || null
    ,   prototype

    if ('parent' in classInfo && !doExtend)
    {
        throw new TypeError('Class parent must be Function');
    }
        
    if (classInfo.hasOwnProperty('constructor'))
    {
        classConstructor= classInfo.constructor
        if ('function' !== typeof classConstructor)
        {
            throw new TypeError('Class constructor must be Function')
        }   
    }
    else // there is no constructor, create one
    {
        if (doExtend) // ensure to call the super constructor
        {
            classConstructor= function ()
            {
                classParent.apply(this, arguments);
            }
        }
        else // just create a Function
        {
            classConstructor= new Function;
        } 
    }

    if (doExtend)
    {
        OopHelp.extend(classConstructor, classParent);
    }
    
    if (traits)
    {
        prototype= classConstructor.prototype
        OopHelp.decorate(prototype, traits);
        // reassign constructor 
        prototype.constructor= classConstructor;
    }
    
    if (staticTraits)
    {
        OopHelp.decorate(classConstructor, staticTraits)
    }
    
    if (className)
    {
        if ('string' !== typeof className)
        {
            throw new TypeError('Class name must be primitive string');
        }
            
        declare (className, classConstructor, classScope);
    }    
    
    return classConstructor;            
};


	
 	/* implementation end */
 	 
 	// define the puremvc global namespace and export the actors
var puremvc =
 	{
 		View: View
 	,	Model: Model
 	,	Controller: Controller
 	,	SimpleCommand: SimpleCommand
 	,	MacroCommand: MacroCommand
 	,	Facade: Facade
 	,	Mediator: Mediator
 	,	Observer: Observer
 	,	Notification: Notification
 	,	Notifier: Notifier
 	,	Proxy: Proxy
 	,	define: define
 	,	declare: declare
 	};



module.exports = puremvc;
},{}],30:[function(require,module,exports){
/**
 * @fileOverview
 * PureMVC State Machine Utility JS Native Port by Saad Shams
 * Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * Reuse governed by Creative Commons Attribution 3.0
 * http://creativecommons.org/licenses/by/3.0/us/
 * @author saad.shams@puremvc.org
 */

var puremvc = require( './puremvc-1.0.1-mod.js' );

/**
 * Constructor
 *
 * Defines a State.
 * @method State
 * @param {string} name id the id of the state
 * @param {string} entering an optional notification name to be sent when entering this state
 * @param {string} exiting an optional notification name to be sent when exiting this state
 * @param {string} changed an optional notification name to be sent when fully transitioned to this state
 * @return
 */

function State(name, entering, exiting, changed) {
    this.name = name;
    if(entering) this.entering = entering;
    if(exiting) this.exiting = exiting;
    if(changed) this.changed = changed;
    this.transitions = {};
}

/**
 * Define a transition.
 * @method defineTrans
 * @param {string} action the name of the StateMachine.ACTION Notification type.
 * @param {string} target the name of the target state to transition to.
 * @return
 */
State.prototype.defineTrans = function(action, target) {
    if(this.getTarget(action) != null) return;
    this.transitions[action] = target;
}

/**
 * Remove a previously defined transition.
 * @method removeTrans
 * @param {string} action
 * @return
 */
State.prototype.removeTrans = function(action) {
    delete this.transitions[action];
}

/**
 * Get the target state name for a given action.
 * @method getTarget
 * @param {string} action
 * @return State
 */
/**
 *
 */
State.prototype.getTarget = function(action) {
    return this.transitions[action] ? this.transitions[action] : null;
}

// The state name
State.prototype.name = null;

// The notification to dispatch when entering the state
State.prototype.entering = null;

// The notification to dispatch when exiting the state
State.prototype.exiting = null;

// The notification to dispatch when the state has actually changed
State.prototype.changed = null;

/**
 *  Transition map of actions to target states
 */
State.prototype.transitions = null;



 /**
 * A Finite State Machine implimentation.
 * <P>
 * Handles regisistration and removal of state definitions,
 * which include optional entry and exit commands for each
 * state.</P>
 */

/**
 * Constructor
 *
 * @method StateMachine
 * @return
 */
function StateMachine(name) {
    puremvc.Mediator.call(this, name, null);
    this.states = {};
    this.ACTION = name + "/notes/action";
    this.CANCEL = name + "/notes/cancel";
    this.CHANGED = name + "/notes/changed";
}

StateMachine.prototype = new puremvc.Mediator;
StateMachine.prototype.constructor = StateMachine;

/**
 * Transitions to initial state once registered with Facade
 * @method onRegister
 * @return
 */
StateMachine.prototype.onRegister = function() {
    if(this.initial) this.transitionTo(this.initial, null);
}

/**
 * Registers the entry and exit commands for a given state.
 * @method registerState
 * @param {State} state the state to which to register the above commands
 * @param {boolean} initial boolean telling if this is the initial state of the system
 * @return
 */
StateMachine.prototype.registerState = function(state, initial) {
    if(state == null || this.states[state.name] != null) return;
    this.states[state.name] = state;
    if(initial) this.initial = state;
}

/**
 * Remove a state mapping. Removes the entry and exit commands for a given state as well as the state mapping itself.
 * @method removeState
 * @param {string} stateName
 * @return
 */
StateMachine.prototype.removeState = function(stateName) {
    var state = this.states[stateName];
    if(state == null) return;
    this.states[stateName] = null;
}

/**
 * Transitions to the given state from the current state.
 * <P>
 * Sends the <code>exiting</code> notification for the current state
 * followed by the <code>entering</code> notification for the new state.
 * Once finally transitioned to the new state, the <code>changed</code>
 * notification for the new state is sent.</P>
 * <P>
 * If a data parameter is provided, it is included as the body of all
 * three state-specific transition notes.</P>
 * <P>
 * Finally, when all the state-specific transition notes have been
 * sent, a <code>StateMachine.CHANGED</code> note is sent, with the
 * new <code>State</code> object as the <code>body</code> and the name of the
 * new state in the <code>type</code>.
 *
 * @method transitionTo
 * @param {State} nextState the next State to transition to.
 * @param {Object} data is the optional Object that was sent in the <code>StateMachine.ACTION</code> notification body
 * @return
 */
StateMachine.prototype.transitionTo = function(nextState, data) {
    // Going nowhere?
    if(nextState == null) return;

    // Clear the cancel flag
    this.canceled = false;

    // Exit the current State
    if(this.getCurrentState() && this.getCurrentState().exiting)
        this.sendNotification(this.getCurrentState().exiting, data, nextState.name);

    // Check to see whether the exiting guard has canceled the transition
    if(this.canceled) {
        this.canceled = false;
        return;
    }

    // Enter the next State
    if(nextState.entering)
        this.sendNotification(nextState.entering, data);

    // Check to see whether the entering guard has canceled the transition
    if(this.canceled) {
        this.canceled = false;
        return;
    }

    // change the current state only when both guards have been passed
    this.setCurrentState(nextState);

    // Send the notification configured to be sent when this specific state becomes current
    if(nextState.changed) {
        this.sendNotification(this.getCurrentState().changed, data);
    }

    // Notify the app generally that the state changed and what the new state is
    this.sendNotification(this.CHANGED, this.getCurrentState(), this.getCurrentState().name);
}

/**
 * Notification interests for the StateMachine.
 * @method listNotificationInterests
 * @return {Array} Array of Notifications
 */

StateMachine.prototype.listNotificationInterests = function() {
    return [
        this.ACTION,
        this.CANCEL
    ];
}

/**
 * Handle notifications the <code>StateMachine</code> is interested in.
 * <P>
 * <code>StateMachine.ACTION</code>: Triggers the transition to a new state.<BR>
 * <code>StateMachine.CANCEL</code>: Cancels the transition if sent in response to the exiting note for the current state.<BR>
 *
 * @method handleNotification
 * @param {Notification} notification
 * @return
 */
StateMachine.prototype.handleNotification = function(notification) {
    switch(notification.getName()) {
        case this.ACTION:
            var action = notification.getType();
            var target = this.getCurrentState().getTarget(action);
            var newState = this.states[target];
            if(newState) this.transitionTo(newState, notification.getBody());
            break;

        case this.CANCEL:
            this.canceled = true;
            break;
    }
}

/**
 * Get the current state.
 * @method getCurrentState
 * @return a State defining the machine's current state
 */
StateMachine.prototype.getCurrentState = function() {
    return this.viewComponent;
}

/**
 * Set the current state.
 * @method setCurrentState
 * @param {State} state
 * @return
 */
StateMachine.prototype.setCurrentState = function(state) {
    this.viewComponent = state;
}

/**
 * Map of States objects by name.
 */
StateMachine.prototype.states = null;

/**
 * The initial state of the FSM.
 */
StateMachine.prototype.initial = null;

/**
 * The transition has been canceled.
 */
StateMachine.prototype.canceled = null;

StateMachine.NAME = "StateMachine";

/**
 * Action Notification name.
 */
StateMachine.ACTION = StateMachine.NAME + "/notes/action";

/**
 *  Changed Notification name
 */
StateMachine.CHANGED = StateMachine.NAME + "/notes/changed";

/**
 *  Cancel Notification name
 */
StateMachine.CANCEL = StateMachine.NAME + "/notes/cancel";


/**
 * Creates and registers a StateMachine described in JSON.
 *
 * <P>
 * This allows reconfiguration of the StateMachine
 * without changing any code, as well as making it
 * easier than creating all the <code>State</code>
 * instances and registering them with the
 * <code>StateMachine</code> at startup time.
 *
 * @ see State
 * @ see StateMachine
 */

/**
 * Constructor
 * @method FSMInjector
 * @param {Object} fsm JSON Object
 * @return
 */
function FSMInjector(fsm) {
    puremvc.Notifier.call(this);
    this.fsm = fsm;
}

FSMInjector.prototype = new puremvc.Notifier;
FSMInjector.prototype.constructor = FSMInjector;

/**
 * Inject the <code>StateMachine</code> into the PureMVC apparatus.
 * <P>
 * Creates the <code>StateMachine</code> instance, registers all the states
 * and registers the <code>StateMachine</code> with the <code>IFacade</code>.
 * @method inject
 * @return
 */
FSMInjector.prototype.inject = function(name) {
    // Create the StateMachine
    var stateMachine = new puremvc.statemachine.StateMachine(name);

    // Register all the states with the StateMachine
    var states = this.getStates();
    for(var i=0; i<states.length; i++) {
        stateMachine.registerState(states[i], this.isInitial(states[i].name));
    }

    // Register the StateMachine with the facade
    this.facade.registerMediator(stateMachine);
    return stateMachine;
}

/**
 * Get the state definitions.
 * <P>
 * Creates and returns the array of State objects
 * from the FSM on first call, subsequently returns
 * the existing array.</P>
 *
 * @method getStates
 * @return {Array} Array of States
 */
FSMInjector.prototype.getStates = function() {
    if(this.stateList == null) {
        this.stateList = [];

        var stateDefs = this.fsm.state ? this.fsm.state : [];
        for(var i=0; i<stateDefs.length; i++) {
            var stateDef = stateDefs[i];
            var state = this.createState(stateDef);
            this.stateList.push(state);
        }
    }
    return this.stateList;
}

/**
 * Creates a <code>State</code> instance from its JSON definition.
 * @method createState
 * @param {Object} stateDef JSON Object
 * @return {State}
 */
/**

 */
FSMInjector.prototype.createState = function(stateDef) {
    // Create State object
    var name = stateDef['@name'];
    var exiting = stateDef['@exiting'];
    var entering = stateDef['@entering'];
    var changed = stateDef['@changed'];
    var state = new puremvc.statemachine.State(name, entering, exiting, changed);

    // Create transitions
    var transitions = stateDef.transition ? stateDef.transition : [];
    for(var i=0; i<transitions.length; i++) {
        var transDef = transitions[i];
        state.defineTrans(transDef['@action'], transDef['@target']);
    }
    return state;
}

/**
 * Is the given state the initial state?
 * @method isInitial
 * @param {string} stateName
 * @return {boolean}
 */
FSMInjector.prototype.isInitial = function(stateName) {
    var initial = this.fsm['@initial'];
    return stateName == initial;
}

// The JSON FSM definition
FSMInjector.prototype.fsm = null;

// The List of State objects
FSMInjector.prototype.stateList = null;


puremvc.statemachine =
{
    State: State
    ,	StateMachine: StateMachine
    ,	FSMInjector: FSMInjector
};

module.exports = puremvc.statemachine;

},{"./puremvc-1.0.1-mod.js":29}],31:[function(require,module,exports){
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImpzL0FwcEZhY2FkZS5qcyIsImpzL1Jlc291cmNlcy5qcyIsImpzL2FwcC5qcyIsImpzL2NvbnRyb2xsZXIvY29tbWFuZC9QcmVwQ29udHJvbGxlckNvbW1hbmQuanMiLCJqcy9jb250cm9sbGVyL2NvbW1hbmQvUHJlcE1vZGVsQ29tbWFuZC5qcyIsImpzL2NvbnRyb2xsZXIvY29tbWFuZC9QcmVwVmlld0NvbW1hbmQuanMiLCJqcy9jb250cm9sbGVyL2NvbW1hbmQvUnVuR2FtZUNvbW1hbmQuanMiLCJqcy9jb250cm9sbGVyL2NvbW1hbmQvU3RhcnR1cENvbW1hbmQuanMiLCJqcy9jb250cm9sbGVyL2NvbW1hbmQvV3JpdGVMb2dDb21tYW5kLmpzIiwianMvZGVmaW5lL0NvbW1hbmQuanMiLCJqcy9kZWZpbmUvTWVzc2FnZS5qcyIsImpzL2ZzbS9Sb2JvdEZTTS5qcyIsImpzL2ZzbS9mc20uanMiLCJqcy9saWIvVUlMb2FkZXIuanMiLCJqcy9saWIvZW1pdHRlci5qcyIsImpzL21vZGVsL3Byb3h5L0dhbWVQcm94eS5qcyIsImpzL3Jlc291cmNlLmpzIiwianMvdmlldy9jb21wb25lbnQvQ2l0eUxheWVyLmpzIiwianMvdmlldy9jb21wb25lbnQvQ291bnRyeUxheWVyLmpzIiwianMvdmlldy9jb21wb25lbnQvR2FtZUxheWVyLmpzIiwianMvdmlldy9jb21wb25lbnQvTG9nb0xheWVyLmpzIiwianMvdmlldy9tZWRpYXRvci9DaXR5TWVkaWF0b3IuanMiLCJqcy92aWV3L21lZGlhdG9yL0NvdW50cnlNZWRpYXRvci5qcyIsImpzL3ZpZXcvbWVkaWF0b3IvR2FtZU1lZGlhdG9yLmpzIiwianMvdmlldy9tZWRpYXRvci9Mb2dvTWVkaWF0b3IuanMiLCJqcy92aWV3L21lZGlhdG9yL1NjZW5lTWVkaWF0b3IuanMiLCJqcy92aWV3L3dpZGdldC9CYXNlTGF5ZXIuanMiLCJub2RlX21vZHVsZXMvcHVyZW12Yy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wdXJlbXZjL2xpYi9wdXJlbXZjLTEuMC4xLW1vZC5qcyIsIm5vZGVfbW9kdWxlcy9wdXJlbXZjL2xpYi9wdXJlbXZjLXN0YXRlbWFjaGluZS0xLjAtbW9kLmpzIiwibm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvdW5kZXJzY29yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3phQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3g1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHp4aCBvbiAxNS8xMC85LlxuICovXG5cInVzZSBzdHJpY3RcIlxuXG52YXIgcHVyZW12YyA9IHJlcXVpcmUoJ3B1cmVtdmMnKS5wdXJlbXZjO1xudmFyIFN0YXJ0dXBDb21tYW5kID0gcmVxdWlyZSgnLi9jb250cm9sbGVyL2NvbW1hbmQvU3RhcnR1cENvbW1hbmQuanMnKTtcblxudmFyIFJ1bkdhbWVDb21tYW5kID0gcmVxdWlyZSgnLi9jb250cm9sbGVyL2NvbW1hbmQvUnVuR2FtZUNvbW1hbmQuanMnKTtcbnZhciBXcml0ZUxvZ0NvbW1hbmQgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXIvY29tbWFuZC9Xcml0ZUxvZ0NvbW1hbmQuanMnKTtcblxudmFyIEFwcEZhY2FkZSA9IHB1cmVtdmMuZGVmaW5lKFxuICAgIC8vIENMQVNTIElORk9cbiAgICB7XG4gICAgICAgIG5hbWU6ICdBcHBGYWNhZGUnLFxuICAgICAgICBwYXJlbnQ6IHB1cmVtdmMuRmFjYWRlLFxuICAgICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gKG11bHRpdG9uS2V5KSB7XG4gICAgICAgICAgICBwdXJlbXZjLkZhY2FkZS5jYWxsKHRoaXMsIG11bHRpdG9uS2V5KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBJTlNUQU5DRSBNRU1CRVJTXG4gICAge1xuICAgICAgICBpbml0aWFsaXplQ29udHJvbGxlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcHVyZW12Yy5GYWNhZGUucHJvdG90eXBlLmluaXRpYWxpemVDb250cm9sbGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQ29tbWFuZChBcHBGYWNhZGUuU1RBUlRVUCwgU3RhcnR1cENvbW1hbmQpO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckNvbW1hbmQoQ29tbWFuZC5SVU5fR0FNRSwgUnVuR2FtZUNvbW1hbmQpO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckNvbW1hbmQoQ29tbWFuZC5XUklURV9MT0csIFdyaXRlTG9nQ29tbWFuZCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdGlhbGl6ZU1vZGVsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwdXJlbXZjLkZhY2FkZS5wcm90b3R5cGUuaW5pdGlhbGl6ZU1vZGVsLmNhbGwodGhpcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdGlhbGl6ZVZpZXc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHB1cmVtdmMuRmFjYWRlLnByb3RvdHlwZS5pbml0aWFsaXplVmlldy5jYWxsKHRoaXMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHN0YXJ0dXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbihBcHBGYWNhZGUuU1RBUlRVUCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gU1RBVElDIE1FTUJFUlNcbiAgICB7XG4gICAgICAgIGdldEluc3RhbmNlOiBmdW5jdGlvbihtdWx0aXRvbktleSkge1xuICAgICAgICAgICAgdmFyIGluc3RhbmNlTWFwID0gcHVyZW12Yy5GYWNhZGUuaW5zdGFuY2VNYXA7XG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFttdWx0aXRvbktleV07XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2xvYmFsLmZhY2FkZSA9IGluc3RhbmNlTWFwW211bHRpdG9uS2V5XSA9IG5ldyBBcHBGYWNhZGUobXVsdGl0b25LZXkpO1xuICAgICAgICB9LFxuICAgICAgICBOQU1FOiAnQXBwRmFjYWRlJyxcbiAgICAgICAgU1RBUlRVUDogJ1N0YXJ0VXAnXG4gICAgfVxuKTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBGYWNhZGU7XG4iLCJyZXMgPSB7XG5cImhhc2hGaWxlXCI6e1xuICAgIFwiTU0yMF9QTkdcIjpcInVpL01haW5NZW51L01NMjAucG5nXCIsXG4gICAgXCJNTTEyX1BOR1wiOlwidWkvTWFpbk1lbnUvTU0xMi5wbmdcIixcbiAgICBcIkJBUzMxX1BOR1wiOlwidWkvTG9naW4vQmFTMzEucG5nXCIsXG4gICAgXCJST0JPVF9YTUxcIjpcImFybWF0dXJlL3JvYm90LnhtbFwiLFxuICAgIFwiTU0wNF9QTkdcIjpcInVpL01haW5NZW51L01NMDQucG5nXCIsXG4gICAgXCJNTTAzX1BOR1wiOlwidWkvTWFpbk1lbnUvTU0wMy5wbmdcIixcbiAgICBcIkxJMDdfSlBHXCI6XCJ1aS9Mb2dpbi9MSTA3LmpwZ1wiLFxuICAgIFwiV09STERfNF9QTElTVFwiOlwidWkvV29ybGQvV29ybGRfNC5wbGlzdFwiLFxuICAgIFwiTEFZRVJfSlNPTlwiOlwidWkvTGF5ZXIuanNvblwiLFxuICAgIFwiV09STERfNF9QTkdcIjpcInVpL1dvcmxkL1dvcmxkXzQucG5nXCIsXG4gICAgXCJNTTEwX1BOR1wiOlwidWkvTWFpbk1lbnUvTU0xMC5wbmdcIixcbiAgICBcIlJPQk9UX1BMSVNUXCI6XCJhcm1hdHVyZS9yb2JvdC5wbGlzdFwiLFxuICAgIFwiSVNPX1BOR1wiOlwidWkvaXNvLnBuZ1wiLFxuICAgIFwiTU0wMl9QTkdcIjpcInVpL01haW5NZW51L01NMDIucG5nXCIsXG4gICAgXCJNTTE5X1BOR1wiOlwidWkvTWFpbk1lbnUvTU0xOS5wbmdcIixcbiAgICBcIk1NMDFfUE5HXCI6XCJ1aS9NYWluTWVudS9NTTAxLnBuZ1wiLFxuICAgIFwiV09STERfMV9QTElTVFwiOlwidWkvV29ybGQvV29ybGRfMS5wbGlzdFwiLFxuICAgIFwiTU0xOF9QTkdcIjpcInVpL01haW5NZW51L01NMTgucG5nXCIsXG4gICAgXCJXT1JMRE1BUF9UTVhcIjpcInVpL1dvcmxkTWFwLnRteFwiLFxuICAgIFwiTUFJTk1FTlVfSlNPTlwiOlwidWkvTWFpbk1lbnUuanNvblwiLFxuICAgIFwiVElMRV9JU09fT0ZGU0VUX1BOR1wiOlwidWkvdGlsZV9pc29fb2Zmc2V0LnBuZ1wiLFxuICAgIFwiTU0xN19QTkdcIjpcInVpL01haW5NZW51L01NMTcucG5nXCIsXG4gICAgXCJMT0dJTl9KU09OXCI6XCJ1aS9Mb2dpbi5qc29uXCIsXG4gICAgXCJNTTA5X1BOR1wiOlwidWkvTWFpbk1lbnUvTU0wOS5wbmdcIixcbiAgICBcIldPUkxEXzFfUE5HXCI6XCJ1aS9Xb3JsZC9Xb3JsZF8xLnBuZ1wiLFxuICAgIFwiSEVMTE9XT1JMRF9QTkdcIjpcIkhlbGxvV29ybGQucG5nXCIsXG4gICAgXCJNTTI0X1BOR1wiOlwidWkvTWFpbk1lbnUvTU0yNC5wbmdcIixcbiAgICBcIkNPTlRSWUxBWUVSX0pTT05cIjpcInVpL0NvbnRyeUxheWVyLmpzb25cIixcbiAgICBcIk1NMTZfUE5HXCI6XCJ1aS9NYWluTWVudS9NTTE2LnBuZ1wiLFxuICAgIFwiTU0wOF9QTkdcIjpcInVpL01haW5NZW51L01NMDgucG5nXCIsXG4gICAgXCJUSUxFX0lTT19PRkZTRVRfVE1YXCI6XCJ1aS90aWxlX2lzb19vZmZzZXQudG14XCIsXG4gICAgXCJNTTIzX1BOR1wiOlwidWkvTWFpbk1lbnUvTU0yMy5wbmdcIixcbiAgICBcIlJPQk9UX1BOR1wiOlwiYXJtYXR1cmUvcm9ib3QucG5nXCIsXG4gICAgXCJNTTE1X1BOR1wiOlwidWkvTWFpbk1lbnUvTU0xNS5wbmdcIixcbiAgICBcIk1NMDdfUE5HXCI6XCJ1aS9NYWluTWVudS9NTTA3LnBuZ1wiLFxuICAgIFwiTU0yMl9QTkdcIjpcInVpL01haW5NZW51L01NMjIucG5nXCIsXG4gICAgXCJNTTE0X1BOR1wiOlwidWkvTWFpbk1lbnUvTU0xNC5wbmdcIixcbiAgICBcIk1NMDZfUE5HXCI6XCJ1aS9NYWluTWVudS9NTTA2LnBuZ1wiLFxuICAgIFwiTU0yMV9QTkdcIjpcInVpL01haW5NZW51L01NMjEucG5nXCIsXG4gICAgXCJCQVMzMl9QTkdcIjpcInVpL0xvZ2luL0JhUzMyLnBuZ1wiLFxuICAgIFwiTU0xM19QTkdcIjpcInVpL01haW5NZW51L01NMTMucG5nXCIsXG4gICAgXCJNTTA1X1BOR1wiOlwidWkvTWFpbk1lbnUvTU0wNS5wbmdcIixcbiAgICBcIklTTy1URVNUMV9UTVhcIjpcInVpL2lzby10ZXN0MS50bXhcIlxuIH0sXG5cblwiZ3JvdXBzXCI6e1xuICAgIFwibG9nb1wiOltcbiAgICAgICAgXCJCQVMzMl9QTkdcIixcbiAgICAgICAgXCJMSTA3X0pQR1wiLFxuICAgICAgICBcIkxPR0lOX0pTT05cIixcbiAgICAgICAgXCJCQVMzMV9QTkdcIlxuICAgICBdLFxuICAgIFwid29ybGRcIjpbXG4gICAgICAgIFwiV09STERfNF9QTElTVFwiLFxuICAgICAgICBcIldPUkxEXzRfUE5HXCIsXG4gICAgICAgIFwiV09STERfMV9QTElTVFwiLFxuICAgICAgICBcIldPUkxEXzFfUE5HXCJcbiAgICAgXSxcbiAgICBcInJvYm90XCI6W1xuICAgICAgICBcIlJPQk9UX1BOR1wiLFxuICAgICAgICBcIlJPQk9UX1BMSVNUXCIsXG4gICAgICAgIFwiUk9CT1RfWE1MXCJcbiAgICAgXSxcbiAgICBcIk1haW5NZW51XCI6W1xuICAgICAgICBcIk1NMjJfUE5HXCIsXG4gICAgICAgIFwiTU0yM19QTkdcIixcbiAgICAgICAgXCJNTTI0X1BOR1wiLFxuICAgICAgICBcIk1NMTBfUE5HXCIsXG4gICAgICAgIFwiTU0xMl9QTkdcIixcbiAgICAgICAgXCJNTTEzX1BOR1wiLFxuICAgICAgICBcIk1NMTRfUE5HXCIsXG4gICAgICAgIFwiTU0xNV9QTkdcIixcbiAgICAgICAgXCJNTTE2X1BOR1wiLFxuICAgICAgICBcIk1NMTdfUE5HXCIsXG4gICAgICAgIFwiTU0wMV9QTkdcIixcbiAgICAgICAgXCJNTTAyX1BOR1wiLFxuICAgICAgICBcIk1NMThfUE5HXCIsXG4gICAgICAgIFwiTU0wM19QTkdcIixcbiAgICAgICAgXCJNTTE5X1BOR1wiLFxuICAgICAgICBcIk1NMDRfUE5HXCIsXG4gICAgICAgIFwiTU0wNV9QTkdcIixcbiAgICAgICAgXCJNTTA2X1BOR1wiLFxuICAgICAgICBcIk1NMDdfUE5HXCIsXG4gICAgICAgIFwiTUFJTk1FTlVfSlNPTlwiLFxuICAgICAgICBcIk1NMDhfUE5HXCIsXG4gICAgICAgIFwiTU0wOV9QTkdcIixcbiAgICAgICAgXCJNTTIwX1BOR1wiLFxuICAgICAgICBcIk1NMjFfUE5HXCJcbiAgICAgXVxuICAgfVxuXG59O1xuXG52YXIgUmVzTWFuYWdlciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ3JvdXBzID0gcmVzLmdyb3Vwcztcbn07XG5cblJlc01hbmFnZXIucHJvdG90eXBlLmxvYWRHcm91cCA9IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIHZhciByZXQgPSBncm91cC5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gJ3Jlcy8nICtyZXMuaGFzaEZpbGVba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxufTtcblxuZ2xvYmFsLnJlc01hbmFnZXIgPSBuZXcgUmVzTWFuYWdlcigpO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHp4aCBvbiAxNS8xMC85LlxuICovXG5cbnJlcXVpcmUoJy4vcmVzb3VyY2UuanMnKTtcbnJlcXVpcmUoJy4vZGVmaW5lL01lc3NhZ2UuanMnKTtcbnJlcXVpcmUoJy4vZGVmaW5lL0NvbW1hbmQuanMnKTtcbnJlcXVpcmUoJy4vUmVzb3VyY2VzLmpzJyk7XG5yZXF1aXJlKCcuL2ZzbS9mc20uanMnKTtcblxuKGZ1bmN0aW9uKCkge1xuICAgIGNjLmdhbWUub25TdGFydCA9IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgY2MubG9nKFwiY2MuZ2FtZS5vblN0YXJ0LS0xXCIpO1xuICAgICAgICBjYy52aWV3LmVuYWJsZVJldGluYShmYWxzZSk7XG4gICAgICAgIGNjLnZpZXcuYWRqdXN0Vmlld1BvcnQodHJ1ZSk7XG4gICAgICAgIGNjLnZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUoNjQwLCA5NjAsIGNjLlJlc29sdXRpb25Qb2xpY3kuRklYRURfV0lEVEgpO1xuICAgICAgICBjYy52aWV3LnJlc2l6ZVdpdGhCcm93c2VyU2l6ZSh0cnVlKTtcblxuICAgICAgICB2YXIgQXBwRmFjYWRlID0gcmVxdWlyZSgnLi9BcHBGYWNhZGUuanMnKTtcbiAgICAgICAgdmFyIGtleSA9ICdTTEdfV09XJztcbiAgICAgICAgQXBwRmFjYWRlLmdldEluc3RhbmNlKGtleSkuc3RhcnR1cCgpO1xuICAgIH07XG4gICAgY2MuZ2FtZS5ydW4oKTtcbn0pKCk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgenhoIG9uIDE1LzEwLzkuXG4gKi9cblxudmFyIHB1cmVtdmMgPSByZXF1aXJlKCdwdXJlbXZjJykucHVyZW12YztcbnZhciBMb2dvTWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi92aWV3L21lZGlhdG9yL0xvZ29NZWRpYXRvci5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHB1cmVtdmMuZGVmaW5lXG4oXG4gICAgLy8gQ0xBU1MgSU5GT1xuICAgIHtcbiAgICAgICAgbmFtZTogJ2NvbnRyb2xsZXIuY29tbWFuZC5QcmVwQ29udHJvbGxlckNvbW1hbmQnLFxuICAgICAgICBwYXJlbnQ6cHVyZW12Yy5TaW1wbGVDb21tYW5kXG4gICAgfSxcbiAgICAvLyBJTlNUQU5DRSBNRU1CRVJTXG4gICAge1xuICAgICAgICBleGVjdXRlOiBmdW5jdGlvbiAobm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgICBjYy5sb2coJ1ByZXBDb250cm9sbGVyQ29tbWFuZCBleGVjdXRlJyk7XG4gICAgICAgICAgICB0aGlzLmZhY2FkZS5zZW5kTm90aWZpY2F0aW9uKE1lc3NhZ2VzLlJVTl9TQ0VORSwge25hbWU6TG9nb01lZGlhdG9yLk5BTUV9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8gU1RBVElDIE1FTUJFUlNcbiAgICB7XG4gICAgICAgIE5BTUU6ICdQcmVwQ29udHJvbGxlckNvbW1hbmQnXG4gICAgfVxuKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB6eGggb24gMTUvMTAvOS5cbiAqL1xuXG52YXIgcHVyZW12YyA9IHJlcXVpcmUoJ3B1cmVtdmMnKS5wdXJlbXZjO1xudmFyIEdhbWVQcm94eSA9IHJlcXVpcmUoJy4uLy4uL21vZGVsL3Byb3h5L0dhbWVQcm94eS5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHB1cmVtdmMuZGVmaW5lXG4oXG4gICAgLy8gQ0xBU1MgSU5GT1xuICAgIHtcbiAgICAgICAgbmFtZTogJ2NvbnRyb2xsZXIuY29tbWFuZC5QcmVwTW9kZWxDb21tYW5kJyxcbiAgICAgICAgcGFyZW50OnB1cmVtdmMuU2ltcGxlQ29tbWFuZFxuICAgIH0sXG4gICAgLy8gSU5TVEFOQ0UgTUVNQkVSU1xuICAgIHtcbiAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgICAgICAgLy/lnKjmraTojrflj5bmlbDmja4s5rOo5YaMUHJveHlcbiAgICAgICAgICAgIHRoaXMuZmFjYWRlLnJlZ2lzdGVyUHJveHkobmV3IEdhbWVQcm94eSgpKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8gU1RBVElDIE1FTUJFUlNcbiAgICB7XG4gICAgICAgIE5BTUU6ICdQcmVwTW9kZWxDb21tYW5kJ1xuICAgIH1cbik7XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSB6eGggb24gMTUvMTAvOS5cbiAqL1xuXG52YXIgcHVyZW12YyA9IHJlcXVpcmUoJ3B1cmVtdmMnKS5wdXJlbXZjO1xudmFyIFNjZW5lTWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi92aWV3L21lZGlhdG9yL1NjZW5lTWVkaWF0b3IuanMnKTtcbnZhciBMb2dpbk1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vdmlldy9tZWRpYXRvci9Mb2dvTWVkaWF0b3IuanMnKTtcbnZhciBDaXR5TWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi92aWV3L21lZGlhdG9yL0NpdHlNZWRpYXRvci5qcycpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gcHVyZW12Yy5kZWZpbmUgKFxuICAgIC8vIENMQVNTIElORk9cbiAgICB7XG4gICAgICAgIG5hbWU6ICdjb250cm9sbGVyLmNvbW1hbmQuUHJlcFZpZXdDb21tYW5kJyxcbiAgICAgICAgcGFyZW50OnB1cmVtdmMuU2ltcGxlQ29tbWFuZFxuICAgIH0sXG4gICAgLy8gSU5TVEFOQ0UgTUVNQkVSU1xuICAgIHtcbiAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgICAgICAgY2MubG9nKCdQcmVwVmlld0NvbW1hbmQgZXhlY3V0ZScpO1xuICAgICAgICAgICAgdGhpcy5mYWNhZGUucmVnaXN0ZXJNZWRpYXRvcihuZXcgU2NlbmVNZWRpYXRvcigpKTtcbiAgICAgICAgICAgIHRoaXMuZmFjYWRlLnJlZ2lzdGVyTWVkaWF0b3IobmV3IExvZ2luTWVkaWF0b3IoKSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIFNUQVRJQyBNRU1CRVJTXG4gICAge1xuICAgICAgICBOQU1FOiAnUHJlcFZpZXdDb21tYW5kJ1xuICAgIH1cbik7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHp4aCBvbiAxNS8xMC8xNi5cbiAqL1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHp4aCBvbiAxNS8xMC85LlxuICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIHB1cmVtdmMgPSByZXF1aXJlKCdwdXJlbXZjJykucHVyZW12YztcbnZhciBHYW1lUHJveHkgPSByZXF1aXJlKCcuLi8uLi9tb2RlbC9wcm94eS9HYW1lUHJveHkuanMnKTtcbnZhciBHYW1lTWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi92aWV3L21lZGlhdG9yL0dhbWVNZWRpYXRvci5qcycpO1xudmFyIENpdHlNZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL3ZpZXcvbWVkaWF0b3IvQ2l0eU1lZGlhdG9yLmpzJyk7XG52YXIgQ291bnRyeU1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vdmlldy9tZWRpYXRvci9Db3VudHJ5TWVkaWF0b3IuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwdXJlbXZjLmRlZmluZShcbiAgICAvLyBDTEFTUyBJTkZPXG4gICAge1xuICAgICAgICBuYW1lOiAnY29udHJvbGxlci5jb21tYW5kLkluaXRHYW1lJyxcbiAgICAgICAgcGFyZW50OiBwdXJlbXZjLlNpbXBsZUNvbW1hbmRcbiAgICB9LFxuXG4gICAgLy8gSU5TVEFOQ0UgTUVNQkVSU1xuICAgIHtcbiAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvL+azqOWGjOaVsOaNruS7o+eQhlxuICAgICAgICAgICAgLy90aGlzLmZhY2FkZS5yZWdpc3RlclByb3h5KG5ldyBHYW1lUHJveHkoKSk7XG4gICAgICAgICAgICAvL+azqOWGjOa4uOaIj+WIneWni+W/hemhu+eahOS4reS7i1xuICAgICAgICAgICAgdmFyIGdhbWVNZWRpYXRvciA9IG5ldyBHYW1lTWVkaWF0b3IoKTtcbiAgICAgICAgICAgIHRoaXMuZmFjYWRlLnJlZ2lzdGVyTWVkaWF0b3IoZ2FtZU1lZGlhdG9yKTtcbiAgICAgICAgICAgIHRoaXMuZmFjYWRlLnJlZ2lzdGVyTWVkaWF0b3IobmV3IENpdHlNZWRpYXRvcigpKTtcbiAgICAgICAgICAgIHRoaXMuZmFjYWRlLnJlZ2lzdGVyTWVkaWF0b3IobmV3IENvdW50cnlNZWRpYXRvcigpKTtcblxuICAgICAgICAgICAgZ2FtZU1lZGlhdG9yLnN3aXRjaExheWVyKCk7XG4gICAgICAgIH0gLFxuICAgIH0sXG5cbiAgICAvLyBTVEFUSUMgTUVNQkVSU1xuICAgIHtcbiAgICAgICAgTkFNRTogQ29tbWFuZC5SVU5fR0FNRVxuICAgIH1cblxuKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB6eGggb24gMTUvMTAvOS5cbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBwdXJlbXZjID0gcmVxdWlyZSgncHVyZW12YycpLnB1cmVtdmM7XG52YXIgUHJlcE1vZGVsQ29tbWFuZCA9IHJlcXVpcmUoJy4vUHJlcE1vZGVsQ29tbWFuZC5qcycpO1xudmFyIFByZXBWaWV3Q29tbWFuZCA9IHJlcXVpcmUoJy4vUHJlcFZpZXdDb21tYW5kLmpzJyk7XG52YXIgUHJlcENvbnRyb2xsZXJDb21tYW5kID0gcmVxdWlyZSgnLi9QcmVwQ29udHJvbGxlckNvbW1hbmQuanMnKTtcbi8vdmFyIEluamVjdEhlcm9GU01Db21tYW5kID0gcmVxdWlyZSgnLi9JbmplY3RIZXJvRlNNQ29tbWFuZC5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHB1cmVtdmMuZGVmaW5lKFxuICAgIC8vIENMQVNTIElORk9cbiAgICB7XG4gICAgICAgIG5hbWU6ICdjb250cm9sbGVyLmNvbW1hbmQuU3RhcnR1cENvbW1hbmQnLFxuICAgICAgICBwYXJlbnQ6IHB1cmVtdmMuTWFjcm9Db21tYW5kXG4gICAgfSxcblxuICAgIC8vIElOU1RBTkNFIE1FTUJFUlNcbiAgICB7XG4gICAgICAgIGluaXRpYWxpemVNYWNyb0NvbW1hbmQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICB0aGlzLmFkZFN1YkNvbW1hbmQoUHJlcE1vZGVsQ29tbWFuZCk7XG4gICAgICAgICAgICB0aGlzLmFkZFN1YkNvbW1hbmQoUHJlcFZpZXdDb21tYW5kKTtcbiAgICAgICAgICAgIHRoaXMuYWRkU3ViQ29tbWFuZChQcmVwQ29udHJvbGxlckNvbW1hbmQpO1xuXG4gICAgICAgICAgICAvL2ZhY2FkZS5yZWdpc3RlckNvbW1hbmQoSW5qZWN0SGVyb0ZTTUNvbW1hbmQuTkFNRSwgSW5qZWN0SGVyb0ZTTUNvbW1hbmQpO1xuICAgICAgICAgICAgLy9mYWNhZGUuc2VuZE5vdGlmaWNhdGlvbihDb21tYW5kLkNSRUFURV9IRVJPX0ZTTSwge25hbWU6J3JvYm90J30pO1xuICAgICAgICAgICAgLy9mYWNhZGUuc2VuZE5vdGlmaWNhdGlvbihDb21tYW5kLkNSRUFURV9IRVJPX0ZTTSwge25hbWU6J2hlcm8nfSk7XG5cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBTVEFUSUMgTUVNQkVSU1xuICAgIHtcbiAgICAgICAgTkFNRTogJ1N0YXJ0dXBDb21tYW5kJ1xuICAgIH1cblxuKTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHp4aCBvbiAxNS8xMC8yOS5cbiAqL1xuXG5cbnZhciBwdXJlbXZjID0gcmVxdWlyZSgncHVyZW12YycpLnB1cmVtdmM7XG5cbm1vZHVsZS5leHBvcnRzID0gcHVyZW12Yy5kZWZpbmUgKFxuICAgIC8vIENMQVNTIElORk9cbiAgICB7XG4gICAgICAgIG5hbWU6ICdjb250cm9sbGVyLmNvbW1hbmQuV3JpdGVMb2dDb21tYW5kJyxcbiAgICAgICAgcGFyZW50OnB1cmVtdmMuU2ltcGxlQ29tbWFuZFxuICAgIH0sXG4gICAgLy8gSU5TVEFOQ0UgTUVNQkVSU1xuICAgIHtcbiAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgICAgICAgY2MubG9nKEpTT04uc3RyaW5naWZ5KG5vdGlmaWNhdGlvbi5nZXRCb2R5KCkpKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8gU1RBVElDIE1FTUJFUlNcbiAgICB7XG4gICAgICAgIE5BTUU6IENvbW1hbmQuV1JJVEVfTE9HXG4gICAgfVxuKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgenhoIG9uIDE1LzEwLzIxLlxuICovXG5cbnZhciBDb21tYW5kID0ge1xuICAgIFJVTl9HQU1FOiAxMDAwLFxuICAgIENSRUFURV9IRVJPX0ZTTTogMTAwMSxcbiAgICBXUklURV9MT0c6IDEwMDJcblxufTtcblxuZ2xvYmFsLkNvbW1hbmQgPSBDb21tYW5kO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHp4aCBvbiAxNS8xMC8xMy5cbiAqL1xuXG5cbnZhciBNZXNzYWdlcyAgPSB7XG4gICAgUlVOX1NDRU5FOiAxLCAgICAgICAgLy9cbiAgICBTSE9XX1ZJRVc6IDIsICAgICAgICAvL3tuYW1lOn1cbiAgICBFTlRFUl9DSVRZOiAzLCAgICAgICAvL+i/m+WFpeS4u+WfjlxuICAgIEdBTUVfREFUQV9DSEFOR0U6NSxcbiAgICBFTlRFUl9DT1VOVFJZOiA2LCAgICAgLy/ov5vlhaXlm73lrrZcbiAgICBMT0FEX0NPTVBMRVRFOiA3LFxuICAgIEVYSVRfU1RPUDogOCxcbiAgICBFTlRFUl9SVU46IDksXG59O1xuXG5cbmdsb2JhbC5NZXNzYWdlcyA9IE1lc3NhZ2VzO1xuXG5cblxuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgenhoIG9uIDE1LzEwLzI4LlxuICovXG5cbnZhciByb2JvdCA9IHtcbiAgICBBQ1RJT05fU1RPUDogMSxcbiAgICBBQ1RJT05fUlVOOiAyLFxuICAgIEFDVElPTl9GTE9BVDogM1xufTtcblxudmFyIGZzbSA9IHtcbiAgICAvL2FjdGlvbuWumuS5iVxuXG4gICAgLy/liJ3lp4vnirbmgIFcbiAgICBcIkBpbml0aWFsXCI6XCJzdG9wXCIsXG5cbiAgICAvL+eKtuaAgeaVsOe7hFxuICAgIFwic3RhdGVcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcIkBuYW1lXCI6ICBcInN0b3BcIixcbiAgICAgICAgICAgIFwiQGV4aXRpbmdcIjogTWVzc2FnZXMuRVhJVF9TVE9QLFxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiQGFjdGlvblwiOiByb2JvdC5BQ1RJT05fUlVOLFxuICAgICAgICAgICAgICAgICAgICBcIkB0YXJnZXRcIjogXCJydW5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIkBhY3Rpb25cIjogcm9ib3QuQUNUSU9OX0ZMT0FULFxuICAgICAgICAgICAgICAgICAgICBcIkB0YXJnZXRcIjogXCJmbG9hdFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIkBuYW1lXCI6ICBcInJ1blwiLFxuICAgICAgICAgICAgXCJAZW50ZXJpbmdcIjogTWVzc2FnZXMuRU5URVJfUlVOLFxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiQGFjdGlvblwiOiByb2JvdC5BQ1RJT05fU1RPUCxcbiAgICAgICAgICAgICAgICAgICAgXCJAdGFyZ2V0XCI6IFwic3RvcFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiQGFjdGlvblwiOiByb2JvdC5BQ1RJT05fRkxPQVQsXG4gICAgICAgICAgICAgICAgICAgIFwiQHRhcmdldFwiOiBcImZsb2F0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiQG5hbWVcIjogIFwiZmxvYXRcIixcbiAgICAgICAgICAgIFwidHJhbnNpdGlvblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIkBhY3Rpb25cIjogcm9ib3QuQUNUSU9OX1NUT1AsXG4gICAgICAgICAgICAgICAgICAgIFwiQHRhcmdldFwiOiBcInN0b3BcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIkBhY3Rpb25cIjogcm9ib3QuQUNUSU9OX1JVTixcbiAgICAgICAgICAgICAgICAgICAgXCJAdGFyZ2V0XCI6IFwicnVuXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICBdXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gRlNNSGVscGVyLmNyZWF0ZShmc20sIG5hbWUpO1xufTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHp4aCBvbiAxNS8xMC8yOS5cbiAqL1xudmFyIHB1cmVtdmMgPSByZXF1aXJlKCdwdXJlbXZjJykucHVyZW12YztcblxudmFyIEZTTUhlbHBlciA9IHtcblxuICAgIC8qKlxuICAgICAqIOWIm+W7uueKtuaAgeaculxuICAgICAqIEBwYXJhbSBmc20gICDnirbmgIHovazmjaJqc29u5a+56LGhXG4gICAgICogQHBhcmFtIG5hbWUgIOeKtuaAgeacuuWQjVxuICAgICAqIEByZXR1cm5zIHsqfSDnirbmgIHmnLrlr7nosaFcbiAgICAgKi9cbiAgICBjcmVhdGU6IGZ1bmN0aW9uKGZzbSwgbmFtZSkge1xuICAgICAgICB2YXIgaW5qZWN0b3IgPSBuZXcgcHVyZW12Yy5zdGF0ZW1hY2hpbmUuRlNNSW5qZWN0b3IoZnNtKTtcbiAgICAgICAgaW5qZWN0b3IuaW5pdGlhbGl6ZU5vdGlmaWVyKGZhY2FkZS5tdWx0aXRvbktleSk7XG4gICAgICAgIHZhciBzdGF0ZU1hY2hpbmUgPSBpbmplY3Rvci5pbmplY3QobmFtZSk7XG4gICAgICAgIHJldHVybiBzdGF0ZU1hY2hpbmU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0YXRlbWFjaGluZXxuYW1lIOeKtuaAgeacuuWvueixoSDmiJYg54q25oCB5py65ZCNXG4gICAgICogQHBhcmFtIGFjdGlvblxuICAgICAqIEBwYXJhbSBwYXJhbVxuICAgICAqL1xuICAgIGNoYW5nZVN0YXRlOiBmdW5jdGlvbihzdGF0ZW1hY2hpbmUsIGFjdGlvbiwgcGFyYW0pIHtcbiAgICAgICAgdmFyIGZzbSA9IHRoaXMuZ2V0RlNNKHN0YXRlbWFjaGluZSk7XG4gICAgICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbihmc20uQUNUSU9OLCBwYXJhbSwgYWN0aW9uKTtcbiAgICB9LFxuXG5cbiAgICBnZXRGU006IGZ1bmN0aW9uKHN0YXRlbWFjaGluZSkge1xuICAgICAgICBpZiAodHlwZW9mIHN0YXRlbWFjaGluZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZW1hY2hpbmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhY2FkZS5yZXRyaWV2ZU1lZGlhdG9yKHN0YXRlbWFjaGluZSk7XG4gICAgfSxcblxuICAgIGNoYW5nZWRNZXNzYWdlOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiBuYW1lICsgJy9ub3Rlcy9jaGFuZ2VkJztcbiAgICB9LFxuXG4gICAgYWN0aW9uTWVzc2FnZTogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmFtZSArICcvbm90ZXMvYWN0aW9uJztcbiAgICB9XG5cblxuXG5cblxufTtcblxuXG5cblxuZ2xvYmFsLkZTTUhlbHBlciA9IEZTTUhlbHBlcjsiLCIvKipcbiAqIENyZWF0ZWQgYnkgenhoIG9uIDE1LzEwLzEwLlxuICovXG5cbnZhciBzeiA9IHN6IHx8IHt9O1xuXG5zei5VSUxvYWRlciA9IGNjLkNsYXNzLmV4dGVuZCh7XG4gICAgX2V2ZW50UHJlZml4OiAnX29uJyxcbiAgICBfbWVtYmVyUHJlZml4OiAnXycsXG4gICAgX3dpZGdldEV2ZW50czogW10sXG4gICAgLyoqXG4gICAgICog5Yqg6L29VUnmlofku7ZcbiAgICAgKiBAcGFyYW0gdGFyZ2V05bCGICBqc29uRmlsZeWKoOi9veWHuueahOiKgueCuee7keWumuWIsOeahOebruagh1xuICAgICAqIEBwYXJhbSBqc29uRmlsZSAgY29jb3N0dWRpbyBVSee8lui+keWZqOeUn+aIkOeahGpzb27mlofku7ZcbiAgICAgKi9cbiAgICB3aWRnZXRGcm9tSnNvbkZpbGU6IGZ1bmN0aW9uKHRhcmdldCwganNvbkZpbGUsIG9wdGlvbnMpIHtcbiAgICAgICAgY2MuYXNzZXJ0KHRhcmdldCAmJiBqc29uRmlsZSk7XG4gICAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZXZlbnRQcmVmaXggID0gIG9wdGlvbnMuZXZlbnRQcmVmaXggfHwgc3ouVUlMb2FkZXIuREVGQVVMVF9FVkVOVF9QUkVGSVg7XG4gICAgICAgIHRoaXMuX21lbWJlclByZWZpeCA9IG9wdGlvbnMubWVtYmVyUHJlZml4IHx8IHN6LlVJTG9hZGVyLkRFRkFVTFRfTUVNQkVSX1BSRUZJWDtcbiAgICAgICAgLy/nu5Hlrproh6rouqtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIGNjLk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2JpbmRNZW5iZXJzKHRhcmdldCwgdGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v57uR5a6aanNvbkZpbGVcbiAgICAgICAgaWYgKCFqc29uRmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGpzb24gPSBjYy5sb2FkZXIuZ2V0UmVzKGpzb25GaWxlKTtcbiAgICAgICAgdmFyIHZlcnNpb24gPSBqc29uLnZlcnNpb24gfHwganNvbi5WZXJzaW9uO1xuICAgICAgICB2YXIgcm9vdE5vZGU7XG4gICAgICAgIGlmICh2ZXJzaW9uWzBdID09IDEpIHtcbiAgICAgICAgICAgIHJvb3ROb2RlID0gY2NzLnVpUmVhZGVyLndpZGdldEZyb21Kc29uRmlsZShqc29uRmlsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmVyc2lvblswXSA9PSAyKXtcbiAgICAgICAgICAgIHJvb3ROb2RlID0gY2NzLmNzTG9hZGVyLmNyZWF0ZU5vZGUoanNvbkZpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyb290Tm9kZSkge1xuICAgICAgICAgICAgY2MubG9nKFwiTG9hZCBqc29uIGZpbGUgZmFpbGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvb3ROb2RlLnNldFRvdWNoRW5hYmxlZCkge1xuICAgICAgICAgICAgcm9vdE5vZGUuc2V0VG91Y2hFbmFibGVkKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldC5yb290Tm9kZSA9IHJvb3ROb2RlO1xuICAgICAgICByb290Tm9kZS5zZXROYW1lKFwicm9vdE5vZGVcIik7XG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBjYy5Ob2RlKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWRkQ2hpbGQocm9vdE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYmluZE1lbmJlcnMocm9vdE5vZGUsIHRhcmdldCk7XG4gICAgICAgIHJldHVybiByb290Tm9kZTtcbiAgICB9LFxuXG4gICAgYmluZE5vZGU6IGZ1bmN0aW9uKG5vZGUsIHRhcmdldCkge1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vdGhpcy5fZXZlbnRQcmVmaXggID0gIG9wdGlvbnMuZXZlbnRQcmVmaXggfHwgc3ouVUlMb2FkZXIuREVGQVVMVF9FVkVOVF9QUkVGSVg7XG4gICAgICAgIC8vdGhpcy5fbWVtYmVyUHJlZml4ID0gb3B0aW9ucy5tZW1iZXJQcmVmaXggfHwgc3ouVUlMb2FkZXIuREVGQVVMVF9NRU1CRVJfUFJFRklYO1xuICAgICAgICB2YXIgbm9kZU5hbWUgPSBub2RlLmdldE5hbWUoKTtcblxuICAgICAgICB2YXIgaXNNYXRjaCA9IG5vZGVOYW1lLnN1YnN0cigwLCB0aGlzLl9tZW1iZXJQcmVmaXgubGVuZ3RoKSA9PT0gdGhpcy5fbWVtYmVyUHJlZml4O1xuICAgICAgICAvL+aOp+S7tuWQjeWtmOWcqO+8jOe7keWumuWIsHRhcmdldOS4ilxuICAgICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICAgICAgaWYgKCF0YXJnZXRbbm9kZU5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25vZGVOYW1lXSA9IG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RlcldpZGdldEV2ZW50KHRhcmdldCwgbm9kZSk7XG4gICAgICAgIH1lbHNlIGlmIChub2RlLnNldFRvdWNoRW5hYmxlZCl7XG4gICAgICAgICAgICBub2RlLnNldFRvdWNoRW5hYmxlZChmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0Lm9uTG9hZGVyQmluZGVkKSB7XG4gICAgICAgICAgICB0YXJnZXQub25Mb2FkZXJCaW5kZWQobm9kZSwgaXNNYXRjaCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzTWF0Y2g7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDpgJLlvZLlr7lyb290V2lkZ2V05LiL55qE5a2Q6IqC54K56L+b6KGM5oiQ5ZGY57uR5a6aXG4gICAgICogQHBhcmFtIHJvb3RXaWRnZXRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfYmluZE1lbmJlcnM6IGZ1bmN0aW9uKHJvb3RXaWRnZXQsIHRhcmdldCkge1xuICAgICAgICB2YXIgd2lkZ2V0TmFtZSxcbiAgICAgICAgICAgIGNoaWxkcmVuID0gcm9vdFdpZGdldC5nZXRDaGlsZHJlbigpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbih3aWRnZXQpIHtcbiAgICAgICAgICAgIHdpZGdldE5hbWUgPSB3aWRnZXQuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICAvL+S4jee7keWumnJvb3ROb2Rl6IqC54K577yM5Zug5Li65bey57uP57uR5a6a6L+H5LqGXG4gICAgICAgICAgICBpZiAod2lkZ2V0TmFtZSA9PT0gXCJyb290Tm9kZVwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaXNNYXRjaCA9IHdpZGdldE5hbWUuc3Vic3RyKDAsIHNlbGYuX21lbWJlclByZWZpeC5sZW5ndGgpID09PSBzZWxmLl9tZW1iZXJQcmVmaXg7XG4gICAgICAgICAgICAvL+aOp+S7tuWQjeWtmOWcqO+8jOe7keWumuWIsHRhcmdldOS4ilxuICAgICAgICAgICAgLy92YXIgcHJlZml4ID0gd2lkZ2V0TmFtZS5zdWJzdHIoMCwgc2VsZi5fbWVtYmVyUHJlZml4Lmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICAgICAgICAgIHRhcmdldFt3aWRnZXROYW1lXSA9IHdpZGdldDtcbiAgICAgICAgICAgICAgICBzZWxmLl9yZWdpc3RlcldpZGdldEV2ZW50KHRhcmdldCwgd2lkZ2V0KTtcbiAgICAgICAgICAgIH1lbHNlIGlmICh3aWRnZXQuc2V0VG91Y2hFbmFibGVkKXtcbiAgICAgICAgICAgICAgICB3aWRnZXQuc2V0VG91Y2hFbmFibGVkKGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldC5vbkxvYWRlckJpbmRlZCAmJiB0YXJnZXQgIT09IHJvb3RXaWRnZXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQub25Mb2FkZXJCaW5kZWQod2lkZ2V0LCBpc01hdGNoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy/nu5HlrprlrZDmjqfku7Ys5Y+v5Lul5a6e546wOiBhLl9iLl9jLl9kIOiuv+mXruWtkOaOp+S7tlxuICAgICAgICAgICAgaWYgKCFyb290V2lkZ2V0W3dpZGdldE5hbWVdKSB7XG4gICAgICAgICAgICAgICAgcm9vdFdpZGdldFt3aWRnZXROYW1lXSA9IHdpZGdldDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy/lpoLmnpzov5jmnInlrZDoioLngrnvvIzpgJLlvZLov5vljrtcbiAgICAgICAgICAgIGlmICh3aWRnZXQuZ2V0Q2hpbGRyZW5Db3VudCgpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fYmluZE1lbmJlcnMod2lkZ2V0LCB0YXJnZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmjqfku7bkuovku7ZcbiAgICAgKiBAcGFyYW0gd2lkZ2V0XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgX2dldFdpZGdldEV2ZW50OiBmdW5jdGlvbih3aWRnZXQpIHtcbiAgICAgICAgdmFyIGJpbmRXaWRnZXRFdmVudCA9IG51bGw7XG4gICAgICAgIHZhciBldmVudHMgPSBzei5VSUxvYWRlci53aWRnZXRFdmVudHM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBiaW5kV2lkZ2V0RXZlbnQgPSBldmVudHNbaV07XG4gICAgICAgICAgICBpZiAoYmluZFdpZGdldEV2ZW50ICYmIHdpZGdldCBpbnN0YW5jZW9mIGJpbmRXaWRnZXRFdmVudC53aWRnZXRUeXBlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJpbmRXaWRnZXRFdmVudDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5rOo5YaM5o6n5Lu25LqL5Lu2XG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqIEBwYXJhbSB3aWRnZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9yZWdpc3RlcldpZGdldEV2ZW50OiBmdW5jdGlvbih0YXJnZXQsIHdpZGdldCkge1xuXG4gICAgICAgIC8v5oiq5Y+W5YmN57yALOmmluWtl+avjeWkp+WumlxuICAgICAgICB2YXIgZXZlbnROYW1lID0gdGhpcy5nZXRXaWRnZXRFdmVudE5hbWUod2lkZ2V0LCBcIkV2ZW50XCIpO1xuICAgICAgICB2YXIgaXNCaW5kRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRhcmdldFtldmVudE5hbWVdKSB7XG4gICAgICAgICAgICBpc0JpbmRFdmVudCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL+WPluS6i+aOp+S7tuS7tuWQjVxuICAgICAgICAgICAgdmFyIHdpZGdldEV2ZW50ID0gdGhpcy5fZ2V0V2lkZ2V0RXZlbnQod2lkZ2V0KTtcbiAgICAgICAgICAgIGlmICghd2lkZ2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzei51aWxvYWRlci5yZWdpc3RlclRvdWNoRXZlbnQod2lkZ2V0LCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8v5qOA5p+l5LqL5Lu25Ye95pWwLOeUn+aIkOS6i+S7tuWQjeaVsOe7hFxuICAgICAgICAgICAgdmFyIGV2ZW50TmFtZUFycmF5ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdpZGdldEV2ZW50LmV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGV2ZW50TmFtZSA9IHRoaXMuZ2V0V2lkZ2V0RXZlbnROYW1lKHdpZGdldCwgd2lkZ2V0RXZlbnQuZXZlbnRzW2ldKTsvL25ld05hbWUgKyB3aWRnZXRFdmVudC5ldmVudHNbaV07XG4gICAgICAgICAgICAgICAgZXZlbnROYW1lQXJyYXkucHVzaChldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2V2ZW50TmFtZV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBpc0JpbmRFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy/kuovku7blk43lupTlh73mlbBcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgZXZlbnRGdW5jID0gZnVuY3Rpb24oc2VuZGVyLCB0eXBlKSB7XG4gICAgICAgICAgICB2YXIgY2FsbEJhY2s7XG4gICAgICAgICAgICB2YXIgZnVuY05hbWU7XG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBmdW5jTmFtZSA9IGV2ZW50TmFtZUFycmF5W3R5cGVdO1xuICAgICAgICAgICAgICAgIGNhbGxCYWNrID0gdGFyZ2V0W2Z1bmNOYW1lXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbEJhY2sgPSB0YXJnZXRbZXZlbnROYW1lXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhbGxCYWNrICYmIHNlbGYuX3dpZGdldEV2ZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmV4ZWNXaWRnZXRFdmVudChzZW5kZXIsIHR5cGUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL+W8gOWni1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IGNjdWkuV2lkZ2V0LlRPVUNIX0JFR0FOKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRpbWUgPSBzei5VSUxvYWRlci5ERUZBVUxUX1RPVUNIX0xPTkdfVElNRTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbEJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZSA9IGNhbGxCYWNrLmNhbGwodGFyZ2V0LCBzZW5kZXIsIHR5cGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8v5qOA5rWL6ZW/5oyJ5LqL5Lu2XG4gICAgICAgICAgICAgICAgZnVuY05hbWUgPSBzei51aWxvYWRlci5nZXRXaWRnZXRFdmVudE5hbWUoc2VuZGVyLCBzei5VSUxvYWRlci5UT1VDSF9MT05HX0VWRU5UKTtcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hMb25nID0gdGFyZ2V0W2Z1bmNOYW1lXTtcblxuICAgICAgICAgICAgICAgIGlmICh0b3VjaExvbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZSA9IHRpbWUgfHwgc3ouVUlMb2FkZXIuREVGQVVMVF9UT1VDSF9MT05HX1RJTUU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lID49IDAgJiYgdGltZSA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zY2hlZHVsZU9uY2UodG91Y2hMb25nLCB0aW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5fX3RvdWNoTG9uZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vVG91Y2hNb3ZlZOaXtuino+mZpOmVv+aMieS6i+S7tlxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IGNjdWkuV2lkZ2V0LlRPVUNIX01PVkVEKSB7XG4gICAgICAgICAgICAgICAgZnVuY05hbWUgPSBzei51aWxvYWRlci5nZXRXaWRnZXRFdmVudE5hbWUoc2VuZGVyLCBzei5VSUxvYWRlci5UT1VDSF9MT05HX0VWRU5UKTtcbiAgICAgICAgICAgICAgICB2YXIgc2NoZWR1bGVGdW5jID0gdGFyZ2V0W2Z1bmNOYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoc2NoZWR1bGVGdW5jICYmIHRhcmdldC5fX3RvdWNoTG9uZykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHQxID0gc2VuZGVyLmdldFRvdWNoQmVnYW5Qb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHQyID0gc2VuZGVyLmdldFRvdWNoTW92ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhwdDEueCAtIHB0Mi54KSA+IDE1IHx8IE1hdGguYWJzKHB0MS55IC0gcHQyLnkpID4gMTUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC51bnNjaGVkdWxlKHNjaGVkdWxlRnVuYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJUb3VjaE1vdmVkOiDop6PpmaTplb/mjInkuovku7ZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuX190b3VjaExvbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL+mVv+aMieino+mZpFxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IGNjdWkuV2lkZ2V0LlRPVUNIX0VOREVEIHx8IHR5cGUgPT09IGNjdWkuV2lkZ2V0LlRPVUNIX0NBTkNFTEVEKSB7XG4gICAgICAgICAgICAgICAgZnVuY05hbWUgPSBzei51aWxvYWRlci5nZXRXaWRnZXRFdmVudE5hbWUoc2VuZGVyLCBzei5VSUxvYWRlci5UT1VDSF9MT05HX0VWRU5UKTtcbiAgICAgICAgICAgICAgICB2YXIgc2NoZWR1bGVGdW5jID0gdGFyZ2V0W2Z1bmNOYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoc2NoZWR1bGVGdW5jICYmIHRhcmdldC5fX3RvdWNoTG9uZykge1xuICAgICAgICAgICAgICAgICAgICAvL3RhcmdldC5fdG91Y2hMb25nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIlRvdWNoRW5lZDog6Kej6Zmk6ZW/5oyJ5LqL5Lu2XCIpO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQudW5zY2hlZHVsZShzY2hlZHVsZUZ1bmMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy/kuovku7blm57osINcbiAgICAgICAgICAgIGlmIChjYWxsQmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxCYWNrLmNhbGwodGFyZ2V0LCBzZW5kZXIsIHR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8v5rOo5YaM5LqL5Lu255uR5ZCsXG4gICAgICAgIGlmIChpc0JpbmRFdmVudCkge1xuICAgICAgICAgICAgd2lkZ2V0LnNldFRvdWNoRW5hYmxlZCh0cnVlKTtcbiAgICAgICAgICAgIGlmICh3aWRnZXQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIHdpZGdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50RnVuYywgdGFyZ2V0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmFkZFRvdWNoRXZlbnRMaXN0ZW5lcihldmVudEZ1bmMsIHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZXhlY1dpZGdldEV2ZW50OiBmdW5jdGlvbihzZW5kZXIsIHR5cGUpIHtcbiAgICAgICAgdmFyIHJldDtcbiAgICAgICAgdGhpcy5fd2lkZ2V0RXZlbnRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgaWYoaXRlbS53aWRnZXRFdmVudC5jYWxsKGl0ZW0udGFyZ2V0LCBzZW5kZXIsIHR5cGUpID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgcmV0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sdGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5o6n5Lu25LqL5Lu25o2V6I63LCDlj6/ku6XnlLHlrZDnsbvph43lhpnmraTlh73mlbBcbiAgICAgKiBAcGFyYW0gc2VuZGVyXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIC8vX29uV2lkZ2V0RXZlbnQ6IGZ1bmN0aW9uKHNlbmRlciwgdHlwZSkge1xuICAgIC8vXG4gICAgLy99XG5cbiAgICAvL19vbk5vZGVFdmVudDogZnVuY3Rpb24oc2VuZGVyLCB0eXBlKSB7XG4gICAgLy9cbiAgICAvL31cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB3aWRnZXRcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFdpZGdldEV2ZW50TmFtZTogZnVuY3Rpb24od2lkZ2V0LCBldmVudCkge1xuICAgICAgICBjYy5hc3NlcnQod2lkZ2V0KTtcbiAgICAgICAgdmFyIG5hbWUgPSB3aWRnZXQuZ2V0TmFtZSgpO1xuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVbdGhpcy5fbWVtYmVyUHJlZml4Lmxlbmd0aF0udG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UodGhpcy5fbWVtYmVyUHJlZml4Lmxlbmd0aCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50UHJlZml4ICsgbmFtZSArIGV2ZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50UHJlZml4ICsgbmFtZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZWdpc3RlcldpZGdldEV2ZW50OiBmdW5jdGlvbih0YXJnZXQsIHdpZGdldEV2ZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkZ2V0RXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5fd2lkZ2V0RXZlbnRzLnB1c2goe3RhcmdldDogdGFyZ2V0ICx3aWRnZXRFdmVudDogd2lkZ2V0RXZlbnR9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZW1vdmVXaWRnZXRFdmVudDogZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fd2lkZ2V0RXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fd2lkZ2V0RXZlbnRzW2ldLnRhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0RXZlbnRzLnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8v5LqL5Lu25YmN57yAXG5zei5VSUxvYWRlci5ERUZBVUxUX0VWRU5UX1BSRUZJWCA9IFwiX29uXCI7XG4vL+aIkOWRmOWJjee8gFxuc3ouVUlMb2FkZXIuREVGQVVMVF9NRU1CRVJfUFJFRklYID0gXCJfXCI7XG4vL+m7mOiupOmVv+aMieinpuWPkeaXtumXtFxuc3ouVUlMb2FkZXIuREVGQVVMVF9UT1VDSF9MT05HX1RJTUUgPSAwLjU7XG4vL+mVv+aMieS6i+S7tuWQjVxuc3ouVUlMb2FkZXIuVE9VQ0hfTE9OR19FVkVOVCA9IFwiVG91Y2hMb25nXCI7XG4vL+inpuaRuOS6i+S7tlxuc3ouVUlMb2FkZXIudG91Y2hFdmVudHMgPSBbXCJUb3VjaEJlZ2FuXCIsIFwiVG91Y2hNb3ZlZFwiLCBcIlRvdWNoRW5kZWRcIiwgXCJUb3VjaENhbmNlbGVkXCIsIHN6LlVJTG9hZGVyLlRPVUNIX0xPTkdfRVZFTlRdO1xuLy/mjqfku7bkuovku7bliJfooahcbnN6LlVJTG9hZGVyLndpZGdldEV2ZW50cyA9IFtcbiAgICAvL0J1dHRvblxuICAgIHt3aWRnZXRUeXBlOiBjY3VpLkJ1dHRvbiwgZXZlbnRzOiBzei5VSUxvYWRlci50b3VjaEV2ZW50c30sXG4gICAgLy9JbWFnZVZpZXdcbiAgICB7d2lkZ2V0VHlwZTogY2N1aS5JbWFnZVZpZXcsIGV2ZW50czogc3ouVUlMb2FkZXIudG91Y2hFdmVudHN9LFxuICAgIC8vVGV4dEZpbGVkXG4gICAge3dpZGdldFR5cGU6IGNjdWkuVGV4dEZpZWxkLCBldmVudHM6IFtcIkF0dGFjaFdpdGhJTUVcIiwgXCJEZXRhY2hXaXRoSU1FXCIsIFwiSW5zZXJ0VGV4dFwiLCBcIkRlbGV0ZUJhY2t3YXJkXCJdfSxcbiAgICAvL0NoZWNrQm94XG4gICAge3dpZGdldFR5cGU6IGNjdWkuQ2hlY2tCb3gsIGV2ZW50czogW1wiU2VsZWN0ZWRcIiwgXCJVbnNlbGVjdGVkXCJdfSxcbiAgICAvL0xpc3RWaWV3XG4gICAge3dpZGdldFR5cGU6IGNjdWkuTGlzdFZpZXcsIGV2ZW50czpbXCJTZWxlY3RlZEl0ZW1cIl19LFxuICAgIC8vUGFuZWxcbiAgICB7d2lkZ2V0VHlwZTogY2N1aS5MYXlvdXQsIGV2ZW50czogc3ouVUlMb2FkZXIudG91Y2hFdmVudHN9LFxuICAgIC8vQk1Gb250XG4gICAge3dpZGdldFR5cGU6IGNjdWkuVGV4dEJNRm9udCwgZXZlbnRzOiBzei5VSUxvYWRlci50b3VjaEV2ZW50c30sXG4gICAgLy9UZXh0XG4gICAge3dpZGdldFR5cGU6IGNjdWkuVGV4dCwgZXZlbnRzOiBzei5VSUxvYWRlci50b3VjaEV2ZW50c30sXG4gICAgLy9sYXN0IG11c3QgbnVsbFxuICAgIG51bGxcbl07XG5cbnN6LnVpbG9hZGVyID0gbmV3IHN6LlVJTG9hZGVyKCk7XG5cbi8qKlxuICogY2Mubm9kZeinpuaRuOS6i+S7tuazqOWGjOWHveaVsFxuICogQHBhcmFtIG5vZGVcbiAqIEBwYXJhbSB0YXJnZXRcbiAqIEBwYXJhbSB0b3VjaEV2ZW50XG4gKiBAcGFyYW0gc3dhbGxvd1RvdWNoZXNcbiAqIEByZXR1cm5zIHsqfVxuICovXG5zei51aWxvYWRlci5yZWdpc3RlclRvdWNoRXZlbnQgPSBmdW5jdGlvbihub2RlLCB0YXJnZXQsIHRvdWNoRXZlbnQsIHN3YWxsb3dUb3VjaGVzKSB7XG5cbiAgICBpZiAoIW5vZGUgaW5zdGFuY2VvZiBjYy5Ob2RlICkge1xuICAgICAgICBjYy5sb2coJ3BhcmFtIFwibm9kZVwiIGlzIG5vdCBjYy5Ob2RlIHR5cGUnKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBjY3VpLldpZGdldCkge1xuICAgICAgICBjYy5sb2coJ3BhcmFtIFwibm9kZVwiIENhbiBub3QgYmUgY2N1aS5XaWRnZXQgdHlwZScpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0YXJnZXQgPSB0YXJnZXQgfHwgbm9kZTtcblxuICAgIGlmIChzd2FsbG93VG91Y2hlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN3YWxsb3dUb3VjaGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgdG91Y2hMaXN0ZW5lciA9IGNjLkV2ZW50TGlzdGVuZXIuY3JlYXRlKHtcbiAgICAgICAgZXZlbnQ6IHRvdWNoRXZlbnQgfHwgY2MuRXZlbnRMaXN0ZW5lci5UT1VDSF9PTkVfQllfT05FLFxuICAgICAgICBzd2FsbG93VG91Y2hlczogc3dhbGxvd1RvdWNoZXMgPyB0cnVlIDogZmFsc2VcbiAgICB9KTtcblxuICAgIHZhciBub2RlRXZlbnRzID0gWydvblRvdWNoQmVnYW4nLCAnb25Ub3VjaE1vdmVkJywgJ29uVG91Y2hFbmRlZCddO1xuICAgIG5vZGVFdmVudHMuZm9yRWFjaChmdW5jdGlvbihldmVudE5hbWUsIGluZGV4KSB7XG5cbiAgICAgICAgdG91Y2hMaXN0ZW5lcltldmVudE5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdG91Y2hOb2RlID0gYXJndW1lbnRzWzFdLmdldEN1cnJlbnRUYXJnZXQoKTtcbiAgICAgICAgICAgIHZhciBldmVudCA9IHN6LnVpbG9hZGVyLmdldFdpZGdldEV2ZW50TmFtZSh0b3VjaE5vZGUsIHN6LlVJTG9hZGVyLnRvdWNoRXZlbnRzW2luZGV4XSk7XG4gICAgICAgICAgICBpZiAoIXRhcmdldFtldmVudF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBwb2ludCA9IGFyZ3VtZW50c1swXS5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgICAgIHBvaW50ID0gdG91Y2hOb2RlLmNvbnZlcnRUb05vZGVTcGFjZShwb2ludCk7XG4gICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBjYy5yZWN0KDAsMCwgdG91Y2hOb2RlLndpZHRoLCB0b3VjaE5vZGUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBpZiAoIWNjLnJlY3RDb250YWluc1BvaW50KHJlY3QsIHBvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBhcmdzLnVuc2hpZnQodG91Y2hOb2RlKTtcbiAgICAgICAgICAgIHZhciByZXQgPSB0YXJnZXRbZXZlbnRdLmFwcGx5KHRhcmdldCwgYXJncyk7XG5cbiAgICAgICAgICAgIC8vdG9kbzog5ZON5bqUdWlsb2FkIGhvb2vkuovku7ZcbiAgICAgICAgICAgIC8vaWYgKHN6LnVpbG9hZGVyLl9vbk5vZGVFdmVudCkge1xuICAgICAgICAgICAgLy8gICAgc3oudWlsb2FkZXIuX29uTm9kZUV2ZW50KHRhcmdldCwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICAvL31cblxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNjLmV2ZW50TWFuYWdlci5hZGRMaXN0ZW5lcih0b3VjaExpc3RlbmVyLCBub2RlKTtcbiAgICByZXR1cm4gdG91Y2hMaXN0ZW5lcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc3o7XG4iLCJcbi8qKlxuICogRXhwb3NlIGBFbWl0dGVyYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xuICAgIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xufTtcblxuLyoqXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG1peGluKG9iaikge1xuICAgIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xuICAgICAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XG4gICAgRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgICAgICAgKHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdKVxuICAgICAgICAgICAgLnB1c2goZm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vKipcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgICBmdW5jdGlvbiBvbigpIHtcbiAgICAgICAgdGhpcy5vZmYoZXZlbnQsIG9uKTtcbiAgICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBvbi5mbiA9IGZuO1xuICAgIHRoaXMub24oZXZlbnQsIG9uKTtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XG4gICAgRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgICAgICBFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgICAgICAgICAgRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgLy8gYWxsXG4gICAgICAgICAgICAgICAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gc3BlY2lmaWMgZXZlbnRcbiAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcbiAgICAgICAgICAgICAgICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXG4gICAgICAgICAgICAgICAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgICAgICAgICAgICAgICB2YXIgY2I7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2IgPSBjYWxsYmFja3NbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9O1xuXG4vKipcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtNaXhlZH0gLi4uXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcblxuICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAgIHJldHVybiB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gICAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XG59OyIsIi8qKlxuICogQ3JlYXRlZCBieSB6eGggb24gMTUvMTAvMTYuXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBwdXJlbXZjID0gcmVxdWlyZSgncHVyZW12YycpLnB1cmVtdmM7XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbm1vZHVsZS5leHBvcnRzID0gcHVyZW12Yy5kZWZpbmVcbihcbiAgICAvLyBDTEFTUyBJTkZPXG4gICAge1xuICAgICAgICBuYW1lOiAnbW9kZWwucHJveHkuR2FtZVByb3h5JyxcbiAgICAgICAgcGFyZW50OiBwdXJlbXZjLlByb3h5LFxuXG4gICAgICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwdXJlbXZjLlByb3h5LmNhbGwodGhpcyk7XG5cbiAgICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBJTlNUQU5DRSBNRU1CRVJTXG4gICAge1xuICAgICAgICBnb2xkOiAwLFxuICAgICAgICBmb29kOiAwLFxuICAgICAgICB3b29kOiAwLFxuICAgICAgICBpbnRlcnZhbElkOiBudWxsLFxuXG4gICAgICAgIGxvYWREYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHZhciB0aW1lID0gMDtcbiAgICAgICAgICAgIC8v5qih5ouf5byC5q2l5Yqg6L295pWw5o2uXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRpbWUgKz0gMTA7XG4gICAgICAgICAgICAgICAgc2VsZi5nb2xkID0gMTAwMDtcbiAgICAgICAgICAgICAgICBzZWxmLmZvb2QgPSAxMDAwO1xuICAgICAgICAgICAgICAgIHNlbGYud29vZCA9IDEwMDA7XG4gICAgICAgICAgICAgICAgc2VsZi5zZW5kTm90aWZpY2F0aW9uKE1lc3NhZ2VzLkxPQURfQ09NUExFVEUpO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5hc3luY0RhdGEoKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jRGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmdvbGQgKz0gXy5yYW5kb20oLTEwMCwgMTAwKTtcbiAgICAgICAgICAgICAgICBzZWxmLmZvb2QgKz0gXy5yYW5kb20oLTEwMCwgMTAwKTtcbiAgICAgICAgICAgICAgICBzZWxmLndvb2QgKz0gXy5yYW5kb20oLTEwMCwgMTAwKTtcblxuICAgICAgICAgICAgICAgIHNlbGYuc2VuZE5vdGlmaWNhdGlvbihNZXNzYWdlcy5HQU1FX0RBVEFfQ0hBTkdFKTtcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyBTVEFUSUMgTUVNQkVSU1xuICAgIHtcbiAgICAgICAgTkFNRTogJ0dhbWVQcm94eSdcbiAgICB9XG4pO1xuXG4iLCJ2YXIgcmVzID0ge1xuICAgIEhlbGxvV29ybGRfcG5nIDogXCJyZXMvSGVsbG9Xb3JsZC5wbmdcIixcbiAgICBMSTA3X2pwZzogXCJyZXMvdWkvTG9naW4vTEkwNy5qcGdcIixcbiAgICBMb2dpbl9qc29uOiBcInJlcy91aS9Mb2dpbi5qc29uXCIsXG4gICAgTGF5ZXJfanNvbjogXCJyZXMvdWkvTGF5ZXIuanNvblwiLFxuICAgIEJhUzMxX3BuZzogXCJyZXMvdWkvTG9naW4vQmFTMzEucG5nXCIsXG4gICAgQmFTMzJfcG5nOiBcInJlcy91aS9Mb2dpbi9CYVMzMi5wbmdcIixcbiAgICBNYWluTWVudV9qc29uOiBcInJlcy91aS9NYWluTWVudS5qc29uXCIsXG4gICAgTU0wMV9wbmc6IFwicmVzL3VpL01haW5NZW51L01NMDEucG5nXCIsXG4gICAgTU0wMl9wbmc6IFwicmVzL3VpL01haW5NZW51L01NMDIucG5nXCIsXG4gICAgTU0wM19wbmc6IFwicmVzL3VpL01haW5NZW51L01NMDMucG5nXCIsXG4gICAgTU0wNF9wbmc6IFwicmVzL3VpL01haW5NZW51L01NMDQucG5nXCIsXG4gICAgTU0wNV9wbmc6IFwicmVzL3VpL01haW5NZW51L01NMDUucG5nXCIsXG4gICAgTU0wNl9wbmc6IFwicmVzL3VpL01haW5NZW51L01NMDYucG5nXCIsXG4gICAgTU0wN19wbmc6IFwicmVzL3VpL01haW5NZW51L01NMDcucG5nXCIsXG4gICAgTU0wOF9wbmc6IFwicmVzL3VpL01haW5NZW51L01NMDgucG5nXCIsXG4gICAgTU0wOV9wbmc6IFwicmVzL3VpL01haW5NZW51L01NMDkucG5nXCIsXG4gICAgTU0xMF9wbmc6IFwicmVzL3VpL01haW5NZW51L01NMTAucG5nXCIsXG4gICAgTU0xMl9wbmc6IFwicmVzL3VpL01haW5NZW51L01NMTIucG5nXCIsXG4gICAgTU0xM19wbmc6IFwicmVzL3VpL01haW5NZW51L01NMTMucG5nXCIsXG4gICAgTU0xNF9wbmc6IFwicmVzL3VpL01haW5NZW51L01NMTQucG5nXCIsXG4gICAgTU0xNV9wbmc6IFwicmVzL3VpL01haW5NZW51L01NMTUucG5nXCIsXG4gICAgTU0xNl9wbmc6IFwicmVzL3VpL01haW5NZW51L01NMTYucG5nXCIsXG4gICAgTU0xN19wbmc6IFwicmVzL3VpL01haW5NZW51L01NMTcucG5nXCIsXG4gICAgTU0xOF9wbmc6IFwicmVzL3VpL01haW5NZW51L01NMTgucG5nXCIsXG4gICAgTU0xOV9wbmc6IFwicmVzL3VpL01haW5NZW51L01NMTkucG5nXCIsXG4gICAgTU0yMF9wbmc6IFwicmVzL3VpL01haW5NZW51L01NMjAucG5nXCIsXG4gICAgTU0yMV9wbmc6IFwicmVzL3VpL01haW5NZW51L01NMjEucG5nXCIsXG4gICAgTU0yMl9wbmc6IFwicmVzL3VpL01haW5NZW51L01NMjIucG5nXCIsXG4gICAgTU0yM19wbmc6IFwicmVzL3VpL01haW5NZW51L01NMjMucG5nXCIsXG4gICAgTU0yNF9wbmc6IFwicmVzL3VpL01haW5NZW51L01NMjQucG5nXCIsXG4gICAgQ291bnRyeUxheWVyX2pzb246IFwicmVzL3VpL0NvbnRyeUxheWVyLmpzb25cIixcbiAgICBXb3JsZF8xX3BuZzogXCJyZXMvdWkvV29ybGQvV29ybGRfMS5wbmdcIixcbiAgICBXb3JsZF8xX3BsaXN0OiBcInJlcy91aS9Xb3JsZC9Xb3JsZF8xLnBsaXN0XCIsXG4gICAgV29ybGRfNF9wbGlzdDogXCJyZXMvdWkvV29ybGQvV29ybGRfNC5wbGlzdFwiLFxuICAgIFdvcmxkXzRfcG5nOiBcInJlcy91aS9Xb3JsZC9Xb3JsZF80LnBuZ1wiLFxuICAgIFdvcmxkTWFwX3RteDogXCJyZXMvdWkvV29ybGRNYXAudG14XCIsXG4gICAgdGlsZV9pc29fb2Zmc2V0X3BuZzogXCJyZXMvdWkvdGlsZV9pc29fb2Zmc2V0LnBuZ1wiLFxuICAgIHRpbGVfaXNvX29mZnNldF90bXg6IFwicmVzL3VpL3RpbGVfaXNvX29mZnNldC50bXhcIixcbiAgICBpc29fcG5nOiBcInJlcy91aS9pc28ucG5nXCIsXG4gICAgaXNvX3Rlc3QxX3RteDogXCJyZXMvdWkvaXNvLXRlc3QxLnRteFwiLFxuICAgIHJvYm90X3BsaXN0OiBcInJlcy9hcm1hdHVyZS9yb2JvdC5wbGlzdFwiLFxuICAgIHJvYm90X3BuZzogXCJyZXMvYXJtYXR1cmUvcm9ib3QucG5nXCIsXG4gICAgcm9ib3RfeG1sOiBcInJlcy9hcm1hdHVyZS9yb2JvdC54bWxcIlxufTtcblxudmFyIGdfcmVzb3VyY2VzID0gW107XG5mb3IgKHZhciBpIGluIHJlcykge1xuICAgIGdfcmVzb3VyY2VzLnB1c2gocmVzW2ldKTtcbn1cblxuZ2xvYmFsLkdfUkVTID0ge1xuICAgIHJlczogcmVzLFxuICAgIHJlc291cmNlczogZ19yZXNvdXJjZXNcbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgenhoIG9uIDE1LzEwLzkuXG4gKi9cblxudmFyIEJhc2VMYXllciA9IHJlcXVpcmUoJy4uL3dpZGdldC9CYXNlTGF5ZXIuanMnKTtcbm1vZHVsZS5leHBvcnRzID0gQmFzZUxheWVyLmV4dGVuZCh7XG4gICAgY3RvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaGFzRnJhbWUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zdXBlcigpO1xuICAgICAgICB0aGlzLmNvbG9yRnJhbWUuc2V0Q29sb3IoY2MuY29sb3IuV0hJVEUpO1xuXG4gICAgICAgIGNjcy5hcm1hdHVyZURhdGFNYW5hZ2VyLmFkZEFybWF0dXJlRmlsZUluZm8oR19SRVMucmVzLnJvYm90X3BuZywgR19SRVMucmVzLnJvYm90X3BsaXN0LCBHX1JFUy5yZXMucm9ib3RfeG1sKTtcblxuICAgICAgICB0aGlzLnJvYm90ID0gbmV3IGNjcy5Bcm1hdHVyZShcInJvYm90XCIpO1xuICAgICAgICB0aGlzLnJvYm90LnNldFBvc2l0aW9uKHRoaXMud2lkdGggLyA0LCB0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLnJvYm90LmdldEFuaW1hdGlvbigpLnBsYXlXaXRoSW5kZXgoMCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5yb2JvdCk7XG5cbiAgICAgICAgdGhpcy5oZXJvID0gbmV3IGNjcy5Bcm1hdHVyZShcInJvYm90XCIpO1xuICAgICAgICB0aGlzLmhlcm8uc2V0UG9zaXRpb24odGhpcy53aWR0aCAtIHRoaXMud2lkdGggLyA0LCB0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLmhlcm8uZ2V0QW5pbWF0aW9uKCkucGxheVdpdGhJbmRleCgwKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmhlcm8pO1xuXG4gICAgfSxcblxuICAgIHBsYXlSb2JvdEFuaW1hdGlvbjogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB0aGlzLnJvYm90LmdldEFuaW1hdGlvbigpLnBsYXkobmFtZSk7XG4gICAgfSxcblxuICAgIHBsYXlIZXJvQW5pbWF0aW9uOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuaGVyby5nZXRBbmltYXRpb24oKS5wbGF5KG5hbWUpO1xuICAgIH1cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHp4aCBvbiAxNS8xMC85LlxuICovXG5cbnZhciBCYXNlTGF5ZXIgPSByZXF1aXJlKCcuLi93aWRnZXQvQmFzZUxheWVyLmpzJyk7XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbm1vZHVsZS5leHBvcnRzID0gQmFzZUxheWVyLmV4dGVuZCh7XG4gICAgbWFwOiBudWxsLFxuICAgIF9pc01vdmVkOiBudWxsLFxuICAgIGN0b3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLl9zdXBlcigpO1xuICAgICAgICB2YXIgbWFwID0gbmV3IGNjLlRNWFRpbGVkTWFwKEdfUkVTLnJlcy5Xb3JsZE1hcF90bXgpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKG1hcCwgMCk7XG5cbiAgICAgICAgbWFwLnNjYWxlID0gMC4yO1xuICAgICAgICAvL21hcC5hbmNob3JYID0gMC41O1xuICAgICAgICAvL21hcC5hbmNob3JZID0gMC41O1xuICAgICAgICBtYXAueCA9IC1tYXAubWFwV2lkdGggKiBtYXAudGlsZVdpZHRoIC8gMiArIGNjLndpblNpemUud2lkdGggLyAyOy8vLW1hcC5nZXRCb3VuZGluZ0JveCgpLndpZHRoIC8gMiArIGNjLndpblNpemUud2lkdGggLyAyO1xuICAgICAgICBtYXAueSA9IC1tYXAubWFwSGVpZ2h0ICogbWFwLnRpbGVIZWlnaHQgKyBjYy53aW5TaXplLmhlaWdodDsgIC8vbWFwLnkgPSAtbWFwLmdldEJvdW5kaW5nQm94KCkuaGVpZ2h0ICsgY2Mud2luU2l6ZS5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcblxuICAgICAgICAvL3RoaXMubW92ZVRvdGlsZShjYy5wKDUwLCA1MCkpO1xuICAgIH0sXG5cbiAgICBfb25Ub3VjaE1vdmVkOiBmdW5jdGlvbihzZW5kZXIsIHRvdWNoKSB7XG5cbiAgICAgICAgdmFyIGRpZmYgPSB0b3VjaC5nZXREZWx0YSgpO1xuICAgICAgICB2YXIgY3VycmVudFBvcyA9IHRoaXMubWFwLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGN1cnJlbnRQb3MgPSBjYy5wQWRkKGRpZmYsIGN1cnJlbnRQb3MpO1xuICAgICAgICB0aGlzLm1hcC5zZXRQb3NpdGlvbihjdXJyZW50UG9zKTtcbiAgICAgICAgY2MubG9nKFwibW92ZWQ6XCIgKyBKU09OLnN0cmluZ2lmeShjdXJyZW50UG9zKSk7XG4gICAgICAgIHRoaXMuX2lzTW92ZWQgPSB0cnVlO1xuXG4gICAgICAgIHZhciBwID0gdGhpcy5jb252ZXJ0VG90aWxlKGN1cnJlbnRQb3MpO1xuICAgICAgICBjYy5sb2coY2MuZm9ybWF0U3RyKFwidGlsZSAlZCwlZFwiLCBwLngsIHAueSkpO1xuICAgIH0sXG5cbiAgICBfb25Ub3VjaEVuZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc01vdmVkKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVUb3RpbGUoY2MucChfLnJhbmRvbSgwLCAxMDApLCBfLnJhbmRvbSgwLCAxMDApKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNNb3ZlZCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBtb3ZlVG90aWxlOiBmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgICBjYy5sb2coXCI+PlwiICsgSlNPTi5zdHJpbmdpZnkocG9zaXRpb24pKTtcbiAgICAgICAgdmFyIG1hcCA9IHRoaXMubWFwO1xuICAgICAgICB2YXIgbWFwU2l6ZSA9IG1hcC5nZXRNYXBTaXplKCk7XG4gICAgICAgIHZhciB0aWxlV2lkdGggPSBtYXAuZ2V0Qm91bmRpbmdCb3goKS53aWR0aCAvIG1hcC5nZXRNYXBTaXplKCkud2lkdGg7XG4gICAgICAgIHZhciB0aWxlSGVpZ2h0ID0gbWFwLmdldEJvdW5kaW5nQm94KCkuaGVpZ2h0IC8gbWFwLmdldE1hcFNpemUoKS5oZWlnaHQ7XG5cbiAgICAgICAgdmFyIHZhcmlhYmxlMSA9IC0ocG9zaXRpb24ueCArIG1hcFNpemUud2lkdGggLyAyIC0gbWFwU2l6ZS5oZWlnaHQpICogdGlsZVdpZHRoICogdGlsZUhlaWdodCA7XG4gICAgICAgIHZhciB2YXJpYWJsZTIgPSAtKC1wb3NpdGlvbi55ICsgbWFwU2l6ZS53aWR0aCAvIDIgKyBtYXBTaXplLmhlaWdodCkgKiB0aWxlV2lkdGggKiB0aWxlSGVpZ2h0IDtcblxuICAgICAgICB2YXIgcG9zeCA9ICh2YXJpYWJsZTEgKyB2YXJpYWJsZTIpIC8gMiAvIHRpbGVIZWlnaHQgKyBjYy53aW5TaXplLndpZHRoIC8gMjtcbiAgICAgICAgdmFyIHBvc3kgPSAodmFyaWFibGUyIC0gdmFyaWFibGUxKSAvIDIgLyB0aWxlV2lkdGggKyBjYy53aW5TaXplLmhlaWdodDtcblxuICAgICAgICBjYy5sb2coY2MuZm9ybWF0U3RyKFwic2NyZWVuICVkLCVkXCIsIHBvc3gsIHBvc3kpKTtcblxuICAgICAgICB2YXIgcCA9IHRoaXMuY29udmVydFRvdGlsZShjYy5wKHBvc3gsIHBvc3kpKTtcbiAgICAgICAgY2MubG9nKFwidGlsZSAlZCwlZFwiLCBwLngsIHAueSk7XG4gICAgICAgIHJldHVybiBtYXAuc2V0UG9zaXRpb24ocG9zeCwgcG9zeSk7XG5cbiAgICB9LFxuXG4gICAgY29udmVydFRvdGlsZTogZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgICAgdmFyIG1hcCA9IHRoaXMubWFwO1xuXG4gICAgICAgIHBvc2l0aW9uLnggLT0gY2Mud2luU2l6ZS53aWR0aCAvIDI7XG4gICAgICAgIHBvc2l0aW9uLnkgLT0gY2Mud2luU2l6ZS5oZWlnaHQ7XG5cbiAgICAgICAgdmFyICBtYXBTaXplID0gbWFwLmdldE1hcFNpemUoKTtcbiAgICAgICAgdmFyICB0aWxlV2lkdGggPSBtYXAuZ2V0Qm91bmRpbmdCb3goKS53aWR0aCAvIG1hcC5nZXRNYXBTaXplKCkud2lkdGg7XG4gICAgICAgIHZhciAgdGlsZUhlaWdodCA9IG1hcC5nZXRCb3VuZGluZ0JveCgpLmhlaWdodCAvIG1hcC5nZXRNYXBTaXplKCkuaGVpZ2h0O1xuICAgICAgICAvL3ZhciBwb3N4ID0gbWFwU2l6ZS53aWR0aCAvIDIgKyBwb3NpdGlvbi54IC8gdGlsZVdpZHRoO1xuICAgICAgICAvL3ZhciBwb3N5ID0gbWFwU2l6ZS5oZWlnaHQgKyBwb3NpdGlvbi55IC8gdGlsZUhlaWdodDtcbiAgICAgICAgdmFyIHJvdyA9IHBvc2l0aW9uLnkgLyB0aWxlSGVpZ2h0O1xuICAgICAgICB2YXIgY29sID0gcG9zaXRpb24ueCAvIHRpbGVXaWR0aDtcblxuICAgICAgICB2YXIgcG9zeCA9IG1hcFNpemUud2lkdGggKyByb3cgKyBjb2wgKyBtYXBTaXplLndpZHRoIC8gMjtcbiAgICAgICAgdmFyIHBvc3kgPSBtYXBTaXplLmhlaWdodCArIHJvdyArIGNvbCArIG1hcFNpemUud2lkdGggLyAyO1xuXG4gICAgICAgIHJldHVybiBjYy5wKHBvc3gsIHBvc3kpO1xuICAgIH1cbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSB6eGggb24gMTUvMTAvMTUuXG4gKi9cblxudmFyIEJhc2VMYXllciA9IHJlcXVpcmUoJy4uL3dpZGdldC9CYXNlTGF5ZXIuanMnKTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuXG52YXIgR2FtZUxheWVyID0gQmFzZUxheWVyLmV4dGVuZCh7XG4gICAgZGF0YTogbnVsbCxcbiAgICBpbmRleDogMCxcbiAgICBjdG9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sb2FkVUkoR19SRVMucmVzLk1haW5NZW51X2pzb24pO1xuICAgIH0sXG5cbiAgICBzZXREYXRhOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuX2Zvb2Quc2V0U3RyaW5nKFwi6aOf54mpOlwiICsgZGF0YS5mb29kKTtcbiAgICAgICAgdGhpcy5fd29vZC5zdHJpbmcgPSBcIuacqOadkDpcIiArIGRhdGEud29vZDtcbiAgICAgICAgdGhpcy5fZ29sZC5zdHJpbmcgPSBcIumHkeW4gTpcIiArIGRhdGEuZ29sZDtcbiAgICB9LFxuXG4gICAgX29uSG9tZVRvdWNoRW5kZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL2NjLmxvZyhcIl9vbkhvbWVUb3VjaEVuZGVkXCIpO1xuICAgICAgICBpZiAodGhpcy5zd2l0Y2hMYXllcikge1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hMYXllcigpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9vblRhc2tUb3VjaEVuZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9jYy5sb2coXCJfb25UYXNrVG91Y2hFbmRlZFwiKTtcbiAgICAgICAgLy90aGlzLmluZGV4ID0gXy5yYW5kb20oMSwgMyk7XG4gICAgICAgIHRoaXMucGxheUFjdGlvbih0aGlzLmluZGV4KTtcblxuICAgIH0sXG5cbiAgICBfb25QdnBUb3VjaEVuZGVkOiBmdW5jdGlvbigpIHtcblxuICAgIH1cblxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lTGF5ZXI7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgenhoIG9uIDE1LzEwLzkuXG4gKi9cbnZhciBCYXNlTGF5ZXIgPSByZXF1aXJlKCcuLi93aWRnZXQvQmFzZUxheWVyLmpzJyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJy4uLy4uL2xpYi9lbWl0dGVyLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZUxheWVyLmV4dGVuZCh7XG4gICAgY3RvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaGFzRnJhbWUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zdXBlcigpO1xuICAgICAgICB0aGlzLmxvYWRVSShHX1JFUy5yZXMuTG9naW5fanNvbik7XG4gICAgfSxcblxuICAgIF9vblRvdWNoRW5kZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmVudGVyR2FtZSgpO1xuICAgIH1cblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgenhoIG9uIDE1LzEwLzE1LlxuICovXG52YXIgcHVyZW12YyA9IHJlcXVpcmUoJ3B1cmVtdmMnKS5wdXJlbXZjO1xudmFyIENpdHlMYXllciA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudC9DaXR5TGF5ZXIuanMnKTtcblxudmFyIHJvYm90RlNNID0gcmVxdWlyZSgnLi4vLi4vZnNtL1JvYm90RlNNLmpzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHB1cmVtdmMuZGVmaW5lXG4oXG4gICAgLy8gQ0xBU1MgSU5GT1xuICAgIHtcbiAgICAgICAgbmFtZTogJ3ZpZXcubWVkaWF0b3IuQ2l0eU1lZGlhdG9yJyxcbiAgICAgICAgcGFyZW50OiBwdXJlbXZjLk1lZGlhdG9yLFxuICAgICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcHVyZW12Yy5NZWRpYXRvci5jYWxsKHRoaXMsIHRoaXMuY29uc3RydWN0b3IuTkFNRSk7XG5cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8gSU5TVEFOQ0UgTUVNQkVSU1xuICAgIHtcblxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy52aWV3Q29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Q29tcG9uZW50ID0gbmV3IENpdHlMYXllcigpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0NvbXBvbmVudC5yZXRhaW4oKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucm9ib3RGU00gPSByb2JvdEZTTSgncm9ib3QnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhlcm9GU00gPSByb2JvdEZTTSgnaGVybycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldFJlczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzTWFuYWdlci5sb2FkR3JvdXAocmVzTWFuYWdlci5ncm91cHMucm9ib3QpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICAgICAgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0czogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBNZXNzYWdlcy5FTlRFUl9DSVRZLFxuICAgICAgICAgICAgICAgIE1lc3NhZ2VzLkVOVEVSX0NPVU5UUlksXG5cbiAgICAgICAgICAgICAgICAvL+eKtuaAgeacuuWPkeeUn+WPmOWMllxuICAgICAgICAgICAgICAgIEZTTUhlbHBlci5jaGFuZ2VkTWVzc2FnZSgnaGVybycpLFxuICAgICAgICAgICAgICAgIEZTTUhlbHBlci5jaGFuZ2VkTWVzc2FnZSgncm9ib3QnKSxcbiAgICAgICAgICAgICAgICAvL3RoaXMucm9ib3RGU00uQ0hBTkdFRCxcbiAgICAgICAgICAgICAgICAvL3RoaXMuaGVyb0ZTTS5DSEFOR0VELFxuXG4gICAgICAgICAgICAgICAgLy/nirbmgIHliIfmjaLml7blj5HpgIHnmoTpgJrnn6VcbiAgICAgICAgICAgICAgICBNZXNzYWdlcy5FTlRFUl9SVU4sICAvL+i/m+WFpXJ1blxuICAgICAgICAgICAgICAgIE1lc3NhZ2VzLkVYSVRfU1RPUCAgIC8v6YCA5Ye6c3RvcFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKiogQG92ZXJyaWRlICovXG4gICAgICAgIGhhbmRsZU5vdGlmaWNhdGlvbjogZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgICAgICAgc3dpdGNoIChub3RpZmljYXRpb24uZ2V0TmFtZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlcy5FTlRFUl9DSVRZOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhY2FkZS5zZW5kTm90aWZpY2F0aW9uKE1lc3NhZ2VzLlNIT1dfVklFVywge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTp0aGlzLmNvbnN0cnVjdG9yLk5BTUUsXG4gICAgICAgICAgICAgICAgICAgICAgICB6T3JkZXI6IDFcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZXMuRU5URVJfQ09VTlRSWTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3Q29tcG9uZW50LnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBGU01IZWxwZXIuY2hhbmdlZE1lc3NhZ2UoJ3JvYm90Jyk6XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcInJvYm90IOeKtuaAgeWPmOWMljpcIiArIG5vdGlmaWNhdGlvbi5nZXRCb2R5KCkubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld0NvbXBvbmVudC5wbGF5Um9ib3RBbmltYXRpb24obm90aWZpY2F0aW9uLmdldEJvZHkoKS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBGU01IZWxwZXIuY2hhbmdlZE1lc3NhZ2UoJ2hlcm8nKTpcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiaGVybyDnirbmgIHlj5jljJY6XCIgKyBub3RpZmljYXRpb24uZ2V0Qm9keSgpLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdDb21wb25lbnQucGxheUhlcm9BbmltYXRpb24obm90aWZpY2F0aW9uLmdldEJvZHkoKS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VzLkVOVEVSX1JVTjpcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKCflsIbopoHov5vlhaVydW4nKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlcy5FWElUX1NUT1A6XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZygn5bCG6KaB6YCA5Ye6c3RvcCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKiogQG92ZXJyaWRlICovXG4gICAgICAgIG9uUmVnaXN0ZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICAgICAgb25SZW1vdmU6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyBTVEFUSUMgTUVNQkVSU1xuICAgIHtcbiAgICAgICAgTkFNRTogJ0NpdHlNZWRpYXRvcidcbiAgICB9XG4pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHp4aCBvbiAxNS8xMC8xNi5cbiAqL1xuXG52YXIgcHVyZW12YyA9IHJlcXVpcmUoJ3B1cmVtdmMnKS5wdXJlbXZjO1xudmFyIENvdW50cnlMYXllciA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudC9Db3VudHJ5TGF5ZXIuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwdXJlbXZjLmRlZmluZVxuKFxuICAgIC8vIENMQVNTIElORk9cbiAgICB7XG4gICAgICAgIG5hbWU6ICd2aWV3Lm1lZGlhdG9yLkNvdW50cnlNZWRpYXRvcicsXG4gICAgICAgIHBhcmVudDogcHVyZW12Yy5NZWRpYXRvcixcbiAgICAgICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHB1cmVtdmMuTWVkaWF0b3IuY2FsbCh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLk5BTUUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyBJTlNUQU5DRSBNRU1CRVJTXG4gICAge1xuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnZpZXdDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdDb21wb25lbnQgPSBuZXcgQ291bnRyeUxheWVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Q29tcG9uZW50LnJldGFpbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldFJlczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIEdfUkVTLnJlcy5Xb3JsZF8xX3BuZyxcbiAgICAgICAgICAgICAgICBHX1JFUy5yZXMuV29ybGRfNF9wbmcsXG4gICAgICAgICAgICAgICAgR19SRVMucmVzLldvcmxkTWFwX3RteFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICAgICAgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0czogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBNZXNzYWdlcy5FTlRFUl9DT1VOVFJZLFxuICAgICAgICAgICAgICAgIE1lc3NhZ2VzLkVOVEVSX0NJVFlcbiAgICAgICAgICAgIF07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqIEBvdmVycmlkZSAqL1xuICAgICAgICBoYW5kbGVOb3RpZmljYXRpb246IGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICAgICAgICAgIHN3aXRjaCAobm90aWZpY2F0aW9uLmdldE5hbWUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZXMuRU5URVJfQ09VTlRSWTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWNhZGUuc2VuZE5vdGlmaWNhdGlvbihNZXNzYWdlcy5TSE9XX1ZJRVcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6dGhpcy5jb25zdHJ1Y3Rvci5OQU1FLFxuICAgICAgICAgICAgICAgICAgICAgICAgek9yZGVyOiAxXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VzLkVOVEVSX0NJVFk6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpZXdDb21wb25lbnQgJiYgdGhpcy52aWV3Q29tcG9uZW50LmdldFBhcmVudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdDb21wb25lbnQucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqIEBvdmVycmlkZSAqL1xuICAgICAgICBvblJlZ2lzdGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfSxcblxuICAgICAgICAvKiogQG92ZXJyaWRlICovXG4gICAgICAgIG9uUmVtb3ZlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8gU1RBVElDIE1FTUJFUlNcbiAgICB7XG4gICAgICAgIE5BTUU6ICdDb3VudHJ5TWVkaWF0b3InXG4gICAgfVxuKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgenhoIG9uIDE1LzEwLzE2LlxuICovXG5cbi8qKlxuICogQ3JlYXRlZCBieSB6eGggb24gMTUvMTAvMTUuXG4gKi9cbnZhciBwdXJlbXZjID0gcmVxdWlyZSgncHVyZW12YycpLnB1cmVtdmM7XG52YXIgR2FtZUxheWVyID0gcmVxdWlyZSgnLi4vY29tcG9uZW50L0dhbWVMYXllci5qcycpO1xuLy92YXIgSW5qZWN0SGVyb0ZTTUNvbW1hbmQgPSByZXF1aXJlKCcuLi8uLi9jb250cm9sbGVyL2NvbW1hbmQvSW5qZWN0SGVyb0ZTTUNvbW1hbmQuanMnKTtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHB1cmVtdmMuZGVmaW5lXG4oXG4gICAgLy8gQ0xBU1MgSU5GT1xuICAgIHtcbiAgICAgICAgbmFtZTogJ3ZpZXcubWVkaWF0b3IuR2FtZU1lZGlhdG9yJyxcbiAgICAgICAgcGFyZW50OiBwdXJlbXZjLk1lZGlhdG9yLFxuICAgICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcHVyZW12Yy5NZWRpYXRvci5jYWxsKHRoaXMsIHRoaXMuY29uc3RydWN0b3IuTkFNRSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIElOU1RBTkNFIE1FTUJFUlNcbiAgICB7XG4gICAgICAgIG9uUmVnaXN0ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5fZ2FtZVByb3h5ID0gdGhpcy5mYWNhZGUucmV0cmlldmVQcm94eSgnR2FtZVByb3h5Jyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0UmVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNNYW5hZ2VyLmxvYWRHcm91cChyZXNNYW5hZ2VyLmdyb3Vwcy5NYWluTWVudSk7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBjaXR5TGF5ZXI6IG51bGwsXG4gICAgICAgIGNoaWxkTWVkaWF0b3I6IG51bGwsXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudmlld0NvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0NvbXBvbmVudCA9IG5ldyBHYW1lTGF5ZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdDb21wb25lbnQuc2V0RGF0YSh0aGlzLl9nYW1lUHJveHkpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0NvbXBvbmVudC5yZXRhaW4oKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudmlld0NvbXBvbmVudC5zd2l0Y2hMYXllciA9IHRoaXMuc3dpdGNoTGF5ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdDb21wb25lbnQucGxheUFjdGlvbiA9IHRoaXMucGxheUFjdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHN3aXRjaExheWVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkTWVkaWF0b3IgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZhY2FkZS5zZW5kTm90aWZpY2F0aW9uKE1lc3NhZ2VzLkVOVEVSX0NPVU5UUlkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZhY2FkZS5zZW5kTm90aWZpY2F0aW9uKE1lc3NhZ2VzLkVOVEVSX0NJVFkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHBsYXlBY3Rpb246IGZ1bmN0aW9uKGFjdGlvbikge1xuXG4gICAgICAgICAgICAvL3ZhciBtZWRpYXRvciA9IHRoaXMuZmFjYWRlLnJldHJpZXZlTWVkaWF0b3IoJ2hlcm8nKTtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBGU01IZWxwZXIuYWN0aW9uTWVzc2FnZSgnaGVybycpO1xuICAgICAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKGFjdGlvbiwge25hbWU6J2hlcm8nfSwgXy5yYW5kb20oMSwgMykpO1xuXG4gICAgICAgICAgICBhY3Rpb24gPSBGU01IZWxwZXIuYWN0aW9uTWVzc2FnZSgncm9ib3QnKTtcbiAgICAgICAgICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbihhY3Rpb24sIHtuYW1lOidyb2JvdCd9LCBfLnJhbmRvbSgxLCAzKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqIEBvdmVycmlkZSAqL1xuICAgICAgICBsaXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIE1lc3NhZ2VzLkVOVEVSX0NJVFksXG4gICAgICAgICAgICAgICAgTWVzc2FnZXMuRU5URVJfQ09VTlRSWSxcbiAgICAgICAgICAgICAgICBNZXNzYWdlcy5HQU1FX0RBVEFfQ0hBTkdFXG4gICAgICAgICAgICBdO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICAgICAgaGFuZGxlTm90aWZpY2F0aW9uOiBmdW5jdGlvbiAobm90aWZpY2F0aW9uKSB7XG5cblxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGdhbWVWaWV3SGFuZGxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYudmlld0NvbXBvbmVudCAmJiBzZWxmLnZpZXdDb21wb25lbnQuZ2V0UGFyZW50KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYuZmFjYWRlLnNlbmROb3RpZmljYXRpb24oTWVzc2FnZXMuU0hPV19WSUVXLCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6c2VsZi5jb25zdHJ1Y3Rvci5OQU1FLFxuICAgICAgICAgICAgICAgICAgICB6T3JkZXI6IDEwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG5vdGlmaWNhdGlvbi5nZXROYW1lKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VzLkVOVEVSX0NJVFk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRNZWRpYXRvciA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVWaWV3SGFuZGxlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlcy5FTlRFUl9DT1VOVFJZOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkTWVkaWF0b3IgPSAyO1xuICAgICAgICAgICAgICAgICAgICBnYW1lVmlld0hhbmRsZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VzLkdBTUVfREFUQV9DSEFOR0U6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld0NvbXBvbmVudC5zZXREYXRhKHRoaXMuX2dhbWVQcm94eSk7XG4gICAgICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBTVEFUSUMgTUVNQkVSU1xuICAgIHtcbiAgICAgICAgTkFNRTogJ0dhbWVNZWRpYXRvcidcbiAgICB9XG4pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHp4aCBvbiAxNS8xMC8xMC5cbiAqL1xuXG52YXIgcHVyZW12YyA9IHJlcXVpcmUoJ3B1cmVtdmMnKS5wdXJlbXZjO1xudmFyIExvZ29MYXllciA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudC9Mb2dvTGF5ZXIuanMnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHB1cmVtdmMuZGVmaW5lKFxuICAgIC8vIENMQVNTIElORk9cbiAgICB7XG4gICAgICAgIG5hbWU6ICd2aWV3Lm1lZGlhdG9yLkxvZ2luTWVkaWF0b3InLFxuICAgICAgICBwYXJlbnQ6IHB1cmVtdmMuTWVkaWF0b3IsXG4gICAgICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwdXJlbXZjLk1lZGlhdG9yLmNhbGwodGhpcywgdGhpcy5jb25zdHJ1Y3Rvci5OQU1FKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8gSU5TVEFOQ0UgTUVNQkVSU1xuICAgIHtcblxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMudmlld0NvbXBvbmVudCA9IG5ldyBMb2dvTGF5ZXIoKTtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIC8vdGhpcy52aWV3Q29tcG9uZW50LmVudGVyR2FtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gICAgc2VsZi5zZW5kTm90aWZpY2F0aW9uKENvbW1hbmQuUlVOX0dBTUUpO1xuICAgICAgICAgICAgLy99XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0UmVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNNYW5hZ2VyLmxvYWRHcm91cChyZXNNYW5hZ2VyLmdyb3Vwcy5sb2dvKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKiogQG92ZXJyaWRlICovXG4gICAgICAgIGxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgQ29tbWFuZC5SVU5fR0FNRSxcbiAgICAgICAgICAgICAgICBNZXNzYWdlcy5MT0FEX0NPTVBMRVRFXG4gICAgICAgICAgICBdO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICAgICAgaGFuZGxlTm90aWZpY2F0aW9uOiBmdW5jdGlvbiAobm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG5vdGlmaWNhdGlvbi5nZXROYW1lKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIENvbW1hbmQuUlVOX0dBTUU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFjYWRlLnJlbW92ZU1lZGlhdG9yKHRoaXMuY29uc3RydWN0b3IuTkFNRSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZXMuTE9BRF9DT01QTEVURTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKENvbW1hbmQuUlVOX0dBTUUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICAgICAgb25SZWdpc3RlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICAgICAgb25SZW1vdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZXdDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdDb21wb25lbnQucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0NvbXBvbmVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBTVEFUSUMgTUVNQkVSU1xuICAgIHtcbiAgICAgICAgTkFNRTogJ0xvZ2luTWVkaWF0b3InXG4gICAgfVxuKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB6eGggb24gMTUvMTAvOS5cbiAqL1xuXG52YXIgcHVyZW12YyA9IHJlcXVpcmUoJ3B1cmVtdmMnKS5wdXJlbXZjO1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcHVyZW12Yy5kZWZpbmVcbihcbiAgICAvLyBDTEFTUyBJTkZPXG4gICAge1xuICAgICAgICBuYW1lOiAndmlldy5tZWRpYXRvci5TY2VuZU1lZGlhdG9yJyxcbiAgICAgICAgcGFyZW50OiBwdXJlbXZjLk1lZGlhdG9yLFxuICAgICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcHVyZW12Yy5NZWRpYXRvci5jYWxsKHRoaXMsIHRoaXMuY29uc3RydWN0b3IuTkFNRSk7XG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgLy8gSU5TVEFOQ0UgTUVNQkVSU1xuICAgIHtcblxuICAgICAgICAvKiogQG92ZXJyaWRlICovXG4gICAgICAgIGxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgTWVzc2FnZXMuUlVOX1NDRU5FLFxuICAgICAgICAgICAgICAgIE1lc3NhZ2VzLlNIT1dfVklFV1xuICAgICAgICAgICAgXTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKiogQG92ZXJyaWRlICovXG4gICAgICAgIGhhbmRsZU5vdGlmaWNhdGlvbjogZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuXG5cbiAgICAgICAgICAgIHN3aXRjaCAobm90aWZpY2F0aW9uLmdldE5hbWUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZXMuUlVOX1NDRU5FOlxuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IG5vdGlmaWNhdGlvbi5nZXRCb2R5KCkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZpZXdNZWRpYXRvciA9IHRoaXMuZmFjYWRlLnJldHJpZXZlTWVkaWF0b3IobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVuU2NlbmUodmlld01lZGlhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlcy5TSE9XX1ZJRVc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xheWVyKG5vdGlmaWNhdGlvbi5nZXRCb2R5KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJ1blNjZW5lOiBmdW5jdGlvbih2aWV3TWVkaWF0b3IpIHtcblxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHJlcyA9IHZpZXdNZWRpYXRvci5nZXRSZXMoKTtcblxuICAgICAgICAgICAgdmFyIGhhbmRsZVJ1blNjZW5lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmlld01lZGlhdG9yLmluaXQoKTtcbiAgICAgICAgICAgICAgICB2YXIgc2NlbmUgPSBzZWxmLmdldFZpZXdDb21wb25lbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNjZW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudmlld0NvbXBvbmVudCA9IG5ldyBjYy5TY2VuZSgpO1xuICAgICAgICAgICAgICAgICAgICBzY2VuZSA9IHNlbGYuZ2V0Vmlld0NvbXBvbmVudCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IHZpZXdNZWRpYXRvci5nZXRWaWV3Q29tcG9uZW50KCk7XG4gICAgICAgICAgICAgICAgc2NlbmUuYWRkQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLnJ1blNjZW5lKHNjZW5lKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICghY2Muc3lzLmlzTmF0aXZlICYmICFfLmlzRW1wdHkocmVzKSkge1xuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHJlcywgaGFuZGxlUnVuU2NlbmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVSdW5TY2VuZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNob3dMYXllcjogZnVuY3Rpb24oYm9keSkge1xuICAgICAgICAgICAgdmFyIHJlcyxcbiAgICAgICAgICAgICAgICBwYXJlbnRNZWRpYXRvciA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdmlld01lZGlhdG9yID0gdGhpcy5mYWNhZGUucmV0cmlldmVNZWRpYXRvcihib2R5Lm5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoXy5pc1N0cmluZyhib2R5LnBhcmVudCkpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRNZWRpYXRvciA9IHRoaXMuZmFjYWRlLnJldHJpZXZlTWVkaWF0b3IoYm9keS5wYXJlbnQpO1xuICAgICAgICAgICAgICAgIGNjLmFzc2VydChwYXJlbnRNZWRpYXRvciwgXCLkuI3og73mo4DntKLliLBcIiArIGJvZHkucGFyZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZpZXdNZWRpYXRvci5nZXRSZXMpIHtcbiAgICAgICAgICAgICAgICByZXMgPSB2aWV3TWVkaWF0b3IuZ2V0UmVzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBoYW5kbGVDcmVhdGVMYXllciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24odmlld01lZGlhdG9yLmluaXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXdNZWRpYXRvci5pbml0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkTGF5ZXIgPSB2aWV3TWVkaWF0b3IuZ2V0Vmlld0NvbXBvbmVudCgpO1xuICAgICAgICAgICAgICAgIHBhcmVudE1lZGlhdG9yLmdldFZpZXdDb21wb25lbnQoKS5hZGRDaGlsZChjaGlsZExheWVyLCBib2R5LnpPcmRlcik7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoIWNjLnN5cy5pc05hdGl2ZSAmJiAhXy5pc0VtcHR5KHJlcykpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChyZXMsIGhhbmRsZUNyZWF0ZUxheWVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ3JlYXRlTGF5ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcbiAgICAvLyBTVEFUSUMgTUVNQkVSU1xuICAgIHtcbiAgICAgICAgTkFNRTogJ1NjZW5lTWVkaWF0b3InXG4gICAgfVxuKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB6eGggb24gMTUvMTAvMTAuXG4gKi9cblxuLyoqXG4g77yIMe+8ieWNiumAj+aYjuiDjOaZr+Wxgu+8m1xuIO+8iDLvvInngrnlh7vkuovku7bvvIzmjqfliLbov5nkuKrlsYLmmK/lkKblj6/pgI/ov4fngrnlh7vvvJtcbiDvvIgz77yJ5by55Ye65pe25piv5ZCm5bim5by55Ye65Yqo55S777yI5aaC5o+Q56S65by55qGGVGlwc++8jOaIluWKn+iDvemhtVBhZ2XmiYDpnIDopoHnmoTlvLnlh7rliqjnlLvvvInvvJtcbiDvvIg077yJ5ouT5bGV5pa55rOV77yI5aaC77yM5b2T5YmN6aG16Z2i5Yqg6L29Y29jb3N0dWRpb+eahOaWh+S7tueahOaWueazle+8jOWGheWtmOaOp+WItueuoeeQhuetie+8iVxuICovXG52YXIgc3ogPSByZXF1aXJlKCcuLi8uLi9saWIvVUlMb2FkZXIuanMnKTtcblxuQmFzZUxheWVyID0gY2MuTGF5ZXIuZXh0ZW5kKHtcbiAgICBpc1Nob3dBY3Rpb246ICAgICAgIGZhbHNlLCAgICAgIC8v5piv5ZCm5Lul5Yqo55S75pi+56S6XG4gICAgaGFzRnJhbWU6ICAgICAgICAgICBmYWxzZSwgICAgICAvL+aYr+WQpuaYvuekuuiDjOaZr1xuICAgIGNvbG9yRnJhbWU6ICAgICAgICAgbnVsbCwgICAgICAgLy/popzoibLog4zmma9cbiAgICBjdG9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fc3VwZXIoKTtcbiAgICAgICAgLy/liJvlu7rljYrpgI/mmI7nqpflj6NcbiAgICAgICAgdGhpcy5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAvL+aYvuekuuWKqOeUu1xuICAgICAgICB0aGlzLnNob3dBY3Rpb24oKTtcbiAgICB9LFxuXG4gICAgb25FbnRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX3N1cGVyKCk7XG4gICAgICAgIC8v5rOo5YaM6Kem5pG45LqL5Lu2XG4gICAgICAgIHN6LnVpbG9hZGVyLnJlZ2lzdGVyVG91Y2hFdmVudCh0aGlzKTtcbiAgICB9LFxuXG4gICAgc2V0TWVkaWF0b3I6IGZ1bmN0aW9uKG1lZGlhdG9yKSB7XG4gICAgICAgIHRoaXMubWVkaWF0b3IgPSBtZWRpYXRvcjtcbiAgICB9LFxuXG4gICAgY3JlYXRlRnJhbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0aGlzLmhhc0ZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9yRnJhbWUgPSBuZXcgY2MuTGF5ZXJDb2xvcihjYy5jb2xvcigwLCAwLCAwLCAyMDApKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5jb2xvckZyYW1lLCAtMSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2hvd0FjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2hvd0FjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZXRTY2FsZSgwLjgpO1xuICAgICAgICAgICAgdmFyIHNjYWxlVG8xID0gbmV3IGNjLlNjYWxlVG8oMC4xLCAxLjEpLmVhc2luZyhjYy5lYXNlSW4oMikpO1xuICAgICAgICAgICAgdmFyIHNjYWxlVG8yID0gbmV3IGNjLlNjYWxlVG8oMC4xLCAxKTtcbiAgICAgICAgICAgIHZhciBzZXF1ZW5jZSA9IG5ldyBjYy5TZXF1ZW5jZShzY2FsZVRvMSwgc2NhbGVUbzIpO1xuICAgICAgICAgICAgdGhpcy5ydW5BY3Rpb24oc2VxdWVuY2UpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGxvYWRVSTogZnVuY3Rpb24odWlGaWxlKSB7XG4gICAgICAgIHZhciByb290ID0gc3oudWlsb2FkZXIud2lkZ2V0RnJvbUpzb25GaWxlKHRoaXMsIHVpRmlsZSk7XG4gICAgICAgIC8v6Ieq5Yqo6YCC5bqU5bGP5bmVXG4gICAgICAgIHJvb3Quc2V0Q29udGVudFNpemUoY2Mud2luU2l6ZSk7XG4gICAgICAgIGNjdWkuaGVscGVyLmRvTGF5b3V0KHJvb3QpXG4gICAgfSxcblxuICAgIHNldENvbG9yOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5jb2xvckZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9yRnJhbWUuc2V0Q29sb3IodmFsdWUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9vblRvdWNoQmVnYW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb25Ub3VjaE1vdmVkIHx8IHRoaXMuX29uVG91Y2hFbmRlZCA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlTGF5ZXI7IiwiZXhwb3J0cy5wdXJlbXZjID0gcmVxdWlyZShcIi4vbGliL3B1cmVtdmMtMS4wLjEtbW9kLmpzXCIpO1xuZXhwb3J0cy5wdXJlbXZjLnN0YXRlbWFjaGluZSA9IHJlcXVpcmUoXCIuL2xpYi9wdXJlbXZjLXN0YXRlbWFjaGluZS0xLjAtbW9kLmpzXCIpOyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogUHVyZU1WQyBKUyBOYXRpdmUgUG9ydCBieSBEYXZpZCBGb2xleSwgRnLDqWTDqXJpYyBTYXVuaWVyLCAmIEFsYWluIER1Y2hlc25lYXUgXG4gKiBDb3B5cmlnaHQoYykgMjAwNi0yMDEyIEZ1dHVyZXNjYWxlLCBJbmMuLCBTb21lIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFJldXNlIGdvdmVybmVkIGJ5IENyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb24gMy4wIFxuICogaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvMy4wL3VzL1xuICogQGF1dGhvciBkYXZpZC5mb2xleUBwdXJlbXZjLm9yZyBcbiAqL1xuXG5cbiBcdC8qIGltcGxlbWVudGF0aW9uIGJlZ2luICovXG5cdFxuXHRcbi8qKlxuICogQGF1dGhvciBQdXJlTVZDIEpTIE5hdGl2ZSBQb3J0IGJ5IERhdmlkIEZvbGV5LCBGcsOpZMOpcmljIFNhdW5pZXIsICYgQWxhaW4gRHVjaGVzbmVhdSBcbiAqIEBhdXRob3IgQ29weXJpZ2h0KGMpIDIwMDYtMjAxMiBGdXR1cmVzY2FsZSwgSW5jLiwgU29tZSByaWdodHMgcmVzZXJ2ZWQuXG4gKiBcbiAqIEBjbGFzcyBwdXJlbXZjLk9ic2VydmVyXG4gKiBcbiAqIEEgYmFzZSBPYnNlcnZlciBpbXBsZW1lbnRhdGlvbi5cbiAqIFxuICogQW4gT2JzZXJ2ZXIgaXMgYW4gb2JqZWN0IHRoYXQgZW5jYXBzdWxhdGVzIGluZm9ybWF0aW9uXG4gKiBhYm91dCBhbiBpbnRlcmVzdGVkIG9iamVjdCB3aXRoIGEgbWV0aG9kIHRoYXQgc2hvdWxkIFxuICogYmUgY2FsbGVkIHdoZW4gYSBwYXJ0aWN1bGFyIE5vdGlmaWNhdGlvbiBpcyBicm9hZGNhc3QuIFxuICogXG4gKiBJbiBQdXJlTVZDLCB0aGUgT2JzZXJ2ZXIgY2xhc3MgYXNzdW1lcyB0aGVzZSByZXNwb25zaWJpbGl0aWVzOlxuICogXG4gKiAtIEVuY2Fwc3VsYXRlIHRoZSBub3RpZmljYXRpb24gKGNhbGxiYWNrKSBtZXRob2Qgb2YgdGhlIGludGVyZXN0ZWQgb2JqZWN0LlxuICogLSBFbmNhcHN1bGF0ZSB0aGUgbm90aWZpY2F0aW9uIGNvbnRleHQgKHRoaXMpIG9mIHRoZSBpbnRlcmVzdGVkIG9iamVjdC5cbiAqIC0gUHJvdmlkZSBtZXRob2RzIGZvciBzZXR0aW5nIHRoZSBub3RpZmljYXRpb24gbWV0aG9kIGFuZCBjb250ZXh0LlxuICogLSBQcm92aWRlIGEgbWV0aG9kIGZvciBub3RpZnlpbmcgdGhlIGludGVyZXN0ZWQgb2JqZWN0LlxuICogXG4gKiBcbiAqIFRoZSBub3RpZmljYXRpb24gbWV0aG9kIG9uIHRoZSBpbnRlcmVzdGVkIG9iamVjdCBzaG91bGQgdGFrZSBcbiAqIG9uZSBwYXJhbWV0ZXIgb2YgdHlwZSBOb3RpZmljYXRpb24uXG4gKiBcbiAqIFxuICogQHBhcmFtIHtGdW5jdGlvbn0gbm90aWZ5TWV0aG9kIFxuICogIHRoZSBub3RpZmljYXRpb24gbWV0aG9kIG9mIHRoZSBpbnRlcmVzdGVkIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG5vdGlmeUNvbnRleHQgXG4gKiAgdGhlIG5vdGlmaWNhdGlvbiBjb250ZXh0IG9mIHRoZSBpbnRlcmVzdGVkIG9iamVjdFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE9ic2VydmVyIChub3RpZnlNZXRob2QsIG5vdGlmeUNvbnRleHQpXG57XG4gICAgdGhpcy5zZXROb3RpZnlNZXRob2Qobm90aWZ5TWV0aG9kKTtcbiAgICB0aGlzLnNldE5vdGlmeUNvbnRleHQobm90aWZ5Q29udGV4dCk7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgT2JzZXJ2ZXJzIG5vdGlmaWNhdGlvbiBtZXRob2QuXG4gKiBcbiAqIFRoZSBub3RpZmljYXRpb24gbWV0aG9kIHNob3VsZCB0YWtlIG9uZSBwYXJhbWV0ZXIgb2YgdHlwZSBOb3RpZmljYXRpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG5vdGlmeU1ldGhvZFxuICogIHRoZSBub3RpZmljYXRpb24gKGNhbGxiYWNrKSBtZXRob2Qgb2YgdGhlIGludGVyZXN0ZWQgb2JqZWN0LlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuT2JzZXJ2ZXIucHJvdG90eXBlLnNldE5vdGlmeU1ldGhvZD0gZnVuY3Rpb24gKG5vdGlmeU1ldGhvZClcbntcbiAgICB0aGlzLm5vdGlmeT0gbm90aWZ5TWV0aG9kO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIE9ic2VydmVycyBub3RpZmljYXRpb24gY29udGV4dC5cbiAqIFxuICogQHBhcmFtIHtPYmplY3R9IG5vdGlmeUNvbnRleHRcbiAqICB0aGUgbm90aWZpY2F0aW9uIGNvbnRleHQgKHRoaXMpIG9mIHRoZSBpbnRlcmVzdGVkIG9iamVjdC5cbiAqIFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuT2JzZXJ2ZXIucHJvdG90eXBlLnNldE5vdGlmeUNvbnRleHQ9IGZ1bmN0aW9uIChub3RpZnlDb250ZXh0KVxue1xuICAgIHRoaXMuY29udGV4dD0gbm90aWZ5Q29udGV4dDtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBGdW5jdGlvbiB0aGF0IHRoaXMgT2JzZXJ2ZXIgd2lsbCBpbnZva2Ugd2hlbiBpdCBpcyBub3RpZmllZC5cbiAqIFxuICogQHByaXZhdGVcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5PYnNlcnZlci5wcm90b3R5cGUuZ2V0Tm90aWZ5TWV0aG9kPSBmdW5jdGlvbiAoKVxue1xuICAgIHJldHVybiB0aGlzLm5vdGlmeTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBPYmplY3QgdGhhdCB3aWxsIHNlcnZlIGFzIHRoZSBPYnNlcnZlcnMgY2FsbGJhY2sgZXhlY3V0aW9uIGNvbnRleHRcbiAqIFxuICogQHByaXZhdGVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuT2JzZXJ2ZXIucHJvdG90eXBlLmdldE5vdGlmeUNvbnRleHQ9IGZ1bmN0aW9uICgpXG57XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbn07XG5cbi8qKlxuICogTm90aWZ5IHRoZSBpbnRlcmVzdGVkIG9iamVjdC5cbiAqIFxuICogQHBhcmFtIHtwdXJlbXZjLk5vdGlmaWNhdGlvbn0gbm90aWZpY2F0aW9uXG4gKiAgVGhlIE5vdGlmaWNhdGlvbiB0byBwYXNzIHRvIHRoZSBpbnRlcmVzdGVkIG9iamVjdHMgbm90aWZpY2F0aW9uIG1ldGhvZFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuT2JzZXJ2ZXIucHJvdG90eXBlLm5vdGlmeU9ic2VydmVyPSBmdW5jdGlvbiAobm90aWZpY2F0aW9uKVxue1xuICAgIHRoaXMuZ2V0Tm90aWZ5TWV0aG9kKCkuY2FsbCh0aGlzLmdldE5vdGlmeUNvbnRleHQoKSwgbm90aWZpY2F0aW9uKTtcbn07XG5cbi8qKlxuICogQ29tcGFyZSBhbiBvYmplY3QgdG8gdGhpcyBPYnNlcnZlcnMgbm90aWZpY2F0aW9uIGNvbnRleHQuXG4gKiBcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqICBcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbk9ic2VydmVyLnByb3RvdHlwZS5jb21wYXJlTm90aWZ5Q29udGV4dD0gZnVuY3Rpb24gKG9iamVjdClcbntcbiAgICByZXR1cm4gb2JqZWN0ID09PSB0aGlzLmNvbnRleHQ7XG59O1xuXG4vKipcbiAqIFRoZSBPYnNlcnZlcnMgY2FsbGJhY2sgRnVuY3Rpb25cbiAqIFxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtGdW5jdGlvbn1cbiAqL1xuT2JzZXJ2ZXIucHJvdG90eXBlLm5vdGlmeT0gbnVsbDtcblxuLyoqXG4gKiBUaGUgT2JzZXJ2ZXJzIGNhbGxiYWNrIE9iamVjdFxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbk9ic2VydmVyLnByb3RvdHlwZS5jb250ZXh0PSBudWxsO1xuLyoqXG4gKiBAYXV0aG9yIFB1cmVNVkMgSlMgTmF0aXZlIFBvcnQgYnkgRGF2aWQgRm9sZXksIEZyw6lkw6lyaWMgU2F1bmllciwgJiBBbGFpbiBEdWNoZXNuZWF1IFxuICogQGF1dGhvciBDb3B5cmlnaHQoYykgMjAwNi0yMDEyIEZ1dHVyZXNjYWxlLCBJbmMuLCBTb21lIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFxuICogQGNsYXNzIHB1cmVtdmMuTm90aWZpY2F0aW9uXG4gKiBcbiAqIEEgYmFzZSBOb3RpZmljYXRpb24gaW1wbGVtZW50YXRpb24uXG4gKiBcbiAqIFB1cmVNVkMgZG9lcyBub3QgcmVseSB1cG9uIHVuZGVybHlpbmcgZXZlbnQgbW9kZWxzIHN1Y2ggYXMgdGhlIG9uZSBwcm92aWRlZCBcbiAqIHdpdGggdGhlIERPTSBvciBvdGhlciBicm93c2VyIGNlbnRyaWMgVzNDIGV2ZW50IG1vZGVscy5cbiAqIFxuICogVGhlIE9ic2VydmVyIFBhdHRlcm4gYXMgaW1wbGVtZW50ZWQgd2l0aGluIFB1cmVNVkMgZXhpc3RzIHRvIHN1cHBvcnQgXG4gKiBldmVudC1kcml2ZW4gY29tbXVuaWNhdGlvbiBiZXR3ZWVuIHRoZSBhcHBsaWNhdGlvbiBhbmQgdGhlIGFjdG9ycyBvZiB0aGUgTVZDIFxuICogdHJpYWQuXG4gKiBcbiAqIE5vdGlmaWNhdGlvbnMgYXJlIG5vdCBtZWFudCB0byBiZSBhIHJlcGxhY2VtZW50IGZvciBldmVudHMgaW4gdGhlIGJyb3dzZXIuIFxuICogR2VuZXJhbGx5LCBNZWRpYXRvciBpbXBsZW1lbnRvcnMgcGxhY2UgZXZlbnQgbGlzdGVuZXJzIG9uIHRoZWlyIHZpZXcgXG4gKiBjb21wb25lbnRzLCB3aGljaCB0aGV5IHRoZW4gaGFuZGxlIGluIHRoZSB1c3VhbCB3YXkuIFRoaXMgbWF5IGxlYWQgdG8gdGhlIFxuICogYnJvYWRjYXN0IG9mIE5vdGlmaWNhdGlvbnMgdG8gdHJpZ2dlciBjb21tYW5kcyBvciB0byBjb21tdW5pY2F0ZSB3aXRoIG90aGVyIFxuICogTWVkaWF0b3JzLiB7QGxpbmsgcHVyZW12Yy5Qcm94eSBQcm94eX0sXG4gKiB7QGxpbmsgcHVyZW12Yy5TaW1wbGVDb21tYW5kIFNpbXBsZUNvbW1hbmR9XG4gKiBhbmQge0BsaW5rIHB1cmVtdmMuTWFjcm9Db21tYW5kIE1hY3JvQ29tbWFuZH1cbiAqIGluc3RhbmNlcyBjb21tdW5pY2F0ZSB3aXRoIGVhY2ggb3RoZXIgYW5kIFxuICoge0BsaW5rIHB1cmVtdmMuTWVkaWF0b3IgTWVkaWF0b3J9c1xuICogYnkgYnJvYWRjYXN0aW5nIE5vdGlmaWNhdGlvbnMuXG4gKiBcbiAqIEEga2V5IGRpZmZlcmVuY2UgYmV0d2VlbiBicm93c2VyIGV2ZW50cyBhbmQgUHVyZU1WQyBOb3RpZmljYXRpb25zIGlzIHRoYXRcbiAqIGV2ZW50cyBmb2xsb3cgdGhlICdDaGFpbiBvZiBSZXNwb25zaWJpbGl0eScgcGF0dGVybiwgJ2J1YmJsaW5nJyB1cCB0aGUgXG4gKiBkaXNwbGF5IGhpZXJhcmNoeSB1bnRpbCBzb21lIHBhcmVudCBjb21wb25lbnQgaGFuZGxlcyB0aGUgZXZlbnQsIHdoaWxlIFxuICogUHVyZU1WQyBOb3RpZmljYXRpb24gZm9sbG93IGEgJ1B1Ymxpc2gvU3Vic2NyaWJlJyBwYXR0ZXJuLiBQdXJlTVZDIGNsYXNzZXMgXG4gKiBuZWVkIG5vdCBiZSByZWxhdGVkIHRvIGVhY2ggb3RoZXIgaW4gYSBwYXJlbnQvY2hpbGQgcmVsYXRpb25zaGlwIGluIG9yZGVyIHRvIFxuICogY29tbXVuaWNhdGUgd2l0aCBvbmUgYW5vdGhlciB1c2luZyBOb3RpZmljYXRpb25zLlxuICogXG4gKiBAY29uc3RydWN0b3IgXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogIFRoZSBOb3RpZmljYXRpb24gbmFtZVxuICogQHBhcmFtIHtPYmplY3R9IFtib2R5XVxuICogIFRoZSBOb3RpZmljYXRpb24gYm9keVxuICogQHBhcmFtIHtPYmplY3R9IFt0eXBlXVxuICogIFRoZSBOb3RpZmljYXRpb24gdHlwZVxuICovXG5mdW5jdGlvbiBOb3RpZmljYXRpb24obmFtZSwgYm9keSwgdHlwZSlcbntcbiAgICB0aGlzLm5hbWU9IG5hbWU7XG4gICAgdGhpcy5ib2R5PSBib2R5O1xuICAgIHRoaXMudHlwZT0gdHlwZTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBuYW1lIG9mIHRoZSBOb3RpZmljYXRpb24gaW5zdGFuY2VcbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiAgVGhlIG5hbWUgb2YgdGhlIE5vdGlmaWNhdGlvbiBpbnN0YW5jZVxuICovXG5Ob3RpZmljYXRpb24ucHJvdG90eXBlLmdldE5hbWU9IGZ1bmN0aW9uKClcbntcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xufTtcblxuLyoqXG4gKiBTZXQgdGhpcyBOb3RpZmljYXRpb25zIGJvZHkuIFxuICogQHBhcmFtIHtPYmplY3R9IGJvZHlcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbk5vdGlmaWNhdGlvbi5wcm90b3R5cGUuc2V0Qm9keT0gZnVuY3Rpb24oYm9keSlcbntcbiAgICB0aGlzLmJvZHk9IGJvZHk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgTm90aWZpY2F0aW9uIGJvZHkuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5Ob3RpZmljYXRpb24ucHJvdG90eXBlLmdldEJvZHk9IGZ1bmN0aW9uKClcbntcbiAgICByZXR1cm4gdGhpcy5ib2R5XG59O1xuXG4vKipcbiAqIFNldCB0aGUgdHlwZSBvZiB0aGUgTm90aWZpY2F0aW9uIGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5Ob3RpZmljYXRpb24ucHJvdG90eXBlLnNldFR5cGU9IGZ1bmN0aW9uKHR5cGUpXG57XG4gICAgdGhpcy50eXBlPSB0eXBlO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHR5cGUgb2YgdGhlIE5vdGlmaWNhdGlvbiBpbnN0YW5jZS5cbiAqIFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5Ob3RpZmljYXRpb24ucHJvdG90eXBlLmdldFR5cGU9IGZ1bmN0aW9uKClcbntcbiAgICByZXR1cm4gdGhpcy50eXBlO1xufTtcblxuLyoqXG4gKiBHZXQgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIE5vdGlmaWNhdGlvbiBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuTm90aWZpY2F0aW9uLnByb3RvdHlwZS50b1N0cmluZz0gZnVuY3Rpb24oKVxue1xuICAgIHZhciBtc2c9IFwiTm90aWZpY2F0aW9uIE5hbWU6IFwiICsgdGhpcy5nZXROYW1lKCk7XG4gICAgbXNnKz0gXCJcXG5Cb2R5OlwiICsgKCh0aGlzLmJvZHkgPT0gbnVsbCApID8gXCJudWxsXCIgOiB0aGlzLmJvZHkudG9TdHJpbmcoKSk7XG4gICAgbXNnKz0gXCJcXG5UeXBlOlwiICsgKCh0aGlzLnR5cGUgPT0gbnVsbCApID8gXCJudWxsXCIgOiB0aGlzLnR5cGUpO1xuICAgIHJldHVybiBtc2c7XG59O1xuXG4vKipcbiAqIFRoZSBOb3RpZmljYXRpb25zIG5hbWUuXG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqIEBwcml2YXRlXG4gKi9cbk5vdGlmaWNhdGlvbi5wcm90b3R5cGUubmFtZT0gbnVsbDtcblxuLyoqXG4gKiBUaGUgTm90aWZpY2F0aW9ucyB0eXBlLlxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAcHJpdmF0ZVxuICovXG5Ob3RpZmljYXRpb24ucHJvdG90eXBlLnR5cGU9IG51bGw7XG5cbi8qKlxuICogVGhlIE5vdGlmaWNhdGlvbnMgYm9keS5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuTm90aWZpY2F0aW9uLnByb3RvdHlwZS5ib2R5PSBudWxsO1xuLyoqXG4gKiBAYXV0aG9yIFB1cmVNVkMgSlMgTmF0aXZlIFBvcnQgYnkgRGF2aWQgRm9sZXksIEZyw6lkw6lyaWMgU2F1bmllciwgJiBBbGFpbiBEdWNoZXNuZWF1IFxuICogQGF1dGhvciBDb3B5cmlnaHQoYykgMjAwNi0yMDEyIEZ1dHVyZXNjYWxlLCBJbmMuLCBTb21lIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFxuICogQGNsYXNzIHB1cmVtdmMuTm90aWZpZXJcbiAqIFxuICogQSBCYXNlIE5vdGlmaWVyIGltcGxlbWVudGF0aW9uLlxuICogXG4gKiB7QGxpbmsgcHVyZW12Yy5NYWNyb0NvbW1hbmQgTWFjcm9Db21tYW5kfSwgXG4gKiB7QGxpbmsgcHVyZW12Yy5TaW1wbGVDb21tYW5kIFNpbXBsZUNvbW1hbmR9LCBcbiAqIHtAbGluayBwdXJlbXZjLk1lZGlhdG9yIE1lZGlhdG9yfSBhbmQgXG4gKiB7QGxpbmsgcHVyZW12Yy5Qcm94eSBQcm94eX1cbiAqIGFsbCBoYXZlIGEgbmVlZCB0byBzZW5kIE5vdGlmaWNhdGlvbnNcbiAqIFxuICogVGhlIE5vdGlmaWVyIGludGVyZmFjZSBwcm92aWRlcyBhIGNvbW1vbiBtZXRob2QgY2FsbGVkICNzZW5kTm90aWZpY2F0aW9uIHRoYXQgXG4gKiByZWxpZXZlcyBpbXBsZW1lbnRhdGlvbiBjb2RlIG9mIHRoZSBuZWNlc3NpdHkgdG8gYWN0dWFsbHkgY29uc3RydWN0IFxuICogTm90aWZpY2F0aW9ucy5cbiAqIFxuICogVGhlIE5vdGlmaWVyIGNsYXNzLCB3aGljaCBhbGwgb2YgdGhlIGFib3ZlIG1lbnRpb25lZCBjbGFzc2VzXG4gKiBleHRlbmQsIHByb3ZpZGVzIGFuIGluaXRpYWxpemVkIHJlZmVyZW5jZSB0byB0aGUgXG4gKiB7QGxpbmsgcHVyZW12Yy5GYWNhZGUgRmFjYWRlfVxuICogTXVsdGl0b24sIHdoaWNoIGlzIHJlcXVpcmVkIGZvciB0aGUgY29udmllbmllbmNlIG1ldGhvZFxuICogZm9yIHNlbmRpbmcgTm90aWZpY2F0aW9ucyBidXQgYWxzbyBlYXNlcyBpbXBsZW1lbnRhdGlvbiBhcyB0aGVzZVxuICogY2xhc3NlcyBoYXZlIGZyZXF1ZW50IFxuICoge0BsaW5rIHB1cmVtdmMuRmFjYWRlIEZhY2FkZX0gaW50ZXJhY3Rpb25zIFxuICogYW5kIHVzdWFsbHkgcmVxdWlyZSBhY2Nlc3MgdG8gdGhlIGZhY2FkZSBhbnl3YXkuXG4gKiBcbiAqIE5PVEU6IEluIHRoZSBNdWx0aUNvcmUgdmVyc2lvbiBvZiB0aGUgZnJhbWV3b3JrLCB0aGVyZSBpcyBvbmUgY2F2ZWF0IHRvXG4gKiBub3RpZmllcnMsIHRoZXkgY2Fubm90IHNlbmQgbm90aWZpY2F0aW9ucyBvciByZWFjaCB0aGUgZmFjYWRlIHVudGlsIHRoZXlcbiAqIGhhdmUgYSB2YWxpZCBtdWx0aXRvbktleS4gXG4gKiBcbiAqIFRoZSBtdWx0aXRvbktleSBpcyBzZXQ6XG4gKiAgIC0gb24gYSBDb21tYW5kIHdoZW4gaXQgaXMgZXhlY3V0ZWQgYnkgdGhlIENvbnRyb2xsZXJcbiAqICAgLSBvbiBhIE1lZGlhdG9yIGlzIHJlZ2lzdGVyZWQgd2l0aCB0aGUgVmlld1xuICogICAtIG9uIGEgUHJveHkgaXMgcmVnaXN0ZXJlZCB3aXRoIHRoZSBNb2RlbC4gXG4gKiBcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBOb3RpZmllcigpXG57XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhbmQgc2VuZCBhIE5vdGlmaWNhdGlvbi5cbiAqXG4gKiBLZWVwcyB1cyBmcm9tIGhhdmluZyB0byBjb25zdHJ1Y3QgbmV3IE5vdGlmaWNhdGlvbiBpbnN0YW5jZXMgaW4gb3VyIFxuICogaW1wbGVtZW50YXRpb24gY29kZS5cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IG5vdGlmaWNhdGlvbk5hbWVcbiAqICBBIG5vdGlmaWNhdGlvbiBuYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gW2JvZHldXG4gKiAgVGhlIGJvZHkgb2YgdGhlIG5vdGlmaWNhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXVxuICogIFRoZSBub3RpZmljYXRpb24gdHlwZVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuTm90aWZpZXIucHJvdG90eXBlLnNlbmROb3RpZmljYXRpb24gPSBmdW5jdGlvbihub3RpZmljYXRpb25OYW1lLCBib2R5LCB0eXBlKVxue1xuICAgIHZhciBmYWNhZGUgPSB0aGlzLmdldEZhY2FkZSgpO1xuICAgIGlmKGZhY2FkZSlcbiAgICB7XG4gICAgICAgIGZhY2FkZS5zZW5kTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk5hbWUsIGJvZHksIHR5cGUpO1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiBAcHJvdGVjdGVkXG4gKiBBIHJlZmVyZW5jZSB0byB0aGlzIE5vdGlmaWVyJ3MgRmFjYWRlLiBUaGlzIHJlZmVyZW5jZSB3aWxsIG5vdCBiZSBhdmFpbGFibGVcbiAqIHVudGlsICNpbml0aWFsaXplTm90aWZpZXIgaGFzIGJlZW4gY2FsbGVkLiBcbiAqIFxuICogQHR5cGUge3B1cmVtdmMuRmFjYWRlfVxuICovXG5Ob3RpZmllci5wcm90b3R5cGUuZmFjYWRlO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhpcyBOb3RpZmllciBpbnN0YW5jZS5cbiAqIFxuICogVGhpcyBpcyBob3cgYSBOb3RpZmllciBnZXRzIGl0cyBtdWx0aXRvbktleS4gXG4gKiBDYWxscyB0byAjc2VuZE5vdGlmaWNhdGlvbiBvciB0byBhY2Nlc3MgdGhlXG4gKiBmYWNhZGUgd2lsbCBmYWlsIHVudGlsIGFmdGVyIHRoaXMgbWV0aG9kIFxuICogaGFzIGJlZW4gY2FsbGVkLlxuICogXG4gKiBNZWRpYXRvcnMsIENvbW1hbmQgb3IgUHJveGllcyBtYXkgb3ZlcnJpZGVcbiAqIHRoaXMgbWV0aG9kIGluIG9yZGVyIHRvIHNlbmQgbm90aWZpY2F0aW9uc1xuICogb3IgYWNjZXNzIHRoZSBNdWx0aXRvbiBGYWNhZGUgaW5zdGFuY2UgYXNcbiAqIHNvb24gYXMgcG9zc2libGUuIFRoZXkgQ0FOTk9UIGFjY2VzcyB0aGUgZmFjYWRlXG4gKiBpbiB0aGVpciBjb25zdHJ1Y3RvcnMsIHNpbmNlIHRoaXMgbWV0aG9kIHdpbGwgbm90XG4gKiB5ZXQgaGF2ZSBiZWVuIGNhbGxlZC5cbiAqIFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqICBUaGUgTm90aWZpZXJzIG11bHRpdG9uIGtleTtcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbk5vdGlmaWVyLnByb3RvdHlwZS5pbml0aWFsaXplTm90aWZpZXIgPSBmdW5jdGlvbihrZXkpXG57XG4gICAgdGhpcy5tdWx0aXRvbktleSA9IFN0cmluZyhrZXkpO1xuICAgIHRoaXMuZmFjYWRlPSB0aGlzLmdldEZhY2FkZSgpO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZSB0aGUgTXVsdGl0b24gRmFjYWRlIGluc3RhbmNlXG4gKlxuICpcbiAqIEBwcm90ZWN0ZWRcbiAqIEByZXR1cm4ge3B1cmVtdmMuRmFjYWRlfVxuICovXG5Ob3RpZmllci5wcm90b3R5cGUuZ2V0RmFjYWRlID0gZnVuY3Rpb24oKVxue1xuICAgIGlmKHRoaXMubXVsdGl0b25LZXkgPT0gbnVsbClcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihOb3RpZmllci5NVUxUSVRPTl9NU0cpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRmFjYWRlLmdldEluc3RhbmNlKHRoaXMubXVsdGl0b25LZXkpO1xufTtcblxuLyoqXG4gKiBAaWdub3JlXG4gKiBUaGUgTm90aWZpZXJzIGludGVybmFsIG11bHRpdG9uIGtleS5cbiAqXG4gKiBAcHJvdGVjdGVkXG4gKiBAdHlwZSBzdHJpbmdcbiAqL1xuTm90aWZpZXIucHJvdG90eXBlLm11bHRpdG9uS2V5ID0gbnVsbDtcblxuLyoqXG4gKiBAaWdub3JlXG4gKiBUaGUgZXJyb3IgbWVzc2FnZSB1c2VkIGlmIHRoZSBOb3RpZmllciBpcyBub3QgaW5pdGlhbGl6ZWQgY29ycmVjdGx5IGFuZFxuICogYXR0ZW1wdHMgdG8gcmV0cmlldmUgaXRzIG93biBtdWx0aXRvbiBrZXlcbiAqXG4gKiBAc3RhdGljXG4gKiBAcHJvdGVjdGVkXG4gKiBAY29uc3RcbiAqIEB0eXBlIHN0cmluZ1xuICovXG5Ob3RpZmllci5NVUxUSVRPTl9NU0cgPSBcIm11bHRpdG9uS2V5IGZvciB0aGlzIE5vdGlmaWVyIG5vdCB5ZXQgaW5pdGlhbGl6ZWQhXCI7XG4vKipcbiAqIEBhdXRob3IgUHVyZU1WQyBKUyBOYXRpdmUgUG9ydCBieSBEYXZpZCBGb2xleSwgRnLDqWTDqXJpYyBTYXVuaWVyLCAmIEFsYWluIER1Y2hlc25lYXUgXG4gKiBAYXV0aG9yIENvcHlyaWdodChjKSAyMDA2LTIwMTIgRnV0dXJlc2NhbGUsIEluYy4sIFNvbWUgcmlnaHRzIHJlc2VydmVkLlxuICogXG4gKiBAY2xhc3MgcHVyZW12Yy5TaW1wbGVDb21tYW5kXG4gKiBAZXh0ZW5kcyBwdXJlbXZjLk5vdGlmaWVyXG4gKlxuICogU2ltcGxlQ29tbWFuZHMgZW5jYXBzdWxhdGUgdGhlIGJ1c2luZXNzIGxvZ2ljIG9mIHlvdXIgYXBwbGljYXRpb24uIFlvdXIgXG4gKiBzdWJjbGFzcyBzaG91bGQgb3ZlcnJpZGUgdGhlICNleGVjdXRlIG1ldGhvZCB3aGVyZSB5b3VyIGJ1c2luZXNzIGxvZ2ljIHdpbGxcbiAqIGhhbmRsZSB0aGUgXG4gKiB7QGxpbmsgcHVyZW12Yy5Ob3RpZmljYXRpb24gTm90aWZpY2F0aW9ufVxuICogXG4gKiBUYWtlIGEgbG9vayBhdCBcbiAqIHtAbGluayBwdXJlbXZjLkZhY2FkZSNyZWdpc3RlckNvbW1hbmQgRmFjYWRlJ3MgcmVnaXN0ZXJDb21tYW5kfVxuICogb3Ige0BsaW5rIHB1cmVtdmMuQ29udHJvbGxlciNyZWdpc3RlckNvbW1hbmQgQ29udHJvbGxlcnMgcmVnaXN0ZXJDb21tYW5kfVxuICogbWV0aG9kcyB0byBzZWUgaG93IHRvIGFkZCBjb21tYW5kcyB0byB5b3VyIGFwcGxpY2F0aW9uLlxuICogXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU2ltcGxlQ29tbWFuZCAoKSB7IH07XG5cblNpbXBsZUNvbW1hbmQucHJvdG90eXBlPSBuZXcgTm90aWZpZXI7XG5TaW1wbGVDb21tYW5kLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj0gU2ltcGxlQ29tbWFuZDtcblxuLyoqXG4gKiBGdWxmaWxsIHRoZSB1c2UtY2FzZSBpbml0aWF0ZWQgYnkgdGhlIGdpdmVuIE5vdGlmaWNhdGlvblxuICogXG4gKiBJbiB0aGUgQ29tbWFuZCBQYXR0ZXJuLCBhbiBhcHBsaWNhdGlvbiB1c2UtY2FzZSB0eXBpY2FsbHkgYmVnaW5zIHdpdGggc29tZVxuICogdXNlciBhY3Rpb24sIHdoaWNoIHJlc3VsdHMgaW4gYSBOb3RpZmljYXRpb24gaXMgaGFuZGxlZCBieSB0aGUgYnVzaW5lc3MgbG9naWNcbiAqIGluIHRoZSAjZXhlY3V0ZSBtZXRob2Qgb2YgYSBjb21tYW5kLlxuICogXG4gKiBAcGFyYW0ge3B1cmVtdmMuTm90aWZpY2F0aW9ufSBub3RpZmljYXRpb25cbiAqICBUaGUgbm90aWZpY2F0aW9uIHRvIGhhbmRsZS5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cblNpbXBsZUNvbW1hbmQucHJvdG90eXBlLmV4ZWN1dGU9IGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHsgfTtcbi8qKlxuICogQGF1dGhvciBQdXJlTVZDIEpTIE5hdGl2ZSBQb3J0IGJ5IERhdmlkIEZvbGV5LCBGcsOpZMOpcmljIFNhdW5pZXIsICYgQWxhaW4gRHVjaGVzbmVhdSBcbiAqIEBhdXRob3IgQ29weXJpZ2h0KGMpIDIwMDYtMjAxMiBGdXR1cmVzY2FsZSwgSW5jLiwgU29tZSByaWdodHMgcmVzZXJ2ZWQuXG4gKiBcbiAqIEBjbGFzcyBwdXJlbXZjLk1hY3JvQ29tbWFuZFxuICogQGV4dGVuZHMgcHVyZW12Yy5Ob3RpZmllclxuICogXG4gKiBBIGJhc2UgY29tbWFuZCBpbXBsZW1lbnRhdGlvbiB0aGF0IGV4ZWN1dGVzIG90aGVyIGNvbW1hbmRzLCBzdWNoIGFzXG4gKiB7QGxpbmsgcHVyZW12Yy5TaW1wbGVDb21tYW5kIFNpbXBsZUNvbW1hbmR9XG4gKiBvciB7QGxpbmsgcHVyZW12Yy5NYWNyb0NvbW1hbmQgTWFjcm9Db21tYW5kfVxuICogc3ViY2xhc3Nlcy5cbiAqICBcbiAqIEEgTWFjcm9Db21tYW5kIG1haW50YWlucyBhbiBsaXN0IG9mXG4gKiBjb21tYW5kIGNvbnN0cnVjdG9yIHJlZmVyZW5jZXMgY2FsbGVkICpTdWJDb21tYW5kcyouXG4gKiBcbiAqIFdoZW4gI2V4ZWN1dGUgaXMgY2FsbGVkLCB0aGUgTWFjcm9Db21tYW5kXG4gKiBpbnN0YW50aWF0ZXMgYW5kIGNhbGxzICNleGVjdXRlIG9uIGVhY2ggb2YgaXRzICpTdWJDb21tYW5kcyogaW4gdHVybi5cbiAqIEVhY2ggKlN1YkNvbW1hbmQqIHdpbGwgYmUgcGFzc2VkIGEgcmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbFxuICoge0BsaW5rIHB1cmVtdmMuTm90aWZpY2F0aW9uIE5vdGlmaWNhdGlvbn0gXG4gKiB0aGF0IHdhcyBwYXNzZWQgdG8gdGhlIE1hY3JvQ29tbWFuZHMgI2V4ZWN1dGUgbWV0aG9kXG4gKiBcbiAqIFVubGlrZSB7QGxpbmsgcHVyZW12Yy5TaW1wbGVDb21tYW5kIFNpbXBsZUNvbW1hbmR9LCBcbiAqIHlvdXIgc3ViY2xhc3Mgc2hvdWxkIG5vdCBvdmVycmlkZSAjZXhlY3V0ZSBidXQgaW5zdGVhZCwgc2hvdWxkIFxuICogb3ZlcnJpZGUgdGhlICNpbml0aWFsaXplTWFjcm9Db21tYW5kIG1ldGhvZCwgY2FsbGluZyAjYWRkU3ViQ29tbWFuZCBvbmNlIGZvciBcbiAqIGVhY2ggKlN1YkNvbW1hbmQqIHRvIGJlIGV4ZWN1dGVkLlxuICogXG4gKiBJZiB5b3VyIHN1YmNsYXNzIGRvZXMgZGVmaW5lIGEgY29uc3RydWN0b3IsIGJlIHN1cmUgdG8gY2FsbCBcInN1cGVyXCIgbGlrZSBzb1xuICogXG4gKiAgICAgZnVuY3Rpb24gTXlNYWNyb0NvbW1hbmQgKClcbiAqICAgICB7XG4gKiAgICAgICAgIE1hY3JvQ29tbWFuZC5jYWxsKHRoaXMpO1xuICogICAgIH07XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTWFjcm9Db21tYW5kKClcbntcbiAgICB0aGlzLnN1YkNvbW1hbmRzPSBbXTtcbiAgICB0aGlzLmluaXRpYWxpemVNYWNyb0NvbW1hbmQoKTtcbn07XG5cbi8qIHN1YmNsYXNzIE5vdGlmaWVyICovXG5NYWNyb0NvbW1hbmQucHJvdG90eXBlPSBuZXcgTm90aWZpZXI7XG5NYWNyb0NvbW1hbmQucHJvdG90eXBlLmNvbnN0cnVjdG9yPSBNYWNyb0NvbW1hbmQ7XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtBcnJheS48cHVyZW12Yy5TaW1wbGVDb21tYW5kfHB1cmVtdmMuTWFjcm9Db21tYW5kPn1cbiAqL1xuTWFjcm9Db21tYW5kLnByb3RvdHlwZS5zdWJDb21tYW5kcz0gbnVsbDtcblxuLyoqXG4gKiBAcHJvdGVjdGVkXG4gKiBJbml0aWFsaXplIHRoZSBNYWNyb0NvbW1hbmQuXG4gKiBcbiAqIEluIHlvdXIgc3ViY2xhc3MsIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIFxuICogaW5pdGlhbGl6ZSB0aGUgTWFjcm9Db21tYW5kJ3MgKlN1YkNvbW1hbmQqICBcbiAqIGxpc3Qgd2l0aCBjb21tYW5kIGNsYXNzIHJlZmVyZW5jZXMgbGlrZSBcbiAqIHRoaXM6XG4gKiBcbiAqICAgICAvLyBJbml0aWFsaXplIE15TWFjcm9Db21tYW5kXG4gKiAgICAgTXlNYWNyb0NvbW1hbmQucHJvdG90eXBlLmluaXRpYWxpemVNYWNyb0NvbW1hbmQ9IGZ1bmN0aW9uICgpXG4gKiAgICAge1xuICogICAgICAgICB0aGlzLmFkZFN1YkNvbW1hbmQoIGNvbS5tZS5teWFwcC5jb250cm9sbGVyLkZpcnN0Q29tbWFuZCApO1xuICogICAgICAgICB0aGlzLmFkZFN1YkNvbW1hbmQoIGNvbS5tZS5teWFwcC5jb250cm9sbGVyLlNlY29uZENvbW1hbmQgKTtcbiAqICAgICAgICAgdGhpcy5hZGRTdWJDb21tYW5kKCBjb20ubWUubXlhcHAuY29udHJvbGxlci5UaGlyZENvbW1hbmQgKTtcbiAqICAgICB9O1xuICogXG4gKiBOb3RlIHRoYXQgKlN1YkNvbW1hbmQqcyBtYXkgYmUgYW55IGNvbW1hbmQgaW1wbGVtZW50b3IsXG4gKiBNYWNyb0NvbW1hbmRzIG9yIFNpbXBsZUNvbW1hbmRzIGFyZSBib3RoIGFjY2VwdGFibGUuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5NYWNyb0NvbW1hbmQucHJvdG90eXBlLmluaXRpYWxpemVNYWNyb0NvbW1hbmQ9IGZ1bmN0aW9uKCkge31cblxuLyoqXG4gKiBAcHJvdGVjdGVkXG4gKiBBZGQgYSAqU3ViQ29tbWFuZCpcbiAqIFxuICogVGhlICpTdWJDb21tYW5kKnMgd2lsbCBiZSBjYWxsZWQgaW4gRmlyc3QgSW4gLyBGaXJzdCBPdXQgKEZJRk8pIG9yZGVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21tYW5kQ2xhc3NSZWZcbiAqICBBIHJlZmVyZW5jZSB0byBhIHN1YmNsYXNzZWQgU2ltcGxlQ29tbWFuZCBvciBNYWNyb0NvbW1hbmQgY29uc3RydWN0b3JcbiAqL1xuTWFjcm9Db21tYW5kLnByb3RvdHlwZS5hZGRTdWJDb21tYW5kPSBmdW5jdGlvbihjb21tYW5kQ2xhc3NSZWYpXG57XG4gICAgdGhpcy5zdWJDb21tYW5kcy5wdXNoKGNvbW1hbmRDbGFzc1JlZik7XG59O1xuXG4vKipcbiAqIEV4ZWN1dGUgdGhpcyBNYWNyb0NvbW1hbmRzICpTdWJDb21tYW5kcypcbiAqIFxuICogVGhlICpTdWJDb21tYW5kKnMgd2lsbCBiZSBjYWxsZWQgaW4gRmlyc3QgSW4gLyBGaXJzdCBPdXQgKEZJRk8pIG9yZGVyXG4gKiBAcGFyYW0ge3B1cmVtdmMuTm90aWZpY2F0aW9ufSBub3RlXG4gKiAgVGhlIE5vdGlmaWNhdGlvbiBvYmplY3QgdG8gYmUgcGFzc2VkIHRvIGVhY2ggKlN1YkNvbW1hbmQqXG4gKi9cbk1hY3JvQ29tbWFuZC5wcm90b3R5cGUuZXhlY3V0ZT0gZnVuY3Rpb24obm90ZSlcbntcbiAgICAvLyBTSUMtIFRPRE8gb3B0aW1pemVcbiAgICB3aGlsZSh0aGlzLnN1YkNvbW1hbmRzLmxlbmd0aCA+IDApXG4gICAge1xuICAgICAgICB2YXIgcmVmPSB0aGlzLnN1YkNvbW1hbmRzLnNoaWZ0KCk7XG4gICAgICAgIHZhciBjbWQ9IG5ldyByZWY7XG4gICAgICAgIGNtZC5pbml0aWFsaXplTm90aWZpZXIodGhpcy5tdWx0aXRvbktleSk7XG4gICAgICAgIGNtZC5leGVjdXRlKG5vdGUpO1xuICAgIH1cbn07XG4vKipcbiAqIEBhdXRob3IgUHVyZU1WQyBKUyBOYXRpdmUgUG9ydCBieSBEYXZpZCBGb2xleSwgRnLDqWTDqXJpYyBTYXVuaWVyLCAmIEFsYWluIER1Y2hlc25lYXUgXG4gKiBAYXV0aG9yIENvcHlyaWdodChjKSAyMDA2LTIwMTIgRnV0dXJlc2NhbGUsIEluYy4sIFNvbWUgcmlnaHRzIHJlc2VydmVkLlxuICogXG4gKiBAY2xhc3MgcHVyZW12Yy5NZWRpYXRvclxuICogQGV4dGVuZHMgcHVyZW12Yy5Ob3RpZmllclxuICogXG4gKiBBIGJhc2UgTWVkaWF0b3IgaW1wbGVtZW50YXRpb24uXG4gKlxuICogSW4gUHVyZU1WQywgTWVkaWF0b3IgY2xhc3NlcyBhcmUgdXNlZCB0byBtZWRpYXRlIGNvbW11bmljYXRpb24gYmV0d2VlbiBhIHZpZXcgXG4gKiBjb21wb25lbnQgYW5kIHRoZSByZXN0IG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAqXG4gKiBBIE1lZGlhdG9yIHNob3VsZCBsaXN0ZW4gdG8gaXRzIHZpZXcgY29tcG9uZW50cyBmb3IgZXZlbnRzLCBhbmQgaGFuZGxlIHRoZW0gXG4gKiBieSBzZW5kaW5nIG5vdGlmaWNhdGlvbnMgKHRvIGJlIGhhbmRsZWQgYnkgb3RoZXIgTWVkaWF0b3JzLCBcbiAqIHtAbGluayBwdXJlbXZjLlNpbXBsZUNvbW1hbmQgU2ltcGxlQ29tbWFuZHN9IFxuICogb3JcbiAqIHtAbGluayBwdXJlbXZjLk1hY3JvQ29tbWFuZCBNYWNyb0NvbW1hbmRzfSkgXG4gKiBvciBwYXNzaW5nIGRhdGEgZnJvbSB0aGUgdmlldyBjb21wb25lbnQgZGlyZWN0bHkgdG8gYSBcbiAqIHtAbGluayBwdXJlbXZjLlByb3h5IFByb3h5fSwgc3VjaCBhcyBzdWJtaXR0aW5nIFxuICogdGhlIGNvbnRlbnRzIG9mIGEgZm9ybSB0byBhIHNlcnZpY2UuXG4gKiBcbiAqIE1lZGlhdG9ycyBzaG91bGQgbm90IHBlcmZvcm0gYnVzaW5lc3MgbG9naWMsIG1haW50YWluIHN0YXRlIG9yIG90aGVyIFxuICogaW5mb3JtYXRpb24gZm9yIGl0cyB2aWV3IGNvbXBvbmVudCwgb3IgYnJlYWsgdGhlIGVuY2Fwc3VsYXRpb24gb2YgdGhlIHZpZXcgXG4gKiBjb21wb25lbnQgYnkgbWFuaXB1bGF0aW5nIHRoZSB2aWV3IGNvbXBvbmVudCdzIGNoaWxkcmVuLiBJdCBzaG91bGQgb25seSBjYWxsIFxuICogbWV0aG9kcyBvciBzZXQgcHJvcGVydGllcyBvbiB0aGUgdmlldyBjb21wb25lbnQuXG4gKiAgXG4gKiBUaGUgdmlldyBjb21wb25lbnQgc2hvdWxkIGVuY2Fwc3VsYXRlIGl0cyBvd24gYmVoYXZpb3IgYW5kIGltcGxlbWVudGF0aW9uIGJ5IFxuICogZXhwb3NpbmcgbWV0aG9kcyBhbmQgcHJvcGVydGllcyB0aGF0IHRoZSBNZWRpYXRvciBjYW4gY2FsbCB3aXRob3V0IGhhdmluZyB0byBcbiAqIGtub3cgYWJvdXQgdGhlIHZpZXcgY29tcG9uZW50J3MgY2hpbGRyZW4uXG4gKiBcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdHJpbmd9IFttZWRpYXRvck5hbWVdXG4gKiAgVGhlIE1lZGlhdG9ycyBuYW1lLiBUaGUgTWVkaWF0b3JzIHN0YXRpYyAjTkFNRSB2YWx1ZSBpcyB1c2VkIGJ5IGRlZmF1bHRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbdmlld0NvbXBvbmVudF1cbiAqICBUaGUgTWVkaWF0b3JzIHtAbGluayAjc2V0Vmlld0NvbXBvbmVudCB2aWV3Q29tcG9uZW50fS5cbiAqL1xuZnVuY3Rpb24gTWVkaWF0b3IgKG1lZGlhdG9yTmFtZSwgdmlld0NvbXBvbmVudClcbntcbiAgICB0aGlzLm1lZGlhdG9yTmFtZT0gbWVkaWF0b3JOYW1lIHx8IHRoaXMuY29uc3RydWN0b3IuTkFNRTtcbiAgICB0aGlzLnZpZXdDb21wb25lbnQ9dmlld0NvbXBvbmVudDsgIFxufTtcblxuLyoqXG4gKiBAc3RhdGljXG4gKiBUaGUgbmFtZSBvZiB0aGUgTWVkaWF0b3IuXG4gKiBcbiAqIFR5cGljYWxseSwgYSBNZWRpYXRvciB3aWxsIGJlIHdyaXR0ZW4gdG8gc2VydmUgb25lIHNwZWNpZmljIGNvbnRyb2wgb3IgZ3JvdXBcbiAqIG9mIGNvbnRyb2xzIGFuZCBzbywgd2lsbCBub3QgaGF2ZSBhIG5lZWQgdG8gYmUgZHluYW1pY2FsbHkgbmFtZWQuXG4gKiBcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbk1lZGlhdG9yLk5BTUU9IFwiTWVkaWF0b3JcIjtcblxuLyogc3ViY2xhc3MgKi9cbk1lZGlhdG9yLnByb3RvdHlwZT0gbmV3IE5vdGlmaWVyO1xuTWVkaWF0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yPSBNZWRpYXRvcjtcblxuLyoqXG4gKiBHZXQgdGhlIG5hbWUgb2YgdGhlIE1lZGlhdG9yXG4gKiBcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqICBUaGUgTWVkaWF0b3IgbmFtZVxuICovXG5NZWRpYXRvci5wcm90b3R5cGUuZ2V0TWVkaWF0b3JOYW1lPSBmdW5jdGlvbiAoKVxue1xuICAgIHJldHVybiB0aGlzLm1lZGlhdG9yTmFtZTtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBNZWRpYXRvcnMgdmlldyBjb21wb25lbnQuIFRoaXMgY291bGRcbiAqIGJlIGEgSFRNTEVsZW1lbnQsIGEgYmVzcG9rZSBVaUNvbXBvbmVudCB3cmFwcGVyXG4gKiBjbGFzcywgYSBNb29Ub29scyBFbGVtZW50LCBhIGpRdWVyeSByZXN1bHQgb3IgYVxuICogY3NzIHNlbGVjdG9yLCBkZXBlbmRpbmcgb24gd2hpY2ggRE9NIGFic3RyYWN0aW9uIFxuICogbGlicmFyeSB5b3UgYXJlIHVzaW5nLlxuICogXG4gKiBcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGUgdmlldyBjb21wb25lbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbk1lZGlhdG9yLnByb3RvdHlwZS5zZXRWaWV3Q29tcG9uZW50PSBmdW5jdGlvbiAodmlld0NvbXBvbmVudClcbntcbiAgICB0aGlzLnZpZXdDb21wb25lbnQ9IHZpZXdDb21wb25lbnQ7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgTWVkaWF0b3JzIHZpZXcgY29tcG9uZW50LlxuICogXG4gKiBBZGRpdGlvbmFsbHksIGFuIG9wdGlvbmFsIGV4cGxpY2l0IGdldHRlciBjYW4gYmVcbiAqIGJlIGRlZmluZWQgaW4gdGhlIHN1YmNsYXNzIHRoYXQgZGVmaW5lcyB0aGUgXG4gKiB2aWV3IGNvbXBvbmVudHMsIHByb3ZpZGluZyBhIG1vcmUgc2VtYW50aWMgaW50ZXJmYWNlXG4gKiB0byB0aGUgTWVkaWF0b3IuXG4gKiBcbiAqIFRoaXMgaXMgZGlmZmVyZW50IGZyb20gdGhlIEFTMyBpbXBsZW1lbnRhdGlvbiBpblxuICogdGhlIHNlbnNlIHRoYXQgbm8gY2FzdGluZyBpcyByZXF1aXJlZCBmcm9tIHRoZVxuICogb2JqZWN0IHN1cHBsaWVkIGFzIHRoZSB2aWV3IGNvbXBvbmVudC5cbiAqIFxuICogICAgIE15TWVkaWF0b3IucHJvdG90eXBlLmdldENvbWJvQm94PSBmdW5jdGlvbiAoKVxuICogICAgIHtcbiAqICAgICAgICAgcmV0dXJuIHRoaXMudmlld0NvbXBvbmVudDsgIFxuICogICAgIH1cbiAqIFxuICogQHJldHVybiB7T2JqZWN0fVxuICogIFRoZSB2aWV3IGNvbXBvbmVudFxuICovXG5NZWRpYXRvci5wcm90b3R5cGUuZ2V0Vmlld0NvbXBvbmVudD0gZnVuY3Rpb24gKClcbntcbiAgICByZXR1cm4gdGhpcy52aWV3Q29tcG9uZW50O1xufTtcblxuLyoqXG4gKiBMaXN0IHRoZSBOb3RpZmljYXRpb24gbmFtZXMgdGhpcyBNZWRpYXRvciBpcyBpbnRlcmVzdGVkXG4gKiBpbiBiZWluZyBub3RpZmllZCBvZi5cbiAqIFxuICogQHJldHVybiB7QXJyYXl9IFxuICogIFRoZSBsaXN0IG9mIE5vdGlmaWNhdGlvbiBuYW1lcy5cbiAqL1xuTWVkaWF0b3IucHJvdG90eXBlLmxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHM9IGZ1bmN0aW9uICgpXG57XG4gICAgcmV0dXJuIFtdO1xufTtcblxuLyoqXG4gKiBIYW5kbGUgTm90aWZpY2F0aW9ucy5cbiAqIFxuICogVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSBoYW5kbGVkIGluIGEgc3dpdGNoIHN0YXRlbWVudFxuICogd2l0aCBvbmUgJ2Nhc2UnIGVudHJ5IHBlciBOb3RpZmljYXRpb24gdGhlIE1lZGlhdG9yXG4gKiBpcyBpbnRlcmVzdGVkIGluXG4gKiBcbiAqIEBwYXJhbSB7cHVyZW12Yy5Ob3RpZmljYXRpb259IG5vdGlmaWNhdGlvblxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuTWVkaWF0b3IucHJvdG90eXBlLmhhbmRsZU5vdGlmaWNhdGlvbj0gZnVuY3Rpb24gKG5vdGlmaWNhdGlvbilcbntcbiAgICByZXR1cm47XG59O1xuXG4vKipcbiAqIENhbGxlZCBieSB0aGUgVmlldyB3aGVuIHRoZSBNZWRpYXRvciBpcyByZWdpc3RlcmVkXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5NZWRpYXRvci5wcm90b3R5cGUub25SZWdpc3Rlcj0gZnVuY3Rpb24gKClcbntcbiAgICByZXR1cm47XG59O1xuXG4vKipcbiAqIENhbGxlZCBieSB0aGUgVmlldyB3aGVuIHRoZSBNZWRpYXRvciBpcyByZW1vdmVkXG4gKi9cbk1lZGlhdG9yLnByb3RvdHlwZS5vblJlbW92ZT0gZnVuY3Rpb24gKClcbntcbiAgICByZXR1cm47XG59O1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqIFRoZSBNZWRpYXRvcnMgbmFtZS4gU2hvdWxkIG9ubHkgYmUgYWNjZXNzZWQgYnkgTWVkaWF0b3Igc3ViY2xhc3Nlcy5cbiAqIFxuICogQHByb3RlY3RlZFxuICogQHR5cGUgc3RyaW5nXG4gKi9cbk1lZGlhdG9yLnByb3RvdHlwZS5tZWRpYXRvck5hbWU9IG51bGw7XG5cbi8qKlxuICogQGlnbm9yZVxuICogVGhlIE1lZGlhdG9ycyB2aWV3Q29tcG9uZW50LiBTaG91bGQgb25seSBiZSBhY2Nlc3NlZCBieSBNZWRpYXRvciBzdWJjbGFzc2VzLlxuICogXG4gKiBAcHJvdGVjdGVkXG4gKiBAdHlwZSBPYmplY3RcbiAqL1xuTWVkaWF0b3IucHJvdG90eXBlLnZpZXdDb21wb25lbnQ9bnVsbDtcbi8qKlxuICogQGF1dGhvciBQdXJlTVZDIEpTIE5hdGl2ZSBQb3J0IGJ5IERhdmlkIEZvbGV5LCBGcsOpZMOpcmljIFNhdW5pZXIsICYgQWxhaW4gRHVjaGVzbmVhdSBcbiAqIEBhdXRob3IgQ29weXJpZ2h0KGMpIDIwMDYtMjAxMiBGdXR1cmVzY2FsZSwgSW5jLiwgU29tZSByaWdodHMgcmVzZXJ2ZWQuXG4gKiBcbiAqIEBjbGFzcyBwdXJlbXZjLlByb3h5XG4gKiBAZXh0ZW5kcyBwdXJlbXZjLk5vdGlmaWVyXG4gKlxuICogQSBiYXNlIFByb3h5IGltcGxlbWVudGF0aW9uLiBcbiAqIFxuICogSW4gUHVyZU1WQywgUHJveHkgY2xhc3NlcyBhcmUgdXNlZCB0byBtYW5hZ2UgcGFydHMgb2YgdGhlIGFwcGxpY2F0aW9uJ3MgZGF0YSBcbiAqIG1vZGVsLlxuICogXG4gKiBBIFByb3h5IG1pZ2h0IHNpbXBseSBtYW5hZ2UgYSByZWZlcmVuY2UgdG8gYSBsb2NhbCBkYXRhIG9iamVjdCwgaW4gd2hpY2ggY2FzZSBcbiAqIGludGVyYWN0aW5nIHdpdGggaXQgbWlnaHQgaW52b2x2ZSBzZXR0aW5nIGFuZCBnZXR0aW5nIG9mIGl0cyBkYXRhIGluIFxuICogc3luY2hyb25vdXMgZmFzaGlvbi5cbiAqIFxuICogUHJveHkgY2xhc3NlcyBhcmUgYWxzbyB1c2VkIHRvIGVuY2Fwc3VsYXRlIHRoZSBhcHBsaWNhdGlvbidzIGludGVyYWN0aW9uIHdpdGggXG4gKiByZW1vdGUgc2VydmljZXMgdG8gc2F2ZSBvciByZXRyaWV2ZSBkYXRhLCBpbiB3aGljaCBjYXNlLCB3ZSBhZG9wdCBhbiBcbiAqIGFzeW5jcm9ub3VzIGlkaW9tOyBzZXR0aW5nIGRhdGEgKG9yIGNhbGxpbmcgYSBtZXRob2QpIG9uIHRoZSBQcm94eSBhbmQgXG4gKiBsaXN0ZW5pbmcgZm9yIGEgXG4gKiB7QGxpbmsgcHVyZW12Yy5Ob3RpZmljYXRpb24gTm90aWZpY2F0aW9ufSBcbiAqIHRvIGJlIHNlbnQgIHdoZW4gdGhlIFByb3h5IGhhcyByZXRyaWV2ZWQgdGhlIGRhdGEgZnJvbSB0aGUgc2VydmljZS4gXG4gKiBcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm94eU5hbWVdXG4gKiAgVGhlIFByb3h5J3MgbmFtZS4gSWYgbm9uZSBpcyBwcm92aWRlZCwgdGhlIFByb3h5IHdpbGwgdXNlIGl0cyBjb25zdHJ1Y3RvcnNcbiAqICBOQU1FIHByb3BlcnR5LlxuICogQHBhcmFtIHtPYmplY3R9IFtkYXRhXVxuICogIFRoZSBQcm94eSdzIGRhdGEgb2JqZWN0XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUHJveHkocHJveHlOYW1lLCBkYXRhKVxue1xuICAgIHRoaXMucHJveHlOYW1lPSBwcm94eU5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5OQU1FO1xuICAgIGlmKGRhdGEgIT0gbnVsbClcbiAgICB7XG4gICAgICAgIHRoaXMuc2V0RGF0YShkYXRhKTtcbiAgICB9XG59O1xuXG5cblByb3h5Lk5BTUU9IFwiUHJveHlcIjtcblxuUHJveHkucHJvdG90eXBlPSBuZXcgTm90aWZpZXI7XG5Qcm94eS5wcm90b3R5cGUuY29uc3RydWN0b3I9IFByb3h5O1xuXG4vKipcbiAqIEdldCB0aGUgUHJveHkncyBuYW1lLlxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuUHJveHkucHJvdG90eXBlLmdldFByb3h5TmFtZT0gZnVuY3Rpb24oKVxue1xuICAgIHJldHVybiB0aGlzLnByb3h5TmFtZTtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBQcm94eSdzIGRhdGEgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cblByb3h5LnByb3RvdHlwZS5zZXREYXRhPSBmdW5jdGlvbihkYXRhKVxue1xuICAgIHRoaXMuZGF0YT0gZGF0YTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBQcm94eSdzIGRhdGEgb2JqZWN0XG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5Qcm94eS5wcm90b3R5cGUuZ2V0RGF0YT0gZnVuY3Rpb24oKVxue1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG59O1xuXG4vKipcbiAqIENhbGxlZCBieSB0aGUge0BsaW5rIHB1cmVtdmMuTW9kZWwgTW9kZWx9IHdoZW5cbiAqIHRoZSBQcm94eSBpcyByZWdpc3RlcmVkLlxuICpcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cblByb3h5LnByb3RvdHlwZS5vblJlZ2lzdGVyPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgYnkgdGhlIHtAbGluayBwdXJlbXZjLk1vZGVsIE1vZGVsfSB3aGVuXG4gKiB0aGUgUHJveHkgaXMgcmVtb3ZlZC5cbiAqIFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuUHJveHkucHJvdG90eXBlLm9uUmVtb3ZlPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuO1xufTtcblxuLyoqXG4gKiBAaWdub3JlXG4gKiBUaGUgUHJveHlzIG5hbWUuXG4gKlxuICogQHByb3RlY3RlZFxuICogQHR5cGUgU3RyaW5nXG4gKi9cblByb3h5LnByb3RvdHlwZS5wcm94eU5hbWU9IG51bGw7XG5cbi8qKlxuICogQGlnbm9yZVxuICogVGhlIFByb3h5J3MgZGF0YSBvYmplY3QuXG4gKlxuICogQHByb3RlY3RlZFxuICogQHR5cGUgT2JqZWN0XG4gKi9cblByb3h5LnByb3RvdHlwZS5kYXRhPSBudWxsO1xuLyoqXG4gKiBAYXV0aG9yIFB1cmVNVkMgSlMgTmF0aXZlIFBvcnQgYnkgRGF2aWQgRm9sZXksIEZyw6lkw6lyaWMgU2F1bmllciwgJiBBbGFpbiBEdWNoZXNuZWF1IFxuICogQGF1dGhvciBDb3B5cmlnaHQoYykgMjAwNi0yMDEyIEZ1dHVyZXNjYWxlLCBJbmMuLCBTb21lIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFxuICogQGNsYXNzIHB1cmVtdmMuRmFjYWRlXG4gKiBGYWNhZGUgZXhwb3NlcyB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgQ29udHJvbGxlciwgTW9kZWwgYW5kIFZpZXdcbiAqIGFjdG9ycyB0byBjbGllbnQgZmFjaW5nIGNvZGUuIFxuICogXG4gKiBUaGlzIEZhY2FkZSBpbXBsZW1lbnRhdGlvbiBpcyBhIE11bHRpdG9uLCBzbyB5b3Ugc2hvdWxkIG5vdCBjYWxsIHRoZSBcbiAqIGNvbnN0cnVjdG9yIGRpcmVjdGx5LCBidXQgaW5zdGVhZCBjYWxsIHRoZSBzdGF0aWMgRmFjdG9yeSBtZXRob2QsIFxuICogcGFzc2luZyB0aGUgdW5pcXVlIGtleSBmb3IgdGhpcyBpbnN0YW5jZSB0byAjZ2V0SW5zdGFuY2VcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIFx0VGhlIG11bHRpdG9uIGtleSB0byB1c2UgdG8gcmV0cmlldmUgdGhlIEZhY2FkZSBpbnN0YW5jZS5cbiAqIEB0aHJvd3Mge0Vycm9yfSBcbiAqICBJZiBhbiBhdHRlbXB0IGlzIG1hZGUgdG8gaW5zdGFudGlhdGUgRmFjYWRlIGRpcmVjdGx5XG4gKi9cbmZ1bmN0aW9uIEZhY2FkZShrZXkpXG57XG4gICAgaWYoRmFjYWRlLmluc3RhbmNlTWFwW2tleV0gIT0gbnVsbClcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihGYWNhZGUuTVVMVElUT05fTVNHKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRpYWxpemVOb3RpZmllcihrZXkpO1xuICAgIEZhY2FkZS5pbnN0YW5jZU1hcFtrZXldID0gdGhpcztcbiAgICB0aGlzLmluaXRpYWxpemVGYWNhZGUoKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgTXVsdGl0b24gRmFjYWRlIGluc3RhbmNlLlxuICogXG4gKiBDYWxsZWQgYXV0b21hdGljYWxseSBieSB0aGUgY29uc3RydWN0b3IuIE92ZXJyaWRlIGluIHlvdXIgc3ViY2xhc3MgdG8gYW55XG4gKiBzdWJjbGFzcyBzcGVjaWZpYyBpbml0aWFsaXphdGlvbnMuIEJlIHN1cmUgdG8gY2FsbCB0aGUgJ3N1cGVyJyBcbiAqIGluaXRpYWxpemVGYWNhZGUgbWV0aG9kLCB0aG91Z2hcbiAqIFxuICogICAgIE15RmFjYWRlLnByb3RvdHlwZS5pbml0aWFsaXplRmFjYWRlPSBmdW5jdGlvbiAoKVxuICogICAgIHtcbiAqICAgICAgICAgRmFjYWRlLmNhbGwodGhpcyk7XG4gKiAgICAgfTtcbiAqIEBwcm90ZWN0ZWRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbkZhY2FkZS5wcm90b3R5cGUuaW5pdGlhbGl6ZUZhY2FkZSA9IGZ1bmN0aW9uKClcbntcbiAgICB0aGlzLmluaXRpYWxpemVNb2RlbCgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUNvbnRyb2xsZXIoKTtcbiAgICB0aGlzLmluaXRpYWxpemVWaWV3KCk7XG59O1xuXG4vKipcbiAqIEZhY2FkZSBNdWx0aXRvbiBGYWN0b3J5IG1ldGhvZC4gXG4gKiBOb3RlIHRoYXQgdGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gbnVsbCBpZiBzdXBwbGllZCBhXG4gKiBudWxsIG9yIHVuZGVmaW5lZCBtdWx0aXRvbiBrZXkuXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIFx0VGhlIG11bHRpdG9uIGtleSB1c2UgdG8gcmV0cmlldmUgYSBwYXJ0aWN1bGFyIEZhY2FkZSBpbnN0YW5jZVxuICogQHJldHVybiB7cHVyZW12Yy5GYWNhZGV9XG4gKi9cbkZhY2FkZS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKGtleSlcbntcblx0aWYgKG51bGwgPT0ga2V5KVxuXHRcdHJldHVybiBudWxsO1xuXHRcdFxuICAgIGlmKEZhY2FkZS5pbnN0YW5jZU1hcFtrZXldID09IG51bGwpXG4gICAge1xuICAgICAgICBGYWNhZGUuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBGYWNhZGUoa2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gRmFjYWRlLmluc3RhbmNlTWFwW2tleV07XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHtAbGluayBwdXJlbXZjLkNvbnRyb2xsZXIgQ29udHJvbGxlcn0uXG4gKiBcbiAqIENhbGxlZCBieSB0aGUgI2luaXRpYWxpemVGYWNhZGUgbWV0aG9kLlxuICogXG4gKiBPdmVycmlkZSB0aGlzIG1ldGhvZCBpbiB5b3VyIHN1YmNsYXNzIG9mIEZhY2FkZVxuICogaWYgb25lIG9yIGJvdGggb2YgdGhlIGZvbGxvd2luZyBhcmUgdHJ1ZTpcblxuICogLSBZb3Ugd2lzaCB0byBpbml0aWFsaXplIGEgZGlmZmVyZW50IENvbnRyb2xsZXJcbiAqIC0gWW91IGhhdmUgXG4gKiB7QGxpbmsgcHVyZW12Yy5TaW1wbGVDb21tYW5kIFNpbXBsZUNvbW1hbmR9c1xuICogb3Ige0BsaW5rIHB1cmVtdmMuTWFjcm9Db21tYW5kIE1hY3JvQ29tbWFuZH1zXG4gKiB0byByZWdpc3RlciB3aXRoIHRoZSBDb250cm9sbGVyYXQgc3RhcnR1cC4gICBcbiAqIFxuICogSWYgeW91IGRvbid0IHdhbnQgdG8gaW5pdGlhbGl6ZSBhIGRpZmZlcmVudCBDb250cm9sbGVyLCBcbiAqIGNhbGwgdGhlICdzdXBlcicgaW5pdGlhbGl6ZUNvbnRyb2xsZSBtZXRob2QgYXQgdGhlIGJlZ2lubmluZyBvZiB5b3VyXG4gKiBtZXRob2QsIHRoZW4gcmVnaXN0ZXIgY29tbWFuZHMuXG4gKiBcbiAqICAgICBNeUZhY2FkZS5wcm90b3R5cGUuaW5pdGlhbGl6ZUNvbnRyb2xsZXI9IGZ1bmN0aW9uICgpXG4gKiAgICAge1xuICogICAgICAgICBGYWNhZGUucHJvdG90eXBlLmluaXRpYWxpemVDb250cm9sbGVyLmNhbGwodGhpcyk7XG4gKiAgICAgICAgIHRoaXMucmVnaXN0ZXJDb21tYW5kKEFwcENvbnN0YW50cy5BX05PVEVfTkFNRSwgQUJlc3Bva2VDb21tYW5kKVxuICogICAgIH1cbiAqIFxuICogQHByb3RlY3RlZFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuRmFjYWRlLnByb3RvdHlwZS5pbml0aWFsaXplQ29udHJvbGxlciA9IGZ1bmN0aW9uKClcbntcbiAgICBpZih0aGlzLmNvbnRyb2xsZXIgIT0gbnVsbClcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgdGhpcy5jb250cm9sbGVyID0gQ29udHJvbGxlci5nZXRJbnN0YW5jZSh0aGlzLm11bHRpdG9uS2V5KTtcbn07XG5cbi8qKlxuICogQHByb3RlY3RlZFxuICogSW5pdGlhbGl6ZSB0aGUge0BsaW5rIHB1cmVtdmMuTW9kZWwgTW9kZWx9O1xuICogXG4gKiBDYWxsZWQgYnkgdGhlICNpbml0aWFsaXplRmFjYWRlIG1ldGhvZC5cbiAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIGluIHlvdXIgc3ViY2xhc3Mgb2YgRmFjYWRlIGlmIG9uZSBvZiB0aGUgZm9sbG93aW5nIGFyZVxuICogdHJ1ZTpcbiAqIFxuICogLSBZb3Ugd2lzaCB0byBpbml0aWFsaXplIGEgZGlmZmVyZW50IE1vZGVsLlxuICogXG4gKiAtIFlvdSBoYXZlIHtAbGluayBwdXJlbXZjLlByb3h5IFByb3h5fXMgdG8gXG4gKiAgIHJlZ2lzdGVyIHdpdGggdGhlIE1vZGVsIHRoYXQgZG8gbm90IHJldHJpZXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBGYWNhZGUgYXQgXG4gKiAgIGNvbnN0cnVjdGlvbiB0aW1lLlxuICogXG4gKiBJZiB5b3UgZG9uJ3Qgd2FudCB0byBpbml0aWFsaXplIGEgZGlmZmVyZW50IE1vZGVsXG4gKiBjYWxsICdzdXBlcicgI2luaXRpYWxpemVNb2RlbCBhdCB0aGUgYmVnaW5uaW5nIG9mIHlvdXIgbWV0aG9kLCB0aGVuIHJlZ2lzdGVyIFxuICogUHJveHlzLlxuICogXG4gKiBOb3RlOiBUaGlzIG1ldGhvZCBpcyAqcmFyZWx5KiBvdmVycmlkZGVuOyBpbiBwcmFjdGljZSB5b3UgYXJlIG1vcmVcbiAqIGxpa2VseSB0byB1c2UgYSBjb21tYW5kIHRvIGNyZWF0ZSBhbmQgcmVnaXN0ZXJQcm94eXMgd2l0aCB0aGUgTW9kZWw+LCBcbiAqIHNpbmNlIFByb3h5cyB3aXRoIG11dGFibGUgZGF0YSB3aWxsIGxpa2VseVxuICogbmVlZCB0byBzZW5kIE5vdGlmaWNhdGlvbnMgYW5kIHRodXMgd2lsbCBsaWtlbHkgd2FudCB0byBmZXRjaCBhIHJlZmVyZW5jZSB0byBcbiAqIHRoZSBGYWNhZGUgZHVyaW5nIHRoZWlyIGNvbnN0cnVjdGlvbi4gXG4gKiBcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbkZhY2FkZS5wcm90b3R5cGUuaW5pdGlhbGl6ZU1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGlmKHRoaXMubW9kZWwgIT0gbnVsbClcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgdGhpcy5tb2RlbCA9IE1vZGVsLmdldEluc3RhbmNlKHRoaXMubXVsdGl0b25LZXkpO1xufTtcblxuLyoqXG4gKiBAcHJvdGVjdGVkXG4gKiBcbiAqIEluaXRpYWxpemUgdGhlIHtAbGluayBwdXJlbXZjLlZpZXcgVmlld30uXG4gKiBcbiAqIENhbGxlZCBieSB0aGUgI2luaXRpYWxpemVGYWNhZGUgbWV0aG9kLlxuICogXG4gKiBPdmVycmlkZSB0aGlzIG1ldGhvZCBpbiB5b3VyIHN1YmNsYXNzIG9mIEZhY2FkZSBpZiBvbmUgb3IgYm90aCBvZiB0aGUgXG4gKiBmb2xsb3dpbmcgYXJlIHRydWU6XG4gKlxuICogLSBZb3Ugd2lzaCB0byBpbml0aWFsaXplIGEgZGlmZmVyZW50IFZpZXcuXG4gKiAtIFlvdSBoYXZlIE9ic2VydmVycyB0byByZWdpc3RlciB3aXRoIHRoZSBWaWV3XG4gKiBcbiAqIElmIHlvdSBkb24ndCB3YW50IHRvIGluaXRpYWxpemUgYSBkaWZmZXJlbnQgVmlldyBcbiAqIGNhbGwgJ3N1cGVyJyAjaW5pdGlhbGl6ZVZpZXcgYXQgdGhlIGJlZ2lubmluZyBvZiB5b3VyXG4gKiBtZXRob2QsIHRoZW4gcmVnaXN0ZXIgTWVkaWF0b3IgaW5zdGFuY2VzLlxuICogXG4gKiAgICAgTXlGYWNhZGUucHJvdG90eXBlLmluaXRpYWxpemVWaWV3PSBmdW5jdGlvbiAoKVxuICogICAgIHtcbiAqICAgICAgICAgRmFjYWRlLnByb3RvdHlwZS5pbml0aWFsaXplVmlldy5jYWxsKHRoaXMpO1xuICogICAgICAgICB0aGlzLnJlZ2lzdGVyTWVkaWF0b3IobmV3IE15TWVkaWF0b3IoKSk7XG4gKiAgICAgfTtcbiAqIFxuICogTm90ZTogVGhpcyBtZXRob2QgaXMgKnJhcmVseSogb3ZlcnJpZGRlbjsgaW4gcHJhY3RpY2UgeW91IGFyZSBtb3JlXG4gKiBsaWtlbHkgdG8gdXNlIGEgY29tbWFuZCB0byBjcmVhdGUgYW5kIHJlZ2lzdGVyIE1lZGlhdG9yc1xuICogd2l0aCB0aGUgVmlldywgc2luY2UgTWVkaWF0b3IgaW5zdGFuY2VzIHdpbGwgbmVlZCB0byBzZW5kIFxuICogTm90aWZpY2F0aW9ucyBhbmQgdGh1cyB3aWxsIGxpa2VseSB3YW50IHRvIGZldGNoIGEgcmVmZXJlbmNlIFxuICogdG8gdGhlIEZhY2FkZSBkdXJpbmcgdGhlaXIgY29uc3RydWN0aW9uLiBcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbkZhY2FkZS5wcm90b3R5cGUuaW5pdGlhbGl6ZVZpZXcgPSBmdW5jdGlvbigpXG57XG4gICAgaWYodGhpcy52aWV3ICE9IG51bGwpXG4gICAgICAgIHJldHVybjtcblxuICAgIHRoaXMudmlldyA9IFZpZXcuZ2V0SW5zdGFuY2UodGhpcy5tdWx0aXRvbktleSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgY29tbWFuZCB3aXRoIHRoZSBDb250cm9sbGVyIGJ5IE5vdGlmaWNhdGlvbiBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gbm90aWZpY2F0aW9uTmFtZVxuICogIFRoZSBuYW1lIG9mIHRoZSBOb3RpZmljYXRpb24gdG8gYXNzb2NpYXRlIHRoZSBjb21tYW5kIHdpdGhcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbW1hbmRDbGFzc1JlZlxuICogIEEgcmVmZXJlbmNlIG90IHRoZSBjb21tYW5kcyBjb25zdHJ1Y3Rvci5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbkZhY2FkZS5wcm90b3R5cGUucmVnaXN0ZXJDb21tYW5kID0gZnVuY3Rpb24obm90aWZpY2F0aW9uTmFtZSwgY29tbWFuZENsYXNzUmVmKVxue1xuICAgIHRoaXMuY29udHJvbGxlci5yZWdpc3RlckNvbW1hbmQobm90aWZpY2F0aW9uTmFtZSwgY29tbWFuZENsYXNzUmVmKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgcHJldmlvdXNseSByZWdpc3RlcmVkIGNvbW1hbmQgdG8gTm90aWZpY2F0aW9uIG1hcHBpbmcgZnJvbSB0aGVcbiAqIHtAbGluayBwdXJlbXZjLkNvbnRyb2xsZXIjcmVtb3ZlQ29tbWFuZCBDb250cm9sbGVyfVxuICogQHBhcmFtIHtzdHJpbmd9IG5vdGlmaWNhdGlvbk5hbWVcbiAqICBUaGUgbmFtZSBvZiB0aGUgdGhlIE5vdGlmaWNhdGlvbiB0byByZW1vdmUgZnJvbSB0aGUgY29tbWFuZCBtYXBwaW5nIGZvci5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbkZhY2FkZS5wcm90b3R5cGUucmVtb3ZlQ29tbWFuZCA9IGZ1bmN0aW9uKG5vdGlmaWNhdGlvbk5hbWUpXG57XG4gICAgdGhpcy5jb250cm9sbGVyLnJlbW92ZUNvbW1hbmQobm90aWZpY2F0aW9uTmFtZSk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGEgY29tbWFuZCBpcyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIG5vdGlmaWNhdGlvbi5cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IG5vdGlmaWNhdGlvbk5hbWVcbiAqICBBIE5vdGlmaWNhdGlvbiBuYW1lXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogIFdoZXRoZXIgYSBjb21tYW4gaXMgY3VycmVudGx5IHJlZ2lzdGVyZWQgZm9yIHRoZSBnaXZlbiBub3RpZmljYXRpb25OYW1lXG4gKi9cbkZhY2FkZS5wcm90b3R5cGUuaGFzQ29tbWFuZCA9IGZ1bmN0aW9uKG5vdGlmaWNhdGlvbk5hbWUpXG57XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbGxlci5oYXNDb21tYW5kKG5vdGlmaWNhdGlvbk5hbWUpO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBhIFByb3h5IHdpdGggdGhlIHtAbGluayBwdXJlbXZjLk1vZGVsI3JlZ2lzdGVyUHJveHkgTW9kZWx9XG4gKiBieSBuYW1lLlxuICogXG4gKiBAcGFyYW0ge3B1cmVtdmMuUHJveHl9IHByb3h5XG4gKiAgVGhlIFByb3h5IGluc3RhbmNlIHRvIGJlIHJlZ2lzdGVyZWQgd2l0aCB0aGUgTW9kZWwuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5GYWNhZGUucHJvdG90eXBlLnJlZ2lzdGVyUHJveHkgPSBmdW5jdGlvbihwcm94eSlcbntcbiAgICB0aGlzLm1vZGVsLnJlZ2lzdGVyUHJveHkocHJveHkpO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZSBhIFByb3h5IGZyb20gdGhlIE1vZGVsXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm94eU5hbWVcbiAqIEByZXR1cm4ge3B1cmVtdmMuUHJveHl9XG4gKi9cbkZhY2FkZS5wcm90b3R5cGUucmV0cmlldmVQcm94eSA9IGZ1bmN0aW9uKHByb3h5TmFtZSlcbntcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5yZXRyaWV2ZVByb3h5KHByb3h5TmFtZSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIFByb3h5IGZyb20gdGhlIE1vZGVsIGJ5IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm94eU5hbWVcbiAqICBUaGUgbmFtZSBvZiB0aGUgUHJveHlcbiAqIEByZXR1cm4ge3B1cmVtdmMuUHJveHl9XG4gKiAgVGhlIFByb3h5IHRoYXQgd2FzIHJlbW92ZWQgZnJvbSB0aGUgTW9kZWxcbiAqL1xuRmFjYWRlLnByb3RvdHlwZS5yZW1vdmVQcm94eSA9IGZ1bmN0aW9uKHByb3h5TmFtZSlcbntcbiAgICB2YXIgcHJveHkgPSBudWxsO1xuICAgIGlmKHRoaXMubW9kZWwgIT0gbnVsbClcbiAgICB7XG4gICAgICAgIHByb3h5ID0gdGhpcy5tb2RlbC5yZW1vdmVQcm94eShwcm94eU5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm94eTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaXQgYSBQcm94eSBpcyByZWdpc3RlcmVkLlxuICogQHBhcmFtIHtzdHJpbmd9IHByb3h5TmFtZVxuICogIEEgUHJveHkgbmFtZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqICBXaGV0aGVyIGEgUHJveHkgaXMgY3VycmVudGx5IHJlZ2lzdGVyZWQgd2l0aCB0aGUgZ2l2ZW4gcHJveHlOYW1lXG4gKi9cbkZhY2FkZS5wcm90b3R5cGUuaGFzUHJveHkgPSBmdW5jdGlvbihwcm94eU5hbWUpXG57XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuaGFzUHJveHkocHJveHlOYW1lKTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBNZWRpYXRvciB3aXRoIHdpdGggdGhlIFZpZXcuXG4gKiBcbiAqIEBwYXJhbSB7cHVyZW12Yy5NZWRpYXRvcn0gbWVkaWF0b3JcbiAqICBBIHJlZmVyZW5jZSB0byB0aGUgTWVkaWF0b3IgdG8gcmVnaXN0ZXJcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbkZhY2FkZS5wcm90b3R5cGUucmVnaXN0ZXJNZWRpYXRvciA9IGZ1bmN0aW9uKG1lZGlhdG9yKVxue1xuICAgIGlmKHRoaXMudmlldyAhPSBudWxsKVxuICAgIHtcbiAgICAgICAgdGhpcy52aWV3LnJlZ2lzdGVyTWVkaWF0b3IobWVkaWF0b3IpO1xuICAgIH1cbn07XG5cbi8qKlxuICogUmV0cmlldmUgYSBNZWRpYXRvciBmcm9tIHRoZSBWaWV3IGJ5IG5hbWVcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IG1lZGlhdG9yTmFtZVxuICogIFRoZSBNZWRpYXRvcnMgbmFtZVxuICogQHJldHVybiB7cHVyZW12Yy5NZWRpYXRvcn1cbiAqICBUaGUgcmV0cmlldmVkIE1lZGlhdG9yXG4gKi9cbkZhY2FkZS5wcm90b3R5cGUucmV0cmlldmVNZWRpYXRvciA9IGZ1bmN0aW9uKG1lZGlhdG9yTmFtZSlcbntcbiAgICByZXR1cm4gdGhpcy52aWV3LnJldHJpZXZlTWVkaWF0b3IobWVkaWF0b3JOYW1lKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgTWVkaWF0b3IgZnJvbSB0aGUgVmlldy5cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IG1lZGlhdG9yTmFtZVxuICogIFRoZSBuYW1lIG9mIHRoZSBNZWRpYXRvciB0byByZW1vdmUuXG4gKiBAcmV0dXJuIHtwdXJlbXZjLk1lZGlhdG9yfVxuICogIFRoZSByZW1vdmVkIE1lZGlhdG9yXG4gKi9cbkZhY2FkZS5wcm90b3R5cGUucmVtb3ZlTWVkaWF0b3IgPSBmdW5jdGlvbihtZWRpYXRvck5hbWUpXG57XG4gICAgdmFyIG1lZGlhdG9yID0gbnVsbDtcbiAgICBpZih0aGlzLnZpZXcgIT0gbnVsbClcbiAgICB7XG4gICAgICAgIG1lZGlhdG9yID0gdGhpcy52aWV3LnJlbW92ZU1lZGlhdG9yKG1lZGlhdG9yTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lZGlhdG9yO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIE1lZGlhdG9yIGlzIHJlZ2lzdGVyZWQgb3Igbm90LlxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVkaWF0b3JOYW1lXG4gKiAgQSBNZWRpYXRvciBuYW1lXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogIFdoZXRoZXIgYSBNZWRpYXRvciBpcyByZWdpc3RlcmVkIHdpdGggdGhlIGdpdmVuIG1lZGlhdG9yTmFtZVxuICovXG5GYWNhZGUucHJvdG90eXBlLmhhc01lZGlhdG9yID0gZnVuY3Rpb24obWVkaWF0b3JOYW1lKVxue1xuICAgIHJldHVybiB0aGlzLnZpZXcuaGFzTWVkaWF0b3IobWVkaWF0b3JOYW1lKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGFuZCBzZW5kIGEgXG4gKiB7QGxpbmsgcHVyZW12Yy5Ob3RpZmljYXRpb24gTm90aWZpY2F0aW9ufVxuICogXG4gKiBLZWVwcyB1cyBmcm9tIGhhdmluZyB0byBjb25zdHJ1Y3QgbmV3IE5vdGlmaWNhdGlvbiBpbnN0YW5jZXMgaW4gb3VyXG4gKiBpbXBsZW1lbnRhdGlvblxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gbm90aWZpY2F0aW9uTmFtZVxuICogIFRoZSBuYW1lIG9mIHRoZSBOb3RpZmljYXRpb24gdG8gc2VuZFxuICogQHBhcmFtIHtPYmplY3R9IFtib2R5XVxuICogIFRoZSBib2R5IG9mIHRoZSBub3RpZmljYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV1cbiAqICBUaGUgdHlwZSBvZiB0aGUgbm90aWZpY2F0aW9uXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5GYWNhZGUucHJvdG90eXBlLnNlbmROb3RpZmljYXRpb24gPSBmdW5jdGlvbihub3RpZmljYXRpb25OYW1lLCBib2R5LCB0eXBlKVxue1xuICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKG5ldyBOb3RpZmljYXRpb24obm90aWZpY2F0aW9uTmFtZSwgYm9keSwgdHlwZSkpO1xufTtcblxuLyoqXG4gKiBOb3RpZnkge0BsaW5rIHB1cmVtdmMuT2JzZXJ2ZXIgT2JzZXJ2ZXJ9c1xuICogXG4gKiBUaGlzIG1ldGhvZCBpcyBsZWZ0IHB1YmxpYyBtb3N0bHkgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGFuZCB0byBhbGxvd1xuICogeW91IHRvIHNlbmQgY3VzdG9tIG5vdGlmaWNhdGlvbiBjbGFzc2VzIHVzaW5nIHRoZSBmYWNhZGUuXG4gKiBcbiAqIFVzdWFsbHkgeW91IHNob3VsZCBqdXN0IGNhbGwgc2VuZE5vdGlmaWNhdGlvbiBhbmQgcGFzcyB0aGUgcGFyYW1ldGVycywgbmV2ZXIgXG4gKiBoYXZpbmcgdG8gY29uc3RydWN0IHRoZSBub3RpZmljYXRpb24geW91cnNlbGYuXG4gKiBcbiAqIEBwYXJhbSB7cHVyZW12Yy5Ob3RpZmljYXRpb259IG5vdGlmaWNhdGlvblxuICogIFRoZSBOb3RpZmljYXRpb24gdG8gc2VuZFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuRmFjYWRlLnByb3RvdHlwZS5ub3RpZnlPYnNlcnZlcnMgPSBmdW5jdGlvbihub3RpZmljYXRpb24pXG57XG4gICAgaWYodGhpcy52aWV3ICE9IG51bGwpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXcubm90aWZ5T2JzZXJ2ZXJzKG5vdGlmaWNhdGlvbik7XG4gICAgfVxufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBGYWNhZGVzIE5vdGlmaWVyIGNhcGFiaWxpdGllcyBieSBzZXR0aW5nIHRoZSBNdWx0aXRvbiBrZXkgZm9yIFxuICogdGhpcyBmYWNhZGUgaW5zdGFuY2UuXG4gKiBcbiAqIE5vdCBjYWxsZWQgZGlyZWN0bHksIGJ1dCBpbnN0ZWFkIGZyb20gdGhlIGNvbnN0cnVjdG9yIHdoZW4gI2dldEluc3RhbmNlIGlzIFxuICogaW52b2tlZC4gSXQgaXMgbmVjZXNzYXJ5IHRvIGJlIHB1YmxpYyBpbiBvcmRlciB0byBpbXBsZW1lbnQgTm90aWZpZXJcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuRmFjYWRlLnByb3RvdHlwZS5pbml0aWFsaXplTm90aWZpZXIgPSBmdW5jdGlvbihrZXkpXG57XG4gICAgdGhpcy5tdWx0aXRvbktleSA9IGtleTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSAqQ29yZSogaXMgcmVnaXN0ZXJlZCBvciBub3RcbiAqXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiAgVGhlIG11bHRpdG9uIGtleSBmb3IgdGhlICpDb3JlKiBpbiBxdWVzdGlvblxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqICBXaGV0aGVyIGEgKkNvcmUqIGlzIHJlZ2lzdGVyZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5XG4gKi9cbkZhY2FkZS5oYXNDb3JlID0gZnVuY3Rpb24oa2V5KVxue1xuICAgIHJldHVybiBGYWNhZGUuaW5zdGFuY2VNYXBba2V5XSAhPSBudWxsO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSAqQ29yZSogXG4gKiBcbiAqIFJlbW92ZSB0aGUgTW9kZWwsIFZpZXcsIENvbnRyb2xsZXIgYW5kIEZhY2FkZSBmb3IgYSBnaXZlbiBrZXkuXG4gKlxuICogQHN0YXRpY1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuRmFjYWRlLnJlbW92ZUNvcmUgPSBmdW5jdGlvbihrZXkpXG57XG4gICAgaWYoRmFjYWRlLmluc3RhbmNlTWFwW2tleV0gPT0gbnVsbClcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgTW9kZWwucmVtb3ZlTW9kZWwoa2V5KTtcbiAgICBWaWV3LnJlbW92ZVZpZXcoa2V5KTtcbiAgICBDb250cm9sbGVyLnJlbW92ZUNvbnRyb2xsZXIoa2V5KTtcbiAgICBkZWxldGUgRmFjYWRlLmluc3RhbmNlTWFwW2tleV07XG59O1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqIFRoZSBGYWNhZGVzIGNvcnJlc3BvbmRpbmcgQ29udHJvbGxlclxuICpcbiAqIEBwcm90ZWN0ZWRcbiAqIEB0eXBlIHB1cmVtdmMuQ29udHJvbGxlclxuICovXG5GYWNhZGUucHJvdG90eXBlLmNvbnRyb2xsZXIgPSBudWxsO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqIFRoZSBGYWNhZGVzIGNvcnJlc3BvbmRpbmcgTW9kZWwgaW5zdGFuY2VcbiAqXG4gKiBAcHJvdGVjdGVkXG4gKiBAdHlwZSBwdXJlbXZjLk1vZGVsXG4gKi9cbkZhY2FkZS5wcm90b3R5cGUubW9kZWwgPSBudWxsO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqIFRoZSBGYWNhZGVzIGNvcnJlc3BuZGluZyBWaWV3IGluc3RhbmNlLlxuICpcbiAqIEBwcm90ZWN0ZWRcbiAqIEB0eXBlIHB1cmVtdmMuVmlld1xuICovXG5GYWNhZGUucHJvdG90eXBlLnZpZXcgPSBudWxsO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqIFRoZSBGYWNhZGVzIG11bHRpdG9uIGtleS5cbiAqXG4gKiBAcHJvdGVjdGVkXG4gKiBAdHlwZSBzdHJpbmdcbiAqL1xuRmFjYWRlLnByb3RvdHlwZS5tdWx0aXRvbktleSA9IG51bGw7XG5cbi8qKlxuICogQGlnbm9yZVxuICogVGhlIE11bHRpdG9uIEZhY2FkZSBpbnN0YW5jZSBtYXAuXG4gKiBAc3RhdGljXG4gKiBAcHJvdGVjdGVkXG4gKiBAdHlwZSBBcnJheVxuICovXG5GYWNhZGUuaW5zdGFuY2VNYXAgPSBbXTtcblxuLyoqXG4gKiBAaWdub3JlXG4gKiBNZXNzYWdlcyBDb25zdGFudHNcbiAqIEBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAY29uc3RcbiAqIEBzdGF0aWNcbiAqL1xuRmFjYWRlLk1VTFRJVE9OX01TRyA9IFwiRmFjYWRlIGluc3RhbmNlIGZvciB0aGlzIE11bHRpdG9uIGtleSBhbHJlYWR5IGNvbnN0cnVjdGVkIVwiO1xuLyoqXG4gKiBAYXV0aG9yIFB1cmVNVkMgSlMgTmF0aXZlIFBvcnQgYnkgRGF2aWQgRm9sZXksIEZyw6lkw6lyaWMgU2F1bmllciwgJiBBbGFpbiBEdWNoZXNuZWF1IFxuICogQGF1dGhvciBDb3B5cmlnaHQoYykgMjAwNi0yMDEyIEZ1dHVyZXNjYWxlLCBJbmMuLCBTb21lIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFxuICogQGNsYXNzIHB1cmVtdmMuVmlld1xuICogXG4gKiBBIE11bHRpdG9uIFZpZXcgaW1wbGVtZW50YXRpb24uXG4gKiBcbiAqIEluIFB1cmVNVkMsIHRoZSBWaWV3IGNsYXNzIGFzc3VtZXMgdGhlc2UgcmVzcG9uc2liaWxpdGllc1xuICogXG4gKiAtIE1haW50YWluIGEgY2FjaGUgb2Yge0BsaW5rIHB1cmVtdmMuTWVkaWF0b3IgTWVkaWF0b3J9XG4gKiAgIGluc3RhbmNlcy5cbiAqIFxuICogLSBQcm92aWRlIG1ldGhvZHMgZm9yIHJlZ2lzdGVyaW5nLCByZXRyaWV2aW5nLCBhbmQgcmVtb3ZpbmcgXG4gKiAgIHtAbGluayBwdXJlbXZjLk1lZGlhdG9yIE1lZGlhdG9yfS5cbiAqIFxuICogLSBOb3RpZml5aW5nIHtAbGluayBwdXJlbXZjLk1lZGlhdG9yIE1lZGlhdG9yfSB3aGVuIHRoZXkgYXJlIHJlZ2lzdGVyZWQgb3IgXG4gKiAgIHJlbW92ZWQuXG4gKiBcbiAqIC0gTWFuYWdpbmcgdGhlIG9ic2VydmVyIGxpc3RzIGZvciBlYWNoIHtAbGluayBwdXJlbXZjLk5vdGlmaWNhdGlvbiBOb3RpZmljYXRpb259ICBcbiAqICAgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICogXG4gKiAtIFByb3ZpZGluZyBhIG1ldGhvZCBmb3IgYXR0YWNoaW5nIHtAbGluayBwdXJlbXZjLk9ic2VydmVyIE9ic2VydmVyfSB0byBhbiBcbiAqICAge0BsaW5rIHB1cmVtdmMuTm90aWZpY2F0aW9uIE5vdGlmaWNhdGlvbn0ncyBvYnNlcnZlciBsaXN0LlxuICogXG4gKiAtIFByb3ZpZGluZyBhIG1ldGhvZCBmb3IgYnJvYWRjYXN0aW5nIGEge0BsaW5rIHB1cmVtdmMuTm90aWZpY2F0aW9uIE5vdGlmaWNhdGlvbn0uXG4gKiBcbiAqIC0gTm90aWZ5aW5nIHRoZSB7QGxpbmsgcHVyZW12Yy5PYnNlcnZlciBPYnNlcnZlcn1zIG9mIGEgZ2l2ZW4gXG4gKiAgIHtAbGluayBwdXJlbXZjLk5vdGlmaWNhdGlvbiBOb3RpZmljYXRpb259IHdoZW4gaXQgYnJvYWRjYXN0LlxuICogXG4gKiBUaGlzIFZpZXcgaW1wbGVtZW50YXRpb24gaXMgYSBNdWx0aXRvbiwgc28geW91IHNob3VsZCBub3QgY2FsbCB0aGUgXG4gKiBjb25zdHJ1Y3RvciBkaXJlY3RseSwgYnV0IGluc3RlYWQgY2FsbCB0aGUgc3RhdGljIE11bHRpdG9uIFxuICogRmFjdG9yeSAjZ2V0SW5zdGFuY2UgbWV0aG9kLlxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aHJvd3Mge0Vycm9yfSBcbiAqICBpZiBpbnN0YW5jZSBmb3IgdGhpcyBNdWx0aXRvbiBrZXkgaGFzIGFscmVhZHkgYmVlbiBjb25zdHJ1Y3RlZFxuICovXG5mdW5jdGlvbiBWaWV3KGtleSlcbntcbiAgICBpZihWaWV3Lmluc3RhbmNlTWFwW2tleV0gIT0gbnVsbClcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihWaWV3Lk1VTFRJVE9OX01TRyk7XG4gICAgfTtcblxuICAgIHRoaXMubXVsdGl0b25LZXkgPSBrZXk7XG4gICAgVmlldy5pbnN0YW5jZU1hcFt0aGlzLm11bHRpdG9uS2V5XSA9IHRoaXM7XG4gICAgdGhpcy5tZWRpYXRvck1hcCA9IFtdO1xuICAgIHRoaXMub2JzZXJ2ZXJNYXAgPSBbXTtcbiAgICB0aGlzLmluaXRpYWxpemVWaWV3KCk7XG59O1xuXG4vKipcbiAqIEBwcm90ZWN0ZWRcbiAqIEluaXRpYWxpemUgdGhlIFNpbmdsZXRvbiBWaWV3IGluc3RhbmNlXG4gKiBcbiAqIENhbGxlZCBhdXRvbWF0aWNhbGx5IGJ5IHRoZSBjb25zdHJ1Y3RvciwgdGhpcyBpcyB5b3VyIG9wcG9ydHVuaXR5IHRvXG4gKiBpbml0aWFsaXplIHRoZSBTaW5nbGV0b24gaW5zdGFuY2UgaW4geW91ciBzdWJjbGFzcyB3aXRob3V0IG92ZXJyaWRpbmcgdGhlXG4gKiBjb25zdHJ1Y3RvclxuICogXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5WaWV3LnByb3RvdHlwZS5pbml0aWFsaXplVmlldyA9IGZ1bmN0aW9uKClcbntcbiAgICByZXR1cm47XG59O1xuXG4vKipcbiAqIFZpZXcgU2luZ2xldG9uIEZhY3RvcnkgbWV0aG9kLlxuICogTm90ZSB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIG51bGwgaWYgc3VwcGxpZWQgYSBudWxsIFxuICogb3IgdW5kZWZpbmVkIG11bHRpdG9uIGtleS5cbiAqICBcbiAqIEByZXR1cm4ge3B1cmVtdmMuVmlld31cbiAqICBUaGUgU2luZ2xldG9uIGluc3RhbmNlIG9mIFZpZXdcbiAqL1xuVmlldy5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKGtleSlcbntcblx0aWYgKG51bGwgPT0ga2V5KVxuXHRcdHJldHVybiBudWxsO1xuXHRcdFxuICAgIGlmKFZpZXcuaW5zdGFuY2VNYXBba2V5XSA9PSBudWxsKVxuICAgIHtcbiAgICAgICAgVmlldy5pbnN0YW5jZU1hcFtrZXldID0gbmV3IFZpZXcoa2V5KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFZpZXcuaW5zdGFuY2VNYXBba2V5XTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgYW4gT2JzZXJ2ZXIgdG8gYmUgbm90aWZpZWQgb2YgTm90aWZpY2F0aW9ucyB3aXRoIGEgZ2l2ZW4gbmFtZVxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gbm90aWZpY2F0aW9uTmFtZVxuICogIFRoZSBuYW1lIG9mIHRoZSBOb3RpZmljYXRpb25zIHRvIG5vdGlmeSB0aGlzIE9ic2VydmVyIG9mXG4gKiBAcGFyYW0ge3B1cmVtdmMuT2JzZXJ2ZXJ9IG9ic2VydmVyXG4gKiAgVGhlIE9ic2VydmVyIHRvIHJlZ2lzdGVyLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuVmlldy5wcm90b3R5cGUucmVnaXN0ZXJPYnNlcnZlciA9IGZ1bmN0aW9uKG5vdGlmaWNhdGlvbk5hbWUsIG9ic2VydmVyKVxue1xuICAgIGlmKHRoaXMub2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV0gIT0gbnVsbClcbiAgICB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV0ucHVzaChvYnNlcnZlcik7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV0gPSBbb2JzZXJ2ZXJdO1xuICAgIH1cbn07XG5cbi8qKlxuICogTm90aWZ5IHRoZSBPYnNlcnZlcnNmb3IgYSBwYXJ0aWN1bGFyIE5vdGlmaWNhdGlvbi5cbiAqIFxuICogQWxsIHByZXZpb3VzbHkgYXR0YWNoZWQgT2JzZXJ2ZXJzIGZvciB0aGlzIE5vdGlmaWNhdGlvbidzXG4gKiBsaXN0IGFyZSBub3RpZmllZCBhbmQgYXJlIHBhc3NlZCBhIHJlZmVyZW5jZSB0byB0aGUgSU5vdGlmaWNhdGlvbiBpbiBcbiAqIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgcmVnaXN0ZXJlZC5cbiAqIFxuICogQHBhcmFtIHtwdXJlbXZjLk5vdGlmaWNhdGlvbn0gbm90aWZpY2F0aW9uXG4gKiAgVGhlIE5vdGlmaWNhdGlvbiB0byBub3RpZnkgT2JzZXJ2ZXJzIG9mXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5WaWV3LnByb3RvdHlwZS5ub3RpZnlPYnNlcnZlcnMgPSBmdW5jdGlvbihub3RpZmljYXRpb24pXG57XG4gICAgLy8gU0lDXG4gICAgaWYodGhpcy5vYnNlcnZlck1hcFtub3RpZmljYXRpb24uZ2V0TmFtZSgpXSAhPSBudWxsKVxuICAgIHtcbiAgICAgICAgdmFyIG9ic2VydmVyc19yZWYgPSB0aGlzLm9ic2VydmVyTWFwW25vdGlmaWNhdGlvbi5nZXROYW1lKCldLCBvYnNlcnZlcnMgPSBbXSwgb2JzZXJ2ZXJcblxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgb2JzZXJ2ZXJzX3JlZi5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBvYnNlcnZlcnNfcmVmW2ldO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG9ic2VydmVycy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBvYnNlcnZlcnNbaV07XG4gICAgICAgICAgICBvYnNlcnZlci5ub3RpZnlPYnNlcnZlcihub3RpZmljYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIE9ic2VydmVyIGZvciBhIGdpdmVuIG5vdGlmeUNvbnRleHQgZnJvbSBhbiBvYnNlcnZlciBsaXN0IGZvclxuICogYSBnaXZlbiBOb3RpZmljYXRpb24gbmFtZVxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gbm90aWZpY2F0aW9uTmFtZVxuICogIFdoaWNoIG9ic2VydmVyIGxpc3QgdG8gcmVtb3ZlIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSBub3RpZnlDb250ZXh0XG4gKiAgUmVtb3ZlIHRoZSBPYnNlcnZlciB3aXRoIHRoaXMgb2JqZWN0IGFzIGl0cyBub3RpZnlDb250ZXh0XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5WaWV3LnByb3RvdHlwZS5yZW1vdmVPYnNlcnZlciA9IGZ1bmN0aW9uKG5vdGlmaWNhdGlvbk5hbWUsIG5vdGlmeUNvbnRleHQpXG57XG4gICAgLy8gU0lDXG4gICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV07XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG9ic2VydmVycy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIGlmKG9ic2VydmVyc1tpXS5jb21wYXJlTm90aWZ5Q29udGV4dChub3RpZnlDb250ZXh0KSA9PSB0cnVlKVxuICAgICAgICB7XG4gICAgICAgICAgICBvYnNlcnZlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihvYnNlcnZlcnMubGVuZ3RoID09IDApXG4gICAge1xuICAgICAgICBkZWxldGUgdGhpcy5vYnNlcnZlck1hcFtub3RpZmljYXRpb25OYW1lXTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgTWVkaWF0b3IgaW5zdGFuY2Ugd2l0aCB0aGUgVmlldy5cbiAqIFxuICogUmVnaXN0ZXJzIHRoZSBNZWRpYXRvciBzbyB0aGF0IGl0IGNhbiBiZSByZXRyaWV2ZWQgYnkgbmFtZSxcbiAqIGFuZCBmdXJ0aGVyIGludGVycm9nYXRlcyB0aGUgTWVkaWF0b3IgZm9yIGl0cyBcbiAqIHtAbGluayBwdXJlbXZjLk1lZGlhdG9yI2xpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMgaW50ZXJlc3RzfS5cbiAqXG4gKiBJZiB0aGUgTWVkaWF0b3IgcmV0dXJucyBhbnkgTm90aWZpY2F0aW9uXG4gKiBuYW1lcyB0byBiZSBub3RpZmllZCBhYm91dCwgYW4gT2JzZXJ2ZXIgaXMgY3JlYXRlZCBlbmNhcHN1bGF0aW5nIFxuICogdGhlIE1lZGlhdG9yIGluc3RhbmNlJ3MgXG4gKiB7QGxpbmsgcHVyZW12Yy5NZWRpYXRvciNoYW5kbGVOb3RpZmljYXRpb24gaGFuZGxlTm90aWZpY2F0aW9ufVxuICogbWV0aG9kIGFuZCByZWdpc3RlcmluZyBpdCBhcyBhbiBPYnNlcnZlciBmb3IgYWxsIE5vdGlmaWNhdGlvbnMgdGhlIFxuICogTWVkaWF0b3IgaXMgaW50ZXJlc3RlZCBpbi5cbiAqIFxuICogQHBhcmFtIHtwdXJlbXZjLk1lZGlhdG9yfSBcbiAqICBhIHJlZmVyZW5jZSB0byB0aGUgTWVkaWF0b3IgaW5zdGFuY2VcbiAqL1xuVmlldy5wcm90b3R5cGUucmVnaXN0ZXJNZWRpYXRvciA9IGZ1bmN0aW9uKG1lZGlhdG9yKVxue1xuICAgIGlmKHRoaXMubWVkaWF0b3JNYXBbbWVkaWF0b3IuZ2V0TWVkaWF0b3JOYW1lKCldICE9IG51bGwpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWVkaWF0b3IuaW5pdGlhbGl6ZU5vdGlmaWVyKHRoaXMubXVsdGl0b25LZXkpO1xuICAgIC8vIHJlZ2lzdGVyIHRoZSBtZWRpYXRvciBmb3IgcmV0cmlldmFsIGJ5IG5hbWVcbiAgICB0aGlzLm1lZGlhdG9yTWFwW21lZGlhdG9yLmdldE1lZGlhdG9yTmFtZSgpXSA9IG1lZGlhdG9yO1xuXG4gICAgLy8gZ2V0IG5vdGlmaWNhdGlvbiBpbnRlcmVzdHMgaWYgYW55XG4gICAgdmFyIGludGVyZXN0cyA9IG1lZGlhdG9yLmxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKTtcblxuICAgIC8vIHJlZ2lzdGVyIG1lZGlhdG9yIGFzIGFuIG9ic2VydmVyIGZvciBlYWNoIG5vdGlmaWNhdGlvblxuICAgIGlmKGludGVyZXN0cy5sZW5ndGggPiAwKVxuICAgIHtcbiAgICAgICAgLy8gY3JlYXRlIG9ic2VydmVyIHJlZmVyZW5jaW5nIHRoaXMgbWVkaWF0b3JzIGhhbmRsZU5vdGlmaWNhdGlvbiBtZXRob2RcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE9ic2VydmVyKG1lZGlhdG9yLmhhbmRsZU5vdGlmaWNhdGlvbiwgbWVkaWF0b3IpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaW50ZXJlc3RzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyT2JzZXJ2ZXIoaW50ZXJlc3RzW2ldLCBvYnNlcnZlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtZWRpYXRvci5vblJlZ2lzdGVyKCk7XG59XG5cbi8qKlxuICogUmV0cmlldmUgYSBNZWRpYXRvciBmcm9tIHRoZSBWaWV3XG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZWRpYXRvck5hbWVcbiAqICBUaGUgbmFtZSBvZiB0aGUgTWVkaWF0b3IgaW5zdGFuY2UgdG8gcmV0cmlldmVcbiAqIEByZXR1cm4ge3B1cmVtdmMuTWVkaWF0b3J9XG4gKiAgVGhlIE1lZGlhdG9yIGluc3RhbmNlIHByZXZpb3VzbHkgcmVnaXN0ZXJlZCB3aXRoIHRoZSBnaXZlbiBtZWRpYXRvck5hbWVcbiAqL1xuVmlldy5wcm90b3R5cGUucmV0cmlldmVNZWRpYXRvciA9IGZ1bmN0aW9uKG1lZGlhdG9yTmFtZSlcbntcbiAgICByZXR1cm4gdGhpcy5tZWRpYXRvck1hcFttZWRpYXRvck5hbWVdO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBNZWRpYXRvciBmcm9tIHRoZSBWaWV3LlxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVkaWF0b3JOYW1lXG4gKiAgTmFtZSBvZiB0aGUgTWVkaWF0b3IgaW5zdGFuY2UgdG8gYmUgcmVtb3ZlZFxuICogQHJldHVybiB7cHVyZW12Yy5NZWRpYXRvcn1cbiAqICBUaGUgTWVkaWF0b3IgdGhhdCB3YXMgcmVtb3ZlZCBmcm9tIHRoZSBWaWV3XG4gKi9cblZpZXcucHJvdG90eXBlLnJlbW92ZU1lZGlhdG9yID0gZnVuY3Rpb24obWVkaWF0b3JOYW1lKVxue1xuICAgIHZhciBtZWRpYXRvciA9IHRoaXMubWVkaWF0b3JNYXBbbWVkaWF0b3JOYW1lXTtcbiAgICBpZihtZWRpYXRvcilcbiAgICB7XG4gICAgICAgIC8vIGZvciBldmVyeSBub3RpZmljYXRpb24gdGhlIG1lZGlhdG9yIGlzIGludGVyZXN0ZWQgaW4uLi5cbiAgICAgICAgdmFyIGludGVyZXN0cyA9IG1lZGlhdG9yLmxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGludGVyZXN0cy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBvYnNlcnZlciBsaW5raW5nIHRoZSBtZWRpYXRvciB0byB0aGUgbm90aWZpY2F0aW9uXG4gICAgICAgICAgICAvLyBpbnRlcmVzdFxuICAgICAgICAgICAgdGhpcy5yZW1vdmVPYnNlcnZlcihpbnRlcmVzdHNbaV0sIG1lZGlhdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgbWVkaWF0b3IgZnJvbSB0aGUgbWFwXG4gICAgICAgIGRlbGV0ZSB0aGlzLm1lZGlhdG9yTWFwW21lZGlhdG9yTmFtZV07XG5cbiAgICAgICAgLy8gYWxlcnQgdGhlIG1lZGlhdG9yIHRoYXQgaXQgaGFzIGJlZW4gcmVtb3ZlZFxuICAgICAgICBtZWRpYXRvci5vblJlbW92ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBtZWRpYXRvcjtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBNZWRpYXRvciBpcyByZWdpc3RlcmVkIG9yIG5vdC5cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IG1lZGlhdG9yTmFtZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqICBXaGV0aGVyIGEgTWVkaWF0b3IgaXMgcmVnaXN0ZXJlZCB3aXRoIHRoZSBnaXZlbiBtZWRpYXRvcm5hbWVcbiAqL1xuVmlldy5wcm90b3R5cGUuaGFzTWVkaWF0b3IgPSBmdW5jdGlvbihtZWRpYXRvck5hbWUpXG57XG4gICAgcmV0dXJuIHRoaXMubWVkaWF0b3JNYXBbbWVkaWF0b3JOYW1lXSAhPSBudWxsO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBWaWV3IGluc3RhbmNlXG4gKiBcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cblZpZXcucmVtb3ZlVmlldyA9IGZ1bmN0aW9uKGtleSlcbntcbiAgICBkZWxldGUgVmlldy5pbnN0YW5jZU1hcFtrZXldO1xufTtcblxuLyoqXG4gKiBAaWdub3JlXG4gKiBUaGUgVmlld3MgaW50ZXJuYWwgbWFwcGluZyBvZiBtZWRpYXRvciBuYW1lcyB0byBtZWRpYXRvciBpbnN0YW5jZXNcbiAqXG4gKiBAdHlwZSBBcnJheVxuICogQHByb3RlY3RlZFxuICovXG5WaWV3LnByb3RvdHlwZS5tZWRpYXRvck1hcCA9IG51bGw7XG5cbi8qKlxuICogQGlnbm9yZVxuICogVGhlIFZpZXdzIGludGVybmFsIG1hcHBpbmcgb2YgTm90aWZpY2F0aW9uIG5hbWVzIHRvIE9ic2VydmVyIGxpc3RzXG4gKlxuICogQHR5cGUgQXJyYXlcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuVmlldy5wcm90b3R5cGUub2JzZXJ2ZXJNYXAgPSBudWxsO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqIFRoZSBpbnRlcm5hbCBtYXAgdXNlZCB0byBzdG9yZSBtdWx0aXRvbiBWaWV3IGluc3RhbmNlc1xuICpcbiAqIEB0eXBlIEFycmF5XG4gKiBAcHJvdGVjdGVkXG4gKi9cblZpZXcuaW5zdGFuY2VNYXAgPSBbXTtcblxuLyoqXG4gKiBAaWdub3JlXG4gKiBUaGUgVmlld3MgaW50ZXJuYWwgbXVsdGl0b24ga2V5LlxuICpcbiAqIEB0eXBlIHN0cmluZ1xuICogQHByb3RlY3RlZFxuICovXG5WaWV3LnByb3RvdHlwZS5tdWx0aXRvbktleSA9IG51bGw7XG5cbi8qKlxuICogQGlnbm9yZVxuICogVGhlIGVycm9yIG1lc3NhZ2UgdXNlZCBpZiBhbiBhdHRlbXB0IGlzIG1hZGUgdG8gaW5zdGFudGlhdGUgVmlldyBkaXJlY3RseVxuICpcbiAqIEB0eXBlIHN0cmluZ1xuICogQHByb3RlY3RlZFxuICogQGNvbnN0XG4gKiBAc3RhdGljXG4gKi9cblZpZXcuTVVMVElUT05fTVNHID0gXCJWaWV3IGluc3RhbmNlIGZvciB0aGlzIE11bHRpdG9uIGtleSBhbHJlYWR5IGNvbnN0cnVjdGVkIVwiO1xuLyoqXG4gKiBAYXV0aG9yIFB1cmVNVkMgSlMgTmF0aXZlIFBvcnQgYnkgRGF2aWQgRm9sZXksIEZyw6lkw6lyaWMgU2F1bmllciwgJiBBbGFpbiBEdWNoZXNuZWF1IFxuICogQGF1dGhvciBDb3B5cmlnaHQoYykgMjAwNi0yMDEyIEZ1dHVyZXNjYWxlLCBJbmMuLCBTb21lIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFxuICogQGNsYXNzIHB1cmVtdmMuTW9kZWxcbiAqXG4gKiBBIE11bHRpdG9uIE1vZGVsIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEluIFB1cmVNVkMsIHRoZSBNb2RlbCBjbGFzcyBwcm92aWRlc1xuICogYWNjZXNzIHRvIG1vZGVsIG9iamVjdHMgKFByb3hpZXMpIGJ5IG5hbWVkIGxvb2t1cC5cbiAqXG4gKiBUaGUgTW9kZWwgYXNzdW1lcyB0aGVzZSByZXNwb25zaWJpbGl0aWVzOlxuICpcbiAqIC0gTWFpbnRhaW4gYSBjYWNoZSBvZiB7QGxpbmsgcHVyZW12Yy5Qcm94eSBQcm94eX1cbiAqICAgaW5zdGFuY2VzLlxuICogLSBQcm92aWRlIG1ldGhvZHMgZm9yIHJlZ2lzdGVyaW5nLCByZXRyaWV2aW5nLCBhbmQgcmVtb3ZpbmdcbiAqICAge0BsaW5rIHB1cmVtdmMuUHJveHkgUHJveHl9IGluc3RhbmNlcy5cbiAqXG4gKiBZb3VyIGFwcGxpY2F0aW9uIG11c3QgcmVnaXN0ZXIgXG4gKiB7QGxpbmsgcHVyZW12Yy5Qcm94eSBQcm94eX0gaW5zdGFuY2VzIHdpdGggdGhlIE1vZGVsLiBcbiAqIFR5cGljYWxseSwgeW91IHVzZSBhIFxuICoge0BsaW5rIHB1cmVtdmMuU2ltcGxlQ29tbWFuZCBTaW1wbGVDb21tYW5kfSBcbiAqIG9yXG4gKiB7QGxpbmsgcHVyZW12Yy5NYWNyb0NvbW1hbmQgTWFjcm9Db21tYW5kfSBcbiAqIHRvIGNyZWF0ZSBhbmQgcmVnaXN0ZXIgUHJveHkgaW5zdGFuY2VzIG9uY2UgdGhlIEZhY2FkZSBoYXMgaW5pdGlhbGl6ZWQgdGhlIFxuICogKkNvcmUqIGFjdG9ycy5cbiAqXG4gKiBUaGlzIE1vZGVsIGltcGxlbWVudGF0aW9uIGlzIGEgTXVsdGl0b24sIHNvIHlvdSBzaG91bGQgbm90IGNhbGwgdGhlIFxuICogY29uc3RydWN0b3IgZGlyZWN0bHksIGJ1dCBpbnN0ZWFkIGNhbGwgdGhlIFxuICoge0BsaW5rICNnZXRJbnN0YW5jZSBzdGF0aWMgTXVsdGl0b24gRmFjdG9yeSBtZXRob2R9IFxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiAgVGhlIE1vZGVscyBtdWx0aXRvbiBrZXlcbiAqIEB0aHJvd3Mge0Vycm9yfVxuICogIEFuIGVycm9yIGlzIHRocm93biBpZiB0aGlzIG11bHRpdG9ucyBrZXkgaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBNb2RlbChrZXkpXG57XG4gICAgaWYoTW9kZWwuaW5zdGFuY2VNYXBba2V5XSlcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihNb2RlbC5NVUxUSVRPTl9NU0cpO1xuICAgIH1cblxuICAgIHRoaXMubXVsdGl0b25LZXk9IGtleTtcbiAgICBNb2RlbC5pbnN0YW5jZU1hcFtrZXldPSB0aGlzO1xuICAgIHRoaXMucHJveHlNYXA9IFtdO1xuICAgIHRoaXMuaW5pdGlhbGl6ZU1vZGVsKCk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIE1vZGVsIGluc3RhbmNlLlxuICogXG4gKiBDYWxsZWQgYXV0b21hdGljYWxseSBieSB0aGUgY29uc3RydWN0b3IsIHRoaXNcbiAqIGlzIHlvdXIgb3Bwb3J0dW5pdHkgdG8gaW5pdGlhbGl6ZSB0aGUgU2luZ2xldG9uXG4gKiBpbnN0YW5jZSBpbiB5b3VyIHN1YmNsYXNzIHdpdGhvdXQgb3ZlcnJpZGluZyB0aGVcbiAqIGNvbnN0cnVjdG9yLlxuICogXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuTW9kZWwucHJvdG90eXBlLmluaXRpYWxpemVNb2RlbD0gZnVuY3Rpb24oKXt9O1xuXG5cbi8qKlxuICogTW9kZWwgTXVsdGl0b24gRmFjdG9yeSBtZXRob2QuXG4gKiBOb3RlIHRoYXQgdGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gbnVsbCBpZiBzdXBwbGllZCBhIG51bGwgXG4gKiBvciB1bmRlZmluZWQgbXVsdGl0b24ga2V5LlxuICogIFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogIFRoZSBtdWx0aXRvbiBrZXkgZm9yIHRoZSBNb2RlbCB0byByZXRyaWV2ZVxuICogQHJldHVybiB7cHVyZW12Yy5Nb2RlbH1cbiAqICB0aGUgaW5zdGFuY2UgZm9yIHRoaXMgTXVsdGl0b24ga2V5IFxuICovXG5Nb2RlbC5nZXRJbnN0YW5jZT0gZnVuY3Rpb24oa2V5KVxue1xuXHRpZiAobnVsbCA9PSBrZXkpXG5cdFx0cmV0dXJuIG51bGw7XG5cdFx0XG4gICAgaWYoTW9kZWwuaW5zdGFuY2VNYXBba2V5XSA9PSBudWxsKVxuICAgIHtcbiAgICAgICAgTW9kZWwuaW5zdGFuY2VNYXBba2V5XT0gbmV3IE1vZGVsKGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1vZGVsLmluc3RhbmNlTWFwW2tleV07XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgUHJveHkgd2l0aCB0aGUgTW9kZWxcbiAqIEBwYXJhbSB7cHVyZW12Yy5Qcm94eX1cbiAqL1xuTW9kZWwucHJvdG90eXBlLnJlZ2lzdGVyUHJveHk9IGZ1bmN0aW9uKHByb3h5KVxue1xuICAgIHByb3h5LmluaXRpYWxpemVOb3RpZmllcih0aGlzLm11bHRpdG9uS2V5KTtcbiAgICB0aGlzLnByb3h5TWFwW3Byb3h5LmdldFByb3h5TmFtZSgpXT0gcHJveHk7XG4gICAgcHJveHkub25SZWdpc3RlcigpO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZSBhIFByb3h5IGZyb20gdGhlIE1vZGVsXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm94eU5hbWVcbiAqIEByZXR1cm4ge3B1cmVtdmMuUHJveHl9XG4gKiAgVGhlIFByb3h5IGluc3RhbmNlIHByZXZpb3VzbHkgcmVnaXN0ZXJlZCB3aXRoIHRoZSBwcm92aWRlZCBwcm94eU5hbWVcbiAqL1xuTW9kZWwucHJvdG90eXBlLnJldHJpZXZlUHJveHk9IGZ1bmN0aW9uKHByb3h5TmFtZSlcbntcbiAgICByZXR1cm4gdGhpcy5wcm94eU1hcFtwcm94eU5hbWVdO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIFByb3h5IGlzIHJlZ2lzdGVyZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm94eU5hbWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgd2hldGhlciBhIFByb3h5IGlzIGN1cnJlbnRseSByZWdpc3RlcmVkIHdpdGggdGhlIGdpdmVuIHByb3h5TmFtZS5cbiAqL1xuTW9kZWwucHJvdG90eXBlLmhhc1Byb3h5PSBmdW5jdGlvbihwcm94eU5hbWUpXG57XG4gICAgcmV0dXJuIHRoaXMucHJveHlNYXBbcHJveHlOYW1lXSAhPSBudWxsO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBQcm94eSBmcm9tIHRoZSBNb2RlbC5cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHByb3h5TmFtZVxuICogIFRoZSBuYW1lIG9mIHRoZSBQcm94eSBpbnN0YW5jZSB0byByZW1vdmVcbiAqIEByZXR1cm4ge3B1cmVtdmMuUHJveHl9XG4gKiAgVGhlIFByb3h5IHRoYXQgd2FzIHJlbW92ZWQgZnJvbSB0aGUgTW9kZWxcbiAqL1xuTW9kZWwucHJvdG90eXBlLnJlbW92ZVByb3h5PSBmdW5jdGlvbihwcm94eU5hbWUpXG57XG4gICAgdmFyIHByb3h5PSB0aGlzLnByb3h5TWFwW3Byb3h5TmFtZV07XG4gICAgaWYocHJveHkpXG4gICAge1xuICAgICAgICB0aGlzLnByb3h5TWFwW3Byb3h5TmFtZV09IG51bGw7XG4gICAgICAgIHByb3h5Lm9uUmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3h5O1xufTtcblxuLyoqXG4gKiBAc3RhdGljXG4gKiBSZW1vdmUgYSBNb2RlbCBpbnN0YW5jZS5cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuTW9kZWwucmVtb3ZlTW9kZWw9IGZ1bmN0aW9uKGtleSlcbntcbiAgICBkZWxldGUgTW9kZWwuaW5zdGFuY2VNYXBba2V5XTtcbn07XG5cbi8qKlxuICogQGlnbm9yZVxuICogVGhlIG1hcCB1c2VkIGJ5IHRoZSBNb2RlbCB0byBzdG9yZSBQcm94eSBpbnN0YW5jZXMuXG4gKlxuICogQHByb3RlY3RlZFxuICogQHR5cGUgQXJyYXlcbiAqL1xuTW9kZWwucHJvdG90eXBlLnByb3h5TWFwPSBudWxsO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqIFRoZSBtYXAgdXNlZCBieSB0aGUgTW9kZWwgdG8gc3RvcmUgbXVsdGl0b24gaW5zdGFuY2VzXG4gKlxuICogQHByb3RlY3RlZFxuICogQHN0YXRpY1xuICogQHR5cGUgQXJyYXlcbiAqL1xuTW9kZWwuaW5zdGFuY2VNYXA9IFtdO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqIFRoZSBNb2RlbHMgbXVsdGl0b24ga2V5LlxuICpcbiAqIEBwcm90ZWN0ZWRcbiAqIEB0eXBlIHN0cmluZ1xuICovXG5Nb2RlbC5wcm90b3R5cGUubXVsdGl0b25LZXk7XG5cbi8qKlxuICogQGlnbm9yZVxuICogTWVzc2FnZXMgQ29uc3RhbnRzXG4gKiBcbiAqIEBzdGF0aWNcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbk1vZGVsLk1VTFRJVE9OX01TRz0gXCJNb2RlbCBpbnN0YW5jZSBmb3IgdGhpcyBNdWx0aXRvbiBrZXkgYWxyZWFkeSBjb25zdHJ1Y3RlZCFcIjtcbi8qKlxuICogQGF1dGhvciBQdXJlTVZDIEpTIE5hdGl2ZSBQb3J0IGJ5IERhdmlkIEZvbGV5LCBGcsOpZMOpcmljIFNhdW5pZXIsICYgQWxhaW4gRHVjaGVzbmVhdSBcbiAqIEBhdXRob3IgQ29weXJpZ2h0KGMpIDIwMDYtMjAxMiBGdXR1cmVzY2FsZSwgSW5jLiwgU29tZSByaWdodHMgcmVzZXJ2ZWQuXG4gKiBcbiAqIEBjbGFzcyBwdXJlbXZjLkNvbnRyb2xsZXJcbiAqIFxuICogSW4gUHVyZU1WQywgdGhlIENvbnRyb2xsZXIgY2xhc3MgZm9sbG93cyB0aGUgJ0NvbW1hbmQgYW5kIENvbnRyb2xsZXInIFxuICogc3RyYXRlZ3ksIGFuZCBhc3N1bWVzIHRoZXNlIHJlc3BvbnNpYmlsaXRpZXM6XG4gKiBcbiAqIC0gUmVtZW1iZXJpbmcgd2hpY2hcbiAqIHtAbGluayBwdXJlbXZjLlNpbXBsZUNvbW1hbmQgU2ltcGxlQ29tbWFuZH1zXG4gKiBvciBcbiAqIHtAbGluayBwdXJlbXZjLk1hY3JvQ29tbWFuZCBNYWNyb0NvbW1hbmR9c1xuICogYXJlIGludGVuZGVkIHRvIGhhbmRsZSB3aGljaCBcbiAqIHtAbGluayBwdXJlbXZjLk5vdGlmaWNhdGlvbiBOb3RpZmljYXRpb259c1xuICogLSBSZWdpc3RlcmluZyBpdHNlbGYgYXMgYW4gXG4gKiB7QGxpbmsgcHVyZW12Yy5PYnNlcnZlciBPYnNlcnZlcn0gd2l0aFxuICogdGhlIHtAbGluayBwdXJlbXZjLlZpZXcgVmlld30gZm9yIGVhY2ggXG4gKiB7QGxpbmsgcHVyZW12Yy5Ob3RpZmljYXRpb24gTm90aWZpY2F0aW9ufVxuICogdGhhdCBpdCBoYXMgYW4gXG4gKiB7QGxpbmsgcHVyZW12Yy5TaW1wbGVDb21tYW5kIFNpbXBsZUNvbW1hbmR9IFxuICogb3Ige0BsaW5rIHB1cmVtdmMuTWFjcm9Db21tYW5kIE1hY3JvQ29tbWFuZH0gXG4gKiBtYXBwaW5nIGZvci5cbiAqIC0gQ3JlYXRpbmcgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHByb3BlciBcbiAqIHtAbGluayBwdXJlbXZjLlNpbXBsZUNvbW1hbmQgU2ltcGxlQ29tbWFuZH1zXG4gKiBvciBcbiAqIHtAbGluayBwdXJlbXZjLk1hY3JvQ29tbWFuZCBNYWNyb0NvbW1hbmR9c1xuICogdG8gaGFuZGxlIGEgZ2l2ZW4gXG4gKiB7QGxpbmsgcHVyZW12Yy5Ob3RpZmljYXRpb24gTm90aWZpY2F0aW9ufSBcbiAqIHdoZW4gbm90aWZpZWQgYnkgdGhlXG4gKiB7QGxpbmsgcHVyZW12Yy5WaWV3IFZpZXd9LlxuICogLSBDYWxsaW5nIHRoZSBjb21tYW5kJ3MgZXhlY3V0ZSBtZXRob2QsIHBhc3NpbmcgaW4gdGhlIFxuICoge0BsaW5rIHB1cmVtdmMuTm90aWZpY2F0aW9uIE5vdGlmaWNhdGlvbn0uXG4gKlxuICogWW91ciBhcHBsaWNhdGlvbiBtdXN0IHJlZ2lzdGVyIFxuICoge0BsaW5rIHB1cmVtdmMuU2ltcGxlQ29tbWFuZCBTaW1wbGVDb21tYW5kfXNcbiAqIG9yIHtAbGluayBwdXJlbXZjLk1hY3JvQ29tbWFuZCBNYWNyb0NvbW1hbmR9cyBcbiAqIHdpdGggdGhlIENvbnRyb2xsZXIuXG4gKlxuICogVGhlIHNpbXBsZXN0IHdheSBpcyB0byBzdWJjbGFzcyBcbiAqIHtAbGluayBwdXJlbXZjLkZhY2FkZSBGYWNhZGV9LFxuICogYW5kIHVzZSBpdHMgXG4gKiB7QGxpbmsgcHVyZW12Yy5GYWNhZGUjaW5pdGlhbGl6ZUNvbnRyb2xsZXIgaW5pdGlhbGl6ZUNvbnRyb2xsZXJ9IFxuICogbWV0aG9kIHRvIGFkZCB5b3VyIHJlZ2lzdHJhdGlvbnMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBUaGlzIENvbnRyb2xsZXIgaW1wbGVtZW50YXRpb24gaXMgYSBNdWx0aXRvbiwgc28geW91IHNob3VsZCBub3QgY2FsbCB0aGUgXG4gKiBjb25zdHJ1Y3RvciBkaXJlY3RseSwgYnV0IGluc3RlYWQgY2FsbCB0aGUgc3RhdGljICNnZXRJbnN0YW5jZSBmYWN0b3J5IG1ldGhvZCwgXG4gKiBwYXNzaW5nIHRoZSB1bmlxdWUga2V5IGZvciB0aGlzIGluc3RhbmNlIHRvIGl0LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHRocm93cyB7RXJyb3J9XG4gKiAgSWYgaW5zdGFuY2UgZm9yIHRoaXMgTXVsdGl0b24ga2V5IGhhcyBhbHJlYWR5IGJlZW4gY29uc3RydWN0ZWRcbiAqL1xuZnVuY3Rpb24gQ29udHJvbGxlcihrZXkpXG57XG4gICAgaWYoQ29udHJvbGxlci5pbnN0YW5jZU1hcFtrZXldICE9IG51bGwpXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoQ29udHJvbGxlci5NVUxUSVRPTl9NU0cpO1xuICAgIH1cblxuICAgIHRoaXMubXVsdGl0b25LZXk9IGtleTtcbiAgICBDb250cm9sbGVyLmluc3RhbmNlTWFwW3RoaXMubXVsdGl0b25LZXldPSB0aGlzO1xuICAgIHRoaXMuY29tbWFuZE1hcD0gbmV3IEFycmF5KCk7XG4gICAgdGhpcy5pbml0aWFsaXplQ29udHJvbGxlcigpO1xufVxuXG4vKipcbiAqIEBwcm90ZWN0ZWRcbiAqIFxuICogSW5pdGlhbGl6ZSB0aGUgbXVsdGl0b24gQ29udHJvbGxlciBpbnN0YW5jZS5cbiAqXG4gKiBDYWxsZWQgYXV0b21hdGljYWxseSBieSB0aGUgY29uc3RydWN0b3IuXG4gKlxuICogTm90ZSB0aGF0IGlmIHlvdSBhcmUgdXNpbmcgYSBzdWJjbGFzcyBvZiBWaWV3XG4gKiBpbiB5b3VyIGFwcGxpY2F0aW9uLCB5b3Ugc2hvdWxkICphbHNvKiBzdWJjbGFzcyBDb250cm9sbGVyXG4gKiBhbmQgb3ZlcnJpZGUgdGhlIGluaXRpYWxpemVDb250cm9sbGVyIG1ldGhvZCBpbiB0aGVcbiAqIGZvbGxvd2luZyB3YXkuXG4gKiBcbiAqICAgICBNeUNvbnRyb2xsZXIucHJvdG90eXBlLmluaXRpYWxpemVDb250cm9sbGVyPSBmdW5jdGlvbiAoKVxuICogICAgIHtcbiAqICAgICAgICAgdGhpcy52aWV3PSBNeVZpZXcuZ2V0SW5zdGFuY2UodGhpcy5tdWx0aXRvbktleSk7XG4gKiAgICAgfTtcbiAqIFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuQ29udHJvbGxlci5wcm90b3R5cGUuaW5pdGlhbGl6ZUNvbnRyb2xsZXI9IGZ1bmN0aW9uKClcbntcbiAgICB0aGlzLnZpZXc9IFZpZXcuZ2V0SW5zdGFuY2UodGhpcy5tdWx0aXRvbktleSk7XG59O1xuXG4vKipcbiAqIFRoZSBDb250cm9sbGVycyBtdWx0aXRvbiBmYWN0b3J5IG1ldGhvZC4gXG4gKiBOb3RlIHRoYXQgdGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gbnVsbCBpZiBzdXBwbGllZCBhIG51bGwgXG4gKiBvciB1bmRlZmluZWQgbXVsdGl0b24ga2V5LiBcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiAgQSBDb250cm9sbGVyJ3MgbXVsdGl0b24ga2V5XG4gKiBAcmV0dXJuIHtwdXJlbXZjLkNvbnRyb2xsZXJ9XG4gKiAgdGhlIE11bHRpdG9uIGluc3RhbmNlIG9mIENvbnRyb2xsZXJcbiAqL1xuQ29udHJvbGxlci5nZXRJbnN0YW5jZT0gZnVuY3Rpb24oa2V5KVxue1xuXHRpZiAobnVsbCA9PSBrZXkpXG5cdFx0cmV0dXJuIG51bGw7XG5cdFx0XG4gICAgaWYobnVsbCA9PSB0aGlzLmluc3RhbmNlTWFwW2tleV0pXG4gICAge1xuICAgICAgICB0aGlzLmluc3RhbmNlTWFwW2tleV09IG5ldyB0aGlzKGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VNYXBba2V5XTtcbn07XG5cbi8qKlxuICogSWYgYSBTaW1wbGVDb21tYW5kIG9yIE1hY3JvQ29tbWFuZCBoYXMgcHJldmlvdXNseSBiZWVuIHJlZ2lzdGVyZWQgdG8gaGFuZGxlXG4gKiB0aGUgZ2l2ZW4gTm90aWZpY2F0aW9uIHRoZW4gaXQgaXMgZXhlY3V0ZWQuXG4gKlxuICogQHBhcmFtIHtwdXJlbXZjLk5vdGlmaWNhdGlvbn0gbm90ZVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuQ29udHJvbGxlci5wcm90b3R5cGUuZXhlY3V0ZUNvbW1hbmQ9IGZ1bmN0aW9uKG5vdGUpXG57XG4gICAgdmFyIGNvbW1hbmRDbGFzc1JlZj0gdGhpcy5jb21tYW5kTWFwW25vdGUuZ2V0TmFtZSgpXTtcbiAgICBpZihjb21tYW5kQ2xhc3NSZWYgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIGNvbW1hbmRJbnN0YW5jZT0gbmV3IGNvbW1hbmRDbGFzc1JlZigpO1xuICAgIGNvbW1hbmRJbnN0YW5jZS5pbml0aWFsaXplTm90aWZpZXIodGhpcy5tdWx0aXRvbktleSk7XG4gICAgY29tbWFuZEluc3RhbmNlLmV4ZWN1dGUobm90ZSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgcGFydGljdWxhciBTaW1wbGVDb21tYW5kIG9yIE1hY3JvQ29tbWFuZCBjbGFzcyBhcyB0aGUgaGFuZGxlciBmb3IgXG4gKiBhIHBhcnRpY3VsYXIgTm90aWZpY2F0aW9uLlxuICpcbiAqIElmIGFuIGNvbW1hbmQgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQgdG8gaGFuZGxlIE5vdGlmaWNhdGlvbnMgd2l0aCB0aGlzIG5hbWUsIFxuICogaXQgaXMgbm8gbG9uZ2VyIHVzZWQsIHRoZSBuZXcgY29tbWFuZCBpcyB1c2VkIGluc3RlYWQuXG4gKlxuICogVGhlIE9ic2VydmVyIGZvciB0aGUgbmV3IGNvbW1hbmQgaXMgb25seSBjcmVhdGVkIGlmIHRoaXMgdGhlIGlyc3QgdGltZSBhXG4gKiBjb21tYW5kIGhhcyBiZWVuIHJlZ2lzZXJlZCBmb3IgdGhpcyBOb3RpZmljYXRpb24gbmFtZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbm90aWZpY2F0aW9uTmFtZVxuICogIHRoZSBuYW1lIG9mIHRoZSBOb3RpZmljYXRpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbW1hbmRDbGFzc1JlZlxuICogIGEgY29tbWFuZCBjb25zdHJ1Y3RvclxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuQ29udHJvbGxlci5wcm90b3R5cGUucmVnaXN0ZXJDb21tYW5kPSBmdW5jdGlvbihub3RpZmljYXRpb25OYW1lLCBjb21tYW5kQ2xhc3NSZWYpXG57XG4gICAgaWYodGhpcy5jb21tYW5kTWFwW25vdGlmaWNhdGlvbk5hbWVdID09IG51bGwpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXcucmVnaXN0ZXJPYnNlcnZlcihub3RpZmljYXRpb25OYW1lLCBuZXcgT2JzZXJ2ZXIodGhpcy5leGVjdXRlQ29tbWFuZCwgdGhpcykpO1xuICAgIH1cblxuICAgIHRoaXMuY29tbWFuZE1hcFtub3RpZmljYXRpb25OYW1lXT0gY29tbWFuZENsYXNzUmVmO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIGNvbW1hbmQgaXMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBOb3RpZmljYXRpb25cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbm90aWZpY2F0aW9uTmFtZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqICB3aGV0aGVyIGEgQ29tbWFuZCBpcyBjdXJyZW50bHkgcmVnaXN0ZXJlZCBmb3IgdGhlIGdpdmVuIG5vdGlmaWNhdGlvbk5hbWUuXG4gKi9cbkNvbnRyb2xsZXIucHJvdG90eXBlLmhhc0NvbW1hbmQ9IGZ1bmN0aW9uKG5vdGlmaWNhdGlvbk5hbWUpXG57XG4gICAgcmV0dXJuIHRoaXMuY29tbWFuZE1hcFtub3RpZmljYXRpb25OYW1lXSAhPSBudWxsO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBwcmV2aW91c2x5IHJlZ2lzdGVyZWQgY29tbWFuZCB0b1xuICoge0BsaW5rIHB1cmVtdmMuTm90aWZpY2F0aW9uIE5vdGlmaWNhdGlvbn1cbiAqIG1hcHBpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5vdGlmaWNhdGlvbk5hbWVcbiAqICB0aGUgbmFtZSBvZiB0aGUgTm90aWZpY2F0aW9uIHRvIHJlbW92ZSB0aGUgY29tbWFuZCBtYXBwaW5nIGZvclxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuQ29udHJvbGxlci5wcm90b3R5cGUucmVtb3ZlQ29tbWFuZD0gZnVuY3Rpb24obm90aWZpY2F0aW9uTmFtZSlcbntcbiAgICBpZih0aGlzLmhhc0NvbW1hbmQobm90aWZpY2F0aW9uTmFtZSkpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXcucmVtb3ZlT2JzZXJ2ZXIobm90aWZpY2F0aW9uTmFtZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuY29tbWFuZE1hcFtub3RpZmljYXRpb25OYW1lXT0gbnVsbDtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBzdGF0aWNcbiAqIFJlbW92ZSBhIENvbnRyb2xsZXIgaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBcbiAqICBtdWx0aXRvbktleSBvZiBDb250cm9sbGVyIGluc3RhbmNlIHRvIHJlbW92ZVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuQ29udHJvbGxlci5yZW1vdmVDb250cm9sbGVyPSBmdW5jdGlvbihrZXkpXG57XG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VNYXBba2V5XTtcbn07XG5cbi8qKlxuICogTG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBDb250cm9sbGVyJ3MgVmlld1xuICogXG4gKiBAcHJvdGVjdGVkXG4gKiBAdHlwZSB7cHVyZW12Yy5WaWV3fVxuICovXG5Db250cm9sbGVyLnByb3RvdHlwZS52aWV3PSBudWxsO1xuXG4vKipcbiAqIE5vdGUgbmFtZSB0byBjb21tYW5kIGNvbnN0cnVjdG9yIG1hcHBpbmdzXG4gKiBcbiAqIEBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbkNvbnRyb2xsZXIucHJvdG90eXBlLmNvbW1hbmRNYXA9IG51bGw7XG5cbi8qKlxuICogVGhlIENvbnRyb2xsZXIncyBtdWx0aXRvbiBrZXlcbiAqIFxuICogQHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuQ29udHJvbGxlci5wcm90b3R5cGUubXVsdGl0b25LZXk9IG51bGw7XG5cbi8qKlxuICogTXVsdGl0b24ga2V5IHRvIENvbnRyb2xsZXIgaW5zdGFuY2UgbWFwcGluZ3NcbiAqIFxuICogQHN0YXRpY1xuICogQHByb3RlY3RlZFxuICogQHR5cGUge09iamVjdH1cbiAqL1xuQ29udHJvbGxlci5pbnN0YW5jZU1hcD0gW107XG5cbi8qKlxuICogQGlnbm9yZVxuICogXG4gKiBNZXNzYWdlcyBjb25zdGFudHNcbiAqIEBzdGF0aWNcbiAqIEBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbkNvbnRyb2xsZXIuTVVMVElUT05fTVNHPSBcImNvbnRyb2xsZXIga2V5IGZvciB0aGlzIE11bHRpdG9uIGtleSBhbHJlYWR5IGNvbnN0cnVjdGVkXCJcbi8qXG4gKiBAYXV0aG9yIFB1cmVNVkMgSlMgTmF0aXZlIFBvcnQgYnkgRGF2aWQgRm9sZXksIEZyw6lkw6lyaWMgU2F1bmllciwgJiBBbGFpbiBEdWNoZXNuZWF1IFxuICogQGF1dGhvciBDb3B5cmlnaHQoYykgMjAwNi0yMDEyIEZ1dHVyZXNjYWxlLCBJbmMuLCBTb21lIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFxuICogQGhpZGVcbiAqIEEgYW4gaW50ZXJuYWwgaGVscGVyIGNsYXNzIHVzZWQgdG8gYXNzaXN0IGNsYXNzbGV0IGltcGxlbWVudGF0aW9uLiBUaGlzXG4gKiBjbGFzcyBpcyBub3QgYWNjZXNzaWJsZSBieSBjbGllbnQgY29kZS5cbiAqL1xudmFyIE9vcEhlbHA9XG57XG4gICAgLypcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgc2NvcGUuIFdlIHVzZSB0aGlzIHJhdGhlciB0aGFuIHdpbmRvd1xuICAgICAqIGluIG9yZGVyIHRvIHN1cHBvcnQgYm90aCBicm93c2VyIGJhc2VkIGFuZCBub24gYnJvd3NlciBiYWVkIFxuICAgICAqIEphdmFTY3JpcHQgaW50ZXJwcmV0ZXJzLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cdGdsb2JhbDogKGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSgpXG4gICAgXG4gICAgLypcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEV4dGVuZCBvbmUgRnVuY3Rpb24ncyBwcm90b3R5cGUgYnkgYW5vdGhlciwgZW11bGF0aW5nIGNsYXNzaWNcbiAgICAgKiBpbmhlcml0YW5jZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjaGlsZFxuICAgICAqICBUaGUgRnVuY3Rpb24gdG8gZXh0ZW5kIChzdWJjbGFzcylcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXJlbnRcbiAgICAgKiAgVGhlIEZ1bmN0aW9uIHRvIGV4dGVuZCBmcm9tIChzdXBlcmNsYXNzKVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICAgICAqIFxuICAgICAqICBBIHJlZmVyZW5jZSB0byB0aGUgZXh0ZW5kZWQgRnVuY3Rpb24gKHN1YmNsYXNzKVxuICAgICAqL1xuLCAgIGV4dGVuZDogZnVuY3Rpb24gKGNoaWxkLCBwYXJlbnQpXG4gICAge1xuICAgICAgICBpZiAoJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNoaWxkKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignI2V4dGVuZC0gY2hpbGQgc2hvdWxkIGJlIEZ1bmN0aW9uJyk7ICAgICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZiAoJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIHBhcmVudClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJyNleHRlbmQtIHBhcmVudCBzaG91bGQgYmUgRnVuY3Rpb24nKTtcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAocGFyZW50ID09PSBjaGlsZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICB2YXIgVHJhbnNpdGl2ZT0gbmV3IEZ1bmN0aW9uO1xuICAgICAgICBUcmFuc2l0aXZlLnByb3RvdHlwZT0gcGFyZW50LnByb3RvdHlwZTtcbiAgICAgICAgY2hpbGQucHJvdG90eXBlPSBuZXcgVHJhbnNpdGl2ZTtcbiAgICAgICAgcmV0dXJuIGNoaWxkLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj0gY2hpbGQ7XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBEZWNvYXJhdGUgb25lIG9iamVjdCB3aXRoIHRoZSBwcm9wZXJ0aWVzIG9mIGFub3RoZXIuIFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAgICAgKiAgVGhlIG9iamVjdCB0byBkZWNvcmF0ZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdHJhaXRzXG4gICAgICogIFRoZSBvYmplY3QgcHJvdmlkaW5nIHRoZSBwcm9wZXJpdGVzIHRoYXQgdGhlIGZpcnN0IG9iamVjdFxuICAgICAqICB3aWxsIGJlIGRlY29yYXRlZCB3aXRoLiBOb3RlIHRoYXQgb25seSBwcm9wZXJ0aWVzIGRlZmluZWQgb24gXG4gICAgICogIHRoaXMgb2JqZWN0IHdpbGwgYmUgY29waWVkLSBpLmUuIGluaGVyaXRlZCBwcm9wZXJ0aWVzIHdpbGxcbiAgICAgKiAgYmUgaWdub3JlZC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICogIFRIZSBkZWNvcmF0ZWQgb2JqZWN0IChmaXJzdCBhcmd1bWVudClcbiAgICAgKi9cbiwgICBkZWNvcmF0ZTogZnVuY3Rpb24gKG9iamVjdCwgdHJhaXRzKVxuICAgIHsgICBcbiAgICAgICAgZm9yICh2YXIgYWNjZXNzb3IgaW4gdHJhaXRzKVxuICAgICAgICB7XG4gICAgICAgICAgICBvYmplY3RbYWNjZXNzb3JdPSB0cmFpdHNbYWNjZXNzb3JdO1xuICAgICAgICB9ICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9XG59O1xuXG5cbi8qKlxuICogQG1lbWJlciBwdXJlbXZjXG4gKiBcbiAqIERlY2xhcmUgYSBuYW1lc3BhY2UgYW5kIG9wdGlvbmFsbHkgbWFrZSBhbiBPYmplY3QgdGhlIHJlZmVyZW50XG4gKiBvZiB0aGF0IG5hbWVzcGFjZS5cbiAqIFxuICogICAgIGNvbnNvbGUuYXNzZXJ0KG51bGwgPT0gd2luZG93LnRsZCwgJ05vIHRsZCBuYW1lc3BhY2UnKTtcbiAqICAgICAvLyBkZWNsYXJlIHRoZSB0bGQgbmFtZXNwYWNlXG4gKiAgICAgcHVyZW12Yy5kZWNsYXJlKCd0bGQnKTtcbiAqICAgICBjb25zb2xlLmFzc2VydCgnb2JqZWN0JyA9PT0gdHlwZW9mIHRsZCwgJ1RoZSB0bGQgbmFtZXNwYWNlIHdhcyBkZWNsYXJlZCcpO1xuICogXG4gKiAgICAgLy8gdGhlIG1ldGhvZCByZXR1cm5zIGEgcmVmZXJlbmNlIHRvIGxhc3QgbmFtZXNwYWNlIG5vZGUgaW4gYSBjcmVhdGVkIGhpZXJhcmNoeVxuICogICAgIHZhciByZWZlcmVuY2U9IHB1cmVtdmMuZGVjbGFyZSgndGxkLmRvbWFpbi5hcHAnKTtcbiAqICAgICBjb25zb2xlLmFzc2VydChyZWZlcmVuY2UgPT09IHRsZC5kb21haW4uYXBwKVxuICogICAgXG4gKiAgICAgLy8gb2YgY291cnNlIHlvdSBjYW4gYWxzbyBkZWNsYXJlIHlvdXIgb3duIG9iamVjdHMgYXMgd2VsbFxuICogICAgIHZhciBBcHBDb25zdGFudHM9XG4gKiAgICAgICAgIHtcbiAqIFx0ICAgICAgICAgICBBUFBfTkFNRTogJ3RsZC5kb21haW4uYXBwLkFwcCdcbiAqICAgICAgICAgfTtcbiAqIFxuICogICAgIHB1cmVtdmMuZGVjbGFyZSgndGxkLmRvbWFpbi5hcHAuQXBwQ29uc3RhbnRzJywgQXBwQ29uc3RhbnRzKTtcbiAqICAgICBjb25zb2xlLmFzc2VydChBcHBDb25zdGFudHMgPT09IHRsZC5kb21haW4uYXBwLkFwcENvbnN0YW50c1xuICogXHQgICAsICdBcHBDb25zdGFudHMgd2FzIGV4cG9ydGVkIHRvIHRoZSBuYW1lc3BhY2UnKTtcbiAqIFxuICogTm90ZSB0aGF0IHlvdSBjYW4gYWxzbyAjZGVjbGFyZSB3aXRoaW4gYSBjbG9zdXJlLiBUaGF0IHdheSB5b3VcbiAqIGNhbiBzZWxlY3RpdmVseSBleHBvcnQgT2JqZWN0cyB0byB5b3VyIG93biBuYW1lc3BhY2VzIHdpdGhvdXRcbiAqIGxlYWtpbmcgdmFyaWFibGVzIGludG8gdGhlIGdsb2JhbCBzY29wZS5cbiAqICAgIFxuICogICAgIChmdW5jdGlvbigpe1xuICogICAgICAgICAvLyB0aGlzIHZhciBpcyBub3QgYWNjZXNzaWJsZSBvdXRzaWRlIG9mIHRoaXNcbiAqICAgICAgICAgLy8gY2xvc3VyZXMgY2FsbCBzY29wZVxuICogICAgICAgICB2YXIgaGlkZGVuVmFsdWU9ICdkZWZhdWx0VmFsdWUnO1xuICogXG4gKiAgICAgICAgIC8vIGV4cG9ydCBhbiBvYmplY3QgdGhhdCByZWZlcmVuY2VzIHRoZSBoaWRkZW5cbiAqICAgICAgICAgLy8gdmFyaWFibGUgYW5kIHdoaWNoIGNhbiBtdXRhdGUgaXRcbiAqICAgICAgICAgcHVyZW12Yy5kZWNsYXJlXG4gKiAgICAgICAgIChcbiAqICAgICAgICAgICAgICAndGxkLmRvbWFpbi5hcHAuYmFja2Rvb3InXG4gKiBcbiAqICAgICAgICAgLCAgICB7XG4gKiAgICAgICAgICAgICAgICAgIHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpXG4gKiAgICAgICAgICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICAgICAgICAgIC8vIGFzc2lnbnMgdG8gdGhlIGhpZGRlbiB2YXJcbiAqICAgICAgICAgICAgICAgICAgICAgIGhpZGRlblZhbHVlPSB2YWx1ZTtcbiAqICAgICAgICAgICAgICAgICAgfVxuICogXG4gKiAgICAgICAgICwgICAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoKVxuICogICAgICAgICAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgICAgICAgICAvLyByZWFkcyBmcm9tIHRoZSBoaWRkZW4gdmFyXG4gKiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGlkZGVuVmFsdWU7XG4gKiAgICAgICAgICAgICAgICAgIH1cbiAqICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICk7XG4gKiAgICAgfSkoKTtcbiAqICAgICAvLyBpbmRpcmVjdGx5IHJldHJpZXZlIHRoZSBoaWRkZW4gdmFyaWFibGVzIHZhbHVlXG4gKiAgICAgY29uc29sZS5hc3NlcnQoJ2RlZmF1bHRWYWx1ZScgPT09IHRsZC5kb21haW4uYXBwLmJhY2tkb29yLmdldFZhbHVlKCkpO1xuICogICAgIC8vIGluZGlyZWN0bHkgc2V0IHRoZSBoaWRkZW4gdmFyaWFibGVzIHZhbHVlXG4gKiAgICAgdGxkLmRvbWFpbi5hcHAuYmFja2Rvb3Iuc2V0VmFsdWUoJ25ld1ZhbHVlJyk7XG4gKiAgICAgLy8gdGhlIGhpZGRlbiB2YXIgd2FzIG11dGF0ZWRcbiAqICAgICBjb25zb2xlLmFzc2VydCgnbmV3VmFsdWUnID09PSB0bGQuZG9tYWluLmFwcC5iYWNrZG9vci5nZXRWYWx1ZSgpKTtcbiAqIFxuICogT24gb2NjYXNpb24sIHByaW1hcmlseSBkdXJpbmcgdGVzdGluZywgeW91IG1heSB3YW50IHRvIHVzZSBkZWNsYXJlLCBcbiAqIGJ1dCBub3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBiZSB0aGUgbmFtZXNwYWNlIHJvb3QuIEluIHRoZXNlIGNhc2VzIHlvdVxuICogY2FuIHN1cHBseSB0aGUgb3B0aW9uYWwgdGhpcmQgc2NvcGUgYXJndW1lbnQuXG4gKiBcbiAqICAgICB2YXIgbG9jYWxTY29wZT0ge31cbiAqICAgICAsICAgb2JqZWN0PSB7fVxuICogXG4gKiAgICAgcHVyZW12Yy5kZWNsYXJlKCdtb2NrLm9iamVjdCcsIG9iamVjdCwgbG9jYWxTY29wZSk7XG4gKiBcbiAqICAgICBjb25zb2xlLmFzc2VydChudWxsID09IHdpbmRvdy5tb2NrLCAnbW9jayBuYW1lc3BhY2UgaXMgbm90IGluIGdsb2JhbCBzY29wZScpO1xuICogICAgIGNvbnNvbGUuYXNzZXJ0KG9iamVjdCA9PT0gbG9jYWxTY29wZS5tb2NrLm9iamVjdCwgJ21vY2sub2JqZWN0IGlzIGF2YWlsYWJsZSBpbiBsb2NhbFNjb3BlJyk7ICAgIFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiAgQSBxdWFsaWZpZWQgb2JqZWN0IG5hbWUsIGUuZy4gJ2NvbS5leGFtcGxlLkNsYXNzJ1xuICogXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF1cbiAqICBBbiBvYmplY3QgdG8gbWFrZSB0aGUgcmVmZXJlbnQgb2YgdGhlIG5hbWVzcGFjZS4gXG4gKiBcbiAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdXG4gKiAgVGhlIG5hbWVzcGFjZSdzIHJvb3Qgbm9kZS4gSWYgbm90IHN1cHBsaWVkLCB0aGUgZ2xvYmFsXG4gKiAgc2NvcGUgd2lsbCBiZSBuYW1lc3BhY2VzIHJvb3Qgbm9kZS5cbiAqIFxuICogQHJldHVybiB7T2JqZWN0fVxuICogXG4gKiAgQSByZWZlcmVuY2UgdG8gdGhlIGxhc3Qgbm9kZSBvZiB0aGUgT2JqZWN0IGhpZXJhcmNoeSBjcmVhdGVkLlxuICovXG5mdW5jdGlvbiBkZWNsYXJlIChxdWFsaWZpZWROYW1lLCBvYmplY3QsIHNjb3BlKVxue1xuICAgIHZhciBub2Rlcz0gcXVhbGlmaWVkTmFtZS5zcGxpdCgnLicpXG4gICAgLCAgIG5vZGU9IHNjb3BlIHx8IE9vcEhlbHAuZ2xvYmFsXG4gICAgLCAgIGxhc3ROb2RlXG4gICAgLCAgIG5ld05vZGVcbiAgICAsICAgbm9kZU5hbWU7XG4gICAgICAgICAgICAgICAgXG4gICAgZm9yICh2YXIgaT0gMCwgbj0gbm9kZXMubGVuZ3RoOyBpIDwgbjsgaSsrKVxuICAgIHtcbiAgICAgICAgbGFzdE5vZGU9IG5vZGU7XG4gICAgICAgIG5vZGVOYW1lPSBub2Rlc1tpXTtcbiAgICAgICAgXG4gICAgICAgIG5vZGU9IChudWxsID09IG5vZGVbbm9kZU5hbWVdID8gbm9kZVtub2RlTmFtZV0gPSB7fSA6IG5vZGVbbm9kZU5hbWVdKTtcbiAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgIGlmIChudWxsID09IG9iamVjdClcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICByZXR1cm4gbGFzdE5vZGVbbm9kZU5hbWVdPSBvYmplY3Q7XG59O1xuXG5cblxuXG4vKipcbiAqIEBtZW1iZXIgcHVyZW12Y1xuICogXG4gKiBEZWZpbmUgYSBuZXcgY2xhc3NsZXQuIEN1cnJlbnQgZWRpdGlvbnMgb2YgSmF2YVNjcmlwdCBkbyBub3QgaGF2ZSBjbGFzc2VzLFxuICogYnV0IHRoZXkgY2FuIGJlIGVtdWxhdGVkLCBhbmQgdGhpcyBtZXRob2QgZG9lcyB0aGlzIGZvciB5b3UsIHNhdmluZyB5b3VcbiAqIGZyb20gaGF2aW5nIHRvIHdvcmsgd2l0aCBGdW5jdGlvbiBwcm90b3R5cGUgZGlyZWN0bHkuIFRoZSBtZXRob2QgZG9lc1xuICogbm90IGV4dGVuZCBhbnkgTmF0aXZlIG9iamVjdHMgYW5kIGlzIGVudGlyZWx5IG9wdCBpbi4gSXRzIHBhcnRpY3VsYXJseVxuICogdXNlZnVsbCBpZiB5b3Ugd2FudCB0byBtYWtlIHlvdXIgUHVyZU12YyBhcHBsaWNhdGlvbnMgbW9yZSBwb3J0YWJsZSwgYnlcbiAqIGRlY291cGxpbmcgdGhlbSBmcm9tIGEgc3BlY2lmaWMgT09QIGFic3RyYWN0aW9uIGxpYnJhcnkuXG4gKiBcbiAqIFxuICogICAgIHB1cmVtdmMuZGVmaW5lXG4gKiAgICAgKFxuICogICAgICAgICAvLyB0aGUgZmlyc3Qgb2JqZWN0IHN1cHBsaWVkIGlzIGEgY2xhc3MgZGVzY3JpcHRvci4gTm9uZSBvZiB0aGVzZVxuICogICAgICAgICAvLyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byB5b3VyIGNsYXNzLCB0aGUgZXhjZXB0aW9uIGJlaW5nIHRoZVxuICogICAgICAgICAvLyBjb25zdHJ1Y3RvciBwcm9wZXJ0eSwgd2hpY2ggaWYgc3VwcGxpZWQsIHdpbGwgYmUgeW91ciBjbGFzc2VzXG4gKiAgICAgICAgIC8vIGNvbnN0cnVjdG9yLlxuICogICAgICAgICB7XG4gKiAgICAgICAgICAgICAvLyB5b3VyIGNsYXNzZXMgbmFtZXNwYWNlLSBpZiBzdXBwbGllZCwgaXQgd2lsbCBiZSBcbiAqICAgICAgICAgICAgIC8vIGNyZWF0ZWQgZm9yIHlvdVxuICogICAgICAgICAgICAgbmFtZTogJ2NvbS5leGFtcGxlLlVzZXJNZWRpYXRvcidcbiAqIFxuICogICAgICAgICAgICAgLy8geW91ciBjbGFzc2VzIHBhcmVudCBjbGFzcy4gSWYgc3VwcGxpZWQsIGluaGVyaXRhbmNlIFxuICogICAgICAgICAgICAgLy8gd2lsbCBiZSB0YWtlbiBjYXJlIG9mIGZvciB5b3VcbiAqICAgICAgICAgLCAgIHBhcmVudDogcHVyZW12Yy5NZWRpYXRvclxuICogXG4gKiAgICAgICAgICAgICAvLyB5b3VyIGNsYXNzZXMgY29uc3RydWN0b3IuIElmIG5vdCBzdXBwbGllZCwgb25lIHdpbGwgYmUgXG4gKiAgICAgICAgICAgICAvLyBjcmVhdGVkIGZvciB5b3VcbiAqICAgICAgICAgLCAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiBVc2VyTWVkaWF0b3IgKGNvbXBvbmVudClcbiAqICAgICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICAgICAgcHVyZW12Yy5NZWRpYXRvci5jYWxsKHRoaXMsIHRoaXMuY29uc3RydWN0b3IuTkFNRSwgY29tcG9uZW50KTsgIFxuICogICAgICAgICAgICAgfVxuICogICAgICAgICB9XG4gKiAgICAgICAgIFxuICogICAgICAgICAvLyB0aGUgc2Vjb25kIG9iamVjdCBzdXBwbGllZCBkZWZpbmVzIHlvdXIgY2xhc3MgdHJhaXRzLCB0aGF0IGlzXG4gKiAgICAgICAgIC8vIHRoZSBwcm9wZXJ0aWVzIHRoYXQgd2lsbCBiZSBkZWZpbmVkIG9uIHlvdXIgY2xhc3NlcyBwcm90b3R5cGVcbiAqICAgICAgICAgLy8gYW5kIHRoZXJlYnkgb24gYWxsIGluc3RhbmNlcyBvZiB0aGlzIGNsYXNzXG4gKiAgICAgLCAgIHtcbiAqICAgICAgICAgICAgIGJ1c2luZXNzTWV0aG9kOiBmdW5jdGlvbiAoKVxuICogICAgICAgICAgICAge1xuICogICAgICAgICAgICAgICAgIC8vIGltcGwgXG4gKiAgICAgICAgICAgICB9XG4gKiAgICAgICAgIH1cbiAqIFxuICogICAgICAgICAvLyB0aGUgdGhpcmQgb2JqZWN0IHN1cHBsaWVkIGRlZmluZXMgeW91ciBjbGFzc2VzICdzdGF0aWMnIHRyYWl0c1xuICogICAgICAgICAvLyB0aGF0IGlzLCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyB3aGljaCB3aWxsIGJlIGRlZmluZWQgb25cbiAqICAgICAgICAgLy8geW91ciBjbGFzc2VzIGNvbnN0cnVjdG9yXG4gKiAgICAgLCAgIHtcbiAqICAgICAgICAgICAgIE5BTUU6ICd1c2VyTWVkaWF0b3InXG4gKiAgICAgICAgIH1cbiAqICAgICApO1xuICogXG4gKiBAcGFyYW0ge09iamVjdH0gW2NsYXNzaW5mb11cbiAqICBBbiBvYmplY3QgZGVzY3JpYmluZyB0aGUgY2xhc3MuIFRoaXMgb2JqZWN0IGNhbiBoYXZlIGFueSBvciBhbGwgb2ZcbiAqICB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKiBcbiAqICAtIG5hbWU6IFN0cmluZyAgXG4gKiAgICAgIFRoZSBjbGFzc2xldHMgbmFtZS4gVGhpcyBjYW4gYmUgYW55IGFyYml0cmFyeSBxdWFsaWZpZWQgb2JqZWN0XG4gKiAgICAgIG5hbWUuICdjb20uZXhhbXBsZS5DbGFzc2xldCcgb3Igc2ltcGx5ICdNeUNsYXNzbGV0JyBmb3IgZXhhbXBsZSBcbiAqICAgICAgVGhlIG1ldGhvZCB3aWxsIGF1dG9tYXRpY2FsbHkgY3JlYXRlIGFuIG9iamVjdCBoaWVyYXJjaHkgcmVmZXJpbmdcbiAqICAgICAgdG8geW91ciBjbGFzcyBmb3IgeW91LiBOb3RlIHRoYXQgeW91IHdpbGwgbmVlZCB0byBjYXB0dXJlIHRoZSBcbiAqICAgICAgbWV0aG9kcyByZXR1cm4gdmFsdWUgdG8gcmV0cmlldmUgYSByZWZlcmVuY2UgdG8geW91ciBjbGFzcyBpZiB0aGVcbiAqICAgICAgY2xhc3MgbmFtZSBwcm9wZXJ0eSBpcyBub3QgZGVmaW5lZC5cblxuICogIC0gcGFyZW50OiBGdW5jdGlvblxuICogICAgICBUaGUgY2xhc3NsZXRzICdzdXBlcmNsYXNzJy4gWW91ciBjbGFzcyB3aWxsIGJlIGV4dGVuZGVkIGZyb20gdGhpc1xuICogICAgICBpZiBzdXBwbGllZC5cbiAqIFxuICogIC0gY29uc3RydWN0b3I6IEZ1bmN0aW9uXG4gKiAgICAgIFRoZSBjbGFzc2xldHMgY29uc3RydWN0b3IuIE5vdGUgdGhpcyBpcyAqbm90KiBhIHBvc3QgY29uc3RydWN0IFxuICogICAgICBpbml0aWFsaXplIG1ldGhvZCwgYnV0IHlvdXIgY2xhc3NlcyBjb25zdHJ1Y3RvciBGdW5jdGlvbi5cbiAqICAgICAgSWYgdGhpcyBhdHRyaWJ1dGUgaXMgbm90IGRlZmluZWQsIGEgY29uc3RydWN0b3Igd2lsbCBiZSBjcmVhdGVkIGZvciBcbiAqICAgICAgeW91IGF1dG9tYXRpY2FsbHkuIElmIHlvdSBoYXZlIHN1cHBsaWVkIGEgcGFyZW50IGNsYXNzXG4gKiAgICAgIHZhbHVlIGFuZCBub3QgZGVmaW5lZCB0aGUgY2xhc3NlcyBjb25zdHJ1Y3RvciwgdGhlIGF1dG9tYXRpY2FsbHlcbiAqICAgICAgY3JlYXRlZCBjb25zdHJ1Y3RvciB3aWxsIGludm9rZSB0aGUgc3VwZXIgY2xhc3MgY29uc3RydWN0b3JcbiAqICAgICAgYXV0b21hdGljYWxseS4gSWYgeW91IGhhdmUgc3VwcGxpZWQgeW91ciBvd24gY29uc3RydWN0b3IgYW5kIHlvdVxuICogICAgICB3aXNoIHRvIGludm9rZSBpdCdzIHN1cGVyIGNvbnN0cnVjdG9yLCB5b3UgbXVzdCBkbyB0aGlzIG1hbnVhbGx5LCBhc1xuICogICAgICB0aGVyZSBpcyBubyByZWZlcmVuY2UgdG8gdGhlIGNsYXNzZXMgcGFyZW50IGFkZGVkIHRvIHRoZSBjb25zdHJ1Y3RvclxuICogICAgICBwcm90b3R5cGUuXG4gKiAgICAgIFxuICogIC0gc2NvcGU6IE9iamVjdC5cbiAqICAgICAgRm9yIHVzZSBpbiBhZHZhbmNlZCBzY2VuYXJpb3MuIElmIHRoZSBuYW1lIGF0dHJpYnV0ZSBoYXMgYmVlbiBzdXBwbGllZCxcbiAqICAgICAgdGhpcyB2YWx1ZSB3aWxsIGJlIHRoZSByb290IG9mIHRoZSBvYmplY3QgaGllcmFyY2h5IGNyZWF0ZWQgZm9yIHlvdS5cbiAqICAgICAgVXNlIGl0IGRvIGRlZmluZSB5b3VyIG93biBjbGFzcyBoaWVyYXJjaGllcyBpbiBwcml2YXRlIHNjb3BlcyxcbiAqICAgICAgYWNjcm9zcyBpRnJhbWVzLCBpbiB5b3VyIHVuaXQgdGVzdHMsIG9yIGF2b2lkIGNvbGxpc2lvbiB3aXRoIHRoaXJkXG4gKiAgICAgIHBhcnR5IGxpYnJhcnkgbmFtZXNwYWNlcy5cbiAqIFxuICogQHBhcmFtIHtPYmplY3R9IFt0cmFpdHNdXG4gKiAgQW4gT2JqZWN0LCB0aGUgcHJvcGVydGllcyBvZiB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZVxuICogIGNsYXNzIGNvbnN0cnVjdG9ycyBwcm90b3R5cGUuXG4gKiBcbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhaXRjVHJhaXRzXVxuICogIEFuIE9iamVjdCwgdGhlIHByb3BlcnRpZXMgb2Ygd2hpY2ggd2lsbCBiZSBhZGRlZCBkaXJlY3RseVxuICogIHRvIHRoaXMgY2xhc3MgY29uc3RydWN0b3JcbiAqIFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiAgQSByZWZlcmVuY2UgdG8gdGhlIGNsYXNzbGV0cyBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBkZWZpbmUgKGNsYXNzSW5mbywgdHJhaXRzLCBzdGF0aWNUcmFpdHMpXG57XG4gICAgaWYgKCFjbGFzc0luZm8pXG4gICAge1xuICAgICAgICBjbGFzc0luZm89IHt9XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzTmFtZT0gY2xhc3NJbmZvLm5hbWVcbiAgICAsICAgY2xhc3NQYXJlbnQ9IGNsYXNzSW5mby5wYXJlbnRcbiAgICAsICAgZG9FeHRlbmQ9ICdmdW5jdGlvbicgPT09IHR5cGVvZiBjbGFzc1BhcmVudFxuICAgICwgICBjbGFzc0NvbnN0cnVjdG9yXG4gICAgLCAgIGNsYXNzU2NvcGU9IGNsYXNzSW5mby5zY29wZSB8fCBudWxsXG4gICAgLCAgIHByb3RvdHlwZVxuXG4gICAgaWYgKCdwYXJlbnQnIGluIGNsYXNzSW5mbyAmJiAhZG9FeHRlbmQpXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDbGFzcyBwYXJlbnQgbXVzdCBiZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICAgICAgXG4gICAgaWYgKGNsYXNzSW5mby5oYXNPd25Qcm9wZXJ0eSgnY29uc3RydWN0b3InKSlcbiAgICB7XG4gICAgICAgIGNsYXNzQ29uc3RydWN0b3I9IGNsYXNzSW5mby5jb25zdHJ1Y3RvclxuICAgICAgICBpZiAoJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNsYXNzQ29uc3RydWN0b3IpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NsYXNzIGNvbnN0cnVjdG9yIG11c3QgYmUgRnVuY3Rpb24nKVxuICAgICAgICB9ICAgXG4gICAgfVxuICAgIGVsc2UgLy8gdGhlcmUgaXMgbm8gY29uc3RydWN0b3IsIGNyZWF0ZSBvbmVcbiAgICB7XG4gICAgICAgIGlmIChkb0V4dGVuZCkgLy8gZW5zdXJlIHRvIGNhbGwgdGhlIHN1cGVyIGNvbnN0cnVjdG9yXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzQ29uc3RydWN0b3I9IGZ1bmN0aW9uICgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NQYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIC8vIGp1c3QgY3JlYXRlIGEgRnVuY3Rpb25cbiAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NDb25zdHJ1Y3Rvcj0gbmV3IEZ1bmN0aW9uO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGlmIChkb0V4dGVuZClcbiAgICB7XG4gICAgICAgIE9vcEhlbHAuZXh0ZW5kKGNsYXNzQ29uc3RydWN0b3IsIGNsYXNzUGFyZW50KTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRyYWl0cylcbiAgICB7XG4gICAgICAgIHByb3RvdHlwZT0gY2xhc3NDb25zdHJ1Y3Rvci5wcm90b3R5cGVcbiAgICAgICAgT29wSGVscC5kZWNvcmF0ZShwcm90b3R5cGUsIHRyYWl0cyk7XG4gICAgICAgIC8vIHJlYXNzaWduIGNvbnN0cnVjdG9yIFxuICAgICAgICBwcm90b3R5cGUuY29uc3RydWN0b3I9IGNsYXNzQ29uc3RydWN0b3I7XG4gICAgfVxuICAgIFxuICAgIGlmIChzdGF0aWNUcmFpdHMpXG4gICAge1xuICAgICAgICBPb3BIZWxwLmRlY29yYXRlKGNsYXNzQ29uc3RydWN0b3IsIHN0YXRpY1RyYWl0cylcbiAgICB9XG4gICAgXG4gICAgaWYgKGNsYXNzTmFtZSlcbiAgICB7XG4gICAgICAgIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGNsYXNzTmFtZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2xhc3MgbmFtZSBtdXN0IGJlIHByaW1pdGl2ZSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIGRlY2xhcmUgKGNsYXNzTmFtZSwgY2xhc3NDb25zdHJ1Y3RvciwgY2xhc3NTY29wZSk7XG4gICAgfSAgICBcbiAgICBcbiAgICByZXR1cm4gY2xhc3NDb25zdHJ1Y3RvcjsgICAgICAgICAgICBcbn07XG5cblxuXHRcbiBcdC8qIGltcGxlbWVudGF0aW9uIGVuZCAqL1xuIFx0IFxuIFx0Ly8gZGVmaW5lIHRoZSBwdXJlbXZjIGdsb2JhbCBuYW1lc3BhY2UgYW5kIGV4cG9ydCB0aGUgYWN0b3JzXG52YXIgcHVyZW12YyA9XG4gXHR7XG4gXHRcdFZpZXc6IFZpZXdcbiBcdCxcdE1vZGVsOiBNb2RlbFxuIFx0LFx0Q29udHJvbGxlcjogQ29udHJvbGxlclxuIFx0LFx0U2ltcGxlQ29tbWFuZDogU2ltcGxlQ29tbWFuZFxuIFx0LFx0TWFjcm9Db21tYW5kOiBNYWNyb0NvbW1hbmRcbiBcdCxcdEZhY2FkZTogRmFjYWRlXG4gXHQsXHRNZWRpYXRvcjogTWVkaWF0b3JcbiBcdCxcdE9ic2VydmVyOiBPYnNlcnZlclxuIFx0LFx0Tm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25cbiBcdCxcdE5vdGlmaWVyOiBOb3RpZmllclxuIFx0LFx0UHJveHk6IFByb3h5XG4gXHQsXHRkZWZpbmU6IGRlZmluZVxuIFx0LFx0ZGVjbGFyZTogZGVjbGFyZVxuIFx0fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gcHVyZW12YzsiLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFB1cmVNVkMgU3RhdGUgTWFjaGluZSBVdGlsaXR5IEpTIE5hdGl2ZSBQb3J0IGJ5IFNhYWQgU2hhbXNcbiAqIENvcHlyaWdodChjKSAyMDA2LTIwMTIgRnV0dXJlc2NhbGUsIEluYy4sIFNvbWUgcmlnaHRzIHJlc2VydmVkLlxuICogUmV1c2UgZ292ZXJuZWQgYnkgQ3JlYXRpdmUgQ29tbW9ucyBBdHRyaWJ1dGlvbiAzLjBcbiAqIGh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzMuMC91cy9cbiAqIEBhdXRob3Igc2FhZC5zaGFtc0BwdXJlbXZjLm9yZ1xuICovXG5cbnZhciBwdXJlbXZjID0gcmVxdWlyZSggJy4vcHVyZW12Yy0xLjAuMS1tb2QuanMnICk7XG5cbi8qKlxuICogQ29uc3RydWN0b3JcbiAqXG4gKiBEZWZpbmVzIGEgU3RhdGUuXG4gKiBAbWV0aG9kIFN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBpZCB0aGUgaWQgb2YgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gZW50ZXJpbmcgYW4gb3B0aW9uYWwgbm90aWZpY2F0aW9uIG5hbWUgdG8gYmUgc2VudCB3aGVuIGVudGVyaW5nIHRoaXMgc3RhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBleGl0aW5nIGFuIG9wdGlvbmFsIG5vdGlmaWNhdGlvbiBuYW1lIHRvIGJlIHNlbnQgd2hlbiBleGl0aW5nIHRoaXMgc3RhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGFuZ2VkIGFuIG9wdGlvbmFsIG5vdGlmaWNhdGlvbiBuYW1lIHRvIGJlIHNlbnQgd2hlbiBmdWxseSB0cmFuc2l0aW9uZWQgdG8gdGhpcyBzdGF0ZVxuICogQHJldHVyblxuICovXG5cbmZ1bmN0aW9uIFN0YXRlKG5hbWUsIGVudGVyaW5nLCBleGl0aW5nLCBjaGFuZ2VkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICBpZihlbnRlcmluZykgdGhpcy5lbnRlcmluZyA9IGVudGVyaW5nO1xuICAgIGlmKGV4aXRpbmcpIHRoaXMuZXhpdGluZyA9IGV4aXRpbmc7XG4gICAgaWYoY2hhbmdlZCkgdGhpcy5jaGFuZ2VkID0gY2hhbmdlZDtcbiAgICB0aGlzLnRyYW5zaXRpb25zID0ge307XG59XG5cbi8qKlxuICogRGVmaW5lIGEgdHJhbnNpdGlvbi5cbiAqIEBtZXRob2QgZGVmaW5lVHJhbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gdGhlIG5hbWUgb2YgdGhlIFN0YXRlTWFjaGluZS5BQ1RJT04gTm90aWZpY2F0aW9uIHR5cGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0IHRoZSBuYW1lIG9mIHRoZSB0YXJnZXQgc3RhdGUgdG8gdHJhbnNpdGlvbiB0by5cbiAqIEByZXR1cm5cbiAqL1xuU3RhdGUucHJvdG90eXBlLmRlZmluZVRyYW5zID0gZnVuY3Rpb24oYWN0aW9uLCB0YXJnZXQpIHtcbiAgICBpZih0aGlzLmdldFRhcmdldChhY3Rpb24pICE9IG51bGwpIHJldHVybjtcbiAgICB0aGlzLnRyYW5zaXRpb25zW2FjdGlvbl0gPSB0YXJnZXQ7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgcHJldmlvdXNseSBkZWZpbmVkIHRyYW5zaXRpb24uXG4gKiBAbWV0aG9kIHJlbW92ZVRyYW5zXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uXG4gKiBAcmV0dXJuXG4gKi9cblN0YXRlLnByb3RvdHlwZS5yZW1vdmVUcmFucyA9IGZ1bmN0aW9uKGFjdGlvbikge1xuICAgIGRlbGV0ZSB0aGlzLnRyYW5zaXRpb25zW2FjdGlvbl07XG59XG5cbi8qKlxuICogR2V0IHRoZSB0YXJnZXQgc3RhdGUgbmFtZSBmb3IgYSBnaXZlbiBhY3Rpb24uXG4gKiBAbWV0aG9kIGdldFRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvblxuICogQHJldHVybiBTdGF0ZVxuICovXG4vKipcbiAqXG4gKi9cblN0YXRlLnByb3RvdHlwZS5nZXRUYXJnZXQgPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2l0aW9uc1thY3Rpb25dID8gdGhpcy50cmFuc2l0aW9uc1thY3Rpb25dIDogbnVsbDtcbn1cblxuLy8gVGhlIHN0YXRlIG5hbWVcblN0YXRlLnByb3RvdHlwZS5uYW1lID0gbnVsbDtcblxuLy8gVGhlIG5vdGlmaWNhdGlvbiB0byBkaXNwYXRjaCB3aGVuIGVudGVyaW5nIHRoZSBzdGF0ZVxuU3RhdGUucHJvdG90eXBlLmVudGVyaW5nID0gbnVsbDtcblxuLy8gVGhlIG5vdGlmaWNhdGlvbiB0byBkaXNwYXRjaCB3aGVuIGV4aXRpbmcgdGhlIHN0YXRlXG5TdGF0ZS5wcm90b3R5cGUuZXhpdGluZyA9IG51bGw7XG5cbi8vIFRoZSBub3RpZmljYXRpb24gdG8gZGlzcGF0Y2ggd2hlbiB0aGUgc3RhdGUgaGFzIGFjdHVhbGx5IGNoYW5nZWRcblN0YXRlLnByb3RvdHlwZS5jaGFuZ2VkID0gbnVsbDtcblxuLyoqXG4gKiAgVHJhbnNpdGlvbiBtYXAgb2YgYWN0aW9ucyB0byB0YXJnZXQgc3RhdGVzXG4gKi9cblN0YXRlLnByb3RvdHlwZS50cmFuc2l0aW9ucyA9IG51bGw7XG5cblxuXG4gLyoqXG4gKiBBIEZpbml0ZSBTdGF0ZSBNYWNoaW5lIGltcGxpbWVudGF0aW9uLlxuICogPFA+XG4gKiBIYW5kbGVzIHJlZ2lzaXN0cmF0aW9uIGFuZCByZW1vdmFsIG9mIHN0YXRlIGRlZmluaXRpb25zLFxuICogd2hpY2ggaW5jbHVkZSBvcHRpb25hbCBlbnRyeSBhbmQgZXhpdCBjb21tYW5kcyBmb3IgZWFjaFxuICogc3RhdGUuPC9QPlxuICovXG5cbi8qKlxuICogQ29uc3RydWN0b3JcbiAqXG4gKiBAbWV0aG9kIFN0YXRlTWFjaGluZVxuICogQHJldHVyblxuICovXG5mdW5jdGlvbiBTdGF0ZU1hY2hpbmUobmFtZSkge1xuICAgIHB1cmVtdmMuTWVkaWF0b3IuY2FsbCh0aGlzLCBuYW1lLCBudWxsKTtcbiAgICB0aGlzLnN0YXRlcyA9IHt9O1xuICAgIHRoaXMuQUNUSU9OID0gbmFtZSArIFwiL25vdGVzL2FjdGlvblwiO1xuICAgIHRoaXMuQ0FOQ0VMID0gbmFtZSArIFwiL25vdGVzL2NhbmNlbFwiO1xuICAgIHRoaXMuQ0hBTkdFRCA9IG5hbWUgKyBcIi9ub3Rlcy9jaGFuZ2VkXCI7XG59XG5cblN0YXRlTWFjaGluZS5wcm90b3R5cGUgPSBuZXcgcHVyZW12Yy5NZWRpYXRvcjtcblN0YXRlTWFjaGluZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdGF0ZU1hY2hpbmU7XG5cbi8qKlxuICogVHJhbnNpdGlvbnMgdG8gaW5pdGlhbCBzdGF0ZSBvbmNlIHJlZ2lzdGVyZWQgd2l0aCBGYWNhZGVcbiAqIEBtZXRob2Qgb25SZWdpc3RlclxuICogQHJldHVyblxuICovXG5TdGF0ZU1hY2hpbmUucHJvdG90eXBlLm9uUmVnaXN0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBpZih0aGlzLmluaXRpYWwpIHRoaXMudHJhbnNpdGlvblRvKHRoaXMuaW5pdGlhbCwgbnVsbCk7XG59XG5cbi8qKlxuICogUmVnaXN0ZXJzIHRoZSBlbnRyeSBhbmQgZXhpdCBjb21tYW5kcyBmb3IgYSBnaXZlbiBzdGF0ZS5cbiAqIEBtZXRob2QgcmVnaXN0ZXJTdGF0ZVxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgdGhlIHN0YXRlIHRvIHdoaWNoIHRvIHJlZ2lzdGVyIHRoZSBhYm92ZSBjb21tYW5kc1xuICogQHBhcmFtIHtib29sZWFufSBpbml0aWFsIGJvb2xlYW4gdGVsbGluZyBpZiB0aGlzIGlzIHRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBzeXN0ZW1cbiAqIEByZXR1cm5cbiAqL1xuU3RhdGVNYWNoaW5lLnByb3RvdHlwZS5yZWdpc3RlclN0YXRlID0gZnVuY3Rpb24oc3RhdGUsIGluaXRpYWwpIHtcbiAgICBpZihzdGF0ZSA9PSBudWxsIHx8IHRoaXMuc3RhdGVzW3N0YXRlLm5hbWVdICE9IG51bGwpIHJldHVybjtcbiAgICB0aGlzLnN0YXRlc1tzdGF0ZS5uYW1lXSA9IHN0YXRlO1xuICAgIGlmKGluaXRpYWwpIHRoaXMuaW5pdGlhbCA9IHN0YXRlO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhIHN0YXRlIG1hcHBpbmcuIFJlbW92ZXMgdGhlIGVudHJ5IGFuZCBleGl0IGNvbW1hbmRzIGZvciBhIGdpdmVuIHN0YXRlIGFzIHdlbGwgYXMgdGhlIHN0YXRlIG1hcHBpbmcgaXRzZWxmLlxuICogQG1ldGhvZCByZW1vdmVTdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlTmFtZVxuICogQHJldHVyblxuICovXG5TdGF0ZU1hY2hpbmUucHJvdG90eXBlLnJlbW92ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGVOYW1lKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZXNbc3RhdGVOYW1lXTtcbiAgICBpZihzdGF0ZSA9PSBudWxsKSByZXR1cm47XG4gICAgdGhpcy5zdGF0ZXNbc3RhdGVOYW1lXSA9IG51bGw7XG59XG5cbi8qKlxuICogVHJhbnNpdGlvbnMgdG8gdGhlIGdpdmVuIHN0YXRlIGZyb20gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiA8UD5cbiAqIFNlbmRzIHRoZSA8Y29kZT5leGl0aW5nPC9jb2RlPiBub3RpZmljYXRpb24gZm9yIHRoZSBjdXJyZW50IHN0YXRlXG4gKiBmb2xsb3dlZCBieSB0aGUgPGNvZGU+ZW50ZXJpbmc8L2NvZGU+IG5vdGlmaWNhdGlvbiBmb3IgdGhlIG5ldyBzdGF0ZS5cbiAqIE9uY2UgZmluYWxseSB0cmFuc2l0aW9uZWQgdG8gdGhlIG5ldyBzdGF0ZSwgdGhlIDxjb2RlPmNoYW5nZWQ8L2NvZGU+XG4gKiBub3RpZmljYXRpb24gZm9yIHRoZSBuZXcgc3RhdGUgaXMgc2VudC48L1A+XG4gKiA8UD5cbiAqIElmIGEgZGF0YSBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQsIGl0IGlzIGluY2x1ZGVkIGFzIHRoZSBib2R5IG9mIGFsbFxuICogdGhyZWUgc3RhdGUtc3BlY2lmaWMgdHJhbnNpdGlvbiBub3Rlcy48L1A+XG4gKiA8UD5cbiAqIEZpbmFsbHksIHdoZW4gYWxsIHRoZSBzdGF0ZS1zcGVjaWZpYyB0cmFuc2l0aW9uIG5vdGVzIGhhdmUgYmVlblxuICogc2VudCwgYSA8Y29kZT5TdGF0ZU1hY2hpbmUuQ0hBTkdFRDwvY29kZT4gbm90ZSBpcyBzZW50LCB3aXRoIHRoZVxuICogbmV3IDxjb2RlPlN0YXRlPC9jb2RlPiBvYmplY3QgYXMgdGhlIDxjb2RlPmJvZHk8L2NvZGU+IGFuZCB0aGUgbmFtZSBvZiB0aGVcbiAqIG5ldyBzdGF0ZSBpbiB0aGUgPGNvZGU+dHlwZTwvY29kZT4uXG4gKlxuICogQG1ldGhvZCB0cmFuc2l0aW9uVG9cbiAqIEBwYXJhbSB7U3RhdGV9IG5leHRTdGF0ZSB0aGUgbmV4dCBTdGF0ZSB0byB0cmFuc2l0aW9uIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgaXMgdGhlIG9wdGlvbmFsIE9iamVjdCB0aGF0IHdhcyBzZW50IGluIHRoZSA8Y29kZT5TdGF0ZU1hY2hpbmUuQUNUSU9OPC9jb2RlPiBub3RpZmljYXRpb24gYm9keVxuICogQHJldHVyblxuICovXG5TdGF0ZU1hY2hpbmUucHJvdG90eXBlLnRyYW5zaXRpb25UbyA9IGZ1bmN0aW9uKG5leHRTdGF0ZSwgZGF0YSkge1xuICAgIC8vIEdvaW5nIG5vd2hlcmU/XG4gICAgaWYobmV4dFN0YXRlID09IG51bGwpIHJldHVybjtcblxuICAgIC8vIENsZWFyIHRoZSBjYW5jZWwgZmxhZ1xuICAgIHRoaXMuY2FuY2VsZWQgPSBmYWxzZTtcblxuICAgIC8vIEV4aXQgdGhlIGN1cnJlbnQgU3RhdGVcbiAgICBpZih0aGlzLmdldEN1cnJlbnRTdGF0ZSgpICYmIHRoaXMuZ2V0Q3VycmVudFN0YXRlKCkuZXhpdGluZylcbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKHRoaXMuZ2V0Q3VycmVudFN0YXRlKCkuZXhpdGluZywgZGF0YSwgbmV4dFN0YXRlLm5hbWUpO1xuXG4gICAgLy8gQ2hlY2sgdG8gc2VlIHdoZXRoZXIgdGhlIGV4aXRpbmcgZ3VhcmQgaGFzIGNhbmNlbGVkIHRoZSB0cmFuc2l0aW9uXG4gICAgaWYodGhpcy5jYW5jZWxlZCkge1xuICAgICAgICB0aGlzLmNhbmNlbGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBFbnRlciB0aGUgbmV4dCBTdGF0ZVxuICAgIGlmKG5leHRTdGF0ZS5lbnRlcmluZylcbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKG5leHRTdGF0ZS5lbnRlcmluZywgZGF0YSk7XG5cbiAgICAvLyBDaGVjayB0byBzZWUgd2hldGhlciB0aGUgZW50ZXJpbmcgZ3VhcmQgaGFzIGNhbmNlbGVkIHRoZSB0cmFuc2l0aW9uXG4gICAgaWYodGhpcy5jYW5jZWxlZCkge1xuICAgICAgICB0aGlzLmNhbmNlbGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjaGFuZ2UgdGhlIGN1cnJlbnQgc3RhdGUgb25seSB3aGVuIGJvdGggZ3VhcmRzIGhhdmUgYmVlbiBwYXNzZWRcbiAgICB0aGlzLnNldEN1cnJlbnRTdGF0ZShuZXh0U3RhdGUpO1xuXG4gICAgLy8gU2VuZCB0aGUgbm90aWZpY2F0aW9uIGNvbmZpZ3VyZWQgdG8gYmUgc2VudCB3aGVuIHRoaXMgc3BlY2lmaWMgc3RhdGUgYmVjb21lcyBjdXJyZW50XG4gICAgaWYobmV4dFN0YXRlLmNoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKHRoaXMuZ2V0Q3VycmVudFN0YXRlKCkuY2hhbmdlZCwgZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gTm90aWZ5IHRoZSBhcHAgZ2VuZXJhbGx5IHRoYXQgdGhlIHN0YXRlIGNoYW5nZWQgYW5kIHdoYXQgdGhlIG5ldyBzdGF0ZSBpc1xuICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbih0aGlzLkNIQU5HRUQsIHRoaXMuZ2V0Q3VycmVudFN0YXRlKCksIHRoaXMuZ2V0Q3VycmVudFN0YXRlKCkubmFtZSk7XG59XG5cbi8qKlxuICogTm90aWZpY2F0aW9uIGludGVyZXN0cyBmb3IgdGhlIFN0YXRlTWFjaGluZS5cbiAqIEBtZXRob2QgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0c1xuICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIE5vdGlmaWNhdGlvbnNcbiAqL1xuXG5TdGF0ZU1hY2hpbmUucHJvdG90eXBlLmxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICB0aGlzLkFDVElPTixcbiAgICAgICAgdGhpcy5DQU5DRUxcbiAgICBdO1xufVxuXG4vKipcbiAqIEhhbmRsZSBub3RpZmljYXRpb25zIHRoZSA8Y29kZT5TdGF0ZU1hY2hpbmU8L2NvZGU+IGlzIGludGVyZXN0ZWQgaW4uXG4gKiA8UD5cbiAqIDxjb2RlPlN0YXRlTWFjaGluZS5BQ1RJT048L2NvZGU+OiBUcmlnZ2VycyB0aGUgdHJhbnNpdGlvbiB0byBhIG5ldyBzdGF0ZS48QlI+XG4gKiA8Y29kZT5TdGF0ZU1hY2hpbmUuQ0FOQ0VMPC9jb2RlPjogQ2FuY2VscyB0aGUgdHJhbnNpdGlvbiBpZiBzZW50IGluIHJlc3BvbnNlIHRvIHRoZSBleGl0aW5nIG5vdGUgZm9yIHRoZSBjdXJyZW50IHN0YXRlLjxCUj5cbiAqXG4gKiBAbWV0aG9kIGhhbmRsZU5vdGlmaWNhdGlvblxuICogQHBhcmFtIHtOb3RpZmljYXRpb259IG5vdGlmaWNhdGlvblxuICogQHJldHVyblxuICovXG5TdGF0ZU1hY2hpbmUucHJvdG90eXBlLmhhbmRsZU5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uKG5vdGlmaWNhdGlvbikge1xuICAgIHN3aXRjaChub3RpZmljYXRpb24uZ2V0TmFtZSgpKSB7XG4gICAgICAgIGNhc2UgdGhpcy5BQ1RJT046XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gbm90aWZpY2F0aW9uLmdldFR5cGUoKTtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmdldEN1cnJlbnRTdGF0ZSgpLmdldFRhcmdldChhY3Rpb24pO1xuICAgICAgICAgICAgdmFyIG5ld1N0YXRlID0gdGhpcy5zdGF0ZXNbdGFyZ2V0XTtcbiAgICAgICAgICAgIGlmKG5ld1N0YXRlKSB0aGlzLnRyYW5zaXRpb25UbyhuZXdTdGF0ZSwgbm90aWZpY2F0aW9uLmdldEJvZHkoKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHRoaXMuQ0FOQ0VMOlxuICAgICAgICAgICAgdGhpcy5jYW5jZWxlZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBjdXJyZW50IHN0YXRlLlxuICogQG1ldGhvZCBnZXRDdXJyZW50U3RhdGVcbiAqIEByZXR1cm4gYSBTdGF0ZSBkZWZpbmluZyB0aGUgbWFjaGluZSdzIGN1cnJlbnQgc3RhdGVcbiAqL1xuU3RhdGVNYWNoaW5lLnByb3RvdHlwZS5nZXRDdXJyZW50U3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52aWV3Q29tcG9uZW50O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIEBtZXRob2Qgc2V0Q3VycmVudFN0YXRlXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZVxuICogQHJldHVyblxuICovXG5TdGF0ZU1hY2hpbmUucHJvdG90eXBlLnNldEN1cnJlbnRTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgdGhpcy52aWV3Q29tcG9uZW50ID0gc3RhdGU7XG59XG5cbi8qKlxuICogTWFwIG9mIFN0YXRlcyBvYmplY3RzIGJ5IG5hbWUuXG4gKi9cblN0YXRlTWFjaGluZS5wcm90b3R5cGUuc3RhdGVzID0gbnVsbDtcblxuLyoqXG4gKiBUaGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgRlNNLlxuICovXG5TdGF0ZU1hY2hpbmUucHJvdG90eXBlLmluaXRpYWwgPSBudWxsO1xuXG4vKipcbiAqIFRoZSB0cmFuc2l0aW9uIGhhcyBiZWVuIGNhbmNlbGVkLlxuICovXG5TdGF0ZU1hY2hpbmUucHJvdG90eXBlLmNhbmNlbGVkID0gbnVsbDtcblxuU3RhdGVNYWNoaW5lLk5BTUUgPSBcIlN0YXRlTWFjaGluZVwiO1xuXG4vKipcbiAqIEFjdGlvbiBOb3RpZmljYXRpb24gbmFtZS5cbiAqL1xuU3RhdGVNYWNoaW5lLkFDVElPTiA9IFN0YXRlTWFjaGluZS5OQU1FICsgXCIvbm90ZXMvYWN0aW9uXCI7XG5cbi8qKlxuICogIENoYW5nZWQgTm90aWZpY2F0aW9uIG5hbWVcbiAqL1xuU3RhdGVNYWNoaW5lLkNIQU5HRUQgPSBTdGF0ZU1hY2hpbmUuTkFNRSArIFwiL25vdGVzL2NoYW5nZWRcIjtcblxuLyoqXG4gKiAgQ2FuY2VsIE5vdGlmaWNhdGlvbiBuYW1lXG4gKi9cblN0YXRlTWFjaGluZS5DQU5DRUwgPSBTdGF0ZU1hY2hpbmUuTkFNRSArIFwiL25vdGVzL2NhbmNlbFwiO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmVnaXN0ZXJzIGEgU3RhdGVNYWNoaW5lIGRlc2NyaWJlZCBpbiBKU09OLlxuICpcbiAqIDxQPlxuICogVGhpcyBhbGxvd3MgcmVjb25maWd1cmF0aW9uIG9mIHRoZSBTdGF0ZU1hY2hpbmVcbiAqIHdpdGhvdXQgY2hhbmdpbmcgYW55IGNvZGUsIGFzIHdlbGwgYXMgbWFraW5nIGl0XG4gKiBlYXNpZXIgdGhhbiBjcmVhdGluZyBhbGwgdGhlIDxjb2RlPlN0YXRlPC9jb2RlPlxuICogaW5zdGFuY2VzIGFuZCByZWdpc3RlcmluZyB0aGVtIHdpdGggdGhlXG4gKiA8Y29kZT5TdGF0ZU1hY2hpbmU8L2NvZGU+IGF0IHN0YXJ0dXAgdGltZS5cbiAqXG4gKiBAIHNlZSBTdGF0ZVxuICogQCBzZWUgU3RhdGVNYWNoaW5lXG4gKi9cblxuLyoqXG4gKiBDb25zdHJ1Y3RvclxuICogQG1ldGhvZCBGU01JbmplY3RvclxuICogQHBhcmFtIHtPYmplY3R9IGZzbSBKU09OIE9iamVjdFxuICogQHJldHVyblxuICovXG5mdW5jdGlvbiBGU01JbmplY3Rvcihmc20pIHtcbiAgICBwdXJlbXZjLk5vdGlmaWVyLmNhbGwodGhpcyk7XG4gICAgdGhpcy5mc20gPSBmc207XG59XG5cbkZTTUluamVjdG9yLnByb3RvdHlwZSA9IG5ldyBwdXJlbXZjLk5vdGlmaWVyO1xuRlNNSW5qZWN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRlNNSW5qZWN0b3I7XG5cbi8qKlxuICogSW5qZWN0IHRoZSA8Y29kZT5TdGF0ZU1hY2hpbmU8L2NvZGU+IGludG8gdGhlIFB1cmVNVkMgYXBwYXJhdHVzLlxuICogPFA+XG4gKiBDcmVhdGVzIHRoZSA8Y29kZT5TdGF0ZU1hY2hpbmU8L2NvZGU+IGluc3RhbmNlLCByZWdpc3RlcnMgYWxsIHRoZSBzdGF0ZXNcbiAqIGFuZCByZWdpc3RlcnMgdGhlIDxjb2RlPlN0YXRlTWFjaGluZTwvY29kZT4gd2l0aCB0aGUgPGNvZGU+SUZhY2FkZTwvY29kZT4uXG4gKiBAbWV0aG9kIGluamVjdFxuICogQHJldHVyblxuICovXG5GU01JbmplY3Rvci5wcm90b3R5cGUuaW5qZWN0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIC8vIENyZWF0ZSB0aGUgU3RhdGVNYWNoaW5lXG4gICAgdmFyIHN0YXRlTWFjaGluZSA9IG5ldyBwdXJlbXZjLnN0YXRlbWFjaGluZS5TdGF0ZU1hY2hpbmUobmFtZSk7XG5cbiAgICAvLyBSZWdpc3RlciBhbGwgdGhlIHN0YXRlcyB3aXRoIHRoZSBTdGF0ZU1hY2hpbmVcbiAgICB2YXIgc3RhdGVzID0gdGhpcy5nZXRTdGF0ZXMoKTtcbiAgICBmb3IodmFyIGk9MDsgaTxzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3RhdGVNYWNoaW5lLnJlZ2lzdGVyU3RhdGUoc3RhdGVzW2ldLCB0aGlzLmlzSW5pdGlhbChzdGF0ZXNbaV0ubmFtZSkpO1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVyIHRoZSBTdGF0ZU1hY2hpbmUgd2l0aCB0aGUgZmFjYWRlXG4gICAgdGhpcy5mYWNhZGUucmVnaXN0ZXJNZWRpYXRvcihzdGF0ZU1hY2hpbmUpO1xuICAgIHJldHVybiBzdGF0ZU1hY2hpbmU7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzdGF0ZSBkZWZpbml0aW9ucy5cbiAqIDxQPlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyB0aGUgYXJyYXkgb2YgU3RhdGUgb2JqZWN0c1xuICogZnJvbSB0aGUgRlNNIG9uIGZpcnN0IGNhbGwsIHN1YnNlcXVlbnRseSByZXR1cm5zXG4gKiB0aGUgZXhpc3RpbmcgYXJyYXkuPC9QPlxuICpcbiAqIEBtZXRob2QgZ2V0U3RhdGVzXG4gKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgU3RhdGVzXG4gKi9cbkZTTUluamVjdG9yLnByb3RvdHlwZS5nZXRTdGF0ZXMgPSBmdW5jdGlvbigpIHtcbiAgICBpZih0aGlzLnN0YXRlTGlzdCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc3RhdGVMaXN0ID0gW107XG5cbiAgICAgICAgdmFyIHN0YXRlRGVmcyA9IHRoaXMuZnNtLnN0YXRlID8gdGhpcy5mc20uc3RhdGUgOiBbXTtcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8c3RhdGVEZWZzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGVEZWYgPSBzdGF0ZURlZnNbaV07XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmNyZWF0ZVN0YXRlKHN0YXRlRGVmKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVMaXN0LnB1c2goc3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN0YXRlTGlzdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgPGNvZGU+U3RhdGU8L2NvZGU+IGluc3RhbmNlIGZyb20gaXRzIEpTT04gZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgY3JlYXRlU3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZURlZiBKU09OIE9iamVjdFxuICogQHJldHVybiB7U3RhdGV9XG4gKi9cbi8qKlxuXG4gKi9cbkZTTUluamVjdG9yLnByb3RvdHlwZS5jcmVhdGVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlRGVmKSB7XG4gICAgLy8gQ3JlYXRlIFN0YXRlIG9iamVjdFxuICAgIHZhciBuYW1lID0gc3RhdGVEZWZbJ0BuYW1lJ107XG4gICAgdmFyIGV4aXRpbmcgPSBzdGF0ZURlZlsnQGV4aXRpbmcnXTtcbiAgICB2YXIgZW50ZXJpbmcgPSBzdGF0ZURlZlsnQGVudGVyaW5nJ107XG4gICAgdmFyIGNoYW5nZWQgPSBzdGF0ZURlZlsnQGNoYW5nZWQnXTtcbiAgICB2YXIgc3RhdGUgPSBuZXcgcHVyZW12Yy5zdGF0ZW1hY2hpbmUuU3RhdGUobmFtZSwgZW50ZXJpbmcsIGV4aXRpbmcsIGNoYW5nZWQpO1xuXG4gICAgLy8gQ3JlYXRlIHRyYW5zaXRpb25zXG4gICAgdmFyIHRyYW5zaXRpb25zID0gc3RhdGVEZWYudHJhbnNpdGlvbiA/IHN0YXRlRGVmLnRyYW5zaXRpb24gOiBbXTtcbiAgICBmb3IodmFyIGk9MDsgaTx0cmFuc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdHJhbnNEZWYgPSB0cmFuc2l0aW9uc1tpXTtcbiAgICAgICAgc3RhdGUuZGVmaW5lVHJhbnModHJhbnNEZWZbJ0BhY3Rpb24nXSwgdHJhbnNEZWZbJ0B0YXJnZXQnXSk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBJcyB0aGUgZ2l2ZW4gc3RhdGUgdGhlIGluaXRpYWwgc3RhdGU/XG4gKiBAbWV0aG9kIGlzSW5pdGlhbFxuICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlTmFtZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuRlNNSW5qZWN0b3IucHJvdG90eXBlLmlzSW5pdGlhbCA9IGZ1bmN0aW9uKHN0YXRlTmFtZSkge1xuICAgIHZhciBpbml0aWFsID0gdGhpcy5mc21bJ0Bpbml0aWFsJ107XG4gICAgcmV0dXJuIHN0YXRlTmFtZSA9PSBpbml0aWFsO1xufVxuXG4vLyBUaGUgSlNPTiBGU00gZGVmaW5pdGlvblxuRlNNSW5qZWN0b3IucHJvdG90eXBlLmZzbSA9IG51bGw7XG5cbi8vIFRoZSBMaXN0IG9mIFN0YXRlIG9iamVjdHNcbkZTTUluamVjdG9yLnByb3RvdHlwZS5zdGF0ZUxpc3QgPSBudWxsO1xuXG5cbnB1cmVtdmMuc3RhdGVtYWNoaW5lID1cbntcbiAgICBTdGF0ZTogU3RhdGVcbiAgICAsXHRTdGF0ZU1hY2hpbmU6IFN0YXRlTWFjaGluZVxuICAgICxcdEZTTUluamVjdG9yOiBGU01JbmplY3RvclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwdXJlbXZjLnN0YXRlbWFjaGluZTtcbiIsIi8vICAgICBVbmRlcnNjb3JlLmpzIDEuOC4zXG4vLyAgICAgaHR0cDovL3VuZGVyc2NvcmVqcy5vcmdcbi8vICAgICAoYykgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4vLyAgICAgVW5kZXJzY29yZSBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuKGZ1bmN0aW9uKCkge1xuXG4gIC8vIEJhc2VsaW5lIHNldHVwXG4gIC8vIC0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gRXN0YWJsaXNoIHRoZSByb290IG9iamVjdCwgYHdpbmRvd2AgaW4gdGhlIGJyb3dzZXIsIG9yIGBleHBvcnRzYCBvbiB0aGUgc2VydmVyLlxuICB2YXIgcm9vdCA9IHRoaXM7XG5cbiAgLy8gU2F2ZSB0aGUgcHJldmlvdXMgdmFsdWUgb2YgdGhlIGBfYCB2YXJpYWJsZS5cbiAgdmFyIHByZXZpb3VzVW5kZXJzY29yZSA9IHJvb3QuXztcblxuICAvLyBTYXZlIGJ5dGVzIGluIHRoZSBtaW5pZmllZCAoYnV0IG5vdCBnemlwcGVkKSB2ZXJzaW9uOlxuICB2YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSwgT2JqUHJvdG8gPSBPYmplY3QucHJvdG90eXBlLCBGdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgLy8gQ3JlYXRlIHF1aWNrIHJlZmVyZW5jZSB2YXJpYWJsZXMgZm9yIHNwZWVkIGFjY2VzcyB0byBjb3JlIHByb3RvdHlwZXMuXG4gIHZhclxuICAgIHB1c2ggICAgICAgICAgICAgPSBBcnJheVByb3RvLnB1c2gsXG4gICAgc2xpY2UgICAgICAgICAgICA9IEFycmF5UHJvdG8uc2xpY2UsXG4gICAgdG9TdHJpbmcgICAgICAgICA9IE9ialByb3RvLnRvU3RyaW5nLFxuICAgIGhhc093blByb3BlcnR5ICAgPSBPYmpQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuICAvLyBBbGwgKipFQ01BU2NyaXB0IDUqKiBuYXRpdmUgZnVuY3Rpb24gaW1wbGVtZW50YXRpb25zIHRoYXQgd2UgaG9wZSB0byB1c2VcbiAgLy8gYXJlIGRlY2xhcmVkIGhlcmUuXG4gIHZhclxuICAgIG5hdGl2ZUlzQXJyYXkgICAgICA9IEFycmF5LmlzQXJyYXksXG4gICAgbmF0aXZlS2V5cyAgICAgICAgID0gT2JqZWN0LmtleXMsXG4gICAgbmF0aXZlQmluZCAgICAgICAgID0gRnVuY1Byb3RvLmJpbmQsXG4gICAgbmF0aXZlQ3JlYXRlICAgICAgID0gT2JqZWN0LmNyZWF0ZTtcblxuICAvLyBOYWtlZCBmdW5jdGlvbiByZWZlcmVuY2UgZm9yIHN1cnJvZ2F0ZS1wcm90b3R5cGUtc3dhcHBpbmcuXG4gIHZhciBDdG9yID0gZnVuY3Rpb24oKXt9O1xuXG4gIC8vIENyZWF0ZSBhIHNhZmUgcmVmZXJlbmNlIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgdXNlIGJlbG93LlxuICB2YXIgXyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBfKSByZXR1cm4gb2JqO1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBfKSkgcmV0dXJuIG5ldyBfKG9iaik7XG4gICAgdGhpcy5fd3JhcHBlZCA9IG9iajtcbiAgfTtcblxuICAvLyBFeHBvcnQgdGhlIFVuZGVyc2NvcmUgb2JqZWN0IGZvciAqKk5vZGUuanMqKiwgd2l0aFxuICAvLyBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSBmb3IgdGhlIG9sZCBgcmVxdWlyZSgpYCBBUEkuIElmIHdlJ3JlIGluXG4gIC8vIHRoZSBicm93c2VyLCBhZGQgYF9gIGFzIGEgZ2xvYmFsIG9iamVjdC5cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gXztcbiAgICB9XG4gICAgZXhwb3J0cy5fID0gXztcbiAgfSBlbHNlIHtcbiAgICByb290Ll8gPSBfO1xuICB9XG5cbiAgLy8gQ3VycmVudCB2ZXJzaW9uLlxuICBfLlZFUlNJT04gPSAnMS44LjMnO1xuXG4gIC8vIEludGVybmFsIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBlZmZpY2llbnQgKGZvciBjdXJyZW50IGVuZ2luZXMpIHZlcnNpb25cbiAgLy8gb2YgdGhlIHBhc3NlZC1pbiBjYWxsYmFjaywgdG8gYmUgcmVwZWF0ZWRseSBhcHBsaWVkIGluIG90aGVyIFVuZGVyc2NvcmVcbiAgLy8gZnVuY3Rpb25zLlxuICB2YXIgb3B0aW1pemVDYiA9IGZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQsIGFyZ0NvdW50KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgcmV0dXJuIGZ1bmM7XG4gICAgc3dpdGNoIChhcmdDb3VudCA9PSBudWxsID8gMyA6IGFyZ0NvdW50KSB7XG4gICAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIHZhbHVlKTtcbiAgICAgIH07XG4gICAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbih2YWx1ZSwgb3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCB2YWx1ZSwgb3RoZXIpO1xuICAgICAgfTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgICB9O1xuICAgICAgY2FzZSA0OiByZXR1cm4gZnVuY3Rpb24oYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEEgbW9zdGx5LWludGVybmFsIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGNhbGxiYWNrcyB0aGF0IGNhbiBiZSBhcHBsaWVkXG4gIC8vIHRvIGVhY2ggZWxlbWVudCBpbiBhIGNvbGxlY3Rpb24sIHJldHVybmluZyB0aGUgZGVzaXJlZCByZXN1bHQg4oCUIGVpdGhlclxuICAvLyBpZGVudGl0eSwgYW4gYXJiaXRyYXJ5IGNhbGxiYWNrLCBhIHByb3BlcnR5IG1hdGNoZXIsIG9yIGEgcHJvcGVydHkgYWNjZXNzb3IuXG4gIHZhciBjYiA9IGZ1bmN0aW9uKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gXy5pZGVudGl0eTtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKHZhbHVlKSkgcmV0dXJuIG9wdGltaXplQ2IodmFsdWUsIGNvbnRleHQsIGFyZ0NvdW50KTtcbiAgICBpZiAoXy5pc09iamVjdCh2YWx1ZSkpIHJldHVybiBfLm1hdGNoZXIodmFsdWUpO1xuICAgIHJldHVybiBfLnByb3BlcnR5KHZhbHVlKTtcbiAgfTtcbiAgXy5pdGVyYXRlZSA9IGZ1bmN0aW9uKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNiKHZhbHVlLCBjb250ZXh0LCBJbmZpbml0eSk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGFzc2lnbmVyIGZ1bmN0aW9ucy5cbiAgdmFyIGNyZWF0ZUFzc2lnbmVyID0gZnVuY3Rpb24oa2V5c0Z1bmMsIHVuZGVmaW5lZE9ubHkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggPCAyIHx8IG9iaiA9PSBudWxsKSByZXR1cm4gb2JqO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2luZGV4XSxcbiAgICAgICAgICAgIGtleXMgPSBrZXlzRnVuYyhzb3VyY2UpLFxuICAgICAgICAgICAgbCA9IGtleXMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmICghdW5kZWZpbmVkT25seSB8fCBvYmpba2V5XSA9PT0gdm9pZCAwKSBvYmpba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGEgbmV3IG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gYW5vdGhlci5cbiAgdmFyIGJhc2VDcmVhdGUgPSBmdW5jdGlvbihwcm90b3R5cGUpIHtcbiAgICBpZiAoIV8uaXNPYmplY3QocHJvdG90eXBlKSkgcmV0dXJuIHt9O1xuICAgIGlmIChuYXRpdmVDcmVhdGUpIHJldHVybiBuYXRpdmVDcmVhdGUocHJvdG90eXBlKTtcbiAgICBDdG9yLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbiAgICB2YXIgcmVzdWx0ID0gbmV3IEN0b3I7XG4gICAgQ3Rvci5wcm90b3R5cGUgPSBudWxsO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIHByb3BlcnR5ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiA9PSBudWxsID8gdm9pZCAwIDogb2JqW2tleV07XG4gICAgfTtcbiAgfTtcblxuICAvLyBIZWxwZXIgZm9yIGNvbGxlY3Rpb24gbWV0aG9kcyB0byBkZXRlcm1pbmUgd2hldGhlciBhIGNvbGxlY3Rpb25cbiAgLy8gc2hvdWxkIGJlIGl0ZXJhdGVkIGFzIGFuIGFycmF5IG9yIGFzIGFuIG9iamVjdFxuICAvLyBSZWxhdGVkOiBodHRwOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2xlbmd0aFxuICAvLyBBdm9pZHMgYSB2ZXJ5IG5hc3R5IGlPUyA4IEpJVCBidWcgb24gQVJNLTY0LiAjMjA5NFxuICB2YXIgTUFYX0FSUkFZX0lOREVYID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcbiAgdmFyIGdldExlbmd0aCA9IHByb3BlcnR5KCdsZW5ndGgnKTtcbiAgdmFyIGlzQXJyYXlMaWtlID0gZnVuY3Rpb24oY29sbGVjdGlvbikge1xuICAgIHZhciBsZW5ndGggPSBnZXRMZW5ndGgoY29sbGVjdGlvbik7XG4gICAgcmV0dXJuIHR5cGVvZiBsZW5ndGggPT0gJ251bWJlcicgJiYgbGVuZ3RoID49IDAgJiYgbGVuZ3RoIDw9IE1BWF9BUlJBWV9JTkRFWDtcbiAgfTtcblxuICAvLyBDb2xsZWN0aW9uIEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFRoZSBjb3JuZXJzdG9uZSwgYW4gYGVhY2hgIGltcGxlbWVudGF0aW9uLCBha2EgYGZvckVhY2hgLlxuICAvLyBIYW5kbGVzIHJhdyBvYmplY3RzIGluIGFkZGl0aW9uIHRvIGFycmF5LWxpa2VzLiBUcmVhdHMgYWxsXG4gIC8vIHNwYXJzZSBhcnJheS1saWtlcyBhcyBpZiB0aGV5IHdlcmUgZGVuc2UuXG4gIF8uZWFjaCA9IF8uZm9yRWFjaCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciBpLCBsZW5ndGg7XG4gICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHtcbiAgICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVyYXRlZShvYmpbaV0sIGksIG9iaik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZXJhdGVlKG9ialtrZXlzW2ldXSwga2V5c1tpXSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGl0ZXJhdGVlIHRvIGVhY2ggZWxlbWVudC5cbiAgXy5tYXAgPSBfLmNvbGxlY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGgsXG4gICAgICAgIHJlc3VsdHMgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICByZXN1bHRzW2luZGV4XSA9IGl0ZXJhdGVlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgcmVkdWNpbmcgZnVuY3Rpb24gaXRlcmF0aW5nIGxlZnQgb3IgcmlnaHQuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJlZHVjZShkaXIpIHtcbiAgICAvLyBPcHRpbWl6ZWQgaXRlcmF0b3IgZnVuY3Rpb24gYXMgdXNpbmcgYXJndW1lbnRzLmxlbmd0aFxuICAgIC8vIGluIHRoZSBtYWluIGZ1bmN0aW9uIHdpbGwgZGVvcHRpbWl6ZSB0aGUsIHNlZSAjMTk5MS5cbiAgICBmdW5jdGlvbiBpdGVyYXRvcihvYmosIGl0ZXJhdGVlLCBtZW1vLCBrZXlzLCBpbmRleCwgbGVuZ3RoKSB7XG4gICAgICBmb3IgKDsgaW5kZXggPj0gMCAmJiBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gZGlyKSB7XG4gICAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICAgIG1lbW8gPSBpdGVyYXRlZShtZW1vLCBvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgbWVtbywgY29udGV4dCkge1xuICAgICAgaXRlcmF0ZWUgPSBvcHRpbWl6ZUNiKGl0ZXJhdGVlLCBjb250ZXh0LCA0KTtcbiAgICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBkaXIgPiAwID8gMCA6IGxlbmd0aCAtIDE7XG4gICAgICAvLyBEZXRlcm1pbmUgdGhlIGluaXRpYWwgdmFsdWUgaWYgbm9uZSBpcyBwcm92aWRlZC5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykge1xuICAgICAgICBtZW1vID0gb2JqW2tleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4XTtcbiAgICAgICAgaW5kZXggKz0gZGlyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZXJhdG9yKG9iaiwgaXRlcmF0ZWUsIG1lbW8sIGtleXMsIGluZGV4LCBsZW5ndGgpO1xuICAgIH07XG4gIH1cblxuICAvLyAqKlJlZHVjZSoqIGJ1aWxkcyB1cCBhIHNpbmdsZSByZXN1bHQgZnJvbSBhIGxpc3Qgb2YgdmFsdWVzLCBha2EgYGluamVjdGAsXG4gIC8vIG9yIGBmb2xkbGAuXG4gIF8ucmVkdWNlID0gXy5mb2xkbCA9IF8uaW5qZWN0ID0gY3JlYXRlUmVkdWNlKDEpO1xuXG4gIC8vIFRoZSByaWdodC1hc3NvY2lhdGl2ZSB2ZXJzaW9uIG9mIHJlZHVjZSwgYWxzbyBrbm93biBhcyBgZm9sZHJgLlxuICBfLnJlZHVjZVJpZ2h0ID0gXy5mb2xkciA9IGNyZWF0ZVJlZHVjZSgtMSk7XG5cbiAgLy8gUmV0dXJuIHRoZSBmaXJzdCB2YWx1ZSB3aGljaCBwYXNzZXMgYSB0cnV0aCB0ZXN0LiBBbGlhc2VkIGFzIGBkZXRlY3RgLlxuICBfLmZpbmQgPSBfLmRldGVjdCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIGtleTtcbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSkge1xuICAgICAga2V5ID0gXy5maW5kSW5kZXgob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXkgPSBfLmZpbmRLZXkob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIH1cbiAgICBpZiAoa2V5ICE9PSB2b2lkIDAgJiYga2V5ICE9PSAtMSkgcmV0dXJuIG9ialtrZXldO1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgcGFzcyBhIHRydXRoIHRlc3QuXG4gIC8vIEFsaWFzZWQgYXMgYHNlbGVjdGAuXG4gIF8uZmlsdGVyID0gXy5zZWxlY3QgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBsaXN0KSkgcmVzdWx0cy5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBmb3Igd2hpY2ggYSB0cnV0aCB0ZXN0IGZhaWxzLlxuICBfLnJlamVjdCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iaiwgXy5uZWdhdGUoY2IocHJlZGljYXRlKSksIGNvbnRleHQpO1xuICB9O1xuXG4gIC8vIERldGVybWluZSB3aGV0aGVyIGFsbCBvZiB0aGUgZWxlbWVudHMgbWF0Y2ggYSB0cnV0aCB0ZXN0LlxuICAvLyBBbGlhc2VkIGFzIGBhbGxgLlxuICBfLmV2ZXJ5ID0gXy5hbGwgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGg7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICAgIGlmICghcHJlZGljYXRlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgYXQgbGVhc3Qgb25lIGVsZW1lbnQgaW4gdGhlIG9iamVjdCBtYXRjaGVzIGEgdHJ1dGggdGVzdC5cbiAgLy8gQWxpYXNlZCBhcyBgYW55YC5cbiAgXy5zb21lID0gXy5hbnkgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGg7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICAgIGlmIChwcmVkaWNhdGUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiB0aGUgYXJyYXkgb3Igb2JqZWN0IGNvbnRhaW5zIGEgZ2l2ZW4gaXRlbSAodXNpbmcgYD09PWApLlxuICAvLyBBbGlhc2VkIGFzIGBpbmNsdWRlc2AgYW5kIGBpbmNsdWRlYC5cbiAgXy5jb250YWlucyA9IF8uaW5jbHVkZXMgPSBfLmluY2x1ZGUgPSBmdW5jdGlvbihvYmosIGl0ZW0sIGZyb21JbmRleCwgZ3VhcmQpIHtcbiAgICBpZiAoIWlzQXJyYXlMaWtlKG9iaikpIG9iaiA9IF8udmFsdWVzKG9iaik7XG4gICAgaWYgKHR5cGVvZiBmcm9tSW5kZXggIT0gJ251bWJlcicgfHwgZ3VhcmQpIGZyb21JbmRleCA9IDA7XG4gICAgcmV0dXJuIF8uaW5kZXhPZihvYmosIGl0ZW0sIGZyb21JbmRleCkgPj0gMDtcbiAgfTtcblxuICAvLyBJbnZva2UgYSBtZXRob2QgKHdpdGggYXJndW1lbnRzKSBvbiBldmVyeSBpdGVtIGluIGEgY29sbGVjdGlvbi5cbiAgXy5pbnZva2UgPSBmdW5jdGlvbihvYmosIG1ldGhvZCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHZhciBpc0Z1bmMgPSBfLmlzRnVuY3Rpb24obWV0aG9kKTtcbiAgICByZXR1cm4gXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIGZ1bmMgPSBpc0Z1bmMgPyBtZXRob2QgOiB2YWx1ZVttZXRob2RdO1xuICAgICAgcmV0dXJuIGZ1bmMgPT0gbnVsbCA/IGZ1bmMgOiBmdW5jLmFwcGx5KHZhbHVlLCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBtYXBgOiBmZXRjaGluZyBhIHByb3BlcnR5LlxuICBfLnBsdWNrID0gZnVuY3Rpb24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gXy5tYXAob2JqLCBfLnByb3BlcnR5KGtleSkpO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYGZpbHRlcmA6IHNlbGVjdGluZyBvbmx5IG9iamVjdHNcbiAgLy8gY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy53aGVyZSA9IGZ1bmN0aW9uKG9iaiwgYXR0cnMpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIob2JqLCBfLm1hdGNoZXIoYXR0cnMpKTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBmaW5kYDogZ2V0dGluZyB0aGUgZmlyc3Qgb2JqZWN0XG4gIC8vIGNvbnRhaW5pbmcgc3BlY2lmaWMgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8uZmluZFdoZXJlID0gZnVuY3Rpb24ob2JqLCBhdHRycykge1xuICAgIHJldHVybiBfLmZpbmQob2JqLCBfLm1hdGNoZXIoYXR0cnMpKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG1heGltdW0gZWxlbWVudCAob3IgZWxlbWVudC1iYXNlZCBjb21wdXRhdGlvbikuXG4gIF8ubWF4ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQgPSAtSW5maW5pdHksIGxhc3RDb21wdXRlZCA9IC1JbmZpbml0eSxcbiAgICAgICAgdmFsdWUsIGNvbXB1dGVkO1xuICAgIGlmIChpdGVyYXRlZSA9PSBudWxsICYmIG9iaiAhPSBudWxsKSB7XG4gICAgICBvYmogPSBpc0FycmF5TGlrZShvYmopID8gb2JqIDogXy52YWx1ZXMob2JqKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSBvYmpbaV07XG4gICAgICAgIGlmICh2YWx1ZSA+IHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgICAgXy5lYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUodmFsdWUsIGluZGV4LCBsaXN0KTtcbiAgICAgICAgaWYgKGNvbXB1dGVkID4gbGFzdENvbXB1dGVkIHx8IGNvbXB1dGVkID09PSAtSW5maW5pdHkgJiYgcmVzdWx0ID09PSAtSW5maW5pdHkpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBsYXN0Q29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtaW5pbXVtIGVsZW1lbnQgKG9yIGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICBfLm1pbiA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0ID0gSW5maW5pdHksIGxhc3RDb21wdXRlZCA9IEluZmluaXR5LFxuICAgICAgICB2YWx1ZSwgY29tcHV0ZWQ7XG4gICAgaWYgKGl0ZXJhdGVlID09IG51bGwgJiYgb2JqICE9IG51bGwpIHtcbiAgICAgIG9iaiA9IGlzQXJyYXlMaWtlKG9iaikgPyBvYmogOiBfLnZhbHVlcyhvYmopO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IG9ialtpXTtcbiAgICAgICAgaWYgKHZhbHVlIDwgcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSh2YWx1ZSwgaW5kZXgsIGxpc3QpO1xuICAgICAgICBpZiAoY29tcHV0ZWQgPCBsYXN0Q29tcHV0ZWQgfHwgY29tcHV0ZWQgPT09IEluZmluaXR5ICYmIHJlc3VsdCA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBsYXN0Q29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gU2h1ZmZsZSBhIGNvbGxlY3Rpb24sIHVzaW5nIHRoZSBtb2Rlcm4gdmVyc2lvbiBvZiB0aGVcbiAgLy8gW0Zpc2hlci1ZYXRlcyBzaHVmZmxlXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Zpc2hlcuKAk1lhdGVzX3NodWZmbGUpLlxuICBfLnNodWZmbGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgc2V0ID0gaXNBcnJheUxpa2Uob2JqKSA/IG9iaiA6IF8udmFsdWVzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IHNldC5sZW5ndGg7XG4gICAgdmFyIHNodWZmbGVkID0gQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDAsIHJhbmQ7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICByYW5kID0gXy5yYW5kb20oMCwgaW5kZXgpO1xuICAgICAgaWYgKHJhbmQgIT09IGluZGV4KSBzaHVmZmxlZFtpbmRleF0gPSBzaHVmZmxlZFtyYW5kXTtcbiAgICAgIHNodWZmbGVkW3JhbmRdID0gc2V0W2luZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIHNodWZmbGVkO1xuICB9O1xuXG4gIC8vIFNhbXBsZSAqKm4qKiByYW5kb20gdmFsdWVzIGZyb20gYSBjb2xsZWN0aW9uLlxuICAvLyBJZiAqKm4qKiBpcyBub3Qgc3BlY2lmaWVkLCByZXR1cm5zIGEgc2luZ2xlIHJhbmRvbSBlbGVtZW50LlxuICAvLyBUaGUgaW50ZXJuYWwgYGd1YXJkYCBhcmd1bWVudCBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBtYXBgLlxuICBfLnNhbXBsZSA9IGZ1bmN0aW9uKG9iaiwgbiwgZ3VhcmQpIHtcbiAgICBpZiAobiA9PSBudWxsIHx8IGd1YXJkKSB7XG4gICAgICBpZiAoIWlzQXJyYXlMaWtlKG9iaikpIG9iaiA9IF8udmFsdWVzKG9iaik7XG4gICAgICByZXR1cm4gb2JqW18ucmFuZG9tKG9iai5sZW5ndGggLSAxKV07XG4gICAgfVxuICAgIHJldHVybiBfLnNodWZmbGUob2JqKS5zbGljZSgwLCBNYXRoLm1heCgwLCBuKSk7XG4gIH07XG5cbiAgLy8gU29ydCB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uIHByb2R1Y2VkIGJ5IGFuIGl0ZXJhdGVlLlxuICBfLnNvcnRCeSA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICByZXR1cm4gXy5wbHVjayhfLm1hcChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIGNyaXRlcmlhOiBpdGVyYXRlZSh2YWx1ZSwgaW5kZXgsIGxpc3QpXG4gICAgICB9O1xuICAgIH0pLnNvcnQoZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICAgIHZhciBhID0gbGVmdC5jcml0ZXJpYTtcbiAgICAgIHZhciBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgICBpZiAoYSAhPT0gYikge1xuICAgICAgICBpZiAoYSA+IGIgfHwgYSA9PT0gdm9pZCAwKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKGEgPCBiIHx8IGIgPT09IHZvaWQgMCkgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxlZnQuaW5kZXggLSByaWdodC5pbmRleDtcbiAgICB9KSwgJ3ZhbHVlJyk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdXNlZCBmb3IgYWdncmVnYXRlIFwiZ3JvdXAgYnlcIiBvcGVyYXRpb25zLlxuICB2YXIgZ3JvdXAgPSBmdW5jdGlvbihiZWhhdmlvcikge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgICB2YXIga2V5ID0gaXRlcmF0ZWUodmFsdWUsIGluZGV4LCBvYmopO1xuICAgICAgICBiZWhhdmlvcihyZXN1bHQsIHZhbHVlLCBrZXkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gR3JvdXBzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24uIFBhc3MgZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZVxuICAvLyB0byBncm91cCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGNyaXRlcmlvbi5cbiAgXy5ncm91cEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gICAgaWYgKF8uaGFzKHJlc3VsdCwga2V5KSkgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7IGVsc2UgcmVzdWx0W2tleV0gPSBbdmFsdWVdO1xuICB9KTtcblxuICAvLyBJbmRleGVzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24sIHNpbWlsYXIgdG8gYGdyb3VwQnlgLCBidXQgZm9yXG4gIC8vIHdoZW4geW91IGtub3cgdGhhdCB5b3VyIGluZGV4IHZhbHVlcyB3aWxsIGJlIHVuaXF1ZS5cbiAgXy5pbmRleEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgfSk7XG5cbiAgLy8gQ291bnRzIGluc3RhbmNlcyBvZiBhbiBvYmplY3QgdGhhdCBncm91cCBieSBhIGNlcnRhaW4gY3JpdGVyaW9uLiBQYXNzXG4gIC8vIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGUgdG8gY291bnQgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAvLyBjcml0ZXJpb24uXG4gIF8uY291bnRCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICAgIGlmIChfLmhhcyhyZXN1bHQsIGtleSkpIHJlc3VsdFtrZXldKys7IGVsc2UgcmVzdWx0W2tleV0gPSAxO1xuICB9KTtcblxuICAvLyBTYWZlbHkgY3JlYXRlIGEgcmVhbCwgbGl2ZSBhcnJheSBmcm9tIGFueXRoaW5nIGl0ZXJhYmxlLlxuICBfLnRvQXJyYXkgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIFtdO1xuICAgIGlmIChfLmlzQXJyYXkob2JqKSkgcmV0dXJuIHNsaWNlLmNhbGwob2JqKTtcbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSkgcmV0dXJuIF8ubWFwKG9iaiwgXy5pZGVudGl0eSk7XG4gICAgcmV0dXJuIF8udmFsdWVzKG9iaik7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gYW4gb2JqZWN0LlxuICBfLnNpemUgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiAwO1xuICAgIHJldHVybiBpc0FycmF5TGlrZShvYmopID8gb2JqLmxlbmd0aCA6IF8ua2V5cyhvYmopLmxlbmd0aDtcbiAgfTtcblxuICAvLyBTcGxpdCBhIGNvbGxlY3Rpb24gaW50byB0d28gYXJyYXlzOiBvbmUgd2hvc2UgZWxlbWVudHMgYWxsIHNhdGlzZnkgdGhlIGdpdmVuXG4gIC8vIHByZWRpY2F0ZSwgYW5kIG9uZSB3aG9zZSBlbGVtZW50cyBhbGwgZG8gbm90IHNhdGlzZnkgdGhlIHByZWRpY2F0ZS5cbiAgXy5wYXJ0aXRpb24gPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIHBhc3MgPSBbXSwgZmFpbCA9IFtdO1xuICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBrZXksIG9iaikge1xuICAgICAgKHByZWRpY2F0ZSh2YWx1ZSwga2V5LCBvYmopID8gcGFzcyA6IGZhaWwpLnB1c2godmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBbcGFzcywgZmFpbF07XG4gIH07XG5cbiAgLy8gQXJyYXkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEdldCB0aGUgZmlyc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgZmlyc3QgTlxuICAvLyB2YWx1ZXMgaW4gdGhlIGFycmF5LiBBbGlhc2VkIGFzIGBoZWFkYCBhbmQgYHRha2VgLiBUaGUgKipndWFyZCoqIGNoZWNrXG4gIC8vIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbiAgXy5maXJzdCA9IF8uaGVhZCA9IF8udGFrZSA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHJldHVybiBhcnJheVswXTtcbiAgICByZXR1cm4gXy5pbml0aWFsKGFycmF5LCBhcnJheS5sZW5ndGggLSBuKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBsYXN0IGVudHJ5IG9mIHRoZSBhcnJheS4gRXNwZWNpYWxseSB1c2VmdWwgb25cbiAgLy8gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gYWxsIHRoZSB2YWx1ZXMgaW5cbiAgLy8gdGhlIGFycmF5LCBleGNsdWRpbmcgdGhlIGxhc3QgTi5cbiAgXy5pbml0aWFsID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIDAsIE1hdGgubWF4KDAsIGFycmF5Lmxlbmd0aCAtIChuID09IG51bGwgfHwgZ3VhcmQgPyAxIDogbikpKTtcbiAgfTtcblxuICAvLyBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgbGFzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuXG4gIF8ubGFzdCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gXy5yZXN0KGFycmF5LCBNYXRoLm1heCgwLCBhcnJheS5sZW5ndGggLSBuKSk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgZmlyc3QgZW50cnkgb2YgdGhlIGFycmF5LiBBbGlhc2VkIGFzIGB0YWlsYCBhbmQgYGRyb3BgLlxuICAvLyBFc3BlY2lhbGx5IHVzZWZ1bCBvbiB0aGUgYXJndW1lbnRzIG9iamVjdC4gUGFzc2luZyBhbiAqKm4qKiB3aWxsIHJldHVyblxuICAvLyB0aGUgcmVzdCBOIHZhbHVlcyBpbiB0aGUgYXJyYXkuXG4gIF8ucmVzdCA9IF8udGFpbCA9IF8uZHJvcCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCBuID09IG51bGwgfHwgZ3VhcmQgPyAxIDogbik7XG4gIH07XG5cbiAgLy8gVHJpbSBvdXQgYWxsIGZhbHN5IHZhbHVlcyBmcm9tIGFuIGFycmF5LlxuICBfLmNvbXBhY3QgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBfLmZpbHRlcihhcnJheSwgXy5pZGVudGl0eSk7XG4gIH07XG5cbiAgLy8gSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gb2YgYSByZWN1cnNpdmUgYGZsYXR0ZW5gIGZ1bmN0aW9uLlxuICB2YXIgZmxhdHRlbiA9IGZ1bmN0aW9uKGlucHV0LCBzaGFsbG93LCBzdHJpY3QsIHN0YXJ0SW5kZXgpIHtcbiAgICB2YXIgb3V0cHV0ID0gW10sIGlkeCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0SW5kZXggfHwgMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGlucHV0KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdmFsdWUgPSBpbnB1dFtpXTtcbiAgICAgIGlmIChpc0FycmF5TGlrZSh2YWx1ZSkgJiYgKF8uaXNBcnJheSh2YWx1ZSkgfHwgXy5pc0FyZ3VtZW50cyh2YWx1ZSkpKSB7XG4gICAgICAgIC8vZmxhdHRlbiBjdXJyZW50IGxldmVsIG9mIGFycmF5IG9yIGFyZ3VtZW50cyBvYmplY3RcbiAgICAgICAgaWYgKCFzaGFsbG93KSB2YWx1ZSA9IGZsYXR0ZW4odmFsdWUsIHNoYWxsb3csIHN0cmljdCk7XG4gICAgICAgIHZhciBqID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICBvdXRwdXQubGVuZ3RoICs9IGxlbjtcbiAgICAgICAgd2hpbGUgKGogPCBsZW4pIHtcbiAgICAgICAgICBvdXRwdXRbaWR4KytdID0gdmFsdWVbaisrXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghc3RyaWN0KSB7XG4gICAgICAgIG91dHB1dFtpZHgrK10gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxuICAvLyBGbGF0dGVuIG91dCBhbiBhcnJheSwgZWl0aGVyIHJlY3Vyc2l2ZWx5IChieSBkZWZhdWx0KSwgb3IganVzdCBvbmUgbGV2ZWwuXG4gIF8uZmxhdHRlbiA9IGZ1bmN0aW9uKGFycmF5LCBzaGFsbG93KSB7XG4gICAgcmV0dXJuIGZsYXR0ZW4oYXJyYXksIHNoYWxsb3csIGZhbHNlKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSB2ZXJzaW9uIG9mIHRoZSBhcnJheSB0aGF0IGRvZXMgbm90IGNvbnRhaW4gdGhlIHNwZWNpZmllZCB2YWx1ZShzKS5cbiAgXy53aXRob3V0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gXy5kaWZmZXJlbmNlKGFycmF5LCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIHRoZSBhcnJheS4gSWYgdGhlIGFycmF5IGhhcyBhbHJlYWR5XG4gIC8vIGJlZW4gc29ydGVkLCB5b3UgaGF2ZSB0aGUgb3B0aW9uIG9mIHVzaW5nIGEgZmFzdGVyIGFsZ29yaXRobS5cbiAgLy8gQWxpYXNlZCBhcyBgdW5pcXVlYC5cbiAgXy51bmlxID0gXy51bmlxdWUgPSBmdW5jdGlvbihhcnJheSwgaXNTb3J0ZWQsIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaWYgKCFfLmlzQm9vbGVhbihpc1NvcnRlZCkpIHtcbiAgICAgIGNvbnRleHQgPSBpdGVyYXRlZTtcbiAgICAgIGl0ZXJhdGVlID0gaXNTb3J0ZWQ7XG4gICAgICBpc1NvcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXRlcmF0ZWUgIT0gbnVsbCkgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBzZWVuID0gW107XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZhbHVlID0gYXJyYXlbaV0sXG4gICAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlLCBpLCBhcnJheSkgOiB2YWx1ZTtcbiAgICAgIGlmIChpc1NvcnRlZCkge1xuICAgICAgICBpZiAoIWkgfHwgc2VlbiAhPT0gY29tcHV0ZWQpIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgICAgc2VlbiA9IGNvbXB1dGVkO1xuICAgICAgfSBlbHNlIGlmIChpdGVyYXRlZSkge1xuICAgICAgICBpZiAoIV8uY29udGFpbnMoc2VlbiwgY29tcHV0ZWQpKSB7XG4gICAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIV8uY29udGFpbnMocmVzdWx0LCB2YWx1ZSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgdW5pb246IGVhY2ggZGlzdGluY3QgZWxlbWVudCBmcm9tIGFsbCBvZlxuICAvLyB0aGUgcGFzc2VkLWluIGFycmF5cy5cbiAgXy51bmlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfLnVuaXEoZmxhdHRlbihhcmd1bWVudHMsIHRydWUsIHRydWUpKTtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgZXZlcnkgaXRlbSBzaGFyZWQgYmV0d2VlbiBhbGwgdGhlXG4gIC8vIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8uaW50ZXJzZWN0aW9uID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGFyZ3NMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gYXJyYXlbaV07XG4gICAgICBpZiAoXy5jb250YWlucyhyZXN1bHQsIGl0ZW0pKSBjb250aW51ZTtcbiAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgYXJnc0xlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICghXy5jb250YWlucyhhcmd1bWVudHNbal0sIGl0ZW0pKSBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChqID09PSBhcmdzTGVuZ3RoKSByZXN1bHQucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBUYWtlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gb25lIGFycmF5IGFuZCBhIG51bWJlciBvZiBvdGhlciBhcnJheXMuXG4gIC8vIE9ubHkgdGhlIGVsZW1lbnRzIHByZXNlbnQgaW4ganVzdCB0aGUgZmlyc3QgYXJyYXkgd2lsbCByZW1haW4uXG4gIF8uZGlmZmVyZW5jZSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIHJlc3QgPSBmbGF0dGVuKGFyZ3VtZW50cywgdHJ1ZSwgdHJ1ZSwgMSk7XG4gICAgcmV0dXJuIF8uZmlsdGVyKGFycmF5LCBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICByZXR1cm4gIV8uY29udGFpbnMocmVzdCwgdmFsdWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIFppcCB0b2dldGhlciBtdWx0aXBsZSBsaXN0cyBpbnRvIGEgc2luZ2xlIGFycmF5IC0tIGVsZW1lbnRzIHRoYXQgc2hhcmVcbiAgLy8gYW4gaW5kZXggZ28gdG9nZXRoZXIuXG4gIF8uemlwID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF8udW56aXAoYXJndW1lbnRzKTtcbiAgfTtcblxuICAvLyBDb21wbGVtZW50IG9mIF8uemlwLiBVbnppcCBhY2NlcHRzIGFuIGFycmF5IG9mIGFycmF5cyBhbmQgZ3JvdXBzXG4gIC8vIGVhY2ggYXJyYXkncyBlbGVtZW50cyBvbiBzaGFyZWQgaW5kaWNlc1xuICBfLnVuemlwID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkgJiYgXy5tYXgoYXJyYXksIGdldExlbmd0aCkubGVuZ3RoIHx8IDA7XG4gICAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICByZXN1bHRbaW5kZXhdID0gXy5wbHVjayhhcnJheSwgaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIENvbnZlcnRzIGxpc3RzIGludG8gb2JqZWN0cy4gUGFzcyBlaXRoZXIgYSBzaW5nbGUgYXJyYXkgb2YgYFtrZXksIHZhbHVlXWBcbiAgLy8gcGFpcnMsIG9yIHR3byBwYXJhbGxlbCBhcnJheXMgb2YgdGhlIHNhbWUgbGVuZ3RoIC0tIG9uZSBvZiBrZXlzLCBhbmQgb25lIG9mXG4gIC8vIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlcy5cbiAgXy5vYmplY3QgPSBmdW5jdGlvbihsaXN0LCB2YWx1ZXMpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChsaXN0KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldXSA9IHZhbHVlc1tpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldWzBdXSA9IGxpc3RbaV1bMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gR2VuZXJhdG9yIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgZmluZEluZGV4IGFuZCBmaW5kTGFzdEluZGV4IGZ1bmN0aW9uc1xuICBmdW5jdGlvbiBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlcihkaXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oYXJyYXksIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICAgIHZhciBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpO1xuICAgICAgdmFyIGluZGV4ID0gZGlyID4gMCA/IDAgOiBsZW5ndGggLSAxO1xuICAgICAgZm9yICg7IGluZGV4ID49IDAgJiYgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IGRpcikge1xuICAgICAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSBmaXJzdCBpbmRleCBvbiBhbiBhcnJheS1saWtlIHRoYXQgcGFzc2VzIGEgcHJlZGljYXRlIHRlc3RcbiAgXy5maW5kSW5kZXggPSBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlcigxKTtcbiAgXy5maW5kTGFzdEluZGV4ID0gY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIoLTEpO1xuXG4gIC8vIFVzZSBhIGNvbXBhcmF0b3IgZnVuY3Rpb24gdG8gZmlndXJlIG91dCB0aGUgc21hbGxlc3QgaW5kZXggYXQgd2hpY2hcbiAgLy8gYW4gb2JqZWN0IHNob3VsZCBiZSBpbnNlcnRlZCBzbyBhcyB0byBtYWludGFpbiBvcmRlci4gVXNlcyBiaW5hcnkgc2VhcmNoLlxuICBfLnNvcnRlZEluZGV4ID0gZnVuY3Rpb24oYXJyYXksIG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0LCAxKTtcbiAgICB2YXIgdmFsdWUgPSBpdGVyYXRlZShvYmopO1xuICAgIHZhciBsb3cgPSAwLCBoaWdoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgICAgdmFyIG1pZCA9IE1hdGguZmxvb3IoKGxvdyArIGhpZ2gpIC8gMik7XG4gICAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbbWlkXSkgPCB2YWx1ZSkgbG93ID0gbWlkICsgMTsgZWxzZSBoaWdoID0gbWlkO1xuICAgIH1cbiAgICByZXR1cm4gbG93O1xuICB9O1xuXG4gIC8vIEdlbmVyYXRvciBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIGluZGV4T2YgYW5kIGxhc3RJbmRleE9mIGZ1bmN0aW9uc1xuICBmdW5jdGlvbiBjcmVhdGVJbmRleEZpbmRlcihkaXIsIHByZWRpY2F0ZUZpbmQsIHNvcnRlZEluZGV4KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBpZHgpIHtcbiAgICAgIHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICAgIGlmICh0eXBlb2YgaWR4ID09ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChkaXIgPiAwKSB7XG4gICAgICAgICAgICBpID0gaWR4ID49IDAgPyBpZHggOiBNYXRoLm1heChpZHggKyBsZW5ndGgsIGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGVuZ3RoID0gaWR4ID49IDAgPyBNYXRoLm1pbihpZHggKyAxLCBsZW5ndGgpIDogaWR4ICsgbGVuZ3RoICsgMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzb3J0ZWRJbmRleCAmJiBpZHggJiYgbGVuZ3RoKSB7XG4gICAgICAgIGlkeCA9IHNvcnRlZEluZGV4KGFycmF5LCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFycmF5W2lkeF0gPT09IGl0ZW0gPyBpZHggOiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtICE9PSBpdGVtKSB7XG4gICAgICAgIGlkeCA9IHByZWRpY2F0ZUZpbmQoc2xpY2UuY2FsbChhcnJheSwgaSwgbGVuZ3RoKSwgXy5pc05hTik7XG4gICAgICAgIHJldHVybiBpZHggPj0gMCA/IGlkeCArIGkgOiAtMTtcbiAgICAgIH1cbiAgICAgIGZvciAoaWR4ID0gZGlyID4gMCA/IGkgOiBsZW5ndGggLSAxOyBpZHggPj0gMCAmJiBpZHggPCBsZW5ndGg7IGlkeCArPSBkaXIpIHtcbiAgICAgICAgaWYgKGFycmF5W2lkeF0gPT09IGl0ZW0pIHJldHVybiBpZHg7XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfTtcbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYW4gaXRlbSBpbiBhbiBhcnJheSxcbiAgLy8gb3IgLTEgaWYgdGhlIGl0ZW0gaXMgbm90IGluY2x1ZGVkIGluIHRoZSBhcnJheS5cbiAgLy8gSWYgdGhlIGFycmF5IGlzIGxhcmdlIGFuZCBhbHJlYWR5IGluIHNvcnQgb3JkZXIsIHBhc3MgYHRydWVgXG4gIC8vIGZvciAqKmlzU29ydGVkKiogdG8gdXNlIGJpbmFyeSBzZWFyY2guXG4gIF8uaW5kZXhPZiA9IGNyZWF0ZUluZGV4RmluZGVyKDEsIF8uZmluZEluZGV4LCBfLnNvcnRlZEluZGV4KTtcbiAgXy5sYXN0SW5kZXhPZiA9IGNyZWF0ZUluZGV4RmluZGVyKC0xLCBfLmZpbmRMYXN0SW5kZXgpO1xuXG4gIC8vIEdlbmVyYXRlIGFuIGludGVnZXIgQXJyYXkgY29udGFpbmluZyBhbiBhcml0aG1ldGljIHByb2dyZXNzaW9uLiBBIHBvcnQgb2ZcbiAgLy8gdGhlIG5hdGl2ZSBQeXRob24gYHJhbmdlKClgIGZ1bmN0aW9uLiBTZWVcbiAgLy8gW3RoZSBQeXRob24gZG9jdW1lbnRhdGlvbl0oaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L2Z1bmN0aW9ucy5odG1sI3JhbmdlKS5cbiAgXy5yYW5nZSA9IGZ1bmN0aW9uKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgaWYgKHN0b3AgPT0gbnVsbCkge1xuICAgICAgc3RvcCA9IHN0YXJ0IHx8IDA7XG4gICAgICBzdGFydCA9IDA7XG4gICAgfVxuICAgIHN0ZXAgPSBzdGVwIHx8IDE7XG5cbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoTWF0aC5jZWlsKChzdG9wIC0gc3RhcnQpIC8gc3RlcCksIDApO1xuICAgIHZhciByYW5nZSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBsZW5ndGg7IGlkeCsrLCBzdGFydCArPSBzdGVwKSB7XG4gICAgICByYW5nZVtpZHhdID0gc3RhcnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIChhaGVtKSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGV4ZWN1dGUgYSBmdW5jdGlvbiBhcyBhIGNvbnN0cnVjdG9yXG4gIC8vIG9yIGEgbm9ybWFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3ZpZGVkIGFyZ3VtZW50c1xuICB2YXIgZXhlY3V0ZUJvdW5kID0gZnVuY3Rpb24oc291cmNlRnVuYywgYm91bmRGdW5jLCBjb250ZXh0LCBjYWxsaW5nQ29udGV4dCwgYXJncykge1xuICAgIGlmICghKGNhbGxpbmdDb250ZXh0IGluc3RhbmNlb2YgYm91bmRGdW5jKSkgcmV0dXJuIHNvdXJjZUZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgdmFyIHNlbGYgPSBiYXNlQ3JlYXRlKHNvdXJjZUZ1bmMucHJvdG90eXBlKTtcbiAgICB2YXIgcmVzdWx0ID0gc291cmNlRnVuYy5hcHBseShzZWxmLCBhcmdzKTtcbiAgICBpZiAoXy5pc09iamVjdChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIGZ1bmN0aW9uIGJvdW5kIHRvIGEgZ2l2ZW4gb2JqZWN0IChhc3NpZ25pbmcgYHRoaXNgLCBhbmQgYXJndW1lbnRzLFxuICAvLyBvcHRpb25hbGx5KS4gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYEZ1bmN0aW9uLmJpbmRgIGlmXG4gIC8vIGF2YWlsYWJsZS5cbiAgXy5iaW5kID0gZnVuY3Rpb24oZnVuYywgY29udGV4dCkge1xuICAgIGlmIChuYXRpdmVCaW5kICYmIGZ1bmMuYmluZCA9PT0gbmF0aXZlQmluZCkgcmV0dXJuIG5hdGl2ZUJpbmQuYXBwbHkoZnVuYywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICBpZiAoIV8uaXNGdW5jdGlvbihmdW5jKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQmluZCBtdXN0IGJlIGNhbGxlZCBvbiBhIGZ1bmN0aW9uJyk7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgdmFyIGJvdW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhlY3V0ZUJvdW5kKGZ1bmMsIGJvdW5kLCBjb250ZXh0LCB0aGlzLCBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICB9O1xuICAgIHJldHVybiBib3VuZDtcbiAgfTtcblxuICAvLyBQYXJ0aWFsbHkgYXBwbHkgYSBmdW5jdGlvbiBieSBjcmVhdGluZyBhIHZlcnNpb24gdGhhdCBoYXMgaGFkIHNvbWUgb2YgaXRzXG4gIC8vIGFyZ3VtZW50cyBwcmUtZmlsbGVkLCB3aXRob3V0IGNoYW5naW5nIGl0cyBkeW5hbWljIGB0aGlzYCBjb250ZXh0LiBfIGFjdHNcbiAgLy8gYXMgYSBwbGFjZWhvbGRlciwgYWxsb3dpbmcgYW55IGNvbWJpbmF0aW9uIG9mIGFyZ3VtZW50cyB0byBiZSBwcmUtZmlsbGVkLlxuICBfLnBhcnRpYWwgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgYm91bmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IDAsIGxlbmd0aCA9IGJvdW5kQXJncy5sZW5ndGg7XG4gICAgICB2YXIgYXJncyA9IEFycmF5KGxlbmd0aCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFyZ3NbaV0gPSBib3VuZEFyZ3NbaV0gPT09IF8gPyBhcmd1bWVudHNbcG9zaXRpb24rK10gOiBib3VuZEFyZ3NbaV07XG4gICAgICB9XG4gICAgICB3aGlsZSAocG9zaXRpb24gPCBhcmd1bWVudHMubGVuZ3RoKSBhcmdzLnB1c2goYXJndW1lbnRzW3Bvc2l0aW9uKytdKTtcbiAgICAgIHJldHVybiBleGVjdXRlQm91bmQoZnVuYywgYm91bmQsIHRoaXMsIHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gICAgcmV0dXJuIGJvdW5kO1xuICB9O1xuXG4gIC8vIEJpbmQgYSBudW1iZXIgb2YgYW4gb2JqZWN0J3MgbWV0aG9kcyB0byB0aGF0IG9iamVjdC4gUmVtYWluaW5nIGFyZ3VtZW50c1xuICAvLyBhcmUgdGhlIG1ldGhvZCBuYW1lcyB0byBiZSBib3VuZC4gVXNlZnVsIGZvciBlbnN1cmluZyB0aGF0IGFsbCBjYWxsYmFja3NcbiAgLy8gZGVmaW5lZCBvbiBhbiBvYmplY3QgYmVsb25nIHRvIGl0LlxuICBfLmJpbmRBbGwgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgaSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCwga2V5O1xuICAgIGlmIChsZW5ndGggPD0gMSkgdGhyb3cgbmV3IEVycm9yKCdiaW5kQWxsIG11c3QgYmUgcGFzc2VkIGZ1bmN0aW9uIG5hbWVzJyk7XG4gICAgZm9yIChpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBhcmd1bWVudHNbaV07XG4gICAgICBvYmpba2V5XSA9IF8uYmluZChvYmpba2V5XSwgb2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBNZW1vaXplIGFuIGV4cGVuc2l2ZSBmdW5jdGlvbiBieSBzdG9yaW5nIGl0cyByZXN1bHRzLlxuICBfLm1lbW9pemUgPSBmdW5jdGlvbihmdW5jLCBoYXNoZXIpIHtcbiAgICB2YXIgbWVtb2l6ZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIGNhY2hlID0gbWVtb2l6ZS5jYWNoZTtcbiAgICAgIHZhciBhZGRyZXNzID0gJycgKyAoaGFzaGVyID8gaGFzaGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBrZXkpO1xuICAgICAgaWYgKCFfLmhhcyhjYWNoZSwgYWRkcmVzcykpIGNhY2hlW2FkZHJlc3NdID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIGNhY2hlW2FkZHJlc3NdO1xuICAgIH07XG4gICAgbWVtb2l6ZS5jYWNoZSA9IHt9O1xuICAgIHJldHVybiBtZW1vaXplO1xuICB9O1xuXG4gIC8vIERlbGF5cyBhIGZ1bmN0aW9uIGZvciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgYW5kIHRoZW4gY2FsbHNcbiAgLy8gaXQgd2l0aCB0aGUgYXJndW1lbnRzIHN1cHBsaWVkLlxuICBfLmRlbGF5ID0gZnVuY3Rpb24oZnVuYywgd2FpdCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9LCB3YWl0KTtcbiAgfTtcblxuICAvLyBEZWZlcnMgYSBmdW5jdGlvbiwgc2NoZWR1bGluZyBpdCB0byBydW4gYWZ0ZXIgdGhlIGN1cnJlbnQgY2FsbCBzdGFjayBoYXNcbiAgLy8gY2xlYXJlZC5cbiAgXy5kZWZlciA9IF8ucGFydGlhbChfLmRlbGF5LCBfLCAxKTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBhdCBtb3N0IG9uY2VcbiAgLy8gZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuIE5vcm1hbGx5LCB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHdpbGwgcnVuXG4gIC8vIGFzIG11Y2ggYXMgaXQgY2FuLCB3aXRob3V0IGV2ZXIgZ29pbmcgbW9yZSB0aGFuIG9uY2UgcGVyIGB3YWl0YCBkdXJhdGlvbjtcbiAgLy8gYnV0IGlmIHlvdSdkIGxpa2UgdG8gZGlzYWJsZSB0aGUgZXhlY3V0aW9uIG9uIHRoZSBsZWFkaW5nIGVkZ2UsIHBhc3NcbiAgLy8gYHtsZWFkaW5nOiBmYWxzZX1gLiBUbyBkaXNhYmxlIGV4ZWN1dGlvbiBvbiB0aGUgdHJhaWxpbmcgZWRnZSwgZGl0dG8uXG4gIF8udGhyb3R0bGUgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQsIGFyZ3MsIHJlc3VsdDtcbiAgICB2YXIgdGltZW91dCA9IG51bGw7XG4gICAgdmFyIHByZXZpb3VzID0gMDtcbiAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBfLm5vdygpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbm93ID0gXy5ub3coKTtcbiAgICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBub3c7XG4gICAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XG4gICAgICBjb250ZXh0ID0gdGhpcztcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBpZiAocmVtYWluaW5nIDw9IDAgfHwgcmVtYWluaW5nID4gd2FpdCkge1xuICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3RcbiAgLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICAvLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAgLy8gbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbiAgXy5kZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIHZhciB0aW1lb3V0LCBhcmdzLCBjb250ZXh0LCB0aW1lc3RhbXAsIHJlc3VsdDtcblxuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxhc3QgPSBfLm5vdygpIC0gdGltZXN0YW1wO1xuXG4gICAgICBpZiAobGFzdCA8IHdhaXQgJiYgbGFzdCA+PSAwKSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHRpbWVzdGFtcCA9IF8ubm93KCk7XG4gICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgIGlmICghdGltZW91dCkgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3QgZnVuY3Rpb24gcGFzc2VkIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSBzZWNvbmQsXG4gIC8vIGFsbG93aW5nIHlvdSB0byBhZGp1c3QgYXJndW1lbnRzLCBydW4gY29kZSBiZWZvcmUgYW5kIGFmdGVyLCBhbmRcbiAgLy8gY29uZGl0aW9uYWxseSBleGVjdXRlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cbiAgXy53cmFwID0gZnVuY3Rpb24oZnVuYywgd3JhcHBlcikge1xuICAgIHJldHVybiBfLnBhcnRpYWwod3JhcHBlciwgZnVuYyk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIG5lZ2F0ZWQgdmVyc2lvbiBvZiB0aGUgcGFzc2VkLWluIHByZWRpY2F0ZS5cbiAgXy5uZWdhdGUgPSBmdW5jdGlvbihwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gIXByZWRpY2F0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgaXMgdGhlIGNvbXBvc2l0aW9uIG9mIGEgbGlzdCBvZiBmdW5jdGlvbnMsIGVhY2hcbiAgLy8gY29uc3VtaW5nIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHRoYXQgZm9sbG93cy5cbiAgXy5jb21wb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIHN0YXJ0ID0gYXJncy5sZW5ndGggLSAxO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpID0gc3RhcnQ7XG4gICAgICB2YXIgcmVzdWx0ID0gYXJnc1tzdGFydF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHdoaWxlIChpLS0pIHJlc3VsdCA9IGFyZ3NbaV0uY2FsbCh0aGlzLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCBvbiBhbmQgYWZ0ZXIgdGhlIE50aCBjYWxsLlxuICBfLmFmdGVyID0gZnVuY3Rpb24odGltZXMsIGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoLS10aW1lcyA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCB1cCB0byAoYnV0IG5vdCBpbmNsdWRpbmcpIHRoZSBOdGggY2FsbC5cbiAgXy5iZWZvcmUgPSBmdW5jdGlvbih0aW1lcywgZnVuYykge1xuICAgIHZhciBtZW1vO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgtLXRpbWVzID4gMCkge1xuICAgICAgICBtZW1vID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWVzIDw9IDEpIGZ1bmMgPSBudWxsO1xuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGF0IG1vc3Qgb25lIHRpbWUsIG5vIG1hdHRlciBob3dcbiAgLy8gb2Z0ZW4geW91IGNhbGwgaXQuIFVzZWZ1bCBmb3IgbGF6eSBpbml0aWFsaXphdGlvbi5cbiAgXy5vbmNlID0gXy5wYXJ0aWFsKF8uYmVmb3JlLCAyKTtcblxuICAvLyBPYmplY3QgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBLZXlzIGluIElFIDwgOSB0aGF0IHdvbid0IGJlIGl0ZXJhdGVkIGJ5IGBmb3Iga2V5IGluIC4uLmAgYW5kIHRodXMgbWlzc2VkLlxuICB2YXIgaGFzRW51bUJ1ZyA9ICF7dG9TdHJpbmc6IG51bGx9LnByb3BlcnR5SXNFbnVtZXJhYmxlKCd0b1N0cmluZycpO1xuICB2YXIgbm9uRW51bWVyYWJsZVByb3BzID0gWyd2YWx1ZU9mJywgJ2lzUHJvdG90eXBlT2YnLCAndG9TdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICdoYXNPd25Qcm9wZXJ0eScsICd0b0xvY2FsZVN0cmluZyddO1xuXG4gIGZ1bmN0aW9uIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKSB7XG4gICAgdmFyIG5vbkVudW1JZHggPSBub25FbnVtZXJhYmxlUHJvcHMubGVuZ3RoO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IG9iai5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgcHJvdG8gPSAoXy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yKSAmJiBjb25zdHJ1Y3Rvci5wcm90b3R5cGUpIHx8IE9ialByb3RvO1xuXG4gICAgLy8gQ29uc3RydWN0b3IgaXMgYSBzcGVjaWFsIGNhc2UuXG4gICAgdmFyIHByb3AgPSAnY29uc3RydWN0b3InO1xuICAgIGlmIChfLmhhcyhvYmosIHByb3ApICYmICFfLmNvbnRhaW5zKGtleXMsIHByb3ApKSBrZXlzLnB1c2gocHJvcCk7XG5cbiAgICB3aGlsZSAobm9uRW51bUlkeC0tKSB7XG4gICAgICBwcm9wID0gbm9uRW51bWVyYWJsZVByb3BzW25vbkVudW1JZHhdO1xuICAgICAgaWYgKHByb3AgaW4gb2JqICYmIG9ialtwcm9wXSAhPT0gcHJvdG9bcHJvcF0gJiYgIV8uY29udGFpbnMoa2V5cywgcHJvcCkpIHtcbiAgICAgICAga2V5cy5wdXNoKHByb3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFJldHJpZXZlIHRoZSBuYW1lcyBvZiBhbiBvYmplY3QncyBvd24gcHJvcGVydGllcy5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYE9iamVjdC5rZXlzYFxuICBfLmtleXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIFtdO1xuICAgIGlmIChuYXRpdmVLZXlzKSByZXR1cm4gbmF0aXZlS2V5cyhvYmopO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKF8uaGFzKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gICAgLy8gQWhlbSwgSUUgPCA5LlxuICAgIGlmIChoYXNFbnVtQnVnKSBjb2xsZWN0Tm9uRW51bVByb3BzKG9iaiwga2V5cyk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH07XG5cbiAgLy8gUmV0cmlldmUgYWxsIHRoZSBwcm9wZXJ0eSBuYW1lcyBvZiBhbiBvYmplY3QuXG4gIF8uYWxsS2V5cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gW107XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBrZXlzLnB1c2goa2V5KTtcbiAgICAvLyBBaGVtLCBJRSA8IDkuXG4gICAgaWYgKGhhc0VudW1CdWcpIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKTtcbiAgICByZXR1cm4ga2V5cztcbiAgfTtcblxuICAvLyBSZXRyaWV2ZSB0aGUgdmFsdWVzIG9mIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIF8udmFsdWVzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIHZhbHVlcyA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVzW2ldID0gb2JqW2tleXNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xuXG4gIC8vIFJldHVybnMgdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGl0ZXJhdGVlIHRvIGVhY2ggZWxlbWVudCBvZiB0aGUgb2JqZWN0XG4gIC8vIEluIGNvbnRyYXN0IHRvIF8ubWFwIGl0IHJldHVybnMgYW4gb2JqZWN0XG4gIF8ubWFwT2JqZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gIF8ua2V5cyhvYmopLFxuICAgICAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoLFxuICAgICAgICAgIHJlc3VsdHMgPSB7fSxcbiAgICAgICAgICBjdXJyZW50S2V5O1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjdXJyZW50S2V5ID0ga2V5c1tpbmRleF07XG4gICAgICAgIHJlc3VsdHNbY3VycmVudEtleV0gPSBpdGVyYXRlZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBDb252ZXJ0IGFuIG9iamVjdCBpbnRvIGEgbGlzdCBvZiBgW2tleSwgdmFsdWVdYCBwYWlycy5cbiAgXy5wYWlycyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBwYWlycyA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcGFpcnNbaV0gPSBba2V5c1tpXSwgb2JqW2tleXNbaV1dXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhaXJzO1xuICB9O1xuXG4gIC8vIEludmVydCB0aGUga2V5cyBhbmQgdmFsdWVzIG9mIGFuIG9iamVjdC4gVGhlIHZhbHVlcyBtdXN0IGJlIHNlcmlhbGl6YWJsZS5cbiAgXy5pbnZlcnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0W29ialtrZXlzW2ldXV0gPSBrZXlzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHNvcnRlZCBsaXN0IG9mIHRoZSBmdW5jdGlvbiBuYW1lcyBhdmFpbGFibGUgb24gdGhlIG9iamVjdC5cbiAgLy8gQWxpYXNlZCBhcyBgbWV0aG9kc2BcbiAgXy5mdW5jdGlvbnMgPSBfLm1ldGhvZHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKG9ialtrZXldKSkgbmFtZXMucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZXMuc29ydCgpO1xuICB9O1xuXG4gIC8vIEV4dGVuZCBhIGdpdmVuIG9iamVjdCB3aXRoIGFsbCB0aGUgcHJvcGVydGllcyBpbiBwYXNzZWQtaW4gb2JqZWN0KHMpLlxuICBfLmV4dGVuZCA9IGNyZWF0ZUFzc2lnbmVyKF8uYWxsS2V5cyk7XG5cbiAgLy8gQXNzaWducyBhIGdpdmVuIG9iamVjdCB3aXRoIGFsbCB0aGUgb3duIHByb3BlcnRpZXMgaW4gdGhlIHBhc3NlZC1pbiBvYmplY3QocylcbiAgLy8gKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9hc3NpZ24pXG4gIF8uZXh0ZW5kT3duID0gXy5hc3NpZ24gPSBjcmVhdGVBc3NpZ25lcihfLmtleXMpO1xuXG4gIC8vIFJldHVybnMgdGhlIGZpcnN0IGtleSBvbiBhbiBvYmplY3QgdGhhdCBwYXNzZXMgYSBwcmVkaWNhdGUgdGVzdFxuICBfLmZpbmRLZXkgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKSwga2V5O1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKHByZWRpY2F0ZShvYmpba2V5XSwga2V5LCBvYmopKSByZXR1cm4ga2V5O1xuICAgIH1cbiAgfTtcblxuICAvLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgb25seSBjb250YWluaW5nIHRoZSB3aGl0ZWxpc3RlZCBwcm9wZXJ0aWVzLlxuICBfLnBpY2sgPSBmdW5jdGlvbihvYmplY3QsIG9pdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQgPSB7fSwgb2JqID0gb2JqZWN0LCBpdGVyYXRlZSwga2V5cztcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihvaXRlcmF0ZWUpKSB7XG4gICAgICBrZXlzID0gXy5hbGxLZXlzKG9iaik7XG4gICAgICBpdGVyYXRlZSA9IG9wdGltaXplQ2Iob2l0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5cyA9IGZsYXR0ZW4oYXJndW1lbnRzLCBmYWxzZSwgZmFsc2UsIDEpO1xuICAgICAgaXRlcmF0ZWUgPSBmdW5jdGlvbih2YWx1ZSwga2V5LCBvYmopIHsgcmV0dXJuIGtleSBpbiBvYmo7IH07XG4gICAgICBvYmogPSBPYmplY3Qob2JqKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgdmFyIHZhbHVlID0gb2JqW2tleV07XG4gICAgICBpZiAoaXRlcmF0ZWUodmFsdWUsIGtleSwgb2JqKSkgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IHdpdGhvdXQgdGhlIGJsYWNrbGlzdGVkIHByb3BlcnRpZXMuXG4gIF8ub21pdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKGl0ZXJhdGVlKSkge1xuICAgICAgaXRlcmF0ZWUgPSBfLm5lZ2F0ZShpdGVyYXRlZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBrZXlzID0gXy5tYXAoZmxhdHRlbihhcmd1bWVudHMsIGZhbHNlLCBmYWxzZSwgMSksIFN0cmluZyk7XG4gICAgICBpdGVyYXRlZSA9IGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuICFfLmNvbnRhaW5zKGtleXMsIGtleSk7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gXy5waWNrKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpO1xuICB9O1xuXG4gIC8vIEZpbGwgaW4gYSBnaXZlbiBvYmplY3Qgd2l0aCBkZWZhdWx0IHByb3BlcnRpZXMuXG4gIF8uZGVmYXVsdHMgPSBjcmVhdGVBc3NpZ25lcihfLmFsbEtleXMsIHRydWUpO1xuXG4gIC8vIENyZWF0ZXMgYW4gb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSB0aGUgZ2l2ZW4gcHJvdG90eXBlIG9iamVjdC5cbiAgLy8gSWYgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIGFyZSBwcm92aWRlZCB0aGVuIHRoZXkgd2lsbCBiZSBhZGRlZCB0byB0aGVcbiAgLy8gY3JlYXRlZCBvYmplY3QuXG4gIF8uY3JlYXRlID0gZnVuY3Rpb24ocHJvdG90eXBlLCBwcm9wcykge1xuICAgIHZhciByZXN1bHQgPSBiYXNlQ3JlYXRlKHByb3RvdHlwZSk7XG4gICAgaWYgKHByb3BzKSBfLmV4dGVuZE93bihyZXN1bHQsIHByb3BzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIChzaGFsbG93LWNsb25lZCkgZHVwbGljYXRlIG9mIGFuIG9iamVjdC5cbiAgXy5jbG9uZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICAgIHJldHVybiBfLmlzQXJyYXkob2JqKSA/IG9iai5zbGljZSgpIDogXy5leHRlbmQoe30sIG9iaik7XG4gIH07XG5cbiAgLy8gSW52b2tlcyBpbnRlcmNlcHRvciB3aXRoIHRoZSBvYmosIGFuZCB0aGVuIHJldHVybnMgb2JqLlxuICAvLyBUaGUgcHJpbWFyeSBwdXJwb3NlIG9mIHRoaXMgbWV0aG9kIGlzIHRvIFwidGFwIGludG9cIiBhIG1ldGhvZCBjaGFpbiwgaW5cbiAgLy8gb3JkZXIgdG8gcGVyZm9ybSBvcGVyYXRpb25zIG9uIGludGVybWVkaWF0ZSByZXN1bHRzIHdpdGhpbiB0aGUgY2hhaW4uXG4gIF8udGFwID0gZnVuY3Rpb24ob2JqLCBpbnRlcmNlcHRvcikge1xuICAgIGludGVyY2VwdG9yKG9iaik7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBSZXR1cm5zIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHNldCBvZiBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy5pc01hdGNoID0gZnVuY3Rpb24ob2JqZWN0LCBhdHRycykge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKGF0dHJzKSwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSByZXR1cm4gIWxlbmd0aDtcbiAgICB2YXIgb2JqID0gT2JqZWN0KG9iamVjdCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoYXR0cnNba2V5XSAhPT0gb2JqW2tleV0gfHwgIShrZXkgaW4gb2JqKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuXG4gIC8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG4gIHZhciBlcSA9IGZ1bmN0aW9uKGEsIGIsIGFTdGFjaywgYlN0YWNrKSB7XG4gICAgLy8gSWRlbnRpY2FsIG9iamVjdHMgYXJlIGVxdWFsLiBgMCA9PT0gLTBgLCBidXQgdGhleSBhcmVuJ3QgaWRlbnRpY2FsLlxuICAgIC8vIFNlZSB0aGUgW0hhcm1vbnkgYGVnYWxgIHByb3Bvc2FsXShodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1oYXJtb255OmVnYWwpLlxuICAgIGlmIChhID09PSBiKSByZXR1cm4gYSAhPT0gMCB8fCAxIC8gYSA9PT0gMSAvIGI7XG4gICAgLy8gQSBzdHJpY3QgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkgYmVjYXVzZSBgbnVsbCA9PSB1bmRlZmluZWRgLlxuICAgIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gYSA9PT0gYjtcbiAgICAvLyBVbndyYXAgYW55IHdyYXBwZWQgb2JqZWN0cy5cbiAgICBpZiAoYSBpbnN0YW5jZW9mIF8pIGEgPSBhLl93cmFwcGVkO1xuICAgIGlmIChiIGluc3RhbmNlb2YgXykgYiA9IGIuX3dyYXBwZWQ7XG4gICAgLy8gQ29tcGFyZSBgW1tDbGFzc11dYCBuYW1lcy5cbiAgICB2YXIgY2xhc3NOYW1lID0gdG9TdHJpbmcuY2FsbChhKTtcbiAgICBpZiAoY2xhc3NOYW1lICE9PSB0b1N0cmluZy5jYWxsKGIpKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgIC8vIFN0cmluZ3MsIG51bWJlcnMsIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGRhdGVzLCBhbmQgYm9vbGVhbnMgYXJlIGNvbXBhcmVkIGJ5IHZhbHVlLlxuICAgICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzpcbiAgICAgIC8vIFJlZ0V4cHMgYXJlIGNvZXJjZWQgdG8gc3RyaW5ncyBmb3IgY29tcGFyaXNvbiAoTm90ZTogJycgKyAvYS9pID09PSAnL2EvaScpXG4gICAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxuICAgICAgICAvLyBQcmltaXRpdmVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9iamVjdCB3cmFwcGVycyBhcmUgZXF1aXZhbGVudDsgdGh1cywgYFwiNVwiYCBpc1xuICAgICAgICAvLyBlcXVpdmFsZW50IHRvIGBuZXcgU3RyaW5nKFwiNVwiKWAuXG4gICAgICAgIHJldHVybiAnJyArIGEgPT09ICcnICsgYjtcbiAgICAgIGNhc2UgJ1tvYmplY3QgTnVtYmVyXSc6XG4gICAgICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXG4gICAgICAgIC8vIE9iamVjdChOYU4pIGlzIGVxdWl2YWxlbnQgdG8gTmFOXG4gICAgICAgIGlmICgrYSAhPT0gK2EpIHJldHVybiArYiAhPT0gK2I7XG4gICAgICAgIC8vIEFuIGBlZ2FsYCBjb21wYXJpc29uIGlzIHBlcmZvcm1lZCBmb3Igb3RoZXIgbnVtZXJpYyB2YWx1ZXMuXG4gICAgICAgIHJldHVybiArYSA9PT0gMCA/IDEgLyArYSA9PT0gMSAvIGIgOiArYSA9PT0gK2I7XG4gICAgICBjYXNlICdbb2JqZWN0IERhdGVdJzpcbiAgICAgIGNhc2UgJ1tvYmplY3QgQm9vbGVhbl0nOlxuICAgICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWVyaWMgcHJpbWl0aXZlIHZhbHVlcy4gRGF0ZXMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyXG4gICAgICAgIC8vIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9ucy4gTm90ZSB0aGF0IGludmFsaWQgZGF0ZXMgd2l0aCBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnNcbiAgICAgICAgLy8gb2YgYE5hTmAgYXJlIG5vdCBlcXVpdmFsZW50LlxuICAgICAgICByZXR1cm4gK2EgPT09ICtiO1xuICAgIH1cblxuICAgIHZhciBhcmVBcnJheXMgPSBjbGFzc05hbWUgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgaWYgKCFhcmVBcnJheXMpIHtcbiAgICAgIGlmICh0eXBlb2YgYSAhPSAnb2JqZWN0JyB8fCB0eXBlb2YgYiAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHMgb3IgYEFycmF5YHNcbiAgICAgIC8vIGZyb20gZGlmZmVyZW50IGZyYW1lcyBhcmUuXG4gICAgICB2YXIgYUN0b3IgPSBhLmNvbnN0cnVjdG9yLCBiQ3RvciA9IGIuY29uc3RydWN0b3I7XG4gICAgICBpZiAoYUN0b3IgIT09IGJDdG9yICYmICEoXy5pc0Z1bmN0aW9uKGFDdG9yKSAmJiBhQ3RvciBpbnN0YW5jZW9mIGFDdG9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5pc0Z1bmN0aW9uKGJDdG9yKSAmJiBiQ3RvciBpbnN0YW5jZW9mIGJDdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoJ2NvbnN0cnVjdG9yJyBpbiBhICYmICdjb25zdHJ1Y3RvcicgaW4gYikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBBc3N1bWUgZXF1YWxpdHkgZm9yIGN5Y2xpYyBzdHJ1Y3R1cmVzLiBUaGUgYWxnb3JpdGhtIGZvciBkZXRlY3RpbmcgY3ljbGljXG4gICAgLy8gc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uIGBKT2AuXG5cbiAgICAvLyBJbml0aWFsaXppbmcgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgLy8gSXQncyBkb25lIGhlcmUgc2luY2Ugd2Ugb25seSBuZWVkIHRoZW0gZm9yIG9iamVjdHMgYW5kIGFycmF5cyBjb21wYXJpc29uLlxuICAgIGFTdGFjayA9IGFTdGFjayB8fCBbXTtcbiAgICBiU3RhY2sgPSBiU3RhY2sgfHwgW107XG4gICAgdmFyIGxlbmd0aCA9IGFTdGFjay5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcbiAgICAgIC8vIHVuaXF1ZSBuZXN0ZWQgc3RydWN0dXJlcy5cbiAgICAgIGlmIChhU3RhY2tbbGVuZ3RoXSA9PT0gYSkgcmV0dXJuIGJTdGFja1tsZW5ndGhdID09PSBiO1xuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucHVzaChhKTtcbiAgICBiU3RhY2sucHVzaChiKTtcblxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyBhbmQgYXJyYXlzLlxuICAgIGlmIChhcmVBcnJheXMpIHtcbiAgICAgIC8vIENvbXBhcmUgYXJyYXkgbGVuZ3RocyB0byBkZXRlcm1pbmUgaWYgYSBkZWVwIGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5LlxuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gRGVlcCBjb21wYXJlIHRoZSBjb250ZW50cywgaWdub3Jpbmcgbm9uLW51bWVyaWMgcHJvcGVydGllcy5cbiAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICBpZiAoIWVxKGFbbGVuZ3RoXSwgYltsZW5ndGhdLCBhU3RhY2ssIGJTdGFjaykpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVlcCBjb21wYXJlIG9iamVjdHMuXG4gICAgICB2YXIga2V5cyA9IF8ua2V5cyhhKSwga2V5O1xuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgICAvLyBFbnN1cmUgdGhhdCBib3RoIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBudW1iZXIgb2YgcHJvcGVydGllcyBiZWZvcmUgY29tcGFyaW5nIGRlZXAgZXF1YWxpdHkuXG4gICAgICBpZiAoXy5rZXlzKGIpLmxlbmd0aCAhPT0gbGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgLy8gRGVlcCBjb21wYXJlIGVhY2ggbWVtYmVyXG4gICAgICAgIGtleSA9IGtleXNbbGVuZ3RoXTtcbiAgICAgICAgaWYgKCEoXy5oYXMoYiwga2V5KSAmJiBlcShhW2tleV0sIGJba2V5XSwgYVN0YWNrLCBiU3RhY2spKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucG9wKCk7XG4gICAgYlN0YWNrLnBvcCgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIFBlcmZvcm0gYSBkZWVwIGNvbXBhcmlzb24gdG8gY2hlY2sgaWYgdHdvIG9iamVjdHMgYXJlIGVxdWFsLlxuICBfLmlzRXF1YWwgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGVxKGEsIGIpO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gYXJyYXksIHN0cmluZywgb3Igb2JqZWN0IGVtcHR5P1xuICAvLyBBbiBcImVtcHR5XCIgb2JqZWN0IGhhcyBubyBlbnVtZXJhYmxlIG93bi1wcm9wZXJ0aWVzLlxuICBfLmlzRW1wdHkgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgIGlmIChpc0FycmF5TGlrZShvYmopICYmIChfLmlzQXJyYXkob2JqKSB8fCBfLmlzU3RyaW5nKG9iaikgfHwgXy5pc0FyZ3VtZW50cyhvYmopKSkgcmV0dXJuIG9iai5sZW5ndGggPT09IDA7XG4gICAgcmV0dXJuIF8ua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGEgRE9NIGVsZW1lbnQ/XG4gIF8uaXNFbGVtZW50ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuICEhKG9iaiAmJiBvYmoubm9kZVR5cGUgPT09IDEpO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYW4gYXJyYXk/XG4gIC8vIERlbGVnYXRlcyB0byBFQ01BNSdzIG5hdGl2ZSBBcnJheS5pc0FycmF5XG4gIF8uaXNBcnJheSA9IG5hdGl2ZUlzQXJyYXkgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIGFuIG9iamVjdD9cbiAgXy5pc09iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIG9iajtcbiAgICByZXR1cm4gdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlID09PSAnb2JqZWN0JyAmJiAhIW9iajtcbiAgfTtcblxuICAvLyBBZGQgc29tZSBpc1R5cGUgbWV0aG9kczogaXNBcmd1bWVudHMsIGlzRnVuY3Rpb24sIGlzU3RyaW5nLCBpc051bWJlciwgaXNEYXRlLCBpc1JlZ0V4cCwgaXNFcnJvci5cbiAgXy5lYWNoKFsnQXJndW1lbnRzJywgJ0Z1bmN0aW9uJywgJ1N0cmluZycsICdOdW1iZXInLCAnRGF0ZScsICdSZWdFeHAnLCAnRXJyb3InXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIF9bJ2lzJyArIG5hbWVdID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCAnICsgbmFtZSArICddJztcbiAgICB9O1xuICB9KTtcblxuICAvLyBEZWZpbmUgYSBmYWxsYmFjayB2ZXJzaW9uIG9mIHRoZSBtZXRob2QgaW4gYnJvd3NlcnMgKGFoZW0sIElFIDwgOSksIHdoZXJlXG4gIC8vIHRoZXJlIGlzbid0IGFueSBpbnNwZWN0YWJsZSBcIkFyZ3VtZW50c1wiIHR5cGUuXG4gIGlmICghXy5pc0FyZ3VtZW50cyhhcmd1bWVudHMpKSB7XG4gICAgXy5pc0FyZ3VtZW50cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIF8uaGFzKG9iaiwgJ2NhbGxlZScpO1xuICAgIH07XG4gIH1cblxuICAvLyBPcHRpbWl6ZSBgaXNGdW5jdGlvbmAgaWYgYXBwcm9wcmlhdGUuIFdvcmsgYXJvdW5kIHNvbWUgdHlwZW9mIGJ1Z3MgaW4gb2xkIHY4LFxuICAvLyBJRSAxMSAoIzE2MjEpLCBhbmQgaW4gU2FmYXJpIDggKCMxOTI5KS5cbiAgaWYgKHR5cGVvZiAvLi8gIT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgSW50OEFycmF5ICE9ICdvYmplY3QnKSB7XG4gICAgXy5pc0Z1bmN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nIHx8IGZhbHNlO1xuICAgIH07XG4gIH1cblxuICAvLyBJcyBhIGdpdmVuIG9iamVjdCBhIGZpbml0ZSBudW1iZXI/XG4gIF8uaXNGaW5pdGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gaXNGaW5pdGUob2JqKSAmJiAhaXNOYU4ocGFyc2VGbG9hdChvYmopKTtcbiAgfTtcblxuICAvLyBJcyB0aGUgZ2l2ZW4gdmFsdWUgYE5hTmA/IChOYU4gaXMgdGhlIG9ubHkgbnVtYmVyIHdoaWNoIGRvZXMgbm90IGVxdWFsIGl0c2VsZikuXG4gIF8uaXNOYU4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXy5pc051bWJlcihvYmopICYmIG9iaiAhPT0gK29iajtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGEgYm9vbGVhbj9cbiAgXy5pc0Jvb2xlYW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB0cnVlIHx8IG9iaiA9PT0gZmFsc2UgfHwgdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBCb29sZWFuXSc7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBlcXVhbCB0byBudWxsP1xuICBfLmlzTnVsbCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG51bGw7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSB1bmRlZmluZWQ/XG4gIF8uaXNVbmRlZmluZWQgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB2b2lkIDA7XG4gIH07XG5cbiAgLy8gU2hvcnRjdXQgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBwcm9wZXJ0eSBkaXJlY3RseVxuICAvLyBvbiBpdHNlbGYgKGluIG90aGVyIHdvcmRzLCBub3Qgb24gYSBwcm90b3R5cGUpLlxuICBfLmhhcyA9IGZ1bmN0aW9uKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIG9iaiAhPSBudWxsICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xuICB9O1xuXG4gIC8vIFV0aWxpdHkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUnVuIFVuZGVyc2NvcmUuanMgaW4gKm5vQ29uZmxpY3QqIG1vZGUsIHJldHVybmluZyB0aGUgYF9gIHZhcmlhYmxlIHRvIGl0c1xuICAvLyBwcmV2aW91cyBvd25lci4gUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8ubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIHJvb3QuXyA9IHByZXZpb3VzVW5kZXJzY29yZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBLZWVwIHRoZSBpZGVudGl0eSBmdW5jdGlvbiBhcm91bmQgZm9yIGRlZmF1bHQgaXRlcmF0ZWVzLlxuICBfLmlkZW50aXR5ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgLy8gUHJlZGljYXRlLWdlbmVyYXRpbmcgZnVuY3Rpb25zLiBPZnRlbiB1c2VmdWwgb3V0c2lkZSBvZiBVbmRlcnNjb3JlLlxuICBfLmNvbnN0YW50ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgfTtcblxuICBfLm5vb3AgPSBmdW5jdGlvbigpe307XG5cbiAgXy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuXG4gIC8vIEdlbmVyYXRlcyBhIGZ1bmN0aW9uIGZvciBhIGdpdmVuIG9iamVjdCB0aGF0IHJldHVybnMgYSBnaXZlbiBwcm9wZXJ0eS5cbiAgXy5wcm9wZXJ0eU9mID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PSBudWxsID8gZnVuY3Rpb24oKXt9IDogZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gb2JqW2tleV07XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgcHJlZGljYXRlIGZvciBjaGVja2luZyB3aGV0aGVyIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBzZXQgb2ZcbiAgLy8gYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8ubWF0Y2hlciA9IF8ubWF0Y2hlcyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgYXR0cnMgPSBfLmV4dGVuZE93bih7fSwgYXR0cnMpO1xuICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBfLmlzTWF0Y2gob2JqLCBhdHRycyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSdW4gYSBmdW5jdGlvbiAqKm4qKiB0aW1lcy5cbiAgXy50aW1lcyA9IGZ1bmN0aW9uKG4sIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIGFjY3VtID0gQXJyYXkoTWF0aC5tYXgoMCwgbikpO1xuICAgIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwgY29udGV4dCwgMSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIGFjY3VtW2ldID0gaXRlcmF0ZWUoaSk7XG4gICAgcmV0dXJuIGFjY3VtO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIGFuZCBtYXggKGluY2x1c2l2ZSkuXG4gIF8ucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICBpZiAobWF4ID09IG51bGwpIHtcbiAgICAgIG1heCA9IG1pbjtcbiAgICAgIG1pbiA9IDA7XG4gICAgfVxuICAgIHJldHVybiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xuICB9O1xuXG4gIC8vIEEgKHBvc3NpYmx5IGZhc3Rlcikgd2F5IHRvIGdldCB0aGUgY3VycmVudCB0aW1lc3RhbXAgYXMgYW4gaW50ZWdlci5cbiAgXy5ub3cgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH07XG5cbiAgIC8vIExpc3Qgb2YgSFRNTCBlbnRpdGllcyBmb3IgZXNjYXBpbmcuXG4gIHZhciBlc2NhcGVNYXAgPSB7XG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgIFwiJ1wiOiAnJiN4Mjc7JyxcbiAgICAnYCc6ICcmI3g2MDsnXG4gIH07XG4gIHZhciB1bmVzY2FwZU1hcCA9IF8uaW52ZXJ0KGVzY2FwZU1hcCk7XG5cbiAgLy8gRnVuY3Rpb25zIGZvciBlc2NhcGluZyBhbmQgdW5lc2NhcGluZyBzdHJpbmdzIHRvL2Zyb20gSFRNTCBpbnRlcnBvbGF0aW9uLlxuICB2YXIgY3JlYXRlRXNjYXBlciA9IGZ1bmN0aW9uKG1hcCkge1xuICAgIHZhciBlc2NhcGVyID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgIHJldHVybiBtYXBbbWF0Y2hdO1xuICAgIH07XG4gICAgLy8gUmVnZXhlcyBmb3IgaWRlbnRpZnlpbmcgYSBrZXkgdGhhdCBuZWVkcyB0byBiZSBlc2NhcGVkXG4gICAgdmFyIHNvdXJjZSA9ICcoPzonICsgXy5rZXlzKG1hcCkuam9pbignfCcpICsgJyknO1xuICAgIHZhciB0ZXN0UmVnZXhwID0gUmVnRXhwKHNvdXJjZSk7XG4gICAgdmFyIHJlcGxhY2VSZWdleHAgPSBSZWdFeHAoc291cmNlLCAnZycpO1xuICAgIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgIHN0cmluZyA9IHN0cmluZyA9PSBudWxsID8gJycgOiAnJyArIHN0cmluZztcbiAgICAgIHJldHVybiB0ZXN0UmVnZXhwLnRlc3Qoc3RyaW5nKSA/IHN0cmluZy5yZXBsYWNlKHJlcGxhY2VSZWdleHAsIGVzY2FwZXIpIDogc3RyaW5nO1xuICAgIH07XG4gIH07XG4gIF8uZXNjYXBlID0gY3JlYXRlRXNjYXBlcihlc2NhcGVNYXApO1xuICBfLnVuZXNjYXBlID0gY3JlYXRlRXNjYXBlcih1bmVzY2FwZU1hcCk7XG5cbiAgLy8gSWYgdGhlIHZhbHVlIG9mIHRoZSBuYW1lZCBgcHJvcGVydHlgIGlzIGEgZnVuY3Rpb24gdGhlbiBpbnZva2UgaXQgd2l0aCB0aGVcbiAgLy8gYG9iamVjdGAgYXMgY29udGV4dDsgb3RoZXJ3aXNlLCByZXR1cm4gaXQuXG4gIF8ucmVzdWx0ID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSwgZmFsbGJhY2spIHtcbiAgICB2YXIgdmFsdWUgPSBvYmplY3QgPT0gbnVsbCA/IHZvaWQgMCA6IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgIHZhbHVlID0gZmFsbGJhY2s7XG4gICAgfVxuICAgIHJldHVybiBfLmlzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUuY2FsbChvYmplY3QpIDogdmFsdWU7XG4gIH07XG5cbiAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgaW50ZWdlciBpZCAodW5pcXVlIHdpdGhpbiB0aGUgZW50aXJlIGNsaWVudCBzZXNzaW9uKS5cbiAgLy8gVXNlZnVsIGZvciB0ZW1wb3JhcnkgRE9NIGlkcy5cbiAgdmFyIGlkQ291bnRlciA9IDA7XG4gIF8udW5pcXVlSWQgPSBmdW5jdGlvbihwcmVmaXgpIHtcbiAgICB2YXIgaWQgPSArK2lkQ291bnRlciArICcnO1xuICAgIHJldHVybiBwcmVmaXggPyBwcmVmaXggKyBpZCA6IGlkO1xuICB9O1xuXG4gIC8vIEJ5IGRlZmF1bHQsIFVuZGVyc2NvcmUgdXNlcyBFUkItc3R5bGUgdGVtcGxhdGUgZGVsaW1pdGVycywgY2hhbmdlIHRoZVxuICAvLyBmb2xsb3dpbmcgdGVtcGxhdGUgc2V0dGluZ3MgdG8gdXNlIGFsdGVybmF0aXZlIGRlbGltaXRlcnMuXG4gIF8udGVtcGxhdGVTZXR0aW5ncyA9IHtcbiAgICBldmFsdWF0ZSAgICA6IC88JShbXFxzXFxTXSs/KSU+L2csXG4gICAgaW50ZXJwb2xhdGUgOiAvPCU9KFtcXHNcXFNdKz8pJT4vZyxcbiAgICBlc2NhcGUgICAgICA6IC88JS0oW1xcc1xcU10rPyklPi9nXG4gIH07XG5cbiAgLy8gV2hlbiBjdXN0b21pemluZyBgdGVtcGxhdGVTZXR0aW5nc2AsIGlmIHlvdSBkb24ndCB3YW50IHRvIGRlZmluZSBhblxuICAvLyBpbnRlcnBvbGF0aW9uLCBldmFsdWF0aW9uIG9yIGVzY2FwaW5nIHJlZ2V4LCB3ZSBuZWVkIG9uZSB0aGF0IGlzXG4gIC8vIGd1YXJhbnRlZWQgbm90IHRvIG1hdGNoLlxuICB2YXIgbm9NYXRjaCA9IC8oLileLztcblxuICAvLyBDZXJ0YWluIGNoYXJhY3RlcnMgbmVlZCB0byBiZSBlc2NhcGVkIHNvIHRoYXQgdGhleSBjYW4gYmUgcHV0IGludG8gYVxuICAvLyBzdHJpbmcgbGl0ZXJhbC5cbiAgdmFyIGVzY2FwZXMgPSB7XG4gICAgXCInXCI6ICAgICAgXCInXCIsXG4gICAgJ1xcXFwnOiAgICAgJ1xcXFwnLFxuICAgICdcXHInOiAgICAgJ3InLFxuICAgICdcXG4nOiAgICAgJ24nLFxuICAgICdcXHUyMDI4JzogJ3UyMDI4JyxcbiAgICAnXFx1MjAyOSc6ICd1MjAyOSdcbiAgfTtcblxuICB2YXIgZXNjYXBlciA9IC9cXFxcfCd8XFxyfFxcbnxcXHUyMDI4fFxcdTIwMjkvZztcblxuICB2YXIgZXNjYXBlQ2hhciA9IGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgcmV0dXJuICdcXFxcJyArIGVzY2FwZXNbbWF0Y2hdO1xuICB9O1xuXG4gIC8vIEphdmFTY3JpcHQgbWljcm8tdGVtcGxhdGluZywgc2ltaWxhciB0byBKb2huIFJlc2lnJ3MgaW1wbGVtZW50YXRpb24uXG4gIC8vIFVuZGVyc2NvcmUgdGVtcGxhdGluZyBoYW5kbGVzIGFyYml0cmFyeSBkZWxpbWl0ZXJzLCBwcmVzZXJ2ZXMgd2hpdGVzcGFjZSxcbiAgLy8gYW5kIGNvcnJlY3RseSBlc2NhcGVzIHF1b3RlcyB3aXRoaW4gaW50ZXJwb2xhdGVkIGNvZGUuXG4gIC8vIE5COiBgb2xkU2V0dGluZ3NgIG9ubHkgZXhpc3RzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgXy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHRleHQsIHNldHRpbmdzLCBvbGRTZXR0aW5ncykge1xuICAgIGlmICghc2V0dGluZ3MgJiYgb2xkU2V0dGluZ3MpIHNldHRpbmdzID0gb2xkU2V0dGluZ3M7XG4gICAgc2V0dGluZ3MgPSBfLmRlZmF1bHRzKHt9LCBzZXR0aW5ncywgXy50ZW1wbGF0ZVNldHRpbmdzKTtcblxuICAgIC8vIENvbWJpbmUgZGVsaW1pdGVycyBpbnRvIG9uZSByZWd1bGFyIGV4cHJlc3Npb24gdmlhIGFsdGVybmF0aW9uLlxuICAgIHZhciBtYXRjaGVyID0gUmVnRXhwKFtcbiAgICAgIChzZXR0aW5ncy5lc2NhcGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICAgKHNldHRpbmdzLmludGVycG9sYXRlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIChzZXR0aW5ncy5ldmFsdWF0ZSB8fCBub01hdGNoKS5zb3VyY2VcbiAgICBdLmpvaW4oJ3wnKSArICd8JCcsICdnJyk7XG5cbiAgICAvLyBDb21waWxlIHRoZSB0ZW1wbGF0ZSBzb3VyY2UsIGVzY2FwaW5nIHN0cmluZyBsaXRlcmFscyBhcHByb3ByaWF0ZWx5LlxuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHNvdXJjZSA9IFwiX19wKz0nXCI7XG4gICAgdGV4dC5yZXBsYWNlKG1hdGNoZXIsIGZ1bmN0aW9uKG1hdGNoLCBlc2NhcGUsIGludGVycG9sYXRlLCBldmFsdWF0ZSwgb2Zmc2V0KSB7XG4gICAgICBzb3VyY2UgKz0gdGV4dC5zbGljZShpbmRleCwgb2Zmc2V0KS5yZXBsYWNlKGVzY2FwZXIsIGVzY2FwZUNoYXIpO1xuICAgICAgaW5kZXggPSBvZmZzZXQgKyBtYXRjaC5sZW5ndGg7XG5cbiAgICAgIGlmIChlc2NhcGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBlc2NhcGUgKyBcIikpPT1udWxsPycnOl8uZXNjYXBlKF9fdCkpK1xcbidcIjtcbiAgICAgIH0gZWxzZSBpZiAoaW50ZXJwb2xhdGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBpbnRlcnBvbGF0ZSArIFwiKSk9PW51bGw/Jyc6X190KStcXG4nXCI7XG4gICAgICB9IGVsc2UgaWYgKGV2YWx1YXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIic7XFxuXCIgKyBldmFsdWF0ZSArIFwiXFxuX19wKz0nXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkb2JlIFZNcyBuZWVkIHRoZSBtYXRjaCByZXR1cm5lZCB0byBwcm9kdWNlIHRoZSBjb3JyZWN0IG9mZmVzdC5cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcbiAgICBzb3VyY2UgKz0gXCInO1xcblwiO1xuXG4gICAgLy8gSWYgYSB2YXJpYWJsZSBpcyBub3Qgc3BlY2lmaWVkLCBwbGFjZSBkYXRhIHZhbHVlcyBpbiBsb2NhbCBzY29wZS5cbiAgICBpZiAoIXNldHRpbmdzLnZhcmlhYmxlKSBzb3VyY2UgPSAnd2l0aChvYmp8fHt9KXtcXG4nICsgc291cmNlICsgJ31cXG4nO1xuXG4gICAgc291cmNlID0gXCJ2YXIgX190LF9fcD0nJyxfX2o9QXJyYXkucHJvdG90eXBlLmpvaW4sXCIgK1xuICAgICAgXCJwcmludD1mdW5jdGlvbigpe19fcCs9X19qLmNhbGwoYXJndW1lbnRzLCcnKTt9O1xcblwiICtcbiAgICAgIHNvdXJjZSArICdyZXR1cm4gX19wO1xcbic7XG5cbiAgICB0cnkge1xuICAgICAgdmFyIHJlbmRlciA9IG5ldyBGdW5jdGlvbihzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJywgJ18nLCBzb3VyY2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGUuc291cmNlID0gc291cmNlO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG5cbiAgICB2YXIgdGVtcGxhdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICByZXR1cm4gcmVuZGVyLmNhbGwodGhpcywgZGF0YSwgXyk7XG4gICAgfTtcblxuICAgIC8vIFByb3ZpZGUgdGhlIGNvbXBpbGVkIHNvdXJjZSBhcyBhIGNvbnZlbmllbmNlIGZvciBwcmVjb21waWxhdGlvbi5cbiAgICB2YXIgYXJndW1lbnQgPSBzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJztcbiAgICB0ZW1wbGF0ZS5zb3VyY2UgPSAnZnVuY3Rpb24oJyArIGFyZ3VtZW50ICsgJyl7XFxuJyArIHNvdXJjZSArICd9JztcblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfTtcblxuICAvLyBBZGQgYSBcImNoYWluXCIgZnVuY3Rpb24uIFN0YXJ0IGNoYWluaW5nIGEgd3JhcHBlZCBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5jaGFpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBpbnN0YW5jZSA9IF8ob2JqKTtcbiAgICBpbnN0YW5jZS5fY2hhaW4gPSB0cnVlO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcblxuICAvLyBPT1BcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElmIFVuZGVyc2NvcmUgaXMgY2FsbGVkIGFzIGEgZnVuY3Rpb24sIGl0IHJldHVybnMgYSB3cmFwcGVkIG9iamVjdCB0aGF0XG4gIC8vIGNhbiBiZSB1c2VkIE9PLXN0eWxlLiBUaGlzIHdyYXBwZXIgaG9sZHMgYWx0ZXJlZCB2ZXJzaW9ucyBvZiBhbGwgdGhlXG4gIC8vIHVuZGVyc2NvcmUgZnVuY3Rpb25zLiBXcmFwcGVkIG9iamVjdHMgbWF5IGJlIGNoYWluZWQuXG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnRpbnVlIGNoYWluaW5nIGludGVybWVkaWF0ZSByZXN1bHRzLlxuICB2YXIgcmVzdWx0ID0gZnVuY3Rpb24oaW5zdGFuY2UsIG9iaikge1xuICAgIHJldHVybiBpbnN0YW5jZS5fY2hhaW4gPyBfKG9iaikuY2hhaW4oKSA6IG9iajtcbiAgfTtcblxuICAvLyBBZGQgeW91ciBvd24gY3VzdG9tIGZ1bmN0aW9ucyB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8ubWl4aW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICBfLmVhY2goXy5mdW5jdGlvbnMob2JqKSwgZnVuY3Rpb24obmFtZSkge1xuICAgICAgdmFyIGZ1bmMgPSBfW25hbWVdID0gb2JqW25hbWVdO1xuICAgICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbdGhpcy5fd3JhcHBlZF07XG4gICAgICAgIHB1c2guYXBwbHkoYXJncywgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCh0aGlzLCBmdW5jLmFwcGx5KF8sIGFyZ3MpKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQWRkIGFsbCBvZiB0aGUgVW5kZXJzY29yZSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIgb2JqZWN0LlxuICBfLm1peGluKF8pO1xuXG4gIC8vIEFkZCBhbGwgbXV0YXRvciBBcnJheSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG4gIF8uZWFjaChbJ3BvcCcsICdwdXNoJywgJ3JldmVyc2UnLCAnc2hpZnQnLCAnc29ydCcsICdzcGxpY2UnLCAndW5zaGlmdCddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvYmogPSB0aGlzLl93cmFwcGVkO1xuICAgICAgbWV0aG9kLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICAgIGlmICgobmFtZSA9PT0gJ3NoaWZ0JyB8fCBuYW1lID09PSAnc3BsaWNlJykgJiYgb2JqLmxlbmd0aCA9PT0gMCkgZGVsZXRlIG9ialswXTtcbiAgICAgIHJldHVybiByZXN1bHQodGhpcywgb2JqKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBBZGQgYWxsIGFjY2Vzc29yIEFycmF5IGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlci5cbiAgXy5lYWNoKFsnY29uY2F0JywgJ2pvaW4nLCAnc2xpY2UnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcmVzdWx0KHRoaXMsIG1ldGhvZC5hcHBseSh0aGlzLl93cmFwcGVkLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBFeHRyYWN0cyB0aGUgcmVzdWx0IGZyb20gYSB3cmFwcGVkIGFuZCBjaGFpbmVkIG9iamVjdC5cbiAgXy5wcm90b3R5cGUudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fd3JhcHBlZDtcbiAgfTtcblxuICAvLyBQcm92aWRlIHVud3JhcHBpbmcgcHJveHkgZm9yIHNvbWUgbWV0aG9kcyB1c2VkIGluIGVuZ2luZSBvcGVyYXRpb25zXG4gIC8vIHN1Y2ggYXMgYXJpdGhtZXRpYyBhbmQgSlNPTiBzdHJpbmdpZmljYXRpb24uXG4gIF8ucHJvdG90eXBlLnZhbHVlT2YgPSBfLnByb3RvdHlwZS50b0pTT04gPSBfLnByb3RvdHlwZS52YWx1ZTtcblxuICBfLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAnJyArIHRoaXMuX3dyYXBwZWQ7XG4gIH07XG5cbiAgLy8gQU1EIHJlZ2lzdHJhdGlvbiBoYXBwZW5zIGF0IHRoZSBlbmQgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBTUQgbG9hZGVyc1xuICAvLyB0aGF0IG1heSBub3QgZW5mb3JjZSBuZXh0LXR1cm4gc2VtYW50aWNzIG9uIG1vZHVsZXMuIEV2ZW4gdGhvdWdoIGdlbmVyYWxcbiAgLy8gcHJhY3RpY2UgZm9yIEFNRCByZWdpc3RyYXRpb24gaXMgdG8gYmUgYW5vbnltb3VzLCB1bmRlcnNjb3JlIHJlZ2lzdGVyc1xuICAvLyBhcyBhIG5hbWVkIG1vZHVsZSBiZWNhdXNlLCBsaWtlIGpRdWVyeSwgaXQgaXMgYSBiYXNlIGxpYnJhcnkgdGhhdCBpc1xuICAvLyBwb3B1bGFyIGVub3VnaCB0byBiZSBidW5kbGVkIGluIGEgdGhpcmQgcGFydHkgbGliLCBidXQgbm90IGJlIHBhcnQgb2ZcbiAgLy8gYW4gQU1EIGxvYWQgcmVxdWVzdC4gVGhvc2UgY2FzZXMgY291bGQgZ2VuZXJhdGUgYW4gZXJyb3Igd2hlbiBhblxuICAvLyBhbm9ueW1vdXMgZGVmaW5lKCkgaXMgY2FsbGVkIG91dHNpZGUgb2YgYSBsb2FkZXIgcmVxdWVzdC5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZSgndW5kZXJzY29yZScsIFtdLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfO1xuICAgIH0pO1xuICB9XG59LmNhbGwodGhpcykpO1xuIl19
