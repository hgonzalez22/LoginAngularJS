var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    
    $routeProvider

        .when('/',{
        templateUrl: 'index.html'
        })
        .when('/home',{
            templateUrl: 'views/home.html'
        })
        .when('/login',{
            templateUrl: 'views/login.html'
        })
        .when('/registrarUsuario',{
            templateUrl: 'views/registrarUsuario.html'
        })        
        .otherwise({
            redirectTo: '/home'
        });

        // .when('/iniciarSesion'.{
        //     templateUrl: '../views/'
        // })
 }]);


app.controller('controlador', ['$scope', function($scope){
        
}]);



