// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) return false;
    if (alphabet.length !== 26) return false;
    if (Array.from(new Set(alphabet)).length !== 26) return false;
    let splitAlpha = alphabet.split("");
    let lowInput = input.toLowerCase();
    let abcs = "abcdefghijklmnopqrstuvwxyz";
    let splitABCs = abcs.split("");
    let encoded = {};
    let decoded = {};
    let result = "";
    splitABCs.forEach((letter, index) => {
      encoded[letter] = splitAlpha[index]; //{ a: x }
      decoded[splitAlpha[index]] = letter; //{ x: a }
    });
    if (!encode) encoded = decoded;
    lowInput.split("").forEach((char) => {
      result += char === " " ? " " : encoded[char];
    });
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
