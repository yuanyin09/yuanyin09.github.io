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



(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AhUPxQgkiIAAjBQAAjAAkiIQAjiJAxAAQAxAAAjCJQAjCIAADAQAADBgjCIQgjCIgxAAQgxAAgjiIgAKNMGQh5hIiIiIQiIiIhIh5QhHh6AjgjQAjgjB5BIQB6BHCICIQCICIBHB6QBHB5gjAjQgLALgVAAQgrAAhRgvgAspMpQgjgjBHh5QBIh5CIiIQCIiIB5hIQB6hHAjAjQAjAjhIB5QhHB6iICIQiICIh6BHQhRAwgqAAQgVAAgMgMgAFgBUQiJgjAAgxQAAgxCJgjQCIgjDAAAQDBAACIAjQCIAjAAAxQAAAxiIAjQiIAkjBAAQjAAAiIgkgAvwBUQiIgjAAgxQAAgxCIgjQCIgkDBAAQDAAACIAkQCJAjAAAxQAAAxiJAjQiIAjjAAAQjBAAiIgjgACYiXQgjgjBHh6QBIh5CIiIQCIiIB5hIQB5hHAjAjQAjAjhHB5QhHB6iICIQiICIh6BHQhRAwgrAAQgVAAgLgLgAkzi8Qh6hHiIiIQiIiIhHh6QhHh5AjgjQAjgjB5BHQB5BICICIQCICIBIB5QBHB6gjAjQgLALgVAAQgrAAhRgwgAAAjWQgxAAgjiJQgjiIAAjAQAAjBAjiIQAjiIAxAAIABAAQAxAAAjCIQAkCIAADBQAADAgkCIQgjCJgxAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.5,-114.5,229.1,229.1);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AA/BAIAAhOQAAgMgCgGQgCgFgFgEQgGgDgHAAQgNAAgJAJQgIAIAAATIAABIIgUAAIAAhQQAAgOgGgHQgFgHgMAAQgIAAgIAEQgIAFgDAJQgDAJAAARIAABAIgVAAIAAh8IASAAIAAASQAGgJAKgGQAKgGAMAAQAOAAAJAGQAIAGADAKQAPgWAYAAQASAAAKALQAKAKAAAVIAABVg");
	this.shape.setTransform(244.7,44.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgpAwQgQgQAAggQAAgiATgQQAQgOAWAAQAaAAAQARQAQARAAAdQAAAXgHAOQgHAOgOAHQgOAIgQAAQgZAAgQgRgAgZgjQgLAMAAAXQAAAYALAMQAKAMAPAAQAQAAAKgMQALgMAAgYQAAgXgLgMQgKgMgQAAQgPAAgKAMg");
	this.shape_1.setTransform(228,44.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgmAwQgPgQAAggQAAgTAGgPQAHgPAOgHQANgIAPAAQAVAAANAKQAMAKAEATIgUAEQgDgNgIgGQgHgHgLAAQgPAAgKAMQgKALAAAYQAAAZAKALQAKAMAOAAQAMAAAJgIQAIgIACgPIAVACQgDAWgOAMQgOAMgVAAQgYAAgQgRg");
	this.shape_2.setTransform(215.7,44.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_3.setTransform(206.1,49.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgiA3QgNgKgEgUIAVgDQACAMAIAHQAIAHANAAQAPAAAHgGQAHgGAAgIQAAgHgGgEQgFgDgRgEQgWgGgJgEQgJgEgFgHQgEgIAAgJQAAgIAEgIQADgHAHgEQAFgEAJgCQAIgDAKAAQAOAAALAEQAKAEAGAIQAFAHACAMIgUADQgCgKgHgFQgHgGgLAAQgPAAgFAFQgHAFABAGQgBAEADAEQACADAGACIARAGQAXAGAJAEQAJACAEAIQAFAHABALQgBAKgGAKQgGAJgLAFQgMAFgPAAQgXAAgMgKg");
	this.shape_4.setTransform(196.6,44.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ag1BXIAAirIATAAIAAAQQAHgJAJgEQAIgGALAAQAQABAMAIQANAIAFAPQAHAPAAASQAAATgHAOQgHAPgNAJQgNAIgOAAQgKAAgIgFQgJgEgFgHIAAA8gAgYg5QgKANAAAXQAAAXAKAMQAKAMANAAQAOAAAJgNQAKgMAAgYQAAgXgKgMQgJgLgNAAQgNAAgLAMg");
	this.shape_5.setTransform(184.4,47);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgnBNQgSgLgJgVQgJgWAAgXQAAgbALgUQAKgUASgLQATgKAWAAQAaAAARANQASANAHAYIgWAFQgHgSgLgJQgLgJgRAAQgTAAgNAKQgOAJgFARQgFAPgBARQABAVAGARQAGAQANAIQAOAIAPAAQATAAANgLQANgLAFgVIAXAFQgIAcgSAPQgSAPgbAAQgbAAgRgMg");
	this.shape_6.setTransform(168.8,42.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgDBRQgFgDgDgGQgDgGAAgTIAAhHIgQAAIAAgQIAQAAIAAgfIAUgNIAAAsIAWAAIAAAQIgWAAIAABIQAAAJACADQABACACACQADABAEAAIAKgBIACATIgQACQgLAAgGgEg");
	this.shape_7.setTransform(156.8,42.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgRBXIAAhrIgTAAIAAgQIATAAIAAgNQAAgNADgGQACgIAJgFQAGgFAOAAQAJAAAKACIgDASIgMgBQgKAAgEAEQgDAEAAALIAAAMIAXAAIAAAQIgXAAIAABrg");
	this.shape_8.setTransform(150.6,42.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgpAwQgQgQAAggQAAgiATgQQAQgOAWAAQAaAAAQARQAQARAAAdQAAAXgHAOQgHAOgOAHQgOAIgQAAQgZAAgQgRgAgZgjQgLAMAAAXQAAAYALAMQAKAMAPAAQAQAAAKgMQALgMAAgYQAAgXgLgMQgKgMgQAAQgPAAgKAMg");
	this.shape_9.setTransform(140,44.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AghBSQgQgHgJgOQgJgNAAgRIAVgCQACANAFAIQAGAIALAFQAMAFAOAAQANAAAKgEQAKgDAFgHQAEgHAAgIQAAgIgEgGQgFgGgLgEIgdgIQgYgGgKgEQgMgHgGgJQgGgKAAgMQAAgNAHgLQAIgLAOgGQAOgGASAAQASAAAOAGQAPAGAIAMQAIAMAAAPIgWACQgBgQgKgJQgLgIgTAAQgUAAgJAIQgKAHAAALQAAAJAHAGQAGAGAbAGQAcAHAKAEQAPAGAHALQAHAKAAAOQAAAOgIAMQgHAMgPAHQgPAHgSAAQgXAAgPgHg");
	this.shape_10.setTransform(125.3,42.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_11.setTransform(114.1,49.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAYA+IgThJIgFgVIgYBeIgWAAIgnh7IAXAAIAUBHIAHAaIAGgZIAUhIIAVAAIASBHIAHAYIAHgYIAVhHIAUAAIgmB7g");
	this.shape_12.setTransform(103.3,44.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAZA+IgUhJIgFgVIgYBeIgWAAIgnh7IAXAAIATBHIAIAaIAGgZIAUhIIAUAAIATBHIAGAYIAIgYIAVhHIAUAAIgnB7g");
	this.shape_13.setTransform(85.9,44.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AAZA+IgUhJIgFgVIgYBeIgWAAIgmh7IAVAAIAUBHIAHAaIAHgZIAUhIIAUAAIAUBHIAFAYIAIgYIAVhHIAVAAIgoB7g");
	this.shape_14.setTransform(68.6,44.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AggBZIAxixIAQAAIgwCxg");
	this.shape_15.setTransform(56.6,42.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AggBZIAxixIAQAAIgwCxg");
	this.shape_16.setTransform(50,42.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgLA+IAAgYIAXAAIAAAYgAgLglIAAgYIAXAAIAAAYg");
	this.shape_17.setTransform(43.4,44.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("Ag1BXIAAirIATAAIAAAQQAHgJAIgEQAJgGALAAQAQABANAIQALAIAHAPQAGAPAAASQAAATgHAOQgHAPgNAJQgNAIgOAAQgKAAgJgFQgHgEgGgHIAAA8gAgXg5QgLANAAAXQAAAXAKAMQAJAMAOAAQANAAALgNQAKgMgBgYQABgXgKgMQgLgLgMAAQgOAAgJAMg");
	this.shape_18.setTransform(33.7,47);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgCBRQgHgDgCgGQgDgGAAgTIAAhHIgPAAIAAgQIAPAAIAAgfIAUgNIAAAsIAVAAIAAAQIgVAAIAABIQAAAJACADQABACACACQACABAFAAIAJgBIADATIgPACQgMAAgFgEg");
	this.shape_19.setTransform(23.5,42.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgCBRQgGgDgDgGQgDgGAAgTIAAhHIgPAAIAAgQIAPAAIAAgfIAUgNIAAAsIAVAAIAAAQIgVAAIAABIQAAAJABADQACACACACQACABAFAAIAJgBIAEATIgQACQgMAAgFgEg");
	this.shape_20.setTransform(16.8,42.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AAeBWIAAhPQAAgOgHgIQgHgHgMAAQgJAAgIAFQgIAEgEAJQgDAHgBAPIAABEIgUAAIAAirIAUAAIAAA+QAPgSAVABQAOAAALAFQAKAGAFAJQAEAKgBARIAABPg");
	this.shape_21.setTransform(6.7,42.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AAigVIgZAAQgHAAgKACIgJgIIAzAAIgBhQIAWALIgJAGIAAA/IAjAAIANgNIAQATIhAAAIAABhIABAZIgOAIIABiCgAhJBTQAFgFgBgJIAAgyIgNAAQgHAAgKADIgJgJIAnAAIAAgkIgSAAIgUAXIgCgBQAdgyALg5IAWAMIgHAGIgMAYIAfAAIAMgMIAPASIg8AAIgRAfIAnAAIANgNIAQATIgmAAIAAAkIAUAAIANgMIAQASIgxAAIAAAzIAngZIADADQgpAkgIAOg");
	this.shape_22.setTransform(108,13.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AAdBXIAAgEIAdACQANABABgMIAAhoIiOAAIAACDIgMAHIABhTIgBhFIANAJIA7AAIACgeIhEAAQgMAAgKACIgJgIIBkAAIAAglIAVAKIgHAFIgDAWIBEAAIAPgPIAVAVIhoAAIgCAeIBEAAIAGgKIAPALIgIAHIAABoQACAXgYAJQgBgPgfgHgAgHAxIgaAAQgMAAgKADIgIgJIA4AAIAAgYIgSAAQgLAAgLADIgIgJIA7AAQAOgUAHgVIARANIgIADIgYAZIAWAAIAKgKIAQAQIg2AAIAAAYIAhAAIALgLIAQARIg8AAIAAAwIgLAGgAgZADQgEgLgMgPIABgCQARAIAFAFQAFAGAAAEQAAAEgDAFQgDAEgCAAQgCAAgCgIg");
	this.shape_23.setTransform(84,13.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AhhBaIAAgEQAWADAGgBQAGAAABgMIAAhAIgcATIgCAFIgNgRQAMgDAfgPIAAgwIgLAAQgMAAgLADIgIgJIAqAAIgBg3IAWALIgJAHIAAAlIANAAIALgLIARARIgpAAIAAArIAhgRIABADIgiAWIAABQQAAARgTAIQAAgLgcgIgAgCA0IgCgzIANAIIA/AAIAHgJIAQALIgHAGIAAA9IABAXIgPAFIAAgRIhBAAIAAANIgNAGIACg4gAAJBTIBBAAIAAgfIhBAAgAAJAuIBBAAIAAgfIhBAAgAgFggQAAg/gBgLIAWAKIgIAIIAAAhQARgGAVgMQAUgMAJgJIAOASQgHAAgTAHQgUAIgjALIAAAQQgBAMAOgBIA4AAQAHgBADgHQABgIACgXIAEAAIACAYQACAJAIACQgFAOgRAAIhIAAIgBAAQgQAAAAgTg");
	this.shape_24.setTransform(59.8,13.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AAeATIgoAAQgNAAgJADIgJgJIBHAAIAAg1IgnAAQgMAagOASIgDgCQALgVAGgVQAGgWAEgZIASAKIgHAGIgIAZIAmAAIgBhAIAWALIgIAGIAAAvIAdAAIAMgLIARARIg6AAIAAA1IAoAAIALgLIARARIhEAAQAABHABAOIgPAHIABhcgAhEBCIAAhjQgZAkgOAOIgDgDIASgZQAJgQANgaQAMgbAKgeIATAOIgIAFIgXAqIAMAJIgHAGIAABhIABAnIgPAJIABgtg");
	this.shape_25.setTransform(35.9,13.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AggBsQAegWANgYQANgYACgXQADgWAAgdIAYANIgIAFQAMBdAzASIAAAEQgPgBgHAJQgmgmgHhLQgBAugSAcQgTAcghAQgAgzAwQgnAOgDAHIgKgSQANgCAngLIAAgjIgZAAIgIAGIgMgOQAIgBAFgRIALglIgJAAQgHAAgLADIgJgJIAmAAQAIgfAAgMIAWANIgJAEIgIAaIAiAAIAMgLIAOARIg9AAIgTA6IAaAAIgBgsIAVAKIgIAHIAAAbIARAAIALgLIAOAQIgqAAIAAAgIAlgLIABAEIgmAPIABA8IgOAHIABg+gAgIgOQAagqAIgyIAWAMIgJAFIgQAjIA5AAIAIgLIARASQgQABgSAcIgDgCIANgdIg8AAQgOAXgMAOg");
	this.shape_26.setTransform(12.1,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-0.6,258.9,58.8);


// stage content:
(lib.无标题2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(161.7,161.7);

	this.instance_1 = new lib.元件1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(4,263.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:161.7,y:161.7}}]}).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:12.3,x:161.7,y:161.7}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:24.8,x:161.7,y:161.7}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.998,scaleY:0.998,rotation:37.1,x:161.7,y:161.7}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.998,scaleY:0.998,rotation:49.6,x:161.6,y:161.7}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:62.2,x:161.6,y:161.7}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:74.5,x:161.6,y:161.7}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:87,x:161.6,y:161.7}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:99.3,x:161.6,y:161.7}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:111.6,x:161.6,y:161.7}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.998,scaleY:0.998,rotation:124.1,x:161.6,y:161.7}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.998,scaleY:0.998,rotation:136.6,x:161.6,y:161.6}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:148.9,x:161.6,y:161.6}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:161.5,x:161.6,y:161.6}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:173.9,x:161.6,y:161.6}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:-173.9,x:161.6,y:161.6}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-161.5,x:161.6,y:161.6}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-148.9,x:161.6,y:161.6}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.998,scaleY:0.998,rotation:-136.6,x:161.6,y:161.6}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.998,scaleY:0.998,rotation:-124.1,x:161.7,y:161.6}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-111.6,x:161.7,y:161.6}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-99.3,x:161.7,y:161.6}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:-87,x:161.7,y:161.6}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-74.5,x:161.7,y:161.6}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-62.2,x:161.7,y:161.6}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.998,scaleY:0.998,rotation:-49.6,x:161.7,y:161.6}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.998,scaleY:0.998,rotation:-37.1,x:161.7,y:161.7}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-24.8,x:161.7,y:161.7}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:0.999,scaleY:0.999,rotation:-12.3,x:161.7,y:161.7}}]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:161.7,y:161.7}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(277,247.2,274.3,274.1);
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