var utils = require('../utils');
var score = require('../score');
var textAreas = require('../text-areas');
var dropZones = require('../drop-zones');
var eventSource = require('../core/event-source');
var life = require('../life');
var colors = require('../colors');

// processAnswerIfAndOnlyIf
module.exports = function (question, dropZone, manipulative) {
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

    if (dropZones.isAllFilled()) {
        var dropZoneArray = dropZones.get();
        var logicText = '';

        for (var i = 0; i < dropZoneArray.length; i++) {
            var dz = dropZoneArray[i];

            if (logicText.length > 0) {
                logicText += '_';
            }

            logicText += dz.manipulative.data.text + (i + 1).toString();
        }

        var logic = utils.findLogic(question, logicText);

        if (logic) {
            if (logic.correct) {
                textAreas.setLowerTextAreaValue(logic.explanation);
                textAreas.animateLowerTextArea(colors.SUCCESS);

                eventSource.dispatchEvent('win');
            }
        }
        else {
            // get the wrong explanation
            logic = utils.findLogic(question, '');

            life.decrease(1);
            life.addFloat(dropZone.x + dropZone.width / 2, dropZone.y);

            textAreas.setLowerTextAreaValue(logic.explanation);
            textAreas.animateLowerTextArea(colors.DANGER);

            if (life.get() <= 0) {
                eventSource.dispatchEvent('lose');
            }
        }
    }
};
