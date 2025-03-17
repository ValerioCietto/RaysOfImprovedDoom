// modules/ui.js
import { spaceship } from "./spaceship.js";
import { playPing } from "./sounds.js";
import { canvas, ctx } from "./canvas.js";

export function createButtons() {
  const buttons = [
    {
      text: "+10 Radius (10§)",
      cost: 10,
      action: () => {
        if (spaceship.money >= 10) {
          spaceship.radius += 10;
          spaceship.money -= 10;
          playPing();
        }
      },
    },
    {
      text: "+1 Ray (100§)",
      cost: 100,
      action: () => {
        if (spaceship.money >= 100) {
          spaceship.rays += 1;
          spaceship.money -= 100;
          playPing();
        }
      },
    },
    {
      text: "Ray Power +1 (500§)",
      cost: 500,
      action: () => {
        if (spaceship.money >= 500) {
          spaceship.rayPower += 1;
          spaceship.money -= 500;
          playPing();
        }
      },
    },
    {
      text: "Final Weapon (10000§)",
      cost: 10000,
      action: () => {
        if (spaceship.money >= 10000) {
          spaceship.finalWeapon = true;
          spaceship.money -= 10000;
          playPing();
        }
      },
    },
  ];

  buttons.forEach((btn, i) => {
    const button = document.createElement("button");
    button.innerText = btn.text;
    button.style.position = "fixed";
    button.style.bottom = "10px";
    button.style.left = `${10 + i * 130}px`;
    button.onclick = btn.action;
    document.body.appendChild(button);
  });
}

export function drawHUD() {
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText(
    `Killed: ${spaceship.kills || 0} | Money: ${spaceship.money || 0}§`,
    20,
    30
  );
}
