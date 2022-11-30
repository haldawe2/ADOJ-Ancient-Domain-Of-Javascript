class Game{
  constructor(context) {
    this.ctx = context;
    this.dungeon = [];
    this.player;
    this.enemies = [];
  }

  _createDungeon(x, y) {
    //creates a 9x9 matrix with floor (white color)
    this.dungeon = new Array(x);
    for (let i = 0; i < this.dungeon.length; i++) {
        this.dungeon[i] = new Array(y);
        for (let j = 0; j < this.dungeon[i].length; j++) {
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

  _renderPlayer() {
    const lengthX = 1000 / this.dungeon.length;
    const lengthY = 600 / this.dungeon[0].length;
    this.ctx.fillStyle = `${this.player.color}`
    this.ctx.fillRect(this.player.position.x * lengthX, this.player.position.y * lengthY, 1000 / this.dungeon.length, 600 / this.dungeon[0].length)
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
    this._renderPlayer();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._createDungeon(9, 9);
    this._createWalls();
    this.player = new Player(this)
    this._assignControls();
    this._update();
  }
}