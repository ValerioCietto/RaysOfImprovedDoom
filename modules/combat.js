// modules/combat.js
import { spaceship } from "./spaceship.js";
import { asteroids } from "./asteroids.js";
import { playBoom } from "./sounds.js";
import { adjustSpawnRate } from "./spawnManager.js";

function drawLightning(ctx, x1, y1, x2, y2) {
  let segments = 5;
  let offset = 20;
  let points = [{ x: x1, y: y1 }];

  for (let i = 1; i < segments; i++) {
    let t = i / segments;
    let nx = x1 + (x2 - x1) * t + (Math.random() - 0.5) * offset;
    let ny = y1 + (y2 - y1) * t + (Math.random() - 0.5) * offset;
    points.push({ x: nx, y: ny });
  }
  points.push({ x: x2, y: y2 });

  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.stroke();
  ctx.closePath();
}

export function checkLaserHits(ctx) {
  let currentRays = 0;
  const sortedAsteroids = asteroids.slice().sort((a, b) => a.size - b.size);

  for (const asteroid of sortedAsteroids) {
    if (currentRays >= spaceship.rays) break;

    let dx = asteroid.x - spaceship.x;
    let dy = asteroid.y - spaceship.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < spaceship.radius) {
      if (spaceship.finalWeapon) {
        drawLightning(ctx, spaceship.x, spaceship.y, asteroid.x, asteroid.y);
      } else {
        ctx.strokeStyle = "red";
        ctx.lineWidth = Math.max(1, spaceship.rayPower);
        ctx.beginPath();
        ctx.moveTo(spaceship.x, spaceship.y);
        ctx.lineTo(asteroid.x, asteroid.y);
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.closePath();
      }

      let damage = spaceship.finalWeapon ? 100 : spaceship.rayPower;
      asteroid.size -= damage * 0.1;
      asteroid.redValue = Math.min(255, asteroid.redValue + 25);
      currentRays++;

      if (asteroid.size < 10) {
        let index = asteroids.indexOf(asteroid);
        if (index > -1) {
          asteroids.splice(index, 1);
          spaceship.kills = (spaceship.kills || 0) + 1;
          spaceship.money = (spaceship.money || 0) + 1;
          adjustSpawnRate();
          playBoom();
        }
      }
    }
  }
}
