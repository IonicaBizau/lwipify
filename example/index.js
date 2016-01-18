const imgpx = require("../lib");

// Online image
imgpx("https://octodex.github.com/images/original.png", (err, img) => {
    if (err) { return console.error(err); }

    console.log(img.height());
    // 896

    console.log(img.width());
    // 896

    console.log(img.getPixel(2, 3));
    // { r: 255, g: 255, b: 255, a: 0 }
});

// Local file
imgpx(`${__dirname}/octocat.png`, (err, img) => {
    if (err) { return console.error(err); }
    console.log(img.height());
    // 20

    console.log(img.width());
    // 20

    console.log(img.getPixel(2, 3));
    // { r: 0, g: 0, b: 0, a: 0 }
});
