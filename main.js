var mainApp = angular.module("mainApp", ['ngRoute', 'webcontrollers']);
 
mainApp.config(function($routeProvider) {
    $routeProvider
        .when('/Lab01', {
            templateUrl: 'Lab01/Lab01.html',
            controller: 'QuizGameController'
        })
        .when('/Lab00', {
            templateUrl: 'Lab00/Lab00.html',
            controller: 'ContentController'
        })
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'LabController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

