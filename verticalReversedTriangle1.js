function createVerticalReverseTriangle(n) {
  let triangleRes = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j < i) {
        triangleRes += " ";
      } else {
        triangleRes += "#";
      }
    }
    triangleRes += "\n";
  }
  return triangleRes;
}

console.log(createVerticalReverseTriangle(5));
