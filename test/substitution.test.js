const { substitution } = require("../src/substitution.js");
const expect = require("chai").expect;

describe("substitution", () => {
  it("should return false should return false given alphabet is not exactly 26 letters", () => {
    const input = "input";
    const alphabet = "asdfghjk";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });

  it("should encode the input by using the given alphabet", () => {
    const input = "thinkful";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(input, alphabet);
    const expected = "jrufscpw";
    expect(actual).to.equal(expected);
  });

  it("should decode the input using the given alphabet", () => {
    const input = "jrufscpw";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(input, alphabet, false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });

  it("should return false if there are duplicate characters in the given alphabet.", () => {
    const input = "abc";
    const alphabet = "aabcdefghijklmnopqrstuvwx";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });

  it("should ignore spaces when encoding", () => {
    const input = "You are an excellent spy";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(input, alphabet);
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.equal(expected);
  });

  it("should ignore spaces when decoding", () => {
    const input = "elp xhm xf mbymwwmfj dne";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(input, alphabet, false);
    const expected = "you are an excellent spy";
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const input = "You are an excellent spy";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(input, alphabet);
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.equal(expected);
  });

  it("should return false if the given alphabet is missing", () => {
    const input = "hola";
    const actual = substitution(input);
    expect(actual).to.be.false;
  });

  it("should return false if the given alphabet doesn't contain unique characters", () => {
    const input = "plz return false";
    const alphabet = "aabbccddeeffgghhiijjkkllmm";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });

  it("should encode with any key with unique characters", () => {
    const input = "message";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(input, alphabet);
    const expected = "y&ii$r&";
    expect(actual).to.equal(expected);
  });

  it("should decode with any key with unique characters", () => {
    const input = "y&ii$r&";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(input, alphabet, false);
    const expected = "message";
    expect(actual).to.equal(expected);
  });
});
