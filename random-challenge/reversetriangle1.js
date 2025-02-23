function createReverseTriangle(n) {
  let triangleRes = "";
  for (let i = n; i > 0; i--) {
    for (j = 0; j < i; j++) {
      triangleRes += "#";
    }
    triangleRes += "\n";
  }
  return triangleRes;
}

console.log(createReverseTriangle(5));
