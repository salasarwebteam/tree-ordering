var baseManipulative = require('./base-manipulative');

module.exports = function (cls) {
    baseManipulative(cls);// extend base manipulative

    var p = cls.prototype;

    p.resize = function () {
        this.txt.lineWidth = this.txt.getMeasuredWidth();

        // set width of the rect hit area
        this.hitArea.scaleX = this.txt.getMeasuredWidth() / this.hitArea.nominalBounds.width;
    };

    return cls;
};
