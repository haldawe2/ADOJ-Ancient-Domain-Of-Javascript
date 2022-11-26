class Game{
  constructor(context) {
    this.ctx = context;
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
          this.player.moveRight();
          break;
        case 'ArrowDown':
          this.player.moveRight();
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
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._update();
  }
}