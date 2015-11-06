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
