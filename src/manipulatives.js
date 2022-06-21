var defaultManipulative = require('./core/default-manipulative');
var modalManipulative = require('./core/modal-manipulative');
var dropZones = require('./drop-zones');
var processAnswerModal = require('./processors/modal');
var colors = require('./colors');
var constants = require('./constants');

var __manipulatives = {};

var DefaultManipulative = null;
var ModalManipulative = null;
var _parent = null;

var _manipulativeArray = [];
var _manipulativeOriginArray = [];
var _question = null;

__manipulatives.init = function (lib, parent) {
    DefaultManipulative = defaultManipulative(lib.DefaultManipulative);
    ModalManipulative = modalManipulative(lib.ModalManipulative);
    _parent = new createjs.Container();

    parent.addChild(_parent);
};

__manipulatives.create = function (question) {
    _question = question;
    var manipulatives = _question.manipulatives;

    for (var i = 0; i < manipulatives.length; i++) {
        var data = manipulatives[i];
        var manipulative = new DefaultManipulative();
        _parent.addChild(manipulative);

        manipulative.init();

        manipulative.data = data;
        manipulative.x = data.x;
        manipulative.y = data.y;
        manipulative.originX = manipulative.x;
        manipulative.originY = manipulative.y;

        manipulative.setText(data.text);
        manipulative.showSubtext();

        _manipulativeArray[i] = manipulative;

        // this manipulative is already placed in the diagram
        if (data.placed) {
            // look for manipulative that has the same value
            // if found, must create an origin text and remove this manipulative
            // if not, gray it out and do not create an origin text
            var hasTheSameValue = false;

            for (var j = 0; j < manipulatives.length; j++) {
                var d = manipulatives[j];
                if (d === data) {
                    continue;
                }

                if (d.text === data.text) {
                    hasTheSameValue = true;
                }
            }

            if (!hasTheSameValue) {
                manipulative.txt.color = colors.QUESTION_MARK;
                continue;
            }
            else {
                _parent.removeChild(manipulative);
            }
        }
        else {
            manipulative.enableUserInteraction(onPick, onMove, onDrop);
        }

        var manipulativeOrigin = findManipulativeOrigin(data.text, data.x, data.y);

        if (!manipulativeOrigin) {
            manipulativeOrigin = new DefaultManipulative();
            _parent.addChild(manipulativeOrigin);

            manipulativeOrigin.init();

            manipulativeOrigin.data = data;
            manipulativeOrigin.x = manipulative.x;
            manipulativeOrigin.y = manipulative.y;
            manipulativeOrigin.visible = false;
            manipulativeOrigin.txt.color = colors.QUESTION_MARK;

            manipulativeOrigin.setText(data.text);
            manipulativeOrigin.showSubtext();

            _manipulativeOriginArray.push(manipulativeOrigin);
        }

        manipulative.origin = manipulativeOrigin;
    }

    // bring the manipulatives to the front
    for (i = 0; i < manipulatives.length; i++) {
        manipulative = _manipulativeArray[i];
        _parent.addChild(manipulative);
    }

    function onPick(manipulative) {
        manipulative.reset();
        manipulative.scaleUp();
    }

    function onMove(manipulative) {
        var dropZoneArray = dropZones.get();
        var hovered = dropZones.getHovered(manipulative);
        manipulative.hover(hovered);

        // fade in all drop zones
        for (i = 0; i < dropZoneArray.length; i++) {
            var dropZone = dropZoneArray[i];

            if (dropZone.data.prefilled || dropZone === manipulative.dropZone || dropZone.manipulative) {
                continue;
            }

            dropZone.fadeIn();
        }
    }

    function onDrop(manipulative) {
        manipulative.scaleToNormal();

        var dropZoneArray = dropZones.get();
        var dropZone = manipulative.dropZone;

        if (dropZone) {
            dropZones.drop(dropZone, manipulative);
        }
        else {
            manipulative.moveToOrigin();
        }

        // fade in all drop zones
        for (i = 0; i < dropZoneArray.length; i++) {
            dropZone = dropZoneArray[i];

            if (dropZone.data.prefilled || dropZone === manipulative.dropZone || dropZone.manipulative) {
                continue;
            }

            dropZone.fadeIn();
        }
    }
};

__manipulatives.createModal = function (question) {
    _question = question;
    var manipulatives = _question.manipulatives;

    for (var i = 0; i < manipulatives.length; i++) {
        var data = manipulatives[i];
        var manipulative = new ModalManipulative();
        _parent.addChild(manipulative);

        manipulative.setData(data);
        manipulative.resize();
        manipulative.enableUserInteraction(onPick, onMove, onDrop);

        _manipulativeArray[i] = manipulative;
    }

    function onPick(man) {
        var dropZoneArray = dropZones.get();

        for (i = 0; i < dropZoneArray.length; i++) {
            var _dz = dropZoneArray[i];
            _dz.visible = true;

            if (_dz.alpha > 0) {
                continue;
            }

            createjs.Tween.get(_dz)
                .to({
                    alpha: 1
                }, 500);
        }

        man.scale = 1.15;
        man.txt.color = colors.SECONDARY;
    }

    function onMove(man) {
        var dz = dropZones.getHovered(man);
        var oldDz = null;

        if (dz && man.dropZone !== dz) {
            if (man.dropZone) {
                oldDz = man.dropZone;
                oldDz.visible = true;

                createjs.Tween.get(oldDz)
                    .to({
                        alpha: 1
                    }, 500);
            }

            man.dropZone = dz;

            createjs.Tween.get(dz)
                .to({
                    alpha: 0
                }, 500);
        }
        else if (!dz) {
            if (man.dropZone) {
                oldDz = man.dropZone;
                oldDz.visible = true;

                createjs.Tween.get(oldDz)
                    .to({
                        alpha: 1
                    }, 500);
            }

            man.dropZone = null;
        }
    }

    function onDrop(man) {
        var dz = man.dropZone;

        if (dz) {
            var oldMan = dz.manipulative;
            if (oldMan) {
                oldMan.dropZone = null;
                oldMan.x = man.originX;
                oldMan.y = man.originY;
                oldMan.txt.color = colors.SECONDARY;
                oldMan.scale = 1;
            }

            dz.manipulative = man;
            dz.visible = false;

            man.x = dz.x;
            man.y = dz.y;

            processAnswerModal(_question, dz, man);
        }
        else {
            man.x = man.originX;
            man.y = man.originY;
        }

        man.scale = 1;

        var dropZoneArray = dropZones.get();

        for (i = 0; i < dropZoneArray.length; i++) {
            var _dz = dropZoneArray[i];

            if (dz === _dz) {
                continue;
            }

            _dz.manipulative = null;
            _dz.visible = true;
            _dz.alpha = 1;
        }
    }
};

__manipulatives.get = function () {
    return _manipulativeArray;
};

__manipulatives.animateIn = function () {
    createjs.Tween.get(_parent)
        .to({ alpha: 1 }, constants.ANIMATION_IN_DURATION);
};

__manipulatives.animateOut = function () {
    createjs.Tween.get(_parent)
        .to({ alpha: 0 }, constants.ANIMATION_OUT_DURATION);
};

__manipulatives.isAllCorrect = function () {
    for (var i = 0; i < _manipulativeArray.length; i++) {
        var manipulative = _manipulativeArray[i];

        if (manipulative.data.placed) {
            continue;
        }

        if (!manipulative.dropZone) {
            return false;
        }

        if (manipulative.dropZone && !manipulative.dropZone.isCorrect) {
            return false;
        }
    }

    return true;
};

__manipulatives.getCorrect = function (dropZone) {
    for (var i = 0; i < _manipulativeArray.length; i++) {
        var manipulative = _manipulativeArray[i];

        if (dropZone.isCorrectManipulative(manipulative) && !manipulative.isCorrected && !manipulative.data.placed) {
            return manipulative;
        }
    }

    return null;
};

__manipulatives.disable = function () {
    for (var i = 0; i < _manipulativeArray.length; i++) {
        var manipulative = _manipulativeArray[i];

        if (manipulative.disableUserInteraction) {
            manipulative.disableUserInteraction();
        }
    }
};

__manipulatives.reset = function () {
    for (var i = 0; i < _manipulativeArray.length; i++) {
        var manipulative = _manipulativeArray[i];

        createjs.Tween.removeTweens(manipulative);

        if (manipulative.data.placed) {
            continue;
        }

        if (manipulative.origin) {
            manipulative.origin.visible = true;
        }

        manipulative.visible = false;
    }
};

__manipulatives.remove = function () {
    for (var i = 0; i < _manipulativeArray.length; i++) {
        var manipulative = _manipulativeArray[i];
        manipulative.cleanUp();
        _parent.removeChild(manipulative);
    }

    for (i = 0; i < _manipulativeOriginArray.length; i++) {
        var manipulativeOrigin = _manipulativeOriginArray[i];
        _parent.removeChild(manipulativeOrigin);
    }

    _manipulativeArray.length = 0;
    _manipulativeOriginArray.length = 0;
};

function findManipulativeOrigin(text, x, y) {
    for (var i = 0; i < _manipulativeOriginArray.length; i++) {
        var origin = _manipulativeOriginArray[i];
        if (origin.getText() === text && origin.x === x && origin.y === y) {
            return origin;
        }
    }

    return null;
};

module.exports = __manipulatives;
