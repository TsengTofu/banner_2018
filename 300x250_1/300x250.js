(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.C1_bg = function() {
	this.initialize(img.C1_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,174);


(lib.C2_bg = function() {
	this.initialize(img.C2_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,204);


(lib.C3_bg = function() {
	this.initialize(img.C3_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,204);


(lib.Left_foot = function() {
	this.initialize(img.Left_foot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,115);


(lib.Right_foot = function() {
	this.initialize(img.Right_foot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,111);// helper functions:

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


(lib.Right_foot_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Right_foot();
	this.instance.parent = this;
	this.instance.setTransform(-51.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Right_foot_1, new cjs.Rectangle(-51.5,-55.5,103,111), null);


(lib.Left_foot_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Left_foot();
	this.instance.parent = this;
	this.instance.setTransform(-55.5,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Left_foot_1, new cjs.Rectangle(-55.5,-57.5,111,115), null);


(lib.C3_txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#252525"],[0,1],0,8.6,0,-8.6).s().p("AgyBWIgJAAIAEgUIACAAQABAAACgHIAZhNIAZAAIgaBUQgEAUgQAAIgEAAgAgIBWIgPAAIAFgWIAIAAQADAAACgGIARhgIAaAAIgUBnQAAAVgWAAIgEAAgAAiBCIAJhUIAbAAIgHBKQgDAKAGAAIADAAIgEAUIgNAAIgDAAQgTAAAEgUgAhfBWIAVhwIgLAAIAFgXIABAAQAFAAAFgHIASgdIAfAAIgYAnIgZCEgAA2geIAJgaIg9AAIgKASQgEAIgNgBIgPAAIAEgVIADAAQAGAAADgHIARgaIAbAAIgEAHIBQAAIgPAwg");
	this.shape.setTransform(-8.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#252525"],[0,1],0,8.6,0,-8.6).s().p("AhfBWIALhDIAdAAIgIAtIAnAAIAKg3IhEAAIAQhWIAdAAIgLBAIAlAAIAOhIIAbAAIgNBIIAhAAQAHABACgJIAJg4IAcAAIgLA/QgGAUgVADIgtAAIgKA3IAgAAQAIAAAAgIIAIglIAbAAIgJAxQgDARgYABg");
	this.shape_1.setTransform(-28,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","#252525"],[0,1],0.1,8.7,0.1,-8.7).s().p("AAjBXIgwAAIADgVIAkAAQAGAAADgIIABgKIiCAAIAEgXIAIAAIAGgjICkAAIgFAVIgOAAIgCAOIAOAAIgDAXIgPAAIgEASQgCAVgTAAIgDAAgAg3AZIBgAAIACgOIhgAAgAhBBXIgjAAIADgVIAYAAQAMABAEgGIAGgJIAfAAIgSAYQgIALgRAAIgCAAgAgdgSIg1AAIAEgUIApAAQAKAAAAgFIACgHIAbAAIgIAVQgDALgPAAIgFAAgAARgcIgCgXIAcAAIACAHQgCAHANgCIAmAAIgEAVIg7AAIgDAAQgLAAAAgKgAhMgtIAFgiIBHAAIABgHIAeAAIAAAHIBGAAIgIAgIgYAAIABgLIh1AAIgCANg");
	this.shape_2.setTransform(-47.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#252525"],[0,1],0,8.4,0,-8.5).s().p("AhFBVIAWh4IgHAAIgUBvIgWAAIAciZIAVAAIgDARIAIAAIAEgYIAZAAIgEAYIAGAAIgFAZIgGAAIgWB4gAgjBRIAEgWIAqAAIAHgkIgpAAIAEgXIApAAIAHgiIgMAAIgEAIQgEAMgKgBIgQAAIAEgUQAFABACgHIANgkIAaAAIgIAXIAIAAIAEgeIAdAAIgGAeIAlAAIgEAUIglAAIgGAiIAkAAIgEAXIgkAAIgHAkIAmAAIgEAWg");
	this.shape_3.setTransform(48.6,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","#252525"],[0,1],-0.1,8.7,-0.1,-8.7).s().p("AhfBXIAVhzIgKAAIAEgWIAEAAQAHAAACgGIARgeIAYAAIgSAnIgZCGgAArBUIhlAAIAeimIB8AAIgbCRQgCAVgWAAIgCAAgAgeA9IBFAAQAIACAAgIIAVhzIhLAAgAgXA3IANhDIASAAIACgMIgSAAIADgWIASAAIABgJIAeAAIgDAJIAVAAIgFAWIgTAAIgCAMIARAAIgJA1QgDAOgSAAgAADAiIALAAQAIAAABgGIADgTIgRAAg");
	this.shape_4.setTransform(30.4,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","#252525"],[0,1],0,8.5,0,-8.5).s().p("AAmBVIgoAAIADgWIAlAAQAGAAAAgFIAVhuIgVAAQgHAHgSAAIgKAAIAEgXIAFAAQAFAAAGgGIAMgKIAfAAIgKALIAiAAIgZCEQgCAagbAAIgEAAgAhfBUIAZiGIgIAAIAEgYIAHAAQAGAAACgDIAHgHIAbAAIgGALIApAAIgYCJQgEAUgVAAgAg/A/IARAAQAEAAABgEIAIgtIgVAAgAgygIIAVAAIAIgpIgWAAgAAHAyIgNAAIAGgZIAGAAQAFABAAgGIATg2IAaAAIgWBDQgEARgUAAIgDAAg");
	this.shape_5.setTransform(10.7,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FAE25E","#F8CF00"],[0,0.996],-3,-17.2,-3,17.3).s().p("AqdCtIAAlZIU7AAIg2FZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.C3_txt2, new cjs.Rectangle(-66.9,-17.2,134,34.5), null);


(lib.C3_txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGUBXIADgTIABAAQAEAAAAgDIAGgfIghAAIAFgWIBXAAIgEAWIggAAIgGAlQgCAQgTAAgAlnBXIgZAAIAEgWIAIAAQAHABADgIIANgdIAeAAIgRAnQgGATgPAAIgCAAgAHgBXIgYAAQgPAAACgMIABgjIAXAAIgBAXQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAIAEAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABgBIAehUIAaAAIgDAKIASAAIgFBLQAAAGAFgCIACAAIgEATIgPAAQgPABACgVIAEg4IgTA3QgIAWgPAAIAAAAgAAvBDIAGgkIAOAAIgFAbQgCAHAIAAIAkAAIAFgdIgmAAIAEgUIBkAAIgDAUIglAAIgGAdIAmAAIgFAVIhiAAIgEAAQgTAAAGgTgAF4BWIADgTIADAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAgBIAIgXIAVAAIgJAgQgEAOgOAAgAAQBWIAMg9IgWAAIAEgWIAbgdIgWAAIAEgUIAhglIAgAAIgdAlIAfAAIgsA0IAIAAQAFAAAAgEIABgIIATAAIgCAMQgDAVgQgCIgGAAIgLA9gAo+BWIAPhQICqAAIgLA5QgDAZgPgDIgVAAIAEgSIADAAQAFABAAgGIAHgkIhzAAIgKA8gAlJBVIAEgWIAsAAIAJgvIgpAAIAEgVIApAAIAIgvIgpAAIAEgWIApAAIACgHIAaAAIgBAHIArAAIgEAWIgqAAIgJAvIApAAIgEAVIgpAAIgIAvIAsAAIgEAWgAgFBUIADgSIABAAQACAAAAgFIAGgeIAOAAIgHAlQgCAQgMAAgAgvBUIiLAAIAeijIChAAIgaCOQgCAVgUAAIgEAAgAibA+IBjAAQAHACACgJIADgRIhrAAgAiTAPIBrAAIAFgaIhqAAgAiKggIBrAAIAEgYIhqAAgADYBTIgfAAIADgUIASAAQAGAAABgEIAGgKIAdAAIgLAYQgFAKgMAAIgEAAgAE6BMIgIgbIAeAAIADAKQAAADAEAAIAOAAIgDAUIgcAAIgDAAQgHAAgCgGgAnHBPIhSAAIAJgvIBiAAIgFAhQgCAPgQAAIgCgBgAn5A7IAkAAQAHABAAgEIABgGIgqAAgADAApIAEgVIAHAAIAShcIApAAIADgOIAaAAIgDAOIASAAIADgNIAaAAIgDANIArAAIgRBbIAHAAIgEAWgAEPAUIASAAIAFgYIgSAAgADmAUIAQAAIAFgYIgQAAgAE8ATIATAAIAEgXIgTAAgAFEgaIATAAIAEgXIgTAAgAEZgaIARAAIAEgXIgRAAgADvgaIAQAAIAEgXIgQAAgAlqAHIgDgeIAcAAIACATQAAAFAFgBIAQAAIgEAWIgeAAIgDAAQgMAAABgPgACYAIIAAgaIAOggIAWAAIgNAfIABAbgAB2AIIAAgcIAMgeIAZAAIgOAdIABAdgABTAIIgCgaIANggIAYAAIgNAhIACAZgAGGAGIAEgUIBZAAIgEAUgAmYAAIiSAAIAJgwICjAAIgFAbQgDAVgRAAIgBAAgAoKgVIBlAAQAFACAAgFIAAgEIhpAAgAGMgWIAEgVIAfAAIACgMIgfAAIADgUIAgAAIABgIIAaAAIgCAIIAgAAIgEAUIgfAAIgCAMIAfAAIABgGIACAAQADAAAFgJIALgZIAbAAIgEAHIAqAAIgMAzIgaAAIAIgeIgUAAIgJARQgFAMgMgCIgMAAIgBAGgAlggvIAAgiIAbAAIABAXQgCAGAKgBIALAAIgEAWIgaAAIgCABQgPAAAAgRgAokg2IAEgUIBIAAIABgHIAaAAIgBAHIBHAAIgEAUgABag5IADgVIBlAAIgEAVg");
	this.shape.setTransform(3.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AqdCEIAAkHIU7AAIg2EHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.C3_txt1, new cjs.Rectangle(-66.9,-13.2,134,26.5), null);


(lib.C3_bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.C3_bg();
	this.instance.parent = this;
	this.instance.setTransform(-111.5,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.C3_bg_1, new cjs.Rectangle(-111.5,-102,223,204), null);


(lib.C2_txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#252525"],[0,1],0,12.5,0,-12.6).s().p("AgVBYIAQiJICIAAIgLBXQAAAcgggCIhJAAIgBAUQgCAMALgBIBaAAIgDAeIhsAAIgIABQgYAAAJgmgABEAhIAPAAQAHABgBgIIAGguIgTAAgAAUAhIAQAAIAHg1IgRAAgAhmB9IAIg1IgEAAIgIAlQgCARgVgCIgIAAIAEgfQAHAAABgIIAKguIAYAAIABgGIgjAAIAEgfIAggmIgbAAIAEggIAtg2IAsAAIgsA4IAvAAIg3BCIAIAAQAMABAAgHIABgIIAhAAIgCAWQgEAbgVgCIgHAAIAAAGIAaAAIgBAsQgCALAGgBIgEAfIgBAAQgaACAAgVIABghIgDAAIgHA1gAAWg3IgfAAIAEgaIALAAQALAAACgGIADgGIgbAAIADggICMAAIgFAmQgEAdgeACIgdAAIACgZIAQAAIAEgEIABgIIgkAAIgIARQgMAVgOAAIgBAAg");
	this.shape.setTransform(-40.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#252525"],[0,1],0,12.3,0,-12.2).s().p("AgMB6IgYAAIACgZQALACAAgJIAHg3IgGAAIgOA8QgGAcgSgCIgUAAIADgZQAIABAEgOIAKgwIgKAAIADgcIANAAIABgGIAiAAIgCAGIAlAAIgKBRQAAAigUAAIgDAAgAAcB5IgTAAIADgbQAKABACgLIALgxIgKAAIADgcIAOAAIAAgGIAiAAIgBAGIAkAAIgMBcQgDAVgRABIgXAAIAEgaQAGACAAgJIAHg1IgEAAIgPA3QgHAfgQAAIgDAAgAh9B4IAViqIgUAAIAEgeIAVAAIAEgpIAhAAIgEApIARAAIgEAeIgRAAIgUCqgAgVgEIgnAAIAEgeIAYAAQAFAAADgIIAKgoIgeAAIADgeIAhAAIABgIIAlAAIgCAIIBhAAIgJBOQgEAegYAAIhGAAIADgeIAzAAQAJACABgQIAFgiIhCAAIgOA2QgFAYgUAAIgDAAg");
	this.shape_1.setTransform(43.7,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","#252525"],[0,1],0,12.3,0,-12.2).s().p("AhtB6IgeAAIAFgiIAJAAQAIACADgMIBFimIhEAAIAFgiID3AAIgDAiIiIAAIgIAVIAoAAIgXC8IgpAAIATiaQgDgCgEACIgzB9QgMAfgVAAIgFgBgABUB5QgegCAAgmIAAiTIAqgBIACB+QAAAcAFAAIAJABIgEAhg");
	this.shape_2.setTransform(-12.2,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#252525"],[0,1],0,12.4,0,-12.3).s().p("AA4B7IgRAAIg4gMIgsAKIgCAAIgbACIguAAIADgeIA8AAIAKgCIgpgLQgHAAACgKIAGgyIgVAAIAEgeIAVAAIACgJIAnAAIgCALICAAAIACgMIAkAAIgBAKIATAAIgDAgIgVAAIgFAtQAAAJgMAEIgfALIANACIAuAAIgEAegAhCAxQgCAGAFACIA/ARIA2gRIABAAQAEgCABgFIADgcIh+AAgAgKgdQgUgBACgRIADgZIAnAAIgBAIQAAABAAAAQAAABABAAQAAAAABAAQABAAAAAAIAgAAIgEAhgAg9gfIg5AAIAEgdIAhAAQAJABgBgFIABgIIAjAAIgEAZQAAAQgTAAIgBAAgABLgfQgRAAACgVIACgUIAmAAIgBAHQABADAFAAIAaAAIgEAfgABuhTIjdAAIADgfIDLAAQAFAAAAgDIABgFIAkAAIgCAUQgCATgVAAIgCAAg");
	this.shape_3.setTransform(15,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FAE25E","#F8CF00"],[0,0.996],-3,-17.2,-3,17.3).s().p("AqdCtIAAlZIU7AAIg2FZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.C2_txt2, new cjs.Rectangle(-66.9,-17.2,134,34.5), null);


(lib.C2_txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFjBjIgcAAIADgYIALAAQAGABAAgFIAAgFIgbAAIgBALQgCAWgVAAIgUAAIADgYIAGAAQADACAAgGIAPhmIBZAAIgQBuQAAAUgSAAIgDAAgAFDArIAbAAIACgOIgbAAgAFJAFIAbAAIABgLIgaAAgAF/BRIAKhMIAfAAIgCAQIAYAAQAGABABgHIABgKIAdAAIgDAbQABARgXgDIgoAAIgDAWQgCAJAKgCIAyAAIgEAYIhDAAIgDAAQgUAAAEgSgACWBjIACgaIAJAAQAGAAABgEIAXh4IgTAAIAEgcIATAAIACgPIAhAAIgDAOIAyAAIgVCdQgEASgUACIgcAAIADgYIANAAQAEAAABgGIARh3IgUAAIgZCDQgEAUgaAAgAm4BjQgPAAgFgLQgHALgKAAIgTAAIACgWIAGAAQAFABAAgHIAOhkIgKAAIADgZIApAAIgQB1QAGAMAOAAICCAAIgDAYgAkUBhIADgWIBQAAIADgXIhKAAIADgWIBKAAIACgJIAeAAIAAAJIBMAAIgDAWIhMAAIgEAXIBQAAIgCAWgAA7BaIADgZIAeAAIATiBIgdAAIAEgaIBYAAIgFAaIgaAAIgTCBIAcAAIgDAZgAAHBPIgQgoIgbAoIgiAAIAug6IgdgyIAnAAIAOAiIAbgiIAhAAIgsA0IAdA4gAk+BCIh4AAIAKhGICHAAIgIA2QgBARgNAAIgDgBgAmVAqIBFAAQAGAAABgHIACgSIhKAAgAhgAPIgsAAIADgVIAfAAQABAAABAAQAAAAABgBQAAAAAAAAQABgBAAgBIALhRIAcAAIgMBWQAAAUgSAAIgDgBgAjvAPIgZAAIADgVIANAAQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAgBIABgMIgPAAIAEgWIAOAAIAEgUIgPAAIAEgYIBxAAIgDAYIgNAAIgDAUIAMAAIgDAWIgKAAIgGAkIgcAAIAGgkIggAAIgCAPQgDAVgSAAIgBAAgAjTgrIAdAAIADgUIgeAAgAGNgTIAMhOIAdAAIgBAQIAXAAQAHABAAgHIABgLIAdAAIgEAbQACASgVgDIgpAAIgDAWQgCAIAKgBIAyAAIgEAZIhDAAIgEAAQgUAAAEgRgAmxgOIAFgZIA7AAIADgUIgXAAIgGAKQgDAEgJAAIgVAAIADgXIAGAAQAGABACgGIAMgUIAcAAIgFAJIAOAAIABgMIAhAAIgCAMIAwAAIgEAZIgwAAIgCAUIA0AAIgEAZgAiJgRIAJhHIAbAAIgJBHgAFsgoIhEAAIAFgaIAjggIAnAAIgiAiIASAAQAHABAAgHIABgLIAeAAIgDAXQABATgaAAIgFgBgAnUg+IAFggIAgAAIgEAgg");
	this.shape.setTransform(7.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AqTCRIAAkhIUnAAIgiEhg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.C2_txt1, new cjs.Rectangle(-65.9,-14.4,132,28.9), null);


(lib.C2_bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.C2_bg();
	this.instance.parent = this;
	this.instance.setTransform(-111.5,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.C2_bg_1, new cjs.Rectangle(-111.5,-102,223,204), null);


(lib.C1_txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#252525"],[0,1],0,12.3,0,-12.2).s().p("AhVB7IgtAAIAEgeIAaAAQAIACACgGIAHgQIAqAAIgPAjQgGAPgTAAIgEAAgAA4BxIgOgoIAqAAIAFAQQABAEAGAAIAVAAIgDAdIgnAAIgDAAQgNAAgDgJgAh6A+IAEgeIAKAAIAQiFIA8AAIADgVIAlAAIgEAVIAbAAIACgUIAmAAIgDAUIA+AAIgPCDIAKAAIgFAggAgKAgIAZAAIAEgjIgZAAgAhHAgIAZAAIADgkIgXAAgAA2AeIAbAAIADgiIgbAAgAA9gjIAcAAIADghIgbAAgAgBgjIAXAAIAFghIgZAAgAg+gjIAYAAIADghIgYAAg");
	this.shape.setTransform(-13.1,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#252525"],[0,1],0,12.3,0,-12.2).s().p("Ag+BeIAGgyIAVAAIgFAmQgDAMALgCIA0AAIAFgqIg1AAIADgdICQAAIgDAdIg2AAIgFAqIA1AAIgDAeIiNAAIgHABQgbAAAGgdgAhoB6IALhYIgfAAIAEgfIAkgrIggAAIAEgcIAtg2IAuAAIgnA1IAtAAIg7BLIALAAQAIABgBgHIACgLIAaAAIgCASQgCAfgWgDIgJAAIgLBXgAiJB4IAEgbIACAAQAEACAAgJIAFgsIAUAAIgGA2QgDAXgRABgABVAKIgEgmIASgwIAhAAIgQAvIADAngAAjAJIgDgoIAQgtIAkAAIgSAsIAEApgAgPAJIgEglIAQgwIAhAAIgQAxIAGAkgAgLhVIADgeICSAAIgEAeg");
	this.shape_1.setTransform(-40,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","#252525"],[0,1],0,12.3,0,-12.2).s().p("AAfBgIAajaIAkAAIgOB4IADAAQAEAAABgHIAShiIAeAAIgRBrQgEAmgegGIgKAAIgGA1QgCAIAJgBIAjAAIgEAfIg4AAIgEAAQgUAAAFgbgAhjB7IACgVIglAAIADgfIAnAAIABgNIgkAAIAJhSIAlAAIABgMIgdAAIAEgqIgGAAIAEghIAHAAIABgJIAlAAIgBAJIAZAAIABgLIAkAAIgCALIADAAIgCAgIgGAAIgGArIgdAAIgBANIAjAAIgIA8QAAAYgagCIgLAAIgBALIAhAAIgEAgIgiAAIgCAVgAhfAdIAHAAIADgVIgHAAgAgyAcIACAAQADAAACgGIACgPIgHAAgAhGhBIAZAAIABgOIgZAAgAgQB3IARiZIgGAAIAEgfIABAAQAEAAACgGIAOgzIAiAAIgOAxIgXDAg");
	this.shape_2.setTransform(42.7,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#252525"],[0,1],0,12.4,0,-12.4).s().p("AhSB8IgyAAIADgcIAsAAQAHAAAHgHIAGgGIg7AAIANhtIBgAAIABgNIhkAAIAEgeIAbAAIACgNIgbAAIADgdIAbAAIABgLIAmAAIgBALIBrAAIABgMIAlAAIgBAMIAdAAIgDAdIgeAAIgCANIAfAAIgDAeIhmAAIgCANIBiAAIgJBJQACAogvgEIgNAAIADAGIADAAQAFAGAFAAIAoAAIgCAbIg+AAQgPgCgHgHIgUgeIgUAAIggAcQgNANgRAAIgDAAgAAMA3IA8AAQACgBAAgDIABgIIg9AAgAhTA3IA5AAIABgMIg4AAgAARANIA9AAIACgMIg9AAgAhOANIA4AAIACgMIg5AAgAguhFIBrAAIACgNIhrAAg");
	this.shape_3.setTransform(15.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FAE25E","#F8CF00"],[0,0.996],-3,-17.2,-3,17.3).s().p("AqdCtIAAlZIU7AAIg2FZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.C1_txt2, new cjs.Rectangle(-66.9,-17.2,134,34.5), null);


(lib.C1_txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGxBKIgVgPIAZh1IAbgPIBBAAIAVAPIgZB1IgbAPgAG8AxIA2AAIAVhhIg3AAgAiLBKIgVgPIAYh1IAcgPIBBAAIAVAPIgZB1IgcAPgAiBAxIA3AAIAUhhIg2AAgAmEBKIgWgPIAah1IAagPIBBAAIAVAPIgZB1IgaAPgAl6AxIA3AAIAUhhIg3AAgAoQBKIgVgPIAZh1IAagPIA7AAIAWAPIgHAdIgdAAIAEgTIgxAAIgUBhIAxAAIAEgSIAcAAIgGAcIgbAPgAEFBJIAfiRIBZAAIAVAOIgYB1IgcAOgAEoAwIA2AAIAUheIg2AAgADUBJIgEggIg3AAIgRAgIgcAAIBSiRIAeAAIAVCRgACnAQIAlAAIgHgzIgBAAgAA+BJIgTg3IgSAAIgMA3IgcAAIAeiRIBOAAIAVAOIgNA+IgbAOIAUA3gAAegFIAsAAIAJgpIgsAAgAkIBJIAeiRIAdAAIgZB4IAxAAIgEAZg");
	this.shape.setTransform(1.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AqTCEIAAkHIUnAAIg2EHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.C1_txt1, new cjs.Rectangle(-65.9,-13.2,132,26.5), null);


(lib.C1_bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.C1_bg();
	this.instance.parent = this;
	this.instance.setTransform(-111.5,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.C1_bg_1, new cjs.Rectangle(-111.5,-87,223,174), null);


(lib.Btn_Original = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9CF00").s().p("AhaBNIggAAIADgSIASAAQAHAAAAgGIAUh/IAXAAIgVCGQgBASgPAAIgCgBgAB4BNIACgTIBOAAQAFABAAgFIAEgXIhYAAIACgUIBZAAIADgRIhWAAIADgVIBVAAIADgUIhUAAIADgWIB6AAQABAAABAAQABAAAAAAQABAAAAgBQAAAAAAgBIAAgDIAZAAIgCALQgBARgRgBIgXAAIgDAUIAmAAIgDAVIgmAAIgDARIAlAAIgCAUIgmAAIgEAcQgFAQgRACgAjkBNIADgSIAeAAQAIABADgGIAqhOIAXAAIAAAEIgZAxIAIAcQACAFABgBIABAAIgCAOIgMAAQgFABgDgGIgGgNIgKAOQgFAGgGAAgAlABNIAXiZIBIAAIgUCCQgDARgTAAIgdAAIgBAGgAklA0IATAAQAFAAABgFIAPhmIgXAAgAA+A2IARhsIhMAAIgQBtQgCAXgXgBIgSAAIADgWIAJAAQAFAAAAgGIAQhnIgLAAIADgXICMAAIgUB/QAAAFAEAAIAHAAIgDAWIgTAAIgCAAQgSAAAEgXgAmTBJIAXiVIBOAAIgMBOQgCAUgSgCIglAAIgEAiIAXAAQAGAAAAgGIADgSIAXAAIgEAbQgEAQgVAAgAlvABIAYAAQAFAAAAgFIACgOIgcAAgAlogmIAcAAIADgRIgcAAgAFEgmIBQA0IhgA1gAh+A0IATh7IAXAAIgTB7gAjFArIgaAAIADgTIAHAAQAKABADgFIAJgQIgaAAIADgSIAVgjIgPAAIADgSIAjAAIABgHIAXAAIAAAGIAiAAIgEATIgzAAIgVAjIAHAAIAPgaIAaAAIgoBIQgEALgLAAIgCAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AoRCOIA2kbIPtAAIAAEbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Btn_Original, new cjs.Rectangle(-52.9,-14.2,106,28.5), null);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LOGO
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9D000").s().p("Ak8DsIAAnXIJ5AAIAAHXgAhwB2ID0AAIh4hkgAi4hrQgOANAAAXIAACNQAAAVAOAOQAPAOAUgBIAQAAIAxgnQAGgGACgHQACgFAAgIIAAgjIgxAAIAAAwQAAAFgEAEQgDADgFABQgFgBgEgDQgDgEAAgFIAAiHQAAgGADgDQAEgDAFAAQAFAAADADQAEAEAAAFIAAAwIAxAAIAAgyQAAgWgOgOQgQgPggAAQggAAgQAPgABMhHIAiAAIAACbIAoAiIAPAAIAAi9IAiAAIAAguIh7AAgABZBEIgri5IhEAAIgoCzIBKg8gADRhyQgDAEAAAEQAAAFADADQADADAFAAQAEAAADgDQAEgDAAgFQAAgEgEgEQgDgCgEgBQgFABgDACgAgBgJIANhEIANBEgADShjQgCgCAAgFQAAgEACgCQADgDAEAAQADAAADADQADACAAAEQAAAFgDACQgDADgDgBQgEABgDgDgADehjIgEgGQABAAABAAQAAgBABAAQAAgBABAAQAAgBAAAAQAAgEgFAAIgFAAIAAANIACAAIAAgGIADAAIADAGIACAAgADZhrIgDAAIAAgDIADAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAAAABIgBABIgCAAg");
	this.shape.setTransform(44.2,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221916").s().p("Ah+B4IB8hkIB4BkgAijB4QgVABgOgOQgOgOgBgVIAAiNQABgXAOgNQAQgPAgAAQAgAAAPAPQAPAOAAAWIAAAyIgxAAIAAgwQAAgFgEgEQgEgDgEAAQgFAAgEADQgEADABAGIAACHQgBAFAEAEQAEADAFABQAEgBAEgDQAEgEAAgFIAAgwIAxAAIAAAjQAAAIgCAFQgDAHgFAGIgyAngACIB4IgpgiIAAibIghAAIAAguIB6AAIAAAuIgiAAIAAC9gAgCAEIhLA8IApizIBDAAIAsC5gAgPgHIAaAAIgNhEgADChgQgDgDAAgFQAAgEADgEQAEgCAEgBQAFABADACQADAEAAAEQAAAFgDADQgDADgFAAQgEAAgEgDgADEhuQgCACgBAEQABAFACACQACADAEgBQAEABADgDQADgCgBgFQABgEgDgCQgDgDgEAAQgEAAgCADgADOhhIgEgGIgCAAIAAAGIgCAAIAAgNIAFAAQAEAAABAEQAAAAgBABQAAAAAAABQgBAAAAABQgBAAgBAAIAEAGgADIhpIACAAIACAAIACgBQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIgCAAg");
	this.shape_1.setTransform(45.7,35.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(257));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_178 = new cjs.Graphics().p("AhaBNIggAAIADgSIASAAQAHAAAAgGIAUh/IAXAAIgVCGQgBASgPAAIgCgBgAB4BNIACgTIBOAAQAFABAAgFIAEgXIhYAAIACgUIBZAAIADgRIhWAAIADgVIBVAAIADgUIhUAAIADgWIB6AAQABAAABAAQABAAAAAAQABAAAAgBQAAAAAAgBIAAgDIAZAAIgCALQgBARgRgBIgXAAIgDAUIAmAAIgDAVIgmAAIgDARIAlAAIgCAUIgmAAIgEAcQgFAQgRACgAjkBNIADgSIAeAAQAIABADgGIAqhOIAXAAIAAAEIgZAxIAIAcQACAFABgBIABAAIgCAOIgMAAQgFABgDgGIgGgNIgKAOQgFAGgGAAgAlABNIAXiZIBIAAIgUCCQgDARgTAAIgdAAIgBAGgAklA0IATAAQAFAAABgFIAPhmIgXAAgAA+A2IARhsIhMAAIgQBtQgCAXgXgBIgSAAIADgWIAJAAQAFAAAAgGIAQhnIgLAAIADgXICMAAIgUB/QAAAFAEAAIAHAAIgDAWIgTAAIgCAAQgSAAAEgXgAmTBJIAXiVIBOAAIgMBOQgCAUgSgCIglAAIgEAiIAXAAQAGAAAAgGIADgSIAXAAIgEAbQgEAQgVAAgAlvABIAYAAQAFAAAAgFIACgOIgcAAgAlogmIAcAAIADgRIgcAAgAFEgmIBQA0IhgA1gAh+A0IATh7IAXAAIgTB7gAjFArIgaAAIADgTIAHAAQAKABADgFIAJgQIgaAAIADgSIAVgjIgPAAIADgSIAjAAIABgHIAXAAIAAAGIAiAAIgEATIgzAAIgVAjIAHAAIAPgaIAaAAIgoBIQgEALgLAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(178).to({graphics:mask_graphics_178,x:246.9,y:212.8}).wait(79));

	// Shine
	this.instance = new lib.Shine();
	this.instance.parent = this;
	this.instance.setTransform(189.6,207.7,1.727,1,29,0,0,11.1,35.3);
	this.instance.alpha = 0.602;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(178).to({_off:false},0).to({x:304.6},7).wait(22).to({x:189.6},0).to({x:304.6},7).wait(43));

	// Btn
	this.instance_1 = new lib.Btn_Original();
	this.instance_1.parent = this;
	this.instance_1.setTransform(267,212.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(169).to({_off:false},0).to({x:247,alpha:1},4).wait(84));

	// C3_txt2
	this.instance_2 = new lib.C3_txt2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(87,209.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(159).to({_off:false},0).to({x:67,alpha:1},4).wait(94));

	// C3_txt1
	this.instance_3 = new lib.C3_txt1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(42,179.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(159).to({_off:false},0).to({x:67,alpha:1},4).wait(94));

	// C3_bg
	this.instance_4 = new lib.C3_bg_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(238.5,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(152).to({_off:false},0).to({x:188.5,alpha:1},7).wait(98));

	// Black
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.004)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_2.setTransform(150,125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.255)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_3.setTransform(150,125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.502)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_4.setTransform(150,125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.753)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_5.setTransform(150,125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_6.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},147).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[]},1).wait(105));

	// C2_txt2
	this.instance_5 = new lib.C2_txt2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(107,196.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({_off:false},0).to({x:67,alpha:1},7).wait(21).to({alpha:0},4).to({_off:true},1).wait(105));

	// C2_txt1
	this.instance_6 = new lib.C2_txt1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(36,164.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(113).to({_off:false},0).to({x:66,alpha:1},6).wait(28).to({alpha:0},4).to({_off:true},1).wait(105));

	// Right
	this.instance_7 = new lib.Right_foot_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(229.4,249.4,0.332,0.332,-82.6,0,0,0.2,0.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(74).to({_off:false},0).to({regX:0.5,regY:0.2,scaleX:0.76,scaleY:0.76,rotation:-247.3,guide:{path:[229.3,249.5,227.3,247.2,224.5,241.9,219,231.4,215.2,216.2,202.9,167.9,212.3,92.7,212.4,92,212.5,91.2], orient:'auto'}},17).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-360,guide:{path:[212.5,91.1,217.1,55.8,227.1,50.3,231.2,48.1,234.6,52.5,237.9,56.9,238.9,65.8,239.5,71.2,237.7,86.1,237.5,87.7,237.3,89.4], orient:'auto'}},10,cjs.Ease.get(1)).wait(46).to({alpha:0},4).to({_off:true},1).wait(105));

	// Left
	this._animationGuide_74 = new lib.Left_foot_1();
	this._animationGuide_74.parent = this;
	this._animationGuide_74.setTransform(174.1,280.9,0.313,0.313,-101.1,0,0,-0.1,-0.1);

	this._animationGuide_75 = new lib.Left_foot_1();
	this._animationGuide_75.parent = this;
	this._animationGuide_75.setTransform(169.2,272.1,0.313,0.313,-98.3,0,0,-0.3,-0.1);

	this._animationGuide_76 = new lib.Left_foot_1();
	this._animationGuide_76.parent = this;
	this._animationGuide_76.setTransform(165.1,261.4,0.313,0.313,-102.6,0,0,-0.1,-0.1);

	this._animationGuide_77 = new lib.Left_foot_1();
	this._animationGuide_77.parent = this;
	this._animationGuide_77.setTransform(162,249.4,0.313,0.313,-109.8,0,0,-0.4,0.1);

	this._animationGuide_78 = new lib.Left_foot_1();
	this._animationGuide_78.parent = this;
	this._animationGuide_78.setTransform(159.5,235.9,0.313,0.313,-118.8,0,0,-0.2,0.1);

	this._animationGuide_79 = new lib.Left_foot_1();
	this._animationGuide_79.parent = this;
	this._animationGuide_79.setTransform(157.7,221.1,0.313,0.313,-129.4,0,0,-0.2,0);

	this._animationGuide_80 = new lib.Left_foot_1();
	this._animationGuide_80.parent = this;
	this._animationGuide_80.setTransform(156.8,205,0.313,0.313,-141.6,0,0,-0.2,-0.1);

	this.instance_8 = new lib.Left_foot_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(156.8,187.9,0.607,0.607,-155.3,0,0,-0.2,-0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this._animationGuide_74}]},74).to({state:[{t:this._animationGuide_75}]},1).to({state:[{t:this._animationGuide_76}]},1).to({state:[{t:this._animationGuide_77}]},1).to({state:[{t:this._animationGuide_78}]},1).to({state:[{t:this._animationGuide_79}]},1).to({state:[{t:this._animationGuide_80}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_8}]},56).to({state:[{t:this.instance_8}]},4).to({state:[]},1).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(81).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,guide:{path:[156.7,187.8,157.2,163.6,161,135.2,163.3,117.7,167.8,109.6,171.7,102.6,175.8,104.8,179.7,106.8,181.1,115.4,182.7,124.8,180,136.4,178.6,142.2,176.4,156.4,175.9,159.4,175.5,162], orient:'auto'}},10,cjs.Ease.get(1)).wait(56).to({alpha:0},4).to({_off:true},1).wait(105));

	// C2_bg
	this.instance_9 = new lib.C2_bg_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(278.5,125);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65).to({_off:false},0).to({x:188.5,alpha:1},4).wait(78).to({alpha:0},4).to({_off:true},1).wait(105));

	// Yellow_bg
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9CF00").s().p("AyWTiMAFUgnDIfZAAMAAAAnDg");
	this.shape_7.setTransform(182.5,125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(249,207,0,0.831)").s().p("AtUTiMAFTgnDIVWAAMAAAAnDg");
	this.shape_8.setTransform(214.7,125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(249,207,0,0.667)").s().p("AoTTiMAFUgnDILTAAMAAAAnDg");
	this.shape_9.setTransform(246.8,125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(249,207,0,0.498)").s().p("AjRTiMAFTgnDIBQAAMAAAAnDg");
	this.shape_10.setTransform(279,125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(249,207,0,0.749)").s().p("ApQTiMAFUgnDINNAAMAAAAnDg");
	this.shape_11.setTransform(240.7,125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9CF00").s().p("AvOTiMAFUgnDIZJAAMAAAAnDg");
	this.shape_12.setTransform(202.5,125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(249,207,0,0.749)").s().p("AvOTiMAFUgnDIZJAAMAAAAnDg");
	this.shape_13.setTransform(202.5,125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(249,207,0,0.502)").s().p("AvOTiMAFUgnDIZJAAMAAAAnDg");
	this.shape_14.setTransform(202.5,125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(249,207,0,0.251)").s().p("AvOTiMAFUgnDIZJAAMAAAAnDg");
	this.shape_15.setTransform(202.5,125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(249,207,0,0)").s().p("AvOTiMAFUgnDIZJAAMAAAAnDg");
	this.shape_16.setTransform(202.5,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},69).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},73).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},1).wait(105));

	// Black
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.004)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_17.setTransform(150,125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.255)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_18.setTransform(150,125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.502)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_19.setTransform(150,125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.753)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_20.setTransform(150,125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_21.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17}]},60).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[]},1).wait(192));

	// C1_txt2
	this.instance_10 = new lib.C1_txt2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(97,155);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({_off:false},0).to({x:67,alpha:1},7).wait(34).to({alpha:0},4).to({_off:true},1).wait(192));

	// C1_txt1
	this.instance_11 = new lib.C1_txt1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(6,124.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(13).to({_off:false},0).to({x:66,alpha:1},9).wait(38).to({alpha:0},4).to({_off:true},1).wait(192));

	// C1_bg
	this.instance_12 = new lib.C1_bg_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(258.5,140.1);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:188.5,alpha:1},6).wait(54).to({alpha:0},4).to({_off:true},1).wait(192));

	// Yellow_bg
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F9CF00").s().p("AyWTiMAFUgnDIfZAAMAAAAnDg");
	this.shape_22.setTransform(182.5,125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(249,207,0,0.898)").s().p("AvVTiMAFUgnDIZXAAMAAAAnDg");
	this.shape_23.setTransform(201.8,125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(249,207,0,0.8)").s().p("AsUTiMAFUgnDITVAAMAAAAnDg");
	this.shape_24.setTransform(221.1,125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(249,207,0,0.698)").s().p("ApTTiMAFUgnDINTAAMAAAAnDg");
	this.shape_25.setTransform(240.4,125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(249,207,0,0.6)").s().p("AmSTiMAFUgnDIHRAAMAAAAnDg");
	this.shape_26.setTransform(259.7,125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(249,207,0,0.498)").s().p("AjRTiMAFTgnDIBQAAMAAAAnDg");
	this.shape_27.setTransform(279,125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(249,207,0,0.624)").s().p("AmRTiMAFVgnDIHNAAMAAAAnDg");
	this.shape_28.setTransform(259.9,125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(249,207,0,0.749)").s().p("ApQTiMAFUgnDINNAAMAAAAnDg");
	this.shape_29.setTransform(240.7,125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(249,207,0,0.875)").s().p("AsPTiMAFUgnDITLAAMAAAAnDg");
	this.shape_30.setTransform(221.6,125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9CF00").s().p("AvOTiMAFUgnDIZJAAMAAAAnDg");
	this.shape_31.setTransform(202.5,125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(249,207,0,0.749)").s().p("AvOTiMAFUgnDIZJAAMAAAAnDg");
	this.shape_32.setTransform(202.5,125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(249,207,0,0.502)").s().p("AvOTiMAFUgnDIZJAAMAAAAnDg");
	this.shape_33.setTransform(202.5,125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(249,207,0,0.251)").s().p("AvOTiMAFUgnDIZJAAMAAAAnDg");
	this.shape_34.setTransform(202.5,125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(249,207,0,0)").s().p("AvOTiMAFUgnDIZJAAMAAAAnDg");
	this.shape_35.setTransform(202.5,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},4).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},47).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[]},1).wait(192));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(162.5,137.5,357.5,214.6);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/C1_bg.png?1482284815061", id:"C1_bg"},
		{src:"images/C2_bg.png?1482284815061", id:"C2_bg"},
		{src:"images/C3_bg.png?1482284815061", id:"C3_bg"},
		{src:"images/Left_foot.png?1482284815061", id:"Left_foot"},
		{src:"images/Right_foot.png?1482284815061", id:"Right_foot"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;