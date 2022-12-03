class Enemy extends Player{
    constructor(game, positionX, positionY, health = 20, attack = 10, defense = 10) {
        super(game);
        this.health = health;
        this.attack = attack;
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
        if (this.position.y < this.game.player.position.y && this.game.dungeon[this.position.x][this.position.y + 1] !== 'brown') {
            this.position.y += 1;
            return;
        }
        if (this.position.y > this.game.player.position.y && this.game.dungeon[this.position.x][this.position.y - 1] !== 'brown') {
            this.position.y -= 1
            return;
        }
        if (this.position.x < this.game.player.position.x && this.game.dungeon[this.position.x + 1][this.position.y] !== 'brown') {
            this.position.x += 1
            return;
        }
        if (this.position.x > this.game.player.position.x && this.game.dungeon[this.position.x - 1][this.position.y] !== 'brown') {
            this.position.x -= 1
            return;
        }
    }
}