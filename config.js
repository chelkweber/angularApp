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

        }).when('/',{
            template:'<div class="homePage"><br><br><h1>WELCOME TO DAGOBAH</h1><br><br><br><p style="text-align:center"> CLICK ONE OF THE LINKS TO GET STARTED </p></div>'
        })
            
        
    });
})()