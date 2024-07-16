// url: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/fork/javascript
function accum(s) {
  function capitalize(s) {
    return s.toLowerCase().replace(/\b./g, function (a) {
      return a.toUpperCase();
    });
  }
  var a = s.split(""),
    res = "";
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < i + 1; j++) res += a[i];
    res += "-";
  }
  return capitalize(res.substr(0, res.length - 1));
}
