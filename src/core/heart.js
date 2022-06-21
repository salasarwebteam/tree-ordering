var displayObject = require('./display-object');

module.exports = function (cls) {
    displayObject(cls);

    var p = cls.prototype;
    var duration = 300;

    p.init = function () {
        this.heartPurple.visible = true;
        this.heartGreen.visible = false;
        this.heartRed.visible = false;
    };

    p.die = function () {
        this.active = false;

        this.heartRed.visible = true;
        var purple = this.heartPurple;

        createjs.Tween.get(purple)
            .to({
                alpha: 0
            }, duration)
            .call(function () {
                purple.visible = false;
            });
    };

    p.bonus = function () {
        this.heartGreen.visible = true;
        var purple = this.heartPurple;

        createjs.Tween.get(purple)
            .to({
                alpha: 0
            }, duration)
            .call(function () {
                purple.visible = false;
            });
    };

    return cls;
};
