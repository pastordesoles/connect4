//DOM Elements and items
const holes = document.getElementsByClassName("hole");
let currentPlayer = 1;
const col1 = document.getElementsByClassName("col1");
const col2 = document.getElementsByClassName("col2");
const col3 = document.getElementsByClassName("col3");
const col4 = document.getElementsByClassName("col4");
const col5 = document.getElementsByClassName("col5");
const col6 = document.getElementsByClassName("col6");
const col7 = document.getElementsByClassName("col7");

const row1 = document.getElementsByClassName("row1");
const row2 = document.getElementsByClassName("row2");
const row3 = document.getElementsByClassName("row3");
const row4 = document.getElementsByClassName("row4");
const row5 = document.getElementsByClassName("row5");
const row6 = document.getElementsByClassName("row6");

let rows = 6;
let columns = 7;
let verticalWin = false;
let horizontalWin = false;
let diagonalWin = false;
let fullHoles = 0;
let board = [
  Array.from(row1),
  Array.from(row2),
  Array.from(row3),
  Array.from(row4),
  Array.from(row5),
  Array.from(row6),
];
console.log(board);

//Fill the gaps from bottom sequence

const fillFromBottom = (hole) => {
  let currentColumn = hole.classList.value[8];

  switch (currentColumn) {
    case "1":
      for (let i = col1.length - 1; i >= 0; i--) {
        if (!col1[i].classList.contains("taken")) {
          fillSlot(col1[i]);
          return;
        }
      }
      break;
    case "2":
      for (let i = col2.length - 1; i >= 0; i--) {
        if (!col2[i].classList.contains("taken")) {
          fillSlot(col2[i]);
          return;
        }
      }
      break;

    case "3":
      for (let i = col3.length - 1; i >= 0; i--) {
        if (!col3[i].classList.contains("taken")) {
          fillSlot(col3[i]);
          return;
        }
      }
      break;

    case "4":
      for (let i = col4.length - 1; i >= 0; i--) {
        if (!col4[i].classList.contains("taken")) {
          fillSlot(col4[i]);
          return;
        }
      }
      break;

    case "5":
      for (let i = col5.length - 1; i >= 0; i--) {
        if (!col5[i].classList.contains("taken")) {
          fillSlot(col5[i]);
          return;
        }
      }
      break;

    case "6":
      for (let i = col6.length - 1; i >= 0; i--) {
        if (!col6[i].classList.contains("taken")) {
          fillSlot(col6[i]);
          return;
        }
      }
      break;

    case "7":
      for (let i = col7.length - 1; i >= 0; i--) {
        if (!col7[i].classList.contains("taken")) {
          fillSlot(col7[i]);
          return;
        }
      }
      break;
  }
};

const fillSlot = (hole) => {
  let currentColumn = hole.classList.value[8] - 1;
  let currentRow = hole.classList.value[13] - 1;
  if (currentPlayer === 1) {
    hole.classList.add("player-one");
    hole.classList.add("taken");
    board[currentRow].splice(currentColumn, 1, 1);
    currentPlayer = 2;
    fullHoles++;
  } else if (currentPlayer === 2) {
    hole.classList.add("player-two");
    hole.classList.add("taken");
    board[currentRow].splice(currentColumn, 1, 2);
    currentPlayer = 1;
    fullHoles++;
  }

  if (fullHoles === 42 && !verticalWin && !horizontalWin && !diagonalWin) {
    checkDraw(hole);
  } else {
    //checkVertical(hole);
    //checkHorizontal(hole);
    checkDiagonal(board);
  }
};

//Winning conditions

/*
const checkVertical = () => {
  for (let i = 0; i < holes.length; i++) {
    if (
      holes[i].classList.contains("player-one") &&
      holes[i + 7].classList.contains("player-one") &&
      holes[i + 14].classList.contains("player-one") &&
      holes[i + 21].classList.contains("player-one")
    ) {
      setWinner();
      return;
    } else if (
      holes[i].classList.contains("player-two") &&
      holes[i + 7].classList.contains("player-two") &&
      holes[i + 14].classList.contains("player-two") &&
      holes[i + 21].classList.contains("player-two")
    ) {
      setWinner();
      return;
    }
  }
};
*/

const checkDraw = (hole) => {
  alert("Draw");
  for (let hole of holes) {
    hole.classList.remove("player-one", "player-two", "taken");
  }
};

const checkHorizontal = (hole) => {
  let currentRow = hole.classList.value[13];

  switch (currentRow) {
    case "1":
      let selected1 = 0;
      for (let i = 0; i < row1.length; i++) {
        if (row1[i].classList.contains("taken")) {
          selected1++;
        }
      }
      if (selected1 >= 4) {
        for (let i = 0; i <= 3; i++) {
          if (
            row1[i].classList.contains("player-one") &&
            row1[i + 1].classList.contains("player-one") &&
            row1[i + 2].classList.contains("player-one") &&
            row1[i + 3].classList.contains("player-one")
          ) {
            horizontalWin = true;
            setWinner();
            return;
          } else if (
            row1[i].classList.contains("player-two") &&
            row1[i + 1].classList.contains("player-two") &&
            row1[i + 2].classList.contains("player-two") &&
            row1[i + 3].classList.contains("player-two")
          ) {
            horizontalWin = true;
            setWinner();
            return;
          }
        }
      }
      break;
    case "2":
      let selected2 = 0;
      for (let i = 0; i < row2.length; i++) {
        if (row2[i].classList.contains("taken")) {
          selected2++;
        }
      }

      if (selected2 >= 4) {
        for (let i = 0; i <= 3; i++) {
          if (
            row2[i].classList.contains("player-one") &&
            row2[i + 1].classList.contains("player-one") &&
            row2[i + 2].classList.contains("player-one") &&
            row2[i + 3].classList.contains("player-one")
          ) {
            horizontalWin = true;
            setWinner();
            return;
          } else if (
            row2[i].classList.contains("player-two") &&
            row2[i + 1].classList.contains("player-two") &&
            row2[i + 2].classList.contains("player-two") &&
            row2[i + 3].classList.contains("player-two")
          ) {
            horizontalWin = true;
            setWinner();
            return;
          }
        }
      }
      break;

    case "3":
      let selected3 = 0;
      for (let i = 0; i < row3.length; i++) {
        if (row3[i].classList.contains("taken")) {
          selected3++;
        }
      }

      if (selected3 >= 4) {
        for (let i = 0; i <= 3; i++) {
          if (
            row3[i].classList.contains("player-one") &&
            row3[i + 1].classList.contains("player-one") &&
            row3[i + 2].classList.contains("player-one") &&
            row3[i + 3].classList.contains("player-one")
          ) {
            horizontalWin = true;
            setWinner();
            return;
          } else if (
            row3[i].classList.contains("player-two") &&
            row3[i + 1].classList.contains("player-two") &&
            row3[i + 2].classList.contains("player-two") &&
            row3[i + 3].classList.contains("player-two")
          ) {
            horizontalWin = true;
            setWinner();
            return;
          }
        }
      }
      break;

    case "4":
      let selected4 = 0;
      for (let i = 0; i < row4.length; i++) {
        if (row4[i].classList.contains("taken")) {
          selected4++;
        }
      }
      if (selected4 >= 4) {
        for (let i = 0; i <= 3; i++) {
          if (
            row4[i].classList.contains("player-one") &&
            row4[i + 1].classList.contains("player-one") &&
            row4[i + 2].classList.contains("player-one") &&
            row4[i + 3].classList.contains("player-one")
          ) {
            horizontalWin = true;
            setWinner();
            return;
          } else if (
            row4[i].classList.contains("player-two") &&
            row4[i + 1].classList.contains("player-two") &&
            row4[i + 2].classList.contains("player-two") &&
            row4[i + 3].classList.contains("player-two")
          ) {
            horizontalWin = true;
            setWinner();
            return;
          }
        }
      }
      break;

    case "5":
      let selected5 = 0;
      for (let i = 0; i < row5.length; i++) {
        if (row5[i].classList.contains("taken")) {
          selected5++;
        }
      }

      if (selected5 >= 4) {
        for (let i = 0; i <= 3; i++) {
          if (
            row5[i].classList.contains("player-one") &&
            row5[i + 1].classList.contains("player-one") &&
            row5[i + 2].classList.contains("player-one") &&
            row5[i + 3].classList.contains("player-one")
          ) {
            horizontalWin = true;
            setWinner();
            return;
          } else if (
            row5[i].classList.contains("player-two") &&
            row5[i + 1].classList.contains("player-two") &&
            row5[i + 2].classList.contains("player-two") &&
            row5[i + 3].classList.contains("player-two")
          ) {
            horizontalWin = true;
            setWinner();
            return;
          }
        }
      }
      break;

    case "6":
      let selected6 = 0;
      for (let i = 0; i < row6.length; i++) {
        if (row6[i].classList.contains("taken")) {
          selected6++;
        }
      }

      if (selected6 >= 4) {
        for (let i = 0; i <= 3; i++) {
          if (
            row6[i].classList.contains("player-one") &&
            row6[i + 1].classList.contains("player-one") &&
            row6[i + 2].classList.contains("player-one") &&
            row6[i + 3].classList.contains("player-one")
          ) {
            horizontalWin = true;
            setWinner();
            return;
          } else if (
            row6[i].classList.contains("player-two") &&
            row6[i + 1].classList.contains("player-two") &&
            row6[i + 2].classList.contains("player-two") &&
            row6[i + 3].classList.contains("player-two")
          ) {
            horizontalWin = true;
            setWinner();
            return;
          }
        }
      }

      break;
  }
};

const checkDiagonal = (board) => {
  // Check down-right
  for (let r = 0; r < 3; r++) {
    for (c = 0; c < 4; c++) {
      if (
        board[r][c] === 1 &&
        board[r + 1][c + 1] === 1 &&
        board[r + 2][c + 2] === 1 &&
        board[r + 3][c + 3] === 1
      ) {
        diagonalWin = true;
        setWinner();
      } else if (
        board[r][c] === 2 &&
        board[r + 1][c + 1] === 2 &&
        board[r + 2][c + 2] === 2 &&
        board[r + 3][c + 3] === 2
      ) {
        diagonalWin = true;
        setWinner();
      }
    }
  }

  // Check down-left
  for (r = 3; r < 6; r++) {
    for (c = 0; c < 4; c++) {
      if (
        board[r][c] === 1 &&
        board[r - 1][c + 1] === 1 &&
        board[r - 2][c + 2] === 1 &&
        board[r - 3][c + 3] === 1
      ) {
        diagonalWin = true;
        setWinner();
      } else if (
        board[r][c] === 2 &&
        board[r - 1][c + 1] === 2 &&
        board[r - 2][c + 2] === 2 &&
        board[r - 3][c + 3] === 2
      ) {
        diagonalWin = true;
        setWinner();
      }
    }
  }
};

const checkVertical = (hole) => {
  let currentColumn = hole.classList.value[8];

  switch (currentColumn) {
    case "1":
      let selected1 = 0;
      for (let i = 0; i < col1.length; i++) {
        if (col1[i].classList.contains("taken")) {
          selected1++;
        }
      }
      if (selected1 >= 4) {
        for (let i = 0; i <= 2; i++) {
          if (
            col1[i].classList.contains("player-one") &&
            col1[i + 1].classList.contains("player-one") &&
            col1[i + 2].classList.contains("player-one") &&
            col1[i + 3].classList.contains("player-one")
          ) {
            verticalWin = true;
            setWinner();
            return;
          } else if (
            col1[i].classList.contains("player-two") &&
            col1[i + 1].classList.contains("player-two") &&
            col1[i + 2].classList.contains("player-two") &&
            col1[i + 3].classList.contains("player-two")
          ) {
            verticalWin = true;
            setWinner();
            return;
          }
        }
      }
      break;
    case "2":
      let selected2 = 0;
      for (let i = 0; i < col2.length - 1; i++) {
        if (col2[i].classList.contains("taken")) {
          selected2++;
        }
      }

      if (selected2 >= 4) {
        for (let i = 0; i <= 2; i++) {
          if (
            col2[i].classList.contains("player-one") &&
            col2[i + 1].classList.contains("player-one") &&
            col2[i + 2].classList.contains("player-one") &&
            col2[i + 3].classList.contains("player-one")
          ) {
            verticalWin = true;
            setWinner();
            return;
          } else if (
            col2[i].classList.contains("player-two") &&
            col2[i + 1].classList.contains("player-two") &&
            col2[i + 2].classList.contains("player-two") &&
            col2[i + 3].classList.contains("player-two")
          ) {
            verticalWin = true;
            setWinner();
            return;
          }
        }
      }
      break;

    case "3":
      let selected3 = 0;
      for (let i = 0; i < col3.length; i++) {
        if (col3[i].classList.contains("taken")) {
          selected3++;
        }
      }

      if (selected3 >= 4) {
        for (let i = 0; i <= 2; i++) {
          if (
            col3[i].classList.contains("player-one") &&
            col3[i + 1].classList.contains("player-one") &&
            col3[i + 2].classList.contains("player-one") &&
            col3[i + 3].classList.contains("player-one")
          ) {
            verticalWin = true;
            setWinner();
            return;
          } else if (
            col3[i].classList.contains("player-two") &&
            col3[i + 1].classList.contains("player-two") &&
            col3[i + 2].classList.contains("player-two") &&
            col3[i + 3].classList.contains("player-two")
          ) {
            verticalWin = true;
            setWinner();
            return;
          }
        }
      }
      break;

    case "4":
      let selected4 = 0;
      for (let i = 0; i < col4.length; i++) {
        if (col4[i].classList.contains("taken")) {
          selected4++;
        }
      }
      if (selected4 >= 4) {
        for (let i = 0; i <= 2; i++) {
          if (
            col4[i].classList.contains("player-one") &&
            col4[i + 1].classList.contains("player-one") &&
            col4[i + 2].classList.contains("player-one") &&
            col4[i + 3].classList.contains("player-one")
          ) {
            verticalWin = true;
            setWinner();
            return;
          } else if (
            col4[i].classList.contains("player-two") &&
            col4[i + 1].classList.contains("player-two") &&
            col4[i + 2].classList.contains("player-two") &&
            col4[i + 3].classList.contains("player-two")
          ) {
            verticalWin = true;
            setWinner();
            return;
          }
        }
      }
      break;

    case "5":
      let selected5 = 0;
      for (let i = 0; i < col5.length; i++) {
        if (col5[i].classList.contains("taken")) {
          selected5++;
        }
      }

      if (selected5 >= 4) {
        for (let i = 0; i <= 2; i++) {
          if (
            col5[i].classList.contains("player-one") &&
            col5[i + 1].classList.contains("player-one") &&
            col5[i + 2].classList.contains("player-one") &&
            col5[i + 3].classList.contains("player-one")
          ) {
            verticalWin = true;
            setWinner();
            return;
          } else if (
            col5[i].classList.contains("player-two") &&
            col5[i + 1].classList.contains("player-two") &&
            col5[i + 2].classList.contains("player-two") &&
            col5[i + 3].classList.contains("player-two")
          ) {
            verticalWin = true;
            setWinner();
            return;
          }
        }
      }
      break;

    case "6":
      let selected6 = 0;
      for (let i = 0; i < col6.length; i++) {
        if (col6[i].classList.contains("taken")) {
          selected6++;
        }
      }

      if (selected6 >= 4) {
        for (let i = 0; i <= 2; i++) {
          if (
            col6[i].classList.contains("player-one") &&
            col6[i + 1].classList.contains("player-one") &&
            col6[i + 2].classList.contains("player-one") &&
            col6[i + 3].classList.contains("player-one")
          ) {
            verticalWin = true;
            setWinner();
            return;
          } else if (
            col6[i].classList.contains("player-two") &&
            col6[i + 1].classList.contains("player-two") &&
            col6[i + 2].classList.contains("player-two") &&
            col6[i + 3].classList.contains("player-two")
          ) {
            verticalWin = true;
            setWinner();
            return;
          }
        }
      }

      break;

    case "7":
      let selected7 = 0;
      for (let i = 0; i < col7.length; i++) {
        if (col7[i].classList.contains("taken")) {
          selected7++;
        }
      }

      if (selected7 >= 4) {
        for (let i = 0; i <= 2; i++) {
          if (
            col7[i].classList.contains("player-one") &&
            col7[i + 1].classList.contains("player-one") &&
            col7[i + 2].classList.contains("player-one") &&
            col7[i + 3].classList.contains("player-one")
          ) {
            verticalWin = true;
            setWinner();
            return;
          } else if (
            col7[i].classList.contains("player-two") &&
            col7[i + 1].classList.contains("player-two") &&
            col7[i + 2].classList.contains("player-two") &&
            col7[i + 3].classList.contains("player-two")
          ) {
            verticalWin = true;
            setWinner();
            return;
          }
        }
      }

      break;
  }
};

const setWinner = () => {
  alert("Winner");
  if (confirm("Reset") === true) {
    resetBoard();
  }
};

const resetBoard = () => {
  horizontalWin = false;
  verticalWin = false;
  diagonalWin = false;

  for (let i = 0; i < board.length; i++) {
    for (let x = 0; x < board[i].length; x++) {
      board[i][x].splice(x,1,0)
    }
  }
  for (let hole of holes) {
    hole.classList.remove("player-one", "player-two", "taken");
  }
};

//Event listeners
for (let hole of holes) {
  hole.addEventListener("click", () => {
    fillFromBottom(hole);
  });
}
