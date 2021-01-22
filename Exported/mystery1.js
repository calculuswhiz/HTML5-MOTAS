(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"mystery1_atlas_1", frames: [[0,0,1032,767],[1699,962,145,191],[1363,0,325,489],[1034,0,327,490],[1690,0,324,484],[1690,486,321,474],[1363,491,307,456],[310,769,273,429],[1462,962,235,427],[890,904,273,420],[1034,492,299,410],[0,769,308,396],[585,769,303,384],[1165,949,295,374],[585,1155,226,56]]}
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



(lib.CachedBmp_20 = function() {
	this.initialize(ss["mystery1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["mystery1_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["mystery1_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["mystery1_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["mystery1_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["mystery1_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["mystery1_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["mystery1_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["mystery1_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["mystery1_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["mystery1_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["mystery1_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["mystery1_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["mystery1_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["mystery1_atlas_1"]);
	this.gotoAndStop(14);
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


(lib.Symbol81 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AjLHiIgBgCIh1ACIgEgCIgCgDIAAu6IACgEIAEgBIAtAAIACAAIJXDbIACACIABACIAALMIgCAEIgDABIoGASIgBACIgEABgAk9HYIAjgBIAAuvIgjAAgAkQHXIJOgSIAArEIpOjXgAjIGQIgDgBIgCgEIAAsFIABgDIACgCIADAAIHfCgIADACIABADIAAJlIgCAEIgEABgAEIGGIAKAAIAApdIgKgDgAjDGGIHBAAIAApdInBiVg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9900").s().p("AkmnWIJNDXIAALDIpNATgAjjl9IgBADIAAMFIACADIAEACIHeAAIADgCIACgDIAAplIgBgEIgDgBIneigIgDAAg");
	this.shape_1.setTransform(2.25,0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9966").s().p("AknnYIAjAAIAAOwIgjAAgAEeGHIAApgIAKADIAAJdg");
	this.shape_2.setTransform(-2.2,-0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.7,-48.3,65.5,96.69999999999999);


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

	// Layer_1
	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(-257.95,-191.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.9,-191.9,516,383.5);


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
	this.shape.graphics.f("#CC9966").s().p("AgTACIABgDIAmABIAAACg");
	this.shape.setTransform(31.8,53.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AEqIaIp7gUIAAsrIKjj1IAAQ2g");
	this.shape_1.setTransform(0.025,-0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-54.1,67.5,108.2);


(lib.Symbol74 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AGazNMAAAAmbIszAAMAAAgmbg");
	this.shape.setTransform(-0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCFFFF").s().p("AmZTNMAAAgmZIMzAAMAAAAmZg");
	this.shape_1.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-123.9,84,247.9);


(lib.Symbol73 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(-36.2,-47.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.2,-47.6,72.5,95.5);


(lib.Symbol70 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00CCCC").s().p("AjKDKQhThTAAh3QAAh2BThUQBUhTB2AAQB3AABTBTQBUBUAAB2QAAB3hUBTQhTBUh3AAQh2AAhUhUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.6,-28.6,57.2,57.2);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ah501MAAAAprIDzifMAAAgl7gAA9i+QBNBxhNBw");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ah501IDyBRMAAAAl7IjyCfgAA9AiQAmg3AAg4QAAg4gmg5QAmA5AAA4QAAA4gmA3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.1,-134.4,26.299999999999997,268.8);


(lib.Symbol66 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ag2irQBMBwhMBwABnx5IjNhEMAAAAl7IDNiHg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ahmy9IDNBEMAAAAivIjNCIgAg2A1QAng3AAg4QAAg4gng5QAnA5AAA4QAAA4gnA3g");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.3,-122.4,22.700000000000003,244.8);


(lib.Symbol65 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhbFiQgYAHgbAAQgZgJgZgMIAAwwQAVg1AVgHQAdgKAXBcQAWg5AWgHQAqgOAbDDIAPB6QAfFAAAHwQhBAuhYgQAhbFiQAegIAbgTQAAkqgLjqQgIidgMh/QgPiRgShMAAPpRQAgiPAegOQA1gYAgGtQAfGsAAKaQh1Bri1iUQAFivAIieQgrACAsgX");
	this.shape.setTransform(19.625,-29.4417);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006666").s().p("AhOIsIAAwwQAVg1AVgHQAdgKAWBdQASBMAPCQQAMCAAICbQALDrAAErQgbASgeAJQgXAGgbABQgZgJgZgNg");
	this.shape_1.setTransform(8.225,-51.0738);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("AhBI9QgsADAtgXQAegJAbgSQAAkrgMjqQgHicgNiAQgOiQgThMQAXg5AWgIQAogOAdDDIAOB6QAgFAAAHxQgxAig8AAQgVAAgXgFg");
	this.shape_2.setTransform(16.9749,-49.2888);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99FFFF").s().p("AiUKvQAEivAIieQBYAQBBgtQAAnwgelBIgPh6QAfiPAfgOQA0gYAgGuQAfGsABKZQgyAtg8AAQhTAAhphWg");
	this.shape_3.setTransform(24,-27.3564);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Ajgy0IBTAYIFrAAAjgS+IAAB4IHBkmMAAAgiwInBiVIAACBIAAeFIBTgjIAegNID3ABIiKA9IgBAAAjgMVIBgABIABAAIA5gZIAUAAIAAAtIAwgXIAAg0AhGL9IgjAAIBAgeIAmAAgAjgLRIAABEIAAGpIBgAAIAAABIEIicIAAgaIBRAAACIKiIAAFnAiAMWIAAGoAiNKuIAA9K");
	this.shape_4.setTransform(22.475,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCC66").s().p("AgvDVIAAmpIBfABIAAGogAAwjTIAAAAg");
	this.shape_5.setTransform(4.825,100.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCC99").s().p("AhTEOIAAmnIAAAAIAygWIgyAWIA6gZIAUAAIAAAtIAugXIAAg0IAAAAIAAAAIhDAeIAAAAIBDgeIgnAAIg+AeIAiAAIgHADIgyAWIhggBIAAhEIBSgjIAegNID3ABIiLA9ICLg9IAAFmIAAAaIkHCcgAgFiyIgUAAIBCgeIAAA0IguAXgAgaiyIAAAAIgHADgAgaiyIABAAgAgaiygAg8iyIA+geIAnAAIhDAegAgaiygAC0kNg");
	this.shape_6.setTransform(18.025,94.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgovBIBRAXIAAdKIhRAjg");
	this.shape_7.setTransform(4.125,-24.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AjgS+IBgAAIAAAAIEIicIAAgZIBRAAIhRAAIAAlnIj3gBIgeANIAA9KIFrAAIlrAAIhTgXIAAiCIHBCWMAAAAiuInBEng");
	this.shape_8.setTransform(22.475,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-134.4,47,268.8);


(lib.Symbol60 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADYxbIjYhIMAAAAlHIDYiOMAAAghxIC4A+IAAe6Ii4B5AEEi7QBEBkhEBkACjipQBEBkhEBkAAAyjImPAAMAAAAlHIGPAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AjHSjMAAAglFIGPAAMAAAAlFg");
	this.shape_1.setTransform(-20,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AjHyiIDXBIIC4A9IAAe6Ii4B5MAAAghwMAAAAhwIjXCNgAgkAfQAigyAAgyQAAgygigxQAiAxAAAyQAAAygiAygAA7ANQAjgyAAgyQAAgygjgxQAjAxAAAyQAAAygjAygAAQQWg");
	this.shape_2.setTransform(20,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-119.7,82,239.5);


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
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol58, new cjs.Rectangle(0,0,162.5,244.5), null);


(lib.Symbol56 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol56, new cjs.Rectangle(0,0,163.5,245), null);


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
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol54, new cjs.Rectangle(0,0,162,242), null);


(lib.Symbol52 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol52, new cjs.Rectangle(0,0,160.5,237), null);


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

	// Layer_1
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol50, new cjs.Rectangle(0,0,153.5,228), null);


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
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(0,0,136.5,214.5), null);


(lib.Symbol46 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol46, new cjs.Rectangle(0,0,117.5,213.5), null);


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

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,136.5,210), null);


(lib.Symbol42 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,0,149.5,205), null);


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

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(0,0,154,198), null);


(lib.Symbol38 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,151.5,192), null);


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

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,147.5,187), null);


(lib.Symbol33 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("ABUHyIAAmBIhiAAIAADkIgkAVIhKAAIAAj5IhyAAIAAFmIguAbIhkAAIAAujIEshAIBGAAIAAG2IGPAAIAAGQIgeAVIhHAAIAAk5IhUAtIABF5IgoAbgAjujeIAAD9IBygtIAAjzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-49.7,77,99.5);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C211F").s().p("AhUgGIAKAAICfAAQgFAFgGABIhOAGIgUABQgmAAgWgNg");
	this.shape.setTransform(134.5,183.696);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(3,3,3,0.82)").s().p("AhegGIC9AAIAAAJIiBAEIgMAAQghAAgPgNg");
	this.shape_1.setTransform(89.5,159.7225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(2,2,2,0.808)").s().p("AgHDXIAAm3IAJAAQAAC5AGC4QABA1gQAbg");
	this.shape_2.setTransform(99.8059,137.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D4B46").s().p("AgEDSIAAmjIAJAAIAAGjg");
	this.shape_3.setTransform(82.5,136);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C3628").s().p("AABDQIgKgIQAQgWgCgwQgFipAAiqIAKAAIAAGjg");
	this.shape_4.setTransform(81,136);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.404)").s().p("AgHEJQAGkmAAknIAJAAIAAKJQgQgSABgqg");
	this.shape_5.setTransform(115.1723,147.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1C2212").s().p("AgHETQAGkmAAknIAJAAIAAJ1QgQgIABggg");
	this.shape_6.setTransform(117.1972,146.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(22,26,9,0.992)").s().p("AgTgFIAdAAIAKAAIAAAJIgKABIgLABQgQAAgCgLg");
	this.shape_7.setTransform(116,99.6283);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#404E2B").s().p("AgBFNQgGgDgFgFQAQgXgBgvQgFkmAAknQAQAWgBAwQgGEmAAEnIAAAKg");
	this.shape_8.setTransform(124.3277,148.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0E110A").s().p("AgdAKIAAgKIAwgEIABgFIAKAAIAAATg");
	this.shape_9.setTransform(121,114);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3F4D48").s().p("AABAJIgKgIIAAgJQAUgGgBAPIAAAKg");
	this.shape_10.setTransform(125.0272,112.9182);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F2511").s().p("AAAAUIAAgKIAAgFQgaACgDgQIAAgKQAdAFAVANIAJABIAAAUg");
	this.shape_11.setTransform(121,101);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#43514D").s().p("AgHGpIAAgyQAQAIgGAgIgBAKgAgHj+QARAWgCAwQgGCHAACGQAAB9gEB9QAAAFgFAFgAgHmoQAQADgKAZIgGACg");
	this.shape_12.setTransform(126.7853,140.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(1,1,1,0.408)").s().p("AExgGIDSAAQgFAFgGAAIiBAIIgPAAQgkAAgTgNgAoCgGICqAAIgKAFIhQAHIgUABQgmAAgWgNg");
	this.shape_13.setTransform(93.5,185.7292);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1C2220").s().p("AgEAIQgrAAgRgQICBAAQgWARgsAAIgDgBg");
	this.shape_14.setTransform(50.5,183.8507);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3A4642").s().p("Ag2gEIBtAAIAAAEIhtAFg");
	this.shape_15.setTransform(13.5,157.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(3,3,3,0.831)").s().p("AhKgGICVAAIAAAJIhOADIgRABQgkAAgSgNg");
	this.shape_16.setTransform(13.5,159.7122);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(26,32,30,0.98)").s().p("AgHkNQAQASgCAqQgFB9AAB8QAABugEBuQAAAFgFAFg");
	this.shape_17.setTransform(19.7605,130);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.376)").s().p("AgHEOIAAolIAJAAQAAD6AGD5QABAqgQASg");
	this.shape_18.setTransform(21.8028,132);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#384440").s().p("AhUDaIAKAAICLAAIAAmjIAKAAQAAC0AGCzQACAvgSAXIhPADIgRABQgjAAgSgOgAFFjdIqTAAIAAgKIHpAAIAUAAICgAAIAAAKg");
	this.shape_19.setTransform(90.5,135.2122);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#262E25").s().p("AAGGJIgUgSIAKAAQAQgXgBgvQgGknAAkmIAAhuIAKAAIAAMVg");
	this.shape_20.setTransform(42.5,143.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#171B0D").s().p("AmAAFIAAgJIMBAAIAAAJg");
	this.shape_21.setTransform(82.5,102.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3E4B2A").s().p("AgHmFIAHACIACAIIAABuQAAEmAGEnQABAvgQAXg");
	this.shape_22.setTransform(42.8277,142);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12160C").s().p("AAAAKIgCgIIgHgCIAAgJIAJAAIAKAAIAAAJIAAAKg");
	this.shape_23.setTransform(43,103);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(2,3,0,0.616)").s().p("AAADNQgEjNAAjMIAJAAIAAGZg");
	this.shape_24.setTransform(73.5,135.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0D100E").s().p("ABkAFIiLAAIgKAAIgKAAIgyAAIAAgJQBtAABuAEIAAAFg");
	this.shape_25.setTransform(87,114.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(4,4,4,0.835)").s().p("AETAFIiWAAIAAgJICfAEIABAFgAiQAFIiMAAIAAgJICWAEIAAAFg");
	this.shape_26.setTransform(87.5,114.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333D32").s().p("AiQAFIgKAAIgoAAIgeAAIi0AAIAAgJIMBAAIAeAAIAKAAIgDAHIgHACg");
	this.shape_27.setTransform(84.5,103.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#475550").s().p("Ak6E2QAYAPgYAFgAkwEEQAYAPgYAFgAkSBuQAYAUgYAKgAkIBGQAYAPgYAFgAj+AUQAYAPgYAFgAjWizQAZAUgZAKgAjIjIQgDgegqAIQguALgXgSQArgRBDAGIAKABIAAAyQgFgFgBgGgAEnj5IAAgUQALAFAGAHIADAIgADXkNQAngTgYAYIgNABQgCgBAAgFgACbkXQAogTgZAYIgNABQgCgBAAgFgABfkhQAngTgYAYIgNABQgCgBAAgFgAAjkrQAngTgYAYIgNABQgCgBAAgFgAgYk1QAngTgYAYIgNABQgCgBAAgFgAhUk/IAIgCIACgIIAKAAIACAJIADAGQgJAFgGAAQgIAAgCgKgAiQlJIAeAAIgCAGQgKAEgGAAQgKAAgCgKg");
	this.shape_28.setTransform(76.5,137);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#384428").s().p("AgKEvQgCgDAAgFQAQgWgCgwQgEiHAAiGQAAh9AEh9QAAgFAFgFQAAEOAGENQABAwgQAWg");
	this.shape_29.setTransform(6.3059,125.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#11150D").s().p("AgQAMQgDgCAAgFIAAgJIAHgCIADgIQAKAJASAFIABAFIgdAAIAAAKg");
	this.shape_30.setTransform(12,96.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2A342C").s().p("AgBE5IgNgSQARgWgCgwQgFkNAAkOIAJAAIAIALIACAJIgKAAIAAJXIAAAKg");
	this.shape_31.setTransform(7.5,126.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2F3920").s().p("AgEAFIgKAAIAAgJIAbAEIACAFg");
	this.shape_32.setTransform(8.5,94.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#050605").s().p("AgEAKIgCgJIgIgKIATAAIAKAAIgDAIIgHABIAAAKg");
	this.shape_33.setTransform(9.5,96);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.592)").s().p("AlsAFIAAgJILZAAQgFAEgGAAIiBAFg");
	this.shape_34.setTransform(36.5,80.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#242A11").s().p("AgMAAQhagphSg1IAKAAQCzBVCyBYQACABAAAFIgKAAIAAAKQhbgxhggug");
	this.shape_35.setTransform(24.5,93.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(61,69,25,0.992)").s().p("AlTAKIgCgJIgIgKIK7AAIAAAJIqnAAIAAAKg");
	this.shape_36.setTransform(40,83);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#141809").s().p("AABAIIgKgIIAAgJIAJAAIAIAKIACAJg");
	this.shape_37.setTransform(5,83);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2A331B").s().p("AAAI/QgEjDAAjDIAJAAIAAGGgAgEiaIAAmkIAJAAIAAAKIAAGag");
	this.shape_38.setTransform(75.5,96.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#53622D").s().p("AgOAFIAAgJIAdAAIAAAJg");
	this.shape_39.setTransform(77.5,39.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3F491C").s().p("AgEC0IAAlnIAJAAIAAFng");
	this.shape_40.setTransform(75.5,21);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(3,4,1,0.62)").s().p("AgHmPIAJAAIAAAKIAACCQAAEmAGEnQABAwgQAWg");
	this.shape_41.setTransform(73.8277,40);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#282E11").s().p("AgEAFIgKAAIAAgJIAbAEIACAFg");
	this.shape_42.setTransform(76.5,2.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#505F2D").s().p("AgTgFIAnAAIAAAJIgKABIgLABQgQAAgCgLg");
	this.shape_43.setTransform(121,53.6283);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2C362A").s().p("AADKDQgDgDAAgFIAAgKQAAknAGknQABgvgQgWIAAgUIAKAIIAJACIAAAKIAAJXIAAAeIAAAygAgJiaIAAgUQARgcgCg0QgGjDAAjDIAKAAIAAGkIAAAUIAAAeIgCAJIgIALg");
	this.shape_44.setTransform(125,118.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#394541").s().p("AgHjRQARAWgCAwQgGCHAGCGQACA1gRAbg");
	this.shape_45.setTransform(97.7853,68);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1A1F1E").s().p("AgOgFQAPAAANAEIABAFIgJABIgJABQgMAAABgLg");
	this.shape_46.setTransform(86.4978,85.6188);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1D2212").s().p("AAgAXQgggWgxgFIAAgKIAAgKIAKAAIAnATIAKABIADAHIAHACIAKAAIASAEQACABAAAFIgKAAIAAAKg");
	this.shape_47.setTransform(80,83.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.408)").s().p("AgHjgQARAcgCA0QgGCMAGCLQACA5gRAhg");
	this.shape_48.setTransform(115.7853,74.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(28,34,17,0.996)").s().p("AAAD2QAAi5AEi4QAChIgPgwQAUgGgBAQIAAAKIAAHVg");
	this.shape_49.setTransform(117.0272,74.4182);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(1,2,1,0.808)").s().p("AgEDcQgFjcAAjbIARAEIACAGIgKAAIAAGtg");
	this.shape_50.setTransform(100,69);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#45534E").s().p("AjbK8IAAsVIC0AAQADARAZgLIACgGIAnAAIgCAIIgIACQADARAWgMIgDgGIgCgJIIcAAIAABQIigAAIgDgIQgGgHgLgFIAAAUInpAAIAAAJIgKAAQhDgGgrAQQAXASAugKQAqgJADAeQABAGAFAFIAAKKgAjRI6QAYgFgYgPgAjHIIQAYgFgYgPgAipF8QAYgKgYgUgAifFKQAYgFgYgPgAiVEYQAYgFgYgPgAhtBaQAZgKgZgUgAFAgdQAAAFACABIANgBQAOgOgHAAQgEAAgSAJgAEEgnQAAAFACABIANgBQAOgOgHAAQgEAAgSAJgADIgxQAAAFACABIANgBQAOgOgHAAQgEAAgSAJgACMg7QAAAFACABIANgBQAOgOgHAAQgEAAgSAJgABQhFQAAAFACABIANgBQAOgOgHAAQgEAAgSAJgApDG4IAApXIAKAAIAKAAQAAAFADACIAHADQAjAYArAUQACABAAAFIAAIbgAEtjxQgmgRgrgLIgCgGQgMgEgQAAQAAgFgCgBIgSgEIAAmaIAUAAQBDAHAsAeIAJADIAAGkg");
	this.shape_51.setTransform(66,113);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#45532C").s().p("AJHK/QgYgLgRgRIAAp2IA8AAQAAEnAGEnQABAvgRAXgAjjLBQgpgJAAgzQABknAGknQABgwgRgVIgCgGQhtg6htg4IgCgFQgSgGgKgJIgKAAIgCgGIgcgEIAAAKQgFAFAAAFQgFB9AAB8QAACHAFCHQACAwgRAWQgFgFgGgCIgKgFQgJg6AAg8IAApNIAUAAIALAIIAJACQBRA1BbAqQBhAuBbAxIAAMLgACaHFQgMgMgUgGIAAmGIAyAAQAACqAFCqQACAwgRAWgAJRhgQgWgNgdgFIAAnWIAHADIADAHQADARAbgGIAKgBIAUAAQAADDAGDDQABA0gRAcgACikTIgogTIAAmaIAeAAQAFAFAGADIAJACIAAAKIAAGag");
	this.shape_52.setTransform(63.8059,110.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2D3729").s().p("AgBDQIgDgIIAAmZIAJAAIAAGjg");
	this.shape_53.setTransform(81.5,63);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3C4A45").s().p("AgODSIAAmjIAKAAIATAAIAAAKIgTAAIAAGZg");
	this.shape_54.setTransform(83.5,63);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333C2C").s().p("AAAAKIgJAAIAAgKIAHgBIACgIIAKAAIAAATg");
	this.shape_55.setTransform(82,41);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4B592E").s().p("AgDADQgGgDgFgEIAdAAIgDAHIgHACg");
	this.shape_56.setTransform(80.5,40.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#606F2A").s().p("AAPAFIgKAAIgdAAIAAgJIAwAEIABAFg");
	this.shape_57.setTransform(81.5,39.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(3,4,2,0.98)").s().p("ACFEdIgKgCQiYg4iJhIIAAgKIAKAAQgBARAVgGIAKgBQArALAmARIAJACQARgbgCg1QgFiGAFiHQACgwgRgWIgJgDQgsgehDgHIAAgKIAUAAIAeAAQCAAkB5ArIAKABQAQAxgCBHQgEC4AAC5gAgLDNIAFAAQBJAaBDAgIAJACQARghgCg5QgFiMAFiLQACg0gRgcIgKgCIiCgmIgCgGIgRgEQAADcAFDbg");
	this.shape_58.setTransform(100.7358,70.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2F3613").s().p("AgOgFIAcAEIABAFIgJABIgJABQgMAAABgLg");
	this.shape_59.setTransform(85.4978,40.6188);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#23290E").s().p("AgOAFIAAgJIAbAEIACAFg");
	this.shape_60.setTransform(88.5,41.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#060704").s().p("AAAAKIgTAAIAAgTIAKAAQgBAQAUgGIAKgBIAAAKg");
	this.shape_61.setTransform(85,41);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#505C22").s().p("AgOgFIAdAAIAAAJIgJABIgJABQgMAAABgLg");
	this.shape_62.setTransform(79.4978,3.6188);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#556124").s().p("AgOgFIAKAAIATAAIAAAJIgJABIgJABQgMAAABgLg");
	this.shape_63.setTransform(83.4978,4.6188);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1A1E0B").s().p("AgEAKIgKAAIAAgKIAUgHIAJgCIAAAJIgKAAIAAAKg");
	this.shape_64.setTransform(82.5,3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#24290F").s().p("AgOAKIAAgKIAIgBIACgIIARAEQACABAAAEIgKAAIAAAKg");
	this.shape_65.setTransform(86.5,4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#404A1B").s().p("AgOgFIAdAAIAAAJIgJABIgJABQgMAAABgLg");
	this.shape_66.setTransform(97.4978,7.6188);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4F5B22").s().p("AgOgFIAdAAIAAAJIgJABIgJABQgMAAABgLg");
	this.shape_67.setTransform(92.4978,6.6188);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#293011").s().p("AgIAIQgGgDgFgFIAHgBIADgIIAdAAIAAAJIgUAAIAAAKg");
	this.shape_68.setTransform(91,5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#65742B").s().p("AAPAFIgdAAIgKAAIAAgJIAdAAIAUAAIAAAJg");
	this.shape_69.setTransform(91.5,3.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(2,2,0,0.804)").s().p("AheAFIAAgJQBeAABfAEIAAAFg");
	this.shape_70.setTransform(83.5,0.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#4A551F").s().p("AAAAKQAAgFgBgBIgSgEIgUAAIAAgJIBPAFIAAAEIgeAAIAAAKg");
	this.shape_71.setTransform(88,3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#23280E").s().p("AgOAKIAAgKIAAgJIAdAAIAAAJIgTAAIAAAKg");
	this.shape_72.setTransform(95.5,6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#63722A").s().p("AgOAFIgKAAIAAgJIAKAAIAdAAIAKAAIgDAHIgHACg");
	this.shape_73.setTransform(95.5,4.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1C200C").s().p("AgJAKIAAgKIAAgJIATAAIAAAJIgKAAIAAAKg");
	this.shape_74.setTransform(108,9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#323A15").s().p("AgOAFIAAgJIAcAEIABAFg");
	this.shape_75.setTransform(100.5,6.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#090B03").s().p("AgTAFIAAgJIAdAAIAKAAIgCAGIgIADg");
	this.shape_76.setTransform(101,7.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#4E5A21").s().p("AgOgFIAdAAIAAAJIgJABIgJABQgMAAABgLg");
	this.shape_77.setTransform(105.4978,9.6188);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#68782D").s().p("AgTAFIAAgJIAdAAIAKAAIgDAHIgHACg");
	this.shape_78.setTransform(105,6.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#5F6D28").s().p("AAUAPIgBgFIgcgFIgUAAIAAgJIAHgCIADgIIAnAJIAKABIAAAJIAAAKg");
	this.shape_79.setTransform(100,5.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#050602").s().p("ACbAtIAAgKIAUAAIAKAAIgCAIIgIACgAAZAPIAAgKIAUAAIAKAAIAAAKgAhogOIAAgKIAUAAIAKAAIAAAKgAiQgYIAAgKIAKAAIAKAAIAKAAIgDAIIgHACgAi4giIAAgKIAKAAIAUAAIgCAIIgIACg");
	this.shape_80.setTransform(101.5,7.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#080903").s().p("AA3AUIgKAAIAAgKIAKAAIAeAAIAAAKgAhKgJIgKAAIAAgKIAUAAIAUAAIAAAKg");
	this.shape_81.setTransform(103.5,8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2A3011").s().p("AA4AXQgGgDgFgFIAHgDIADgHIAdAEIABAGIgUAAIAAAKgAhJgGIgLgIIAIgDIACgHIAeAAIAAAKIgUAAIAAAKg");
	this.shape_82.setTransform(110.5,9.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3F491B").s().p("AgOgFIAdAAIAAAJIgJABIgJABQgMAAABgLg");
	this.shape_83.setTransform(110.4978,10.6188);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#090A03").s().p("AgTAFIAAgJIAdAAIAKAAIgDAGIgHADg");
	this.shape_84.setTransform(114,10.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#616F29").s().p("AAAAKIgTAAIgKAAIAAgKIAHgCIADgHIAnAJIAKAAIAAAKg");
	this.shape_85.setTransform(109,7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#343C16").s().p("AgOAFIAAgJIAdAAIAAAJg");
	this.shape_86.setTransform(113.5,9.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(62,72,26,0.996)").s().p("ABLAZIAAgKIAcAFIACAFgAgOAFIAAgJIAbAEIACAFgAhogOIAAgKIAcAEIACAGg");
	this.shape_87.setTransform(104.5,5.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#5D6B28").s().p("AgEAFIgeAAIAAgJIAeAAIAdAAIAKAAIgDAGIgHADg");
	this.shape_88.setTransform(112.5,8.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(0,0,0,0.588)").s().p("ABLAOIAdAEIABAGIgJABIgKABQgMAAABgMgAgOgFIAcAEIABAFIgJABIgJABQgMAAABgLgAhogZIAdAEIABAGIgJABIgKABQgMAAABgMg");
	this.shape_89.setTransform(106.4978,3.6188);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#36402B").s().p("AgEDIIAAmPIAJAAIAAGPg");
	this.shape_90.setTransform(125.5,34);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#5F6D2C").s().p("AgJDIIAAgKQAQgSgBgqQgGikAAilIAKAAIAAGPg");
	this.shape_91.setTransform(124,34);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#42504D").s().p("AgHgJIAAmQIAJAAIAACgQAAEmAGEnQABAvgQAXg");
	this.shape_92.setTransform(126.8277,55);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#535F23").s().p("AgOgFIAdAAIAAAJIgJABIgJABQgMAAABgLg");
	this.shape_93.setTransform(122.4978,13.6188);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#68772C").s().p("AjZHvIgKAAQAAgFgCgBQiyhZi0hVIAAgKIKnAAQAyAGAgAWIAIACQCKBICZA4IAJACQADARAbgGIAKgBQADARAbgCIAAAFgAIUAFIgCgGIgIgDIABgKQABgQgWAGIgJgBQh6griBgkIgBgFIgdgFIgBgGIgdgEIgBgFIgxgFIgeAAIAAloIAUAAQgBARAWgGIAJgBIAKAAQgBARAWgGIAJgBIAUAAIAUAAQAFAFAGADIAJACQgBAQAWgFIAJgBIAKAAIAKAAQgBAQAWgFIAJgBIAeAAIALAIIAJACQgBARAWgGIAJgBIAKAAIAKAAQgBARAWgGIAJgBIAeAAQAFAFAGADIAJACIAUAAQAFAFAGADIAJACQgBARAWgGIAJgBQAAClAGClQABAqgRARg");
	this.shape_94.setTransform(65.7811,52.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#070702").s().p("AgOAFIAAgJIATAAIAKAAIAAAJg");
	this.shape_95.setTransform(122.5,12.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#5F6D29").s().p("AgdAKIgKAAIAAgKQAKAAAIgDIACgGQAVAIAcABIAKAAIgBAFIg6AFg");
	this.shape_96.setTransform(127,11);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#62702A").s().p("AAAAPIgJAAIgBgGIgdgEIgKAAIAAgJIAHgDIADgHIBPASIAKABIgCAGQgIAEgKAAg");
	this.shape_97.setTransform(120,9.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#282F11").s().p("AgIAIQgGgDgFgFIAIgBIACgIIAdAAIAAAJIgUAAIAAAKg");
	this.shape_98.setTransform(121,12);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(28,33,13,0.996)").s().p("AgsgDIA6gEIABgGIAcAFIACAFQgDARgbgBQgqABgRgRg");
	this.shape_99.setTransform(129.5,12.35);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(0,0,0,0.173)").s().p("AgHtgQAQAXgBAvQgGEnAAEnIAAJNQAADrgEDrQAAAFgFAFg");
	this.shape_100.setTransform(145.8277,98.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(12,15,14,0.976)").s().p("AgHtMQAQAWgBAwQgGEnAAEnIAAJNQAADXgEDXQAAAFgFAFg");
	this.shape_101.setTransform(143.8277,98.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(0,0,0,0.992)").s().p("AIDOYIgJgCIhHgwIAAqKIgBgFIifgFIAAAKIgKAAIAAG4Ii+AAIgIgCQgXgRgdgLIAAmaIAAgFIiVgFIAAAKIAAK8IiqAAQgWgSgbgNQgdgQABg1QAHknAAknQAAgUgFgSQgHgUgTgKIhjg0IgKAAIAAImIiWAAQgbACgGgVQgCgGgGgCIgJgEQgKhPAAhQIAApNIJOAAICBgFQAFAAAFgFQASgWgCgwQgGknAAknIAAiCIC+AAIAeAAQgBARAVgGIAKgBQAcACAWAHIAKABQgBARAVgGIAKgBIA8AKQgBAQAVgFIAKgBQCJAcCGAfIAJABIAAbBgApIAoQBuA4BsA6IACAGQARAWgBAwQgGEnAAEnQgBAzApAJIAVASIAJACQARARArAAQAwABAWgSIAAqKIAAgyIKTAAIgBAFIgxAFIAAAKIgKAAQAAEngGEnQgBAgARAIQARARAYALIAJACQAFAFAGADIAJACQAAAFADADIAHACQAcASA0gFIBPgIQAGAAAFgFQAFgFAAgFQAFjXAAjXIAApNQAAknAGknQABgwgRgWIAAgFQg1gCglgNIgCgGIgcgEIgKAAQgcgCgWgIIgKgBIhQgTIgKAAIgCgFIgcgFIgKgBIgogJIgKAAIgCgFIgcgFIgKgBIgogJIgKAAIgCgGIgcgEIgUAAIAAgFIhQgFIgJACIgVAIIgeAAIgCgGIgcgEIAAAKIAAFoIAAGkIAAAKIq7AAIgKAAIAAAKIgUAAIAAJNQAAA8AKA6IAJAFQAGACAFAFQAAAFACADIAIACIANASIAHACIBugFIAAgFQAFgFAAgFQAFhuAAhuQAAh9AFh9QACgqgRgSQAAgFgCgBQgrgUgjgYIAAgKgAAeJiIAFAAQAUAGANAMIAHACIALAIIAJACQAXASAvgFIBQgDQASgXgCgvQgGi0AAi0IAAgFQhugFhuAAIAAAKIgKAAQAADDAFDDg");
	this.shape_102.setTransform(72.5,93);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#46544F").s().p("ACMNNIABgKQAGgggRgIIAAgeQAFgFAAgFQAFh9AAh9QAAiHAFiHQACgwgRgWIAAgKIABgKQAAgQgVAGIAAhQIAHgCIADgIIAIgLIACgJIAGgCQALgYgRgDIAAgUQARgXgBgvQgGknAAknIAAigICgAAIAAaZgAkrJJIAAmkICMAAIAAGkg");
	this.shape_103.setTransform(113,98.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(14,17,11,0.996)").s().p("AhAAKIgKAAIgKAAIgKAAIAAgKIAAgJIAKAAQARAQArAAQAaAAADgQQAlAMA1ACIAAAFg");
	this.shape_104.setTransform(133.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,146.7,186.5), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006666").ss(2.5,1,1).p("AINjHQgZgKgUADIhiAKQgfAHgZgLIg0gCQgaAJgTgFIgxgCIg3AHQgYAFgagLACVixIgIBiQABAagJAZQgIAagDAVIgEAxQgCAagKAZQgKAZAIAQQAJARgIgEABNixIgKAuQgGAZgCAcQgCAdgFAWIgJAtQgDAZgIAYIgSBjQACADgDAEAF6ixQAIATgCAdQgBAcACAYQACAZgBAbQgBAaACAUIAGBnQAAAaAHAWAEuixQgIAcAKASQAKATgGAcQgGAcAAAbIgBA3QgBAdACAUIAABiADlixQgBAVAEAbQAFAbgCAZQgCAZgKAXQgJAXgEAZQgEAbAAAVQAAAWAHAdQAHAdgIAHQgJAIAFALAIWixQAFAXAJAYQAJAZAEAZQAFAagEAaQgDAaAIAXQAIAZAFAZIANA0QAHAagBAIQgBAIADAIAHHixQgFAcANASQANATgDAcQgDAcADAbIAGA3QACAcAEAVIAMBTQABASABgDAKnixIAeBkQAIAeAJATQAJATACAVQACAWAKAaIATAwQAIAWAFAIQAFAIACAbAJfixQAGAUAMAaQAMAbAGAXQAFAYgCAWQgCAXAEAYQADAZAIAVQAHAUAPAcQAPAdgEAGQgFAHAIAZAQiBtQgNgXgKgXQgJgWgNgWQgNgUgJgXIgXgyQgNgcgLgMQgLgLgLgSQgLgSgJgmIhlgCIhlAKQgaACgYgCIhigIAL4ixQAIAZAMAXIAVAtIAPAvQAGAZANAUQAMAWAGAXIAOA2QAIAfAEAIIANAbANOixQgBAPAQAaQARAaADAXQAEAXAKAWIAVAuQAKAZAPATQAQAUAMAZQAMAZAGAZAM5DIIAwACQAZAFAbgEICNgJQAPgFgCgQIgJgnAPnCoIACAFAHADIIAzAHIAxgDIAzgKQAagEAVAEIAwAIQAZADAggEIAvgBACqDIQAiAFAPgGIAtgDQAfAEAXgEQAXgEAWAJIA5gBAjODIIBhgFIBnAIIBsgIIApAFApgjHQgZAHgbgCIg1gCIgnAFQgNAHgTAaQgTAagTATIhABKApmixIhABZQgLAWgOAPIg9BJIgaAmQgMATgWAXAnNixQgDAVgWAVQgVAVgMAaQgMAbgMAQQgNAQgIAbQgIAZgVALAlKjHIg2gDIgxAFQgbAFgVgGIgyADQgdAIgUgMAl+ixIgWAyQgJAUgMATIgcAqQgOAXgSARQgRAPgEAdQgEAdgTATAoXixIhsCmQgUAcgNAMQgMAMgPAeQgOAegOAIAjmixQgJAbgLATIgVArQgJAZgKASIgTAuQgJAcgNAXQgOAWgCAZQgBAYgWAVAk0ixQgJAWgMAXIheCqIgXA0QgJAaAAAMQABAMgeAhAAvjHIgzgFIgzADIgvAKIiUgBIg0gHAgDixIgJAxQgDAYgHAWIgPAwQgIAagCAVQgCAWgKAXQgJAYgGAgQgGAfgEAJIgGATAicixQgKAbgLAUQgLAVgGAZQgGAZgJARIgSAuQgIAfgHAWQgIAXgLAYAhRixQgTAWgFAYIgKAwQgFAXgNAYQgNAYgDAVIgJA2QgGAfgJARQgJASACAOQADAPgOAPAqyixIh9CdQgNATgWASQgXATgHAUAkPCCIgQArAl9CpQABALgDgHAoeBuIgkA/ApIDIIAtgCQAfgBAZABIAxAEIDIgCApgA5IgVAuQgHARgLANIghAoArrCEQgDgGgZAvAv0DIIAyADIBkgFIBnAIQAdAFAVgKQAWgJAcAJIAvgBAtJB8QgSAKgEAVQgDAVgLgDAuBBNIgdArQgNAVgLAGQgLAGgOAUAuIgSQgZAQgPAXQgPAZgOANIhaBnQgPASAAALQABAMAlgD");
	this.shape.setTransform(-0.1584,0.0473);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009999").s().p("AxLDIIFemPIZxAAIDIGPg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-21.9,220,44);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AgbBLQgZgBgagIQgPgdgkgZQERgDhMhTIACABIAmAJQAcAJgHAWQgHATghAcQhGA9gtAAIgBAAg");
	this.shape.setTransform(7.77,0.4252);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhcAMIgFgCQgpgQgugMQAfgSAlgEICqgHIBzAJQBLBTkQADQgbgTglgRg");
	this.shape_1.setTransform(-2.2999,-3.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-7.9,41.6,15.8);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAjgIAAgZQAAg5BdgoQAcgNAggIAAAjgIAtAHIBBANQAegRAmgEICrgHIByAJIADAAIAlAKQAcAJgHAWQgGATghAcQhHA+gvgBQgZAAgagIAmvitQBngaCBAAQBtAABaASIAtALIASAFIBDAYIAkASQBkA1AABGIAAGQIukAAIAAmQQAAhSCIg7QAugTA1gNIACgBQCBg4C4AAIB0AGABujMQAuAMApASIAEACQAmAQAaATQAkAaAPAdQAKAUABAWIAABpQCUiPCmheIAAhNQAAg5hegoQhegpiFAAQhdAAhKAUQBWggB1AAQCBAABaAnQBbAnABA3IAAEKIgaAZIg7AAIj/DuIAABMIg9A9AKBhzIAABWIAAA2AKBisIAAA5AIMi2IB1AKAFHCQIAAhPAFHEHIAAh3IE6kDAKBgdIg7A2");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ah9BqQCTiQCmheIAAA5Ik5EDgAhVgiQgZAAgagIQgPgdgkgaQERgDhMhTIADABIAlAJQAcAJgHAWQgGATghAcQhGA+guAAIgBgBg");
	this.shape_1.setTransform(45.325,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999933").s().p("ACVAAQAAhGhkg1IglgSIhBgYIgTgFIgtgLQhagShtAAQiBAAhoAaIACgBQCCg4C4AAIB0AGIAtAHIBBANQAuAMApASIAEACQAmAQAaATQAkAaAPAdQAKAUAAAWIAABpIAABPIE6kDIAABWIAAhWIAAg5IAAhNQABg5hegoQhegpiFAAQhdAAhKAUQBVggB2AAQCBAABaAnQBbAnAAA3IAAEKIgaAZIAAg2Ig6A2IkADuIAAh3IAAB3IAABMIg8A9g");
	this.shape_2.setTransform(11.75,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwArQAAgWgKgUQAaAIAZAAQAuABBHg9QAggcAHgTIB0AKQilBdiUCQgAithYIgEgCQgpgSgvgMQAfgRAmgEICrgHIBxAJQBMBTkRADQgagTgmgQg");
	this.shape_3.setTransform(37.55,-8.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999966").s().p("AqNGKIAAmPQAAhTCIg7QAugTA1gNQBngaCBAAQBtAABZASIAuALIASAFIBDAYIAkASQBkA1AABHIAAGPgAJTATIA7g2IAAA2gAIZi8QAHgWgcgJIglgKIgDAAIhygJIirAHQgmAEgeARIhBgNIgugHIAAgZQAAg5BegoQAcgNAggIQBKgUBdAAQCFAABeApQBeAoAAA5IAABNg");
	this.shape_4.setTransform(-1.275,0.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.6,-40.9,135.3,81.9);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("Ai6HkIAAvXIgCgPIF5AAIAAPPIgvAAIkjA2g");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.8,-51.5,37.7,103);


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
	this.shape.graphics.f("#FFFFFF").s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-240,640,480);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCC99").s().p("AhoCwIAAlfIDRAAIAAFfg");
	this.shape.setTransform(-12.25,0.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-17,21.1,35.2);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("Ag4gRQAGAIAAAJIgCAMIgBADIgHAJQgJAJgOAAQgOAAgJgJQgKgKAAgNIADgLIAHgMQAJgJAOAAQAOAAAJAJIAEAEQBggcBKAaIADAeQhFgchiAe");
	this.shape.setTransform(8.325,0.1048);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgVANQgJgKAAgMIACgMQARAgAqgHIgGAJQgKAJgOAAQgMAAgKgJg");
	this.shape_1.setTransform(-0.225,1.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AhygCIAGgLQAKgKAOAAQANAAAKAKIAEAEQBggdBKAaIACAeQhEgbhiAeIADgMQAAgKgJgIQAGAIAAAKIgDAMIgBADIgOABQgfAAgOgbg");
	this.shape_2.setTransform(8.45,-0.7347);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-4.3,-4.2,25.3,8.7), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AguiNIAAEbIBdAAIAAkbgAAcAcQgBgLgHgHQgIgHgLAAQgKAAgIAHQgHAHAAALIAAABQgBALAIAIIAKAHIADAAIAAA8IALAAIAAg8QAHgBAGgGQAIgIAAgLg");
	this.shape.setTransform(-0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgGA4IAAg7IgCAAIgKgHQgIgHAAgMIAAgBQAAgKAIgIQAIgHAKAAQALAAAIAHQAHAIABAKIAAABQgBAMgHAHQgGAGgHABIAAA7g");
	this.shape_1.setTransform(0.1235,5.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AguCOIAAkbIBdAAIAAEbgAgRAKQgHAHAAALIAAABQgBALAIAIIAKAHIADAAIAAA7IALAAIAAg7QAHgBAGgGQAIgIAAgLIAAgBQgBgLgHgHQgIgHgLAAQgKAAgIAHg");
	this.shape_2.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-5.7,-15.2,11.4,30.4), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Aj4nMIAAOZIHxAAIAAuY");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCC99").s().p("Aj3HNIAAuZIHvABIAAOYg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.8,-47,51.7,94.1);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666666").ss(0.3,1,1).p("AgkhMQgngHgegXQgrggAAguQAAgvArghQAsggA9AAQA+AAArAgQAsAhAAAvQAAAugsAgQgdAXgnAJIAAAGQgCASgJAOQgLAQgPAAQgOAAgLgQQgKgOgBgSIAAgGAAAiTQgtAAghgRQghgQAAgXQAAgXAhgRQAhgQAtAAQAuAAAhAQQAhARAAAXQAAAXghAQQghARguAAgAgkhMQAAgXALgQQALgRAOAAQAPAAALARQALAQAAAXAAlCsIAlAAIAAgaIA1AAIAAAUIgOAAIAAAVIAOgBIAAAbIgTAAIAAATIATgBIAAAVIgbAAIAAAKIAbAAIAAALIg1AAIAAgYIglAAIAAAiQgpAdgggdIAAlnABKD5IAAhNAAlCsIAABNAAlhKIAAD2");
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


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00CCCC").s().p("AkqErIAApVIJVAAIAAJVg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-29.8,59.7,59.7);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-53.55,-13.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.5,-13.9,113,28);


(lib.Symbol87 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol3("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-29.8,59.7,59.7);


(lib.Symbol86 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol3("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-29.8,59.7,59.7);


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
	this.instance = new lib.Symbol3("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-29.8,59.7,59.7);


(lib.Symbol83 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol3("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-29.8,59.7,59.7);


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

	// Layer 1
	this.instance = new lib.Symbol3("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-29.8,59.7,59.7);


(lib.Symbol80 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol79("synched",0);
	this.instance.setTransform(-1.5,12.75,0.0892,0.0892);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AE6BRIAGoaIhRAQIouCsIAHG1AE6BRIgFF5IppAAIgEkig");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CC99").s().p("Ak0C9IgFkiIJzhXIgFF5g");
	this.shape_1.setTransform(0.05,26.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#339966").s().p("Ak/h8IIuisIBRgQIgGIaIpyBXg");
	this.shape_2.setTransform(0.025,-14.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol80, new cjs.Rectangle(-32.9,-46.8,65.9,93.6), null);


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

	// Layer 1
	this.instance = new lib.Symbol3("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-29.8,59.7,59.7);


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

	// Layer 1
	this.instance = new lib.Symbol70("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.6,-28.6,57.2,57.2);


(lib.Symbol69 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol3("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-29.8,59.7,59.7);


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
	this.instance = new lib.Symbol60("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-119.7,82,239.5);


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
	this.instance = new lib.Symbol60("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-119.7,82,239.5);


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

	// Layer 1
	this.instance = new lib.Symbol60("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-119.7,82,239.5);


(lib.Symbol61 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol60("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-119.7,82,239.5);


(lib.Symbol34 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol33("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-49.7,77,99.5);


(lib.Symbol30 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol29("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-110,-21.9,220,44), null);


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

	// Layer 1
	this.instance = new lib.Symbol27("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-7.9,41.6,15.8);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol25("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.6,-40.9,135.3,81.9);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol21("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.8,-51.5,37.7,103);


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
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-240,640,480);


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

	// Layer 1
	this.instance = new lib.Symbol18("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-240,640,480);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol15();
	this.instance.setTransform(-3.15,-5.55,0.7038,0.7038);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(-3.15,0,0.7038,0.7038);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-6.8,-10.3,18.1,20.700000000000003), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol3("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-29.8,59.7,59.7);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol3("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-29.8,59.7,59.7);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol3("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-29.8,59.7,59.7);


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		MOTAS.setQuadState(
			this.btn82,
			() => void moCur.setText(myTranslation.mytxt19),
			() =>
			{
				if (moInv.activeObject === "screwdriver")
				{
					moInv.add(1, 'screw');
					moInv.unselect();
					MOTAS.setText(myTranslation.mytxt20);
					exportRoot.myChair = 1;
					this.play();
				}
				else
					MOTAS.setText(myTranslation.mytxt21);
			}
		);
	}
	this.frame_21 = function() {
		this.stop();
		MOTAS.setFlavorText(
			this.btn83,
			myTranslation.mytxt19,
			myTranslation.mytxt22
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(1));

	// Layer_2
	this.btn82 = new lib.Symbol82();
	this.btn82.name = "btn82";
	this.btn82.setTransform(-2,4.95,1.2253,1.3699,0,0,-8.7993);
	new cjs.ButtonHelper(this.btn82, 0, 1, 2, false, new lib.Symbol82(), 3);

	this.btn83 = new lib.Symbol83();
	this.btn83.name = "btn83";
	this.btn83.setTransform(26.7,112.8,1.2253,1.3699,0,-165.0003,-173.7989);
	new cjs.ButtonHelper(this.btn83, 0, 1, 2, false, new lib.Symbol83(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn82}]}).to({state:[]},1).to({state:[{t:this.btn83}]},20).wait(1));

	// Layer_3
	this.instance = new lib.Symbol81("synched",0);
	this.instance.setTransform(0,0,1.1452,1.1452,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-7.2,y:-4.8},4).to({scaleX:1.1449,scaleY:1.1449,skewX:19.5557,skewY:199.5557,y:88.8},10).to({x:26.7,y:112.8},7).wait(1));

	// Layer_4
	this.instance_1 = new lib.Symbol80();
	this.instance_1.setTransform(-0.95,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-8.15,y:-4.8},4).to({scaleX:0.9997,scaleY:0.9997,rotation:19.5558,x:-8.1,y:88.5},10).to({x:25.8,y:112.5},7).wait(1));

	// Layer_5
	this.instance_2 = new lib.Symbol77("synched",0);
	this.instance_2.setTransform(1.55,-0.05);
	this.instance_2.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.1,-60.1,140.5,237.29999999999998);


(lib.Symbol76 = function(mode,startPosition,loop,reversed) {
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
		MOTAS.setQuadState(
			this.btn75,
			() => void moCur.setText(myTranslation.mytxt23),
			() => 
			{
				moInv.add(2, 'poster');
				MOTAS.setText(myTranslation.mytxt24);
				this.visible = false;
			}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.btn75 = new lib.Symbol75();
	this.btn75.name = "btn75";
	this.btn75.setTransform(-0.8,-1,1.1157,1.5548,-5.4896);
	new cjs.ButtonHelper(this.btn75, 0, 1, 2, false, new lib.Symbol75(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn75).wait(1));

	// Layer_3
	this.instance = new lib.Symbol74("synched",0);
	this.instance.setTransform(-35.25,-39.15,0.0592,0.0592,24.477);
	this.instance.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_4
	this.instance_1 = new lib.Symbol74("synched",0);
	this.instance_1.setTransform(25.95,-45.05,0.0592,0.0592,-35.5171);
	this.instance_1.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_5
	this.instance_2 = new lib.Symbol74("synched",0);
	this.instance_2.setTransform(35.3,39.15,0.0592,0.0592,24.477);
	this.instance_2.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_6
	this.instance_3 = new lib.Symbol74("synched",0);
	this.instance_3.setTransform(-27.1,45.15,0.0592,0.0592,-35.5171);
	this.instance_3.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_7
	this.instance_4 = new lib.Symbol73("synched",0);
	this.instance_4.setTransform(-0.55,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol76, new cjs.Rectangle(-41.4,-53.3,82.9,106.8), null);


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		MOTAS.setQuadState(
			this.btn63,
			() => void moCur.setText(myTranslation.mytxt30),
			() => 
			{
				if (moInv.activeObject !== 'key1')
					MOTAS.setText(generalText.textlocked);
				else
				{
					moInv.remove(1);
					MOTAS.setText(myTranslation.mytxt32);
					this.gotoAndPlay(1);
				}
			}
		);
	}
	this.frame_19 = function() {
		this.stop();
		MOTAS.setQuadState(
			this.btn68,
			() => void moCur.setText(myTranslation.mytxt30)
		);
		MOTAS.setFlavorText(
			this.btn69,
			myTranslation.mytxt33,
			myTranslation.mytxt34
		);
		MOTAS.setQuadState(
			this.btn71,
			() => void moCur.setBoth(myTranslation.mytxt35, 'grab'),
			() => 
			{
				moCur.setState('grab');
				if (this.remember === "1")
					MOTAS.setText(myTranslation.mytxt36);
				else
				{
					this.remember = "1";
					MOTAS.setText(myTranslation.mytxt37);
					moInv.add(1, "screwdriver");
				}
			},
			() => void moCur.setState('off'),
			() => void moCur.setState('hold')
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Layer_2
	this.instance = new lib.Symbol67("synched",0);
	this.instance.setTransform(12.15,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1.0992,scaleY:1.0992,x:-13.5,y:4.15},18).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol66("synched",0);
	this.instance_1.setTransform(34.6,-3.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:0.9153,scaleY:0.9153,x:54.6,y:-7.15},18).wait(1));

	// Layer_4
	this.btn71 = new lib.Symbol71();
	this.btn71.name = "btn71";
	this.btn71.setTransform(16.5,93.05,0.6688,0.9817,0,21.2615,29.813);
	this.btn71._off = true;
	new cjs.ButtonHelper(this.btn71, 0, 1, 2, false, new lib.Symbol71(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn71).wait(19).to({_off:false},0).wait(1));

	// Layer_5
	this.btn69 = new lib.Symbol69();
	this.btn69.name = "btn69";
	this.btn69.setTransform(18.85,-29.5,0.5464,2.5676);
	this.btn69._off = true;
	new cjs.ButtonHelper(this.btn69, 0, 1, 2, false, new lib.Symbol69(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn69).wait(19).to({_off:false},0).wait(1));

	// Layer_6
	this.instance_2 = new lib.Symbol65("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(19));

	// Layer_7
	this.btn63 = new lib.Symbol63();
	this.btn63.name = "btn63";
	this.btn63.setTransform(0,0,1.1235,1.1235);
	new cjs.ButtonHelper(this.btn63, 0, 1, 2, false, new lib.Symbol63(), 3);

	this.instance_3 = new lib.Symbol64();
	this.instance_3.setTransform(0,0,1.1235,1.1235);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Symbol64(), 3);

	this.btn68 = new lib.Symbol68();
	this.btn68.name = "btn68";
	this.btn68.setTransform(0,0,1.1235,1.1235);
	new cjs.ButtonHelper(this.btn68, 0, 1, 2, false, new lib.Symbol68(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn63}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.btn68}]},18).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-143.5,111,295.3);


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

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		MOTAS.setFlavorText(
			this.btn61,
			myTranslation.mytxt30,
			generalText.textlocked
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.btn61 = new lib.Symbol61();
	this.btn61.name = "btn61";
	new cjs.ButtonHelper(this.btn61, 0, 1, 2, false, new lib.Symbol61(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn61).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol62, new cjs.Rectangle(-41,-119.7,82,239.5), null);


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		MOTAS.setQuadState(
			this.btn34,
			() => void moCur.setText(myTranslation.mytxt102),
			() => 
			{
				if (exportRoot.myChair != 1)
				{
					MOTAS.setText(generalText.textchair);
					this.play();
				}
			}
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(48));

	// Layer_2
	this.btn34 = new lib.Symbol34();
	this.btn34.name = "btn34";
	this.btn34.setTransform(941.85,573.85,1.8571,1.8808,0,0,180);
	new cjs.ButtonHelper(this.btn34, 0, 1, 2, false, new lib.Symbol34(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn34).to({_off:true},1).wait(47));

	// Layer_3
	this.instance = new lib.Symbol32();
	this.instance.setTransform(867,481);

	this.instance_1 = new lib.Symbol36();
	this.instance_1.setTransform(861,481);

	this.instance_2 = new lib.Symbol38();
	this.instance_2.setTransform(843,481);

	this.instance_3 = new lib.Symbol40();
	this.instance_3.setTransform(816,482);

	this.instance_4 = new lib.Symbol42();
	this.instance_4.setTransform(780,483);

	this.instance_5 = new lib.Symbol44();
	this.instance_5.setTransform(740,485);

	this.instance_6 = new lib.Symbol46();
	this.instance_6.setTransform(699,488);

	this.instance_7 = new lib.Symbol48();
	this.instance_7.setTransform(638,492);

	this.instance_8 = new lib.Symbol50();
	this.instance_8.setTransform(574.35,493);

	this.instance_9 = new lib.Symbol52();
	this.instance_9.setTransform(521,495);

	this.instance_10 = new lib.Symbol54();
	this.instance_10.setTransform(480,497);

	this.instance_11 = new lib.Symbol56();
	this.instance_11.setTransform(453,498);

	this.instance_12 = new lib.Symbol58();
	this.instance_12.setTransform(442,499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(442,480.3,571.7,263.2);


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		MOTAS.setQuadState(
			this.btn19,
			() => 
			{
				moCur.setBoth(myTranslation.mytxt103, 'grab');
			},
			() => 
			{
				moCur.setState("grab");
				// ??? call(_root.textopendoor);
				// _root.mysound_fx.gotoAndStop("door_open");
				this.play();
			},
			null,
			() => 
			{
				moCur.setState("hold");
			}
		);
	}
	this.frame_10 = function() {
		exportRoot.gotoAndStop("nextpart");
		this.stop();
		MOTAS.setQuadState(
			this.btn20,
			() => { moCur.setBoth('', 'move') },
			() => 
			{
				// _root.mysound_fx.gotoAndStop("door_close");
				moCur.setState('off');
				exportRoot.back.room = room;
				exportRoot.back.gotoAndStop(room);
				MOTAS.setText(generalText.textwalkdoor);
				this.play();
			},
			null,
			() => { moCur.setStaet('move') }
		);
		MOTAS.setQuadState(
			this.btn22,
			() => { moCur.setBoth(myTranslation.mytxt103, "grab") },
			() => 
			{
				_root.mysound_fx.gotoAndStop("door_close");
				moCur.setState('grab');
				MOTAS.setText(generalText.textclosedoor);
				this.play();
			},
			null,
			() => { moCur.setState('hold'); }
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(11));

	// Layer_2
	this.btn22 = new lib.Symbol22();
	this.btn22.name = "btn22";
	this.btn22.setTransform(10.15,3.15);
	this.btn22._off = true;
	new cjs.ButtonHelper(this.btn22, 0, 1, 2, false, new lib.Symbol22(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn22).wait(10).to({_off:false},0).to({_off:true},1).wait(10));

	// Layer_3
	this.btn19 = new lib.Symbol19();
	this.btn19.name = "btn19";
	this.btn19.setTransform(-0.15,0.1,0.0911,0.202);
	new cjs.ButtonHelper(this.btn19, 0, 1, 2, false, new lib.Symbol19(), 3);

	this.btn20 = new lib.Symbol20();
	this.btn20.name = "btn20";
	this.btn20.setTransform(-19,0.1,0.0322,0.202);
	new cjs.ButtonHelper(this.btn20, 0, 1, 2, false, new lib.Symbol20(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn19}]}).to({state:[]},1).to({state:[{t:this.btn20}]},9).to({state:[]},1).wait(10));

	// Layer_4
	this.instance = new lib.Symbol16();
	this.instance.setTransform(-14.3,3.3,0.7674,0.7674);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.7355,scaleY:0.7837,x:-12.65,y:3.25},0).wait(1).to({scaleX:0.7035,scaleY:0.7999,x:-11.05},0).wait(1).to({scaleX:0.6715,scaleY:0.8162,x:-9.4,y:3.2},0).wait(1).to({scaleX:0.6396,scaleY:0.8324,x:-7.75},0).wait(1).to({scaleX:0.6076,scaleY:0.8487,x:-6.1,y:3.15},0).wait(1).to({scaleX:0.5757,scaleY:0.8649,x:-4.55},0).wait(1).to({scaleX:0.5437,scaleY:0.8812,x:-2.9,y:3.1},0).wait(1).to({scaleX:0.5117,scaleY:0.8974,x:-1.25,y:3.05},0).wait(1).to({scaleX:0.4798,scaleY:0.9137,x:0.35},0).wait(1).to({scaleX:0.4478,scaleY:0.93,x:2,y:3},0).wait(2).to({scaleX:0.4833,scaleY:0.9119,x:0.15,y:3.05},0).wait(1).to({scaleX:0.5188,scaleY:0.8938,x:-1.6},0).wait(1).to({scaleX:0.5544,scaleY:0.8758,x:-3.45,y:3.1},0).wait(1).to({scaleX:0.5899,scaleY:0.8577,x:-5.25,y:3.15},0).wait(1).to({scaleX:0.6254,scaleY:0.8397,x:-7.05},0).wait(1).to({scaleX:0.6609,scaleY:0.8216,x:-8.85,y:3.2},0).wait(1).to({scaleX:0.6964,scaleY:0.8036,x:-10.7},0).wait(1).to({scaleX:0.7319,scaleY:0.7855,x:-12.55,y:3.25},0).wait(1).to({scaleX:0.7674,scaleY:0.7674,x:-14.3,y:3.3},0).wait(1));

	// Layer_5
	this.instance_1 = new lib.Symbol17("synched",0);
	this.instance_1.setTransform(0,4.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.9583,scaleY:1.0212,x:1.05},0).wait(1).to({scaleX:0.9167,scaleY:1.0424,x:2.05},0).wait(1).to({scaleX:0.875,scaleY:1.0635,x:3.1},0).wait(1).to({scaleX:0.8334,scaleY:1.0847,x:4.15},0).wait(1).to({scaleX:0.7917,scaleY:1.1059,x:5.2},0).wait(1).to({scaleX:0.7501,scaleY:1.1271,x:6.2},0).wait(1).to({scaleX:0.7084,scaleY:1.1482,x:7.25},0).wait(1).to({scaleX:0.6668,scaleY:1.1694,x:8.3},0).wait(1).to({scaleX:0.6252,scaleY:1.1906,x:9.3},0).wait(1).to({scaleX:0.5835,scaleY:1.2118,x:10.35},0).wait(2).to({scaleX:0.6298,scaleY:1.1882,x:9.15},0).wait(1).to({scaleX:0.6761,scaleY:1.1647,x:8.05,y:4.6},0).wait(1).to({scaleX:0.7223,scaleY:1.1412,x:6.9,y:4.65},0).wait(1).to({scaleX:0.7686,scaleY:1.1176,x:5.75},0).wait(1).to({scaleX:0.8149,scaleY:1.0941,x:4.6},0).wait(1).to({scaleX:0.8611,scaleY:1.0706,x:3.45},0).wait(1).to({scaleX:0.9074,scaleY:1.0471,x:2.3,y:4.6},0).wait(1).to({scaleX:0.9537,scaleY:1.0235,x:1.1,y:4.65},0).wait(1).to({scaleX:1,scaleY:1,x:0},0).wait(1));

	// Layer_6
	this.instance_2 = new lib.Symbol16();
	this.instance_2.setTransform(-14.3,3.3,0.7674,0.7674);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:0.7362,skewY:-0.8088,x:-12.7,y:3.85},0).wait(1).to({scaleX:0.7049,skewY:-1.8061,x:-11.15,y:4.4},0).wait(1).to({scaleX:0.6737,skewY:-2.8029,x:-9.45,y:4.95},0).wait(1).to({scaleX:0.6424,skewY:-3.7996,x:-7.85,y:5.5},0).wait(1).to({scaleX:0.6112,skewY:-4.7961,x:-6.25,y:5.9},0).wait(1).to({scaleX:0.58,skewY:-5.7925,x:-4.6,y:6.3},0).wait(1).to({scaleX:0.5487,skewY:-6.7903,x:-2.95,y:6.6},0).wait(1).to({scaleX:0.5175,skewY:-7.7884,x:-1.3,y:6.85},0).wait(1).to({scaleX:0.4863,skewY:-8.7863,x:0.35,y:7.1},0).wait(1).to({scaleX:0.4553,skewY:-9.8607,x:2,y:7.25},0).wait(2).to({scaleX:0.4898,skewY:-8.7597,x:0.2,y:7.15},0).wait(1).to({scaleX:0.5245,skewY:-7.5452,x:-1.65,y:6.8},0).wait(1).to({scaleX:0.5592,skewY:-6.5217,x:-3.5,y:6.55},0).wait(1).to({scaleX:0.5939,skewY:-5.3104,x:-5.25,y:6.1},0).wait(1).to({scaleX:0.6286,skewY:-4.2838,x:-7.1,y:5.65},0).wait(1).to({scaleX:0.6633,skewY:-3.2603,x:-8.9,y:5.25},0).wait(1).to({scaleX:0.698,skewY:-2.0484,x:-10.65,y:4.55},0).wait(1).to({scaleX:0.7327,skewY:-1.025,x:-12.5,y:4},0).wait(1).to({scaleX:0.7674,skewY:0,x:-14.3,y:3.3},0).wait(1));

	// Layer_7
	this.instance_3 = new lib.Symbol11("synched",0);
	this.instance_3.setTransform(0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.9593,skewY:-0.8084,x:1,y:2.85},0).wait(1).to({scaleX:0.9185,skewY:-1.8058,x:2,y:3.2},0).wait(1).to({scaleX:0.8778,skewY:-2.8027,x:3.1,y:3.55},0).wait(1).to({scaleX:0.8371,skewY:-3.8002,x:4.1,y:3.9},0).wait(1).to({scaleX:0.7964,skewY:-4.7962,x:5.1,y:4.15},0).wait(1).to({scaleX:0.7557,skewY:-5.7932,x:6.15,y:4.4},0).wait(1).to({scaleX:0.715,skewY:-6.7909,x:7.2,y:4.6},0).wait(1).to({scaleX:0.6743,skewY:-7.7889,x:8.25,y:4.75},0).wait(1).to({scaleX:0.6336,skewY:-8.7861,x:9.3,y:4.9},0).wait(1).to({scaleX:0.5933,skewY:-9.8601,x:10.35,y:5},0).wait(2).to({scaleX:0.6382,skewY:-8.7594,x:9.2,y:4.95},0).wait(1).to({scaleX:0.6834,skewY:-7.5459,x:8.05,y:4.7},0).wait(1).to({scaleX:0.7286,skewY:-6.5215,x:6.85,y:4.55},0).wait(1).to({scaleX:0.7738,skewY:-5.3098,x:5.75,y:4.3},0).wait(1).to({scaleX:0.819,skewY:-4.2844,x:4.6,y:4},0).wait(1).to({scaleX:0.8643,skewY:-3.2601,x:3.45,y:3.75},0).wait(1).to({scaleX:0.9095,skewY:-2.0489,x:2.35,y:3.3},0).wait(1).to({scaleX:0.9547,skewY:-1.0247,x:1.15,y:2.95},0).wait(1).to({scaleX:1,skewY:0,x:0,y:2.5},0).wait(1));

	// Layer_8
	this.instance_4 = new lib.Symbol16();
	this.instance_4.setTransform(-14.3,1.45,0.7674,0.7674,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:0.7362,skewY:0.8088,x:-12.7,y:0.9},0).wait(1).to({scaleX:0.7049,skewY:1.8061,x:-11.15,y:0.35},0).wait(1).to({scaleX:0.6737,skewY:2.8029,x:-9.45,y:-0.2},0).wait(1).to({scaleX:0.6424,skewY:3.7996,x:-7.85,y:-0.75},0).wait(1).to({scaleX:0.6112,skewY:4.7961,x:-6.25,y:-1.15},0).wait(1).to({scaleX:0.58,skewY:5.7925,x:-4.6,y:-1.55},0).wait(1).to({scaleX:0.5487,skewY:6.7903,x:-2.95,y:-1.85},0).wait(1).to({scaleX:0.5175,skewY:7.7884,x:-1.3,y:-2.1},0).wait(1).to({scaleX:0.4863,skewY:8.7863,x:0.35,y:-2.35},0).wait(1).to({scaleX:0.4553,skewY:9.8607,x:2,y:-2.5},0).wait(2).to({scaleX:0.4898,skewY:8.7597,x:0.2,y:-2.4},0).wait(1).to({scaleX:0.5245,skewY:7.5452,x:-1.65,y:-2.05},0).wait(1).to({scaleX:0.5592,skewY:6.5217,x:-3.5,y:-1.8},0).wait(1).to({scaleX:0.5939,skewY:5.3104,x:-5.25,y:-1.35},0).wait(1).to({scaleX:0.6286,skewY:4.2838,x:-7.1,y:-0.9},0).wait(1).to({scaleX:0.6633,skewY:3.2603,x:-8.9,y:-0.5},0).wait(1).to({scaleX:0.698,skewY:2.0484,x:-10.65,y:0.2},0).wait(1).to({scaleX:0.7327,skewY:1.025,x:-12.5,y:0.75},0).wait(1).to({scaleX:0.7674,skewY:0,x:-14.3,y:1.45},0).wait(1));

	// Layer_9
	this.instance_5 = new lib.Symbol11("synched",0);
	this.instance_5.setTransform(0,2.25,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({scaleX:0.9593,skewY:0.8084,x:1,y:1.9},0).wait(1).to({scaleX:0.9185,skewY:1.8058,x:2,y:1.55},0).wait(1).to({scaleX:0.8778,skewY:2.8027,x:3.1,y:1.2},0).wait(1).to({scaleX:0.8371,skewY:3.8002,x:4.1,y:0.85},0).wait(1).to({scaleX:0.7964,skewY:4.7962,x:5.1,y:0.6},0).wait(1).to({scaleX:0.7557,skewY:5.7932,x:6.15,y:0.35},0).wait(1).to({scaleX:0.715,skewY:6.7909,x:7.2,y:0.15},0).wait(1).to({scaleX:0.6743,skewY:7.7889,x:8.25,y:0},0).wait(1).to({scaleX:0.6336,skewY:8.7861,x:9.3,y:-0.15},0).wait(1).to({scaleX:0.5933,skewY:9.8601,x:10.35,y:-0.25},0).wait(2).to({scaleX:0.6382,skewY:8.7594,x:9.2,y:-0.2},0).wait(1).to({scaleX:0.6834,skewY:7.5459,x:8.05,y:0.05},0).wait(1).to({scaleX:0.7286,skewY:6.5215,x:6.85,y:0.2},0).wait(1).to({scaleX:0.7738,skewY:5.3098,x:5.75,y:0.45},0).wait(1).to({scaleX:0.819,skewY:4.2844,x:4.6,y:0.75},0).wait(1).to({scaleX:0.8643,skewY:3.2601,x:3.45,y:1},0).wait(1).to({scaleX:0.9095,skewY:2.0489,x:2.35,y:1.45},0).wait(1).to({scaleX:0.9547,skewY:1.0247,x:1.15,y:1.8},0).wait(1).to({scaleX:1,skewY:0,x:0,y:2.25},0).wait(1));

	// Layer_10
	this.instance_6 = new lib.Symbol16();
	this.instance_6.setTransform(-14.3,3.3,0.7674,0.7674);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({scaleX:0.7393,skewY:-0.7628,x:-12.85,y:3.8},0).wait(1).to({scaleX:0.7112,skewY:-1.527,x:-11.45,y:4.25},0).wait(1).to({scaleX:0.6831,skewY:-2.2892,x:-9.95,y:4.7},0).wait(1).to({scaleX:0.6549,skewY:-3.0531,x:-8.5,y:5.1},0).wait(1).to({scaleX:0.6268,skewY:-4.0035,x:-7.05,y:5.5},0).wait(1).to({scaleX:0.5987,skewY:-4.7691,x:-5.6,y:5.85},0).wait(1).to({scaleX:0.5706,skewY:-5.531,x:-4.15,y:6.1},0).wait(1).to({scaleX:0.5424,skewY:-6.2952,x:-2.65,y:6.3},0).wait(1).to({scaleX:0.5143,skewY:-7.0586,x:-1.15,y:6.55},0).wait(1).to({scaleX:0.4864,skewY:-8.0261,x:0.25,y:6.75},0).wait(2).to({scaleX:0.5174,skewY:-7.0364,x:-1.35,y:6.55},0).wait(1).to({scaleX:0.5487,skewY:-6.0629,x:-2.95,y:6.3},0).wait(1).to({scaleX:0.5799,skewY:-5.2765,x:-4.6,y:6.05},0).wait(1).to({scaleX:0.6112,skewY:-4.3027,x:-6.25,y:5.6},0).wait(1).to({scaleX:0.6424,skewY:-3.5174,x:-7.9,y:5.35},0).wait(1).to({scaleX:0.6737,skewY:-2.5445,x:-9.5,y:4.85},0).wait(1).to({scaleX:0.7049,skewY:-1.7577,x:-11.15,y:4.4},0).wait(1).to({scaleX:0.7362,skewY:-0.7862,x:-12.7,y:3.8},0).wait(1).to({scaleX:0.7674,skewY:0,x:-14.3,y:3.3},0).wait(1));

	// Layer_11
	this.instance_7 = new lib.Symbol11("synched",0);
	this.instance_7.setTransform(0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({scaleX:0.9633,skewY:-0.7633,x:0.9,y:2.8},0).wait(1).to({scaleX:0.9267,skewY:-1.5266,x:1.8,y:3.1},0).wait(1).to({scaleX:0.8901,skewY:-2.2893,x:2.75,y:3.4},0).wait(1).to({scaleX:0.8534,skewY:-3.0534,x:3.7,y:3.65},0).wait(1).to({scaleX:0.8168,skewY:-4.0035,x:4.6,y:3.9},0).wait(1).to({scaleX:0.7801,skewY:-4.7686,x:5.5,y:4.1},0).wait(1).to({scaleX:0.7435,skewY:-5.5309,x:6.45,y:4.3},0).wait(1).to({scaleX:0.7068,skewY:-6.295,x:7.4,y:4.4},0).wait(1).to({scaleX:0.6702,skewY:-7.0584,x:8.35,y:4.55},0).wait(1).to({scaleX:0.6338,skewY:-8.0263,x:9.25,y:4.7},0).wait(2).to({scaleX:0.6742,skewY:-7.0366,x:8.2,y:4.55},0).wait(1).to({scaleX:0.715,skewY:-6.063,x:7.2,y:4.4},0).wait(1).to({scaleX:0.7556,skewY:-5.2763,x:6.15,y:4.25},0).wait(1).to({scaleX:0.7964,skewY:-4.3031,x:5.1,y:3.95},0).wait(1).to({scaleX:0.8371,skewY:-3.5177,x:4.05,y:3.8},0).wait(1).to({scaleX:0.8778,skewY:-2.5445,x:3.05,y:3.5},0).wait(1).to({scaleX:0.9185,skewY:-1.7583,x:2,y:3.2},0).wait(1).to({scaleX:0.9593,skewY:-0.7856,x:1,y:2.8},0).wait(1).to({scaleX:1,skewY:0,x:0,y:2.5},0).wait(1));

	// Layer_12
	this.instance_8 = new lib.Symbol16();
	this.instance_8.setTransform(-14.3,1.45,0.7674,0.7674,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({scaleX:0.7393,skewY:0.7628,x:-12.85,y:0.95},0).wait(1).to({scaleX:0.7112,skewY:1.527,x:-11.45,y:0.5},0).wait(1).to({scaleX:0.6831,skewY:2.2892,x:-9.95,y:0.05},0).wait(1).to({scaleX:0.6549,skewY:3.0531,x:-8.5,y:-0.35},0).wait(1).to({scaleX:0.6268,skewY:4.0035,x:-7.05,y:-0.75},0).wait(1).to({scaleX:0.5987,skewY:4.7691,x:-5.6,y:-1.1},0).wait(1).to({scaleX:0.5706,skewY:5.531,x:-4.15,y:-1.35},0).wait(1).to({scaleX:0.5424,skewY:6.2952,x:-2.65,y:-1.55},0).wait(1).to({scaleX:0.5143,skewY:7.0586,x:-1.15,y:-1.8},0).wait(1).to({scaleX:0.4864,skewY:8.0261,x:0.25,y:-2},0).wait(2).to({scaleX:0.5174,skewY:7.0364,x:-1.35,y:-1.8},0).wait(1).to({scaleX:0.5487,skewY:6.0629,x:-2.95,y:-1.55},0).wait(1).to({scaleX:0.5799,skewY:5.2765,x:-4.6,y:-1.3},0).wait(1).to({scaleX:0.6112,skewY:4.3027,x:-6.25,y:-0.85},0).wait(1).to({scaleX:0.6424,skewY:3.5174,x:-7.9,y:-0.6},0).wait(1).to({scaleX:0.6737,skewY:2.5445,x:-9.5,y:-0.1},0).wait(1).to({scaleX:0.7049,skewY:1.7577,x:-11.15,y:0.35},0).wait(1).to({scaleX:0.7362,skewY:0.7862,x:-12.7,y:0.95},0).wait(1).to({scaleX:0.7674,skewY:0,x:-14.3,y:1.45},0).wait(1));

	// Layer_13
	this.instance_9 = new lib.Symbol11("synched",0);
	this.instance_9.setTransform(0,2.25,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({scaleX:0.9633,skewY:0.7633,x:0.9,y:1.95},0).wait(1).to({scaleX:0.9267,skewY:1.5266,x:1.8,y:1.65},0).wait(1).to({scaleX:0.8901,skewY:2.2893,x:2.75,y:1.35},0).wait(1).to({scaleX:0.8534,skewY:3.0534,x:3.7,y:1.1},0).wait(1).to({scaleX:0.8168,skewY:4.0035,x:4.6,y:0.85},0).wait(1).to({scaleX:0.7801,skewY:4.7686,x:5.5,y:0.65},0).wait(1).to({scaleX:0.7435,skewY:5.5309,x:6.45,y:0.45},0).wait(1).to({scaleX:0.7068,skewY:6.295,x:7.4,y:0.35},0).wait(1).to({scaleX:0.6702,skewY:7.0584,x:8.35,y:0.2},0).wait(1).to({scaleX:0.6338,skewY:8.0263,x:9.25,y:0.05},0).wait(2).to({scaleX:0.6742,skewY:7.0366,x:8.2,y:0.2},0).wait(1).to({scaleX:0.715,skewY:6.063,x:7.2,y:0.35},0).wait(1).to({scaleX:0.7556,skewY:5.2763,x:6.15,y:0.5},0).wait(1).to({scaleX:0.7964,skewY:4.3031,x:5.1,y:0.8},0).wait(1).to({scaleX:0.8371,skewY:3.5177,x:4.05,y:0.95},0).wait(1).to({scaleX:0.8778,skewY:2.5445,x:3.05,y:1.25},0).wait(1).to({scaleX:0.9185,skewY:1.7583,x:2,y:1.55},0).wait(1).to({scaleX:0.9593,skewY:0.7856,x:1,y:1.95},0).wait(1).to({scaleX:1,skewY:0,x:0,y:2.25},0).wait(1));

	// Layer_14
	this.instance_10 = new lib.Symbol16();
	this.instance_10.setTransform(-14.3,3.3,0.7674,0.7674);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({scaleX:0.7429,skewY:-0.5331,x:-13.05,y:3.65},0).wait(1).to({scaleX:0.7183,skewY:-1.2514,x:-11.8,y:4.1},0).wait(1).to({scaleX:0.6937,skewY:-1.7836,x:-10.5,y:4.4},0).wait(1).to({scaleX:0.6691,skewY:-2.5042,x:-9.25,y:4.8},0).wait(1).to({scaleX:0.6446,skewY:-3.0357,x:-7.95,y:5.05},0).wait(1).to({scaleX:0.62,skewY:-3.7551,x:-6.75,y:5.35},0).wait(1).to({scaleX:0.5954,skewY:-4.2886,x:-5.45,y:5.6},0).wait(1).to({scaleX:0.5709,skewY:-5.0068,x:-4.15,y:5.85},0).wait(1).to({scaleX:0.5463,skewY:-5.5412,x:-2.9,y:6},0).wait(1).to({scaleX:0.5219,skewY:-6.281,x:-1.55,y:6.2},0).wait(2).to({scaleX:0.549,skewY:-5.5233,x:-2.95,y:6},0).wait(1).to({scaleX:0.5763,skewY:-4.7841,x:-4.4,y:5.75},0).wait(1).to({scaleX:0.6036,skewY:-4.0488,x:-5.75,y:5.5},0).wait(1).to({scaleX:0.6309,skewY:-3.311,x:-7.2,y:5.15},0).wait(1).to({scaleX:0.6582,skewY:-2.7612,x:-8.6,y:4.9},0).wait(1).to({scaleX:0.6855,skewY:-2.0231,x:-10.05,y:4.5},0).wait(1).to({scaleX:0.7128,skewY:-1.2855,x:-11.45,y:4.1},0).wait(1).to({scaleX:0.7401,skewY:-0.5493,x:-12.85,y:3.7},0).wait(1).to({scaleX:0.7674,skewY:0,x:-14.3,y:3.3},0).wait(1));

	// Layer_15
	this.instance_11 = new lib.Symbol11("synched",0);
	this.instance_11.setTransform(0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({scaleX:0.968,skewY:-0.5329,x:0.8,y:2.7},0).wait(1).to({scaleX:0.9359,skewY:-1.2509,x:1.6,y:3},0).wait(1).to({scaleX:0.9039,skewY:-1.7838,x:2.4,y:3.2},0).wait(1).to({scaleX:0.8719,skewY:-2.5036,x:3.2,y:3.45},0).wait(1).to({scaleX:0.8399,skewY:-3.0358,x:4.05,y:3.6},0).wait(1).to({scaleX:0.8079,skewY:-3.7558,x:4.8,y:3.8},0).wait(1).to({scaleX:0.7759,skewY:-4.2883,x:5.6,y:3.95},0).wait(1).to({scaleX:0.7438,skewY:-5.0075,x:6.45,y:4.1},0).wait(1).to({scaleX:0.7118,skewY:-5.5405,x:7.25,y:4.2},0).wait(1).to({scaleX:0.68,skewY:-6.2811,x:8.1,y:4.35},0).wait(2).to({scaleX:0.7154,skewY:-5.5228,x:7.25,y:4.2},0).wait(1).to({scaleX:0.751,skewY:-4.7846,x:6.3,y:4.05},0).wait(1).to({scaleX:0.7865,skewY:-4.0484,x:5.45,y:3.9},0).wait(1).to({scaleX:0.8221,skewY:-3.3114,x:4.55,y:3.65},0).wait(1).to({scaleX:0.8577,skewY:-2.7615,x:3.65,y:3.5},0).wait(1).to({scaleX:0.8933,skewY:-2.0235,x:2.7,y:3.25},0).wait(1).to({scaleX:0.9288,skewY:-1.2859,x:1.85,y:3},0).wait(1).to({scaleX:0.9644,skewY:-0.5494,x:0.95,y:2.75},0).wait(1).to({scaleX:1,skewY:0,x:0,y:2.5},0).wait(1));

	// Layer_16
	this.instance_12 = new lib.Symbol16();
	this.instance_12.setTransform(-14.3,1.45,0.7674,0.7674,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({scaleX:0.7429,skewY:0.5331,x:-13.05,y:1.1},0).wait(1).to({scaleX:0.7183,skewY:1.2514,x:-11.8,y:0.65},0).wait(1).to({scaleX:0.6937,skewY:1.7836,x:-10.5,y:0.35},0).wait(1).to({scaleX:0.6691,skewY:2.5042,x:-9.25,y:-0.05},0).wait(1).to({scaleX:0.6446,skewY:3.0357,x:-7.95,y:-0.3},0).wait(1).to({scaleX:0.62,skewY:3.7551,x:-6.75,y:-0.6},0).wait(1).to({scaleX:0.5954,skewY:4.2886,x:-5.45,y:-0.85},0).wait(1).to({scaleX:0.5709,skewY:5.0068,x:-4.15,y:-1.1},0).wait(1).to({scaleX:0.5463,skewY:5.5412,x:-2.9,y:-1.25},0).wait(1).to({scaleX:0.5219,skewY:6.281,x:-1.55,y:-1.45},0).wait(2).to({scaleX:0.549,skewY:5.5233,x:-2.95,y:-1.25},0).wait(1).to({scaleX:0.5763,skewY:4.7841,x:-4.4,y:-1},0).wait(1).to({scaleX:0.6036,skewY:4.0488,x:-5.75,y:-0.75},0).wait(1).to({scaleX:0.6309,skewY:3.311,x:-7.2,y:-0.4},0).wait(1).to({scaleX:0.6582,skewY:2.7612,x:-8.6,y:-0.15},0).wait(1).to({scaleX:0.6855,skewY:2.0231,x:-10.05,y:0.25},0).wait(1).to({scaleX:0.7128,skewY:1.2855,x:-11.45,y:0.65},0).wait(1).to({scaleX:0.7401,skewY:0.5493,x:-12.85,y:1.05},0).wait(1).to({scaleX:0.7674,skewY:0,x:-14.3,y:1.45},0).wait(1));

	// Layer_17
	this.instance_13 = new lib.Symbol11("synched",0);
	this.instance_13.setTransform(0,2.25,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({scaleX:0.968,skewY:0.5329,x:0.8,y:2.05},0).wait(1).to({scaleX:0.9359,skewY:1.2509,x:1.6,y:1.75},0).wait(1).to({scaleX:0.9039,skewY:1.7838,x:2.4,y:1.55},0).wait(1).to({scaleX:0.8719,skewY:2.5036,x:3.2,y:1.3},0).wait(1).to({scaleX:0.8399,skewY:3.0358,x:4.05,y:1.15},0).wait(1).to({scaleX:0.8079,skewY:3.7558,x:4.8,y:0.95},0).wait(1).to({scaleX:0.7759,skewY:4.2883,x:5.6,y:0.8},0).wait(1).to({scaleX:0.7438,skewY:5.0075,x:6.45,y:0.65},0).wait(1).to({scaleX:0.7118,skewY:5.5405,x:7.25,y:0.55},0).wait(1).to({scaleX:0.68,skewY:6.2811,x:8.1,y:0.4},0).wait(2).to({scaleX:0.7154,skewY:5.5228,x:7.25,y:0.55},0).wait(1).to({scaleX:0.751,skewY:4.7846,x:6.3,y:0.7},0).wait(1).to({scaleX:0.7865,skewY:4.0484,x:5.45,y:0.85},0).wait(1).to({scaleX:0.8221,skewY:3.3114,x:4.55,y:1.1},0).wait(1).to({scaleX:0.8577,skewY:2.7615,x:3.65,y:1.25},0).wait(1).to({scaleX:0.8933,skewY:2.0235,x:2.7,y:1.5},0).wait(1).to({scaleX:0.9288,skewY:1.2859,x:1.85,y:1.75},0).wait(1).to({scaleX:0.9644,skewY:0.5494,x:0.95,y:2},0).wait(1).to({scaleX:1,skewY:0,x:0,y:2.25},0).wait(1));

	// Layer_18
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AD5myIgcAAIAAALIAcgLIAAOYIAsAAIAAvLIpJAAIAAPLIAsAAIAAuNIAAgMIHVABADdmnIAAN4IAcAVADdmnInVAA");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663333").s().p("ADcG4IAAt4IAcgLIAAOYgAj3nAIAAgMIHTABIAAALg");
	this.shape_1.setTransform(0,2.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AD4HmIAAuYIgcAAInTgBIAAAMIAAONIgtAAIAAvLIJJAAIAAPLg");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AD5myIgcAAInVgBIAAAMIAAONIgsAAIAAvLIJJAAIAAPLIgsAAIAAuYIgcALIAAgLAD5HmIgcgVIAAt4InVAA");
	this.shape_3.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.shape_3}]},11).wait(10));

	// Layer_19
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AkSHmIAAvLIIlAAIAAPLg");
	this.shape_4.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-49.8,60.6,104.5);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
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
		exportRoot.posterpuzzle = "inactive";
		this.stop();
	}
	this.frame_1 = function() {
		MOTAS.setQuadState(
			this.btn4, 
			() => { moCur.setText(myTranslation.mytxt23); },
			() => 
			{ 
				if (exportRoot.posterpuzzle === "solved")
				{
					MOTAS.setText(myTranslation.mytxt27);
					this.play();
				}
				if (exportRoot.posterpuzzle === "active")
					MOTAS.setText(myTranslation.mytxt25);
			}
		);
	}
	this.frame_29 = function() {
		exportRoot.posterpuzzle = "active";
		this.stop();
	}
	this.frame_59 = function() {
		exportRoot.posterpuzzle = "solved";
		this.stop();
		MOTAS.setQuadState(
			this.btn6, 
			() => { moCur.setText(myTranslation.mytxt26); },
			() => 
			{
				moInv.add(1, "key2");
				MOTAS.setText(myTranslation.mytxt28);
				this.gotoAndStop(this.currentFrame + 1);
			}
		);
	}
	this.frame_60 = function() {
		MOTAS.setFlavorText(
			this.btn7,
			myTranslation.mytxt23,
			myTranslation.mytxt29
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(28).call(this.frame_29).wait(30).call(this.frame_59).wait(1).call(this.frame_60).wait(1));

	// Layer_5
	this.btn6 = new lib.Symbol6();
	this.btn6.name = "btn6";
	this.btn6.setTransform(-2.5,-1.6,1.3923,0.5376,0,34.4176,0);
	this.btn6._off = true;
	new cjs.ButtonHelper(this.btn6, 0, 1, 2, false, new lib.Symbol6(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn6).wait(59).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.btn4 = new lib.Symbol4();
	this.btn4.name = "btn4";
	this.btn4.setTransform(10.2,-10.1,1.687,0.159);
	this.btn4._off = true;
	new cjs.ButtonHelper(this.btn4, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn4).wait(1).to({_off:false},0).to({_off:true},58).wait(2));

	// Layer_6
	this.btn7 = new lib.Symbol7();
	this.btn7.name = "btn7";
	this.btn7.setTransform(-2.5,-1.6,1.3923,0.5376,0,34.4176,0);
	this.btn7._off = true;
	new cjs.ButtonHelper(this.btn7, 0, 1, 2, false, new lib.Symbol7(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn7).wait(60).to({_off:false},0).wait(1));

	// Layer_3
	this.instance = new lib.Symbol5("synched",0);
	this.instance.setTransform(42,-25.5,0.283,0.3095,0,-86.3824,-76.5661);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({scaleX:0.3431,scaleY:0.3755,skewX:-86.4701,skewY:-76.6948,x:29.6,y:-6.3},29).wait(1).to({scaleX:0.3454,scaleY:0.3778,skewX:-86.3833,skewY:-76.5672,x:28.85,y:-5.7},0).to({_off:true},1).wait(1));

	// Layer_4
	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.setTransform(-10.55,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:0.8139,scaleY:0.8139,x:10.3,y:-21.4},28).to({scaleX:0.9938,scaleY:0.9938,x:-9.85,y:-0.75},29).wait(1).to({scaleX:1,scaleY:1,x:-10.55,y:0},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.1,-32.7,124.8,46.800000000000004);


// stage content:
(lib.mystery1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {nextpart:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		// TODO: Clicks reset
		
		// TODO: If music setting is on, play mystery1.mid
		// TODO: Save level 1
		
		registerNothingHandler();
		
		this.door2.room = "nextpart";
		
		/* exportRoot.level = 1;
		*/
		this.stop();
		
		MOTAS.setFlavorText(
			this.btn26, 
			myTranslation.mytxt14,
			myTranslation.mytxt15
		);
		
		MOTAS.setQuadState(
			this.btn28,
			() => void moCur.setBoth(myTranslation.mytxt16, 'grab'),
			() => 
			{
				moCur.setState("grab");
				if (this.remember === "1")
					MOTAS.setText(myTranslation.mytxt17);
				else
				{
					this.remember = "1";
					MOTAS.setText(myTranslation.mytxt18);
					moInv.add(1, 'key1');
				}
			},
			() => void moCur.setState('off'),
			() => void moCur.setState('hold')
		);
			
		MOTAS.setQuadState(
			this.btn85,
			() => void moCur.setText(myTranslation.mytxt4),
			() => 
			{
				if (moInv.activeObject === "poster")
				{
					MOTAS.setText(myTranslation.mytxt5);
					moInv.unselect();
					this.posterunderdoor.gotoAndPlay(1);
					moInv.remove(2);
				}
				else
					MOTAS.setText(myTranslation.mytxt6);
			}
		);
			
		[this.btn86_1, this.btn86_2].forEach((inst) => 
		{
			MOTAS.setFlavorText(
				inst,
				myTranslation.mytxt1,
				myTranslation.mytxt2
			);
		});
		
		MOTAS.setQuadState(
			this.btn87,
			() => void moCur.setText(myTranslation.mytxt7),
			() => 
			{
				let activeObject = moInv.activeObject;
				if (activeObject == null)
				{
					if (exportRoot.posterpuzzle === "solved")
						MOTAS.setText(myTranslation.mytxt8);
					else
						MOTAS.setText(myTranslation.mytxt9);
				}
				else if (activeObject === "key1")
					MOTAS.setText(myTranslation.mytxt10);
				else if (activeObject === "key2")
				{
					MOTAS.setText(myTranslation.mytxt11);
					moInv.unselect();
					this.door2.play();
				}
				else if (activeObject === "screwdriver")
				{
					if (exportRoot.posterpuzzle === "inactive")
						MOTAS.setText(myTranslation.mytxt39);
					else if (exportRoot.posterpuzzle === "active")
						MOTAS.setText(myTranslation.mytxt40);
				}
				else if(activeObject === "screw")
				{
					if (exportRoot.posterpuzzle === "inactive")
						MOTAS.setText(myTranslation.mytxt39);
					else if (exportRoot.posterpuzzle === "active")
					{
						moInv.remove(moInv.activeSlot);
						moInv.unselect();
						MOTAS.setText(myTranslation.mytxt41);
						exportRoot.posterpuzzle = "solved";
					}
				}
			}
		);
	}
	this.frame_1 = function() {
		MOTAS.winLevel();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_3
	this.btn87 = new lib.Symbol87();
	this.btn87.name = "btn87";
	this.btn87.setTransform(253.15,265.15,0.2962,0.4586);
	new cjs.ButtonHelper(this.btn87, 0, 1, 2, false, new lib.Symbol87(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn87).wait(2));

	// Layer_4
	this.btn86_1 = new lib.Symbol86();
	this.btn86_1.name = "btn86_1";
	this.btn86_1.setTransform(251.8,389.35,2.1526,1.009,0,40.1177,0);
	new cjs.ButtonHelper(this.btn86_1, 0, 1, 2, false, new lib.Symbol86(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn86_1).wait(2));

	// Layer_5
	this.btn86_2 = new lib.Symbol86();
	this.btn86_2.name = "btn86_2";
	this.btn86_2.setTransform(339.45,389.35,1.8712,0.8683,0,-27.2995,0);
	new cjs.ButtonHelper(this.btn86_2, 0, 1, 2, false, new lib.Symbol86(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn86_2).wait(2));

	// Layer_6
	this.btn85 = new lib.Symbol85();
	this.btn85.name = "btn85";
	this.btn85.setTransform(229.55,258.95,1.687,2.7106);
	new cjs.ButtonHelper(this.btn85, 0, 1, 2, false, new lib.Symbol85(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn85).wait(2));

	// Layer_7
	this.elephant = new lib.Symbol84();
	this.elephant.name = "elephant";
	this.elephant.setTransform(563.1,194.7);

	this.timeline.addTween(cjs.Tween.get(this.elephant).wait(2));

	// Layer_8
	this.instance = new lib.Symbol59();
	this.instance.setTransform(5.65,4.25,0.614,0.614);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer_9
	this.getposter = new lib.Symbol76();
	this.getposter.name = "getposter";
	this.getposter.setTransform(380.05,209.85);

	this.timeline.addTween(cjs.Tween.get(this.getposter).wait(2));

	// Layer_10
	this.locker = new lib.Symbol72();
	this.locker.name = "locker";
	this.locker.setTransform(50.4,283.55);

	this.timeline.addTween(cjs.Tween.get(this.locker).wait(2));

	// Layer_11
	this.instance_1 = new lib.Symbol62();
	this.instance_1.setTransform(95.85,276.2,0.9339,0.9339);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// Layer_12
	this.instance_2 = new lib.Symbol59();
	this.instance_2.setTransform(534.55,79.15,0.419,0.419,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	// Layer_13
	this.instance_3 = new lib.Symbol30();
	this.instance_3.setTransform(287.95,389.7,1.0691,1.0691);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// Layer_14
	this.btn28 = new lib.Symbol28();
	this.btn28.name = "btn28";
	this.btn28.setTransform(464.95,321.6,1.2617,1.2617,0,0,180);
	new cjs.ButtonHelper(this.btn28, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn28).wait(2));

	// Layer_15
	this.btn26 = new lib.Symbol26();
	this.btn26.name = "btn26";
	this.btn26.setTransform(505.05,340.95,1.2617,1.2617,0,0,180);
	new cjs.ButtonHelper(this.btn26, 0, 1, 2, false, new lib.Symbol26(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn26).wait(2));

	// Layer_16
	this.door2 = new lib.Symbol24();
	this.door2.name = "door2";
	this.door2.setTransform(229,259.8,1.6501,1.6501,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.door2).wait(2));

	// Layer_17
	this.posterunderdoor = new lib.Symbol8();
	this.posterunderdoor.name = "posterunderdoor";
	this.posterunderdoor.setTransform(218.4,355.2);

	this.timeline.addTween(cjs.Tween.get(this.posterunderdoor).wait(2));

	// Layer_18
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egx/gcHIAApYMBj/AAAIAAJYMAAAA1HIAADIIAAJYMhj/AAAIAApYIAAjIMAAAg1HIV4MTIAAd4MA4PAAAIAABkIgWAAMg3jAAAIgWAAIAAhkI14K8AcIv0IV4sTAcIv0IAAd4IV4K8A7xPoI2OMgAbyPoIWOMgA8Hv0MA4PAAA");
	this.shape.setTransform(320,240);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Egx/AK8IAApYIWPsfMA3iAAAIWOMfIAAJYg");
	this.shape_1.setTransform(320,410);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99CCCC").s().p("AbyldMg3iAAAI2PMfIAAjIIV4q7IAABkIAXAAIgXAAIAAhkMA4PAAAIAABkIgWAAIAWAAIAAhkIV4K7IAADIg");
	this.shape_2.setTransform(320,375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCCC").s().p("AcIPoMg4PAAAIAA93IAAd3I14K8MAAAg1HIV4MUMA4PAAAIAAd3IAA93IV4sUMAAAA1Hg");
	this.shape_3.setTransform(320,230);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("A8HK2I14sTIAApYMBj/AAAIAAJZI14MSg");
	this.shape_4.setTransform(320,69.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(319,239,322,242);
// library properties:
lib.properties = {
	id: '9AC95F65E377CE4D9589151711394678',
	width: 640,
	height: 480,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/mystery1_atlas_1.png", id:"mystery1_atlas_1"}
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
an.compositions['9AC95F65E377CE4D9589151711394678'] = {
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