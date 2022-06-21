var baseManipulative = require('./base-manipulative');
var colors = require('../colors');
var utils = require('../utils');

var tweenDuration = 200;

module.exports = function (cls) {
    baseManipulative(cls);

    var p = cls.prototype;

    p.init = function () {
        this.subtxt.visible = false;

        this.txt.textBaseline = 'middle';
        var txtBounds = this.txt.getBounds();

        this.txt.x = this.width * 0.5;
        this.txt.y = this.height - txtBounds.height * 0.5;// align to bottom

        // calculate offset
        var offset = -(txtBounds.height * 0.05);
        if (utils.isMobile()) {
            if (utils.isIOS()) {
                offset = txtBounds.height * 0.03;
            }
            else { // Android
                offset = -(txtBounds.height * 0.043);
            }
        }

        // set slash position
        this.purpleSlash.visible = false;
        this.purpleSlash.x = this.txt.x;
        this.purpleSlash.y = this.txt.y + offset;

        this.redSlash.visible = false;
        this.redSlash.x = this.purpleSlash.x;
        this.redSlash.y = this.purpleSlash.y;

        this.blackSlash.visible = false;
        this.blackSlash.x = this.purpleSlash.x;
        this.blackSlash.y = this.purpleSlash.y;

        /* var shape = new createjs.Shape();
        shape.graphics.beginFill('#ffff00').drawRect(0, 0, txtBounds.width, txtBounds.height);
        shape.alpha = 0.3;
        shape.x = this.txt.x - txtBounds.width * 0.5;
        shape.y = this.txt.y - txtBounds.height * 0.5;
        this.addChild(shape); */
    };

    p.setText = function (_txt) {
        this.txt.text = _txt;
    };

    p.getText = function () {
        return this.txt.text;
    };

    p.scaleUp = function () {
        var scaleUp = 1.15;

        createjs.Tween.get(this)
            .to({
                scaleX: scaleUp,
                scaleY: scaleUp
            }, tweenDuration);
    };

    p.scaleToNormal = function () {
        var normalScale = 1;

        createjs.Tween.get(this)
            .to({
                scaleX: normalScale,
                scaleY: normalScale
            }, tweenDuration);
    };

    p.moveToOrigin = function () {
        var _this = this;

        createjs.Tween.get(this)
            .to({
                x: this.originX,
                y: this.originY
            }, tweenDuration)
            .call(function () {
                _this.origin.visible = false;
            });
    };

    p.hover = function (dropZone) {
        // if hovering the same drop zone
        if (this.dropZone && this.dropZone === dropZone) {
            return;
        }

        // check old drop zone and fade in
        if (this.dropZone && !this.dropZone.manipulative) {
            this.dropZone.fadeIn();
        }

        // set new drop zone
        this.dropZone = dropZone;

        if (!this.dropZone) {
            return;
        }

        if (this.dropZone.manipulative) {
            return;
        }

        this.dropZone.fadeOut();
    };

    p.reset = function () {
        this.origin.visible = true;
        this.txt.color = colors.BUTTON;

        this.hideSlash();
        this.hideSubtext();

        if (this.dropZone) {
            this.dropZone.reset();
            this.dropZone = null;
        }
    };

    p.correct = function (dropZone, isTween) {
        this.dropZone = dropZone;
        this.origin.visible = true;
        this.txt.color = colors.SUCCESS;

        if (this.dropZone.data.strikethrough) {
            this.showSlash();
        }
        else {
            this.hideSlash();
        }

        this.showSubtext();

        if (isTween) {
            createjs.Tween.get(this)
                .to({
                    x: dropZone.x,
                    y: dropZone.y
                }, tweenDuration);
        }
        else {
            this.x = dropZone.x;
            this.y = dropZone.y;
        }
    };

    p.wrong = function (dropZone, isTween) {
        this.dropZone = dropZone;
        this.origin.visible = true;
        this.txt.color = colors.DANGER;

        if (this.dropZone.data.strikethrough) {
            this.showSlash();
        }
        else {
            this.hideSlash();
        }

        this.showSubtext();

        if (isTween) {
            createjs.Tween.get(this)
                .to({
                    x: dropZone.x,
                    y: dropZone.y
                }, tweenDuration);
        }
        else {
            this.x = dropZone.x;
            this.y = dropZone.y;
        }
    };

    p.setDropZone = function (dropZone, isTween) {
        this.dropZone = dropZone;
        this.origin.visible = true;

        if (this.dropZone.data.strikethrough) {
            this.showSlash();
        }
        else {
            this.hideSlash();
        }

        this.showSubtext();

        if (isTween) {
            createjs.Tween.get(this)
                .to({
                    x: dropZone.x,
                    y: dropZone.y
                }, tweenDuration);
        }
        else {
            this.x = dropZone.x;
            this.y = dropZone.y;
        }
    };

    p.showSlash = function () {
        if (!this.dropZone) {
            this.hideSlash();
            return;
        }

        this.redSlash.visible = this.dropZone.redSlash.visible;
        this.purpleSlash.visible = this.dropZone.purpleSlash.visible;
        this.blackSlash.visible = this.dropZone.blackSlash.visible;
    };

    p.hideSlash = function () {
        this.redSlash.visible = false;
        this.purpleSlash.visible = false;
        this.blackSlash.visible = false;
    };

    p.showSubtext = function () {
        if (this.data && this.data.subtext) {
            this.subtxt.visible = true;
            this.subtxt.text = this.data.subtext;
            this.subtxt.color = this.txt.color;
            return;
        }

        if (!this.dropZone) {
            this.hideSubtext();
            return;
        }

        var dzData = this.dropZone.data;

        if (!dzData) {
            this.hideSubtext();
            return;
        }

        if (!dzData.subtext) {
            this.hideSubtext();
            return;
        }

        if (!dzData.prefilledSubtext) {
            return;
        }

        this.subtxt.visible = true;
        this.subtxt.text = dzData.subtext;
        this.subtxt.color = this.txt.color;
    };

    p.hideSubtext = function () {
        if (this.data && this.data.subtext) {
            this.subtxt.color = this.txt.color;
            return;
        }

        this.subtxt.visible = false;
    };

    return cls;
};
