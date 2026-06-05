const canvas = document.createElement("canvas");
document.body.style.margin = "0";
document.body.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d")!;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

interface Particle {
  x: number;
  y: number;
}

const particles: Particle[] = [];

for (let i = 0; i < 1000; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
  });
}

ctx.fillStyle = "white";

for (const p of particles) {
  ctx.beginPath();
  ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
  ctx.fill();
}
