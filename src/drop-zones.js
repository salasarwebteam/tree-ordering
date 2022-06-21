var displayObject = require('./core/display-object');
var baseDropZone = require('./core/base-drop-zone');
var eventSource = require('./core/event-source');
var textAreas = require('./text-areas');
var colors = require('./colors');
var constants = require('./constants');

var __dropZones = {};

var DropZone = null;
var ModalDropZone = null;
var _parent = null;

var _dropZoneArray = [];
var _question = null;
var _answerProcessor = null;// Function that process answers

__dropZones.init = function (lib, parent) {
    DropZone = baseDropZone(lib.DropZone);
    ModalDropZone = displayObject(lib.ModalDropZone);
    _parent = new createjs.Container();

    parent.addChild(_parent);
    eventSource.on('noAnswer', onNoAnswer);
};

__dropZones.setAnswerProcessor = function (answerProcessor) {
    _answerProcessor = answerProcessor;
};

__dropZones.create = function (question) {
    _question = question;
    var dropZones = question.dropZones;

    for (var i = 0; i < dropZones.length; i++) {
        var data = dropZones[i];
        var dropZone = new DropZone();
        _parent.addChild(dropZone);

        dropZone.init();
        dropZone.data = data;

        if (!data.prefilled) {
            if (data.displayText) {
                dropZone.setDisplayText(data.displayText);
            }
            else {
                dropZone.setText('?');
            }

            dropZone.enableUserInteraction(onClick);
        }
        else if (data.prefilled) {
            dropZone.prefill();
        }

        if (data.subtext && data.prefilledSubtext) {
            dropZone.showSubtext();
            dropZone.setSubtext(data.subtext);
        }

        if (data.strikethrough) {
            dropZone.showSlash();
        }
        else {
            dropZone.hideSlash();
        }

        dropZone.x = data.x;
        dropZone.y = data.y;

        _dropZoneArray[i] = dropZone;
    }
};

__dropZones.createModal = function (question) {
    _question = question;
    var dropZones = question.dropZones;

    for (var i = 0; i < dropZones.length; i++) {
        var data = dropZones[i];
        var dropZone = new ModalDropZone();
        _parent.addChild(dropZone);

        dropZone.data = data;
        dropZone.x = data.x;
        dropZone.y = data.y;

        dropZone.txt.text = '?';

        _dropZoneArray[i] = dropZone;
    }
};

__dropZones.get = function () {
    return _dropZoneArray;
};

__dropZones.getHovered = function (manipulative) {
    var highestArea = -1;
    var hovered = null;

    for (var i = 0; i < _dropZoneArray.length; i++) {
        var dropZone = _dropZoneArray[i];

        if (dropZone.data.prefilled || dropZone.isCorrect) {
            continue;
        }

        var collision = checkCollision(manipulative, dropZone);

        if (collision && collision.area > highestArea) {
            highestArea = collision.area;
            hovered = dropZone;
        }
    }

    return hovered;
};

__dropZones.drop = function (dropZone, manipulative) {
    var oldManipulative = dropZone.manipulative;

    if (oldManipulative) {
        oldManipulative.reset();
        oldManipulative.moveToOrigin();
    }

    _answerProcessor(_question, dropZone, manipulative);
};

__dropZones.isAllCorrect = function () {
    for (var i = 0; i < _dropZoneArray.length; i++) {
        var dropZone = _dropZoneArray[i];
        var data = dropZone.data;

        if (data.prefilled || data.text === '') {
            continue;
        }

        if (!dropZone.isCorrect) {
            return false;
        }
    }

    return true;
};

__dropZones.isAllFilled = function () {
    for (var i = 0; i < _dropZoneArray.length; i++) {
        var dropZone = _dropZoneArray[i];

        if (dropZone.data.prefilled) {
            continue;
        }

        if (!dropZone.manipulative) {
            return false;
        }
    }

    return true;
};

__dropZones.getExplanation = function (dropZone) {
    if (dropZone.data.explanation) {
        return dropZone.data.explanation;
    }

    var explanations = dropZone.data.explanations;

    if (explanations) {
        // find the manipulative's text in the drop zone's explanations
        for (var i = 0; i < explanations.length; i++) {
            var explanationData = explanations[i];

            if (explanationData.text === dropZone.manipulative.data.text) {
                return explanationData.explanation;
            }
        }

        // can't find the manipulative's text
        if (!dropZone.data.text) { // drop zone can have different correct answers
            for (i = 0; i < explanations.length; i++) {
                explanationData = explanations[i];

                if (explanationData.text === dropZone.getText()) {
                    return explanationData.explanation;
                }
            }
        }
        else {
            // instead find explanation with text not equal to the drop zones's correct text
            for (i = 0; i < explanations.length; i++) {
                explanationData = explanations[i];

                if (explanationData.text !== dropZone.data.text) {
                    return explanationData.explanation;
                }
            }
        }
    }

    return '';
};

__dropZones.showCorrect = function () {
    for (var i = 0; i < _dropZoneArray.length; i++) {
        var dropZone = _dropZoneArray[i];

        if (dropZone.showCorrectAnswer) {
            dropZone.showCorrectAnswer();
        }
    }
};

__dropZones.disable = function () {
    for (var i = 0; i < _dropZoneArray.length; i++) {
        var dropZone = _dropZoneArray[i];

        if (dropZone.disableUserInteraction) {
            dropZone.disableUserInteraction();
        }
    }
};

__dropZones.remove = function () {
    _question = null;

    for (var i = 0; i < _dropZoneArray.length; i++) {
        var dropZone = _dropZoneArray[i];
        _parent.removeChild(dropZone);
    }

    _dropZoneArray.length = 0;
};

__dropZones.animateIn = function () {
    createjs.Tween.get(_parent)
        .to({ alpha: 1 }, constants.ANIMATION_IN_DURATION);
};

__dropZones.animateOut = function () {
    createjs.Tween.get(_parent)
        .to({ alpha: 0 }, constants.ANIMATION_OUT_DURATION);
};

function checkCollision(manipulative, dropZone) {
    var rect1 = {
        x: manipulative.x,
        y: manipulative.y,
        width: manipulative.width,
        height: manipulative.height
    };

    var rect2 = {
        x: dropZone.x,
        y: dropZone.y,
        width: dropZone.width,
        height: dropZone.height
    };

    // check if intersection/collision happened
    if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y) {
        var overlapX = Math.max(0, Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x));
        var overlapY = Math.max(0, Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y));
        var intersectArea = overlapX * overlapY;
        return {
            area: intersectArea
        };
    }

    return null;
}

function onClick(event) {
    event.nativeEvent.preventDefault();
    var dropZone = event.currentTarget;

    if (!dropZone.data.description || dropZone.data.description === '') {
        return;
    }

    textAreas.setLowerTextAreaValue(dropZone.data.description);
    textAreas.animateLowerTextArea(colors.SECONDARY);
}

function onNoAnswer() {
    _answerProcessor(_question);
}

module.exports = __dropZones;
