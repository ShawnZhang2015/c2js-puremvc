/**
 * Created by zxh on 15/10/15.
 */

var BaseLayer = require('../widget/BaseLayer.js');
module.exports = BaseLayer.extend({
    data: null,
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
        cc.log("_onTaskTouchEnded");
    }


});