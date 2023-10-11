// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("should have value nonprofit for key organization", () => {
    expect(launchcode.organization).toBe("nonprofit");
  });
  test("should have 'Jeff' as value for key executive director", () => {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  test("should have 100 percent cool employees", () => {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  test("programs offered array should include 'Web Development', 'Data Analysis', and 'Liftoff', and have a length of 3", () => {
    expect(launchcode.programsOffered).toBeInstanceOf(Array);
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });
  test("method should return 'Launch!' when passed number that is only divisible by 2", () => {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  });
  test("method should return 'Code!' when passed number that is only divisible by 3", () => {
    expect(launchcode.launchOutput(3)).toBe("Code!");
  });
  test("method should return 'Rocks!' when passed number that is only divisible by 5", () => {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });
  test("method should return 'Launchcode!' when passed number that is divisible by 2 and 3", () => {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });
  test("method should return 'Code Rocks!' when passed number that is divisible by 3 and 5", () => {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });
  test("method should return 'Launch Rocks!' when passed number that is divisible by 2 and 5", () => {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (Crash!!!!)");
  });
  test("method should return 'LaunchCode Rocks!' when passed number that is divisible by 2, 3, and 5", () => {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });
  test("method should return 'Rutabagas! that doesn't work!' when passed number not divisible by 2, 3, or 5", () => {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work!");
  });

});