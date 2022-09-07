const holes = document.getElementsByClassName('hole')
let currentPlayer = 1

for (const hole of holes){
hole.addEventListener('click', () => {
hole.classList.add("player-one");
    });
}

  
                
                  