var utils = require('../utils');

module.exports = function (obj) {
    obj.init = function () {
        this.cursor = 'pointer';

        if (utils.isMobile()) {
            this.on('mousedown', this._onMouseOver);
            this.on('pressup', this._onMouseOut);
        }
        else {
            this.on('mouseover', this._onMouseOver);
            this.on('mouseout', this._onMouseOut);
        }

        // force to stop on frame 0
        this.on('tick', function (event) {
            event.remove();
            this.gotoAndStop(0);

            if (this.labelTxt) {
                var multiplier = 0.525;
                if (utils.isMobile()) {
                    if (utils.isIOS()) {
                        multiplier = 0.475;
                    }
                    else { // Android

                    }
                }

                this.labelTxt.textBaseline = 'middle';
                this.labelTxt.y = this.nominalBounds.height * multiplier;
            }
        }.bind(this));
    };

    obj.dispose = function () {
        this.removeAllEventListeners('tick');
        this.removeAllEventListeners('mouseover');
        this.removeAllEventListeners('mouseout');
        this.removeAllEventListeners('mousedown');
        this.removeAllEventListeners('pressup');
        this.removeAllEventListeners('click');
    };

    obj._onMouseOver = function (event) {
        event.nativeEvent.preventDefault();
        this.gotoAndStop(1);
    };

    obj._onMouseOut = function (event) {
        event.nativeEvent.preventDefault();
        this.gotoAndStop(0);
    };

    obj._onClick = function () {
        createjs.Sound.play('ButtonClick');
    };

    obj.init();

    return obj;
};
