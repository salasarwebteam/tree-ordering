var constants = require('./constants');

var __diagrams = {};

var _lib = null;
var _parent = null;
var _diagram = null;

__diagrams.init = function (lib, parent) {
    _lib = lib;
    _parent = new createjs.Container();

    parent.addChild(_parent);
};

__diagrams.add = function (question) {
    var data = question.diagrams[0];
    _diagram = createDiagram(data.id, _lib);
    _diagram.x = data.x;
    _diagram.y = data.y;

    _parent.addChild(_diagram);
};

__diagrams.remove = function () {
    if (_diagram) {
        _diagram.parent.removeChild(_diagram);
        _diagram = null;
    }
};

__diagrams.animateIn = function () {
    return new Promise(function (resolve) {
        createjs.Tween.get(_parent)
            .to({ alpha: 1 }, constants.ANIMATION_IN_DURATION)
            .call(resolve);
    });
};

__diagrams.animateOut = function () {
    return new Promise(function (resolve) {
        createjs.Tween.get(_parent)
            .to({ alpha: 0 }, constants.ANIMATION_OUT_DURATION)
            .call(resolve);
    });
};

function createDiagram(id, lib) {
    return new lib[id]();
}

module.exports = __diagrams;
