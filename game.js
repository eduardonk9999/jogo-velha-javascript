const container = document.querySelector('.renderGame');

let currentPlayer = 'X'

let plaerX = []

let plaerY = [];

const victories = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6] 
]

function boardCreat() {
  for(i = 0; i < 9; i++){
    const div = document.createElement('div');
    container.appendChild(div)
    div.classList.add('cel')
    div.dataset.add = `${[i]}`
  }
}

function switchPlayer(data) {
  currentPlayer = currentPlayer === "X" ? "O" : "X"

  if(currentPlayer === 'O') {
    plaerX.push(+data)
  } else {
    plaerY.push(+data)
  }
}

function verificaJogada() {  
  for(let i = 0; i < victories.length; i++){
    if(JSON.stringify(plaerX) === JSON.stringify(victories[i]) ||
    JSON.stringify(plaerY) === JSON.stringify(victories[i])
    ) {
      console.log('VELHA')
    } 
  }

}

function clickPalyer() {
  const boxs = document.querySelectorAll('.cel');

  boxs.forEach(box => {
  
    box.addEventListener("click", () => {
      box.innerHTML = currentPlayer
      switchPlayer(box.dataset.add)
      verificaJogada()
    })
  })
}

boardCreat()
clickPalyer()
