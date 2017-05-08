//call module with app.js
var app = angular.module('angularApp');
//create factory to return num object
app.factory('fizzBuzzService', function() {
	//set empty object for numbers
	var num;
	var numArray = [];
	var response;
	var fizzBuzzArray = [];
	
	//complete correct array
	function createFizzBuzzArr(i) {
		fizzBuzzArray = [];
			for (i=1; i<=100; i++) {
				if (i%3 === 0 && i%5 === 0) {
					i = "FizzBuzz";
				} else if (i%5 === 0) {
					i = "Buzz";
				} else if (i%3 === 0) {
					i = "Fizz";
				} else {
					i;
				}
				numArray.push(i);
			}
		return fizzBuzzArray;
	};
	
	createFizzBuzzArr();
	
	return {
		//pull words from entry from
		setGuess: function(guess) {
			num = guess;
		},
		//send words to story
		getWords: function(num){
			fizzBuzzArray.forEach(function(i) {
				if (num == i) {
					response = i;
				} else {
					response = "Wrong"
				}			  
							  })
		return response;
	}
};
	}
});

		