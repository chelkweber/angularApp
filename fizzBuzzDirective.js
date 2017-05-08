var app = angular.module('angularApp');

app.directive('fizzBuzzResponse', function() {
	return {
		restrict: 'E',
		template: '<div class="fizz-buzz-response"><p> {{ numResponse.num }}{{ numResponse.word }}</p></div>',
		replace: false
	}		
});
			