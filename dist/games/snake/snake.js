class SnakeGame{constructor(e,t,i,s,r){this.canvasElement=e,this.scoreElement=t,this.growthIncrement=r,this.ctx=e.getContext("2d"),this.gameSpeed=i,this.boardPixelDimensions=[e.width,e.height],this.boardGridDimensions=[e.width/s,e.height/s],this.pixelsPerGrid=s;const n=[Math.round(this.boardGridDimensions[0]/2),Math.round(this.boardGridDimensions[1]/2)];this.snakeState=[n],this.drawRect(n[0]*s,n[1]*s,s,s,"blue"),this.currentDirection=0,this.newDirections=[],this.lastGridTime=null,this.gameStopped=!1,this.growthSpurt=0,this.score=0,this.appleCoordinates=[],this.generateApple(),this.mouseEventListenerHandler=null,this.addMouseEventListener()}removeMouseEventListener(){document.removeEventListener("keydown",this.mouseEventListenerHandler)}addMouseEventListener(){this.mouseEventListenerHandler=e=>{const t=e.which||e.keyCode,i=this.newDirections.length>0?this.newDirections[this.newDirections.length-1]:this.currentDirection;switch(t){case 37:3!==i&&4!==i&&0!==i||this.newDirections.push(1),e.preventDefault();break;case 38:1!==i&&2!==i&&0!==i||this.newDirections.push(3),e.preventDefault();break;case 39:3!==i&&4!==i&&0!==i||this.newDirections.push(2),e.preventDefault();break;case 40:1!==i&&2!==i&&0!==i||this.newDirections.push(4),e.preventDefault()}0===this.currentDirection&&(this.lastGridTime=performance.now(),this.render(this.lastGridTime))},document.addEventListener("keydown",this.mouseEventListenerHandler)}generateApple(){const e=[Math.round(Math.random()*(this.boardGridDimensions[0]-1)),Math.round(Math.random()*(this.boardGridDimensions[1]-1))];this.snakeState.find((function(t){return t[0]===e[0]&&t[1]===e[1]}))?this.generateApple():(this.appleCoordinates=e,this.drawRect(e[0]*this.pixelsPerGrid,e[1]*this.pixelsPerGrid,this.pixelsPerGrid,this.pixelsPerGrid,"red"))}eatApple(){const e=this.snakeState[this.snakeState.length-1];e[0]===this.appleCoordinates[0]&&e[1]===this.appleCoordinates[1]&&(this.score++,this.scoreElement.innerHTML=this.score,this.growthSpurt+=this.growthIncrement,this.generateApple())}isTouching(){const e=this.snakeState[this.snakeState.length-1];return this.snakeState.findIndex((function(t){return t[0]===e[0]&&t[1]===e[1]}))<this.snakeState.length-1||e[0]>this.boardGridDimensions[0]-1||e[0]<0||e[1]>this.boardGridDimensions[1]-1||e[1]<0}calculateMovement(e){return Math.round(this.gameSpeed*this.pixelsPerGrid*(e-this.lastGridTime)/1e3)}drawRect(e,t,i,s,r){this.ctx.beginPath(),this.ctx.rect(e,t,i,s),this.ctx.fillStyle=r,this.ctx.fill()}repaint(e){if(this.growthSpurt<1){var t=this.currentDirection;const i=this.snakeState[0];if(this.snakeState.length>1){const e=this.snakeState[1];i[0]-1===e[0]?t=1:i[0]+1===e[0]?t=2:i[1]-1===e[1]?t=3:i[1]+1===e[1]&&(t=4)}1===t?this.drawRect(i[0]*this.pixelsPerGrid+this.pixelsPerGrid-e,i[1]*this.pixelsPerGrid,e,this.pixelsPerGrid,"white"):2===t?this.drawRect(i[0]*this.pixelsPerGrid,i[1]*this.pixelsPerGrid,e,this.pixelsPerGrid,"white"):3===t?this.drawRect(i[0]*this.pixelsPerGrid,i[1]*this.pixelsPerGrid+this.pixelsPerGrid-e,this.pixelsPerGrid,e,"white"):4===t&&this.drawRect(i[0]*this.pixelsPerGrid,i[1]*this.pixelsPerGrid,this.pixelsPerGrid,e,"white")}var i=this.currentDirection;const s=this.snakeState[this.snakeState.length-1];1===i?this.drawRect(s[0]*this.pixelsPerGrid-e,s[1]*this.pixelsPerGrid,e,this.pixelsPerGrid,"blue"):2===i?this.drawRect((s[0]+1)*this.pixelsPerGrid,s[1]*this.pixelsPerGrid,e,this.pixelsPerGrid,"blue"):3===i?this.drawRect(s[0]*this.pixelsPerGrid,s[1]*this.pixelsPerGrid-e,this.pixelsPerGrid,e,"blue"):4===i&&this.drawRect(s[0]*this.pixelsPerGrid,(s[1]+1)*this.pixelsPerGrid,this.pixelsPerGrid,e,"blue")}updateSnakeState(e){if(this.currentDirection>0){const e=this.snakeState[this.snakeState.length-1];var t=[e[0],e[1]];switch(this.currentDirection){case 1:t[0]--;break;case 2:t[0]++;break;case 3:t[1]--;break;case 4:t[1]++}if(this.snakeState.push(t),this.drawRect(t[0]*this.pixelsPerGrid,t[1]*this.pixelsPerGrid,this.pixelsPerGrid,this.pixelsPerGrid,"blue"),this.growthSpurt<1){const e=this.snakeState[0];this.snakeState.shift(),t[0]===e[0]&&t[1]===e[1]||this.drawRect(e[0]*this.pixelsPerGrid,e[1]*this.pixelsPerGrid,this.pixelsPerGrid,this.pixelsPerGrid,"white")}else this.growthSpurt--}this.newDirections.length>0&&(this.currentDirection=this.newDirections[0],this.newDirections.shift()),this.lastGridTime=e}gameOver(){alert("game over! Score: "+this.score),newSnakeGame()}stopGame(){this.gameStopped=!0,this.removeMouseEventListener()}render(e){if(!this.gameStopped){var t=this.calculateMovement(e);if(t>0){if(t>this.pixelsPerGrid&&(this.updateSnakeState(e),t-=this.pixelsPerGrid,this.eatApple()),this.isTouching())return this.stopGame(),this.gameOver();this.repaint(t)}window.requestAnimationFrame((e=>{this.render(e)}))}}}let lastGame=null;function newSnakeGame(){lastGame&&lastGame.stopGame();const e=document.getElementById("gameBoard"),t=document.getElementById("score"),i=document.getElementById("gameSpeed").value;e.getContext("2d").clearRect(0,0,e.width,e.height),t.innerHTML="0",lastGame=new SnakeGame(e,t,i,20,3)}newSnakeGame();