const whoWon = require("../RPS.js");

describe("whoWon", function() {
    test("should return TIE if players select same object", function() {
        let result = whoWon("rock", "rock");
        expect(result).toBe("TIE!");
    });
    test("should return 'player 2 wins!' if p1=rock and p2=paper", function() {
        let result = whoWon("rock", "paper");
        expect(result).toBe("Player 2 wins!");
    });
    test("should return 'player 2 wins!' if p1=paper and p2=scissors", function() {
        let result = whoWon("paper", "scissors");
        expect(result).toBe("Player 2 wins!");
    });
    test("should return 'player 2 wins!' if p1=scissors and p2=rock", function() {
        let result = whoWon("scissors", "rock");
        expect(result).toBe("Player 2 wins!");
    });
    test("should return 'player 1 wins!' if p1=paper and p2=rock", function() {
        let result = whoWon("paper", "rock");
        expect(result).toBe("Player 1 wins!");
    });
    test("should return 'player 1 wins!' if p1 = scissors and p2 = paper", function() {
        let result = whoWon("scissors", "paper");
        expect(result).toBe("Player 1 wins!");
    });
    test("should return 'player 1 wins!' if p1=rock and p2=scissors", function() {
        let result = whoWon("rock", "scissors");
        expect(result).toBe("Player 1 wins!");
    });
});