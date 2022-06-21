var utils = require('../utils');
var score = require('../score');
var textAreas = require('../text-areas');
var dropZones = require('../drop-zones');
var manipulatives = require('../manipulatives');
var eventSource = require('../core/event-source');
var life = require('../life');
var colors = require('../colors');

// processAnswerContrapositive
module.exports = function (question, dropZone, manipulative) {
    var isCorrect = utils.isCorrectAnswer(dropZone, manipulative);

    dropZone.setManipulative(manipulative, isCorrect);

    if (isCorrect) {
        var scoreEarned = 1;

        manipulative.correct(dropZone, true);
        manipulative.disableUserInteraction();

        createjs.Sound.play('CorrectWordDrop');

        score.add(scoreEarned);
        score.addFloat(scoreEarned, dropZone.x + dropZone.width / 2, dropZone.y);
        score.updateBar();

        textAreas.setLowerTextAreaValue(dropZones.getExplanation(dropZone));
        textAreas.animateLowerTextArea(colors.SUCCESS);

        if (dropZones.isAllCorrect() || manipulatives.isAllCorrect()) {
            eventSource.dispatchEvent('win');
        }
    }
    else {
        manipulative.wrong(dropZone, true);

        createjs.Sound.play('IncorrectWordDrop');

        life.decrease(1);
        life.addFloat(dropZone.x + dropZone.width / 2, dropZone.y);

        textAreas.setLowerTextAreaValue(dropZones.getExplanation(dropZone));
        textAreas.animateLowerTextArea(colors.DANGER);

        if (life.get() <= 0) {
            eventSource.dispatchEvent('lose');
        }
    }
};
