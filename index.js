var createjs, AdobeAn;
! function(cjs, an) {
    var p, lib = {},
        ss = {},
        img = {};
    lib.webFontTxtInst = {};
    var loadedTypekitCount = 0,
        loadedGoogleCount = 0,
        gFontsUpdateCacheList = [],
        tFontsUpdateCacheList = [];

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        return clone.gotoAndStop(this.currentFrame), clone.paused = this.paused, clone.framerate = this.framerate, clone
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        return prototype.clone = mc_symbol_clone, prototype.nominalBounds = nominalBounds, prototype.frameBounds = frameBounds, prototype
    }
    lib.ssMetadata = [], lib.updateListCache = function(cacheList) {
        for (var i = 0; i < cacheList.length; i++) cacheList[i].cacheCanvas && cacheList[i].updateCache()
    }, lib.addElementsToCache = function(textInst, cacheList) {
        for (var cur = textInst; null != cur && cur != exportRoot && -1 == cacheList.indexOf(cur);) cur = cur.parent;
        if (cur != exportRoot)
            for (var cur2 = textInst, index = cacheList.indexOf(cur); null != cur2 && cur2 != cur;) cacheList.splice(index, 0, cur2), cur2 = cur2.parent, index++;
        else
            for (cur = textInst; null != cur && cur != exportRoot;) cacheList.push(cur), cur = cur.parent
    }, lib.gfontAvailable = function(family, totalGoogleCount) {
        lib.properties.webfonts[family] = !0;
        for (var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [], f = 0; f < txtInst.length; ++f) lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);
        ++loadedGoogleCount == totalGoogleCount && lib.updateListCache(gFontsUpdateCacheList)
    }, lib.tfontAvailable = function(family, totalTypekitCount) {
        lib.properties.webfonts[family] = !0;
        for (var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [], f = 0; f < txtInst.length; ++f) lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);
        ++loadedTypekitCount == totalTypekitCount && lib.updateListCache(tFontsUpdateCacheList)
    }, (lib.mcScoreBarFill = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f("#6AAD60").s().p("EggzACMIAAkXMBBnAAAIAAEXg"), this.shape.setTransform(214.9988, 15, 1.0238, 1.0714), this.timeline.addTween(cjs.Tween.get(this.shape).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.mcScoreBarFill, new cjs.Rectangle(0, 0, 430, 30), null), (lib.PopupModalBg = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f("#FFFFFF").s().p("EhGTBpeMAAAjS7MCMnAAAMAAADS7g"), this.shape.setTransform(450, 675), this.timeline.addTween(cjs.Tween.get(this.shape).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.PopupModalBg, new cjs.Rectangle(0, 0, 900, 1350), null), (lib.mcPopupTitleBar = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f("#FFFFFF").s().p("EhEgAEiIAApDMCJBAAAIAAJDg"), this.shape.setTransform(440.5, 31), this.timeline.addTween(cjs.Tween.get(this.shape).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.mcPopupTitleBar, new cjs.Rectangle(0, 0, 880, 60), null), (lib.mcPopupBg2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().s("#676767").ss(2, 1, 1).p("EhEvgjJMCJfAAAMAAABGTMiJfAAAg"), this.shape.setTransform(440, 225), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#FFFFFF").s().p("EhEvAjKMAAAhGTMCJfAAAMAAABGTg"), this.shape_1.setTransform(440, 225), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.mcPopupBg2, new cjs.Rectangle(-1, -1, 882, 452), null), (lib.mcPopupBg = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().s("#676767").ss(2, 1, 1).p("EhEvgNRMCJfAAAIAAajMiJfAAAg"), this.shape.setTransform(440, 85), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#FFFFFF").s().p("EhEvANSIAA6jMCJfAAAIAAajg"), this.shape_1.setTransform(440, 85), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.mcPopupBg, new cjs.Rectangle(-1, -1, 882, 172), null), (lib.mcPauseScreenBg = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f("#FFFFFF").s().p("EhGTBpeMAAAjS7MCMnAAAMAAADS7g"), this.shape.setTransform(450, 675), this.timeline.addTween(cjs.Tween.get(this.shape).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.mcPauseScreenBg, new cjs.Rectangle(0, 0, 900, 1350), null), (lib.mcRect = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f("#FFFFFF").s().p("AvnHCIAAuDIfPAAIAAODg"), this.shape.setTransform(100, 45), this.timeline.addTween(cjs.Tween.get(this.shape).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.mcRect, new cjs.Rectangle(0, 0, 200, 90), null), (lib.ScoreFloat = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.txt = new cjs.Text("+1", "normal 400 48px 'Lato'", "#676767"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 55, this.txt.lineWidth = 146, (this.txt.parent = this).txt.setTransform(0, -26.8), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.timeline.addTween(cjs.Tween.get(this.txt).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.ScoreFloat, new cjs.Rectangle(-75, -28.8, 150, 57.6), null), (lib.mcRedSlash = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().s("#DA4848").ss(6, 1, 1).p("Aj5D6IHznz"), this.shape.setTransform(.25, .25), this.timeline.addTween(cjs.Tween.get(this.shape).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.mcRedSlash, new cjs.Rectangle(-27.9, -27.9, 56.2, 56.2), null), (lib.mcPurpleSlash = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(6, 1, 1).p("Aj3D4IHvnv"), this.shape.setTransform(.25, .25, 1.0101, 1.0101), this.timeline.addTween(cjs.Tween.get(this.shape).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.mcPurpleSlash, new cjs.Rectangle(-27.7, -27.7, 56, 56), null), (lib.mcBlackSlash = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().s("#676767").ss(6, 1, 1).p("Aj5D6IHznz"), this.timeline.addTween(cjs.Tween.get(this.shape).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.mcBlackSlash, new cjs.Rectangle(-28, -28, 56, 56), null), (lib.TreeOrdering7 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("4", "normal 400 64px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 73, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(788, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.text_1 = new cjs.Text("3", "normal 400 64px 'Lato'", "#676767"), this.text_1.textAlign = "center", this.text_1.lineHeight = 73, this.text_1.lineWidth = 100, (this.text_1.parent = this).text_1.setTransform(558.6, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.text_2 = new cjs.Text("2", "normal 400 64px 'Lato'", "#676767"), this.text_2.textAlign = "center", this.text_2.lineHeight = 73, this.text_2.lineWidth = 100, (this.text_2.parent = this).text_2.setTransform(329.3, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_2)), this.text_3 = new cjs.Text("1", "normal 400 64px 'Lato'", "#676767"), this.text_3.textAlign = "center", this.text_3.lineHeight = 73, this.text_3.lineWidth = 100, (this.text_3.parent = this).text_3.setTransform(100, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_3)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAmIAAAIfQAAEhFXAAAIfQAAEghiAAAIfQAAACSAAIfQAA"), this.shape.setTransform(444, 0), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.text_3
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this.txt = new cjs.Text("A", "bold 65px 'Arial'", "#676767"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 73, this.txt.lineWidth = 196, (this.txt.parent = this).txt.setTransform(763.55, 543.05, .4995, .4996), this.txt_1 = new cjs.Text("B", "bold 65px 'Arial'", "#676767"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 73, this.txt_1.lineWidth = 196, (this.txt_1.parent = this).txt_1.setTransform(649, 543.05, .4995, .4996), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().s("#8C659C").ss(5, 1, 1).p("ABKEiIPnAAAyVGQIAAsfMAkrAAAIAAMfgAwvEiIPnAA"), this.shape_1.setTransform(706.35, 555.025), this.text_4 = new cjs.Text("Rule #3", "normal 700 25px 'Lato'", "#676767"), this.text_4.textAlign = "center", this.text_4.lineHeight = 28, this.text_4.lineWidth = 100, (this.text_4.parent = this).text_4.setTransform(706.35, 602), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_4)), this.txt_2 = new cjs.Text("B", "normal 900 65px 'Lato'", "#676767"), this.txt_2.name = "txt_2", this.txt_2.textAlign = "center", this.txt_2.lineHeight = 74, this.txt_2.lineWidth = 196, (this.txt_2.parent = this).txt_2.setTransform(396, 631, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_2)), this.txt_3 = new cjs.Text("C", "normal 900 65px 'Lato'", "#676767"), this.txt_3.name = "txt_3", this.txt_3.textAlign = "center", this.txt_3.lineHeight = 74, this.txt_3.lineWidth = 196, (this.txt_3.parent = this).txt_3.setTransform(396, 504.35, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_3)), this.txt_4 = new cjs.Text("D", "normal 900 65px 'Lato'", "#676767"), this.txt_4.name = "txt_4", this.txt_4.textAlign = "center", this.txt_4.lineHeight = 74, this.txt_4.lineWidth = 196, (this.txt_4.parent = this).txt_4.setTransform(114, 567.65, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_4)), this.txt_5 = new cjs.Text("A", "normal 900 65px 'Lato'", "#676767"), this.txt_5.name = "txt_5", this.txt_5.textAlign = "center", this.txt_5.lineHeight = 74, this.txt_5.lineWidth = 196, (this.txt_5.parent = this).txt_5.setTransform(114, 441, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_5)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#8C659C").ss(5, 1, 1).p("AOOjiIPoAAAOOQQIPoAAAN6MUI8HphIcHpgI8HpiA91GWIPoAAA91tbIPoAA"), this.shape_2.setTransform(255, 568.025), this.text_5 = new cjs.Text("Rule #1 & Rule #2", "normal 700 25px 'Lato'", "#676767"), this.text_5.textAlign = "center", this.text_5.lineHeight = 28, this.text_5.lineWidth = 200, (this.text_5.parent = this).text_5.setTransform(255, 679), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_5)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_5
            }, {
                t: this.shape_2
            }, {
                t: this.txt_5
            }, {
                t: this.txt_4
            }, {
                t: this.txt_3
            }, {
                t: this.txt_2
            }, {
                t: this.text_4
            }, {
                t: this.shape_1
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.TreeOrdering7, new cjs.Rectangle(-2.5, -2.5, 893, 711.4), null), (lib.TreeOrdering6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("4", "normal 400 64px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 73, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(788, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.text_1 = new cjs.Text("3", "normal 400 64px 'Lato'", "#676767"), this.text_1.textAlign = "center", this.text_1.lineHeight = 73, this.text_1.lineWidth = 100, (this.text_1.parent = this).text_1.setTransform(558.6, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.text_2 = new cjs.Text("2", "normal 400 64px 'Lato'", "#676767"), this.text_2.textAlign = "center", this.text_2.lineHeight = 73, this.text_2.lineWidth = 100, (this.text_2.parent = this).text_2.setTransform(329.3, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_2)), this.text_3 = new cjs.Text("1", "normal 400 64px 'Lato'", "#676767"), this.text_3.textAlign = "center", this.text_3.lineHeight = 73, this.text_3.lineWidth = 100, (this.text_3.parent = this).text_3.setTransform(100, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_3)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAmIAAAIfQAAEhFXAAAIfQAAEghiAAAIfQAAACSAAIfQAA"), this.shape.setTransform(444, 0), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.text_3
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAksgMMIAEgBEAksgMMIAAYsMhJbAAAIAA4/MBJbAAAgEghkAJEIfQAAACQJEIfQAA"), this.shape_1.setTransform(444, 410), this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.TreeOrdering6, new cjs.Rectangle(-2.5, -2.5, 893, 495), null), (lib.TreeOrdering5 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("4", "normal 400 64px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 73, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(788, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.text_1 = new cjs.Text("3", "normal 400 64px 'Lato'", "#676767"), this.text_1.textAlign = "center", this.text_1.lineHeight = 73, this.text_1.lineWidth = 100, (this.text_1.parent = this).text_1.setTransform(558.6, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.text_2 = new cjs.Text("2", "normal 400 64px 'Lato'", "#676767"), this.text_2.textAlign = "center", this.text_2.lineHeight = 73, this.text_2.lineWidth = 100, (this.text_2.parent = this).text_2.setTransform(329.3, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_2)), this.text_3 = new cjs.Text("1", "normal 400 64px 'Lato'", "#676767"), this.text_3.textAlign = "center", this.text_3.lineHeight = 73, this.text_3.lineWidth = 100, (this.text_3.parent = this).text_3.setTransform(100, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_3)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAmIAAAIfQAAEhFXAAAIfQAAEghiAAAIfQAAACSAAIfQAA"), this.shape.setTransform(444, 0), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.text_3
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this.txt = new cjs.Text("B", "normal 900 65px 'Lato'", "#676767"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 74, this.txt.lineWidth = 196, (this.txt.parent = this).txt.setTransform(565.9, 574.4, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.txt_1 = new cjs.Text("C", "normal 900 65px 'Lato'", "#676767"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 74, this.txt_1.lineWidth = 196, (this.txt_1.parent = this).txt_1.setTransform(565.9, 447.75, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_1)), this.txt_2 = new cjs.Text("D", "normal 900 65px 'Lato'", "#676767"), this.txt_2.name = "txt_2", this.txt_2.textAlign = "center", this.txt_2.lineHeight = 74, this.txt_2.lineWidth = 196, (this.txt_2.parent = this).txt_2.setTransform(283.9, 511.05, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_2)), this.txt_3 = new cjs.Text("A", "normal 900 65px 'Lato'", "#676767"), this.txt_3.name = "txt_3", this.txt_3.textAlign = "center", this.txt_3.lineHeight = 74, this.txt_3.lineWidth = 196, (this.txt_3.parent = this).txt_3.setTransform(283.9, 384.4, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_3)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().s("#8C659C").ss(5, 1, 1).p("AOOjiIPoAAAOOQQIPoAAAN6MUI8HphIcHpgI8HpiA91GWIPoAAA91tbIPoAA"), this.shape_1.setTransform(424.9, 511.425), this.text_4 = new cjs.Text("Rule #1 & Rule #2", "normal 700 25px 'Lato'", "#676767"), this.text_4.textAlign = "center", this.text_4.lineHeight = 28, this.text_4.lineWidth = 200, (this.text_4.parent = this).text_4.setTransform(424.9, 622.4), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_4)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_4
            }, {
                t: this.shape_1
            }, {
                t: this.txt_3
            }, {
                t: this.txt_2
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.TreeOrdering5, new cjs.Rectangle(-2.5, -2.5, 893, 654.8), null), (lib.TreeOrdering4 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("Eg7rga3IfQAAEg7rAMtIfQAAAb0YnMg4PgTCMA4PgTBMg4PgTDAccnFIfQAAEAccAggIfQAA"), this.shape.setTransform(382, 207.95), this.timeline.addTween(cjs.Tween.get(this.shape).wait(1)), this.txt = new cjs.Text("D", "normal 900 65px 'Lato'", "#676767"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 74, this.txt.lineWidth = 196, (this.txt.parent = this).txt.setTransform(241, 547, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.txt_1 = new cjs.Text("C", "normal 900 65px 'Lato'", "#676767"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 74, this.txt_1.lineWidth = 196, (this.txt_1.parent = this).txt_1.setTransform(523, 601, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_1)), this.txt_2 = new cjs.Text("B", "normal 900 65px 'Lato'", "#676767"), this.txt_2.name = "txt_2", this.txt_2.textAlign = "center", this.txt_2.lineHeight = 74, this.txt_2.lineWidth = 196, (this.txt_2.parent = this).txt_2.setTransform(522, 491, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_2)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().s("#8C659C").ss(5, 1, 1).p("A91B4IPoAAAOOm3IPoAAAOOKUIPoAAAOEG4I8HolIcHom"), this.shape_1.setTransform(382, 576), this.text = new cjs.Text("Rule #2", "normal 700 25px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 28, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(382, 649), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text
            }, {
                t: this.shape_1
            }, {
                t: this.txt_2
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.TreeOrdering4, new cjs.Rectangle(-2.5, -2.5, 769, 681.4), null), (lib.TreeOrdering3 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("OR", "normal 400 32px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 37, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(444, 156.45), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(10, 1, 1).p("APtAAI/ZAA"), this.shape.setTransform(300.5375, 28.75), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAhlgdHIGesgEAmIgdHIfQAAAiB9HIfPAAEhFXgdHIfQAAEg7rAYvIfQAAEAcIAivMg4PgRMMA4PgRMAccHPIfQAAEAccApoIfQAA"), this.shape_1.setTransform(444, 266.35), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f("#8C659C").s().p("AiUAAIgBkrIErEsIkqErg"), this.shape_2.setTransform(416, 28.75), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.text
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.TreeOrdering3, new cjs.Rectangle(-2.5, -2.5, 893, 537.7), null), (lib.TreeOrdering2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("4", "normal 400 64px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 73, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(788, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.text_1 = new cjs.Text("3", "normal 400 64px 'Lato'", "#676767"), this.text_1.textAlign = "center", this.text_1.lineHeight = 73, this.text_1.lineWidth = 100, (this.text_1.parent = this).text_1.setTransform(558.6, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.text_2 = new cjs.Text("2", "normal 400 64px 'Lato'", "#676767"), this.text_2.textAlign = "center", this.text_2.lineHeight = 73, this.text_2.lineWidth = 100, (this.text_2.parent = this).text_2.setTransform(329.3, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_2)), this.text_3 = new cjs.Text("1", "normal 400 64px 'Lato'", "#676767"), this.text_3.textAlign = "center", this.text_3.lineHeight = 73, this.text_3.lineWidth = 100, (this.text_3.parent = this).text_3.setTransform(100, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_3)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAmIAAAIfQAAEhFXAAAIfQAAEghiAAAIfQAAACSAAIfQAA"), this.shape.setTransform(444, 0), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.text_3
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this.txt = new cjs.Text("C", "normal 900 65px 'Lato'", "#676767"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 74, this.txt.lineWidth = 196, (this.txt.parent = this).txt.setTransform(612.7, 331.3, .662, .6619), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.txt_1 = new cjs.Text("A", "normal 900 65px 'Lato'", "#676767"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 74, this.txt_1.lineWidth = 196, (this.txt_1.parent = this).txt_1.setTransform(275.15, 331.3, .662, .6619), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_1)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().s("#8C659C").ss(5, 1, 1).p("AwBioMAgDAAAEgktACpIUsAAAQCCpIUsAA"), this.shape_1.setTransform(444.025, 368.7), this.text_4 = new cjs.Text("Rule #1", "normal 700 25px 'Lato'", "#676767"), this.text_4.textAlign = "center", this.text_4.lineHeight = 30, this.text_4.lineWidth = 100, (this.text_4.parent = this).text_4.setTransform(444, 393), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_4)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_4
            }, {
                t: this.shape_1
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.TreeOrdering2, new cjs.Rectangle(-2.5, -2.5, 893, 425.4), null), (lib.TreeOrdering1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("OR", "normal 400 32px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 37, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(355, 155.65), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAkuAK7IAEgBEAkuAK7IAAYtMhJbAAAIAA5AMBJbAAAgEg3dgboIfQAAEACSAgMIfQAAEghiAgMIfQAAEgYNgjnMAwbAAAAYO7oIfQAA"), this.shape.setTransform(355, 227.975), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.text
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.TreeOrdering1, new cjs.Rectangle(-2.5, -2.5, 715, 461), null), (lib.StackedOrdering7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape.setTransform(632.5, 578), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_1.setTransform(815, 578), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_2.setTransform(267.5, 578), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_3.setTransform(450, 578), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_4.setTransform(632.5, 263), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_5.setTransform(815, 263), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_6.setTransform(267.5, 263), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_7.setTransform(450, 263), this.text = new cjs.Text("Janitors:", "bold 36px 'Arial'"), this.text.lineHeight = 42, this.text.lineWidth = 166, (this.text.parent = this).text.setTransform(2, 554.75), this.text_1 = new cjs.Text("Tasks:", "bold 36px 'Arial'"), this.text_1.lineHeight = 42, this.text_1.lineWidth = 166, (this.text_1.parent = this).text_1.setTransform(2, 240.75), this.text_2 = new cjs.Text("TASKS", "bold 36px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 42, this.text_2.lineWidth = 206, (this.text_2.parent = this).text_2.setTransform(450, 2), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 4, 10.5, 0, 4, 10.5, 491.9).ss(5, 1, 1).p("EhGTAAAMCMnAAA"), this.shape_8.setTransform(450, 420.5), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_8
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.StackedOrdering7, new cjs.Rectangle(-2.5, 0, 905, 597), null), (lib.StackedOrdering6 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.subtxt = new cjs.Text("1", "bold 32px 'Arial'"), this.subtxt.name = "subtxt", this.subtxt.lineHeight = 36, this.subtxt.lineWidth = 56, (this.subtxt.parent = this).subtxt.setTransform(463.7664, 716, .4997, .4999), this.txt = new cjs.Text("B", "bold 65px 'Arial'"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 73, this.txt.lineWidth = 196, (this.txt.parent = this).txt.setTransform(450, 696.7, .5, .5), this.txt_1 = new cjs.Text("D", "bold 65px 'Arial'"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 73, this.txt_1.lineWidth = 196, (this.txt_1.parent = this).txt_1.setTransform(450, 625.7, .5, .5), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -49.7, 71, 0, -49.7, 71, 87).ss(5, 1, 1).p("AAAACIABgD"), this.shape.setTransform(499.575, 605.2), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 77.5).ss(5, 1, 1).p("AnzrFIPhAAIAGAAIAAWLIvnAAg"), this.shape_1.setTransform(450, 676.4), this.text = new cjs.Text("(Rule #4)", "bold 22px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 25, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(450, 762.4), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 4, 10.5, 0, 4, 10.5, 491.9).ss(5, 1, 1).p("EhGTAAAMCMnAAA"), this.shape_2.setTransform(450, 378.5), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_3.setTransform(632.5, 499), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_4.setTransform(815, 499), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_5.setTransform(267.5, 499), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_6.setTransform(450, 499), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_7.setTransform(632.5, 258), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_8.setTransform(815, 258), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_9.setTransform(267.5, 258), this.shape_10 = new cjs.Shape, this.shape_10.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_10.setTransform(450, 258), this.text_1 = new cjs.Text("Janitors:", "bold 36px 'Arial'"), this.text_1.lineHeight = 42, this.text_1.lineWidth = 166, (this.text_1.parent = this).text_1.setTransform(2, 472.05), this.text_2 = new cjs.Text("Tasks:", "bold 36px 'Arial'"), this.text_2.lineHeight = 42, this.text_2.lineWidth = 166, (this.text_2.parent = this).text_2.setTransform(2, 232), this.text_3 = new cjs.Text("TASKS", "bold 36px 'Arial'"), this.text_3.textAlign = "center", this.text_3.lineHeight = 42, this.text_3.lineWidth = 206, (this.text_3.parent = this).text_3.setTransform(450, 2), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_3
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.text
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }, {
                t: this.subtxt
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.StackedOrdering6, new cjs.Rectangle(-2.5, 0, 905, 789), null), (lib.StackedOrdering5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("JANITORS", "bold 36px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 42, this.text.lineWidth = 206, (this.text.parent = this).text.setTransform(545, 2), this.text_1 = new cjs.Text("TASKS", "bold 36px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 42, this.text_1.lineWidth = 206, (this.text_1.parent = this).text_1.setTransform(105, 2), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 155).ss(5, 1, 1).p("Avn2LIfEAAIALAAMAAAAsXI/PAAg"), this.shape.setTransform(325, 452.4), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -99.4, 142, 0, -99.4, 142, 173.9).ss(5, 1, 1).p("AgCAEIAFgH"), this.shape_1.setTransform(424.125, 310), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.StackedOrdering5, new cjs.Rectangle(0, 0, 650, 596.9), null), (lib.StackedOrdering4 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 4, 10.5, 0, 4, 10.5, 491.9).ss(5, 1, 1).p("EhGTAAAMCMnAAA"), this.shape.setTransform(450, 405), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_1.setTransform(632.5, 538), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_2.setTransform(815, 538), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_3.setTransform(267.5, 538), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_4.setTransform(450, 538), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_5.setTransform(632.5, 268), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_6.setTransform(815, 268), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_7.setTransform(267.5, 268), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_8.setTransform(450, 268), this.text = new cjs.Text("Janitors:", "bold 36px 'Arial'"), this.text.lineHeight = 42, this.text.lineWidth = 166, (this.text.parent = this).text.setTransform(2, 514.75), this.text_1 = new cjs.Text("Tasks:", "bold 36px 'Arial'"), this.text_1.lineHeight = 42, this.text_1.lineWidth = 166, (this.text_1.parent = this).text_1.setTransform(2, 244.75), this.text_2 = new cjs.Text("JANITORS", "bold 36px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 42, this.text_2.lineWidth = 206, (this.text_2.parent = this).text_2.setTransform(670, 2), this.text_3 = new cjs.Text("TASKS", "bold 36px 'Arial'"), this.text_3.textAlign = "center", this.text_3.lineHeight = 42, this.text_3.lineWidth = 206, (this.text_3.parent = this).text_3.setTransform(230, 2), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_3
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.text_4 = new cjs.Text("(Rule #3)", "bold 22px 'Arial'"), this.text_4.textAlign = "center", this.text_4.lineHeight = 25, this.text_4.lineWidth = 100, (this.text_4.parent = this).text_4.setTransform(450, 809.4), this.txt = new cjs.Text("A", "bold 65px 'Arial'"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 73, this.txt.lineWidth = 196, (this.txt.parent = this).txt.setTransform(525, 743.7, .5, .5), this.txt_1 = new cjs.Text("A", "bold 65px 'Arial'"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 73, this.txt_1.lineWidth = 196, (this.txt_1.parent = this).txt_1.setTransform(375, 743.7, .5, .5), this.txt_2 = new cjs.Text("D/M", "bold 65px 'Arial'"), this.txt_2.name = "txt_2", this.txt_2.textAlign = "center", this.txt_2.lineHeight = 73, this.txt_2.lineWidth = 196, (this.txt_2.parent = this).txt_2.setTransform(375, 672.7, .5, .5), this.txt_3 = new cjs.Text("M/D", "bold 65px 'Arial'"), this.txt_3.name = "txt_3", this.txt_3.textAlign = "center", this.txt_3.lineHeight = 73, this.txt_3.lineWidth = 196, (this.txt_3.parent = this).txt_3.setTransform(525, 672.7, .5, .5), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 87).ss(5, 1, 1).p("AnyLIIPi2LIACgE"), this.shape_9.setTransform(374.85, 723.2), this.shape_10 = new cjs.Shape, this.shape_10.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 77.5).ss(5, 1, 1).p("AnzrFIPhAAIAGAAIAAWLIvnAAg"), this.shape_10.setTransform(375, 723.4), this.shape_11 = new cjs.Shape, this.shape_11.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 87).ss(5, 1, 1).p("AnyLIIPi2LIADgE"), this.shape_11.setTransform(524.85, 723.2), this.shape_12 = new cjs.Shape, this.shape_12.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 77.5).ss(5, 1, 1).p("AnzrFIPiAAIAFAAIAAWLIvnAAg"), this.shape_12.setTransform(525, 723.4), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.txt_3
            }, {
                t: this.txt_2
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }, {
                t: this.text_4
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.StackedOrdering4, new cjs.Rectangle(-2.5, 0, 905, 900), null), (lib.StackedOrdering3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 173.9).ss(5, 1, 1).p("AvkWQMAfDgsXIAGgI"), this.shape.setTransform(544.7, 452), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 155).ss(5, 1, 1).p("Avn2LIfDAAIAMAAMAAAAsXI/PAAg"), this.shape_1.setTransform(545, 452.4), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 173.9).ss(5, 1, 1).p("AvkWQMAfDgsXIAGgI"), this.shape_2.setTransform(104.7, 452), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 155).ss(5, 1, 1).p("Avn2LIfDAAIAMAAMAAAAsXI/PAAg"), this.shape_3.setTransform(105, 452.4), this.text = new cjs.Text("JANITORS", "bold 36px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 42, this.text.lineWidth = 206, (this.text.parent = this).text.setTransform(545, 2), this.text_1 = new cjs.Text("TASKS", "bold 36px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 42, this.text_1.lineWidth = 206, (this.text_1.parent = this).text_1.setTransform(105, 2), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_1
            }, {
                t: this.text
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.StackedOrdering3, new cjs.Rectangle(0, 0, 650, 596.9), null), (lib.StackedOrdering2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape.setTransform(632.5, 359.25), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_1.setTransform(815, 359.25), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_2.setTransform(267.5, 359.25), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_3.setTransform(450, 359.25), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_4.setTransform(632.5, 44.25), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_5.setTransform(815, 44.25), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_6.setTransform(267.5, 44.25), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_7.setTransform(450, 44.25), this.text = new cjs.Text("Janitors:", "bold 36px 'Arial'"), this.text.lineHeight = 42, this.text.lineWidth = 166, (this.text.parent = this).text.setTransform(2, 336), this.text_1 = new cjs.Text("Tasks:", "bold 36px 'Arial'"), this.text_1.lineHeight = 42, this.text_1.lineWidth = 166, (this.text_1.parent = this).text_1.setTransform(2, 22), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 4, 10.5, 0, 4, 10.5, 491.9).ss(5, 1, 1).p("EhGTAAAMCMnAAA"), this.shape_8.setTransform(450, 201.75), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_8
            }, {
                t: this.text_1
            }, {
                t: this.text
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.StackedOrdering2, new cjs.Rectangle(-2.5, 20, 905, 358.3), null), (lib.StackedOrdering1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.1, 0, 0, -.1, 0, 114.6).ss(5, 1, 1).p("ALuLuI3bruIXbrt"), this.shape.setTransform(425, 75), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .3, 10.5, 0, .3, 10.5, 109.2).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_1.setTransform(75, 75, .75, 1), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.StackedOrdering1, new cjs.Rectangle(-2.5, -2.5, 505, 155), null), (lib.OverUnderbooked6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape.setTransform(333.3, 0), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_1.setTransform(100, 0), this.text = new cjs.Text("‘04", "65px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 75, this.text.lineWidth = 196, (this.text.parent = this).text.setTransform(799.9, 122), this.text_1 = new cjs.Text("‘03", "65px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 75, this.text_1.lineWidth = 196, (this.text_1.parent = this).text_1.setTransform(566.6, 122), this.text_2 = new cjs.Text("‘02", "65px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 75, this.text_2.lineWidth = 196, (this.text_2.parent = this).text_2.setTransform(333.3, 122), this.text_3 = new cjs.Text("‘01", "65px 'Arial'"), this.text_3.textAlign = "center", this.text_3.lineHeight = 75, this.text_3.lineWidth = 196, (this.text_3.parent = this).text_3.setTransform(100, 122), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_2.setTransform(566.6, 110), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_3.setTransform(333.3, 110), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_4.setTransform(100, 110), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_5.setTransform(799.9, 110), this.text_4 = new cjs.Text("(Rule #3)", "bold 22px 'Arial'"), this.text_4.textAlign = "center", this.text_4.lineHeight = 27, this.text_4.lineWidth = 96, (this.text_4.parent = this).text_4.setTransform(844, 604), this.txt = new cjs.Text("D/E", "bold 65px 'Arial'"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 73, this.txt.lineWidth = 196, (this.txt.parent = this).txt.setTransform(843.95, 533.3, .4997, .5), this.txt_1 = new cjs.Text("E/D", "bold 65px 'Arial'"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 73, this.txt_1.lineWidth = 196, (this.txt_1.parent = this).txt_1.setTransform(843.95, 476, .4997, .5), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 77.5).ss(5, 1, 1).p("AnzrFIPnAAIAAWLIvnAAg"), this.shape_6.setTransform(844.025, 521), this.txt_2 = new cjs.Text("A", "bold 65px 'Arial'"), this.txt_2.name = "txt_2", this.txt_2.textAlign = "center", this.txt_2.lineHeight = 73, this.txt_2.lineWidth = 196, (this.txt_2.parent = this).txt_2.setTransform(300, 510.7, .5, .5), this.txt_3 = new cjs.Text("B", "bold 65px 'Arial'"), this.txt_3.name = "txt_3", this.txt_3.textAlign = "center", this.txt_3.lineHeight = 73, this.txt_3.lineWidth = 196, (this.txt_3.parent = this).txt_3.setTransform(185, 510.7, .5, .5), this.txt_4 = new cjs.Text("D", "bold 65px 'Arial'"), this.txt_4.name = "txt_4", this.txt_4.textAlign = "center", this.txt_4.lineHeight = 73, this.txt_4.lineWidth = 196, (this.txt_4.parent = this).txt_4.setTransform(70, 510.65, .5, .5), this.text_5 = new cjs.Text("(Rule #1)", "bold 22px 'Arial'"), this.text_5.textAlign = "center", this.text_5.lineHeight = 27, this.text_5.lineWidth = 109, (this.text_5.parent = this).text_5.setTransform(185, 572), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 5.2, 0, .5, 5.2, 54.7).ss(5, 1, 1).p("AnzAAIPnAA"), this.shape_7.setTransform(70, 548), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 5.2, 0, .5, 5.2, 54.7).ss(5, 1, 1).p("AnzAAIPnAA"), this.shape_8.setTransform(185, 548), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.3, 0, 0, -.3, 0, 188.5).ss(5, 1, 1).p("A7VmPMA2rAAAIAAMfMg2rAAAg"), this.shape_9.setTransform(185, 520), this.shape_10 = new cjs.Shape, this.shape_10.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 5.2, 0, .5, 5.2, 54.7).ss(5, 1, 1).p("AnzAAIPnAA"), this.shape_10.setTransform(300, 548), this.txt_5 = new cjs.Text("B/A", "bold 65px 'Arial'"), this.txt_5.name = "txt_5", this.txt_5.textAlign = "center", this.txt_5.lineHeight = 73, this.txt_5.lineWidth = 196, (this.txt_5.parent = this).txt_5.setTransform(689.5, 554, .4999, .5), this.txt_6 = new cjs.Text("A/B", "bold 65px 'Arial'"), this.txt_6.name = "txt_6", this.txt_6.textAlign = "center", this.txt_6.lineHeight = 73, this.txt_6.lineWidth = 196, (this.txt_6.parent = this).txt_6.setTransform(689.5, 452, .4999, .5), this.txt_7 = new cjs.Text("C", "bold 65px 'Arial'"), this.txt_7.name = "txt_7", this.txt_7.textAlign = "center", this.txt_7.lineHeight = 73, this.txt_7.lineWidth = 196, (this.txt_7.parent = this).txt_7.setTransform(464.5, 504.5, .4999, .5), this.text_6 = new cjs.Text("(Rule #2)", "bold 22px 'Arial'"), this.text_6.textAlign = "center", this.text_6.lineHeight = 27, this.text_6.lineWidth = 109, (this.text_6.parent = this).text_6.setTransform(578.6, 603), this.shape_11 = new cjs.Shape, this.shape_11.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .3, 5.2, 0, .3, 5.2, 54.6).ss(5, 1, 1).p("AnzAAIPnAA"), this.shape_11.setTransform(689.475, 489.3), this.shape_12 = new cjs.Shape, this.shape_12.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .3, 5.2, 0, .3, 5.2, 54.6).ss(5, 1, 1).p("AnzAAIPnAA"), this.shape_12.setTransform(689.475, 591.3), this.shape_13 = new cjs.Shape, this.shape_13.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .3, 5.2, 0, .3, 5.2, 54.6).ss(5, 1, 1).p("AnzAAIPnAA"), this.shape_13.setTransform(464.5, 541.8), this.shape_14 = new cjs.Shape, this.shape_14.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.1, -.1, 0, -.1, -.1, 95.5).ss(5, 1, 1).p("AJxH0Izhn0IThnz"), this.shape_14.setTransform(577, 523.3), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_14
            }, {
                t: this.shape_13
            }, {
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.text_6
            }, {
                t: this.txt_7
            }, {
                t: this.txt_6
            }, {
                t: this.txt_5
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.text_5
            }, {
                t: this.txt_4
            }, {
                t: this.txt_3
            }, {
                t: this.txt_2
            }, {
                t: this.shape_6
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }, {
                t: this.text_4
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.text_3
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.OverUnderbooked6, new cjs.Rectangle(-2.5, -2.5, 904.9, 633.1), null), (lib.OverUnderbooked5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("OR", "32px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 38, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(220.65, 202.1), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape.setTransform(349.6, 138), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 155).ss(5, 1, 1).p("Avn2LIfPAAMAAAAsXI/PAAg"), this.shape_1.setTransform(235, 421.95), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_2.setTransform(120.3, 138), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.1, 0, 0, -.1, 0, 253.2).ss(5, 1, 1).p("EgktgMfMBJbAAAIAAY/MhJbAAAg"), this.shape_3.setTransform(235, 80), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.text
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.OverUnderbooked5, new cjs.Rectangle(-2.5, -2.5, 475, 569), null), (lib.OverUnderbooked4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("‘04", "65px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 75, this.text.lineWidth = 196, (this.text.parent = this).text.setTransform(799.9, 12), this.text_1 = new cjs.Text("‘03", "65px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 75, this.text_1.lineWidth = 196, (this.text_1.parent = this).text_1.setTransform(566.6, 12), this.text_2 = new cjs.Text("‘02", "65px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 75, this.text_2.lineWidth = 196, (this.text_2.parent = this).text_2.setTransform(333.3, 12), this.text_3 = new cjs.Text("‘01", "65px 'Arial'"), this.text_3.textAlign = "center", this.text_3.lineHeight = 75, this.text_3.lineWidth = 196, (this.text_3.parent = this).text_3.setTransform(100, 12), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape.setTransform(566.6, 0), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_1.setTransform(333.3, 0), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_2.setTransform(100, 0), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_3.setTransform(799.9, 0), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.text_3
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this.txt = new cjs.Text("B/A", "bold 65px 'Arial'"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 73, this.txt.lineWidth = 196, (this.txt.parent = this).txt.setTransform(562.45, 521, .4999, .5), this.txt_1 = new cjs.Text("A/B", "bold 65px 'Arial'"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 73, this.txt_1.lineWidth = 196, (this.txt_1.parent = this).txt_1.setTransform(562.45, 419, .4999, .5), this.txt_2 = new cjs.Text("C", "bold 65px 'Arial'"), this.txt_2.name = "txt_2", this.txt_2.textAlign = "center", this.txt_2.lineHeight = 73, this.txt_2.lineWidth = 196, (this.txt_2.parent = this).txt_2.setTransform(337.45, 471.5, .4999, .5), this.text_4 = new cjs.Text("(Rule #2)", "bold 22px 'Arial'"), this.text_4.textAlign = "center", this.text_4.lineHeight = 27, this.text_4.lineWidth = 109, (this.text_4.parent = this).text_4.setTransform(451.55, 570), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.1, -.1, 0, -.1, -.1, 95.5).ss(5, 1, 1).p("AJxH0Izhn0IThnz"), this.shape_4.setTransform(449.95, 490.3), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .3, 5.2, 0, .3, 5.2, 54.6).ss(5, 1, 1).p("AnzAAIPnAA"), this.shape_5.setTransform(562.425, 558.3), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .3, 5.2, 0, .3, 5.2, 54.6).ss(5, 1, 1).p("AnzAAIPnAA"), this.shape_6.setTransform(337.45, 508.8), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .3, 5.2, 0, .3, 5.2, 54.6).ss(5, 1, 1).p("AnzAAIPnAA"), this.shape_7.setTransform(562.425, 456.3), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.text_4
            }, {
                t: this.txt_2
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.OverUnderbooked4, new cjs.Rectangle(-2.5, -2.5, 904.9, 599.1), null), (lib.OverUnderbooked3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.2, -.1, 0, -.2, -.1, 191).ss(5, 1, 1).p("ATiPoMgnDgPoMAnDgPn"), this.shape.setTransform(450, 369.95), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 98.4).ss(5, 1, 1).p("AuDAAIcHAA"), this.shape_1.setTransform(630, 0), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 98.4).ss(5, 1, 1).p("AuDAAIcHAA"), this.shape_2.setTransform(270, 0), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .9, 10.5, 0, .9, 10.5, 98.4).ss(5, 1, 1).p("AuDAAIcHAA"), this.shape_3.setTransform(450, 50), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .9, 10.5, 0, .9, 10.5, 98.4).ss(5, 1, 1).p("AuDAAIcHAA"), this.shape_4.setTransform(90, 50), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .9, 10.5, 0, .9, 10.5, 98.4).ss(5, 1, 1).p("AuDAAIcHAA"), this.shape_5.setTransform(810, 50), this.text = new cjs.Text("OR", "32px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 38, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(437.8, 142.1), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .6, 10.5, 0, .6, 10.5, 109.3).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_6.setTransform(675, 302), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .6, 10.5, 0, .6, 10.5, 109.3).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_7.setTransform(675, 506), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .6, 10.5, 0, .6, 10.5, 109.3).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_8.setTransform(225, 407), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.text
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.OverUnderbooked3, new cjs.Rectangle(-2.5, -2.5, 905, 511), null), (lib.OverUnderbooked2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.txt = new cjs.Text("A", "bold 65px 'Arial'"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 73, this.txt.lineWidth = 196, (this.txt.parent = this).txt.setTransform(565, 448.7, .5, .5), this.txt_1 = new cjs.Text("B", "bold 65px 'Arial'"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 73, this.txt_1.lineWidth = 196, (this.txt_1.parent = this).txt_1.setTransform(450, 448.7, .5, .5), this.txt_2 = new cjs.Text("D", "bold 65px 'Arial'"), this.txt_2.name = "txt_2", this.txt_2.textAlign = "center", this.txt_2.lineHeight = 73, this.txt_2.lineWidth = 196, (this.txt_2.parent = this).txt_2.setTransform(335, 448.65, .5, .5), this.text = new cjs.Text("(Rule #1)", "bold 22px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 27, this.text.lineWidth = 109, (this.text.parent = this).text.setTransform(450, 510), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 5.2, 0, .5, 5.2, 54.7).ss(5, 1, 1).p("AnzAAIPnAA"), this.shape.setTransform(335, 486), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 5.2, 0, .5, 5.2, 54.7).ss(5, 1, 1).p("AnzAAIPnAA"), this.shape_1.setTransform(450, 486), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.3, 0, 0, -.3, 0, 188.5).ss(5, 1, 1).p("A7VmPMA2rAAAIAAMfMg2rAAAg"), this.shape_2.setTransform(450, 458), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 5.2, 0, .5, 5.2, 54.7).ss(5, 1, 1).p("AnzAAIPnAA"), this.shape_3.setTransform(565, 486), this.text_1 = new cjs.Text("‘04", "65px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 75, this.text_1.lineWidth = 196, (this.text_1.parent = this).text_1.setTransform(799.9, 12), this.text_2 = new cjs.Text("‘03", "65px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 75, this.text_2.lineWidth = 196, (this.text_2.parent = this).text_2.setTransform(566.6, 12), this.text_3 = new cjs.Text("‘02", "65px 'Arial'"), this.text_3.textAlign = "center", this.text_3.lineHeight = 75, this.text_3.lineWidth = 196, (this.text_3.parent = this).text_3.setTransform(333.3, 12), this.text_4 = new cjs.Text("‘01", "65px 'Arial'"), this.text_4.textAlign = "center", this.text_4.lineHeight = 75, this.text_4.lineWidth = 196, (this.text_4.parent = this).text_4.setTransform(100, 12), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_4.setTransform(566.6, 0), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_5.setTransform(333.3, 0), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_6.setTransform(100, 0), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_7.setTransform(799.9, 0), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.text_4
            }, {
                t: this.text_3
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.text
            }, {
                t: this.txt_2
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.OverUnderbooked2, new cjs.Rectangle(-2.5, -2.5, 904.9, 539.1), null), (lib.OverUnderbooked = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape.setTransform(220, 416), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_1.setTransform(680, 415.95), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_2.setTransform(450, 416), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.7, 0, 0, -.7, 0, 269.1).ss(5, 1, 1).p("EgnDgMfMBOHAAAIAAY/MhOHAAAg"), this.shape_3.setTransform(449.9896, 360, 1.4001, 1), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 98.4).ss(5, 1, 1).p("AuDAAIcHAA"), this.shape_4.setTransform(630, 0), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 98.4).ss(5, 1, 1).p("AuDAAIcHAA"), this.shape_5.setTransform(270, 0), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .9, 10.5, 0, .9, 10.5, 98.4).ss(5, 1, 1).p("AuDAAIcHAA"), this.shape_6.setTransform(450, 50), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .9, 10.5, 0, .9, 10.5, 98.4).ss(5, 1, 1).p("AuDAAIcHAA"), this.shape_7.setTransform(90, 50), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .9, 10.5, 0, .9, 10.5, 98.4).ss(5, 1, 1).p("AuDAAIcHAA"), this.shape_8.setTransform(810, 50), this.text = new cjs.Text("OR", "32px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 38, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(459, 147.1), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.OverUnderbooked, new cjs.Rectangle(-2.5, -2.5, 905, 445), null), (lib.Diagram7 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("Rule #3", "normal 700 25px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 30, this.text.lineWidth = 109, (this.text.parent = this).text.setTransform(673, 497), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.text_1 = new cjs.Text("Rule #2", "normal 700 25px 'Lato'", "#676767"), this.text_1.textAlign = "center", this.text_1.lineHeight = 30, this.text_1.lineWidth = 109, (this.text_1.parent = this).text_1.setTransform(195, 497), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(4, 1, 1).p("AqSCKQEZkTF5AAQF7AAEYET"), this.shape.setTransform(195.0375, 353.8375), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#8C659C").s().p("AJfAuIA0g7IA+hGIAdCngArRhTIA/BHIA0A6IiPAmg"), this.shape_1.setTransform(195, 368.975), this.txt = new cjs.Text("G", "normal 900 65px 'Lato'", "#676767"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 74, this.txt.lineWidth = 116, (this.txt.parent = this).txt.setTransform(289.15, 418.2, .6731, .6731), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.txt_1 = new cjs.Text("R", "normal 900 65px 'Lato'", "#676767"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 74, this.txt_1.lineWidth = 116, (this.txt_1.parent = this).txt_1.setTransform(100.7, 418.2, .6731, .6731), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#8C659C").ss(4, 1, 1).p("A5PF5IVDAAAENF5IVDAAA7VoaMA2rAAAIAAQ0Mg2rAAAg"), this.shape_2.setTransform(195, 435.85), this.txt_2 = new cjs.Text("O", "normal 900 65px 'Lato'", "#676767"), this.txt_2.name = "txt_2", this.txt_2.textAlign = "center", this.txt_2.lineHeight = 74, this.txt_2.lineWidth = 116, (this.txt_2.parent = this).txt_2.setTransform(800.2, 434, .673, .673), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_2)), this.txt_3 = new cjs.Text("R", "normal 900 65px 'Lato'", "#676767"), this.txt_3.name = "txt_3", this.txt_3.textAlign = "center", this.txt_3.lineHeight = 74, this.txt_3.lineWidth = 116, (this.txt_3.parent = this).txt_3.setTransform(545.85, 434, .673, .673), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_3)), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().s("#8C659C").ss(4, 1, 1).p("AK2CQISEAAA85CQISEAAAq1iPIVrAA"), this.shape_3.setTransform(673, 474.775), this.text_2 = new cjs.Text("4", "normal 400 64px 'Lato'", "#676767"), this.text_2.textAlign = "center", this.text_2.lineHeight = 73, this.text_2.lineWidth = 100, (this.text_2.parent = this).text_2.setTransform(788, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_2)), this.text_3 = new cjs.Text("3", "normal 400 64px 'Lato'", "#676767"), this.text_3.textAlign = "center", this.text_3.lineHeight = 73, this.text_3.lineWidth = 100, (this.text_3.parent = this).text_3.setTransform(558.6, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_3)), this.text_4 = new cjs.Text("2", "normal 400 64px 'Lato'", "#676767"), this.text_4.textAlign = "center", this.text_4.lineHeight = 73, this.text_4.lineWidth = 100, (this.text_4.parent = this).text_4.setTransform(329.3, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_4)), this.text_5 = new cjs.Text("1", "normal 400 64px 'Lato'", "#676767"), this.text_5.textAlign = "center", this.text_5.lineHeight = 73, this.text_5.lineWidth = 100, (this.text_5.parent = this).text_5.setTransform(100, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_5)), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAmIAAAIfQAAEhFXAAAIfQAAEghiAAAIfQAAACSAAIfQAA"), this.shape_4.setTransform(444, 0), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_4
            }, {
                t: this.text_5
            }, {
                t: this.text_4
            }, {
                t: this.text_3
            }, {
                t: this.text_2
            }, {
                t: this.shape_3
            }, {
                t: this.txt_3
            }, {
                t: this.txt_2
            }, {
                t: this.shape_2
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Diagram7, new cjs.Rectangle(-2.5, -2.5, 893, 529.8), null), (lib.Diagram6 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("OR", "normal 400 32px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 37, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(340.05, 302.1), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("AxZrIQHJmDJqAAQJnAAHJGBAEvNcIfQAAEgnDgHzMBOHAAAIAAY/MhOHAAAgEgj4ANcIfQAA"), this.shape.setTransform(340.025, 110), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#8C659C").s().p("APdBAIBWhTIBkhhIAuDpgAyWh0IBmBjIBVBRIjpA1g"), this.shape_1.setTransform(335.9, 40.525), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.text
            }]
        }).wait(1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#8C659C").ss(5, 1, 1).p("Eg1HgMfMBqPAAAIAAY/MhqPAAAgEgx0AIwIfQAAAvcIwIfPAAAS7IwIfRAA"), this.shape_2.setTransform(339.5, 499.95), this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Diagram6, new cjs.Rectangle(-3, -2.5, 685, 585), null), (lib.Diagram5 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("4", "normal 400 64px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 73, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(788, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.text_1 = new cjs.Text("3", "normal 400 64px 'Lato'", "#676767"), this.text_1.textAlign = "center", this.text_1.lineHeight = 73, this.text_1.lineWidth = 100, (this.text_1.parent = this).text_1.setTransform(558.6, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.text_2 = new cjs.Text("2", "normal 400 64px 'Lato'", "#676767"), this.text_2.textAlign = "center", this.text_2.lineHeight = 73, this.text_2.lineWidth = 100, (this.text_2.parent = this).text_2.setTransform(329.3, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_2)), this.text_3 = new cjs.Text("1", "normal 400 64px 'Lato'", "#676767"), this.text_3.textAlign = "center", this.text_3.lineHeight = 73, this.text_3.lineWidth = 100, (this.text_3.parent = this).text_3.setTransform(100, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_3)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAmIAAAIfQAAEhFXAAAIfQAAEghiAAAIfQAAACSAAIfQAA"), this.shape.setTransform(444, 0), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.text_3
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this.text_4 = new cjs.Text("Rule #3", "normal 700 25px 'Lato'", "#676767"), this.text_4.textAlign = "center", this.text_4.lineHeight = 30, this.text_4.lineWidth = 109, (this.text_4.parent = this).text_4.setTransform(673, 455), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_4)), this.text_5 = new cjs.Text("Rule #2", "normal 700 25px 'Lato'", "#676767"), this.text_5.textAlign = "center", this.text_5.lineHeight = 30, this.text_5.lineWidth = 109, (this.text_5.parent = this).text_5.setTransform(195, 455), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_5)), this.txt = new cjs.Text("G", "normal 900 65px 'Lato'", "#676767"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 74, this.txt.lineWidth = 116, (this.txt.parent = this).txt.setTransform(288.8, 375.5, .673, .673), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.txt_1 = new cjs.Text("R", "normal 900 65px 'Lato'", "#676767"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 74, this.txt_1.lineWidth = 116, (this.txt_1.parent = this).txt_1.setTransform(100.35, 375.5, .673, .673), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_1)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().s("#8C659C").ss(4, 1, 1).p("A5PF5IVDAAAENF5IVCAAAbWIaMg2rAAAIAAw0MA2rAAAg"), this.shape_1.setTransform(195, 393.85), this.txt_2 = new cjs.Text("O", "normal 900 65px 'Lato'", "#676767"), this.txt_2.name = "txt_2", this.txt_2.textAlign = "center", this.txt_2.lineHeight = 74, this.txt_2.lineWidth = 116, (this.txt_2.parent = this).txt_2.setTransform(800.2, 392.5, .673, .673), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_2)), this.txt_3 = new cjs.Text("R", "normal 900 65px 'Lato'", "#676767"), this.txt_3.name = "txt_3", this.txt_3.textAlign = "center", this.txt_3.lineHeight = 74, this.txt_3.lineWidth = 116, (this.txt_3.parent = this).txt_3.setTransform(545.85, 392.5, .673, .673), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_3)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#8C659C").ss(4, 1, 1).p("AK2CQISEAAA85CQISEAAAq1iPIVrAA"), this.shape_2.setTransform(673, 433.275), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.txt_3
            }, {
                t: this.txt_2
            }, {
                t: this.shape_1
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }, {
                t: this.text_5
            }, {
                t: this.text_4
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Diagram5, new cjs.Rectangle(-2.5, -2.5, 893, 487.8), null), (lib.Diagram4 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("OR", "normal 400 32px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 37, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(350, 297.1), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("Eg2rgonMBtXAAAIAAZAMhtXAAAgEgzjgTXIfQAAEgx/AooIfQAAEgSwAg0MAlgAAAAvnzXIfPAAEASwAooIfQAAAUUzXIfQAA"), this.shape.setTransform(350, 259.975), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.text
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Diagram4, new cjs.Rectangle(-2.5, -2.5, 705, 525), null), (lib.Diagram3 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("4", "normal 400 64px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 73, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(788, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.text_1 = new cjs.Text("3", "normal 400 64px 'Lato'", "#676767"), this.text_1.textAlign = "center", this.text_1.lineHeight = 73, this.text_1.lineWidth = 100, (this.text_1.parent = this).text_1.setTransform(558.6, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.text_2 = new cjs.Text("2", "normal 400 64px 'Lato'", "#676767"), this.text_2.textAlign = "center", this.text_2.lineHeight = 73, this.text_2.lineWidth = 100, (this.text_2.parent = this).text_2.setTransform(329.3, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_2)), this.text_3 = new cjs.Text("1", "normal 400 64px 'Lato'", "#676767"), this.text_3.textAlign = "center", this.text_3.lineHeight = 73, this.text_3.lineWidth = 100, (this.text_3.parent = this).text_3.setTransform(100, 22), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_3)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAmIAAAIfQAAEhFXAAAIfQAAEghiAAAIfQAAACSAAIfQAA"), this.shape.setTransform(444, 0), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.text_3
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this.txt = new cjs.Text("G", "normal 900 65px 'Lato'", "#676767"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 74, this.txt.lineWidth = 116, (this.txt.parent = this).txt.setTransform(537.75, 495.7, .673, .673), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.txt_1 = new cjs.Text("R", "normal 900 65px 'Lato'", "#676767"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 74, this.txt_1.lineWidth = 116, (this.txt_1.parent = this).txt_1.setTransform(349.35, 495.7, .673, .673), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_1)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().s("#8C659C").ss(4, 1, 1).p("A7VoaMA2rAAAIAAQ1Mg2rAAAgAENF5IVCAAA5PF5IVDAA"), this.shape_1.setTransform(444, 513.85), this.text_4 = new cjs.Text("Rule #2", "normal 700 25px 'Lato'", "#676767"), this.text_4.textAlign = "center", this.text_4.lineHeight = 30, this.text_4.lineWidth = 109, (this.text_4.parent = this).text_4.setTransform(444, 575), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_4)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_4
            }, {
                t: this.shape_1
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Diagram3, new cjs.Rectangle(-2.5, -2.5, 893, 607.8), null), (lib.Diagram2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("OR", "normal 400 32px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 37, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(355, 280.6), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("EgktgmHMBJbAAAIAAZAMhJbAAAgACSwjIfQAAEg3dAmIIfQAAEghigQjIfQAAA4NeJMAwbAAAEAYOAmIIfQAA"), this.shape.setTransform(355, 244.025), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.text
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Diagram2, new cjs.Rectangle(-2.5, -2.5, 715, 493.1), null), (lib.ModalDiagram9 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("F", "46px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 53, this.text.lineWidth = 43, (this.text.parent = this).text.setTransform(824.45, 661.3), this.text_1 = new cjs.Text("P", "46px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 53, this.text_1.lineWidth = 43, (this.text_1.parent = this).text_1.setTransform(577.55, 660.9), this.text_2 = new cjs.Text("C", "46px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 53, this.text_2.lineWidth = 43, (this.text_2.parent = this).text_2.setTransform(701, 472), this.shape = new cjs.Shape, this.shape.graphics.f().s("#000000").ss(5, 1, 1).p("AxqmGQgVhOgJhSQgJhJAAhMQAAnlFWlXQFXlWHkAAQHlAAFXFWQFWFXAAHlQAABMgIBJQgJBSgVBOQBKAdBHApQCGBNB1B1QFWFVAAHlQAAHllWFWQlXFXnlAAQlEAAkFiZQg7gjg4grQg2Arg8AjQkECZlFAAQnlAAlWlWQlXlXAAnlQAAnlFXlVQB1h1CGhNQBGgpBLgdQDHhPDoAAQFFAAEECaQA8AjA2AqQA4gqA7gjQEFiaFEAAQDoAADIBPQhNEjjjDjQh1B1iHBNQhGAphLAdQAVBOAJBSQAJBIAABMQAAHllWFXQg+A9hCAyQhAgyg+g+QlXlWAAnlQAAhMAJhJQAKhRAUhPQBMkiDkjjQA+g+BAgyQBCAyA+A+QDjDjBMEjQjIBOjnAAQjnAAjHhPQhLgdhGgpQiGhMh2h1QjjjjhMkjg"), this.shape.setTransform(701, 617), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#CCCCCC").s().p("ApIPSQg6gjg5grQBCgzA+g9QFWlWAAnlQAAhLgIhIQgKhTgVhNQBLgeBGgoQCGhOB1h1QDjjkBNkjQBLAeBGAoQCGBOB1B1QFWFWAAHlQAAHklWFWQlXFXnlAAQlDAAkFiZgAq7OEQhBgzg+g9QlXlWAAnkQAAhMAJhJQAJhSAVhOQBMkiDkjkQA+g+BBgyQBCAyA+A+QDjDkBMEjQjIBOjnAAQjoAAjHhPQDHBPDoAAQDnAADIhOQAVBNAKBTQAIBIAABLQAAHllWFWQg+A9hCAzIAAAAg"), this.shape_1.setTransform(771, 690.925), this.text_3 = new cjs.Text("F", "46px 'Arial'"), this.text_3.textAlign = "center", this.text_3.lineHeight = 53, this.text_3.lineWidth = 43, (this.text_3.parent = this).text_3.setTransform(567.45, 231.3), this.text_4 = new cjs.Text("P", "46px 'Arial'"), this.text_4.textAlign = "center", this.text_4.lineHeight = 53, this.text_4.lineWidth = 43, (this.text_4.parent = this).text_4.setTransform(320.55, 230.9), this.text_5 = new cjs.Text("C", "46px 'Arial'"), this.text_5.textAlign = "center", this.text_5.lineHeight = 53, this.text_5.lineWidth = 43, (this.text_5.parent = this).text_5.setTransform(444, 42), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#000000").ss(5, 1, 1).p("AxqmGQgVhOgJhTQgJhIAAhMQAAnlFWlXQFYlWHjAAQHkAAFYFWQFWFXAAHlQAABMgIBIQgJBTgVBNQhNEjjjDkQh1B0iHBOQhGAphLAdQAVBNAJBTQAJBIAABLQAAHmlWFXQg+A9hBAyQhCgyg9g+QlXlWAAnlQAAhMAJhIQAKhTAUhNQBMkjDkjjQA9g9BCgyQBBAyA+A9QDjDjBMEjQjIBOjnAAQjnAAjHhOQhLgehGgoQiHhOh1h0QjkjkhLkiQDHhPDoAAQFFAAEFCaQA6AiA4AsQA3gsA8giQEEiaFEAAQDoAADIBOQBKAeBHAoQCGBOB1B1QFWFWAAHkQAAHllWFWQlXFXnlAAQlEAAkEiZQg8gjg3grQg4Arg6AjQkFCZlFAAQnlAAlWlWQlXlXAAnmQAAnjFXlWQB1h1CGhOQBGgoBLgdg"), this.shape_2.setTransform(444, 187), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f("#CCCCCC").s().p("AmuREQBMkjDkjkQA+g+BBgxQBBAxA+A+QDjDkBNEjQjJBOjnAAQjnAAjHhOgACAI9Qg+g+hBgxQhBAxg+A+QjkDkhMEjQhLgehGgpQiGhNh1h1QjkjjhNkjQDIhPDoAAQFFAAEECaQA7AiA4AsQg4gsg7giQkEialFAAQjoAAjIBPQgUhOgJhTQgJhHAAhNQAAnkFXlWQFWlXHkAAQHlAAFXFXQFWFWAAHkQAABNgIBHQgJBTgVBOQjIhPjnAAQlFAAkECaQg8Aig3AsQA3gsA8giQEEiaFFAAQDnAADIBPQhNEjjjDjQh1B2iGBNQhHAphKAdQhNkjjjjkg"), this.shape_3.setTransform(444, 117), this.text_6 = new cjs.Text("F", "46px 'Arial'"), this.text_6.textAlign = "center", this.text_6.lineHeight = 53, this.text_6.lineWidth = 43, (this.text_6.parent = this).text_6.setTransform(310.45, 661.3), this.text_7 = new cjs.Text("P", "46px 'Arial'"), this.text_7.textAlign = "center", this.text_7.lineHeight = 53, this.text_7.lineWidth = 43, (this.text_7.parent = this).text_7.setTransform(63.55, 660.9), this.text_8 = new cjs.Text("C", "46px 'Arial'"), this.text_8.textAlign = "center", this.text_8.lineHeight = 53, this.text_8.lineWidth = 43, (this.text_8.parent = this).text_8.setTransform(187, 472), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().s("#000000").ss(5, 1, 1).p("AABjuQA4gqA7gjQEEiaFFAAQDnAADIBPQhNEjjjDjQh1B1iGBNQhHAphKAdQAUBOAKBSQAIBIAABMQAAHllWFXQg9A9hCAyQhCgyg9g+QlXlWAAnlQAAhMAJhJQAJhRAVhPQhLgdhHgpQiGhMh1h1QjkjjhMkjQDIhPDoAAQFFAAEFCaQA6AjA4AqQBCAyA9A+QDjDjBNEjQjIBOjoAAQjnAAjHhPQBMkiDkjjQA9g+BCgygAxrmGQgUhOgKhSQgIhJAAhMQAAnlFWlXQFYlWHjAAQHkAAFYFWQFWFXAAHlQAABMgIBJQgJBSgVBOQBKAdBHApQCGBNB1B1QFWFVAAHlQAAHllWFWQlXFXnkAAQlFAAkEiZQg7gjg4grQg4Arg6AjQkFCZlFAAQnlAAlWlWQlXlXAAnlQAAnlFXlVQB1h1CGhNQBGgpBKgdg"), this.shape_4.setTransform(187, 617), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f("#CCCCCC").s().p("AszP5Qg7gjg4grQBCgzA9g8QFXlXAAnlQAAhLgJhIQgJhSgVhOQBLgeBGgoQCHhNB1h2QDijkBNkiQhNEijiDkQh1B2iHBNQhGAohLAeQhMkjjkjkQg9g+hCgxQA4gsA7giQEFiaFEAAQDoAADHBPQBKAdBHAoQCGBOB1B1QFWFWAAHkQAAHllWFWQlXFXnkAAQlEAAkFiZg"), this.shape_5.setTransform(280.525, 687), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.text_8
            }, {
                t: this.text_7
            }, {
                t: this.text_6
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.text_5
            }, {
                t: this.text_4
            }, {
                t: this.text_3
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.ModalDiagram9, new cjs.Rectangle(-2.5, -2.5, 893, 809), null), (lib.ModalDiagram8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("R", "46px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 53, this.text.lineWidth = 43, (this.text.parent = this).text.setTransform(824.45, 661.3), this.text_1 = new cjs.Text("L", "46px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 53, this.text_1.lineWidth = 43, (this.text_1.parent = this).text_1.setTransform(577.55, 660.9), this.text_2 = new cjs.Text("P", "46px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 53, this.text_2.lineWidth = 43, (this.text_2.parent = this).text_2.setTransform(701, 472), this.shape = new cjs.Shape, this.shape.graphics.f().s("#000000").ss(5, 1, 1).p("AxqmGQgVhOgJhSQgJhJAAhMQAAnlFWlXQFXlWHkAAQHlAAFXFWQFWFXAAHlQAABMgIBJQgJBSgVBOQBKAdBHApQCGBNB1B1QFWFVAAHlQAAHllWFWQlXFXnlAAQlEAAkFiZQg7gjg4grQg2Arg8AjQkECZlFAAQnlAAlWlWQlXlXAAnlQAAnlFXlVQB1h1CGhNQBGgpBLgdQDHhPDoAAQFFAAEECaQA8AjA2AqQA4gqA7gjQEFiaFEAAQDoAADIBPQhNEjjjDjQh1B1iHBNQhGAphLAdQAVBOAJBSQAJBIAABMQAAHllWFXQg+A9hCAyQhAgyg+g+QlXlWAAnlQAAhMAJhJQAKhRAUhPQBMkiDkjjQA+g+BAgyQBCAyA+A+QDjDjBMEjQjIBOjnAAQjnAAjHhPQhLgdhGgpQiGhMh2h1QjjjjhMkjg"), this.shape.setTransform(701, 617), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#CCCCCC").s().p("As6MUQlXlXAAnkQAAnkFXlXQB1h0CGhOQBGgpBLgdQBMEjDjDkQB1B1CFBNQBHAoBLAeQDHBODoABQDnAADIhPQAVBOAKBTQAIBHAABMQAAHklWFXQg+A9hCAzQhBgzg+g+QlXlWAAnkQAAhLAJhJQAJhSAVhOQgVBOgJBSQgJBJAABLQAAHkFXFWQA+A+BBAzQg4Arg6AiQkFCalFgBQnjAAlXlWg"), this.shape_1.setTransform(631, 690.95), this.text_3 = new cjs.Text("R", "46px 'Arial'"), this.text_3.textAlign = "center", this.text_3.lineHeight = 53, this.text_3.lineWidth = 43, (this.text_3.parent = this).text_3.setTransform(310.45, 661.3), this.text_4 = new cjs.Text("L", "46px 'Arial'"), this.text_4.textAlign = "center", this.text_4.lineHeight = 53, this.text_4.lineWidth = 43, (this.text_4.parent = this).text_4.setTransform(63.55, 660.9), this.text_5 = new cjs.Text("P", "46px 'Arial'"), this.text_5.textAlign = "center", this.text_5.lineHeight = 53, this.text_5.lineWidth = 43, (this.text_5.parent = this).text_5.setTransform(187, 472), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#000000").ss(5, 1, 1).p("AxrmGQDIhPDoAAQFFAAEFCaQA6AjA4AqQA4gqA7gjQEEiaFFAAQDnAADIBPQhNEjjjDjQh1B1iGBNQhHAphKAdQAUBOAKBSQAIBIAABMQAAHllWFXQg9A9hCAyQhCgyg9g+QlXlWAAnlQAAhMAJhJQAJhRAVhPQhLgdhHgpQiGhMh1h1QjkjjhMkjQgUhOgKhSQgIhJAAhMQAAnlFWlXQFYlWHjAAQHkAAFYFWQFWFXAAHlQAABMgIBJQgJBSgVBOQBKAdBHApQCGBNB1B1QFWFVAAHlQAAHllWFWQlXFXnkAAQlFAAkEiZQg7gjg4grQg4Arg6AjQkFCZlFAAQnlAAlWlWQlXlXAAnlQAAnlFXlVQB1h1CGhNQBGgpBKgdgAABjuQBCAyA9A+QDjDjBNEjQjIBOjoAAQjnAAjHhPQBMkiDkjjQA9g+BCgyg"), this.shape_2.setTransform(187, 617), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f("#CCCCCC").s().p("AB/JkQg8g+hDgxQA4gsA7giQEFiaFEAAQDoAADIBPQjIhPjoAAQlEAAkFCaQg7Aig4AsQg3gsg6giQkFialFAAQjoAAjHBPQgVhOgKhSQgIhJAAhMQAAnjFWlYQFYlWHjAAQHkAAFYFWQFWFYAAHjQAABMgIBJQgKBSgUBOQhNEijjDkQh1B2iHBNQhGAohLAeQhMkjjkjkg"), this.shape_3.setTransform(187, 543.1), this.text_6 = new cjs.Text("R", "46px 'Arial'"), this.text_6.textAlign = "center", this.text_6.lineHeight = 53, this.text_6.lineWidth = 43, (this.text_6.parent = this).text_6.setTransform(567.45, 231.3), this.text_7 = new cjs.Text("L", "46px 'Arial'"), this.text_7.textAlign = "center", this.text_7.lineHeight = 53, this.text_7.lineWidth = 43, (this.text_7.parent = this).text_7.setTransform(320.55, 230.9), this.text_8 = new cjs.Text("P", "46px 'Arial'"), this.text_8.textAlign = "center", this.text_8.lineHeight = 53, this.text_8.lineWidth = 43, (this.text_8.parent = this).text_8.setTransform(444, 42), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().s("#000000").ss(5, 1, 1).p("AxqmGQgVhOgJhTQgJhIAAhMQAAnlFWlXQFYlWHjAAQHkAAFYFWQFWFXAAHlQAABMgIBIQgJBTgVBNQhNEjjjDkQh1B0iHBOQhGAphLAdQAVBNAJBTQAJBIAABLQAAHmlWFXQg+A9hBAyQhCgyg9g+QlXlWAAnlQAAhMAJhIQAKhTAUhNQBMkjDkjjQA9g9BCgyQBBAyA+A9QDjDjBMEjQjIBOjnAAQjnAAjHhOQhLgehGgoQiHhOh1h0QjkjkhLkiQDHhPDoAAQFFAAEFCaQA6AiA4AsQA3gsA8giQEEiaFEAAQDoAADIBOQBKAeBHAoQCGBOB1B1QFWFWAAHkQAAHllWFWQlXFXnlAAQlEAAkEiZQg8gjg3grQg4Arg6AjQkFCZlFAAQnlAAlWlWQlXlXAAnmQAAnjFXlWQB1h1CGhOQBGgoBLgdg"), this.shape_4.setTransform(444, 187), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f("#CCCCCC").s().p("AB0P5Qg8gjg3grQBBgyA+g9QFWlXAAnlQAAhLgJhIQgJhSgUhOQBKgdBHgpQCGhNB1h2QDjjjBNkjQhNEjjjDjQh1B2iGBNQhHAphKAdQjJBOjnAAQjnAAjHhOQBMkjDkjkQA+g+BBgxQBBAxA+A+QDjDkBNEjQhNkjjjjkQg+g+hBgxQhBAxg+A+QjkDkhMEjQhLgehGgpQiGhNh1h1QjkjjhNkjQBNEjDkDjQB1B1CGBNQBGApBLAeQgUBNgKBTQgJBIAABLQAAHlFXFWQA+A9BBAzQg4Arg7AjQkECZlFAAQnkAAlXlWQlXlXAAnlQAAnkFXlWQB1h1CGhNQBGgpBKgdQDIhPDoAAQFFAAEECaQA7AiA4AsQA3gsA8giQEEiaFFAAQDnAADIBPQBLAdBGApQCGBNB1B1QFWFXAAHjQAAHllWFWQlXFXnkAAQlFAAkEiZgAABOrQhBgzg+g9QlXlWAAnlQAAhLAJhIQAKhTAUhNQDHBODnAAQDnAADJhOQAUBOAJBSQAJBIAABLQAAHllWFXQg+A9hBAyIAAAAgAGwkzIAAAAgAmukzIAAAAg"), this.shape_5.setTransform(444, 257), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.text_8
            }, {
                t: this.text_7
            }, {
                t: this.text_6
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.text_5
            }, {
                t: this.text_4
            }, {
                t: this.text_3
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.ModalDiagram8, new cjs.Rectangle(-2.5, -2.5, 893, 809), null), (lib.ModalDiagram7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("B", "46px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 53, this.text.lineWidth = 43, (this.text.parent = this).text.setTransform(824.45, 661.3), this.text_1 = new cjs.Text("M", "46px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 53, this.text_1.lineWidth = 43, (this.text_1.parent = this).text_1.setTransform(577.55, 660.9), this.text_2 = new cjs.Text("P", "46px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 53, this.text_2.lineWidth = 43, (this.text_2.parent = this).text_2.setTransform(701, 472), this.shape = new cjs.Shape, this.shape.graphics.f().s("#000000").ss(5, 1, 1).p("AxqmGQgVhOgJhSQgJhJAAhMQAAnlFWlXQFXlWHkAAQHlAAFXFWQFWFXAAHlQAABMgIBJQgJBSgVBOQBKAdBHApQCGBNB1B1QFWFVAAHlQAAHllWFWQlXFXnlAAQlEAAkFiZQg7gjg4grQhAgyg+g+QlXlWAAnlQAAhMAJhJQAKhRAUhPQBMkiDkjjQA+g+BAgyQBCAyA+A+QDjDjBMEjQAVBOAJBSQAJBIAABMQAAHllWFXQg+A9hCAyQg2Arg8AjQkECZlFAAQnlAAlWlWQlXlXAAnlQAAnlFXlVQB1h1CGhNQBGgpBLgdQDHhPDoAAQFFAAEECaQA8AjA2AqQA4gqA7gjQEFiaFEAAQDoAADIBPQhNEjjjDjQh1B1iHBNQhGAphLAdQjIBOjnAAQjnAAjHhPQhLgdhGgpQiGhMh2h1QjjjjhMkjg"), this.shape.setTransform(701, 617), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#CCCCCC").s().p("ACAJkQg+g+hCgxQhAAxg+A+QjkDkhMEjQhLgehHgoQiGhNh1h2QjjjjhMkjQDHhPDoAAQFFAAEFCaQA6AiA3AsQA5gsA6giQEFiaFEAAQDoAADIBPQjIhPjoAAQlEAAkFCaQg6Aig5AsQg3gsg6giQkFialFAAQjoAAjHBPQgVhOgKhSQgIhJAAhMQAAnjFWlYQFYlWHjAAQHkAAFYFWQFWFYAAHjQAABMgIBJQgKBSgUBOQhNEijjDkQh1B2iHBNQhGAohLAeQhMkjjjjkg"), this.shape_1.setTransform(701, 543.1), this.text_3 = new cjs.Text("B", "46px 'Arial'"), this.text_3.textAlign = "center", this.text_3.lineHeight = 53, this.text_3.lineWidth = 43, (this.text_3.parent = this).text_3.setTransform(310.45, 661.3), this.text_4 = new cjs.Text("M", "46px 'Arial'"), this.text_4.textAlign = "center", this.text_4.lineHeight = 53, this.text_4.lineWidth = 43, (this.text_4.parent = this).text_4.setTransform(63.55, 660.9), this.text_5 = new cjs.Text("P", "46px 'Arial'"), this.text_5.textAlign = "center", this.text_5.lineHeight = 53, this.text_5.lineWidth = 43, (this.text_5.parent = this).text_5.setTransform(187, 472), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#000000").ss(5, 1, 1).p("AxrmGQDIhPDoAAQFFAAEFCaQA6AjA4AqQA4gqA7gjQEEiaFFAAQDnAADIBPQBKAdBHApQCGBNB1B1QFWFVAAHlQAAHllWFWQlXFXnkAAQlFAAkEiZQg7gjg4grQg4Arg6AjQkFCZlFAAQnlAAlWlWQlXlXAAnlQAAnlFXlVQB1h1CGhNQBGgpBKgdQgUhOgKhSQgIhJAAhMQAAnlFWlXQFYlWHjAAQHkAAFYFWQFWFXAAHlQAABMgIBJQgJBSgVBOQhNEjjjDjQh1B1iGBNQhHAphKAdQAUBOAKBSQAIBIAABMQAAHllWFXQg9A9hCAyQhCgyg9g+QlXlWAAnlQAAhMAJhJQAJhRAVhPQhLgdhHgpQiGhMh1h1QjkjjhMkjgAGwGIQjIBOjoAAQjnAAjHhPQBMkiDkjjQA9g+BCgyQBCAyA9A+QDjDjBNEjg"), this.shape_2.setTransform(187, 617), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f("#CCCCCC").s().p("ApPM8QlXlXAAnlQAAnjFXlXQB1h1CGhOQBGgoBKgdQBMEjDjDjQB1B2CGBNQBHAoBLAeQgVBNgJBSQgJBJAABLQAAHlFXFWQA9A+BCAyQg4Arg7AjQkECZlFAAQnkAAlWlWgAH4kzQhLgehHgoQiGhNh1h2QjjjjhMkjQDHhPDoAAQFFAAEECaQA7AiA4AsQhCAxg9A+QjkDkhMEjIAAAAgAjExCIAAAAg"), this.shape_3.setTransform(93.525, 687), this.text_6 = new cjs.Text("B", "46px 'Arial'"), this.text_6.textAlign = "center", this.text_6.lineHeight = 53, this.text_6.lineWidth = 43, (this.text_6.parent = this).text_6.setTransform(567.45, 231.3), this.text_7 = new cjs.Text("M", "46px 'Arial'"), this.text_7.textAlign = "center", this.text_7.lineHeight = 53, this.text_7.lineWidth = 43, (this.text_7.parent = this).text_7.setTransform(320.55, 230.9), this.text_8 = new cjs.Text("P", "46px 'Arial'"), this.text_8.textAlign = "center", this.text_8.lineHeight = 53, this.text_8.lineWidth = 43, (this.text_8.parent = this).text_8.setTransform(444, 42), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().s("#000000").ss(5, 1, 1).p("AxqmGQgVhOgJhTQgJhIAAhMQAAnlFWlXQFYlWHjAAQHkAAFYFWQFWFXAAHlQAABMgIBIQgJBTgVBNQhNEjjjDkQh1B0iHBOQhGAphLAdQAVBNAJBTQAJBIAABLQAAHmlWFXQg+A9hBAyQhCgyg9g+QlXlWAAnlQAAhMAJhIQAKhTAUhNQBMkjDkjjQA9g9BCgyQBBAyA+A9QDjDjBMEjQjIBOjnAAQjnAAjHhOQhLgehGgoQiHhOh1h0QjkjkhLkiQDHhPDoAAQFFAAEFCaQA6AiA4AsQA3gsA8giQEEiaFEAAQDoAADIBOQBKAeBHAoQCGBOB1B1QFWFWAAHkQAAHllWFWQlXFXnlAAQlEAAkEiZQg8gjg3grQg4Arg6AjQkFCZlFAAQnlAAlWlWQlXlXAAnmQAAnjFXlWQB1h1CGhOQBGgoBLgdg"), this.shape_4.setTransform(444, 187), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f("#CCCCCC").s().p("AszP5Qg7gjg4grQBCgyA9g9QFXlXAAnlQAAhLgJhIQgJhSgVhOQBLgdBGgpQCHhNB1h2QDijjBNkjQhNEjjiDjQh1B2iHBNQhGAphLAdQhMkjjkjkQg9g+hCgxQA4gsA7giQEFiaFEAAQDoAADHBPQBKAdBHApQCGBNB1B1QFWFXAAHjQAAHllWFWQlXFXnkAAQlEAAkFiZg"), this.shape_5.setTransform(537.525, 257), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.text_8
            }, {
                t: this.text_7
            }, {
                t: this.text_6
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.text_5
            }, {
                t: this.text_4
            }, {
                t: this.text_3
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.ModalDiagram7, new cjs.Rectangle(-2.5, -2.5, 893, 809), null), (lib.ModalDiagram6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("P", "bold 40px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 47, this.text.lineWidth = 43, (this.text.parent = this).text.setTransform(691.55, 704), this.text_1 = new cjs.Text("R", "bold 40px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 47, this.text_1.lineWidth = 43, (this.text_1.parent = this).text_1.setTransform(500.55, 674), this.text_2 = new cjs.Text("D", "bold 40px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 47, this.text_2.lineWidth = 43, (this.text_2.parent = this).text_2.setTransform(558.65, 452), this.shape = new cjs.Shape, this.shape.graphics.f().s("#000000").ss(5, 1, 1).p("AyFmyQgIhJAAhMQAAniFVlXQFWlVHiAAQHkAAFVFVQFVFXAAHiQAABMgHBJQCFBMB1B2QFVFUAAHjQAAHjlVFWQlWFWnjAAQlEAAkEiZQkDCZlEAAQniAAlWlWQlWlWAAnjQAAnjFWlUQB1h2CFhMQEBiVE9AAQFEAAEDCaQEEiaFEAAQE9AAECCVQguGFkgEeQh0B1iGBNQAJBJAABLQAAHjlWFWQhxBxiBBMQiAhMhwhxQlXlWAAnjQAAhLAJhJQiFhNh1h1QkgkegtmFgAAAmtQCBBLBxByQEgEeAtGFQkBCUk+AAQk9AAkBiUQAtmFEhkeQBwhyCAhLg"), this.shape.setTransform(625, 585), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#CCCCCC").s().p("ADyGgQhxhyiBhLQiABLhxByQkgEggtGEQiFhNh1h0QkgkggtmFQEBiUE9AAQFFAAECCZQkCiZlFAAQk9AAkBCUQgJhIAAhMQAAniFWlWQFWlWHiAAQHjAAFXFWQFVFWAAHiQgBBMgHBIQkCiUk9AAQlEAAkECZQEEiZFEAAQE9AAECCUQguGFkfEgQh1B0iGBOQgtmFkgkgg"), this.shape_1.setTransform(625, 519.275), this.text_3 = new cjs.Text("P", "bold 40px 'Arial'"), this.text_3.textAlign = "center", this.text_3.lineHeight = 47, this.text_3.lineWidth = 43, (this.text_3.parent = this).text_3.setTransform(241.55, 704), this.text_4 = new cjs.Text("R", "bold 40px 'Arial'"), this.text_4.textAlign = "center", this.text_4.lineHeight = 47, this.text_4.lineWidth = 43, (this.text_4.parent = this).text_4.setTransform(50.55, 674), this.text_5 = new cjs.Text("D", "bold 40px 'Arial'"), this.text_5.textAlign = "center", this.text_5.lineHeight = 47, this.text_5.lineWidth = 43, (this.text_5.parent = this).text_5.setTransform(108.65, 452), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#000000").ss(5, 1, 1).p("AABmtQCABLBxByQEfEeAuGFQAJBJAABLQAAHjlWFWQhxBxiABMQiAhMhyhxQlWlWAAnjQAAhLAJhJQiFhNh1h1QkgkegtmFQgJhJAAhMQAAniFWlXQFWlVHiAAQHjAAFXFVQFUFXAAHiQAABMgHBJQCFBMB1B2QFVFUAAHjQAAHjlVFWQlWFWnjAAQlEAAkDiZQkDCZlFAAQnjAAlVlWQlWlWAAnjQAAnjFWlUQB0h2CGhMQEBiVE9AAQFFAAEDCaQEDiaFEAAQE9AAECCVQguGFkfEeQh1B1iGBNQkBCUk+AAQk9AAkBiUQAtmFEgkeQByhyCAhLg"), this.shape_2.setTransform(175, 585), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f("#CCCCCC").s().p("AkmP2QiChMhxhxQlVlWgBnjQAAhLAJhIQAtmFEgkgQBxhxCChLQCABLBxBxQEfEgAtGFQAJBIAABLQAAHjlVFWQhxBxiABMQCAhMBxhxQFVlWAAnjQAAhLgJhIQCGhNB1h1QEfkgAumFQCFBNB1B1QFVFWAAHiQAAHjlVFWQlWFWnjAAQlDAAkDiZgAknAAQE9AAEBiTQkBCTk9AAQk+AAkBiTQEBCTE+AAgAxglVQkgkggtmFQEBiUE9AAQFFAAEECaQiCBLhxBxQkgEggtGFQiFhNh1h1g"), this.shape_3.setTransform(204.6, 643.325), this.text_6 = new cjs.Text("P", "bold 40px 'Arial'"), this.text_6.textAlign = "center", this.text_6.lineHeight = 47, this.text_6.lineWidth = 43, (this.text_6.parent = this).text_6.setTransform(466.55, 294), this.text_7 = new cjs.Text("R", "bold 40px 'Arial'"), this.text_7.textAlign = "center", this.text_7.lineHeight = 47, this.text_7.lineWidth = 43, (this.text_7.parent = this).text_7.setTransform(275.55, 264), this.text_8 = new cjs.Text("D", "bold 40px 'Arial'"), this.text_8.textAlign = "center", this.text_8.lineHeight = 47, this.text_8.lineWidth = 43, (this.text_8.parent = this).text_8.setTransform(333.65, 42), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().s("#000000").ss(5, 1, 1).p("AyFmzQgIhIAAhMQAAnjFVlWQFWlVHiAAQHkAAFWFVQFUFWAAHjQAABMgHBIQCFBOB1B0QFVFVAAHjQAAHjlVFWQlWFWnjAAQlEAAkDiZQiBhMhwhxQlXlWAAnjQAAhLAKhJQAtmEEgkgQBwhxCBhLQEDiaFEAAQE9AAECCUQguGFkfEgQh1B0iGBOQkBCTk+AAQk9AAkAiUQiGhNh1h0QkgkggtmFQEBiUE9AAQFFAAEDCaQCABLBxBxQEfEgAuGFQAJBIAABLQAAHjlWFWQhxBxiABMQkDCZlFAAQniAAlWlWQlWlWAAnjQAAnjFWlVQB1h0CFhOg"), this.shape_4.setTransform(400, 175), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f("#CCCCCC").s().p("AkiY9QCAhMBxhxQFVlVAAnkQAAhLgJhJQCGhNB1h0QEfkgAumEQguGEkfEgQh1B0iGBNQgtmEkfkgQhxhxiAhLQEDiaFDAAQE+ABEBCUQkBiUk+gBQlDAAkDCaQkEialEAAQk+ABkBCUQgIhJAAhMQAAniFVlXQFWlVHjAAQHjAAFWFVQFVFXAAHiQAABMgIBJQCFBMB1B1QFVFVAAHjQAAHklVFVQlWFWnjAAQlDAAkDiZg"), this.shape_5.setTransform(429.175, 175), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.text_8
            }, {
                t: this.text_7
            }, {
                t: this.text_6
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.text_5
            }, {
                t: this.text_4
            }, {
                t: this.text_3
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.ModalDiagram6, new cjs.Rectangle(-2.5, -2.5, 805, 765), null), (lib.ModalDiagram5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("M", "bold 40px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 47, this.text.lineWidth = 43, (this.text.parent = this).text.setTransform(691.55, 704), this.text_1 = new cjs.Text("H", "bold 40px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 47, this.text_1.lineWidth = 43, (this.text_1.parent = this).text_1.setTransform(500.55, 674), this.text_2 = new cjs.Text("B", "bold 40px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 47, this.text_2.lineWidth = 43, (this.text_2.parent = this).text_2.setTransform(558.65, 452), this.shape = new cjs.Shape, this.shape.graphics.f().s("#000000").ss(5, 1, 1).p("AyFmyQgIhJAAhMQAAniFVlXQFWlVHiAAQHkAAFVFVQFVFXAAHiQAABMgHBJQCFBMB1B2QFVFUAAHjQAAHjlVFWQlWFWnjAAQlEAAkEiZQkDCZlEAAQniAAlWlWQlWlWAAnjQAAnjFWlUQB1h2CFhMQEBiVE9AAQFEAAEDCaQEEiaFEAAQE9AAECCVQguGFkgEeQh0B1iGBNQAJBJAABLQAAHjlWFWQhxBxiBBMQiAhMhwhxQlXlWAAnjQAAhLAJhJQiFhNh1h1QkgkegtmFgAAAmtQCBBLBxByQEgEeAtGFQkBCUk+AAQk9AAkBiUQAtmFEhkeQBwhyCAhLg"), this.shape.setTransform(625, 585), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#CCCCCC").s().p("AjxM4QlVlVgBnjQAAhLAJhJQEBCUE9AAQE+AAEBiTQAJBIAABLQAAHjlWFVQhxByiBBLQiAhLhxhygAo+iUQAtmEEgkgQBxhyCAhLQCBBLBxByQEgEgAtGFQkBCTk+AAQk9AAkBiUgAI/iTIAAAAg"), this.shape_1.setTransform(625, 643.35), this.text_3 = new cjs.Text("M", "bold 40px 'Arial'"), this.text_3.textAlign = "center", this.text_3.lineHeight = 47, this.text_3.lineWidth = 43, (this.text_3.parent = this).text_3.setTransform(241.55, 704), this.text_4 = new cjs.Text("H", "bold 40px 'Arial'"), this.text_4.textAlign = "center", this.text_4.lineHeight = 47, this.text_4.lineWidth = 43, (this.text_4.parent = this).text_4.setTransform(50.55, 674), this.text_5 = new cjs.Text("B", "bold 40px 'Arial'"), this.text_5.textAlign = "center", this.text_5.lineHeight = 47, this.text_5.lineWidth = 43, (this.text_5.parent = this).text_5.setTransform(108.65, 452), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#000000").ss(5, 1, 1).p("AABmtQCABLBxByQEfEeAuGFQAJBJAABLQAAHjlWFWQhxBxiABMQiAhMhyhxQlWlWAAnjQAAhLAJhJQiFhNh1h1QkgkegtmFQgJhJAAhMQAAniFWlXQFWlVHiAAQHjAAFXFVQFUFXAAHiQAABMgHBJQCFBMB1B2QFVFUAAHjQAAHjlVFWQlWFWnjAAQlEAAkDiZQkDCZlFAAQnjAAlVlWQlWlWAAnjQAAnjFWlUQB0h2CGhMQEBiVE9AAQFFAAEDCaQEDiaFEAAQE9AAECCVQguGFkfEeQh1B1iGBNQkBCUk+AAQk9AAkBiUQAtmFEgkeQByhyCAhLg"), this.shape_2.setTransform(175, 585), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f("#CCCCCC").s().p("As4ODQkgkggtmFQEBiUE9AAQFFAAEDCZQkDiZlFAAQk9AAkBCUQgJhIAAhMQAAniFWlWQFWlVHiAAQHjAAFXFVQFVFWAAHiQgBBMgHBIQkCiUk9AAQlEAAkDCZQiBBLhxByQkgEggtGEQiFhMh1h1g"), this.shape_3.setTransform(175, 519.25), this.text_6 = new cjs.Text("M", "bold 40px 'Arial'"), this.text_6.textAlign = "center", this.text_6.lineHeight = 47, this.text_6.lineWidth = 43, (this.text_6.parent = this).text_6.setTransform(466.55, 294), this.text_7 = new cjs.Text("H", "bold 40px 'Arial'"), this.text_7.textAlign = "center", this.text_7.lineHeight = 47, this.text_7.lineWidth = 43, (this.text_7.parent = this).text_7.setTransform(275.55, 264), this.text_8 = new cjs.Text("B", "bold 40px 'Arial'"), this.text_8.textAlign = "center", this.text_8.lineHeight = 47, this.text_8.lineWidth = 43, (this.text_8.parent = this).text_8.setTransform(333.65, 42), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().s("#000000").ss(5, 1, 1).p("AyFmzQgIhIAAhMQAAnjFVlWQFWlVHiAAQHkAAFWFVQFUFWAAHjQAABMgHBIQCFBOB1B0QFVFVAAHjQAAHjlVFWQlWFWnjAAQlEAAkDiZQiBhMhwhxQlXlWAAnjQAAhLAKhJQAtmEEgkgQBwhxCBhLQEDiaFEAAQE9AAECCUQguGFkfEgQh1B0iGBOQkBCTk+AAQk9AAkAiUQiGhNh1h0QkgkggtmFQEBiUE9AAQFFAAEDCaQCABLBxBxQEfEgAuGFQAJBIAABLQAAHjlWFWQhxBxiABMQkDCZlFAAQniAAlWlWQlWlWAAnjQAAnjFWlVQB1h0CFhOg"), this.shape_4.setTransform(400, 175), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f("#CCCCCC").s().p("AtiGzQAtmEEgkfQBxhyCBhLQEEiZFDAAQE9AAECCUQguGFkfEfQh1B0iGBOQgtmFkfkfQhxhyiBhLQCBBLBxByQEfEfAtGFQkBCTk9AAQk+AAkBiUg"), this.shape_5.setTransform(429.2, 174.975), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.text_8
            }, {
                t: this.text_7
            }, {
                t: this.text_6
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.text_5
            }, {
                t: this.text_4
            }, {
                t: this.text_3
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.ModalDiagram5, new cjs.Rectangle(-2.5, -2.5, 805, 765), null), (lib.ModalDiagram4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("C", "bold 40px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 47, this.text.lineWidth = 43, (this.text.parent = this).text.setTransform(736.55, 658), this.text_1 = new cjs.Text("F", "bold 40px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 47, this.text_1.lineWidth = 43, (this.text_1.parent = this).text_1.setTransform(513.55, 658), this.text_2 = new cjs.Text("M", "bold 40px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 47, this.text_2.lineWidth = 43, (this.text_2.parent = this).text_2.setTransform(568.55, 462), this.text_3 = new cjs.Text("C", "bold 40px 'Arial'"), this.text_3.textAlign = "center", this.text_3.lineHeight = 47, this.text_3.lineWidth = 43, (this.text_3.parent = this).text_3.setTransform(286.55, 658), this.text_4 = new cjs.Text("F", "bold 40px 'Arial'"), this.text_4.textAlign = "center", this.text_4.lineHeight = 47, this.text_4.lineWidth = 43, (this.text_4.parent = this).text_4.setTransform(63.55, 658), this.text_5 = new cjs.Text("M", "bold 40px 'Arial'"), this.text_5.textAlign = "center", this.text_5.lineHeight = 47, this.text_5.lineWidth = 43, (this.text_5.parent = this).text_5.setTransform(118.55, 462), this.text_6 = new cjs.Text("C", "bold 40px 'Arial'"), this.text_6.textAlign = "center", this.text_6.lineHeight = 47, this.text_6.lineWidth = 43, (this.text_6.parent = this).text_6.setTransform(485.55, 265), this.text_7 = new cjs.Text("F", "bold 40px 'Arial'"), this.text_7.textAlign = "center", this.text_7.lineHeight = 47, this.text_7.lineWidth = 43, (this.text_7.parent = this).text_7.setTransform(288.55, 248), this.text_8 = new cjs.Text("M", "bold 40px 'Arial'"), this.text_8.textAlign = "center", this.text_8.lineHeight = 47, this.text_8.lineWidth = 43, (this.text_8.parent = this).text_8.setTransform(343.55, 52), this.shape = new cjs.Shape, this.shape.graphics.f().s("#000000").ss(5, 1, 1).p("AyFmyQgIhJAAhMQAAniFVlWQFWlWHiAAQHkAAFVFWQFWFWAAHiQAABMgIBJQCFBNB1B1QFVFUAAHkQAAHjlVFVQlWFWnjAAQlEAAkEiZQkDCZlDAAQnjAAlWlWQlWlVAAnjQAAnkFWlUQB1h1CFhNQEBiVE+AAQFDAAEDCaQEEiaFEAAQE9AAECCVQguGFkgEeQh0B1iGBOQAJBIAABMQAAHjlWFVQhxBxiBBMQh/hMhxhxQlWlVAAnjQAAhMAIhJQiFhNh1h1QkgkegtmFgAAAmtQCBBLBxByQEgEeAtGGQkBCUk+AAQk9AAkBiVQAtmFEhkeQBxhyB/hLg"), this.shape.setTransform(625, 585), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#CCCCCC").s().p("AxcWAQlVlVgBnkQABnjFVlUQB1h1CGhNQAsGFEhEeQB0B1CGBNQgJBJABBLQAAHkFUFVQByByCABLQkECZlCAAQnkAAlWlWgAkaGzQiGhNh0h1QkhkegsmFQEAiUE/AAQFCAAEECZQkEiZlCAAQk/AAkACUQgJhJAAhLQAAnjFWlWQFWlWHhAAQHkAAFWFWQFVFWAAHjQAABLgIBJQkBiUk+AAQlDAAkECZQiABLhyByQkfEfgtGEIAAAAgAthmyIAAAAg"), this.shape_1.setTransform(595.85, 585), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#000000").ss(5, 1, 1).p("AABmtQCABLBxByQEfEeAuGGQAJBIAABMQAAHjlWFVQhxBxiABMQiAhMhyhxQlWlVAAnjQAAhMAJhJQiFhNh1h1QkgkegtmFQgJhJAAhMQAAniFWlWQFWlWHiAAQHjAAFXFWQFUFWAAHiQAABMgHBJQCFBNB1B1QFVFUAAHkQAAHjlVFVQlWFWnjAAQlEAAkDiZQkDCZlFAAQnjAAlVlWQlWlVAAnjQAAnkFWlUQB0h1CGhNQEBiVE9AAQFFAAEDCaQEDiaFEAAQE9AAECCVQguGFkfEeQh1B1iGBOQkBCUk+AAQk9AAkBiVQAtmFEgkeQByhyCAhLg"), this.shape_2.setTransform(175, 585), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f("#CCCCCC").s().p("AkiY9QCAhLBxhyQFVlVAAnkQAAhLgJhIQCGhOB1h1QEfkeAumFQguGFkfEeQh1B1iGBOQgtmFkfkfQhxhyiAhLQEDiZFDAAQE+AAEBCUQkBiUk+AAQlDAAkDCZQkEiZlEAAQk+AAkBCUQgIhJAAhLQAAnjFVlWQFWlWHjAAQHjAAFWFWQFVFWAAHjQAABLgIBJQCFBNB1B1QFVFVAAHiQAAHklVFVQlWFWnjAAQlDAAkDiZg"), this.shape_3.setTransform(204.175, 585), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().s("#000000").ss(5, 1, 1).p("AyFmzQgIhIAAhMQAAnjFVlWQFWlVHiAAQHkAAFWFVQFUFWAAHjQAABMgHBIQCFBOB1B0QFVFVAAHjQAAHjlVFWQlWFWnjAAQlEAAkDiZQiBhMhwhxQlXlWAAnjQAAhLAKhJQAtmEEgkgQBwhxCBhLQEDiaFEAAQE9AAECCUQguGFkfEgQh1B0iGBOQkBCTk+AAQk9AAkAiUQiGhNh1h0QkgkggtmFQEBiUE9AAQFFAAEDCaQCABLBxBxQEfEgAuGFQAJBIAABLQAAHjlWFWQhxBxiABMQkDCZlFAAQniAAlWlWQlWlWAAnjQAAnjFWlVQB1h0CFhOg"), this.shape_4.setTransform(400, 175), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f("#CCCCCC").s().p("AxbWAQlWlVAAnkQAAnjFWlVQB0h1CGhMQEBiUE9gBQFDAAEECaQkEialDAAQk9ABkBCUQgJhJAAhMQAAniFWlXQFWlVHiAAQHjAAFWFVQFVFXAAHiQAABMgIBJQkBiUk+gBQlDAAkECaQiBBLhxBxQkfEfgtGFQiFhNh1h0QkgkggtmEQAtGEEgEgQB1B0CFBNQgJBJAABLQAAHkFVFVQBxBxCBBMQiBhMhxhxQlVlVAAnkQAAhLAJhJQEBCUE9AAQE+AAEBiUQAIBJAABLQAAHklVFVQhxBxiBBMQkECZlDAAQnjAAlVlWg"), this.shape_5.setTransform(370.825, 175), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.text_8
            }, {
                t: this.text_7
            }, {
                t: this.text_6
            }, {
                t: this.text_5
            }, {
                t: this.text_4
            }, {
                t: this.text_3
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.ModalDiagram4, new cjs.Rectangle(-2.5, -2.5, 805, 765), null), (lib.ModalDiagram3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("X", "bold 40px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 47, this.text.lineWidth = 43, (this.text.parent = this).text.setTransform(175, 170.2), this.text_1 = new cjs.Text("H", "bold 40px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 47, this.text_1.lineWidth = 43, (this.text_1.parent = this).text_1.setTransform(286.55, 248), this.text_2 = new cjs.Text("M", "bold 40px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 47, this.text_2.lineWidth = 43, (this.text_2.parent = this).text_2.setTransform(63.55, 248), this.text_3 = new cjs.Text("D", "bold 40px 'Arial'"), this.text_3.textAlign = "center", this.text_3.lineHeight = 47, this.text_3.lineWidth = 43, (this.text_3.parent = this).text_3.setTransform(118.55, 52), this.shape = new cjs.Shape, this.shape.graphics.f().s("#000000").ss(5, 1, 1).p("AABmtQCABLBxBxQEfEgAuGFQAJBIAABLQAAHjlWFWQhxBxiABMQiAhMhyhxQlWlWAAnjQAAhLAJhJQiFhNh1h0QkgkggtmFQgJhIAAhMQAAnjFWlWQFWlVHiAAQHjAAFXFVQFUFWAAHjQAABMgHBIQCFBOB1B0QFVFVAAHjQAAHjlVFWQlWFWnjAAQlEAAkDiZQkDCZlFAAQnjAAlVlWQlWlWAAnjQAAnjFWlVQB0h0CGhOQEBiUE9AAQFFAAEDCaQEDiaFEAAQE9AAECCUQguGFkfEgQh1B0iGBOQkBCTk+AAQk9AAkBiUQAtmEEgkgQByhxCAhLg"), this.shape.setTransform(175, 175), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#CCCCCC").s().p("As4ODQkgkggtmFQEBiUE9AAQFFAAEDCaQkDialFAAQk9AAkBCUQgJhIAAhMQAAniFWlWQFWlVHigBQHjABFXFVQFVFWAAHiQgBBMgHBIQkCiUk9AAQlEAAkDCaQiBBLhxBxQkgEggtGFQiFhOh1h0g"), this.shape_1.setTransform(175, 109.25), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.text_3
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.ModalDiagram3, new cjs.Rectangle(-2.5, -2.5, 355, 355), null), (lib.ModalDiagram2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("I", "bold 40px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 47, this.text.lineWidth = 43, (this.text.parent = this).text.setTransform(770, 500), this.text_1 = new cjs.Text("O", "bold 40px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 47, this.text_1.lineWidth = 43, (this.text_1.parent = this).text_1.setTransform(562.75, 505), this.text_2 = new cjs.Text("I", "bold 40px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 47, this.text_2.lineWidth = 43, (this.text_2.parent = this).text_2.setTransform(272.7, 462), this.text_3 = new cjs.Text("O", "bold 40px 'Arial'"), this.text_3.textAlign = "center", this.text_3.lineHeight = 47, this.text_3.lineWidth = 43, (this.text_3.parent = this).text_3.setTransform(97.55, 462), this.text_4 = new cjs.Text("I", "bold 40px 'Arial'"), this.text_4.textAlign = "center", this.text_4.lineHeight = 47, this.text_4.lineWidth = 43, (this.text_4.parent = this).text_4.setTransform(364.55, 46), this.text_5 = new cjs.Text("O", "bold 40px 'Arial'"), this.text_5.textAlign = "center", this.text_5.lineHeight = 47, this.text_5.lineWidth = 43, (this.text_5.parent = this).text_5.setTransform(454.55, 120), this.shape = new cjs.Shape, this.shape.graphics.f().s("#000000").ss(5, 1, 1).p("EAuGAWLQDIh3D6AAQD1AADHByQBmA7BaBaQEIEIAAF1QAAF1kIEHQkHEIl1AAQj6AAjIh2Qhjg7hXhXQkIkHAAl1QAAg7AHg4QAjkrDejfQBXhXBjg5gEgJvgzVQEWikFZAAQFVAAETCeQCPBSB9B+QFuFuAAIFQAAIGluFuQluFvoGAAQlZAAkWikQiLhSh5h5QluluAAoGQAAhRAJhNQAwmgE1k1QB5h6CLhQgEgA0gjWQCFhPCmAAQCkAACEBMQBEAnA8A8QCwCwAAD4QAAD5iwCvQivCwj5AAQimAAiFhOQhCgog6g6QiwivAAj5QAAgnAEglQAYjICUiUQA6g6BCgmgEgmQARMQEMiWFLAAQFUAAEUCeQCPBTB9B9QFuFuAAIGQAAIGluFuQluFuoGAAQlLAAkNiWQgMgGgNgIQiKhRh5h5QluluAAoGQAAhRAJhOQAwmgE1k1QB5h5CKhQQANgIANgHQAHAEAIAEQCPBTB9B9QFuFuAAIGQAAIGluFuQiECDiYBVQkNCWlLAAQlbAAkWikQiKhRh5h5QluluAAoGQAAhRAJhOQAwmgE1k1QB5h5CKhQQEWilFbAAQFLAAEOCWgAO2WLQDIh3D6AAQD1AADHByQBmA7BaBaQEIEIAAF1QAAF1kIEHQkHEIl1AAQj6AAjIh2Qhjg7hXhXQkIkHAAl1QAAg7AGg4QAjkrDfjfQBXhXBjg5g"), this.shape.setTransform(430, 345), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.text_5
            }, {
                t: this.text_4
            }, {
                t: this.text_3
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.ModalDiagram2, new cjs.Rectangle(-2.5, -2.5, 865, 695), null), (lib.ModalDiagram1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("H", "bold 40px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 47, this.text.lineWidth = 43, (this.text.parent = this).text.setTransform(736.55, 658), this.text_1 = new cjs.Text("M", "bold 40px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 47, this.text_1.lineWidth = 43, (this.text_1.parent = this).text_1.setTransform(513.55, 658), this.text_2 = new cjs.Text("D", "bold 40px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 47, this.text_2.lineWidth = 43, (this.text_2.parent = this).text_2.setTransform(568.55, 462), this.text_3 = new cjs.Text("H", "bold 40px 'Arial'"), this.text_3.textAlign = "center", this.text_3.lineHeight = 47, this.text_3.lineWidth = 43, (this.text_3.parent = this).text_3.setTransform(286.55, 658), this.text_4 = new cjs.Text("M", "bold 40px 'Arial'"), this.text_4.textAlign = "center", this.text_4.lineHeight = 47, this.text_4.lineWidth = 43, (this.text_4.parent = this).text_4.setTransform(63.55, 658), this.text_5 = new cjs.Text("D", "bold 40px 'Arial'"), this.text_5.textAlign = "center", this.text_5.lineHeight = 47, this.text_5.lineWidth = 43, (this.text_5.parent = this).text_5.setTransform(118.55, 462), this.text_6 = new cjs.Text("H", "bold 40px 'Arial'"), this.text_6.textAlign = "center", this.text_6.lineHeight = 47, this.text_6.lineWidth = 43, (this.text_6.parent = this).text_6.setTransform(511.55, 248), this.text_7 = new cjs.Text("M", "bold 40px 'Arial'"), this.text_7.textAlign = "center", this.text_7.lineHeight = 47, this.text_7.lineWidth = 43, (this.text_7.parent = this).text_7.setTransform(288.55, 248), this.text_8 = new cjs.Text("D", "bold 40px 'Arial'"), this.text_8.textAlign = "center", this.text_8.lineHeight = 47, this.text_8.lineWidth = 43, (this.text_8.parent = this).text_8.setTransform(343.55, 52), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_8
            }, {
                t: this.text_7
            }, {
                t: this.text_6
            }, {
                t: this.text_5
            }, {
                t: this.text_4
            }, {
                t: this.text_3
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#000000").ss(5, 1, 1).p("AyFmyQgIhJAAhMQAAniFVlWQFWlWHiAAQHkAAFVFWQFWFWAAHiQAABMgIBJQCFBNB1B1QFVFUAAHkQAAHjlVFVQlWFWnjAAQlEAAkEiZQkDCZlDAAQnjAAlWlWQlWlVAAnjQAAnkFWlUQB1h1CFhNQEBiVE+AAQFDAAEDCaQEEiaFEAAQE9AAECCVQguGFkgEeQh0B1iGBOQAJBIAABMQAAHjlWFVQhxBxiBBMQh/hMhxhxQlWlVAAnjQAAhMAIhJQiFhNh1h1QkgkegtmFgAAAmtQCBBLBxByQEgEeAtGGQkBCUk+AAQk9AAkBiVQAtmFEhkeQBxhyB/hLg"), this.shape.setTransform(625, 585), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#CCCCCC").s().p("AtiGzQAtmEEgkfQByhyCAhLQCBBLBxByQEfEfAuGFQgumFkfkfQhxhyiBhLQEEiZFDAAQE9AAECCUQguGFkfEeQh1B1iFBOQkCCTk9AAQk+AAkBiUg"), this.shape_1.setTransform(654.2, 585), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#000000").ss(5, 1, 1).p("AABmtQEDiaFEAAQE9AAECCVQguGFkfEeQh1B1iGBOQAJBIAABMQAAHjlWFVQhxBxiABMQiAhMhyhxQlWlVAAnjQAAhMAJhJQiFhNh1h1QkgkegtmFQgJhJAAhMQAAniFWlWQFWlWHiAAQHjAAFXFWQFUFWAAHiQAABMgHBJQCFBNB1B1QFVFUAAHkQAAHjlVFVQlWFWnjAAQlEAAkDiZQkDCZlFAAQnjAAlVlWQlWlVAAnjQAAnkFWlUQB0h1CGhNQEBiVE9AAQFFAAEDCaQCABLBxByQEfEeAuGGQkBCUk+AAQk9AAkBiVQAtmFEgkeQByhyCAhLg"), this.shape_2.setTransform(175, 585), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f("#CCCCCC").s().p("As4ODQkgkggtmEQEBiVE9AAQFFAAEDCZQkDiZlFAAQk9AAkBCVQgJhJAAhMQAAniFWlVQFWlXHiABQHjgBFXFXQFVFVAAHiQgBBMgHBJQkCiVk9AAQlEAAkDCZQiBBMhxBxQkgEggtGEQiFhMh1h1g"), this.shape_3.setTransform(175, 519.25), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().s("#000000").ss(5, 1, 1).p("AyFmzQgIhIAAhMQAAnjFVlWQFWlVHiAAQHkAAFWFVQFUFWAAHjQAABMgHBIQCFBOB1B0QFVFVAAHjQAAHjlVFWQlWFWnjAAQlEAAkDiZQiBhMhwhxQlXlWAAnjQAAhLAKhJQAtmEEgkgQBwhxCBhLQEDiaFEAAQE9AAECCUQguGFkfEgQh1B0iGBOQkBCTk+AAQk9AAkAiUQiGhNh1h0QkgkggtmFQEBiUE9AAQFFAAEDCaQCABLBxBxQEfEgAuGFQAJBIAABLQAAHjlWFWQhxBxiABMQkDCZlFAAQniAAlWlWQlWlWAAnjQAAnjFWlVQB1h0CFhOg"), this.shape_4.setTransform(400, 175), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f("#CCCCCC").s().p("ApGOsQCBhMBxhxQFUlWAAniQAAhMgHhIQAHBIAABMQAAHilUFWQhxBxiBBMQiBhMhxhxQlWlWAAniQAAhMAJhIQEBCUE+AAQE+AAEBiUQCFhNB0h1QEgkgAtmFQCGBNB1B1QFVFWAAHjQAAHilVFWQlWFWnkAAQlCAAkEiZg"), this.shape_5.setTransform(458.325, 240.725), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.ModalDiagram1, new cjs.Rectangle(-2.5, -2.5, 805, 765), null), (lib.Logic8Diagram3 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape.setTransform(346.95, 711.4), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHXAAIutAA"), this.shape_1.setTransform(285, 711.4), this.shape_2 = new cjs.Shape, this.shape_2.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_2.setTransform(346.95, 80.45), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHXAAIutAA"), this.shape_3.setTransform(285, 80.45), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_4.setTransform(500, 769.9), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_5.setTransform(100, 769.95), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_6.setTransform(500, 139), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_7.setTransform(100, 139), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Logic8Diagram3, new cjs.Rectangle(-2.5, 0, 605, 772.5), null), (lib.Logic8Diagram2 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape.setTransform(347.05, 384.6), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHXAAIutAA"), this.shape_1.setTransform(285.1, 384.6), this.shape_2 = new cjs.Shape, this.shape_2.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_2.setTransform(347, 80.6), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHXAAIutAA"), this.shape_3.setTransform(285.05, 80.6), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_4.setTransform(500, 442.9), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_5.setTransform(100, 442.95), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_6.setTransform(500, 139), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_7.setTransform(100, 139), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Logic8Diagram2, new cjs.Rectangle(-2.5, 50.6, 605, 394.9), null), (lib.Logic8Diagram1 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape.setTransform(347.05, 80.45), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHXAAIutAA"), this.shape_1.setTransform(285.1, 80.45), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_2.setTransform(500, 139), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_3.setTransform(100, 139), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Logic8Diagram1, new cjs.Rectangle(-2.5, 0, 605, 141.5), null), (lib.Logic7Diagram3 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape.setTransform(312.05, 158.45), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHXAAIutAA"), this.shape_1.setTransform(250.1, 158.45), this.shape_2 = new cjs.Shape, this.shape_2.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_2.setTransform(312, 44.5), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHXAAIutAA"), this.shape_3.setTransform(250.05, 44.5), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.2, 10.5, 0, -.2, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_4.setTransform(635.0106, 629.95, .8, 1), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.2, 10.5, 0, -.2, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_5.setTransform(450.0106, 629.95, .8, 1), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.1, 10.5, 0, -.1, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_6.setTransform(265.0106, 629.95, .8, 1), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.1, 10.5, 0, -.1, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_7.setTransform(820.0106, 629.95, .8, 1), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.1, 10.5, 0, -.1, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_8.setTransform(80.0106, 629.95, .8, 1), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.2, 10.5, 0, -.2, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_9.setTransform(450.0106, 467.3, .8, 1), this.shape_10 = new cjs.Shape, this.shape_10.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.1, 10.5, 0, -.1, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_10.setTransform(265.0106, 467.3, .8, 1), this.shape_11 = new cjs.Shape, this.shape_11.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.1, 10.5, 0, -.1, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_11.setTransform(80.0106, 467.3, .8, 1), this.shape_12 = new cjs.Shape, this.shape_12.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.1, 10.5, 0, -.1, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_12.setTransform(635.0106, 353.25, .8, 1), this.shape_13 = new cjs.Shape, this.shape_13.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.1, 10.5, 0, -.1, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_13.setTransform(450.0106, 353.25, .8, 1), this.shape_14 = new cjs.Shape, this.shape_14.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.1, 10.5, 0, -.1, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_14.setTransform(265.0106, 353.25, .8, 1), this.shape_15 = new cjs.Shape, this.shape_15.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.1, 10.5, 0, -.1, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_15.setTransform(820.0106, 353.25, .8, 1), this.shape_16 = new cjs.Shape, this.shape_16.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 10.5, 0, 0, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_16.setTransform(80.0106, 353.25, .8, 1), this.shape_17 = new cjs.Shape, this.shape_17.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 10.5, 0, 0, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_17.setTransform(450.0106, 190.5, .8, 1), this.shape_18 = new cjs.Shape, this.shape_18.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 10.5, 0, 0, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_18.setTransform(80.0106, 190.5, .8, 1), this.shape_19 = new cjs.Shape, this.shape_19.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .1, 10.5, 0, .1, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_19.setTransform(820.0106, 76.5, .8, 1), this.text = new cjs.Text("AND", "bold 65px 'Arial'", "#2B425D"), this.text.textAlign = "center", this.text.lineHeight = 75, this.text.lineWidth = 156, (this.text.parent = this).text.setTransform(635, 2), this.shape_20 = new cjs.Shape, this.shape_20.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .1, 10.5, 0, .1, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_20.setTransform(450.0106, 76.5, .8, 1), this.shape_21 = new cjs.Shape, this.shape_21.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .1, 10.5, 0, .1, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_21.setTransform(80.0106, 76.5, .8, 1), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_21
            }, {
                t: this.shape_20
            }, {
                t: this.text
            }, {
                t: this.shape_19
            }, {
                t: this.shape_18
            }, {
                t: this.shape_17
            }, {
                t: this.shape_16
            }, {
                t: this.shape_15
            }, {
                t: this.shape_14
            }, {
                t: this.shape_13
            }, {
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Logic7Diagram3, new cjs.Rectangle(-2.5, 0, 905, 632.5), null), (lib.Logic7Diagram2 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape.setTransform(312, 243.95), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHXAAIutAA"), this.shape_1.setTransform(250.05, 243.95), this.shape_2 = new cjs.Shape, this.shape_2.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_2.setTransform(312.25, 105.95), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHXAAIutAA"), this.shape_3.setTransform(250.3, 105.95), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.1, 10.5, 0, -.1, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_4.setTransform(450.0106, 600.05, .8, 1), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 10.5, 0, 0, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_5.setTransform(265.0106, 600.05, .8, 1), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 10.5, 0, 0, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_6.setTransform(80.0106, 600.05, .8, 1), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 10.5, 0, 0, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_7.setTransform(635.0106, 462, .8, 1), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 10.5, 0, 0, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_8.setTransform(450.0106, 462, .8, 1), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 10.5, 0, 0, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_9.setTransform(265.0106, 462, .8, 1), this.shape_10 = new cjs.Shape, this.shape_10.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 10.5, 0, 0, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_10.setTransform(820.0106, 462, .8, 1), this.shape_11 = new cjs.Shape, this.shape_11.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .1, 10.5, 0, .1, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_11.setTransform(80.0106, 462, .8, 1), this.shape_12 = new cjs.Shape, this.shape_12.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .1, 10.5, 0, .1, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_12.setTransform(450.0106, 276, .8, 1), this.shape_13 = new cjs.Shape, this.shape_13.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .1, 10.5, 0, .1, 10.5, 109.1).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_13.setTransform(80.0106, 276, .8, 1), this.shape_14 = new cjs.Shape, this.shape_14.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .2, 10.5, 0, .2, 10.5, 109.2).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_14.setTransform(820.0106, 138, .8, 1), this.text = new cjs.Text("AND", "bold 65px 'Arial'", "#2B425D"), this.text.textAlign = "center", this.text.lineHeight = 75, this.text.lineWidth = 156, (this.text.parent = this).text.setTransform(635, 63.5), this.shape_15 = new cjs.Shape, this.shape_15.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .2, 10.5, 0, .2, 10.5, 109.2).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_15.setTransform(450.0106, 138, .8, 1), this.shape_16 = new cjs.Shape, this.shape_16.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .2, 10.5, 0, .2, 10.5, 109.2).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_16.setTransform(80.0106, 138, .8, 1), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_16
            }, {
                t: this.shape_15
            }, {
                t: this.text
            }, {
                t: this.shape_14
            }, {
                t: this.shape_13
            }, {
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Logic7Diagram2, new cjs.Rectangle(-2.5, 61.5, 905, 541.1), null), (lib.Logic7Diagram1 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape.setTransform(312, 243.95), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHXAAIutAA"), this.shape_1.setTransform(250.05, 243.95), this.shape_2 = new cjs.Shape, this.shape_2.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_2.setTransform(312.25, 105.95), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHXAAIutAA"), this.shape_3.setTransform(250.3, 105.95), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .3, 10.5, 0, .3, 10.5, 109.2).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_4.setTransform(450.0106, 276, .8, 1), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .3, 10.5, 0, .3, 10.5, 109.2).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_5.setTransform(80.0106, 276, .8, 1), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .3, 10.5, 0, .3, 10.5, 109.2).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_6.setTransform(820.0106, 138, .8, 1), this.text = new cjs.Text("AND", "bold 65px 'Arial'", "#2B425D"), this.text.textAlign = "center", this.text.lineHeight = 75, this.text.lineWidth = 156, (this.text.parent = this).text.setTransform(635, 63.5), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .3, 10.5, 0, .3, 10.5, 109.2).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_7.setTransform(450.0106, 138, .8, 1), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .3, 10.5, 0, .3, 10.5, 109.2).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_8.setTransform(80.0106, 138, .8, 1), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.text
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Logic7Diagram1, new cjs.Rectangle(-2.5, 61.5, 905, 217), null), (lib.Logic6Diagram7 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape.setTransform(485, 590.9), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_1.setTransform(435, 590.9), this.shape_2 = new cjs.Shape, this.shape_2.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_2.setTransform(245, 370.05), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_3.setTransform(195, 370.05), this.shape_4 = new cjs.Shape, this.shape_4.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_4.setTransform(725, 96.05), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_5.setTransform(675, 96.05), this.shape_6 = new cjs.Shape, this.shape_6.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_6.setTransform(725, 233.1), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_7.setTransform(675, 233.1), this.shape_8 = new cjs.Shape, this.shape_8.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_8.setTransform(725, 370.05), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_9.setTransform(675, 370.05), this.shape_10 = new cjs.Shape, this.shape_10.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_10.setTransform(245, 96.05), this.shape_11 = new cjs.Shape, this.shape_11.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_11.setTransform(195, 96.05), this.shape_12 = new cjs.Shape, this.shape_12.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_12.setTransform(245, 233.1), this.shape_13 = new cjs.Shape, this.shape_13.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_13.setTransform(195, 233.1), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_13
            }, {
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.text = new cjs.Text("State the reduction", "bold 32px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 38, this.text.lineWidth = 347, (this.text.parent = this).text.setTransform(450, 497), this.text_1 = new cjs.Text("State contrapositives.", "bold 32px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 38, this.text_1.lineWidth = 347, (this.text_1.parent = this).text_1.setTransform(690, 2), this.text_2 = new cjs.Text("Original conditionals.", "bold 32px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 38, this.text_2.lineWidth = 347, (this.text_2.parent = this).text_2.setTransform(210, 2), this.shape_14 = new cjs.Shape, this.shape_14.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_14.setTransform(580, 650), this.shape_15 = new cjs.Shape, this.shape_15.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_15.setTransform(320, 650), this.shape_16 = new cjs.Shape, this.shape_16.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_16.setTransform(340, 429), this.shape_17 = new cjs.Shape, this.shape_17.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_17.setTransform(340, 292), this.shape_18 = new cjs.Shape, this.shape_18.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_18.setTransform(340, 155), this.shape_19 = new cjs.Shape, this.shape_19.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_19.setTransform(560, 429), this.shape_20 = new cjs.Shape, this.shape_20.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_20.setTransform(80, 429), this.shape_21 = new cjs.Shape, this.shape_21.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_21.setTransform(80, 292), this.shape_22 = new cjs.Shape, this.shape_22.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_22.setTransform(80, 155), this.shape_23 = new cjs.Shape, this.shape_23.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_23.setTransform(560, 292), this.shape_24 = new cjs.Shape, this.shape_24.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_24.setTransform(560, 155), this.shape_25 = new cjs.Shape, this.shape_25.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_25.setTransform(820, 429), this.shape_26 = new cjs.Shape, this.shape_26.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_26.setTransform(820, 292), this.shape_27 = new cjs.Shape, this.shape_27.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_27.setTransform(820, 155), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_27
            }, {
                t: this.shape_26
            }, {
                t: this.shape_25
            }, {
                t: this.shape_24
            }, {
                t: this.shape_23
            }, {
                t: this.shape_22
            }, {
                t: this.shape_21
            }, {
                t: this.shape_20
            }, {
                t: this.shape_19
            }, {
                t: this.shape_18
            }, {
                t: this.shape_17
            }, {
                t: this.shape_16
            }, {
                t: this.shape_15
            }, {
                t: this.shape_14
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Logic6Diagram7, new cjs.Rectangle(-2.5, 0, 905, 652.5), null), (lib.Logic6Diagram6 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape.setTransform(485, 641.15), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_1.setTransform(435, 641.15), this.shape_2 = new cjs.Shape, this.shape_2.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_2.setTransform(725, 441.1), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_3.setTransform(675, 441.1), this.shape_4 = new cjs.Shape, this.shape_4.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_4.setTransform(725, 321.15), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_5.setTransform(675, 321.15), this.shape_6 = new cjs.Shape, this.shape_6.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_6.setTransform(725, 81.1), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_7.setTransform(675, 81.1), this.shape_8 = new cjs.Shape, this.shape_8.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_8.setTransform(725, 201.15), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_9.setTransform(675, 201.15), this.shape_10 = new cjs.Shape, this.shape_10.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_10.setTransform(245, 441.1), this.shape_11 = new cjs.Shape, this.shape_11.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_11.setTransform(195, 441.1), this.shape_12 = new cjs.Shape, this.shape_12.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_12.setTransform(245, 321.15), this.shape_13 = new cjs.Shape, this.shape_13.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_13.setTransform(195, 321.15), this.shape_14 = new cjs.Shape, this.shape_14.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_14.setTransform(245, 81.1), this.shape_15 = new cjs.Shape, this.shape_15.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_15.setTransform(195, 81.1), this.shape_16 = new cjs.Shape, this.shape_16.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_16.setTransform(245, 201.15), this.shape_17 = new cjs.Shape, this.shape_17.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_17.setTransform(195, 201.15), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_17
            }, {
                t: this.shape_16
            }, {
                t: this.shape_15
            }, {
                t: this.shape_14
            }, {
                t: this.shape_13
            }, {
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.text = new cjs.Text("Original conditionals.", "bold 32px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 38, this.text.lineWidth = 347, (this.text.parent = this).text.setTransform(450, 562), this.text_1 = new cjs.Text("State contrapositives.", "bold 32px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 38, this.text_1.lineWidth = 347, (this.text_1.parent = this).text_1.setTransform(690, 2), this.text_2 = new cjs.Text("Original conditionals.", "bold 32px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 38, this.text_2.lineWidth = 347, (this.text_2.parent = this).text_2.setTransform(210, 2), this.shape_18 = new cjs.Shape, this.shape_18.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_18.setTransform(580, 700), this.shape_19 = new cjs.Shape, this.shape_19.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_19.setTransform(320, 700), this.shape_20 = new cjs.Shape, this.shape_20.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_20.setTransform(340, 500), this.shape_21 = new cjs.Shape, this.shape_21.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_21.setTransform(340, 380), this.shape_22 = new cjs.Shape, this.shape_22.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_22.setTransform(340, 260), this.shape_23 = new cjs.Shape, this.shape_23.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_23.setTransform(340, 140), this.shape_24 = new cjs.Shape, this.shape_24.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_24.setTransform(560, 500), this.shape_25 = new cjs.Shape, this.shape_25.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_25.setTransform(80, 500), this.shape_26 = new cjs.Shape, this.shape_26.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_26.setTransform(80, 380), this.shape_27 = new cjs.Shape, this.shape_27.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_27.setTransform(80, 260), this.shape_28 = new cjs.Shape, this.shape_28.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_28.setTransform(80, 140), this.shape_29 = new cjs.Shape, this.shape_29.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_29.setTransform(560, 380), this.shape_30 = new cjs.Shape, this.shape_30.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_30.setTransform(560, 260), this.shape_31 = new cjs.Shape, this.shape_31.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_31.setTransform(560, 140), this.shape_32 = new cjs.Shape, this.shape_32.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_32.setTransform(820, 500), this.shape_33 = new cjs.Shape, this.shape_33.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_33.setTransform(820, 380), this.shape_34 = new cjs.Shape, this.shape_34.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_34.setTransform(820, 260), this.shape_35 = new cjs.Shape, this.shape_35.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_35.setTransform(820, 140), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_35
            }, {
                t: this.shape_34
            }, {
                t: this.shape_33
            }, {
                t: this.shape_32
            }, {
                t: this.shape_31
            }, {
                t: this.shape_30
            }, {
                t: this.shape_29
            }, {
                t: this.shape_28
            }, {
                t: this.shape_27
            }, {
                t: this.shape_26
            }, {
                t: this.shape_25
            }, {
                t: this.shape_24
            }, {
                t: this.shape_23
            }, {
                t: this.shape_22
            }, {
                t: this.shape_21
            }, {
                t: this.shape_20
            }, {
                t: this.shape_19
            }, {
                t: this.shape_18
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Logic6Diagram6, new cjs.Rectangle(-2.5, 0, 905, 702.5), null), (lib.Logic6Diagram5 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape.setTransform(725, 441.1), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_1.setTransform(675, 441.1), this.shape_2 = new cjs.Shape, this.shape_2.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_2.setTransform(725, 321.15), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_3.setTransform(675, 321.15), this.shape_4 = new cjs.Shape, this.shape_4.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_4.setTransform(725, 81.1), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_5.setTransform(675, 81.1), this.shape_6 = new cjs.Shape, this.shape_6.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_6.setTransform(725, 201.15), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_7.setTransform(675, 201.15), this.shape_8 = new cjs.Shape, this.shape_8.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_8.setTransform(245, 441.1), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_9.setTransform(195, 441.1), this.shape_10 = new cjs.Shape, this.shape_10.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_10.setTransform(245, 321.15), this.shape_11 = new cjs.Shape, this.shape_11.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_11.setTransform(195, 321.15), this.shape_12 = new cjs.Shape, this.shape_12.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_12.setTransform(245, 81.1), this.shape_13 = new cjs.Shape, this.shape_13.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_13.setTransform(195, 81.1), this.shape_14 = new cjs.Shape, this.shape_14.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_14.setTransform(245, 201.15), this.shape_15 = new cjs.Shape, this.shape_15.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_15.setTransform(195, 201.15), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_15
            }, {
                t: this.shape_14
            }, {
                t: this.shape_13
            }, {
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.text = new cjs.Text("State contrapositives.", "bold 32px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 38, this.text.lineWidth = 347, (this.text.parent = this).text.setTransform(690, 2), this.text_1 = new cjs.Text("Original conditionals.", "bold 32px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 38, this.text_1.lineWidth = 347, (this.text_1.parent = this).text_1.setTransform(210, 2), this.shape_16 = new cjs.Shape, this.shape_16.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_16.setTransform(340, 380), this.shape_17 = new cjs.Shape, this.shape_17.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_17.setTransform(340, 500), this.shape_18 = new cjs.Shape, this.shape_18.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_18.setTransform(340, 140), this.shape_19 = new cjs.Shape, this.shape_19.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_19.setTransform(340, 260), this.shape_20 = new cjs.Shape, this.shape_20.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_20.setTransform(560, 500), this.shape_21 = new cjs.Shape, this.shape_21.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_21.setTransform(80, 500), this.shape_22 = new cjs.Shape, this.shape_22.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_22.setTransform(80, 380), this.shape_23 = new cjs.Shape, this.shape_23.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_23.setTransform(80, 260), this.shape_24 = new cjs.Shape, this.shape_24.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_24.setTransform(80, 140), this.shape_25 = new cjs.Shape, this.shape_25.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_25.setTransform(560, 380), this.shape_26 = new cjs.Shape, this.shape_26.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_26.setTransform(560, 140), this.shape_27 = new cjs.Shape, this.shape_27.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_27.setTransform(560, 260), this.shape_28 = new cjs.Shape, this.shape_28.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_28.setTransform(820, 500), this.shape_29 = new cjs.Shape, this.shape_29.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_29.setTransform(820, 380), this.shape_30 = new cjs.Shape, this.shape_30.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_30.setTransform(820, 140), this.shape_31 = new cjs.Shape, this.shape_31.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_31.setTransform(820, 260), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_31
            }, {
                t: this.shape_30
            }, {
                t: this.shape_29
            }, {
                t: this.shape_28
            }, {
                t: this.shape_27
            }, {
                t: this.shape_26
            }, {
                t: this.shape_25
            }, {
                t: this.shape_24
            }, {
                t: this.shape_23
            }, {
                t: this.shape_22
            }, {
                t: this.shape_21
            }, {
                t: this.shape_20
            }, {
                t: this.shape_19
            }, {
                t: this.shape_18
            }, {
                t: this.shape_17
            }, {
                t: this.shape_16
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Logic6Diagram5, new cjs.Rectangle(-2.5, 0, 905, 502.5), null), (lib.Logic6Diagram4 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape.setTransform(245, 381.15), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_1.setTransform(195, 381.15), this.shape_2 = new cjs.Shape, this.shape_2.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_2.setTransform(245, 261.15), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_3.setTransform(195, 261.15), this.shape_4 = new cjs.Shape, this.shape_4.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_4.setTransform(245, 21.1), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_5.setTransform(195, 21.1), this.shape_6 = new cjs.Shape, this.shape_6.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_6.setTransform(245, 141.1), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_7.setTransform(195, 141.1), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_8.setTransform(340, 80), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_9.setTransform(340, 200), this.shape_10 = new cjs.Shape, this.shape_10.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_10.setTransform(340, 320), this.shape_11 = new cjs.Shape, this.shape_11.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_11.setTransform(340, 440), this.shape_12 = new cjs.Shape, this.shape_12.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_12.setTransform(80, 440), this.shape_13 = new cjs.Shape, this.shape_13.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_13.setTransform(80, 320), this.shape_14 = new cjs.Shape, this.shape_14.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_14.setTransform(80, 200), this.shape_15 = new cjs.Shape, this.shape_15.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_15.setTransform(80, 80), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_15
            }, {
                t: this.shape_14
            }, {
                t: this.shape_13
            }, {
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Logic6Diagram4, new cjs.Rectangle(-2.5, -8.9, 425, 451.4), null), (lib.Logic6Diagram3 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape.setTransform(270, 425.45), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_1.setTransform(220, 425.45), this.shape_2 = new cjs.Shape, this.shape_2.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_2.setTransform(270, 562.5), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_3.setTransform(220, 562.5), this.shape_4 = new cjs.Shape, this.shape_4.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_4.setTransform(270, 699.45), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_5.setTransform(220, 699.45), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.shape_6 = new cjs.Shape, this.shape_6.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_6.setTransform(372.475, 185.075, .5, .5), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 14.4, -4, 0, 14.4, -4, 34.3).ss(5, 1, 1).p("ACvAAIldAA"), this.shape_7.setTransform(347.5, 185.05), this.shape_8 = new cjs.Shape, this.shape_8.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_8.setTransform(372.475, 116.525, .5, .5), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 14.4, -4, 0, 14.4, -4, 34.3).ss(5, 1, 1).p("ACvAAIldAA"), this.shape_9.setTransform(347.5, 116.5), this.shape_10 = new cjs.Shape, this.shape_10.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_10.setTransform(372.475, 48.025, .5, .5), this.shape_11 = new cjs.Shape, this.shape_11.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 14.4, -4, 0, 14.4, -4, 34.3).ss(5, 1, 1).p("ACvAAIldAA"), this.shape_11.setTransform(347.5, 48), this.shape_12 = new cjs.Shape, this.shape_12.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_12.setTransform(132.475, 185.075, .5, .5), this.shape_13 = new cjs.Shape, this.shape_13.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 14.4, -4, 0, 14.4, -4, 34.3).ss(5, 1, 1).p("ACvAAIldAA"), this.shape_13.setTransform(107.5, 185.05), this.shape_14 = new cjs.Shape, this.shape_14.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_14.setTransform(132.475, 116.525, .5, .5), this.shape_15 = new cjs.Shape, this.shape_15.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 14.4, -4, 0, 14.4, -4, 34.3).ss(5, 1, 1).p("ACvAAIldAA"), this.shape_15.setTransform(107.5, 116.5), this.shape_16 = new cjs.Shape, this.shape_16.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_16.setTransform(132.475, 48.025, .5, .5), this.shape_17 = new cjs.Shape, this.shape_17.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 14.4, -4, 0, 14.4, -4, 34.3).ss(5, 1, 1).p("ACvAAIldAA"), this.shape_17.setTransform(107.5, 48), this.shape_18 = new cjs.Shape, this.shape_18.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .4, 5.2, 0, .4, 5.2, 43.7).ss(5, 1, 1).p("AmPAAIMfAA"), this.shape_18.setTransform(180, 146), this.shape_19 = new cjs.Shape, this.shape_19.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .4, 5.2, 0, .4, 5.2, 43.7).ss(5, 1, 1).p("AmPAAIMfAA"), this.shape_19.setTransform(50, 146), this.shape_20 = new cjs.Shape, this.shape_20.graphics.f().s("#008000").ss(5, 1, 1).p("AvEmPIeJAAQC5AAAAB+IAAIkQAAB9i5AAI+JAAQi5AAAAh9IAAokQAAh+C5AAg"), this.shape_20.setTransform(115, 126), this.shape_21 = new cjs.Shape, this.shape_21.graphics.f().s("#008000").ss(5, 1, 1).p("AvEmPIeJAAQC5AAAAB+IAAIkQAAB9i5AAI+JAAQi5AAAAh9IAAokQAAh+C5AAg"), this.shape_21.setTransform(355, 194.5), this.txt = new cjs.Text("PC", "bold 65px 'Arial'"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 73, this.txt.lineWidth = 196, (this.txt.parent = this).txt.setTransform(420, 177.2, .5, .5), this.txt_1 = new cjs.Text("~PC", "bold 65px 'Arial'"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 73, this.txt_1.lineWidth = 196, (this.txt_1.parent = this).txt_1.setTransform(420, 108.7, .5, .5), this.txt_2 = new cjs.Text("~SM", "bold 65px 'Arial'"), this.txt_2.name = "txt_2", this.txt_2.textAlign = "center", this.txt_2.lineHeight = 73, this.txt_2.lineWidth = 196, (this.txt_2.parent = this).txt_2.setTransform(420, 40.2, .5, .5), this.txt_3 = new cjs.Text("SM", "bold 65px 'Arial'"), this.txt_3.name = "txt_3", this.txt_3.textAlign = "center", this.txt_3.lineHeight = 73, this.txt_3.lineWidth = 196, (this.txt_3.parent = this).txt_3.setTransform(290, 177.2, .5, .5), this.txt_4 = new cjs.Text("~A", "bold 65px 'Arial'"), this.txt_4.name = "txt_4", this.txt_4.textAlign = "center", this.txt_4.lineHeight = 73, this.txt_4.lineWidth = 196, (this.txt_4.parent = this).txt_4.setTransform(290, 108.7, .5, .5), this.txt_5 = new cjs.Text("~TW", "bold 65px 'Arial'"), this.txt_5.name = "txt_5", this.txt_5.textAlign = "center", this.txt_5.lineHeight = 73, this.txt_5.lineWidth = 196, (this.txt_5.parent = this).txt_5.setTransform(290, 40.2, .5, .5), this.txt_6 = new cjs.Text("~SM", "bold 65px 'Arial'"), this.txt_6.name = "txt_6", this.txt_6.textAlign = "center", this.txt_6.lineHeight = 73, this.txt_6.lineWidth = 196, (this.txt_6.parent = this).txt_6.setTransform(180, 177.2, .5, .5), this.txt_7 = new cjs.Text("A", "bold 65px 'Arial'"), this.txt_7.name = "txt_7", this.txt_7.textAlign = "center", this.txt_7.lineHeight = 73, this.txt_7.lineWidth = 196, (this.txt_7.parent = this).txt_7.setTransform(180, 108.7, .5, .5), this.txt_8 = new cjs.Text("TW", "bold 65px 'Arial'"), this.txt_8.name = "txt_8", this.txt_8.textAlign = "center", this.txt_8.lineHeight = 73, this.txt_8.lineWidth = 196, (this.txt_8.parent = this).txt_8.setTransform(180, 40.2, .5, .5), this.txt_9 = new cjs.Text("~PC", "bold 65px 'Arial'"), this.txt_9.name = "txt_9", this.txt_9.textAlign = "center", this.txt_9.lineHeight = 73, this.txt_9.lineWidth = 196, (this.txt_9.parent = this).txt_9.setTransform(50, 177.2, .5, .5), this.txt_10 = new cjs.Text("PC", "bold 65px 'Arial'"), this.txt_10.name = "txt_10", this.txt_10.textAlign = "center", this.txt_10.lineHeight = 73, this.txt_10.lineWidth = 196, (this.txt_10.parent = this).txt_10.setTransform(50, 108.7, .5, .5), this.txt_11 = new cjs.Text("SM", "bold 65px 'Arial'"), this.txt_11.name = "txt_11", this.txt_11.textAlign = "center", this.txt_11.lineHeight = 73, this.txt_11.lineWidth = 196, (this.txt_11.parent = this).txt_11.setTransform(50, 40.2, .5, .5), this.text = new cjs.Text("State contrapositives.", "bold 32px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 38, this.text.lineWidth = 347, (this.text.parent = this).text.setTransform(355, 1, .5, .5), this.text_1 = new cjs.Text("Original conditionals.", "bold 32px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 38, this.text_1.lineWidth = 347, (this.text_1.parent = this).text_1.setTransform(115, 1, .5, .5), this.shape_22 = new cjs.Shape, this.shape_22.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .4, 5.2, 0, .4, 5.2, 43.7).ss(5, 1, 1).p("AmPAAIMfAA"), this.shape_22.setTransform(290, 214.5), this.shape_23 = new cjs.Shape, this.shape_23.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .4, 5.2, 0, .4, 5.2, 43.7).ss(5, 1, 1).p("AmPAAIMfAA"), this.shape_23.setTransform(290, 77.5), this.shape_24 = new cjs.Shape, this.shape_24.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .4, 5.2, 0, .4, 5.2, 43.7).ss(5, 1, 1).p("AmPAAIMfAA"), this.shape_24.setTransform(290, 146), this.shape_25 = new cjs.Shape, this.shape_25.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .4, 5.2, 0, .4, 5.2, 43.7).ss(5, 1, 1).p("AmPAAIMfAA"), this.shape_25.setTransform(180, 77.5), this.shape_26 = new cjs.Shape, this.shape_26.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .4, 5.2, 0, .4, 5.2, 43.7).ss(5, 1, 1).p("AmPAAIMfAA"), this.shape_26.setTransform(180, 214.5), this.shape_27 = new cjs.Shape, this.shape_27.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .4, 5.2, 0, .4, 5.2, 43.7).ss(5, 1, 1).p("AmPAAIMfAA"), this.shape_27.setTransform(50, 214.5), this.shape_28 = new cjs.Shape, this.shape_28.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .4, 5.2, 0, .4, 5.2, 43.7).ss(5, 1, 1).p("AmPAAIMfAA"), this.shape_28.setTransform(50, 77.5), this.shape_29 = new cjs.Shape, this.shape_29.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .4, 5.2, 0, .4, 5.2, 43.7).ss(5, 1, 1).p("AmPAAIMfAA"), this.shape_29.setTransform(420, 214.5), this.shape_30 = new cjs.Shape, this.shape_30.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .4, 5.2, 0, .4, 5.2, 43.7).ss(5, 1, 1).p("AmPAAIMfAA"), this.shape_30.setTransform(420, 77.5), this.shape_31 = new cjs.Shape, this.shape_31.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .4, 5.2, 0, .4, 5.2, 43.7).ss(5, 1, 1).p("AmPAAIMfAA"), this.shape_31.setTransform(420, 146), this.text_2 = new cjs.Text("State the reduction", "bold 32px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 38, this.text_2.lineWidth = 347, (this.text_2.parent = this).text_2.setTransform(235, 332), this.shape_32 = new cjs.Shape, this.shape_32.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_32.setTransform(365, 485), this.shape_33 = new cjs.Shape, this.shape_33.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_33.setTransform(365, 759), this.shape_34 = new cjs.Shape, this.shape_34.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_34.setTransform(365, 622), this.shape_35 = new cjs.Shape, this.shape_35.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_35.setTransform(105, 485), this.shape_36 = new cjs.Shape, this.shape_36.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_36.setTransform(105, 759), this.shape_37 = new cjs.Shape, this.shape_37.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_37.setTransform(105, 622), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_37
            }, {
                t: this.shape_36
            }, {
                t: this.shape_35
            }, {
                t: this.shape_34
            }, {
                t: this.shape_33
            }, {
                t: this.shape_32
            }, {
                t: this.text_2
            }, {
                t: this.shape_31
            }, {
                t: this.shape_30
            }, {
                t: this.shape_29
            }, {
                t: this.shape_28
            }, {
                t: this.shape_27
            }, {
                t: this.shape_26
            }, {
                t: this.shape_25
            }, {
                t: this.shape_24
            }, {
                t: this.shape_23
            }, {
                t: this.shape_22
            }, {
                t: this.text_1
            }, {
                t: this.text
            }, {
                t: this.txt_11
            }, {
                t: this.txt_10
            }, {
                t: this.txt_9
            }, {
                t: this.txt_8
            }, {
                t: this.txt_7
            }, {
                t: this.txt_6
            }, {
                t: this.txt_5
            }, {
                t: this.txt_4
            }, {
                t: this.txt_3
            }, {
                t: this.txt_2
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }, {
                t: this.shape_21
            }, {
                t: this.shape_20
            }, {
                t: this.shape_19
            }, {
                t: this.shape_18
            }, {
                t: this.shape_17
            }, {
                t: this.shape_16
            }, {
                t: this.shape_15
            }, {
                t: this.shape_14
            }, {
                t: this.shape_13
            }, {
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Logic6Diagram3, new cjs.Rectangle(-2.5, 0, 475, 761.5), null), (lib.Logic6Diagram2 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape.setTransform(725, 121.1), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_1.setTransform(675, 121.1), this.shape_2 = new cjs.Shape, this.shape_2.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_2.setTransform(725, 258.15), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_3.setTransform(675, 258.15), this.shape_4 = new cjs.Shape, this.shape_4.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_4.setTransform(725, 395.1), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_5.setTransform(675, 395.1), this.shape_6 = new cjs.Shape, this.shape_6.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_6.setTransform(245, 121.1), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_7.setTransform(195, 121.1), this.shape_8 = new cjs.Shape, this.shape_8.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_8.setTransform(245, 258.15), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_9.setTransform(195, 258.15), this.shape_10 = new cjs.Shape, this.shape_10.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_10.setTransform(245, 395.1), this.shape_11 = new cjs.Shape, this.shape_11.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 28.7, -8, 0, 28.7, -8, 68.6).ss(10, 1, 1).p("AFeAAIq7AA"), this.shape_11.setTransform(195, 395.1), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.shape_12 = new cjs.Shape, this.shape_12.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_12.setTransform(560, 180), this.shape_13 = new cjs.Shape, this.shape_13.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_13.setTransform(820, 180), this.text = new cjs.Text("Contrapositive", "bold 32px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 38, this.text.lineWidth = 347, (this.text.parent = this).text.setTransform(690, 2), this.shape_14 = new cjs.Shape, this.shape_14.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_14.setTransform(340, 317), this.shape_15 = new cjs.Shape, this.shape_15.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_15.setTransform(340, 454), this.shape_16 = new cjs.Shape, this.shape_16.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_16.setTransform(340, 180), this.shape_17 = new cjs.Shape, this.shape_17.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_17.setTransform(560, 454), this.shape_18 = new cjs.Shape, this.shape_18.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_18.setTransform(80, 454), this.shape_19 = new cjs.Shape, this.shape_19.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_19.setTransform(80, 317), this.shape_20 = new cjs.Shape, this.shape_20.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_20.setTransform(80, 180), this.shape_21 = new cjs.Shape, this.shape_21.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_21.setTransform(560, 317), this.shape_22 = new cjs.Shape, this.shape_22.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_22.setTransform(820, 454), this.shape_23 = new cjs.Shape, this.shape_23.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 87.5).ss(5, 1, 1).p("AsfAAIY/AA"), this.shape_23.setTransform(820, 317), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_23
            }, {
                t: this.shape_22
            }, {
                t: this.shape_21
            }, {
                t: this.shape_20
            }, {
                t: this.shape_19
            }, {
                t: this.shape_18
            }, {
                t: this.shape_17
            }, {
                t: this.shape_16
            }, {
                t: this.shape_15
            }, {
                t: this.shape_14
            }, {
                t: this.text
            }, {
                t: this.shape_13
            }, {
                t: this.shape_12
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Logic6Diagram2, new cjs.Rectangle(-2.5, 0, 905, 456.5), null), (lib.Logic6Diagram1 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape.setTransform(348.45, 80.7), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHXAAIusAA"), this.shape_1.setTransform(286.5, 80.7), this.shape_2 = new cjs.Shape, this.shape_2.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_2.setTransform(348.45, 218.25), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHXAAIusAA"), this.shape_3.setTransform(286.5, 218.25), this.shape_4 = new cjs.Shape, this.shape_4.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_4.setTransform(348.45, 356.4), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHXAAIusAA"), this.shape_5.setTransform(286.5, 356.4), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_6.setTransform(502.95, 414.1), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_7.setTransform(100, 414.1), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_8.setTransform(502.95, 276.1), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_9.setTransform(100, 276.1), this.shape_10 = new cjs.Shape, this.shape_10.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_10.setTransform(502.95, 138.1), this.shape_11 = new cjs.Shape, this.shape_11.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_11.setTransform(100, 138.1), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Logic6Diagram1, new cjs.Rectangle(-2.5, 0, 608, 416.6), null), (lib.Logic5Diagram1 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape.setTransform(348.45, 530.25), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHWAAIusAA"), this.shape_1.setTransform(286.5, 530.25), this.shape_2 = new cjs.Shape, this.shape_2.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_2.setTransform(348.45, 222), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHWAAIusAA"), this.shape_3.setTransform(286.5, 222), this.shape_4 = new cjs.Shape, this.shape_4.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiVkrIErEsIkpErg"), this.shape_4.setTransform(348.45, 80), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHWAAIusAA"), this.shape_5.setTransform(286.5, 80), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_6.setTransform(502.95, 588.2), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_7.setTransform(100, 588.2), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_8.setTransform(502.95, 280.1), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_9.setTransform(100, 280.1), this.shape_10 = new cjs.Shape, this.shape_10.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_10.setTransform(502.95, 138.1), this.shape_11 = new cjs.Shape, this.shape_11.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_11.setTransform(100, 138.1), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Logic5Diagram1, new cjs.Rectangle(-2.5, 0, 608, 590.7), null), (lib.Logic4Diagram1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape.setTransform(632.5, 0), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_1.setTransform(632.5, 289.95), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_2.setTransform(267.5, 0), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_3.setTransform(267.5, 289.95), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_4.setTransform(85, 0), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_5.setTransform(85, 289.95), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_6.setTransform(450, 0), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_7.setTransform(450, 289.95), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_8.setTransform(815, 0), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .8, 10.5, 0, .8, 10.5, 92.9).ss(5, 1, 1).p("AtRAAIajAA"), this.shape_9.setTransform(815, 289.95), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Logic4Diagram1, new cjs.Rectangle(-2.5, -2.5, 905, 295), null), (lib.Logic3Diagram1 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHWAAIurAA"), this.shape.setTransform(286.4875, 324.3), this.shape_1 = new cjs.Shape, this.shape_1.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiUANIgBk4IErEsIkqErg"), this.shape_1.setTransform(348.45, 323), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHWAAIurAA"), this.shape_2.setTransform(286.4875, 55.8), this.shape_3 = new cjs.Shape, this.shape_3.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiUANIgBk4IErEsIkqErg"), this.shape_3.setTransform(348.45, 54.5), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_4.setTransform(502.95, 381.95), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_5.setTransform(100, 381.95), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_6.setTransform(502.95, 113.45), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_7.setTransform(100, 113.45), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Logic3Diagram1, new cjs.Rectangle(-2.5, -24.6, 608, 409.1), null), (lib.Logic1Diagram1 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHWAAIurAA"), this.shape.setTransform(286.4875, 423.3), this.shape_1 = new cjs.Shape, this.shape_1.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiUANIgBk4IErEsIkqErg"), this.shape_1.setTransform(348.45, 422), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 38.7, -8, 0, 38.7, -8, 92.2).ss(10, 1, 1).p("AHWAAIurAA"), this.shape_2.setTransform(286.4875, 56.3), this.shape_3 = new cjs.Shape, this.shape_3.graphics.rf(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 33.4).s().p("AiUANIgBk4IErEsIkqErg"), this.shape_3.setTransform(348.45, 55), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_4.setTransform(502.9, 479.45), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_5.setTransform(100, 479.45), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_6.setTransform(502.9, 113.45), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_7.setTransform(100, 113.45), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Logic1Diagram1, new cjs.Rectangle(-2.5, -24.6, 607.9, 506.6), null), (lib.InOutDiagram8 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("OUT", "normal 400 56px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 64, this.text.lineWidth = 131, (this.text.parent = this).text.setTransform(669, -10.95), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.text_1 = new cjs.Text("IN", "normal 400 56px 'Lato'", "#676767"), this.text_1.textAlign = "center", this.text_1.lineHeight = 64, this.text_1.lineWidth = 100, (this.text_1.parent = this).text_1.setTransform(211, -10.95), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .9, 10.3, 0, .9, 10.3, 283.9).ss(5, 1, 1).p("EgonAAAMBRPAAA"), this.shape.setTransform(669.0124, 70, .4808, 1), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.3, 0, 1, 10.3, 283.9).ss(5, 1, 1).p("EgonAAAMBRPAAA"), this.shape_1.setTransform(211.0124, 70, .4808, 1), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -10.4, 1, 0, -10.4, 1, 273).ss(5, 1, 1).p("EAAAgnDMAAABOH"), this.shape_2.setTransform(441, 240.002, 1, .96), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.txt = new cjs.Text("E", "normal 900 65px 'Lato'", "#676767"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 74, this.txt.lineWidth = 196, (this.txt.parent = this).txt.setTransform(486, 591, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.correctTxt = new cjs.Text("D/A", "normal 900 51px 'Lato'", "#676767"), this.correctTxt.name = "correctTxt", this.correctTxt.textAlign = "center", this.correctTxt.lineHeight = 60, this.correctTxt.lineWidth = 146, (this.correctTxt.parent = this).correctTxt.setTransform(830, 598.5, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.correctTxt)), this.correctTxt_1 = new cjs.Text("A/D", "normal 900 51px 'Lato'", "#676767"), this.correctTxt_1.name = "correctTxt_1", this.correctTxt_1.textAlign = "center", this.correctTxt_1.lineHeight = 60, this.correctTxt_1.lineWidth = 146, (this.correctTxt_1.parent = this).correctTxt_1.setTransform(701.5, 598.5, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.correctTxt_1)), this.text_2 = new cjs.Text("+", "normal 400 52px 'Lato'", "#676767"), this.text_2.textAlign = "center", this.text_2.lineHeight = 59, this.text_2.lineWidth = 46, (this.text_2.parent = this).text_2.setTransform(765.775, 602.5, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_2)), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().s("#8C659C").ss(5, 1, 1).p("AhAB7IPnAAATEB7IPoAAAzDh6IPoAAEgirAB7IPoAA"), this.shape_3.setTransform(658, 619.725), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f("#8C659C").s().p("AhKAAIAAiVICVCVIiVCWg"), this.shape_4.setTransform(643.5, 607.45), this.text_3 = new cjs.Text("Rule #4", "normal 700 22px 'Lato'", "#676767"), this.text_3.textAlign = "center", this.text_3.lineHeight = 25, this.text_3.lineWidth = 100, (this.text_3.parent = this).text_3.setTransform(658, 642.35), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_3)), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().s("#8C659C").ss(5, 1, 1).p("Ah7B8ID3j3"), this.shape_5.setTransform(49.975, 605.775), this.txt_1 = new cjs.Text("B", "normal 900 65px 'Lato'", "#676767"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 74, this.txt_1.lineWidth = 196, (this.txt_1.parent = this).txt_1.setTransform(50, 591, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_1)), this.txt_2 = new cjs.Text("A", "normal 900 65px 'Lato'", "#676767"), this.txt_2.name = "txt_2", this.txt_2.textAlign = "center", this.txt_2.lineHeight = 74, this.txt_2.lineWidth = 196, (this.txt_2.parent = this).txt_2.setTransform(305, 591, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_2)), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().s("#8C659C").ss(5, 1, 1).p("AMHCGIPoAAAsGiFIV3AAA7uCGIPoAA"), this.shape_6.setTransform(177.5, 618.625), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f("#8C659C").s().p("AhKADIAAiYICVCWIiUCVg"), this.shape_7.setTransform(247.5, 605), this.text_4 = new cjs.Text("Rule #3", "normal 700 25px 'Lato'", "#676767"), this.text_4.textAlign = "center", this.text_4.lineHeight = 28, this.text_4.lineWidth = 100, (this.text_4.parent = this).text_4.setTransform(177.5, 639), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_4)), this.txt_3 = new cjs.Text("D", "normal 900 65px 'Lato'", "#676767"), this.txt_3.name = "txt_3", this.txt_3.textAlign = "center", this.txt_3.lineHeight = 74, this.txt_3.lineWidth = 196, (this.txt_3.parent = this).txt_3.setTransform(830, 501, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_3)), this.txt_4 = new cjs.Text("B", "normal 900 65px 'Lato'", "#676767"), this.txt_4.name = "txt_4", this.txt_4.textAlign = "center", this.txt_4.lineHeight = 74, this.txt_4.lineWidth = 196, (this.txt_4.parent = this).txt_4.setTransform(701.5, 501, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_4)), this.txt_5 = new cjs.Text("C", "normal 900 65px 'Lato'", "#676767"), this.txt_5.name = "txt_5", this.txt_5.textAlign = "center", this.txt_5.lineHeight = 74, this.txt_5.lineWidth = 196, (this.txt_5.parent = this).txt_5.setTransform(486, 501, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_5)), this.text_5 = new cjs.Text("OR", "normal 400 28px 'Lato'", "#676767"), this.text_5.textAlign = "center", this.text_5.lineHeight = 33, this.text_5.lineWidth = 46, (this.text_5.parent = this).text_5.setTransform(765.725, 521.4, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_5)), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f().s("#8C659C").ss(5, 1, 1).p("AhACAIPnAAATECAIPoAAAzDh/IPoAAEgirACAIPoAA"), this.shape_8.setTransform(658, 529.275), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f("#8C659C").s().p("AhKiVICVCVIiUCWg"), this.shape_9.setTransform(644, 516.3), this.text_6 = new cjs.Text("Rule #2", "normal 700 25px 'Lato'", "#676767"), this.text_6.textAlign = "center", this.text_6.lineHeight = 28, this.text_6.lineWidth = 100, (this.text_6.parent = this).text_6.setTransform(658, 549), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_6)), this.shape_10 = new cjs.Shape, this.shape_10.graphics.f().s("#8C659C").ss(5, 1, 1).p("Ah7B8ID3j3"), this.shape_10.setTransform(306.575, 515.775), this.txt_6 = new cjs.Text("C", "normal 900 65px 'Lato'", "#676767"), this.txt_6.name = "txt_6", this.txt_6.textAlign = "center", this.txt_6.lineHeight = 74, this.txt_6.lineWidth = 196, (this.txt_6.parent = this).txt_6.setTransform(305, 501, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_6)), this.txt_7 = new cjs.Text("A", "normal 900 65px 'Lato'", "#676767"), this.txt_7.name = "txt_7", this.txt_7.textAlign = "center", this.txt_7.lineHeight = 74, this.txt_7.lineWidth = 196, (this.txt_7.parent = this).txt_7.setTransform(50, 501, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_7)), this.shape_11 = new cjs.Shape, this.shape_11.graphics.f().s("#8C659C").ss(5, 1, 1).p("A7uCAIPoAAAsGh/IV4AAAMHCAIPoAA"), this.shape_11.setTransform(177.5, 529.225), this.shape_12 = new cjs.Shape, this.shape_12.graphics.f("#8C659C").s().p("AhKACIAAiXICVCVIiVCWg"), this.shape_12.setTransform(247.5, 516.2), this.text_7 = new cjs.Text("Rule #1", "normal 700 25px 'Lato'", "#676767"), this.text_7.textAlign = "center", this.text_7.lineHeight = 28, this.text_7.lineWidth = 100, (this.text_7.parent = this).text_7.setTransform(177.5, 549), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_7)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_7
            }, {
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.txt_7
            }, {
                t: this.txt_6
            }, {
                t: this.shape_10
            }, {
                t: this.text_6
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.text_5
            }, {
                t: this.txt_5
            }, {
                t: this.txt_4
            }, {
                t: this.txt_3
            }, {
                t: this.text_4
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.txt_2
            }, {
                t: this.txt_1
            }, {
                t: this.shape_5
            }, {
                t: this.text_3
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.text_2
            }, {
                t: this.correctTxt_1
            }, {
                t: this.correctTxt
            }, {
                t: this.txt
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.InOutDiagram8, new cjs.Rectangle(-2.5, -12.9, 885, 681.8), null), (lib.InOutDiagram7 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(10, 1, 1).p("APtXwI/ZAAAPt3vI/ZAA"), this.shape.setTransform(300.5375, 239), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#8C659C").s().p("AiUXwIgBksIErEtIkqErgAiU3vIgBksIErEtIkqErg"), this.shape_1.setTransform(416, 239), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.text = new cjs.Text("+", "normal 400 52px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 59, this.text.lineWidth = 46, (this.text.parent = this).text.setTransform(656, 383.05), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.text_1 = new cjs.Text("OR", "normal 400 32px 'Lato'", "#676767"), this.text_1.textAlign = "center", this.text_1.lineHeight = 37, this.text_1.lineWidth = 100, (this.text_1.parent = this).text_1.setTransform(444, 250.65), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#8C659C").ss(5, 1, 1).p("EgiwAMgIAA4/MBFhAAAIAAAUIAAYrgABkJEIfQAAEggzAJEIfQAA"), this.shape_2.setTransform(665.5, 80), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -234.6, 79, 0, -234.6, 79, 247.9).ss(5, 1, 1).p("AgBABIADgB"), this.shape_3.setTransform(888.175, 1.95), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAmIAXwIfQAAEhFXgXvIfQAAEhFXAXwIfQAAAiBXwIfPAA"), this.shape_4.setTransform(444, 290), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.InOutDiagram7, new cjs.Rectangle(-2.5, -2.5, 893.4, 447), null), (lib.InOutDiagram6 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("OUT", "normal 400 56px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 64, this.text.lineWidth = 131, (this.text.parent = this).text.setTransform(669, -10.95), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.text_1 = new cjs.Text("IN", "normal 400 56px 'Lato'", "#676767"), this.text_1.textAlign = "center", this.text_1.lineHeight = 64, this.text_1.lineWidth = 100, (this.text_1.parent = this).text_1.setTransform(211, -10.95), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAAKgjJMAAABGTEg3TgYNMAnEAAAAQQ4NMAnEAAA"), this.shape.setTransform(440, 225.025), this.timeline.addTween(cjs.Tween.get(this.shape).wait(1)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().s("#8C659C").ss(5, 1, 1).p("Ah7B8ID3j3"), this.shape_1.setTransform(312.475, 605.775), this.txt = new cjs.Text("B", "normal 900 65px 'Lato'", "#676767"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 74, this.txt.lineWidth = 196, (this.txt.parent = this).txt.setTransform(312.5, 591, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.txt_1 = new cjs.Text("A", "normal 900 65px 'Lato'", "#676767"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 74, this.txt_1.lineWidth = 196, (this.txt_1.parent = this).txt_1.setTransform(567.5, 591, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#8C659C").ss(5, 1, 1).p("AMHCGIPoAAAsGiFIV3AAA7uCGIPoAA"), this.shape_2.setTransform(440, 618.625), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f("#8C659C").s().p("AhKADIAAiYICVCWIiUCVg"), this.shape_3.setTransform(510, 605), this.text_2 = new cjs.Text("Rule #3", "normal 700 25px 'Lato'", "#676767"), this.text_2.textAlign = "center", this.text_2.lineHeight = 28, this.text_2.lineWidth = 100, (this.text_2.parent = this).text_2.setTransform(440, 639), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_2)), this.txt_2 = new cjs.Text("D", "normal 900 65px 'Lato'", "#676767"), this.txt_2.name = "txt_2", this.txt_2.textAlign = "center", this.txt_2.lineHeight = 74, this.txt_2.lineWidth = 196, (this.txt_2.parent = this).txt_2.setTransform(830, 491, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_2)), this.txt_3 = new cjs.Text("B", "normal 900 65px 'Lato'", "#676767"), this.txt_3.name = "txt_3", this.txt_3.textAlign = "center", this.txt_3.lineHeight = 74, this.txt_3.lineWidth = 196, (this.txt_3.parent = this).txt_3.setTransform(701.5, 491, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_3)), this.txt_4 = new cjs.Text("C", "normal 900 65px 'Lato'", "#676767"), this.txt_4.name = "txt_4", this.txt_4.textAlign = "center", this.txt_4.lineHeight = 74, this.txt_4.lineWidth = 196, (this.txt_4.parent = this).txt_4.setTransform(486, 491, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_4)), this.text_3 = new cjs.Text("OR", "normal 400 28px 'Lato'", "#676767"), this.text_3.textAlign = "center", this.text_3.lineHeight = 33, this.text_3.lineWidth = 46, (this.text_3.parent = this).text_3.setTransform(765.725, 511.4, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_3)), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().s("#8C659C").ss(5, 1, 1).p("AhACAIPnAAATECAIPoAAAzDh/IPoAAEgirACAIPoAA"), this.shape_4.setTransform(658, 519.275), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f("#8C659C").s().p("AhKiVICVCVIiUCWg"), this.shape_5.setTransform(644, 506.3), this.text_4 = new cjs.Text("Rule #2", "normal 700 25px 'Lato'", "#676767"), this.text_4.textAlign = "center", this.text_4.lineHeight = 28, this.text_4.lineWidth = 100, (this.text_4.parent = this).text_4.setTransform(658, 539), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_4)), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().s("#8C659C").ss(5, 1, 1).p("Ah7B8ID3j3"), this.shape_6.setTransform(306.575, 505.775), this.txt_5 = new cjs.Text("C", "normal 900 65px 'Lato'", "#676767"), this.txt_5.name = "txt_5", this.txt_5.textAlign = "center", this.txt_5.lineHeight = 74, this.txt_5.lineWidth = 196, (this.txt_5.parent = this).txt_5.setTransform(305, 491, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_5)), this.txt_6 = new cjs.Text("A", "normal 900 65px 'Lato'", "#676767"), this.txt_6.name = "txt_6", this.txt_6.textAlign = "center", this.txt_6.lineHeight = 74, this.txt_6.lineWidth = 196, (this.txt_6.parent = this).txt_6.setTransform(50, 491, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_6)), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().s("#8C659C").ss(5, 1, 1).p("A7uCAIPoAAAsGh/IV4AAAMHCAIPoAA"), this.shape_7.setTransform(177.5, 519.225), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f("#8C659C").s().p("AhKACIAAiXICVCVIiVCWg"), this.shape_8.setTransform(247.5, 506.2), this.text_5 = new cjs.Text("Rule #1", "normal 700 25px 'Lato'", "#676767"), this.text_5.textAlign = "center", this.text_5.lineHeight = 28, this.text_5.lineWidth = 100, (this.text_5.parent = this).text_5.setTransform(177.5, 539), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_5)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_5
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.txt_6
            }, {
                t: this.txt_5
            }, {
                t: this.shape_6
            }, {
                t: this.text_4
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.text_3
            }, {
                t: this.txt_4
            }, {
                t: this.txt_3
            }, {
                t: this.txt_2
            }, {
                t: this.text_2
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }, {
                t: this.shape_1
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.InOutDiagram6, new cjs.Rectangle(-2.5, -12.9, 885, 681.8), null), (lib.InOutDiagram5 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(10, 1, 1).p("ATj5dMgrwAAAA4NZeMAwbAAA"), this.shape.setTransform(355, 177), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#8C659C").s().p("AiUAAIgBkrIErEsIkqErg"), this.shape_1.setTransform(495, 14), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.text = new cjs.Text("OR", "normal 400 32px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 37, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(355, 184.65), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.timeline.addTween(cjs.Tween.get(this.text).wait(1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#8C659C").ss(5, 1, 1).p("Eg3dgZdIfQAAEg3dAZeIfQAAAYO5dIfQAAAYOZeIfQAA"), this.shape_2.setTransform(355, 228), this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.InOutDiagram5, new cjs.Rectangle(-2.5, -16, 715, 409.5), null), (lib.InOutDiagram4 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("OUT", "normal 400 56px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 64, this.text.lineWidth = 131, (this.text.parent = this).text.setTransform(669, -11.85), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.text_1 = new cjs.Text("IN", "normal 400 56px 'Lato'", "#676767"), this.text_1.textAlign = "center", this.text_1.lineHeight = 64, this.text_1.lineWidth = 100, (this.text_1.parent = this).text_1.setTransform(211, -11.85), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("EhEvgYOMBB8AAAEAAKgjJMAAABGTAC04OMBB8AAA"), this.shape.setTransform(440, 225.075), this.timeline.addTween(cjs.Tween.get(this.shape).wait(1)), this.txt = new cjs.Text("D", "normal 900 65px 'Lato'", "#676767"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 74, this.txt.lineWidth = 196, (this.txt.parent = this).txt.setTransform(830, 501, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.txt_1 = new cjs.Text("B", "normal 900 65px 'Lato'", "#676767"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 74, this.txt_1.lineWidth = 196, (this.txt_1.parent = this).txt_1.setTransform(701.5, 501, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_1)), this.txt_2 = new cjs.Text("C", "normal 900 65px 'Lato'", "#676767"), this.txt_2.name = "txt_2", this.txt_2.textAlign = "center", this.txt_2.lineHeight = 74, this.txt_2.lineWidth = 196, (this.txt_2.parent = this).txt_2.setTransform(486, 501, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_2)), this.text_2 = new cjs.Text("OR", "normal 400 28px 'Lato'", "#676767"), this.text_2.textAlign = "center", this.text_2.lineHeight = 33, this.text_2.lineWidth = 46, (this.text_2.parent = this).text_2.setTransform(765.725, 521.4, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_2)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().s("#8C659C").ss(5, 1, 1).p("AhACAIPnAAATECAIPoAAAzDh/IPoAAEgirACAIPoAA"), this.shape_1.setTransform(658, 529.275), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f("#8C659C").s().p("AhKiVICVCVIiUCWg"), this.shape_2.setTransform(644, 516.3), this.text_3 = new cjs.Text("Rule #2", "normal 700 25px 'Lato'", "#676767"), this.text_3.textAlign = "center", this.text_3.lineHeight = 28, this.text_3.lineWidth = 100, (this.text_3.parent = this).text_3.setTransform(658, 549), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_3)), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().s("#8C659C").ss(5, 1, 1).p("Ah7B8ID3j3"), this.shape_3.setTransform(306.575, 515.775), this.txt_3 = new cjs.Text("C", "normal 900 65px 'Lato'", "#676767"), this.txt_3.name = "txt_3", this.txt_3.textAlign = "center", this.txt_3.lineHeight = 74, this.txt_3.lineWidth = 196, (this.txt_3.parent = this).txt_3.setTransform(305, 501, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_3)), this.txt_4 = new cjs.Text("A", "normal 900 65px 'Lato'", "#676767"), this.txt_4.name = "txt_4", this.txt_4.textAlign = "center", this.txt_4.lineHeight = 74, this.txt_4.lineWidth = 196, (this.txt_4.parent = this).txt_4.setTransform(50, 501, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_4)), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().s("#8C659C").ss(5, 1, 1).p("A7uCAIPoAAAsGh/IV4AAAMHCAIPoAA"), this.shape_4.setTransform(177.5, 529.225), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f("#8C659C").s().p("AhKACIAAiXICVCVIiVCWg"), this.shape_5.setTransform(247.5, 516.2), this.text_4 = new cjs.Text("Rule #1", "normal 700 25px 'Lato'", "#676767"), this.text_4.textAlign = "center", this.text_4.lineHeight = 28, this.text_4.lineWidth = 100, (this.text_4.parent = this).text_4.setTransform(177.5, 549), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_4)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_4
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.txt_4
            }, {
                t: this.txt_3
            }, {
                t: this.shape_3
            }, {
                t: this.text_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.text_2
            }, {
                t: this.txt_2
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.InOutDiagram4, new cjs.Rectangle(-2.5, -13.8, 885, 592.6999999999999), null), (lib.InOutDiagram3 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(10, 1, 1).p("APtd6I/ZAAAPt95I/ZAA"), this.shape.setTransform(300.5375, 205.375), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#8C659C").s().p("AiUd6IgBksIErEtIkqErgAiU95IgBksIErEtIkqErg"), this.shape_1.setTransform(416, 205.375), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#8C659C").ss(5, 1, 1).p("EgiwAMgIAA4/MBFhAAAIAAAUIAAYrgABkJFIfQAAEggzAJFIfQAA"), this.shape_2.setTransform(665.5, 389.95), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -234.6, 79, 0, -234.6, 79, 247.9).ss(5, 1, 1).p("AgBABIADgB"), this.shape_3.setTransform(888.175, 311.9), this.text = new cjs.Text("OR", "normal 400 28px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 33, this.text.lineWidth = 46, (this.text.parent = this).text.setTransform(659.5, 23.8), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.text_1 = new cjs.Text("OR", "normal 400 32px 'Lato'", "#676767"), this.text_1.textAlign = "center", this.text_1.lineHeight = 37, this.text_1.lineWidth = 100, (this.text_1.parent = this).text_1.setTransform(444, 169.65), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAmIgd6IfQAAAiB96IfPAAEhFXgd6IfQAAEhFXAd7IfQAA"), this.shape_4.setTransform(444, 256.55), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_4
            }, {
                t: this.text_1
            }, {
                t: this.text
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.InOutDiagram3, new cjs.Rectangle(-2.5, -16, 893.4, 488.5), null), (lib.InOutDiagram2 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("OUT", "normal 400 56px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 64, this.text.lineWidth = 131, (this.text.parent = this).text.setTransform(669, -11.55), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.text_1 = new cjs.Text("IN", "normal 400 56px 'Lato'", "#676767"), this.text_1.textAlign = "center", this.text_1.lineHeight = 64, this.text_1.lineWidth = 100, (this.text_1.parent = this).text_1.setTransform(211, -11.55), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("Eg3Tgc5MAnEAAAEAAKgn1MAAABPrAQQ85MAnEAAA"), this.shape.setTransform(440, 255.05), this.timeline.addTween(cjs.Tween.get(this.shape).wait(1)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().s("#8C659C").ss(5, 1, 1).p("Ah7B8ID3j3"), this.shape_1.setTransform(566.575, 585.775), this.txt = new cjs.Text("C", "normal 900 65px 'Lato'", "#676767"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 74, this.txt.lineWidth = 196, (this.txt.parent = this).txt.setTransform(565, 571, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.txt_1 = new cjs.Text("A", "normal 900 65px 'Lato'", "#676767"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 74, this.txt_1.lineWidth = 196, (this.txt_1.parent = this).txt_1.setTransform(310, 571, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#8C659C").ss(5, 1, 1).p("AMHCAIPoAAAsGh/IV3AAA7uCAIPoAA"), this.shape_2.setTransform(437.5, 599.225), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f("#8C659C").s().p("AhKACIAAiXICVCWIiVCVg"), this.shape_3.setTransform(507.5, 586.2), this.text_2 = new cjs.Text("Rule #1", "normal 700 25px 'Lato'", "#676767"), this.text_2.textAlign = "center", this.text_2.lineHeight = 28, this.text_2.lineWidth = 100, (this.text_2.parent = this).text_2.setTransform(437.5, 619), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_2)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_2
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }, {
                t: this.shape_1
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.InOutDiagram2, new cjs.Rectangle(83.5, -13.5, 713, 662.4), null), (lib.InOutDiagram1 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(10, 1, 1).p("AV4AAMgrvAAA"), this.shape.setTransform(340.0375, 14), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().s("#8C659C").ss(5, 1, 1).p("Eg3dAAAIfQAAAYOAAIfQAA"), this.shape_1.setTransform(355, 65.1), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f("#8C659C").s().p("AiUAAIgBkrIErEsIkqErg"), this.shape_2.setTransform(495, 14), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.text = new cjs.Text("OR", "normal 400 32px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 37, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(355, 169.65), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.timeline.addTween(cjs.Tween.get(this.text).wait(1)), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAksgMMIAAYsMhJbAAAIAA4/MBJbAAAIAAATIAEgBACQJEIfQAAEghkAJEIfQAA"), this.shape_3.setTransform(355.2, 389.95), this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.InOutDiagram1, new cjs.Rectangle(-2.5, -16, 715, 488.5), null), (lib.Hybrid5 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 10.5, 0, .5, 10.5, 73.8).ss(5, 1, 1).p("AqiAAIVFAA"), this.shape.setTransform(832.5, 230), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 10.5, 0, .5, 10.5, 73.8).ss(5, 1, 1).p("AqiAAIVFAA"), this.shape_1.setTransform(687.5, 230), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 10.5, 0, .5, 10.5, 73.8).ss(5, 1, 1).p("AqiAAIVFAA"), this.shape_2.setTransform(522.5, 230), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 10.5, 0, .5, 10.5, 73.8).ss(5, 1, 1).p("AqiAAIVFAA"), this.shape_3.setTransform(377.5, 230), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 10.5, 0, .5, 10.5, 73.8).ss(5, 1, 1).p("AqiAAIVFAA"), this.shape_4.setTransform(212.5, 230), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 10.5, 0, .5, 10.5, 73.8).ss(5, 1, 1).p("AqiAAIVFAA"), this.shape_5.setTransform(67.5, 230), this.txt = new cjs.Text("E/B", "bold 65px 'Arial'"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 73, this.txt.lineWidth = 196, (this.txt.parent = this).txt.setTransform(770.15, 561.75, .501, .5009), this.txt_1 = new cjs.Text("B/E", "bold 65px 'Arial'"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 73, this.txt_1.lineWidth = 196, (this.txt_1.parent = this).txt_1.setTransform(655.25, 561.75, .501, .5009), this.text = new cjs.Text("(Rule #4)", "bold 22px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 25, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(705.55, 622.65), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 5.2, 0, .5, 5.2, 54.8).ss(5, 1, 1).p("An0AAIPpAA"), this.shape_6.setTransform(770.15, 599.15), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 5.2, 0, .5, 5.2, 54.8).ss(5, 1, 1).p("An0AAIPpAA"), this.shape_7.setTransform(655.3, 599.15), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 126.8).ss(5, 1, 1).p("AyYGMIAAscMAkxAAAIAAMhMgkxAAA"), this.shape_8.setTransform(712.725, 570.075), this.txt_2 = new cjs.Text("F", "bold 65px 'Arial'"), this.txt_2.name = "txt_2", this.txt_2.textAlign = "center", this.txt_2.lineHeight = 73, this.txt_2.lineWidth = 196, (this.txt_2.parent = this).txt_2.setTransform(375, 570.35, .5, .4993), this.txt_3 = new cjs.Text("C", "bold 65px 'Arial'"), this.txt_3.name = "txt_3", this.txt_3.textAlign = "center", this.txt_3.lineHeight = 73, this.txt_3.lineWidth = 196, (this.txt_3.parent = this).txt_3.setTransform(120, 570.35, .5, .4993), this.text_1 = new cjs.Text("(Rule #3)", "bold 22px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 25, this.text_1.lineWidth = 100, (this.text_1.parent = this).text_1.setTransform(247.55, 622.65), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 5.2, 0, .5, 5.2, 54.7).ss(5, 1, 1).p("AnzAAIPnAA"), this.shape_9.setTransform(120.05, 607.65), this.shape_10 = new cjs.Shape, this.shape_10.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .6, 5.2, 0, .6, 5.2, 84.7).ss(5, 1, 1).p("AsGAAIYNAA"), this.shape_10.setTransform(247.55, 582.1), this.shape_11 = new cjs.Shape, this.shape_11.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 5.2, 0, .5, 5.2, 54.7).ss(5, 1, 1).p("AnzAAIPnAA"), this.shape_11.setTransform(375.05, 607.65), this.text_2 = new cjs.Text("Bronze", "bold 36px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 42, this.text_2.lineWidth = 166, (this.text_2.parent = this).text_2.setTransform(760, 19), this.shape_12 = new cjs.Shape, this.shape_12.graphics.f().s("#000000").ss(2, 1, 1).p("AtRldIajAAIAAK7I6jAAg"), this.shape_12.setTransform(760, 35), this.text_3 = new cjs.Text("Silver", "bold 36px 'Arial'"), this.text_3.textAlign = "center", this.text_3.lineHeight = 42, this.text_3.lineWidth = 166, (this.text_3.parent = this).text_3.setTransform(450, 19), this.shape_13 = new cjs.Shape, this.shape_13.graphics.f().s("#000000").ss(2, 1, 1).p("AtRldIajAAIAAK7I6jAAg"), this.shape_13.setTransform(450, 35), this.text_4 = new cjs.Text("Gold", "bold 36px 'Arial'"), this.text_4.textAlign = "center", this.text_4.lineHeight = 42, this.text_4.lineWidth = 166, (this.text_4.parent = this).text_4.setTransform(140, 19), this.shape_14 = new cjs.Shape, this.shape_14.graphics.f().s("#000000").ss(2, 1, 1).p("AtRldIajAAIAAK7I6jAAg"), this.shape_14.setTransform(140, 35), this.shape_15 = new cjs.Shape, this.shape_15.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -10.4, 1.5, 0, -10.4, 1.5, 259.5).ss(5, 1, 1).p("EAAAglGMAAABKN"), this.shape_15.setTransform(605, 237.5), this.shape_16 = new cjs.Shape, this.shape_16.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -10.4, 1.5, 0, -10.4, 1.5, 259.5).ss(5, 1, 1).p("EAAAglGMAAABKN"), this.shape_16.setTransform(295, 237.5), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_16
            }, {
                t: this.shape_15
            }, {
                t: this.shape_14
            }, {
                t: this.text_4
            }, {
                t: this.shape_13
            }, {
                t: this.text_3
            }, {
                t: this.shape_12
            }, {
                t: this.text_2
            }, {
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.text_1
            }, {
                t: this.txt_3
            }, {
                t: this.txt_2
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.text
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Hybrid5, new cjs.Rectangle(-2.5, -2.5, 905, 651.7), null), (lib.Hybrid4 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.txt = new cjs.Text("F", "bold 65px 'Arial'"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 73, this.txt.lineWidth = 196, (this.txt.parent = this).txt.setTransform(577.45, 521, .5, .4993), this.txt_1 = new cjs.Text("C", "bold 65px 'Arial'"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 73, this.txt_1.lineWidth = 196, (this.txt_1.parent = this).txt_1.setTransform(322.45, 521, .5, .4993), this.text = new cjs.Text("(Rule #3)", "bold 22px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 25, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(450, 573.3), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 5.2, 0, .5, 5.2, 54.7).ss(5, 1, 1).p("AnzAAIPnAA"), this.shape.setTransform(322.5, 558.3), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .6, 5.2, 0, .6, 5.2, 84.7).ss(5, 1, 1).p("AsGAAIYNAA"), this.shape_1.setTransform(450, 532.75), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 5.2, 0, .5, 5.2, 54.7).ss(5, 1, 1).p("AnzAAIPnAA"), this.shape_2.setTransform(577.5, 558.3), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 10.5, 0, .5, 10.5, 73.8).ss(5, 1, 1).p("AqiAAIVFAA"), this.shape_3.setTransform(832.5, 230), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 10.5, 0, .5, 10.5, 73.8).ss(5, 1, 1).p("AqiAAIVFAA"), this.shape_4.setTransform(687.5, 230), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 10.5, 0, .5, 10.5, 73.8).ss(5, 1, 1).p("AqiAAIVFAA"), this.shape_5.setTransform(522.5, 230), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 10.5, 0, .5, 10.5, 73.8).ss(5, 1, 1).p("AqiAAIVFAA"), this.shape_6.setTransform(377.5, 230), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 10.5, 0, .5, 10.5, 73.8).ss(5, 1, 1).p("AqiAAIVFAA"), this.shape_7.setTransform(212.5, 230), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 10.5, 0, .5, 10.5, 73.8).ss(5, 1, 1).p("AqiAAIVFAA"), this.shape_8.setTransform(67.5, 230), this.text_1 = new cjs.Text("Bronze", "bold 36px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 42, this.text_1.lineWidth = 166, (this.text_1.parent = this).text_1.setTransform(760, 19), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f().s("#000000").ss(2, 1, 1).p("AtRldIajAAIAAK7I6jAAg"), this.shape_9.setTransform(760, 35), this.text_2 = new cjs.Text("Silver", "bold 36px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 42, this.text_2.lineWidth = 166, (this.text_2.parent = this).text_2.setTransform(450, 19), this.shape_10 = new cjs.Shape, this.shape_10.graphics.f().s("#000000").ss(2, 1, 1).p("AtRldIajAAIAAK7I6jAAg"), this.shape_10.setTransform(450, 35), this.text_3 = new cjs.Text("Gold", "bold 36px 'Arial'"), this.text_3.textAlign = "center", this.text_3.lineHeight = 42, this.text_3.lineWidth = 166, (this.text_3.parent = this).text_3.setTransform(140, 19), this.shape_11 = new cjs.Shape, this.shape_11.graphics.f().s("#000000").ss(2, 1, 1).p("AtRldIajAAIAAK7I6jAAg"), this.shape_11.setTransform(140, 35), this.shape_12 = new cjs.Shape, this.shape_12.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -10.4, 1.5, 0, -10.4, 1.5, 259.5).ss(5, 1, 1).p("EAAAglGMAAABKN"), this.shape_12.setTransform(605, 237.5), this.shape_13 = new cjs.Shape, this.shape_13.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -10.4, 1.5, 0, -10.4, 1.5, 259.5).ss(5, 1, 1).p("EAAAglGMAAABKN"), this.shape_13.setTransform(295, 237.5), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_13
            }, {
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.text_3
            }, {
                t: this.shape_10
            }, {
                t: this.text_2
            }, {
                t: this.shape_9
            }, {
                t: this.text_1
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.text
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Hybrid4, new cjs.Rectangle(-2.5, -2.5, 905, 602.4), null), (lib.Hybrid3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.1, 0, 0, -.1, 0, 253.2).ss(5, 1, 1).p("EgktAMgIAA4/MBJbAAAIAAY/g"), this.shape.setTransform(355, 375.95), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1.3, 10.5, 0, 1.3, 10.5, 169.5).ss(5, 1, 1).p("A4NAAMAwbAAA"), this.shape_1.setTransform(355, 0), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_2.setTransform(610, 51.1), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_3.setTransform(100, 51.1), this.text = new cjs.Text("OR", "32px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 38, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(355, 155.65), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_4.setTransform(469.6, 433.95), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_5.setTransform(240.3, 433.95), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.text
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Hybrid3, new cjs.Rectangle(-2.5, -2.5, 715, 461), null), (lib.Hybrid2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.txt = new cjs.Text("D/B", "bold 65px 'Arial'"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 73, this.txt.lineWidth = 196, (this.txt.parent = this).txt.setTransform(485.5, 511.75, .501, .5009), this.txt_1 = new cjs.Text("B/D", "bold 65px 'Arial'"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 73, this.txt_1.lineWidth = 196, (this.txt_1.parent = this).txt_1.setTransform(370.6, 511.75, .501, .5009), this.text = new cjs.Text("(Rule #1)", "bold 22px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 25, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(420.9, 572.65), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .4, -.5, 0, .4, -.5, 125.8).ss(5, 1, 1).p("ASYmHI/vKlIk9BpIgDAB"), this.shape.setTransform(427.625, 520.55), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 5.2, 0, .5, 5.2, 54.8).ss(5, 1, 1).p("An0AAIDXAAIMSAA"), this.shape_1.setTransform(370.65, 549.15), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 5.2, 0, .5, 5.2, 54.8).ss(5, 1, 1).p("An0AAIPpAA"), this.shape_2.setTransform(485.5, 549.15), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 0, 0, 0, 0, 0, 126.8).ss(5, 1, 1).p("AyYGRIAAgFIAAscMAkxAAAIAAMhg"), this.shape_3.setTransform(428.075, 520.075), this.text_1 = new cjs.Text("Bronze", "bold 36px 'Arial'"), this.text_1.textAlign = "center", this.text_1.lineHeight = 42, this.text_1.lineWidth = 166, (this.text_1.parent = this).text_1.setTransform(760, 19), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().s("#000000").ss(2, 1, 1).p("AtRldIajAAIAAK7I6jAAg"), this.shape_4.setTransform(760, 35), this.text_2 = new cjs.Text("Silver", "bold 36px 'Arial'"), this.text_2.textAlign = "center", this.text_2.lineHeight = 42, this.text_2.lineWidth = 166, (this.text_2.parent = this).text_2.setTransform(450, 19), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().s("#000000").ss(2, 1, 1).p("AtRldIajAAIAAK7I6jAAg"), this.shape_5.setTransform(450, 35), this.text_3 = new cjs.Text("Gold", "bold 36px 'Arial'"), this.text_3.textAlign = "center", this.text_3.lineHeight = 42, this.text_3.lineWidth = 166, (this.text_3.parent = this).text_3.setTransform(140, 19), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().s("#000000").ss(2, 1, 1).p("AtRldIajAAIAAK7I6jAAg"), this.shape_6.setTransform(140, 35), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 10.5, 0, .5, 10.5, 73.8).ss(5, 1, 1).p("AqiAAIVFAA"), this.shape_7.setTransform(832.5, 270), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 10.5, 0, .5, 10.5, 73.8).ss(5, 1, 1).p("AqiAAIVFAA"), this.shape_8.setTransform(687.5, 270), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 10.5, 0, .5, 10.5, 73.8).ss(5, 1, 1).p("AqiAAIVFAA"), this.shape_9.setTransform(522.5, 270), this.shape_10 = new cjs.Shape, this.shape_10.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 10.5, 0, .5, 10.5, 73.8).ss(5, 1, 1).p("AqiAAIVFAA"), this.shape_10.setTransform(377.5, 270), this.shape_11 = new cjs.Shape, this.shape_11.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 10.5, 0, .5, 10.5, 73.8).ss(5, 1, 1).p("AqiAAIVFAA"), this.shape_11.setTransform(212.5, 270), this.shape_12 = new cjs.Shape, this.shape_12.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .5, 10.5, 0, .5, 10.5, 73.8).ss(5, 1, 1).p("AqiAAIVFAA"), this.shape_12.setTransform(67.5, 270), this.shape_13 = new cjs.Shape, this.shape_13.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -10.4, 1.3, 0, -10.4, 1.3, 213).ss(5, 1, 1).p("AAA+dMAAAA87"), this.shape_13.setTransform(605, 195), this.shape_14 = new cjs.Shape, this.shape_14.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -10.4, 1.3, 0, -10.4, 1.3, 213).ss(5, 1, 1).p("AAA+dMAAAA87"), this.shape_14.setTransform(295, 195), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_14
            }, {
                t: this.shape_13
            }, {
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.text_3
            }, {
                t: this.shape_5
            }, {
                t: this.text_2
            }, {
                t: this.shape_4
            }, {
                t: this.text_1
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.text
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Hybrid2, new cjs.Rectangle(-2.5, -2.5, 905, 601.7), null), (lib.Hybrid1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -.1, 0, 0, -.1, 0, 253.2).ss(5, 1, 1).p("EgktAMgIAA4/MBJbAAAIAAY/g"), this.shape.setTransform(355, 375.95), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], .4, -.8, 0, .4, -.8, 251.1).ss(5, 1, 1).p("EAkpgMNMhJRAYb"), this.shape_1.setTransform(354.45, 376.8125), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1.3, 10.5, 0, 1.3, 10.5, 169.5).ss(5, 1, 1).p("A4NAAMAwbAAA"), this.shape_2.setTransform(355, 0), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_3.setTransform(610, 51.1), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_4.setTransform(100, 51.1), this.text = new cjs.Text("OR", "32px 'Arial'"), this.text.textAlign = "center", this.text.lineHeight = 38, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(355, 155.65), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_5.setTransform(469.6, 433.95), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1, 10.5, 0, 1, 10.5, 109.4).ss(5, 1, 1).p("AvnAAIfPAA"), this.shape_6.setTransform(240.3, 433.95), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 235.2, -79.1, 0, 235.2, -79.1, 251.1).ss(5, 1, 1).p("AADAAIgGAB"), this.shape_7.setTransform(119.65, 455.1), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], -234.7, 79, 0, -234.7, 79, 247.9).ss(5, 1, 1).p("AgBABIADgB"), this.shape_8.setTransform(590.2, 297.825), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.text
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Hybrid1, new cjs.Rectangle(-2.5, -2.5, 715, 461), null), (lib.GroupingDiagram8 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("Group 2", "normal 400 42px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 46, this.text.lineWidth = 165, (this.text.parent = this).text.setTransform(681, 86.9), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("AyWmPMAktAAAIAAMfMgktAAAg"), this.shape.setTransform(681, 110), this.text_1 = new cjs.Text("Group 1", "normal 400 42px 'Lato'", "#676767"), this.text_1.textAlign = "center", this.text_1.lineHeight = 46, this.text_1.lineWidth = 165, (this.text_1.parent = this).text_1.setTransform(207, 86.9), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().s("#8C659C").ss(5, 1, 1).p("AyWmPMAktAAAIAAMfMgktAAAg"), this.shape_1.setTransform(207, 110), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.text_1
            }, {
                t: this.shape
            }, {
                t: this.text
            }]
        }).wait(1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAmIAXEIfQAAEhFXAXEIfQAAEAAAgnDMAAABOHEgj7AXEIfQAAAEsXEIfQAA"), this.shape_2.setTransform(444, 250), this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1)), this.txt = new cjs.Text("D", "normal 900 65px 'Lato'", "#676767"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 74, this.txt.lineWidth = 116, (this.txt.parent = this).txt.setTransform(501.35, 707.3, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.txt_1 = new cjs.Text("B", "normal 900 65px 'Lato'", "#676767"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 74, this.txt_1.lineWidth = 116, (this.txt_1.parent = this).txt_1.setTransform(386.7, 708, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_1)), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().s("#8C659C").ss(5, 1, 1).p("AySGQIgEAAIAAsfMAktAAAIAAAKAwwEiIDlAAIfiqnIAAMVMgkpAAAIFHhuIMDAAABJEiIPoAA"), this.shape_3.setTransform(443.9, 720), this.text_2 = new cjs.Text("Rule #3", "normal 700 25px 'Lato'", "#676767"), this.text_2.textAlign = "center", this.text_2.lineHeight = 28, this.text_2.lineWidth = 132, (this.text_2.parent = this).text_2.setTransform(446.3, 767), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_2)), this.txt_2 = new cjs.Text("A", "normal 900 65px 'Lato'", "#676767"), this.txt_2.name = "txt_2", this.txt_2.textAlign = "center", this.txt_2.lineHeight = 74, this.txt_2.lineWidth = 116, (this.txt_2.parent = this).txt_2.setTransform(809, 579.15, .5, .4998), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_2)), this.subtxt = new cjs.Text("2", "normal 900 32px 'Lato'", "#676767"), this.subtxt.name = "subtxt", this.subtxt.lineHeight = 36, this.subtxt.lineWidth = 56, (this.subtxt.parent = this).subtxt.setTransform(824.975, 598.3, .5, .4998), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.subtxt)), this.txt_3 = new cjs.Text("C", "normal 900 65px 'Lato'", "#676767"), this.txt_3.name = "txt_3", this.txt_3.textAlign = "center", this.txt_3.lineHeight = 74, this.txt_3.lineWidth = 116, (this.txt_3.parent = this).txt_3.setTransform(554, 579.15, .5, .4998), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_3)), this.subtxt_1 = new cjs.Text("1", "normal 900 32px 'Lato'", "#676767"), this.subtxt_1.name = "subtxt_1", this.subtxt_1.lineHeight = 36, this.subtxt_1.lineWidth = 56, (this.subtxt_1.parent = this).subtxt_1.setTransform(569.975, 598.3, .5, .4998), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.subtxt_1)), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().s("#8C659C").ss(5, 1, 1).p("A7uAAIPoAAAMHAAIPoAA"), this.shape_4.setTransform(681.5, 620), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().s("#8C659C").ss(8, 1, 1).p("AK8AAI14AA"), this.shape_5.setTransform(674, 594.45), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f("#8C659C").s().p("AhKAAIAAiVICVCWIiUCVg"), this.shape_6.setTransform(751.5, 594.45), this.text_3 = new cjs.Text("Rule #2", "normal 700 25px 'Lato'", "#676767"), this.text_3.textAlign = "center", this.text_3.lineHeight = 28, this.text_3.lineWidth = 132, (this.text_3.parent = this).text_3.setTransform(681.5, 627), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_3)), this.txt_4 = new cjs.Text("D", "normal 900 65px 'Lato'", "#676767"), this.txt_4.name = "txt_4", this.txt_4.textAlign = "center", this.txt_4.lineHeight = 74, this.txt_4.lineWidth = 116, (this.txt_4.parent = this).txt_4.setTransform(264.8, 568, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_4)), this.txt_5 = new cjs.Text("A", "normal 900 65px 'Lato'", "#676767"), this.txt_5.name = "txt_5", this.txt_5.textAlign = "center", this.txt_5.lineHeight = 74, this.txt_5.lineWidth = 116, (this.txt_5.parent = this).txt_5.setTransform(150.15, 568, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_5)), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().s("#8C659C").ss(5, 1, 1).p("AyWmPMAktAAAIAAMfMgktAAAgABJEiIPoAAAwxEiIPpAA"), this.shape_7.setTransform(207.5, 580), this.text_4 = new cjs.Text("Rule #1", "normal 700 25px 'Lato'", "#676767"), this.text_4.textAlign = "center", this.text_4.lineHeight = 28, this.text_4.lineWidth = 132, (this.text_4.parent = this).text_4.setTransform(207.5, 627), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_4)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_4
            }, {
                t: this.shape_7
            }, {
                t: this.txt_5
            }, {
                t: this.txt_4
            }, {
                t: this.text_3
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.subtxt_1
            }, {
                t: this.txt_3
            }, {
                t: this.subtxt
            }, {
                t: this.txt_2
            }, {
                t: this.text_2
            }, {
                t: this.shape_3
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.GroupingDiagram8, new cjs.Rectangle(-2.5, -2.5, 893, 799.5), null), (lib.GroupingDiagram7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("Group 2", "normal 400 42px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 46, this.text.lineWidth = 165, (this.text.parent = this).text.setTransform(616.5, 86.9), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("AyWmPMAktAAAIAAMfMgktAAAg"), this.shape.setTransform(616.5, 110), this.text_1 = new cjs.Text("Group 1", "normal 400 42px 'Lato'", "#676767"), this.text_1.textAlign = "center", this.text_1.lineHeight = 46, this.text_1.lineWidth = 165, (this.text_1.parent = this).text_1.setTransform(150, 86.9), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().s("#8C659C").ss(5, 1, 1).p("AyWmPMAktAAAIAAMfMgktAAAg"), this.shape_1.setTransform(150, 110), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.text_1
            }, {
                t: this.shape
            }, {
                t: this.text
            }]
        }).wait(1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAkzAXEIVGAAEg54AXEIVGAAApIXEIVFAAEgLegnDMAAABOHAN1XEIVGAA"), this.shape_2.setTransform(460.5, 250), this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1)), this.txt = new cjs.Text("D", "normal 900 65px 'Lato'", "#676767"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 74, this.txt.lineWidth = 116, (this.txt.parent = this).txt.setTransform(444.35, 707.3, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.txt_1 = new cjs.Text("B", "normal 900 65px 'Lato'", "#676767"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 74, this.txt_1.lineWidth = 116, (this.txt_1.parent = this).txt_1.setTransform(329.7, 708, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_1)), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().s("#8C659C").ss(5, 1, 1).p("AySGQIgEAAIAAsfMAktAAAIAAAKAwwEiIDlAAIfiqnIAAMVMgkpAAAIFHhuIMDAAABJEiIPoAA"), this.shape_3.setTransform(386.9, 720), this.text_2 = new cjs.Text("Rule #3", "normal 700 25px 'Lato'", "#676767"), this.text_2.textAlign = "center", this.text_2.lineHeight = 28, this.text_2.lineWidth = 132, (this.text_2.parent = this).text_2.setTransform(389.3, 767), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_2)), this.txt_2 = new cjs.Text("A", "normal 900 65px 'Lato'", "#676767"), this.txt_2.name = "txt_2", this.txt_2.textAlign = "center", this.txt_2.lineHeight = 74, this.txt_2.lineWidth = 116, (this.txt_2.parent = this).txt_2.setTransform(752, 579.15, .5, .4998), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_2)), this.subtxt = new cjs.Text("2", "normal 900 32px 'Lato'", "#676767"), this.subtxt.name = "subtxt", this.subtxt.lineHeight = 36, this.subtxt.lineWidth = 56, (this.subtxt.parent = this).subtxt.setTransform(767.975, 598.3, .5, .4998), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.subtxt)), this.txt_3 = new cjs.Text("C", "normal 900 65px 'Lato'", "#676767"), this.txt_3.name = "txt_3", this.txt_3.textAlign = "center", this.txt_3.lineHeight = 74, this.txt_3.lineWidth = 116, (this.txt_3.parent = this).txt_3.setTransform(497, 579.15, .5, .4998), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_3)), this.subtxt_1 = new cjs.Text("1", "normal 900 32px 'Lato'", "#676767"), this.subtxt_1.name = "subtxt_1", this.subtxt_1.lineHeight = 36, this.subtxt_1.lineWidth = 56, (this.subtxt_1.parent = this).subtxt_1.setTransform(512.975, 598.3, .5, .4998), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.subtxt_1)), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().s("#8C659C").ss(5, 1, 1).p("A7uAAIPoAAAMHAAIPoAA"), this.shape_4.setTransform(624.5, 620), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().s("#8C659C").ss(8, 1, 1).p("AK8AAI14AA"), this.shape_5.setTransform(617, 594.45), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f("#8C659C").s().p("AhKAAIAAiVICVCWIiUCVg"), this.shape_6.setTransform(694.5, 594.45), this.text_3 = new cjs.Text("Rule #2", "normal 700 25px 'Lato'", "#676767"), this.text_3.textAlign = "center", this.text_3.lineHeight = 28, this.text_3.lineWidth = 132, (this.text_3.parent = this).text_3.setTransform(624.5, 627), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_3)), this.txt_4 = new cjs.Text("D", "normal 900 65px 'Lato'", "#676767"), this.txt_4.name = "txt_4", this.txt_4.textAlign = "center", this.txt_4.lineHeight = 74, this.txt_4.lineWidth = 116, (this.txt_4.parent = this).txt_4.setTransform(207.8, 568, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_4)), this.txt_5 = new cjs.Text("A", "normal 900 65px 'Lato'", "#676767"), this.txt_5.name = "txt_5", this.txt_5.textAlign = "center", this.txt_5.lineHeight = 74, this.txt_5.lineWidth = 116, (this.txt_5.parent = this).txt_5.setTransform(93.15, 568, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_5)), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().s("#8C659C").ss(5, 1, 1).p("AyWmPMAktAAAIAAMfMgktAAAgABJEiIPoAAAwxEiIPpAA"), this.shape_7.setTransform(150.5, 580), this.text_4 = new cjs.Text("Rule #1", "normal 700 25px 'Lato'", "#676767"), this.text_4.textAlign = "center", this.text_4.lineHeight = 28, this.text_4.lineWidth = 132, (this.text_4.parent = this).text_4.setTransform(150.5, 627), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_4)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_4
            }, {
                t: this.shape_7
            }, {
                t: this.txt_5
            }, {
                t: this.txt_4
            }, {
                t: this.text_3
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.subtxt_1
            }, {
                t: this.txt_3
            }, {
                t: this.subtxt
            }, {
                t: this.txt_2
            }, {
                t: this.text_2
            }, {
                t: this.shape_3
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.GroupingDiagram7, new cjs.Rectangle(30, -2.5, 803.5, 799.5), null), (lib.GroupingDiagram6 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("Group 2", "normal 400 42px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 46, this.text.lineWidth = 165, (this.text.parent = this).text.setTransform(673.5, 66.9), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("AyWmPMAktAAAIAAMfMgktAAAg"), this.shape.setTransform(673.5, 90), this.text_1 = new cjs.Text("Group 1", "normal 400 42px 'Lato'", "#676767"), this.text_1.textAlign = "center", this.text_1.lineHeight = 46, this.text_1.lineWidth = 165, (this.text_1.parent = this).text_1.setTransform(214.5, 66.9), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().s("#8C659C").ss(5, 1, 1).p("AyWmPMAktAAAIAAMfMgktAAAg"), this.shape_1.setTransform(214.5, 90), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.text_1
            }, {
                t: this.shape
            }, {
                t: this.text
            }]
        }).wait(1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAwSAVkIVGAAACWVkIVGAAAAA9rMAAAA7XEhFXAVkIVGAAEguZAVkIVGAAA3bVkIVGAAAZUVkIVGAA"), this.shape_2.setTransform(444, 190), this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1)), this.txt = new cjs.Text("D", "normal 900 65px 'Lato'", "#676767"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 74, this.txt.lineWidth = 116, (this.txt.parent = this).txt.setTransform(501.35, 597.3, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.txt_1 = new cjs.Text("B", "normal 900 65px 'Lato'", "#676767"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 74, this.txt_1.lineWidth = 116, (this.txt_1.parent = this).txt_1.setTransform(386.7, 598, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_1)), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().s("#8C659C").ss(5, 1, 1).p("AySGQIgEAAIAAsfMAktAAAIAAAKAwwEiIDlAAIfiqnIAAMVMgkpAAAIFHhuIMDAAABJEiIPoAA"), this.shape_3.setTransform(443.9, 610), this.text_2 = new cjs.Text("Rule #3", "normal 700 25px 'Lato'", "#676767"), this.text_2.textAlign = "center", this.text_2.lineHeight = 28, this.text_2.lineWidth = 132, (this.text_2.parent = this).text_2.setTransform(446.3, 657), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_2)), this.txt_2 = new cjs.Text("A", "normal 900 65px 'Lato'", "#676767"), this.txt_2.name = "txt_2", this.txt_2.textAlign = "center", this.txt_2.lineHeight = 74, this.txt_2.lineWidth = 116, (this.txt_2.parent = this).txt_2.setTransform(809, 469.15, .5, .4998), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_2)), this.subtxt = new cjs.Text("2", "normal 900 32px 'Lato'", "#676767"), this.subtxt.name = "subtxt", this.subtxt.lineHeight = 36, this.subtxt.lineWidth = 56, (this.subtxt.parent = this).subtxt.setTransform(824.975, 488.3, .5, .4998), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.subtxt)), this.txt_3 = new cjs.Text("C", "normal 900 65px 'Lato'", "#676767"), this.txt_3.name = "txt_3", this.txt_3.textAlign = "center", this.txt_3.lineHeight = 74, this.txt_3.lineWidth = 116, (this.txt_3.parent = this).txt_3.setTransform(554, 469.15, .5, .4998), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_3)), this.subtxt_1 = new cjs.Text("1", "normal 900 32px 'Lato'", "#676767"), this.subtxt_1.name = "subtxt_1", this.subtxt_1.lineHeight = 36, this.subtxt_1.lineWidth = 56, (this.subtxt_1.parent = this).subtxt_1.setTransform(569.975, 488.3, .5, .4998), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.subtxt_1)), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().s("#8C659C").ss(5, 1, 1).p("A7uAAIPoAAAMHAAIPoAA"), this.shape_4.setTransform(681.5, 510), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().s("#8C659C").ss(8, 1, 1).p("AK8AAI14AA"), this.shape_5.setTransform(674, 484.45), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f("#8C659C").s().p("AhKAAIAAiVICVCWIiUCVg"), this.shape_6.setTransform(751.5, 484.45), this.text_3 = new cjs.Text("Rule #2", "normal 700 25px 'Lato'", "#676767"), this.text_3.textAlign = "center", this.text_3.lineHeight = 28, this.text_3.lineWidth = 132, (this.text_3.parent = this).text_3.setTransform(681.5, 517), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_3)), this.txt_4 = new cjs.Text("D", "normal 900 65px 'Lato'", "#676767"), this.txt_4.name = "txt_4", this.txt_4.textAlign = "center", this.txt_4.lineHeight = 74, this.txt_4.lineWidth = 116, (this.txt_4.parent = this).txt_4.setTransform(264.8, 458, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_4)), this.txt_5 = new cjs.Text("A", "normal 900 65px 'Lato'", "#676767"), this.txt_5.name = "txt_5", this.txt_5.textAlign = "center", this.txt_5.lineHeight = 74, this.txt_5.lineWidth = 116, (this.txt_5.parent = this).txt_5.setTransform(150.15, 458, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_5)), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f().s("#8C659C").ss(5, 1, 1).p("AyWmPMAktAAAIAAMfMgktAAAgABJEiIPoAAAwxEiIPpAA"), this.shape_7.setTransform(207.5, 470), this.text_4 = new cjs.Text("Rule #1", "normal 700 25px 'Lato'", "#676767"), this.text_4.textAlign = "center", this.text_4.lineHeight = 28, this.text_4.lineWidth = 132, (this.text_4.parent = this).text_4.setTransform(207.5, 517), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_4)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_4
            }, {
                t: this.shape_7
            }, {
                t: this.txt_5
            }, {
                t: this.txt_4
            }, {
                t: this.text_3
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.subtxt_1
            }, {
                t: this.txt_3
            }, {
                t: this.subtxt
            }, {
                t: this.txt_2
            }, {
                t: this.text_2
            }, {
                t: this.shape_3
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.GroupingDiagram6, new cjs.Rectangle(-2.5, -2.5, 893, 689.5), null), (lib.GroupingDiagram5 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(10, 1, 1).p("AV4AAMgrvAAA"), this.shape.setTransform(340.0375, 14), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#8C659C").s().p("AiUAAIgBkrIErEsIkqErg"), this.shape_1.setTransform(495, 14), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.text = new cjs.Text("OR", "normal 400 32px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 37, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(355, 169.65), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#8C659C").ss(5, 1, 1).p("Eg3dAAAIfQAAAYOAAIfQAA"), this.shape_2.setTransform(355, 65.1), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.text
            }]
        }).wait(1)), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAksgMMIAEgBEgkoAMgIgHAAIAA4/MBJbAAAIAAATEgkoAMgIKOjcMA/GgVQIAAYsgEghkAJEIHKAAIYGAAACQJEIfQAA"), this.shape_3.setTransform(355.2, 389.95), this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.GroupingDiagram5, new cjs.Rectangle(-2.5, -16, 715, 488.5), null), (lib.GroupingDiagram4 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("Group 2", "normal 400 42px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 46, this.text.lineWidth = 165, (this.text.parent = this).text.setTransform(681, 86.9), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("AyWmPMAktAAAIAAMfMgktAAAg"), this.shape.setTransform(681, 110), this.text_1 = new cjs.Text("Group 1", "normal 400 42px 'Lato'", "#676767"), this.text_1.textAlign = "center", this.text_1.lineHeight = 46, this.text_1.lineWidth = 165, (this.text_1.parent = this).text_1.setTransform(207, 86.9), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().s("#8C659C").ss(5, 1, 1).p("AyWmPMAktAAAIAAMfMgktAAAg"), this.shape_1.setTransform(207, 110), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.text_1
            }, {
                t: this.shape
            }, {
                t: this.text
            }]
        }).wait(1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAmIAXEIfQAAEhFXAXEIfQAAEAAAgnDMAAABOHEgj7AXEIfQAAAEsXEIfQAA"), this.shape_2.setTransform(444, 250), this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1)), this.txt = new cjs.Text("A", "normal 900 65px 'Lato'", "#676767"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 74, this.txt.lineWidth = 116, (this.txt.parent = this).txt.setTransform(809, 639.15, .5, .4998), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.subtxt = new cjs.Text("2", "normal 900 32px 'Lato'", "#676767"), this.subtxt.name = "subtxt", this.subtxt.lineHeight = 36, this.subtxt.lineWidth = 56, (this.subtxt.parent = this).subtxt.setTransform(824.975, 658.3, .5, .4998), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.subtxt)), this.txt_1 = new cjs.Text("C", "normal 900 65px 'Lato'", "#676767"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 74, this.txt_1.lineWidth = 116, (this.txt_1.parent = this).txt_1.setTransform(554, 639.15, .5, .4998), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_1)), this.subtxt_1 = new cjs.Text("1", "normal 900 32px 'Lato'", "#676767"), this.subtxt_1.name = "subtxt_1", this.subtxt_1.lineHeight = 36, this.subtxt_1.lineWidth = 56, (this.subtxt_1.parent = this).subtxt_1.setTransform(569.975, 658.3, .5, .4998), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.subtxt_1)), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().s("#8C659C").ss(5, 1, 1).p("A7uAAIPoAAAMHAAIPoAA"), this.shape_3.setTransform(681.5, 680), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().s("#8C659C").ss(8, 1, 1).p("AK8AAI14AA"), this.shape_4.setTransform(674, 654.45), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f("#8C659C").s().p("AhKAAIAAiVICVCWIiUCVg"), this.shape_5.setTransform(751.5, 654.45), this.text_2 = new cjs.Text("Rule #2", "normal 700 25px 'Lato'", "#676767"), this.text_2.textAlign = "center", this.text_2.lineHeight = 28, this.text_2.lineWidth = 132, (this.text_2.parent = this).text_2.setTransform(681.5, 687), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_2)), this.txt_2 = new cjs.Text("D", "normal 900 65px 'Lato'", "#676767"), this.txt_2.name = "txt_2", this.txt_2.textAlign = "center", this.txt_2.lineHeight = 74, this.txt_2.lineWidth = 116, (this.txt_2.parent = this).txt_2.setTransform(264.3, 628, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_2)), this.txt_3 = new cjs.Text("A", "normal 900 65px 'Lato'", "#676767"), this.txt_3.name = "txt_3", this.txt_3.textAlign = "center", this.txt_3.lineHeight = 74, this.txt_3.lineWidth = 116, (this.txt_3.parent = this).txt_3.setTransform(149.65, 628, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_3)), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().s("#8C659C").ss(5, 1, 1).p("AyWmPMAktAAAIAAMfMgktAAAgABJEiIPoAAAwxEiIPpAA"), this.shape_6.setTransform(207, 640), this.text_3 = new cjs.Text("Rule #1", "normal 700 25px 'Lato'", "#676767"), this.text_3.textAlign = "center", this.text_3.lineHeight = 28, this.text_3.lineWidth = 132, (this.text_3.parent = this).text_3.setTransform(207, 687), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_3)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_3
            }, {
                t: this.shape_6
            }, {
                t: this.txt_3
            }, {
                t: this.txt_2
            }, {
                t: this.text_2
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.subtxt_1
            }, {
                t: this.txt_1
            }, {
                t: this.subtxt
            }, {
                t: this.txt
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.GroupingDiagram4, new cjs.Rectangle(-2.5, -2.5, 893, 719.5), null), (lib.GroupingDiagram3 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f("#8C659C").s().p("AiVkrIErEsIkqErg"), this.shape.setTransform(495, 381), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#8C659C").s().p("AiVkrIErEsIkqErg"), this.shape_1.setTransform(495, 14), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#8C659C").ss(10, 1, 1).p("AV5crMgrxAAAAV58qMgrxAAA"), this.shape_2.setTransform(340, 197.5), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.text = new cjs.Text("OR", "normal 400 32px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 37, this.text.lineWidth = 100, (this.text.parent = this).text.setTransform(355, 179.65), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().s("#8C659C").ss(5, 1, 1).p("Eg3dgcqIfQAAEg3dAcrIfQAAAYOcrIfQAAAYO8qIfQAA"), this.shape_3.setTransform(355, 248.625), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.text
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.GroupingDiagram3, new cjs.Rectangle(-2.5, -16, 715, 450.7), null), (lib.GroupingDiagram2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("Group 2", "normal 400 42px 'Lato'", "#676767"), this.text.textAlign = "center", this.text.lineHeight = 46, this.text.lineWidth = 165, (this.text.parent = this).text.setTransform(726.5, 86.9), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.text_1 = new cjs.Text("Group 1", "normal 400 42px 'Lato'", "#676767"), this.text_1.textAlign = "center", this.text_1.lineHeight = 46, this.text_1.lineWidth = 165, (this.text_1.parent = this).text_1.setTransform(255, 86.9), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("AyWmPMAktAAAIAAMfMgktAAAg"), this.shape.setTransform(255, 110), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().s("#8C659C").ss(5, 1, 1).p("AyWmPMAktAAAIAAMfMgktAAAg"), this.shape_1.setTransform(726.5, 110), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.text_1
            }, {
                t: this.text
            }]
        }).wait(1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAs2AXEIZAAAEhF1AXEIZAAAAvJXEIY/AAEgqfAXEIZAAAEANrgnDMAAABOHARgXEIZAAA"), this.shape_2.setTransform(447, 250), this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1)), this.text_2 = new cjs.Text("Rule #1", "normal 700 25px 'Lato'", "#676767"), this.text_2.textAlign = "center", this.text_2.lineHeight = 28, this.text_2.lineWidth = 132, (this.text_2.parent = this).text_2.setTransform(447, 687), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_2)), this.txt = new cjs.Text("D", "normal 900 65px 'Lato'", "#676767"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 74, this.txt.lineWidth = 116, (this.txt.parent = this).txt.setTransform(504.3, 628, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.txt_1 = new cjs.Text("A", "normal 900 65px 'Lato'", "#676767"), this.txt_1.name = "txt_1", this.txt_1.textAlign = "center", this.txt_1.lineHeight = 74, this.txt_1.lineWidth = 116, (this.txt_1.parent = this).txt_1.setTransform(389.65, 628, .5, .5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt_1)), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().s("#8C659C").ss(5, 1, 1).p("AyWmPMAktAAAIAAMfMgktAAAgAwxEiIPoAAABJEiIPoAA"), this.shape_3.setTransform(447, 640), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.txt_1
            }, {
                t: this.txt
            }, {
                t: this.text_2
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.GroupingDiagram2, new cjs.Rectangle(-2.5, -2.5, 899, 719.4), null), (lib.GroupingDiagram1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(5, 1, 1).p("EgktgMfMBJbAAAIAAY/MhJbAAAgACSJEIfQAAEghiAJEIfQAA"), this.shape.setTransform(340, 80), this.timeline.addTween(cjs.Tween.get(this.shape).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.GroupingDiagram1, new cjs.Rectangle(-2.5, -2.5, 685, 490.9), null), (lib.mcRoundBg = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f("#FFFFFF").s().p("AjFDHQhShSAAh1QAAhzBShSQBShSBzAAQBzAABTBSQBSBSAABzQAAB1hSBSQhTBRhzAAQhzAAhShRg"), this.shape.setTransform(28, 28), this.timeline.addTween(cjs.Tween.get(this.shape).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.mcRoundBg, new cjs.Rectangle(0, 0, 56, 56), null), (lib.mcLensIcons = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f().s("#666666").ss(.2, 1, 1).p("AAqg8QgTgMgXAAQgDAAgFABIgBgBQgCABgDAAQAAABgBgBQgCAAgDACQgCABgDABQAAAAgBAAQgFACgEACQgCACgCABQgCABAAAAQgEACgDAEQgBABgBABQgXAWAAAeQAAAeAYAVQAUAXAfAAQAeAAAVgWQAWgWAAgeQAAgegXgWQgDgCgBgCABAA2QAUgXAAgeQgBgigYgZQgCgCgDgDIAAgBQgBAAgBgBIgBgBQgWgQgdAAQghAAgZAYQgZAYAAAiQABAkAYAXQAZAZAhgBQAZABAWgPIACgBQAAAAABAAIACgCIABAAIAFgF"), this.shape.setTransform(8.4, 8.2782), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().s("#000000").ss(.2, 1, 1).p("AgQgQIABACIACABIABABIADADIABABIAAABIABABIABAAIAEADIAAABIABAAIABACIABABIACACIACABIACACIAAABIABABIABABIABAAIABABIABABIABACIACABIAAABIABABIABAB"), this.shape_1.setTransform(17.575, 18.6), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().s("#9D9EA2").ss(.2, 1, 1).p("AATAOIgBgBIgBgBIgCgDIgBgBIgCgBIgBgBIgBAAIAAgCIgCAAIAAgBIgDgDIgBAAIgBgBIgBgBIgBAAIgBgBIAAgCIAAAAIgCgCIgBAAIgBgCIgBAAIAAgBIgCgCIgBgBIgBAAIgBgCIgBgBIgCgBIgBAAIgBgBAAQATIgFgEIgDgCIgBgCIgHgHIgDgEIgEgCIgBgBIgCgCIgDgCIgCgCIgBgBIgBgCIgBAA"), this.shape_2.setTransform(18.275, 17.7), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f("#555555").s().p("AAAAAIAAAAIAAABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAg"), this.shape_3.setTransform(19.7, 21.35), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f("#898A8C").s().p("AAAAAIAAAAIABAAIAAAAg"), this.shape_4.setTransform(14.9, 14.725), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f("#68696B").s().p("AAAABIAAgBIABABg"), this.shape_5.setTransform(15.125, 14.4), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f("#010101").s().p("AALAMIgBAAIAAgCIAAAAIAAABIABAAIABABIgBgBIABAAIAAABIAAAAIgBABgAALALgAgHgHIABAAIgBAAIACgBIgBABIgBABgAgHgHgAgLgLIAAAAIABAAIgBAAIAAgBIABAAIAAABIAAAAIAAABgAgLgLg"), this.shape_6.setTransform(18.05, 19.125), this.shape_7 = new cjs.Shape, this.shape_7.graphics.f("#000000").s().p("AAPARIABAAIgBABgAAPANIgBgBIABAAIAAABIAAgBIAAAAIAAABgAAPAMgAALALIgBgBIABAAIABABIgBgBIABAAIAAABIAAABgAALAKgAAKAIIgBgBIABABIgDAAIAAgBIAAAAIAAgCIABABIgBABIACAAIABAAIAAABgAgGgEIAAgCIAAgBIAEADIgEgDIAAgBIABABIACAAIgCABIADAAIAAACgAgGgHgAgIgJIAAgBIABABgAgKgLIABAAIAAABIAAgBIAAgBIABAAIgBACgAgJgLgAgOgOIgBgCIACACIgBABgAgNgOgAgPgQIACgBIAAADg"), this.shape_7.setTransform(17.6, 18.775), this.shape_8 = new cjs.Shape, this.shape_8.graphics.f("#000100").s().p("AAHAIIAAgBIgCAAIABgCIgBAAIgDgCIACAAIACACIABABIACACIgCgCIACgBIAAABIAAACIgBABgAAHAGgAAHAGIgBgBIABgBIAAACgAAGAFgAAGAFIgCgCIACAAIAAACgAAEADgAgHgEIgBgCIAAgBIAAgBIAAAAIADADIgDgDIACAAIABACIAAABIgBAAIABABgAgIgIg"), this.shape_8.setTransform(17.125, 18.225), this.shape_9 = new cjs.Shape, this.shape_9.graphics.f("#000101").s().p("AAOAPIAAgDIAAABIABABIAAABgAAOALIAAAAIAAABgAAJAHIABAAIAAABIAAgBIAAgBIAAACgAAKAHgAgNgOIABAAIABAAIAAACIgCgCIACACIABABIgEABg"), this.shape_9.setTransform(17.25, 18.45), this.shape_10 = new cjs.Shape, this.shape_10.graphics.f("#AFB0B2").s().p("AAAAAIABAAIAAABg"), this.shape_10.setTransform(16, 16.275), this.shape_11 = new cjs.Shape, this.shape_11.graphics.f("#909195").s().p("AAKALIACAAIAAABIgCABgAgCgCIABgBIgBACgAgLgLIAAgBIABABg"), this.shape_11.setTransform(17.6, 17.65), this.shape_12 = new cjs.Shape, this.shape_12.graphics.f("#1E1E1F").s().p("AAWAYIgGgGIgCACIglgjIAFgFIACgCIABABIAAABIABABIAAABIgBAAIgBAEIAEgBIAAABIABgBIAAgCIAAABIAAABIACABIgCAAIAAgBIAAABIAAAAIAAABIAAABIABACIACAAIgBgBIACABIABgCIAAABIACABIAAABIABAAIAAABIgBAAIAAgBIgBAAIgBgBIAAABIgBgBIABABIABABIAAAAIABABIAAACIADAAIAAgCIABACIgBABIAAgBIAAABIAAABIABgBIAAgBIADADIgCAAIgBgCIABACIgBAAIACACIABAAIgBABIACAAIAAABIABABIABgBIAAgCIACACIABAAIAAABIACABIgBACIABABIgBgBIACAAIAAABIABAAIgBABIAAgBIAAAAIgBAAIgCAAIABgBIgBgBIAAgCIgBABIgBAAIACABIAAACIgBAAIAAAAIAEAAIAAABIAAAEIABAAIAAgCIABACIAAgCIAAgBIgBAAIgBAAIAAgBIABABIgBgBIABgBIAAABIACAAIgBABIACABIABACIgBAAIgCgCIACACIgBAAIABABIAAACIACAAIAAABIABgBIAAAAIAAgBIgBAAIgBgBIAAgBIACAAIAAACIABAAIACABIAAABIABAAIAEAEIABABIgFAEgAARARIABgBIgCAAgAAIAEIgCgCgAARAOIAAgBIABABgAAMAIgAAMAIgAAEgBIABABIABAAIgCAAgAADgCIABABIgBABgAgBgEgAgDgHIABgBIABABgAgGgJIABAAIAAABgAgGgJgAgIgMIgBgCIABAAIACACgAgagYIAAAAIgBABg"), this.shape_12.setTransform(17.425, 18.825), this.shape_13 = new cjs.Shape, this.shape_13.graphics.f("#9D9EA1").s().p("AAAAAIABAAIgBAAg"), this.shape_13.setTransform(15.6, 15.525), this.shape_14 = new cjs.Shape, this.shape_14.graphics.f("#7E7F83").s().p("AAPAUIAAgCIgCAAIAAgBIgDgCIACgBIgDAAIAAgBIgBABIABgBIgBAAIAAgBIgCAAIABgCIgCgBIAAAAIAAAAIgCgDIAAgBIgCAAIgBgBIAAgBIgCgCIgCgBIgBgCIgCAAIAAgBIgBAAIAAgBIgCgBIAAgBIgBgBIgBAAIgCgBIAAgCIgBgBIgCABIAAgCIgBAAIAAgBIgBgBIAAgBIgBAAIACgDIACABIAAgCIACAAIgCADIACAAIAAgCIABABIAAABIABAAIABABIABABIACACIgCgCIACABIAAABIABACIACAAIAAABIABACIAAABIABgCIAAABIABAAIACADIAAAAIABACIAEACIAAAAIAAABIAFAEIgCAAIAAADIACgCIAAgBIACAAIABADIAAAAIADACIAAACIAAABIACAAIABACIACgBIAAADIgCAAIgBAAIgBACIgBABgAgKgOgAgLgPIAAAAIABABg"), this.shape_14.setTransform(17.8, 18.2), this.shape_15 = new cjs.Shape, this.shape_15.graphics.f("#BEBEBE").s().p("AAAAAIAAAAIAAAAIAAABg"), this.shape_15.setTransform(16.6, 15.575), this.shape_16 = new cjs.Shape, this.shape_16.graphics.f("#9D9EA2").s().p("AAQATIgFgEIgDgCIgBgDIgHgFIgDgFIgEgCIgBgBIgCgCIgDgCIAAgBIgCgBIAAgBIgBAAIgBgBIgBgBIgBgBIAAACIgCAAIACgDIgCAAIABgBIgBAAIABgBIACgBIgBgBIADgBIgBgBIABABIABgBIAAABIAAABIABAAIABAAIAAABIgBgBIABABIgBABIADAAIABAAIAAABIgBgBIABABIgBACIACAAIABgBIAAABIgBAAIABAAIgBABIACAAIAAAAIACACIAAAAIgCgCIACACIgBABIABAAIABgBIAAABIgBAAIABAAIgBACIACAAIABgBIAAABIgBAAIABAAIAAACIACAAIAAAAIAAABIAAgBIAAABIAAABIAAABIABABIABAAIABgBIAAABIgBAAIABAAIAAABIABAAIABAAIAAAAIABACIACACIABABIABAAIAAABIAAAAIABAAIABAAIAAABIgBgBIABABIAAABIACAAIABAAIAAABIgBgBIABABIgBABIABAAIAAAAIABABIABAAIABAAIAAACIgBgCIABACIgBABIACAAIAAABIADAAIgGAHgAAFAAIgBAAgAAOASIgCAAIAAgBIgBgCIAFAEIgBABgAAQATgAALAPgAAIANIgBgDIABADgAAGAKIgGgEIAAgBIAHAFgAAMAHgAAAAFIgCgDIgBgCIADAFgAgEAAIgDgCIAEACgAADgBgAgIgCIAAgBIABABgAgKgEIAAgBIACACIgBABgAgIgDgAgMgFIgBgCIADACgAgCgHgAgNgHgAgEgJgAgIgNgAgNgRg"), this.shape_16.setTransform(18.275, 17.7), this.shape_17 = new cjs.Shape, this.shape_17.graphics.f("#A5A6A8").s().p("AAAABIAAgBIABABg"), this.shape_17.setTransform(16.175, 15.125), this.shape_18 = new cjs.Shape, this.shape_18.graphics.f("#BBBBBB").s().p("AAAAAIABABIgBAAg"), this.shape_18.setTransform(16.35, 15.25), this.shape_19 = new cjs.Shape, this.shape_19.graphics.f("#F3F4F4").s().p("AgEAAIADABIAAgBIABAAIgBgBIACAAIAAgCIABAAIABgBIgBADIACgBIAAACIABAAIAAABIgBgBIABABIgDABIABABIgCABIAAABg"), this.shape_19.setTransform(16.05, 15.6), this.shape_20 = new cjs.Shape, this.shape_20.graphics.f("#47484A").s().p("AACACIgCAAIABAAIAAgBIADABIgDABgAAAAAIAAAAIABABgAgBAAIgCgBIAAgCIADADg"), this.shape_20.setTransform(15.75, 14.6), this.shape_21 = new cjs.Shape, this.shape_21.graphics.f("#E0E1E2").s().p("AgDgBIACAAIAAgBIAAgCIABAAIACAAIABADIAAgBIACACIAAADIgBACg"), this.shape_21.setTransform(15.2, 15), this.shape_22 = new cjs.Shape, this.shape_22.graphics.f("#C5C6C8").s().p("AABAAIABAAIgBACIAAAAgAAAAAIgBgBIACABIAAAAg"), this.shape_22.setTransform(15.325, 14.525), this.shape_23 = new cjs.Shape, this.shape_23.graphics.f("#333132").s().p("AgJACIADgCIAHAHIAAAAIgCADgAAGAAIgCAAIgCgCIgCgDIgBgBIADgDIAIAIIgEACg"), this.shape_23.setTransform(15.475, 14.825), this.shape_24 = new cjs.Shape, this.shape_24.graphics.f("#424344").s().p("AgCADIACgCIAAACgAACgBIAAgBIABABg"), this.shape_24.setTransform(15.125, 14.425), this.shape_25 = new cjs.Shape, this.shape_25.graphics.f("#6E6F71").s().p("AgFAPIgIgHIgCgIIAKgKIAFgFIAHABIAJAJIgBABIgEADIgIgIIgDAEIAAABIgBABIgBABIgCACIgBAAIgDADIAIAIIgDADIgCACg"), this.shape_25.setTransform(15.35, 14.75), this.shape_26 = new cjs.Shape, this.shape_26.graphics.f("#8B8C90").s().p("AgPASIAAAAIgBgBIAAgCIgBgCIgBgBIADgEIABgBIACgCIAGAGIgFAFIgDACIgBACgAAGgNIABgBIAEgFIAIAEIgCACIABABIgBAAIgBAAIAAAAIgEAEg"), this.shape_26.setTransform(16.225, 15.65), this.shape_27 = new cjs.Shape, this.shape_27.graphics.f("#A6A7AB").s().p("AAAABIAAgBIAAAAIABAAIAAABg"), this.shape_27.setTransform(17.875, 14.4), this.shape_28 = new cjs.Shape, this.shape_28.graphics.f("#9997A2").s().p("AgPAHIACgCIAEgDIAJgCIgCAAIAAABIgCAAIgCAAIABABIgEAAIABACIgBgBIAAABIgCAAIAAABIgCAAIgBACgAAAAAIAAgBIAAABgAAAgBIAFgCIAAABIgBAAIgBABgAAJgEIAAABIgEAAQADgCACAAIAAACgAALgFIAFgBIAAACg"), this.shape_28.setTransform(5.8, 1.65), this.shape_29 = new cjs.Shape, this.shape_29.graphics.f("rgba(251,251,251,0.247)").s().p("AAAABIAAgBIABABgAAAAAIAAAAIAAAAIAAABg"), this.shape_29.setTransform(13.2, 4.9), this.shape_30 = new cjs.Shape, this.shape_30.graphics.f("rgba(251,251,251,0.749)").s().p("AABABIABgBIAAABgAAAAAIgBAAIABAAIAAAAg"), this.shape_30.setTransform(11.175, 3.325), this.shape_31 = new cjs.Shape, this.shape_31.graphics.f("#FFFFFF").s().p("AgaAvIAAABIgBgCIgCAAIgLgNIAAAAIgCgBIAAgCIACgCIgFgBIABgCIgCgCIABgBIgCgBIABgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBgCIAAgBIgBAAIABgBIgBgBIABgBIgBgBIABgCIgBgBIABAAIAAgBIABAAIgBAAIABgBIgCgCIACgCIAAgBIABgBIAAAAIAAAAIgBgBIABgBIAAgBIAAgCIADgCIgCgBIADgBIgBgBIACgDIAAgCIACgBIgBgBIAPgQIAAAAIACgCIABABIABgBIABABIABgDIABABIACgDIADgBIAAAAIABgBIABABIADgDIACAAIABABIABgCIABABIACgCIAAABIAAgCIAAABIABAAIABABIABgCIACAAIAAABIAAgCIACABIACgBIABACIABgBIABABIABgBIACACIAAgCIABAAIABgBIABACIABgBIACACIABgBIABABIABAAIABACIABgBIABAAIAAgCIADACIABAAIACADIABgCIABABIAEADIAAAAIABABIABAAIADAEIAAABIAFADIgCABIAAABIgCADIACAAIgDABIAAACIgBACQgGAVgOARIgBABQgCACgEABQgMAMgRAIIgBABIgBgBIgBABIAAgBIgBABIgCADIAAgBIgBABIAAgBIgCABIgBgBIgBACgAAngfIAAABIAAgBIAAgBg"), this.shape_31.setTransform(7.55, 7.525), this.shape_32 = new cjs.Shape, this.shape_32.graphics.f("#CCCCCC").s().p("AAABTQghABgZgZQgYgXgBgkQAAgiAZgYQAZgYAhAAQAdAAAWAQIABABIACABIAAABIAFAFQAYAZABAiQAAAegUAXIgKALIgBABIgBAAIgCACIgCAAIgBABQgUAOgYAAIgDAAgAghAoIABgCIABABIACgBIABABIABgBIAAABIACgDIAAAAIAAAAIABAAIABAAIABAAQASgIAMgNQADgBACgCIABAAQAOgQAHgXIABgBIAAgCIACgBIgBgBIABgDIAAAAIACgBIgEgEIAAgBIgEgDIgBAAIgBgBIAAAAIgDgEIAAAAIAAgBIgBAAIgBACIgDgDIgBAAIgCgBIAAABIgBAAIgBABIgBgBIgCAAIgBgBIgBABIgCgCIAAABIgBgCIgBABIgBAAIgBACIgCgCIgBABIgBgBIAAABIgBgCIgBABIgCgBIgBACIAAgBIgCAAIgBACIAAgBIgBAAIgBgBIABACIgBgBIgCABIgBAAIgCABIgBgBIgCAAIgCADIgBgBIgBACIgBgBIgDACIgBADIgBgBIgBACIgBgBIgCABIgBgBIgCACIAAAAIgPAQIACABIgDACIAAACIgCACIABABIgCACIABABIgCACIAAABIAAABIgBABIABABIAAABIAAABIgBABIAAABIgDABIADACIgBABIABAAIgBAAIAAABIgCAAIACABIgCACIACAAIgCABIACABIgCABIACABIAAABIABACQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAABAAIgBABIACABIgBABIACADIgBACIAEAAIgCACIAAACIACACIAAAAIAMAMIACAAIABACIAAgBgAAvggIACAAIgBgBgAAvghIAAABIAAgBIAAgBgAAdgwIABABIAAgCgAgpg7IABAAIABgBIACAAIAAgBIACAAIAAgBIABABIgBgCIAEAAIgBgBIACAAIACgBIAAgBIACgBIABAAIAAAAIgBAAIgJAEIgEADIgCABgAgZhDIADAAIABgBIABAAIAAgBIAEAAIAAgBIABABIAAgCQgCAAgDACIgFACgAgOhHIAFABIAAgCIgFABg"), this.shape_32.setTransform(8.4, 8.2782), this.shape_33 = new cjs.Shape, this.shape_33.graphics.f("#898A8D").s().p("AAYAZIAAgBIgCAAIABgCIAAgBIgBAAIgCgCIACACIgBAAIgBgBIAAAAIgBAAIABgBIAAgBIgBAAIgCgBIACABIgCAAIAAgBIAAgCIgBABIgBgBIAAgBIABAAIABABIACAAIABADIAAgBIABADIACAAIAAABIABAAIAAACIACAAIABACgAAYAXIgBgBgAAPAQIAAgBIABABgAAPAOIgCgBIACABIgBAAIgBgBIAAAAIACgBIAAACgAANANIgCgBIgBgCIADACIAAABgAAKAKIAAgBIABgBIAAACIACAAIAAACgAAKAKgAAJAJIgBgBIABABIgBAAIAAgBIAAgCIACADgAAHAHIgBgBIABABIgBAAIgBgBIABAAIACAAIgBABgAAFAFIAAgBIAAABIAAgBIAAAAIAAAAIAAABIAAABgAAFAEgAAEAEIgCgCIACACIgCAAIAAgCIAAgBIgBABIgBgCIABACIgBAAIAAgCIAAAAIAAAAIAAAAIAAAAIgBAAIABAAIAAgBIAAgBIAAACIACAAIAAABIADAAIAAADgAAAAAgAgCgDIABAAIABACgAgCgDIAAAAIgBAAIABAAIgCAAIABAAIAAgBIABAAIAAABgAgEgDIgBgCIABACIgCAAIABgCIAAgBIAAgBIABACIABABIgBABgAgGgGIgCgBIACABIgDAAIABgBIAAgBIgBAAIgBgBIABABIgBAAIAAgBIAAgCIAAAAIACAAIAAADIACgBIABADgAgLgLIgBAAIAAgCIACACgAgPgQIACABIgBABgAgXgVIAAgBIgDgBIACgBIABAAIAAACIACABg"), this.shape_33.setTransform(17.775, 16.725), this.shape_34 = new cjs.Shape, this.shape_34.graphics.f("#4B4B4E").s().p("AAUAUIAAABIgBgBIgBAAIAAgCIgBAAIAAgBIgCAAIgCgEIAAACIgBgDIACABIAEAAIgBAEIABAAIABABIABAAIAAABIABABIAGgHIAAADIABgBIAHAFIgIAIgAAMAMIgCAAIAAgBIgBAAIAAgCIABAAIABABIABABIAAABgAAHAKIgBgBIABABIgBAAIAAgBIAAgCIgCAAIAAgDIgBACIgBgDIABgBIAAABIACABIgBAAIACAAIAAACIABAAIACACIAAABIgCABgAAAADIAAgBIAAABIAAAAIAAgBIAAgBIgBAAIAAgCIgDAAIAAgCIAEAAIgBACIABABIAAABIACAAIAAACgAgigIIAEgDIACgDIAGAGIABAAIgBAAIgCABIgCADIgCACgAgFgDIAAgCIgBABIgBgCIgBAAIAAgCIACAAIABACIACAAIgBADgAgKgIIgBAAIgBgCIAAABIgBgDIADABIAAABIADAAIgBACgAgOgPIACABIgBACIgBABgAgRgPIgCgBIgBgCIgBgBIgBgBIADgEIAEgDIAGAFIgFAGIAAABg"), this.shape_34.setTransform(18.425, 17.05), this.shape_35 = new cjs.Shape, this.shape_35.graphics.f("#B1B1B1").s().p("AgBAIIgEgDIgBAAIAAgBIgCgCIABgBIABgBIABAAIACAAIAEgHIAAgBIAHAIIgIAIg"), this.shape_35.setTransform(20.3, 19.95), this.shape_36 = new cjs.Shape, this.shape_36.graphics.f("#DBDBDC").s().p("AgjAAIADgCIAlAiIgDADgAATgKIgVgWIgBgBIACgCIAlAkIgCACg"), this.shape_36.setTransform(18.325, 17.6), this.shape_37 = new cjs.Shape, this.shape_37.graphics.f("#111111").s().p("AAMAWIAAgBIgBAAIgBgBIgBAAIABgDIgDAAIgDgCIAAgBIgBgBIgBgBIgBAAIAAgBIgBgCIAAAAIAAgBIgDgBIACAAIgDgBIAAgBIgBABIAAgCIgDAAIABgCIgBgBIAAgBIgEAAIACgDIgDAAIgBgBIgCAAIABgDIgCAAIAAgBIgEgBIACgCIgDAAIAAgBIAGgHIADgDIAAABIABAAIgBABIADABIACAAIgBABIABABIABgBIgBACIACACIABgBIAAABIAMAMIADAAIgBACIAKAKIAAgBIAAABIAEADIgEAEIgGAGg"), this.shape_37.setTransform(19.2, 16.725), this.shape_38 = new cjs.Shape, this.shape_38.graphics.f("#4D4D4F").s().p("AAOAPIAAgBIgBABIgKgKIABgCIAPAOIgCACgAABADIgMgMIAAgBIgBABIgCgBIABgCIgBABIgBgBIABgBIgCAAIgCgCIABgBIAAgBIABgBIAUAVg"), this.shape_38.setTransform(19.775, 16.175), this.shape_39 = new cjs.Shape, this.shape_39.graphics.f("#848589").s().p("AgJATIgJgEIADgDIADgCIAFAGQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAIgBABgAAIgKIgBABIAAgCIAEgEIACgBIACgCIADAHIABABIgBABIAAABIgDAEg"), this.shape_39.setTransform(20.4, 19.625), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_39
            }, {
                t: this.shape_38
            }, {
                t: this.shape_37
            }, {
                t: this.shape_36
            }, {
                t: this.shape_35
            }, {
                t: this.shape_34
            }, {
                t: this.shape_33
            }, {
                t: this.shape_32
            }, {
                t: this.shape_31
            }, {
                t: this.shape_30
            }, {
                t: this.shape_29
            }, {
                t: this.shape_28
            }, {
                t: this.shape_27
            }, {
                t: this.shape_26
            }, {
                t: this.shape_25
            }, {
                t: this.shape_24
            }, {
                t: this.shape_23
            }, {
                t: this.shape_22
            }, {
                t: this.shape_21
            }, {
                t: this.shape_20
            }, {
                t: this.shape_19
            }, {
                t: this.shape_18
            }, {
                t: this.shape_17
            }, {
                t: this.shape_16
            }, {
                t: this.shape_15
            }, {
                t: this.shape_14
            }, {
                t: this.shape_13
            }, {
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.mcLensIcons, new cjs.Rectangle(-1, -1, 23.3, 22.6), null), (lib.mcBulbIcon = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f("#CCCCCC").s().p("AgeAYQgOgKAAgOQAAgOAOgJQANgLASAAQATAAANALQAMAKAAANQAAAOgNAKQgNALgSAAQgTAAgMgLg"), this.shape.setTransform(6.525, 4.225), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#999999").s().p("AgFBrIgEgDIgDgJIAAgCQgKgCgDgKIgBgIIA2AAIgBAIQgEAKgLACIAAACIgBAJIgFADgAgVA4QADgcgQgQIgVgYQgKgMAAgOQAAggAVgTQARgRAbgBQAcABATARQATATAAAgQAAAOgJAMIgUAYQgLALgDARIgBAQg"), this.shape_1.setTransform(6.6, 10.7), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.mcBulbIcon, new cjs.Rectangle(0, 0, 13.2, 21.5), null), (lib.mcHeartRed = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f("#DA4848").s().p("AiBgnQAEhDA0gHQA0gHAVApQAWgpA0AHQA0AHAEBDQAEBAiGBaQiFhaAEhAg"), this.shape.setTransform(12.9987, 11.4926), this.timeline.addTween(cjs.Tween.get(this.shape).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.mcHeartRed, new cjs.Rectangle(-1, -1, 28, 25), null), (lib.mcHeartPurple = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f("#8C659C").s().p("AiBgnQAEhDA0gHQA0gHAVApQAWgpA0AHQA0AHAEBDQAEBAiGBaQiFhaAEhAg"), this.shape.setTransform(12.9987, 11.4926), this.timeline.addTween(cjs.Tween.get(this.shape).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.mcHeartPurple, new cjs.Rectangle(-1, -1, 28, 25), null), (lib.mcHeartGreen = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f("#6AAD60").s().p("AiBgnQAEhDA0gHQA0gHAVApQAWgpA0AHQA0AHAEBDQAEBAiGBaQiFhaAEhAg"), this.shape.setTransform(12.9987, 11.4926), this.timeline.addTween(cjs.Tween.get(this.shape).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.mcHeartGreen, new cjs.Rectangle(-1, -1, 28, 25), null), (lib.mcCloseButtonNew = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.instance = new lib.mcRect, this.instance.setTransform(72.5, 30, .725, .6667, 0, 0, 0, 100, 45), this.instance.alpha = .0117, this.timeline.addTween(cjs.Tween.get(this.instance).wait(2)), this.labelTxt = new cjs.Text("CLOSE", "normal 400 32px 'Lato'", "#369CA8"), this.labelTxt.name = "labelTxt", this.labelTxt.textAlign = "center", this.labelTxt.lineHeight = 37, this.labelTxt.lineWidth = 101, (this.labelTxt.parent = this).labelTxt.setTransform(72.5, 17), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.labelTxt)), this.timeline.addTween(cjs.Tween.get(this.labelTxt).wait(1).to({
            color: "#FFFFFF"
        }, 0).wait(1)), this.shape = new cjs.Shape, this.shape.graphics.f("#FFFFFF").s().p("Ao0EYQgyAAAAgyIAAnLQAAgyAyAAIRpAAQAyAAAAAyIAAHLQAAAygyAAg"), this.shape.setTransform(72.493, 30, 1.1463, 1), this.timeline.addTween(cjs.Tween.get(this.shape).to({
            _off: !0
        }, 1).wait(1)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#369CA8").s().p("AqbEsQg5AAAAgyIAAnzQAAgyA5AAIU3AAQA5AAAAAyIAAHzQAAAyg5AAg"), this.shape_1.setTransform(72.5, 30), this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2)), this._renderFirstFrame()
    }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(0, 0, 145, 60), (lib.mcPauseScreen = function(mode, startPosition, loop) {


        null == loop && (loop = !1), 
        this.initialize(mode, startPosition, loop, {}), 
        // for box
        this.shape_4 = new cjs.Shape, 
        this.shape_4.graphics.f().s("#676767").ss(2, 1, 1).p("EhEvgjJMCJfAAAMAAABGTMiJfAAAg"), 
        this.shape_4.setTransform(440, 630), 
        // for text
        this.text_1 = new cjs.Text("Game Paused", "normal 700 55px 'Lato'", "#444444"), 
        this.text_1.textAlign = "center", 
        this.text_1.lineHeight = 82, 
        this.text_1.lineWidth = 529, (this.text_1.parent = this).text_1.setTransform(450, 602.6), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), 
        // for play button
        this.nextButton = new lib.mcArrowNextButton, 
        this.nextButton.setTransform(412, 700), 
        this.timeline.addTween(cjs.Tween.get(this.nextButton).wait(1)),
        
        // for close button
         this.closeButton = new lib.mcXButton, 
        this.closeButton.setTransform(800, 430), 
        this.timeline.addTween(cjs.Tween.get(this.closeButton).wait(1)),
        // for background
        this.shape_5 = new cjs.Shape, 
        this.shape_5.graphics.f("#ffffff").s().p("EhEvAjKMAAAhGTMCJfAAAMAAABGTg"), 
        this.shape_5.setTransform(440, 630), 

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [ {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.text_1
            }]
        }).wait(1)),
        
        this.instance = new lib.mcPauseScreenBg, 
        this.instance.setTransform(450, 675, 1, 1, 0, 0, 0, 450, 675), 
        this.instance.alpha = .8008, 
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1)), this._renderFirstFrame();



        
    }).prototype = getMCSymbolPrototype(lib.mcPauseScreen, new cjs.Rectangle(0, 0, 900, 1350), null), (lib.ScoreBar = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.chapterTxt = new cjs.Text("", "normal 400 23px 'Lato'", "#676767"), this.chapterTxt.name = "chapterTxt", this.chapterTxt.lineHeight = 25, this.chapterTxt.lineWidth = 318, (this.chapterTxt.parent = this).chapterTxt.setTransform(4, 2.35), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.chapterTxt)), this.timeline.addTween(cjs.Tween.get(this.chapterTxt).wait(1)), this.plusTxt = new cjs.Text("", "normal 400 23px 'Lato'", "#676767"), this.plusTxt.name = "plusTxt", this.plusTxt.lineHeight = 25, this.plusTxt.lineWidth = 32, (this.plusTxt.parent = this).plusTxt.setTransform(313.2, 2.35), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.plusTxt)), this.timeline.addTween(cjs.Tween.get(this.plusTxt).wait(1)), this.scoreTxt = new cjs.Text("", "normal 400 23px 'Lato'", "#676767"), this.scoreTxt.name = "scoreTxt", this.scoreTxt.textAlign = "right", this.scoreTxt.lineHeight = 25, this.scoreTxt.lineWidth = 92, (this.scoreTxt.parent = this).scoreTxt.setTransform(426.1, 2.35), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.scoreTxt)), this.timeline.addTween(cjs.Tween.get(this.scoreTxt).wait(1)), this.shape = new cjs.Shape, this.shape.graphics.f().s("#8C659C").ss(1, 1, 1).p("EghlgCVMBDLAAAIAAErMhDLAAAg"), this.shape.setTransform(215, 15), this.timeline.addTween(cjs.Tween.get(this.shape).wait(1)), this.scoreBarFill = new lib.mcScoreBarFill, this.scoreBarFill.alpha = .5, this.timeline.addTween(cjs.Tween.get(this.scoreBarFill).wait(1)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#FFFFFF").s().p("EghlACWIAAkrMBDLAAAIAAErg"), this.shape_1.setTransform(215, 15), this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.ScoreBar, new cjs.Rectangle(-1, -1, 432, 32), null), (lib.ModalManipulative = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.txt = new cjs.Text("X", "normal 900 50px 'Lato'", "#369CA8"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 59, this.txt.lineWidth = 46, (this.txt.parent = this).txt.setTransform(25, 4), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.timeline.addTween(cjs.Tween.get(this.txt).wait(1)), this.hitArea = new lib.mcRect, this.hitArea.setTransform(25, 25.1, .4, .8889, 0, 0, 0, 100, 45.1), this.hitArea.alpha = .0117, this.timeline.addTween(cjs.Tween.get(this.hitArea).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.ModalManipulative, new cjs.Rectangle(-15, -15, 80, 80), null), (lib.ModalDropZone = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.txt = new cjs.Text("X", "normal 900 40px 'Lato'", "#676767"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 47, this.txt.lineWidth = 46, (this.txt.parent = this).txt.setTransform(25, 8.55), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.timeline.addTween(cjs.Tween.get(this.txt).wait(1)), this.instance = new lib.mcRect, this.instance.setTransform(25, 25.1, .4, .8889, 0, 0, 0, 100, 45.1), this.instance.alpha = .0117, this.timeline.addTween(cjs.Tween.get(this.instance).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.ModalDropZone, new cjs.Rectangle(-15, -15, 80, 80), null), (lib.Heart = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.heartPurple = new lib.mcHeartPurple, this.heartPurple.setTransform(13, 11.5, 1, 1, 0, 0, 0, 13, 11.5), this.timeline.addTween(cjs.Tween.get(this.heartPurple).wait(1)), this.heartGreen = new lib.mcHeartGreen, this.heartGreen.setTransform(12.1, 12.1, 1, 1, 0, 0, 0, 12.1, 12.1), this.timeline.addTween(cjs.Tween.get(this.heartGreen).wait(1)), this.heartRed = new lib.mcHeartRed, this.heartRed.setTransform(12.5, 12.5, 1, 1, 0, 0, 0, 12.5, 12.5), this.timeline.addTween(cjs.Tween.get(this.heartRed).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Heart, new cjs.Rectangle(0, 0, 26, 23), null), (lib.DropZone = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.purpleSlash = new lib.mcPurpleSlash, this.purpleSlash.setTransform(100.7, 54.75), this.timeline.addTween(cjs.Tween.get(this.purpleSlash).wait(1)), this.redSlash = new lib.mcRedSlash, this.redSlash.setTransform(100.7, 54.75), this.timeline.addTween(cjs.Tween.get(this.redSlash).wait(1)), this.blackSlash = new lib.mcBlackSlash, this.blackSlash.setTransform(100.95, 55), this.timeline.addTween(cjs.Tween.get(this.blackSlash).wait(1)), this.txt = new cjs.Text("?", "normal 900 65px 'Lato'", "#C1C1C1"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 74, this.txt.lineWidth = 196, (this.txt.parent = this).txt.setTransform(100, 16.5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.timeline.addTween(cjs.Tween.get(this.txt).wait(1)), this.subtxt = new cjs.Text("", "normal 900 32px 'Lato'", "#C1C1C1"), this.subtxt.name = "subtxt", this.subtxt.lineHeight = 36, this.subtxt.lineWidth = 56, (this.subtxt.parent = this).subtxt.setTransform(132, 54.25), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.subtxt)), this.timeline.addTween(cjs.Tween.get(this.subtxt).wait(1)), this.displayTxt = new cjs.Text("", "normal 900 42px 'Lato'", "#666666"), this.displayTxt.name = "displayTxt", this.displayTxt.textAlign = "center", this.displayTxt.lineHeight = 48, this.displayTxt.lineWidth = 196, (this.displayTxt.parent = this).displayTxt.setTransform(100, 43.1), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.displayTxt)), this.timeline.addTween(cjs.Tween.get(this.displayTxt).wait(1)), this.correctTxt = new cjs.Text("", "normal 900 48px 'Lato'", "#444444"), this.correctTxt.name = "correctTxt", this.correctTxt.textAlign = "center", this.correctTxt.lineHeight = 54, this.correctTxt.lineWidth = 196, (this.correctTxt.parent = this).correctTxt.setTransform(100, 25), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.correctTxt)), this.timeline.addTween(cjs.Tween.get(this.correctTxt).wait(1)), this.correctSubtxt = new cjs.Text("", "normal 900 32px 'Lato'", "#444444"), this.correctSubtxt.name = "correctSubtxt", this.correctSubtxt.textAlign = "center", this.correctSubtxt.lineHeight = 36, this.correctSubtxt.lineWidth = 196, (this.correctSubtxt.parent = this).correctSubtxt.setTransform(100, 48.25), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.correctSubtxt)), this.timeline.addTween(cjs.Tween.get(this.correctSubtxt).wait(1)), this.instance = new lib.mcRect, this.instance.setTransform(100, 46, 1, 1.0222, 0, 0, 0, 100, 45), this.instance.alpha = .0117, this.timeline.addTween(cjs.Tween.get(this.instance).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.DropZone, new cjs.Rectangle(0, 0, 200, 92.6), null), (lib.DefaultManipulative = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.purpleSlash = new lib.mcPurpleSlash, this.purpleSlash.setTransform(100.7, 54.75), this.timeline.addTween(cjs.Tween.get(this.purpleSlash).wait(1)), this.redSlash = new lib.mcRedSlash, this.redSlash.setTransform(100.7, 54.75), this.timeline.addTween(cjs.Tween.get(this.redSlash).wait(1)), this.blackSlash = new lib.mcBlackSlash, this.blackSlash.setTransform(100.95, 55), this.timeline.addTween(cjs.Tween.get(this.blackSlash).wait(1)), this.subtxt = new cjs.Text("1", "normal 900 32px 'Lato'", "#369CA8"), this.subtxt.name = "subtxt", this.subtxt.lineHeight = 36, this.subtxt.lineWidth = 56, (this.subtxt.parent = this).subtxt.setTransform(132, 53.85), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.subtxt)), this.timeline.addTween(cjs.Tween.get(this.subtxt).wait(1)), this.txt = new cjs.Text("R", "normal 900 65px 'Lato'", "#369CA8"), this.txt.name = "txt", this.txt.textAlign = "center", this.txt.lineHeight = 74, this.txt.lineWidth = 196, (this.txt.parent = this).txt.setTransform(100, 16.5), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.txt)), this.timeline.addTween(cjs.Tween.get(this.txt).wait(1)), this.instance = new lib.mcRect, this.instance.setTransform(100, 46, 1, 1.0222, 0, 0, 0, 100, 45), this.instance.alpha = .0117, this.timeline.addTween(cjs.Tween.get(this.instance).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.DefaultManipulative, new cjs.Rectangle(0, 0, 200, 92), null), (lib.Diagram1 = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.instance = new lib.mcPurpleSlash, this.instance.setTransform(371.75, 15.6, .5001, .5), this.shape = new cjs.Shape, this.shape.graphics.f("#676767").s().p("AgbBwQgHgHgBgJIAAgFQAAgLAIgIQAIgIAMAAQAKAAAIAIQAJAIAAALQAAAMgJAJIgGAEQgFADgHABQgMgBgIgHgAgWAiIgEgZQgCgMAMgNIAZgUQAJgHABgOQAAgQgMgEQgLgFgNAEQgFABgNAGQgGAEgHgDIgMgRQgFgGABAAQAVgVAcgDQAPgDAQADQAiAIAIATQAIAUgBAOQgCAOgGALIgJALIgaAUQgIAFgDAdg"), this.shape.setTransform(371.8772, 15.75), this.text = new cjs.Text("= cannot go", "normal 400 25px 'Lato'", "#676767"), this.text.lineHeight = 28, this.text.lineWidth = 130, (this.text.parent = this).text.setTransform(395.95, 2), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text
            }, {
                t: this.shape
            }, {
                t: this.instance
            }]
        }).wait(1)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().s("#8C659C").ss(5, 1, 1).p("EAmIAAAIfQAAEhFXAAAIfQAAEghiAAAIfQAAACSAAIfQAA"), this.shape_1.setTransform(444, 440), this.text_1 = new cjs.Text("4", "normal 400 64px 'Lato'", "#676767"), this.text_1.textAlign = "center", this.text_1.lineHeight = 73, this.text_1.lineWidth = 100, (this.text_1.parent = this).text_1.setTransform(788, 462), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.text_2 = new cjs.Text("3", "normal 400 64px 'Lato'", "#676767"), this.text_2.textAlign = "center", this.text_2.lineHeight = 73, this.text_2.lineWidth = 100, (this.text_2.parent = this).text_2.setTransform(558.6, 462), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_2)), this.text_3 = new cjs.Text("2", "normal 400 64px 'Lato'", "#676767"), this.text_3.textAlign = "center", this.text_3.lineHeight = 73, this.text_3.lineWidth = 100, (this.text_3.parent = this).text_3.setTransform(329.3, 462), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_3)), this.text_4 = new cjs.Text("1", "normal 400 64px 'Lato'", "#676767"), this.text_4.textAlign = "center", this.text_4.lineHeight = 73, this.text_4.lineWidth = 100, (this.text_4.parent = this).text_4.setTransform(100, 462), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_4)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_4
            }, {
                t: this.text_3
            }, {
                t: this.text_2
            }, {
                t: this.text_1
            }, {
                t: this.shape_1
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.Diagram1, new cjs.Rectangle(-2.5, 0, 893, 535.5), null), (lib.MainIdeaDiagram2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.instance = new lib.mcLensIcons, this.instance.setTransform(65.6, 15.05, 1.3924, 1.3921, 0, 0, 0, 11.2, 10.8), this.instance_1 = new lib.mcBulbIcon, this.instance_1.setTransform(10.15, 358, 1.5151, 1.3954, 0, 0, 0, 6.7, 10.7), this.shape = new cjs.Shape, this.shape.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1.4, 10.5, 0, 1.4, 10.5, 164).ss(5, 1, 1).p("A3bAAMAu3AAA"), this.shape.setTransform(200, 40), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1.4, 10.5, 0, 1.4, 10.5, 164).ss(5, 1, 1).p("A3bAAMAu3AAA"), this.shape_1.setTransform(150, 382.9), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.MainIdeaDiagram2, new cjs.Rectangle(-2.5, -.1, 355, 385.5), null), (lib.MainIdeaDiagram1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f("#1A657B").s().p("Ah1g6IDrgBIh2B2g"), this.shape.setTransform(148.75, 356.5, 2.5081, 2.5092, 0, 0, 0, -.5, -.2), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().ls(["#39AFD1", "#1A657B"], [0, 1], 26, -598.7, 26, 115.7).ss(10, 1, 1).p("AAAGKIAAsT"), this.shape_1.setTransform(150, 311.4), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f("#1A657B").s().p("Ah1g6IDrgBIh2B2g"), this.shape_2.setTransform(148.75, 141.55, 2.5084, 2.5094, 0, 0, 0, -.5, -1.4), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().ls(["#39AFD1", "#1A657B"], [0, 1], 26.5, -599.3, 26.5, 115.3).ss(10, 1, 1).p("AAAGKIAAsT"), this.shape_3.setTransform(150, 99.4), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.instance = new lib.mcBulbIcon, this.instance.setTransform(10.15, 439.1, 1.5151, 1.3954, 0, 0, 0, 6.7, 10.7), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1.4, 10.5, 0, 1.4, 10.5, 164).ss(5, 1, 1).p("A3bAAMAu3AAA"), this.shape_4.setTransform(150, 464), this.instance_1 = new lib.mcLensIcons, this.instance_1.setTransform(15.6, 15.05, 1.3924, 1.3921, 0, 0, 0, 11.2, 10.8), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1.4, 10.5, 0, 1.4, 10.5, 164).ss(5, 1, 1).p("A3bAAMAu3AAA"), this.shape_5.setTransform(150, 40), this.instance_2 = new lib.mcLensIcons, this.instance_2.setTransform(15.6, 227.1, 1.3924, 1.3921, 0, 0, 0, 11.2, 10.8), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f().rs(["#2B425D", "#1868B3"], [0, 1], 1.4, 10.5, 0, 1.4, 10.5, 164).ss(5, 1, 1).p("A3bAAMAu3AAA"), this.shape_6.setTransform(150, 252), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_6
            }, {
                t: this.instance_2
            }, {
                t: this.shape_5
            }, {
                t: this.instance_1
            }, {
                t: this.shape_4
            }, {
                t: this.instance
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.MainIdeaDiagram1, new cjs.Rectangle(-2.5, -.1, 305, 466.6), null), (lib.mcXButton = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.instance = new lib.mcRoundBg, this.instance.setTransform(28, 28, 1, 1, 0, 0, 0, 28, 28), this.instance.alpha = .0117, this.timeline.addTween(cjs.Tween.get(this.instance).wait(2)), this.shape = new cjs.Shape, this.shape.graphics.f("#369CA8").s().p("AAAAWIheBfIgWgWIBghfIhgheIAWgWIBeBgIBfhgIAWAWIhfBeIBfBfIgWAWg"), this.shape.setTransform(28.025, 28.025), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#FFFFFF").s().p("AAAAWIheBfIgWgWIBghfIhgheIAWgWIBeBgIBfhgIAWAWIhfBeIBfBfIgWAWg"), this.shape_1.setTransform(28.025, 28.025), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).wait(1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f("#FFFFFF").s().p("Ai3C4QhMhMAAhsQAAhrBMhMQA7g7BMgNQAYgEAYAAQAZAAAYAEQBMANA6A7QBNBMAABrQAABshNBMQhMBMhrAAQhrAAhMhMg"), this.shape_2.setTransform(28, 28), this.timeline.addTween(cjs.Tween.get(this.shape_2).to({
            _off: !0
        }, 1).wait(1)), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f("#369CA8").s().p("AjFDHQhShSAAh1QAAhzBShSQA/g/BTgPQAZgEAaAAQAbAAAZAEQBTAPA/A/QBSBSAABzQAAB1hSBSQhTBRhzAAQhzAAhShRg"), this.shape_3.setTransform(28, 28), this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(2)), this._renderFirstFrame()
    }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(0, 0, 56, 56), (lib.mcRefreshButtonNew = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.instance = new lib.mcRoundBg, this.instance.setTransform(28, 28, 1, 1, 0, 0, 0, 28, 28), this.instance.alpha = .0117, this.timeline.addTween(cjs.Tween.get(this.instance).wait(2)), this.shape = new cjs.Shape, this.shape.graphics.f("#369CA8").s().p("AhNBOQggggAAguQAAgsAgghQAgggAtAAQAtAAAgAgIAEAEIAdgdIAABGIhHAAIAcgbIgDgDQgbgbglAAQgkAAgaAbQgbAaAAAkQAAAlAbAbQAaAaAkAAQAlAAAbgaIAKgMIAOAOIgLAMQggAggtAAQgtAAggggg"), this.shape.setTransform(28, 28), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#FFFFFF").s().p("AhNBOQggggAAguQAAgsAgghQAgggAtAAQAtAAAgAgIAEAEIAdgdIAABGIhHAAIAcgbIgDgDQgbgbglAAQgkAAgaAbQgbAaAAAkQAAAlAbAbQAaAaAkAAQAlAAAbgaIAKgMIAOAOIgLAMQggAggtAAQgtAAggggg"), this.shape_1.setTransform(28, 28), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).wait(1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f("#FFFFFF").s().p("Ai3C4QhMhMAAhsQAAhrBMhMQA7g7BMgNQAYgEAYAAQAZAAAYAEQBMANA6A7QBNBMAABrQAABshNBMQhMBMhrAAQhrAAhMhMg"), this.shape_2.setTransform(28, 28), this.timeline.addTween(cjs.Tween.get(this.shape_2).to({
            _off: !0
        }, 1).wait(1)), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f("#369CA8").s().p("AjFDHQhShSAAh1QAAhzBShSQA/g/BTgPQAZgEAaAAQAbAAAZAEQBTAPA/A/QBSBSAABzQAAB1hSBSQhTBRhzAAQhzAAhShRg"), this.shape_3.setTransform(28, 28), this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(2)), this._renderFirstFrame()
    }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(0, 0, 56, 56), (lib.mcPauseButtonNew = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.instance = new lib.mcRoundBg, this.instance.setTransform(28, 28, 1, 1, 0, 0, 0, 28, 28), this.instance.alpha = .0117, this.timeline.addTween(cjs.Tween.get(this.instance).wait(2)), this.shape = new cjs.Shape, this.shape.graphics.f("#369CA8").s().p("AAZCWIAAkrIAyAAIAAErgAhKCWIAAkrIAyAAIAAErg"), this.shape.setTransform(28, 27.9832, 1, .8333), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#FFFFFF").s().p("AAZCWIAAkrIAyAAIAAErgAhKCWIAAkrIAyAAIAAErg"), this.shape_1.setTransform(28, 27.9832, 1, .8333), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).wait(1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f("#FFFFFF").s().p("Ai3C4QhMhMAAhsQAAhrBMhMQA7g7BMgNQAYgEAYAAQAZAAAYAEQBMANA6A7QBNBMAABrQAABshNBMQhMBMhrAAQhrAAhMhMg"), this.shape_2.setTransform(28, 28), this.timeline.addTween(cjs.Tween.get(this.shape_2).to({
            _off: !0
        }, 1).wait(1)), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f("#369CA8").s().p("AjFDHQhShSAAh1QAAhzBShSQA/g/BTgPQAZgEAaAAQAbAAAZAEQBTAPA/A/QBSBSAABzQAAB1hSBSQhTBRhzAAQhzAAhShRg"), this.shape_3.setTransform(28, 28), this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(2)), this._renderFirstFrame()
    }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(0, 0, 56, 56), (lib.mcNoAnswerButtonNew = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.instance = new lib.mcRect, this.instance.setTransform(118.6, 30, 1.185, .6667, 0, 0, 0, 100.1, 45), this.instance.alpha = .0117, this.timeline.addTween(cjs.Tween.get(this.instance).wait(2)), this.labelTxt = new cjs.Text("NO ANSWER", "normal 400 32px 'Lato'", "#369CA8"), this.labelTxt.name = "labelTxt", this.labelTxt.textAlign = "center", this.labelTxt.lineHeight = 37, this.labelTxt.lineWidth = 192, (this.labelTxt.parent = this).labelTxt.setTransform(118.5, 17), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.labelTxt)), this.timeline.addTween(cjs.Tween.get(this.labelTxt).wait(1).to({
            color: "#FFFFFF"
        }, 0).wait(1)), this.shape = new cjs.Shape, this.shape.graphics.f("#FFFFFF").s().p("AxaEYQgyAAAAgyIAAnLQAAgyAyAAMAi1AAAQAyAAAAAyIAAHLQAAAygyAAg"), this.shape.setTransform(118.5, 30), this.timeline.addTween(cjs.Tween.get(this.shape).to({
            _off: !0
        }, 1).wait(1)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#369CA8").s().p("AxuEsQgyAAAAgyIAAnzQAAgyAyAAMAjdAAAQAyAAAAAyIAAHzQAAAygyAAg"), this.shape_1.setTransform(118.5, 30), this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2)), this._renderFirstFrame()
    }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(0, 0, 237, 60), (lib.mcHelpButtonNew = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.instance = new lib.mcRoundBg, this.instance.setTransform(28, 28, 1, 1, 0, 0, 0, 28, 28), this.instance.alpha = .0117, this.timeline.addTween(cjs.Tween.get(this.instance).wait(2)), this.shape = new cjs.Shape, this.shape.graphics.f("#369CA8").s().p("AgcCWQgHgHAAgLQAAgLAHgIQAIgHALAAQAKAAAHAHQAIAIAAALQAAALgIAHQgHAIgKAAQgLAAgIgIgAgUAvIgDgiQAAgJAFgJIAMgOQAagTAQgUQAIgQgDgSQgEgSgNgGQgIgGgOgCQgLgCgQAFIgPAHIgQAJQgGADgFgFIgKgSIANgLIASgLIATgHQAcgHAaAIQAaAIAOAVQAOAWgEAUQAAAYgMAQQgNAPgSAOQgIAFgIAIQgHADgCAMIgEAgg"), this.shape.setTransform(28.0348, 27.9899, .8933, .8863), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#FFFFFF").s().p("AgaCNQgHgHAAgKQAAgKAHgIQAHgGALAAQAJAAAGAGQAJAIAAAKQAAAKgJAHQgGAHgJAAQgLAAgHgHgAgTAsIgDgfQAAgJAFgJIALgMQAZgSAQgUQAHgOgDgRQgEgRgMgGQgIgGgNgBQgLgCgOAEIgPAHIgPAJQgGACgEgFIgKgRIAMgKIASgKIARgGQAbgHAZAIQAZAHANATQANAVgDATQAAAXgMAOQgMAPgRANQgIAEgIAIQgGADgDALIgDAeg"), this.shape_1.setTransform(28.0248, 28.0146, .9428, .9444), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).wait(1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f("#FFFFFF").s().p("Ai3C4QhMhMAAhsQAAhrBMhMQA7g7BMgNQAYgEAYAAQAZAAAYAEQBMANA6A7QBNBMAABrQAABshNBMQhMBMhrAAQhrAAhMhMg"), this.shape_2.setTransform(28, 28), this.timeline.addTween(cjs.Tween.get(this.shape_2).to({
            _off: !0
        }, 1).wait(1)), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f("#369CA8").s().p("AjFDHQhShSAAh1QAAhzBShSQA/g/BTgPQAZgEAaAAQAbAAAZAEQBTAPA/A/QBSBSAABzQAAB1hSBSQhTBRhzAAQhzAAhShRg"), this.shape_3.setTransform(28, 28), this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(2)), this._renderFirstFrame()
    }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(0, 0, 56, 56), (lib.mcArrowPrevButton = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.instance = new lib.mcRoundBg, this.instance.setTransform(28, 28, 1, 1, 0, 0, 0, 28, 28), this.instance.alpha = .0117, this.timeline.addTween(cjs.Tween.get(this.instance).wait(2)), this.shape = new cjs.Shape, this.shape.graphics.f("#369CA8").s().p("Ag7BVIBZhVIhZhUIARgPIBmBjIgPAPIAAgBIhXBWg"), this.shape.setTransform(26, 28, 1, 1, 0, 0, 180), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#FFFFFF").s().p("AgsAOIAAABIgPgPIBmhjIARAPIhZBUIBZBVIgRAPg"), this.shape_1.setTransform(26, 28), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).wait(1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f("#FFFFFF").s().p("Ai3C4QhMhMAAhsQAAhrBMhMQA7g7BMgNQAYgEAYAAQAZAAAYAEQBMANA6A7QBNBMAABrQAABshNBMQhMBMhrAAQhrAAhMhMg"), this.shape_2.setTransform(28, 28), this.timeline.addTween(cjs.Tween.get(this.shape_2).to({
            _off: !0
        }, 1).wait(1)), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f("#369CA8").s().p("AjFDHQhShSAAh1QAAhzBShSQAYgYAcgSQArgaAzgKQAZgEAaAAQAbAAAZAEQAzAKArAaQAbASAZAYQBSBSAABzQAAB1hSBSQhTBRhzAAQhzAAhShRg"), this.shape_3.setTransform(28, 28), this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(2)), this._renderFirstFrame()
    }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(0, 0, 56, 56), (lib.mcArrowNextButton = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.instance = new lib.mcRoundBg, this.instance.setTransform(28, 28, 1, 1, 0, 0, 0, 28, 28), this.instance.alpha = .0117, this.timeline.addTween(cjs.Tween.get(this.instance).wait(2)), this.shape = new cjs.Shape, this.shape.graphics.f("#369CA8").s().p("Ag7BVIBZhVIhZhUIARgPIBmBjIgPAPIAAgBIhXBWg"), this.shape.setTransform(30, 28), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#FFFFFF").s().p("Ag7BVIBZhVIhZhUIARgPIBmBjIgPAPIAAgBIhXBWg"), this.shape_1.setTransform(30, 28), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).wait(1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f("#FFFFFF").s().p("Ai3C4QhMhMAAhsQAAhrBMhMQA7g7BMgNQAYgEAYAAQAZAAAYAEQBMANA6A7QBNBMAABrQAABshNBMQhMBMhrAAQhrAAhMhMg"), this.shape_2.setTransform(28, 28), this.timeline.addTween(cjs.Tween.get(this.shape_2).to({
            _off: !0
        }, 1).wait(1)), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f("#369CA8").s().p("AjFDHQhShSAAh1QAAhzBShSQA/g/BTgPQAZgEAaAAQAbAAAZAEQBTAPA/A/QBSBSAABzQAAB1hSBSQhTBRhzAAQhzAAhShRg"), this.shape_3.setTransform(28, 28), this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(2)), this._renderFirstFrame()
    }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(0, 0, 56, 56), (lib.QuestionWinPopup = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.closeButton = new lib.mcXButton, this.closeButton.setTransform(827, 7, .8214, .8214), this.timeline.addTween(cjs.Tween.get(this.closeButton).wait(1)), this.titleTxt = new cjs.Text("Question Won", "normal 400 30px 'Lato'", "#676767"), this.titleTxt.name = "titleTxt", this.titleTxt.textAlign = "center", this.titleTxt.lineHeight = 35, this.titleTxt.lineWidth = 876, (this.titleTxt.parent = this).titleTxt.setTransform(440, 13.25), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.titleTxt)), this.timeline.addTween(cjs.Tween.get(this.titleTxt).wait(1)), this.rightArrow = new lib.mcArrowNextButton, this.rightArrow.setTransform(845, 128, 1, 1, 0, 0, 0, 28, 28), this.timeline.addTween(cjs.Tween.get(this.rightArrow).wait(1)), this.scoreBar = new lib.ScoreBar, this.scoreBar.setTransform(536, 139.85, 1, 1, 0, 0, 0, 200, 15.3), this.timeline.addTween(cjs.Tween.get(this.scoreBar).wait(1)), this.titleBar = new lib.mcPopupTitleBar, this.titleBar.setTransform(440, 30, 1, 1, 0, 0, 0, 440, 30), this.timeline.addTween(cjs.Tween.get(this.titleBar).wait(1)), this.bg = new lib.mcPopupBg, this.bg.setTransform(440, 85, 1, 1, 0, 0, 0, 440, 85), this.timeline.addTween(cjs.Tween.get(this.bg).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.QuestionWinPopup, new cjs.Rectangle(-1, -1, 882, 172), null), (lib.QuestionLostPopup = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.closeButton = new lib.mcXButton, this.closeButton.setTransform(827, 7, .8214, .8214), this.timeline.addTween(cjs.Tween.get(this.closeButton).wait(1)), this.titleTxt = new cjs.Text("Question Lost", "normal 400 30px 'Lato'", "#676767"), this.titleTxt.name = "titleTxt", this.titleTxt.textAlign = "center", this.titleTxt.lineHeight = 35, this.titleTxt.lineWidth = 876, (this.titleTxt.parent = this).titleTxt.setTransform(440, 18), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.titleTxt)), this.timeline.addTween(cjs.Tween.get(this.titleTxt).wait(1)), this.messageTxt = new cjs.Text("You used your", "normal 400 22px 'Lato'", "#676767"), this.messageTxt.name = "messageTxt", this.messageTxt.lineHeight = 26, this.messageTxt.lineWidth = 143, (this.messageTxt.parent = this).messageTxt.setTransform(22, 118.65), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.messageTxt)), this.timeline.addTween(cjs.Tween.get(this.messageTxt).wait(1)), this.tryAgainButton = new lib.mcRefreshButtonNew, this.tryAgainButton.setTransform(740, 100), this.timeline.addTween(cjs.Tween.get(this.tryAgainButton).wait(1)), this.rightArrow = new lib.mcArrowNextButton, this.rightArrow.setTransform(845, 128, 1, 1, 0, 0, 0, 28, 28), this.timeline.addTween(cjs.Tween.get(this.rightArrow).wait(1)), this.titleBar = new lib.mcPopupTitleBar, this.titleBar.setTransform(440, 30, 1, 1, 0, 0, 0, 440, 30), this.timeline.addTween(cjs.Tween.get(this.titleBar).wait(1)), this.bg = new lib.mcPopupBg, this.bg.setTransform(440, 85, 1, 1, 0, 0, 0, 440, 85), this.timeline.addTween(cjs.Tween.get(this.bg).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.QuestionLostPopup, new cjs.Rectangle(-1, -1, 882, 172), null), (lib.mcScoringPage = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("10 points\nfor lives left", "normal 400 22px 'Lato'", "#676767"), this.text.lineHeight = 26, this.text.lineWidth = 122, (this.text.parent = this).text.setTransform(173.6, 305.15), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.shape = new cjs.Shape, this.shape.graphics.f().ls(["#000000", "#FFFFFF"], [0, 1], 46.7, -9.5, -45.7, 9.6).ss(2, 1, 1).p("AIZERQgNAigaAXQgVgFgqggAHyFKQhWkfj0i0QlWjslqA2"), this.shape.setTransform(117.925, 288.8943, 1, 1, 180), this.text_1 = new cjs.Text("Get enough points to \npass your chapter.", "normal 400 22px 'Lato'", "#676767"), this.text_1.lineHeight = 26, this.text_1.lineWidth = 222, (this.text_1.parent = this).text_1.setTransform(617.55, 295.15), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().ls(["#000000", "#FFFFFF"], [0, 1], 46.7, -9.5, -45.7, 9.6).ss(2, 1, 1).p("AIZERQgNAigaAXQgVgFgqggAHyFKQhWkfj0i0QlWjslqA2"), this.shape_1.setTransform(565.625, 285.1943, 1, 1, 180), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.text_1
            }, {
                t: this.shape
            }, {
                t: this.text
            }]
        }).wait(1)), this.titleTxt = new cjs.Text("Perfect!", "normal 400 30px 'Lato'", "#676767"), this.titleTxt.name = "titleTxt", this.titleTxt.textAlign = "center", this.titleTxt.lineHeight = 35, this.titleTxt.lineWidth = 876, (this.titleTxt.parent = this).titleTxt.setTransform(439.95, 126.35, .909, .9091), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.titleTxt)), this.timeline.addTween(cjs.Tween.get(this.titleTxt).wait(1)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f("#369CA8").s().p("Ag7BVIBZhVIhZhUIAQgPIBnBjIgPAPIAAgBIhYBWg"), this.shape_2.setTransform(802.2914, 231.1449, .6784, .6784), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f("#FFFFFF").s().p("Ai3C4QhMhMAAhsQAAhrBMhMQA7g7BNgNQAXgEAYAAQAZAAAYAEQBMANA7A7QBMBMAABrQAABshMBMQhMBMhsAAQhqAAhNhMg"), this.shape_3.setTransform(802.2914, 231.1449, .6784, .6784), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f("#369CA8").s().p("AjFDHQhShSAAh1QAAhzBShSQA/g/BSgPQAagEAaAAQAbAAAZAEQBTAPA+A/QBTBSAABzQAAB1hTBSQhSBRhzAAQhzAAhShRg"), this.shape_4.setTransform(802.2914, 231.1449, .6784, .6784), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }).wait(1)), this.text_2 = new cjs.Text("+10", "normal 400 21px 'Lato'", "#008000"), this.text_2.lineHeight = 25, this.text_2.lineWidth = 37, (this.text_2.parent = this).text_2.setTransform(50.65, 184.2), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_2)), this.text_3 = new cjs.Text("+10", "normal 400 21px 'Lato'", "#008000"), this.text_3.lineHeight = 25, this.text_3.lineWidth = 37, (this.text_3.parent = this).text_3.setTransform(87.2, 193.2), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_3)), this.text_4 = new cjs.Text("+10", "normal 400 21px 'Lato'", "#008000"), this.text_4.lineHeight = 25, this.text_4.lineWidth = 37, (this.text_4.parent = this).text_4.setTransform(123.75, 201.2), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_4)), this.text_5 = new cjs.Text("+10", "normal 400 21px 'Lato'", "#008000"), this.text_5.lineHeight = 25, this.text_5.lineWidth = 37, (this.text_5.parent = this).text_5.setTransform(160.3, 209.65), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_5)), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_5
            }, {
                t: this.text_4
            }, {
                t: this.text_3
            }, {
                t: this.text_2
            }]
        }).wait(1)), this.heartBlue = new lib.mcHeartGreen, this.heartBlue.setTransform(177.3, 241.75, .8621, .8612, 0, 0, 0, 12.3, 12.3), this.heartBlue_1 = new lib.mcHeartGreen, this.heartBlue_1.setTransform(141.1, 241.75, .8621, .8612, 0, 0, 0, 12.3, 12.3), this.heartBlue_2 = new lib.mcHeartGreen, this.heartBlue_2.setTransform(104.85, 241.75, .8621, .8612, 0, 0, 0, 12.2, 12.3), this.heartBlue_3 = new lib.mcHeartGreen, this.heartBlue_3.setTransform(68.45, 241.75, .8621, .8612, 0, 0, 0, 12.3, 12.3), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.heartBlue_3
            }, {
                t: this.heartBlue_2
            }, {
                t: this.heartBlue_1
            }, {
                t: this.heartBlue
            }]
        }).wait(1)), this.scoreBar = new lib.ScoreBar, this.scoreBar.setTransform(546.4, 236.15, .869, .8637, 0, 0, 0, 210.2, 14.9), this.timeline.addTween(cjs.Tween.get(this.scoreBar).wait(1)), this.titleBar = new lib.mcPopupTitleBar, this.titleBar.setTransform(440.1, 137.45, .909, .9091, 0, 0, 0, 440.1, 30.2), this.bg = new lib.mcPopupBg, this.bg.setTransform(440.1, 187.35, .909, .9091, 0, 0, 0, 440.1, 85.1), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.bg
            }, {
                t: this.titleBar
            }]
        }).wait(1)), this.closeButton = new lib.mcCloseButtonNew, this.closeButton.setTransform(367.5, 382), this.timeline.addTween(cjs.Tween.get(this.closeButton).wait(1)), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f().s("#676767").ss(2, 1, 1).p("EhEvgjJMCJfAAAMAAABGTMiJfAAAg"), this.shape_5.setTransform(440, 225), this.shape_6 = new cjs.Shape, this.shape_6.graphics.f("#FFFFFF").s().p("EhEvAjKMAAAhGTMCJfAAAMAAABGTg"), this.shape_6.setTransform(440, 225), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_6
            }, {
                t: this.shape_5
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.mcScoringPage, new cjs.Rectangle(-1, -1, 882, 452), null), (lib.mcInstructionsElements = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.shape = new cjs.Shape, this.shape.graphics.f("#369CA8").s().p("Ag7BVIBZhVIhZhUIARgPIBmBjIgPAPIAAgBIhXBWg"), this.shape.setTransform(860, 36), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f("#FFFFFF").s().p("Ai3C4QhMhMAAhsQAAhrBMhMQA7g7BMgNQAYgEAYAAQAZAAAYAEQBMANA6A7QBNBMAABrQAABshNBMQhMBMhrAAQhrAAhMhMg"), this.shape_1.setTransform(860, 36), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f("#369CA8").s().p("AjFDHQhShSAAh1QAAhzBShSQA/g/BTgPQAZgEAaAAQAbAAAZAEQBTAPA/A/QBSBSAABzQAAB1hSBSQhTBRhzAAQhzAAhShRg"), this.shape_2.setTransform(860, 36), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1)), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f("#369CA8").s().p("AhNBOQggghAAgtQAAgtAgggQAgggAtAAQAtAAAgAgIAEAEIAdgdIAABGIhGAAIAbgbIgDgDQgbgbglAAQgkAAgaAbQgbAaAAAkQAAAlAbAbQAaAaAkAAQAlAAAbgaIAKgMIAOAOIgLAMQggAggtAAQgtAAggggg"), this.shape_3.setTransform(28, 123.95), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f("#FFFFFF").s().p("AjFDHQhShSAAh1QAAhzBShSQA/g/BSgOQAagFAaAAQAbAAAaAFQBRAOBAA/QBSBSAABzQAAB1hSBSQhSBRh0AAQhzAAhShRg"), this.shape_4.setTransform(28.0144, 123.9325, .9286, .9286), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f("#369CA8").s().p("AjFDHQhShSAAh1QAAhzBShSQA/g/BTgPQAZgEAaAAQAbAAAZAEQBTAPA/A/QBSBSAABzQAAB1hSBSQhTBRhzAAQhzAAhShRg"), this.shape_5.setTransform(28, 123.95), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }]
        }).wait(1)), this.heartBlue = new lib.mcHeartPurple, this.heartBlue.setTransform(225.1, 133.6, 1, 1, 0, 0, 0, 12.1, 12.1), this.heartBlue_1 = new lib.mcHeartPurple, this.heartBlue_1.setTransform(183.1, 133.6, 1, 1, 0, 0, 0, 12.1, 12.1), this.heartBlue_2 = new lib.mcHeartPurple, this.heartBlue_2.setTransform(141.1, 133.6, 1, 1, 0, 0, 0, 12.1, 12.1), this.heartBlue_3 = new lib.mcHeartPurple, this.heartBlue_3.setTransform(99.1, 133.6, 1, 1, 0, 0, 0, 12.1, 12.1), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.heartBlue_3
            }, {
                t: this.heartBlue_2
            }, {
                t: this.heartBlue_1
            }, {
                t: this.heartBlue
            }]
        }).wait(1)), this.scoreBar = new lib.ScoreBar, this.scoreBar.setTransform(588.35, 136.2, 1, 1, 0, 0, 0, 210, 14.7), this.timeline.addTween(cjs.Tween.get(this.scoreBar).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.mcInstructionsElements, new cjs.Rectangle(0, -1, 889, 153), null), (lib.LessonCompletePopup = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.closeButton = new lib.mcXButton, this.closeButton.setTransform(827, 7, .8214, .8214), this.timeline.addTween(cjs.Tween.get(this.closeButton).wait(1)), this.titleTxt = new cjs.Text("Lesson Complete!", "normal 400 30px 'Lato'", "#676767"), this.titleTxt.name = "titleTxt", this.titleTxt.textAlign = "center", this.titleTxt.lineHeight = 35, this.titleTxt.lineWidth = 876, (this.titleTxt.parent = this).titleTxt.setTransform(440, 18), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.titleTxt)), this.timeline.addTween(cjs.Tween.get(this.titleTxt).wait(1)), this.messageTxt = new cjs.Text("Continue with your course below the app.", "normal 400 30px 'Lato'", "#676767"), this.messageTxt.name = "messageTxt", this.messageTxt.textAlign = "center", this.messageTxt.lineHeight = 35, this.messageTxt.lineWidth = 876, (this.messageTxt.parent = this).messageTxt.setTransform(440, 105.75), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.messageTxt)), this.timeline.addTween(cjs.Tween.get(this.messageTxt).wait(1)), this.titleBar = new lib.mcPopupTitleBar, this.titleBar.setTransform(440, 30, 1, 1, 0, 0, 0, 440, 30), this.timeline.addTween(cjs.Tween.get(this.titleBar).wait(1)), this.bg = new lib.mcPopupBg, this.bg.setTransform(440, 85, 1, 1, 0, 0, 0, 440, 85), this.timeline.addTween(cjs.Tween.get(this.bg).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.LessonCompletePopup, new cjs.Rectangle(-1, -1, 882, 172), null), (lib.mcInstructionsPage = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.text = new cjs.Text("Next Question", "normal 400 22px 'Lato'", "#676767"), this.text.lineHeight = 26, this.text.lineWidth = 145, (this.text.parent = this).text.setTransform(589.35, 112.85), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.shape = new cjs.Shape, this.shape.graphics.f().ls(["#000000", "#FFFFFF"], [0, 1], 46.7, -9.5, -45.7, 9.6).ss(2, 1, 1).p("AIZERQgNAigaAXQgVgFgqggAHyFKQhWkfj0i0QlWjslqA2"), this.shape.setTransform(780.725, 160.3057), this.text_1 = new cjs.Text("Get enough points\nto pass each chapter.", "normal 400 22px 'Lato'", "#676767"), this.text_1.lineHeight = 26, this.text_1.lineWidth = 213, (this.text_1.parent = this).text_1.setTransform(454.65, 226.4), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_1)), this.shape_1 = new cjs.Shape, this.shape_1.graphics.f().ls(["#000000", "#FFFFFF"], [0, 1], 46.7, -9.5, -45.7, 9.6).ss(2, 1, 1).p("AIZERQgNAigaAXQgVgFgqggAHyFKQhWkfj0i0QlWjslqA2"), this.shape_1.setTransform(690.475, 274.5057), this.text_2 = new cjs.Text("Lives", "normal 400 22px 'Lato'", "#676767"), this.text_2.lineHeight = 26, this.text_2.lineWidth = 62, (this.text_2.parent = this).text_2.setTransform(215.3, 231.85), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_2)), this.shape_2 = new cjs.Shape, this.shape_2.graphics.f().ls(["#000000", "#FFFFFF"], [0, 1], -46.7, -9.5, 45.7, 9.6).ss(2, 1, 1).p("AoYERQANAiAaAXQAVgFAqggAnxFKQBWkfD0i0QFWjsFqA2"), this.shape_2.setTransform(162.125, 274.5057), this.text_3 = new cjs.Text("Refresh Question", "normal 400 22px 'Lato'", "#676767"), this.text_3.lineHeight = 26, this.text_3.lineWidth = 180, (this.text_3.parent = this).text_3.setTransform(61.4, 151.05), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text_3)), this.shape_3 = new cjs.Shape, this.shape_3.graphics.f().ls(["#000000", "#FFFFFF"], [0, 1], -37.1, -15.4, 36.2, 15.8).ss(2, 1, 1).p("AmpG9QAKA4AVAmQARgJAhgzAmKIbQBFnUDBknQEPmBEfBY"), this.shape_3.setTransform(84.675, 231.4398), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.text_3
            }, {
                t: this.shape_2
            }, {
                t: this.text_2
            }, {
                t: this.shape_1
            }, {
                t: this.text_1
            }, {
                t: this.shape
            }, {
                t: this.text
            }]
        }).wait(1)), this.ui = new lib.mcInstructionsElements, this.ui.setTransform(15, 196.35, .9572, .9569, 0, 0, 0, 0, .1), this.timeline.addTween(cjs.Tween.get(this.ui).wait(1)), this.nextButton = new lib.mcArrowNextButton, this.nextButton.setTransform(412, 382), this.timeline.addTween(cjs.Tween.get(this.nextButton).wait(1)), this.shape_4 = new cjs.Shape, this.shape_4.graphics.f().s("#676767").ss(2, 1, 1).p("EhEvgjJMCJfAAAMAAABGTMiJfAAAg"), this.shape_4.setTransform(440, 225), this.shape_5 = new cjs.Shape, this.shape_5.graphics.f("#FFFFFF").s().p("EhEvAjKMAAAhGTMCJfAAAMAAABGTg"), this.shape_5.setTransform(440, 225), this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }]
        }).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.mcInstructionsPage, new cjs.Rectangle(-1, -1, 882, 452), null), (lib.HelpAndOptionsPopup = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.closeButton = new lib.mcXButton, this.closeButton.setTransform(827, 7, .8214, .8214), this.timeline.addTween(cjs.Tween.get(this.closeButton).wait(1)), this.titleTxt = new cjs.Text("", "normal 400 30px 'Lato'", "#676767"), this.titleTxt.name = "titleTxt", this.titleTxt.textAlign = "center", this.titleTxt.lineHeight = 35, this.titleTxt.lineWidth = 876, (this.titleTxt.parent = this).titleTxt.setTransform(440, 18), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.titleTxt)), this.timeline.addTween(cjs.Tween.get(this.titleTxt).wait(1)), this.titleBar = new lib.mcPopupTitleBar, this.titleBar.setTransform(440, 30, 1, 1, 0, 0, 0, 440, 30), this.timeline.addTween(cjs.Tween.get(this.titleBar).wait(1)), this.instructionsPage = new lib.mcInstructionsPage, this.instructionsPage.setTransform(440, 225, 1, 1, 0, 0, 0, 440, 225), this.timeline.addTween(cjs.Tween.get(this.instructionsPage).wait(1)), this.scoringPage = new lib.mcScoringPage, this.scoringPage.setTransform(440, 225, 1, 1, 0, 0, 0, 440, 225), this.timeline.addTween(cjs.Tween.get(this.scoringPage).wait(1)), this.bg = new lib.mcPopupBg2, this.bg.setTransform(440, 225, 1, 1, 0, 0, 0, 440, 225), this.timeline.addTween(cjs.Tween.get(this.bg).wait(1)), this._renderFirstFrame()
    }).prototype = getMCSymbolPrototype(lib.HelpAndOptionsPopup, new cjs.Rectangle(-1, -1, 882, 452), null), (lib.lsatgame = function(mode, startPosition, loop) {
        null == loop && (loop = !1), this.initialize(mode, startPosition, loop, {}), this.isSingleFrame = !1, this.frame_0 = function() {
            this.isSingleFrame || (1 == this.totalFrames && (this.isSingleFrame = !0), window.app && window.app.setLibrary && window.app.setLibrary(lib))
        }, this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1)), this.text = new cjs.Text("v1.58", "normal 400 20px 'Lato'", "#676767"), this.text.textAlign = "right", this.text.lineHeight = 24, this.text.lineWidth = 76, (this.text.parent = this).text.setTransform(894, 1326), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.text)), this.timeline.addTween(cjs.Tween.get(this.text).wait(1)), this.timerTxt = new cjs.Text("00:00", "normal 400 25px 'Lato'", "#676767"), this.timerTxt.name = "timerTxt", this.timerTxt.textAlign = "right", this.timerTxt.lineHeight = 28, this.timerTxt.lineWidth = 66, (this.timerTxt.parent = this).timerTxt.setTransform(898, 89), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.timerTxt)), this.timeline.addTween(cjs.Tween.get(this.timerTxt).wait(1)), this.pauseButton = new lib.mcPauseButtonNew, this.pauseButton.setTransform(862.6, 153.6, 1.1964, 1.1964, 0, 0, 0, 28.1, 28.1), this.timeline.addTween(cjs.Tween.get(this.pauseButton).wait(1)), this.pauseScreen = new lib.mcPauseScreen, this.pauseScreen.setTransform(450, 675, 1, 1, 0, 0, 0, 450, 675), this.pauseScreen.visible = !1, this.timeline.addTween(cjs.Tween.get(this.pauseScreen).wait(1)), this.helpButton = new lib.mcHelpButtonNew, this.helpButton.setTransform(862.6, 39.6, 1.1964, 1.1964, 0, 0, 0, 28.1, 28.1), this.timeline.addTween(cjs.Tween.get(this.helpButton).wait(1)), this.refreshButton = new lib.mcRefreshButtonNew, this.refreshButton.setTransform(38, 1312.85, 1.1964, 1.1964, 0, 0, 0, 28.4, 28.3), this.timeline.addTween(cjs.Tween.get(this.refreshButton).wait(1)), this.nextButton = new lib.mcArrowNextButton, this.nextButton.setTransform(862.5, 1233.6, 1.1964, 1.1964, 0, 0, 0, 28, 28.1), this.timeline.addTween(cjs.Tween.get(this.nextButton).wait(1)), this.prevButton = new lib.mcArrowPrevButton, this.prevButton.setTransform(37.6, 1233.6, 1.1964, 1.1964, 0, 0, 0, 28.1, 28.1), this.timeline.addTween(cjs.Tween.get(this.prevButton).wait(1)), this.noAnswerButton = new lib.mcNoAnswerButtonNew, this.noAnswerButton.setTransform(450, 996, 1, 1, 0, 0, 0, 125, 24), this.timeline.addTween(cjs.Tween.get(this.noAnswerButton).wait(1)), this.logicInstructionsTxt = new cjs.Text("", "normal 400 25px 'Lato'"), this.logicInstructionsTxt.name = "logicInstructionsTxt", this.logicInstructionsTxt.textAlign = "center", this.logicInstructionsTxt.lineHeight = 28, this.logicInstructionsTxt.lineWidth = 826, (this.logicInstructionsTxt.parent = this).logicInstructionsTxt.setTransform(415, 8, 1.0001, 1), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.logicInstructionsTxt)), this.timeline.addTween(cjs.Tween.get(this.logicInstructionsTxt).wait(1)), this.logicInstructionsTxt2 = new cjs.Text("", "normal 400 25px 'Lato'"), this.logicInstructionsTxt2.name = "logicInstructionsTxt2", this.logicInstructionsTxt2.textAlign = "center", this.logicInstructionsTxt2.lineHeight = 28, this.logicInstructionsTxt2.lineWidth = 896, (this.logicInstructionsTxt2.parent = this).logicInstructionsTxt2.setTransform(450, 802), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.logicInstructionsTxt2)), this.timeline.addTween(cjs.Tween.get(this.logicInstructionsTxt2).wait(1)), this.upperTextArea = new cjs.Text("", "normal 400 26px 'Lato'", "#676767"), this.upperTextArea.name = "upperTextArea", this.upperTextArea.lineHeight = 29, this.upperTextArea.lineWidth = 826, (this.upperTextArea.parent = this).upperTextArea.setTransform(2, 8, 1.0001, 1), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.upperTextArea)), this.timeline.addTween(cjs.Tween.get(this.upperTextArea).wait(1)), this.mainIdeaTxt = new cjs.Text("", "normal 700 36px 'Lato'", "#676767"), this.mainIdeaTxt.name = "mainIdeaTxt", this.mainIdeaTxt.lineHeight = 40, this.mainIdeaTxt.lineWidth = 826, (this.mainIdeaTxt.parent = this).mainIdeaTxt.setTransform(2, 8, 1.0001, 1), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.mainIdeaTxt)), this.timeline.addTween(cjs.Tween.get(this.mainIdeaTxt).wait(1));
        var mask = new cjs.Shape;
        mask._off = !0, mask.graphics.p("EgwgBmCMAAAgj8MBvjAAAMAAAAj8g"), mask.setTransform(403.5068, 653), this.lowerTextArea = new cjs.Text("", "normal 400 22px 'Lato'", "#676767"), this.lowerTextArea.name = "lowerTextArea", this.lowerTextArea.lineHeight = 26, this.lowerTextArea.lineWidth = 710, (this.lowerTextArea.parent = this).lowerTextArea.setTransform(95, 1182), lib.properties.webfonts.Lato || (lib.webFontTxtInst.Lato = lib.webFontTxtInst.Lato || [], lib.webFontTxtInst.Lato.push(this.lowerTextArea));
        for (var maskedShapeInstanceList = [this.lowerTextArea], shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        this.timeline.addTween(cjs.Tween.get(this.lowerTextArea).wait(1)), this._renderFirstFrame()
    }).prototype = p = new cjs.MovieClip, p.nominalBounds = new cjs.Rectangle(450, 675, 450, 675), lib.properties = {
        id: "42CBA5CD4DE0D34D9B47F97B8C4EC81A",
        width: 900,
        height: 1350,
        fps: 30,
        color: "#FFFFFF",
        opacity: 1,
        webfonts: {},
        manifest: [{
            src: "sounds/ButtonClick.mp3",
            id: "ButtonClick"
        }, {
            src: "sounds/CorrectWordDrop.mp3",
            id: "CorrectWordDrop"
        }, {
            src: "sounds/IncorrectWordDrop.mp3",
            id: "IncorrectWordDrop"
        }, {
            src: "sounds/PageFlip.mp3",
            id: "PageFlip"
        }, {
            src: "sounds/Ping.mp3",
            id: "Ping"
        }, {
            src: "sounds/Refresh.mp3",
            id: "Refresh"
        }, {
            src: "sounds/WordPick.mp3",
            id: "WordPick"
        }],
        preloads: []
    }, (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas)
    }).prototype = p = new createjs.StageGL, p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay
    }, p.play = function() {
        this.tickEnabled = !0, this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }, p.stop = function(ms) {
        ms && this.seek(ms), this.tickEnabled = !1
    }, p.seek = function(ms) {
        this.tickEnabled = !0, this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1e3)
    }, p.getDuration = function() {
        return this.getChildAt(0).totalFrames / lib.properties.fps * 1e3
    }, p.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / lib.properties.fps * 1e3
    }, an.bootcompsLoaded = an.bootcompsLoaded || [], an.bootstrapListeners || (an.bootstrapListeners = []), an.bootstrapCallback = function(fnCallback) {
        if (an.bootstrapListeners.push(fnCallback), 0 < an.bootcompsLoaded.length)
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) fnCallback(an.bootcompsLoaded[i])
    }, an.compositions = an.compositions || {}, an.compositions["42CBA5CD4DE0D34D9B47F97B8C4EC81A"] = {
        getStage: function() {
            return exportRoot.stage
        },
        getLibrary: function() {
            return lib
        },
        getSpriteSheet: function() {
            return ss
        },
        getImages: function() {
            return img
        }
    }, an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) an.bootstrapListeners[j](id)
    }, an.getComposition = function(id) {
        return an.compositions[id]
    }, an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {
        var lastW, lastH, lastS = 1;

        function resizeCanvas() {
            var w = lib.properties.width,
                h = lib.properties.height,
                iw = window.innerWidth,
                ih = window.innerHeight,
                pRatio = window.devicePixelRatio || 1,
                xRatio = iw / w,
                yRatio = ih / h,
                sRatio = 1;
            isResp && ("width" == respDim && lastW == iw || "height" == respDim && lastH == ih ? sRatio = lastS : isScale ? 1 == scaleType ? sRatio = Math.min(xRatio, yRatio) : 2 == scaleType && (sRatio = Math.max(xRatio, yRatio)) : (iw < w || ih < h) && (sRatio = Math.min(xRatio, yRatio))), domContainers[0].width = w * pRatio * sRatio, domContainers[0].height = h * pRatio * sRatio, domContainers.forEach(function(container) {
                container.style.width = w * sRatio + "px", container.style.height = h * sRatio + "px"
            }), stage.scaleX = pRatio * sRatio, stage.scaleY = pRatio * sRatio, lastW = iw, lastH = ih, lastS = sRatio, stage.tickOnUpdate = !1, stage.update(), stage.tickOnUpdate = !0
        }
        window.addEventListener("resize", resizeCanvas), resizeCanvas()
    }
}(createjs = createjs || {}, AdobeAn = AdobeAn || {});