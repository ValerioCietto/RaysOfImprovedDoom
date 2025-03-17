// modules/sounds.js

export const boomSound = new Audio("boom.wav");
export const pingSound = new Audio("ping.wav");

export function playBoom() {
  boomSound.currentTime = 0;
  boomSound.play();
}

export function playPing() {
  pingSound.currentTime = 0;
  pingSound.play();
}
