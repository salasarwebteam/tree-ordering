var displayObject = require('./display-object');

module.exports = function (cls) {
    displayObject(cls);

    var p = cls.prototype;

    p.init = function () {
        if (this.titleBar) {
            this.titleBar.cursor = 'pointer';

            this.titleBar.on('mousedown', this._onMouseDown.bind(this));
            this.titleBar.on('pressmove', this._onMouseMove.bind(this));
            this.titleBar.on('pressup', this._onMouseUp.bind(this));
        }

        // just do nothing to prevent clicks on elements behind this popup
        this.bg.on('click', function (event) {
            event.stopImmediatePropagation();
            event.stopPropagation();
        });
    };

    p.remove = function () {
        this.titleBar.removeAllEventListeners('mousedown');
        this.titleBar.removeAllEventListeners('pressmove');
        this.titleBar.removeAllEventListeners('pressup');
        this.bg.removeAllEventListeners('click');
    };

    p._onMouseDown = function (event) {
        event.nativeEvent.preventDefault();

        this._isDrag = true;
        this._prevStagePos = {
            x: event.stageX,
            y: event.stageY
        };
    };

    p._onMouseMove = function (event) {
        event.nativeEvent.preventDefault();

        if (this._isDrag) {
            var deltaX = event.stageX - this._prevStagePos.x;
            var deltaY = event.stageY - this._prevStagePos.y;
            this._prevStagePos.x = event.stageX;
            this._prevStagePos.y = event.stageY;
            this.x += deltaX / this.stage.scaleX;
            this.y += deltaY / this.stage.scaleY;

            if (this.x <= 0) {
                this.x = 0;
            }
            else if (this.x >= window.stageWidth - this.width) {
                this.x = window.stageWidth - this.width;
            }

            if (this.y <= 0) {
                this.y = 0;
            }
            else if (this.y >= window.stageHeight - this.height) {
                this.y = window.stageHeight - this.height;
            }
        }
    };

    p._onMouseUp = function (event) {
        event.nativeEvent.preventDefault();

        this._isDrag = false;
    };

    return cls;
};
