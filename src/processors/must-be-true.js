var utils = require('../utils');
var score = require('../score');
var textAreas = require('../text-areas');
var dropZones = require('../drop-zones');
var manipulatives = require('../manipulatives');
var eventSource = require('../core/event-source');
var life = require('../life');
var colors = require('../colors');

// processAnswerMustBeTrue
module.exports = function (question, dropZone, manipulative) {
    var dropZoneArray = dropZones.get();
    var isCorrect = utils.isCorrectAnswer(dropZone, manipulative);

    dropZone.setManipulative(manipulative, isCorrect);
    textAreas.resetLowerTextArea();

    if (isCorrect) {
        var scoreEarned = 1;

        manipulative.correct(dropZone, true);
        manipulative.disableUserInteraction();

        createjs.Sound.play('CorrectWordDrop');

        score.add(scoreEarned);
        score.addFloat(scoreEarned, dropZone.x + dropZone.width / 2, dropZone.y);
        score.updateBar();
    }
    else {
        manipulative.wrong(dropZone, true);

        createjs.Sound.play('IncorrectWordDrop');

        life.decrease(1);
        life.addFloat(dropZone.x + dropZone.width / 2, dropZone.y);

        if (life.get() <= 0) {
            eventSource.dispatchEvent('lose');
            return;
        }
    }

    var dzIndex = dropZoneArray.indexOf(dropZone);
    var conditionals = question.conditionals;
    var con = conditionals.find(function (c) {
        return c.dropZones.indexOf(dzIndex) > -1;
    });

    if (con) {
        if (allFilled(con.dropZones)) {
            var userAns = getUserAnswer(con.dropZones);
            var ansCorrect = false;

            if (con.answer && userAns === con.answer) {
                ansCorrect = true;
            }
            else if (con.answers) {
                var answers = con.answers;
                for (var i = 0; i < answers.length; i++) {
                    var a = answers[i];

                    if (userAns === a) {
                        ansCorrect = true;
                        break;
                    }
                }
            }

            var msg = ansCorrect ? con.explanation : con.hint;
            var msgColor = ansCorrect ? colors.SUCCESS : colors.DANGER;

            textAreas.setLowerTextAreaValue(msg);
            textAreas.animateLowerTextArea(msgColor);
        }
    }

    if (dropZones.isAllCorrect() || manipulatives.isAllCorrect()) {
        eventSource.dispatchEvent('win');
    }

    function allFilled(aDropZones) {
        for (var i = 0; i < aDropZones.length; i++) {
            var dz = dropZoneArray[aDropZones[i]];

            if (!dz.manipulative) {
                return false;
            }
        }

        return true;
    }

    function getUserAnswer(aDropZones) {
        var ans = '';

        for (var i = 0; i < aDropZones.length; i++) {
            var dz = dropZoneArray[aDropZones[i]];

            if (ans.length > 0) {
                ans += '_';
            }

            ans += dz.manipulative.data.text;
        }

        return ans;
    }
};
