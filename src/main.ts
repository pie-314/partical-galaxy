const canvas = document.createElement("canvas");
document.body.style.margin = "0";
document.body.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d")!;
ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const particles: Particle[] = [];

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

function galaxies(arms) {

for (let i = 0; i < 20000; i++) {
  const radius = Math.pow(Math.random(), 2) * 450;

  const arm = Math.floor(Math.random() * arms);

  const baseAngle = (arm / arms) * Math.PI * 2;

  const angle =
    baseAngle +
    radius * 0.015 +
    (Math.random() - 0.5) * 2.0;

  const spread = radius * 0.15;

  particles.push({
    x:
      centerX +
      Math.cos(angle) * radius +
      (Math.random() - 0.5) * spread,

    y:
      centerY +
      Math.sin(angle) * radius +
      (Math.random() - 0.5) * spread,

    vx: 0,
    vy: 0,
  });
}
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

  ctx.beginPath();
  ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();

  const rotation = performance.now() * 0.0001;

  for (const p of particles) {
    const dx = centerX - p.x;
    const dy = centerY - p.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // const force = 50 / (dist * dist + 100);
    // const force = 0.005 / (dist + 20);

    const hue = 220 + dist * 0.2;

    ctx.fillStyle = `hsl(${hue}, 100%, 70%)`;

    // p.vx += dx * force;
    // p.vy += dy * force;

    // p.vx += (dx / dist) * 0.01;
    // p.vy += (dy / dist) * 0.01;
    // p.x += p.vx;
    // p.y += p.vy;

    const relX = p.x - centerX;
    const relY = p.y - centerY;

    const rotatedX =
      relX * Math.cos(rotation) -
      relY * Math.sin(rotation);

    const rotatedY =
      relX * Math.sin(rotation) +
      relY * Math.cos(rotation);

    ctx.beginPath();
    ctx.arc(
      centerX + rotatedX,
      centerY + rotatedY,
      1,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }

  requestAnimationFrame(animate);
}

galaxies(4);
animate();
