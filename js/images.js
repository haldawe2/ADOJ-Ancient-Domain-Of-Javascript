const graphicsNES = new Image();
graphicsNES.src = "../img/NES - Blaster Master - Dungeon.png";
let wallData = { img: graphicsNES, x: 52, y: 17, size: 15 };
let floorData = { img: graphicsNES, x: 170, y: 34, size: 15 };
let exitData = { img: graphicsNES, x: 187, y: 34, size: 15 };

const warriorImg = new Image();
warriorImg.src = "../img/warriorarrow.png";
let arrowData = { img: warriorImg, x: 98, y: 80, size: 20 };
let warriorData = { img: warriorImg, x: 50, y: 10, size: 20 };
setInterval(() => {
  if (warriorData.y === 10) {
    warriorData.y = 34;
  } else {
    warriorData.y = 10;
  }
}, 500);

const enemiesImg = new Image();
enemiesImg.src = "../img/enemies.png";
let orkData = { img: enemiesImg, x: 102.5, y: 0.5, size: 17 };
setInterval(() => {
  if (orkData.x === 102.5) {
    orkData.x = 119.5;
  } else {
    orkData.x = 102.5;
  }
}, 500);
