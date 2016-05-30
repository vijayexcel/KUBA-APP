// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

(function () {

    var app = angular.module('MyNotes', ['ionic']);

    app.controller('ListCtrl', function ($scope) {

        $scope.notes = [
            {
                title: 'First Note',
                description: 'This is my first note.'
            },
            {
                title: 'Second Note',
                description: 'This is my second note.'
            },
        ];

    });

    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('list', {
            url: '/list',
            templateUrl: 'templates/list.html'
        });

        $stateProvider.state('edit', {
            url: '/edit',
            templateUrl: 'templates/edit.html'
        });

        $urlRouterProvider.otherwise('/list');

    });

    app.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.platformId === 'ios' && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                window.cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })


}());