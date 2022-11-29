class Dungeon{
    constructor() {
        this.matrix = [];
    }

    _createDungeon() {
        this.matrix.push(new Array(9));

        for (let i = 0; i < 9; i++) {
            this.matrix[i].push(new Array(9));
            for (let j = 0; j < 9; j++) {
                this.matrix[i][j] = floor;
            }
        }
    }
}