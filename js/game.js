class Game{
  constructor(context) {
    this.ctx = context;
    this.dungeon = [];
  }

  _createDungeon() {
    //creates a 9x9 matrix with floor (white color)
    this.dungeon = new Array(9);
    for (let i = 0; i < 9; i++) {
        this.dungeon[i] = new Array(9);
        for (let j = 0; j < 9; j++) {
            this.dungeon[i][j] = "white";
        }
    }
}

  _createWalls() {
      //top and bottom walls
      for (let i = 0; i < this.dungeon.length; i++) {
          this.dungeon[i][0] = "brown"
      }
      for (let i = 0; i < this.dungeon.length; i++) {
          this.dungeon[i][this.dungeon.length - 1] = "brown"
      }
      //left and right walls
      for (let i = 0; i < this.dungeon.length; i++) {
          this.dungeon[0][i] = "brown"
      }
      for (let i = 0; i < this.dungeon.length; i++) {
          this.dungeon[this.dungeon.length - 1][i] = "brown"
      }
  }

  _renderDungeon() {
    for (let i = 0; i < this.dungeon.length; i++) {
      for (let j = 0; j < this.dungeon[i].length; j++) {
        this.ctx.fillStyle = `${this.dungeon[i][j]}`;
        this.ctx.fillRect(
          i * (1000 / this.dungeon.length),
          j * (600 / this.dungeon[i].length),
          1000 / this.dungeon.length,
          600 / this.dungeon[i].length
        );
      }
    }
  }

  _assignControls() {
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          this.player.moveLeft();
          break;
        case 'ArrowRight':
          this.player.moveRight();
          break;
        case 'ArrowUp':
          this.player.moveUp();
          break;
        case 'ArrowDown':
          this.player.moveDown();
          break;
        case 'q':
          this.player.attackMele();
          break;
        case 'e':
          this.player.attackRanged();
          break;
        default:
          break;
      }
    });
  }

  _update() {
    this._renderDungeon();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._createDungeon();
    this._createWalls();
    this._assignControls();
    this._update();
  }
}