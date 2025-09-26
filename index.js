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
	this.shape.graphics.f("#56B8E0").s().p("ACJE+IkCllIAECZIAADMIisAAIAAp7ICZAAIECFnIgEibIAAjMICsAAIAAJ7g");
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
	this.shape_11.graphics.f("#56B8E0").s().p("ACPFMIkNl1IADCgIAADVIizAAIAAqYICgAAIENF3IgDihIAAjWICzAAIAAKYg");
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
	this.shape_22.graphics.f("#043464").s().p("ACJE+IkCllIAECZIAADMIisAAIAAp7ICZAAIECFnIgEibIAAjMICsAAIAAJ7g");
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
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
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

	// Button
	this.BTN = new lib.spin();
	this.BTN.name = "BTN";
	this.BTN.setTransform(475.15,1725.85,0.7848,0.7848,0,0,0,49.4,18.5);
	new cjs.ButtonHelper(this.BTN, 0, 1, 2, false, new lib.spin(), 3);

	this.timeline.addTween(cjs.Tween.get(this.BTN).wait(1));

	// Logo
	this.instance = new lib.Pointer();
	this.instance.setTransform(515,291,0.6481,0.6481);

	this.instance_1 = new lib.Logo();
	this.instance_1.setTransform(417,696,0.7006,0.7006);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Wheel
	this.CIRC = new lib.wheel();
	this.CIRC.name = "CIRC";
	this.CIRC.setTransform(540.15,820.35,0.7006,0.7006,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.CIRC).wait(1));

	// BG
	this.instance_2 = new lib.Stand();
	this.instance_2.setTransform(399,274,0.6481,0.703);

	this.instance_3 = new lib.BG_wide();
	this.instance_3.setTransform(1080,1920,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(540,960,540,960);
// library properties:
lib.properties = {
	id: '572D4C36901FD54CA78979356D1B860F',
	width: 1080,
	height: 1920,
	fps: 25,
	color: "#3333CC",
	opacity: 1.00,
	manifest: [
		{src:"BG_wide.jpg?1758876689902", id:"BG_wide"},
		{src:"btn1.png?1758876689902", id:"btn1"},
		{src:"btn2.png?1758876689902", id:"btn2"},
		{src:"btn3.png?1758876689902", id:"btn3"},
		{src:"Logo.png?1758876689902", id:"Logo"},
		{src:"Pointer.png?1758876689902", id:"Pointer"},
		{src:"Stand.png?1758876689902", id:"Stand"},
		{src:"Wheel.png?1758876689902", id:"Wheel"}
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
an.compositions['572D4C36901FD54CA78979356D1B860F'] = {
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