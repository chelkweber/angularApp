var app = angular.module('angularApp');

app.controller('fizzBuzzCtrl', function($scope, fizzBuzzService) {
	console.log('Fizz Buzz ctrl has loaded');
	$scope.fizzBuzzArray = [];
	
	
	$scope.numEntry = function(entry) {
		fizzBuzzService.setNum(entry);
	}
	
	$scope.numResponse = fizzBuzzService.getResponse();
	console.log($scope.numResponse);
	
	$scope.showFizzBuzz = function() {
		$scope.fizzBuzzArray = fizzBuzzService.createFizzBuzz();	
		console.log($scope.fizzBuzzArray);
	}

});