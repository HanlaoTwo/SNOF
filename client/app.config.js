/**
     * Created by han on 2017/2/13.
     */
'use strict';

angular.module('myapp').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        console.log("*****app.config.js*****");

        $routeProvider
            .when('/1', {
                templateUrl: 'module1/module1.html',
                controller: 'Module1Ctrl',
                controllerAs: 'vm'
            })
            .when('/2', {
                templateUrl: 'module2/module2.html'
            })
            .otherwise('/index');
    }
]);