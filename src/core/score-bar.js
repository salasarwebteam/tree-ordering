var displayObject = require('./display-object');
var utils = require('../utils');

module.exports = function (cls) {
    displayObject(cls);

    var p = cls.prototype;

    p.init = function () {
        // var barWidth = this.scoreBarFill.nominalBounds.width;
        var barHeight = this.scoreBarFill.nominalBounds.height;
        var multiplier = 0.53;

        if (utils.isMobile()) {
            if (utils.isIOS()) {
                multiplier = 0.47;
            }
            else { // Android

            }
        }

        this.chapterTxt.textBaseline = 'middle';
        this.chapterTxt.y = barHeight * multiplier;

        this.scoreTxt.textBaseline = 'middle';
        this.scoreTxt.y = this.chapterTxt.y;

        this.plusTxt.visible = false;
        this.plusTxt.textBaseline = 'middle';
        this.plusTxt.y = this.chapterTxt.y;
    };

    p.setChapter = function (value) {
        this.chapterTxt.text = value;
    };

    p.setScore = function (score, total) {
        this.scoreTxt.text = score + '/' + total;
    };

    p.updateFill = function (percent, duration) {
        if (percent > 1) {
            return;
        }

        var fill = this.scoreBarFill;
        duration = duration || 0;

        if (percent <= 0) {
            fill.scaleX = 0;
            return;
        }

        if (duration === 0) {
            fill.scaleX = percent;
            return;
        }

        createjs.Tween.get(fill, {
            override: true
        })
            .to({
                scaleX: percent
            }, duration);
    };

    p.updatePlus = function (value, duration) {
        var plusTxt = this.plusTxt;
        plusTxt.alpha = 1;
        plusTxt.text = '+' + value;
        plusTxt.x = this.chapterTxt.getBounds().width + this.chapterTxt.x + 6;

        if (value === 0) {
            plusTxt.visible = false;
            return;
        }

        if (duration === 0) {
            plusTxt.visible = true;
            createjs.Tween.removeTweens(plusTxt);
            return;
        }

        duration = duration || 333;
        plusTxt.visible = true;

        createjs.Tween.get(plusTxt, {
            override: true
        })
            .to({
                alpha: 0
            }, duration);
    };

    p.dispose = function () {
        createjs.Tween.removeTweens(this.plusTxt);
        createjs.Tween.removeTweens(this.scoreBarFill);
    };

    return cls;
};
