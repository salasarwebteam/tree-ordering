var utils = require('../utils');
var score = require('../score');
var textAreas = require('../text-areas');
var dropZones = require('../drop-zones');
var eventSource = require('../core/event-source');
var life = require('../life');
var colors = require('../colors');

// processAnswerReductionChains
module.exports = function (question, dropZone, manipulative) {
    var dropZoneArray = dropZones.get();
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

        var correctAns = getCorrectAnswer();
        if (correctAns) {
            textAreas.setLowerTextAreaValue(correctAns.explanation);
            textAreas.animateLowerTextArea(colors.SUCCESS);

            eventSource.dispatchEvent('win');
        }
        else {
            if (dropZones.isAllFilled()) {
                var explanation = getExplanation();
                if (explanation) {
                    textAreas.setLowerTextAreaValue(explanation);
                    textAreas.animateLowerTextArea(colors.DANGER);
                }
            }
        }
    }
    else {
        manipulative.wrong(dropZone, true);

        createjs.Sound.play('IncorrectWordDrop');

        life.decrease(1);
        life.addFloat(dropZone.x + dropZone.width / 2, dropZone.y);

        explanation = getExplanation();
        if (explanation) {
            textAreas.setLowerTextAreaValue(explanation);
            textAreas.animateLowerTextArea(colors.DANGER);
        }

        if (life.get() <= 0) {
            eventSource.dispatchEvent('lose');
        }
    }

    function getExplanation() {
        var text = '';

        for (var i = 0; i < dropZoneArray.length; i++) {
            var dz = dropZoneArray[i];

            if (dz.data.prefilled || !dz.manipulative) {
                continue;
            }

            if (text.length > 0) {
                text += '_';
            }

            text += dz.manipulative.data.text;
        }

        var wrongAnswers = question.wrongAnswers;

        for (i = 0; i < wrongAnswers.length; i++) {
            var ans = wrongAnswers[i];
            if (ans.text === text) {
                return ans.explanation;
            }
        }

        var wrongAns = wrongAnswers.find(function (ans) {
            return ans.text === '';
        });

        if (wrongAns) {
            return wrongAns.explanation;
        }

        return null;
    }

    function getCorrectAnswer() {
        if (!dropZones.isAllFilled()) {
            return null;
        }

        var text = '';

        for (var i = 0; i < dropZoneArray.length; i++) {
            var dz = dropZoneArray[i];

            if (dz.data.prefilled || !dz.manipulative) {
                continue;
            }

            if (text.length > 0) {
                text += '_';
            }

            text += dz.manipulative.data.text;
        }

        var correctAnswers = question.correctAnswers;

        for (i = 0; i < correctAnswers.length; i++) {
            var ans = correctAnswers[i];
            if (ans.text === text) {
                return ans;
            }
        }

        return null;
    }
};
