module.exports = function (cls) {
    var p = cls.prototype;

    Object.defineProperty(p, 'scale', {
        set: function (value) {
            this.scaleX = this.scaleY = value;
        },
        get: function () {
            if (this.scaleX !== this.scaleY) {
                return 0;
            }

            return this.scaleX;
        }
    });

    Object.defineProperty(p, 'width', {
        set: function (value) {
            this.scaleX = value / this.nominalBounds.width;
        },
        get: function () {
            return this.nominalBounds.width * this.scaleX;
        }
    });

    Object.defineProperty(p, 'height', {
        set: function (value) {
            this.scaleY = value / this.nominalBounds.height;
        },
        get: function () {
            return this.nominalBounds.height * this.scaleY;
        }
    });

    return cls;
};
