class Enemy extends Player{
    constructor(game, positionX, positionY, health = 20, defense = 10) {
        super(game);
        this.health = health;
        this.attack = Math.floor(Math.random()*20) + 40;
        this.defense = defense;
        this.position = {x: positionX, y: positionY}
        this.color = "red"
        this.game = game
    }

    _moveEnemy() {
        // If next to player, attack.
        if (this.position.x + 1 === this.game.player.position.x && this.position.y === this.game.player.position.y) {
            this.game.player._receiveDamage(this.attack);
            return;
        }
        if (this.position.x - 1 === this.game.player.position.x && this.position.y === this.game.player.position.y) {
            this.game.player._receiveDamage(this.attack);
            return;
        }
        if (this.position.x === this.game.player.position.x && this.position.y + 1 === this.game.player.position.y) {
            this.game.player._receiveDamage(this.attack);
            return;
        }
        if (this.position.x + 1 === this.game.player.position.x && this.position.y - 1 === this.game.player.position.y) {
            this.game.player._receiveDamage(this.attack);
            return;
        }
        // If not, move.
        if (!this.game.enemies.some((blockerPath) => {return blockerPath.position.x === this.position.x && blockerPath.position.y === this.position.y + 1})) {
            if (this.position.y < this.game.player.position.y && this.game.dungeon[this.position.x][this.position.y + 1] !== wallData) {
                this.position.y += 1;
                return;
            }
        }
        if (!this.game.enemies.some((blockerPath) => {return blockerPath.position.x === this.position.x && blockerPath.position.y === this.position.y - 1})) {
            if (this.position.y > this.game.player.position.y && this.game.dungeon[this.position.x][this.position.y - 1] !== wallData) {
                this.position.y -= 1
                return;
            }
        }
        if (!this.game.enemies.some((blockerPath) => {return blockerPath.position.x === this.position.x + 1 && blockerPath.position.y === this.position.y})) {
            if (this.position.x < this.game.player.position.x && this.game.dungeon[this.position.x + 1][this.position.y] !== wallData) {
                this.position.x += 1
                return;
            }
        }
        if (!this.game.enemies.some((blockerPath) => { return blockerPath.position.x === this.position.x - 1 && blockerPath.position.y === this.position.y})) {
            if (this.position.x > this.game.player.position.x && this.game.dungeon[this.position.x - 1][this.position.y] !== wallData) {
                this.position.x -= 1
                return;
            }
        }}
    }
