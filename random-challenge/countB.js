function countChar(str, charItem) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === charItem) {
      count++;
    }
  }
  return count;
}

console.log(countChar("kakkerlak", "k"));
console.log(countChar("bakelashD", "D"));
