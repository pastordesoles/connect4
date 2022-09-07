const holes = document.getElementsByClassName("hole");
let currentPlayer = 1;

for (const hole of holes) {
  hole.addEventListener("click", () => {
    if (currentPlayer === 1 && !hole.classList.contains("taken")) {
      hole.classList.add("player-one")
      hole.classList.add("taken");
      currentPlayer = 2;
    } else if (currentPlayer === 2 && !hole.classList.contains("taken")) {
      hole.classList.add("player-two")
      hole.classList.add("taken");
      currentPlayer = 1;
    }
  });
}
