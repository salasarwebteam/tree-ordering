var buttons = require('./buttons');
var life = require('./life');
var score = require('./score');
var textAreas = require('./text-areas');
var popups = require('./popups');
var dropZones = require('./drop-zones');
var manipulatives = require('./manipulatives');
var eventSource = require('./core/event-source');
var diagrams = require('./diagrams');
var timer = require('./timer');
var utils = require('./utils');
var introAnimation = require('./intro-animation');

var processAnswerContrapositive = require('./processors/contrapositive');
var processAnswerConditionalConjunctions = require('./processors/conditional-conjunctions');
var processAnswerAtLeastOne = require('./processors/at-least-one');
var processAnswerIfAndOnlyIf = require('./processors/if-and-only-if');
var processAnswerTransitiveQuestions = require('./processors/transitive-questions');
var processAnswerReductionChains = require('./processors/reduction-chains');
var processAnswerMustBeTrue = require('./processors/must-be-true');
var processAnswerFallacyProblems = require('./processors/fallacy-problems');
var processAnswer = require('./processors/process-answer');

var LESSON = null;
var LIB = null;
var _questionIndex = 0;
var _question = null;
var _isCompletePopupShown = false;
var _isQuestionTransitioning = false;

var jsonFile = 'ordering-game.json';
// var jsonFile = 'grouping-game.json';
// var jsonFile = 'in-out-grouping-game.json';
// var jsonFile = 'tree-ordering-game.json';
// var jsonFile = '2d-stacked-ordering-game.json';//////
// var jsonFile = 'main-idea.json';
// var jsonFile = 'modal.json';
// var jsonFile = 'hybrid-game.json';
// var jsonFile = 'over-underbooked-game.json';

// var jsonFile = 'contrapositive.json';
// var jsonFile = 'at-least-one.json';
// var jsonFile = 'if-and-only-if.json';
// var jsonFile = 'conditional-conjunctions.json';
// var jsonFile = 'transitive-questions.json';
// var jsonFile = 'reduction-chains.json';
// var jsonFile = 'must-be-true.json';
// var jsonFile = 'fallacy-problems.json';

var app = {
    init: function () {
        // initialize intro/preloader screen
        parent.window.addEventListener('resize', onWindowResize);
        onWindowResize();

        /* var urlParams = getAllUrlParams();
        if (!urlParams.lesson) {
            return;
        }
        var jsonFile = urlParams.lesson + '.json'; */
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType('application/json');
        xhr.open('GET', jsonFile, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                xhr.onreadystatechange = null;
                LESSON = JSON.parse(xhr.responseText);
                xhr = null;

                console.log('********** LESSON LOADED **********');
                console.log('Lesson:', LESSON.title);
                console.log('Points:', LESSON.points);
                console.log('Questions:', LESSON.questions.length);

                var preloaderDiv = document.body.querySelector('#preloader-div');
                preloaderDiv.querySelector('#total-questions').innerHTML = 'Total Questions: ' + LESSON.questions.length;

                var lessonTitle = preloaderDiv.querySelector('#title-lesson');
                lessonTitle.innerHTML = LESSON.title;

                if (LIB !== null) {
                    start();
                }
            }
        };

        xhr.send(null);
    },

    setLibrary: function (aLib) {
        // enable touch events while allowing touch events to bubble up to the document
        createjs.Touch.enable(stage, false, true);
        // don't let the stage to automatically prevent default touch events
        stage.preventSelection = false;
        // a little optimization
        stage.enableMouseOver(8);

        LIB = aLib;
        window.stageWidth = LIB.properties.width;
        window.stageHeight = LIB.properties.height;

        if (LESSON !== null) {
            start();
        }
    }
};

function onWindowResize() {
    var preloaderDiv = document.body.querySelector('#preloader-div');
    var portraitMode = preloaderDiv.querySelector('#portrait-mode');
    var windowWidth = parent.window.outerWidth;
    var windowHeight = parent.window.outerHeight;

    if (utils.isMobile() && windowWidth > windowHeight) {
        portraitMode.style.display = 'block';
    }
    else {
        portraitMode.style.display = 'none';
    }
}

function start() {
    initUI();
    showQuestion();

    var devURL = 'https://localhost:8080/lsat-game/';
    var isDev = (parent.window.location.href === devURL);
    var preloaderDiv = document.body.querySelector('#preloader-div');
    var loading = preloaderDiv.querySelector('#loading-text');
    var btn = preloaderDiv.querySelector('button');

    loading.style.display = 'none';
    btn.style.display = 'block';

    btn.addEventListener('click', function (event) {
        parent.window.removeEventListener('resize', onWindowResize);
        preloaderDiv.style.display = 'none';

        if (!utils.isIOS() && !isDev) {
            var parentAnchor = parent.document.querySelector('.nectar-button.medium.accent-color.regular-button.start-game-btn');
            if (parentAnchor) {
                console.log('trigger parent anchor');
                parentAnchor.click();
            }
        }

        if (LESSON.title === 'Ordering Games') {
            introAnimation.start(LIB);
        }
    });
}

function initUI() {
    textAreas.init(LIB, exportRoot);
    buttons.init(exportRoot);
    life.init(LIB, exportRoot);
    score.init(LIB, exportRoot);
    popups.init(LIB, exportRoot);
    diagrams.init(LIB, exportRoot);
    dropZones.init(LIB, exportRoot);
    manipulatives.init(LIB, exportRoot);

    if (LESSON.title === 'Contrapositive') {
        dropZones.setAnswerProcessor(processAnswerContrapositive);
    }
    else if (LESSON.title === 'Conditional Conjunctions') {
        dropZones.setAnswerProcessor(processAnswerConditionalConjunctions);
    }
    else if (LESSON.title === 'At Least One') {
        dropZones.setAnswerProcessor(processAnswerAtLeastOne);
    }
    else if (LESSON.title === 'If And Only If') {
        dropZones.setAnswerProcessor(processAnswerIfAndOnlyIf);
    }
    else if (LESSON.title === 'Transitive Questions') {
        dropZones.setAnswerProcessor(processAnswerTransitiveQuestions);
    }
    else if (LESSON.title === 'Reduction Chains') {
        dropZones.setAnswerProcessor(processAnswerReductionChains);
    }
    else if (LESSON.title === 'Must Be True') {
        dropZones.setAnswerProcessor(processAnswerMustBeTrue);
    }
    else if (LESSON.title === 'Fallacy Problems') {
        dropZones.setAnswerProcessor(processAnswerFallacyProblems);
    }
    else {
        dropZones.setAnswerProcessor(processAnswer);
    }

    eventSource.on('win', onWin);
    eventSource.on('lose', onLose);

    eventSource.on('nextQuestion', onNextQuestion);
    eventSource.on('prevQuestion', onPrevQuestion);
    eventSource.on('tryAgainQuestion', onTryAgainQuestion);
    eventSource.on('refreshQuestion', onRefreshQuestion);

    eventSource.on('timer', onTimer);
    eventSource.on('timerComplete', onTimerComplete);

    eventSource.on('help', onHelp);
    eventSource.on('lessonComplete', onLessonComplete);
    eventSource.on('pauseGame', onPause);

    exportRoot.pauseScreen.on('click', onResume);

    score.setTotal(LESSON.points);
    score.set(0);
}

function showQuestion() {
    buttons.updateQuestionNavigation(_questionIndex, LESSON.questions.length);

    _question = LESSON.questions[_questionIndex];

    if (!_question) {
        return;
    }

    popups.remove();

    life.removeHearts();
    life.set(_question.lives);
    life.addHearts();

    dropZones.disable();
    manipulatives.disable();

    textAreas.resetLowerTextArea();
    textAreas.resetLogicTexts();
    textAreas.resetMainIdeaText();
    textAreas.resetTimerText();

    var upperTextAreaValue = '';

    if (LESSON.isLogic) {
        textAreas.setLogicInstructionsTextValue(_question.instructions);
        textAreas.setLogicInstructionsText2Value(_question.subInstructions);

        for (var i = 0; i < _question.rules.length; i++) {
            upperTextAreaValue += _question.rules[i] + '\n';
        }

        if (!_question.subInstructionsY) {
            _question.subInstructionsY = 752;
        }

        textAreas.setLogicInstructionsText2Y(_question.subInstructionsY);
    }
    else if (LESSON.isMainIdea) {
        var mainIdeaText = '';

        for (i = 0; i < _question.rules.length; i++) {
            if (mainIdeaText.length > 0) {
                mainIdeaText += '\n\n';
            }

            mainIdeaText += _question.rules[i];
        }

        textAreas.setMainIdeaTxtValue(mainIdeaText);
    }
    else {
        if (_question.instructions && _question.instructions.length > 0) {
            upperTextAreaValue += _question.instructions + '\n';
        }

        for (i = 0; i < _question.rules.length; i++) {
            upperTextAreaValue += _question.rules[i] + '\n';
        }

        if (_question.subInstructions) {
            upperTextAreaValue += _question.subInstructions;
        }
    }

    animateQuestions(upperTextAreaValue);

    if (_question.time <= 0) {
        buttons.hidePause();
        textAreas.hideTimer();
    }
    else {
        buttons.showPause();
        textAreas.showTimer();
        textAreas.setTimerValue(_question.time);
        timer.start(_question.time);
    }

    if (_question.noAnswerOption) {
        buttons.showNoAnswer();
    }
    else {
        buttons.hideNoAnswer();
    }

    score.setChapter(LESSON.title + ' ' + (_questionIndex + 1) + ' of ' + LESSON.questions.length);
    score.resetPlus();
    score.updateBar();
}

function animateQuestions(upperTextAreaValue) {
    if (textAreas.getUpperTextAreaValue() === '') {
        textAreas.setUpperTextAreaValue(upperTextAreaValue);

        if (LESSON.isModal) {
            // dropZones.createModal(_question);
            // manipulatives.createModal(_question);
        }
        else {
            dropZones.create(_question);
            manipulatives.create(_question);
        }

        diagrams.add(_question, LIB, exportRoot);
    }
    else {
        _isQuestionTransitioning = true;

        textAreas.animateOutUpperTextArea()
            .then(function () {
                // remove old elements
                dropZones.remove();
                manipulatives.remove();
                diagrams.remove();

                // add new elements
                textAreas.setUpperTextAreaValue(upperTextAreaValue);
                diagrams.add(_question);

                if (LESSON.isModal) {
                    // dropZones.createModal(_question);
                    // manipulatives.createModal(_question);
                }
                else {
                    dropZones.create(_question);
                    manipulatives.create(_question);
                }
            });

        // animate out old elements
        dropZones.animateOut();
        manipulatives.animateOut();
        diagrams.animateOut();

        // animate in new elements
        setTimeout(function () {
            dropZones.animateIn();
            manipulatives.animateIn();
            diagrams.animateIn();

            textAreas.animateInUpperTextArea()
                .then(function () {
                    _isQuestionTransitioning = false;
                });
        }, 250);
    }
}

function onNextQuestion() {
    if (_isQuestionTransitioning) {
        return;
    }

    _questionIndex++;
    var isLessonComplete = (getNumCompletedQuestions() === LESSON.questions.length || score.get() >= score.getTotal());

    if (isLessonComplete && !_isCompletePopupShown) {
        _isCompletePopupShown = true;

        popups.createLessonComplete();
        return;
    }

    if (_questionIndex >= LESSON.questions.length) {
        _questionIndex = 0;
    }

    createjs.Sound.play('PageFlip', { volume: 0.1 });
    timer.stop();
    showQuestion();
}

function onPrevQuestion() {
    if (_isQuestionTransitioning) {
        return;
    }

    _questionIndex--;
    if (_questionIndex < 0) {
        _questionIndex = LESSON.questions.length - 1;
    }

    createjs.Sound.play('PageFlip', { volume: 0.1 });
    timer.stop();
    showQuestion();
}

function onWin() {
    if (_question) {
        _question.completed = true;
    }

    timer.stop();
    popups.createWin();

    var popup = popups.get();
    var title = 'Question Solved';

    if (life.getLost() === 0) {
        title = 'Perfect!';
    }
    else if (life.getLost() === 1) {
        title = 'Good Job!';
    }

    popup.setTitle(title);
    popup.initScoreBar(LESSON.title + ' ' + (_questionIndex + 1) + ' of ' + LESSON.questions.length, score.get(), score.getTotal());
    popup.initHearts(life.getHeartClass(), life.get(), life.getLost(), life.getMax());

    var bonus = 10;

    manipulatives.disable();
    dropZones.disable();

    if (_question.explanation.length > 0) {
        textAreas.setLowerTextAreaValue(_question.explanation);
    }

    score.addBonus(bonus * life.get());
    life.showBonus(bonus);

    buttons.hideNoAnswer();
}

function onLose() {
    var timeLeft = timer.getTime();

    timer.stop();
    popups.createLost();

    var popup = popups.get();
    var title = timeLeft <= 0 && _questionIndex > 0 ? 'Time Expired' : 'No More Lives';

    popup.setTitle(title);
    popup.initHearts(life.getHeartClass(), life.getMax());

    manipulatives.disable();
    manipulatives.reset();

    dropZones.disable();
    dropZones.showCorrect();

    textAreas.setLowerTextAreaValue('');

    buttons.hideNoAnswer();
}

function onTryAgainQuestion() {
    if (_isQuestionTransitioning) {
        return;
    }

    createjs.Sound.play('Refresh', { volume: 0.1 });
    showQuestion();
}

function onRefreshQuestion() {
    if (_isQuestionTransitioning) {
        return;
    }

    createjs.Sound.play('Refresh', { volume: 0.1 });
    timer.stop();
    showQuestion();
}

function onTimer(event) {
    var seconds = event.time;
    textAreas.setTimerValue(seconds);
}

function onTimerComplete() {
    textAreas.setTimerValue(0);

    onLose();
}

function onHelp() {
    popups.createHelpAndOptions();
}

function onLessonComplete() {
    popups.createLessonComplete();
}

function onPause() {
    exportRoot.pauseScreen.visible = true;

    exportRoot.addChild(exportRoot.pauseScreen);
    timer.pause();
}

function onResume() {
    exportRoot.pauseScreen.visible = false;

    timer.resume();
}

// UTITILY FUNCTIONS
function getNumCompletedQuestions() {
    var num = 0;

    for (var i = 0; i < LESSON.questions.length; i++) {
        var q = LESSON.questions[i];

        if (q.completed === true) {
            num++;
        }
    }

    return num;
}

window.app = app;
