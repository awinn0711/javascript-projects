const checkFive = require("../checkFive");

describe("checkFive", function() {
    test("should return 'number' is less than five if number is less than five", function() {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });
    test("should return 'number' is equal to five if number is 5", function() {
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });
    test("should return 'number' is greater than five if number > 5", function() {
        let output = checkFive(7);
        expect(output).toEqual("7 is greater than 5.");
    });
});