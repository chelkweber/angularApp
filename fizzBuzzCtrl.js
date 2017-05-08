var app = angular.module('angularApp');

app.controller('fizzBuzzCtrl', function($scope, fizzBuzzService) {
	console.log('Fizz Buzz ctrl has loaded');

	fizzBuzzService.setNum();
	
	$scope.numArray = fizzBuzzService.getNum();
	console.log($scope.numArray);
});
