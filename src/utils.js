var MobileDetect = require('mobile-detect');

module.exports = {
    isMobile: function () {
        var md = new MobileDetect(window.navigator.userAgent);
        return (md.mobile() !== null);
    },

    isPhone: function () {
        var md = new MobileDetect(window.navigator.userAgent);
        return (md.phone() !== null);
    },

    isIOS: function () {
        var md = new MobileDetect(window.navigator.userAgent);
        return (md.os() === 'iOS');
    },

    isCorrectAnswer: function (dropZone, manipulative) {
        if (manipulative.data.text === dropZone.data.text) {
            if (manipulative.data.subtext || (dropZone.data.subtext && !dropZone.data.prefilledSubtext)) {
                return (manipulative.data.subtext === dropZone.data.subtext);
            }

            return true;
        }

        if (dropZone.data.texts) {
            for (var i = 0; i < dropZone.data.texts.length; i++) {
                var text = dropZone.data.texts[i];

                if (manipulative.data.text === text) {
                    if (manipulative.data.subtext || dropZone.data.subtexts) {
                        var subtext = (dropZone.data.subtexts ? dropZone.data.subtexts[i] : null);

                        return (manipulative.data.subtext === subtext);
                    }

                    return true;
                }
            }
        }

        return false;
    },

    findLogic: function (question, text) {
        for (var i = 0; i < question.logics.length; i++) {
            var l = question.logics[i];

            if (l.text === text) {
                return l;
            }
        }

        return null;
    },

    findWrongAnswer: function (question, text, position) {
        var wrongAnswers = question.wrongAnswers;

        for (var i = 0; i < wrongAnswers.length; i++) {
            var wrongAnswer = wrongAnswers[i];

            if (wrongAnswer.positions.indexOf(position) > -1 && wrongAnswer.texts.indexOf(text) > -1) {
                return wrongAnswer;
            }
        }

        return null;
    },

    findCorrectAnswer: function (question, position) {
        var correctAnswers = question.correctAnswers;

        for (var i = 0; i < correctAnswers.length; i++) {
            var correctAnswer = correctAnswers[i];

            if (correctAnswer.positions.indexOf(position) > -1) {
                return correctAnswer;
            }
        }

        return null;
    },

    getAllUrlParams: function (url) {
        // get query string from url (optional) or window
        var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

        // we'll store the parameters here
        var obj = {};

        // if query string exists
        if (queryString) {
            // stuff after # is not part of query string, so get rid of it
            queryString = queryString.split('#')[0];

            // split our query string into its component parts
            var arr = queryString.split('&');

            for (var i = 0; i < arr.length; i++) {
                // separate the keys and the values
                var a = arr[i].split('=');

                // set parameter name and value (use 'true' if empty)
                var paramName = a[0];
                var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

                // (optional) keep case consistent
                paramName = paramName.toLowerCase();
                if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

                // if the paramName ends with square brackets, e.g. colors[] or colors[2]
                if (paramName.match(/\[(\d+)?\]$/)) {
                    // create key if it doesn't exist
                    var key = paramName.replace(/\[(\d+)?\]/, '');
                    if (!obj[key]) obj[key] = [];

                    // if it's an indexed array e.g. colors[2]
                    if (paramName.match(/\[\d+\]$/)) {
                        // get the index value and add the entry at the appropriate position
                        var index = /\[(\d+)\]/.exec(paramName)[1];
                        obj[key][index] = paramValue;
                    }
                    else {
                        // otherwise add the value to the end of the array
                        obj[key].push(paramValue);
                    }
                }
                else {
                    // we're dealing with a string
                    if (!obj[paramName]) {
                        // if it doesn't exist, create property
                        obj[paramName] = paramValue;
                    }
                    else if (obj[paramName] && typeof obj[paramName] === 'string') {
                        // if property does exist and it's a string, convert it to an array
                        obj[paramName] = [obj[paramName]];
                        obj[paramName].push(paramValue);
                    }
                    else {
                        // otherwise add the property
                        obj[paramName].push(paramValue);
                    }
                }
            }
        }

        return obj;
    }
};
