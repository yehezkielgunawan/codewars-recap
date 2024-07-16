// url: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/fork/javascript
function accum(s) {
  let resArr = [];

  for (let i = 0; i < s.length; i++) {
    let index = i;
    while (index >= 0) {
      resArr.push(index === i ? s[i].toUpperCase() : s[i].toLowerCase());
      index--;
    }
    i < s.length - 1 && resArr.push("-");
  }
  return resArr.join("");
}
