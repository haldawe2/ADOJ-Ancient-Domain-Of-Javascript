const wall = new Image();
wall.src = "../img/NES - Blaster Master - Dungeon.png"
let wallData = {image: wall, x: 52, x:17};

_renderTestCell() {
    const imageHeight = 600/this.dungeon[0].length;
    const imageWidth = 1000/this.dungeon.length;
    this.ctx.drawImage(floorData.image, 52, 17, 15, 15, imageWidth, imageHeight, imageWidth, imageHeight);
  }