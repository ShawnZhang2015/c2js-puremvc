/**
 * Created by zxh on 15/10/9.
 */

var BaseLayer = require('../widget/BaseLayer.js');

module.exports = BaseLayer.extend({
    ctor: function() {
        this.hasFrame = true;
        this._super();
        this.colorFrame.setColor(cc.color.WHITE);
    }
});