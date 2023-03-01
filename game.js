const container = document.querySelector('.renderGame');

function boardCreat() {
  for(i = 0; i < 9; i++){
    const div = document.createElement('div');
    container.appendChild(div)
    div.classList.add('cel')
   
  }
}


function clickPalyer() {
  const boxs = document.querySelectorAll('.cel');

  boxs.forEach(box => {
  
    box.addEventListener("click", () => {
      box.innerHTML = 'X'
      
      if(event.target.textContent == 'X'){
        console.log('SOU X') 
      } else {
        console.log('SOU O')
      }
      
      // if(box.textContent === 'O') {
      //   event.target.innerHTML = 'X'
      // } else {
      //   event.target.innerHTML = 'O'
      // }    
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


// variável para manter o controle do jogador atual (X ou O)
// let currentPlayer = "X";

// função para alternar para o próximo jogador
// function switchPlayer() {
//   currentPlayer = currentPlayer === "X" ? "O" : "X";
// }

// exemplo de uso da função switchPlayer
// console.log(currentPlayer); // "X"
// switchPlayer();
// console.log(currentPlayer); // "O"


boardCreat()
clickPalyer()
play()