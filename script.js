const gameboard = (function() {
  var turnCounter;
  var gameboard = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
  const render = () => {
    turnCounter = 1;
    gameboard = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    for(var i = 0; i < 9; i++) {
      let index = "" + i;
      let ele = document.getElementById(index);
      ele.innerText = gameboard[i];
      ele.classList.remove("taken", "X", "O");
      ele.setAttribute('onclick','caller(this)')
    }
  }
  render();

  (function() {

    const button = document.getElementById('restartbutton');
    button.addEventListener( 'click', render)
  })();

  const markSquare = (input) => {
    id = parseInt(input.id);
    if(turnCounter % 2 ===0) {
      gameboard[id] = 'X';
      ele = document.getElementById(input.id);
      ele.innerText = "X";
      ele.classList.add("taken", "X");
      ele.setAttribute('onclick','')
      searchWin();
      turnCounter++;
    }
    else {
      gameboard[id] = 'O';
      ele = document.getElementById(input.id);
      ele.innerText = "O";
      ele.classList.add("taken", "O");
      ele.setAttribute('onclick','-')
      searchWin();
      turnCounter++;
    }
    if(turnCounter === 10) alert("Tie game")
  }
  
  const disableClicks = () => {
    for(var i = 0; i < 9; i++) {
      let index = "" + i;
      let ele = document.getElementById(index);
      ele.setAttribute('onclick','-')
    }
  }

  const searchWin = () => {
    if(
      gameboard[0] === gameboard[1] && gameboard[1] === gameboard[2] ||
      gameboard[3] === gameboard[4] && gameboard[4] === gameboard[5] ||
      gameboard[6] === gameboard[7] && gameboard[7] === gameboard[8] ||
      gameboard[0] === gameboard[3] && gameboard[3] === gameboard[6] ||
      gameboard[1] === gameboard[4] && gameboard[4] === gameboard[7] ||
      gameboard[2] === gameboard[5] && gameboard[5] === gameboard[8] ||
      gameboard[0] === gameboard[4] && gameboard[4] === gameboard[8] ||
      gameboard[2] === gameboard[4] && gameboard[4] === gameboard[6]
    ) {
      if(turnCounter % 2 === 0) {
        turnCounter--;
        disableClicks();
        alert("X wins");
      }
      else {
        turnCounter--;
        disableClicks();
        alert("O wins")};
    }
  }

  return {markSquare};
})();

/* const player = (name) => {
  return {name};
}; */

function caller(input) {
  gameboard.markSquare(input);
}

/* const createPlayers = ()=>{
  let player1 = {
    name: document.getElementById('player1').value
  }
  let player2 = {
    name:document.getElementById('player2').value
  }
  document.forms[0].reset();
  return false;
} 

 */