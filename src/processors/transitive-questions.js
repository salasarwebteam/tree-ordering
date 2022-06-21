var score = require('../score');
var textAreas = require('../text-areas');
var dropZones = require('../drop-zones');
var eventSource = require('../core/event-source');
var life = require('../life');
var colors = require('../colors');

// processAnswerTransitiveQuestions
module.exports = function (question, dropZone, manipulative) {
    var dropZoneArray = dropZones.get();
    var position = dropZoneArray.indexOf(dropZone) + 1;
    var text = manipulative.data.text;
    var wrongAnswer = findWrongAnswer(question, text, position);
    var isCorrect = (wrongAnswer === null);

    dropZone.setManipulative(manipulative, isCorrect);
    textAreas.resetLowerTextArea();

    if (isCorrect) {
        var scoreEarned = 1;

        createjs.Sound.play('CorrectWordDrop');

        manipulative.correct(dropZone, true);

        score.add(scoreEarned);
        score.addFloat(scoreEarned, dropZone.x + dropZone.width / 2, dropZone.y);
        score.updateBar();

        var correctAnswer = findCorrectAnswer(question, position);

        if (!correctAnswer) {
            var isEven = (position % 2 === 0);
            var otherPosition = (isEven ? position - 1 : position + 1);
            var positions = [position, otherPosition];
            positions = positions.sort();

            correctAnswer = findCorrectAnswer2(question, dropZoneArray, positions);
        }

        if (!correctAnswer) {
            return;
        }

        textAreas.setLowerTextAreaValue(correctAnswer.explanation);
        textAreas.animateLowerTextArea(colors.SUCCESS);

        if (dropZones.isAllFilled() && isAllDropZonesCorrect(dropZoneArray)) {
            eventSource.dispatchEvent('win');
        }
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
        }
    }
};

function isAllDropZonesCorrect(dropZoneArray) {
    for (var i = 0; i < dropZoneArray.length; i++) {
        var dz = dropZoneArray[i];

        if (!dz.manipulative) {
            return false;
        }

        if (!dz.isCorrect) {
            return false;
        }
    }

    return true;
}

function findWrongAnswer(question, text, position) {
    var wrongAnswers = question.wrongAnswers;

    for (var i = 0; i < wrongAnswers.length; i++) {
        var wrongAnswer = wrongAnswers[i];

        if (wrongAnswer.positions.indexOf(position) > -1 && wrongAnswer.texts.indexOf(text) > -1) {
            return wrongAnswer;
        }
    }

    return null;
}

function findCorrectAnswer(question, position) {
    var correctAnswers = question.correctAnswers;

    for (var i = 0; i < correctAnswers.length; i++) {
        var correctAnswer = correctAnswers[i];

        if (!correctAnswer.positions) {
            continue;
        }

        if (correctAnswer.positions.indexOf(position) > -1) {
            return correctAnswer;
        }
    }

    return null;
}

function findCorrectAnswer2(question, dropZoneArray, positions) {
    var text = '';

    for (var i = 0; i < positions.length; i++) {
        var pos = positions[i];
        var dz = dropZoneArray[pos - 1];

        if (!dz.manipulative) {
            continue;
        }

        if (text.length > 0) {
            text += '_';
        }

        text += dz.manipulative.data.text;
    }

    var correctAnswers = question.correctAnswers;

    for (i = 0; i < correctAnswers.length; i++) {
        var correctAns = correctAnswers[i];

        if (correctAns.text && correctAns.text === text) {
            return correctAns;
        }
    }

    return null;
}
