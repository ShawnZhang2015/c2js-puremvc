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