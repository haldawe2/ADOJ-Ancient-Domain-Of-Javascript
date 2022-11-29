class Dungeon{
    constructor() {
        this.matrix = [];
    }

    _createDungeon() {
        //creates a 9x9 matrix with floor (white color)
        this.matrix = new Array(9);
        for (let i = 0; i < 9; i++) {
            this.matrix[i] = new Array(9);
            for (let j = 0; j < 9; j++) {
                this.matrix[i][j] = "white";
            }
        }
    }

    _createWalls() {
        //top and bottom walls
        for (let i = 0; i < this.matrix.length; i++) {
            this.matrix[i][0] = "brown"
        }
        for (let i = 0; i < this.matrix.length; i++) {
            this.matrix[i][this.matrix.length - 1] = "brown"
        }
        //left and right walls
        for (let i = 0; i < this.matrix.length; i++) {
            this.matrix[0][i] = "brown"
        }
        for (let i = 0; i < this.matrix.length; i++) {
            this.matrix[this.matrix.length - 1][i] = "brown"
        }
    }

    renderDungeon() {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        ctx.fillStyle = `${test[i][j]}`;
        ctx.fillRect(
          i * (canvas.heigth / this.matrix.length),
          j * (canvas.width / this.matrix[i].length),
          canvas.heigth / this.matrix.length,
          canvas.width / this.matrix[i].length
        );
      }
    }
}}

// testing Dungeon class works fine => works
const test = new Dungeon;
test._createDungeon();
test._createWalls();
console.table(test.matrix)