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
        if (this.game.dungeon[this.position.x - 1][this.position.y] !== 'brown') {
            this.position.x -= 1;
        }
    }

    moveRight() {
        if (this.game.dungeon[this.position.x + 1][this.position.y] !== 'brown') {
            this.position.x += 1;
        }
    }

    moveUp() {
        if (this.game.dungeon[this.position.x][this.position.y - 1] !== 'brown') {
            this.position.y -= 1;
        }
    }

    moveDown() {
        if (this.game.dungeon[this.position.x][this.position.y + 1] !== 'brown') {
            this.position.y += 1;
        }
    }

    attackMele () {}

    attackRanged () {}

    _receiveDamage() {}
}