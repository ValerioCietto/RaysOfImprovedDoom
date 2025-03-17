// modules/sounds.js

export const boomSound = new Audio("boom.wav");
export const pingSound = new Audio("ping.wav");

// Set lower volume
boomSound.volume = 0.2;
pingSound.volume = 0.2;

export function playBoom() {
  boomSound.currentTime = 0;
  boomSound.play();
}

export function playPing() {
  pingSound.currentTime = 0;
  pingSound.play();
}
