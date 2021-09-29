const tetris = {
  row: 20,
  col: 10,
  tetrisID: "tetris",
  fullSector: `<div class="sector-full"></div>`,
  emptySector: `<div class="sector-empty"></div>`,
  bricks: [],
};
const gameField = document.querySelector("#game-field");
const startGameBtn = document.querySelector("#start-game");
let tickHandler;

function initTetris() {
  for (let row = 0; row < tetris.row; row++) {
    tetris.bricks[row] = [];
    for (let col = 0; col < tetris.col; col++) {
      tetris.bricks[row][col] = 0;
    }
  }
  startGameBtn.addEventListener("click", tick);
}
initTetris();

function createGameField() {
  gameField.innerHTML = "";
  for (let row = 0; row < tetris.bricks.length; row++) {
    for (let col = 0; col < tetris.bricks[row].length; col++) {
      gameField.innerHTML += tetris.bricks[row][col]
        ? tetris.fullSector
        : tetris.emptySector;
    }
  }
}

// createGameField();

function tick() {
  createGameField();
  console.log("tick");
  tickHandler = setInterval(function () {
    tick();
  }, 10000);
}
