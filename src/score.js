var scoreBar = require('./core/score-bar');
var popups = require('./popups');
var colors = require('./colors');

var __score = {};

var ScoreFloat = null;
var ScoreBar = null;
var _parent = null;

var _totalScore = 0;
var _score = 0;
var _scoreIncrement = 0;

var _scoreBar = null;

__score.init = function (lib, parent) {
    ScoreFloat = lib.ScoreFloat;
    ScoreBar = scoreBar(lib.ScoreBar);
    _parent = parent;

    _scoreBar = new ScoreBar();
    _parent.addChild(_scoreBar);
    _scoreBar.init();

    _scoreBar.x = 387;
    _scoreBar.y = 1314;
    _scoreBar.updateFill(0);
};

__score.setTotal = function (value) {
    _totalScore = value;
};

__score.getTotal = function () {
    return _totalScore;
};

__score.set = function (value) {
    _score = value;
    _scoreIncrement = 0;
};

__score.get = function () {
    return _score;
};

__score.add = function (score) {
    _score += score;
    _scoreIncrement = score;
};

__score.addBonus = function (bonus) {
    var duration = 100;
    var count = 0;

    var intervalId = setInterval(function () {
        count++;
        _score++;

        if (count === bonus) {
            clearInterval(intervalId);
        }

        _scoreBar.setScore(_score, _totalScore);
        _scoreBar.updateFill(_score / _totalScore, duration);
        _scoreBar.updatePlus(count, 0);

        var popup = popups.get();
        if (popup) {
            popup.updateScoreBar(_score, _totalScore, count, duration);
        }
    }, duration);
};

__score.setChapter = function (txt) {
    _scoreBar.setChapter(txt);
};

__score.addFloat = function (score, x, y, duration, floatDistance, color, parent, fontSize) {
    duration = duration || 500;
    floatDistance = floatDistance || 50;
    color = color || colors.SUCCESS;
    parent = parent || _parent;

    var scoreFloat = new ScoreFloat();
    parent.addChild(scoreFloat);

    scoreFloat.txt.text = '+' + score;
    scoreFloat.txt.color = color;
    scoreFloat.x = x;
    scoreFloat.y = y;

    if (!isNaN(fontSize)) {
        scoreFloat.txt.font = fontSize + 'px "Lato"';
    }

    createjs.Tween.get(scoreFloat)
        .to({
            y: scoreFloat.y - floatDistance,
            alpha: 0
        }, duration)
        .call(function () {
            parent.removeChild(scoreFloat);
        });
};

__score.updateBar = function () {
    _scoreBar.setScore(_score, _totalScore);
    _scoreBar.updateFill(_score / _totalScore, 60);
    _scoreBar.updatePlus(_scoreIncrement, 500);
};

__score.resetPlus = function () {
    _scoreIncrement = 0;
    _scoreBar.updatePlus(0, 0);
};

module.exports = __score;
