const holes = document.getElementsByClassName("hole");
let currentPlayer = 1;

for (const hole of holes) {
  hole.addEventListener("click", () => {
    if (currentPlayer === 1) {
      hole.classList.add("player-one");
      currentPlayer = 2;
    } else if (currentPlayer === 2) {
      hole.classList.add("player-two");
      currentPlayer = 1;
    }
  });
}
