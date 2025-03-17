// modules/stars.js
import { canvas } from "./canvas.js";

let stars = [];

export function spawnStars() {
  for (let i = 0; i < 5; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.2,
      brightness: Math.random() * 155 + 100,
    });
  }
}

export function updateStars() {
  stars.forEach((star) => {
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
      star.brightness = Math.random() * 155 + 100;
    }
  });
}

export function drawStars(ctx) {
  stars.forEach((star) => {
    ctx.fillStyle = `rgb(${star.brightness}, ${star.brightness}, ${star.brightness})`;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  });
}
