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
