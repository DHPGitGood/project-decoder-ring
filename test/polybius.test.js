const { polybius } = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybius", () => {
  it("should translate letters i and j to 42", () => {
    const input = "ij";
    const actual = polybius(input);
    const expected = "4242";
    expect(actual).to.equal(expected);
  });

  it("should translate 42 to (i/j)", () => {
    const input = "42";
    const actual = polybius(input, false);
    expect(actual).to.include("i");
    expect(actual).to.include("j");
  });

  it("should ignore capital letters", () => {
    const input = "Hello world";
    const actual = polybius(input);
    const expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in the message before and after encoding", () => {
    const input = "Hello world";
    const actual = polybius(input);
    const expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in the message before and after decoding", () => {
    const input = "3251131343 2543241341";
    const actual = polybius(input, false);
    const expected = "hello world";
    expect(actual).to.equal(expected);
  });

  it("should encode a message by transposing each letter to number pairs", () => {
    const input = "Hello world";
    const actual = polybius(input);
    const expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  });

  it("should decode a message by transposing each pair of numbers into a letter", () => {
    const input = "3251131343 2543241341";
    const actual = polybius(input, false);
    const expected = "hello world";
    expect(actual).to.equal(expected);
  });

  it("should return false if length of numbers is odd", () => {
    const input = "44324233521254134";
    const actual = polybius(input, false);
    expect(actual).to.be.false;
  });
});
