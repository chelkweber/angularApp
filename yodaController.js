(function(){
    var app = angular.module('angularApp');
    
    app.controller('yodaCtrl', function($scope,yodaService){
        $scope.getInputs = yodaService.yodaInput
    })
    
})()