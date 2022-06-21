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

        button(this.instructionsPage.nextButton);
        button(this.scoringPage.closeButton);

        // this.optionsPage.visible = true;
        this.instructionsPage.visible = true;
        this.scoringPage.visible = false;

        this.titleTxt.textBaseline = 'middle';

        this.instructionsPage.ui.scoreBar.init();
        this.instructionsPage.ui.scoreBar.setChapter('Lesson 1 of 4');
        this.instructionsPage.ui.scoreBar.setScore(44, 160);
        this.instructionsPage.ui.scoreBar.updateFill(44 / 160);

        this.scoringPage.scoreBar.init();
        this.scoringPage.scoreBar.setChapter('Lesson 1 of 4');
        this.scoringPage.scoreBar.setScore(44, 160);
        this.scoringPage.scoreBar.updateFill(44 / 160);
    };

    p.remove = function () {
        this.super_remove();

        this.closeButton.dispose();
        // this.optionsPage.instructionsButton.dispose();
        this.instructionsPage.nextButton.dispose();
        this.scoringPage.closeButton.dispose();

        this.closeButton.removeAllEventListeners('click');
        // this.optionsPage.instructionsButton.removeAllEventListeners('click');
        this.instructionsPage.nextButton.removeAllEventListeners('click');
        this.scoringPage.closeButton.removeAllEventListeners('click');

        this.parent.removeChild(this);
    };

    p.setTitle = function (title) {
        this.titleTxt.text = title;

        var titleBarBounds = this.titleBar.nominalBounds;

        this.titleTxt.x = titleBarBounds.width / 2;
        this.titleTxt.y = titleBarBounds.height / 2;
    };

    return cls;
};
