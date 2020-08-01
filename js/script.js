const button = document.querySelector('button');
const canvas = document.querySelector('canvas');
var aWrapper = document.getElementById("aWrapper");

let resolutionWidth = 100;
let resolutionHeight = 100;

function generateRandomGrayColor() {
  return Math.floor(Math.random() * 255);
}

function drawPixel(canvasContext, pixelX, pixelY, color) {
  const drawIndex = (pixelX + pixelY * resolutionWidth) * 4;
  const canvasData =  canvasContext.getImageData(0, 0, resolutionWidth, resolutionHeight);

  for(let i = 0; i < 3; i++)
    canvasData.data[drawIndex + i] = color;
  canvasData.data[drawIndex + 3] = 255;

  canvasContext.putImageData(canvasData, 0, 0);
}

function generateRandomImage() {
  const canvasContext = canvas.getContext("2d");

  for(let pixelY = 0; pixelY < resolutionHeight; pixelY++) {
    for(let pixelX = 0; pixelX < resolutionWidth; pixelX++) {
      const pixelColor = generateRandomGrayColor();
      drawPixel(canvasContext, pixelX, pixelY, pixelColor);
    }
  }
}

button.addEventListener('click', generateRandomImage);