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
