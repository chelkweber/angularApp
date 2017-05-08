//call module with app.js
var app = angular.module('angularApp');
//create factory to return num object
app.factory('fizzBuzzService', function() {
	//set empty object for numbers
	var response = {};
	var num;
	var fizzBuzzArray = [];
	
	return {
		//function to set number value with ;
		setNum: function(entry) {
			response.num = entry;
			if (response.num%3 === 0 && response.num%5 === 0) {
				response.word = " would be FizzBuzz";
			} else if (response.num%5 === 0) {
				response.word = " would be Buzz";
			} else if (response.num%3 === 0) {
				response.word = " would be Fizz";
			} else {
				response.word = " would be " + entry;
			}
		},
		getResponse: function() {
			return response;
		},
		createFizzBuzz: function(i) {
			fizzBuzzArray = [];
			for (i=1; i<=100; i++) {
				if (i%3 === 0 && i%5 === 0) {
					num = "FizzBuzz";
				} else if (i%5 === 0) {
					num = "Buzz";
				} else if (i%3 === 0) {
					num = "Fizz";
				} else {
					num = i;
				}
				fizzBuzzArray.push(num);
			}
			return fizzBuzzArray;
		}
	}
});
	
	

		