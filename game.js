const container = document.querySelector('.renderGame');

function boardCreat() {
  for(i = 0; i < 9; i++){
    const div = document.createElement('div');
    container.appendChild(div)
    div.classList.add('cel')
   
  }
}

let currentPlayer = 'X'

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X"
}


function clickPalyer() {
  const boxs = document.querySelectorAll('.cel');

  boxs.forEach(box => {
  
    box.addEventListener("click", () => {
      box.innerHTML = currentPlayer
      switchPlayer()
    })
  })
}

function play() {
  const victories = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6] 
  ]
}


// Criar Logica de quando der ###VELHA###



boardCreat()
clickPalyer()
play()