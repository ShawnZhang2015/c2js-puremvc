/**
 * Created by zxh on 15/10/22.
 */

var myApp = angular.module('myApp', ['ui.router']);


myApp.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: 'webApp/view/gameView.html',
            controller: 'GameViewController'
        });
    $urlRouterProvider.otherwise('/index');
});

myApp.controller('GameViewController', function($scope) {
    $scope.name = 'zxh';
});

