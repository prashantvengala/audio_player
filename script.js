// script

//Initiating canvas

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Generating height of the audio waves randomly

const wavelength = [];

for (let i = 165; i >= 0; i--) {
  let randomHeight =
    Math.random() > 0.2
      ? -(Math.random() * (i - 20) + 80)
      : Math.random() * (i - 10) + 50;

  wavelength.push(randomHeight);
}
