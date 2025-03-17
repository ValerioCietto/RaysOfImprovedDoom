// modules/spaceship.js

export const spaceshipImage = new Image();
spaceshipImage.src = "spaceship.png";

export const spaceship = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  radius: 50,
  rays: 1,
  rayPower: 1,
  finalWeapon: false,
};

export function drawSpaceship(ctx) {
  ctx.beginPath();
  ctx.arc(spaceship.x, spaceship.y, spaceship.radius, 0, Math.PI * 2);
  ctx.setLineDash([5, 5]);
  ctx.strokeStyle = "red";
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.closePath();

  if (spaceshipImage.complete) {
    ctx.drawImage(spaceshipImage, spaceship.x - 25, spaceship.y - 25, 50, 50);
  } else {
    spaceshipImage.onload = () => {
      ctx.drawImage(spaceshipImage, spaceship.x - 25, spaceship.y - 25, 50, 50);
    };
  }
}

export function moveSpaceship(event) {
  if (event.touches && event.touches.length > 0) {
    spaceship.x = event.touches[0].clientX;
    spaceship.y = event.touches[0].clientY;
  } else {
    spaceship.x = event.clientX;
    spaceship.y = event.clientY;
  }
}
