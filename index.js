const fs = require('fs');

const { createCanvas, loadImage } = require('canvas');

const { layers, width, height } = require('./layers/config');

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

const edition = 1;

const saveLayer = (canvas, edition) => {
  fs.writeFileSync(`./output/${edition}.png`, canvas.toBuffer('image/png'));
};

const drawLayer = async (layer, edition) => {
  let element =
    layer.elements[Math.floor(Math.random() * layer.elements.length)];

  const image = await loadImage(`${layer.location}${element.fileName}`);

  ctx.drawImage(
    image,
    layer.position.x,
    layer.position.y,
    layer.size.width,
    layer.size.height
  );

  saveLayer(canvas, edition);
};

for (let i = 1; i <= edition; ++i) {
  layers.forEach((layer) => {
    drawLayer(layer, i);
  });
}
