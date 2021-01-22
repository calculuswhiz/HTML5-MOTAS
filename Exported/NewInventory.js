(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"NewInventory_atlas_1", frames: [[0,0,132,132],[196,0,32,202],[134,0,60,223]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_11 = function() {
	this.initialize(ss["NewInventory_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["NewInventory_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["NewInventory_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.SelectionIndicator = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AlJlJIKTAAIAAKTIqTAAg");
	this.shape.setTransform(32.95,32.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.2)").s().p("AlJFJIAAqSIKSAAIAAKSg");
	this.shape_1.setTransform(32.95,32.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SelectionIndicator, new cjs.Rectangle(-1,-1,67.9,67.9), null);


(lib.Symbol297 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("AJYAAIAAPoIV413IAAvogAGQDIIAAJYIjIDIImPGQAnzJYIhkAAIDIjIIGPAAIhjBkIhkBkgA4/GQIDIjIIcHAAIpXJYIAAJYI8IAAIAApYA4/GQIAAmQIV413MAiXAAAA3bJYIhkAAIDIjIIGQAAIhkBkIhkBkgA9rSwIAAksIEsAAIUUAAIAAEsAjHMgI8IAAIGQmQA4/AAMAiXAAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#666666","#999999"],[0,1],15,0,-15,0).s().p("AiViVIErAAIkrErg");
	this.shape_1.setTransform(-175,105);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#333333","#000000"],[0,1],0,-15,0,15).s().p("AsfCWIEskrIUTAAIAAErg");
	this.shape_2.setTransform(-110,105);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#666666","#999999"],[0,1],-86.3,50.1,86.3,-50).s().p("AuDEsIAApXIcHAAIAAJXgAsfBkIAABkIY/AAIAAhkIAAkrI0TAAIksAAg");
	this.shape_3.setTransform(-110,110);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AEsAyIAAhjIGQAAIhkBjgAq7AyIAAhjIGQAAIhkBjg");
	this.shape_4.setTransform(-70,45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AuDGQIAAhkIY/AAIAABkgAH0krIBkhkIEsAAIhkBkgAnzkrIBkhkIEsAAIhkBkg");
	this.shape_5.setTransform(-100,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AGQBkIDIjHIAABjIhkBkgApXBkIDIjHIAABjIhkBkg");
	this.shape_6.setTransform(-100,50);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],0,30,0,-30).s().p("AyvEsIGQmPIDIjIIcHAAIpYJXgADIBkIBkAAIEsAAIBkhkIBkhjImQAAgAsfBkIBkAAIEsAAIBkhkIBkhjImQAAg");
	this.shape_7.setTransform(-80,50);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#CCCCCC","#999999"],[0,1],-30,0,30,0).s().p("AkrAAIJXpXIAAJXIjIDIImPGQg");
	this.shape_8.setTransform(10,80);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#333333","#000000"],[0,1],110,0,-110,0).s().p("AK8H0IDIjIIAApXI8HAAIjIDIIAAmQMAiXAAAIAAPng");
	this.shape_9.setTransform(-50,50);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#666666","#999999"],[0,1],-70,0,70,0).s().p("Aq7DIIV313IAAPoI13V3g");
	this.shape_10.setTransform(130,-20);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#333333","#000000"],[0,1],0,60.1,0,-60).s().p("ApKGeIC0gBIHpnqIg5AMQiHAahJAcQh+AwhfBdIB+AAIirCsIlqAAICrisIBwAAQB2h0Cjg9QBegkCtgjQBugWAhgRIEAkBQg8gJgRgbQgRgbAjgkQAqgqBbgeQBcgdBZAAQBZAAAhAdQAhAegqAqQghAhhAAbQhBAZhIALIifCgQAgALA+AOQB6AdARAfQAbAzh5B6QA6AJAQAaQARAcgiAiQgqAqhbAdQhcAehYAAQhXAAghgeQghgdApgqQAhghBFgbQBCgaBLgKQBfhfgRgnQgKgYhYgVIg8gOIpcJcIC0gBIm7DLg");
	this.shape_11.setTransform(11.176,-69.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#999999","#CCCCCC"],[0,1],0,70,0,-70).s().p("A8HK8IV413MAiXAAAI14V3gAnuGeIi0ABIAvDIIG7jKIizABIJbpdIA9AOQBXAVALAYQAQAnhfBfQhKALhCAZQhFAcghAhQgpApAgAeQAiAeBXAAQBYAABcgeQBbgeAqgpQAhgjgQgbQgQgag7gJQB5h6gagzQgRgfh7gdQg9gPgggLICeigQBJgKBBgaQBAgaAgghQArgrgigdQghgehYAAQhaAAhbAeQhbAdgqArQgkAjASAcQARAaA8AKIkBEAQggARhtAXQivAiheAkQiiA+h2BzIhwAAIirCsIFpAAICrisIh+AAQBghcB+gwQBJgcCIgbIA5gMg");
	this.shape_12.setTransform(20,-70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol297, new cjs.Rectangle(-201,-141,402,282), null);


(lib.Symbol293 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AizivQBCh8CJh2QCKh1B0AMQB0ANApBnAGDAYIAADIQhlCehqCOIjJAAIAAjIAC0FEIAADIAJqiqQhwDPh3C7AKwmnQAFBuhJCKAl2DgQBPi3ByjTAl2AYIAADIQhFChgqCLIAAjIAqvIMIDKAA");
	this.shape.setTransform(0.0409,17.6149);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("AC7DIQB1i3ByjTIACgFIAPgfQAuhogkhNQghhHhXgNIgtgEQh8AAiHBYQg+ApgvAwQg4A4gjBDIgCAFQhyDThPC3QhFChgqCLIjKAAQAtiOBFieIDHAAAGDDIQB3i7BwjPIACgFQAkhDARg8QALgoADglIABgsQgDg4gXgxQhEiTjPAAQjPAAjgCTQjhCShuDPIgCAFQhwDPhQC7AKvmTIAACTIABAJAC7DIIDIAAQhlCehqCOIjJAAQBpiLBnihgAqvH0IAADI");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("ACBCWQBpiLBoigIDIAAQhlCdhqCOgAoYCWQAtiOBEidIDIAAQhFCggrCLg");
	this.shape_2.setTransform(-15.05,35.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("ACBD6IAAjIIDKAAQBqiNBlieIAADIQhlCdhqCOIAAjIIAADIgAlPD6IAAjIQAriKBFihIAADIQhFCggrCLgAoYD6IAAjIIDJAAIAADIgAlPAyg");
	this.shape_3.setTransform(-15.05,45.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("ACCHCQB1i4ByjUIACgEIAQgfQAthogkhNQgghGhXgNIgtgEQh9AAiFBXQg/ApgwAxQg3A4gkBCIgCAEQhyDUhOC4IjIAAQBQi7BwjRIACgEQBujODiiSQDfiTDQAAQDOAABECTQAYAwACA4IAAAsQgEAmgLAoQgRA8gkBCIgCAEQhwDRh3C7g");
	this.shape_4.setTransform(5.7,-24.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#780000").s().p("ADmD6QB3i7BwjQIACgEQAkhDARg8QALgoADgmIAACUIABAIQAFBvhJCJIgCAFQhwDQh3C7gAoTD6QBPi4ByjTIACgEQAjhDA4g4QAvgxA/gpQCHhXB7AAIAtAEQBXANAhBGQAkBNguBpQgphoh0gMQh0gNiJB2QiKB1hCB8IgCAFQhyDThPC4g");
	this.shape_5.setTransform(15.7159,-4.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol293, new cjs.Rectangle(-69.8,-70.9,139.7,141.9), null);


(lib.Symbol286 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AQzxpQA2AfAQA8IAAAAQAQA8gfA2QgfA2g8APQg8ARg2gfQg1gfgRg8IAAgBQgQg7Agg2QAfg2A7gQQA8gQA2AfgALDrCQElElAAGdQAAGeklElQklElmeAAQmdAAklklQklklAAmeQAAmdElklQElklGdAAQGeAAElElgAQ0NmQA1AfAQA9QAQA8geA1IgBAAQgfA2g8AQQg8AQg1gfQg2gfgQg8QgRg8Afg2IABAAQAeg2A9gQQA8gQA2AfgASwSwMglfAAAMAAAglfMAlfAAAgAudxpIABAAQA2AfAQA8QAQA8ggA2QgeA2g8AQQg8AQg2gfIgBAAQg1gfgQg8QgQg9Aeg1QAgg2A8gQQA8gQA1AfgAt9N+QAsAsAAA+QAAA+gsAsQgsAsg+AAIAAAAQg/AAgrgsQgtgsABg+QgBg+AtgsQArgsA/AAIAAAAQA+AAAsAsg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AOdRqQg2gfgPg8QgRg8Afg2IAAAAQAfg2A8gQQA9gQA1AfQA2AfAQA9QAQA8gfA1IAAAAQggA2g7AQQgUAFgUAAQgmAAgkgUgAvnR+Qg/AAgrgsQgsgsABg+QgBg+AsgsQArgsA/AAIAAAAQA+AAAsAsQAsAsAAA+QAAA+gsAsQgsAsg+AAgAwytlIgBAAQg1gfgQg8QgQg8Afg2QAfg2A8gQQA9gQA1AfIAAAAQA2AgAQA8QAQA8gfA1QgfA2g8AQQgUAFgUAAQgmAAgkgUgAOdtlQg2gfgQg8IAAAAQgQg8Afg1QAgg2A7gRQA8gQA2AgQA2AfAQA7IAAABQAQA8gfA2QgfA1g8AQQgVAFgUAAQgmAAgjgUg");
	this.shape_1.setTransform(0,-0.0029);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AyvSwMAAAglfMAlfAAAMAAAAlfgAPBNXQg8AQgfA1IAAABQgfA2ARA8QAPA8A2AeQA2AgA8gQQA7gQAgg2IAAAAQAfg1gQg9QgQg8g2ggQgjgUgmAAQgUAAgVAGgAxRN+QgsAsABA+QgBA+AsAsQArAsA/AAIAAAAQA+AAAsgsQAsgsAAg+QAAg+gsgsQgsgsg+AAIAAAAQg/AAgrAsgArCrCQklElAAGdQAAGeElElQElElGdAAQGeAAElklQElklAAmeQAAmdklklQklklmeAAQmdAAklElgAwOx4Qg8AQgfA2QgfA2AQA8QAQA8A1AfIABAAQA2AfA8gQQA8gQAfg2QAfg1gQg9QgQg7g2ggIAAAAQgjgUgmAAQgUAAgVAFgAPBx4Qg7AQggA2QgfA2AQA8IAAAAQAQA8A2AfQA2AfA8gRQA8gPAfg1QAfg2gQg9IAAAAQgQg8g2gfQgkgUgmAAQgUAAgUAFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(6,1,1).p("APoMgI/PAAAvnJYIfPAAAPoGQI/PAAAvnDIIfPAAAPoAAI/PAAAvnjHIfPAAAPomPI/PAAAvnpXIfPAAAPosfI/PAA");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-121,242,242);


(lib.Symbol284 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACOkaQA6B1AAClQAACmg6B1Qg6BzhRACIgFAAQhRgCg6hzQg6h1AAimQAAilA6h1QA7h1BSAAQBTAAA7B1g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#000000"],[0,1],-10,0,0,-10,0,41.2).s().p("AgCGQQhRgCg5hzQg7h2AAilQAAilA7h1QA6h1BSAAQBTAAA6B1QA7B1AAClQAAClg7B2Qg5BzhRACg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol284, new cjs.Rectangle(-21,-41,42,82), null);


(lib.Symbol281 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AEsH0IGQyvIAADIImQSvgAEsK8IvnAAIAAjIIPnAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Aq7K8IAAjIIPnAAIAADIIAAjIIGQyvIAADIImQSvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol281, new cjs.Rectangle(-71,-71,142,142), null);


(lib.Symbol277 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AgBAAIADAB");
	this.shape.setTransform(-11,-111.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1,3,true).p("AGdLoIA9EvQBDAtA/gtMgGvghxIAAgBIgmgNIgYgEQglgDgfAVIAuDqIBMASQA8BPgdBPIhKgOIBBFFIBIAFQAxBPgRBPIhIAAIm3AAIgmi+IG9AbAkCmkIhMl8IHIBSAEcBeIBGgJQAzBfgUA/IhFANImmBTIBLF8IGciKIBDgWQAwBPgQBPIhDAbImXClIBWGwQhNA4hSg4MgIYgp/QAzgiA/ARIArAQAhqFTIgmi+IGsg3AjeCfQBaBhgzBiQhfhSA4hxgAE8EAIBBFFAAGONIgli+AhqLoQBcBhg1BiQhbhDA0iAgAjcjmIBMF7ADbjmIBBFEAnIvyQBSBhgrBiQhbhiA0hhgAm71CIBHFkIAmC+AlTmpQBbBhg0BiQhihiA7hhgABZtwInNhu");
	this.shape_1.setTransform(33.525,23.0554);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhuMMQBcBhg1BiQhbhCA0iBgAgjLzIGciKIBDgWQAwBPgQBPIhDAbImXClgAjiDDQBaBhgzBiQhfhSA4hxgAiUC5IGsg3IBGgJQAzBfgUA/IhFANImmBTgADXjCIm3AAIgmi+IG9AcIBIAEQAxBPgRBPgAlXmFQBbBhg0BiQhihiA7hhgAB2qpInIhTIgmi+IHNBuIBMASQA8BPgdBPgAnMvOQBSBhgrBiQhbhiA0hhg");
	this.shape_2.setTransform(33.929,19.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AhDU9MgIYgp/QAzgiA/ARIArAQIADABIBHFkIAmC+IBMF8IAmC+IBMF7IAmC+IBLF8IAlC+IBWGwQgmAcgoAAQgnAAgqgcgAhDOrQA1hihchhQg0CABbBDgAi3FiQAzhihahhQg4BxBfBSgAksjmQA0hihbhhQg7BhBiBigAmhsvQArhihShhQg0BhBbBigAHaQXIg9kvIBDgbQAQhPgwhPIhDAWIhBlFIBFgNQAUg/gzhfIhGAJIhBlEIBIAAQARhPgxhPIhIgFIhBlFIBKAOQAdhPg8hPIhMgSIgujqQAfgVAlADIAYAEIAmANIAAABMAGvAhxQggAWggAAQghAAghgWg");
	this.shape_3.setTransform(33.525,23.0554);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-114.9,122.7,275.9);


(lib.Symbol274 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("AEGkFQA2A3gnBzQgmBxhsBsQhsBthyAmQhzAmg2g2Qg3g2AnhzQAmhyBthsQBshsBxgmQBzgnA3A2g");
	this.shape.setTransform(-0.0207,0.0086);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("AjkCqQADgMANgDIABAAQABgZAcgDIAXADIAGgCIACgDQALgNARgFIAFgCQgHgQAYgYQAMgMAQAEIAKACQAGgfAmgJQALgRASgDQgKgOANgQQASgVAbgDIAJgJIgBgHQgDgVAVgHIAogOIABgEQAMggAZgRQgEgSARgMQADgPAagHQAmARgKAUQACAOgKARIgDAIIgJATIgGAKQABAUgWAbIgwA+QgFANgRAPIgWAfQgXAhghAZQgXARgYAOQgFAKgPALQgaAVgaADQgPAHgPADQgOAIgVAAQgIAHgLADIgjACQgsAAARgxg");
	this.shape_1.setTransform(3.4356,5.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9966").s().p("AkEEFQg3g2AnhzQAmhyBthsQBshsBxgmQBzgnA3A2QA2A3gnBzQgmBxhsBsQhsBthyAmQgwAQglAAQg0AAgggggAjCDcQgQAxArAAIAjgBQAMgDAIgIQAVABAOgJQAPgCAPgIQAZgDAZgUQAPgMAGgKQAYgNAXgRQAigZAXgiIAWgeQAQgQAFgOIAwg8QAXgbgBgVIAGgKIAJgTIADgHQAKgSgDgNQALgVgngQQgZAHgEAOQgRANAEARQgZARgMAhIgBAEIgoANQgVAHADAWIACAHIgKAIQgaAEgSATQgOAQALAOQgUAFgKARQglAIgHAgIgJgCQgRgEgMAMQgYAYAIAQIgGABQgRAGgKANIgCADIgGACIgYgEQgbADgCAaIAAAAQgNADgEALg");
	this.shape_2.setTransform(-0.0207,0.0086);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol274, new cjs.Rectangle(-30.3,-30.3,60.6,60.6), null);


(lib.Symbol246 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(10,1,1).p("AAAIzIAAxl");
	this.shape.setTransform(0,-18.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol246, new cjs.Rectangle(-5,-80,10,122.5), null);


(lib.Symbol239 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AXvvkQlFOGu7HJA3uPlIUAz/");
	this.shape.setTransform(1.425,14.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("APgxCQAAAlgaAaQgaAagkAAQglAAgagaQgagaAAglQAAgkAagaQAagaAlAAQAkAAAaAaQAaAaAAAkgAhAAVIhLhJIhVhWIRfywIIWGWIBpBQAD+H7IhBhkIj9mCI0CUGQhPBChPhIQg5hCA5he");
	this.shape_1.setTransform(0,0.009);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996666").s().p("AqbIwIT+z/IBWBVQqILIrMKCQg5hCA5heg");
	this.shape_2.setTransform(-83.65,58.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663333").s().p("ArPKTQLOqDKGrHIBLBLI0AUEQgmAggmAAQgqAAgpglg");
	this.shape_3.setTransform(-78.5,64.284);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","#999999","#999999"],[0.016,0.682,1],21.2,-30.7,0,21.2,-30.7,167).s().p("AqaHnIhKhLIhWhVIRfyvIIWGWQk/NxuYHKgADvquQgaAaAAAkQAAAlAaAaQAaAaAlAAQAkAAAagaQAagaAAglQAAgkgagaQgagbgkAAQglAAgaAbg");
	this.shape_4.setTransform(60.175,-46.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#999999","#999999"],[0.016,0.682,1],3.3,-8,0,3.3,-8,56.5).s().p("AqgJsQOZnJE+tyIBqBQQlGOFu5HKg");
	this.shape_5.setTransform(86.1,-21.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol239, new cjs.Rectangle(-154.3,-134.8,308.70000000000005,269.70000000000005), null);


(lib.Symbol234 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AC4jnQhcAmiBgnIgJgBQiQAGhBBDQhGBEANCAQAOC3D7ACQEcAzA+iTIADgPQgBgIgFgGIgNgJIgOgDIAaggQAogqgnglQgWgYhDgUQiQhvjAAdIABAAIg7AKQA0gfBXgEQCTAsBqguQAKgFAFgKQAEgLgEgKQgFgLgKgEgAC7gTQA0APASAPIgCADIgDADQgaAigcAbQiEiAi7gXQgMgBgJAHQgJAHgBALQgBALAHAJQAHAJALACQCmATB2BxQhZA+hqgKQhWgXg3h5IgEgHQgwgzAIgaQASgcBUgIIABAAQCrgaB/BkgAioCSQhPgggKhTIgCgVIAfAnQAbA6AhAng");
	this.shape.setTransform(0.0977,0.0164);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663333").s().p("AgvDdQj7gCgOi3QgNiABGhEQBBhDCQgGIAJABQCBAnBcgmIAVAAQAKAEAFALQAEAKgEALQgFAKgKAFQhqAuiTgsQhXAEg0AfIA7gKIgBAAQDAgdCQBvQBDAUAWAYQAnAlgoAqIgaAgIAOADIANAJQAFAGABAIIgDAPQguBtipAAQg7AAhIgNgAjgg+QgIAaAwAzIAEAHQA3B5BWAXQBqAKBZg+Qh2hximgTQgLgCgHgJQgHgJABgLQABgLAJgHQAJgHAMABQC7AXCECAQAcgbAagiIADgDIACgDQgSgPg0gPIgKgFQh/hkirAaIgBAAQhUAIgSAcgADVCLIgdAWQAVgJAQgOgAkBAfQAKBTBPAgQghgngbg6Igfgng");
	this.shape_1.setTransform(0.0977,0.0164);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol234, new cjs.Rectangle(-32.4,-24.4,65,48.9), null);


(lib.Symbol228 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("ACT8eIAEAAACT8eQBgDTAMG6QACCegIC9IjIAAMAAAAnRQALAGAKAKQAdAdAAAqQAAApgdAdQgdAegpAAQgpAAgegeQgdgdAAgpQAAgqAdgdIAVgQQANAMAZAFQAZAFAkgWAgys2IjIAAQgcrJCCkfQCYhuCPBuAgyabMAAAgnRQAuvpA1Pp");
	this.shape.setTransform(0.0067,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgLXrQgagFgMgMMAAAgnQQAtvqA2PqMAAAAnQQgdASgWAAIgKgBg");
	this.shape_1.setTransform(-0.05,19.2588);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AhHc4QgdgdAAgpQAAgqAdgeIAVgQQANANAZAEQAZAGAkgXQALAHAKAJQAdAeAAAqQAAApgdAdQgdAegpgBQgpABgegegAAxs2Qg1vpguPpIjIAAQgcrJCCkfQCYhtCPBtQBgDUAMG5QACCegIC9g");
	this.shape_2.setTransform(0.0067,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol228, new cjs.Rectangle(-26.5,-188.7,53.1,377.5), null);


(lib.Symbol223 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjiDiQhdhdAAiFQAAiEBdheQBehdCEAAQCFAABdBdQBeBeAACEQAACFheBdQhdBeiFAAQiEAAheheg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Symbol218 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAXgXIAlAAIAAAvIglAAIAAAkIguAAIAAgkIAAgvIAAgkIAuAAIAAAkIAAAvAgXAYIgkAAIAAgvIAkAA");
	this.shape.setTransform(-0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996666").s().p("AgXA8IAAgkIAAgvIAAgkIAuAAIAAAkIAAAvIAAAkgAAXAYIAAgvIAlAAIAAAvgAAXAYgAg7AYIAAgvIAkAAIAAAvg");
	this.shape_1.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol218, new cjs.Rectangle(-7,-6.9,14,13.9), null);


(lib.Symbol216 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006699").ss(1,1,1,3,true).p("AAKhzIA5AKIAXAmIA8AZIg8AQIA3AmIgYAsIgfAAIAkAkIgkAYIgKgOIg4gZIgFgEIhvhfIg5g8IBQgcg");
	this.shape.setTransform(-0.075,-0.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009CD0").s().p("ABQBmIg4gZIgFgEIhvhfIg5g8IBQgcIBPgFIA5AKIAXAmIA8AZIg8AQIA3AmIgYAsIgfAAIAkAkIgkAYg");
	this.shape_1.setTransform(-0.075,-0.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#006699").ss(0.1,1,1).p("ABUhMQAAABABABIABAEQABABABABQAVAFASAJQAGADAFADIAFADQABABABAAQAAABAAAAQgEAEgGACQgCABgBABQgEABgDABQgLAEgNAEIgHACQAAAAAAAAQAVANAXAUIACABQACADADACIAAABIgDANQgDALgHAIIgHAIIgBAAIgdgBIAAAAIABABQANAKAJAKQADAFADAEIACAEIgCACQgBAAAAABQgLALgSAJIgCABIgBAAIAAAAIgIgIQgBgBgCgCIAAAAQgJgEgKgEIgFgDQgIgEgJgFIgNgGIgCgCQgCgBgBgBQgIgGgGgGIhIg9QgKgIgKgJIgBgCIgCgCIgIgIQgBgCgCgBIgugwIBEgaQAGgBAFgCIAmgDIABAAIAFAAIAigBIAFABIAVADIALACQAAAAAAAAQAOACAGACQALAMAEAOQAAABAAAAQAZAMASAKQAFADAFADQAFADADABQAAABABAAQgFAEgGACQgCACgDABQgCABgDAAQgKAEgMAEIgHACQgBAAgBAAQAAABAAAAQAUAMAWATIACABQAEAEADADAAMhxIABAAIAEABAAmhtIAJACQABAAABAAQAdAQAGAOACOAeQgDAKgGAHIgEAFIgFAFAB2BNQAEAFADAFIACADIgEADQgLAKgRAJIgEACIgIgJQgCgBgBgBAA4BcQgIgEgIgEIgOgHIgCgBQgCgCgCgBQgHgGgGgGABfA4QAOALAJAKAgbhwIAEAAIABAAAhNhqQAGgBAFgCIAAAAAhBAAQgJgJgLgJIgBgBIgKgK");
	this.shape_2.setTransform(-0.5,-0.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009CD0").s().p("ABbBxIADgBQASgJALgKQgLALgTAJIgCABgABSBpIgCgCIAAAAIgTgIIgFgDIgRgJIgNgGIANAGIARAJIgQgIIgOgHIgCgCIgEgCIgNgMIhIg9IgUgSIgBgBIgKgKIgCgDIgugwIBDgZIAMgEIAlgDIABAAIAFAAIAigBIAFABIAUADIAKACIACAAIAUAEQALAMAEAOIAAABIAAACIABAEIADACQAVAFASAJIAJAGIAIAEIABABQgEAEgGACQAGgCAEgEIgBgBIABABQgEAEgGACIgDACIgHACIgZAIIgHACIABABIgBAAQAVAMAWATIACABIAHAHIgHgHIgCgBQgWgTgVgMIABAAQAVAMAWAUIACABIAGAFIAAABIgDANQgDAKgGAHIgEAFIgFAFIgdgBQAOALAJAKIAGAJIACAEIgCACIgBABQgLAKgSAJIgDABgABgA5QANAKAJAKQgJgKgNgKIgCgBIABAAIgBAAgABUhNQgGgOgdgQQAdAQAGAOgAB7BdIAAAAgAAYBMIgEgDIgNgMIANAMIAEACIACACgABdgXIAHgCIAZgIIgXAIIgGACIgCABIgBgBgACEgjIADgCIgFADIgFABIAHgCgAhChtIABAAIgMAEIALgEgAhBhtgAgXhwIABAAIgFAAgAAMhxIAAAAIAFABgAgWhwg");
	this.shape_3.setTransform(-0.5,-0.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#006699").ss(0.1,1,1).p("ABRhPQAAACgBACQABAAAAAAQAAAAAAABIgBADQACABABABQAYACAQAKQAFADAEAEIAEADQABABABABQAAABAAAAIAAAAQgBAIgHADQgDABgDACIgGACQgDABgEACQgFACgFACQgBAAgBAAIgFACIAAAAQAEACADACIACABIAQAMQAIAGAIAJIABACQAEADACAEQABAAAAAAQACAPgFAJQgCAEgEADIgEADIgEACIgdgDQAJAGAGAGQALAJABAKIAAACIgBABIgBABIgBAAIAAABQgCADgDAEQgIAHgQAHIgCAAIAAAAIgBAAIgJgGQgBgBgBAAIgBgBQgEgCgFgCIgTgKQgGgDgGgEIgDgCIgJgFIgCgBIAAAAIgBgBQAAAAgBgBQgBAAgBgBQgxgog2gxIgBgCIgCgBIgIgJQgBgBgBgCIgugvIBDgZQAGgBAFgCIArgEIAJAAIA7AFQABAAABAAQAOADAGACQANAJAAANQAAACAAACQAZAHARALQAEADAEADQAGAFABACQgCAIgIAEQgCABgCABAgNhvIAZAAIAjAFQABAAAAAAQAeAOADANABjgVIgGACQAEABAEADAB3gCQAIAGAJAKIABABQADADACADIAAABQADAPgFAJQgCAEgDACIgFADIgGADIgZgDIgDAAIABABQAJAFAGAGQAKAJABAJIAAAEIAAAAIgBABIgBABIgBAAQgBAEgDADQgIAHgPAGIgDABIgKgGQgBgBgBAAAAxBaQgGgDgFgDIgEgDIgJgFIgCgBAAVBJQgBAAgBgBQgxgog2gxIgBgCIgKgKAAXBLQgBgBgBgBABNBoQAAAAAAAAQgEgCgFgCAhMhoQAFgCAGgBIAAAA");
	this.shape_4.setTransform(-0.6925,-0.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009CD0").s().p("ABaBwIADgBQAPgGAIgHQgIAHgQAHIgCAAgABQBqIgCgCIgBAAIAAAAIgJgEIgTgKIgMgHIgDgCIADACIAMAHIgLgGIgEgDIgJgFIgCgBIAAAAIgBgBIgBgBIABABIABABIgCgCIgCgBQgxgog2gxIgBgCIgKgKIgCgDIgugvIBDgZIALgDIArgEIAJAAIA7AFIACABQAeANADANIAAAAIgBAEIABAAIgBAAIABgEIAAAAIAAAEIAAABIgBADIADACQAYACAQAKIAIAGIAHAHQgCAIgIAEIgEACIgGACIgHADIgKAEIgCAAIgGACIAIAEIgIgEIAGgCIgFACIAAAAIAHAEIACABIAQAMIAQAPIABACIAGAHIABAAQACAPgFAJQADgGAAgJIgBgJIABAJQAAAJgDAGQgCAEgDACIgFADIgGADIgZgDIgDAAIABABQAJAFAGAGQALAJABAKIAAACIgBABIAAgEQgBgJgKgJQAKAJABAJIAAAEIgBABIgBAAIAAABIgBAAIgEAHIAEgHIABAAIgFAHQgIAHgPAGIgDABgABhA4IgBgBIADAAIAZADIAGgDIAFgDQADgCACgEQgCAEgEADIgEADIgEACIgdgDQAJAGAGAGQgGgGgJgFgACAggQAIgEACgIIAAAAQgBAIgHADIgGADIAEgCgAAwhpIAUAEQANAJAAANQgDgNgegNgAhBhrIAAAAIgLADIALgDgAhBhrg");
	this.shape_5.setTransform(-0.6925,-0.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#006699").ss(0.1,1,1).p("ABMhKIgCAEQACAAABAAQAZAAAPALQAEADAEAEIADADQABACABACIAAAAQACALgGAEQgIAFgVAIIgGADQAMACANAMQAIAHAJAMIABACQACADACADQABAAAAABQAHATgGAHQgCADgDABIgFACIgEAAIgbgEIgCgBIABABQAQAIAGAJQAEAGgCAGIgBADIgBAAIgCACIgBABQgBALgaAJIAAAAABNhPQgBADgBACQAAAAABAAQAbADAOAMQAEADADAEQAFAFABACQAAABABAAQACAKgGAEQgIAFgVAIIgGADQABgBABABQAKADAMALQAIAHAIAMIABABQAAAAABABABNhPQAAADgBACAAuhoQAOAEAGABQAOAIgDAMAAthoIAAAAQAAAAABAAQAgAMgBANAAthoQAAAAABAAACMA2QgCACgCACIgGABIgHAAIgYgDIgBAAQARAIAFAJQADAFgBAGIgCAEIAAABIgCABQgCAMgZAJIgBAAIgCAAIAAAAIgLgEQgCgBgBAAQgQgHgXgPIgDgCIgJgGIgBAAIgBgBQgCgBgCgCQgGgFgGgEIgLgKQglgfgpgmIgDgEIgUgUQgEgEgDgEIgcgcQAfgVAugIIAqgFIBEAGACKAbQAIATgGAIAAgBSIgJgFIgBgBIgBgBQgCgBgBgBQgHgFgGgFABYBvIgBAAIgKgDQgCgCgCAAQgQgHgWgOIgDgDAhUgQIgXgY");
	this.shape_6.setTransform(-0.7622,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009CD0").s().p("ABYBvIgLgEIgDgCQgQgGgXgPIgDgCIgJgGIgBgBIgBAAIgDgCIgNgKIANAKIADACIABAAIgBAAIgEgDIgMgJIgLgKQglgfgpglIgDgFIgUgVIgHgHIgcgdQAfgUAugIIAqgFIBEAGIABAAQAfAMAAANIAAABIgBAEIgBAAIAAAAIACgEIgCAEIAAAAIABAAIgCAEIADAAQAZAAAPALIAHAHIAGAIIABAFQAAAGgFADQgIAFgVAJIgGABQAMADANAMQAIAHAIAMIABABIABABIAEAGIABABQAHATgGAHQADgDAAgGQAAgHgFgLQAFALAAAHQAAAGgDADIgEADIgGACIgHAAIgYgDIAYADIAHAAIAGgCIAEgDQgCADgDABIgFABIgEABIgbgEIgCgBIABABQAQAIAGAJQAEAGgCAFIgBADIgBABIACgEIAAgEQAAgEgCgDQACADAAAEIAAAEIgCAEIgCACIgBABQgBALgaAIIAAABIAAgBQAagIABgLIABgBQgCAMgZAIIgBABIgCAAgACGAVIAAAAgACFAUIgBgBQgIgMgIgHQAIAHAJAMIABACIgBgBgAB0AAIAAAAgABbgPIAGgBQAVgJAIgFQAFgDAAgGIgBgFIABAAQACALgGADQgIAFgVAJIgGABIAAAAIAAAAIACAAQAKAEAMALQgNgMgMgDgABNhPQAAgNgfgMIAUAFQAOAIgDANIAAgBg");
	this.shape_7.setTransform(-0.7622,-0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#006699").ss(1,1,1,3,true).p("ABlA4QAhAOgLAOIgGAFIgaAVIgPgCIgpgXIgGgEIgEgDIgEgDIhmhZIgDgDIgDgDIgCgCIgxg0IBMgcIApgHIBDAHIAIACIATAbIgCADIAxAQIADAEIADAXIgdAPIgGACIApAhIABACIAGAmIgGAAIgggHIgFgC");
	this.shape_8.setTransform(-1.125,-0.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009CD0").s().p("ABMBsIgpgXIgGgEIgEgDIgEgDIhmhZIgDgDIgDgDIgCgCIgxg0IBMgcIApgHIBDAHIAIACIATAbIgCADIAxAQIADAEIADAXIgdAPIgGACIApAhIABACIAGAmIgGAAIgggHIgFgCIAFACQAhAOgLAOIgGAFIgaAVg");
	this.shape_9.setTransform(-1.125,-0.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#006699").ss(0.1,1,1).p("ABMhIQgBABAAABQAlgGANAYQABADABABQACAOgHAFQgJAGgUAHQAAAAgBAAQAAAAgBABQgBAAAAAAQAAAAABAAQASgBAQAXIACACQADAEACAFQABABAAABQABABABACQAOAagIAIQgCACgEABQgCAAgDAAQAAAAgBAAQgCAAgCAAIgcgFIgDgBQABABABAAIABABQASAGAGAIIABACQADAEgDAGQgBACgCADQgBABgBABQAAABAAAAAAxhnIAFABQAgAIgLAWQABAAAAAAAAFBAIgIgIQgmgegsgpQgCgDgCgCIg2g5QAbgXAxgFIABAAIArgFIAAAAIBEAGIAEABIAFABQAfAHgJAXQAkgEANAXQABACABACQADAOgHAFQgJAGgVAIQAAAAgBAAQgBABAAAAAB/AJQADAFADAFIABACQAOAcgHAIQgCACgDAAQgDABgDAAACBA8QgBAAAAAAIgfgEAB6BIQADAFgDAFQgBACgCADQgBABgBABQAAAAAAABIAAAAIAAABQAAAMgQAGIgEABQgBABgDAAIAAAAQgCAAgDAAIgCAAQgCgBgEAAQgBgBgBAAQgBgBgCgBQgBgBgBgBQgBAAgBgBQgBAAAAAAQgEgBgGgDIgJgEQgHgEgJgGQgHgFgHgFQgBgBAAAAQgCgCgDgCQgFgEgFgDAAzBgQgHgEgJgGQgHgFgHgFQgDgCgCgCQgFgEgGgEABWBvQgDgBgEAAQAAgBgBAAQgBgBgCgBABHBoQgFgBgGgDABhBuQgCABgCAA");
	this.shape_10.setTransform(-0.6482,-0.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009CD0").s().p("ABYBvIgCAAIgGgBIgCgBIgDgCIADACIACABIAGABIgHgBIgBgBIgDgCIgCgCIgCgBIgBAAIgKgEIgJgEIgQgKIgOgKIAOAKIAQAKIgQgKIgOgKIgBgBIgFgEIgKgHIgIgIQgmgegsgpIgEgFIg2g5QAbgXAxgFIABAAIArgFIAAAAIBEAGIAEABIAFABQAfAHgJAXIgBAAQADgGAAgFQAAgNgYgGIgFgBIAFABQAYAGAAANQAAAFgDAGIABAAIgBACQAlgGANAYIACAEQACAOgHAFQgJAGgUAHIgBAAIgBABIgBAAIABAAQASgBAQAXIACACIAGAKIABACQAKASAAAKQAAAFgDADQADgDAAgFQAAgKgKgSIgBgCIgGgKIAFAJIABACIACADQAOAagIAIIgFACIgGABIgBAAIgEAAIgcgFIgDgBIACABIABABIgBgBIgCgBIADABIAcAFIAEAAIgBAAIgfgEQASAGAGAIIABABIABAFIgBAGIgDAEIgCADIAAABIAAAAIAAABQAAAMgQAGIgEABIgEABIgFAAgAB1BagAB1BaIAAgBIACgDIgCADIAAABgAB3BWIAAAAgAB3BWIAAAAgAB6BSIABgGIgBgFQADAGgDAFIgDAEIADgEgACCA8IAAAAgACIA7IAFgCQgCACgEABIgFAAIAGgBgACNA5IAAAAgABagPIABAAIABgBIgBABIgBAAgABcgQIAAAAg");
	this.shape_11.setTransform(-0.6482,-0.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#006699").ss(0.1,1,1).p("ABChmIAHAEQALAJgDARQACABABAAQAWgDAOAHIANAOQAAABAAAAQACAEgBAAQgDAKgHAFQgBABAAAAQgCABgCABQgLAGgOAEQgBAAgBAAQABAAAAAAQAbACAQAdQABABAAACQABACABABQAJAWgEAKQgCAGgGABQgDABgEABQgBAAgBAAIgegEQAfAKgDAQQgBAEgDAEQAAAAAAAAIAAACIgCAIQgEAMgPADQgFAAgGgCQgCAAgCAAQAAAAAAgBQgBgCgEgDQgCgBgBgBQgLABgbgSQgHgEgIgGQgCgCgDgCQgvgjg4g1QgCgDgDgCIg3g7QAcgXAygFIAtgEIBFAFIAJACQAFACAEABgAAwhrIABAAIAJACQAFACADABABcgUQgBAAAAAAQAAAAABAAQABABAAgBQABABAAAAQAcABAPAgQABADAAAAQAJAWgDAKQgCAEgFADQgCAAgEABQgCAAgDAAIgdgDIgBAAQAAAAABAAIgDAAQABAAABAAACFg1QABACABADQgDAKgIAFQgBABgCABQgBABgBAAQgMAGgPAEABRhIQAYgDAPAIABeA2QAhAKgDAQQAAAEgDAEIAAAAQAAABAAABABQBpQgCgBgBgBQgLAAgagQQgHgFgJgGIAAAAQgDgCgCgCAB3BiQgEAMgQADQgFAAgFgCQgCAAgBAAQAAgBgBAAQgCgCgDgD");
	this.shape_12.setTransform(-0.5273,-0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009CD0").s().p("ABZBwIgDgBIgBgBIgFgFIgDgCIgBAAIAAAAIgBAAIgEgBIAAAAIgCAAIAAAAIgEgCIAAAAQgJgDgOgIIAAgBIgCgBIgQgLIgFgEQgvgig4g2IgFgFIg3g6QAcgXAygGIAtgEIBFAGIAJACIAJADIAHADQAMAJgEASIADABQAWgEAOAIIANAOIAAABIABAEQgDAKgHAFIgBAAIgEADQgLAFgQAEIgBAAIABABIABAAIABAAQAcACAPAgIABADQAJAVgDAKQgCAFgFACIgGABIgFABIgdgEIgBAAIABAAIAdAEIAFgBIAGgBQAFgCACgFQgCAGgGACIgHABIgCAAIgegEIgBAAIABAAIgDAAIACAAIgCAAQAhAKgDAQQAAAEgDAEIAAAAIAAABIAAABIgCAIQgEAMgPADIgLgBgABNBnQgLABgbgRIgPgLIAQALIACABIAAABQAOAIAJADIAAAAIAEACIAAAAIACAAIAAAAIAEABIABAAIAAAAIABAAIADACIgDgCgAB5BZIAAgBIAAACgAB5BYIAAAAgABeA2IAAAAgABcgTIgBgBIABAAQAQgEALgFIAEgDIABAAIgDABIgCACQgLAFgOAEIgCAAIABABIAAAAIgBAAg");
	this.shape_13.setTransform(-0.538,-0.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#006699").ss(1,1,1,3,true).p("ABWhFQArgKAOAhQgbAUgZADQAnACAMAjQAOApgeACIgigCQAsAJgMAaQgDAhgegKQABgDgJgHQgMAGgsgfIgFgEQgygkg9g7IgGgGIgzg2QAdgXAzgFIBFgFIA7AJQAZAFgBAfg");
	this.shape_14.setTransform(-0.3881,-0.2676);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009CD0").s().p("ABbBxQABgDgJgHQgMAGgsgfIgFgEQgygkg9g7IgGgGIgzg2QAdgXAzgFIBFgFIA7AJQAZAFgBAfQArgKAOAhQgbAUgZADQAnACAMAjQAOApgeACIgigCQAsAJgMAaQgCAZgTAAQgFAAgHgCg");
	this.shape_15.setTransform(-0.3881,-0.2676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-12.9,31.9,25.3);


(lib.Symbol213 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol212 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADkBRQAtg2APhgQAOhig7hFQg7hEhsAQQhqAPg3AyQBShPBlgPQBqgOBABAQBABAgPBqQgOBihLBRIgCADIgCACQgNAagmACQiYBaiCBwQgLALglgXQgggSgjghIgOgOQgcgcgTgaIgTgbQgWgmAKgKQByiCBZiYIAUAjIAFAHQAmA1A/BAQA+A9AzAlIAFADQAaATAQAHADkBRQADgOghguQglgzhBhBIgrgpQgngkgigZQg1gmgKALIgCACQgFAKAWAhIAMASQAlA1BABBIAGAGQA9A7AyAkIAGAEQArAeANgFADkBSIgFAEIAFgFAhxirQADgtAZgG");
	this.shape.setTransform(0.0169,-0.0169);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1,3,true).p("AAAgKIAAAV");
	this.shape_1.setTransform(5.075,-2.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AA5BFQADgHAIgHIAQgIIALACQAEADgEAGIgMAKIgPAKIgLABQgDgDADgHgAhegkQgDgEACgIQABgJAGgIQAGgIAHgDQAHgEADAEQAEADgCAJQgCAIgGAIIgNAMIgFACQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_2.setTransform(-16.5797,16.9625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663333").s().p("ABvDGQAtg2APhhQAOhhg7hFQg7hEhrAQQhrAPg3AyQBShPBmgPQBpgOBABAQBABAgPBpQgOBjhLBRIgFAEg");
	this.shape_3.setTransform(11.7089,-11.7339);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AAcBWIgFgEQgygkg9g7QAmgfgjhDIArApQA/BAAmA0QAgAugDAOIgEAFIAEgFIgCAEIgCABIgEABQgPAAglgag");
	this.shape_4.setTransform(13.9627,-2.483);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AhtEDQgggTgjghQCEgNDaiaIAFADQAaATAQAHQiYBaiCBwQgDADgGAAQgOAAgZgPgAgxCzQgIAGgDAHQgDAHADADIALAAIAPgKIAMgLQAEgFgEgEIgLgBgAkABxQgWgmAKgLQByiCBZiXIAUAiQjGECAGBAgADdBFQgQgHgagTIgFgDQAggCAKgXQArAfANgGQgNAbgmACIAAAAgACuAogABdhaQhBhAgkg1IgMgSQgWAPgDAbIgUgiQADgtAZgGIgBAEQAAAMASAbQgSgbAAgMIABgEIACgCQAKgLA0AmQAjAYAnAlQAkBDgmAfgAgti3g");
	this.shape_5.setTransform(-4.792,4.6436);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AizDLQgcgcgTgaQgFhADGkCQACgbAWgQIALASQAmA1BABBIAGAGQA9A8AzAjIAFAEQgKAWgfACQg0glg9g9QhBhAgkg1IgFgHIAFAHQAkA1BBBAQA9A9A0AlQjaCaiEAOgAi2A4QgHADgFAIQgGAIgCAJQgCAIAEAEQADADAHgDIANgMQAFgIACgIQACgJgDgDQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgGACgABug0IAAgWgAC6AxIAAAAg");
	this.shape_6.setTransform(-5.9074,3.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol212, new cjs.Rectangle(-33,-33,66,66.1), null);


(lib.Symbol207 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjhDiQheheAAiEQAAiDBehfQBdhdCEAAQCEAABeBdQBeBfAACDQAACEheBeQheBeiEAAQiEAAhdheg");
	this.shape.setTransform(-2.05,1.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-30.9,64,64);


(lib.Symbol206 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADkBRQAtg2APhgQAOhig7hFQg7hEhsAQQhqAPg3AyQBShPBlgPQBqgOBABAQBABAgPBqQgOBihLBRIgCADIgCACQgNAagmACQiYBaiCBwQgLALglgXQgggSgjghIgOgOIgvg2IgTgbQgWgmAKgKQByiCBZiYIAUAjIAFAHQAmA1A/BAQA+A9AzAlIAFADQAaATAQAHADkBRQADgOghguQglgzhBhBIgrgpQgngkgigZQg1gmgKALIgCACQgFAKAWAhIAMASQAlA1BABBIAGAGQA9A7AyAkIAGAEQArAeANgFADkBSIgFAEIAFgFAhxirQADgtAZgG");
	this.shape.setTransform(-1.4331,1.4331);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1,3,true).p("AAAgKIAAAV");
	this.shape_1.setTransform(3.625,-1.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AA5BFIALgOQAIgGAIgCIALACQAEADgEAGIgMAKIgPAKIgLABQgDgDADgHgAhegkQgDgEACgIIAHgRIANgLQAHgEADAEQAEADgCAJQgCAIgGAIIgNAMIgFACQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_2.setTransform(-18.0297,18.4125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663333").s().p("ABvDGQAtg2APhhQAOhhg7hFQg7hEhrAQQhrAPg3AyQBShPBmgPQBpgOBABAQBABAgPBpQgOBjhLBRIgFAEg");
	this.shape_3.setTransform(10.2589,-10.2839);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AAcBWIgFgEQgygkg9g7QAmgfgjhDIArApQA/BAAmA0QAgAugDAOIgEAFIAEgFIgCAEIgCABIgEABQgPAAglgag");
	this.shape_4.setTransform(12.5127,-1.033);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AhtEDQgggTgjghQCEgNDaiaIAFADQAaATAQAHQiYBaiCBwQgDADgGAAQgOAAgZgPgAgxCzIgLANQgDAHADADIALAAIAPgKIAMgLQAEgFgEgEIgLgBQgIACgIAGgAkABxQgWgmAKgLQByiCBZiXIAUAiQjGECAGBAgADdBFQgQgHgagTIgFgDQAggCAKgXQArAfANgGQgNAbgmACIAAAAgACuAogABdhaQhBhAgkg1IgMgSQgWAPgDAbIgUgiQADgtAZgGIgBAEQAAAMASAbQgSgbAAgMIABgEIACgCQAKgLA0AmQAjAYAnAlQAkBDgmAfgAgti3g");
	this.shape_5.setTransform(-6.242,6.0936);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AizDLIgvg2QgFhADGkCQACgbAWgQIALASQAmA1BABBIAGAGQA9A8AzAjIAFAEQgKAWgfACQg0glg9g9QhBhAgkg1IgFgHIAFAHQAkA1BBBAQA9A9A0AlQjaCaiEAOgAi2A4IgMALIgIARQgCAIAEAEQADADAHgDIANgMQAFgIACgIQACgJgDgDQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgGACgABug0IAAgWgAC6AxIAAAAg");
	this.shape_6.setTransform(-7.3574,5.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.4,-31.6,66,66.1);


(lib.Symbol202 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AuWAAIOWuWIOXOWIuXOXg");
	this.shape.setTransform(6.225,-3.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.7,-95,183.9,183.8);


(lib.Symbol201 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("ACNpmQA7AdAAAqQAAAphCgeQhCgfhSAEQhSAEg0AbQgzAaAAgpQAAgqA6gdQA7gdBSAAQBTAAA6AdgAhikeQg/gOgzgiQhXg6AAhTQAAhTBXg7QBYg6B8AAQB9AABXA6QBYA7AABTQAABThYA6QgyAig/AOIABAAIAAH+QBYAYBwgYIAAEsQhTAeh1geIAABkQheBphphpIAAuOgABkDgIAAEsABjkeQhjiBhiCB");
	this.shape.setTransform(0,2.6375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhjJwIAAuOIABAAQBiiBBjCBQhjiBhiCBQg/gOgygiQhYg6AAhTQAAhTBYg7QBXg6B8AAQB8AABYA6QBYA7AABTQAABThYA6QgyAig/AOIABAAIAAH+QBYAYBwgYIAAEsQhTAeh1geIAAksIAAEsIAABkQgvA0gyAAQgxAAg1g0gAiNpmQg6AdAAAqQAAApAzgaQA0gbBTgEQBRgEBCAfQBCAeAAgpQAAgqg7gdQg6gdhTAAQhSAAg7Adg");
	this.shape_1.setTransform(0,2.6375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol201, new cjs.Rectangle(-31,-66,62,137.3), null);


(lib.Symbol196 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-8,-50.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol196, new cjs.Rectangle(-8,-50.4,16,101), null);


(lib.Symbol194 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-13.1,-48.85,0.4397,0.4397);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.1,-48.8,26.4,98);


(lib.Symbol193 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("AGurHIABgHQAAgvh+gfQh+ggizAAQiyAAh+AgQh1AdgIArIgBAGIABAHAmhqxQAcAcBVAVQB+AgCyAAQCzAAB+ggQBVgVAcgcIAAAAQgcgohVgdQh+gsizAAQiyAAh+AsQhVAdgcAoQgKgKgCgMIAAAVIgBAeIABAHQADAPARAOQAfAXBKATQB+AfCyAAQCzAAB+gfQBKgTAfgXQA1AEgiT1IACAMQAAAvh/BAQh/A/i6gHQi7gGh1g5Qh1g5AAgvIACgMQgiz1A1gEAGurHQgCALgKALAGapwIADgDIAIgIIAJgQIAAgCIABgDIAAgEIgBgHIAAgsAg1rcIgdgGQgcgIABgLQgBgMAcgIIBCgIQAmAAAbAIQAcAIAAAMQAAALgcAIIgdAGQATALAOAUQAYAhAAAMQAAALgcAIQgbAIgmAAQgmAAgcgIQgcgIABgLQgBgMAhgpQAMgPAMgIgAAUrcQgNgHgOgDQgYgFgWAPAmtrUIAAAN");
	this.shape.setTransform(4.175,0.0304);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#999999","#999999"],[0.016,0.682,1],17.3,3.5,0,17.3,3.5,61.4).s().p("AkxAwQhKgSgegXQgRgNgDgPIgBglIAAgVQADALAKALQAbAcBVAVQB/AfCygBQCzABB9gfQBWgVAcgcIAAgBQAJgKADgLIAAAsIABAHIAAAEIgBADIAAACIgJAPIgIAIIgDADQgfAXhLASQh9AgizAAQiyAAh/ggg");
	this.shape_1.setTransform(4.2,-63.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#999999","#999999"],[0.016,0.682,1],-11.5,-5.6,0,-11.5,-5.6,56.3).s().p("AmuAvIAAgNQAJgqB0gdQB/ggCyAAQCzAAB9AgQB+AgABAuIgBAGQgDAMgJAKQgcgohWgdQh9grizAAQiyAAh/ArQhVAegbAoQgKgLgDgMg");
	this.shape_2.setTransform(4.2,-75.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#CC6666","#FFFFFF","#CC6666"],[0,0.525,1],406.4,295.6,414.6,295.6).s().p("AAAAAIAAgGIAAANg");
	this.shape_3.setTransform(-38.875,-71.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#993333","#FF9999","#993333","#FFFFFF","#CC6666"],[0,0.306,0.561,0.761,0.788],-30.7,-7.3,78.1,-7.2).s().p("AgJLWQi7gGh1g5Qh1g5AAgvIACgMQgiz1A1gEQAfAXBKATQB+AfCyAAQCzAAB+gfQBKgTAfgXQA1AEgiT1IACAMQAAAvh/BAQhzA5ikAAIgigBg");
	this.shape_4.setTransform(4.175,10.2054);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#999999","#999999"],[0.016,0.682,1],9.4,1.9,0,9.4,1.9,85.8).s().p("AkwBBQhVgVgcgcQAcgnBVgdQB+gsCyAAQCzAAB+AsQBVAdAcAnIAAAAQgcAchVAVQh+AgizAAQiyAAh+gggAhSBEQAcAIAmAAQAmAAAbgIQAcgIAAgLQAAgMgYghQgOgTgTgLIAdgGQAcgIAAgLQAAgMgcgIQgbgIgmAAIhCAIQgbAIAAALIAAABIAAAAQAAALAbAIIAdAGQgMAIgMAPQggAoAAALIAAABIAAAAQAAALAbAIgAhSBEQgbgIAAgLIAAAAIAAgBQAAgLAggoQAMgPAMgIIgdgGQgbgIAAgLIAAAAIAAgBQAAgLAbgIIBCgIQAmAAAbAIQAcAIAAAMQAAALgcAIIgdAGQATALAOATQAYAhAAAMQAAALgcAIQgbAIgmAAQgmAAgcgIgAgHgkQAOADANAHQgNgHgOgDIgBAAIAAAAIgLgBIAAAAIAAAAQgQAAgPAJIgBABIgBABIgBAAIABAAIABgBIABgBQAPgJAQAAIAAAAIAAAAIALABIAAAAIABAAIAAAAgAg1gag");
	this.shape_5.setTransform(4.175,-70.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-83.8,90.4,167.7);


(lib.Symbol188 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("AhgBZQBThiBZiWQBKAAghBDQhgB9hQBaQAeA2g5gZIgIgKIgYgbQgYgqAuAQIAlAi");
	this.shape.setTransform(15.7842,-20.0902);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1,3,true).p("AiPCSQgNgnAYgzQANgeAaghIAqg8QAlg1A6gSQA7gSALgHIALgHAAmg4QgEAGgIABQgHABgGgFQgGgFAAgHQgBgIAFgGQAFgFAHgBQAIgBAFAFQAGAFABAHQAAAIgFAFgACViPQhBBlgYAXQgYAWgbABQgaAAgNgLIgVAAIAAAhIAAAVIhOB8IgOgZAgzAaIhcB4");
	this.shape_1.setTransform(-8.6065,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhcBnIBch3IAAAUIhPB9gAA/hfQgFgFgBgHQAAgIAEgGQAFgFAIgBQAHgBAGAFQAGAFAAAHQABAIgFAFQgFAGgHABIgDAAQgGAAgFgEg");
	this.shape_2.setTransform(-13.6727,12.7475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#993333").s().p("AhWCYIgIgKIgYgbQgYgqAuAQQBThiBZiWQBKAAghBDQhgB9hQBaQAVAlgVAAQgJAAgSgIgAg7B7Iglgig");
	this.shape_3.setTransform(15.7842,-20.0902);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AiEBFQANgeAagiIAqg7QAlg1A6gSQA7gSALgHIALgHIAYAbQhBBlgYAXQgYAWgbABQgaAAgNgMIgVAAIAAAhIhcB4QgNgmAYgzgAAXhIQgHABgFAFQgFAGABAIQAAAHAGAFQAGAFAHgBQAIgBAEgGQAFgFAAgIQgBgHgGgFQgFgEgGAAIgCAAg");
	this.shape_4.setTransform(-8.6065,7.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol188, new cjs.Rectangle(-24.4,-37.1,53.9,63.7), null);


(lib.Symbol183 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AiTEdQgbgPgagUQg2gsgdg5Qgbg0gHg+QgPiDBThnQBThoCEgOQBjgLBUAtIAzAiQA3AsAeA6QAaAzAHA/QAPCChUBnQhTBoiEAOQgTACgTAAQhNAAhCgjg");
	this.shape.setTransform(0.0244,0.026);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64.1,64.1);


(lib.Symbol182 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("AFAjLQAAgUgOgNIhEhEQgPgOgTgBQgUABgOAOInbHaQgOAOAAAUQAAAUAOAOIBEBEQAOAOAUAAQAUAAAOgOIHbnaQAOgPAAgUg");
	this.shape.setTransform(0.0242,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#333333","#CCCCCC","#333333"],[0,0.49,1],-13.6,-13.6,13.6,13.6).s().p("AjtEyIhEhEQgOgOAAgUQAAgUAOgOIHbnaQAOgOAUgBQATABAPAOIBEBEQAOANAAAUQAAAUgOAPInbHaQgOAOgUAAQgUAAgOgOg");
	this.shape_1.setTransform(0.0242,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.9,-32.9,65.9,65.9);


(lib.Symbol178 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAKIgEgFQACgDAIgCIARgBIAPABQAGACgBADIgKAFIgRACgAgKgGIgDgCIAFgDIAJAAIAJAAIACADIgFACIgJABg");
	this.shape.setTransform(0.04,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol178, new cjs.Rectangle(-2.3,-1.2,4.8,2.4), null);


(lib.Symbol176 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgrASQgRgRgGgSQgGgUAXASQAXARAYAAQAXABAagWQAbgWgIAZQgIAXgSAPQgTAPgXABIgCAAQgXAAgQgQg");
	this.shape.setTransform(0.0057,0.0074);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol176, new cjs.Rectangle(-6.7,-3.4,13.5,6.8), null);


(lib.Symbol174 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("AA0g0QAWAWAAAeQAAAfgWAVQgVAWgfAAQgeAAgWgWQgVgVAAgfQAAgeAVgWQAWgVAeAAQAfAAAVAVg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#000000"],[0,1],0.4,-1.1,0,0.4,-1.1,12.8).s().p("AgzA0QgWgWAAgeQAAgeAWgVQAVgWAeAAQAeAAAWAWQAWAVAAAeQAAAegWAWQgWAWgeAAQgeAAgVgWg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.4,16.8,16.8);


(lib.Symbol170 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("ACDjLIARgSIASAQIgRASIAhAmIAnA+Ig4A7IgKgJQAagjgFggQgFgggjgmIhfBlIADAIQAgBbAEAhQAEAjgXAZQgXAYgogCIgLAAQgkgFgogZIgZgTIAAAAIgYAZIgSgQIAYgZIgrgxIgmg3IA1g4IAMAKQgXAeAHAiQAHAhAlAoIBuh0QgkhUAAgnQAAgdAVgWQAXgYAqAFQAmADAsAhgABCjWQgXgCgOAPQgIAIgDALQgDAIAAAMQAAAJADAOQAEASAJAYIBXhdIgagQQgOgHgMgBgAk8AAIgDgZIAAgOQAAh0BdhSQBehSCEAAQCFAABdBSQBeBSAAB0IAAANIgDAaIACAOIgCBCQgNBbhOBDQhdBSiFAAQiEAAhehSQhNhDgNhbIgChCIACgOQANBbBNBDQBeBSCEAAQCFAABdhSQBOhDANhbAAVA2QAAgWgWg8IhlBrIAEADIAiASIApAEIAVgHIAKgJQAMgNABgVg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1,3,true).p("AFAg1IgBApIABAaIgDAoAk8A2IgDgoIABgaIgBgo");
	this.shape_1.setTransform(0,2.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#000000"],[0,1],13.2,-1.6,0,13.2,-1.6,79.5).s().p("AhHCbIgjgSIgDgDIBlhsQAVA9AAAWQAAAVgMANIgKAJIgVAHgAAKhUQgDgNAAgKQAAgLADgJQAEgKAHgIQAPgQAWADQAMABAOAGIAaARIhXBcQgJgYgEgSg");
	this.shape_2.setTransform(0.75,-5.5424);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#000000"],[0,1],3.7,-2,0,3.7,-2,55).s().p("AgGDCIgKAAQglgFgngZIgagTIAAAAIgYAZIgRgQIAYgZIgsgxIglg3IA1g4IALALQgWAdAHAhQAGAiAmAoIBth0QgjhTAAgoQAAgdAUgVQAXgZAqAFQAmAEAsAhIAJAGIARgSIASAQIgRASIAhAnIAnA9Ig4A7IgKgKQAagigFgfQgFghgjglIhfBlIADAIQAgBaAEAhQAEAjgXAZQgWAWgkAAIgFAAgAhqCEIAEADIAjASIApAEIAUgHIAKgJQAMgNABgVQAAgWgVg9gAAZiTQgIAIgDAKQgDAJAAALQAAAKADANQAEASAJAYIBXhcIgagRQgOgGgMgBIgGAAQgTAAgMANg");
	this.shape_3.setTransform(0.375,-5.338);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","#000000"],[0,1],0.3,11.4,0,0.3,11.4,42.2).s().p("AjiBOQhNhDgNhaIgChCIACgOQANBbBNBDQBeBRCEAAQCEAABehRQBNhDAOhbIACAOIgCBCQgOBahNBDQheBSiEAAQiEAAhehSg");
	this.shape_4.setTransform(0.025,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#000000"],[0,1],8,-12,0,8,-12,68.4).s().p("AjiDGQhMhDgOhbIgDgaIAAgOQAAhzBdhSQBehSCEAAQCFAABdBSQBeBSAABzIAAANIgDAbQgNBbhOBDQhdBSiFAAQiEAAhehSgAhyCEIAaATQAnAZAkAEIALABQAoABAWgXQAXgagDgiQgEghghhbIgDgIIBghlQAiAmAGAhQAEAfgZAiIAKAJIA4g6Igng9IgignIASgSIgSgQIgRASIgJgHQgtggglgEQgqgFgXAYQgUAWgBAdQAAAnAkBVIhuByQglgogHghQgGghAWgeIgLgKIg1A3IAlA4IAsAxIgZAZIASAQIAYgZg");
	this.shape_5.setTransform(0,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol170, new cjs.Rectangle(-33,-33,66,66), null);


(lib.Symbol165 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("AC3k/QATABAOAOQANANACARIAAAFIAAIbIAAAFQgCARgNANQgOAOgTABIlsAAQgUgBgPgOQgOgPAAgUIAAobQAAgUAOgPQAPgOAUgBgAiykJQgPAPAAAVIAACMQAAAUAPAPQAPAPAUAAIA8AAQAVAAAOgPQAPgPAAgUIAAiMQAAgVgPgPQgOgOgVAAIg8AAQgUAAgPAOgAhQiGQAAAUgKAOQgLAOgOAAQgPAAgKgOQgLgOABgUQgBgTALgOQAKgPAPABQAOgBALAPQAKAOAAATg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1,3,true).p("AB9iPIj5AAQgLgBgHAIQgHAHAAAKQAAAKAHAHQAHAIALAAID5AAQAKAAAHgIQAIgHAAgKQAAgKgIgHQgHgIgKABgAh8BVID5AAQAKAAAHgIQAIgHAAgKQAAgKgIgHQgHgIgKABIj5AAQgLgBgHAIQgHAHAAAKQAAAKAHAHQAHAIALAAgAh8giID5AAQAKAAAHgIQAIgHAAgKQAAgKgIgHQgHgIgKABIj5AAQgLgBgHAIQgHAHAAAKQAAAKAHAHQAHAIALAAgAiOgQQgHAHAAAJQAAAKAHAHQAHAIALAAID5AAQAKAAAHgIQAIgHAAgKQAAgJgIgHQgHgIgKABIj5AAQgLgBgHAIgAiOBnQgHAHAAAKQAAAKAHAHQAHAIALAAID5AAQAKAAAHgIQAIgHAAgKQAAgKgIgHQgHgIgKABIj5AAQgLgBgHAIg");
	this.shape_1.setTransform(6.8234,13.1484);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(1,1,1,3,true).p("AgdFAIAMAAQASgBAOgOQANgNACgRIAAgFIAAobIAAgFQgCgRgNgNQgOgOgSgBIgMAA");
	this.shape_2.setTransform(21.325,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("ACJFAQATgBAOgOQANgNACgRIAAgFIAAobIAAgFQgCgRgNgNQgOgOgTgBIAMAAQATABAOAOQANANACARIAAAFIAAIbIAAAFQgCARgNANQgOAOgTABgAhmEUQgLAAgHgIQgHgHAAgKQAAgKAHgHQAHgIALABID5AAQAKgBAHAIQAIAHAAAKQAAAKgIAHQgHAIgKAAgAhmDYQgLAAgHgIQgHgHAAgKQAAgKAHgHQAHgIALABID5AAQAKgBAHAIQAIAHAAAKQAAAKgIAHQgHAIgKAAgAhmCcQgLAAgHgIQgHgHAAgKQAAgKAHgHQAHgIALABID5AAQAKgBAHAIQAIAHAAAKQAAAKgIAHQgHAIgKAAgAhmBgQgLAAgHgIQgHgHAAgKQAAgKAHgHQAHgIALABID5AAQAKgBAHAIQAIAHAAAKQAAAKgIAHQgHAIgKAAgAhmAkQgLAAgHgIQgHgHAAgKQAAgKAHgGQAHgIALABID5AAQAKgBAHAIQAIAGAAAKQAAAKgIAHQgHAIgKAAgAi6hkQgLgOABgUQgBgTALgOQAKgPAPABQAOgBALAPQAKAOAAATQAAAUgKAOQgLAOgOAAQgPAAgKgOg");
	this.shape_3.setTransform(4.6239,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC3333").s().p("Ai1FAQgUgBgPgOQgOgPAAgUIAAobQAAgUAOgPQAPgOAUgBIFsAAQATABAOAOQANANACARIAAAFIAAIbIAAAFQgCARgNANQgOAOgTABgAhKDqQgHAHAAAKQAAAKAHAHQAHAIALAAID5AAQAKAAAHgIQAIgHAAgKQAAgKgIgHQgHgIgKABIj5AAIgCAAQgJAAgHAHgAhKCuQgHAHAAAKQAAAKAHAHQAHAIALAAID5AAQAKAAAHgIQAIgHAAgKQAAgKgIgHQgHgIgKABIj5AAIgCAAQgJAAgHAHgAhKByQgHAHAAAKQAAAKAHAHQAHAIALAAID5AAQAKAAAHgIQAIgHAAgKQAAgKgIgHQgHgIgKABIj5AAIgCAAQgJAAgHAHgAhKA2QgHAHAAAKQAAAKAHAHQAHAIALAAID5AAQAKAAAHgIQAIgHAAgKQAAgKgIgHQgHgIgKABIj5AAIgCAAQgJAAgHAHgAhKgFQgHAGAAAKQAAAKAHAHQAHAIALAAID5AAQAKAAAHgIQAIgHAAgKQAAgKgIgGQgHgIgKABIj5AAIgCAAQgJAAgHAHgAiykJQgPAPAAAVIAACMQAAAUAPAPQAPAPAUAAIA8AAQAVAAAOgPQAPgPAAgUIAAiMQAAgVgPgPQgOgOgVAAIg8AAQgUAAgPAOg");
	this.shape_4.setTransform(0.025,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdB4QgVAAgPgPQgOgOAAgVIAAiLQAAgUAOgQQAPgOAVAAIA7AAQAVAAAOAOQAPAQAAAUIAACLQAAAVgPAOQgOAPgVAAgAgbgHQgKANAAAUQAAATAKAOQALAOAOABQAOgBALgOQAKgOAAgTQAAgUgKgNQgLgOgOAAIAAAAQgOAAgLAOg");
	this.shape_5.setTransform(-11.35,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol165, new cjs.Rectangle(-24.1,-32.9,49.5,65.9), null);


(lib.Symbol160 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Ak+E9Qgwl5JUkAIBcAAInpJ5g");
	this.shape.setTransform(2.5213,3.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.7,-28.2,64.5,63.3);


(lib.Symbol159 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AASAAIgjAA");
	this.shape.setTransform(-0.15,-21.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1,3,true).p("AgRidIAAE4QAQAGATgGIAAk4");
	this.shape_1.setTransform(-0.15,-6.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#333333","#CCCCCC","#333333"],[0,0.475,1],-1.7,-0.1,1.8,-0.1).s().p("AgQCbIAAk4IAiAAIAAE4QgKADgIAAQgJAAgHgDg");
	this.shape_2.setTransform(-0.15,-6.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol159, new cjs.Rectangle(-2.9,-22.8,5.5,33.5), null);


(lib.Symbol157 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABGAAQAAAegUATQgVAVgdAAQgcAAgVgVQgUgTAAgeQAAgdAUgWQAVgSAcAAQAdAAAVASQAUAWAAAdg");
	this.shape.setTransform(0,-0.0007);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#000000"],[0,1],-0.2,-1.2,0,-0.2,-1.2,8.9).s().p("AgxAxQgUgTAAgeQAAgdAUgWQAVgSAcAAQAdAAAUASQAVAWAAAdQAAAegVATQgUAVgdAAQgcAAgVgVg");
	this.shape_1.setTransform(0,-0.0007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol157, new cjs.Rectangle(-8,-8,16,16), null);


(lib.Symbol152 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("AH8jFIv3AAIhkGLIS/AAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABzAYQgqhUgQhiIgwA3QgkgJgZATQg4AUhSACQgqAMAqAeQBAAaAsgCIgLAdIgEABIAAgBIAEAAIDQAAQAvAJgfAUQAWAmAcAkQApAEgNAcImMAAIgDAAIACgCIABACAhtA1IgCgBQgagSAogJAhtA1IgDAAIABgBAiiB/IADAAQAcgkAWgmIDwAAAi8CdQgKgZAjgFIABAAAC1B/IlXAA");
	this.shape_1.setTransform(0.0797,-0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Ai7CfIgBgDQgKgYAjgFIABAAIADAAQAcgkAWgmIgCgCQgagRAogJIAEgBIALgdQgsAChAgaQgqgeAqgMQBSgCA4gUQAZgTAkAJIAwg3QAQBjAqBTIjQAAIDQAAQAvAJgfAUIjwAAIDwAAQAWAmAcAkIlXAAIFXAAQApAEgNAcg");
	this.shape_2.setTransform(0.0797,-0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.8,-20.7,123.69999999999999,41.5);


(lib.Symbol151 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ApfDFIBkmJIP3AAIBkGJgAi+CdIGPAAQAEgHAAgGQgBgRgegDQgcgkgWgmQAMgIAAgGQAAgJgcgFQgrhUgQhiIgwA3IAwg3QAQBiArBUQAcAFAAAJQAAAGgMAIQAWAmAcAkQAeADABARQAAAGgEAHImPAAIADgDQgCgFAAgFQgBgQAcgEIAAAAIAEAAQAbgkAXgmIgEAAIABgBQgKgHAAgGQAAgIAYgFIABgBIADAAIALgdIgCAAIgEAAIAAAAIgCAAQgjgBgugQIgCgBIgPgFIgCgBQgVgPAAgLQAAgLAVgGQBSgBA5gUIABgBIAAAAIABAAIABgBQAPgLAUAAIABAAIAAAAQAKAAALADIAAAAIAAAAQgLgDgKAAIAAAAIgBAAQgUAAgPALIgBABIgBAAIAAAAIgBABQg5AUhSABQgVAGAAALQAAALAVAPIACABIAPAFIACABQAuAQAjABIACAAIAAAAIAEAAIACAAIgLAdIgDAAIgBABQgYAFAAAIQAAAGAKAHIgBABIAEAAQgXAmgbAkIgEAAIAAAAQgcAEABAQQAAAFACAFIgDADg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.8,-19.7,121.69999999999999,39.5);


(lib.Symbol148 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.3,1,1).p("AjDBeIGEiEAiuAzIF/iEAgBCWICmhXAjZClIGOiRAihACIF7iBAiJhdIDChHAiMg4IC5hE");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-17.5,45.5,35);


(lib.Symbol143 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1,3,true).p("AjwhRIMWAAIk1CjIsWAAg");
	this.shape.setTransform(-0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AolBSIE1ijIMWAAIk1Cjg");
	this.shape_1.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-9.1,112,18.299999999999997);


(lib.Symbol139 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#999999","#FFFFFF","#999999"],[0.737,0.871,1],0,0,0,0,0,0).s().p("AjxDyQhRhSANiAQANh/BlhkQBkhlB/gNQCAgNBSBRQBRBRgNCBQgOB/hkBkQhkBkh/ANQgTACgRAAQhoAAhGhFgAAYjlQheAKhLBKQhKBKgKBfQgKBfA9A8QA8A9BfgKQBegKBLhKQBKhLAKheQAKhfg8g9IgLgJQgxgqhGAAIgaABgAifCgQg1g2AJhVQAIhTBChCQBChDBUgIQBNgJA0AtIAJAJIAJAJQAsAzgIBOQgJBThCBDQhCBChTAIIgYACQhFAAgugug");
	this.shape.setTransform(0.019,0.0005);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AiyCzQg9g8AKhfQAKhfBKhKQBLhKBegKQBXgJA6AyIALAJQA8A9gKBfQgKBehKBLQhLBKheAKIgaABQhOAAgzg0gAAVjLQhUAIhCBDQhCBCgIBTQgJBVA1A2QA2A1BVgJQBTgIBChCQBChDAJhTQAIhOgsgzIgJgJIgJgJQgsglg9AAIgYABg");
	this.shape_1.setTransform(0.044,0.0023);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.1,-31.1,62.3,62.3);


(lib.Symbol138 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1,3,true).p("AhOijIAtE0QAhBEAihFIAtkzQgrgQgnABQgnACgkANg");
	this.shape.setTransform(0,2.0125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#999999","#FFFFFF","#999999"],[0,0.498,1],-7.9,0,7.9,0).s().p("AghCRIgtk0QAkgNAngCQAngBArAQIgtEzQgRAjgRAAQgQAAgRgig");
	this.shape_1.setTransform(0,2.0125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-16.8,17.8,37.7);


(lib.Symbol137 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1,3,true).p("ACoiVQAsAzgIBOQgJBThCBDQhCBChTAIQhVAJg2g1Qg1g2AJhVQAIhTBChCQBChDBUgIQBNgJA0AtIAJAJgAC0izQA8A9gKBfQgKBehKBLQhLBKheAKQhfAKg8g9Qg9g8AKhfQAKhfBKhKQBLhKBegKQBXgJA6AygABIhHIAEAEQAUAXgEAjQgEAlgdAeQgeAeglAEQgnAEgYgYQgYgZAEgmQAEglAegdQAegeAlgEQAigEAYAUgAAkgjIACACQAKALgCASQgCASgPAPQgPAPgSACQgTACgMgMQgMgMACgTQACgTAPgOQAPgPASgCQARgCAMAKgAE2gfQgOB/hkBkQhkBkh/ANQiBAOhRhRQhRhSANiAQANh/BlhkQBkhlB/gNQCAgNBSBRQBRBRgNCBg");
	this.shape.setTransform(0.019,0.0005);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjAkQgMgMACgTQACgSAPgPQAPgPASgCQARgCAMAKIACACIACACQAKAMgCASQgCASgPAPQgPAOgSACIgFAAQgQAAgKgKg");
	this.shape_1.setTransform(0.0389,-0.0024);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AhHBIQgYgZAEgmQAEglAegdQAegeAlgEQAigEAYAUIAEAEIAEAEQAUAXgEAjQgEAlgdAeQgeAeglAEIgLABQgfAAgVgVgAAFgtQgSACgPAPQgPAOgCATQgCATAMAMQAMAMATgCQASgCAPgPQAPgPACgSQACgSgKgLIgCgCIgCgCQgKgIgOAAIgFAAg");
	this.shape_2.setTransform(0.0475,0.0025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#999999","#FFFFFF","#999999"],[0.737,0.871,1],0,0,0,0,0,27.9).s().p("AjxDyQhRhSANiAQANh/BlhkQBkhlB/gNQCAgNBSBRQBRBRgNCBQgOB/hkBkQhkBkh/ANQgTACgRAAQhoAAhGhFgAAYjlQheAKhLBKQhKBKgKBfQgKBfA9A8QA8A9BfgKQBegKBLhKQBKhLAKheQAKhfg8g9IgLgJQgxgqhGAAIgaABg");
	this.shape_3.setTransform(0.019,0.0005);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AiyCzQg9g8AKhfQAKhfBKhKQBLhKBegKQBXgJA6AyIALAJQA8A9gKBfQgKBehKBLQhLBKheAKIgaABQhOAAgzg0gAAVjLQhUAIhCBDQhCBCgIBTQgJBVA1A2QA2A1BVgJQBTgIBChCQBChDAJhTQAIhOgsgzIgJgJIgJgJQgsglg9AAIgYABg");
	this.shape_4.setTransform(0.044,0.0023);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.1,-32.1,64.30000000000001,64.30000000000001);


(lib.Symbol133 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("ABZjVIAGgGIBehcQAJgEAUAMQAWALAYAXIAGAHIAWAZIARAbQANAZgIAIIhhBeIgJAJIgGAGIgTATIgQAPIgJAJIihCcQATBBggAzIgCACIgBABIg6A5QAOgOgYgtQgFgKgGgJQgOgXgUgYQBDgSgIgnQAdAiAQAgQAVAogJAQAAfidIALgLIARgQIAUgUIAEgEIAGgFQAxgtAqgeQhSBsi7CbQBAhLA4g5gAEIkNQAWAkgTAUIgBABQi2Cvh/BkQANAQAJAPIAGAKQANAZgBACADQhKQAzg0AigsQhvBOigC3ICIh0AAJA8QC9iYBRhuQhwBNieC5gAgrA/IgLgLQgVgWgUgNIgKgGIgYgMICgicAkxBBIAbACQAKADAMAGIAEACIANAIIAHAEIAJAHIAOAKIAOALIANAMIANALIALAMIALAMIALAMIAEAFAgrA/QgaAQgEAuIgagdQgxgygtgZQglgUgQAHQA0ghBBAYAhNEzIgBABQgPAOgtgZQgsgYgwgyIgOgPIgBgBIgKgLIAAgBIgKgMIgKgMIgBgBIgIgMIgJgNIgHgNIgCgEIgEgJIgGgOIgEgNQgBgJACgGQABgFAEgEQACgCADgBIA7g5Ag8gJQCei6BwhNQhRBui9CZgAgYASQCai9B0hIQhMByjCCTg");
	this.shape.setTransform(0.1202,-0.0721);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("AA4BsQgsgYgvgyIgOgPIgBgBIgKgLIAAgBIgKgLIgKgMIgBgBIgIgMIgJgNIgHgNIgCgEIgEgJIgGgOIgEgNQgBgJACgGQABgFAEgEQACgCADgBIAbACQAKADAMAGIAEACIANAIIAHAEIAJAHIAOAKIAOALIAMAMIANALIALAMIALAMIALAMIAEAFQAUAXAOAXQAGAJAFAKQAYAtgOAOIgBABQgFAFgJAAQgRAAgdgQg");
	this.shape_1.setTransform(-19.3992,18.8045);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("ACohsQhMBxjBCUQCZi9B0hIgACEiJQhRBui8CYQCdi4BwhOgAgugWIALgLIARgQIATgUIAEgEIAGgFQAxgtAqgeQhSBti7CZQBAhKA5g5g");
	this.shape_2.setTransform(7.9,-13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AiBDyIgLgMIgMgLIgLgMIgMgMIgOgLIgNgLIgPgLIgJgGIgHgFIgMgHIgEgDQgNgGgJgDIgcgCIA8g5QA0giBBAYICgibQg4A6hBBJQC8iZBRhsQgpAdgxAtIAGgGIBdhbQAJgEAVALQAWAMAXAWQAXAlgTAUIgBABQi2CuiABlIgKgMQgVgVgUgNIgLgGIgXgOIAXAOIALAGQAUANAVAVIAKAMQgZAPgEAuIgbgdQgwgygtgYQgZgOgPgCIgEAAIAAAAQgFAAgEACIAAAAIAAAAQAEgCAFAAIAAAAIAEAAQAPACAZAOQAtAYAwAyIAbAdQAHAnhDATgAgRBUQDBiUBMhyQh0BJiZC9gAg1A3QC9iYBQhtQhvBNieC4gAEshpQgiAsgzA0IgGAHIgUARIgPAQIgJAIIiIB2QCfi3BwhPgAEdiIQhQBti+CYQCfi4BvhNg");
	this.shape_3.setTransform(-0.55,-6.6016);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AizDmQgFgKgGgKQgOgXgUgXQBDgTgIgnQAdAiAQAhQAPAcAAAQQAAAHgDAEQADgEAAgHQAAgQgPgcQgQghgdgiQAEguAagPQANAPAJAPIAGALQAMAXAAADIAAAAIAAAAQAAgDgMgXIgGgLQgJgPgNgPQCAhkC1ivIABgBQATgUgWglIAGAHIAWAaIARAbQANAYgIAIIhhBfIgJAIQAzg0AigsQhvBPifC3ICHh1IihCcQAUBCghAyIgCADIgBABIg6A5QAOgPgYgsgAhSApQC8iYBRhtQhwBNidC4g");
	this.shape_4.setTransform(9.3274,1.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,-32.3,65.5,64.5);


(lib.Symbol129 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("AiBhoIBVh5IANgKQAmgeA7AUQA7AUAsA6QAsA5AEA/QACAjgMAZIhWB4AiBhoIAMgLQAngeA7AUQA6AUAsA6QAtA5ADA+QACAkgMAZAAjD+IBWh5AjYAQIBXh4");
	this.shape.setTransform(-0.5852,0.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1,3,true).p("ADKAOIAog3IADgEQAVgcgDgvQgEg+gsg6Qgsg6g7gTQg7gUgnAeQgKAIgGAKIgEAFIgrA8AioCXQAKgHAQAFQAQAFAMAQQAMAQABARIgBALIABAAIAFgFIAAgBQAFgHgBgMQgBgRgMgQQgMgQgQgFQgQgFgKAIIgEADgAhmDWIgDAIIgBABIgFAFQgKAIgQgFQgQgGgMgQQgNgQgBgQQgBgOAIgIIADgDIABgBAjuAoIAMgLQAngdA7ATQA7ATAsA6QArA6AEA+QACAsgSAcAjuAoIAQgXIANgKQAngeA7AUQA7ATAsA6QAsA6ADA+QACAjgLAaIgYAhIgCACQgGAKgLAIQgnAeg7gTQg7gVgsg5Qgsg6gEg+QgDg0Abgdg");
	this.shape_1.setTransform(-0.0215,-0.0159);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AB6BOQgEg+gsg5Qgsg6g6gUQg7gUgnAeIgMAMIAQgXIANgLQAngeA7AUQA6ATAsA7QAtA5ADA9QACAkgLAZIgYAiQASgcgCgsgAgBBAQgBgRgMgPQgMgQgQgGQgQgFgKAIIAFgLIAEgCQAKgIAQAGQAQAEAMAQQALAPABARQABAMgFAIIAAAAIgEAFIgBABg");
	this.shape_2.setTransform(-10.0102,13.804);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AAJCWQg6gUgsg6Qgtg6gDg8QgDg0AagdIAMgMQAogeA6AUQA6AUAtA6QAsA6ADA9QADAsgTAcIgBACQgIAKgKAIQgYASgfAAQgUAAgXgIgAgFBAQAHAAAFgEIABAAIAAgBIABAAIAFgFIAAAAIAEgIIgEAIIAAAAIgFAFIgBAAIAAABIgBAAQgFAEgHAAIAAAAIgBAAQgFAAgGgCQgQgFgMgQQgMgQgBgRIAAgDQAAgLAGgHIAEgDIABAAQAKgIAPAFQAQAGALAPQAMAPACARIgBAMIAAgBIAFgFIABAAQAFgIgBgMQgBgRgMgOQgMgQgPgFQgQgGgLAIIgDADIgFALIgBAAIgEADQgGAHAAALIAAADQABARAMAQQAMAQAQAFQAGACAFAAIABAAIAAAAg");
	this.shape_3.setTransform(-12.0754,16.8341);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993333").s().p("ABYCFQgEg+gsg6Qgsg5g6gUQg7gUgnAfIgNAKIBXh5IAMgLQAngeA6AUQA7AUAsA6QAtA6ADA9QACAkgMAZIhWB5QAMgagCgjg");
	this.shape_4.setTransform(-4.8607,6.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("ABYCEQgEg+gsg6Qgsg5g6gUQg7gTgnAdIgNALIBWh5IANgJQAngfA6AVQA6ATAtA6QAsA6ADA9QACAkgLAZIhWB5QAMgagCgkg");
	this.shape_5.setTransform(3.7648,-5.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC9966").s().p("ABpBtQgEg+gsg5Qgsg6g6gTQg7gVgnAfIgNAJIArg8IAEgFQAHgKALgIQAngeA5AUQA7AUAtA5QAsA7ADA9QADAugVAdIgDADIgoA4QAMgZgCgkg");
	this.shape_6.setTransform(10.6188,-15.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,-33.6,54.6,67.2);


(lib.Symbol125 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1,3,true).p("AE/jZIABgUQgBgfgYgYIgCgCIgRgMQgRgKgWAAQggAAgYAOQAgAHAaANIAAAAIAlAWQAZASASAZgAC1kuIgCACQgdgDgTAhQAiAFAeAPQAsAVAlAnIARATABNjtQgngCgLAiQAoAHAjAQQBKAhA2BFQAhgMgDggQAKgEAGgGQAQgOABgXQAggNgGghADFghQhBhIhTgnQgkgRgngLAg7iCQAdAEAbAMQAjAQAfAfQAXAXAPAZIAqA0IAEAFIALgFQApgWgCgsABNjtQAlAIAgAOQBEAfAuA8ADmhQQAIAbgpAUACDkOQgjgBgTAiAg7iCIgTgCIgQAAQhdgBhDBCQhCBDABBcQgBBdBCBBQBDBDBdAAQBdAABAhDQBDhBAAhdIAAgMACTAmQAAAagRAQQgDg2gagtAg7iCIgDgBIgUgGIAAAAQADgTARgIQANgHAXgBAAbjNQgqAAgLAh");
	this.shape.setTransform(0.0248,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999900").ss(1,1,1,3,true).p("AC3hgQAFAJAAAUQAABMg4A3Qg2A3hOAAQhNAAg4g3Qg2g3AAhMQAAhOAmApQAlAoBIAgQBGAgBPhIQAxguATAOg");
	this.shape_1.setTransform(-9.6,16.93);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(0.3,1,1).p("AACADIgDgF");
	this.shape_2.setTransform(-8.05,-13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("AifCeQhChBABhdQgBhcBChDQBDhCBcABIAQAAIATACQAdAEAbAMQAkAQAfAfQAXAXAPAZQAaAuADA2IAAALQAABdhDBBQhBBDhdAAQhcAAhDhDgAi8AJQAABNA2A3QA4A3BOAAQBMAAA3g3QA3g3ABhNQgBgTgEgJIgHgIQgSgOgyAtQhOBIhGggQhIggglgnQgNgOgJAAQgQAAAAAyg");
	this.shape_3.setTransform(-9.4752,9.2248);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("AiFBAQg2g3AAhMQAAhOAmApQAlAoBIAgQBGAgBPhIQAxguASAOIAHAIQAEAJABAUQgBBMg3A3Qg2A3hNAAQhOAAg4g3g");
	this.shape_4.setTransform(-9.6,16.93);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AiJBOIgCgBIgVgGIAAAAQADgTASgIQAMgHAXgBQAoALAkARQgwAKgFAUQgagMgegEgAhoAkQALghAsAAQAnAHAiAQQg3AOADAYQgkgRgogLgAgxADQAKghAnACQASgiAjABQAiAFAeAPQg4AEAIAfQghgOgkgIQAkAIAhAOQg8AHAPAZQgigQgngHgAB1gpIAAAAgAA1g9QATghAdADIADgCQAfAHAaANQgzALAHAVQgegPgigFg");
	this.shape_5.setTransform(7.8,-20.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgQBjIApA0IADAFIgDgFIgpg0QgQgagWgXQgfgeglgRQAFgTAxgJQgEgYA4gOQgOgaA6gHQgHgfA4gFQgIgUAzgMIABAAIgBAAQgagMgfgHQAYgPAgAAQAVAAASAKIARANIgRgDQgYgCgNAQIAlAXQAYASATAZQAGAgghAOIgQgTQglgogsgVQAsAVAlAoIAQATQAAAWgQAOQgHAGgJAFQADAegiAMQAIAcgpAUQACAsgpAWIgLAFQABAbgSAQQgCg3gZgtgABOBVQhAhIhSgmQBSAmBABIgABvAlQg1hDhKghQBKAhA1BDgACOgFQgvg9hDgeQBDAeAvA9gAjEgNIgEgFIAUAGIACABg");
	this.shape_6.setTransform(11.8968,-11.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgDgCIglgWQAOgRAXACIAQADIACACQAYAYABAeIAAAUQgTgZgYgRg");
	this.shape_7.setTransform(28,-25.7608);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-32.7,66.1,65.5);


(lib.Symbol122 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1,3,true).p("AingaIABALAingaQgGgghIgQQAfBKhfA+QFYB2ETiFQAGhNhphPQAXBChXBMQhzgnAWhhQhJArAEBjQhgg2gJhmQguAugBAtg");
	this.shape.setTransform(-0.0088,0.0167);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("Ak1A+QBfg+gfhKQBIAQAGAgIABALIgBgLQABgtAuguQAJBmBgA2QgEhjBJgrQgWBhBzAnQBXhMgXhCQBpBPgGBNQiSBHikAAQiSAAijg4g");
	this.shape_1.setTransform(-0.0088,0.0167);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(0.8,1,1).p("AjZhhQgGBBhWBzQFYB2ETiFQAGhNhbiAQBCB5iQBGQhzgoAWiXQgvArgWCaQhDg8gmhgIgvBbIgyhcIABgG");
	this.shape_2.setTransform(-0.0063,-2.0583);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("Ak1BTQBWhzAGhBIAyBcIAvhbQAmBgBDA8QAWiaAvgrQgWCXBzAoQCQhGhCh5QBbCAgGBNQiSBGikAAQiSAAijg3g");
	this.shape_3.setTransform(-0.0063,-2.0583);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(0.8,1,1).p("AimgaQAChGhRAdQBXBPiXA5QFYB3ETiFQAGhOinhAQBVAzhXBMQhzgngLhGQgoAQAEBjQhgg1Ash1QhfA4gEAqIgBAIIABAK");
	this.shape_4.setTransform(-0.0146,-0.7083);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("Ak1BFQCXg5hXhPQBRgdgCBGIgBAIIABAKIgBgKIABgIQAEgqBfg4QgsB1BgA1QgEhjAogQQALBGBzAnQBXhMhVgzQCnBAgGBOQiSBGikAAQiSAAijg4g");
	this.shape_5.setTransform(-0.0146,-0.7083);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(0.8,1,1).p("AinAJQgGgggrhQQACCJhfA/QFYB3ETiFQAGhPihhcQBPBQh6AWQhQAPgChMQgxAWgnArQg1ACAPisQhGB0gBAtIABAK");
	this.shape_6.setTransform(-0.0142,-3.5083);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("Ak1BhQBfg/gCiJQArBQAGAgIABAKIgBgKQABgtBGh0QgPCsA1gCQAngrAxgWQACBMBQgPQB6gWhPhQQChBcgGBPQiSBGikAAQiSAAijg4g");
	this.shape_7.setTransform(-0.0142,-3.5083);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(0.8,1,1).p("AikACIgCAcIAAAEIgBAMQgGhXg6AFQARA0hfA/QFYB3ETiFQAGhOibhxQBJBkiABMQhKgnBChYQh1AigCBRQhagkAjiIQhPBFgJBDg");
	this.shape_8.setTransform(-0.0138,-1.7333);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("Ak1BPQBfg/gRg0QA6gFAGBXIABgMIAAgEIACgcQAJhDBPhFQgjCIBaAkQAChRB1giQhCBYBKAnQCAhMhJhkQCbBxgGBOQiSBGikAAQiSAAijg4g");
	this.shape_9.setTransform(-0.0138,-1.7333);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(0.8,1,1).p("ABVg2QhkADALg5QgxAqASA+QhMgQAAhMQg3ATAAATIhSgwQAiBkhfA+QFYB3ETiFQAGhOjBhLQBvA+iVgFg");
	this.shape_10.setTransform(-0.0159,0.5667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990000").s().p("Ak1A4QBfg+gihkIBSAwQAAgTA3gTQAABMBMAQQgSg+AxgqQgLA5BkgDQCVAFhvg+QDBBLgGBOQiRBGilAAQiSAAijg4g");
	this.shape_11.setTransform(-0.0159,0.5667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(0.8,1,1).p("ABHgOQgnAHgnhsQgMA2AsBgQiIgzAShjQhJArgDBaQgEhNg5AWQAQAkhfA+QFYB2ETiFQAGhNi4hUQBmBHijAeg");
	this.shape_12.setTransform(-0.0155,0.1417);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990000").s().p("Ak1A9QBfg+gQgkQA5gWAEBNQADhaBJgrQgSBjCIAzQgshgAMg2QAnBsAngHQCjgehmhHQC4BUgGBNQiSBGikAAQiSAAijg3g");
	this.shape_13.setTransform(-0.0155,0.1417);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).to({state:[{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_7},{t:this.shape_6}]},3).to({state:[{t:this.shape_9},{t:this.shape_8}]},3).to({state:[{t:this.shape_11},{t:this.shape_10}]},3).to({state:[{t:this.shape_13},{t:this.shape_12}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-19.8,64,32.6);


(lib.Symbol110 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(1,1,1,3,true).p("AEmjLQgQgSgWAAQgOAAgLAHQjaCMkVBoIARgDQAdAAAUAdQAUAcABApIgCAUQgEAcgPAVIgPAQQDnifD/hnQAPgGAMgQQASgZAAgkQAAgkgSgZIgGgHQAHAQAAAVQAAAggRAXQgLAPgNAGQjmBdjRCOAjkDFQgKAFgKAAQgXAAgQgWQgRgXAAghQAAggARgXQALgPAPgFIANgCQAXAAAQAWQARAXAAAgIgBARQgEAWgMARIgMAMAkIAeIgJAEIgXAVIgBABQgUAcAAApQAAAoAUAdQAUAcAeAAQANAAAMgGIABgBIAIgFAkIAeIgBAAAj0CVIgHACQgIAAgFgIQgGgIAAgLQAAgLAGgIIAJgHIAEgBQAIAAAGAIQAGAIAAALIgBAFQgBAIgEAGIgEAEAjtCvIgNADQgPgBgLgOQgLgPAAgWQAAgVALgPQAHgKAKgDIAJgCQAPAAALAPQALAPAAAVIgBALQgCAOgIAMIgIAI");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCC99").s().p("AgxBFQgUgdAAgoQAAgoAUgcIACgBIAWgUIAJgFIAQgCQAdAAAUAcQAVAcAAAoIgBAUQgEAcgQAVIgOAQIgIAGIgCABQgMAFgNABQgcAAgVgdgAg3AAQAAAgAQAXQAQAWAXAAQAJAAAKgEQgKAEgJAAQgXAAgQgWQgQgXAAggQAAggAQgWQALgQAPgFIANgCQAWAAAQAXQARAWAAAgIgBAQQgEAWgMARIgLAMIALgMQAMgRAEgWIABgQQAAgggRgWQgQgXgWAAIgNACQgPAFgLAQQgQAWAAAgIAAAAgAgmABQAAAWALAPQAKAPAQAAIALgDIgLADQgQAAgKgPQgLgPAAgWQAAgUALgOQAGgLALgDIAJgCQAOAAALAQQAKAOAAAUIAAALQgDAOgHAMIgIAJIAIgJQAHgMADgOIAAgLQAAgUgKgOQgLgQgOAAIgJACQgLADgGALQgLAOAAAUIAAAAgAgWAAQAAAKAGAIQAFAIAJAAIAFgBIgFABQgJAAgFgIQgGgIAAgKQAAgLAGgIIAJgHIAFAAIAAgBIAAAAIAAAAIABAAQAGABAFAGIAAABIAAAAQAGAIAAALIAAAEQgCAIgEAGIgEAEIAEgEQAEgGACgIIAAgEQAAgLgGgIIAAAAIAAgBQgFgGgGgBIgBAAIAAAAIAAAAIAAABIgFAAIgJAHQgGAIAAALIAAAAgAgRheIABAAIgJAFg");
	this.shape_1.setTransform(-24.8,12.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996633").s().p("AjDCjQAAgpgVgcQgUgcgdAAIgRACQEWhnDYiMQAMgIAOAAQAVAAARASQAGARABAUQAAAhgRAXQgLAPgOAGQjmBcjPCOg");
	this.shape_2.setTransform(1.8,-3.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996600").s().p("Aj6C/QAPgWAEgbQDRiODlhdQAOgGALgPQAQgXAAggQAAgUgGgRIAGAHQASAZAAAkQAAAkgSAZQgMAQgPAHQj+BmjoCfg");
	this.shape_3.setTransform(5.225,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.8,-23.2,65.6,46.4);


(lib.Symbol106 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.8,1,1).p("AmAH3IaZyHIAwA2I6ZSHAmAH3IAwA2IvIBkIgwg2g");
	this.shape.setTransform(-24.775,2.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("An7AXIPHhjIAwA2IvHBjg");
	this.shape_1.setTransform(-109.275,60.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AtkIpIaZyHIAwA2I6ZSHg");
	this.shape_2.setTransform(23.65,-2.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.1,-63.8,272.7,133.39999999999998);


(lib.Symbol102 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("ACQm7IA4g4ImPAAIA4A4IEfAAIAAN3IA4A4IAAvnAA4AsIAAGQIBYAAAAABkIA4g4IjHAAIg4A4IAApXAAAH0IDIAAAAABkIAAGQAA4G8Ig4A4AiPAsIAAnnAjHBkIDHAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AA4G8IAAmQIjHAAIAAnnIEfAAIAAN3g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("ADIH0Ig4g4IAAt3IA4g4IAAPngAAAH0IA4g4IBYAAIA4A4gAjHBkIA4g4IDHAAIg4A4g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AAABkIA4g4IAAGQIg4A4gAjHnzIGPAAIg4A4IkfAAIg4g4IA4A4IAAHnIg4A4g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol102, new cjs.Rectangle(-21,-51,42,102), null);


(lib.Symbol100 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.8,1,1).p("AC8gdIgwg3IEai/IAwA2gAhfC9IGmkhIAwA2ImmEhIgwg2Il2AhIAwA2IF2gh");
	this.shape.setTransform(-6.725,0.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AkaDNIGmkhIAwA2ImmEhgAguhDIEZi/IAwA2IkaC/g");
	this.shape_1.setTransform(11.975,-0.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AjSgKIF1ggIAwA1Il1Agg");
	this.shape_2.setTransform(-32.65,24.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.7,-27.6,96,57.1);


(lib.Symbol96 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("AiPm7IBYAAIA3g4IjHAAgAiPG8Ig4A4IAAvnACQCcIAAEgIA4A4ImPAAACQCcIA4g4IAAGQAAABkIDIAAAg3CcIAApXAiPG8IAAt3ACQG8IkfAAAg3CcIDHAAAAABkIg3A4AAAnzIAAJX");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AiPG8IAAt3IBYAAIAAJXIDHAAIAAEgg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("ADIH0Ig4g4IA4A4ImPAAIA4g4IEfAAIAAkgIA4g4IAAGQgAg3m7IA3g4IAAJXIg3A4g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AjHnzIDHAAIg3A4IhYAAIg4g4IA4A4IAAN3Ig4A4gAg3CcIA3g4IDIAAIg4A4g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol96, new cjs.Rectangle(-21,-51,42,102), null);


(lib.Symbol94 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.8,1,1).p("Ag/g5IAwA2IimAMIgwg2gAjrECIK5niIgwg2Iq5HiIiyAVIAwA2ICygVIgwg2");
	this.shape.setTransform(9.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Al0DWIK5nhIAwA2Iq5Hhg");
	this.shape_1.setTransform(18.1,-1.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AjeByICygUIAvA2IixAUgAAJibICmgMIAwA2IimAMg");
	this.shape_2.setTransform(-14.7,11.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-28.8,94.4,57.7);


(lib.Symbol90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("ACQm7IA4g4ImPAAIGPPnIg4kmIkDqJIhUg4ACQm7IAAKJADIH0IAAvnAhzm7IEDAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AiBlEIEDAAIAAKJg");
	this.shape_1.setTransform(1.4,-11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgbDOIAAqJIA3g4IAAPng");
	this.shape_2.setTransform(17.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AjHnzIBUA4IEDKJIA4EmgAhzm7IhUg4IGPAAIg4A4gAjHnzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol90, new cjs.Rectangle(-21,-51,42,102), null);


(lib.Symbol88 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.8,1,1).p("AgPCpIFYmwIAwA2IlZGwAgPCpIAvA2IloApIgwg2g");
	this.shape.setTransform(-15.875,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AjLgFIFngqIAwA1IlnAqg");
	this.shape_1.setTransform(-33.125,23.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AjDC9IFYmwIAvA2IlXGwg");
	this.shape_2.setTransform(2.15,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-25.3,77.3,54.8);


(lib.Symbol84 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("AD0rnIA4g4IpXAAIBSA4IHNTOIA4E5IAA4/AD0rnIAATOAkrsfIJXY/AjZrnIHNAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AjmpnIHNAAIAATOg");
	this.shape_1.setTransform(1.325,-12.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgbHnIAAzOIA3g4IAAY/g");
	this.shape_2.setTransform(27.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AkrsfIBSA4IHNTOIA4E5gAjZrnIhSg4IJXAAIg4A4gAkrsfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol84, new cjs.Rectangle(-31,-81,62,162), null);


(lib.Symbol82 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.8,1,1).p("AguE1IJQrRIAwA1IpRLSAguE1IAvA2IoiAyIgwg1g");
	this.shape.setTransform(-24.575,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AkogBIIhgyIAxA1IojAyg");
	this.shape_1.setTransform(-54.25,38.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AlAFOIJRrRIAwA2IpRLRg");
	this.shape_2.setTransform(2.775,0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-39.6,120.9,84.7);


(lib.Symbol78 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1,3,true).p("AhPCMIGPmPIAADIIlAE/IjvAAIhQhQIAAgoIDwAAIAAAoIjwAAAhPC0IBPBQ");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ah3AUIAAgnIDvAAIAAAng");
	this.shape_1.setTransform(-20,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AhPAoIhQhPIDvAAIBQBPg");
	this.shape_2.setTransform(-16,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AjHC0IAAgoIGPmPIAADIIk/E/g");
	this.shape_3.setTransform(12,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-27,66,54);


(lib.Symbol77 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AA2AAQAAAkgQAZQgPAZgXAAQgWAAgQgZQgPgZAAgkQAAgjAPgZQAQgZAWAAQAXAAAPAZQAQAZAAAjg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmA8QgPgYAAgkQAAgjAPgYQAQgaAWAAQAXAAAPAaQAQAYAAAjQAAAkgQAYQgPAagXAAQgWAAgQgag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol77, new cjs.Rectangle(-6.4,-9.5,12.8,19.1), null);


(lib.Symbol75 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AAUAaIAAABQADASgHASIgGANIgBABIgHAAQg0gEglg0IABgBIAHgLAAUAaQAjgbAfgGADQiCQgpgshTgZQhRgahXA6QgeAYgQAkQAsgjAqgSIgXAbIgSAfIA+g4IAKgJIgGAHIgwBAQAhgpAlgOIg1BHQAegeAfgNQgjAjgYAsQAtgrAngLQgmAhgZAxIgVAEQgSAGgNAPIgCgFQgCgHgFgHQAFgMADgMQAEgYgMgMQgLgMgUAIQgJADgJAHQAfgqAngbAjBAvQgKgIgCgLQgFgUAPgPQANgPAVgGAhFheIACgCAiagmIgCgHIAAAAIATgTAiYgeIgCABIgHABIABgBIAGgJIACAIQAYgEAVAKQAMAGAHAIAASASQgFgNgJgIQAegcAfgOIgvA/IgVAdIAXgVAgbgQIgEAIIAHgIQA0g2AbgHQgiAegXAnIgSAeIAYgZAgCgIIgCgBQgKgGgKgBAivBuQgKAFgFAMQgFAMADALQADALAKAEIATgCQAKgGAFgMQAEgMgDgLQgDgLgJgEQgJgDgKAGgAjBAvIAOAKQAVAKAagFIAEgBAi8DQQgOgcgCgnQgDguAOgw");
	this.shape.setTransform(-1.8019,-3.3548);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AACAAIgDAB");
	this.shape_1.setTransform(-4,-19.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663333").s().p("AgUBiIAvg/QgfANgeAdIgYAZIARgfQAYgmAigfQgbAIg0A2IgHAHIAEgHQAZgyAngfQgoALguApQAYgrAkgiQgfANgfAdIA2hGQgmANghApIAxg/IAFgHIgJAIIg/A5IASggIAXgbQgpASgsAkQAQgkAegZQBYg5BQAaQBSAYApAtIh5B6QggAFgiAdIgYAVg");
	this.shape_2.setTransform(2.025,-11.4048);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAPQgDgLAFgLQAFgMAKgGQAJgGAJAEQAJAEADALQADALgEALQgFAMgKAGIgSACQgKgEgDgLg");
	this.shape_3.setTransform(-18.7121,10.1855);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABHBNQg2gEgjg0IAAgBIAIgLQALgOASgHIAWgDIgEAHIAHgHQAKABAJAFIACABIgRAeIAYgYQAKAHAEANIgWAeIAYgVIAAAAQADASgGASIgHAOIAAAAgAgngXQgUgKgYAEIgDgJIgCgGIABgBIATgTQAIgHAKgDQAUgHALAMQALALgEAYQgCANgGAMQgHgJgMgFg");
	this.shape_4.setTransform(-8.6526,-3.4442);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AiAC5QgNgdgDgnQgDguAOgvIAOAJQAOAHAQAAIAAAAIABAAQAIAAAIgCIAEAAIgEAAQgIACgIAAIgBAAIAAAAQgQAAgOgHIgOgJQgJgJgDgLQgEgSAPgRQANgPAVgFIABgCIAFgJIADAIQAYgEAUAKQAMAGAHAJQAFAGADAIIACAFIgCgFQgDgIgFgGQAGgMACgNQAEgYgLgLQgLgNgUAIQgKADgIAHQAegqAngbIgSAfIA+g4IAEgBIgwA/IgBACIABgCQAggpAmgNIg2BGQAfgdAfgOQgkAjgYAsQAugqAogLQgnAggZAyIgWADQgRAGgMAQIgIALIAAABQAjAzA2AEIiCCEgAhzBWQgKAGgFAMQgFAMAEAKQADAMAJADIATgBQAKgHAFgLQAFgNgDgLQgDgKgKgEIgHgCQgFAAgHAEgAheg1IgGACIAGgCIADgBgABQADIAAAAQAjgcAggFIhGBFQAGgSgDgSgABAgbQAegcAggNIgwA/QgEgNgKgJgAA3ghQgJgFgKgBQA0g3AcgHQgjAegYAng");
	this.shape_5.setTransform(-7.8769,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-25.1,43.5,43.6);


(lib.Symbol71 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("AgwiGIBIAAIglBEIgnBCIgnBEIBJAAIAlhEIBJAAIBJAAADyiGIhIAAIhJAAIAnhDIhJAAIhIAAAjLCHIBJAAIBJAAIBIAAIAnhDIBIAAAAxDKIhIAAIhJAAIhIAAIhJAA");
	this.shape.setTransform(-1.825,-4.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1).p("ADkkNIBJAAIhOCHAhqhCIAnhEIAnhDIAlhEIBJAAIBJAAIgnBEIBJAAIgnBDIgmBEIBIAAIAZgqIADgGIALgUABSkNIgmBEIgnBDIBIAAIgmBEIBJAAIgnBCIgnBEIhIAAIgnBDIgmBDIgnBEIhJAAIhJAAIAnhEIAnhDIAnhDIBJAAIgnBDIgnBDIgnBEAiRAAIBJAAIBIAAIAnhCIhIAAIhJAAACdgSIAbgwACRAAIAMgSIgLASIgnBEIgnBDIgLATIgbAwACRAAIABAAADUhyIALgUIAAAAAC9jJIBJAAIgnBDAC9jJIAnhEACbkNIBJAAABrBEIAAAAABECHIgLATABECHIAAAAIAnhDIAmhEAAUDaIAJgQIABAAIgKAQIgcA0IhJAAIhJAAAiRAAIAnhCABECHIhIAAIgmBDIgnBEAi3BEIAmhE");
	this.shape_1.setTransform(0.125,-4.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhRENIAnhDIBHAAIgJAQIgcAzgAhRENIhJAAIAnhDIBJAAIgnBDgAiaENIhJAAIAnhDIBJAAIgnBDgAjjENIhJAAIAnhDIAnhDIBJAAIgnBDIhJAAIBJAAIgnBDgAAdDKIhHAAIAmhDIBIAAIgLATIgbAwgAgqDKIhJAAIAmhDIBJAAIAmhDIBJAAIgnBDIhIAAIgmBDgAi8DKIAnhDIBIAAIgmBDgAhNCHIAnhDIBIAAIgmBDgAhNCHIhIAAIAnhDIhJAAIBJAAIgnBDIhJAAIAnhDIAmhEIBJAAIgmBEIBIAAIAmhEIBJAAIgnBEIhIAAIgnBDgAjeCHgABrBEIhJAAIAnhEIBIAAIgmBEgAAiBEgAAiBEgAgmBEIhIAAIAmhEIBIAAIgmBEgACdgSIgMASgABJAAIAJgQIA/AQgABJAAIhJAAIATghIA/ARIgJAQgAAAAAgAhIAAIAdgxIA+AQIgTAhgAAAAAgAhIAAgAiRAAIAnhCIBJAAIhJAAIA/ARIgdAxgABSgQIAegyIgeAygAC4hCIgbAwgAATghIAUghIgUAhgAgrgxIAKgRIgKARgAC4hCgABwhCIBIAAgAC4hCgADRhsIADgGIgDAGIgZAqgABwhCgAAnhCIBJAAgACWiGIgmBEgAAnhCgAghhCIBIAAgAAnhCgABNiGIgmBEgAghhCIAagtIgaAtgAhDiGIAnhDIAlhEIBJAAIBJAAIBJAAIgnBEIhJAAIAnhEIgnBEIBJAAIhjAtIAagtIhIAAIAmhEIgmBEIhIAAIBIAAIgnBDIAkAAIgwAXIAMgXIhIAAIBIAAIgMAXIhjAtgADUhygADfiGIgLAUgADUhyIALgUIgLAUgADfiGIAAAAIAnhDIhJAAIAnhEIBJAAIhOCHgADfiGIAAAAgADfiGgACWiGIBJAAgADfiGgADfiGIAAAAIAAAAgABNiGIBJAAgACWiGIAnhDIgnBDgABNiGIANgWIgNAWgAApiGIAkAAgAAFiGIAnhDIBIAAIgaAtIgxAWgAC9jJIBJAAIgnBDgAC9jJgAC9jJgAAsjJg");
	this.shape_2.setTransform(0.125,-4.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-32.2,62.099999999999994,55.900000000000006);


(lib.Symbol67 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("AD2jJIhKAAIhKAAIhKAAIgmBDIhLAAACohCIhKAAIgnBCIgnBDIgmBDIhLAAIAnhDIAnhDIhKAAIgnBDIhKAAAiAhCIBLAAIBJAAIAnhEIBKAAIBKAAAj1CGIBKAAIgnBEIBKAAIBLAAIBJAA");
	this.shape.setTransform(2.175,-4.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1).p("ADnkMIBKAAIgnBDIgnBDIgnBEIgoBCIgnBDIgnBDIgnBEIgmBDIhKAAAgejJIAmhDIBKAAIBKAAIBLAAIgnBDIgnBDIgnBEIhLAAIgnBCIBKAAIBKAAAiUAAIBLAAIAnhCIAmhEIBKAAIAnhDIAnhDAgejJIBJAAIAnhDAibENIAnhDIAnhEIhKAAIAnhDIBKAAIBJAAIBKAAAiUAAIAohCIAnhEIAnhDABGCGIhJAAIgnBEIgnBDIhKAAIhKAAIhLAAIAnhDIAnhEIAnhDIAnhDAkJDKIBLAAIgnBD");
	this.shape_1.setTransform(0.225,-4.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhRENIhKAAIAnhDIBKAAIgnBDIAnhDIBJAAIgmBDgAjlENIAnhDIhLAAIAnhEIAnhDIAnhDIBLAAIAnhCIBJAAIgnBCIBKAAIgnBDIhJAAIAmhDIhJAAIgnBDIhLAAIBLAAIgnBDIBKAAIgnBEIhKAAIAnhEIhLAAIBLAAIgnBEIBKAAIgnBDgAkwENIAnhDIBLAAIgnBDgAgqDKIAnhEIBJAAIgnBEgAh0DKIAnhEIhKAAIAnhDIBKAAIgnBDIBKAAIgnBEgAh0DKgAkJDKgAgDCGIAmhDIBKAAIgnBDgAgDCGgAgDCGgAhNCGIAnhDIBJAAIgmBDgAgDCGgAAjBDIAnhDIBKAAIhKAAIAohCIBKAAIgoBCIgnBDgAgmBDIhKAAIAnhDIBJAAIgmBDgAhwBDgAhwBDgAhwBDgABKAAgABKAAIhKAAIAnhCIBLAAIAnhEIBKAAIgnBEIhKAAIgoBCgAiUAAIAohCIAnhEIAnhDIBJAAIAnhDIBKAAIgnBDIhKAAIgnBDIhJAAIBJAAIgmBEIhKAAIBKAAIgnBCgAByhCIhLAAIAnhEIBLAAIgnBEgAgihCIAmhEIBKAAIAnhDIBLAAIgnBDIhLAAIgnBEgAAnhCgAgihCgACZiGIAnhDIBKAAIgnBDgACZiGgAAEiGIAnhDIBKAAIgnBDgAAEiGgAAEiGgAAEiGgADAjJIAnhDIBKAAIgnBDgAB1jJIAnhDIBLAAIgnBDgAB1jJgAgejJIAmhDIBKAAIgnBDgABSkMg");
	this.shape_2.setTransform(0.225,-4.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.2,-32.2,62.9,55.900000000000006);


(lib.Symbol63 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("AhDiHIBIAAIAnhFIBJAAIBJAAIBIAAAhqhDIBJAAIgnBDIgmBEIBIAAIAmhEIAnhDIAnhEIBJAAIgnBEIBJAAAjeCJIBJAAIBIAAIBJAAIAnhFIBIAAAkFDNIBJAAIBIAAIBJAAIBIAA");
	this.shape.setTransform(0.15,-3.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1).p("ADkkQIBJAAIgnBEIgnBFIgmBEIgnBDIhJAAAgcjMIAlhEIBKAAIBIAAIgmBEIgnBFIhJAAIgmBEIBIAAIBJAAIgnBDIhJAAIhIAAIhJAAIAnhDIAnhEIAnhFIBIAAIAnhEADkkQIgmBEIgnBFIBIAAACbkQIBJAAABECJIgnBEIgmBEIhIAAIAmhEIAnhEgACSAAIgnBEIgnBFAiaERIAmhEIAnhEIAnhFIBJAAIAmhEAi3BEIBJAAIgnBFIgnBEIgnBEIhJAAIAnhEIAnhEIAnhFIAmhEAhRERIhJAAIhJAA");
	this.shape_1.setTransform(0.15,-3.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhRERIAmhFIBIAAIgmBFgAiaERIAmhFIBJAAIgmBFgAjiERIAmhFIBIAAIgmBFgAjiERIhJAAIAmhFIAnhDIAnhFIAmhEIBJAAIgmBEIBJAAIgnBFIhJAAIAnhFIhJAAIBJAAIgnBFIhJAAIBJAAIgnBDIhJAAIBJAAIgmBFgAgrDMIAohDIBHAAIgnBDgAh0DMIAohDIBJAAIgoBDgAi8DMIAnhDIBJAAIgoBDgAgDCJIAlhFIBJAAIgnBFgAhMCJIAnhFIBHAAIAnhEIhJAAIAnhDIBJAAIgnBDIBIAAIgmBEIhJAAIglBFgAglBEIAlhEIBJAAIgnBEgAglBEgAhuBEIAmhEIBIAAIglBEgAglBEgABJAAIAnhDIhJAAIAnhEIBJAAIgnBEIBJAAIgoBDgABJAAgAAAAAIhIAAIAnhDIhJAAIBJAAIgnBDIhJAAIAnhDIAnhEIAnhEIAlhFIBJAAIBJAAIgnBFIhIAAIAmhFIgmBFIhIAAIBIAAIgnBEIhIAAIBIAAIgmBEIBIAAIgnBDgAiRAAgABwhDIAnhEIhJAAIgnBEIhIAAIAmhEIBJAAIAmhEIBJAAIgmBEIBIAAIhIAAIAmhEIBJAAIgnBEIgmBEgAAnhDgAAFiHIAnhEIBIAAIgmBEgAAFiHgAAFiHgAC9jLIAnhFIBJAAIgnBFgAB0jLIAnhFIBJAAIgnBFgAAsjLgAAsjLg");
	this.shape_2.setTransform(0.15,-3.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-32.2,62.099999999999994,56.5);


(lib.Symbol62 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("Ak/DwIE/ovIFAAAIlAIvAAAFAIk/AAIAAhQIE/AAAAAFAIAAhQAFAjvIlAIv");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(2,1,1).p("AAAgnIAABP");
	this.shape_1.setTransform(32,-28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AifAoIAAhPIE/AAIAABPg");
	this.shape_2.setTransform(-16,28);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ak/EYIE/ovIFAAAIlAIvg");
	this.shape_3.setTransform(0,-4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AifDwIE/ovIAABQIk/Ivg");
	this.shape_4.setTransform(16,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-33,66,66);


(lib.Symbol58 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgCgeQAGAAADAKQACAKgDANQgDANgGAKQgHAKgHAAQgHAAgCgKQgDgKADgNQADgNAHgKQAHgKAHAAgAgVAuIAGAFQACAEgCAGIgIAeIgGAKQgEAEgEAAIgFgEQgCgEACgGIAIgeIAFgKQAEgFAEAAgAhOh0IDcAAIg/DpIjcAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgNAZQgCgEACgGIAIgcIAFgLQAEgEAEgBIAGAFQABAEgBAHIgIAcIgGAKQgDAFgEAAg");
	this.shape_1.setTransform(-2.9375,7.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAZIANgxIBKAAIgNAxg");
	this.shape_2.setTransform(-2.375,-6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AiNB0IBAjnIDbAAIhADngAgdAyIgFALIgIAeQgCAFACAFIAFAEQAFAAADgEIAHgKIAIgeQABgHgBgEIgHgEQgDAAgFAEgAgQgUQgHAKgCANQgEANADAKQACAKAIgBQAGABAHgKQAGgKADgNQADgNgDgKQgDgKgFAAQgHAAgHAKgAhDgqIBKAAIANgyIhKAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.2,-12.6,30.4,25.299999999999997);


(lib.Symbol49 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ak/DcIBQigIB4AAIjIDIgADIiLIB4h4IAAB4g");
	this.shape.setTransform(-1.05,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AifBkIDHjHIB4AAIjHDHg");
	this.shape_1.setTransform(2.95,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AlJEEIDIjIIB4AAIDHjHIh4AAIjHDHIh4AAIE/k/IDwAAIh4B4IB4AAQApA4gpBAQhMAZgEhBIk/E/g");
	this.shape_2.setTransform(-0.0125,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-26,66,52);


(lib.Symbol48 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1,3,true).p("AE2iLQApA3gpBBQhMAZgEhBIk/E/IAAgoIBQigIDHjHIB4AAIAAh4IjwAAIAAB4IB4AAIB4h4AiBA8IB4AAAlJDcIBQigIE/k/AlJDcIAoAAIDIAAAhZEEIjwAAIAAgoAiBA8Ih4AAAiBA8IigCgIgoAoABGiLIjHDH");
	this.shape.setTransform(-0.0125,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-27,68,54);


(lib.Symbol47 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1,3,true).p("ABQg7IAoAAIjHDHIAAAoIjwAAIAAgoIGPmPIAADIIjHDHIAoAAABQkDIB4AAIB4AAIjIDIAAAEEIFAk/IAAjIAh3CMIjIAAAAAEEIjvAAIhQhQAhPC0IBPBQ");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AiLCgIhQhQIDvAAIBQBQgAgTAoIDHjHIAoAAIjIDHg");
	this.shape_1.setTransform(-10,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ak/DcIAAgoIDIAAIAoAAIAAAogABQgTIAAjIIB4AAIB4AAIjIDIg");
	this.shape_2.setTransform(0,-4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AhPC0IAAgoIDHjHIDIjIIAADIIlAE/gAk/CMIGPmPIAADIIjHDHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-27,66,54);


(lib.Symbol43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1,3,true).p("ACnjOQgHgPAAgSQAAghAYgYQAXgXAhAAQAhAAAYAXQAXAYAAAhQAAAhgXAXQgYAYghAAQgTAAgQgIACnjOIARAXQAKAKALAGIoMHng");
	this.shape.setTransform(-24,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#000000"],[0,1],20.3,-26,25.6,-20.7).s().p("ADhkGIAQAXQAKAKALAFIoLHng");
	this.shape_1.setTransform(-29.75,29.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#000000"],[0,1],1,-1,0,1,-1,10.2).s().p("AgiBIQgMgFgKgKIgQgYQgHgPAAgSQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQgSAAgQgIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-9,66,66);


(lib.Symbol39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAbgjQgDAgAVgFQgbASgaAHQgQAHgTAMgAgbgEIAAgBIAFgPQAGADAXgOIgrAtg");
	this.shape.setTransform(1.2,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-4.8,8.9,7.1);


(lib.Symbol35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AANB5IgDgBIgCgDQgHglgIgWIAAAAQgWglgCg1QgFgxAggnQgVAoAEAvIAAAAQACAzAUAjIAAABIAHAUIgBhZIgJgHQgFgIAAgKIAAgBQAAgKAFgIQAFgJAJABIABAAQAIgBAGAJIAAAAQAFAIAAAKIAAABQAAAKgFAHIAAABIgKAHIABBtIAAAWIgBAEIABgBIgEACgAAMgYIAHgEIADgMIAAgBIgDgNQgDgDgDAAIgBAAIgHAEQgDAFAAAHIAAABQAAAHADAFIAAAAQADAEAEAAgAAKB4IAAAAIABABg");
	this.shape.setTransform(-1.3342,32.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AANFHIgGgDIgBAAIgFgBIgWgCIgBgBIAAgBQgrkvArlRIACgDIADgCIAbAAIAEACIABADQArFQgVCcIgXCcgAgME5IASAAQAqkqgqlLIgSAAQgqFLAqEqg");
	this.shape_1.setTransform(0.3583,-11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AACgBIAJgHIABgBQAEgHABgKIAAgBQgBgKgEgIIgBAAQgGgJgHABIgBAAQgIgBgGAJQgGAIABAKIAAABQgBAJAGAJIAKAHIABBZIgIgVIAAAAQgUgjgCgzIAAAAQgFgwAVgoIAXADIAEABIABAAIAGADQAcAjgEAuQgCA0gVAlQgHAPgFAXg");
	this.shape_2.setTransform(0.2357,31);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663333").s().p("AgJE7QgqkqAqlLIATAAQAqFLgqEqg");
	this.shape_3.setTransform(0,-11.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-44.4,9.3,88.9);


(lib.Symbol28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1,3,true).p("AgkhMQgngHgegXQgrggAAguQAAgvArghQAsggA9AAQA+AAArAgQAsAhAAAvQAAAugsAgQgdAXgnAJIAAAGQgCASgJAOQgLAQgPAAQgOAAgLgQQgKgOgBgSIAAgGAAAiTQgtAAghgRQghgQAAgXQAAgXAhgRQAhgQAtAAQAuAAAhAQQAhARAAAXQAAAXghAQQghARguAAgAgkhMQAAgXALgQQALgRAOAAQAPAAALARQALAQAAAXABKCsIAAgaIA1AAIAAAUIgOAAIAAAVIAOgBIAAAbIgTAAIAAATIATgBIAAAVIgbAAIAAAKIAbAAIAAALIg1AAIAAgYIglAAIAAAiQgpAdgggdIAAlnAAlCsIAlAAABKD5IAAhNAAlCsIAABNAAlhKIAAD2");
	this.shape.setTransform(0.025,-0.0125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#000000"],[0,1],0,-9.2,0,9.2).s().p("AgZAnQgKgOgBgRIAAgGIBJAAIAAAGQgCARgJAOQgLARgPAAQgOAAgLgRgAgkAAQAAgWALgQQALgRAOAAQAPAAALARQALAQAAAWg");
	this.shape_1.setTransform(0.025,-7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#333333","#CCCCCC","#333333"],[0,0.49,1],-4.2,0.4,5.6,0.4).s().p("AgZBAIAAgYIAAhMIAAgaIA0AAIAAAUIgPAAIAAAVIAPgBIAAAaIgUAAIAAATIAUgBIAAAUIgbAAIAAALIAbAAIAAALg");
	this.shape_2.setTransform(10.1,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#333333","#CCCCCC","#333333"],[0,0.49,1],-8.9,1,6.7,1).s().p("Ag3CsIAAlmIAAACIABAFQABASAJAOQALAQAQABQAPgBAKgQQAJgOABgSIABgFIAAD1IAlAAIAABOIglAAIAAhOIAABOIAAAhQgUAPgTAAQgTAAgQgPg");
	this.shape_3.setTransform(1.875,11.0125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#000000"],[0,1],-25.2,-6.8,31.9,8.5).s().p("AAlBtQAAgXgLgQQgLgRgPAAQgOAAgLARQgLAQAAAXQgngHgegXQgrggAAguQAAguArghQAsggA9AAQA+AAArAgQAsAhAAAuQAAAugsAgQgdAXgnAJgAhOg5QghARAAAXQAAAWAhAQQAhARAtAAQAuAAAhgRQAhgQAAgWQAAgXghgRQghgQguAAIgBAAQgtAAggAQg");
	this.shape_4.setTransform(0.025,-18.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-30.7,31.9,61.4);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjiDiQhdhdAAiFQAAiEBdheQBehdCEAAQCFAABdBdQBeBeAACEQAACFheBdQhdBeiFAAQiEAAheheg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1,3,true).p("AgkjrIgrgFQAAghAXgXIAPgMQAMgIAOgCIAAA2IAfAAIAAg2QAPADANAJIANAKQAXAXAAAhIgoAFIAAArIgFASQARALgRAGQAQAMgRAGQAQALgSAGQAQAMgRAFQAQAMgRAGQAQALgSAGIAAAAIAAgBQgVAUgfAJIAAgBAgbhaIAAAAQAjgIAYgYIAAAAAAbg1QAQAMgRAGQAQALgRAGQAQAMgRAFQgUANgYAIIAAgBIgBAAAAchGQAQAMgRAFAgkigIAAhLAgeiJQgJgHADgQQAvgCAdgeAgchqQgRgFAQgKQgRgFAQgLAgahKIAAgBQgRgFAQgKQgRgFAQgLIAAABQAlgJAZgZAgWgLIAAAAQgRgFAQgLIAAAAQgRgFAQgLQgRgFAQgKQgRgFAQgLAgTAzIABAAQAWgHARgLAgTAzQgRgGAQgKQgRgFAQgLQgQgFAQgKQAagHAUgPAgUAjIABAAQAXgHATgMQAQALgSAGQAOAKgNAGQAMAKgOAFQAPALgRAGIgBAAQgOALgRAGQgTgFARgLQgQgFAQgKIAAgBQgTgFAQgKAgNBxQgSgFARgKAgQBSIABAAQASgGAPgLIACgBAAOCUQgMAHgMAFIAAAAIgBAAQgQgGAQgKIAAABIAagOQAQALgRAGQAPALgRAGQAQALgRAGIgSAJIAAAAIgBAAAgICvIAAABIAUgLIAAAAIAAAAIAAAAAgLCQQgQgEAMgJIADgCQgRgFAQgLQAQgGANgJQAOAKgNAGIgCABQgNAIgOAGAgICvQgTgFAQgKAgGDOIAAABIAQgIQAQALgSAFQAQAMgQAFQAOALgPAFQAPALgRAGIAAAAIAAABQAOALgPAGIgBAAIABgBIgFACIgBAAAgEDuQgSgFARgLIAAAAQgSgFARgLQgTgFARgKQgQgGAQgKAgED9IABAAIAKgFAABE9IgBgRQgSgFAQgLQgQgFAQgKQgSgFAQgLQgQgFAQgKAASBRQAPALgRAGAALC2QAQALgRAGAARByQAOALgQAGAAEEKIABAAAAFEJIgBABIgGADAADEsIAAAAIgBARIgBAAAAEEbQAPALgQAGIgBAAIABAAAACE9IgBACIAAgCAAojrQgnACglgCAAjiuQgZAcgoAJAAfhpQgXAWgiAJAgXgbQAdgIAVgSAAagjQgVAQgbAIAgZg6QAggJAXgUAgdh5QAngJAZgbAAWAxIgmASAAIDXIgNAHAAIDoQgHADgFADAAYgBQAQALgRAGAgVAEQgRgEAQgL");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AABE9IABAAIgBACgAAAEsQgSgFAQgLQgPgFAPgKQgSgFAQgLQgQgFAQgKQgSgFARgLIAAAAQgRgFAQgLIAAABIAQgIQAQALgSAFQAQAMgRAFQAPALgQAFQAPALgQAGIAAAAIgBABIgGADIAGgDIABAAIgBAAIABgBIAAABQAOALgPAGIgBAAIABgBIgFACIgBAAIABAAIAFgCIgBABIABAAIgBARIgBAAIABAAIgBAAIABAAIAAAAIgBARIgBAAgAgDD9IAJgFIgJAFIgBAAIABAAgAgEDuIALgGIgLAGgAgFDeIANgHgAgGDOQgSgFAQgKQgQgGAQgKIAAABIAUgLIgUALIAAgBQgTgFAQgKQgPgGAPgKIAAABIAZgOIgZAOIAAgBQgPgEAMgJIACgCQgRgFAQgLQgRgFAQgKQgSgFAQgLQgQgFAQgKIAAgBQgTgFAQgKIABAAQAWgHARgLQgRALgWAHIgBAAQgQgGAPgKQgQgFAPgLQgPgFAPgKQgRgEAQgLIAAAAQgRgFARgLIAAAAQgSgFARgLIAAABQAdgJAWgUIAAABIAAAAQAQAMgRAFQAQAMgRAGQAQALgSAGQAQAMgRAFQAQALgQAGQAPALgRAGQAOAKgNAGQAMAKgOAFQAOALgQAGIgBAAIAAAAIABAAQAOALgQAGQAOAKgOAGIgCABQgMAIgOAGQAOgGAMgIIACgBQAPALgRAGQAQALgQAGQgMAHgMAFIAAAAIgBAAIABAAIAAAAQAMgFAMgHQAPALgRAGQAQALgRAGIgSAJIAAAAIgBAAIABAAIAAAAIASgJQAQALgRAGIgQAIgAAMClIAAAAIAAAAgAgNBxQAPgGAOgJQgOAJgPAGgAgOBiQARgGAOgLQgOALgRAGgAgPBSQASgGAPgLIACgBIgCABQgPALgSAGIgBAAIABAAgAgQBDIAmgSgAgTAjQAXgHATgMQgTAMgXAHIgBAAIABAAgAgUAUQAYgIATgNQgTANgYAIIAAgBIgBAAIABAAIAAABIAAAAgAgVAEQAagHATgPQgTAPgaAHgAgWgLQAbgIAVgQQgVAQgbAIgAgWgbQAbgIAWgSQgWASgbAIgAgUAUgAgXgrQgSgFARgKQgSgFARgLIAAgBQgSgFAQgKQgRgFAQgLIAAABQAkgJAZgZQAQALgRAGQAQAMgRAFQAQAMgRAGQAQALgSAGIAAAAIAAgBQgWAUgdAJgAgYg6QAfgJAXgUQgXAUgfAJgAgZhKQAhgJAXgWQgXAWghAJgAgbhaQAjgIAXgYIABAAIgBAAQgXAYgjAIIAAAAgAgchqQgRgFAQgKQgRgFAQgLQgJgHADgQIAAhLIAlABIAngBIAAArQgeAeguACQAugCAegeIgFASQARALgSAGQARAMgSAGQgZAZgkAJgAgdh5QAmgJAZgbQgZAbgmAJgAgeiJQAogJAZgcQgZAcgoAJgAAojAgAABjqIglgBIgrgFQAAghAXgXIAPgMQAMgIAPgCIAAA2IAeAAIAAg2QAPADANAJIANAKQAXAXAAAhIgoAFIgnABIAAAAgAAojrg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-32.9,18,65.9);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjID6QhnhTgOiEQgPiDBThnQBThoCEgOQCDgPBnBTQBoBUAOCEQAPCChUBnQhTBoiEAOQgTACgSAAQhtAAhYhGg");
	this.shape.setTransform(5.9744,-1.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-34,64,64.1);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1,3,true).p("AANj3IAABOQAAGbAKgVIgFAmIgjAAIgFgmQAKAVAAmbIAAhOIAAgLIAZAAg");
	this.shape.setTransform(-0.35,26.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1,3,true).p("AgRkIIALAHIAKAJQAXAXAAAhIgBAOQgQC9AQC2IAaACIAZADQgQi1AQi9IABgOQAAghgXgXQgYgYggAAIgQACIgGABQgTAGgPAPQgYAXAAAhIAAACIABAMQARC8gQC1IBpgEAB4D/IAAgwIgqgJIgBAAAA0DDIAAAwIAZADIArAJIgrAGIhEAGAh3D9IAogHQBBgLBCAIAh3D9IAAgwIAogIAgQELIg/gGIgogI");
	this.shape_1.setTransform(0.025,-25.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgQEDIgGgmQAKAVAAmbIAAhOIAAgLIAYAAIAAALIAABOQAAGbAKgVIgEAmg");
	this.shape_2.setTransform(-0.35,26.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAJEAIgZAAIAAALIg/gGIgogIIAogHQBBgLBCAIIAZADIArAJIgrgJIgZgDIAAgwIAZADIABAAIAqAJIAAAwIgrAGIhEAGgAA0DDIgagCQgQi2AQi9IABgOQAAghgXgXIgKgJIgLgHIAQgCQAgAAAYAYQAXAXAAAhIgBAOQgQC9AQC1g");
	this.shape_3.setTransform(0.025,-25.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660033").s().p("AhVDTIAogIQAQi1gRi8IgBgMIAAgCQAAghAYgXQAPgQASgFIAGgBIALAGIALAJQAXAYAAAhIgBAOQgQC9AQC1IAaACIAAAxQhDgIhAAKIgoAIgAgtDLIBpgFg");
	this.shape_4.setTransform(-3.375,-25.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-53,26.1,106.1);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AC5FAIgGgBIi+gPIgpgDIgFgBIingNIgDAAIgEAAIgIgBIAAAAIgBAAIAAgBIAclYIAAgBIADgnIAAgBIASjaIAAgBIAAAAIAAAAIABAAIGtAiIABAAIABAAIgUEDIAAABIgcFYIgBAAIAAABgAjtEcIGrAiIAclVIhBgFIgOBrIgBABIgBAAIAAAAIgCgCIgIAHIAAAAIgBAAIgKgCIAAAAIAAgBIAFgxIABgPIgCgfIgBgFIgBAEIABACIgCAAIAAgCIgDgMIgBABIAAABIAAAAIgBABIgBgBIgBAAIAAgEIAAgBIglgFIgMAZIgBAAIgCAIQgCAPABAQQASARAJAXIAGARIACAUIAAABIggBDIAAABIgBAAIgEABIgBAAIAAABIgZAGIAAAAIgPgCIgBAAIgMgFIgPAQIAAAAIgMACIgBAAQgXAAgUgLIAAAAIAAgBIgBgEIAAgBQAghBAJgiIAMg3QACgVABgpIgugBIgmAAQg3gGg3gMgAhCCyIANAHIAQAEQAQAFALgLQAdgfAggbIABgHQgDgegVgVIgYgiIgSAZIACAIIAKgFQgYAagoBbgAACCtIAHAFIAFABIAPACIAZgGIAAAAIABgBIAYhFIgwAqIAGgCgABCBaIgIgfIAFAIIgIgYIAEAIIAAgFIgEgDIgKggIgJAAIgDgDIAEgCIAEgLIgfguIgRgFIgFAXIAAAHIADAFIABAJIACgJIACAYIgFgMIgGBAIASgbIAnAzIgMgTIAMABIAPAUIgDgIIAMARgAAyBUIgDgBQAAAFADgEgACDBJIAAAEIABAAIACgJgACIBGIABAAIAAgEIgBAEgACGA3QABAGAAgHgACGAiIgBAAQABAFAAgFgAArADIABgBIAAgCIgBADgAAsgHIACgHIAEgGIgEAMIAZgpIgRAgIAcguIgcgFQAQACAOgJIAWgPIgBgWIAIAKIAGgfIg8hhIAKAEIAtBNIAEgOQgWgrgigoIgIgHIgGgBQgMAOAEAQQAKAqAWAkIAPAYIADAMIgCAEIgBAAIgBgEIgDgHIgXAKIALgdIAAgHIgUAPIgJALIgBABIggAJIgBgBIgEALIAAgJIgNAFQAHgHAKgBIAAAAIABgBIAfgJIAZggIgMgZIgIgSIgGgQQgLgYAQgXIABAAIAAAAIAOgBIABAAIAFACIAPALQAOAOAHAQIAOgHIAAAAIABAAIALAFIARgEIAAAAIATAIIAAAAIABABIABAVIAMARIACAFIgBALIgJAtIgPBRIBAAFIAUj/ImrgjIgSDYIANAEICvArIAAAAIAGACIgFgdIgBgBIAAgBIAAgLIAAAAIAGgHIABgBIABAAIABABIAAAAIAAAAIgBABIgGAHIAAAKIABABIAAABIATAOIAAgLIAEAMIAWgJIgLAWIgDABIAZAlIAEgLgACGgMIAMgFIAJiCgABxgbIABAAIgBgBgACFgkQAAAFACgFIgBgCIgBACgABJglIAjgCIgIgPIACgTgAjPg9QBGAPBIABIAtgDIgrgLIiPglgABuhOIAAAAQgBAFABgFgABuhSQADAEgDgGgACMhlIADAFIAIhAgACJiDIgBAAQAAAIABgIgACkiHQABAHAAgHgACOiXIABgPIgCgEgACkifIAAACIABgEIgBACgACIi3IADAPIAFgWIAAAEIAOAAIAAgbIgDgBIgLAAIAAAQIgDgEIgBACIgCgJIgVgJIgHAEIAFALIgIgKIgFACIAOAgIAFADIgBgFIAMAAIgBgHgACPivIAFAFQAJgDgLgHIAAAAQgFAAACAFgACVi1QADAJADgGQACgDgEgBgAgKhlIABAAIAMAXg");
	this.shape.setTransform(0.05,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("AhcAKIABgiICNAjIArAMIgtACQhGAAhGgPg");
	this.shape_1.setTransform(-11.425,-7.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AjjCaIAclVQA3AMA3AGIAmAAIAuABQgBAqgCAVIgMA3QgJAiggBAIAAABIABAFIAAAAIAAAAQAUALAXAAIABAAIAMgBIAAgBIAPgQIAMAFIABAAIAPACIAAAAIAZgGIAAgBIABAAIAEgBIABAAIAAgBIAghCIAAgBIgCgUIgGgRQgJgWgSgRQgBgRACgQIACgIIABAAIAMgZIAlAFIAAABIAAAEIABABIABAAIABAAIAAgBIAAgBIABgBIADAMIAAACIACAAIgBgBIABgFIABAFIACAhIgBAOIgFAxIAAABIAAABIAKACIABAAIAAgBIAIgHIACACIAAAAIABAAIABgBIAOhsIBBAFIgcFVgAB7idIAAgBIABABg");
	this.shape_2.setTransform(-0.95,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7BC5B").s().p("AgGB4IADgFIgCAJIAAAAgAAAB1QAAgHAAAHgAgCBlIAAAAIAAAEIAAgEgAgDBRIAAAAIAAADIAAgDgAgDAKQACgEgBAEIgBADIAAgDgAgaggIAAAAIgBADIABgDgAgagjIAAgCIABADIgBgBgAAAhVIAAAAIAAAEIAAgEgAAbhYIABAAIAAADIgBgDgAADh7IADAEIgBAOgAAbhwQAAgBAAgBQABgBAAAAQAAABAAABQgBABAAABg");
	this.shape_3.setTransform(13.78,-4.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgPCIIADAIIgPgUIgMgBIAMASIgngyIgTAaIAGhAIAFAMIgCgYIgCAJIgBgKIgDgFIAAgGIAFgYIASAFIAfAvIgEALIgEACIADADIAJAAIAKAhIAIAYIgFgJIAIAfgAgWCRIADACIgCABQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBgBAAgBgAgOBqIAEACIAAAGgAgZBBIgBABQACgIgBAHgABVhUIgJCAIgMAFgAhWgTIAAgBIgBgBIAAgKIAGgGIABgBIABgBIAOgFIAAAKIgBATIAAAKgABGgnIALg6IgIBAgABJhwQgCgGAFAAQALAHgJADgABPh3IAEgBQAEABgCAEQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQgCAAgCgGgABKh7IAAgFIAAgHIAAgQIALAAIADABIAAAbg");
	this.shape_4.setTransform(7.05,-6.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E4A68B").s().p("AhMDdIgPgEIgOgHQAohbAYgaIgKAFIgBgIIASgZIAZAiQAUAVACAeIgBAHQgfAbgeAfQgHAIgKAAIgKgCgAgwC9IAAgCQgEAJAEgHgAgcCkIAUgcIAEgCIABgOgAgYDTIgEgBIgHgFIAjgcIgHACIAvgqIgXBFIgBABIAAAAIgYAGgAAADDIABAKIAAgKIACgDgAAGAFIgFALIgYgkIAEgBIALgWIgXAJIgDgMIAAgTIAFgLIABABIAegJIABgBIAJgLIAUgPIAAAHIgLAdIAYgKIACAHIABAEIABAAIADgEIgEgMIgOgYQgWgkgLgqQgCgQALgOIAGABIAHAHQAiAoAXArIgFAOIgthNIgKgEIA9BhIgHAfIgIgKIABAWIgVAPQgPAJgPgCIAcAFIgdAtIARgfIgYAoIADgMIgDAGIgCAHgAARgbQADAJgBgLgAAEgiIAGABIABgFgABiiXIgGgFIABAHIgLAAIAAAFIgFgDIgNggIAEgCIAIAKIgEgLIAHgEIAVAJIABAJIABgCIAEAEIAAAIIgGAWgABciwIgBAEIABAFQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAIAEgBIABgFIgBgEIgEgCg");
	this.shape_5.setTransform(3.9,-3.1825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCFFFF").s().p("ACLCLIAPhRIAJgtIAAgLIgCgDIgLgRIgBgWIgBAAIAAgBIgTgHIAAAAIgRAEIgMgFIAAAAIgBAAIgNAGQgHgPgOgOIgPgLIgGgDIAAAAIgOABIAAAAIgBABQgRAXAMAYIAGAPIAIATIAMAYIgZAgIgeAJIgBABIAAAAQgLAAgIAIIgBAAIAAgBIgBAAIgBABIgGAGIAAABIAAALIAAABIAAABIAGAcIgGgBIgBAAIiugsIgNgDIASjXIGrAjIgUD+gABXBjIgCATIAIAPIgjACg");
	this.shape_6.setTransform(1.575,-17.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYC2IAEgDIgCADIABAKgAhHCuIAAACIgDADIADgFgAgaBrIgCAOIgEACIgUAcgAgGgpIACgBIAAAGIgCgFgAgSgvIAGgEIgBAFgABEi0IgBgFIABgEIADgCIADACIABAEIgBAFIgDABQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAg");
	this.shape_7.setTransform(6.2875,-1.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-32,48.1,64.1);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AilDtQgRARgOAWQgTALgPgFIgRgMQgKgIgJAAIgDAAIgCAAIgDgEQgJgEgHACQgOgPAJgPIA6g6Qgsg7gJhOQgNh1BNhdQBMhdB6gNQAsgFApAHQBHAMA9AvQBbBJAQBwIACAJQANB2hNBcQhNBdh6AOQgRABgRAAQhaAAhMgzg");
	this.shape.setTransform(1.7178,-2.1636);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.2,-31,59.9,57.7);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1,3,true).p("AgRkhQALgJAOAAQARAAALAMQAMAMAAAQQAAARgMALQgIAJgLACIgJABQgQAAgMgMQgLgLAAgRQAAgQALgMIADgDIAKgBQAQAAALAMQAMAMAAAQQAAARgMALIgDADAhXkmQApgYA2AAQBDAAAuAjQAvAkAAAxQAAAygvAjQgQAMgSAIQgTAIgUAEIAAAEABXhdQgTAKgUAGIAAAyQgDASgQALQAEAPgEAPIAQAAQgLApALAqQgCAPgRAJQAIALgIAMQALgEAIAVQgLAvALAuQgGATgNAHIgSADQgLABgGAFIgBACIgCACIgEAAIAEgBIACgBAgQE3QgIACgEAGQgSAAgEgQIAAl5QgogIgfgXQgugjAAgyQAAgxAugkQAQgLASgIIgSALQguAkAAAxQAAAyAuAjQAfAXAoAIIAAF5QAEAOAOACg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgmElIAAl5QgngHgfgYQgugjgBgyQABgxAugjQAQgMARgIIgRALQgvAkAAAxQAAAyAvAjQAfAYAnAHIAAF5QAEAOAOABQgHACgEAHQgSAAgFgQgAAAEsIACgBIgCABgAAAhYQAKABALgVIAAGPQgMABgGAFIgBACIgCABgAAnCYQALgEAHAUQgLAwALAuQgFATgNAHgAAnhtQALAUAKgCIAAAFIAAAxQgCATgRALQAEAOgEAOIAQAAQgKAqAKAqQgCAPgQAJgAAVhsQg3AAgngdQgmgeAAgpIAAgFQCIBtCChtIABAFQAAApgoAeQgnAdg4AAgAAgjnQANgMAAgQQAAgRgNgMQgLgMgRAAIgIABQAKgIAPgBQAQAAALAMQAMAMAAARQAAAQgMAMQgIAIgKACg");
	this.shape_1.setTransform(-1.25,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgYE6IAEAAIAAAAgAgYE6QgOgBgEgOIAAl5QgogHgegYQgvgjAAgyQAAgxAvgkIARgLQApgYA2AAQBDAAAuAjQAvAkAAAxQAAAygvAjQgQANgTAHQgSAIgUAEQgLACgLgUIAADuIgBAAIAAAWIABABIAACIIgSADIAAmPIABAAQA3AAAngdQAogeAAgpIgBgFQiCBtiHhtIAAAFQgBApAnAeQAnAdA2AAQgJAVgLgBIAAGEIgEAAgAgYkdIgEADQgLAMAAARQAAAQALAMQANAMAPgBIAJgBQAKgCAJgIQAMgMAAgQQAAgRgMgMQgMgMgQAAQgOABgKAIgAgUE6g");
	this.shape_2.setTransform(0.8,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-17.8,-32.8,35.6,65.69999999999999), null);


(lib.Symbol298 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol223("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Symbol294 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol223("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Symbol289 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol223("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Symbol287 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol286("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol287, new cjs.Rectangle(-121,-121,242,242), null);


(lib.Symbol285 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol284();
	this.instance.setTransform(52,46.35,1,1,119.9999);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol284();
	this.instance_1.setTransform(-51.95,46.35,1,1,-119.9999);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_3
	this.instance_2 = new lib.Symbol284();
	this.instance_2.setTransform(0,-43.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AiMCOQg7g7AAhTQAAhSA7g7QA5g5BRgBIAFAAQBRABA5A5QA7A7AABSQAABTg7A7Qg6A6hTAAQhSAAg6g6g");
	this.shape.setTransform(0,16.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol285, new cjs.Rectangle(-96.6,-83.6,193.3,167.3), null);


(lib.Symbol276 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol223("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Symbol272 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol223("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Symbol269 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol178();
	this.instance.setTransform(-0.25,-5.85);
	this.instance.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAKIgEgFQACgDAIgCIARgBIAPABQAGACgBADIgKAFIgRACgAgKgGIgDgCIAFgDIAJAAIAJAAIACADIgFACIgJABg");
	this.shape.setTransform(0.04,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol176();
	this.instance_1.setTransform(0,3.15);
	this.instance_1.alpha = 0.4219;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgrASQgRgRgGgSQgGgUAXASQAXARAYAAQAXABAagWQAbgWgIAZQgIAXgSAPQgTAPgXABIgCAAQgXAAgQgQg");
	this.shape_1.setTransform(0.0057,0.0074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol174("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.4,16.8,16.8);


(lib.Symbol267 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol178();
	this.instance.setTransform(-0.25,-5.85);
	this.instance.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAKIgEgFQACgDAIgCIARgBIAPABQAGACgBADIgKAFIgRACgAgKgGIgDgCIAFgDIAJAAIAJAAIACADIgFACIgJABg");
	this.shape.setTransform(0.04,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol176();
	this.instance_1.setTransform(0,3.15);
	this.instance_1.alpha = 0.4219;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgrASQgRgRgGgSQgGgUAXASQAXARAYAAQAXABAagWQAbgWgIAZQgIAXgSAPQgTAPgXABIgCAAQgXAAgQgQg");
	this.shape_1.setTransform(0.0057,0.0074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol174("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.4,16.8,16.8);


(lib.Symbol266 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol178();
	this.instance.setTransform(-0.25,-5.85);
	this.instance.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAKIgEgFQACgDAIgCIARgBIAPABQAGACgBADIgKAFIgRACgAgKgGIgDgCIAFgDIAJAAIAJAAIACADIgFACIgJABg");
	this.shape.setTransform(0.04,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol176();
	this.instance_1.setTransform(0,3.15);
	this.instance_1.alpha = 0.4219;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgrASQgRgRgGgSQgGgUAXASQAXARAYAAQAXABAagWQAbgWgIAZQgIAXgSAPQgTAPgXABIgCAAQgXAAgQgQg");
	this.shape_1.setTransform(0.0057,0.0074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol174("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.4,16.8,16.8);


(lib.Symbol264 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol178();
	this.instance.setTransform(-0.25,-5.85);
	this.instance.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAKIgEgFQACgDAIgCIARgBIAPABQAGACgBADIgKAFIgRACgAgKgGIgDgCIAFgDIAJAAIAJAAIACADIgFACIgJABg");
	this.shape.setTransform(0.04,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol176();
	this.instance_1.setTransform(0,3.15);
	this.instance_1.alpha = 0.4219;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgrASQgRgRgGgSQgGgUAXASQAXARAYAAQAXABAagWQAbgWgIAZQgIAXgSAPQgTAPgXABIgCAAQgXAAgQgQg");
	this.shape_1.setTransform(0.0057,0.0074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol174("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.4,16.8,16.8);


(lib.Symbol262 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol178();
	this.instance.setTransform(-0.25,-5.85);
	this.instance.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAKIgEgFQACgDAIgCIARgBIAPABQAGACgBADIgKAFIgRACgAgKgGIgDgCIAFgDIAJAAIAJAAIACADIgFACIgJABg");
	this.shape.setTransform(0.04,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol176();
	this.instance_1.setTransform(0,3.15);
	this.instance_1.alpha = 0.4219;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgrASQgRgRgGgSQgGgUAXASQAXARAYAAQAXABAagWQAbgWgIAZQgIAXgSAPQgTAPgXABIgCAAQgXAAgQgQg");
	this.shape_1.setTransform(0.0057,0.0074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol174("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.4,16.8,16.8);


(lib.Symbol261 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol178();
	this.instance.setTransform(-0.25,-5.85);
	this.instance.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAKIgEgFQACgDAIgCIARgBIAPABQAGACgBADIgKAFIgRACgAgKgGIgDgCIAFgDIAJAAIAJAAIACADIgFACIgJABg");
	this.shape.setTransform(0.04,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol176();
	this.instance_1.setTransform(0,3.15);
	this.instance_1.alpha = 0.4219;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgrASQgRgRgGgSQgGgUAXASQAXARAYAAQAXABAagWQAbgWgIAZQgIAXgSAPQgTAPgXABIgCAAQgXAAgQgQg");
	this.shape_1.setTransform(0.0057,0.0074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol174("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.4,16.8,16.8);


(lib.Symbol259 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol178();
	this.instance.setTransform(-0.25,-5.85);
	this.instance.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAKIgEgFQACgDAIgCIARgBIAPABQAGACgBADIgKAFIgRACgAgKgGIgDgCIAFgDIAJAAIAJAAIACADIgFACIgJABg");
	this.shape.setTransform(0.04,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol176();
	this.instance_1.setTransform(0,3.15);
	this.instance_1.alpha = 0.4219;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgrASQgRgRgGgSQgGgUAXASQAXARAYAAQAXABAagWQAbgWgIAZQgIAXgSAPQgTAPgXABIgCAAQgXAAgQgQg");
	this.shape_1.setTransform(0.0057,0.0074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol174("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.4,16.8,16.8);


(lib.Symbol257 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol178();
	this.instance.setTransform(-0.25,-5.85);
	this.instance.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAKIgEgFQACgDAIgCIARgBIAPABQAGACgBADIgKAFIgRACgAgKgGIgDgCIAFgDIAJAAIAJAAIACADIgFACIgJABg");
	this.shape.setTransform(0.04,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol176();
	this.instance_1.setTransform(0,3.15);
	this.instance_1.alpha = 0.4219;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgrASQgRgRgGgSQgGgUAXASQAXARAYAAQAXABAagWQAbgWgIAZQgIAXgSAPQgTAPgXABIgCAAQgXAAgQgQg");
	this.shape_1.setTransform(0.0057,0.0074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol174("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.4,16.8,16.8);


(lib.Symbol256 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol178();
	this.instance.setTransform(-0.25,-5.85);
	this.instance.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAKIgEgFQACgDAIgCIARgBIAPABQAGACgBADIgKAFIgRACgAgKgGIgDgCIAFgDIAJAAIAJAAIACADIgFACIgJABg");
	this.shape.setTransform(0.04,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol176();
	this.instance_1.setTransform(0,3.15);
	this.instance_1.alpha = 0.4219;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgrASQgRgRgGgSQgGgUAXASQAXARAYAAQAXABAagWQAbgWgIAZQgIAXgSAPQgTAPgXABIgCAAQgXAAgQgQg");
	this.shape_1.setTransform(0.0057,0.0074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol174("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.4,16.8,16.8);


(lib.Symbol255 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol178();
	this.instance.setTransform(-0.25,-5.85);
	this.instance.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAKIgEgFQACgDAIgCIARgBIAPABQAGACgBADIgKAFIgRACgAgKgGIgDgCIAFgDIAJAAIAJAAIACADIgFACIgJABg");
	this.shape.setTransform(0.04,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol176();
	this.instance_1.setTransform(0,3.15);
	this.instance_1.alpha = 0.4219;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgrASQgRgRgGgSQgGgUAXASQAXARAYAAQAXABAagWQAbgWgIAZQgIAXgSAPQgTAPgXABIgCAAQgXAAgQgQg");
	this.shape_1.setTransform(0.0057,0.0074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol174("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.4,16.8,16.8);


(lib.Symbol254 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol178();
	this.instance.setTransform(-0.25,-5.85);
	this.instance.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAKIgEgFQACgDAIgCIARgBIAPABQAGACgBADIgKAFIgRACgAgKgGIgDgCIAFgDIAJAAIAJAAIACADIgFACIgJABg");
	this.shape.setTransform(0.04,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol176();
	this.instance_1.setTransform(0,3.15);
	this.instance_1.alpha = 0.4219;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgrASQgRgRgGgSQgGgUAXASQAXARAYAAQAXABAagWQAbgWgIAZQgIAXgSAPQgTAPgXABIgCAAQgXAAgQgQg");
	this.shape_1.setTransform(0.0057,0.0074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol174("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.4,16.8,16.8);


(lib.Symbol253 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol178();
	this.instance.setTransform(-0.25,-5.85);
	this.instance.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAKIgEgFQACgDAIgCIARgBIAPABQAGACgBADIgKAFIgRACgAgKgGIgDgCIAFgDIAJAAIAJAAIACADIgFACIgJABg");
	this.shape.setTransform(0.04,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol176();
	this.instance_1.setTransform(0,3.15);
	this.instance_1.alpha = 0.4219;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgrASQgRgRgGgSQgGgUAXASQAXARAYAAQAXABAagWQAbgWgIAZQgIAXgSAPQgTAPgXABIgCAAQgXAAgQgQg");
	this.shape_1.setTransform(0.0057,0.0074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol174("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.4,16.8,16.8);


(lib.Symbol251 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.part9 = new lib.Symbol246();
	this.part9.name = "part9";
	this.part9.setTransform(25.35,-15.1,0.1121,0.1121,-59.9968);

	this.timeline.addTween(cjs.Tween.get(this.part9).wait(1));

	// Layer_2
	this.part8 = new lib.Symbol246();
	this.part8.name = "part8";
	this.part8.setTransform(23.95,-12.7,0.1121,0.1121,-59.9968);

	this.timeline.addTween(cjs.Tween.get(this.part8).wait(1));

	// Layer_3
	this.part7 = new lib.Symbol246();
	this.part7.name = "part7";
	this.part7.setTransform(22.55,-10.25,0.1121,0.1121,-59.9968);

	this.timeline.addTween(cjs.Tween.get(this.part7).wait(1));

	// Layer_4
	this.part6 = new lib.Symbol246();
	this.part6.name = "part6";
	this.part6.setTransform(21.15,-7.85,0.1121,0.1121,-59.9968);

	this.timeline.addTween(cjs.Tween.get(this.part6).wait(1));

	// Layer_5
	this.part5 = new lib.Symbol246();
	this.part5.name = "part5";
	this.part5.setTransform(19.75,-5.4,0.1121,0.1121,-59.9968);

	this.timeline.addTween(cjs.Tween.get(this.part5).wait(1));

	// Layer_6
	this.part4 = new lib.Symbol246();
	this.part4.name = "part4";
	this.part4.setTransform(18.35,-3,0.1121,0.1121,-59.9968);

	this.timeline.addTween(cjs.Tween.get(this.part4).wait(1));

	// Layer_7
	this.part3 = new lib.Symbol246();
	this.part3.name = "part3";
	this.part3.setTransform(16.95,-0.55,0.1121,0.1121,-59.9968);

	this.timeline.addTween(cjs.Tween.get(this.part3).wait(1));

	// Layer_8
	this.part2 = new lib.Symbol246();
	this.part2.name = "part2";
	this.part2.setTransform(15.55,1.85,0.1121,0.1121,-59.9968);

	this.timeline.addTween(cjs.Tween.get(this.part2).wait(1));

	// Layer_9
	this.part1 = new lib.Symbol246();
	this.part1.name = "part1";
	this.part1.setTransform(14.15,4.3,0.1121,0.1121,-59.9968);

	this.timeline.addTween(cjs.Tween.get(this.part1).wait(1));

	// Layer_10
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("AEbiJIiMDyIgkgVIiLDzIj6iQIEmn9ID5CQIgOAYg");
	this.shape.setTransform(3.3,-0.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("AkZC3IEln9ID4CQIgNAYIAkAVIiNDyIgkgVIiLDzg");
	this.shape_1.setTransform(3.3,-0.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol251, new cjs.Rectangle(-25.9,-34.6,58.5,67.30000000000001), null);


(lib.Symbol249 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol223("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Symbol247 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.part9 = new lib.Symbol246();
	this.part9.name = "part9";
	this.part9.setTransform(232.75,106.5,1.0953,1.0953);

	this.timeline.addTween(cjs.Tween.get(this.part9).wait(1));

	// Layer_2
	this.part8 = new lib.Symbol246();
	this.part8.name = "part8";
	this.part8.setTransform(205.4,106.5,1.0953,1.0953);

	this.timeline.addTween(cjs.Tween.get(this.part8).wait(1));

	// Layer_3
	this.part7 = new lib.Symbol246();
	this.part7.name = "part7";
	this.part7.setTransform(178,106.5,1.0953,1.0953);

	this.timeline.addTween(cjs.Tween.get(this.part7).wait(1));

	// Layer_4
	this.part6 = new lib.Symbol246();
	this.part6.name = "part6";
	this.part6.setTransform(150.6,106.5,1.0953,1.0953);

	this.timeline.addTween(cjs.Tween.get(this.part6).wait(1));

	// Layer_5
	this.part5 = new lib.Symbol246();
	this.part5.name = "part5";
	this.part5.setTransform(123.2,106.5,1.0953,1.0953);

	this.timeline.addTween(cjs.Tween.get(this.part5).wait(1));

	// Layer_6
	this.part4 = new lib.Symbol246();
	this.part4.name = "part4";
	this.part4.setTransform(95.85,106.5,1.0953,1.0953);

	this.timeline.addTween(cjs.Tween.get(this.part4).wait(1));

	// Layer_7
	this.part3 = new lib.Symbol246();
	this.part3.name = "part3";
	this.part3.setTransform(68.45,106.5,1.0953,1.0953);

	this.timeline.addTween(cjs.Tween.get(this.part3).wait(1));

	// Layer_8
	this.part2 = new lib.Symbol246();
	this.part2.name = "part2";
	this.part2.setTransform(41.1,106.5,1.0953,1.0953);

	this.timeline.addTween(cjs.Tween.get(this.part2).wait(1));

	// Layer_9
	this.part1 = new lib.Symbol246();
	this.part1.name = "part1";
	this.part1.setTransform(13.65,106.5,1.0953,1.0953);

	this.timeline.addTween(cjs.Tween.get(this.part1).wait(1));

	// Layer_10
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("EAopAZIMgqxAAAIAAmWMgqyAAAMAAAgr5MBZ1AAAMAAAAr5IkSAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("AiIZHIAAmVMgqyAAAMAAAgr4MBZ1AAAMAAAAr4IkSAAIAAGVg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol247, new cjs.Rectangle(-288.5,-161.7,577.1,323.5), null);


(lib.Symbol243 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol223("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Symbol241 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol223("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Symbol237 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol223("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Symbol232 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol223("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Symbol229 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol223("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Symbol224 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol223("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Symbol219 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol218();
	this.instance.setTransform(-8.6,23.6,0.7843,0.5724,0,171.1584,160.5103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol218();
	this.instance_1.setTransform(-24.6,10.05,0.7475,0.6226,0,3.3227,-2.7683);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:true},1).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAXgXIAlAAIAAAvIglAAIAAAkIguAAIAAgkIAAgvIAAgkIAuAAIAAAkIAAAvAgXAYIgkAAIAAgvIAkAA");
	this.shape.setTransform(-0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996666").s().p("AgXA8IAAgkIAAgvIAAgkIAuAAIAAAkIAAAvIAAAkgAAXAYIAAgvIAlAAIAAAvgAAXAYgAg7AYIAAgvIAkAAIAAAvg");
	this.shape_1.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	// Layer 5
	this.instance_2 = new lib.Symbol216();
	this.instance_2.setTransform(14.45,-1.4);
	this.instance_2.alpha = 0.8398;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAXgXIAlAAIAAAvIglAAIAAAkIguAAIAAgkIAAgvIAAgkIAuAAIAAAkIAAAvAgXAYIgkAAIAAgvIAkAA");
	this.shape_2.setTransform(-0.025,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996666").s().p("AgXA8IAAgkIAAgvIAAgkIAuAAIAAAkIAAAvIAAAkgAAXAYIAAgvIAlAAIAAAvgAAXAYgAg7AYIAAgvIAkAAIAAAvg");
	this.shape_3.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// Layer 6
	this.instance_3 = new lib.Symbol213();
	this.instance_3.setTransform(14.45,-1.4);
	this.instance_3.alpha = 0.8398;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(1));

	// Layer 7
	this.instance_4 = new lib.Symbol212();

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADkBRQAtg2APhgQAOhig7hFQg7hEhsAQQhqAPg3AyQBShPBlgPQBqgOBABAQBABAgPBqQgOBihLBRIgCADIgCACQgNAagmACQiYBaiCBwQgLALglgXQgggSgjghIgOgOQgcgcgTgaIgTgbQgWgmAKgKQByiCBZiYIAUAjIAFAHQAmA1A/BAQA+A9AzAlIAFADQAaATAQAHADkBRQADgOghguQglgzhBhBIgrgpQgngkgigZQg1gmgKALIgCACQgFAKAWAhIAMASQAlA1BABBIAGAGQA9A7AyAkIAGAEQArAeANgFADkBSIgFAEIAFgFAhxirQADgtAZgG");
	this.shape_4.setTransform(0.0169,-0.0169);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCCCCC").ss(1,1,1,3,true).p("AAAgKIAAAV");
	this.shape_5.setTransform(5.075,-2.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AA5BFQADgHAIgHIAQgIIALACQAEADgEAGIgMAKIgPAKIgLABQgDgDADgHgAhegkQgDgEACgIQABgJAGgIQAGgIAHgDQAHgEADAEQAEADgCAJQgCAIgGAIIgNAMIgFACQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_6.setTransform(-16.5797,16.9625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663333").s().p("ABvDGQAtg2APhhQAOhhg7hFQg7hEhrAQQhrAPg3AyQBShPBmgPQBpgOBABAQBABAgPBpQgOBjhLBRIgFAEg");
	this.shape_7.setTransform(11.7089,-11.7339);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AAcBWIgFgEQgygkg9g7QAmgfgjhDIArApQA/BAAmA0QAgAugDAOIgEAFIAEgFIgCAEIgCABIgEABQgPAAglgag");
	this.shape_8.setTransform(13.9627,-2.483);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AhtEDQgggTgjghQCEgNDaiaIAFADQAaATAQAHQiYBaiCBwQgDADgGAAQgOAAgZgPgAgxCzQgIAGgDAHQgDAHADADIALAAIAPgKIAMgLQAEgFgEgEIgLgBgAkABxQgWgmAKgLQByiCBZiXIAUAiQjGECAGBAgADdBFQgQgHgagTIgFgDQAggCAKgXQArAfANgGQgNAbgmACIAAAAgACuAogABdhaQhBhAgkg1IgMgSQgWAPgDAbIgUgiQADgtAZgGIgBAEQAAAMASAbQgSgbAAgMIABgEIACgCQAKgLA0AmQAjAYAnAlQAkBDgmAfgAgti3g");
	this.shape_9.setTransform(-4.792,4.6436);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AizDLQgcgcgTgaQgFhADGkCQACgbAWgQIALASQAmA1BABBIAGAGQA9A8AzAjIAFAEQgKAWgfACQg0glg9g9QhBhAgkg1IgFgHIAFAHQAkA1BBBAQA9A9A0AlQjaCaiEAOgAi2A4QgHADgFAIQgGAIgCAJQgCAIAEAEQADADAHgDIANgMQAFgIACgIQACgJgDgDQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgGACgABug0IAAgWgAC6AxIAAAAg");
	this.shape_10.setTransform(-5.9074,3.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-33,66,66.1);


(lib.Symbol208 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol206("synched",0);

	this.instance_1 = new lib.Symbol207("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.4,-31.6,66,66.1);


(lib.Symbol203 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol201();

	this.instance_1 = new lib.Symbol202("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.7,-95,183.9,183.8);


(lib.Symbol197 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol196();
	this.instance.setTransform(12.7,11.35,0.9132,1);

	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(-8,-50.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer 2
	this.instance_2 = new lib.Symbol194("synched",0);
	this.instance_2.setTransform(33.15,11.8,0.8127,1,0,0,-31.6715);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 3
	this.instance_3 = new lib.Symbol194("synched",0);
	this.instance_3.setTransform(-19.2,11.8,1.137,1,0,0,6.5409);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 4
	this.instance_4 = new lib.Symbol193("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-83.8,90.4,167.7);


(lib.Symbol189 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol188();
	this.instance.setTransform(-4.15,2.7,0.999,0.999,0,70.9341,-109.0659);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9979,scaleY:0.9979,skewX:70.4706,skewY:-109.5294,x:-4.25,y:2.8},0).wait(1).to({skewX:70.1647,skewY:-109.8353,x:-4.2,y:2.75},0).wait(1).to({skewX:69.6738,skewY:-110.3262,x:-4.3},0).wait(1).to({scaleX:0.9978,scaleY:0.9978,skewX:69.1829,skewY:-110.8171,x:-4.35,y:2.8},0).wait(1).to({scaleX:0.9977,scaleY:0.9977,skewX:68.6884,skewY:-111.3116,x:-4.4,y:2.75},0).wait(1).to({skewX:68.1963,skewY:-111.8037,y:2.8},0).wait(1).to({scaleX:0.9976,scaleY:0.9976,skewX:67.7045,skewY:-112.2955,x:-4.5},0).wait(1).to({skewX:67.2127,skewY:-112.7873},0).wait(1).to({skewX:66.9089,skewY:-113.0911,x:-4.6},0).wait(1).to({scaleX:0.9975,scaleY:0.9975,skewX:66.4167,skewY:-113.5833,x:-4.65},0).wait(1).to({skewX:65.9236,skewY:-114.0764},0).wait(1).to({scaleX:0.9974,scaleY:0.9974,skewX:65.4306,skewY:-114.5694,x:-4.75},0).wait(1).to({skewX:64.9385,skewY:-115.0615,y:2.85},0).wait(1).to({scaleX:0.9986,scaleY:0.9986,skewX:64.4256,skewY:-115.5744,x:-4.9,y:2.8},0).wait(1).to({scaleX:0.9974,scaleY:0.9974,skewX:64.931,skewY:-115.069,x:-4.8,y:2.75},0).wait(1).to({skewX:65.4149,skewY:-114.585,x:-4.75},0).wait(1).to({scaleX:0.9975,scaleY:0.9975,skewX:65.7118,skewY:-114.2882,y:2.8},0).wait(1).to({skewX:66.1966,skewY:-113.8034,y:2.75},0).wait(1).to({scaleX:0.9976,scaleY:0.9976,skewX:66.682,skewY:-113.318,x:-4.65},0).wait(1).to({skewX:67.1656,skewY:-112.8344,y:2.7},0).wait(1).to({skewX:67.4637,skewY:-112.5363,x:-4.55,y:2.75},0).wait(1).to({scaleX:0.9977,scaleY:0.9977,skewX:67.9477,skewY:-112.0523,x:-4.5},0).wait(1).to({skewX:68.4319,skewY:-111.5681,x:-4.45,y:2.7},0).wait(1).to({scaleX:0.9978,scaleY:0.9978,skewX:68.9168,skewY:-111.0832,x:-4.4,y:2.75},0).wait(1).to({skewX:69.2128,skewY:-110.7872},0).wait(1).to({skewX:69.6967,skewY:-110.3033,x:-4.3,y:2.7},0).wait(1).to({scaleX:0.9979,scaleY:0.9979,skewX:70.1819,skewY:-109.8181,x:-4.25,y:2.75},0).wait(1).to({skewX:70.6671,skewY:-109.3329,x:-4.15},0).wait(1).to({scaleX:0.999,scaleY:0.999,skewX:70.9341,skewY:-109.0659,y:2.7},0).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol188();
	this.instance_1.setTransform(2.4,8,0.9997,0.9997,5.0578);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.9994,scaleY:0.9994,rotation:5.5358,x:2.45,y:8.05},0).wait(1).to({scaleX:0.9993,scaleY:0.9993,rotation:6.0531,y:8.1},0).wait(1).to({scaleX:0.9992,scaleY:0.9992,rotation:6.7597,y:8.15},0).wait(1).to({scaleX:0.9991,scaleY:0.9991,rotation:7.2787,x:2.5,y:8.25},0).wait(1).to({rotation:7.7981,x:2.4,y:8.3},0).wait(1).to({scaleX:0.999,scaleY:0.999,rotation:8.3148,x:2.45,y:8.4},0).wait(1).to({rotation:9.0226,y:8.35},0).wait(1).to({scaleX:0.9989,scaleY:0.9989,rotation:9.542,x:2.5,y:8.5},0).wait(1).to({scaleX:0.9988,scaleY:0.9988,rotation:10.0598},0).wait(1).to({rotation:10.7669,y:8.6},0).wait(1).to({scaleX:0.9987,scaleY:0.9987,rotation:11.2849,x:2.55,y:8.7},0).wait(1).to({rotation:11.8039,x:2.5,y:8.75},0).wait(1).to({scaleX:0.9986,scaleY:0.9986,rotation:12.5106,y:8.8},0).wait(1).to({scaleX:0.9993,scaleY:0.9993,rotation:13.0832,y:8.85},0).wait(1).to({scaleX:0.9986,scaleY:0.9986,rotation:12.5212},0).wait(1).to({rotation:12.0118,x:2.45,y:8.75},0).wait(1).to({scaleX:0.9987,scaleY:0.9987,rotation:11.3134,y:8.65},0).wait(1).to({scaleX:0.9988,scaleY:0.9988,rotation:10.8054},0).wait(1).to({rotation:10.2955,y:8.6},0).wait(1).to({scaleX:0.9989,scaleY:0.9989,rotation:9.7861,x:2.5,y:8.5},0).wait(1).to({scaleX:0.999,scaleY:0.999,rotation:9.2773},0).wait(1).to({rotation:8.768,x:2.45,y:8.35},0).wait(1).to({scaleX:0.9991,scaleY:0.9991,rotation:8.2578,x:2.5},0).wait(1).to({scaleX:0.9992,scaleY:0.9992,rotation:7.5602,x:2.45,y:8.25},0).wait(1).to({rotation:7.0525,x:2.5},0).wait(1).to({scaleX:0.9993,scaleY:0.9993,rotation:6.5427,x:2.45,y:8.15},0).wait(1).to({rotation:6.0337,y:8.1},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,rotation:5.526,y:8},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:5.0578,x:2.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-38.4,78.6,78.6);


(lib.Symbol184 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol182("synched",0);

	this.instance_1 = new lib.Symbol183("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.9,-32.9,65.9,65.9);


(lib.Symbol179 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol178();
	this.instance.setTransform(-0.25,-5.85);
	this.instance.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAKIgEgFQACgDAIgCIARgBIAPABQAGACgBADIgKAFIgRACgAgKgGIgDgCIAFgDIAJAAIAJAAIACADIgFACIgJABg");
	this.shape.setTransform(0.04,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol176();
	this.instance_1.setTransform(0,3.15);
	this.instance_1.alpha = 0.4219;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgrASQgRgRgGgSQgGgUAXASQAXARAYAAQAXABAagWQAbgWgIAZQgIAXgSAPQgTAPgXABIgCAAQgXAAgQgQg");
	this.shape_1.setTransform(0.0057,0.0074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol174("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.4,16.8,16.8);


(lib.Symbol171 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol170();

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("ACDjLIARgSIASAQIgRASIAhAmIAnA+Ig4A7IgKgJQAagjgFggQgFgggjgmIhfBlIADAIQAgBbAEAhQAEAjgXAZQgXAYgogCIgLAAQgkgFgogZIgZgTIAAAAIgYAZIgSgQIAYgZIgrgxIgmg3IA1g4IAMAKQgXAeAHAiQAHAhAlAoIBuh0QgkhUAAgnQAAgdAVgWQAXgYAqAFQAmADAsAhgABCjWQgXgCgOAPQgIAIgDALQgDAIAAAMQAAAJADAOQAEASAJAYIBXhdIgagQQgOgHgMgBgAk8AAIgDgZIAAgOQAAh0BdhSQBehSCEAAQCFAABdBSQBeBSAAB0IAAANIgDAaIACAOIgCBCQgNBbhOBDQhdBSiFAAQiEAAhehSQhNhDgNhbIgChCIACgOQANBbBNBDQBeBSCEAAQCFAABdhSQBOhDANhbAAVA2QAAgWgWg8IhlBrIAEADIAiASIApAEIAVgHIAKgJQAMgNABgVg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1,3,true).p("AFAg1IgBApIABAaIgDAoAk8A2IgDgoIABgaIgBgo");
	this.shape_1.setTransform(0,2.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#000000"],[0,1],13.2,-1.6,0,13.2,-1.6,79.5).s().p("AhHCbIgjgSIgDgDIBlhsQAVA9AAAWQAAAVgMANIgKAJIgVAHgAAKhUQgDgNAAgKQAAgLADgJQAEgKAHgIQAPgQAWADQAMABAOAGIAaARIhXBcQgJgYgEgSg");
	this.shape_2.setTransform(0.75,-5.5424);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#000000"],[0,1],3.7,-2,0,3.7,-2,55).s().p("AgGDCIgKAAQglgFgngZIgagTIAAAAIgYAZIgRgQIAYgZIgsgxIglg3IA1g4IALALQgWAdAHAhQAGAiAmAoIBth0QgjhTAAgoQAAgdAUgVQAXgZAqAFQAmAEAsAhIAJAGIARgSIASAQIgRASIAhAnIAnA9Ig4A7IgKgKQAagigFgfQgFghgjglIhfBlIADAIQAgBaAEAhQAEAjgXAZQgWAWgkAAIgFAAgAhqCEIAEADIAjASIApAEIAUgHIAKgJQAMgNABgVQAAgWgVg9gAAZiTQgIAIgDAKQgDAJAAALQAAAKADANQAEASAJAYIBXhcIgagRQgOgGgMgBIgGAAQgTAAgMANg");
	this.shape_3.setTransform(0.375,-5.338);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","#000000"],[0,1],0.3,11.4,0,0.3,11.4,42.2).s().p("AjiBOQhNhDgNhaIgChCIACgOQANBbBNBDQBeBRCEAAQCEAABehRQBNhDAOhbIACAOIgCBCQgOBahNBDQheBSiEAAQiEAAhehSg");
	this.shape_4.setTransform(0.025,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#000000"],[0,1],8,-12,0,8,-12,68.4).s().p("AjiDGQhMhDgOhbIgDgaIAAgOQAAhzBdhSQBehSCEAAQCFAABdBSQBeBSAABzIAAANIgDAbQgNBbhOBDQhdBSiFAAQiEAAhehSgAhyCEIAaATQAnAZAkAEIALABQAoABAWgXQAXgagDgiQgEghghhbIgDgIIBghlQAiAmAGAhQAEAfgZAiIAKAJIA4g6Igng9IgignIASgSIgSgQIgRASIgJgHQgtggglgEQgqgFgXAYQgUAWgBAdQAAAnAkBVIhuByQglgogHghQgGghAWgeIgLgKIg1A3IAlA4IAsAxIgZAZIASAQIAYgZg");
	this.shape_5.setTransform(0,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-33,66,66);


(lib.Symbol166 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol165();
	this.instance.setTransform(0,0,1,1.0437,0,16.6408,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1,3,true).p("AC3k/QATABAOAOQANANACARIAAAFIAAIbIAAAFQgCARgNANQgOAOgTABIlsAAQgUgBgPgOQgOgPAAgUIAAobQAAgUAOgPQAPgOAUgBgAiykJQgPAPAAAVIAACMQAAAUAPAPQAPAPAUAAIA8AAQAVAAAOgPQAPgPAAgUIAAiMQAAgVgPgPQgOgOgVAAIg8AAQgUAAgPAOgAhQiGQAAAUgKAOQgLAOgOAAQgPAAgKgOQgLgOABgUQgBgTALgOQAKgPAPABQAOgBALAPQAKAOAAATg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1,3,true).p("AB9iPIj5AAQgLgBgHAIQgHAHAAAKQAAAKAHAHQAHAIALAAID5AAQAKAAAHgIQAIgHAAgKQAAgKgIgHQgHgIgKABgAh8BVID5AAQAKAAAHgIQAIgHAAgKQAAgKgIgHQgHgIgKABIj5AAQgLgBgHAIQgHAHAAAKQAAAKAHAHQAHAIALAAgAh8giID5AAQAKAAAHgIQAIgHAAgKQAAgKgIgHQgHgIgKABIj5AAQgLgBgHAIQgHAHAAAKQAAAKAHAHQAHAIALAAgAiOgQQgHAHAAAJQAAAKAHAHQAHAIALAAID5AAQAKAAAHgIQAIgHAAgKQAAgJgIgHQgHgIgKABIj5AAQgLgBgHAIgAiOBnQgHAHAAAKQAAAKAHAHQAHAIALAAID5AAQAKAAAHgIQAIgHAAgKQAAgKgIgHQgHgIgKABIj5AAQgLgBgHAIg");
	this.shape_1.setTransform(6.8234,13.1484);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(1,1,1,3,true).p("AgdFAIAMAAQASgBAOgOQANgNACgRIAAgFIAAobIAAgFQgCgRgNgNQgOgOgSgBIgMAA");
	this.shape_2.setTransform(21.325,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("ACJFAQATgBAOgOQANgNACgRIAAgFIAAobIAAgFQgCgRgNgNQgOgOgTgBIAMAAQATABAOAOQANANACARIAAAFIAAIbIAAAFQgCARgNANQgOAOgTABgAhmEUQgLAAgHgIQgHgHAAgKQAAgKAHgHQAHgIALABID5AAQAKgBAHAIQAIAHAAAKQAAAKgIAHQgHAIgKAAgAhmDYQgLAAgHgIQgHgHAAgKQAAgKAHgHQAHgIALABID5AAQAKgBAHAIQAIAHAAAKQAAAKgIAHQgHAIgKAAgAhmCcQgLAAgHgIQgHgHAAgKQAAgKAHgHQAHgIALABID5AAQAKgBAHAIQAIAHAAAKQAAAKgIAHQgHAIgKAAgAhmBgQgLAAgHgIQgHgHAAgKQAAgKAHgHQAHgIALABID5AAQAKgBAHAIQAIAHAAAKQAAAKgIAHQgHAIgKAAgAhmAkQgLAAgHgIQgHgHAAgKQAAgKAHgGQAHgIALABID5AAQAKgBAHAIQAIAGAAAKQAAAKgIAHQgHAIgKAAgAi6hkQgLgOABgUQgBgTALgOQAKgPAPABQAOgBALAPQAKAOAAATQAAAUgKAOQgLAOgOAAQgPAAgKgOg");
	this.shape_3.setTransform(4.6239,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC3333").s().p("Ai1FAQgUgBgPgOQgOgPAAgUIAAobQAAgUAOgPQAPgOAUgBIFsAAQATABAOAOQANANACARIAAAFIAAIbIAAAFQgCARgNANQgOAOgTABgAhKDqQgHAHAAAKQAAAKAHAHQAHAIALAAID5AAQAKAAAHgIQAIgHAAgKQAAgKgIgHQgHgIgKABIj5AAIgCAAQgJAAgHAHgAhKCuQgHAHAAAKQAAAKAHAHQAHAIALAAID5AAQAKAAAHgIQAIgHAAgKQAAgKgIgHQgHgIgKABIj5AAIgCAAQgJAAgHAHgAhKByQgHAHAAAKQAAAKAHAHQAHAIALAAID5AAQAKAAAHgIQAIgHAAgKQAAgKgIgHQgHgIgKABIj5AAIgCAAQgJAAgHAHgAhKA2QgHAHAAAKQAAAKAHAHQAHAIALAAID5AAQAKAAAHgIQAIgHAAgKQAAgKgIgHQgHgIgKABIj5AAIgCAAQgJAAgHAHgAhKgFQgHAGAAAKQAAAKAHAHQAHAIALAAID5AAQAKAAAHgIQAIgHAAgKQAAgKgIgGQgHgIgKABIj5AAIgCAAQgJAAgHAHgAiykJQgPAPAAAVIAACMQAAAUAPAPQAPAPAUAAIA8AAQAVAAAOgPQAPgPAAgUIAAiMQAAgVgPgPQgOgOgVAAIg8AAQgUAAgPAOg");
	this.shape_4.setTransform(0.025,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdB4QgVAAgPgPQgOgOAAgVIAAiLQAAgUAOgQQAPgOAVAAIA7AAQAVAAAOAOQAPAQAAAUIAACLQAAAVgPAOQgOAPgVAAgAgbgHQgKANAAAUQAAATAKAOQALAOAOABQAOgBALgOQAKgOAAgTQAAgUgKgNQgLgOgOAAIAAAAQgOAAgLAOg");
	this.shape_5.setTransform(-11.35,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,-32.9,66.5,65.9);


(lib.Symbol161 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol159();
	this.instance.setTransform(6.05,0.85,1.1368,1.7951,0,45.2579,47.2857);
	this.instance.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 0, 0, 0, 0)];
	this.instance.cache(-5,-25,10,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol157();
	this.instance_1.setTransform(-16.1,22.85,1.1368,2.27,0,45.2584,47.2857);
	this.instance_1.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 61, 54, 0, 0)];
	this.instance_1.cache(-10,-10,20,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:true},1).wait(1));

	// Layer 5
	this.instance_2 = new lib.Symbol159();
	this.instance_2.setTransform(12.1,-11.35,1.1426,1.214,0,54.8669,56.7556);
	this.instance_2.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-5,-25,10,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:true},1).wait(1));

	// Layer 7
	this.instance_3 = new lib.Symbol157();
	this.instance_3.setTransform(-8.65,3.2,1.1426,2.2557,0,54.8672,56.7556);
	this.instance_3.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 61, 54, 0, 0)];
	this.instance_3.cache(-10,-10,20,20);

	this.instance_4 = new lib.Symbol160("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.8,-28.4,68,68.3);


(lib.Symbol153 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol152("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol151("synched",0);
	this.instance_1.alpha = 0.3984;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.8,-20.7,123.69999999999999,41.5);


(lib.Symbol147 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol143("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-9.1,112,18.299999999999997);


(lib.Symbol144 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol143("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-9.1,112,18.299999999999997);


(lib.Symbol140 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol138("synched",0);
	this.instance.setTransform(-2.4,-14.7,0.4369,0.394,0,-9.5743,-19.8887);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol138("synched",0);
	this.instance_1.setTransform(-14.65,-2.55,0.4369,0.394,0,-80.4257,-70.1068);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_2 = new lib.Symbol138("synched",0);
	this.instance_2.setTransform(-12.25,12.15,0.3707,0.4568,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

	// Layer 4
	this.instance_3 = new lib.Symbol138("synched",0);
	this.instance_3.setTransform(2.45,14.65,0.4369,0.394,0,170.4257,160.1068);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

	// Layer 5
	this.instance_4 = new lib.Symbol138("synched",0);
	this.instance_4.setTransform(14.6,2.5,0.4369,0.394,0,99.5743,109.8887);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

	// Layer 6
	this.instance_5 = new lib.Symbol138("synched",0);
	this.instance_5.setTransform(12.2,-12.2,0.3707,0.4568,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

	// Layer 7
	this.instance_6 = new lib.Symbol137("synched",0);

	this.instance_7 = new lib.Symbol139("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.1,-32.1,64.30000000000001,64.30000000000001);


(lib.Symbol134 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol133("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,-32.3,65.5,64.5);


(lib.Symbol130 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol129("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,-33.6,54.6,67.2);


(lib.Symbol126 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol125("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-32.7,66.1,65.5);


(lib.Symbol114 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol110("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.8,-23.2,65.6,46.4);


(lib.Symbol111 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol110("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.8,-23.2,65.6,46.4);


(lib.Symbol107 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol90();
	this.instance.setTransform(56.1,-29.1,1.3626,1.7034,0,-115.4384,173.9532);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol102();
	this.instance_1.setTransform(-65.55,32.6,0.9168,0.853,0,-124.4016,174.0809);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:true},1).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("ACQm7IA4g4ImPAAIGPPnIg4kmIkDqJIhUg4ACQm7IAAKJADIH0IAAvnAhzm7IEDAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AiBlEIEDAAIAAKJg");
	this.shape_1.setTransform(1.4,-11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgbDOIAAqJIA3g4IAAPng");
	this.shape_2.setTransform(17.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AjHnzIBUA4IEDKJIA4EmgAhzm7IhUg4IGPAAIg4A4gAjHnzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

	// Layer 5
	this.instance_2 = new lib.Symbol96();
	this.instance_2.setTransform(-46.5,30.45,0.9168,0.853,0,-124.4016,174.0809);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(2,1,1).p("ACQm7IA4g4ImPAAIA4A4IEfAAIAAN3IA4A4IAAvnAA4AsIAAGQIBYAAAAABkIA4g4IjHAAIg4A4IAApXAAAH0IDIAAAAABkIAAGQAA4G8Ig4A4AiPAsIAAnnAjHBkIDHAA");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AA4G8IAAmQIjHAAIAAnnIEfAAIAAN3g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("ADIH0Ig4g4IAAt3IA4g4IAAPngAAAH0IA4g4IBYAAIA4A4gAjHBkIA4g4IDHAAIg4A4g");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AAABkIA4g4IAAGQIg4A4gAjHnzIGPAAIg4A4IkfAAIg4g4IA4A4IAAHnIg4A4g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	// Layer 6
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#666666").ss(2,1,1).p("AiPm7IBYAAIA3g4IjHAAgAiPG8Ig4A4IAAvnACQCcIAAEgIA4A4ImPAAACQCcIA4g4IAAGQAAABkIDIAAAg3CcIAApXAiPG8IAAt3ACQG8IkfAAAg3CcIDHAAAAABkIg3A4AAAnzIAAJX");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AiPG8IAAt3IBYAAIAAJXIDHAAIAAEgg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("ADIH0Ig4g4IA4A4ImPAAIA4g4IEfAAIAAkgIA4g4IAAGQgAg3m7IA3g4IAAJXIg3A4g");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AjHnzIDHAAIg3A4IhYAAIg4g4IA4A4IAAN3Ig4A4gAg3CcIA3g4IDIAAIg4A4g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},3).wait(1));

	// Layer 7
	this.instance_3 = new lib.Symbol90();
	this.instance_3.setTransform(-83.7,34.15,1.0011,1.2515,0,-115.4381,173.9534);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#666666").ss(2,1,1).p("ACQm7IA4g4ImPAAIGPPnIg4kmIkDqJIhUg4ACQm7IAAKJADIH0IAAvnAhzm7IEDAA");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AiBlEIEDAAIAAKJg");
	this.shape_13.setTransform(1.4,-11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgbDOIAAqJIA3g4IAAPng");
	this.shape_14.setTransform(17.2,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AjHnzIBUA4IEDKJIA4EmgAhzm7IhUg4IGPAAIg4A4gAjHnzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

	// Layer 8
	this.instance_4 = new lib.Symbol106("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.2,-69.4,325.2,139);


(lib.Symbol103 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol102();
	this.instance.setTransform(0.3,-2.45,0.9168,0.853,0,-124.4016,174.0809);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("ACQm7IA4g4ImPAAIA4A4IEfAAIAAN3IA4A4IAAvnAA4AsIAAGQIBYAAAAABkIA4g4IjHAAIg4A4IAApXAAAH0IDIAAAAABkIAAGQAA4G8Ig4A4AiPAsIAAnnAjHBkIDHAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AA4G8IAAmQIjHAAIAAnnIEfAAIAAN3g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("ADIH0Ig4g4IAAt3IA4g4IAAPngAAAH0IA4g4IBYAAIA4A4gAjHBkIA4g4IDHAAIg4A4g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AAABkIA4g4IAAGQIg4A4gAjHnzIGPAAIg4A4IkfAAIg4g4IA4A4IAAHnIg4A4g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol100("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.7,-51,110.1,102);


(lib.Symbol97 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol96();
	this.instance.setTransform(-1.95,-1.25,0.9168,0.853,0,-124.4016,174.0809);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("AiPm7IBYAAIA3g4IjHAAgAiPG8Ig4A4IAAvnACQCcIAAEgIA4A4ImPAAACQCcIA4g4IAAGQAAABkIDIAAAg3CcIAApXAiPG8IAAt3ACQG8IkfAAAg3CcIDHAAAAABkIg3A4AAAnzIAAJX");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AiPG8IAAt3IBYAAIAAJXIDHAAIAAEgg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("ADIH0Ig4g4IA4A4ImPAAIA4g4IEfAAIAAkgIA4g4IAAGQgAg3m7IA3g4IAAJXIg3A4g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AjHnzIDHAAIg3A4IhYAAIg4g4IA4A4IAAN3Ig4A4gAg3CcIA3g4IDIAAIg4A4g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol94("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-51,113.4,102);


(lib.Symbol91 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol90();
	this.instance.setTransform(0.1,-2.5,0.9168,0.853,0,-124.4016,174.0809);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("ACQm7IA4g4ImPAAIGPPnIg4kmIkDqJIhUg4ACQm7IAAKJADIH0IAAvnAhzm7IEDAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AiBlEIEDAAIAAKJg");
	this.shape_1.setTransform(1.4,-11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgbDOIAAqJIA3g4IAAPng");
	this.shape_2.setTransform(17.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AjHnzIBUA4IEDKJIA4EmgAhzm7IhUg4IGPAAIg4A4gAjHnzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol88("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.9,-51,110.1,102);


(lib.Symbol85 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol84();
	this.instance.setTransform(0.4,-2.6,0.9168,0.853,0,-124.4016,174.0809);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("AD0rnIA4g4IpXAAIBSA4IHNTOIA4E5IAA4/AD0rnIAATOAkrsfIJXY/AjZrnIHNAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AjmpnIHNAAIAATOg");
	this.shape_1.setTransform(1.325,-12.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgbHnIAAzOIA3g4IAAY/g");
	this.shape_2.setTransform(27.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AkrsfIBSA4IHNTOIA4E5gAjZrnIhSg4IJXAAIg4A4gAkrsfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol82("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-81,170.7,162);


(lib.Symbol79 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol49("synched",0);
	this.instance.setTransform(-1.6,-7.1);
	this.instance.alpha = 0.5;
	this.instance.filters = [new cjs.ColorFilter(0.6484375, 0.6484375, 0.6484375, 1, 0, 16, 48, 0)];
	this.instance.cache(-35,-28,70,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol48("synched",0);
	this.instance_1.setTransform(-1.6,-7.1);
	this.instance_1.alpha = 0.6992;
	this.instance_1.filters = [new cjs.ColorFilter(0.6484375, 0.6484375, 0.6484375, 1, 0, 16, 48, 0)];
	this.instance_1.cache(-36,-29,72,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 3
	this.instance_2 = new lib.Symbol78("synched",0);
	this.instance_2.setTransform(-2.65,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 5
	this.instance_3 = new lib.Symbol77();
	this.instance_3.setTransform(-1.45,0.6,0.3286,0.1853,0,30.0007,-149.9987);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:true},1).wait(1));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AA2AAQAAAkgQAZQgPAZgXAAQgWAAgQgZQgPgZAAgkQAAgjAPgZQAQgZAWAAQAXAAAPAZQAQAZAAAjg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmA8QgPgYAAgkQAAgjAPgYQAQgaAWAAQAXAAAPAaQAQAYAAAjQAAAkgQAYQgPAagXAAQgWAAgQgag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	// Layer 7
	this.instance_4 = new lib.Symbol77();
	this.instance_4.setTransform(-9.95,-5.9,0.2288,0.1832,0,37.7507,-133.6761);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.3,1,1).p("AA2AAQAAAkgQAZQgPAZgXAAQgWAAgQgZQgPgZAAgkQAAgjAPgZQAQgZAWAAQAXAAAPAZQAQAZAAAjg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgmA8QgPgYAAgkQAAgjAPgYQAQgaAWAAQAXAAAPAaQAQAYAAAjQAAAkgQAYQgPAagXAAQgWAAgQgag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// Layer 8
	this.instance_5 = new lib.Symbol75("synched",0);
	this.instance_5.setTransform(4.65,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 9
	this.instance_6 = new lib.Symbol47("synched",0);
	this.instance_6.setTransform(-2.65,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.6,-34.1,68,66);


(lib.Symbol72 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol71("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol62("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-33,66,66);


(lib.Symbol68 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol67("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol62("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-33,66,66);


(lib.Symbol64 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol63("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol62("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-33,66,66);


(lib.Symbol59 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol58("synched",0);
	this.instance.setTransform(0,0,2.3845,2.3845,-5.5098);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-31.9,64.1,63.8);


(lib.Symbol54 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol49("synched",0);
	this.instance.setTransform(0.05,-6);
	this.instance.alpha = 0.5;
	this.instance.filters = [new cjs.ColorFilter(0.6484375, 0.6484375, 0.6484375, 1, 0, 16, 48, 0)];
	this.instance.cache(-35,-28,70,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol48("synched",0);
	this.instance_1.setTransform(0.05,-6);
	this.instance_1.alpha = 0.6992;
	this.instance_1.filters = [new cjs.ColorFilter(0.6484375, 0.6484375, 0.6484375, 1, 0, 16, 48, 0)];
	this.instance_1.cache(-36,-29,72,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1,3,true).p("AhAg0IANgxIBKAAIgNAxgAgTAYQgDgCgBgFQgDgKAEgNQACgNAHgKQAHgKAGAAQAHAAADAKQACAKgDANIgBADIgbAbIhTBTACLiGIgJAJAAIgDIB6h6IjNAAIg/DoIAkAAIgcAc");
	this.shape.setTransform(15.9,-5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrAYIANgvIBKAAIgNAvg");
	this.shape_1.setTransform(13.825,-13.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiGB1IBAjpIDMAAIh5B6IABgEQACgMgCgKQgDgJgGAAQgGAAgIAJQgGAKgDAMQgEAOAEAKQABAFADADIhTBTgAg7grIBKAAIAMgwIhJAAg");
	this.shape_2.setTransform(15.45,-6.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.instance_2 = new lib.Symbol47("synched",0);
	this.instance_2.setTransform(-1,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol54, new cjs.Rectangle(-34,-33,68.1,66), null);


(lib.Symbol50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol49("synched",0);
	this.instance.setTransform(0.05,-6);
	this.instance.alpha = 0.5;
	this.instance.filters = [new cjs.ColorFilter(0.6484375, 0.6484375, 0.6484375, 1, 0, 16, 48, 0)];
	this.instance.cache(-35,-28,70,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol48("synched",0);
	this.instance_1.setTransform(0.05,-6);
	this.instance_1.alpha = 0.6992;
	this.instance_1.filters = [new cjs.ColorFilter(0.6484375, 0.6484375, 0.6484375, 1, 0, 16, 48, 0)];
	this.instance_1.cache(-36,-29,72,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 3
	this.instance_2 = new lib.Symbol47("synched",0);
	this.instance_2.setTransform(-1,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-33,68.1,66);


(lib.Symbol44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol43("synched",0);
	this.instance.setTransform(24,-24);

	this.instance_1 = new lib.Symbol24("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-33,66,66);


(lib.Symbol40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol39("synched",0);
	this.instance.setTransform(-25.65,27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol35("synched",0);
	this.instance_1.setTransform(-0.05,-0.05,0.9895,0.9895,44.8582);

	this.instance_2 = new lib.Symbol24("synched",0);
	this.instance_2.setTransform(0.4,-0.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.6,-32.6,64,64);


(lib.Symbol36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol35("synched",0);
	this.instance.setTransform(0.05,0,0.9895,0.9895,44.8582);

	this.instance_1 = new lib.Symbol24("synched",0);
	this.instance_1.setTransform(0.5,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-32.6,64,64);


(lib.Symbol32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol28("synched",0);
	this.instance.setTransform(0,0.05);

	this.instance_1 = new lib.Symbol19("synched",0);
	this.instance_1.setTransform(-3.3,1.05,0.815,0.815);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-30.7,52.2,61.5);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol28("synched",0);
	this.instance.setTransform(0,0.05);

	this.instance_1 = new lib.Symbol19("synched",0);
	this.instance_1.setTransform(-3.3,1.05,0.815,0.815);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-30.7,52.2,61.5);


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol23("synched",0);

	this.instance_1 = new lib.Symbol24("synched",0);
	this.instance_1.setTransform(0,-1.2,0.9328,0.7437);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-32.9,59.7,65.9);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol18("synched",0);

	this.instance_1 = new lib.Symbol19("synched",0);
	this.instance_1.setTransform(-8,2.65,1.2482,1.2482);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-53,80,106.1);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol14("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-32,48.1,64.1);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.setTransform(0,0,1.0726,1.0726,45);

	this.instance_1 = new lib.Symbol10("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1.0726,scaleY:1.0726,rotation:45}}]}).to({state:[{t:this.instance,p:{scaleX:1.0726,scaleY:1.0726,rotation:45}}]},1).to({state:[{t:this.instance,p:{scaleX:0.5363,scaleY:0.5363,rotation:44.9988}}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-36.9,73.8,73.8);


(lib.wood = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol111();
	this.instance.setTransform(0,0,1.1184,1.0817,0,-11.2216,-15.4341);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol111(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wood, new cjs.Rectangle(-38.9,-33,77.9,66), null);


(lib.wheel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol140();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol140(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wheel, new cjs.Rectangle(-32.1,-32.1,64.30000000000001,64.30000000000001), null);


(lib.weight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol161();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol161(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.weight, new cjs.Rectangle(-32.8,-29.4,69,69.3), null);


(lib.usbstick = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol298();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol298(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol297();
	this.instance_1.setTransform(0.45,-0.3,0.159,0.1736);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.usbstick, new cjs.Rectangle(-32,-32,64.3,64), null);


(lib.triangletotal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol107();
	this.instance.setTransform(-182.4,33.7,0.4575,0.6407,0,-47.4746,-3.0399);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol107(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.triangletotal, new cjs.Rectangle(-285.5,-0.3,186.3,68.5), null);


(lib.trianglesmall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol91();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol91(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.trianglesmall, new cjs.Rectangle(-54.9,-29.1,110.1,58.6), null);


(lib.trianglebig = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol85();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol85(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.trianglebig, new cjs.Rectangle(-85,-44.6,170.7,89.7), null);


(lib.tile3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol72();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol72(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tile3, new cjs.Rectangle(-33,-33,66,66), null);


(lib.tile2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol68();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol68(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tile2, new cjs.Rectangle(-33,-33,66,66), null);


(lib.tile1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol64();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol64(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tile1, new cjs.Rectangle(-33,-33,66,66), null);


(lib.tape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol224();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol224(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AjXBJIgBgDIgEgNQgRhFAkhUQAshnBihBQBhhBBeAMQBfALAkBSIALAiQAHAdgDAgQgDAqgUAwQgSAngaAjQgnA2g7AnQhUA3hQAAIiDgIIiJAGIAEgKICIgGIAtACQgdgOgUgXQgQgSgKgXIAAgBIgFgNIgBgCIAGAPADCixQAYA5gfBIIAAACQggBHhEAtQhFAuhCgIIgbgGQgtgPgTgtIgJgbQgKguAYg5QAfhJBGgtQBDguBDAIQBDAIAZA6gAhDBBQgcgOgNgeQgMgZAEgfQACgXALgaQAZg7A4glQA3glA2AHQAlAEAWAYQAJAKAHAPQASApgSA0AhDBBIAFgNQAZg6A3glQA4glA2AHQATACAPAHIgFANQgZA6g4AlQg5Alg0gHgAESi+IAoCCQATBGglBXQgsBnhiBBQhiBBhdgMIjKgJQgLhIhFg4AizClIgehM");
	this.shape.setTransform(-0.0027,0.0179);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996666").s().p("AglD+IjKgKQgLhIhFg4ICJgGICDAIQBQABBUg3QA7goAng0QAagjASgpQAUgvADgrQADgggHgdIAoCCQATBHglBWQgsBnhiBBQhUA4hPAAQgOAAgOgCgAjWALIgBgDIAGAQg");
	this.shape_1.setTransform(-0.0027,6.4614);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#000000"],[0,1],-15.5,3,14.9,-4.2).s().p("AiGBfQgMgaADgfQACgXALgZQAZg7A5glQA2glA3AHQAlAEAVAYQAKAKAGAPQASApgSAzQgPgHgSgCQg2gGg3AkQg4AlgZA7IgFANQgcgOgNgeg");
	this.shape_2.setTransform(2.6105,-7.3551);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AhKCwIgcgGQgsgPgUgtIgIgaQgKgwAYg3QAfhJBFguQBEguBDAJQBCAIAaA5IAAABQAZA5gfBIIgBACQgfBHhEAuQg7Ang4AAIgUgCgAgwhvQg5AlgZA7QgLAYgCAYQgDAeAMAaQANAfAcANIAhAKQA2AGA3glQA4glAZg7IAFgMQASgzgSgqQgGgOgKgLQgVgXglgFIgRgBQgtAAgvAgg");
	this.shape_3.setTransform(2.6187,-6.8315);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC9999").s().p("AgeD7IiDgIIiJAGIAEgJICIgGIgfhNQALAYAPARQAUAYAeANIgtgBIAtABQgegNgUgYQgPgRgLgYIAAAAIgFgQIgCgDIgDgMQgRhGAkhTQArhoBjhBQBghBBfAMQBeAMAkBRIAMAiQAGAdgCAgQgEArgUAuQgRApgaAjQgoA1g7AoQhTA2hPAAIgBAAgAgNiKQhFAugfBJQgYA3AKAwIAIAaQAUAtAsAPIAcAGQBBAIBGgtQBEguAfhHIABgCQAfhIgZg5IAAgBQgag5hCgIIgVgBQg5AAg5Amg");
	this.shape_4.setTransform(-2.0653,-6.8433);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tape, new cjs.Rectangle(-33,-33,66,66), null);


(lib.squaresmall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol97();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol97(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.squaresmall, new cjs.Rectangle(-57,-28.8,113.4,57.7), null);


(lib.squarebig = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol103();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol103(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.squarebig, new cjs.Rectangle(-54.7,-29,110.1,58.5), null);


(lib.sheetpaper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol144();
	this.instance.setTransform(0,0,0.6839,2.1657,0,-10.767,-20.6832);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol144(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sheetpaper, new cjs.Rectangle(-38.5,-31.6,77,63.3), null);


(lib.seed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol274();
	this.instance.setTransform(-0.05,-0.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol272();
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Symbol272(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.seed, new cjs.Rectangle(-32,-32,64,64), null);


(lib.screwdriver = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol20();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol20(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screwdriver, new cjs.Rectangle(-13,-53,26.1,106.1), null);


(lib.screw = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol25();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol25(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screw, new cjs.Rectangle(-9,-32.9,18,65.9), null);


(lib.rope = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol234();
	this.instance.setTransform(0.35,-2.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol232();
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Symbol232(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rope, new cjs.Rectangle(-32,-32,64,64), null);


(lib.roeispaan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol229();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol229(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol228();
	this.instance_1.setTransform(0,0,0.2285,0.2285,0,-137.1756,42.8244);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.roeispaan, new cjs.Rectangle(-33.4,-35.4,66.9,70.8), null);


(lib.poster = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol15();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol15(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.poster, new cjs.Rectangle(-24,-32,48.1,64.1), null);


(lib.pinink = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol40();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol40(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pinink, new cjs.Rectangle(-34.3,-34.4,68.6,68.9), null);


(lib.pin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol44();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol44(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pin, new cjs.Rectangle(-33,-33,66,66), null);


(lib.pen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol36();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol36(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pen, new cjs.Rectangle(-34.2,-34.4,68.6,68.9), null);


(lib.motascode1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.instance = new lib.Symbol259();
	this.instance.setTransform(216,72,4.3579,4.3579,0,0,180);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance.cache(-10,-10,21,21);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol259(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol257();
	this.instance_1.setTransform(0,72,4.3579,4.3579,0,0,180);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance_1.cache(-10,-10,21,21);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Symbol257(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// Layer_4
	this.instance_2 = new lib.Symbol256();
	this.instance_2.setTransform(144,72,4.3579,4.3579,0,0,180);
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance_2.cache(-10,-10,21,21);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Symbol256(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// Layer_5
	this.instance_3 = new lib.Symbol255();
	this.instance_3.setTransform(72,72,4.3579,4.3579,0,0,180);
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance_3.cache(-10,-10,21,21);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Symbol255(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1));

	// Layer_6
	this.instance_4 = new lib.Symbol253();
	this.instance_4.setTransform(0,0,4.3579,4.3579,0,0,180);
	this.instance_4.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance_4.cache(-10,-10,21,21);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Symbol253(), 3);

	this.instance_5 = new lib.Symbol254();
	this.instance_5.setTransform(0,0,4.3579,4.3579,0,0,180);
	this.instance_5.alpha = 0.25;
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.Symbol254(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.2,-33.2,282.5,138.5);


(lib.motas20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.instance = new lib.Symbol264();
	this.instance.setTransform(0,72,4.3579,4.3579,0,0,180);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance.cache(-10,-10,21,21);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol264(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol261();
	this.instance_1.setTransform(0,0,4.3579,4.3579,0,0,180);
	this.instance_1.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance_1.cache(-10,-10,21,21);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Symbol261(), 3);

	this.instance_2 = new lib.Symbol254();
	this.instance_2.setTransform(0,0,4.3579,4.3579,0,0,180);
	this.instance_2.alpha = 0.25;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Symbol254(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.2,-33.2,66.5,138.5);


(lib.motas18bneg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.instance = new lib.Symbol267();
	this.instance.setTransform(0,72,4.3579,4.3579,0,0,180);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance.cache(-10,-10,21,21);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol267(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol266();
	this.instance_1.setTransform(72,72,4.3579,4.3579,0,0,180);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance_1.cache(-10,-10,21,21);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Symbol266(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// Layer_4
	this.instance_2 = new lib.Symbol261();
	this.instance_2.setTransform(0,0,4.3579,4.3579,0,0,180);
	this.instance_2.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance_2.cache(-10,-10,21,21);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Symbol261(), 3);

	this.instance_3 = new lib.Symbol254();
	this.instance_3.setTransform(0,0,4.3579,4.3579,0,0,180);
	this.instance_3.alpha = 0.25;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Symbol254(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.2,-33.2,138.5,138.5);


(lib.motas18b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.instance = new lib.Symbol262();
	this.instance.setTransform(0,72,4.3579,4.3579,0,0,180);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance.cache(-10,-10,21,21);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol262(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol256();
	this.instance_1.setTransform(72,72,4.3579,4.3579,0,0,180);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance_1.cache(-10,-10,21,21);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Symbol256(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// Layer_4
	this.instance_2 = new lib.Symbol261();
	this.instance_2.setTransform(0,0,4.3579,4.3579,0,0,180);
	this.instance_2.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance_2.cache(-10,-10,21,21);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Symbol261(), 3);

	this.instance_3 = new lib.Symbol254();
	this.instance_3.setTransform(0,0,4.3579,4.3579,0,0,180);
	this.instance_3.alpha = 0.25;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Symbol254(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.2,-33.2,138.5,138.5);


(lib.motas18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol269();
	this.instance.setTransform(0,0,4.3579,4.3579,0,0,180);
	this.instance.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance.cache(-10,-10,21,21);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol269(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.motas18, new cjs.Rectangle(-33.2,-33.2,66.5,66.5), null);


(lib.motas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.instance = new lib.Symbol257();
	this.instance.setTransform(0,72,4.3579,4.3579,0,0,180);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance.cache(-10,-10,21,21);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol257(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol256();
	this.instance_1.setTransform(144,72,4.3579,4.3579,0,0,180);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance_1.cache(-10,-10,21,21);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Symbol256(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// Layer_4
	this.instance_2 = new lib.Symbol255();
	this.instance_2.setTransform(72,72,4.3579,4.3579,0,0,180);
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance_2.cache(-10,-10,21,21);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Symbol255(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// Layer_5
	this.instance_3 = new lib.Symbol253();
	this.instance_3.setTransform(0,0,4.3579,4.3579,0,0,180);
	this.instance_3.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance_3.cache(-10,-10,21,21);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Symbol253(), 3);

	this.instance_4 = new lib.Symbol254();
	this.instance_4.setTransform(0,0,4.3579,4.3579,0,0,180);
	this.instance_4.alpha = 0.25;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Symbol254(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.2,-33.2,210.5,138.5);


(lib.magnet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol294();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol294(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol293();
	this.instance_1.setTransform(0,0,0.4571,0.4571);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.magnet, new cjs.Rectangle(-32,-32,64,64), null);


(lib.light = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol126();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol126(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(-33,-32.7,66.1,65.5), null);


(lib.letter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol148("synched",0);
	this.instance.setTransform(-1.1,-1.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol147();
	this.instance_1.setTransform(0,0,0.6839,2.1657,0,-10.767,-20.6832);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Symbol147(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.letter, new cjs.Rectangle(-38.5,-31.6,77,63.3), null);


(lib.ladder = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol277("synched",0);
	this.instance.setTransform(8,-2.4,0.2508,0.2821,0,38.4991,-141.5057);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol276();
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Symbol276(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ladder, new cjs.Rectangle(-33.9,-32,67.8,64), null);


(lib.key4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol203();
	this.instance.setTransform(1.1,-1.05,0.5722,0.5722,0,45.7649,44.2351);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol203(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.key4, new cjs.Rectangle(-40,-39,80.1,78), null);


(lib.key3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol32();
	this.instance.setTransform(0,-0.05,1.2257,1.2257,51.8207);
	this.instance.filters = [new cjs.ColorFilter(0.3, 0.3, 0.3, 1, 178.5, 178.5, 35.7, 0)];
	this.instance.cache(-26,-33,56,66);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol32(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.key3, new cjs.Rectangle(-39.9,-36.9,79.9,73.8), null);


(lib.key2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol29();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.key2, new cjs.Rectangle(-15.9,-30.7,31.9,61.5), null);


(lib.key1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol11();
	this.instance.setTransform(0,0,1.0864,1.0864,-1.985);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol11(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.key1, new cjs.Rectangle(-39.6,-40.5,79.2,81), null);


(lib.icboard2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol251();
	this.instance.setTransform(-2.85,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol249();
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Symbol249(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icboard2, new cjs.Rectangle(-32,-32.7,64,65.30000000000001), null);


(lib.icboard1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol247();
	this.instance.setTransform(1.15,0.95,0.1023,0.1023,-59.9976);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol243();
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Symbol243(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icboard1, new cjs.Rectangle(-32,-32.7,64,67.30000000000001), null);


(lib.horse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol153();
	this.instance.setTransform(0,0,0.5823,0.8222,0,15.511,-29.724);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol153(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.horse, new cjs.Rectangle(-36.1,-33.2,71.2,67.4), null);


(lib.headcase = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol79();
	this.instance.setTransform(1.65,1.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol79(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headcase, new cjs.Rectangle(-34,-33,68.1,66), null);


(lib.floppy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol59();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol59(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.floppy, new cjs.Rectangle(-36.3,-31.9,72.69999999999999,63.8), null);


(lib.flashlight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol134();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol134(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flashlight, new cjs.Rectangle(-32.6,-32.3,65.5,64.5), null);


(lib.diskbox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol50();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol50(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.diskbox, new cjs.Rectangle(-34,-33,68.1,66), null);


(lib.cola = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol197();
	this.instance.setTransform(-1.15,-1.15,0.3965,0.3965,45);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol197(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cola, new cjs.Rectangle(-35.6,-35.6,71.30000000000001,71.30000000000001), null);


(lib.coin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol171();
	this.instance.setTransform(1.7,1);
	this.instance.filters = [new cjs.ColorFilter(0.3, 0.3, 0.3, 1, 178.5, 142.8, 35.7, 0)];
	this.instance.cache(-35,-35,70,70);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol171(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.coin, new cjs.Rectangle(-31.3,-32,66,66), null);


(lib.chalk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol184();
	this.instance.filters = [new cjs.ColorFilter(0.6015625, 0.6015625, 0.6015625, 1, 88, 99, 102, 0)];
	this.instance.cache(-35,-35,70,70);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol184(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chalk, new cjs.Rectangle(-32.9,-32.9,65.9,65.9), null);


(lib.card = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol166();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol166(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card, new cjs.Rectangle(-32.6,-32.9,66.5,65.9), null);


(lib.burningwood = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol122();
	this.instance.setTransform(-16.75,-2.9,0.7403,1.582,0,-6.3063,-47.1432);
	this.instance.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol114();
	this.instance_1.setTransform(0,0,1.1184,1.0817,0,-11.2216,-15.4341);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Symbol114(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.burningwood, new cjs.Rectangle(-38.9,-38.2,77.9,71.2), null);


(lib.bucketwater = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol219();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol219(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bucketwater, new cjs.Rectangle(-33,-33,66,66.1), null);


(lib.bucket = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol208();
	this.instance.setTransform(1.45,-1.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol208(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bucket, new cjs.Rectangle(-33,-33,66,66.1), null);


(lib.ball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol179();
	this.instance.setTransform(0,0,4.3579,4.3579,0,0,180);
	this.instance.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 77, 77, 77, 0)];
	this.instance.cache(-10,-10,21,21);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol179(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(-33.2,-33.2,66.5,66.5), null);


(lib.axe_sharp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol239();
	this.instance.setTransform(-1.35,0.45,0.1999,0.2424);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol241();
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Symbol241(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.axe_sharp, new cjs.Rectangle(-32,-32,64,64.9), null);


(lib.axe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol239();
	this.instance.setTransform(-1.35,0.45,0.1999,0.2424);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol237();
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Symbol237(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.axe, new cjs.Rectangle(-32,-32,64,64.9), null);


(lib.accu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol130();
	this.instance.setTransform(0,0,1.0671,1.0671,17.3374);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol130(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.accu, new cjs.Rectangle(-37.2,-41.6,74.4,83.2), null);


(lib.Symbol288 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol287();
	this.instance.setTransform(0.15,-10,0.4162,0.5277,0,18.3433,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol285();
	this.instance_1.setTransform(2.65,-18.15,0.4162,0.5266,0,18.3415,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_3
	this.instance_2 = new lib.Symbol281();
	this.instance_2.setTransform(0,0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AjpksIA5g1IA8gvQCMhkCOAAQCOAABLBkIAdAvIAVA1QAOAwACA1QACAvgJA1QgJAwgRAzQgRA0gYAwQgaA0ghAwQglA1gtAvIg5A2Ig8AvQiMBkiOAAQiPAAhKhkQgQgWgNgZQgNgagIgcQgPgvgCg1QgBgwAJg0QAIgwASg0QARgzAYgwQAZg1AhgvQAlg1Augwg");
	this.shape.setTransform(-0.0495,10.0749);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Aq7K8IGPyxIABjGIPnAAIgCDGImPSxgAh1ksIg8AuIg5A2QgtAvglA1QgiAwgZA0QgYAvgRA0QgSA0gHAwQgKA1ABAvQACA1APAwQAIAbANAaQANAaAQAVQBKBkCPAAQCOAACMhkIA8gvIA5g1QAtgwAlg1QAigvAag1QAXgwARg0QARg0AJgvQAJg0gBgwQgCg1gPgvIgVg2IgdguQhLhliOABIgBAAQiOgBiLBlg");
	this.shape_1.setTransform(0.05,0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol288, new cjs.Rectangle(-70,-70.1,140.1,140.3), null);


(lib.Symbol190 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol188();
	this.instance.setTransform(-4.15,2.7,0.999,0.999,0,70.9341,-109.0659);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

	// Layer 3
	this.instance_1 = new lib.Symbol188();
	this.instance_1.setTransform(2.4,8,0.9997,0.9997,5.0578);

	this.instance_2 = new lib.Symbol189();

	this.instance_3 = new lib.Symbol19("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.6,-36,75.6,72);


(lib.Symbol55 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol49("synched",0);
	this.instance.setTransform(0.05,-6);
	this.instance.alpha = 0.5;
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0.6484375, 0.6484375, 0.6484375, 1, 0, 16, 48, 0)];
	this.instance.cache(-35,-28,70,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol48("synched",0);
	this.instance_1.setTransform(0.05,-6);
	this.instance_1.alpha = 0.6992;
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0.6484375, 0.6484375, 0.6484375, 1, 0, 16, 48, 0)];
	this.instance_1.cache(-36,-29,72,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1,3,true).p("AhAg0IANgxIBKAAIgNAxgAgTAYQgDgCgBgFQgDgKAEgNQACgNAHgKQAHgKAGAAQAHAAADAKQACAKgDANIgBADIgbAbIhTBTACCh9IgHAIIhzByACLiGIgJAJIjNAAIg/DoIAkAAIgcAc");
	this.shape.setTransform(15.9,-5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrAYIANgvIBKAAIgNAvg");
	this.shape_1.setTransform(13.825,-13.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiGB1IBAjpIDMAAIgHAIIhyByIABgEQACgMgCgKQgDgJgGAAQgGAAgIAJQgGAKgDAMQgEAOAEAKQABAFADADIhTBTgAg7grIBKAAIAMgwIhJAAgAB/hsIAHgIIgHAIgACGh0g");
	this.shape_2.setTransform(15.45,-6.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol54();

	this.instance_3 = new lib.Symbol47("synched",0);
	this.instance_3.setTransform(-1,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-33,68.1,66);


(lib.wirecutter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol190();
	this.instance.setTransform(0,0,0.9992,0.9992,6.249);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol190(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wirecutter, new cjs.Rectangle(-35.6,-33.9,72.5,72.8), null);


(lib.fan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol289();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol289(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol288();
	this.instance_1.setTransform(-0.05,-1,0.4564,0.4564);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fan, new cjs.Rectangle(-32,-33,64,65), null);


(lib.diskboxfloppy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.diskBoxBtn.on('click', (e) =>
		{
			if (moInv.activeObject === 'pin')
			{
				moInv.remove(moInv.activeSlot);
				moInv.add(2, 'floppy');
				moInv.add(1, 'diskbox');
				e.stopImmediatePropagation();
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.diskBoxBtn = new lib.Symbol55();
	this.diskBoxBtn.name = "diskBoxBtn";
	new cjs.ButtonHelper(this.diskBoxBtn, 0, 1, 2, false, new lib.Symbol55(), 3);

	this.timeline.addTween(cjs.Tween.get(this.diskBoxBtn).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.diskboxfloppy, new cjs.Rectangle(-34,-33,68.1,66), null);


(lib.InventorySlot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {key1:1,poster:2,screwdriver:3,screw:4,key2:5,key3:6,pen:7,penink:8,pin:9,diskbox:10,diskboxfloppy:11,floppy:12,tile1:13,tile2:14,tile3:15,headcase:16,trianglebig:17,trianglesmall:18,squaresmall:19,squarebig:20,triangletotal:21,wood:22,burningwood:23,light:24,accu:25,flashlight:26,wheel:27,sheetpaper:28,letter:29,horse:30,weight:31,card:32,coin:33,ball:34,chalk:35,wirecutter:36,cola:37,key4:38,bucket:39,bucketwater:40,tape:41,roeispaan:42,rope:43,axe:44,axe_sharp:45,icboard1:46,icboard2:47,motas:48,motascode1:49,motas18b:50,motas20:51,motas18bneg:52,motas18:53,seed:54,ladder:55,fan:56,magnet:57,usbstick:58};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_48 = function() {
		// Override alpha selection because of special gui
		this.alpha = 1;
	}
	this.frame_49 = function() {
		// Override alpha selection because of special gui
		this.alpha = 1;
	}
	this.frame_50 = function() {
		// Override alpha selection because of special gui
		this.alpha = 1;
	}
	this.frame_51 = function() {
		// Override alpha selection because of special gui
		this.alpha = 1;
	}
	this.frame_52 = function() {
		// Override alpha selection because of special gui
		this.alpha = 1;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(48).call(this.frame_48).wait(1).call(this.frame_49).wait(1).call(this.frame_50).wait(1).call(this.frame_51).wait(1).call(this.frame_52).wait(7));

	// Layer_5
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(-34.05,-33.05,0.5,0.5);

	this.instance_1 = new lib.key1();
	this.instance_1.setTransform(-2.15,2.2);

	this.poster = new lib.poster();
	this.poster.name = "poster";
	this.poster.setTransform(0,0,1,1.037,0,15.3532,0);

	this.instance_2 = new lib.screwdriver();
	this.instance_2.setTransform(0.4,0.6,0.8027,0.8027,43.8394);

	this.instance_3 = new lib.screw();
	this.instance_3.setTransform(-1.15,1.1,1.0717,1.3455,44.6421);

	this.instance_4 = new lib.key2();
	this.instance_4.setTransform(-1.7,-1.1,1.2257,1.2257,51.8207);

	this.instance_5 = new lib.key3();
	this.instance_5.setTransform(-1.7,-1.05);

	this.instance_6 = new lib.pen();
	this.instance_6.setTransform(-0.5,0.6);

	this.instance_7 = new lib.pinink();
	this.instance_7.setTransform(-0.4,0.65);

	this.instance_8 = new lib.pin();

	this.instance_9 = new lib.diskbox();
	this.instance_9.setTransform(1,0);

	this.instance_10 = new lib.diskboxfloppy();
	this.instance_10.setTransform(1,0);

	this.instance_11 = new lib.floppy();
	this.instance_11.setTransform(0.15,0.15);

	this.instance_12 = new lib.tile1();

	this.instance_13 = new lib.tile2();

	this.instance_14 = new lib.tile3();

	this.instance_15 = new lib.headcase();
	this.instance_15.setTransform(1,0);

	this.instance_16 = new lib.trianglebig();
	this.instance_16.setTransform(-13.85,4.8,0.6507,0.6484,0,165.9101,170.7038);

	this.instance_17 = new lib.trianglesmall();
	this.instance_17.setTransform(-9.3,3.7,0.8316,0.8264,0,165.9104,172.3576);

	this.instance_18 = new lib.squaresmall();
	this.instance_18.setTransform(7.8,-2.05,0.8357,0.8357,165.4532);

	this.instance_19 = new lib.squarebig();
	this.instance_19.setTransform(-3.8,2.85,0.8241,0.8241,164.1581);

	this.instance_20 = new lib.triangletotal();
	this.instance_20.setTransform(-191.65,36.6,1,1,180);

	this.instance_21 = new lib.wood();
	this.instance_21.setTransform(0.3,0.05);

	this.instance_22 = new lib.burningwood();
	this.instance_22.setTransform(0.3,0.05);

	this.instance_23 = new lib.light();
	this.instance_23.setTransform(-0.25,0.3);

	this.instance_24 = new lib.accu();
	this.instance_24.setTransform(-0.2,-0.05);

	this.instance_25 = new lib.flashlight();
	this.instance_25.setTransform(0,-0.05);

	this.instance_26 = new lib.wheel();
	this.instance_26.setTransform(0,-0.05);

	this.instance_27 = new lib.sheetpaper();
	this.instance_27.setTransform(0.15,-1.05);

	this.instance_28 = new lib.letter();
	this.instance_28.setTransform(0.15,-1.05);

	this.instance_29 = new lib.horse();
	this.instance_29.setTransform(2.25,-1.6);

	this.instance_30 = new lib.weight();
	this.instance_30.setTransform(-2.9,-3.45);

	this.instance_31 = new lib.card();
	this.instance_31.setTransform(-0.15,-0.05);

	this.instance_32 = new lib.coin();
	this.instance_32.setTransform(0,0,1,1,-29.9999);

	this.instance_33 = new lib.ball();
	this.instance_33.setTransform(0.45,0.25);

	this.instance_34 = new lib.chalk();
	this.instance_34.setTransform(0,-0.05);

	this.instance_35 = new lib.wirecutter();
	this.instance_35.setTransform(-5.35,1.7);

	this.instance_36 = new lib.cola();
	this.instance_36.setTransform(-0.65,0.7);

	this.instance_37 = new lib.key4();
	this.instance_37.setTransform(-2.05,0.95);

	this.instance_38 = new lib.bucket();
	this.instance_38.setTransform(0.6,0.35);

	this.instance_39 = new lib.bucketwater();
	this.instance_39.setTransform(0.6,0.4);

	this.instance_40 = new lib.tape();
	this.instance_40.setTransform(0.05,0);

	this.instance_41 = new lib.roeispaan();
	this.instance_41.setTransform(-0.15,0.55);

	this.instance_42 = new lib.rope();
	this.instance_42.setTransform(-0.15,0.55);

	this.instance_43 = new lib.axe();
	this.instance_43.setTransform(-0.15,0.55);

	this.instance_44 = new lib.axe_sharp();
	this.instance_44.setTransform(-0.15,0.55);

	this.icboard1 = new lib.icboard1();
	this.icboard1.name = "icboard1";
	this.icboard1.setTransform(-0.15,0.55);

	this.icboard1_1 = new lib.icboard2();
	this.icboard1_1.name = "icboard1_1";
	this.icboard1_1.setTransform(-0.15,0.55);

	this.instance_45 = new lib.motas();
	this.instance_45.setTransform(0.45,0.25);

	this.instance_46 = new lib.motascode1();
	this.instance_46.setTransform(0.45,0.25);

	this.instance_47 = new lib.motas18b();
	this.instance_47.setTransform(0.45,0.25);

	this.instance_48 = new lib.motas20();
	this.instance_48.setTransform(0.45,0.25);

	this.instance_49 = new lib.motas18bneg();
	this.instance_49.setTransform(0.45,0.25);

	this.instance_50 = new lib.motas18();
	this.instance_50.setTransform(-0.55,0.25);

	this.icboard1_2 = new lib.seed();
	this.icboard1_2.name = "icboard1_2";
	this.icboard1_2.setTransform(-0.15,0.55);

	this.icboard1_3 = new lib.ladder();
	this.icboard1_3.name = "icboard1_3";
	this.icboard1_3.setTransform(-0.15,0.55);

	this.icboard1_4 = new lib.fan();
	this.icboard1_4.name = "icboard1_4";
	this.icboard1_4.setTransform(-0.15,0.55);

	this.magnet = new lib.magnet();
	this.magnet.name = "magnet";
	this.magnet.setTransform(-0.15,0.55);

	this.usbstick = new lib.usbstick();
	this.usbstick.name = "usbstick";
	this.usbstick.setTransform(-0.15,0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.poster}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.icboard1}]},1).to({state:[{t:this.icboard1_1}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.icboard1_2}]},1).to({state:[{t:this.icboard1_3}]},1).to({state:[{t:this.icboard1_4}]},1).to({state:[{t:this.magnet}]},1).to({state:[{t:this.usbstick}]},1).wait(1));

	// Selection_Indicator
	this.selectionInd = new lib.SelectionIndicator();
	this.selectionInd.name = "selectionInd";
	this.selectionInd.setTransform(-1,0,1,1,0,0,0,33,33);

	this.timeline.addTween(cjs.Tween.get(this.selectionInd).wait(59));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.4,-43.7,186.3,87.4);


// stage content:
(lib.NewInventory = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		// New inventory system because loading in 8 separate canvases is just way too much overhead.
		function handlerFactory(slot)
		{
			return function (evt)
			{
				let clip = this['slot' + slot];
				
				if (clip.currentFrame === 0)
					return;
				
				moInv.select(slot);
			};
		}
		
		const numSlots = 8;
		for (let i = 1; i <= numSlots; i++)
		{
			let clip = this['slot' + i];
			
			clip.on('click', handlerFactory(i).bind(this));
			clip.selectionInd.visible = false;
		}
		
		// So we don't have to keep polling with a tick event
		MOTAS.inventory.showItem = function (slotNum, item)
		{
			let clip = this['slot' + slotNum]
			if (item == null)
			{
				item = 0;
				clip.alpha = 1;
			}
			// else
			//	clip.alpha = .25;
			
			clip.gotoAndStop(item);
		}.bind(this);
		
		MOTAS.inventory.showSelected = function (slot)
		{
			this['slot' + slot].selectionInd.visible = true;
		}.bind(this);
		
		MOTAS.inventory.hideSelected = function ()
		{
			for (let i = 1; i < numSlots; i++)
				this['slot' + i].selectionInd.visible = false;
		}.bind(this);
		
		MOTAS.inventory.ready = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.slot7 = new lib.InventorySlot();
	this.slot7.name = "slot7";
	this.slot7.setTransform(418,32);

	this.slot6 = new lib.InventorySlot();
	this.slot6.name = "slot6";
	this.slot6.setTransform(353.9,32);

	this.slot5 = new lib.InventorySlot();
	this.slot5.name = "slot5";
	this.slot5.setTransform(289.9,32);

	this.slot4 = new lib.InventorySlot();
	this.slot4.name = "slot4";
	this.slot4.setTransform(225.9,32);

	this.slot8 = new lib.InventorySlot();
	this.slot8.name = "slot8";
	this.slot8.setTransform(483.9,32);

	this.slot3 = new lib.InventorySlot();
	this.slot3.name = "slot3";
	this.slot3.setTransform(160,32);

	this.slot2 = new lib.InventorySlot();
	this.slot2.name = "slot2";
	this.slot2.setTransform(96,32);

	this.slot1 = new lib.InventorySlot();
	this.slot1.name = "slot1";
	this.slot1.setTransform(32,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slot1},{t:this.slot2},{t:this.slot3},{t:this.slot8},{t:this.slot4},{t:this.slot5},{t:this.slot6},{t:this.slot7}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(337.5,73.5,178.79999999999995,-8.099999999999994);
// library properties:
lib.properties = {
	id: '0672E61409B5C24D810BC3A6ADFE92ED',
	width: 680,
	height: 150,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/NewInventory_atlas_1.png", id:"NewInventory_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0672E61409B5C24D810BC3A6ADFE92ED'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;