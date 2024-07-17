const chessRow = 8;
const chessCol = 8;
let chessboard = "";

for (let i = 0; i < chessRow; i++) {
  for (let j = 0; j < chessCol; j++) {
    if (i % 2 === 0) {
      chessboard += j % 2 === 0 ? " " : "#";
    } else {
      chessboard += j % 2 === 0 ? "#" : " ";
    }
  }
  chessboard += "\n";
}

console.log(chessboard);
