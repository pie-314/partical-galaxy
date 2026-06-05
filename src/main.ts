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
  vx: number;
  vy: number;
}

const particles: Particle[] = [];

const Xcenter = canvas.width/2;
const Ycenter = canvas.height/2;

for (let i = 0; i < 5000; i++) {
  const radius = Math.random() * 300;
  const angle = Math.random() * Math.PI * 2;

  const x = Xcenter + Math.cos(angle) * radius;
  const y = Ycenter + Math.sin(angle) * radius;
  particles.push({
    x,
    y,
    vx: 0,
    vy: 0,
  });
}


// ctx.fillStyle = "white";
//
// for (const p of particles) {
//   ctx.beginPath();
//   ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
//   ctx.fill();
// }

function animate() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";

  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(animate);
}

animate();
