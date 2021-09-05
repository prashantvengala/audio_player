// script

//Initiating canvas

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//pushing random numbers  to array to generate height of the audio waves randomly

const lines = [];
//looping the array
for (let i = 175; i >= 0; i--) {
  let length =
    Math.random() > 0.3
      ? -(Math.random() * (i - 15) + 90)
      : Math.random() * (i - 40) + 20;
  lines.push(length);
}

let lienWidth = 4;
let init = 10;
let newInit = init;

// audio waves using lines
for (let i = 0; i < lines.length; i++) {
  ctx.fillStyle = "#e8e8e8";
  ctx.fillRect(init, 175, lienWidth, lines[i]);
  init = init + lienWidth + 4;
}
