(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.C1 = function() {
	this.initialize(img.C1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.C2 = function() {
	this.initialize(img.C2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.C3 = function() {
	this.initialize(img.C3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.C4 = function() {
	this.initialize(img.C4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.C4_txt = function() {
	this.initialize(img.C4_txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,107);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Shine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0.008,0.482,1],-11,0,11,0).s().p("AhtFgIAAq/IDbAAIAAK/g");
	this.shape.setTransform(11,35.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Shine, new cjs.Rectangle(0,0,22,70.4), null);


(lib.dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCEF00").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dot, new cjs.Rectangle(-2.4,-2.4,4.8,4.8), null);


(lib.C4_txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.C4_txt();
	this.instance.parent = this;
	this.instance.setTransform(-56,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.C4_txt_1, new cjs.Rectangle(-56,-53.5,112,107), null);


(lib.C4_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.C4();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.C4_bg, new cjs.Rectangle(-150,-125,300,250), null);


(lib.C3_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,8.3,0,-10.3).s().p("AAaA0IgZgtIgbAAIAAAtIgPAAIAAhnIArAAQARAAAJAHQALAIgBAOQABAVgWAGIAZAvgAgagGIAcAAQALAAAGgEQAFgFgBgHQAAgPgVAAIgcAAg");
	this.shape.setTransform(-12.7,-11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,8.4,0,-10.2).s().p("AgGA0IAAhnIANAAIAABng");
	this.shape_1.setTransform(-5.6,-11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,12,0,-8.7).s().p("AgyBaIAAgaIgpAAIAAgPIApAAIAAgRIgfAAIAAhFIAfAAIAAgSIglAAIAAgPIAlAAIAAgTIAQACQAFAAgBACIgCAEIAAALIAjAAIAAAPIgjAAIAAASIAeAAIAAAGQAOgXALggIAOAFQABAAABAAQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgHATIA4AAIAAAQIg/AAQgGAOgHALIgMgKIAAA6IgeAAIAAARIAnAAIAAAPIgnAAIAAAagAhBARIAwAAIAAgNIgwAAgAhBgJIAwAAIAAgOIgwAAgAAVBSQgKgIABgOQgBgNANgRQAJgNARgQIgoAAIAAgPIA4AAIAEgDIAMAJIACACQgdAXgOASQgMAQAAAHQAAAHADACQAEADAKAAQAQAAAEgDQAFgDADgPIASAIQgGAWgKAEQgHAFgXgBQgTAAgGgFg");
	this.shape_2.setTransform(-19.2,8.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,8.3,0,-10.3).s().p("AAjA0IgMgcIgtAAIgMAcIgQAAIArhnIAPAAIAqBngAgQAKIAhAAIgRgqg");
	this.shape_3.setTransform(-33.4,-11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,8.3,0,-10.2).s().p("AgeAnQgOgOAAgXQAAgZAOgPQANgPAUAAQAbAAAPAaIgOAEQgJgPgTAAQgNAAgJAKQgKAKAAAUQAAARAKAKQAJAKALAAQALAAAGgGQAJgJAAgQIgaAAIAAgNIApAAIAAA6IgPAAIAAgLQgKALgQAAQgSAAgNgOg");
	this.shape_4.setTransform(-23,-11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,12,0,-8.7).s().p("Ag/BaIAAhjIgNAUIgNgMQANgTALgWQAKgTAIgcIAQAHQABABABAAQAAAAABABQAAAAAAAAQABABAAAAQgBADgFACIgMAeIAACGgAgnBVIAAgQIA0AAIAAgeIgoAAIAAgPIAoAAIAAgYIARACQAFAAAAACQgBACgDADIAAAPIAtAAIAAAPIgtAAIAAAeIA8AAIAAAQgAglgEIAAgRIAyAAIAAgbIgoAAIAAgPIAoAAIAAgYIARACQAFAAAAACQgBACgDADIAAAPIAtAAIAAAPIgtAAIAAAbIA7AAIAAARg");
	this.shape_5.setTransform(-39.4,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,8.3,0,-10.3).s().p("AggA0IAAhnIBBAAIAAAOIgyAAIAAAeIAsAAIAAANIgsAAIAAAgIAyAAIAAAOg");
	this.shape_6.setTransform(-52.9,-11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,8.3,0,-10.2).s().p("AgeAnQgOgOAAgXQAAgZAOgPQANgPAUAAQAbAAAPAaIgOAEQgKgPgSAAQgNAAgJAKQgJAKAAAUQAAARAJAKQAJAKALAAQALAAAHgGQAJgJAAgQIgbAAIAAgNIAqAAIAAA6IgPAAIAAgLQgMALgPAAQgSAAgNgOg");
	this.shape_7.setTransform(-43.9,-11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,12.3,0,-8.5).s().p("AghBZIAAgPIB9AAIAAAPgAhABUIAAhLQgFAUgIASIgQgLQALgRAGgRQAEgIAIgbIgYAAIAAgQIAYAAIAAgnIAQABQAFACAAABIgEAEIAAAfIAUAAIAAAQIgTAAQAIAYAMANIgLANIgKgVIAABYgAAgA5QAPgIAHgIIAEgFQgDgHgDgKQgFgRgBgiIgDAAIAAgNIAxAAQgCApgFAUQgEALgFAKIADAEQAGAJAJAIIgOAJIgNgRQgIAJgPAKgABCANIABAGIABgCQAGgRADggIgRAAQABAeAFAPgAgHA1QASAAADgEQAEgDABgLQADgMABg1IgZAAQgEAIgGAHIgRgIQATgTAJgUIgbAAIAAgRIByAAIAAARIhHAAIgJASIAfAAQAABBgDASQgCARgHAGQgIAHgRAAgAgZArIAAg1IAlAAIAAA1gAgLAeIAKAAIAAgcIgKAAg");
	this.shape_8.setTransform(-59.3,8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,8.3,0,-10.3).s().p("AAmA0IAAhMIgfBMIgNAAIgfhMIAABMIgPAAIAAhnIASAAIAiBUIAjhUIASAAIAABng");
	this.shape_9.setTransform(-63.4,-11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,11.9,0,-8.9).s().p("AgtBSQAJgQADgNIAPADQgFASgGAOgAhaBMQARgaAQgkIAJANQgLAcgNAbQAAAGgDAAgAgFA5IAOgDQAEASACAMIgPADQgCgRgDgNgAAaA4IAQgDQAHAPADAOIgPADQgFgQgGgNgAA9A2IAQgDQAJAQAEAPIgQACQgEgOgJgQgAAFAqIgpAHQgBAAAAABQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIgEgPIAQgBIAHgLQgMgMgOgJIAMgIIADADIAOgZIANACQABABAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAACgDACIgQAWIAJAHIARgbIAMAIQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgaAkIANgCIgCgKIAMgDQAGARACAQIgNADgABKApIgsAFQAAABAAAAQgBABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgDgOIAMgBIAIgLQgMgMgOgIIAKgIIAFACIANgVIANACQAAAAABAAQABABAAAAQAAAAABABQAAAAAAAAQAAADgDACIgPATIAJAHIATgZIAMAIQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAgBAAIgdAhIASgBIgEgKIANgDQAIASAEAQIgNACgAhagZIAMgMQAPAJANALIgMALQgLgKgRgJgAgdgfIAAg3IBpAAIAAA3gAgNgsIBJAAIAAgJIhJAAgAgNhAIBJAAIAAgJIhJAAgAhNhMIAMgLQAPAJANALIgLALQgOgLgPgJg");
	this.shape_10.setTransform(0.6,8.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,12,0,-8.8).s().p("AhTBKQAbgOARgWQAPgSAFgbQADgKABgNIg8AAIAAgSIA9AAIAAgoIATADQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAABgFAEIgBAeIBRAAQAABOgFAWQgDATgKAIQgLAIgaAAIgJgTQAcgBAFgFQAFgDADgOQAEgNABg+IhAAAQgBAVgDAPQgIAagOATQgPAUgbASg");
	this.shape_11.setTransform(60.3,8.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,8.4,0,-10.2).s().p("AAQAdQgIgLgFgOIgDAJQgFANgQANQgLAKgPAIIgKgKQAQgIAIgGQAOgKAGgLQAGgLACgNIgwAAIAAgLIAxAAIAAgXIgBgKIALABQABAAABABQAAAAABAAQAAAAABAAQAAABAAAAQAAACgDACIAAAaIAvAAIAAALIgvAAQAGAVAMANQALANAWAJIgKANQgUgLgMgRg");
	this.shape_12.setTransform(50.6,-11.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,8.4,0,-10.2).s().p("Ag4A0IAIgbQADgRAAgPIAAgjIAsAAIAAgOIALABQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAIgCADIAAAJIAsAAIAAAKIhYAAIAAAZQAAASgDAQQgCANgFARgAAgA0QgGgFgGgIQgGgKgDgNIgBgFIgZAAIAAASIAYgIIAAAJIgnAOIgCACQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIgCgKIAJgCIAAg4IAHAEQAPgBAIgCQAJgBASgFIAIAHIAAADQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAIgEgBIgNADIgCABIABAPIAcAAIAAALIgbAAIABAIQAEALAHAHQAGAFADABIACgCIAEgLIAJAHQgCAHgEAGQgDAGgFgBQgGAAgFgDgAgPgJIAAAJIAYAAIAAgOgAgZA2IAAgKIAuAAIAAAKg");
	this.shape_13.setTransform(63.1,-11.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,12.3,0,-8.5).s().p("AAIBYQgLAAgGgHQgFgHAAgNIAAg7IgRAFIgEgPIAVgGIAAg1IASACQAEABAAACQAAACgDAEQgDACAAAEIAAAeIAWgHIAAg8IAPACQABAAABAAQABAAAAAAQABAAAAABQAAAAAAAAQAAACgDADIAAAvIAYgHQAFgGACAAIACABIAJAHQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAAACgDACIgBAqQAAARgHAHQgFAFgQADIgHgSQANAAADgEQADgEAAgJIAAggIgYAIIAAA7IgQAAIAAg2IgWAHIAAA8QAAAIACADQADADAIAAIAmAAQAKAAAEgDQAFgDADgQIARAHQgFAUgHAHQgGAFgJAAgAhWA/IgFgUIAZgFIAAg7IgXAAIAAgRIAXAAIAAgwIAQACQAFAAAAACQAAACgDADIAAAnIAXAAIAAARIgXAAIAAA2QANgEALgEIAAAQIg4AVQgCAEgCAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_14.setTransform(40.7,7.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,8.4,0,-10.2).s().p("AgmA5IAAg/IgJALIgJgHQALgNAHgMQAHgMAGgRIAKAFIACACQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgLAWIAABRgAgWA1IAAgLIApAAIAIgYQAEgQAFgTIALAFQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgDADQgFAUgLAeIAbAAIAAALgAgKgMIAKgDQAIAXADAYIgLADQgCgUgIgbgAgQgXIAAgLIAbAAIAAgSIALAAQABABABAAQAAAAABAAQAAABAAAAQABAAAAAAIgDADIAAANIAfAAIAAALg");
	this.shape_15.setTransform(37.8,-11.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,12,0,-8.7).s().p("AA2ASQgEgfAAgyIgPADIAACQIgQAAIAAiOIgQACIAAAgQAAAYgBAYQgCAXgGATQgFAPgHALIgPgKQAGgKACgGQAGgPACgNQAEgVAAgpIAAg0IAJAEQATAAAPgEQAPgCAYgHIAMANQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBABIgFgBIgGABIgCAAQAAAxAEAcQADAYAHAUQAEANAIAOIgSALQgQgjgFgngAhTBKIANAAQAHAAABgJIAAgqIgPAHQgDAGgCAAQgBAAAAAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIgHgRIAegKIAAgvIgcAAIAAgRIAcAAIAAggIATACQABAAABABQAAAAABAAQAAAAAAABQAAAAAAABQAAACgEADIAAAWIAWAAIAAARIgWAAIAAApIAZgLIAAARIgZAKIAAA1QAAAMgGAFQgGAHgUAAg");
	this.shape_16.setTransform(20.6,8.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,8.4,0,-10.2).s().p("AgkA0IAAhnIAlAAQAQAAAJAHQALAIAAAOQAAAOgLAIQgKAHgPAAIgWAAIAAAtgAgVgGIAVAAQAWAAAAgQQAAgPgWAAIgVAAg");
	this.shape_17.setTransform(1.7,-11.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,8.4,0,-10.2).s().p("Ag1A1IAAgKIAxAAIAAgRIgcAAIAAgKIAcAAIAAgQIggAAIAAgJQgFAEgGACIgKgJQATgIAMgIQAIgFAHgJIgVAAIAAgKIArAAQAIAOANAKQAKAIAQAHIgJALIgKgGIAAAIIghAAIAAAQIAeAAIAAAKIgeAAIAAARIAxAAIAAAKgAgSgVIgRAMIBJAAQgMgHgGgGQgJgIgIgMIgDAAQgKAOgIAHg");
	this.shape_18.setTransform(12.8,-11.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,8.4,0,-10.2).s().p("Ag1AwQAMgGAHgKQAGgJAFgNQAEgNABgVIgmAAIAAgLIAyAAIAAgVIAKABQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABIgDADIAAAPIAzAAIAAALIg+AAIgCASIAzAAQAAAkgDAKQgDAJgHADQgHAEgSAAIgFgMQATAAAEgCQADgBADgGQADgHAAgZIgqAAIgCAKQgFAQgHAJQgHALgLAIg");
	this.shape_19.setTransform(25.4,-11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.C3_txt, new cjs.Rectangle(-68.7,-17.3,137.5,34.8), null);


(lib.C3_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF000").s().p("AhFCoQghgNgagaQgagagNgiQgOggAAglQAAhKA2g2QA1g1BKAAQBLAAA1A1QA2A2AABKQAABLg2A2Qg1A1hLAAQgkAAghgOgAhBicQgfANgYAXQgXAYgNAeQgOAgAAAiQAAAiANAgQANAfAYAYQAYAYAfANQAfAMAiAAQAjAAAfgNQAfgNAYgXQAXgYANgeQANggAAgjQAAgigNggQgNgegXgYQgYgXgfgNQgfgNgjAAQgiAAgfANgAAACLIAAgsIgwAAIABgwIgxAAIAAgwIgqAAQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgGAGAAIA2AAIAAAvIAwAAIAAAxIAvABIAAA2QAAAFgGAAQgFAAAAgFgAAbBvIAAgrIgvAAIAAgwIgxAAIABgxIgrAAQgGABAAgGQAAgFAGgBIA2AAIAAAwIAwAAIAAAxIAwAAIAAA2QAAAGgGgBQgGABAAgGgAA4BXQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIABgsIgTAAIgaAAQgEgBAAgEIAAgqIgvAAIAAgxIgrAAQgFAAAAgFQAAgGAFAAIA2AAIAAAwIAwABIAAAwIAwAAIAAA2QAAAFgGAAQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAgBgBgABSA4IAAgqIgwgBIAAgvIgwAAIABgxIgrAAQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAABAAQAAAAABAAIA2AAIAAAwIAvAAIAAAwIAwAAIAAA2QAAAGgFAAQgGAAAAgGgABtAdIABgqIgxAAIAAgxIgwAAIAAgxIgqAAQgGABAAgHQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAgBQAAAAABAAQABAAAAAAIA1ABIAAAwIAwAAIAAAxIAxAAIAAA1QAAAAAAABQgBAAAAABQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQgGAAAAgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.C3_icon, new cjs.Rectangle(-18.1,-18.2,36.3,36.4), null);


(lib.C3_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.C3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.C3_bg, new cjs.Rectangle(-150,-125,300,250), null);


(lib.C2_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],-0.1,10.7,-0.1,-4.5).s().p("AgzBPIAAgYIgcAAIAAgOIAcAAIAAgMIgaAAIAAg/IAaAAIAAgMIgbAAIAAgOIAbAAIAAgSIAOABQABABABAAQABAAAAAAQABABAAAAQAAAAAAABIgDACIAAAMIAcAAIAAAOIgcAAIAAAMIAbAAIAAA/IgbAAIAAAMIAdAAIAAAOIgdAAIAAAYgAgkAQIAMAAIAAgOIgMAAgAg+AQIALAAIAAgOIgLAAgAgkgJIAMAAIAAgLIgMAAgAg+gJIALAAIAAgLIgLAAgAgGBKIAAgNIAjAAIAAggIgdAAIAAgNIBIAAIAAANIgbAAIAAAgIAjAAIAAANgAgHgTQAIgPAGgQIAOAGQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAACgEABIgKAUQAGAKAGAOIgNADQgFgPgJgMgAASgUQALgOAGgQIANAGQABABAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBABgBAAQAAAAgCAAIgLATQAIAMAFAMIgNADQgFgPgLgMgAAugTQALgOAGgPIANAFQABABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAACgFABIgMARQAIALAGALIgNAEQgGgPgLgKgAgBg4IAAgOIBNAAIAAAOg");
	this.shape.setTransform(-23.9,-9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,10.6,0,-4.6).s().p("AhNBLIAAgLIBFAAIAAgHIg2AAIAAgMIA2AAIAAgHIgvAAIAAgsIBtAAIAAAsIgwAAIAAAHIA3AAIAAAMIg3AAIAAAHIBIAAIAAALgAAGAcIAiAAIAAgIIgiAAgAgpAcIAhAAIAAgIIghAAgAAGALIAiAAIAAgIIgiAAgAgpALIAhAAIAAgIIghAAgAhKgNIAAgLICWAAIAAALgAg1geIAAgsIBqAAIAAAsgAgngpIBNAAIAAgHIhNAAgAgng6IBNAAIAAgHIhNAAg");
	this.shape_1.setTransform(-6.5,-9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,8.3,0,-6.9).s().p("AAYAnIgYgeIgXAeIgTAAIAhgoIgdglIATAAIATAZIAUgZIASAAIgdAlIAiAog");
	this.shape_2.setTransform(10.7,-9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],-0.1,9.9,-0.1,-4.4).s().p("AAZBIIAAgSIgpAAIAAgNIApAAIAAgMIglAAIAAg2IBUAAIAAA2IgiAAIAAAMIAlAAIAAANIglAAIAAASgAAmARIAUAAIAAgLIgUAAgAABARIAYAAIAAgLIgYAAgAAmgEIAUAAIAAgKIgUAAgAABgEIAYAAIAAgKIgYAAgAhAA5QAVABAFgHQAEgFADgfIgcAAIgBAIIgOAAQAEgXADgiIAiAAIAAgYIglAAIAAgNIA0AAIAAAxIgkAAIgDAZIApAAQgCAegCANQgDAPgJAGQgIAFgUAAgAAhggIAAgmIAoAAIAAAmgAAugrIAPAAIAAgPIgPAAgAgNggIAAgmIApAAIAAAmgAAAgrIAQAAIAAgPIgQAAg");
	this.shape_3.setTransform(-24.3,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,10,0,-4.3).s().p("AhEA8QAVgKAPgTQALgPAFgVIADgTIgwAAIAAgPIAxAAIAAghIAPACQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAACgEACIgBAZIBDAAQAAA/gFASQgCAQgJAHQgJAGgVAAIgHgQQAXAAAEgEQAEgCACgMQAEgLAAgyIgzAAQgCASgCALQgGAVgMAPQgNASgVAOg");
	this.shape_4.setTransform(-8.2,10.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,10.1,0,-4.2).s().p("AgGBJIAAg0IgjAAIAAAJIgQAAIAAhHIAzAAIAAgfIAMABQACAAAAAAQABAAABAAQAAAAABABQAAAAAAAAIgEAFIAAAYIAyAAIAABHIgPAAIAAgJIgjAAIAAA0gAAHAHIAjAAIAAghIgjAAgAgpAHIAjAAIAAghIgjAAg");
	this.shape_5.setTransform(8.2,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,10,0,-4.3).s().p("AhJBDQAHgSAEgRQADgWAAgUIAAguIA6AAIAAgRIANABQABAAABAAQABABAAAAQABAAAAAAQAAABAAAAQAAABgDADIAAAKIA6AAIAAAPIhzAAIAAAfQAAAZgDAUQgDARgIAWgAAqBDQgIgGgIgLQgJgMgDgRIgBgHIghAAIAAAXQAQgEAPgGIAAAMQgMAGglAMQgBABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgDgPIAMgCIAAhIIAJAEQAQgBAOgCQANgDAWgGIAKAKQABABAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgEAAIgGABIgMACIgCACIABAVIAkAAIAAANIgjAAIADAKQAEAOAJAKQAGAHAGAAIACgCIAFgOIAMAKQgDAKgFAGQgFAHgFAAQgGAAgIgFgAgUgNIAAAOIAgAAIAAgTQgRADgPACgAggBGIAAgNIA7AAIAAANg");
	this.shape_6.setTransform(24.5,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.C2_txt, new cjs.Rectangle(-31.8,-17.7,63.8,35.5), null);


(lib.C2_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF000").s().p("AhECnQgigNgagaQgZgagNghQgOghAAgkQAAhKA1g1QA1g1BKAAQBKAAA2A1QA1A1AABKQAABLg1A1Qg2A1hKAAQgjAAghgOgAhBicQgfANgYAYQgXAXgNAfQgNAfAAAiQAAAiANAfQANAfAXAYQAZAYAeANQAgANAhAAQAjAAAfgOQAfgNAXgXQAYgXANgfQAMggAAgiQAAgigMgfQgNgfgYgXQgXgYgfgNQgfgNgjAAQgiAAgfANgAg5BfQgFgCACgFIAMggQgFgEgFgHIAAgCIgtAAQgGAAAAgGQAAgFAGAAIApAAIgBgGQAAgIADgHIAEgLIgNAAQgYAAgIAEQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQgBgEAEgCQAMgGAZAAIASABIAMgfQgKgCgKAAQgYAAgSAJQAAAAgBAAQAAABgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAVgKAaAAQAMAAANACIADgKQAFgKAHgGQAJgGAJAAQAHAAAGADQAJAFAGAJQAFAIAAALQAAAGgBAEQARADAMAAQAXAAATgJQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQADAFgGACQgUALgaAAQgOAAgSgEIgBAAIgKAXQAnADAOAAQAYAAAIgEIAEgBQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAgBABQgKAFgaAAQgQAAgpgDIgKAaIBlAAQAGAAAAAFQAAAGgGAAIhpAAQgDAIgIAEQgHAGgLAAIgIgBIgLAgQgCADgDAAIgDAAgAgOACIgTAwIADAAQAHAAAFgEQAEgDADgFIAAgBQABgDACgBIAOgogAgxAQQgCAFAAAFQgBAHAEAGIAFAGIATgvIgIgXgAgCgtQAFABgCAGIgKAaIAWgJIAGgRQACgEAAgGQgBgHgDgHQgEgGgGgDQgFgCgDAAQgFAAgGAEQgGAEgCAHIgEAMIgBABIgCAEIAIAYIAKgZQACgEADAAIACABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.C2_icon, new cjs.Rectangle(-18.1,-18.1,36.2,36.3), null);


(lib.C2_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.C2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.C2_bg, new cjs.Rectangle(-150,-125,300,250), null);


(lib.C1_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,7.5,0,-7.5).s().p("AgsA9QAWgEANgGIAPgIIgGgHQgKgMgFgPIgGgQIgEAAIgDAJQgGAXgJAQQgGANgLAOIgOgJQAKgMAFgJQAKgSAHgWQAGgWADgiIgXAAIAAgOIBWAAIAFgCQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAIAKAGIABADQAAACgDADIgOAnIAPAAIAFgDIADACIAJAHQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABgFADQgNAhgRAPIAKAGQAOAHAUADIgOAQQgUgGgPgKIgIgFQgSANghAJgAgBAHQAEALAKALIAGAFIADgFQAMgMAJgYIgxAAIAFAOgAgXgUIAnAAIANgmIgvAAQgBARgEAVg");
	this.shape.setTransform(-47.6,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,7.4,0,-7.4).s().p("AgsAmIATgGQAFAYAUAAQAKAAAIgHQAGgHAAgJQAAgLgGgIQgHgHgKAAIgRAAIAAgRIAPAAQAHAAAHgIQAGgIAAgJQAAgTgTAAQgRAAgDAWIgTgGQADgPAKgKQALgKAPAAQATAAAKAKQALALAAARQAAAUgRAMQAKADAGAKQAGALAAAMQAAASgOALQgNAMgSAAQgkAAgIgkg");
	this.shape_1.setTransform(-34.3,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,7.3,0,-7.2).s().p("Ag6BIIAAiPIApAAQAlAAATAQQAUASAAAmQAAAhgUAUQgUASgkAAgAgmA2IAVAAQAbAAAPgPQANgNAAgZQAAgcgNgNQgNgMgdAAIgVAAg");
	this.shape_2.setTransform(-21,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,7.3,0,-7.2).s().p("AhNBJIAAgPIBVAAIAMggQAHgXAHgaIAPAHQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAACgFACQgJAhgPAjIA2AAIAAAPgAgtgNIAPgDQAOAfAFAdIgPADQgHghgMgbgAhEgcIAAgOIA+AAIAAgeIAOABQAFABgBACIgDAEIAAAWIA9AAIAAAOg");
	this.shape_3.setTransform(-4.5,9.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,7.7,0,-7.6).s().p("AgrA/IAJAAQAFgBAAgEIAAgFIgZAAIAAAYIgOAAIAAhMIgLAAIAAgdIAKAAIAAgsIA4AAIAAAsIAIAAIAAAdIgLAAIAAA9QAAAKgIACQgJADgFAAgAg2AqIAZAAIAAgNIgZAAgAg2ARIAZAAIAAgMIgZAAgAhCgGIAwAAIAAgKIgwAAgAgjgcIAJAAIAAgLIgJAAgAg4gcIAKAAIAAgVIAUAAIAAgLIgeAAgAgGBKIAAgLIAUAAIgGgNIAMgDQAGAIACAIIARAAIAJgRIAMADQAAAAABAAQABABAAAAQAAAAABABQAAAAAAAAQAAACgEACIgEAIIATAAIAAALgAADArIAAgeIBDAAIAAAegAAQAiIApAAIAAgLIgpAAgAgDAHIAAgLIBRAAIAAALgAAAgKIAAgzIAUAAIAAgPIALABQABAAABABQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAgBABIAAAJIAIAAIAAgPIALABQABAAAAABQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQgBABAAAAQgBAAAAABIAAAJIAWAAIAAAzgAA0gUIAJAAIAAgKIgJAAgAAggUIAIAAIAAgKIgIAAgAAMgUIAIAAIAAgKIgIAAgAA0goIAJAAIAAgKIgJAAgAAggoIAIAAIAAgKIgIAAgAAMgoIAIAAIAAgKIgIAAg");
	this.shape_4.setTransform(12.8,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,7.6,0,-7.5).s().p("AAcA7QgNAJgWAIIgKgOQAQgDAIgEIAIgFQgNgNgKgTIAKgGQALASAOALIADgEQAHgJAIgVIgyAAIAAgMIA3AAIADgDQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAIAIAHIACADQAAABgFADQgJAbgNAOQAPAHAXAFIgJAPQgagHgOgKgAhJBMIAAg4IA2AAIAAA2IgOAAIAAgIIgaAAIAAAKgAg7A2IAaAAIAAgVIgaAAgAhHAIIAAgMIAxAAIAAAMgAgSgWQAKgIAEgJQAEgHAAgcIAwAAIAAAlQAAAHADAAIAIAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAABAAQABgDACgNIANAEQgDASgEAEQgFAFgJAAIgIAAQgQAAAAgSIAAgbIgUAAQgBATgEAIQgFALgKALgAhHgOIAAgNIAxAAIAAANgAhNgmIAAgOIA+AAIAAAOgAhHg+IAAgNIAwAAIAAANg");
	this.shape_5.setTransform(30.1,10.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,7.8,0,-7.8).s().p("AhIBOIAAg3IBBAAIAAAzIgPAAIAAgFIgjAAIAAAJgAg5A3IAjAAIAAgTIgjAAgAAeBNIAAhbIghAAIAAgPIAhAAIAAgwIAQABQABAAAAAAQABABABAAQAAAAAAABQABAAAAAAIgEAEIAAApIAgAAIAAAPIggAAIAABbgAhDALIAAgLIA3AAIAAALgAhDgKIAAgNIA3AAIAAANgAhNghIAAgPIBJAAIAAAPgAhDg7IAAgNIA3AAIAAANg");
	this.shape_6.setTransform(47.3,10.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,7.8,0,-7.8).s().p("AAEBPIAAhFIgdAAIAAA+IgPAAIAAg+QgKAIgOAJIgMgLQARgKALgIQAPgMAKgRIACgGIgvAAIAAgPIA2AAIAHgaIAOAFIADACQAAADgDACIgFAOIBMAAIAAAPIhRAAQgGANgHAKIgJALIAdAAIAAgZIAPABQABAAABAAQABABABAAQAAAAAAABQABAAAAAAQAAACgDADIAAARIAuAAIAAA3QAAAMgNAEQgLACgJAAIgGgQIAQgBQAGAAABgGIAAglIgeAAIAABFg");
	this.shape_7.setTransform(-30.3,-10.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#C2C2C2","#E6E6E6","#FFFFFF"],[0,0.545,1],0,7.8,0,-7.7).s().p("AAtBAIAMAAQAGgBAAgFIAAguIgmAAIAAATQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAIAeAAIAAAMIglAAQgKAAAAgIIAAgZIgMAAIAABCIgNAAIAAgTIgLADIgIgkIANgDIAGAZIAAgjIgKACIgDgIIgJABIAABGIgOAAIAAhEIgRACIgDACQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgDgMIAKgBIAPgXIgZgSIAIgLIAFADIAQgbIALAGIACACQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAABIgRAWIAKAHIALgQIALAHQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgcAlIASgBIgCgJIAMgCIAHATIAAhKIBaAAIAACFQAAAJgLADQgKADgGAAgAAmAAIAZAAIAAgRIgZAAgAAAAAIAYAAIAAgRIgYAAgAA3gxQABAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQAAACgDADIgHAOIAOAAIAAgcIg/AAIAAAcIANAAQgEgMgFgIIAMgDQAHANADAKIAKAAIAJgXgAhMA9IAFgPIAEgXIANAEIACACQAAACgDACQgDARgEAQg");
	this.shape_8.setTransform(-47.4,-10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.C1_txt, new cjs.Rectangle(-55.1,-18,110.2,36.2), null);


(lib.C1_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCEF00").s().p("AiCCDQg3g2AAhNQAAhMA3g2QA2g3BMAAQBNAAA2A3QA3A2AABMQAAAmgOAhQgOAjgbAZQgaAbgiAOQgiAOglAAQhMAAg2g3gAhDifQgfANgYAYQgZAYgNAfQgOAgAAAjQAAAkAOAgQANAfAZAYQAYAZAfANQAgAOAjAAQAjgBAggNQAfgNAZgZQAZgYANggQANggAAgjQAAgjgOggQgNgfgYgYQgYgYgfgNQgggOgkgBQgjABggAOgAAPB6IAAg2IgdAAIAAA2QAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgEACQgGAAABgGIAAhXIALAAIAAAWIAdAAIAAhHIgdAAIAAAdIAVAAIAAALIg/AAIAAAfIAWAAIAAALIg9AAQgHABAAgHQAAgFAHAAIAcAAIAAg/IALAAIAAAVIAfAAIAAg/IALAAIAAAXIAdAAIAAhgIABgEQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAA2IAfAAIAAgcQAAgGAFAAQAHAAgBAGIAAAcIAcAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAGgGAAIhGAAIAAAfIAXAAIAAALIgXAAIAAAdIAfAAIAAg/IALAAIAAAXIA2AAQAGgBAAAGQAAAGgGAAIg2AAIAAAdIA2AAQAGAAAAAGQAAAFgGAAIhgAAIAAAfIAXAAIAAALIgXAAIAAA2QAAAGgFAAQgGAAAAgGgAA5BgIAAg9IALAAIAAAWIAcAAQAGAAAAAFQAAAHgGgBIgcAAIAAAcQABAGgHAAQgFAAAAgGgAhDBgIAAgTIALAAIAAATQAAAGgGAAQgFAAAAgGgAh5AaQgGAAAAgFQAAgGAGAAIAtAAIAAALgAh5gOQgGAAAAgGQAAgGAGABIA2AAIAAhGQAAgGAFAAQAGAAAAAGIAAAcIAfAAIAAg2IABgEQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAA2IAVAAIAAALIg/AAIAAAfIAWAAIAAALgAhfg4QgHAAAAgGQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIATAAIAAALg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.C1_icon, new cjs.Rectangle(-18.6,-18.6,37.2,37.2), null);


(lib.C1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.C1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.C1_bg, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB4AqQALgCAJgEQgFgFgGgKIgFAAIAAgMIACAAIgFgJIAAALIgZAAIgBAGIAbAAQgBAagFAFQgFAGgJAAIgMgCIgEgOIAOACQAEAAACgCQADgCAAgHIgQAAIAAADIgNAAIAEggIAYAAIAAgIIgMAAIAAgCQgIAEgKACIgEgLIAQgGIgHgHIAMgIIAJAIIAMgLIgjAAIAAgNIA1AAIAAAFIAGAEQAJgDAGgHIAKAIQgFAFgIAFIAGADQAIgEAFgGIALAIIgLAJIAOAFIgHANQgHgCgHgEIAAAEQAAAEABABIACAAIABAAIABAAIABgFIAMAHQgBAHgDABIgFABIgGAAQgJAAgCgCQgFgBAAgKIAAgDIgJAAQgBAJgDACQgDAFgGACIAwAAIAAAKQgFAJgIAIQAJADAKABIgFAOQgOgCgMgHQgLAGgPADgACYAeQAGgFADgEIgRAAQAEAGAEADgABxgUIAIAAIAAATQACgBAEgEQACgDABgNIAUAAQgMgHgIgGQgHAIgKAHgAgmA2IAAgxIANAAIAAAeIAcAAIAAglIgkAAIAAgsIAOAAIAAAfIAWAAIAAgmIANAAIAAAmIAXAAIAAgeIAOAAIAAArIglAAIAAAlIAdAAIAAgeIAOAAIAAAxIgOAAIAAgGIhGAAIAAAGgAikArQAOgIAPgOQANgMAJgLIAMAGIgOARIARAUIgLALQgGgKgKgLQgQAPgOAIgAjhA2IAAhpIAtAAIAABLQAAAPgNAAIgJAAIgDgOIAJABQADAAAAgEIAAg8IgSAAIAABcgAhZA0IgCgOQAHACAJAAIACgBIAAgHIAAhVIAOAAIAABYQAAAKgDAFQgDAEgIAAQgIAAgIgCgAkcAkIAEgBIAAhWIAyAAIAAA8IgkAAIAAAYIAVgDIgFgLIANgGQAFALAGASIgOAGIgBgHQgPAEgYAFgAkKgDIAWAAIAAgLIgWAAgAkKgbIAWAAIAAgLIgWAAgADjgbIA6AeIg6AggAhhAeIAAhGIAOAAIAABGgAikATQAJgGAKgKIgUgNIAJgLIAEADIAHgKIgTAAIAAgOIAYAAIAAgLIAPAAIAAALIAZAAIAAAOIgdAAIgMASIAGAEQAIgKAFgIIAMAHQgHALgMAOQgQAQgLAGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E46C00","#F79A3C"],[0,0.859],0,10.1,0,-10).s().p("AlfBlIAAjJIK/AAIAADJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Btn, new cjs.Rectangle(-35.1,-10,70.4,20.2), null);


(lib.dot_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 3
	this.instance = new lib.dot();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.986,1.986);
	this.instance.alpha = 0.18;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({_off:true},14).wait(4));

	// 2
	this.instance_1 = new lib.dot();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.396,1.396);
	this.instance_1.alpha = 0.301;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true},14).wait(9));

	// 1
	this.instance_2 = new lib.dot();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,4.8,4.8);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLhNIBJALIAZBFIASg+IAkAGIAABWIgVAFIAAhBIgWBIIgeAJIgghXIAABhIgvAOg");
	this.shape.setTransform(139.7,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D96900").s().p("AHJBPQggghAAguQAAgtAgghQAhggAuAAQAuAAAhAgQAhAhAAAtQAAAughAhQghAhgugBQguABghghgAHXBNIAvgOIAAhhIAhBXIAegJIAWhIIAABBIAVgFIAAhWIgkgGIgSA+IgahFIhJgLgACcg/IAlAAIAABpIBSAAIAAATIh3ABgAALg/IB7AAIAAAUIhUAAIAAAgIBIAAIAAASIhJAAIAAAjIBWAAIAAATIh8ABgAhZAPIgbAAIAAAuIgmABIAAh9IBkAAQATAAAMALQANAMAAAPQgBARgLAJQgLAMgPgBIAlAxIgrABgAh0gFIAvAAQAIABAFgFQAHgFABgJQgBgIgFgGQgHgFgHgBIgwAAgAj/APIgbAAIAAAuIgmABIAAh9IBlAAQARAAAMALQAOAMAAAPQgBARgLAJQgMAMgPgBIAmAxIgqABgAkagFIAuAAQAIABAHgFQAGgFAAgJQAAgIgGgGQgGgFgIgBIgvAAgAnQg/IB6AAIAAAUIhUAAIAAAgIBIAAIAAASIhIAAIAAAjIBVAAIAAATIh7ABgAoTgoIgmBmIgogBIgmhlIAABmIgXAAIAAh9IAxAAIAoBfIAihfIA4AAIAAB8IgoABgAEkA9IAAh8IAmAAIAABpIBRAAIAAATgAKPggQgDgCAAgDQAAgFADgDQADgCADAAQAFAAACACQADADAAAFQAAADgDACQgCAEgFAAQgDAAgDgEgAKPgrQgCABABAFQgBADACACQADACADAAQAEAAABgCQAEgCAAgDQAAgFgEgBQgBgDgEAAQgDAAgDADgAKYggIgDgFIgBAAIAAAFIgCAAIAAgLIAEAAQABAAABAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAgBAAIADAFgAKUgmIABAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCAAg");
	this.shape_1.setTransform(85,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(359));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_264 = new cjs.Graphics().p("AnsCNIAAkZIPZAAIAAEZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(264).to({graphics:mask_graphics_264,x:233.2,y:202}).wait(95));

	// Shine
	this.instance = new lib.Shine();
	this.instance.parent = this;
	this.instance.setTransform(136.2,204,2.706,1.099,30,0,0,11.3,35.4);
	this.instance.alpha = 0.75;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(264).to({_off:false},0).to({x:326.2},7).wait(30).to({x:136.2},0).to({x:326.2},7).wait(51));

	// Btn
	this.instance_1 = new lib.Btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(218.1,202,1.402,1.402);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(258).to({_off:false},0).to({x:233.1,alpha:1},6).wait(95));

	// C4_txt
	this.instance_2 = new lib.C4_txt_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(222,133.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(252).to({_off:false},0).to({x:232,alpha:1},6).wait(101));

	// C4_bg
	this.instance_3 = new lib.C4_bg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(246).to({_off:false},0).to({alpha:1},6).wait(107));

	// C3_txt
	this.instance_4 = new lib.C3_txt();
	this.instance_4.parent = this;
	this.instance_4.setTransform(189.4,187.3,1.371,1.371);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(173).to({_off:false},0).to({x:179.4,alpha:1},6).wait(62).to({alpha:0},4).to({_off:true},1).wait(113));

	// C3_icon
	this.instance_5 = new lib.C3_icon();
	this.instance_5.parent = this;
	this.instance_5.setTransform(60.4,187.7,1.32,1.32,0,0,0,-0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(173).to({_off:false},0).to({x:50.4,alpha:1},6).wait(62).to({alpha:0},4).to({_off:true},1).wait(113));

	// line3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FCEF00").ss(1,1,1).p("AAggeIg/A9");
	this.shape_2.setTransform(58.8,153.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FCEF00").ss(1,1,1).p("AgxAyIBjhj");
	this.shape_3.setTransform(57,155.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FCEF00").ss(1,1,1).p("ABFhEIiJCJ");
	this.shape_4.setTransform(55.1,157.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(252,239,0,0.749)").ss(1,1,1).p("AhEBFICJiJ");
	this.shape_5.setTransform(55.1,157.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(252,239,0,0.502)").ss(1,1,1).p("AhEBFICJiJ");
	this.shape_6.setTransform(55.1,157.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(252,239,0,0.251)").ss(1,1,1).p("AhEBFICJiJ");
	this.shape_7.setTransform(55.1,157.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(252,239,0,0)").ss(1,1,1).p("ABFhEIiJCJ");
	this.shape_8.setTransform(55.1,157.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},171).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},68).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).wait(113));

	// line2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FCEF00").ss(1,1,1).p("AAaAAIgzAA");
	this.shape_9.setTransform(169.7,150.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FCEF00").ss(1,1,1).p("AjIAAIGRAA");
	this.shape_10.setTransform(152.2,150.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FCEF00").ss(1,1,1).p("Al3AAILvAA");
	this.shape_11.setTransform(134.7,150.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FCEF00").ss(1,1,1).p("AIoAAIxPAA");
	this.shape_12.setTransform(117.2,150.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(252,239,0,0.749)").ss(1,1,1).p("AonAAIRPAA");
	this.shape_13.setTransform(117.2,150.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(252,239,0,0.502)").ss(1,1,1).p("AonAAIRPAA");
	this.shape_14.setTransform(117.2,150.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(252,239,0,0.251)").ss(1,1,1).p("AonAAIRPAA");
	this.shape_15.setTransform(117.2,150.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(252,239,0,0)").ss(1,1,1).p("AIoAAIxPAA");
	this.shape_16.setTransform(117.2,150.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},168).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},70).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},1).wait(113));

	// line1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FCEF00").ss(1,1,1).p("AATgkIglBJ");
	this.shape_17.setTransform(194.4,108.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FCEF00").ss(1,1,1).p("Ag0BlIBpjJ");
	this.shape_18.setTransform(191,114.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FCEF00").ss(1,1,1).p("AhVClICrlJ");
	this.shape_19.setTransform(187.7,121.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FCEF00").ss(1,1,1).p("AB4jlIjvHL");
	this.shape_20.setTransform(184.3,127.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(252,239,0,0.749)").ss(1,1,1).p("Ah3DmIDvnL");
	this.shape_21.setTransform(184.3,127.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(252,239,0,0.502)").ss(1,1,1).p("Ah3DmIDvnL");
	this.shape_22.setTransform(184.3,127.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(252,239,0,0.251)").ss(1,1,1).p("Ah3DmIDvnL");
	this.shape_23.setTransform(184.3,127.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(252,239,0,0)").ss(1,1,1).p("AB4jlIjvHL");
	this.shape_24.setTransform(184.3,127.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17}]},165).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},73).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[]},1).wait(113));

	// dot
	this.instance_6 = new lib.dot_all();
	this.instance_6.parent = this;
	this.instance_6.setTransform(196.3,104.5,1.521,1.521);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(156).to({_off:false},0).wait(85).to({alpha:0},4).to({_off:true},1).wait(113));

	// C3_bg
	this.instance_7 = new lib.C3_bg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(170,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(151).to({_off:false},0).to({x:150,alpha:1},5).wait(85).to({alpha:0},4).to({_off:true},1).wait(113));

	// C2_icon
	this.instance_8 = new lib.C2_icon();
	this.instance_8.parent = this;
	this.instance_8.setTransform(57.7,209.4,1.362,1.362,0,0,0,0,0.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(100).to({_off:false},0).to({x:42.7,alpha:1},6).wait(40).to({alpha:0},4).to({_off:true},1).wait(208));

	// C2_txt
	this.instance_9 = new lib.C2_txt();
	this.instance_9.parent = this;
	this.instance_9.setTransform(129.9,208,1.244,1.244);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(100).to({_off:false},0).to({x:114.9,alpha:1},6).wait(40).to({alpha:0},4).to({_off:true},1).wait(208));

	// line2
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FCEF00").ss(1,1,1).p("AAbAAIg1AA");
	this.shape_25.setTransform(210.3,222.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FCEF00").ss(1,1,1).p("AhEAAICJAA");
	this.shape_26.setTransform(206.2,222.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FCEF00").ss(1,1,1).p("AhuAAIDdAA");
	this.shape_27.setTransform(202,222.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FCEF00").ss(1,1,1).p("AiXAAIEvAA");
	this.shape_28.setTransform(197.9,222.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FCEF00").ss(1,1,1).p("AjBAAIGDAA");
	this.shape_29.setTransform(193.7,222.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FCEF00").ss(1,1,1).p("ADrAAInVAA");
	this.shape_30.setTransform(189.5,222.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(252,239,0,0.749)").ss(1,1,1).p("AjqAAIHVAA");
	this.shape_31.setTransform(189.5,222.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(252,239,0,0.502)").ss(1,1,1).p("AjqAAIHVAA");
	this.shape_32.setTransform(189.5,222.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(252,239,0,0.251)").ss(1,1,1).p("AjqAAIHVAA");
	this.shape_33.setTransform(189.5,222.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(252,239,0,0)").ss(1,1,1).p("ADrAAInVAA");
	this.shape_34.setTransform(189.5,222.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25}]},95).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},46).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[]},1).wait(208));

	// line1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FCEF00").ss(1,1,1).p("AAUgmIgnBN");
	this.shape_35.setTransform(226.6,195.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FCEF00").ss(1,1,1).p("AgmBNIBNiZ");
	this.shape_36.setTransform(224.6,199.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FCEF00").ss(1,1,1).p("Ag5BzIBzjl");
	this.shape_37.setTransform(222.7,203.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FCEF00").ss(1,1,1).p("ABOiYIibEx");
	this.shape_38.setTransform(220.8,207);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(252,239,0,0.749)").ss(1,1,1).p("AhNCZICbkx");
	this.shape_39.setTransform(220.8,207);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(252,239,0,0.502)").ss(1,1,1).p("AhNCZICbkx");
	this.shape_40.setTransform(220.8,207);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(252,239,0,0.251)").ss(1,1,1).p("AhNCZICbkx");
	this.shape_41.setTransform(220.8,207);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(252,239,0,0)").ss(1,1,1).p("ABOiYIibEx");
	this.shape_42.setTransform(220.8,207);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35}]},92).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},51).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[]},1).wait(208));

	// dot
	this.instance_10 = new lib.dot_all();
	this.instance_10.parent = this;
	this.instance_10.setTransform(228.6,191.6,1.521,1.521);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(83).to({_off:false},0).wait(63).to({alpha:0},4).to({_off:true},1).wait(208));

	// C2_bg
	this.instance_11 = new lib.C2_bg();
	this.instance_11.parent = this;
	this.instance_11.setTransform(180,125);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(78).to({_off:false},0).to({x:150,alpha:1},5).wait(63).to({alpha:0},4).to({_off:true},1).wait(208));

	// C1_icon
	this.instance_12 = new lib.C1_icon();
	this.instance_12.parent = this;
	this.instance_12.setTransform(62.9,208.4,1.32,1.32,0,0,0,0,0.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(30).to({_off:false},0).to({x:42.9,alpha:1},7).wait(37).to({alpha:0},4).to({_off:true},1).wait(280));

	// C1_txt
	this.instance_13 = new lib.C1_txt();
	this.instance_13.parent = this;
	this.instance_13.setTransform(163.5,208.2,1.244,1.244,0,0,0,0.1,0.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(30).to({_off:false},0).to({x:143.5,alpha:1},7).wait(37).to({alpha:0},4).to({_off:true},1).wait(280));

	// line2
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FCEF00").ss(1,1,1).p("AgMAAIAZAA");
	this.shape_43.setTransform(262.6,221.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FCEF00").ss(1,1,1).p("AhQAAIChAA");
	this.shape_44.setTransform(255.8,221.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FCEF00").ss(1,1,1).p("AiTAAIEnAA");
	this.shape_45.setTransform(249,221.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FCEF00").ss(1,1,1).p("AjXAAIGvAA");
	this.shape_46.setTransform(242.2,221.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(252,239,0,0.749)").ss(1,1,1).p("AjXAAIGvAA");
	this.shape_47.setTransform(242.2,221.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(252,239,0,0.502)").ss(1,1,1).p("AjXAAIGvAA");
	this.shape_48.setTransform(242.2,221.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(252,239,0,0.251)").ss(1,1,1).p("AjXAAIGvAA");
	this.shape_49.setTransform(242.2,221.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(252,239,0,0)").ss(1,1,1).p("AjXAAIGvAA");
	this.shape_50.setTransform(242.2,221.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_43}]},27).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},44).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[]},1).wait(280));

	// line1
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FCEF00").ss(1,1,1).p("AAHASIgNgj");
	this.shape_51.setTransform(240.8,162.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FCEF00").ss(1,1,1).p("AgihYIBFCx");
	this.shape_52.setTransform(243.6,169.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FCEF00").ss(1,1,1).p("Ag+ifIB9E/");
	this.shape_53.setTransform(246.4,176.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FCEF00").ss(1,1,1).p("AhajmIC1HN");
	this.shape_54.setTransform(249.2,183.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FCEF00").ss(1,1,1).p("AB3EuIjtpb");
	this.shape_55.setTransform(251.9,190.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(252,239,0,0.749)").ss(1,1,1).p("Ah2ktIDtJb");
	this.shape_56.setTransform(251.9,190.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(252,239,0,0.502)").ss(1,1,1).p("Ah2ktIDtJb");
	this.shape_57.setTransform(251.9,190.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(252,239,0,0.251)").ss(1,1,1).p("Ah2ktIDtJb");
	this.shape_58.setTransform(251.9,190.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(252,239,0,0)").ss(1,1,1).p("AB3EuIjtpb");
	this.shape_59.setTransform(251.9,190.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_51}]},23).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},47).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[]},1).wait(280));

	// dot
	this.instance_14 = new lib.dot_all();
	this.instance_14.parent = this;
	this.instance_14.setTransform(239.6,158.5,1.521,1.521);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(6).to({_off:false},0).wait(68).to({alpha:0},4).to({_off:true},1).wait(280));

	// C1_bg
	this.instance_15 = new lib.C1_bg();
	this.instance_15.parent = this;
	this.instance_15.setTransform(120,125);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:150,alpha:1},6).wait(68).to({alpha:0},4).to({_off:true},1).wait(280));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120,125,300,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/C1.png?1482286928549", id:"C1"},
		{src:"images/C2.png?1482286928549", id:"C2"},
		{src:"images/C3.png?1482286928549", id:"C3"},
		{src:"images/C4.png?1482286928549", id:"C4"},
		{src:"images/C4_txt.png?1482286928549", id:"C4_txt"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;