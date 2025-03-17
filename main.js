// main.js
import { initCanvas } from "./modules/canvas.js";
import { updateStars, drawStars, spawnStars } from "./modules/stars.js";
import { drawSpaceship, moveSpaceship } from "./modules/spaceship.js";
import { drawAsteroids, spawnAsteroids } from "./modules/asteroids.js";
import { checkLaserHits } from "./modules/combat.js";
import { createButtons, drawHUD } from "./modules/ui.js";

initCanvas();
createButtons();

setInterval(spawnStars, 5000);
document.addEventListener("mousemove", moveSpaceship);
document.addEventListener("touchmove", moveSpaceship, { passive: false });

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateStars();
  drawStars();
  drawSpaceship();
  drawAsteroids();
  drawHUD();
  checkLaserHits();
  requestAnimationFrame(gameLoop);
}

spawnAsteroids();
gameLoop();
