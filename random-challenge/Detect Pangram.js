function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowerCaseString = string.toLowerCase();
  let result = true;
  for (let i = 0; i < alphabet.length; i++) {
    if (lowerCaseString.indexOf(alphabet[i]) === -1) {
      result = false;
      break;
    }
  }
  return result;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
