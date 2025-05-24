const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 4 + 1,
    d: Math.random() * 100
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let i = 0; i < 100; i++) {
    let p = particles[i];
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  update();
}

let angle = 0;

function update() {
  angle += 0.01;
  for (let i = 0; i < 100; i++) {
    let p = particles[i];
    p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
    p.x += Math.sin(angle) * 2;

    if (p.y > canvas.height) {
      particles[i] = {
        x: Math.random() * canvas.width,
        y: 0,
        r: p.r,
        d: p.d
      };
    }
  }
}

setInterval(draw, 33);
