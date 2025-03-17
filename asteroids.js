// modules/asteroids.js
import { spaceship } from "./modules/spaceship.js";
import { adjustSpawnRate } from "./spawnManager.js";
import { boomSound } from "./sounds.js";

export let asteroids = [];

let spawnRate = 1;
let spawnInterval = 1000;
let asteroidSpawnTimer;

export function spawnAsteroids() {
  for (let i = 0; i < spawnRate; i++) {
    let size = Math.random() * 20 + 20;
    asteroids.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * (window.innerHeight * 0.1),
      size: size,
      speed: Math.random() * 3 + 1,
      redValue: 0,
    });
  }
}

export function drawAsteroids(ctx) {
  asteroids.forEach((asteroid, index) => {
    ctx.fillStyle = `rgb(${asteroid.redValue}, 0, 0)`;
    ctx.beginPath();
    ctx.arc(asteroid.x, asteroid.y, asteroid.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    asteroid.y += asteroid.speed;

    if (asteroid.y - asteroid.size > window.innerHeight) {
      asteroids.splice(index, 1);
    }
  });
}

export function startAsteroidSpawner() {
  asteroidSpawnTimer = setInterval(spawnAsteroids, spawnInterval);
}

export function updateSpawnSettings(newRate, newInterval) {
  spawnRate = newRate;
  spawnInterval = newInterval;
  clearInterval(asteroidSpawnTimer);
  startAsteroidSpawner();
}
