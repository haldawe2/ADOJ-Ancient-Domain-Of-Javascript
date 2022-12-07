class Arrow {
  constructor(game) {
    this.game = game;
    this.interval;
    this.timeCounter = 0;
    this.target;
    this.shoot = false;
  }

  _timeArrow(target) {
    this.target = target;
    this.shoot = true;
    this.interval = setInterval(() => {
      this.timeCounter++;
    }, 4);
  }

  _renderArrow() {
    const imageHeight = 600 / this.game.dungeon[0].length;
    const imageWidth = 1000 / this.game.dungeon.length;
    this.game.ctx.save();
    this.game.ctx.translate(
      (this.game.player.position.x +
        ((this.target.position.x - this.game.player.position.x) / 50) *
          this.timeCounter) *
        imageWidth,
      (this.game.player.position.y +
        ((this.target.position.y - this.game.player.position.y) / 50) *
          this.timeCounter) *
        imageHeight
    );
    this.game.ctx.drawImage(
      arrowData.img,
      arrowData.x,
      arrowData.y,
      arrowData.size,
      arrowData.size,
      0,
      0,
      imageWidth,
      imageHeight
    );
    this.game.ctx.restore();
    if (this.timeCounter >= 50) {
      this.target._receiveDamage(this.game.player.attack);
      this.game._checkDeaths();
      clearInterval(this.interval);
      this.shoot = false;
      this.timeCounter = 0;
      this.game.enemies.forEach((enemy) => enemy._moveEnemy());
    }
  }
}
