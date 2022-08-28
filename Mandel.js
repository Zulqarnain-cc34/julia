let maxslider;
let minslider;

function setup() {
    createCanvas(400, 400);
    maxslider = createSlider(-2.5, 0, -2.5, 0.01);
    minslider = createSlider(0, 2.5, 2.5, 0.01);
}

function draw() {
    let maxiterations = 100;
    pixelDensity(1);
    loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let a = map(x, 0, width, minslider.value(), maxslider.value());
            let b = map(y, 0, height, minslider.value(), maxslider.value());
            let ca = a;
            let cb = b;
            let n = 0;
            while (n < maxiterations) {
                let aa = a * a - b * b;
                let bb = 2 * a * b;
                a = aa + ca;
                b = bb + cb;
                if (a * a + b * b > 16) {
                    break;
                }
                n++;
            }

            var bright = map(n, 0, maxiterations, 0, 255);
            if (n === maxiterations) {
                bright = 0;
            }
            pix = (x + y * width) * 4;
            pixels[pix + 0] = bright;
            pixels[pix + 1] = bright;
            pixels[pix + 2] = bright;
            pixels[pix + 3] = 255;
        }
    }
    updatePixels();
}