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