(function (){
    var app = angular.module('angularApp');

    app.config(function($routeProvider){
        $routeProvider.when('/view1',{
            templateUrl:('view1.html'),
            controller:('fizzBuzzCtrl')
        }) 
        .when('/view2',{
            templateUrl:('view2.html'),
            controller:('yodaCtrl')

        })
            
        
    });
})()