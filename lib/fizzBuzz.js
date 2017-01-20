var FizzBuzz = function () {
	for (var i = 1; i <= 100; i++) {
		var affichage = FizzBuzzOf(i);
		console.log(affichage);
	}
};

var FizzBuzzOf = function (n) {
	if (n %3 === 0) {
		return "fizz";
	}
	if (n %5 ===0){
		return "buzz";

	} else{
		return "ChangeMe";
	}

};


module.exports = {
	FizzBuzz: FizzBuzz,
	FizzBuzzOf: FizzBuzzOf
};