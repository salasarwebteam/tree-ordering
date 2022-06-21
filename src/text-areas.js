// var Text = require('./core/text');
// var eventSource = require('./core/event-source');
var colors = require('./colors');
var constants = require('./constants');
// var utils = require('./utils');

var __textAreas = {};
var padding = 5;

var _parent = null;

var _lowerTextArea = null;
var _lowerTextAreaTop = 1076;
var _lowerTextAreaBottom = 1306;
var _isLowerTextAreaVisible = false;
var _lowerTextAreaFlashTimeout = null;
var _upperTextArea = null;
var _timerTxt = null;
var _logicInstructionsText = null;
var _logicInstructionsText2 = null;
var _logicInstructionsText2Y = 0;
var _mainIdeaTxt = null;

__textAreas.init = function (_lib, parent) {
    _parent = parent;

    _lowerTextArea = _parent.lowerTextArea;
    _timerTxt = _parent.timerTxt;
    _logicInstructionsText = _parent.logicInstructionsTxt;
    _logicInstructionsText2 = _parent.logicInstructionsTxt2;
    _logicInstructionsText2Y = _logicInstructionsText2.y;

    /* var fontSize = (utils.isIOS() && utils.isPhone()) ? 19 : 25;
    // _upperTextArea = new Text('', 'Lato', 25, colors.SECONDARY, 'normal', 'left', 830);
    _upperTextArea = new Text('', 'Lato', fontSize, colors.SECONDARY, 'normal', 'left', 830);
    _parent.addChild(_upperTextArea);
    _upperTextArea.x = 0;
    _upperTextArea.y = 3;// good on Desktop, chrome
    // _upperTextArea.y = 8;// good on iOS

    fontSize = (utils.isIOS() && utils.isPhone()) ? 27 : 36;
    _mainIdeaTxt = new Text('', 'Lato', fontSize, colors.SECONDARY, 'bold', 'left', 830);
    _parent.addChild(_mainIdeaTxt);
    _mainIdeaTxt.x = 0;
    _mainIdeaTxt.y = 0; */

    _upperTextArea = _parent.upperTextArea;
    _mainIdeaTxt = _parent.mainIdeaTxt;
};

__textAreas.unInit = function (parent) {
    parent.removeChild(parent.lowerTextArea);
    parent.removeChild(parent.upperTextArea);
    parent.removeChild(parent.questionNumberTxt);
    parent.removeChild(parent.timerTxt);
};

__textAreas.setUpperTextAreaValue = function (txt) {
    _upperTextArea.text = txt;
    /* _upperTextArea.on('load', function (event) {
        event.remove();
        eventSource.dispatchEvent('textLoad');
    }); */
};

__textAreas.getUpperTextAreaValue = function () {
    return _upperTextArea.text;
};

__textAreas.animateInUpperTextArea = function () {
    return new Promise(function (resolve) {
        createjs.Tween.get(_upperTextArea)
            .to({ alpha: 1 }, constants.ANIMATION_IN_DURATION)
            .call(resolve);
    });
};

__textAreas.animateOutUpperTextArea = function () {
    return new Promise(function (resolve) {
        createjs.Tween.get(_upperTextArea)
            .to({ alpha: 0 }, constants.ANIMATION_OUT_DURATION)
            .call(resolve);
    });
};

__textAreas.resetUpperTextArea = function () {
    createjs.Tween.removeTweens(_upperTextArea);

    _upperTextArea.text = '';
    _upperTextArea.alpha = 0;
};

__textAreas.setLowerTextAreaValue = function (txt) {
    _lowerTextArea.text = txt;
};

__textAreas.flashLowerTextArea = function (color) {
    var origColor = _lowerTextArea.color;
    var duration = 650;
    _lowerTextArea.color = color;

    _lowerTextAreaFlashTimeout = setTimeout(function () {
        _lowerTextAreaFlashTimeout = null;
        _lowerTextArea.color = origColor;
    }, duration);
};

__textAreas.animateLowerTextArea = function (color) {
    if (_lowerTextArea.text === '') {
        this.resetLowerTextArea();
        return;
    }

    var duration = 300;

    if (_isLowerTextAreaVisible) {
        createjs.Tween.get(_lowerTextArea)
            .to({
                y: _lowerTextAreaBottom + padding
            }, duration * 0.5)
            .call(function () {
                _isLowerTextAreaVisible = false;
                __textAreas.animateLowerTextArea(color);
            });
    }
    else {
        var measuredHeight = _lowerTextArea.getMeasuredHeight();
        var posY = _lowerTextAreaBottom - measuredHeight;

        _lowerTextArea.y = _lowerTextAreaTop - measuredHeight - padding;

        createjs.Tween.get(_lowerTextArea)
            .to({
                y: posY
            }, duration)
            .call(function () {
                _isLowerTextAreaVisible = true;
                __textAreas.flashLowerTextArea(color);
            });
    }
};

__textAreas.resetLowerTextArea = function () {
    clearTimeout(_lowerTextAreaFlashTimeout);
    createjs.Tween.removeTweens(_lowerTextArea);

    _lowerTextArea.color = colors.SECONDARY;
    _lowerTextArea.text = '';
    _lowerTextArea.y = _lowerTextAreaTop - _lowerTextArea.getMeasuredHeight() - padding;
    _isLowerTextAreaVisible = false;
};

__textAreas.setTimerValue = function (seconds) {
    var mm = Math.floor(seconds / 60);
    var ss = seconds - mm * 60;

    if (mm < 10) {
        mm = '0' + mm;
    }

    if (ss < 10) {
        ss = '0' + ss;
    }

    _timerTxt.text = mm + ':' + ss;
};

__textAreas.resetTimerText = function () {
    _timerTxt.text = '';
};

__textAreas.showTimer = function () {
    _timerTxt.visible = true;
};

__textAreas.hideTimer = function () {
    _timerTxt.visible = false;
};

__textAreas.setLogicInstructionsTextValue = function (value) {
    _logicInstructionsText.text = value;
};

__textAreas.setLogicInstructionsText2Value = function (value) {
    _logicInstructionsText2.text = value;
};

__textAreas.setLogicInstructionsText2Y = function (y) {
    y = y || _logicInstructionsText2Y;

    _logicInstructionsText2.y = y;
};

__textAreas.resetLogicTexts = function () {
    _logicInstructionsText.text = '';
    _logicInstructionsText2.text = '';
    _logicInstructionsText2.y = _logicInstructionsText2Y;
};

__textAreas.setMainIdeaTxtValue = function (value) {
    _mainIdeaTxt.text = value;
    /* _mainIdeaTxt.on('load', function (event) {
        event.remove();
        eventSource.dispatchEvent('textLoad');
    }); */
};

__textAreas.resetMainIdeaText = function () {
    _mainIdeaTxt.text = '';
};

module.exports = __textAreas;
