class Player {
    constructor(health = 100, attack = 20, defense = 20) {
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.position = {x: 0, y: 0}
        this.orientation = 'right'
    }

    orientate() {}

    moveLeft() {
        if (dungeon.matrix[this.position.x - 1][this.position.y] !== 'wall') {
            this.position.x -= 1;
        }
        game._passTurn();
        game._update();
    }

    moveRight() {
        if (dungeon.matrix[this.position.x + 1][this.position.y] !== 'wall') {
            this.position.x += 1;
        }
        game._passTurn();
        game._update();
    }

    moveUp() {
        if (dungeon.matrix[this.position.x][this.position.y - 1] !== 'wall') {
            this.position.x -= 1;
        }
        game._passTurn();
        game._update();
    }

    moveDown() {
        if (dungeon.matrix[this.position.x][this.position.y + 1] !== 'wall') {
            this.position.x += 1;
        }
        game._passTurn();
        game._update();
    }

    attackMele () {}

    attackRanged () {}

    _receiveDamage() {}
}