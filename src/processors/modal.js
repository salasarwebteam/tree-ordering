var utils = require('../utils');
var score = require('../score');
var textAreas = require('../text-areas');
var dropZones = require('../drop-zones');
var manipulatives = require('../manipulatives');
var eventSource = require('../core/event-source');
var life = require('../life');
var colors = require('../colors');

// processAnswerModal
module.exports = function (question, dropZone, manipulative) {
    var isCorrect = utils.isCorrectAnswer(dropZone, manipulative);
    dropZone.isCorrect = isCorrect;

    if (isCorrect) {
        createjs.Sound.play('CorrectWordDrop');

        manipulative.disableUserInteraction();

        manipulative.txt.color = colors.SUCCESS;

        var scoreEarned = 1;

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
        createjs.Sound.play('IncorrectWordDrop');

        manipulative.txt.color = colors.DANGER;

        life.decrease(1);
        life.addFloat(dropZone.x + dropZone.width / 2, dropZone.y);

        textAreas.setLowerTextAreaValue(dropZones.getExplanation(dropZone));
        textAreas.animateLowerTextArea(colors.DANGER);

        if (life.get() <= 0) {
            var dropZoneArray = dropZones.get();

            for (var i = 0; i < dropZoneArray.length; i++) {
                var _dz = dropZoneArray[i];

                createjs.Tween.removeTweens(_dz);

                _dz.visible = true;
                _dz.alpha = 1;

                var data = _dz.data;
                if (data.text !== '') {
                    _dz.txt.text = data.text;
                    _dz.txt.color = colors.DANGER;
                }
            }

            eventSource.dispatchEvent('lose');
        }
    }
};
