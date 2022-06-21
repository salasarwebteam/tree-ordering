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
        button(this.rightArrow);

        this.scoreBar.init();

        this.titleTxt.textBaseline = 'middle';
    };

    p.remove = function () {
        this.super_remove();

        this.scoreBar.dispose();

        this.closeButton.dispose();
        this.rightArrow.dispose();

        this.rightArrow.removeAllEventListeners('click');
        this.closeButton.removeAllEventListeners('click');
        this.parent.removeChild(this);
    };

    p.setTitle = function (title) {
        this.titleTxt.text = title;

        var titleBarBounds = this.titleBar.nominalBounds;

        this.titleTxt.x = titleBarBounds.width / 2;
        this.titleTxt.y = titleBarBounds.height / 2;
    };

    p.initScoreBar = function (chapterText, score, totalScore) {
        this.scoreBar.setChapter(chapterText);
        this.scoreBar.setScore(score, totalScore);
        this.scoreBar.updateFill(score / totalScore, 0);
        this.scoreBar.updatePlus(0);
    };

    p.initHearts = function (HeartCls, lives, lostLives, maxLives) {
        var startX = 20;
        var posY = 132;
        var gap = 16;

        this.hearts = [];

        for (var i = 0; i < maxLives; i++) {
            var heart = new HeartCls();
            heart.init();
            this.addChild(heart);

            heart.active = true;
            heart.x = startX + (i * (heart.width + gap));
            heart.y = posY;

            if (i <= lostLives - 1) {
                heart.heartPurple.visible = false;
                heart.heartGreen.visible = false;
                heart.heartRed.visible = true;
            }

            this.hearts[i] = heart;
        }
    };

    p.updateScoreBar = function (score, totalScore, plus, fillTweenDuration) {
        this.scoreBar.setScore(score, totalScore);
        this.scoreBar.updateFill(score / totalScore, fillTweenDuration);
        this.scoreBar.updatePlus(plus, 0);
    };

    return cls;
};
