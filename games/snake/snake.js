class SnakeGame {
  constructor(canvasElement, scoreElement, gameSpeed, pixelsPerGrid) {
    // grids per second
    this.gameSpeed = gameSpeed;
    // Pixels in the canvas
    this.boardPixelDimensions = [canvasElement.width, canvasElement.height];
    // Grids on the board
    this.boardGridDimensions = boardDimensions;
    // Start at roughly the center of the board
    const startingPosition = [
      Math.round(this.boardGridDimensions[0] / 2),
      Math.round(this.boardGridDimensions[1] / 2),
    ];
    // Represents the order of grids the snake originated from
    // Can probably optimise this using a doubly linked list
    this.snakeState = [startingPosition];
    // The current direction of the snake
    // enum: 0 = stationary, 1 = left, 2 = right, 3 = top, 4 = bottom
    this.direction = 0;
    // Last timestamp of when the snake changed frames
    this.lastGridTime = performance.now();
    this.addEventListeners();
    this.render();
  }

  addEventListeners() {
    window.addEventListener("keypress", (event) => {
      const keyCode = event.which || event.keyCode;
      switch (keyCode) {
        case 37:
          this.direction = 1;
          break;
        case 38:
          this.direction = 3;
          break;
        case 39:
          this.direction = 2;
          break;
        case 39:
          this.direction = 4;
          break;
        default:
          null;
      }
    });
  }

  generateApple() {}

  eatApple() {}

  isTouching() {
    // If it's touching than the array has duplicates
    const uniqueGrids = new Set(
      this.snakeState.map((grid) => grid[0] + "," + grid[1])
    );
    return uniqueGrids.size < this.snakeStat.length;
  }

  calculateMovement(newTimestamp) {
    // How many pixels moved since last rendering
    return Math.round(
      (this.gameSpeed * (newTimestamp - this.lastGridTime)) / 1000
    );
  }

  repaint(movement) {}

  render(newTimestamp) {
    // Render the current frame
    const movement = this.calculateMovement(newTimestamp);
    // If a single pixel is moved then it requires a repaint
    if (movement > 0) {
      if (this.isTouching()) {
      } else {
        this.repaint(movement);
      }
    }
    // Recursively render the next frame >60fps
    setTimeout(() => {
      window.requestAnimationFrame((newTimestamp) => {
        this.render(newTimestamp);
      });
    }, 16);
  }
}

new SnakeGame(
  document.getElementById("gameBoard"),
  document.getElementById("score"),
  20,
  5
);
