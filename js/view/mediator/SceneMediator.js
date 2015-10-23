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
