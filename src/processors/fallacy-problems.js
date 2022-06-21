var utils = require('../utils');
var score = require('../score');
var textAreas = require('../text-areas');
var dropZones = require('../drop-zones');
var manipulatives = require('../manipulatives');
var eventSource = require('../core/event-source');
var life = require('../life');
var colors = require('../colors');

// processAnswerFallacyProblems
module.exports = function (question, dropZone, manipulative) {
    if (!dropZone && !manipulative) {
        var con = question.conditionals.find(function (c) {
            return c.text === 'no_answer';
        });

        if (con) {
            if (con.isCorrect) {
                createjs.Sound.play('CorrectWordDrop');

                var scoreEarned = 1;
                score.add(scoreEarned);
                score.updateBar();

                eventSource.dispatchEvent('win');
            }
            else {
                createjs.Sound.play('IncorrectWordDrop');
                life.decrease(1);

                if (life.get() <= 0) {
                    eventSource.dispatchEvent('lose');
                }
            }
        }

        return;
    }

    var dropZoneArray = dropZones.get();
    var isCorrect = utils.isCorrectAnswer(dropZone, manipulative);
    var dzIndex = dropZoneArray.indexOf(dropZone);
    con = question.conditionals.find(function (c) {
        if (!c.dropZones) {
            return false;
        }

        return c.dropZones.indexOf(dzIndex) > -1;
    });

    dropZone.setManipulative(manipulative, isCorrect);
    textAreas.resetLowerTextArea();

    if (isCorrect) {
        createjs.Sound.play('CorrectWordDrop');

        manipulative.correct(dropZone, true);
        manipulative.disableUserInteraction();

        scoreEarned = 1;
        score.add(scoreEarned);
        score.addFloat(scoreEarned, dropZone.x + dropZone.width / 2, dropZone.y);
        score.updateBar();

        if (con && allFilled(con.dropZones)) {
            var userAns = getUserAnswer(con.dropZones);
            var correctAnswers = con.correctAnswers;
            var correctAns = correctAnswers.find(function (a) {
                return a.text === userAns;
            });

            if (correctAns) {
                textAreas.setLowerTextAreaValue(correctAns.explanation);
                textAreas.animateLowerTextArea(colors.SUCCESS);

                if (dropZones.isAllCorrect() || manipulatives.isAllCorrect()) {
                    eventSource.dispatchEvent('win');
                }
            }
            else {
                var wrongAnswers = con.wrongAnswers;
                var wrongAns = wrongAnswers.find(function (a) {
                    return !a.text;
                });

                if (wrongAns) {
                    textAreas.setLowerTextAreaValue(wrongAns.explanation);
                    textAreas.animateLowerTextArea(colors.DANGER);

                    enableManipulatives(con.dropZones);
                }
            }
        }
    }
    else {
        createjs.Sound.play('IncorrectWordDrop');

        manipulative.wrong(dropZone, true);

        life.decrease(1);
        life.addFloat(dropZone.x + dropZone.width / 2, dropZone.y);

        if (con) {
            userAns = getUserAnswer(con.dropZones);
            wrongAnswers = con.wrongAnswers;
            wrongAns = wrongAnswers.find(function (a) {
                return a.text === userAns;
            });

            if (!wrongAns) {
                wrongAns = wrongAnswers.find(function (a) {
                    return !a.text;
                });
            }

            if (wrongAns) {
                textAreas.setLowerTextAreaValue(wrongAns.explanation);
                textAreas.animateLowerTextArea(colors.DANGER);
            }
        }

        if (life.get() <= 0) {
            eventSource.dispatchEvent('lose');
        }
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

            if (!dz.manipulative) {
                continue;
            }

            if (ans.length > 0) {
                ans += '_';
            }

            ans += dz.manipulative.data.text;
        }

        return ans;
    }

    function enableManipulatives(aDropZones) {
        for (var i = 0; i < aDropZones.length; i++) {
            var dz = dropZoneArray[aDropZones[i]];
            var man = dz.manipulative;

            if (!man) {
                continue;
            }

            man.enableUserInteraction(man.onPick, man.onMove, man.onDrop);
        }
    }
};
