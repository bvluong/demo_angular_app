let demoApp = angular.module('demoApp', []);

function simpleController($scope) {
    $scope.customers = [
        {name: "Bryant", city: "Sunnyvale"},
        {name: "Audrey", city: "San Mateo"},
        {name: "Sam", city: "San Francisco"}
    ];
}

let configureRoutes = function($routeProvider) {
    $routeProvider
    .when('/',
    {
        controller: 'simpleController',
        templareURL: 'partials/view1.html'
    });
}

demoApp.controller('simpleController', simpleController)

function demoApp.config(configureRoutes);