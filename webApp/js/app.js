/**
 * Created by zxh on 15/10/22.
 */

var myApp = angular.module('myApp', ['ui.router']);


myApp.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                "":{
                    templateUrl: 'webApp/view/home.html'
                },
                "gameView@index": {
                    templateUrl: 'webApp/view/gameView.html'
                },
                "tabView@index": {
                    templateUrl: 'webApp/view/tabView.html'
                }
            }
        });
    $urlRouterProvider.otherwise('/index');
});

myApp.controller('GameViewController', function($scope) {
    $scope.name = 'zxh';
});

