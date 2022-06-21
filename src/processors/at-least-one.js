var utils = require('../utils');
var score = require('../score');
var textAreas = require('../text-areas');
var dropZones = require('../drop-zones');
var eventSource = require('../core/event-source');
var life = require('../life');
var colors = require('../colors');

// processAnswerAtLeastOne
module.exports = function (question, dropZone, manipulative) {
    var dropZoneArray = dropZones.get();
    var isCorrect = utils.isCorrectAnswer(dropZone, manipulative);

    dropZone.setManipulative(manipulative, isCorrect);

    if (isCorrect) {
        var scoreEarned = 1;

        createjs.Sound.play('CorrectWordDrop');

        manipulative.correct(dropZone, true);

        score.add(scoreEarned);
        score.addFloat(scoreEarned, dropZone.x + dropZone.width / 2, dropZone.y);
        score.updateBar();
    }
    else {
        createjs.Sound.play('IncorrectWordDrop');

        life.decrease(1);
        life.addFloat(dropZone.x + dropZone.width / 2, dropZone.y);

        manipulative.wrong(dropZone, true);

        if (life.get() <= 0) {
            eventSource.dispatchEvent('lose');
            return;
        }
    }

    var dzIndex = dropZoneArray.indexOf(dropZone);
    var dz1 = null;
    var dz2 = null;

    if (dzIndex === 0 || dzIndex === 1) {
        dz1 = dropZoneArray[0];
        dz2 = dropZoneArray[1];
    }
    else {
        dz1 = dropZoneArray[2];
        dz2 = dropZoneArray[3];
    }

    var logicText = '';
    var logic = null;

    if (dropZone.manipulative) {
        logicText += dropZone.manipulative.data.text + (dropZoneArray.indexOf(dropZone) + 1).toString();
    }

    logic = utils.findLogic(question, logicText);

    if (!logic) {
        logicText = '';

        if (dz1.manipulative) {
            logicText += dz1.manipulative.data.text + (dropZoneArray.indexOf(dz1) + 1).toString();
        }

        logic = utils.findLogic(question, logicText);
    }

    if (!logic) {
        if (dz2.manipulative) {
            if (logicText.length > 0) {
                logicText += '_';
            }

            logicText += dz2.manipulative.data.text + (dropZoneArray.indexOf(dz2) + 1).toString();
        }

        logic = utils.findLogic(question, logicText);
    }

    if (logic) {
        textAreas.setLowerTextAreaValue(logic.explanation);

        if (logic.correct) {
            textAreas.animateLowerTextArea(colors.SUCCESS);
        }
        else {
            textAreas.animateLowerTextArea(colors.DANGER);
        }
    }

    if (dropZones.isAllFilled()) {
        var firstLogicText = dropZoneArray[0].manipulative.data.text + '1_' + dropZoneArray[1].manipulative.data.text + '2';
        var secondLogicText = dropZoneArray[2].manipulative.data.text + '3_' + dropZoneArray[3].manipulative.data.text + '4';
        var firstLogic = utils.findLogic(question, firstLogicText);
        var secondLogic = utils.findLogic(question, secondLogicText);

        if (firstLogic && secondLogic) {
            if (firstLogic.correct && secondLogic.correct) {
                eventSource.dispatchEvent('win');
            }
        }
    }
};
