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


  

  // console.log(data)

  if(currentPlayer === 'O') {
    plaerX.push(+data)
  } else {
    plaerY.push(+data)
  }
}


function verificaJogada() {
  // if(victories[5] === plaerX) {
  //   console.log('velha')
  // }

  // console.log(plaerX)
  // console.log(typeof victories[5])

  if(JSON.stringify(plaerX) === JSON.stringify(victories[5]) ) {
    console.log('VELHA')
  } else {
    console.log('ERRO')
  }
  // console.log(JSON.stringify(plaerX))
}

console.log(victories[5])
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

// Criar Logica de quando der ###VELHA###
// function play() {


//   const teste = victories.filter(m => (
//     console.log(m)
//   ))

//   console.log(teste)

// }






boardCreat()
clickPalyer()
// play()