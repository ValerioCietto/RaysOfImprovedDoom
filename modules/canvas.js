// modules/canvas.js

export let canvas;
export let ctx;

export function initCanvas() {
  canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.backgroundColor = "darkblue";

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
