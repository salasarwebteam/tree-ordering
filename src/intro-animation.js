var manipulatives = require('./manipulatives');
var dropZones = require('./drop-zones');
var colors = require('./colors');

var _overlay = null;
var _manipulative = null;
var _manipulativeOrigin = null;
var _dropZone = null;

var __introAnimation = {
    start: function (lib) {
        var overlay = new createjs.Shape();
        overlay.graphics.beginFill('#ffffff').drawRect(0, 0, window.stageWidth, window.stageHeight);
        overlay.alpha = 0.01;
        overlay.on('click', function () { });
        stage.addChild(overlay);
        _overlay = overlay;

        var manipulativeArray = manipulatives.get();
        var dropZoneArray = dropZones.get();

        _manipulative = manipulativeArray.find(function (value) {
            return (value.data.placed === true);
        });
        _dropZone = dropZoneArray.find(function (value) {
            return (value.data.prefilled === true);
        });

        if (_manipulative && _dropZone) {
            var manData = _manipulative.data;

            _manipulativeOrigin = new lib.DefaultManipulative();
            _manipulativeOrigin.init();
            _manipulativeOrigin.setText(manData.text);
            _manipulativeOrigin.showSubtext();
            _manipulative.parent.addChild(_manipulativeOrigin);
            _manipulative.parent.addChild(_manipulative);// put it in front of the origin

            _manipulativeOrigin.txt.color = colors.QUESTION_MARK;
            _manipulativeOrigin.x = _manipulative.x;
            _manipulativeOrigin.y = _manipulative.y;

            _manipulative.txt.color = colors.BUTTON;

            _dropZone.txt.color = colors.QUESTION_MARK;
            _dropZone.txt.text = '?';

            runStep1();
        }
    }
};

function runStep1() {
    setTimeout(function () {
        createjs.Sound.play('WordPick');

        createjs.Tween.get(_manipulative)
            .to({ x: _manipulative.x + 8, y: _manipulative.y - 8, scale: 1.15 }, 200)
            .call(runStep2);
    }, 300);
}

function runStep2() {
    createjs.Tween.get(_manipulative)
        .wait(200)
        .to({ y: _dropZone.y - 2, x: _dropZone.x }, 1500)
        .call(runStep3);
}

function runStep3() {
    _manipulative.scale = 1;
    _manipulative.x = _manipulative.data.x;
    _manipulative.y = _manipulative.data.y;
    _manipulative.txt.color = colors.QUESTION_MARK;

    createjs.Sound.play('CorrectWordDrop');
    _manipulativeOrigin.parent.removeChild(_manipulativeOrigin);
    _dropZone.prefill();
    _overlay.parent.removeChild(_overlay);
}

module.exports = __introAnimation;
