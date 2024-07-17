function createHorizontalReverseTriangle(n) {
  let triangleRes = "";
  for (let i = n; i > 0; i--) {
    for (let j = n - i; j > 0; j--) {
      triangleRes += "#";
    }
    triangleRes += "\n";
  }
  return triangleRes;
}

console.log(createHorizontalReverseTriangle(7));
