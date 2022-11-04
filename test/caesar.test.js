const { caesar } = require("../src/caesar.js");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should return false if the shift value is equal to 0", () => {
    const input = "thinkful";
    const shift = 0;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });

  it("should return false if the shift amount is less than -25", () => {
    const input = "thinkful";
    const shift = -26;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });

  it("should return false if the shift amount is greater than 25", () => {
    const input = "thinkful";
    const shift = 26;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });

  it("should return false if the shift amount is not present", () => {
    const input = "thinkful";
    const shift = "";
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });

  it("should ignore capital letters", () => {
    const input = "A Message";
    const shift = 1;
    const actual = caesar(input, shift);
    const expected = "b nfttbhf";
    expect(actual).to.equal(expected);
  });

  it("should encode the input by shifting the letters", () => {
    const input = "thinkful";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });

  it("should leave spaces and symbols as is", () => {
    const input = "This is a secret message!";
    const shift = 8;
    const actual = caesar(input, shift);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.equal(expected);
  });

  it("should loop back around when reaching the end of the alphabet", () => {
    const input = "zebra magazine";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "cheud pdjdclqh";
    expect(actual).to.equal(expected);
  });

  it("should allow a negative shift value that will shift to the left", () => {
    const input = "zebra magazine";
    const shift = -3;
    const actual = caesar(input, shift);
    const expected = "wbyox jxdxwfkb";
    expect(actual).to.equal(expected);
  });

  it("should decode by shifting letters to the left", () => {
    const input = "wklqnixo";
    const shift = 3;
    const actual = caesar(input, shift, false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });

  it("should leave spaces and other symbols as is", () => {
    const input = "wklqnixo .!";
    const shift = 3;
    const actual = caesar(input, shift, false);
    const expected = "thinkful .!";
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const input = "WKlqnixo .!";
    const shift = 3;
    const actual = caesar(input, shift, false);
    const expected = "thinkful .!";
    expect(actual).to.equal(expected);
  });

  it("should loop back around when reaching the beginning of the alphabet", () => {
    const input = "abc";
    const shift = 3;
    const actual = caesar(input, shift, false);
    const expected = "xyz";
    expect(actual).to.equal(expected);
  });

  it("should allow a negative shift value that will shift to the left", () => {
    const input = "qefkhcri";
    const shift = -3;
    const actual = caesar(input, shift, false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
});
