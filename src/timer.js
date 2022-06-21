var eventSource = require('./core/event-source');

var __timer = {};

var _time = 0;
var _tickListener = null;
var _isPause = false;

__timer.start = function (time) {
    _time = time;
    var counter = 0;

    _tickListener = createjs.Ticker.on('tick', function (event) {
        if (_isPause) {
            return;
        }

        counter += event.delta;

        if (counter >= 1000) {
            counter = 0;
            _time--;

            var newEvent = new createjs.Event('timer');
            newEvent.time = _time;

            eventSource.dispatchEvent(newEvent);
        }

        if (_time <= 0) {
            event.remove();
            eventSource.dispatchEvent('timerComplete');
        }
    });
};

__timer.stop = function () {
    _time = 0;
    _isPause = false;

    createjs.Ticker.off('tick', _tickListener);
};

__timer.pause = function () {
    _isPause = true;
};

__timer.resume = function () {
    _isPause = false;
};

__timer.getTime = function () {
    return _time;
};

module.exports = __timer;
