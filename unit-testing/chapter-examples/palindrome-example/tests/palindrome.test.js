const isPalindrome = require('../palindrome.js');

describe("isPalindrome", function() {
//positive test cases
    test("should return true for a single letter", function() {
        expect(isPalindrome("a")).toBe(true);
    });
    test("should return true for a single letter repeated", function() {
        expect(isPalindrome("aaa")).toBe(true);
    });
    test("should return true for a basic palindrome", function() {
        expect(isPalindrome("aba")).toBe(true);
    });
    test("should return true for a longer palindrome", function() {
        expect(isPalindrome("racecar")).toBe(true);
    });
//negative test cases
    test("should return false for simple non palindrome", function() {
        expect(isPalindrome("ab")).toBe(false);
    });
    test("should return false for a longer non palindrome", function() {
        expect(isPalindrome("launchcode")).toBe(false);
    });
    test("should be case sensitive", function() {
        expect(isPalindrome("abA")).toBe(false);
    });
    test("should consider whitespace", function() {
        expect(isPalindrome("so many dynamos")).toBe(false);
    });
//edge case
    test("should consider the empty string a palindrome", function() {
        expect(isPalindrome("")).toBe(true);
    });
});
