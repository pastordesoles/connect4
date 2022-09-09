const holes = document.getElementsByClassName("hole");
let currentPlayer = 1;
const col1 = document.getElementsByClassName("col1");
const col2 = document.getElementsByClassName("col2");
const col3 = document.getElementsByClassName("col3");
const col4 = document.getElementsByClassName("col4");
const col5 = document.getElementsByClassName("col5");
const col6 = document.getElementsByClassName("col6");
const col7 = document.getElementsByClassName("col7");

const fillFromBottom = (hole) => {
  let currentColumn = hole.classList.value
  debugger

  switch (currentColumn) {
    
    case "hole col1":
      for (let i = col1.length - 1; i >= 0; i--) {
        if (!col1[i].classList.contains("taken")) {
          fillSlot(col1[i]);
          return;
        }
      }
      break;
    case "hole col2":
      for (let i = col2.length - 1; i >= 0; i--) {
        if (!col2[i].classList.contains("taken")) {
          fillSlot(col2[i]);
          return;
        }
      }
      break;

    case "hole col3":
      for (let i = col3.length - 1; i >= 0; i--) {
        if (!col3[i].classList.contains("taken")) {
          fillSlot(col3[i]);
          return;
        }
      }
      break;

    case "hole col4":
      for (let i = col4.length - 1; i >= 0; i--) {
        if (!col4[i].classList.contains("taken")) {
          fillSlot(col4[i]);
          return;
        }
      }
      break;

    case "hole col5":
      for (let i = col5.length - 1; i >= 0; i--) {
        if (!col5[i].classList.contains("taken")) {
          fillSlot(col5[i]);
          return;
        }
      }
      break;

    case "hole col6":
      for (let i = col6.length - 1; i >= 0; i--) {
        if (!col6[i].classList.contains("taken")) {
          fillSlot(col6[i]);
          return;
        }
      }
      break;

    case "hole col7":
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
  if (currentPlayer === 1) {
    hole.classList.add("player-one");
    hole.classList.add("taken");
    currentPlayer = 2;
  } else if (currentPlayer === 2) {
    hole.classList.add("player-two");
    hole.classList.add("taken");
    currentPlayer = 1;
  }
};

for (let hole of holes) {
  hole.addEventListener("click", () => {
    fillFromBottom(hole);
  });
}
