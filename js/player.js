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
                // this.game._enemyturn();
            }
        }
        if (this.game.dungeon[this.position.x - 1][this.position.y] !== 'brown' && !attacked) {
            this.position.x -= 1;
            // this.game._enemyturn();
        }
    }

    moveRight() {
        let attacked = false;
        for (let i = 0; i < this.game.enemies.length; i++) {
            if (this.position.x + 1 === this.game.enemies[i].position.x && this.position.y === this.game.enemies[i].position.y) {
                this.game.enemies[i]._receiveDamage(this.attackMele());
                attacked = true
                // this.game._enemyturn();
            }
        }
        if (this.game.dungeon[this.position.x + 1][this.position.y] !== 'brown' && !attacked) {
            this.position.x += 1;
            // this.game._enemyturn();
        }
    }

    moveUp() {
        let attacked = false;
        for (let i = 0; i < this.game.enemies.length; i++) {
            if (this.position.x === this.game.enemies[i].position.x && this.position.y - 1 === this.game.enemies[i].position.y) {
                this.game.enemies[i]._receiveDamage(this.attackMele());
                attacked = true
                // this.game._enemyturn();
            }
        }
        if (this.game.dungeon[this.position.x][this.position.y - 1] !== 'brown' && !attacked) {
            this.position.y -= 1;
            // this.game._enemyturn();
        }
    }

    moveDown() {
        let attacked = false;
        for (let i = 0; i < this.game.enemies.length; i++) {
            if (this.position.x === this.game.enemies[i].position.x && this.position.y + 1 === this.game.enemies[i].position.y) {
                this.game.enemies[i]._receiveDamage(this.attackMele());
                attacked = true
                // this.game._enemyturn();
            }
        }
        if (this.game.dungeon[this.position.x][this.position.y + 1] !== 'brown' && !attacked) {
            this.position.y += 1;
            // this.game._enemyturn();
        }
    }

    attackMele() {
        return this.attack;
    }

    attackRanged () {
        if (this.game.enemies.length === 0) {
            return;
        }
        let closestEnemy = this.game.enemies[0];
        let closestDistance = 0;
        for (let enemy of this.game.enemies) {
            let distance = Math.sqrt((this.x - enemy.x)**2 + (this.y - enemy.y)**2)
            if (distance < closestDistance) {
                closestDistance = distance;
                closestEnemy = enemy;
            }
        }
        closestEnemy._receiveDamage(this.attack);
        // this.game._enemyturn();
    }

    _receiveDamage(damage) {
        this.health -= damage - this.defense;
    }
}