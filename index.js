const fs = require('fs');

const { createCanvas, loadImage } = require('canvas');

const canvas = createCanvas(1000, 1000);
const ctx = canvas.getContext('2d');

const saveLayer = (canvas) => {
  fs.writeFileSync('./new-image.png', canvas.toBuffer('image/png'));
};

const drawLayer = async () => {
  const image = await loadImage('./eye-ball.png');

  ctx.drawImage(image, 0, 0, 1000, 1000);

  saveLayer(canvas);
};

drawLayer();
