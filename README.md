
# lwipify [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/lwipify.svg)](https://www.npmjs.com/package/lwipify) [![Downloads](https://img.shields.io/npm/dt/lwipify.svg)](https://www.npmjs.com/package/lwipify) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

Convert images in [lwip](https://github.com/EyalAr/lwip) objects.

## :cloud: Installation

```sh
$ npm i --save lwipify
```


## :clipboard: Example



```js
const imgpx = require("lwipify");

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
```

## :memo: Documentation


### `lwipify(source, options, callback)`
Converts the image (located at given path/url or the image buffer) into a lwip

#### Params
- **String|Buffer** `source`: The image path/url or the a `Buffer` object.
- **Object** `options`: An object containing the following fields:
 - `image_type` (String): An optional field representing the image type (default: taken from the url/path).
 - `lwip` (Object): The `lwip` module object. By default it uses
   [`lwip2`](https://github.com/IonicaBizau/lwip2) which doesn't
   compile the `lwip` library if GraphicsMagick is available.
- **Function** `callback`: The callback function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`image-parser`](https://github.com/IonicaBizau/image-parser#readme)—An image parser that works.
 - [`imgpx`](https://github.com/IonicaBizau/imgpx#readme)—Get a matrix of pixels of a given image.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
