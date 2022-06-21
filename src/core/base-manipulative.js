var displayObject = require('./display-object');

module.exports = function (cls) {
    displayObject(cls);

    var p = cls.prototype;

    p.setData = function (data) {
        this.data = data;
        this.x = data.x;
        this.y = data.y;
        this.originX = this.x;
        this.originY = this.y;

        if (this.txt) {
            this.txt.text = data.text;
        }
    };

    p.enableUserInteraction = function (onPick, onMove, onDrop) {
        this.cursor = 'pointer';

        this.onPick = onPick;
        this.onMove = onMove;
        this.onDrop = onDrop;

        this.on('mousedown', onMouseDown); // no need to bind this
        this.on('pressmove', onMouseMove);
        this.on('pressup', onMouseUp);
    };

    p.disableUserInteraction = function () {
        this.cursor = null;

        this.removeAllEventListeners('mousedown');
        this.removeAllEventListeners('pressmove');
        this.removeAllEventListeners('pressup');
    };

    p.cleanUp = function () {
        this.onPick = null;
        this.onMove = null;
        this.onDrop = null;
    };

    return cls;
};

function onMouseDown(event) {
    // don't let the event bubble, this will prevent the page from scrolling
    event.nativeEvent.preventDefault();
    createjs.Sound.play('WordPick');

    var manipulative = event.currentTarget;
    manipulative.prevStagePos = {
        x: event.stageX,
        y: event.stageY
    };
    manipulative.drag = true;

    manipulative.parent.addChild(manipulative);

    if (this.onPick) {
        this.onPick(manipulative);
    }
}

function onMouseMove(event) {
    event.nativeEvent.preventDefault();

    var manipulative = event.currentTarget;

    if (manipulative.drag) {
        var deltaX = event.stageX - manipulative.prevStagePos.x;
        var deltaY = event.stageY - manipulative.prevStagePos.y;
        manipulative.prevStagePos.x = event.stageX;
        manipulative.prevStagePos.y = event.stageY;
        manipulative.x += deltaX / stage.scaleX;
        manipulative.y += deltaY / stage.scaleY;

        if (this.onMove) {
            this.onMove(manipulative);
        }
    }
}

function onMouseUp(event) {
    event.nativeEvent.preventDefault();

    var manipulative = event.currentTarget;
    manipulative.drag = false;

    if (this.onDrop) {
        this.onDrop(manipulative);
    }
}
