let rindas = 6;
let kolonas = 6;

let cellWidth, cellHeight;
let grid;
let soli = 36;
let esosaisSolis = 0;

let faze = 'blink';
let highlightCell = null;

function setup() {
  createCanvas(600, 600);
  cellWidth = width / kolonas;
  cellHeight = height / rindas;

  grid = Array.from({ length: kolonas }, () => Array(rindas).fill(false));
  frameRate(4);
}

function draw() {
  background(255);
  drawGrid();

  if (esosaisSolis < soli) {
    if (faze === 'blink') {
      let kolona = floor(random(kolonas));
      let rinda = floor(random(rindas));
      let piepildit = random() < 0.5;
      let piepildits = grid[kolona][rinda];
      let izmainisies = (piepildits !== piepildit);

      highlightCell = {
        kolona,
        rinda,
        piepildit,
        izmainisies
      };

      izceltRutinu(kolona, rinda, izmainisies ? 'lime' : 'red');
      faze = 'apply';
    } else if (faze === 'apply') {
      let { kolona, rinda, piepildit } = highlightCell;
      grid[kolona][rinda] = piepildit;
      drawGrid();
      faze = 'pause';
    } else if (faze === 'pause') {
      esosaisSolis++;
      faze = 'blink';
    }
  } else {
    noLoop();
    saveCanvas('rutinu_spele', 'png');
  }
}

function drawGrid() {
  stroke(0);
  for (let i = 0; i < kolonas; i++) {
    for (let j = 0; j < rindas; j++) {
      let x = i * cellWidth;
      let y = j * cellHeight;
      if (grid[i][j]) {
        fill(0);
      } else {
        noFill();
      }
      rect(x, y, cellWidth, cellHeight);
    }
  }
}

function izceltRutinu(kolona, rinda, colorName) {
  let x = kolona * cellWidth;
  let y = rinda * cellHeight;
  fill(colorName);
  rect(x, y, cellWidth, cellHeight);
}