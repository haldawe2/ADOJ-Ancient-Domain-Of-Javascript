class Enemy extends Player{
    constructor(game, health = 20, attack = 10, defense = 10) {
        super(game);
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.position;
        this.color = "red"
        this.game = game
    }

    _receiveDamage()


}