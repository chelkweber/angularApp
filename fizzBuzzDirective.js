var app = angular.module('angularApp');

app.directive('fbresponse', function() {
	return {
		restrict: 'E',
		template: '<div class="fizz-buzz-response"><p class="display {{ numResponse.cls }}"> {{ numResponse.num }}{{ numResponse.word }}</p></div>',
		replace: false
	}		
});
			