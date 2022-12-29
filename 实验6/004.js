// JavaScript Document
(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.元件23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ai0DiQghAAABgnQgBgoAhAAIB8AAQAGAAAAgIQAAgJgGAAIhfAAQgPABgKgLQgKgLAAgPQAAgPAKgLQAKgLAPAAIBfAAQAGAAABgJQgBgIgGAAIhDAAQgMAAgIgHQgIgHAAgNQAAgSATgVIAEgJIgEgIQgFgFgDgHQgCgHAAgOQAAgOAJgJQAJgKARAAIDWAAQARAAAJAKQAKAJAAASQAAAQgLANIgBAFQAAADAIAJQASAWAAARQABANgJAHQgKAHgQAAIhGAAQgHAAAAAIQAAAJAHAAIBiAAQAPAAAKAKQALALgBAPQABARgLAKQgKALgPgBIhiAAQgHAAAAAJQAAAIAHAAICCAAQAPAAAIAKQAIALAAATQABAnggAAgAgegjIgEALQAAADAGABIA1AAQAJAAAAgFQAAgGgGgGQgGgIgIABIgdAAQgKAAgFAJgAjbhEIAAhBQAAgaAPgPQAOgPAYAAIBkAAQAKAAAAgFIAAgFIAEgJIALgJQAHgEALgCIAfgCQAXAAAKAFQALAGADATQAAAGAIAAIBoAAQAXAAAPANQAPAOAAAWIAABIQAAAUgMAMQgMALgTAAQgMAAgIgEQgHgGAAgFIABgEQAHgMAAgVQAAgTgNgOQgOgOgYgBIjWAAQgZABgNAPQgNAPAAAWQAAARAHALIACAIQgBANgYAAQgtAAAAgtg");
	this.shape.setTransform(25.7,-15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.7,-37.9,44,45.2);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiVDZQgLgJAAgXIAAiGQAAgFgHAAIgUgCQgIgDgJgGQgKgGgFgLQgGgLAAgMQAAgaAXgZQAkgqAehaQANglAmAAQAUAAAMAGQANAGABAHIgCAFIgXBHIgZA9QgMAagBARQAAAcAcARIAIAGIABAJIAACXQgBAWgKAJQgLAKgaAAQgaAAgKgJgAAJDYQgKgJAAgWIAAiWIABgOIAEgHQAKgJANgeQANgfAAgIQAAgDgEgCIgHgBQgDAAgDAIQgNAmgLATQgLASgXAAQgRAAgQgKQgQgKAAgRQABgRAJgUIAZg9QAPgpAHgfQAIgfAhAAQAWAAAVAJQAVAJAAAUIgDAQQAAAGAIAAIBrAAQAkAAgBAwQABAvgkAAIhZAAIgFACIgBAGQABAFABABQABACAFAAIBaAAQATAAAHAJQAGAJAAAYQAAAXgGAJQgHAJgTAAIhaAAIgGACQgBABgBAGQABAFABABIAHACIBZAAQATAAAHAJQAGAJAAAYQAAAYgGAJQgHAJgTAAIhZAAIgHABQgBABgBAFIAAAwQABAWgLAJQgLAJgbAAQgbAAgLgJg");
	this.shape.setTransform(28.3,-15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.7,-37.9,45.1,45.2);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AijDNQgjAAgLgKQgLgKAAgjQAAgiAMgLQALgKAiAAIBiAAQADAAABgBIABgHIAAiwIgBgFIgHgBIhDAAQgjAAgLgLQgMgLAAggQAAgiAMgKQALgLAjAAIEPAAQAjAAALALQALAKAAAiQAAAggMALQgLALgiAAIhDAAIgGABIgCAFIAACwIABAHQAAAAAAAAQAAAAABABQAAAAABAAQABAAABAAIBiAAQAhAAAMAKQAMALAAAiQAAAjgMAKQgLAKgiAAg");
	this.shape.setTransform(25.6,-14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,-35.1,44.2,41);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhLDXQgLgJAAgVIAAhsQgBgDgEAAIhUAAQgoAAAAgsQAAgrAoAAIBTAAQAGAAAAgFIAAgrIgBgEIgEgBIgoAAQgXAAgLgKQgKgLAAgYQAAgtAsAAIAnAAQAGAAAAgEIAAgbQAAgUAKgJQAKgIAfAAQAeAAAKAJQAKAIAAAUIAAAbQAAAEAEAAIAaAAIALADIBGA7QAMALAMADIAKAEQADADgBAFIgGAyQgBAFAEAAIAKAAQAaAAAKANQALANAAAfIgDBHIgFAoQgEARgLALQgMALgSAFIgxAGQgeAAgTgIQgVgHABgjQAAgUAJgLQAIgLAQAAIANAAQAMAAAFgGQAEgGABgJIABgMIgBgFIgGgBIhYAAQgEAAAAAEIAABrQAAAVgLAJQgLAKgcAAQgcAAgMgKgAAPg9IAAAsQAAAEAEAAIAqAAIAGgEIAIgnQACgKgKAAIgwAAQgEAAAAAFgAAhByIAAgSQAAgFAGAAIAxAAIAGACQAAADgGAAIgLgBQgZAAgOAUIgEADQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBgAAkgeQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAgMIADgDIARAAIADACIgDANIgEADgACUhjQgGgDgRgPIgegaQgNgLgFgGQgDgGAAgHQAAgLAOgPQAPgOAOAAQANAAAOAIIAeAWIAYAZQAFAKAAALQABASgNALQgNAMgOAAg");
	this.shape.setTransform(25.8,-15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.2,-37.9,43.2,44.9);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhzDYQg5AAgRgUQgQgUAAg6IAAjsQAAg8ARgTQASgTA3AAIDnAAQA3AAARATQASATAAA8IAADsQAAA8gTATQgSATg1AAgAh0iFIgCAJIAAAOIgCAJIgFAHQgKAMAAAQQAAAPAQASIAFAKQAAADgIAEQgWAKAAAdQAAAaARAUQAJAJAAAGIAAAmQAAAHABACQACACAFAAIAYAAQAPAAAmALIA1ATQARAIAPgBQAeABAKgbIAEgJIAHgCIAIAAQAFAAACgCQACgCAAgHIAAgaQAAgJAIgFQAMgEAHgMQAGgNAAgUQAAgUgDgJQgDgKgLgGIgNgKQgDgDAAgHIAAhgQAAgLgJAAIg2AAIgKgCIgMgLQgWgagSAAQgKAAgNAHQgNAHgKALIgPAPQgGADgGAAIggAAgAAZCWIhMgaQgOgEgGgFQgFgEAAgMQAAgLAHgNQAHgNAPAAIAQAEIAzAYQALAEAKABQAKgBAIgHQAEgEAEAAIALAGQAGAHAAAJQAAAQgHASQgGAQgUAAQgMAAgOgFgABkBzIABgKIgBgMQgBgBAAgBQAAgBABAAQAAgBAAAAQABgBAAAAIADAFIAAAVIgCADgAhlBvIAAgVQAAgGAFAAIAEACIgBAGIgBALIAAAJQABADgEAAQgEAAAAgEgAAVBKIgcgNIgVgKIgFgHQgCgEAAgGQAAgMAIgLQAHgLAOAAIAQAFIAnATIALAJQADAFAAAIQAAAIgGANQgHAMgMgBQgGAAgLgEgABQBGQgFgBAAgGIADgXQAAgGgGgKQgGgJgegPQgegOgLAAQgQAAgMAMQgNAKgDARIgFAXQgDAEgMAHQgNAHgPAAQgPAAgIgNQgJgMAAgRQAAgQAJgIQAJgIAUgHIAbgJIAHgFIgDgGQgEgDgBAAIgIACIgRADQgKAAgKgMQgKgMAAgLQAAgQAXgPQAlgYAUgUQASgUARAAQALAAAKAMQALALAAAIIAAAEQAAAEAEgBIAzAAQAOAAAHAIQAHAHAAAMQAAANgGAPQgFAPgUAYIgCADIACACIATAKQATAJAIAGQAJAFACAIIADAYQAAAkgoAAgAgHhQIAHAIIAMAIQADABAHgIIAHgJIgIgBIgZAAg");
	this.shape.setTransform(25.8,-15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.2,-36.7,41.2,43.3);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACaDdQgKgFgFgLIgphLQgGgLAAgJQAAgRASgNQATgMAOAAQAOAAAKAIQAKAJAOAYIAZArQAKATAAANQAAAPgSAOQgTANgOAAQgNAAgIgFgAjMDWQgQgNAAgTQAAgLAFgIQASgdAUgsQAMgbAdAAQAWAAANANQANAMABATQgBAMgJAaQgLAbgOAUQgOAVgKAGQgLAHgMAAQgTAAgQgMgAAwDfQgJgDgFgFQgEgEgFgSQgFgRgEgcIgEgqQAAgOAKgKQALgJASAAQAaAAAAANIgCAJQgCAGAAAKQAAAKAIAOIAgA8IABAEQAAAMgNAHQgOAIgPAAgAhjDIQAAgJAGgOQAYgxAAgYIgCgNQgCgIAHgFQAHgGAMAAIAWAEQAIAEAEAIIAIAXIAIBRQAAATgMAHQgOAIggAAQgsAAAAgagAAABLQgMgQgVgEQgGgBgCgCQgCgCAAgLIAAgxIgBgFIgLAIQgIAHgjAXQgkAXgIAAIgQADQgJADgGAFQgEAEgHAAQgQAAgMgPQgNgQAAgSQAAgdAggMQAogOAcgXQAbgXAAgFQAAgCgGAAIhKAAQgUAAgHgJQgGgIAAgYQAAgYAGgJQAHgJAUAAICAAAIAEgBIABgFQAAgWALgJQAJgJAcAAQAbAAAKAIQAKAJAAAWIABAGQABABAFAAIB/AAQAUAAAGAJQAHAJAAAYQAAAXgHAJQgGAJgUAAIhXAAQgHAAAAADQAAACAYAVQAZAVAxASQAUAHAJAKQAJAJAAAOQAAAQgJAWQgKAWgOAAQgIAAgKgJQgKgJgOgBQgMgBgggXQgggWgTgQIgHgEQgBAAAAAGIAAA1IgBALIgZAHQgLAFgGAIIgDACIgCgBgABbBGQgGgKgTgCQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIABghQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIA2AmIgCABQgOAGgJAIIgCAAgAhVBEQgJgLgNgFIgDgCIAyghIABAEIABAhIgDADQgNADgGAIIgDACIgCgCg");
	this.shape.setTransform(26.2,-15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.6,-37.9,45.2,45.3);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA5DbQgIgHAAgSIgBgIIgFgBIgxAAQggAAAAghQAAgfAgAAIAwAAIAEgBIABgHIgBgHIgFgCIglAAQgKABgIgIQgHgHAAgMQAAgMAHgIQAHgHALAAIAlAAIAEgBIABgGIgBgGIgFgCIgdAAQgNAAgGgHQgHgIAAgPQAAgNAIgJQAHgJALAAIAeAAQAEAAACgFQAHgLAKgEIAagEQAlAAAHARIADAGIAGABIAeAAQAMAAAHAJQAHAJAAANQAAAPgGAIQgGAHgOAAIgfAAQgEAAAAAGIABAIQACABAEAAIAlAAQAMAAAHAHQAHAIAAAMQAAANgHAHQgHAGgMAAIglAAIgGABQgBACAAAFIABAHQABABAEABIAxAAQAgAAAAAfQAAAhggAAIgzAAQgFgBgBAHQAAAVgJAHQgJAIgbAAQgaAAgIgIgAiwCwQgXAAgNgPQgMgPAAgbIAAj/QAAgWAEgHQAGgIATAAQASAAAHAIQAFAGAAAXIAADWIACAKQACACAFAAQAGAAAAgEIAAjeQAAgYgDgLIgCgPQAAggAaAAQAOAAAHAIQAFAIAAAQIgDATQgDALAAAUIAADeQAAAEAFAAIAIgBIABgGIAAjbQABgSAFgJQAGgIASAAQAQAAAAAGIgBACQgQAPgBATQAAAUAXAaIACAFIgCADQgZAOAAAcQAAAPAIANQAHALAJAFIAJAFIABAFIAABJQABARgIAFQgMANABAXQgBAOgFAFQgFAFgRAAgAgvgNQgGgKABgKQgBgLAGgIQAFgIAKgDIApgPQALgEgBgCIgCgHQgDgDgEAAIgKADIgQACQgOAAgKgOQgKgPAAgMQAAgMAKgJQAlggAUgbQAMgQAZAAIAcAFQASAEADALQADAIAIgBIA4AAQAUABALAIQALAKAAAPQAAAjgmAjIgFAJQAAADAIABQAbAHALAJQALAJgBAOIgCAaQgDAMgEAAQgFAAgDgHQgDgNgMgIQgKgHgOAAIgSgCIgJgHQgOgQgmAAQggAAgQAPIgMAIIgTACQgNgBgLAJQgLAHgEAOQgCAIgGAAQgGAAgFgKgABCiIQAAAFAJAIIAOAIQAGAAAKgKQAJgJABgEQAAgDgKAAIggAAQgHAAAAAFg");
	this.shape.setTransform(25.6,-15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,-38,45.1,45.3);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099FF").ss(4,1,1).p("AOiAAI9DAA");
	this.shape.setTransform(306,56);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0099FF").ss(4,1,1).p("At2AAIbtAA");
	this.shape_1.setTransform(88.7,58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,54,403,6);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjBMQgMgTAAggQAAg1AUgeQATgeAVgBQAPABAKAPQAKARAAAlQAAAxgWAhQgRAagUAAQgPAAgJgNg");
	this.shape.setTransform(13.4,-10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.6,-19.1,9.6,17.9);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhnDaQgKgHAAgIQAAgGAFgFQAEgDAGAAQAHgBANAHQAPAHAJAAQANAAAIgMQAJgNAQhCIAyjBIgBgDIgEgBQgJAAgeAeIgKgLQAUgXAZgOQAZgNANAAQAFAAAEAEQADADAAAFIgzDAQgVBRgaAcQgaAdgjAAQgSAAgJgHgABNi3QgFgFAAgIQAAgMAHgHQAHgIAKAAQAIgBAFAGQAFAFAAAIQAAALgIAJQgHAHgKABQgHAAgFgGg");
	this.shape.setTransform(5.7,-9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-31.8,22.8,44.9);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhjCfQgTgQgBgVQABgUAPgSQAMgNAkgSIAjgVQgSAKgLAAQgJAAgHgIQgHgKAAgOQAAgsAbguQAbguAmgWQAYgOAjAAIASABIADgIIAUgFQgTA7gPA6QgLArgEAaQgCAPgBAVQAAAlgIAWQgKAegcATQgcASgoAAQghAAgUgPgAgbA0QgrAdgJANQgLANAAAOQAAAOAOAMQAMAMASgBQARABAQgJQAPgJAMgPQAMgQAFgUQAEgUAAghIADgiQgSAQgvAhgAAKh6QgRANgMAdQgQAqAAAdQAAAKAGAIQAHAIAJAAQAKAAANgJQAPgJAJgPQAJgOAKgkIAShCIgVgCQgYAAgQAMg");
	this.shape.setTransform(11.3,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-21.6,23.9,34.9);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUgJQAIgUAMgIQAIgIAJABQAJAAAGAGQAFAGAAALQAAAOgOAOQgUAUgnASQAFgcALgag");
	this.shape.setTransform(12.4,-14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.7,-19,7.5,9.1);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AipDsQgIgGAAgJQAAgIAGgFQAFgEALAAIAxADQAZAAALgLQALgMALgtIAyjLIg7AAIAFgSIA7AAQAOg/ATgeQATgeAfgSQAegSAbAAQAQAAAHAGQAIAGAAAJQAAAHgFAFQgFAFgJAAIg0gIQgQAAgOAVQgNAUgIAiIgMA2IBCAAIgEASIhDAAIgnCeQgSBJgoAmQgoAlgvAAQgQAAgIgGg");
	this.shape.setTransform(10.5,-11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-35.3,35.7,48.4);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AjrFiQAfgWAdgdQB4h8AAivQAAivh4h7QgfgggigXIAPgMIHSFpInSFqg");
	this.shape.setTransform(0.4,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AjrFiQAfgWAdgdQB4h8AAivQAAivh4h7QgfgggigXIAPgMIHSFpInSFqg");
	this.shape_1.setTransform(-0.4,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-38.4,48.9,76.9);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjrFiIA8gzQB4h8AAivQAAivh4h7QgfgggigXIAPgMIHSFpInSFqg");
	this.shape.setTransform(24.4,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AjrFiQAfgWAdgdQB4h8AAivQAAivh4h7QgfgggigXIAPgMIHSFpInSFqg");
	this.shape_1.setTransform(23.6,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-38.1,48.9,76.9);


(lib.元件69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7nEeIAAo7MA3QAAAIAAI7g");
	mask.setTransform(178.9,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,7.2,332.9,45.1);


(lib.元件32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAEeIAAo7ICBAAIAAI7g");
	mask.setTransform(8.5,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAEeIAAo7ICBAAIAAI7g");
	mask.setTransform(8.5,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAEeIAAo7ICBAAIAAI7g");
	mask.setTransform(8.5,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAEeIAAo7ICBAAIAAI7g");
	mask.setTransform(8.5,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAEeIAAo7ICBAAIAAI7g");
	mask.setTransform(8.5,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAEeIAAo7ICBAAIAAI7g");
	mask.setTransform(8.5,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAEeIAAo7ICBAAIAAI7g");
	mask.setTransform(8.5,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAEeIAAo7ICBAAIAAI7g");
	mask.setTransform(8.5,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAEeIAAo7ICBAAIAAI7g");
	mask.setTransform(8.5,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAEeIAAo7ICBAAIAAI7g");
	mask.setTransform(8.5,29.6);

	// 图层 2
	this.instance = new lib.元件23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(315.5,42.9,0.781,0.781);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance.cache(2,-40,48,49);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.5,42.9,0.781,0.781);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_1.cache(4,-40,49,49);

	this.instance_2 = new lib.元件21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,42.9,0.781,0.781);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_2.cache(2,-37,48,45);

	this.instance_3 = new lib.元件20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(143,42.9,0.547,0.547);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_3.cache(2,-40,47,49);

	this.instance_4 = new lib.元件19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115,42.9,0.547,0.547);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_4.cache(3,-39,45,47);

	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67,42.9,0.938,0.938);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_5.cache(2,-40,49,49);

	this.instance_6 = new lib.元件17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19,42.9,0.938,0.938);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 255)];
	this.instance_6.cache(1,-40,49,49);

	this.instance_7 = new lib.元件23("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(313.5,45.4,0.781,0.781);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_7.cache(2,-40,48,49);

	this.instance_8 = new lib.元件22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(273.5,45.4,0.781,0.781);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_8.cache(4,-40,49,49);

	this.instance_9 = new lib.元件21("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(233.5,45.4,0.781,0.781);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_9.cache(2,-37,48,45);

	this.instance_10 = new lib.元件20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,45.4,0.547,0.547);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_10.cache(2,-40,47,49);

	this.instance_11 = new lib.元件19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113,45.4,0.547,0.547);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_11.cache(3,-39,45,47);

	this.instance_12 = new lib.元件18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(65,45.4,0.938,0.938);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_12.cache(2,-40,49,49);

	this.instance_13 = new lib.元件17("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17,45.4,0.938,0.938);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 255)];
	this.instance_13.cache(1,-40,49,49);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.无标题4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(431.4,75.1,0.705,0.583,0,0,180);
	this.instance.alpha = 0.102;

	this.instance_1 = new lib.元件1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-35.9,35.9,0.635,0.635);
	this.instance_1.alpha = 0.102;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099FF").ss(4,1,1).p("AgTAAIAnAA");
	this.shape.setTransform(397,56);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0099FF").ss(4,1,1).p("AgTAAIAnAA");
	this.shape_1.setTransform(2,58);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0099FF").ss(4,1,1).p("AhuAAIDdAA");
	this.shape_2.setTransform(387.9,56);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0099FF").ss(4,1,1).p("AhqAAIDVAA");
	this.shape_3.setTransform(10.7,58);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0099FF").ss(4,1,1).p("AjJAAIGTAA");
	this.shape_4.setTransform(378.8,56);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0099FF").ss(4,1,1).p("AjAAAIGBAA");
	this.shape_5.setTransform(19.3,58);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0099FF").ss(4,1,1).p("AkkAAIJJAA");
	this.shape_6.setTransform(369.7,56);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0099FF").ss(4,1,1).p("AkXAAIIvAA");
	this.shape_7.setTransform(28,58);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0099FF").ss(4,1,1).p("Al/AAIL/AA");
	this.shape_8.setTransform(360.6,56);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0099FF").ss(4,1,1).p("AluAAILdAA");
	this.shape_9.setTransform(36.7,58);

	this.instance_2 = new lib.元件8("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(377.2,89.7,0.586,0.586);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];

	this.instance_3 = new lib.元件12("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(364,89.7,0.586,0.586);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];

	this.instance_4 = new lib.元件11("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(354.4,89.7,0.586,0.586);
	this.instance_4.alpha = 0;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];

	this.instance_5 = new lib.元件13("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(329.2,89.7,0.586,0.586);
	this.instance_5.alpha = 0;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance_5.cache(7,-21,14,22);

	this.instance_6 = new lib.元件10("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(315.4,89.7,0.586,0.586);
	this.instance_6.alpha = 0;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];

	this.instance_7 = new lib.元件14("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(302.2,89.7,0.586,0.586);
	this.instance_7.alpha = 0;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];

	this.instance_8 = new lib.元件6("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(283.6,89.7,0.586,0.586);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance_8.cache(-3,-24,28,39);

	this.instance_9 = new lib.元件5("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(269.8,89.7,0.586,0.586);
	this.instance_9.alpha = 0;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];

	this.instance_10 = new lib.元件13("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(257.8,89.7,0.586,0.586);
	this.instance_10.alpha = 0;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance_10.cache(7,-21,14,22);

	this.instance_11 = new lib.元件6("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(245.8,89.7,0.586,0.586);
	this.instance_11.alpha = 0;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance_11.cache(-3,-24,28,39);

	this.instance_12 = new lib.元件10("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(139.6,89.7,0.586,0.586);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];

	this.instance_13 = new lib.元件12("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(126.4,89.7,0.586,0.586);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];

	this.instance_14 = new lib.元件11("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(116.8,89.7,0.586,0.586);
	this.instance_14.alpha = 0;
	this.instance_14.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];

	this.instance_15 = new lib.元件10("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(96.4,89.7,0.586,0.586);
	this.instance_15.alpha = 0;
	this.instance_15.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];

	this.instance_16 = new lib.元件9("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(86.8,89.7,0.586,0.586);
	this.instance_16.alpha = 0;
	this.instance_16.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];

	this.instance_17 = new lib.元件4("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(70,89.7,0.586,0.586);
	this.instance_17.alpha = 0;
	this.instance_17.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance_17.cache(7,-21,12,13);

	this.instance_18 = new lib.元件8("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(62.8,89.7,0.586,0.586);
	this.instance_18.alpha = 0;
	this.instance_18.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];

	this.instance_19 = new lib.元件7("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(56.2,89.7,0.586,0.586);
	this.instance_19.alpha = 0;
	this.instance_19.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance_19.cache(-8,-34,27,49);

	this.instance_20 = new lib.元件6("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(37.6,89.7,0.586,0.586);
	this.instance_20.alpha = 0;
	this.instance_20.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance_20.cache(-3,-24,28,39);

	this.instance_21 = new lib.元件5("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(23.8,89.7,0.586,0.586);
	this.instance_21.alpha = 0;
	this.instance_21.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];

	this.instance_22 = new lib.元件4("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(13.6,89.7,0.586,0.586);
	this.instance_22.alpha = 0;
	this.instance_22.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance_22.cache(7,-21,12,13);

	this.instance_23 = new lib.元件3("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(4,89.7,0.586,0.586);
	this.instance_23.alpha = 0;
	this.instance_23.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance_23.cache(-9,-37,40,52);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0099FF").ss(4,1,1).p("AnaAAIO1AA");
	this.shape_10.setTransform(351.5,56);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0099FF").ss(4,1,1).p("AnEAAIOJAA");
	this.shape_11.setTransform(45.3,58);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0099FF").ss(4,1,1).p("Ao1AAIRrAA");
	this.shape_12.setTransform(342.4,56);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0099FF").ss(4,1,1).p("AobAAIQ3AA");
	this.shape_13.setTransform(54,58);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#0099FF").ss(4,1,1).p("AqQAAIUhAA");
	this.shape_14.setTransform(333.3,56);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0099FF").ss(4,1,1).p("ApyAAITlAA");
	this.shape_15.setTransform(62.7,58);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0099FF").ss(4,1,1).p("ArrAAIXXAA");
	this.shape_16.setTransform(324.2,56);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0099FF").ss(4,1,1).p("ArIAAIWRAA");
	this.shape_17.setTransform(71.3,58);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0099FF").ss(4,1,1).p("AtGAAIaNAA");
	this.shape_18.setTransform(315.1,56);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#0099FF").ss(4,1,1).p("AsfAAIY/AA");
	this.shape_19.setTransform(80,58);

	this.instance_24 = new lib.元件16("synched",0);
	this.instance_24.parent = this;

	this.instance_25 = new lib.元件15("synched",0);
	this.instance_25.parent = this;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#0099FF").ss(4,1,1).p("AuhAAIdDAA");
	this.shape_20.setTransform(306,56);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#0099FF").ss(4,1,1).p("At2AAIbtAA");
	this.shape_21.setTransform(88.7,58);

	this.instance_26 = new lib.元件24("synched",0);
	this.instance_26.parent = this;

	this.instance_27 = new lib.元件25("synched",0);
	this.instance_27.parent = this;

	this.instance_28 = new lib.元件26("synched",0);
	this.instance_28.parent = this;

	this.instance_29 = new lib.元件27("synched",0);
	this.instance_29.parent = this;

	this.instance_30 = new lib.元件28("synched",0);
	this.instance_30.parent = this;

	this.instance_31 = new lib.元件29("synched",0);
	this.instance_31.parent = this;

	this.instance_32 = new lib.元件30("synched",0);
	this.instance_32.parent = this;

	this.instance_33 = new lib.元件31("synched",0);
	this.instance_33.parent = this;

	this.instance_34 = new lib.元件32("synched",0);
	this.instance_34.parent = this;

	this.instance_35 = new lib.元件33("synched",0);
	this.instance_35.parent = this;

	this.instance_36 = new lib.元件35("synched",0);
	this.instance_36.parent = this;

	this.instance_37 = new lib.元件36("synched",0);
	this.instance_37.parent = this;

	this.instance_38 = new lib.元件37("synched",0);
	this.instance_38.parent = this;

	this.instance_39 = new lib.元件38("synched",0);
	this.instance_39.parent = this;

	this.instance_40 = new lib.元件39("synched",0);
	this.instance_40.parent = this;

	this.instance_41 = new lib.元件40("synched",0);
	this.instance_41.parent = this;

	this.instance_42 = new lib.元件41("synched",0);
	this.instance_42.parent = this;

	this.instance_43 = new lib.元件42("synched",0);
	this.instance_43.parent = this;

	this.instance_44 = new lib.元件43("synched",0);
	this.instance_44.parent = this;

	this.instance_45 = new lib.元件44("synched",0);
	this.instance_45.parent = this;

	this.instance_46 = new lib.元件45("synched",0);
	this.instance_46.parent = this;

	this.instance_47 = new lib.元件46("synched",0);
	this.instance_47.parent = this;

	this.instance_48 = new lib.元件47("synched",0);
	this.instance_48.parent = this;

	this.instance_49 = new lib.元件48("synched",0);
	this.instance_49.parent = this;

	this.instance_50 = new lib.元件49("synched",0);
	this.instance_50.parent = this;

	this.instance_51 = new lib.元件50("synched",0);
	this.instance_51.parent = this;

	this.instance_52 = new lib.元件51("synched",0);
	this.instance_52.parent = this;

	this.instance_53 = new lib.元件52("synched",0);
	this.instance_53.parent = this;

	this.instance_54 = new lib.元件53("synched",0);
	this.instance_54.parent = this;

	this.instance_55 = new lib.元件54("synched",0);
	this.instance_55.parent = this;

	this.instance_56 = new lib.元件55("synched",0);
	this.instance_56.parent = this;

	this.instance_57 = new lib.元件56("synched",0);
	this.instance_57.parent = this;

	this.instance_58 = new lib.元件57("synched",0);
	this.instance_58.parent = this;

	this.instance_59 = new lib.元件58("synched",0);
	this.instance_59.parent = this;

	this.instance_60 = new lib.元件59("synched",0);
	this.instance_60.parent = this;

	this.instance_61 = new lib.元件60("synched",0);
	this.instance_61.parent = this;

	this.instance_62 = new lib.元件61("synched",0);
	this.instance_62.parent = this;

	this.instance_63 = new lib.元件62("synched",0);
	this.instance_63.parent = this;

	this.instance_64 = new lib.元件63("synched",0);
	this.instance_64.parent = this;

	this.instance_65 = new lib.元件64("synched",0);
	this.instance_65.parent = this;

	this.instance_66 = new lib.元件65("synched",0);
	this.instance_66.parent = this;

	this.instance_67 = new lib.元件66("synched",0);
	this.instance_67.parent = this;

	this.instance_68 = new lib.元件67("synched",0);
	this.instance_68.parent = this;

	this.instance_69 = new lib.元件68("synched",0);
	this.instance_69.parent = this;

	this.instance_70 = new lib.元件69("synched",0);
	this.instance_70.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:-35.9,y:35.9,alpha:0.102}},{t:this.instance,p:{x:431.4,y:75.1,alpha:0.102}}]}).to({state:[{t:this.instance_1,p:{x:7.9,y:35.3,alpha:0.281}},{t:this.instance,p:{x:383.3,y:75.7,alpha:0.281}}]},1).to({state:[{t:this.instance_1,p:{x:51.7,y:34.7,alpha:0.461}},{t:this.instance,p:{x:335.3,y:76.3,alpha:0.461}}]},1).to({state:[{t:this.instance_1,p:{x:95.5,y:34.1,alpha:0.641}},{t:this.instance,p:{x:287.3,y:76.9,alpha:0.641}}]},1).to({state:[{t:this.instance_1,p:{x:139.3,y:33.5,alpha:0.82}},{t:this.instance,p:{x:239.4,y:77.5,alpha:0.82}},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.shape_11},{t:this.shape_10},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.shape_13},{t:this.shape_12},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.shape_15},{t:this.shape_14},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.shape_17},{t:this.shape_16},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.shape_19},{t:this.shape_18},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.shape_21},{t:this.shape_20},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_24}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_26}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_27}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_28}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_29}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_30}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_31}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_32}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_33}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_34}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_35}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_36}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_37}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_38}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_39}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_40}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_41}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_42}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_43}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_44}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_45}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_46}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_47}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_48}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_49}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_50}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_51}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_52}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_53}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_54}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_55}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_56}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_57}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_58}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_59}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_60}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_61}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_62}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_63}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_64}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_65}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_66}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_67}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_68}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_69}]},1).to({state:[{t:this.instance_1,p:{x:183.1,y:32.9,alpha:1}},{t:this.instance,p:{x:191.4,y:78.1,alpha:1}},{t:this.instance_25},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_70}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(238.8,211.6,484.8,85.9);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;