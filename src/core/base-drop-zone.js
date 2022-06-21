var displayObject = require('./display-object');
var colors = require('../colors');
var utils = require('../utils');

var tweenDuration = 800;

module.exports = function (cls) {
    displayObject(cls);

    var p = cls.prototype;

    p.init = function () {
        this.subtxt.visible = false;
        this.correctTxt.visible = false;
        this.correctSubtxt.visible = false;
        this.displayTxt.visible = false;

        // adjust main text position
        this.txt.textBaseline = 'middle';
        var txtBounds = this.txt.getBounds();

        this.txt.x = this.width * 0.5;
        this.txt.y = this.height - txtBounds.height * 0.5;

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

    p.enableUserInteraction = function (onClick) {
        this.cursor = 'pointer';

        this.on('click', onClick);
    };

    p.disableUserInteraction = function () {
        this.cursor = null;

        this.removeAllEventListeners('click');
    };

    p.setText = function (_txt) {
        this.txt.text = _txt;
    };

    p.getText = function () {
        return this.txt.text;
    };

    p.setDisplayText = function (txt) {
        this.txt.text = '';

        this.displayTxt.visible = true;
        this.displayTxt.text = txt;
    };

    p.setTextColor = function (color) {
        this.txt.color = color;
        this.subtxt.color = color;
    };

    p.showSubtext = function () {
        this.subtxt.visible = true;
    };

    p.hideSubtext = function () {
        this.subtxt.visible = false;
    };

    p.setSubtext = function (_txt) {
        this.subtxt.text = _txt;
    };

    p.getSubtext = function () {
        return this.subtxt.text;
    };

    p.prefill = function () {
        if (this.data.text) {
            this.txt.text = this.data.text;
            this.setTextColor(colors.SECONDARY);
        }
        else if (this.data.texts) {
            var text = '';

            for (var i = 0; i < this.data.texts.length; i++) {
                if (text.length > 0) {
                    text += '/';
                }

                text += this.data.texts[i];
            }

            this.txt.text = '';
            this.correctTxt.visible = true;
            this.correctTxt.text = text;
            this.correctTxt.color = colors.SECONDARY;
        }
    };

    p.fadeOut = function () {
        var _this = this;
        var target = this.data.displayText ? this.displayTxt : this.txt;

        if (target.alpha === 0 || this._isFadingOut) {
            return;
        }

        this._isFadingOut = true;
        this._isFadingIn = false;

        createjs.Tween.removeTweens(target);
        target.alpha = 1;

        createjs.Tween.get(target)
            .to({
                alpha: 0
            }, tweenDuration)
            .call(function () {
                _this._isFadingOut = false;
            });
    };

    p.fadeIn = function () {
        var _this = this;
        var target = this.data.displayText ? this.displayTxt : this.txt;

        if (target.alpha === 1 || this._isFadingIn) {
            return;
        }

        this._isFadingIn = true;
        this._isFadingOut = false;

        createjs.Tween.removeTweens(target);
        target.alpha = 0;

        createjs.Tween.get(target)
            .to({
                alpha: 1
            }, tweenDuration)
            .call(function () {
                _this._isFadingIn = false;
                _this.reset();
            });
    };

    p.setManipulative = function (manipulative, isCorrect) {
        this.manipulative = manipulative;
        this.isCorrect = isCorrect;
        this.visible = false;
    };

    p.showCorrectAnswer = function () {
        createjs.Tween.removeTweens(this);
        createjs.Tween.removeTweens(this.txt);

        this.visible = true;

        if (this.data.text === '') {
            this.reset();
        }
        else {
            if (this.data.prefilled) {
                return;
            }

            var color = this.isCorrect ? colors.SUCCESS : colors.DANGER;
            var text = this.data.text;
            var texts = this.data.texts;
            var subtexts = this.data.subtexts;

            if (text) {
                this.txt.text = text;
                this.txt.alpha = 1;
                this.txt.visible = true;
                this.txt.color = color;

                if (this.data.subtext) {
                    this.subtxt.text = this.data.subtext;
                    this.subtxt.visible = true;
                    this.subtxt.color = color;
                }
            }
            else if (texts) {
                text = '';
                var subtext = '';

                for (var i = 0; i < texts.length; i++) {
                    if (text.length > 0) {
                        if (subtexts) {
                            text += ' /';
                        }
                        else {
                            text += '/';
                        }
                    }

                    text += texts[i];

                    if (subtexts) {
                        subtext += '     ' + subtexts[i];
                    }
                }

                this.correctTxt.text = text;
                this.txt.visible = false;
                this.correctTxt.visible = true;
                this.correctTxt.color = color;

                this.correctSubtxt.text = subtext;
                this.correctSubtxt.visible = true;
                this.correctSubtxt.color = color;
            }
        }
    };

    p.showSlash = function () {
        if (this.data.prefilled) {
            this.redSlash.visible = false;
            this.purpleSlash.visible = true;
            this.blackSlash.visible = false;
        }
        else if (!this.data.prefilled) {
            this.redSlash.visible = false;
            this.purpleSlash.visible = true;
            this.blackSlash.visible = false;
        }
        else {
            this.hideSlash();
        }
    };

    p.hideSlash = function () {
        this.redSlash.visible = false;
        this.purpleSlash.visible = false;
        this.blackSlash.visible = false;
    };

    p.reset = function () {
        createjs.Tween.removeTweens(this.txt);

        this.manipulative = null;
        this.txt.alpha = 1;
        this.visible = true;
        this.isCorrect = false;
    };

    return cls;
};
