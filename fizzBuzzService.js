//call module with app.js
var app = angular.module('angularApp');
//create factory to return num object
app.factory('fizzBuzzService', function() {
	//set empty object for numbers
	var num = {};
	var numArray = [];
	
	return {
		//function to set number value with ;
		setNum: function(i) {
			for (i=1; i<100; i++) {
				if (i%3 === 0 && i%5 === 0) {
					num = "FizzBuzz";
				} else if (i%5 === 0) {
					num = "Buzz";
				} else if (i%3 === 0) {
					num === "Fizz";
				} else {
					num = i;
				}
				numArray.push(num);
			}
	},
		//function to return number value
		getNum: function() {
			return numArray;
		}
	}
});

		