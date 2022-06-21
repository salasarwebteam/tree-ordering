var utils = require('../utils');
var score = require('../score');
var textAreas = require('../text-areas');
var dropZones = require('../drop-zones');
var eventSource = require('../core/event-source');
var life = require('../life');
var colors = require('../colors');

// processAnswerConditionalConjunctions
module.exports = function (question, dropZone, manipulative) {
    var dropZoneArray = dropZones.get();
    var position = dropZoneArray.indexOf(dropZone) + 1;
    var text = manipulative.data.text;
    var wrongAnswer = utils.findWrongAnswer(question, text, position);
    var isCorrect = (wrongAnswer === null);

    dropZone.setManipulative(manipulative, isCorrect);

    if (isCorrect) {
        var scoreEarned = 1;

        createjs.Sound.play('CorrectWordDrop');

        manipulative.correct(dropZone, true);

        score.add(scoreEarned);
        score.addFloat(scoreEarned, dropZone.x + dropZone.width / 2, dropZone.y);
        score.updateBar();

        textAreas.resetLowerTextArea();
    }
    else {
        createjs.Sound.play('IncorrectWordDrop');

        manipulative.wrong(dropZone, true);

        life.decrease(1);
        life.addFloat(dropZone.x + dropZone.width / 2, dropZone.y);

        textAreas.setLowerTextAreaValue(wrongAnswer.explanation);
        textAreas.animateLowerTextArea(colors.DANGER);

        if (life.get() <= 0) {
            eventSource.dispatchEvent('lose');
            return;
        }
    }

    var isFirstSetCorrect = true;
    var isSecondSetCorrect = true;

    for (var i = 0; i < 5; i++) {
        var dz = dropZoneArray[i];

        if (!dz.manipulative || (dz.manipulative && !dz.isCorrect)) {
            isFirstSetCorrect = false;
            break;
        }
    }

    for (i = 5; i < 10; i++) {
        dz = dropZoneArray[i];

        if (!dz.manipulative || (dz.manipulative && !dz.isCorrect)) {
            isSecondSetCorrect = false;
            break;
        }
    }

    var correctAnswer = null;

    if (isFirstSetCorrect && position < 6) {
        correctAnswer = utils.findCorrectAnswer(question, position);
    }
    else if (isSecondSetCorrect && position >= 6) {
        correctAnswer = utils.findCorrectAnswer(question, position);
    }

    if (correctAnswer) {
        textAreas.setLowerTextAreaValue(correctAnswer.explanation);
        textAreas.animateLowerTextArea(colors.SUCCESS);
    }

    if (isFirstSetCorrect && isSecondSetCorrect) {
        eventSource.dispatchEvent('win');
    }
};
