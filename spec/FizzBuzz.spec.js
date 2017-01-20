var FizzBuzzOf = require('../lib/izzBuzz').FizzBuzzOf

describe("FizzBuzzOf execution", function () {

    it("should return ChangeMe at the beginning with parameter 1", function () {
        expect(FizzBuzzOf(1)).toBe("ChangeMe");
    });
    it("should return Fizz at the beginning with parameter 3 %", function(){
    	expect(FizzBuzzOf(%3)).toBe("Fizz");
    })

});