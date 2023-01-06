// Gameboard uses module pattern because only one is needed
const gameboard = (function() {
  var turnCounter;
  var gameboard = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

   //Input is passed in by caller function, here is where the square is actually "marked"
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

  //Used to display gameboard at beginning and when restart button is clicked
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
  //Display game board when page loads
  render();

  //Add functionality to restart button
  (function() {
    const button = document.getElementById('restartbutton');
    button.addEventListener( 'click', render)
  })();

 
  
  //Makes all squares unclickable after game ends 
  const disableClicks = () => {
    for(var i = 0; i < 9; i++) {
      let index = "" + i;
      let ele = document.getElementById(index);
      ele.setAttribute('onclick','-')
    }
  }

  //I'm sure there's a better way to do this, but brute force works for now
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
  //The only thing that is exposed is markSquare, only did this because caller needs it
  return {markSquare};
})();

//Used to solve issue where markSquare is undefined and causes error when a square is clicked
function caller(input) {
  gameboard.markSquare(input);
}
