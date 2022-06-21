var heart = require('./core/heart');
var score = require('./score');
var popups = require('./popups');

var __life = {};

var Heart = null;
var _parent = null;

var _maxLives = 4;
var _lives = _maxLives;
var _hearts = [];

__life.init = function (lib, parent) {
    Heart = heart(lib.Heart);
    _parent = parent;
};

__life.getHeartClass = function () {
    return Heart;
};

__life.addHearts = function () {
    var gap = 16;

    for (var i = 0; i < _lives; i++) {
        var heart = new Heart();
        heart.init();
        _parent.addChild(heart);

        heart.active = true;
        heart.x = 93 + i * (heart.width + gap);
        heart.y = 1316;

        _hearts[i] = heart;
    }
};

__life.removeHearts = function () {
    for (var i = 0; i < _hearts.length; i++) {
        var heart = _hearts[i];
        _parent.removeChild(heart);
    }

    _hearts.length = 0;
};

__life.set = function (value) {
    _maxLives = value;
    _lives = _maxLives;
};

__life.get = function () {
    return _lives;
};

__life.getMax = function () {
    return _maxLives;
};

__life.getLost = function () {
    return _maxLives - _lives;
};

__life.increase = function (value) {
    _lives += value;
};

__life.decrease = function (value) {
    _lives -= value;

    for (var i = 0; i < _hearts.length; i++) {
        var heart = _hearts[i];
        if (!heart.active) {
            continue;
        }

        heart.die();
        break;
    }
};

__life.addFloat = function (x, y, duration, floatDistance, parent) {
    duration = duration || 500;
    floatDistance = floatDistance || 50;
    parent = parent || _parent;

    var heart = new Heart();
    heart.init();
    parent.addChild(heart);

    heart.heartPurple.visible = false;
    heart.heartGreen.visible = false;
    heart.heartRed.visible = true;
    heart.x = x - heart.width / 2;
    heart.y = y;

    createjs.Tween.get(heart)
        .to({
            y: heart.y - floatDistance,
            alpha: 0
        }, duration)
        .call(function () {
            parent.removeChild(heart);
        });
};

__life.killAllHearts = function () {
    _lives = 0;

    for (var i = 0; i < _hearts.length; i++) {
        var heart = _hearts[i];
        heart.heartBlue.visible = false;
        heart.heartRed.visible = true;
    }
};

__life.showBonus = function (bonus) {
    var count = __life.getLost();
    var popupHearts = null;
    var floatDuration = 1000;
    var intervalId = setInterval(showScoreFloat, 500);

    function showScoreFloat() {
        var heart = _hearts[count];

        if (heart.active) {
            heart.bonus();
            createjs.Sound.play('Ping');
            score.addFloat(bonus, heart.x + heart.width / 2, heart.y, floatDuration, 60, null, null, 22);
        }

        // put it here, in case user closes the popup while the animations
        // are still running
        var popup = popups.get();
        if (popup) {
            popupHearts = popup.hearts;
            if (popupHearts) {
                var heart2 = popupHearts[count];

                if (heart2.active) {
                    heart2.bonus();
                    score.addFloat(bonus, heart2.x + heart2.width / 2, heart2.y, floatDuration, 60, null, popup, 22);
                }
            }
        }

        count++;
        if (count === _hearts.length) {
            clearInterval(intervalId);
        }
    }
};

module.exports = __life;
