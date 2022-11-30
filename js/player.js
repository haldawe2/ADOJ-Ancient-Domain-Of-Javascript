class Player {
    constructor(game, health = 100, attack = 20, defense = 20) {
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.position = {x: 1, y: 1};
        this.color = "blue"
        this.game = game
    }

    moveLeft() {
        const attacked = false;
        for (enemy of this.game.enemies) {
            if (this.position.x - 1 === enemy.position.x && this.position.y === enemy.position.y) {
                this.attackMele(enemy);
                attacked = true
            }
        }
        if (this.game.dungeon[this.position.x - 1][this.position.y] !== 'brown' && !attacked) {
            this.position.x -= 1;
        }
    }

    moveRight() {
        const attacked = false;
        for (enemy of this.game.enemies) {
            if (this.position.x + 1 === enemy.position.x && this.position.y === enemy.position.y) {
                this.attackMele(enemy);
                attacked = true
            }
        }
        if (this.game.dungeon[this.position.x + 1][this.position.y] !== 'brown' && !attacked) {
            this.position.x += 1;
        }
    }

    moveUp() {
        const attacked = false;
        for (enemy of this.game.enemies) {
            if (this.position.x === enemy.position.x && this.position.y - 1 === enemy.position.y) {
                this.attackMele(enemy);
                attacked = true
            }
        }
        if (this.game.dungeon[this.position.x][this.position.y - 1] !== 'brown' && !attacked) {
            this.position.y -= 1;
        }
    }

    moveDown() {
        const attacked = false;
        for (enemy of this.game.enemies) {
            if (this.position.x === enemy.position.x && this.position.y + 1 === enemy.position.y) {
                this.attackMele(enemy);
                attacked = true
            }
        }
        if (this.game.dungeon[this.position.x][this.position.y + 1] !== 'brown' && !attacked) {
            this.position.y += 1;
        }
    }

    attackMele(enemy) {}

    attackRanged () {}

    _receiveDamage() {}
}