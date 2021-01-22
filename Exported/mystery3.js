(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"mystery3_atlas_1", frames: [[1284,0,722,437],[1284,439,477,545],[1820,644,100,79],[1915,515,94,127],[1763,614,55,205],[0,0,1282,776],[1763,439,208,74],[1763,515,150,97]]}
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



(lib.CachedBmp_7 = function() {
	this.initialize(ss["mystery3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["mystery3_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["mystery3_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["mystery3_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["mystery3_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["mystery3_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["mystery3_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["mystery3_atlas_1"]);
	this.gotoAndStop(7);
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


(lib.WallLines = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AY/GQIAAqZIABAAIAAhgIleAAAZymPIgBABIgxAlAiPGQIAAr5IGDAAIAAL5A47lpIg2gmA47lpIFaAAA47GQIAAr5");
	this.shape.setTransform(175.025,47.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1).p("AQaj5IEsAAIABAAIBjAAIAABjIAAABAVHD6IAAhkIAAhkAVHgxIAABjIBjAAIAAhjAWqD6IAAhkANSD6IAAhkAFeiVIAAhkAD6CWIhkAAAiVj5IjIAAAAyCWIAABkA2pgxIAABjIAABkIBkAAIAABkIhkAAIAAhk");
	this.shape_1.setTransform(205,32.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(2,1,1).p("AZBjHIBjAAIAAhkIBkAAAcIhjIhkAAIAABjIhjAAAcIDIIhkAAIAAhkIhjAAAZAEsIABAAIDHAAADIjHIEsAAIAADHIAABkIEsAAIAAhkIEsAAIAAjHIBkAAADIkrIGQAAIAABkIEsAAIAAhkIEsAAASwDIIhkAAIAAhkIjIAAIAABkIpYAAIAAhkIBkAAIAAhkIhkAAIAAhjIhkAAADIEsIPoAAA0TkrIBkAAIAABkIEsAAIAAhkIJYAAIAABkIBkAAA0TBkIBkAAIAABkIBkAAIAAhkIJYAAIAAhkIDIAAIAABkIBkAAA0ThjIBkAAIBkAAIAABjIH0AAIAAjHIDIAAIAABkIDIAAA0TEsIJYAAIAAhkIDIAAIAABkIDIAAIAAhkIBkAAA8HjHIBkAAA6jhjIhkAAA8HDIIBkAAA6jEsIhkAA");
	this.shape_2.setTransform(180,47.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(340,7.6875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AOwGQIAAr5ImEAAIAAL5IgGAAIAAjIIAAhkIAAjHIAAhkIAAjIIBkAAIDIAAIBkAAIAABkIAABkIAABkIAAGPIAABkgAt/lpIg2gmIGQAAIAAAmg");
	this.shape_4.setTransform(105,47.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("ATgF9IAAhkIAAhkIAAmPIAAhkIAAg+IFeAAIAABgIAAAAIAAKZgAiRF9IAAr5IGDAAIAAL5gA49F9IAAr5IFaAAIAAA+IAADIIAADHIAADIIAABkg");
	this.shape_5.setTransform(175.2,49.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AYOGQIAAqZIAAAAIAAhgIleAAIAAgmIBkAAIErAAIAAABIgxAlIAxglIAABiIBlAAIAAABIhkAAIAAJXIAAAAIAABkgA6jGQIAAhkIAAhkIAAkrIAAhkIAAjIIA2AmIAAL5g");
	this.shape_6.setTransform(180,47.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.5,362,218.5);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-118.95,-106.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.9,-106,238.5,272.5);


(lib.Symbol146 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666666").ss(0.3,1,1).p("AV494MAAAA7xMgrvAAAMAAAg7xg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("A13d5MAAAg7xMArvAAAMAAAA7xg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-192.2,282,384.5);


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
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-73,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AnERHQgXgNAAgeIAAmdIBEAAIAAGwIBEAAIAAmwIBEAAIAAGbQAAAWgKAMQgKAOgWAFIg9AGQg2AAgYgOgArQRHQgXgNAAgeIAAhmIBFAAIAAB5IBDAAIAAjHIhegDQgOgCgLgHIgJgIIgFgIIgDgLIAAiLQABghAWgNQAXgNA6AAQA3AAAZAPQAMAIAFAIQAEAJAAARIAABPIhFAAIAAhiIhDAAIAACiIBgADQANACAKAIQALAHADAHQADAJAAAUIAACfQAAAWgKAMQgKAOgXAFIg8AGQg3AAgYgOgAJkRRIAAjpQgkgBgQgLIgJgIIgFgIIgDgLIAAjCIBFAAIAADEIBEAAIAAjEIBEAAIAACzIgDAbQgDAHgLAIQgQALgjABIAADpgAFJRRIAAnSICiAAIAAAkIhdAAIAACgIBdAAIAAAlIhdAAIAADFIBdAAIAAAkgACCRRIhUnSIBJAAIAiDyIAGBOIAEAAIADg0IAkkMIBIAAIhSHSgAhDRRIAAjpIhFAAIAADpIhEAAIAAnSIB+ABIAfADQALAEAKAFQARAIAFALQAEALAAAcIAABmQAAASgJAJQgJAJgXAGQAWAGALAJQAIAJAAARIAADSgAiINDIBFAAIAAigIhFAAgAEiJPQgKgFAAgLIAAiDQAAgKABgEIAGgHQAGgEAIgBIAXgCQAYAAAJAFQAKAFAAAMIAAAeIgdAAIAAglIgdAAIAACXIAdAAIAAhMIgOAAIAAgOIArAAIAABSQAAAIgEAFIgOAHIgaACgAhXJPQgKgFAAgLIAAidIAdAAIAACkIAdAAIAAikIAdAAIAACcQAAAIgEAFQgEAFgKACIgaACgAKqJTIAAixIBFAAIAAANIgoAAIAAA9IAoAAIAAAOIgoAAIAABLIAoAAIAAAOgAJxJTIAAikIgeAAIAACkIgdAAIAAikIgdAAIAACkIgdAAIAAidQAAgMAKgFQAJgFAWAAQAVAAALAGIAOgEIASgCQAWAAAJAFQAKAFAAAMIAACdgAHEJTIAAhZIgdAAIAABZIgdAAIAAicQAAgNAKgFQAKgFAYAAQAXAAAKAFQAKAFAAAMIAACdgAGnHsIAdAAIAAg9IgdAAgACFJTIAAixIBFAAIAAANIgnAAIAAA9IAnAAIAAAOIgnAAIAABLIAnAAIAAAOgABMJTIAAhZIgdAAIAABZIgdAAIAAixIBCABIAKAEIAJAHIACAPIAAAnIgEAKIgOAFQAJADAFADQAEADAAAHIAABQgAAvHsIAdAAIAAg9IgdAAgAiuJTIAAikIgdAAIAAgNIBXAAIAAANIgdAAIAACkgAj8JTIAAikIgdAAIAACkIgdAAIAAicQAAgNAKgFQAKgFAYAAQAXAAAKAFQAKAFAAAMIAACdgAmRJTIAAixIBFAAIAAANIgoAAIAAA9IAoAAIAAAOIgoAAIAABLIAoAAIAAAOgAnmJTIgkixIAfAAIARB3IAAACIACAAIAAgCIAQh3IAfAAIgjCxgAp4GiIBDABIAJAEQAHADADAEIACAPIAAB7IgCAPQgEAEgHAEIgOADIg9ABgApbJFIAeAAIAAiWIgeAAgAqxJTIAAhZIgdAAIAABZIgdAAIAAicQAAgNAKgFQAJgFAZAAQAXAAAKAFQAKAFAAAMIAACdgArOHsIAdAAIAAg9IgdAAgAJ7qaQgOgFAAgNIAAhdQgBgMAOgFIAwgEIAmACQAOACAFAFQAGAFABAIIAAAxIhUAAIAAAzIAqAAIAAggIAqAAIAAAZQgBAMgNAFIgxAFgAKWrmIAqAAIAAgpIgqAAgAB0qaQgOgFAAgNIAAhcQAAgIADgDIALgGIAwgFIAxAEQAOAFAAAMIAAASIgqAAIAAgYIgqAAIAABrIAqAAIAAggIAqAAIAAAZQAAAMgOAFIgwAFgAgyqZQgKgEAAgJIAAgvQAAgIAEgDQAJgIAYABQAXgBAWAIIAAgvIgpAAIAAAYIgpAAIAAgSQAAgMANgFIAvgEIAmACQAOACAFAFQAGAFABAIIAAByIgqAAIAAgHQgWAIgXAAQgSAAgJgEgAgTqkIApAAIAAg0IgpAAgAlsqaQgOgFAAgNIAAhdQAAgMAOgFIAwgEIAmACQAOACAFAFQAGAFAAAIIAAAxIhTAAIAAAzIAqAAIAAggIApAAIAAAZQAAAMgNAFIgxAFgAlQrmIAqAAIAAgpIgqAAgAH3qWIgwiHIArAAIASA+IAGAiIACAAIAAgCIAVheIAsAAIguCHgAF8qWIAAiHIAqAAIAACHgAFHqWQgegBgLgFQgLgGAAgOIAAheIgjAAIAAgPIAjAAIAAglIApAAIAAAlIAqAAIAAAPIgqAAIAABpIAqAAIAAAPgAjUqWIAAiHIAqAAIAAAGQASgIAcABQAlgBAAARIAAAXIgqAAIAAgYIgpAAIAAB5gAmtqWQgdgBgLgFQgMgGABgOIAAheIgkAAIAAgPIAkAAIAAglIApAAIAAAlIAqAAIAAAPIgqAAIAABpIAqAAIAAAPgApBqWIAAh5IgqAAIAAB5IgpAAIAAiHIApAAIAAAGQATgIAcABQAkgBABARIAAB4gAruqWIAAjCIAtAAIAADCgAF8tFIAAgTIAqAAIAAATgAhotjQgLgFAAgNIAAgSIAgAAIAAAZIAgAAIAAgpQgTAIgQAAQgPAAgHgFQgHgEAAgIIAAhnIADgLQAHgHATAAQATAAAQAIIAAgHIAgAAIAACkQAAAMgLAFIglAFQgaAAgLgFgAhTufIAgAAIAAhqIggAAgAmltjQgLgFAAgNIAAgSIAgAAIAAAZIAgAAIAAgpQgTAIgRAAQgPAAgGgFQgHgEAAgIIAAh4IAgAAIAAB5IAgAAIAAh5IAfAAIAACkQAAAMgLAFQgKAFgaAAgAKVuVQgLgFAAgMIAAgYIAgAAIAAAfIAgAAIAAgyIgxgCQgIgCgDgDQgEgEAAgGIAAghQAAgMALgFIAkgFIAdACQALADAEAEQAEAFABAJIAAAQIggAAIAAgXIggAAIAAAoIAcAAIAbAFQAIAEABAKIAAAoQgBAMgKAFQgKAGgbAAQgaAAgLgGgAIYuVQgLgFAAgMIAAhdQAAgMALgFIAkgFIAdACQALADAEAEQAFAFAAAJIAAAxIhAAAIAAAyIAgAAIAAgfIAgAAIAAAYQAAAMgLAFQgKAGgbAAQgaAAgLgGgAItvhIAgAAIAAgoIggAAgADauUQgHgEAAgIIAAgvQAAgJADgDQAHgHASAAQASAAARAIIAAgvIggAAIAAAXIgfAAIAAgRQgBgMALgFIAlgFIAcACQALADAEAEQAFAFAAAJIAABxIggAAIAAgGQgSAIgRAAQgOAAgHgFgADyufIAgAAIAAgzIggAAgABZuVQgMgFAAgNIAAiPQAAgLACgEIAHgHIAQgGIAbgCQAcAAALAGQAMAFAAANIAAAhIgiAAIAAgpIgiAAIAAClIAiAAIAAhTIgRAAIAAgPIAzAAIAABZQAAAJgFAFQgFAGgLACIgfADQgbAAgMgGgAoluUQgIgEAAgIIAAgvIADgMQAHgHATAAQASAAARAIIAAgvIggAAIAAAXIggAAIAAgRQAAgMAKgFIAlgFIAdACQAKADAFAEQAEAFAAAJIAABxIgfAAIAAgGQgSAIgRAAQgOAAgHgFgAoNufIAgAAIAAgzIggAAgAHRuRIAAh4IghAAIAAB4IgfAAIAAh4IggAAIAAB4IggAAIAAiHIAgAAIAAAHQAOgIAVAAIARACIAJAGQAOgIAWAAIAXAEQAHAEAAAJIAAB3gAiwuRIAAh4IggAAIAAB4IggAAIAAiHIAgAAIAAAHQAPgIAVAAQAcAAAAARIAAB3gAkwuRIAAiHIAgAAIAACHgApsuRIAAjBIAgAAIAADBgAruuRIAAjBIA/AAIAQACIALADQAIADADAFQACAEAAAMIgBAzQgBAEgDACIgKAGIgIACIguACIAABhgArMwBIAjAAIAAhCIgjAAgAkwxAIAAgSIAgAAIAAASg");
	this.shape.setTransform(2.025,14.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(0.3,1,1).p("ANHSSI6NAAMAAAgkjIaNAAg");
	this.shape_1.setTransform(2.4,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AtGSSMAAAgkjIaNAAMAAAAkjgAr9pwIgEAKIAAPNIAAAIIAEAKQAFAFAFAAIXgAAQAHAAAEgFIAEgKIAAgIIAAvNIgEgKQgEgFgHAAI3gAAQgFAAgFAFgArjFXIAAulIXCAAIAAOlg");
	this.shape_2.setTransform(2.4,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ArwH2QgFgBgFgEQgEgEAAgGIAAvNIAEgKQAFgFAFAAIXgAAQAHAAAEAFIAEAKIAAPNQAAAGgEAEQgEAEgHABgArgnOIAAOlIXCAAIAAulIAAgII3CAAg");
	this.shape_3.setTransform(2.1,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-102.9,169.9,236);


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
	this.shape.graphics.f("#666666").s().p("A5yGTIAAslIGQAAIAAMlgATjGNIAAsfIGQAAIAAMfgAiRGNIAAsfIGKAAIAAMfg");
	this.shape.setTransform(-5.075,-49.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Egx/ApYMAAAhSvMBj/AAAMAAABSvgA6lqCIGRAAIAAslImRAAgASwqHIGQAAIAAsgImQAAgAjDqHIGKAAIAAsgImKAAg");
	this.shape_1.setTransform(0,54.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-210,640,529.6);


(lib.Symbol135 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AARhYIAwAFIAAgYIhggLABBhTIATACQgkBXAkBYIgTgBAgfB3IBgAAIAAgaIgwAAIgfAAIAAi1IAfAAQgZBaAZBbAgfB3Ig0AAIAAjtIA0AAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#989898").s().p("AgPBbIAAi0IAfAAQgZBZAZBbg");
	this.shape_1.setTransform(0.15,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#000000"],[0,1],0,20.3,0,-20.2).s().p("AAVBaIgvAAQgahaAahaIAvAFIATACQgkBWAkBYg");
	this.shape_2.setTransform(4.425,0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgZB3IAAjtIAzAAIAADtg");
	this.shape_3.setTransform(-5.75,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgwB3IAAjtIBhAMIAAAXIgxgEIgeAAIAAC0IAeAAIAxAAIAAAag");
	this.shape_4.setTransform(1.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,-12.8,18.700000000000003,25.700000000000003);


(lib.Symbol132 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("ADIjHIhkAAIhkAAIAAhkIhjAAIhkAAAjHjHIBkAAIAABkIAABjIAABkIBjAAIAAhkIBkAAIBkAAADIBkIhkAAIAABkIhkAAIhjAAIhkAAADIEsIhkAAIhkAAIhjAAIhkAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1).p("AAAmPIBkAAABkkrIhkAAIAAhkABkkrIBkAAIAABkIAAAAIAABkIAAAAIAAAcIAABVIAABWIAAAcIAAgcIAAAAABkkrIAAhkIBkAAIAADIAAAhjIBkAAIBkAAIAAhkADIhjIAAAcABkhjIAAhkIAAhkAhjmPIAABkIAABkIBjAAIAABkIAABjIhjAAIhkAAIAAhjIAAhkIAAhkIAAhkIBkAAIBjAAADIAAIAAAOABkhjIAABjIAABkIhkAAIAABkIAABkIAABkIhjAAIhkAAIAAhkIAAhkIAAhkIBkAAIAABkIAABkIAABkADIDWIAAgOIhkAAIAABkIAABkIhkAAADIDWIAAhWADIEsIAAAYIAAgYIAAAAIAAhWADIFEIAABMIhkAAAAAhjIhjAAIhkAAAjHBkIAAhk");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABkGQIhkAAIAAhkIBkAAIAABkIAAhkIBkAAIhkAAIAAhkIBkAAIAAAOIAABWIAAAAIAAAXIAABNgAAAGQIhjAAIAAhkIBjAAIAABkgAhjGQIhkAAIAAhkIAAhkIAAhkIBkAAIAABkIhkAAIBkAAIAABkIhkAAIBkAAIAABkgAAAEsIAAhkIBkAAIAABkgAhjEsIAAhkIBjAAIAABkgAhjEsgADIDIIhkAAIAAhkIBkAAIhkAAIAABkIhkAAIAAhkIBkAAIAAhkIBkAAIhkAAIAAhjIBkAAIhkAAIAAhkIBkAAIAABkIAAAcIAABVIAAgOIAAAOIAABWIAAAAIAAAcIAABWgABkDIgABkDIgAhjDIIAAhkIhkAAIAAhkIAAhjIBkAAIAABjIhkAAIBkAAIAABkIBjAAIAABkgAhjDIgABkBkIhkAAIAAhkIBkAAIAABkgAAABkgAhjBkIAAhkIBjAAIAAhjIBkAAIhkAAIAAhkIhjAAIAAhkIBjAAIAABkIBkAAIAABkIAABjIhkAAIAABkgAAABkgABkAAgAhjAAIAAhjIBjAAIAABjgAhjAAgAAAhjIhjAAIAAhkIhkAAIBkAAIAABkIhkAAIAAhkIAAhkIBkAAIAABkIBjAAIAABkgAhjhjgADIjHIhkAAIAAhkIAABkIhkAAIAAhkIhjAAIAAhkIBjAAIAABkIBkAAIhkAAIAAhkIBkAAIAABkIBkAAIAABkIAAhkIhkAAIAAhkIBkAAIAADIgABkjHgAhjkrIhkAAIAAhkIBkAAIAABkgAjHkrgAhjmPg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-41,42.1,82);


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
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("AjHjHIBkAAIAAhkIBjAAIBkAAIBkAAAjHBkIBkAAIAAhkIBjAAIAABkIAABkIBkAAIAAhkIAAhkIAAhjIBkAAAjHhjIBkAAIBjAAIAAhkIBkAAIBkAAAjHDIIBkAAIAABkIBjAAIBkAAIBkAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1).p("ADIAAIAAhjIAAhkIAAhkIAAhkIhkAAIAABkIAABkIAABkIhkAAIAABjIBkAAIBkAAIAABkAAAmPIBkAAAjHAAIBkAAIAAhjIAAhkIBjAAIAAhkIAAhkAAAGQIAAhkIAAhkIhjAAIAAhkIBjAAIBkAAIBkAAIAABkIAABkIAABkIhkAAIAAhkIAAhkIBkAAABkGQIhkAAIhjAAIhkAAIAAhkIBkAAIAABkAjHkrIAAhkIBkAAIBjAAAjHkrIBkAAIAAhkAjHAAIAAhjIAAhkIAAhkAjHEsIAAhkIAAhkIAAhk");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABkGQIAAhkIBkAAIAABkgABkGQIhkAAIAAhkIBkAAIAABkgAAAGQIhjAAIAAhkIhkAAIAAhkIAAhkIAAhkIAAhjIAAhkIAAhkIAAhkIBkAAIAABkIhkAAIBkAAIAAhkIBjAAIAABkIhjAAIAABkIhkAAIBkAAIAABkIhkAAIBkAAIAABjIhkAAIBkAAIAAhjIBjAAIAABjIBkAAIAABkIhkAAIAAhkIhjAAIAABkIhkAAIBkAAIAABkIBjAAIAABkIhjAAIAAhkIhkAAIBkAAIAABkIBjAAIAABkgAhjGQIhkAAIAAhkIBkAAIAABkgABkEsIAAhkIBkAAIAABkgAAAEsIAAhkIhjAAIAAhkIBjAAIAABkIBkAAIAABkgAAAEsgABkDIIAAhkIBkAAIAABkgABkDIgABkDIgAAADIIAAhkIBkAAIAABkgABkDIgABkBkIAAhkIBkAAIhkAAIAAhjIBkAAIAABjIAABkgAAABkIhjAAIAAhkIBjAAIAABkgAhjBkgAhjBkgABkAAgABkAAIhkAAIAAhjIBkAAIAAhkIBkAAIAABkIhkAAIAABjgAAAhjIAAhkIBkAAIAABkgAhjhjIAAhkIBjAAIAAhkIBkAAIAABkIhkAAIAABkgAAAhjgAhjhjgABkjHIAAhkIBkAAIAABkgABkjHgAhjjHIAAhkIBjAAIAABkgAhjjHgAhjjHgABkkrIAAhkIBkAAIAABkgAAAkrIAAhkIBkAAIAABkgAAAkrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-41,42,82);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("AjHjHIBkAAIAAhkIBjAAIBkAAIBkAAAjHhjIBkAAIAABjIAABkIBjAAIAAhkIAAhjIAAhkIBkAAIAABkIBkAAAjHDIIBkAAIBjAAIBkAAIAAhkIBkAAAjHEsIBkAAIBjAAIBkAAIBkAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1).p("AAAmPIBkAAIBkAAIAABkIAABkIAABkIAABjIAABkIAABkIAABkIAABkIhkAAIAAhkIAAhkIBkAAABkmPIAABkIAABkIBkAAAAAmPIAABkIAABkIhjAAIAABkIBjAAIBkAAIAABjAAAGQIAAhkIAAhkIAAhkIBkAAIAAhkIhkAAIhjAAIhkAAIAAhjIAAhkIAAhkIAAhkIBkAAIAABkIhkAAADIAAIhkAAABkGQIhkAAIhjAAIhkAAIAAhkIAAhkIAAhkIBkAAIAABkIAABkIAABkAjHBkIAAhkAhjmPIBjAA");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABkGQIAAhkIBkAAIAABkgAAAGQIAAhkIBkAAIAABkgAAAGQIhjAAIAAhkIBjAAIAABkgAhjGQIhkAAIAAhkIAAhkIAAhkIAAhkIBkAAIAABkIBjAAIAABkIhjAAIAAhkIhkAAIBkAAIAABkIhkAAIBkAAIAABkIhkAAIBkAAIAABkgABkEsIAAhkIBkAAIAABkgAAAEsIAAhkIBkAAIAABkgAhjEsIAAhkIBjAAIAABkgAhjEsgABkDIIAAhkIBkAAIAABkgAAADIIAAhkIBkAAIAAhkIhkAAIAAhjIBkAAIAABjIAAhjIhkAAIAAhkIBkAAIAABkIBkAAIAABjIhkAAIBkAAIAABkIhkAAIAABkgABkDIgAhjDIgAAABkIAAhkIBkAAIAABkgAAABkgAhjBkIAAhkIBjAAIAABkgAAABkgAAAAAIhjAAIAAhjIhkAAIBkAAIAABjIhkAAIAAhjIAAhkIAAhkIBkAAIAAhkIBjAAIAABkIhjAAIAABkIhkAAIBkAAIAABkIBjAAIAABjgAhjAAgABkhjIAAhkIhkAAIAABkIhjAAIAAhkIBjAAIAAhkIBkAAIAABkIBkAAIAABkgAAAhjgABkjHIAAhkIBkAAIAABkgAhjjHIAAhkIBjAAIAABkgAhjjHgAhjjHgABkkrIAAhkIAABkIhkAAIAAhkIBkAAIBkAAIAABkgAAAkrgAjHkrIAAhkIBkAAIAABkgAhjmPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-41,42,82);


(lib.Symbol123 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("EhCWALBIgGgLMAmWgV2MA3gAAAMAnDAWBg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-425.3,-70.5,850.6,141);


(lib.Symbol119 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AMgEEI4/AAIHMoHIRzAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AsfEEIHMoHIRzAAIAAIHg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.9,-27,161.9,54.1);


(lib.Symbol118 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AMggrIAAjYIo6AAIo5AAInMIHIY/AAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,1,1).p("AjshrIhgDXIKZAA");
	this.shape_1.setTransform(46.725,-15.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AsfEEIHMoHII5AAIhgDYIKaAAIqaAAIBgjYII6AAIAADYIAAEvgADmkDg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol118, new cjs.Rectangle(-80.9,-27.5,162.4,54.6), null);


(lib.Symbol116 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AMgEEI4/AAIHMoHIRzAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AsfEEIHMoHIRzAAIAAIHg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.9,-27,161.9,54.1);


(lib.Symbol115 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("AmPCYICGkvIKZAA");
	this.shape.setTransform(40.025,10.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1).p("AMggrIAAjYIxzAAInMIHIMfAAIMgAAg");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AAAEEICGkvIKaAAIAAEvgAsfEEIHMoHIRzAAIAADYIqaAAIiGEvg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol115, new cjs.Rectangle(-80.9,-27,162.4,54.6), null);


(lib.Symbol113 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AMgEEI4/AAIHMoHIRzAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AsfEEIHMoHIRzAAIAAIHg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.9,-27,161.9,54.1);


(lib.Symbol112 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("AlMiXIKZAAIiGEv");
	this.shape.setTransform(-19.825,10.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1).p("AlTkDIRzAAIAAIHIsgAAIsfAAIENkvg");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AAAEEICGkvIqYAAIKYAAIiGEvIsfAAIENkvIC/jYIRzAAIAAIHg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol112, new cjs.Rectangle(-80.9,-27,161.9,54.6), null);


(lib.Symbol108 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AMgEEI4/AAIHMoHIRzAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AsfEEIHMoHIRzAAIAAIHg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.9,-27,161.9,54.1);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AoSgrIkNEvIY/AAIAAoHIo6AAIo5AAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,1,1).p("AF9hrIhgDXIqZAA");
	this.shape_1.setTransform(-15.05,-15.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AsfEEIENkvIKYAAIBgjYII6AAIAAIHgAoSgrIC/jYII5AAIhgDYgAoSgrgADmkDg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol107, new cjs.Rectangle(-80.9,-27.5,161.9,54.6), null);


(lib.Symbol101 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0066CC").s().p("Ai/xqIF/BuIAAeHIl/Dgg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-113.1,38.4,226.3);


(lib.Symbol98 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0066CC").s().p("Ak7xkIJ3C8IAAa8IpvFRg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.6,-112.5,63.2,225);


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
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AgxAUIgPgKIgFgKQAAgJANgHIAHgDQAUgJAdAAQAdAAAUAJIAHADQAOAHAAAJQAAAMgVAIQgUAJgdAAQgdAAgUgJg");
	this.shape.setTransform(-0.025,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag6APQA/AIApgtQAOAHAAAKQAAALgVAIQgTAJgdAAQgdAAgUgIgAg7AOIAAAAIABABIgBgBg");
	this.shape_1.setTransform(0.95,0.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgqAYIgQgKIgEgLQAAgIANgIIAHgDQAUgIAdAAQAdAAAUAIIAHADQgjAmgzAAIgTgBg");
	this.shape_2.setTransform(-0.7,-0.3837);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-3.9,16,7.8);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Aj9v1IAAgdIIPCQIANAEIhYAAIAAacIBXAAIABAAIAZgOIAA68IpXi0IgYAAMAAAAjBIAYAAIAigTMAAAghDIHEB3AEft+IAAacAkfxgMAAAAjB");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663333").s().p("AkrxgIJXC0IAAa8IgaAOIAA6cIgMgEIoPiQIAAAdMAAAAhDIgiATg");
	this.shape_1.setTransform(1.2,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AkqRhMAAAgjBIAYAAMAAAAjBgAErMeIhXAAIAA6cInEh3IAAgdIIOCQIANAEIhXAAIBXAAIAAacgAErt+gAErt+gAEeuCIANAEg");
	this.shape_2.setTransform(-1.275,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AkwxMIJhCVIAAavIphFVg");
	this.shape_3.setTransform(0.75,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.2,-113.1,64.4,226.3);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhtBtQgugtAAhAQAAhAAugtQAuguA/AAQBBAAAtAuQAuAtAABAQAABAguAtQgtAvhBAAQg/AAgugvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.3,1,1).p("AR6gwQANgIALgLQAdgdAAgqQAAgTgGgQQgHgUgQgQQgYgYghgEQguAEgZAYQgPAQgIATQgGARAAATQAAApAdAdQAMAMARAIQASAIAYADQASgDAPgIIAABgIAAABQANAHALALQAQAQAHATQAGARAAATQAAATgGAQQgHATgQAQQgdAegqAAMgiXAAAQgqAAgdgeQgQgPgHgTAR6AwQAOAHAMAMQAdAdAAAqQAAATgIAQAR6AwQgUgKgZAAIgeAAIAAhWAx2gwQgRgIgMgMQgdgdAAgpQAAgTAGgRQAHgTAQgQQAYgYAvgEQAgAEAYAYQAQAQAIAUQAGAQAAATQAAAqgeAdQgLALgNAIIAABWIgeAAQgYAAgUAKQgPAHgMAMQgRARgHAVQgFAPAAASQAAATAEARQgGgRAAgTQAAgTAGgRQAHgTAQgQQANgNAQgHIAAhfQASAIAYADQARgDAPgIAx2AwIAAgBAwsAmMAhbAAA");
	this.shape.setTransform(0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AxLDOQgpAAgegeQgQgPgGgTQgFgRAAgTQAAgSAFgPQgFAPAAASQAAATAFARQgHgRAAgTQAAgTAHgRIAAADQAIARAOAPQAeAdApAAMAiXAAAQApAAAegdQAPgPAIgUQAGARAAATQAAATgGAQQgIATgPAQQgeAegpAAgAROAGIgeAAIAAhVQASAHAYAEQASgEAPgHQgPAHgSAEQgYgEgSgHQgRgIgMgMQgdgdAAgpQAAgUAHgQQAGATAQAPQAYAZAvADIAAgBQAggBAZgZQAPgQAIgSQAGAQAAATQAAApgdAdQgLAMgNAIIAABfQgVgKgYAAgAx1APIAAheQASAHAYAEQASgEAPgHQgPAHgSAEQgYgEgSgHQgRgIgMgMQgdgdAAgpQAAgUAHgQQAGATAQAPQAYAZAvADIAAgBQAggBAZgZQAPgQAIgSQAGAQAAATQAAApgdAdQgLAMgNAIIAABVIgfAAQgYAAgUAKg");
	this.shape_1.setTransform(0,3.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AxLDKQgqAAgdgeQgPgOgHgSQAHgVARgQQAMgNAPgHQgPAHgMANQgRAQgHAVIgBgCQAHgUAQgQQANgNAQgHIAAABQAUgKAYAAIAeAAMAhbAAAIAeAAQAYAAAUALIAAAAQANAHALALQAQAQAIAUQgIATgQAPQgdAegpAAgAQThnQgQgQgHgTQAHgTAQgQQAYgYAvgEQAgAEAYAYQAQAQAIAUQgIATgQAPQgYAZggABIAAABQgvgDgYgYgAyShnQgQgQgHgTQAHgTAQgQQAYgYAvgEQAgAEAYAYQAQAQAIAUQgIATgQAPQgYAZggABIAAABQgvgDgYgYg");
	this.shape_2.setTransform(0.025,-3.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-24.7,242.2,49.5);


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
	this.shape.graphics.f("#CCCCCC").s().p("Ag0AdIgDgFIABgHIAAAAQACgDAEAAIAGABQAeAVATgMIABAAQAUgOALgyQAAgDADgCIABAAIAGgBQAEAAACADIAAAAIABAHQgMA7gbAQQgLAIgMAAQgUAAgagSg");
	this.shape.setTransform(0.025,0.051);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Ag1AgIgFgHQgBgGADgDQACgEAFgBIAJACQAdAUARgKQAVgPAKgwQABgFADgCIAJgBIAHAEIACAIQgNA9gbARQgMAHgNABQgVAAgagSgAg2ARIAAAAIgBAHIAEAFQApAdAbgTQAbgQANg7IgCgHIAAAAQgCgDgEAAIgGABIgBAAQgCACAAAEQgMAxgUAPIgBAAQgSALgegVIgHgBQgEAAgCADg");
	this.shape_1.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-4.9,11.8,9.9);


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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AFkgtIAdgPIgdAAIAAAPIjCBfIAAHAIAngbIgBl5IBVgtIBHglIAAFeIAdgVIAAmRAFkFqIhHAAIAAk5AgOBxIBiAAIAAGBIBOAAAmAmxIEshAIBGAAIAAG1IFyAAAkcm1IhkAEIAAOjIBkAAIAAmBIAuAAIByAAIBKAAIAkAAIAADkIgkAVIhKAAIAAj5Ah8gPIAAjyIhyAjIAAD9IByguIBKgeIAkgPAh8kBIBKgXIAADrAgOnxIkOA8IAAHnIAugTAgyFqIAAj5AjuBxIAAFmIguAbACiAyIm+AA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A28966").s().p("ABzgfIBGAAIkNA6IhkAFg");
	this.shape_1.setTransform(-20,-46.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6F5633").s().p("ABiHUIAAmBIhiAAIgjAAIhKAAIBKAAIAAD5IhKAAIAAj5IhyAAIguAAIAAGBIhkAAIAAuiIBkgFIAAHnIG9AAIAAHAgAErFMIAAk5IBHgkIAAFdgAhtkfIBKgXIAADsIhKAeg");
	this.shape_2.setTransform(-1.475,2.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#886F4C").s().p("ABvAxIDCheIjCBeIm9AAIAugSIguASIAAnmIEOg8IAAG2IgkAOIAAjrIhKAXIhyAjIAAD9IBygtIBKgfIAkgOIFxAAIAAAOIAegOIAAGQIgeAVIAAleIhHAlIhUAtIABF5IgoAbgAlOBxIAuAAIAAFmIguAbgAhkBxIAkAAIAADkIgkAVg");
	this.shape_3.setTransform(5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-50.7,79,101.5);


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
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-17.8,-14,0.3569,0.3569);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-14,35.7,28.2);


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
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-17.1,-23.05,0.3629,0.3629);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-23,34.1,46.1);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#47643F").ss(0.3,1,1).p("ACAFeQiMmMgQgrQgKgbhhjpQCCABBFB9QBICAAAD1QAAAQgCA4QgDBKgDA2QgCiohUjfQhUjghdhU");
	this.shape.setTransform(0.075,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#57744F").s().p("AgYhYQgKgchhjpQBdBUBUDgQBUDfACCoQiMmLgQgrg");
	this.shape_1.setTransform(-0.325,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#688560").s().p("AAqgpQhUjghdhUQCCABBFB9QBICAAAD0IgCBJQgDBKgDA2QgCiohUjfg");
	this.shape_2.setTransform(0.075,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-36,29.2,72);


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

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-11.75,-44.25,0.4319,0.4319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-44.2,23.7,88.5);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.498)").ss(0.3,1,1).p("AiehMIAgAMQA0AOBKAAIBMgEIAzgKQAUgGAMgGQgJgNgdgLQgdgLg2ABIhUgCQgkABgkALQgjAKgFAOIgFgDQgLgGgDgHIgCgGIAAgBQAAgVA1gOQAlgKAwgDIApgCQBLAAA0APQA1AOAAAVIAAAAIgBAGQgEAHgLAHIgFADADHhZIABgHIAAgBQAAgbg7gTQg6gThTAAQhSAAg7ATQg6ATAAAbIAAACIACAIADHhZQgEALgNAJIgUALIgVAHQg6AThTAAQhSAAg7gTIgTgHQgMgFgJgGQgMgJgEgJAi+gyIACAEQAGAMAdAKIATAGQA4AOBOAAQBPAAA4gOIAUgGQAdgJADgHIAEgGQAKgWgCgVAi+gyIgFgKQgDgJABgSAi+gyIAgCmQAFASApAOIAJACQAmALAyACIAfAAQAvgCAkgJIAOgEQAtgPACgUIAfif");
	this.shape.setTransform(-0.0002,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("AgPCjQgygDgmgKIgJgCQgpgOgFgSIggilIABADQAHANAdAKIASAFQA5AOBOAAQBPAAA4gOIAUgFQAdgJADgIIAEgGIgfCfQgCATgtAQIgPADQgjAKgvACgAiHgSIgSgFQgdgKgHgNIgBgDIgFgKQgEgKABgSIgBgIIAAgBQAAgbA6gTQA7gUBSAAQBSAAA7AUQA7ATAAAbIAAABIgBAHQgEAKgNAJIgUALIgVAIQg7AShSABQhSgBg7gSIgTgIQgNgFgIgGQgMgIgFgKQAFAKAMAIQAIAGANAFIATAIQA7ASBSABQBSgBA7gSIAVgIIAUgLQANgJAEgKQACAUgKAWIgEAGQgDAIgdAJIgUAFQg4AOhPAAQhOAAg5gOgAiehMIAfAMQA1AOBKAAIBMgEIAzgKQAUgGAMgGQgJgMgdgMIAAAAQgbgKgvAAIgBAAIAAAAIgIAAIhUgCQglACgjAKQgkALgEANIAAAAgAizhiIACAGQACAHAMAHIAFACIgFgCQgMgHgCgHIgCgGIAAgBQAAgVA0gOQAmgKAwgDIApgBQBLAAA0AOQA1AOAAAVIAAAAIgCAGQgDAHgLAIIgFACIAFgCQALgIADgHIACgGIAAAAQAAgVg1gOQg0gOhLAAIgpABQgwADgmAKQg0AOAAAVIAAABgAi+gxgAh/hAIgfgMQAEgNAkgLQAjgKAlgCIBUACIAIAAIAAAAIABAAQAvAAAbAKIAAAAQAdAMAJAMQgMAGgUAGIgzAKIhMAEQhKAAg1gOgACfhMIAAAAg");
	this.shape_1.setTransform(-0.0002,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(0.3,1,1).p("AiehMIAgAMQA0AOBKAAIBMgEIAzgKQAUgGAMgGQgJgNgdgLQgdgLg2ABIhUgCQgkABgkALQgjAKgFAOIgFgDQgLgGgDgHIgCgGIAAgBQAAgVA1gOQAlgKAwgDIApgCQBLAAA0APQA1AOAAAVIAAAAIgBAGQgEAHgLAHIgFADADHhZIABgHIAAgBQAAgbg7gTQg6gThTAAQhSAAg7ATQg6ATAAAbIAAACIACAIADHhZQgEALgNAJIgUALIgVAHQg6AThTAAQhSAAg7gTIgTgHQgMgFgJgGQgMgJgEgJAi+gyIACAEQAGAMAdAKIATAGQA4AOBOAAQBPAAA4gOIAUgGQAdgJADgHIAEgGQAKgWgCgVAi+gyIgFgKQgDgJABgSAi+gyIAgCmQAFASApAOIAJACQAmALAyACIAfAAQAvgCAkgJIAOgEQAtgPACgUIAfif");
	this.shape_2.setTransform(-0.0002,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AA0ANQgdgMg1ABQgdgUgzgQIAqgBQBKAAA0AOQA1APAAATIAAABIgBAFQgEAIgLAHIgFACQgJgMgdgLg");
	this.shape_3.setTransform(6.875,-11.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgPCjQgygDgmgKQgigYgQiVIASAFQA5AOBOAAQBPAAA4gOIAUgFQgSCHgnAnQgjAKgvACgAAAgEQhOAAg5gOIgSgFQgKgQADgTQgNgFgIgGQgMgIgFgKIgBgIIAAgBQAAgbA6gTQA7gUBSAAQBSAAA7AUQA7ATAAAbIAAABIgBAHQgEAKgNAJIgUALIgVAIQg7AShSABQhSgBg7gSIgTgIIATAIQA7ASBSABQBSgBA7gSIAVgIQAFAXgMAMIgUAFQg4AOhPAAIAAAAgAgpiTQgwADgmAKQg0AOAAAVIAAABIACAGQACAHAMAHIAFACIAfAMQA1AOBKAAIBMgEIAzgKQAUgGAMgGIAFgCQALgIADgHIACgGIAAAAQAAgVg1gOQg0gOhLAAgACbgXIAAAAgAiZgXg");
	this.shape_4.setTransform(-0.0002,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("ACagZQAdgJAEgHIADgHIgeCfQgCAUgtAPIgPAEQAngnARiIgAhxCSQgpgOgFgSIgfilIABADQAGANAeAKQAQCVAhAYgACig8IATgLQANgJAEgKQADAVgLAVIgDAHQgEAHgdAJQANgMgFgXgAi9gwIgBgDIgGgKQgDgKABgSQAEAKANAIQAIAGANAGQgEATALAPQgegKgGgNgAikhQQgLgHgDgHIgBgGIAAgBQAAgUA0gPQAlgKAwgDQAyAQAeAVIhUgCQglACgjAKQgkALgFAOg");
	this.shape_5.setTransform(0.0115,0.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999966").s().p("AhVARIgfgMQAEgMAkgLQAjgKAlgCIBUACQAjAYADAfIhMAEQhKAAg1gOg");
	this.shape_6.setTransform(-4.2,-8.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666633").s().p("Ag8gbQA2gBAcAMQAeALAJALQgNAHgUAFIgyAKQgDgegjgZg");
	this.shape_7.setTransform(9.85,-8.304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-17.2,42,34.5);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AQEgjIBIAAIAABHgAxLgjIBIAAIhIBHg");
	this.shape.setTransform(0,27.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AxLB5IBIhIMAgHAAAIBIBIgAQEAxIipipICHAAIABAAIBpCpgAxLAxIBqipICHAAIipCpg");
	this.shape_1.setTransform(0,18.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AtZCWIA7g8IgjgIQgagJAAgNQAAgNAagLQAbgJAlAAIAgACIg9A9IADABIAaABQAlAAAbgKQAagJAAgNQAAgNgagLIgdgHIgDAAICyixIRiAAICxCwQgVACgRAGQgaALAAANQAAANAaAJIAjAIIADABIAaABIAjgCIA7A8gALkAcIAagBIAgACIADAAIAdAHQAaALAAANQAAANgaAJIgdAIg");
	this.shape_2.setTransform(-0.125,-8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AwDEQICpiqIiHAAIGwl1IRjAAIGwF1IiHAAICpCqgANbBmIg8g8IAegIQAagJAAgNQAAgMgagLIgdgHIgDAAIgggCIgaABIixixIxjAAIixCyIgggCQglAAgbAJQgbALABAMQgBANAbAJIAjAIIg7A8Ia1AAg");
	this.shape_3.setTransform(0,-3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.9,-30.7,219.9,61.5);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AjODAIgIgEQgEgEAAgFQAAgFAEgDIAEgDIAEgBIISAAQgBAVAVAAIgJAEgAFYC8IAAAAIAAAAgAjtBnIgIgDQgEgEABgEQgBgFAEgDIAEgDIAEAAIFbAAIgrg3QgCgEAAgDIAAgCQABgEADgDIABAAIAIgCIAEABIBiAAQgBARARAAIgHADIhbAAIArA4IADAHIAAABIgEAHIgBABIgHACgAiWAdIgFgCIgEgEIggg+IgBgEIAAgBIgYgxIgBgEIAAAAIgUgoIhWAAIgFgCIgBgFIABgEIACgBIADgBIBXAAIABAAIAFgBIAFAEIAVArIADADIAZAyIADADIAdA5IBZAAIgegvIgCgFIABgCIAEgGIAAgBIAIgBIACABIDEAAQgBAPAPAAIgGADIi/AAIAfAwIABAFIAAABQAAAEgDACIgBABQgDACgDAAgAiNiJIgDgBIgCgCIgZgoIinAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgEIABgDIACgBIACgBICoAAIAAAAIAFgBQAAAAABABQABAAAAAAQABABAAAAQAAABABAAIAYAmICsAAQgBAIALADIAAAAIgEACg");
	this.shape.setTransform(-3.925,-8.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(0.5,1,1).p("ACQD+Ig7heADLCHIgzhCAEnD+IhIheACdA8IBwAAAiTjYIBOAAIgcglAhFjYIBVAAAiyj9IAUAgAkDj9IAQAgAkmiAIBZAAAkShLIBfAAAggipIAfApIhhAAIhYAAAAhhTIgigtIBhAAAhiiAIAcAtAh8ipIAaApAiFgCIAaAzAAOAxIghg0AiehLIBUAAAj7gMIBmAAAjTivIBMAAAjujTIAPAdAgqi1IgbgjAhgBIIAgA/AgFD+IgvheABFCHIgpg/ABSgUIgjguAgOgMIBcAA");
	this.shape_1.setTransform(-5.2,-4.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(0.3,1,1).p("AmHkvIBQAAIBRAAIBRAAIBRAAIAhAlIAgAjQgCAIALADIAmAqIApAtQgCAPAQAAIAqAuQgBARARABIA7BAIBFBLQgCAWAVAAIBYBhAjPDMICWAAICVAAICWAAICWAAIAABkIpXAAIi4opIAAg2Al8kPIgLggAlpjbIAPApIAUA1IAXA/IAWA+AltjnIgLgeAj5BWIgYhAAjxBuIAiBeAjPEwIAAhk");
	this.shape_2.setTransform(0.025,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AkrAyIAAhjICWAAICVAAICWAAICWAAIAABjg");
	this.shape_3.setTransform(9.25,25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ahbj5IAAg2IALAgIgBABIgCAEIACADQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAIACAAIALAeIgCABIgCAFIACAEIAEACIACAAIAPApIAUA1IAXA/IAVA+IgEACQgDAEAAAEQAAAFADADIAIAEIAEAAIAYBAIgFADQgEAEAAAFQAAAFAEAEIAJADIAEAAIAiBeIAABkg");
	this.shape_4.setTransform(-29.975,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ADyD+IhIheIBIBeIiWAAIg8heIA8BeIiVAAIgvheIAvBeIiWAAIgiheICJAAICIAAICKAAIB+AAIAIgDIBYBhgAkRBIIB9AAIB9AAIB0AAIAHgDIAAAAIAEgIIAAgBIgCgGIgrg4IBbAAIAHgCIA7BAIBFBLIiGAAIgzhCIAzBCIiGAAIgog/IAoA/IiFAAIggg/IAgA/IiBAAIgEABgADYA8IhwAAgAkvgMIBmAAIhmAAIgXg/IBfAAIhfAAIgUg1IBZAAIhZAAIgPgpIBUAAIAUAoIAAABIABAEIAZAxIAAAAIABAFIAdA6IACAFIAEAEIAFABIAFAAIBtAAQADAAACgBIABgBQADgDABgDIAAgCIgCgFIgfgxIBfAAIBhAAIAGgCIAqAuIhjAAIgEgBIgIACIAAABIgiguIAiAuQgEACAAAFIAAABIhcAAIBcAAQgBAEADADIAqA2IhrAAIgig0IAiA0Ih6AAIgagzIAaAzIh2AAIgEABgAkvgMgAi3gWIgbg1IBUAAIhUAAIgCgEIgEgEIgWgtIBYAAIAcAtIgEAGIAAACIABAGIAfAvgAjShLgAlGhLgAiWiAIBhAAIAjAtIhdAAIgDgBIgHABIgBAAgAgShTIgjgtIBhAAIhhAAIgfgpIAfApIhhAAIgagpIAaApIhYAAIgCgEIgDgEIgUgnIBMAAIhMAAIgCgDIgEgEIgGAAIgPgdIAPAdIgBABIhXAAIgCAAIgLgeIBWAAIBQAAIAXAkIACADIACACIADABIAEAAIBcAAIBVAAIAFgBIAmAqIApAtgAjuiAgAlaiAgAkHivgAhei1IgbgjIBWAAIhWAAIAbAjIhTAAIgWgjIBOAAIgcglIAcAlIhOAAIgCgDQAAgBgBAAQAAgBAAAAQgBgBgBAAQAAAAgBAAIgEABIgBAAIgUggIAUAgIhVAAIgQggIAQAgIhTAAIgCAAIgLggIBQAAIBRAAIBRAAIBRAAIAhAlIAgAjgAkTi2gAjHjYg");
	this.shape_5.setTransform(0.025,-4.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-31.3,80.5,62.7);


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
	this.shape.graphics.f("#666666").s().p("AiSDAIgCAAIgFgCIgEgFIgCgGIAAgBIALhLIhuAAIgDAAQAJgIgDgOIBzAAIAHgBIABAAQAFAAADAEQACAEAAAEIAAACIgKBJIGEAAQgFANALALIgDABgABwBnIh7AAQgFAAgDgDQgEgEABgEIAAhJIABgFIAAgwIhWAAIgIA2QAAAEgDACIgHADIhxAAIgDgBQAJgHgEgMIBnAAIAHg2IAEgGIAHgCIAEABIBfAAIAFgBIAHADIADAHIAAA5IABAFIAAA+IBjAAIgIg9IAAgBIAAgEIgIg5IAAgBIABgEIgHgwIAAgCQAAgDACgCIAGgDIAFABIBcAAQgDAIAHAHIgCAAIhYAAIAFAoIACAEIAIA6IACAEIAKBJIAAACIgBAFIgEAEIgFACgAjOhZIgCgBQAHgIgDgGIC5AAIAAgoIADgFIAFgCIAEABICwAAQgDAIAGAEIgBABIivAAIAAAoIgCAGIgFACgAjCiJIgBgBQAEgGgBgGIBUAAIAFgjIAAAAIADgFIAEgBIAAAAIADABID7AAQgDAFAGAFIgCAAIj6AAIgFAkIAAABIgCAEQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAg");
	this.shape.setTransform(1.225,-8.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(0.5,1,1).p("AAMj9IAAAgABcj9IAFAgABijTIACAPIACAKABoipIAFAgAAMh5IAAAkAAWhLIBVAAABliAIhSAAAAXgMIBcAAAAMjTIAAAcACJgMIBmAAACAhLIBeAAAhEj9IgEAfAifjYIBQAAAhPipIgFAhAhIivIBMAAAhmgCIgHAyAABgMIhbAAAhWh5IgFAkAhmhLIhfAAAhiA8IBjAAAh8CgIgNBeAkCCUIB7AAACJBIIAJA/AAMBIIAAA/ACVCgIAJBAIAFAeAAMD+IAAheAEDA8IhwAA");
	this.shape_1.setTransform(-1.175,-4.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(0.3,1,1).p("AEsDMIgZheQgLgMAEgNIgUhLIgUhIIgRg+IAAgBIgNguQgGgGACgJIgJghQgGgEADgIIgJgeQgFgFADgFIgJgfIAAgBIhRAAIhRAAIhQAAIhRAAIgKAlIgJAjQABAGgEAGIgJAhQADAHgHAIIgNAuIgPA1QAEANgJAHIgOA0QADAOgJAHIgVBNIgdBqABbjnIgBgFAEsDMIAABkIpXAAIAAhkICWAAICVAAICXAAg");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AkrAyIAAhjICXAAICUAAICXAAICVAAIAABjg");
	this.shape_3.setTransform(0,25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACXD+IgEgeIgJhAIAJBAIAEAeIiXAAIAAheIAABeIiUAAIAMheIgMBeIiXAAIAdhqIAVhNIADABIBuAAIgLBKIAAACIACAFIAFAFIAEACIACAAICGAAICKAAICFAAIADAAIAaBegAiTCUIh7AAgACGCHIgJg/IAJA/IiGAAIAAg/IAAA/Ih4AAIAKhJIAAgCQABgEgDgDQgDgEgFgBIgBAAIAIgyIgIAyIgHABIhzAAIAOgzIADAAIBxAAIABAAIAGgCQADgDAAgDIABgCIAHg2IBWAAIAAAxIgBAFIhcAAIBcAAIAABIIhkAAIBkAAQAAAFADADQADAEAEAAIB8AAIABAAIAFgCIAEgFIACgFIAAgBIgLhHIBnAAIhnAAIAAgBIgCgFIgHg5IBfAAIAAABIARA+IAUBIIAUBLgAD4A8IhwAAgAAMAxIAAg9IgCgFIAAg6IgDgHIgHgDIAAgkIAAAkIgEACIhfAAIgEgCIAGgkIgGAkIgHACIgEAHIAAABIhfAAIBfAAIgHA1IhmAAIAOg1IANguIACAAIBhAAIBhAAIAFgCIACgFIAAgpIBWAAIBaAAIABAAIAKAhIhbAAIgGgBIgEggIAEAgIgGAEQgCACAAADIhSAAIBSAAIAAABIAHAxIgBADIhVAAIBVAAIAAACIAIA6IAAADIhbAAIBbAAIAAACIAIA7gAB9gMgAgKgMgAB0hLIgBgBIgCgFIgFgoIBYAAIACAAIANAugAB0hLgABfhLgAhfiIIAEghIgEAhIhhAAIAJghIABAAIBbAAIABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAABAAIABgEIAAgBIAGgkIBOAAIBWAAIBWAAIABAAIAJAeIhbAAIgBgFIABAFIhXAAIgEgCIAAgcIAAAcIgEADIgCAFIhOAAIBOAAIAAAngABYjEIACAKIgCgKIgCgPgABhiJgAi0i1IAJgjIALglIBQAAIBQAAIBQAAIBSAAIAAABIAIAfIhVAAIgFggIAFAgIhVAAIAAggIAAAgIhRAAIgDgBIAAAAIAEgfIgEAfIgEABIgDAEIAAABIhQAAIBQAAIgEAjg");
	this.shape_4.setTransform(0,-4.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-31.3,62,62.7);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AlPDAIgIgDQAQgEAEgSIIRAAIAEABIAFADQADADAAAFQAAAFgDAEQgEAEgFAAgAj/BnIgIgDQANgFAFgOIFiAAIAhhDIAGgGIAJABIBsAAIADAAIAEADIADAHIgDAHQgDADgEAAIhqAAIgiBEIgEAEIgGACgAhKAdIgGgCIgBgBIgDgGIAAgBIACgGIAxg+IAEgEIAdgkIhTAAIgFgCQALgFABgIIBXAAIADgBIAHABIAAABIADAFIAAABIgCAGIglAxIgCAFIgkAuIBWAAIAmg6IADgDIAggxIAEgEIAcgrIACgCIAEgBIBaAAIAEABIABABIADAEIAAABIgBAEIgSAkIBUAAIADAAIADACIACAFIgCAGIgGACIhgAAIgEgBIgBgBIgCgEIgBgCIABgDIASgkIhKAAIgaAnIgBAFIggAyIgBAEIgpA+IgDAEIgFABgAgoiJIgEgCQAJgEABgHIBTAAIAdgmIAEgDIAFABID8AAIACABIACABIABADIgBAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIj8AAIgeAoIgCACIgDABg");
	this.shape.setTransform(4.025,-8.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(0.5,1,1).p("ACsj8IgUAeADsjeIAQgeABaj9IgYAfAA3jZIhPAAAAaipIgaAhAALgCIggAzAgjhLIBRAAABSiBIhPAAAAniwIBLAAACjhLIAXgvAEviwIhSAAAELhLIhoAAABFhLIBeAAIgbA1AC2iBIhRAAACSjUIgTAdADnjUIgOAeABYBIIggA/AAsCgIgvBeAhlgEIgqA1AhpgMIhpAAAhcCgIg8BeAjmCgIhIBeAhMCHIApg/AiZhLIBeAA");
	this.shape_1.setTransform(6.125,-5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(0.8,1,1).p("AClhJIhZAAAiKApIAYgfAiKApIgaAh");
	this.shape_2.setTransform(1.475,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(0.3,1,1).p("AA3AAIhtAA");
	this.shape_3.setTransform(22.3,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(0.3,1,1).p("AGJkuIAAA0Ii5IqIpYAAIAAhkICXAAICWAAICVAAICWAAIAABkAF9kPIAMgfIhQAAIhQAAIhRgBIhOAAIgEAAIghAkIgGAHIgCACIgYAaQAAAHgJAEIggAjQgBAIgLAFIgsAwIg5A/Ig4A+QgFAOgNAFIgtAxIgEAFAFei6IAPgoIANgkAE1hIIATg1IARguADyBuIgiBeAEtg0IgXA+IgbBMAh7A0IgBAAAkbBVIALgMAmIDMIBZhhQAQgDADgTIAMgM");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AkrAyIAAhjICWAAICWAAICVAAICWAAIAABjg");
	this.shape_5.setTransform(-9.25,25.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AhbDLIAihdIAEAAQAFAAAEgEQAEgEgBgFQABgFgEgDIgFgDIAchMIAWg+IAEAAQAEAAADgDIADgHIgDgHIgDgDIATg1IARguIACAAIAGgCIACgGIgCgFIgDgCIAPgoIAMgkIADAAQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIABgEIgBgDIgCgBIALgfIAAA0Ii3Ipg");
	this.shape_6.setTransform(30,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA6D9IAvhdIgvBdIiVAAIA8hdIg8BdIiWAAIBJhdIhJBdIiWAAIBYhgIAIADIB/AAICJAAICIAAICJAAIgiBdgAD2CHIiAAAIAfg/IgfA/IiFAAIAog/IgoA/IiGAAIAaghIgaAhIiGAAIA9hCIAHADIBzAAIB9AAIB8AAIAHAAIAFgCIAFgFIACgFIAgg+IBlAAIgXA+IhuAAIBuAAIgcBMgAh7BlIAAABIAAgBIAXgdgAkQB7IgLAMgAkQB7IgLAMgAkQB7gAkQB7gAkMB2IAugxIguAxIgEAFgAEWA8gAAoAxIAhgzIghAzIh6AAIAqg1IgqA1Ih7AAIA5g9IBoAAIhoAAIA4g/IAsgwIAGACIBRAAIgcAkIgFAEIgEAGIheAAIBeAAIgsA5IgCAGIAAABIAEAGIAAABIAGACIBrAAIAGAAIAFgBIADgEIAEgFIAlg6IACgEIAAgBIAfgxIACgEIAZgoIBLAAIgSAkIgBAEIAAABIADAEIABABIADABIBeAAIgRAuIhoAAIAYgvIgYAvIBoAAIgTA1IgEAAIhsAAIAbg1IheAAIBeAAIgbA1IgJgBIgGAGIgDAFIhYAAIBYAAIgeA9gAD0iAIhRAAgAjNAxIA5g9Ig5A9gAgNgWIAjgvIACgEIABgCIAlgwIADgFIAAgCIgEgFIAAAAIgGgCIgEABIhXAAIAggiIAEABIBXAAIAFAAIADgBIACgBIADgFIAcgkIBPAAIBWAAIBUAAIgMAkIhTAAIBTAAIgPApIgDgBIhTAAIASgkIAAgEIAAgBIgCgEIgCgBIAPgeIgPAeIgEgBIhWAAIATgdIgTAdIgEAAIgDABIgDADIgDADIhLAAIBLAAIgZAoIgEADIgDAFIhOAAIBOAAIgdAtIgDADIgEAFIhSAAIBSAAIghA1gAA9iHIAagigAAChLgACPiAgAFtiwgAAFi1IAYgaIACgDIAGgGIgGAGIAGgGIBPAAIhPAAIAggkIAFAAIBNAAIBSAAIgUAeIAUgeIBQAAIBPAAIgLAfIgBgBIhSAAIAPgeIgPAeIhVAAIhVAAIAXgeIgXAeIgGgBIgDADIgDAEIgbAjgADpj8g");
	this.shape_7.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-31.3,80.5,62.7);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AggALIgSgSQADgEAFABIBKAAIATASIgIADg");
	this.shape.setTransform(0,0.0219);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-1.1,10.2,2.3);


(lib.Symbol53 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666666").ss(0.3,1,1).p("AIblPIlDAAIATA2IEwAAgACikZIAAg2IAuCqIAEAOIBYFDAGQCsIh1lDIgGgPIgqhzAPoCsIBkAAIAADIMgiXAAAIAAjIIDHjGIAQgRIElkjIAAgBIABAAIAkgkIRWAAIIgIfAPoEQIAAhkInNn7AGQCsIAABkIJYAAAEsEQIAAhkIBkAAACikZICKIpAIbkZIHNIpAoZkZIAAg1IAAgBIFDABIgUA1IhXDuIgHAUIhHDDAvnCsICyjDIAQgRIEMkmAihlPIAAA2IFDAAAkrCsIA1jDIAGgTIBPklAoZkZIEvAAAkrCsIAABkICKopAvnEQIJYAAIAAhkIBkAAAxLCsIBkAAIAABkIHOopAkrEQIJXAAACilPIlDAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgPBIIgDgBIAHgTIBMAAIADAAIgFAUgApIBIQgEAAgDgDIARgRIBIAAIAGACIgQASgAIJg3IgEgPIACgBIBDAAIAGAPIgDABg");
	this.shape_1.setTransform(-30.925,-9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AIaj5IAAg2IHOH7IAABkgACij5IAAg2IAuCqIAEAOIBYFDIAABkgAkrDMIA1jEIAGgSIBQklIAAA2IiLIpgAvnDMICyjEIAQgQIEMkmIAAA1InOIpg");
	this.shape_2.setTransform(0,-3.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AGQFCIAAhkIh1lDIgGgPIgqhzIEvAAIHOIpgAkrFCICLopIFCAAICKIpgAvnFCIHOopIEvAAIhWDuIgIATIhHDEIBHjEIAEABIBOAAIg1DDIhkAAIAABkgAPoDeInOn7IlDAAIAUA2IAqBzIhDAAIgCABIguiqIlCAAIhQEkIgDAAIhNAAIBWjuIAUg1IlDgBIAAABIkMElIgHgCIhIAAIElkjIAAgBIABAAIAkgkIRWAAIIgIfgAEsDeIhYlCIBEAAIADgBIB1FDgAxLDeIDHjGQADADAEAAIBIAAIiyDDg");
	this.shape_3.setTransform(0,-5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AxLFiIAAjIIBkAAIAABkIJYAAIAAhkIBkAAIAABkIJXAAIAAhkIBkAAIAABkIJYAAIAAhkIBkAAIAADIgADrkrIgUg2IFDAAIAAA2gAigkrIAAg2IFCAAIAAA2gAoZkrIAAg1IAAgBIFDABIgUA1g");
	this.shape_4.setTransform(0,1.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-38.2,222,76.4);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AAAEEIFAk/IAAjIIjIDIIjHDHIAAAoIjwAAABQkDIB4AAIB4AAABQkDIAADIIAoAAAAAEEIjvAAIhQhQIAAgoIGPmPAh3CMIjIAAAh3CMIAoAAAhPC0IBPBQABQg7IjHDH");

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


(lib.Symbol45 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0066CC").s().p("AmJGKQijijAAjnQAAjmCjijQCjijDmAAQDnAACjCjQCjCjAADmQAADnijCjQijCjjnAAQjmAAijijg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.7,-55.7,111.5,111.5);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ak/DcIBQigIB4AAIjIDIgADIiLIB4h4IAAB4g");
	this.shape.setTransform(-1.05,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AifBkIDHjHIB4AAIjHDHg");
	this.shape_1.setTransform(2.95,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AlJEEIDIjIIh4AAIE/k/IDwAAIh4B4Ih4AAIjHDHIB4AAIDHjHIB4AAQApA4gpBAQhMAZgEhBIk/E/g");
	this.shape_2.setTransform(-0.0125,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-26,66,52);


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
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("ABGiLIB4AAIB4h4IjwAAIAAB4IjHDHIB4AAIDHjHIB4AAIAAh4AE2iLQApA3gpBBQhMAZgEhBIk/E/IjwAAIAAgoIBQigIE/k/AhZDcIBQigAlJDcIAoAAIgoAoAiBA8Ih4AAAiBA8IigCgIDIAAAhZEEIAAgo");
	this.shape.setTransform(-0.0125,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-27,68,54);


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
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("ABNlfQBHALA2A2QBSBSAAB1IgCG2IosAAIEKhrIAAmaQAGhtBBg/IAOgNIgFgBQgkgFgoAGQh9ARhOBMQhCBAgGBtIAAG0IAFAAIgJAE");
	this.shape.setTransform(-0.175,0.206);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#000000"],[0,1],8.2,19.9,-8.1,-41).s().p("AixFhIAAm0QAFhtBDhAQBOhMB7gRQAqgGAkAFIAEABIgNANQhDA/gFBtIAAGaIkKBrg");
	this.shape_1.setTransform(-10.35,0.031);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#000000"],[0,1],-2.8,65.5,-2.8,-16.6).s().p("AkXFgIEKhsIAAmZQAGhtBBhAIAOgNQBIAMA1A1QBTBTAAB1IgCG2g");
	this.shape_2.setTransform(0.275,0.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.6,-36.3,58.900000000000006,73);


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
	this.shape.graphics.f("#333333").s().p("Ai6HkIAAvXIgCgPIF5AAIAAPPIgvAAIkjA2g");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.8,-51.5,37.7,103);


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
	this.shape.graphics.f("#FFFFFF").s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-240,640,480);


(lib.Symbol31 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-4.3,-4.2,25.3,8.7), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-5.7,-15.2,11.4,30.4), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Aj4nMIAAOZIHxAAIAAuY");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCC99").s().p("Aj3HNIAAuZIHvABIAAOYg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.8,-47,51.7,94.1);


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
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AA2AAQAAAkgQAZQgPAZgXAAQgWAAgQgZQgPgZAAgkQAAgjAPgZQAQgZAWAAQAXAAAPAZQAQAZAAAjg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmA8QgPgYAAgkQAAgjAPgYQAQgaAWAAQAXAAAPAaQAQAYAAAjQAAAkgQAYQgPAagXAAQgWAAgQgag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-6.4,-9.5,12.8,19.1), null);


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
		this.xold = exportRoot.ratmove.player.x;
		this.yold = exportRoot.ratmove.player.y;
	}
	this.frame_1 = function() {
		let player = exportRoot.ratmove.player;
		this.xnew = player.x;
		this.ynew = player.y;
		let walkBox = player.walk;
		
		if (this.xold == this.xnew && 
			this.yold == this.ynew
		)
			walkBox.text = "no";
		else if (this.xold > this.xnew)
		{
			walkBox.text = "yes";
			player.gotoAndStop("_270");
		}
		if (this.xold < this.xnew)
		{
			walkBox.text = "yes";
			player.gotoAndStop("_90");
		}
		if (this.yold > this.ynew)
		{
			walkBox.text = "yes";
			if (this.xold == this.xnew)
				player.gotoAndStop("_0");
			else if (this.xold > this.xnew)
				player.gotoAndStop("_315");
			else if (this.xold < this.xnew)
				player.gotoAndStop("_45");
		}
		if (this.yold < this.ynew)
		{
			walkBox.text = "yes";
			if (this.xold == this.xnew)
				player.gotoAndStop("_180");
			else if (this.xold > this.xnew)
				player.gotoAndStop("_225");
			else if (this.xold < this.xnew)
				player.gotoAndStop("_135");
		}
	}
	this.frame_2 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AHjJZIA/mUQBnDfgWE7ICGn2QBCD+g5EcQCXk4gQj0QBCESgeERQBbjkgCjlQBFCcADDcQBWj4AIksQgil3jElXQn1latrEsQoOCpjnIxQg5DXA5DXQBbk4CPjhQgkDJA1DJIB1oZIAAIDQAGkzCTjHIAAH2QApjtBvimQgwEVAwEWQBFldCki8QhPEuBPFOQA9nYB3iKQhPFiBPFiQAdlmCWjzIAJKPQBMnDD3ioQgXDhBMDgg");
	this.shape.setTransform(0,0.0216);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663333").s().p("AL5DpIiHH2QAWk7hmjfIg/GUQhMjgAWjhQj2CohNHDIgJqPQiVDzgdFmQhPliBPliQh3CKg9HYQhOlOBOkuQikC8hEFdQgxkWAxkVQhwCmgpDtIAAn2QiTDHgFEzIAAoDIh1IZQg1jJAjjJQiPDhhaE4Qg5jXA5jXQDmoxIOipQNqksH2FaQDDFXAjF3QgIEshWD4QgDjchFicQACDlhcDkQAfkRhDkSQARD0iXE4QA4kchBj+g");
	this.shape_1.setTransform(0,0.0216);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-120.6,-78.1,241.2,156.3), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFoAAQAADghqCeQhpCeiVAAQiVAAhpieQhpieAAjgQAAjfBpieQBpieCVAAQCVAABpCeQBqCeAADfg");
	this.shape.setTransform(0.0499,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("Aj+F+QhpieAAjgQAAjfBpieQBpieCVAAQCVAABpCeQBqCeAADfQAADghqCeQhpCeiVAAQiVAAhpieg");
	this.shape_1.setTransform(0.0499,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-36.9,-55,74,110.1), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACzidIAMAIQBPA1AABKQAABKhPA1QhPA1hwAAQhvAAhPg1QhPg1AAhKQAAhKBPg1IAMgI");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("Ai+BoQhPg0AAhKQAAhKBPg1IAMgIIFlAAIAMAIQBPA1AABKQAABKhPA0QhPA2hwAAQhvAAhPg2g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-28,-16.7,56,33.5), null);


(lib.SpinnyCarpet = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CCCCCC").ss(4.5,1,1).p("ABkisIjHFZ");
	this.shape.setTransform(30,57.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(5.3,1,1).p("ADIAAImPAA");
	this.shape_1.setTransform(60,40);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(3,1,1).p("AAADIIAAmP");
	this.shape_2.setTransform(40,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(6,1,1).p("AishjIFZDH");
	this.shape_3.setTransform(22.675,30.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(1,1,1).p("AGQAAIAAGQIsfAAIAAsfIGPAAIGQAAg");
	this.shape_4.setTransform(40,40);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AmPGQIAAsfIGPAAIAAGPIGQAAIAAGQgAjHFaIDHlagAAAAAIlajGgAGQAAImQAAIAAmPIGQAAIAAGPgAAAmPg");
	this.shape_5.setTransform(40,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.5,83.6,82.5);


(lib.SideWallLines = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,641,388);


(lib.Room1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666666").ss(0.3,1,1).p("APoAyI/PAAIhkhjMAiXAAAg");
	this.shape.setTransform(320,375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AvnAyIhkhjMAiXAAAIhkBjg");
	this.shape_1.setTransform(320,375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Egx/gjcIAAiDMBj/AAAIAACDMAAAA8cIAADIIAAJYMhj/AAAIAApYIAAjIMAAAg8cIV4PgMAAAAiAMA4PAAAIgWBkMg3jAAAIgWhkI14K8AcIz8IV4vgAcIz8MAAAAiAIV4K8A7xPoI2OMgAbyPoIWOMgA8Hz8MA4PAAA");
	this.shape_2.setTransform(320,240);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Egx/AK8IAApYIWPsfMA3iAAAIWOMfIAAJYg");
	this.shape_3.setTransform(320,410);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCC99").s().p("A8HIyI14vgIAAiDMBj/AAAIAACDI14Pgg");
	this.shape_4.setTransform(320,56.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AbyldMg3iAAAI2PMfIAAjIIV4q7IAXBkIgXhkMA4PAAAIgWBkIAWhkIV4K7IAADIg");
	this.shape_5.setTransform(320,375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#99CC99").s().p("AcITTMg4PAAAMAAAgiAMAAAAiAI14K7MAAAg8bIV4PgMA4PAAAMAAAAiAMAAAgiAIV4vgMAAAA8bg");
	this.shape_6.setTransform(320,206.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,642,482);


(lib.TileLeft = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol56("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-31.3,80.5,62.7);


(lib.Symbol150 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.298)").s().p("EgvnAhYMAAEhEdMBfLABtMgAEBEdg");
	this.shape.setTransform(-11.775,15.5);

	this.instance = new lib.Symbol32("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-240,640,480.1);


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
	this.instance = new lib.Symbol32("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-240,640,480);


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

	// Layer_1
	this.instance = new lib.Symbol143("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol144, new cjs.Rectangle(-82.5,-102.9,169.9,236), null);


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

	// Layer 1
	this.instance = new lib.Symbol135("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,-12.8,18.700000000000003,25.700000000000003);


(lib.Symbol136 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol135("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,-12.8,18.700000000000003,25.700000000000003);


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

	// Layer 1
	this.instance = new lib.Symbol132("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-41,42.1,82);


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
	this.instance = new lib.Symbol129("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-41,42,82);


(lib.Symbol127 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol126("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-41,42,82);


(lib.Symbol124 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol123("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-425.3,-70.5,850.6,141);


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
	this.instance = new lib.SpinnyCarpet("synched",0);
	this.instance.setTransform(1.1,-0.5,1,1,0,0,0,41.1,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:630,x:1.05,y:-0.55},9).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-42,83.6,83.6);


(lib.Symbol104 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.SideWallLines("single",0);
	this.instance.setTransform(320,206.6,1,1,0,0,0,320,193.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AAArtIAABgI7gAAI1sMQIgxAcIgCAAIAzgcEAlgALuIkVAAAAAqNIbpAAIWXMj");
	this.shape.setTransform(320.025,405);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIAAAA");
	this.shape_1.setTransform(621.0125,56.0875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(2,1,1).p("AcIFIIAcgOIAABlICihIIAABvICPg4IAAjtIBrg1QAggQAggQICFhCQAigRAigRIBIgkIAAiPIBNgqIAACTIFkiyIAACnIC+hUEAyAgIlIi+BqIAAinAcICAIBCgoIAABnIB8hFIAABvIAugXIAAjhIDMh9IAAB9IDFhuIAAiHII9leAcIJ0IBCgWIAAhoIBSgfIAABsIEkhiIAAj4ICEg7IAACDICFgzIAAiMIE7iLIAACcIF8iTAcILYIH4iMIAAiAIDJhDIAACLICVgpIAAknIBRggIAACYICyg7IAACiIEfhQEgx/gLXIF7DoIAACdIE8CvIAAiLIF0DkIAAB1IC5BnIAAhsIB4BJIAABlIAcAQEgx/gDBIC+BUIAAinII9EeIAAiHICFBKIAAB/IDdBuIAAB0ICxBPIAAjUIAoAWIAABoIBCAhEgx/AFTIC+A1IAAioIETBcIAAiYIDmBaIAACLIGmCMIAAB0IEbBPEgx/gAQIF7CTIAAicIJ8EaIAAB5IEXBtIAABpIBqAk");
	this.shape_2.setTransform(320,117.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAARAI8HAAIAA13IAAhkIAAksIAAhkIAAkUMA4PAAAIAACwIAADIIAAEsIAABkIAAV3g");
	this.shape_3.setTransform(320,221.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Egx/gjcIAAiDMBj/AAAIAACDMAAAA8cIAADIIAAJYMhj/AAAIAApYIAAjIMAAAg8cIV4PgMAAAAiAMA4PAAAIgWBkMg3jAAAIgWhkI14K8AcIz8IV4vgAcIz8MAAAAiAIV4K8A7xPoI2OMgAbyPoIWOMgA8Hz8MA4PAAA");
	this.shape_4.setTransform(320,240);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Egx/AK8IAApYIWPsfMA3iAAAIWOMfIAAJYg");
	this.shape_5.setTransform(320,410);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#99CC99").s().p("A8HRAMAAAgh/MA4PAAAMAAAAh/g");
	this.shape_6.setTransform(320,221.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AbyldMg3iAAAI2PMfIAAjIIV4q7IAXBkIgXhkMA4PAAAIgWBkIAWhkIV4K7IAADIg");
	this.shape_7.setTransform(320,375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AcITTMAAAgiAIV4vgMAAAA8bgEgx/geNIV4PgMAAAAiAI14K7g");
	this.shape_8.setTransform(320,206.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("A8HIyI14vgIAAiDMBj/AAAIAACDI14Pgg");
	this.shape_9.setTransform(320,56.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,642,482);


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

	// Layer 1
	this.instance = new lib.Symbol101("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-113.1,38.4,226.3);


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

	// Layer 1
	this.instance = new lib.Symbol98("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.6,-112.5,63.2,225);


(lib.Symbol99 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol98("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.6,-112.5,63.2,225);


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

	// Layer_1
	this.instance = new lib.Symbol29();
	this.instance.setTransform(9.85,-12.5,1.0262,1.1398,0,6.5245,-173.4747);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol96("synched",0);
	this.instance_1.setTransform(13.2,-12.45,0.6115,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AEOwwIobCUIAAadIIbEwg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1).p("AgqCdIAAlKIBVAFIAAFWIgLgCIgKgCIg9gNgAAXAjIAAACQAAAMgHAJIgJAIIgCABIAABEIgKAAIAAhEIgMgJQgHgJAAgMIAAgCQAAgMAHgIQAHgJAKABQAJgBAHAJQAGAIABAMg");
	this.shape_1.setTransform(15.475,-3.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgEBAIAAhDIgMgIQgHgJAAgNIAAgBQAAgMAHgIQAHgJAJAAQAKAAAHAJQAHAIAAAMIAAABQAAANgHAJIgJAHIgCABIAABDg");
	this.shape_2.setTransform(15.35,3.1987);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCC99").s().p("AkNMBIAA6cIIbiVMAAAAhhgABwB2IACABIA/AMIAKACIAKADIAAlXIAAgFIhVAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AAgCsIALACgAArCuIgLgCIgKgCIg9gNIgDAAIAAlKIBVAAIAAAFIhVgFIBVAFIAAFWgAgRAPQgHAIAAAMIAAACQAAAMAHAJIAMAJIAABEIAKAAIAAhEIACgBIAJgIQAHgJAAgMIAAgCQgBgMgGgIQgHgJgJABIgBAAQgKAAgGAIg");
	this.shape_4.setTransform(15.475,-3.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol97, new cjs.Rectangle(-28,-108.2,56,216.5), null);


(lib.Symbol92 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol87("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


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
	this.instance = new lib.Symbol32("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-240,640,480);


(lib.Symbol89 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol32("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-240,640,480);


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

	// Layer 1
	this.instance = new lib.Symbol87("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31.1,31.1);


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

	// Layer 1
	this.instance = new lib.Symbol83("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-24.7,242.2,49.5);


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

	// Layer 1
	this.instance = new lib.Symbol77("synched",0);
	this.instance.setTransform(0,0,1.3154,1.3154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.6,-66.4,103.30000000000001,132.9);


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
	this.instance = new lib.Symbol77("synched",0);
	this.instance.setTransform(0,0,1.3154,1.3154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.6,-66.4,103.30000000000001,132.9);


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

	// Layer 1
	this.instance = new lib.Symbol77("synched",0);
	this.instance.setTransform(0,0,1.3154,1.3154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.6,-66.4,103.30000000000001,132.9);


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

	// Layer 1
	this.instance = new lib.Symbol73("single",0);
	this.instance.setTransform(18.25,-23.05,1.0037,1.1539,0,7.8096,-169.5752);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// Layer 2
	this.instance_1 = new lib.Symbol75("single",0);
	this.instance_1.setTransform(18.55,-2.1,1,1.4009,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

	// Layer 3
	this.instance_2 = new lib.Symbol74("single",0);
	this.instance_2.setTransform(22.6,-8.5,1.0317,1.3777,0,10.8283,-159.4254);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3));

	// Layer 4
	this.instance_3 = new lib.Symbol73("single",0);
	this.instance_3.setTransform(-18.25,-19.15,1.0037,1.1539,0,-7.8096,-10.4248);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3));

	// Layer 5
	this.instance_4 = new lib.Symbol75("single",0);
	this.instance_4.setTransform(-18.55,1.8,1,1.4009);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// Layer 6
	this.instance_5 = new lib.Symbol74("single",0);
	this.instance_5.setTransform(-22.6,-4.55,1.0317,1.3777,0,-10.8283,-20.5746);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3));

	// Layer 7
	this.instance_6 = new lib.Symbol73("single",0);
	this.instance_6.setTransform(-12.65,-30.85,1,1.4009);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3));

	// Layer 8
	this.instance_7 = new lib.Symbol73("single",0);
	this.instance_7.setTransform(10.1,-31.4,1,1.4009,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3));

	// Layer 9
	this.instance_8 = new lib.Symbol72("single",0);
	this.instance_8.setTransform(2.45,-41,1,1.1578,0,-4.0101,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3));

	// Layer 10
	this.instance_9 = new lib.Symbol72("single",0);
	this.instance_9.setTransform(-7.5,-41.55,1,1.1578,0,4.0101,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3));

	// Pot
	this.instance_10 = new lib.Symbol71("synched",0);
	this.instance_10.setTransform(0.2,34.7,1.08,1.08);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-92.6,90.1,145.89999999999998);


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

	// Layer 1
	this.instance = new lib.Symbol69("synched",0);
	this.instance.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.9,-30.7,219.9,61.5);


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

	// Layer 1
	this.instance = new lib.Symbol64("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-31.3,80.5,62.7);


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

	// Layer 1
	this.instance = new lib.Symbol64("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-31.3,80.5,62.7);


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

	// Layer 1
	this.instance = new lib.Symbol60("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-31.3,62,62.7);


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
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-31.3,62,62.7);


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

	// Layer 1
	this.instance = new lib.Symbol56("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-31.3,80.5,62.7);


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

	// Layer 1
	this.instance = new lib.Symbol45("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.7,-55.7,111.5,111.5);


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

	// Layer 1
	this.instance = new lib.Symbol45("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.7,-55.7,111.5,111.5);


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

	// Layer 1
	this.instance = new lib.Symbol45("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.7,-55.7,111.5,111.5);


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
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.8,-51.5,37.7,103);


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
	this.instance = new lib.Symbol32("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-240,640,480);


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

	// Layer 1
	this.instance = new lib.Symbol32("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-240,640,480);


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
	this.instance = new lib.Symbol29();
	this.instance.setTransform(-3.15,-5.55,0.7038,0.7038);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol27();
	this.instance_1.setTransform(-3.15,0,0.7038,0.7038);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-6.8,-10.3,18.1,20.700000000000003), null);


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
	this.instance.setTransform(3.6,7.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AB5hzQAyBqAACWIAAAFQi7CaiaiaIAAgFQAAiWAyhqQAyhrBGAAQBHAAAyBrg");
	this.shape.setTransform(0,0.0375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiqCSIAAgFQAAiWAyhqQAyhrBGAAQBHAAAyBrQAyBqAACWIAAAFQheBNhVAAQhVAAhNhNg");
	this.shape_1.setTransform(0,0.0375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-18.1,-23.2,36.2,46.5), null);


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
	this.instance = new lib.Symbol2();
	this.instance.setTransform(1.55,0,0.3482,0.3545,0,147.0371,-63.5989);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(0,0,0.6244,0.7959,0,113.534,-90.8499);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-12.1,-22.3,24.2,44.6), null);


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

	// Layer_1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(-0.7,-6.3,0.3306,0.564,0,-9.6308,-13.6001);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(2.3,4.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_3
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(41.55,3.4,0.6244,0.4421,0,-135.9537,-89.6415);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_4
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(-37.2,3.4,0.6244,0.4421,0,135.9537,-90.3585);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-46.4,-58.5,93.1,117.5), null);


(lib.SliderRight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {start:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		if (exportRoot.flags.sliderState[2] === 1)
			this.gotoAndStop(1);
		else
			this.stop();
		
		MOTAS.setQuadState(
			this.btn65,
			() => void moCur.setBoth(myTranslation.mytxt48, 'grab'),
			() => 
			{
				moCur.setState("grab");
				if (moInv.activeObject === "tile3")
				{
					moInv.remove('tile3');
					MOTAS.setText(myTranslation.mytxt46);
					exportRoot.flags.sliderState[2] = 1;
					this.gotoAndPlay(44);
				}
				else
					MOTAS.setText(myTranslation.mytxt47);
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_1 = function() {
		exportRoot.flags.sliderState[2] = 1;
		this.stop();
		
		MOTAS.setQuadState(
			this.btn66,
			() => void moCur.setBoth(myTranslation.mytxt50, 'grab'),
			() => 
			{
				moCur.setState("grab");
				MOTAS.setText(myTranslation.mytxt49);
				exportRoot.slider3.play();
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_6 = function() {
		exportRoot.flags.sliderState[2] = 1;
		this.stop();
	}
	this.frame_13 = function() {
		exportRoot.flags.sliderState[2] = 2;
		this.stop();
	}
	this.frame_19 = function() {
		exportRoot.flags.sliderState[2] = 1;
		this.stop();
	}
	this.frame_27 = function() {
		exportRoot.flags.sliderState[2] = 1;
		this.stop();
	}
	this.frame_43 = function() {
		exportRoot.flags.sliderState[2] = 1;
		this.stop();
	}
	this.frame_63 = function() {
		this.gotoAndPlay("start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(5).call(this.frame_6).wait(7).call(this.frame_13).wait(6).call(this.frame_19).wait(8).call(this.frame_27).wait(16).call(this.frame_43).wait(20).call(this.frame_63).wait(1));

	// Layer_3
	this.btn65 = new lib.Symbol65();
	this.btn65.name = "btn65";
	new cjs.ButtonHelper(this.btn65, 0, 1, 2, false, new lib.Symbol65(), 3);

	this.btn66 = new lib.Symbol66();
	this.btn66.name = "btn66";
	this.btn66._off = true;
	new cjs.ButtonHelper(this.btn66, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn65}]}).to({state:[{t:this.btn66}]},1).to({state:[{t:this.btn66}]},42).to({state:[{t:this.btn66}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.btn66).wait(1).to({_off:false},0).to({scaleX:1.5,scaleY:1.5,x:30.35,y:44.8},42).to({scaleX:1,scaleY:1,x:0,y:0},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-31.3,130.5,122.7);


(lib.Slidermiddle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"start":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		if (exportRoot.flags.sliderState[1] === 1)
			this.gotoAndStop(1);
		else
			this.stop();
		
		MOTAS.setQuadState(
			this.btn61,
			() => void moCur.setBoth(myTranslation.mytxt48, 'grab'),
			() => 
			{
				moCur.setState("grab");
				if (moInv.activeObject === "tile2")
				{
					moInv.remove('tile2');
					MOTAS.setText(myTranslation.mytxt46);
					exportRoot.flags.sliderState[1] = 1;
					this.gotoAndPlay(44);
				}
				else
					MOTAS.setText(myTranslation.mytxt47);
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_1 = function() {
		exportRoot.flags.sliderState[1] = 1;
		this.stop();
		
		MOTAS.setQuadState(
			this.btn62,
			() => void moCur.setBoth(myTranslation.mytxt50, 'grab'),
			() => 
			{
				moCur.setState("grab");
				MOTAS.setText(myTranslation.mytxt49);
				exportRoot.slider2.play();
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_7 = function() {
		exportRoot.flags.sliderState[1] = 2;
		this.stop();
	}
	this.frame_13 = function() {
		exportRoot.flags.sliderState[1] = 1;
		this.stop();
	}
	this.frame_22 = function() {
		exportRoot.flags.sliderState[1] = 1;
		this.stop();
	}
	this.frame_29 = function() {
		exportRoot.flags.sliderState[1] = 1;
		this.stop();
	}
	this.frame_43 = function() {
		exportRoot.flags.sliderState[1] = 1;
		this.stop();
	}
	this.frame_63 = function() {
		this.gotoAndStop("start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(6).call(this.frame_13).wait(9).call(this.frame_22).wait(7).call(this.frame_29).wait(14).call(this.frame_43).wait(20).call(this.frame_63).wait(1));

	// Layer_3
	this.btn61 = new lib.Symbol61();
	this.btn61.name = "btn61";
	new cjs.ButtonHelper(this.btn61, 0, 1, 2, false, new lib.Symbol61(), 3);

	this.btn62 = new lib.Symbol62();
	this.btn62.name = "btn62";
	this.btn62._off = true;
	new cjs.ButtonHelper(this.btn62, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn61}]}).to({state:[{t:this.btn62}]},1).to({state:[{t:this.btn62}]},42).to({state:[{t:this.btn62}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.btn62).wait(1).to({_off:false},0).to({scaleX:1.5,scaleY:1.5,y:44.8},42).to({scaleX:1,scaleY:1,y:0},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-31.3,92,122.7);


(lib.SliderLeft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"start":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		if (exportRoot.flags.sliderState[0] === 1)
			this.gotoAndStop(1);
		else
			this.stop();
		
		MOTAS.setQuadState(
			this.btn57,
			() => void moCur.setBoth(myTranslation.mytxt48, 'grab'),
			() => 
			{
				moCur.setState("grab");
				if (moInv.activeObject === "tile1")
				{
					moInv.remove('tile1');
					MOTAS.setText(myTranslation.mytxt46);
					exportRoot.flags.sliderState[0] = 1;
					this.gotoAndPlay(44);
				}
				else
					MOTAS.setText(myTranslation.mytxt47);
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_1 = function() {
		exportRoot.flags.sliderState[0] = 1;
		this.stop();
		
		MOTAS.setQuadState(
			this.btn58,
			() => void moCur.setBoth(myTranslation.mytxt50, 'grab'),
			() => 
			{
				moCur.setState("grab");
				MOTAS.setText(myTranslation.mytxt49);
				exportRoot.slider1.play();
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_7 = function() {
		exportRoot.flags.sliderState[0] = 1;
		this.stop();
	}
	this.frame_22 = function() {
		exportRoot.flags.sliderState[0] = 2;
		this.stop();
	}
	this.frame_29 = function() {
		exportRoot.flags.sliderState[0] = 1;
		this.stop();
	}
	this.frame_36 = function() {
		exportRoot.flags.sliderState[0] = 1;
		this.stop();
	}
	this.frame_43 = function() {
		exportRoot.flags.sliderState[0] = 1;
		this.stop();
	}
	this.frame_63 = function() {
		this.gotoAndStop("start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(15).call(this.frame_22).wait(7).call(this.frame_29).wait(7).call(this.frame_36).wait(7).call(this.frame_43).wait(20).call(this.frame_63).wait(1));

	// Layer_3
	this.btn57 = new lib.TileLeft();
	this.btn57.name = "btn57";
	new cjs.ButtonHelper(this.btn57, 0, 1, 2, false, new lib.TileLeft(), 3);

	this.btn58 = new lib.Symbol58();
	this.btn58.name = "btn58";
	this.btn58._off = true;
	new cjs.ButtonHelper(this.btn58, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn57}]}).to({state:[{t:this.btn58}]},1).to({state:[{t:this.btn58}]},42).to({state:[{t:this.btn58}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.btn58).wait(1).to({_off:false},0).to({scaleX:1.5,scaleY:1.5,x:-30.4,y:44.8},42).to({scaleX:1,scaleY:1,x:0,y:0},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,-31.3,130.5,122.7);


(lib.Preloader = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.instance = new lib.Symbol7();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.4,-58.5,93.1,117.5);


(lib.Lights = function(mode,startPosition,loop,reversed) {
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
			this.btn136,
			() => void moCur.setBoth(myTranslation.mytxt36, 'grab'),
			() => 
			{
				MOTAS.setText(myTranslation.mytxt37);
				moCur.setState("grab");
				this.gotoAndStop(1);
			},
			() => void moCur.setState('off'),
			() => void moCur.setState('hold')
		);
	}
	this.frame_1 = function() {
		MOTAS.setQuadState(
			this.btn138,
			() => void moCur.setBoth(myTranslation.mytxt36, 'grab'),
			() => 
			{
				MOTAS.setText(myTranslation.mytxt38);
				moCur.setState("grab");
				this.gotoAndStop(0);
			},
			() => void moCur.setState('off'),
			() => void moCur.setState('hold')
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AK8B6I13AAIhbjzIYtAAg");
	this.shape.setTransform(210.15,-186.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AsWh5IYtAAIhbDzI12AAg");
	this.shape_1.setTransform(210.15,-186.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("AMXh5IhbDzI13AAIhbjzg");
	this.shape_2.setTransform(210.15,-186.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AsWh5IYtAAIhbDzI12AAg");
	this.shape_3.setTransform(210.15,-186.85);

	this.instance = new lib.Symbol139("synched",0);
	this.instance.setTransform(210.15,-18.1);
	this.instance.alpha = 0.7891;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.btn136 = new lib.Symbol136();
	this.btn136.name = "btn136";
	new cjs.ButtonHelper(this.btn136, 0, 1, 2);

	this.btn138 = new lib.Symbol138();
	this.btn138.name = "btn138";
	new cjs.ButtonHelper(this.btn138, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn136}]}).to({state:[{t:this.btn138}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.8,-228.1,640,529.6);


(lib.Hole = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol39("single",0);
	this.instance.setTransform(0.1,-0.05,0.4187,0.5222,0,0,30.2576);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-20.2,22.5,45.5);


(lib.Tile3 = function(mode,startPosition,loop,reversed) {
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
		if (exportRoot.flags.tilesGotten[2])
			this.stop();
		else
			this.gotoAndStop(1);
	}
	this.frame_1 = function() {
		MOTAS.setQuadState(
			this.btn133,
			() => void moCur.setBoth(myTranslation.mytxt26, 'grab'),
			() => 
			{
				exportRoot.flags.tilesGotten[2] = true;
		        moInv.unselect();
		        MOTAS.setText(myTranslation.mytxt27);
		        moCur.setState("grab");
		        moInv.add(4, "tile3");
		        this.gotoAndStop(0);
			},
			() => void moCur.setState('off'),
			() => void moCur.setState('hold')
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.btn133 = new lib.Symbol133();
	this.btn133.name = "btn133";
	this.btn133._off = true;
	new cjs.ButtonHelper(this.btn133, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn133).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-41,42.1,82);


(lib.Tile2 = function(mode,startPosition,loop,reversed) {
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
		if (exportRoot.flags.tilesGotten[1])
			this.stop();
		else
			this.gotoAndStop(1);
	}
	this.frame_1 = function() {
		MOTAS.setQuadState(
			this.btn130,
			() => void moCur.setBoth(myTranslation.mytxt26, 'grab'),
			() => 
			{
				exportRoot.flags.tilesGotten[1] = true;
		        moInv.unselect();
		        MOTAS.setText(myTranslation.mytxt27);
		        moCur.setState("grab");
		        moInv.add(3, "tile2");
		        this.gotoAndStop(0);
			},
			() => void moCur.setState('off'),
			() => void moCur.setState('hold')
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.btn130 = new lib.Symbol130();
	this.btn130.name = "btn130";
	this.btn130._off = true;
	new cjs.ButtonHelper(this.btn130, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn130).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-41,42,82);


(lib.Tile1 = function(mode,startPosition,loop,reversed) {
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
		if (exportRoot.flags.tilesGotten[0])
			this.stop();
		else
			this.gotoAndStop(1);
	}
	this.frame_1 = function() {
		MOTAS.setQuadState(
			this.btn127,
			() => void moCur.setBoth(myTranslation.mytxt26, 'grab'),
			() => 
			{
				exportRoot.flags.tilesGotten[0] = true;
				moInv.unselect();
				MOTAS.setText(myTranslation.mytxt27);
				moCur.setState("grab");
				moInv.add(2, "tile1");
				this.gotoAndStop(0);
			},
			() => void moCur.setState('off'),
			() => void moCur.setState('hold')
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.btn127 = new lib.Symbol127();
	this.btn127.name = "btn127";
	this.btn127._off = true;
	new cjs.ButtonHelper(this.btn127, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn127).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-41,42,82);


(lib.Symbol154 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-0.9,-5.7,0.3806,0.3806);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol144();
	this.instance_1.setTransform(-0.9,-5.7,0.3806,0.3806);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.9,-45.5,65.9,91.1);


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

	// Layer 3
	this.instance = new lib.Symbol144();
	this.instance.setTransform(-0.9,-5.7,0.3806,0.3806);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,-44.5,63.9,89.1);


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

	// Layer 3
	this.instance = new lib.Symbol144();
	this.instance.setTransform(-0.9,-5.7,0.3806,0.3806);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,-44.5,63.9,89.1);


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

	// Layer 3
	this.instance = new lib.Symbol144();
	this.instance.setTransform(-0.9,-5.7,0.3806,0.3806);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,-44.5,63.9,89.1);


(lib.Symbol145 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.instance = new lib.Symbol144();
	this.instance.setTransform(-0.9,-5.7,0.3806,0.3806);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,-44.5,63.9,89.1);


(lib.Symbol120 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {one:0,two:19,three:39,four:59};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.pos = 1;
		this.stop();
		
		MOTAS.setQuadState(
			this.btn108,
			() => void moCur.setBoth(myTranslation.mytxt39, 'grab'),
			() => 
			{
				moCur.setState("grab");
				MOTAS.setText(myTranslation.mytxt40);
				this.play();
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_19 = function() {
		this.pos = 2;
		this.stop();
		
		MOTAS.setQuadState(
			this.btn113,
			() => void moCur.setBoth(myTranslation.mytxt39, 'grab'),
			() => 
			{
				moCur.setState("grab");
				MOTAS.setText(myTranslation.mytxt40);
				this.play();
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_39 = function() {
		this.pos = 3;
		this.stop();
		
		MOTAS.setQuadState(
			this.btn116,
			() => void moCur.setBoth(myTranslation.mytxt39, 'grab'),
			() => 
			{
				moCur.setState("grab");
				MOTAS.setText(myTranslation.mytxt40);
				this.play();
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_59 = function() {
		this.pos = 4;
		this.stop();
		
		MOTAS.setQuadState(
			this.btn119,
			() => void moCur.setBoth(myTranslation.mytxt39, 'grab'),
			() => 
			{
				moCur.setState("grab");
				MOTAS.setText(myTranslation.mytxt40);
				this.play();
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(20).call(this.frame_59).wait(21));

	// ActionBtn
	this.btn108 = new lib.Symbol108();
	this.btn108.name = "btn108";
	new cjs.ButtonHelper(this.btn108, 0, 1, 2, false, new lib.Symbol108(), 3);

	this.btn113 = new lib.Symbol113();
	this.btn113.name = "btn113";
	new cjs.ButtonHelper(this.btn113, 0, 1, 2, false, new lib.Symbol113(), 3);

	this.btn116 = new lib.Symbol116();
	this.btn116.name = "btn116";
	new cjs.ButtonHelper(this.btn116, 0, 1, 2, false, new lib.Symbol116(), 3);

	this.btn119 = new lib.Symbol119();
	this.btn119.name = "btn119";
	new cjs.ButtonHelper(this.btn119, 0, 1, 2, false, new lib.Symbol119(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn108}]}).to({state:[]},1).to({state:[{t:this.btn113}]},18).to({state:[]},1).to({state:[{t:this.btn116}]},19).to({state:[]},1).to({state:[{t:this.btn119}]},19).to({state:[]},1).wait(20));

	// Layer_4
	this.instance = new lib.Symbol107();

	this.instance_1 = new lib.Symbol110("synched",0);
	this.instance_1.setTransform(19.75,-0.4,1.2262,0.4894);

	this.instance_2 = new lib.Symbol112();
	this.instance_2.setTransform(0,0,0.75,0.75);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol115();
	this.instance_3.setTransform(0,0,0.75,0.75);
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol118();
	this.instance_4.setTransform(0,0,0.75,0.75);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.75,scaleY:0.6698,x:3.8,y:-1.3},4).to({_off:true},1).wait(70).to({_off:false,scaleY:0.75,x:0,y:0},0).to({scaleX:1,scaleY:1},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({scaleX:1,scaleY:1},4).wait(2).to({scaleX:0.9375,scaleY:0.9375},0).to({scaleX:0.75,scaleY:0.75},3).to({_off:true},1).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).to({scaleX:1,scaleY:1},4).wait(2).to({scaleX:0.9375,scaleY:0.9375},0).to({scaleX:0.75,scaleY:0.75},3).to({_off:true},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55).to({_off:false},0).to({scaleX:1,scaleY:1},4).wait(2).to({scaleX:0.9375,scaleY:0.9375},0).to({scaleX:0.75,scaleY:0.75},3).to({_off:true},1).wait(15));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AMgEEI4/AAIHMoHIRzAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AsfEEIHMoHIRzAAIAAIHg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(80));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.9,-27.5,162.4,55.1);


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		MOTAS.setQuadState(
			this.btn99,
			() => void moCur.setBoth(myTranslation.mytxt8, 'grab'),
			() => 
			{
				MOTAS.playSfx("door_open");
				moCur.setState("grab");
				MOTAS.setText(myTranslation.mytxt25);
				this.play();
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_11 = function() {
		this.stop();
		
		MOTAS.setQuadState(
			this.btn100,
			() => void moCur.setBoth(myTranslation.mytxt8, 'grab'),
			() => 
			{
				moCur.setState("grab");
				MOTAS.setText(myTranslation.mytxt24);
				this.play();
			},
			() => {},
			() => void moCur.setState('hold')
		);
		
		
		MOTAS.setQuadState(
			this.btn102,
			() => void moCur.setBoth(myTranslation.mytxt22, 'move'),
			() => 
			{
				MOTAS.playSfx("door_close");
				MOTAS.setText(myTranslation.mytxt23);
				moCur.setState("off");
				exportRoot.gotoAndStop(exportRoot.state.door1.room);
				this.play();
			},
			() => {},
			() => void moCur.setState('move')
		);
	}
	this.frame_23 = function() {
		MOTAS.playSfx("door_close");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(1));

	// Layer_2
	this.btn102 = new lib.Symbol102();
	this.btn102.name = "btn102";
	this.btn102.setTransform(-12.6,0.15);
	this.btn102._off = true;
	new cjs.ButtonHelper(this.btn102, 0, 1, 2, false, new lib.Symbol102(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn102).wait(11).to({_off:false},0).to({_off:true},1).wait(12));

	// Layer_3
	this.btn99 = new lib.Symbol99();
	this.btn99.name = "btn99";
	this.btn99.setTransform(-0.4,-0.35);
	new cjs.ButtonHelper(this.btn99, 0, 1, 2, false, new lib.Symbol99(), 3);

	this.btn100 = new lib.Symbol100();
	this.btn100.name = "btn100";
	this.btn100.setTransform(17.6,3.75,0.3505,1);
	new cjs.ButtonHelper(this.btn100, 0, 1, 2, false, new lib.Symbol100(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn99}]}).to({state:[]},1).to({state:[{t:this.btn100}]},10).to({state:[]},1).wait(12));

	// Layer_4
	this.instance = new lib.Symbol97();
	this.instance.setTransform(1.65,2.95,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.307,x:20.35},11).wait(2).to({scaleX:0.37,x:18.7},0).to({scaleX:1,x:1.65},10).wait(1));

	// Layer_5
	this.instance_1 = new lib.Symbol97();
	this.instance_1.setTransform(1.65,2.95,1,1,0,0,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:0.3584,x:19},10).wait(2).to({scaleX:0.4226,x:17.25},0).to({scaleX:1,x:1.65},9).wait(2));

	// Layer_6
	this.instance_2 = new lib.Symbol97();
	this.instance_2.setTransform(1.65,2.95,1,1,0,0,180);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({scaleX:0.41,x:17.6},9).wait(2).to({scaleX:0.4755,x:15.8},0).to({scaleX:1,x:1.65},8).wait(3));

	// Layer_7
	this.instance_3 = new lib.Symbol94("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.2,-113.1,64.4,229.39999999999998);


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

	// timeline functions:
	this.frame_0 = function() {
		// Re-check every cycle to see if door is unlocked
		if (exportRoot.flags.goalDoorUnlocked)
			this.stop();
		else
			this.play(1);
	}
	this.frame_1 = function() {
		MOTAS.setQuadState(
			this.btn89,
			() => void moCur.setBoth(myTranslation.mytxt8, 'grab'),
			() =>  void moCur.setBoth(myTranslation.mytxt7, 'grab'),
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_29 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(28).call(this.frame_29).wait(1));

	// Layer_2
	this.btn89 = new lib.Symbol89();
	this.btn89.name = "btn89";
	this.btn89.setTransform(0,0,0.1562,0.3432);
	this.btn89._off = true;
	new cjs.ButtonHelper(this.btn89, 0, 1, 2, false, new lib.Symbol89(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn89).wait(1).to({_off:false},0).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-82.4,100,164.8);


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		MOTAS.setFlavorText(
			this.btn84,
			myTranslation.mytxt13,
			myTranslation.mytxt14
		);
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(1));

	// Layer_2
	this.btn84 = new lib.Symbol84();
	this.btn84.name = "btn84";
	this.btn84.setTransform(0,-13.75);
	new cjs.ButtonHelper(this.btn84, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn84).to({y:-233.75},24).to({y:-13.75},25).wait(1));

	// Layer_3
	this.instance = new lib.Symbol82("single",0);
	this.instance.setTransform(104.55,-30.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.9275,skewY:121.2531,y:-235.6,mode:"synched"},24).to({scaleX:1,skewY:180,y:-30.7},25).wait(1));

	// Layer_4
	this.instance_1 = new lib.Symbol82("single",0);
	this.instance_1.setTransform(-103.6,-30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.9275,skewY:58.7469,y:-235.6,mode:"synched"},24).to({scaleX:1,skewY:0,y:-30.7},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-258.5,242.2,269.5);


(lib.Symbol81 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {chairclose:9};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		if (exportRoot.flags.chairNear)
			this.gotoAndStop("chairclose");
		else
			this.stop();
		
		
		MOTAS.setQuadState(
			this.btn78,
			() => void moCur.setBoth(myTranslation.mytxt3, 'grab'),
			() => 
			{
				let cf = this.currentFrame;
				moCur.setState("grab");
				if (cf === 0)
				{
					if (exportRoot.flags.bridgeUp)
					{
						MOTAS.setText(myTranslation.mytxt4);
						exportRoot.flags.chairNear = true;
						this.play();
					}
					else if(exportRoot.flags.bridgeUp)
					{
						MOTAS.setText(myTranslation.mytxt5);
						exportRoot.flags.chairNear = false;
					}
				}
				else if (cf === 9)
				{
					exportRoot.flags.chair = false;
					MOTAS.setText(myTranslation.mytxt6);
					this.play();
				}
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_9 = function() {
		this.stop();
		// To prevent glitching, this will be handled by the 78 event handler
	}
	this.frame_19 = function() {
		this.gotoAndStop(0);
		// There was some flavortext here, but given that it was in English, 
		//  it was probably missed.
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1));

	// Layer_3
	this.btn78 = new lib.Symbol78();
	this.btn78.name = "btn78";
	this.btn78.setTransform(0,0,0.6693,0.7053);
	new cjs.ButtonHelper(this.btn78, 0, 1, 2);

	this.instance = new lib.Symbol79();
	this.instance.setTransform(27.1,19.55,0.8176,0.8616);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.instance_1 = new lib.Symbol80();
	this.instance_1.setTransform(0,0,0.6693,0.7053);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn78}]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.btn78).to({_off:true,scaleX:0.8176,scaleY:0.8616,x:27.1,y:19.55},9).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:false},9).to({_off:true,scaleX:0.6693,scaleY:0.7053,x:0,y:0},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.9,-47.1,104.4,124.1);


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		MOTAS.setQuadState(
			this.btn33,
			() => void moCur.setBoth(myTranslation.mytxt8, 'grab'),
			() => 
			{
				MOTAS.playSfx("door_open");
				moCur.setState("grab");
				// Probably a bug: missed the 21 in original code
				MOTAS.setText(myTranslation.mytxt21);
				this.play();
			},
			null,
			() => void moCur.setState('hold')
		);
	}
	this.frame_10 = function() {
		this.stop();
		
		MOTAS.setQuadState(
			this.btn34,
			() => void moCur.setBoth(myTranslation.mytxt22, 'move'),
			() => 
			{
				MOTAS.playSfx("door_close");
				MOTAS.setText(myTranslation.mytxt23);
				moCur.setState("off");
				exportRoot.gotoAndStop('roomend');
				this.play();
			},
			() => {},
			() => void moCur.setState('move')
		);
		
		
		MOTAS.setQuadState(
			this.btn36,
			() => void moCur.setBoth(myTranslation.mytxt8, 'grab'),
			() => 
			{
				void moCur.setState("grab");
				MOTAS.setText(myTranslation.mytxt24);
				this.play();
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_20 = function() {
		MOTAS.playSfx('door_close');
		MOTAS.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10).call(this.frame_20).wait(1));

	// Layer_2
	this.btn36 = new lib.Symbol36();
	this.btn36.name = "btn36";
	this.btn36.setTransform(10.15,3.15);
	this.btn36._off = true;
	new cjs.ButtonHelper(this.btn36, 0, 1, 2, false, new lib.Symbol36(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn36).wait(10).to({_off:false},0).to({_off:true},1).wait(10));

	// Layer_3
	this.btn33 = new lib.Symbol33();
	this.btn33.name = "btn33";
	this.btn33.setTransform(-0.15,0.1,0.0911,0.202);
	new cjs.ButtonHelper(this.btn33, 0, 1, 2, false, new lib.Symbol33(), 3);

	this.btn34 = new lib.Symbol34();
	this.btn34.name = "btn34";
	this.btn34.setTransform(-19,0.1,0.0322,0.202);
	new cjs.ButtonHelper(this.btn34, 0, 1, 2, false, new lib.Symbol34(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn33}]}).to({state:[]},1).to({state:[{t:this.btn34}]},9).to({state:[]},1).wait(10));

	// Layer_4
	this.instance = new lib.Symbol30();
	this.instance.setTransform(-14.3,3.3,0.7674,0.7674);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.4478,scaleY:0.93,x:2,y:3},10).wait(2).to({scaleX:0.4833,scaleY:0.9119,x:0.15,y:3.05},0).to({scaleX:0.7674,scaleY:0.7674,x:-14.3,y:3.3},8).wait(1));

	// Layer_5
	this.instance_1 = new lib.Symbol31("synched",0);
	this.instance_1.setTransform(0,4.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.5835,scaleY:1.2118,x:10.35},10).wait(2).to({scaleX:0.6298,scaleY:1.1882,x:9.15},0).to({scaleX:1,scaleY:1,x:0},8).wait(1));

	// Layer_6
	this.instance_2 = new lib.Symbol30();
	this.instance_2.setTransform(-14.3,3.3,0.7674,0.7674);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.4553,skewY:-9.8607,x:2,y:7.25},10).wait(2).to({scaleX:0.4898,skewY:-8.7597,x:0.2,y:7.15},0).to({scaleX:0.7674,skewY:0,x:-14.3,y:3.3},8).wait(1));

	// Layer_7
	this.instance_3 = new lib.Symbol25("synched",0);
	this.instance_3.setTransform(0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.5933,skewY:-9.8601,x:10.35,y:5},10).wait(2).to({scaleX:0.6382,skewY:-8.7594,x:9.2,y:4.95},0).to({scaleX:1,skewY:0,x:0,y:2.5},8).wait(1));

	// Layer_8
	this.instance_4 = new lib.Symbol30();
	this.instance_4.setTransform(-14.3,1.45,0.7674,0.7674,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.4553,skewY:9.8607,x:2,y:-2.5},10).wait(2).to({scaleX:0.4898,skewY:8.7597,x:0.2,y:-2.4},0).to({scaleX:0.7674,skewY:0,x:-14.3,y:1.45},8).wait(1));

	// Layer_9
	this.instance_5 = new lib.Symbol25("synched",0);
	this.instance_5.setTransform(0,2.25,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.5933,skewY:9.8601,x:10.35,y:-0.25},10).wait(2).to({scaleX:0.6382,skewY:8.7594,x:9.2,y:-0.2},0).to({scaleX:1,skewY:0,x:0,y:2.25},8).wait(1));

	// Layer_10
	this.instance_6 = new lib.Symbol30();
	this.instance_6.setTransform(-14.3,3.3,0.7674,0.7674);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.4864,skewY:-8.0261,x:0.25,y:6.75},10).wait(2).to({scaleX:0.5174,skewY:-7.0364,x:-1.35,y:6.55},0).to({scaleX:0.7674,skewY:0,x:-14.3,y:3.3},8).wait(1));

	// Layer_11
	this.instance_7 = new lib.Symbol25("synched",0);
	this.instance_7.setTransform(0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.6338,skewY:-8.0263,x:9.25,y:4.7},10).wait(2).to({scaleX:0.6742,skewY:-7.0366,x:8.2,y:4.55},0).to({scaleX:1,skewY:0,x:0,y:2.5},8).wait(1));

	// Layer_12
	this.instance_8 = new lib.Symbol30();
	this.instance_8.setTransform(-14.3,1.45,0.7674,0.7674,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:0.4864,skewY:8.0261,x:0.25,y:-2},10).wait(2).to({scaleX:0.5174,skewY:7.0364,x:-1.35,y:-1.8},0).to({scaleX:0.7674,skewY:0,x:-14.3,y:1.45},8).wait(1));

	// Layer_13
	this.instance_9 = new lib.Symbol25("synched",0);
	this.instance_9.setTransform(0,2.25,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:0.6338,skewY:8.0263,x:9.25,y:0.05},10).wait(2).to({scaleX:0.6742,skewY:7.0366,x:8.2,y:0.2},0).to({scaleX:1,skewY:0,x:0,y:2.25},8).wait(1));

	// Layer_14
	this.instance_10 = new lib.Symbol30();
	this.instance_10.setTransform(-14.3,3.3,0.7674,0.7674);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:0.5219,skewY:-6.281,x:-1.55,y:6.2},10).wait(2).to({scaleX:0.549,skewY:-5.5233,x:-2.95,y:6},0).to({scaleX:0.7674,skewY:0,x:-14.3,y:3.3},8).wait(1));

	// Layer_15
	this.instance_11 = new lib.Symbol25("synched",0);
	this.instance_11.setTransform(0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:0.68,skewY:-6.2811,x:8.1,y:4.35},10).wait(2).to({scaleX:0.7154,skewY:-5.5228,x:7.25,y:4.2},0).to({scaleX:1,skewY:0,x:0,y:2.5},8).wait(1));

	// Layer_16
	this.instance_12 = new lib.Symbol30();
	this.instance_12.setTransform(-14.3,1.45,0.7674,0.7674,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:0.5219,skewY:6.281,x:-1.55,y:-1.45},10).wait(2).to({scaleX:0.549,skewY:5.5233,x:-2.95,y:-1.25},0).to({scaleX:0.7674,skewY:0,x:-14.3,y:1.45},8).wait(1));

	// Layer_17
	this.instance_13 = new lib.Symbol25("synched",0);
	this.instance_13.setTransform(0,2.25,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleX:0.68,skewY:6.2811,x:8.1,y:0.4},10).wait(2).to({scaleX:0.7154,skewY:5.5228,x:7.25,y:0.55},0).to({scaleX:1,skewY:0,x:0,y:2.25},8).wait(1));

	// Layer_18
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADdmyIAAALIAcgLIgcAAInVgBIAAAMIAAONIgsAAIAAvLIJJAAIAAPLIgsAAIgcgVIAAt4InVAAAD5HmIAAuY");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AD4HmIAAuYIgcAAInTgBIAAAMIAAONIgtAAIAAvLIJJAAIAAPLg");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663333").s().p("ADcG4IAAt4IAcgLIAAOYgAj3nAIAAgMIHTABIAAALg");
	this.shape_2.setTransform(0,2.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("ADdmyIAAALIAcgLIgcAAInVgBIAAAMIAAONIgsAAIAAvLIJJAAIAAPLIgsAAIAAuYADdmnIAAN4IAcAVADdmnInVAA");
	this.shape_3.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape_3}]},11).wait(10));

	// Layer_19
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AkSHmIAAvLIIlAAIAAPLg");
	this.shape_4.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(21));

	// Layer_20
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(0.3,1,1).p("AElALIpJAAIAAgVIJJAAg");
	this.shape_5.setTransform(0.025,48.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AkkALIAAgVIJJAAIAAAVg");
	this.shape_6.setTransform(0.025,48.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-49.8,60.6,104.5);


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
	this.instance = new lib.Symbol6();
	this.instance.setTransform(1.45,-29.45,0.3031,0.3701,0,13.9131,-179.2241);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol15();
	this.instance_1.setTransform(0.55,40.4,1,0.8187);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_3
	this.instance_2 = new lib.Symbol16();
	this.instance_2.setTransform(19.25,-2.55,0.7368,0.4155);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_4
	this.instance_3 = new lib.Symbol16();
	this.instance_3.setTransform(-19.5,-2.55,0.7368,0.4155);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_5
	this.instance_4 = new lib.Symbol11();
	this.instance_4.setTransform(39.15,2.55,0.4213,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer_6
	this.instance_5 = new lib.Symbol11();
	this.instance_5.setTransform(-39.6,2.55,0.4213,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer_7
	this.instance_6 = new lib.Symbol2();
	this.instance_6.setTransform(-0.05,16.2,0.4,0.7238,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Layer_8
	this.instance_7 = new lib.Symbol4();
	this.instance_7.setTransform(-0.1,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-44.7,-57.7,89.30000000000001,115.9), null);


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
	this.instance = new lib.Symbol11();
	this.instance.setTransform(-27.55,7.9,0.9997,0.9997,6.0387);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(-0.85,-25.65,0.3425,0.397,0,-7.2845,171.6692);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_3
	this.instance_2 = new lib.Symbol15();
	this.instance_2.setTransform(21.55,41.15,0.9995,0.8183,8.0434);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_4
	this.instance_3 = new lib.Symbol16();
	this.instance_3.setTransform(6,3.55,0.7368,0.4155);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_5
	this.instance_4 = new lib.Symbol2();
	this.instance_4.setTransform(31.7,15.05,0.452,0.7118,0,-85.1538,-101.6024);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer_6
	this.instance_5 = new lib.Symbol16();
	this.instance_5.setTransform(30.3,0.85,0.5132,0.4109,0,-7.7552,-16.3231);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer_7
	this.instance_6 = new lib.Symbol4();
	this.instance_6.setTransform(2.4,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-45.3,-62,91.1,124.5), null);


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
	this.instance = new lib.Symbol11();
	this.instance.setTransform(-3.75,13.2,0.9995,0.9995,8.3017);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(-6.45,-19.55,0.3747,0.3321,0,-8.7187,154.7542);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_3
	this.instance_2 = new lib.Symbol15();
	this.instance_2.setTransform(19.35,42.8,0.6306,0.8125,0,24.8522,32.6273);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_4
	this.instance_3 = new lib.Symbol16();
	this.instance_3.setTransform(25.85,2,0.3713,0.4155);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_5
	this.instance_4 = new lib.Symbol2();
	this.instance_4.setTransform(36.55,15.85,0.4529,0.7481,0,-85.3892,-102.181);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer_6
	this.instance_5 = new lib.Symbol4();
	this.instance_5.setTransform(-3.75,9.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-50.9,-64,102.19999999999999,128.5), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol11();
	this.instance.setTransform(18.9,3,0.9981,0.9981,5.0227);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(1.45,-15.1,0.3031,0.5154,0,9.9431,-178.9039);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_3
	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(0.05,0.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_4
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(29.35,8.1,0.452,0.7118,0,-85.1538,-101.6024);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_5
	this.instance_4 = new lib.Symbol11();
	this.instance_4.setTransform(-30.55,-3.5,0.9997,0.9997,6.0387);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-43.3,-55,87.9,110.5), null);


(lib.PosterClip = function(mode,startPosition,loop,reversed) {
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
			this.btn145,
			() => void moCur.setBoth(myTranslation.mytxt28, 'grab'),
			() => 
			{
				moCur.setState("grab");
				MOTAS.setText(myTranslation.mytxt29);
				this.play();
			},
			null,
			() => void moCur.setState('hold')
		);
	}
	this.frame_28 = function() {
		MOTAS.setQuadState(
			this.btn147,
			() => void moCur.setBoth('', 'grab'),
			() => void moCur.setState('grab'),
			() => {},
			() => void moCur.setState('hold')
		);
			
		MOTAS.setQuadState(
			this.btn150,
			() => void moCur.setBoth(myTranslation.mytxt32, 'grab'),
			() => 
			{
				moCur.setState("grab");
				MOTAS.setText(myTranslation.mytxt33);
				if (confirm('The survey has long been over. Would you still like to visit the site?'))
					window.open("http://www.playinggamesinteractive.com/", "_blank");
			},
			() => {},
			() => void moCur.setState('hold')
		);
			
		MOTAS.setQuadState(
			this.btn151,
			() => void moCur.setBoth(myTranslation.mytxt28, 'grab'),
			() => 
			{
				moCur.setState("grab");
				MOTAS.setText(myTranslation.mytxt29);
				this.play();
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_36 = function() {
		this.stop();
		
		MOTAS.setQuadState(
			this.btn152,
			() => void moCur.setBoth(myTranslation.mytxt30, 'grab'),
			() => 
			{
				moCur.setState("grab");
				MOTAS.setText(myTranslation.mytxt31);
				this.play();
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_45 = function() {
		MOTAS.setQuadState(
			this.btn153,
			() => void moCur.setBoth(myTranslation.mytxt30, 'grab'),
			() => 
			{
				moCur.setState("grab");
				MOTAS.setText(myTranslation.mytxt35);
				this.play();
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(8).call(this.frame_36).wait(9).call(this.frame_45).wait(30));

	// Layer_2
	this.btn151 = new lib.Symbol151();
	this.btn151.name = "btn151";
	this.btn151.setTransform(-43.05,45.9,3.9947,3.9947,-3.5446);
	this.btn151._off = true;
	new cjs.ButtonHelper(this.btn151, 0, 1, 2);

	this.btn152 = new lib.Symbol152();
	this.btn152.name = "btn152";
	this.btn152.setTransform(-38.85,45.9,3.9947,3.9947,-3.5446);
	this.btn152._off = true;
	new cjs.ButtonHelper(this.btn152, 0, 1, 2);

	this.btn153 = new lib.Symbol153();
	this.btn153.name = "btn153";
	this.btn153.setTransform(-43.05,45.9,3.9947,3.9947,-3.5446);
	this.btn153._off = true;
	new cjs.ButtonHelper(this.btn153, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn151).wait(28).to({_off:false},0).to({_off:true,x:-38.85},8).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.btn152).wait(28).to({_off:false},8).to({_off:true,x:-43.05},9).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.btn153).wait(36).to({_off:false},9).to({scaleX:1.1033,scaleY:1.1033,rotation:-0.0317,x:-1.5,y:1.6},28).to({_off:true},1).wait(1));

	// Layer_3
	this.btn150 = new lib.Symbol150();
	this.btn150.name = "btn150";
	this.btn150.setTransform(-46.85,166.2,0.3394,0.075,-3.7676);
	this.btn150._off = true;
	new cjs.ButtonHelper(this.btn150, 0, 1, 2, false, new lib.Symbol150(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn150).wait(28).to({_off:false},0).to({scaleX:0.3393,rotation:-0.2332,x:208.15,y:133.35},8).to({scaleX:0.3394,rotation:-3.7676,x:-46.85,y:166.2},9).to({_off:true},1).wait(29));

	// Layer_4
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(-46.65,-13.7,1,1,-3.7182);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({rotation:0,x:218.6,y:-16.1},8).to({rotation:-3.7182,x:-46.65,y:-13.7},9).to({_off:true},1).wait(29));

	// Layer_5
	this.btn147 = new lib.Symbol147();
	this.btn147.name = "btn147";
	this.btn147.setTransform(-44.65,42.1,0.3948,0.7196,-3.7678);
	this.btn147._off = true;
	new cjs.ButtonHelper(this.btn147, 0, 1, 2, false, new lib.Symbol147(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn147).wait(28).to({_off:false},0).to({scaleY:0.7194,rotation:-0.2297,x:217.55,y:39.25},8).to({scaleY:0.7196,rotation:-3.7678,x:-44.65,y:42.1},9).to({_off:true},1).wait(29));

	// Layer_6
	this.btn145 = new lib.Symbol145();
	this.btn145.name = "btn145";
	new cjs.ButtonHelper(this.btn145, 0, 1, 2);

	this.instance_1 = new lib.Symbol146("synched",0);
	this.instance_1.setTransform(-44.2,42.6,0.8998,0.8998,-3.7677);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol154();
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Symbol154(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn145}]}).to({state:[{t:this.btn145}]},27).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},9).to({state:[]},1).to({state:[{t:this.instance_2}]},28).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.btn145).to({scaleX:3.8871,scaleY:3.8871,rotation:-3.2924,x:-41.5,y:44.25},27).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({scaleX:0.8996,scaleY:0.8996,rotation:-0.2294,x:217.95,y:39.8},8).to({scaleX:0.8998,scaleY:0.8998,rotation:-3.7677,x:-44.2,y:42.6},9).to({_off:true},1).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.3,-140.3,527.9000000000001,372.9);


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

	// Layer_1
	this.bridge8 = new lib.Symbol85();
	this.bridge8.name = "bridge8";
	this.bridge8.setTransform(0,37.9,1.3466,1.3466);

	this.timeline.addTween(cjs.Tween.get(this.bridge8).wait(1));

	// Layer_2
	this.bridge7 = new lib.Symbol85();
	this.bridge7.name = "bridge7";
	this.bridge7.setTransform(0,20.3,1.1709,1.1709);

	this.timeline.addTween(cjs.Tween.get(this.bridge7).wait(1));

	// Layer_3
	this.bridge6 = new lib.Symbol85();
	this.bridge6.name = "bridge6";
	this.bridge6.setTransform(0,5,1.0182,1.0182);

	this.timeline.addTween(cjs.Tween.get(this.bridge6).wait(1));

	// Layer_4
	this.bridge5 = new lib.Symbol85();
	this.bridge5.name = "bridge5";
	this.bridge5.setTransform(0,-8.3,0.8854,0.8854);

	this.timeline.addTween(cjs.Tween.get(this.bridge5).wait(1));

	// Layer_5
	this.bridge4 = new lib.Symbol85();
	this.bridge4.name = "bridge4";
	this.bridge4.setTransform(0,-19.85,0.7699,0.7699);

	this.timeline.addTween(cjs.Tween.get(this.bridge4).wait(1));

	// Layer_6
	this.bridge3 = new lib.Symbol85();
	this.bridge3.name = "bridge3";
	this.bridge3.setTransform(0,-29.9,0.6695,0.6695);

	this.timeline.addTween(cjs.Tween.get(this.bridge3).wait(1));

	// Layer_7
	this.bridge2 = new lib.Symbol85();
	this.bridge2.name = "bridge2";
	this.bridge2.setTransform(0,-38.65,0.5822,0.5822);

	this.timeline.addTween(cjs.Tween.get(this.bridge2).wait(1));

	// Layer_8
	this.bridge1 = new lib.Symbol85();
	this.bridge1.name = "bridge1";
	this.bridge1.setTransform(0,-46.25,0.5063,0.5063);

	this.timeline.addTween(cjs.Tween.get(this.bridge1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol86, new cjs.Rectangle(-161.7,-65.2,323.7,116.7), null);


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
	this.instance = new lib.Symbol17();
	this.instance.setTransform(36,0,0.3283,0.3283,0,0,180);
	this.instance._off = true;

	this.instance_1 = new lib.Symbol18();
	this.instance_1.setTransform(0,0,0.3283,0.3283,0,0,180);

	this.instance_2 = new lib.Symbol12();
	this.instance_2.setTransform(0,0,0.3742,0.3497,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},4).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:0},4).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({x:36},4).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.8,-21,69.5,43);


(lib.playermodule = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {_0:0,_45:1,_90:2,_135:3,_180:4,_225:5,_270:6,_315:7};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer_3
	this.walk = new cjs.Text("", "28px 'Times New Roman'", "#0066CC");
	this.walk.name = "walk";
	this.walk.lineHeight = 33;
	this.walk.lineWidth = 127;
	this.walk.parent = this;
	this.walk.setTransform(-52,-106);

	this.timeline.addTween(cjs.Tween.get(this.walk).wait(8));

	// Layer_4
	this.playerrotate = new lib.Symbol8();
	this.playerrotate.name = "playerrotate";
	this.playerrotate.setTransform(0,18);

	this.timeline.addTween(cjs.Tween.get(this.playerrotate).wait(8));

	// Layer_5
	this.instance = new lib.Symbol7();

	this.instance_1 = new lib.Symbol12();

	this.instance_2 = new lib.Symbol17();

	this.instance_3 = new lib.Symbol18();

	this.instance_4 = new lib.Symbol19();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{skewY:0}}]},1).to({state:[{t:this.instance_2,p:{skewY:0}}]},1).to({state:[{t:this.instance_3,p:{skewY:0}}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3,p:{skewY:180}}]},1).to({state:[{t:this.instance_2,p:{skewY:180}}]},1).to({state:[{t:this.instance_1,p:{skewY:180}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-108,131,172.5);


(lib.HoleClip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {empty:0,think:1,trap:2,"catch":3,look:4,trapped:5};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		// Only hole 1 can have catch+ state, but this is handled in the button handler
		// this.gotoAndStop(exportRoot.flags.holeState[this.name.slice(-1) | 0]);
		this.stop();
		
		MOTAS.setQuadState(
			this.btn40,
			() => void moCur.setBoth(myTranslation.mytxt17, 'grab'),
			() => 
			{
				moCur.setState("grab");
				if (moInv.activeObject === "diskbox")
				{
					moInv.remove('diskbox');
					MOTAS.setText(myTranslation.mytxt15);
					if (this.name === 'hole1')
					{
						// Hole 1 is special
						this.gotoAndStop(
							exportRoot.flags.ratPuzzle === 1
								? "catch"
								: "trap"
						);
					}
					else
					{
						// Reset other holes in room2
						for (let i = 2; i <= 4; i++)
						{
							if (i !== this.name.slice(-1) | 0)
								this.gotoAndStop('look');
						}
						
						this.gotoAndStop("trap");
					}
				}
				else
					MOTAS.setText(myTranslation.mytxt16);
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_2 = function() {
		MOTAS.setQuadState(
			this.btn46,
			() => void moCur.setBoth(myTranslation.mytxt18, 'grab'),
			() => 
			{
				exportRoot.hole4.gotoAndStop(0);
				exportRoot.hole3.gotoAndStop(0);
				exportRoot.hole2.gotoAndStop(0);
				
				moCur.setState("grab");
				moInv.add(1, 'diskbox');
				this.gotoAndStop(0);
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_3 = function() {
		MOTAS.setQuadState(
			this.btn48,
			() => void moCur.setBoth(myTranslation.mytxt22, 'move'),
			() => 
			{
				exportRoot.flags.ratPuzzle = 2;
				
				moCur.setState("grab");
				moInv.add(1, "headcase");
				this.gotoAndStop(0);
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_4 = function() {
		MOTAS.setQuadState(
			this.btn49,
			() => void moCur.setBoth(myTranslation.mytxt17, 'grab'),
			() => 
			{
				moCur.setState("grab");
				if (moInv.activeObject === "diskbox")
				{
					moInv.remove('diskbox');
					MOTAS.setText(myTranslation.mytxt19);
					if (this.name === 'hole1')
					{
						this.gotoAndStop(
							exportRoot.flags.ratPuzzle === 1
								? "catch" 
								: "trap"
						);
					}
					else
					{
						for (let i = 2; i <= 4; i++)
						{
							if (i !== this.name.slice(-1) | 0)
								this.gotoAndStop('look');
						}
						
						this.gotoAndStop("trap");
					}
				}
				else
					MOTAS.setText(myTranslation.mytxt20);
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(16).call(this.frame_20).wait(1));

	// Layer_3
	this.btn49 = new lib.Symbol49();
	this.btn49.name = "btn49";
	this.btn49.setTransform(-4.75,-14.5,0.6655,0.6655);
	this.btn49._off = true;
	new cjs.ButtonHelper(this.btn49, 0, 1, 2, false, new lib.Symbol49(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn49).wait(4).to({_off:false},0).wait(17));

	// Layer_4
	this.instance = new lib.Symbol44("synched",0);
	this.instance.setTransform(-12.1,-8.55,1,1,0,0,180);
	this.instance.alpha = 0.5;
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0.6484375, 0.6484375, 0.6484375, 1, 0, 16, 48, 0)];
	this.instance.cache(-35,-28,70,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},15).wait(1));

	// Layer_5
	this.instance_1 = new lib.Symbol43("synched",0);
	this.instance_1.setTransform(-12.1,-8.55,1,1,0,0,180);
	this.instance_1.alpha = 0.6992;
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0.6484375, 0.6484375, 0.6484375, 1, 0, 16, 48, 0)];
	this.instance_1.cache(-36,-29,72,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({_off:true},15).wait(1));

	// Case Front (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_2 = new cjs.Graphics().p("Aj7DyIAAnVQBTABA6gLQA6gMBrAjQBrAiANALIABABQAaAVAUAnQAdA9ABA8IgBDlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_2,x:-14.825,y:0.1968}).wait(19));

	// CaseButton
	this.btn46 = new lib.Symbol46();
	this.btn46.name = "btn46";
	this.btn46.setTransform(-4.75,-14.5,0.6655,0.6655);
	new cjs.ButtonHelper(this.btn46, 0, 1, 2, false, new lib.Symbol46(), 3);

	this.btn48 = new lib.Symbol48();
	this.btn48.name = "btn48";
	this.btn48.setTransform(-4.75,-14.5,0.6655,0.6655);
	new cjs.ButtonHelper(this.btn48, 0, 1, 2, false, new lib.Symbol48(), 3);

	var maskedShapeInstanceList = [this.btn46,this.btn48];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn46}]},2).to({state:[{t:this.btn48}]},1).to({state:[]},1).wait(17));

	// Glass
	this.instance_2 = new lib.Symbol44("synched",0);
	this.instance_2.setTransform(-0.4,-12.5,0.8645,1.5987,0,24.6541,179.6207);
	this.instance_2.alpha = 0.5;
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.ColorFilter(0.6484375, 0.6484375, 0.6484375, 1, 0, 16, 48, 0)];
	this.instance_2.cache(-35,-28,70,56);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},2).wait(17));

	// Outline
	this.instance_3 = new lib.Symbol43("synched",0);
	this.instance_3.setTransform(-0.4,-12.5,0.8645,1.5987,0,24.6541,179.6207);
	this.instance_3.alpha = 0.6992;
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.ColorFilter(0.6484375, 0.6484375, 0.6484375, 1, 0, 16, 48, 0)];
	this.instance_3.cache(-36,-29,72,58);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({_off:true},2).wait(17));

	// Case Back
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1.8,1,1).p("AAyDgICRmrIAGgQAAFjaIAGgLIhkAAIhvE7IAaB7IAjAVIAggBIAZgBICCgEIgugiIg3h2IBnkqAAFjaIARgLIgLAAAAxjjIABABIATAAIgUgBIgbgCAAyDgIgCAAIACAAgAhrDkIAZAAAiuDRIAkAUIAfgBAiLDmIABgBICPm/AhrDlIAAgBABFjiIB+AG");
	this.shape.setTransform(-17.475,-10.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AALDjIACAAIAAAAgAgZjiIALAAIgRALgAANjfIgBgBIAUABg");
	this.shape_1.setTransform(-13.775,-10.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AhPDRIgah7IBuk7IBlAAIgGALIiPG/IgkgUIAkAUIgBABgAgMDkIAYAAIgYABg");
	this.shape_2.setTransform(-26.975,-10.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AimDlICQm/IARgLIAbACIABABIATAAIB+AGIAAAQIiRGsIgDAAIgtgiIg4h2IBokqIhoEqIA4B2IAtAiIiCADIgZABIgfABIAfgBIAAAAIgfACg");
	this.shape_3.setTransform(-14.7,-10.4);

	this.instance_4 = new lib.Symbol50("synched",0);
	this.instance_4.setTransform(-11.05,3.45,1,1,0,0,180);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},2).to({state:[{t:this.instance_4}]},1).to({state:[]},15).wait(1));

	// Layer_13
	this.btn40 = new lib.Hole();
	this.btn40.name = "btn40";
	new cjs.ButtonHelper(this.btn40, 0, 1, 2);

	var maskedShapeInstanceList = [this.btn40];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.btn40).wait(21));

	// RatBoy
	this.instance_5 = new lib.Symbol47();
	this.instance_5.setTransform(-8.35,0);

	this.instance_6 = new lib.Symbol17();
	this.instance_6.setTransform(-19.8,-1.8,0.299,0.299,-45);

	this.instance_7 = new lib.Symbol18();
	this.instance_7.setTransform(-19.8,-1.8,0.299,0.299,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_6}]},3).to({state:[]},3).wait(1));

	// Layer_10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Aj7DyIAAnVQBTABA6gLQA6gMBrAjQBrAiANALIABABQAaAVAUAnQAdA9ABA8IgBDlg");
	var mask_1_graphics_5 = new cjs.Graphics().p("ACGDSImQmUICrgLQA7gMBqAjQBrAiANALIABABQAaAVAUAnQAeA9AAA8IgBASIAACTg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-14.825,y:0.1968}).wait(5).to({graphics:mask_1_graphics_5,x:-16.35,y:-3.0032}).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,-51.6,78.5,82.1);


(lib.FloorRat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {ratstart:63,snifstart:183,newroute:194};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_14 = function() {
		// For reference: untransformed tiles are as follows:
		// _| - 1
		// 7  - 2
		// |` - 3
		// L  - 4
		
		// Floors 1-8
		if (exportRoot.props.floorSln.every(
			(tileState, i) => exportRoot['floor' + (i + 1)].pos === tileState
		))
		{
			this.gotoAndPlay('newroute');
		}
		else if (exportRoot.floor4.pos === 2 && exportRoot.floor8.pos === 1)
			this.play();
		else
			this.gotoAndPlay(0);
	}
	this.frame_63 = function() {
		if (exportRoot.props.floorSln.every(
			(tileState, i) => exportRoot['floor' + (i + 1)].pos === tileState
		))
		{
			this.gotoAndPlay('newroute');
		}
		else if (exportRoot.floor4.pos === 2 && exportRoot.floor8.pos === 1)
			this.play();
		else
			this.gotoAndPlay(0);
	}
	this.frame_192 = function() {
		if (exportRoot.props.floorSln.every(
			(tileState, i) => exportRoot['floor' + (i + 1)].pos === tileState
		))
		{
			this.gotoAndPlay('newroute');
		}
		else if (exportRoot.floor4.pos === 2 && exportRoot.floor8.pos === 1)
			this.play();
		else
			this.gotoAndPlay(0);
	}
	this.frame_193 = function() {
		if (exportRoot.floor4.pos === 2 && 
			exportRoot.floor8.pos === 1
		)
			this.gotoAndPlay(0);
		else
			this.gotoAndPlay("snifstart");
	}
	this.frame_194 = function() {
		exportRoot.flags.ratPuzzle = 1;
	}
	this.frame_243 = function() {
		MOTAS.setText(myTranslation.mytxt41);
	}
	this.frame_383 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(49).call(this.frame_63).wait(129).call(this.frame_192).wait(1).call(this.frame_193).wait(1).call(this.frame_194).wait(49).call(this.frame_243).wait(140).call(this.frame_383).wait(58));

	// Layer_3
	this.player = new lib.playermodule();
	this.player.name = "player";
	this.player.setTransform(17.1,5.45,0.2198,0.2198);
	this.player.alpha = 0;
	this.player._off = true;

	this.timeline.addTween(cjs.Tween.get(this.player).wait(14).to({_off:false},0).to({x:-2.5,alpha:1},4).to({x:-55.35},10).to({scaleX:0.3187,scaleY:0.3186,x:8.9,y:48},20).to({x:80.1},9).to({x:107.6,alpha:0},6).wait(131).to({scaleX:0.2198,scaleY:0.2198,x:17.1,y:5.45},0).wait(15).to({x:13.2,alpha:0.1992},0).to({x:-2.5,alpha:1},4).to({x:-55},10).to({scaleX:0.3187,scaleY:0.3186,x:8.35,y:48.25},20).to({x:-137.15},20).to({scaleX:0.2198,scaleY:0.2198,x:-158.15,y:5.75},20).to({x:-257.4},19).to({scaleX:0.3187,scaleY:0.3186,x:-283.15,y:47.75},21).to({x:-429.65},20).to({scaleX:0.2198,scaleY:0.2198,x:-366.65,y:5.25},20).to({x:-442.2},20).wait(58));

	// Layer_4
	this.instance = new lib.Symbol124();
	this.instance.setTransform(-207.8,70.9);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol124(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(194).to({_off:false},0).wait(247));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-633.1,-18.5,850.6,159.9);


(lib.Symbol93 = function(mode,startPosition,loop,reversed) {
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
		if (exportRoot.flags.bridgeUp)
		{
			for (let i = 1; i <= 8; i++)
				this.bridgemovie['bridge' + i].gotoAndStop(24);
			this.gotoAndStop(24);
		}
		else
			this.stop();
		
		
		MOTAS.setQuadState(
			this.btn88,
			() => void moCur.setBoth(myTranslation.mytxt10, 'move'),
			() => 
			{
				moCur.setState("grab");
				MOTAS.setText(myTranslation.mytxt9);
				exportRoot.flags.bridgeUp = true;
				for (let i = 1; i <= 8; i++)
					this.bridgemovie['bridge' + i].play();
				this.play();
			},
			() => {},
			() => void moCur.setState('hold')
		);
		
		addFreezeClips(this.door2);
	}
	this.frame_1 = function() {
		MOTAS.setQuadState(
			this.btn91,
			() => void moCur.setBoth(myTranslation.mytxt8, 'grab'),
			() => 
			{
				moCur.setState('grab');
				// ??? objTranslation.my3_1 ??? What is that
				MOTAS.setText(generalText.locked);
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}
	this.frame_24 = function() {
		this.stop();
		
		MOTAS.setQuadState(
			this.btn92,
			() => void moCur.setBoth(myTranslation.mytxt10, 'grab'),
			() => 
			{
				moCur.setState("grab");
				if (exportRoot.flags.chairNear)
				{
					MOTAS.setText(myTranslation.mytxt11);
					exportRoot.flags.bridgeUp = false;
					exportRoot.flags.chairNear = false;
					if (exportRoot.flags.sliderState[0])
						exportRoot.slider1.gotoAndStop(1);
					if (exportRoot.flags.sliderState[1])
						exportRoot.slider2.gotoAndStop(1);
					if (exportRoot.flags.sliderState[2])
						exportRoot.slider3.gotoAndStop(1);
					exportRoot.chairslide.play();
					for (let i = 1; i <= 8; i++)
						this.bridgemovie['bridge' + i].play();
					this.play();
				}
				else
					MOTAS.setText(myTranslation.mytxt12);
		
			},
			() => {},
			() => void moCur.setState('hold')
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(26));

	// Layer_2
	this.instance = new lib.Symbol90();
	this.instance.setTransform(0.05,-132.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(49));

	// Layer_3
	this.door2 = new lib.Symbol38();
	this.door2.name = "door2";
	this.door2.setTransform(-0.05,-132.75,1.6501,1.6501);

	this.timeline.addTween(cjs.Tween.get(this.door2).to({_off:true},1).wait(49));

	// Layer_4
	this.btn88 = new lib.Symbol88();
	this.btn88.name = "btn88";
	this.btn88.setTransform(150,0);
	new cjs.ButtonHelper(this.btn88, 0, 1, 2, false, new lib.Symbol88(), 3);

	this.btn92 = new lib.Symbol92();
	this.btn92.name = "btn92";
	this.btn92.setTransform(-150,-192);
	new cjs.ButtonHelper(this.btn92, 0, 1, 2, false, new lib.Symbol92(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn88}]}).to({state:[]},1).to({state:[{t:this.btn92}]},23).to({state:[]},1).wait(25));

	// Layer_5
	this.bridgemovie = new lib.Symbol86();
	this.bridgemovie.name = "bridgemovie";

	this.timeline.addTween(cjs.Tween.get(this.bridgemovie).to({y:104},24).to({y:0},25).wait(1));

	// Layer_6
	this.btn91 = new lib.Symbol91();
	this.btn91.name = "btn91";
	this.btn91.setTransform(0.05,-132.45,0.1562,0.3432);
	this.btn91._off = true;
	new cjs.ButtonHelper(this.btn91, 0, 1, 2, false, new lib.Symbol91(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn91).wait(1).to({_off:false},0).wait(49));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.5,-214.8,331.1,370.3);


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_189 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(189).call(this.frame_189).wait(1));

	// Layer_2
	this.player = new lib.playermodule();
	this.player.name = "player";
	this.player.setTransform(1,2.5,0.135,0.135);
	this.player._off = true;

	this.timeline.addTween(cjs.Tween.get(this.player).wait(1).to({_off:false},0).to({x:5.15,y:3.15},3).wait(1).to({x:1.4,y:2.85},0).to({x:-24.75,y:3.15},7).wait(1).to({x:-24.95,y:3.65},0).to({x:-20.35,y:10},4).wait(1).to({x:-24.15,y:9.6},0).to({x:-32.85,y:10},3).to({x:-41.65,y:-7.65},6).to({x:-68.3},6).wait(1).to({x:-68.05,y:-4.9},0).to({x:-65.6,y:11.9},6).to({x:-78.15},5).to({y:-2.1},6).to({x:-88.9},3).to({x:-89.75,y:4.15},4).to({x:-120.65},7).to({x:-117.85,y:-1.2},4).to({x:-128.5},4).to({x:-140.8,y:18.05},9).to({x:-154.35},4).to({x:-143.7,y:4.15},5).to({x:-162.65},5).wait(2).to({x:-158.85,y:3.75},0).to({x:-143.7,y:4.15},4).to({x:-154.35,y:18.05},5).to({x:-140.8},4).to({x:-128.5,y:-1.2},9).to({x:-117.85},4).to({x:-120.65,y:4.15},4).to({x:-89.75},7).to({x:-88.9,y:-2.1},4).to({x:-78.15},3).to({x:-78.1,y:9.15},5).to({x:-65.6,y:11.9},6).to({x:-68.3,y:-7.65},7).to({x:-41.65},6).to({x:-32.85,y:10},6).to({x:-20.35},4).to({x:-24.95,y:3.65},4).to({x:5.15,y:3.15},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.9,-22.2,185.5,49.099999999999994);


// stage content:
(lib.mystery3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {room1:1,room2:2,roomend:3};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3];
	// timeline functions:
	this.frame_0 = function() {
		runPreloadCheck(this);
	}
	this.frame_1 = function() {
		// Dev notes: there is a hidden door2 to mask as the bridge goes up. It's just there for a background
		
		if (this.props === undefined)
		{
			this.props = 
			{
				// These are references to frame labels
				floor1 : "two",
				floor2 : "three",
				floor3 : "three",
				floor4 : "two",
				floor5 : "one",
				floor6 : "four",
				floor7 : "four",
				floor8 : "one",
				floor9 : "two",
				floor10 : "three",
				floor11 : "three",
				floor12 : "two",
				
				floorSln : 
				[
					2, 3, 3, 2,
					4, 1, 1, 4
				]
			};
		
			/*
			Play mystery3.mid
			*/
			// These replace the original state variables used in the fla.
			this.flags = 
			{
				goalDoorUnlocked : false,
				bridgeUp : false,
				chairNear : false,
				tilesGotten : [false, false, false],
				sliderState : [0, 0, 0],
				holeState : '',
				// 1 - floor solved, 2 - rat trap
				ratPuzzle : 0
			};
			
			this.state = 
			{
				door2 : {},
				door1 : {}
			};
		
			// Make sure we have the diskbox
			moInv.clear();
			moInv.add(1, 'diskbox');
		}
		
		this.stop();
		// This sets the destination
		this.state.door1.room = 'room2';
				
		MOTAS.setQuadState(
			this.btn70,
			() => void moCur.setBoth(myTranslation.mytxt45, 'grab'),
			() => 
			{
				moCur.setState("grab");
				if (moInv.activeObject === "headcase")
				{
					if (this.flags.sliderState.every(s => s === 2))
					{
						moInv.remove('headcase');
						this.flags.goalDoorUnlocked = true;
						MOTAS.setText(myTranslation.mytxt42);
						this.endloop.gotoAndPlay(1);
					}
					else
						MOTAS.setText(myTranslation.mytxt43);
				}
				else
					MOTAS.setText(myTranslation.mytxt44);
		
			},
			() => {},
			() => void moCur.setState('hold')
		);
		
		MOTAS.setFlavorText(
			this.btn76,
			myTranslation.mytxt1,
			myTranslation.mytxt2
		);
			
		addFreezeClips(
			this.chairslide,
			this.bridge,
			this.door2,
			this.endloop,
			this.hole1,
			this.slider1, this.slider2, this.slider3
		);
	}
	this.frame_2 = function() {
		this.state.door1.room = 'room1';
		this.stop();
		for (let i = 1; i <= 12; i++)
			this['floor' + i].gotoAndStop(this.props['floor' + i]);
		
		addFreezeClips(
			this.poster,
			this.lightswitch,
			this.door1,
			this.hole2,	this.hole3, this.hole4,
			this.lTile, this.mTile, this.rTile
		);
	}
	this.frame_3 = function() {
		MOTAS.winLevel();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Script_Layer
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(275.5,327.6,0.5,0.5);

	this.instance_1 = new lib.Preloader("synched",0);
	this.instance_1.setTransform(333,228.35,1,1,0,0,0,11.5,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(3));

	// Door1
	this.door1 = new lib.Symbol103();
	this.door1.name = "door1";
	this.door1.setTransform(578.95,278.6,1.132,1.132,0,0,180);
	this.door1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.door1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Bridge
	this.bridge = new lib.Symbol93();
	this.bridge.name = "bridge";
	this.bridge.setTransform(320,337);
	this.bridge._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bridge).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Chair
	this.chairslide = new lib.Symbol81();
	this.chairslide.name = "chairslide";
	this.chairslide.setTransform(126.1,328.35);
	this.chairslide._off = true;

	this.timeline.addTween(cjs.Tween.get(this.chairslide).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Plant
	this.btn76 = new lib.Symbol76();
	this.btn76.name = "btn76";
	this.btn76.setTransform(157.8,299.9);
	this.btn76._off = true;
	new cjs.ButtonHelper(this.btn76, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn76).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Cover
	this.btn70 = new lib.Symbol70();
	this.btn70.name = "btn70";
	this.btn70.setTransform(320,319.15);
	this.btn70._off = true;
	new cjs.ButtonHelper(this.btn70, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn70).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// RatTrack
	this.endloop = new lib.Symbol68();
	this.endloop.name = "endloop";
	this.endloop.setTransform(397.3,318.15);
	this.endloop._off = true;

	this.timeline.addTween(cjs.Tween.get(this.endloop).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// SliderMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AMhOIImQyvIAAhkIi5n8IFEAAIZscPgAqMOIIHs8PIFDAAICKH8IAAABIFiUSgEgiHAOIIZv8OIAAgBIFDAAIAAABIi5H7IAABkImRSvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:319.9,y:389.625}).wait(3));

	// RSlider
	this.slider3 = new lib.SliderRight();
	this.slider3.name = "slider3";
	this.slider3.setTransform(380.75,329.6);
	this.slider3._off = true;

	var maskedShapeInstanceList = [this.slider3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.slider3).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// CSlider
	this.slider2 = new lib.Slidermiddle();
	this.slider2.name = "slider2";
	this.slider2.setTransform(320,329.6);
	this.slider2._off = true;

	var maskedShapeInstanceList = [this.slider2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.slider2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// LSlider
	this.slider1 = new lib.SliderLeft();
	this.slider1.name = "slider1";
	this.slider1.setTransform(259.25,329.65);
	this.slider1._off = true;

	var maskedShapeInstanceList = [this.slider1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.slider1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// EntryHole
	this.instance_2 = new lib.Symbol54("synched",0);
	this.instance_2.setTransform(404.05,328.1,0.9226,0.9226);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// SliderBG
	this.instance_3 = new lib.Symbol53("single",0);
	this.instance_3.setTransform(320,332.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Hole1
	this.hole1 = new lib.HoleClip();
	this.hole1.name = "hole1";
	this.hole1.setTransform(528.45,344.4,0.7168,0.7168);
	this.hole1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hole1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Door2
	this.door2 = new lib.Symbol38();
	this.door2.name = "door2";
	this.door2.setTransform(320,204.25,1.6501,1.6501);
	this.door2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.door2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Poster
	this.poster = new lib.PosterClip();
	this.poster.name = "poster";
	this.poster.setTransform(245.55,197.05);
	this.poster._off = true;

	this.timeline.addTween(cjs.Tween.get(this.poster).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Light Switch
	this.lightswitch = new lib.Lights();
	this.lightswitch.name = "lightswitch";
	this.lightswitch.setTransform(109.85,228.15);
	this.lightswitch._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lightswitch).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// R
	this.rTile = new lib.Tile3();
	this.rTile.name = "rTile";
	this.rTile.setTransform(460,160);
	this.rTile._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rTile).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// C
	this.mTile = new lib.Tile2();
	this.mTile.name = "mTile";
	this.mTile.setTransform(320,160);
	this.mTile._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mTile).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// L
	this.lTile = new lib.Tile1();
	this.lTile.name = "lTile";
	this.lTile.setTransform(170,160);
	this.lTile._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lTile).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Door
	this.door1_1 = new lib.Symbol103();
	this.door1_1.name = "door1_1";
	this.door1_1.setTransform(61,278.6,1.132,1.132);
	this.door1_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.door1_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_2 = new cjs.Graphics().p("Egx/AMvIAApYIQSpJIAAiWIAAgNQAAgsAWgsQANgcASgPIACgBQAJgHALgEQAKgEAKgBIEAiFMA4WAAAIEHCIIAVAFQAKAEAKAIIABABQASAPAOAcQAVArABAsIgBANIAACSIBcA0IhzAAIBzAAIJsAAIAJAAQAPABAQAGQAPAGANAKIACABQAaAVATAoQAeA8AAA9IgBASIAADNIC6BpIAAJYgEAhugFzIiShSgEAjKgE/g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_1_graphics_2,x:320,y:398.525}).wait(2));

	// Ratboy
	this.ratmove = new lib.FloorRat();
	this.ratmove.name = "ratmove";
	this.ratmove.setTransform(529.55,338.6);
	this.ratmove._off = true;

	var maskedShapeInstanceList = [this.ratmove];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.ratmove).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// BackTiles
	this.instance_4 = new lib.WallLines();
	this.instance_4.setTransform(320,221.15,1,1,0,0,0,180,108.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Hole 4
	this.hole4 = new lib.HoleClip();
	this.hole4.name = "hole4";
	this.hole4.setTransform(611.15,385.7);
	this.hole4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hole4).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Hole 2
	this.hole2 = new lib.HoleClip();
	this.hole2.name = "hole2";
	this.hole2.setTransform(109.85,344.4,0.7168,0.7168,0,0,180);
	this.hole2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hole2).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Hole 3
	this.hole3 = new lib.HoleClip();
	this.hole3.name = "hole3";
	this.hole3.setTransform(528.45,344.4,0.7168,0.7168);
	this.hole3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hole3).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_27
	this.floor11 = new lib.Symbol120();
	this.floor11.name = "floor11";
	this.floor11.setTransform(443.2,478.55,1.5404,1.5404,0,0,180);
	this.floor11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.floor11).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_28
	this.floor12 = new lib.Symbol120();
	this.floor12.name = "floor12";
	this.floor12.setTransform(653.1,478.8,1.5427,2.0573,0,-41.4191,180);
	this.floor12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.floor12).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_29
	this.floor10 = new lib.Symbol120();
	this.floor10.name = "floor10";
	this.floor10.setTransform(196.8,478.55,1.5404,1.5404);
	this.floor10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.floor10).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_31
	this.floor9 = new lib.Symbol120();
	this.floor9.name = "floor9";
	this.floor9.setTransform(-14.8,478.8,1.5427,2.0573,0,41.4191,0);
	this.floor9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.floor9).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_32
	this.floor6 = new lib.Symbol120();
	this.floor6.name = "floor6";
	this.floor6.setTransform(232.3,409.75,1.0962,1.0962);
	this.floor6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.floor6).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_33
	this.floor5 = new lib.Symbol120();
	this.floor5.name = "floor5";
	this.floor5.setTransform(81.5,409.85,1.0978,1.4639,0,41.4183,0);
	this.floor5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.floor5).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_34
	this.floor7 = new lib.Symbol120();
	this.floor7.name = "floor7";
	this.floor7.setTransform(407.7,409.75,1.0962,1.0962,0,0,180);
	this.floor7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.floor7).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_35
	this.floor8 = new lib.Symbol120();
	this.floor8.name = "floor8";
	this.floor8.setTransform(556.8,409.85,1.0978,1.4639,0,-41.4183,180);
	this.floor8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.floor8).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_36
	this.floor3 = new lib.Symbol120();
	this.floor3.name = "floor3";
	this.floor3.setTransform(382.25,360.6,0.7789,0.7789,0,0,180);
	this.floor3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.floor3).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_37
	this.floor4 = new lib.Symbol120();
	this.floor4.name = "floor4";
	this.floor4.setTransform(487.75,360.45,0.7789,1.0386,0,-41.4187,180);
	this.floor4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.floor4).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_38
	this.floor2 = new lib.Symbol120();
	this.floor2.name = "floor2";
	this.floor2.setTransform(257.75,360.6,0.7789,0.7789);
	this.floor2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.floor2).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1
	this.floor1 = new lib.Symbol120();
	this.floor1.name = "floor1";
	this.floor1.setTransform(150.55,360.45,0.7789,1.0386,0,41.4187,0);
	this.floor1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.floor1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Sidewalls
	this.instance_5 = new lib.Room1("synched",0);

	this.instance_6 = new lib.Symbol104("single",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,813.4,519.8);
// library properties:
lib.properties = {
	id: '20546FD687851749B53CC54F616577AA',
	width: 640,
	height: 480,
	fps: 12,
	color: "#006633",
	opacity: 1.00,
	manifest: [
		{src:"images/mystery3_atlas_1.png", id:"mystery3_atlas_1"}
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
an.compositions['20546FD687851749B53CC54F616577AA'] = {
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