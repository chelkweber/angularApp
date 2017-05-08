var app = angular.module('angularApp');

app.controller('fizzBuzzCtrl', function($scope, fizzBuzzService) {
	console.log('Fizz Buzz ctrl has loaded');
	
	
	
	$scope.numArray = fizzBuzzService.setNum();
	console.log($scope.numArray);
});
