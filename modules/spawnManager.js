// modules/spawnManager.js
import { updateSpawnSettings } from "./asteroids.js";

let spawnRate = 1;
let spawnInterval = 1000;

export function adjustSpawnRate() {
  if (spawnInterval > 20 && (spawnRate * spawnInterval) % 10 === 0) {
    spawnInterval = Math.max(20, spawnInterval - 10);
    updateSpawnSettings(spawnRate, spawnInterval);
  }
  if (spawnRate < 20 && (spawnRate * spawnInterval) % 100 === 0) {
    spawnRate = Math.min(20, spawnRate + 1);
    updateSpawnSettings(spawnRate, spawnInterval);
  }
}

export function getSpawnSettings() {
  return { spawnRate, spawnInterval };
}
