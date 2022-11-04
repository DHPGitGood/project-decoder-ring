// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25) return false;
    if (!encode) shift *= -1;
    let lowerInput = input.toLowerCase();
    let lowInputSplit = lowerInput.split("");
    let letters = lowInputSplit
      .map((letter) => {
        if (letter.charCodeAt(0) < 97) return letter;
        let num = letter.charCodeAt(0) + shift;
        if (num > 122) {
          num = 96 + (num - 122);
        }
        if (num < 97) {
          num = 123 + (num - 97);
        }
        return String.fromCharCode(num);
      })
      .join("");
    return letters;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
