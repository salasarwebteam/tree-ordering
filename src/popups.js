var displayObject = require('./core/display-object');
var eventSource = require('./core/event-source');
var winPopup = require('./core/win-popup');
var lostPopup = require('./core/lost-popup');
var helpAndOptionsPopup = require('./core/help-and-options-popup');
var lessonCompletePopup = require('./core/lesson-complete-popup');

var __popups = {};

var QuestionWinPopup = null;
var QuestionLostPopup = null;
var HelpAndOptionsPopup = null;
var LessonCompletePopup = null;
var PopupModalBg = null;
var _lib = null;
var _parent = null;

var _popup = null;
var _modalBg = null;

__popups.init = function (lib, parent) {
    _lib = lib;
    _parent = parent;
    QuestionWinPopup = winPopup(lib.QuestionWinPopup);
    QuestionLostPopup = lostPopup(lib.QuestionLostPopup);
    HelpAndOptionsPopup = helpAndOptionsPopup(lib.HelpAndOptionsPopup);
    LessonCompletePopup = lessonCompletePopup(lib.LessonCompletePopup);
    PopupModalBg = displayObject(lib.PopupModalBg);
};

__popups.createWin = function () {
    if (_popup) {
        return;
    }

    this._addModalBg();

    var popup = new QuestionWinPopup();
    _parent.addChild(popup);

    popup.init();

    popup.x = (_lib.properties.width - popup.width) * 0.5;
    // popup.y = 1020;
    popup.y = 200;

    popup.closeButton.on('click', function (event) {
        __popups.remove();
    });

    popup.rightArrow.on('click', function (event) {
        __popups.remove();
        eventSource.dispatchEvent('nextQuestion');
    });

    _popup = popup;
};

__popups.createLost = function () {
    if (_popup) {
        return;
    }

    this._addModalBg();

    var popup = new QuestionLostPopup();
    _parent.addChild(popup);

    popup.init();

    popup.x = (_lib.properties.width - popup.width) * 0.5;
    // popup.y = 1020;
    popup.y = 200;

    popup.closeButton.on('click', function (event) {
        __popups.remove();
    });

    popup.tryAgainButton.on('click', function (event) {
        __popups.remove();
        eventSource.dispatchEvent('tryAgainQuestion');
    });

    popup.rightArrow.on('click', function (event) {
        __popups.remove();
        eventSource.dispatchEvent('nextQuestion');
    });

    _popup = popup;
};

__popups.createHelpAndOptions = function () {
    if (_popup) {
        return;
    }

    this._addModalBg();

    var popup = new HelpAndOptionsPopup();
    _parent.addChild(popup);

    popup.init();

    popup.x = (_lib.properties.width - popup.width) * 0.5;
    popup.y = (_lib.properties.height - popup.height) * 0.5;

    popup.setTitle('Instructions');

    popup.closeButton.on('click', function (event) {
        __popups.remove();
    });

    popup.instructionsPage.nextButton.on('click', function () {
        popup.setTitle('Scoring for Questions');

        popup.instructionsPage.visible = false;
        popup.scoringPage.visible = true;
    });

    popup.scoringPage.closeButton.on('click', function () {
        __popups.remove();
    });

    _popup = popup;
};

__popups.createLessonComplete = function () {
    if (_popup) {
        return;
    }

    this._addModalBg();

    var popup = new LessonCompletePopup();
    _parent.addChild(popup);

    popup.init();

    popup.x = (_lib.properties.width - popup.width) * 0.5;
    // popup.y = (_lib.properties.height - popup.height) * 0.5;
    popup.y = 200;

    popup.closeButton.on('click', function (event) {
        __popups.remove();
    });

    _popup = popup;
};

__popups.get = function () {
    return _popup;
};

__popups.remove = function () {
    if (_popup) {
        _popup.remove();
        _popup = null;
    }

    if (_modalBg) {
        _modalBg.removeAllEventListeners('click');
        _parent.removeChild(_modalBg);
        _modalBg = null;
    }
};

__popups._addModalBg = function () {
    _modalBg = new PopupModalBg();
    _parent.addChild(_modalBg);
    _modalBg.width = _lib.properties.width;
    _modalBg.height = _lib.properties.height;
    _modalBg.x = 0;
    _modalBg.y = 0;
    _modalBg.alpha = 0.01;

    _modalBg.on('click', function (event) {
        event.nativeEvent.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.remove();
        __popups.remove();
    });
};

module.exports = __popups;
