class Player {
    constructor(game, health = 100, attack = 20, defense = 20) {
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.position = {x: 1, y: 3};
        this.color = "blue";
        this.game = game;
    }

    moveLeft() {
        let attacked = false;
        for (let i = 0; i < this.game.enemies.length; i++) {
            if (this.position.x - 1 === this.game.enemies[i].position.x && this.position.y === this.game.enemies[i].position.y) {
                this.game.enemies[i]._receiveDamage(this.attackMele());
                attacked = true
            }
        }
        if (this.game.dungeon[this.position.x - 1][this.position.y] !== wallData && !attacked) {
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
        if (this.game.dungeon[this.position.x + 1][this.position.y] !== wallData && !attacked) {
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
        if (this.game.dungeon[this.position.x][this.position.y - 1] !== wallData && !attacked) {
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
        if (this.game.dungeon[this.position.x][this.position.y + 1] !== wallData && !attacked) {
            this.position.y += 1;
        }
    }

    attackMele() {
        return this.attack;
    }

    attackRanged () {
        //Uses formula of distance between two vectors to determine closest enemy, then attack it.
        if (this.game.enemies.length === 0) {
            return;
        }
        let closestEnemy = this.game.enemies[0];
        let closestDistance = Math.sqrt((this.x - this.game.enemies[0].x)**2 + (this.y - this.game.enemies[0].y)**2);
        for (let enemy of this.game.enemies) {
            let distance = Math.sqrt((this.x - enemy.position.x)**2 + (this.y - enemy.position.y)**2)
            if (distance < closestDistance) {
                closestDistance = distance;
                closestEnemy = enemy;
            }
        }
        closestEnemy._receiveDamage(this.attack);
    }

    _receiveDamage(damage) {
        this.health -= damage - this.defense;
    }
}