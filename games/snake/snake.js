class SnakeGame {
  constructor(
    canvasElement,
    scoreElement,
    gameSpeed,
    pixelsPerGrid,
    growthIncrement
  ) {
    this.canvasElement = canvasElement;
    this.scoreElement = scoreElement;
    // Grids growth when apple is eaten
    this.growthIncrement = growthIncrement;
    this.ctx = canvasElement.getContext("2d");
    // grids per second
    this.gameSpeed = gameSpeed;
    // Pixels in the canvas
    this.boardPixelDimensions = [canvasElement.width, canvasElement.height];
    // Grids on the board
    // coordinates start from top left
    this.boardGridDimensions = [
      canvasElement.width / pixelsPerGrid,
      canvasElement.height / pixelsPerGrid,
    ];
    this.pixelsPerGrid = pixelsPerGrid;
    // Start at roughly the center of the board
    const startingPosition = [
      Math.round(this.boardGridDimensions[0] / 2),
      Math.round(this.boardGridDimensions[1] / 2),
    ];
    // Represents the order of grids the snake originated from
    // Can probably optimise this using a doubly linked list
    // coordinates start from top left
    this.snakeState = [startingPosition];
    this.drawRect(
      startingPosition[0] * pixelsPerGrid,
      startingPosition[1] * pixelsPerGrid,
      pixelsPerGrid,
      pixelsPerGrid,
      "blue"
    );
    // The current direction of the snake
    // enum: 0 = stationary, 1 = left, 2 = right, 3 = top, 4 = bottom
    this.currentDirection = 0;
    this.newDirections = [];
    // Last timestamp of when the snake changed frames
    this.lastGridTime = null;
    this.gameStopped = false;

    this.growthSpurt = 0;
    this.score = 0;
    this.appleCoordinates = [];
    this.generateApple();
    this.mouseEventListenerHandler = null;
    this.addMouseEventListener();
  }

  removeMouseEventListener() {
    document.removeEventListener("keydown", this.mouseEventListenerHandler);
  }

  addMouseEventListener() {
    this.mouseEventListenerHandler = (event) => {
      const keyCode = event.which || event.keyCode;
      const lastDirection =
        this.newDirections.length > 0
          ? this.newDirections[this.newDirections.length - 1]
          : this.currentDirection;
      switch (keyCode) {
        case 37:
          if (
            lastDirection === 3 ||
            lastDirection === 4 ||
            lastDirection === 0
          ) {
            this.newDirections.push(1);
          }
          event.preventDefault();
          break;
        case 38:
          if (
            lastDirection === 1 ||
            lastDirection === 2 ||
            lastDirection === 0
          ) {
            this.newDirections.push(3);
          }
          event.preventDefault();
          break;
        case 39:
          if (
            lastDirection === 3 ||
            lastDirection === 4 ||
            lastDirection === 0
          ) {
            this.newDirections.push(2);
          }
          event.preventDefault();
          break;
        case 40:
          if (
            lastDirection === 1 ||
            lastDirection === 2 ||
            lastDirection === 0
          ) {
            this.newDirections.push(4);
          }
          event.preventDefault();
          break;
        default:
          null;
      }
      if (this.currentDirection === 0) {
        // start rendering new snake
        this.lastGridTime = performance.now();
        this.render(this.lastGridTime);
      }
    }
    document.addEventListener("keydown", this.mouseEventListenerHandler);
  }

  generateApple() {
    const newApple = [
      Math.round(Math.random() * (this.boardGridDimensions[0] - 1)),
      Math.round(Math.random() * (this.boardGridDimensions[1] - 1)),
    ];
    const appleTouchesSnake = this.snakeState.find(function (grid) {
      return grid[0] === newApple[0] && grid[1] === newApple[1];
    });

    if (appleTouchesSnake) {
      // Apple touches the snake, make a new one
      this.generateApple();
    } else {
      this.appleCoordinates = newApple;
      this.drawRect(
        newApple[0] * this.pixelsPerGrid,
        newApple[1] * this.pixelsPerGrid,
        this.pixelsPerGrid,
        this.pixelsPerGrid,
        "red"
      );
    }
  }

  eatApple() {
    const headGrid = this.snakeState[this.snakeState.length - 1];
    if (
      headGrid[0] === this.appleCoordinates[0] &&
      headGrid[1] === this.appleCoordinates[1]
    ) {
      this.score++;
      this.scoreElement.innerHTML = this.score;
      this.growthSpurt += this.growthIncrement;
      this.generateApple();
    }
  }

  isTouching() {
    // If it's touching than the last array entry will duplicate
    const lastGrid = this.snakeState[this.snakeState.length - 1];
    const dupIndex = this.snakeState.findIndex(function (grid) {
      return grid[0] === lastGrid[0] && grid[1] === lastGrid[1];
    });
    if (dupIndex < this.snakeState.length - 1) {
      return true;
    }
    // Check if snake is touching the edge of the map
    if (
      lastGrid[0] > this.boardGridDimensions[0] - 1 ||
      lastGrid[0] < 0 ||
      lastGrid[1] > this.boardGridDimensions[1] - 1 ||
      lastGrid[1] < 0
    ) {
      return true;
    }
    return false;
  }

  calculateMovement(newTimestamp) {
    // How many pixels moved since last grid modification
    return Math.round(
      (this.gameSpeed *
        this.pixelsPerGrid *
        (newTimestamp - this.lastGridTime)) /
        1000
    );
  }

  drawRect(x, y, width, height, color) {
    this.ctx.beginPath();
    this.ctx.rect(x, y, width, height);
    this.ctx.fillStyle = color;
    this.ctx.fill();
  }

  repaint(movementPixels) {
    if (this.growthSpurt < 1) {
      // Don't cut tail if spurt
      // Render tail
      var tailDirection = this.currentDirection;
      const tailGrid = this.snakeState[0];
      if (this.snakeState.length > 1) {
        const secondTailGrid = this.snakeState[1];
        if (tailGrid[0] - 1 === secondTailGrid[0]) {
          // left
          tailDirection = 1;
        } else if (tailGrid[0] + 1 === secondTailGrid[0]) {
          // right
          tailDirection = 2;
        } else if (tailGrid[1] - 1 === secondTailGrid[1]) {
          // up
          tailDirection = 3;
        } else if (tailGrid[1] + 1 === secondTailGrid[1]) {
          // down
          tailDirection = 4;
        }
      }

      if (tailDirection === 1) {
        //left
        this.drawRect(
          tailGrid[0] * this.pixelsPerGrid +
            this.pixelsPerGrid -
            movementPixels,
          tailGrid[1] * this.pixelsPerGrid,
          movementPixels,
          this.pixelsPerGrid,
          "white"
        );
      } else if (tailDirection === 2) {
        // right
        this.drawRect(
          tailGrid[0] * this.pixelsPerGrid,
          tailGrid[1] * this.pixelsPerGrid,
          movementPixels,
          this.pixelsPerGrid,
          "white"
        );
      } else if (tailDirection === 3) {
        // up
        this.drawRect(
          tailGrid[0] * this.pixelsPerGrid,
          tailGrid[1] * this.pixelsPerGrid +
            this.pixelsPerGrid -
            movementPixels,
          this.pixelsPerGrid,
          movementPixels,
          "white"
        );
      } else if (tailDirection === 4) {
        // down
        this.drawRect(
          tailGrid[0] * this.pixelsPerGrid,
          tailGrid[1] * this.pixelsPerGrid,
          this.pixelsPerGrid,
          movementPixels,
          "white"
        );
      }
    }

    var headDirection = this.currentDirection;
    const headGrid = this.snakeState[this.snakeState.length - 1];
    if (headDirection === 1) {
      //left
      this.drawRect(
        headGrid[0] * this.pixelsPerGrid - movementPixels,
        headGrid[1] * this.pixelsPerGrid,
        movementPixels,
        this.pixelsPerGrid,
        "blue"
      );
    } else if (headDirection === 2) {
      // right
      this.drawRect(
        (headGrid[0] + 1) * this.pixelsPerGrid,
        headGrid[1] * this.pixelsPerGrid,
        movementPixels,
        this.pixelsPerGrid,
        "blue"
      );
    } else if (headDirection === 3) {
      // up
      this.drawRect(
        headGrid[0] * this.pixelsPerGrid,
        headGrid[1] * this.pixelsPerGrid - movementPixels,
        this.pixelsPerGrid,
        movementPixels,
        "blue"
      );
    } else if (headDirection === 4) {
      // down
      this.drawRect(
        headGrid[0] * this.pixelsPerGrid,
        (headGrid[1] + 1) * this.pixelsPerGrid,
        this.pixelsPerGrid,
        movementPixels,
        "blue"
      );
    }
  }

  updateSnakeState(newTimestamp) {
    if (this.currentDirection > 0) {
      const headGrid = this.snakeState[this.snakeState.length - 1];
      var nextGrid = [headGrid[0], headGrid[1]];
      switch (this.currentDirection) {
        case 1: // left
          nextGrid[0]--;
          break;
        case 2: // right
          nextGrid[0]++;
          break;
        case 3: // top
          nextGrid[1]--;
          break;
        case 4: // bottom
          nextGrid[1]++;
          break;
      }
      this.snakeState.push(nextGrid);
      // Draw next grid
      this.drawRect(
        nextGrid[0] * this.pixelsPerGrid,
        nextGrid[1] * this.pixelsPerGrid,
        this.pixelsPerGrid,
        this.pixelsPerGrid,
        "blue"
      );

      if (this.growthSpurt < 1) {
        const tailGrid = this.snakeState[0];
        this.snakeState.shift();
        // Undraw tail grid
        if (!(nextGrid[0] === tailGrid[0] && nextGrid[1] === tailGrid[1])) {
          this.drawRect(
            tailGrid[0] * this.pixelsPerGrid,
            tailGrid[1] * this.pixelsPerGrid,
            this.pixelsPerGrid,
            this.pixelsPerGrid,
            "white"
          );
        }
      } else {
        this.growthSpurt--;
      }
    }
    if (this.newDirections.length > 0) {
      this.currentDirection = this.newDirections[0];
      this.newDirections.shift();
    }
    this.lastGridTime = newTimestamp;
  }

  gameOver() {
    alert("game over! Score: " + this.score);
    newSnakeGame();
  }

  stopGame() {
    this.gameStopped = true;
    this.removeMouseEventListener();
  }

  render(newTimestamp) {
    if (this.gameStopped) {
      return;
    }
    // Render the current frame
    var movementPixels = this.calculateMovement(newTimestamp);
    // If a single pixel is moved then it requires a repaint
    if (movementPixels > 0) {
      if (movementPixels > this.pixelsPerGrid) {
        // Past one grid
        this.updateSnakeState(newTimestamp);
        movementPixels -= this.pixelsPerGrid;
        this.eatApple();
      }

      if (this.isTouching()) {
        this.stopGame();
        return this.gameOver();
      } else {
        this.repaint(movementPixels);
      }
    }

    window.requestAnimationFrame((newTimestamp) => {
      this.render(newTimestamp);
    });
  }
}

let lastGame = null;
function newSnakeGame() {
  if (lastGame) {
    lastGame.stopGame();
  }
  const canvas = document.getElementById("gameBoard");
  const scoreElement = document.getElementById("score");
  const gameSpeed = document.getElementById("gameSpeed").value;
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  scoreElement.innerHTML = "0";
  lastGame = new SnakeGame(canvas, scoreElement, gameSpeed, 20, 3);
}

newSnakeGame();
