var eventSource = require('./core/event-source');
var button = require('./core/button');

var __buttons = {};

var _refreshButton = null;
var _helpButton = null;
var _pauseButton = null;
var _noAnswerButton = null;
var _prevButton = null;
var _nextButton = null;

__buttons.init = function (parent) {
    button(parent.refreshButton);
    _refreshButton = parent.refreshButton;
    _refreshButton.on('click', onRefresh);

    button(parent.helpButton);
    _helpButton = parent.helpButton;
    _helpButton.on('click', onHelp);

    button(parent.pauseButton);
    _pauseButton = parent.pauseButton;
    _pauseButton.on('click', onPause);

    button(parent.noAnswerButton);
    _noAnswerButton = parent.noAnswerButton;
    _noAnswerButton.visible = false;
    _noAnswerButton.on('click', onNoAnswer);

    _prevButton = button(parent.prevButton);
    _prevButton.on('click', onPrev);

    _nextButton = button(parent.nextButton);
    _nextButton.on('click', onNext);
};

__buttons.showPause = function () {
    _pauseButton.visible = true;
};

__buttons.hidePause = function () {
    _pauseButton.visible = false;
};

__buttons.showNoAnswer = function () {
    _noAnswerButton.visible = true;
};

__buttons.hideNoAnswer = function () {
    _noAnswerButton.visible = false;
};

__buttons.updateQuestionNavigation = function (pQuestionIndex, numQuestions) {
    if (pQuestionIndex === 0) {
        _prevButton.visible = false;
        _nextButton.visible = true;
    }
    else if (pQuestionIndex === numQuestions - 1) {
        _prevButton.visible = true;
        _nextButton.visible = false;
    }
    else {
        _prevButton.visible = true;
        _nextButton.visible = true;
    }
};

function onRefresh(event) {
    event.nativeEvent.preventDefault();
    eventSource.dispatchEvent('refreshQuestion');
}

function onHelp(event) {
    event.nativeEvent.preventDefault();
    eventSource.dispatchEvent('help');
}

function onPause(event) {
    event.nativeEvent.preventDefault();

    eventSource.dispatchEvent('pauseGame');
}

function onNoAnswer() {
    eventSource.dispatchEvent('noAnswer');
}

function onPrev(event) {
    event.nativeEvent.preventDefault();
    eventSource.dispatchEvent('prevQuestion');
}

function onNext(event) {
    event.nativeEvent.preventDefault();
    eventSource.dispatchEvent('nextQuestion');
}

module.exports = __buttons;
