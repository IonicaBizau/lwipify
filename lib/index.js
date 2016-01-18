"use strict";

const isRemote = require("url-remote")
    , fs = require("fs")
    , path = require('path')
    , isBuffer = require("is-buffer")
    , lwip = require("lwip")
    , got = require("got")
    ;

/**
 * lwipify
 * Converts the image (located at given path/url or the image buffer) into a lwip
 *
 * @name lwipify
 * @function
 * @param {String|Buffer} source The image path/url or the a `Buffer` object.
 * @param {Object} options An object containing the following fields:
 *
 *  - `image_type` (String): An optional field representing the image type (default: taken from the url/path).
 *
 * @param {Function} callback The callback function.
 */
module.exports = function lwipify (source, options, callback) {

    if (typeof options === "function") {
        callback = options;
        options = {
            image_type: undefined
        };
    }

    // Online images
    if (isRemote(source)) {
        got(source, {
            encoding: null
        }).then(res => {
            options.image_type = path.extname(source).substring(1);
            lwipify(res.body, options, callback);
        }).catch(err => {
            callback(err);
        });
        return;
    }

    // Convert the buffer/file into image
    let args = [source];
    options.image_type && args.push(options.image_type);
    args.push(callback);
    lwip.open.apply(lwip, args);
};
