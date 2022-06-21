var basePopup = require('./base-popup');
var button = require('./button');

module.exports = function (cls) {
    basePopup(cls);

    var p = cls.prototype;

    // override methods
    p.super_init = p.init;
    p.super_remove = p.remove;

    p.init = function () {
        this.super_init();

        button(this.closeButton);

        var titleBarBounds = this.titleBar.nominalBounds;

        this.titleTxt.textBaseline = 'middle';
        this.titleTxt.x = titleBarBounds.width / 2;
        this.titleTxt.y = titleBarBounds.height / 2;

        this.messageTxt.textBaseline = 'middle';
        this.messageTxt.y = (this.height - titleBarBounds.height) / 2 + titleBarBounds.height;
    };

    p.remove = function () {
        this.super_remove();

        this.closeButton.dispose();

        this.closeButton.removeAllEventListeners('click');
        this.parent.removeChild(this);
    };

    return cls;
};
