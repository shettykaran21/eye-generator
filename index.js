const fs = require('fs');

const { createCanvas, loadImage } = require('canvas');

const { layers, width, height } = require('./layers/config');

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

const saveLayer = (canvas) => {
  fs.writeFileSync('./new-image.png', canvas.toBuffer('image/png'));
};

const drawLayer = async () => {
  const image = await loadImage('./eye-ball.png');

  ctx.drawImage(image, 0, 0, width, height);

  saveLayer(canvas);
};

drawLayer();
