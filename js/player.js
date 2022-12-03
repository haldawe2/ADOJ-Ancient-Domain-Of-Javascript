class Player {
    constructor(game, health = 100, attack = 20, defense = 20) {
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.position = {x: 1, y: 2};
        this.color = "blue"
        this.game = game
    }

    moveLeft() {
        let attacked = false;
        for (let i = 0; i < this.game.enemies.length; i++) {
            if (this.position.x - 1 === this.game.enemies[i].position.x && this.position.y === this.game.enemies[i].position.y) {
                this.game.enemies[i]._receiveDamage(this.attackMele());
                attacked = true
            }
        }
        if (this.game.dungeon[this.position.x - 1][this.position.y] !== 'brown' && !attacked) {
            this.position.x -= 1;
        }
    }

    moveRight() {
        let attacked = false;
        for (let i = 0; i < this.game.enemies.length; i++) {
            if (this.position.x + 1 === this.game.enemies[i].position.x && this.position.y === this.game.enemies[i].position.y) {
                this.game.enemies[i]._receiveDamage(this.attackMele());
                attacked = true
            }
        }
        if (this.game.dungeon[this.position.x + 1][this.position.y] !== 'brown' && !attacked) {
            this.position.x += 1;
        }
    }

    moveUp() {
        let attacked = false;
        for (let i = 0; i < this.game.enemies.length; i++) {
            if (this.position.x === this.game.enemies[i].position.x && this.position.y - 1 === this.game.enemies[i].position.y) {
                this.game.enemies[i]._receiveDamage(this.attackMele());
                attacked = true
            }
        }
        if (this.game.dungeon[this.position.x][this.position.y - 1] !== 'brown' && !attacked) {
            this.position.y -= 1;
        }
    }

    moveDown() {
        let attacked = false;
        for (let i = 0; i < this.game.enemies.length; i++) {
            if (this.position.x === this.game.enemies[i].position.x && this.position.y + 1 === this.game.enemies[i].position.y) {
                this.game.enemies[i]._receiveDamage(this.attackMele());
                attacked = true
            }
        }
        if (this.game.dungeon[this.position.x][this.position.y + 1] !== 'brown' && !attacked) {
            this.position.y += 1;
        }
    }

    attackMele() {
        return this.attack;
    }

    attackRanged () {}

    _receiveDamage(damage) {
        this.health -= damage - this.defense;
    }
}