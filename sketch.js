const a = 250;
let k = 1;

function setup() {
    createCanvas(600, 600);
    noFill();
    strokeWeight(2);
}

function draw() {
    background("#333333");
    translate(width / 2, height / 2);

    // stroke(220, 50, 70);
    // line(-width / 2, 0, width / 2, 0);

    stroke(255);
    beginShape();
    for (let i = 0; i < TWO_PI; i += 0.01) {
        const r = a * cos(k * i);
        const x = r * cos(i);
        const y = r * sin(i);
        vertex(x, y);
    }
    endShape();

    k += 0.005;
}
