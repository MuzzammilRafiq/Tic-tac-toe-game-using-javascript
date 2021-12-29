let table = document.querySelector("table");
let button = document.getElementById("btn");
let contentArr = new Array(9);
let message = document.getElementById("result");
let currTurn = "X";
let gameOver = false;
message.innerText = `Player ${currTurn} Turn `;

let count = 0;

table.addEventListener("click", function (e) {
  let squareBoxID = parseInt(e.target.id);
  let currClick = document.getElementById(squareBoxID);
  if (!gameOver && squareBoxID >= 1 && squareBoxID <= 9 )
    if (count < 9 && currClick.innerText == "") {
      if (currTurn == "X") {
        currClick.innerText = "X";
        currTurn = "O";
        contentArr[squareBoxID - 1] = "X";
      } else {
        currClick.innerText = "O";
        currTurn = "X";
        contentArr[squareBoxID - 1] = "O";
      }
      count++;
      message.innerText = `Player ${currTurn} Turn `;
    }

  if (count >= 5) {
    if (count == 9) {
      message.innerText = "No one won";
      gameOver = true;
    }
    if (
        (contentArr[0] == "X" && contentArr[1] == "X" && contentArr[2] == "X") ||
        (contentArr[3] == "X" && contentArr[4] == "X" && contentArr[5] == "X") ||
        (contentArr[6] == "X" && contentArr[7] == "X" && contentArr[8] == "X") ||
        (contentArr[0] == "X" && contentArr[4] == "X" && contentArr[8] == "X") ||
        (contentArr[2] == "X" && contentArr[4] == "X" && contentArr[6] == "X") ||
        (contentArr[0] == "X" && contentArr[3] == "X" && contentArr[6] == "X") ||
        (contentArr[4] == "X" && contentArr[1] == "X" && contentArr[7] == "X") ||
        (contentArr[8] == "X" && contentArr[5] == "X" && contentArr[2] == "X")
        ) {
            message.innerText = "Player 'X' won";
            gameOver = true;
        } else if (
            (contentArr[0] == "O" && contentArr[1] == "O" && contentArr[2] == "O") ||
            (contentArr[3] == "O" && contentArr[4] == "O" && contentArr[5] == "O") ||
            (contentArr[6] == "O" && contentArr[7] == "O" && contentArr[8] == "O") ||
            (contentArr[0] == "O" && contentArr[4] == "O" && contentArr[8] == "O") ||
            (contentArr[2] == "O" && contentArr[4] == "O" && contentArr[6] == "O") ||
            (contentArr[0] == "O" && contentArr[3] == "O" && contentArr[6] == "O") ||
            (contentArr[4] == "O" && contentArr[1] == "O" && contentArr[7] == "O") ||
            (contentArr[8] == "O" && contentArr[5] == "O" && contentArr[2] == "O")
            ) {
                message.innerText = "Player 'O' won";
                gameOver = true;
    }
  }
});

button.addEventListener("click", function () {
  for (var i = 1; i <= 9; i++) {
    document.getElementById(i).innerText = "";
  }
  count = 0;
  gameOver = false;
});

