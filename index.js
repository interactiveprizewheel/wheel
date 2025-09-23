(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.BG_wide = function() {
	this.initialize(img.BG_wide);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,901,241);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,901,241);


(lib.btn3 = function() {
	this.initialize(img.btn3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,901,241);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,352,353);


(lib.Pointer = function() {
	this.initialize(img.Pointer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,156);


(lib.Stand = function() {
	this.initialize(img.Stand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,438,1772);


(lib.Wheel = function() {
	this.initialize(img.Wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1390,1391);// helper functions:

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

	// Layer_1
	this.instance = new lib.Wheel();
	this.instance.setTransform(-695,-695.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wheel, new cjs.Rectangle(-695,-695.5,1390,1391), null);


(lib.spin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Buttons
	this.instance = new lib.btn2();
	this.instance.setTransform(-336,-116);

	this.instance_1 = new lib.btn1();
	this.instance_1.setTransform(-336,-116);

	this.instance_2 = new lib.btn3();
	this.instance_2.setTransform(-336,-116);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#56B8E0").s().p("ACJE+IkCllIAEFlIisAAIAAp7ICZAAIECFnIgElnICsAAIAAJ7g");
	this.shape.setTransform(353.825,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#56B8E0").s().p("AhWE+IAAp7ICtAAIAAJ7g");
	this.shape_1.setTransform(303.25,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#56B8E0").s().p("AkXE+IAAp7IEzAAQB3AABCA+QBBA8ACBtQgCBthBA8QhCA+h3AAIiGAAIAACtgAhsgCICBAAQApgBAWgWQAXgWABglQgBgmgXgWQgWgWgpgBIiBAAg");
	this.shape_2.setTransform(258.7,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#56B8E0").s().p("AiWE3QhJgYg0grIBZh8QAqAhAvAPQAuAPA0AAQAyAAAcgPQAbgPABgcQAAgagagPQgcgOg5gFQiCgMg+gvQg9gvAAhXQAAg+AigvQAhgtA8gaQA9gaBQAAQBGAAA+ASQA/ATAwAhIhPB5QgigXgngMQgngMgqAAQgzAAgeAOQgdAOAAAbQgBAZAZANQAaAOA7AFQB9AOBCA0QBBAzAABYQAAA/giAuQgjAvg+AZQg8AbhTAAQhQAAhIgYg");
	this.shape_3.setTransform(194.35,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#56B8E0").s().p("Ai5EmQhPgqgrhKQgrhMAAhmQAAhmArhLQArhLBPgpQBPgpBqAAQBrAABPApQBOApAsBLQArBLAABmQAABmgrBMQgsBKhOAqQhPAphrAAQhqAAhPgpgAiBiFQgwAxgBBUQABBVAwAwQAvAxBSABQBSgBAwgxQAvgwABhVQgBhUgvgxQgwgwhSgBQhSABgvAwg");
	this.shape_4.setTransform(105.625,17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#56B8E0").s().p("AhVE+IAAnoIi8AAIAAiTIIjAAIAACTIi8AAIAAHog");
	this.shape_5.setTransform(38.825,17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#56B8E0").s().p("ABHE+IjCjmIAADmIiqAAIAAp7ICqAAIAADoIC5joIDRAAIkBE7IEYFAg");
	this.shape_6.setTransform(-38.55,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#56B8E0").s().p("AiIEkQhOgqgqhLQgqhLgBhkQABhlAshMQArhKBNgpQBNgpBlAAQBJAAA9AZQA9AZAyAxIhoBsQgegcgigOQghgNgoAAQgzAAgnAXQgoAWgWApQgWApAAA2QAAA3AWApQAWApAoAWQAnAXAzAAQAtAAAngQQAogPAegfIBiBxQg1Azg/AZQg/AZhJAAQhrgBhNgpg");
	this.shape_7.setTransform(-105.65,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#56B8E0").s().p("AhVE+IAAp7ICsAAIAAJ7g");
	this.shape_8.setTransform(-153.65,17.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#56B8E0").s().p("AjxE+IAAp7ICtAAIAAHiIE2AAIAACZg");
	this.shape_9.setTransform(-194.5,17.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#56B8E0").s().p("AiIEkQhOgqgqhLQgqhLgBhkQABhlAshMQArhKBNgpQBNgpBlAAQBJAAA9AZQA9AZAyAxIhoBsQgegcgigOQghgNgoAAQgzAAgnAXQgoAWgWApQgWApAAA2QAAA3AWApQAWApAoAWQAnAXAzAAQAtAAAngQQAogPAegfIBiBxQg1Azg/AZQg/AZhJAAQhrgBhNgpg");
	this.shape_10.setTransform(-256.4,17.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#56B8E0").s().p("ACPFMIkNl1IADF1IizAAIAAqYICgAAIENF3IgDl3ICzAAIAAKYg");
	this.shape_11.setTransform(369.3,20.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#56B8E0").s().p("AhZFMIAAqYICzAAIAAKYg");
	this.shape_12.setTransform(316.45,20.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#56B8E0").s().p("AkjFMIAAqYIFBAAQB7ABBFBBQBFA/ABBxQgBByhFA/QhFBAh7ABIiNAAIAAC0gAhxgDICHAAQArAAAYgXQAYgXgBgnQABgogYgXQgYgXgrAAIiHAAg");
	this.shape_13.setTransform(269.95,20.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#56B8E0").s().p("AidFFQhMgZg2gtIBdiBQAsAhAwAQQAxAQA3AAQAzAAAdgQQAdgQABgcQAAgbgcgQQgcgPg8gFQiIgNhBgxQhAgwABhcQAAhBAjgwQAjgwA/gbQA/gaBUgBQBIABBBASQBCATAzAkIhTB+QgkgYgogNQgpgMgsAAQg2AAgfAPQgeAPAAAbQgBAaAaAPQAbANA+AHQCDANBEA3QBEA1AABcQAABBgkAxQgkAxhAAbQhAAahVABQhUgBhMgYg");
	this.shape_14.setTransform(202.775,20.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#56B8E0").s().p("AjBEzQhSgrgthOQgthPgBhrQABhqAthOQAthOBSgrQBSgrBvgBQBwABBSArQBSArAtBOQAtBOABBqQgBBrgtBPQgtBOhSArQhSAqhwABQhvgBhSgqgAiHiKQgxAzgBBXQABBYAxAzQAyAzBVABQBWgBAygzQAxgzABhYQgBhXgxgzQgygzhWgBQhVABgyAzg");
	this.shape_15.setTransform(110.175,20.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#56B8E0").s().p("AhZFMIAAn9IjEAAIAAibII7AAIAACbIjEAAIAAH9g");
	this.shape_16.setTransform(40.45,20.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#56B8E0").s().p("ABLFMIjLjwIAADwIiyAAIAAqYICyAAIAADzIDBjzIDaAAIkNFJIElFPg");
	this.shape_17.setTransform(-40.325,20.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#56B8E0").s().p("AiOExQhRgsgshOQgthOAAhpQABhqAuhOQAthOBQgrQBRgqBpgBQBMAABAAbQA/AaA1A0IhtBvQgfgdgjgOQgjgOgqAAQg2AAgpAYQgpAXgWArQgXArAAA4QAAA6AXAqQAWArApAXQApAYA2AAQAvAAApgQQAqgRAggfIBlB2Qg3A1hCAaQhCAahMAAQhvgBhRgrg");
	this.shape_18.setTransform(-110.35,20.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#56B8E0").s().p("AhZFMIAAqYICzAAIAAKYg");
	this.shape_19.setTransform(-160.5,20.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#56B8E0").s().p("Aj8FMIAAqYIC0AAIAAH4IFEAAIAACgg");
	this.shape_20.setTransform(-203.15,20.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#56B8E0").s().p("AiOExQhSgsgrhOQgthOAAhpQABhqAuhOQAthOBQgrQBRgqBpgBQBMAABAAbQA/AaA0A0IhsBvQgfgdgjgOQgkgOgpAAQg2AAgpAYQgpAXgWArQgXArAAA4QAAA6AXAqQAWArApAXQApAYA2AAQAuAAAqgQQAqgRAfgfIBmB2Qg3A1hCAaQhCAahMAAQhwgBhQgrg");
	this.shape_21.setTransform(-267.75,20.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#043464").s().p("ACJE+IkCllIAEFlIisAAIAAp7ICZAAIECFnIgElnICsAAIAAJ7g");
	this.shape_22.setTransform(353.825,17.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#043464").s().p("AhWE+IAAp7ICtAAIAAJ7g");
	this.shape_23.setTransform(303.25,17.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#043464").s().p("AkXE+IAAp7IEzAAQB3AABCA+QBBA8ACBtQgCBthBA8QhCA+h3AAIiGAAIAACtgAhsgCICBAAQApgBAWgWQAXgWABglQgBgmgXgWQgWgWgpgBIiBAAg");
	this.shape_24.setTransform(258.7,17.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#043464").s().p("AiWE3QhJgYg0grIBZh8QAqAhAvAPQAuAPA0AAQAyAAAcgPQAbgPABgcQAAgagagPQgcgOg5gFQiCgMg+gvQg9gvAAhXQAAg+AigvQAhgtA8gaQA9gaBQAAQBGAAA+ASQA/ATAwAhIhPB5QgigXgngMQgngMgqAAQgzAAgeAOQgdAOAAAbQgBAZAZANQAaAOA7AFQB9AOBCA0QBBAzAABYQAAA/giAuQgjAvg+AZQg8AbhTAAQhQAAhIgYg");
	this.shape_25.setTransform(194.35,17.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#043464").s().p("Ai5EmQhPgqgrhKQgrhMAAhmQAAhmArhLQArhLBPgpQBPgpBqAAQBrAABPApQBOApAsBLQArBLAABmQAABmgrBMQgsBKhOAqQhPAphrAAQhqAAhPgpgAiBiFQgwAxgBBUQABBVAwAwQAvAxBSABQBSgBAwgxQAvgwABhVQgBhUgvgxQgwgwhSgBQhSABgvAwg");
	this.shape_26.setTransform(105.625,17.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#043464").s().p("AhVE+IAAnoIi8AAIAAiTIIjAAIAACTIi8AAIAAHog");
	this.shape_27.setTransform(38.825,17.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#043464").s().p("ABHE+IjCjmIAADmIiqAAIAAp7ICqAAIAADoIC5joIDRAAIkBE7IEYFAg");
	this.shape_28.setTransform(-38.55,17.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#043464").s().p("AiIEkQhOgqgqhLQgqhLgBhkQABhlAshMQArhKBNgpQBNgpBlAAQBJAAA9AZQA9AZAyAxIhoBsQgegcgigOQghgNgoAAQgzAAgnAXQgoAWgWApQgWApAAA2QAAA3AWApQAWApAoAWQAnAXAzAAQAtAAAngQQAogPAegfIBiBxQg1Azg/AZQg/AZhJAAQhrgBhNgpg");
	this.shape_29.setTransform(-105.65,17.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#043464").s().p("AhVE+IAAp7ICsAAIAAJ7g");
	this.shape_30.setTransform(-153.65,17.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#043464").s().p("AjxE+IAAp7ICtAAIAAHiIE2AAIAACZg");
	this.shape_31.setTransform(-194.5,17.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#043464").s().p("AiIEkQhOgqgqhLQgqhLgBhkQABhlAshMQArhKBNgpQBNgpBlAAQBJAAA9AZQA9AZAyAxIhoBsQgegcgigOQghgNgoAAQgzAAgnAXQgoAWgWApQgWApAAA2QAAA3AWApQAWApAoAWQAnAXAzAAQAtAAAngQQAogPAegfIBiBxQg1Azg/AZQg/AZhJAAQhrgBhNgpg");
	this.shape_32.setTransform(-256.4,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("Eg8AgDLQA5lADyjzQE+k9HBAAMBWtAAAQGfAAEuEPQAZAWAXAYQE/E9AAHBIAAAAQAAHCk/E8QgXAYgZAWQkuEQmfAAMhWtAAAQnBAAk+k+Qjyjyg5lAQgShiAAhqIAAAAQAAhpAShig");
	this.shape_33.setTransform(49.35,18.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("EgrVAQ8QnCAAk+k+Qjyjyg5lAIAAmXQA5lADyjzQE+k9HCAAMBWrAAAQGgAAEuEPQAZAWAXAYQE/E9AAHBIAAAAQAAHCk/E8QgXAYgZAWQkuEQmgAAgEg8SAAAIAAAAQAAhpAShiIAAGXQgShiAAhqgEg8AgDLg");
	this.shape_34.setTransform(49.35,18.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("EgrWgQ7MBWtAAAQHBAAE8E9QE/E9AAHBIAAAAQAAHCk/E8Qk8E+nBAAMhWtAAAQnBAAk+k+Qk9k8AAnCIAAAAQAAnBE9k9QE+k9HBAAg");
	this.shape_35.setTransform(49.35,18.275);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("EgrVAQ8QnCAAk+k+Qk8k8gBnCIAAAAQABnBE8k9QE+k9HCAAMBWrAAAQHCAAE8E9QE/E9AAHBIAAAAQAAHCk/E8Qk8E+nCAAg");
	this.shape_36.setTransform(49.35,18.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33}]}).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-337.5,-116,902.5,243.7);


(lib.Scene_1_Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Logo
	this.instance = new lib.Pointer();
	this.instance.setTransform(939,50,0.5444,0.5444);

	this.instance_1 = new lib.Logo();
	this.instance_1.setTransform(856,390,0.5885,0.5885);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_Logo, null, null);


(lib.Scene_1_BG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BG
	this.instance = new lib.Stand();
	this.instance.setTransform(841,34,0.5444,0.5905);

	this.instance_1 = new lib.BG_wide();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_BG, null, null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
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
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Wheel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Wheel
	this.CIRC = new lib.wheel();
	this.CIRC.name = "CIRC";
	this.CIRC.setTransform(960.05,493.7,0.5885,0.5885,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.CIRC).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_Wheel, null, null);


(lib.Scene_1_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Button
	this.BTN = new lib.spin();
	this.BTN.name = "BTN";
	this.BTN.setTransform(1617.4,546.55,0.473,0.473,0,0,0,49.4,18.5);
	new cjs.ButtonHelper(this.BTN, 0, 1, 2, false, new lib.spin(), 3);

	this.timeline.addTween(cjs.Tween.get(this.BTN).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_Button, null, null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.BTN = this.Button.BTN;
		this.CIRC = this.Wheel.CIRC;
		let rotating = false;
		let easing = false;
		let easeDuration = 1000; // 1 second for easing
		let easeStartTime = 0;
		let rotationSpeed = 15; // Fast spin
		let initialSpeed = 15;
		let targetRotation = 0;
		
		this.BTN.addEventListener("click", () => {
		    if (!rotating) {
		        rotating = true;
		        rotationSpeed = initialSpeed;
		        easing = false;
		        // Pick a random target rotation (e.g., between 2 and 6 full spins from current)
		        let minSpins = 2;
		        let maxSpins = 6;
		        let spins = Math.random() * (maxSpins - minSpins) + minSpins;
		        targetRotation = this.CIRC.rotation + spins * 360;
		    }
		});
		
		createjs.Ticker.addEventListener("tick", () => {
		    if (rotating) {
		        if (!easing) {
		            this.CIRC.rotation += rotationSpeed;
		            // Check if we've reached or passed the target
		            if (this.CIRC.rotation >= targetRotation) {
		                easing = true;
		                easeStartTime = createjs.Ticker.getTime();
		            }
		        } else {
		            // Easing out
		            let elapsed = createjs.Ticker.getTime() - easeStartTime;
		            let t = Math.min(elapsed / easeDuration, 1);
		            let easedSpeed = initialSpeed * (1 - t); // Linear ease out
		            this.CIRC.rotation += easedSpeed;
		            if (t >= 1) {
		                rotating = false;
		                easing = false;
		                rotationSpeed = 0;
		            }
		        }
		        stage.update();
		    }
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(960,540);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1));

	// Button_obj_
	this.Button = new lib.Scene_1_Button();
	this.Button.name = "Button";
	this.Button.setTransform(1648,540.5,1,1,0,0,0,1648,540.5);
	this.Button.depth = 0;
	this.Button.isAttachedToCamera = 0
	this.Button.isAttachedToMask = 0
	this.Button.layerDepth = 0
	this.Button.layerIndex = 0
	this.Button.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(1));

	// Logo_obj_
	this.Logo = new lib.Scene_1_Logo();
	this.Logo.name = "Logo";
	this.Logo.setTransform(959.6,323.9,1,1,0,0,0,959.6,323.9);
	this.Logo.depth = 0;
	this.Logo.isAttachedToCamera = 0
	this.Logo.isAttachedToMask = 0
	this.Logo.layerDepth = 0
	this.Logo.layerIndex = 1
	this.Logo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Logo).wait(1));

	// Wheel_obj_
	this.Wheel = new lib.Scene_1_Wheel();
	this.Wheel.name = "Wheel";
	this.Wheel.setTransform(960,493.7,1,1,0,0,0,960,493.7);
	this.Wheel.depth = 0;
	this.Wheel.isAttachedToCamera = 0
	this.Wheel.isAttachedToMask = 0
	this.Wheel.layerDepth = 0
	this.Wheel.layerIndex = 2
	this.Wheel.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Wheel).wait(1));

	// BG_obj_
	this.BG = new lib.Scene_1_BG();
	this.BG.name = "BG";
	this.BG.setTransform(960,540.1,1,1,0,0,0,960,540.1);
	this.BG.depth = 0;
	this.BG.isAttachedToCamera = 0
	this.BG.isAttachedToMask = 0
	this.BG.layerDepth = 0
	this.BG.layerIndex = 3
	this.BG.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.BG).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(959,539,962,542);
// library properties:
lib.properties = {
	id: 'DCD7B6583EB752449E6C7F41856210E9',
	width: 1920,
	height: 1080,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"BG_wide.jpg", id:"BG_wide"},
		{src:"btn1.png", id:"btn1"},
		{src:"btn2.png", id:"btn2"},
		{src:"btn3.png", id:"btn3"},
		{src:"Logo.png", id:"Logo"},
		{src:"Pointer.png", id:"Pointer"},
		{src:"Stand.png", id:"Stand"},
		{src:"Wheel.png", id:"Wheel"}
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
an.compositions['DCD7B6583EB752449E6C7F41856210E9'] = {
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

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
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

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;