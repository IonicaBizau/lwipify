## Documentation

You can see below the API reference of this module.

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

