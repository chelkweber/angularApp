(function(){
    var app = angular.module('angularApp');
    
    app.controller('yodaCtrl', function($scope,yodaService){
        
  $scope.setSpeech = function (yodaSpeak){
     yodaService.talkLikeYoda(yodaSpeak).then(function(input){
$scope.theForce = input.data     
         console.log($scope.theForce)
     })
 };
    });
})()