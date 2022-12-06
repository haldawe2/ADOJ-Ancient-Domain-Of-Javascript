const graphicsNES = new Image();
graphicsNES.src = "../img/NES - Blaster Master - Dungeon.png"
let wallData = {img: graphicsNES, x: 52, y:17, size: 15};
let floorData = {img: graphicsNES, x: 170, y:34, size: 15};
let exitData = {img: graphicsNES, x: 187, y:34, size: 15}

// _renderTestCell() {
//     const imageHeight = 600/this.dungeon[0].length;
//     const imageWidth = 1000/this.dungeon.length;
//     this.ctx.drawImage(graphicsNES, 187, 34, 15, 15, imageWidth, imageHeight, imageWidth, imageHeight);
//   }