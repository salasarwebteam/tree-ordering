var basePopup = require('./base-popup');
var button = require('./button');

module.exports = function (cls) {
    basePopup(cls);

    var p = cls.prototype;

    // override methods
    p.super_init = p.init;
    p.super_remove = p.remove;

    p.init = function () {
        this.super_init();

        button(this.closeButton);
        button(this.tryAgainButton);
        button(this.rightArrow);

        this.messageTxt.textBaseline = 'middle';
        this.messageTxt.text = 'You used your';
        this.titleTxt.textBaseline = 'middle';
    };

    p.remove = function () {
        this.super_remove();

        this.tryAgainButton.dispose();
        this.closeButton.dispose();
        this.rightArrow.dispose();

        this.rightArrow.removeAllEventListeners('click');
        this.tryAgainButton.removeAllEventListeners('click');
        this.closeButton.removeAllEventListeners('click');
        this.parent.removeChild(this);
    };

    p.setTitle = function (title) {
        this.titleTxt.text = title;

        var titleBarBounds = this.titleBar.nominalBounds;

        this.titleTxt.x = titleBarBounds.width / 2;
        this.titleTxt.y = titleBarBounds.height / 2;
    };

    p.initHearts = function (HeartCls, maxLives) {
        var startX = 160;
        var posY = 120;
        var heartHeight = NaN;
        var gap = 16;

        for (var i = 0; i < maxLives; i++) {
            var heart = new HeartCls();
            heart.init();
            this.addChild(heart);

            if (isNaN(heartHeight)) {
                heartHeight = heart.height;
            }

            heart.active = true;
            heart.x = startX + (i * (heart.width + gap));
            heart.y = posY;

            heart.heartPurple.visible = false;
            heart.heartGreen.visible = false;
            heart.heartRed.visible = true;
        }

        this.messageTxt.x = 20;
        this.messageTxt.y = posY + heartHeight * 0.5;
    };

    return cls;
};
