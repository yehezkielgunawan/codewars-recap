// easy challenge to create triagle with for loop

function createTriangle(n) {
  let triangleRes = "";
  for (let i = 0; i < n; i++) {
    for (j = 0; j <= i; j++) {
      triangleRes += "#";
    }
    triangleRes += "\n";
  }
  return triangleRes;
}

console.log(createTriangle(5));
