// script.js
const pikachu = document.getElementById("pikachu");

let x = 0;
let y = 100;
let direction = 1;
let frame = 0;
const totalFrames = 6; // number of frames in sprite
const frameWidth = 64;

function animate() {
  // Move
  x += direction * 2;
  pikachu.style.left = `${x}px`;
  pikachu.style.top = `${y}px`;

  // Flip direction
  if (x > window.innerWidth - frameWidth || x < 0) {
    direction *= -1;
    pikachu.style.transform = `scaleX(${direction})`;
  }

  // Animate sprite frame
  pikachu.style.backgroundPosition = `-${frame * frameWidth}px 0px`;
  frame = (frame + 1) % totalFrames;

  setTimeout(animate, 100); // change speed
}

animate();