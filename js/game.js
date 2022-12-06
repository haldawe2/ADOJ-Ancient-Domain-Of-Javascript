class Game{
  constructor(context) {
    this.ctx = context;
    this.dungeon = [];
    this.player;
    this.enemies = [];
    this.exit = {}
    this.cooldown = false
  }

  _createDungeon(x, y) {
    //Creates and matrix of X * Y, then assigns by default a "floor" for later rendering.
    this.dungeon = new Array(x);
    for (let i = 0; i < x; i++) {
        this.dungeon[i] = new Array(y);
        for (let j = 0; j < y; j++) {
            this.dungeon[i][j] = floorData;
        }
    }
}

  _createWalls() {
      //Top and bottom walls.
      for (let i = 0; i < this.dungeon.length; i++) {
          this.dungeon[i][0] = wallData;
      }
      for (let i = 0; i < this.dungeon.length; i++) {
          this.dungeon[i][this.dungeon[0].length - 1] = wallData;
      }
      //Left and right walls.
      for (let i = 0; i < this.dungeon[0].length; i++) {
          this.dungeon[0][i] = wallData;
      }
      for (let i = 0; i < this.dungeon[0].length; i++) {
          this.dungeon[this.dungeon.length - 1][i] = wallData;
      }
  }

  _renderDungeon() {
    //Divides canvas in equal squares depending on dungeon size,
    //then renders the image/color inside the correspondent dungeon coordinates.
    const imgH = 600/this.dungeon[0].length;
    const imgW = 1000/this.dungeon.length;
    for (let i = 0; i < this.dungeon.length; i++) {
      for (let j = 0; j < this.dungeon[i].length; j++) {
        let imgToDraw = this.dungeon[i][j];
        this.ctx.drawImage(imgToDraw.img, imgToDraw.x, imgToDraw.y, imgToDraw.size, imgToDraw.size, imgW * i, imgH * j, imgW, imgH);
      }
    }
  }

  _createEnemies() {
    //Creates two enemies in the right half, including middle row, without spawning in walls.
    let prevX = 0;
    let prevY = 0;
    let i = 0;
    while (i < 2) {
      let randomX = Math.floor(Math.random() * Math.ceil((this.dungeon.length - 2) / 2)) + Math.floor(this.dungeon.length / 2);
      let randomY = Math.floor(Math.random() * (this.dungeon[0].length - 2)) + 1;
      if (randomX !== prevX && randomY !== prevY) {
        this.enemies.push(new Enemy(this, randomX, randomY));
        prevX = randomX;
        prevY = randomY;
        i++
      }
    }
  }

  _checkDeaths() {
    for (let i = 0; i < this.enemies.length; i++) {
      if (this.enemies[i].health <= 0) {
        this.enemies.splice(i, 1);
      }
    }
  }

  _renderPlayer() {
    const imgW = 1000 / this.dungeon.length;
    const imgH = 600 / this.dungeon[0].length;
    let imgToDraw = this.player.render;
    this.ctx.drawImage(imgToDraw.img, imgToDraw.x, imgToDraw.y, imgToDraw.size, imgToDraw.size, imgW * this.player.position.x, imgH * this.player.position.y, imgW, imgH);
  }

  _renderHealth() {
    this.ctx.fillStyle = "white";
    this.ctx.font = "30px Arial";
    this.ctx.fillText(`Health: ${this.player.health}`, 1000/(this.dungeon.length*2), 600/(this.dungeon[0].length*2) + 10);
  }

  _renderEnemies() {
    const imgW = 1000 / this.dungeon.length;
    const imgH = 600 / this.dungeon[0].length;
    for (let i = 0; i < this.enemies.length; i++) {
      let imgToDraw = this.enemies[i].render;
      this.ctx.drawImage(imgToDraw.img, imgToDraw.x, imgToDraw.y, imgToDraw.size, imgToDraw.size, imgW * this.enemies[i].position.x, imgH * this.enemies[i].position.y, imgW, imgH);
      this.ctx.fillStyle = 'red';
      this.ctx.font = "30px Arial";
      this.ctx.fillText(`${this.enemies[i].health}`, imgW * this.enemies[i].position.x + 25, imgH * this.enemies[i].position.y - 10)
    }

  }



  _assignControls() {
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          if (!this.cooldown) {
            this.player.moveLeft();
            this.enemies.forEach((enemy) => (enemy._moveEnemy()));
          }
          this.cooldown = true;
          setTimeout(() => {this.cooldown = false}, 200);
          break;
        case 'ArrowRight':
          if (!this.cooldown) {
            this.player.moveRight();
            this.enemies.forEach((enemy) => (enemy._moveEnemy()));
          }
          this.cooldown = true;
          setTimeout(() => {this.cooldown = false}, 200);
          break;
        case 'ArrowUp':
          if (!this.cooldown) {
            this.player.moveUp();
            this.enemies.forEach((enemy) => (enemy._moveEnemy()));
          }
          this.cooldown = true;
          setTimeout(() => {this.cooldown = false}, 200);
          break;
        case 'ArrowDown':
          if (!this.cooldown) {
            this.player.moveDown();
            this.enemies.forEach((enemy) => (enemy._moveEnemy()));
          }
          this.cooldown = true;
          setTimeout(() => {this.cooldown = false}, 200);
          break;
        case 'q':
          if (!this.cooldown) {
            this.player.attackRanged();
            this.enemies.forEach((enemy) => (enemy._moveEnemy()));
          }
          this.cooldown = true;
          setTimeout(() => {this.cooldown = false}, 200);
          break;
        default:
          break;
      }
    });
  }

  _createExit() {
    this.exit.x = this.dungeon.length - 1;
    this.exit.y = Math.floor(this.dungeon[0].length / 2);
    this.dungeon[this.exit.x][this.exit.y] = exitData
  }

  _checkWin() {
    if (this.player.position.x === this.exit.x && this.player.position.y === this.exit.y) {
      const canvas = document.getElementById('canvas');
      canvas.classList.add('hidden');
      document.getElementById('win-page').style = 'display: flex'
    }
  }

  _checkLoss() {
    if (this.player.health <= 0) {
      const canvas = document.getElementById('canvas');
      canvas.classList.add('hidden');
      document.getElementById('lose-page').style = 'display: flex'
    }
  }

  _update() {
    this._checkWin();
    this._checkLoss();
    this._checkDeaths();
    this._renderDungeon();
    this._renderEnemies();
    this._renderPlayer();
    this._renderHealth();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._createDungeon(12, 8);
    this._createWalls();
    this._createExit();
    this.player = new Player(this);
    this._createEnemies();
    this._assignControls();
    this._update();
  }
}