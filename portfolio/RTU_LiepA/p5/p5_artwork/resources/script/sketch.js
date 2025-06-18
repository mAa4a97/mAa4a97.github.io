let particles = [];
let numParticles = 2000;

function setup() {
  createCanvas(1000, 1000);
  background(0);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);
  
  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      hue: random(360)
    });
  }
}

function draw() {
  
  let xOffset = mouseIsPressed ? mouseX * 0.001 : 0;
  let yOffset = mouseIsPressed ? mouseY * 0.001 : 0;
  
  for (let p of particles) {
    let angle = noise(
      p.x * 0.005 + xOffset,
      p.y * 0.005 + yOffset
    ) * TWO_PI * 4;
    let dx = cos(angle);
    let dy = sin(angle);

    fill(p.hue, 100, 100, 30);
    rect(p.x, p.y, 2, 2);

    p.x += dx;
    p.y += dy;

    if (p.x < 0) p.x = width;
    if (p.x > width) p.x = 0;
    if (p.y < 0) p.y = height;
    if (p.y > height) p.y = 0;
  }
}
