var html2canvas = require('html2canvas');
var utils = require('../utils');

/**
 * @class Text
 * @param {string} text
 * @param {string} fontFamily
 * @param {number} fontSize
 * @param {string} color
 * @param {string} fontWeight
 * @param {string} textAlign
 * @param {number} maxWidth
 */
function Text(text, fontFamily, fontSize, color, fontWeight, textAlign, maxWidth) {
    this.Container_constructor();

    this._bmp = null;
    this.fontFamily = fontFamily || 'Arial';
    this.fontSize = fontSize || 16;
    this.color = color || '#000000';
    this.fontWeight = fontWeight || 'normal';
    this.textAlign = textAlign || 'left';
    this.maxWidth = maxWidth;
    this.text = text;
}

var p = createjs.extend(Text, createjs.Container);

Object.defineProperty(p, 'text', {
    get: function () {
        return this._text;
    },

    set: function (value) {
        this._text = value;

        if (this._bmp) {
            this.removeChild(this._bmp);
            this._bmp = null;
        }

        if (!this._text || this._text === '') {
            return;
        }

        var _this = this;
        var domContainer = document.getElementById('dom-element-container');
        var div = document.createElement('div');
        domContainer.appendChild(div);

        div.innerHTML = this._text;
        div.style.fontFamily = this.fontFamily;
        div.style.fontSize = this.fontSize + 'px';
        div.style.color = this.color;
        div.style.fontWeight = this.fontWeight;
        div.style.textAlign = this.textAlign;
        div.style.margin = 0;
        div.style.padding = 0;

        if (this.maxWidth) {
            div.style.width = this.maxWidth + 'px';
        }

        html2canvas(div)
            .then(function (canvas) {
                var img = new Image();
                img.crossOrigin = 'Anonymous';
                img.style.padding = 0;
                img.style.margin = 0;
                img.src = canvas.toDataURL();
                domContainer.appendChild(img);

                return waitImageLoad(img);
            })
            .then(function (img) {
                var bitmapScale = 1;
                if (utils.isMobile()) {
                    bitmapScale = div.clientHeight / img.height;
                }

                var bmp = new createjs.Bitmap(img);
                _this.addChild(bmp);
                bmp.scaleX = bmp.scaleY = bitmapScale;
                _this._bmp = bmp;

                domContainer.removeChild(div);
                domContainer.removeChild(img);
            })
            .then(function () {
                _this.dispatchEvent('load');
            })
            .catch(function (error) {
                console.log('html2canvas error:', error);
            });
    }
});
// END CLASS Text

function waitImageLoad(img) {
    return new Promise(function (resolve, reject) {
        img.onload = function () {
            img.onload = null;
            img.onerror = null;

            resolve(img);
        };

        img.onerror = function (error) {
            img.onload = null;
            img.onerror = null;

            reject(error);
        };
    });
}

module.exports = createjs.promote(Text, 'Container');
