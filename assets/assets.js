(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"assets_atlas_", frames: [[190,115,93,113],[190,0,93,113],[0,0,93,113],[0,115,93,113],[95,0,93,113],[380,115,93,113],[95,115,93,113],[285,0,93,113],[285,115,93,113],[380,0,93,113]]}
];


// symbols:



(lib.CopiadefrutiParesApple = function() {
	this.spriteSheet = ss["assets_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.frutiPares1 = function() {
	this.spriteSheet = ss["assets_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.frutiParesApple = function() {
	this.spriteSheet = ss["assets_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.frutiParesBanana = function() {
	this.spriteSheet = ss["assets_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.frutiParesBerenjena = function() {
	this.spriteSheet = ss["assets_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.frutiParesCherry = function() {
	this.spriteSheet = ss["assets_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.frutiParesFrutilla = function() {
	this.spriteSheet = ss["assets_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.frutiParesGrapes = function() {
	this.spriteSheet = ss["assets_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.frutiParesNaranja = function() {
	this.spriteSheet = ss["assets_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.frutiParesPera = function() {
	this.spriteSheet = ss["assets_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Interpolación8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAyCsQgEgHgGgVQgGgUgIggQgGgfgNgMQgMgMgXABIgYAAIAACGIhMAAIAAlQQATgEAagBQAbgCAfAAQAlAAAbAGQAbAGATAOQAPAMAIASQAIASAAAYQAAAWgJARQgJARgOALQgNALgPAFIAAACQARAHALARQALAQAGAYIALAnIAJAjQAFAPADAHgAgnhxIgNABIAABfIAfAAQAcAAAQgOQAQgNAAgXQAAgXgPgMQgPgMgaAAIgWABg");
	this.shape.setTransform(31.1,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABJCrIgahYIhhAAIgZBYIhQAAIBplVIBkAAIBqFVgAAjAZIgVhIIgJghIgHggIgBAAIgIAhIgIAgIgUBIIBKAAg");
	this.shape_1.setTransform(-2,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah6CsIAAlQQASgEAagBQAZgCAkAAQAjAAAZAGQAaAHASAOQAQANAKAVQAKAUAAAZQAAAZgIAVQgIAUgPAOQgUATgdAJQgcAIgiAAIgOAAIgMgBIAAB6gAghhwQgIABgEABIAABlQAFABAGAAIAPABQAeAAASgPQARgOAAgbQAAgYgPgNQgQgNgcAAIgUABg");
	this.shape_2.setTransform(-29.3,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.9,-35.2,97.8,70.5);


(lib.Interpolación7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCByQgdgPgRgdQgQgcgBgoQABgnAPgeQARgeAegPQAegQAngBQAmABAdAQQAcAPAPAdQARAcAAAmQAAAsgUAdQgSAegdAOQgeAOghABQglgBgdgPgAgcg/QgLALgFARQgFARAAASQAAAVAGARQAFAQAMAKQALAKAQAAQAXAAANgVQANgTAAgiQAAgTgFgQQgFgRgLgLQgLgKgRgBQgSABgLAKg");
	this.shape.setTransform(103.8,6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLCnQgYgQgPgcQgOgdABgnQgBgpAPgdQAQgdAZgQQAZgPAeAAQAWAAASAHQAQAHAJAOIABAAIAAiHIBNAAIAAEeIABApIABAhIhEAAIgEglIgBAAQgMAUgUALQgVALgXAAQgfgBgXgPgAgagHQgLAIgHARQgFAQgBATQAAAgAPASQAOASAXABQASgBAMgKQALgKAEgRIABgIIABgJIAAggIAAgIIgBgGQgDgQgMgKQgMgKgSgBQgQAAgNAJg");
	this.shape_1.setTransform(73.4,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhMB3QgRgLgKgRQgJgRgBgVQABggASgVQASgVAhgKQAggKArABIAAgEQAAgHgDgHQgDgIgKgEQgKgGgSAAQgTAAgTAGQgRAFgNAHIgPgxQANgIAZgGQAZgHAhgBQApABAYAOQAYAOAKAYQALAZgBAdIAABWIABAhIACAbIhFAAIgFgZIgBAAQgMAPgSAHQgSAJgXAAQgYgBgTgKgAgBAKQgQADgJAJQgKAJAAAPQAAAPAJAHQAIAHANAAQAOAAALgIQAKgIAFgMIABgHIAAgHIAAgbIgEAAQgSAAgOAEg");
	this.shape_2.setTransform(44.9,6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhKB/IAAimIgBguIgBgjIBCAAIADAtIACAAQAFgSAMgLQALgLANgGQANgFAMAAIAJAAIAHABIAABJIgJgCIgMAAQgVAAgOAKQgOALgEASIgBAIIAAAIIAAB+g");
	this.shape_3.setTransform(24,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhLB3QgTgLgIgRQgKgRAAgVQAAggASgVQASgVAggKQAigKArABIAAgEQgBgHgDgHQgDgIgKgEQgKgGgSAAQgTAAgSAGQgTAFgNAHIgNgxQANgIAYgGQAYgHAigBQApABAYAOQAYAOAKAYQALAZgBAdIAABWIABAhIADAbIhGAAIgEgZIgCAAQgMAPgTAHQgRAJgWAAQgagBgRgKgAgBAKQgQADgKAJQgJAJAAAPQAAAPAIAHQAJAHAOAAQANAAAKgIQAMgIAEgMIAAgHIABgHIAAgbIgEAAQgSAAgOAEg");
	this.shape_4.setTransform(-0.6,6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah+CxIAAkJIAAgtIgCgmIBDAAIAEAjIABAAQAOgUAUgKQAVgKAbAAQAbAAAYAPQAXAPAOAcQAOAdABAnQgBAtgQAdQgRAdgZAPQgaAOgcAAQgWAAgQgIQgRgIgJgNIgBAAIAAB8gAgehpQgNALgEARIgBAHIgBAHIAAAiIABAJIABAHQAEAPAMAKQAMAKARABQAZgBANgSQAOgTABggQAAgTgGgQQgGgQgMgJQgLgIgRgBQgRAAgMALg");
	this.shape_5.setTransform(-28.1,11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhTBfQghghgBg7QAAgXAHgXQAIgYAPgTQAPgTAYgMQAYgLAfAAQApAAAXASQAZASALAcQALAcAAAfIgBARIgCANIieAAQABAQAKAKQAKALAPAFQAOAFASAAQAUAAARgDQAQgCAQgFIAKA0QgTAIgXADQgWAEgaAAQg+gBgjghgAAvgbQAAgKgEgLQgDgMgKgIQgKgJgRAAQgPAAgKAIQgLAIgFAMQgFALgBALIBbAAIAAAAg");
	this.shape_6.setTransform(-57.1,6.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhKB/IAAimIgBguIgBgjIBCAAIADAtIACAAQAFgSAMgLQALgLANgGQANgFAMAAIAJAAIAHABIAABJIgJgCIgMAAQgVAAgOAKQgOALgEASIgBAIIAAAIIAAB+g");
	this.shape_7.setTransform(-78.9,6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah6CsIAAlQQASgEAagBQAZgCAkAAQAjAAAZAGQAaAHASAOQAQANAKAVQAKAUAAAZQAAAZgIAVQgIAUgPAOQgUATgdAJQgcAIgiAAIgOAAIgMgBIAAB6gAghhwQgIABgEABIAABlQAFABAGAAIAPABQAeAAASgPQARgOAAgbQAAgYgPgNQgQgNgcAAIgUABg");
	this.shape_8.setTransform(-103,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.4,-35.2,244.9,70.5);


(lib.frutiparesTomate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.frutiPares1();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-56.5);

	this.instance_1 = new lib.frutiParesApple();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47,-57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-56.5,93,113);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuVA0QhXgdg1ggQgzgfAAgWQAAgoC5gMQB5gIFPAAQYoAAAAA8QAAApqIBJQp1BHkgAAQj3AAjWhHg");
	this.shape.setTransform(110.9,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,221.9,24.7), null);


(lib.CopiadefrutiparesTomate322 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.frutiPares1();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-56.5);

	this.instance_1 = new lib.CopiadefrutiParesApple();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47,-57);

	this.instance_2 = new lib.frutiParesCherry();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-47,-57);

	this.instance_3 = new lib.frutiParesNaranja();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-47,-57);

	this.instance_4 = new lib.frutiParesBanana();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-47,-57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-56.5,93,113);


(lib.CopiadefrutiparesTomate32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.frutiPares1();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-56.5);

	this.instance_1 = new lib.frutiParesCherry();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47,-57);

	this.instance_2 = new lib.frutiParesNaranja();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-47,-57);

	this.instance_3 = new lib.frutiParesBanana();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-47,-57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-56.5,93,113);


(lib.CopiadefrutiparesTomate3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.frutiPares1();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-56.5);

	this.instance_1 = new lib.frutiParesNaranja();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47,-57);

	this.instance_2 = new lib.frutiParesBanana();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-47,-57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-56.5,93,113);


(lib.CopiadefrutiparesTomate23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.frutiPares1();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-56.5);

	this.instance_1 = new lib.frutiParesBerenjena();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47,-57);

	this.instance_2 = new lib.frutiParesFrutilla();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-47,-57);

	this.instance_3 = new lib.frutiParesBerenjena();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-47,-57);

	this.instance_4 = new lib.frutiParesBanana();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-47,-57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-56.5,93,113);


(lib.CopiadefrutiparesTomate222 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.frutiPares1();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-56.5);

	this.instance_1 = new lib.frutiParesPera();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47,-57);

	this.instance_2 = new lib.frutiParesGrapes();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-47,-57);

	this.instance_3 = new lib.frutiParesFrutilla();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-47,-57);

	this.instance_4 = new lib.frutiParesBerenjena();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-47,-57);

	this.instance_5 = new lib.frutiParesBanana();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-47,-57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-56.5,93,113);


(lib.CopiadefrutiparesTomate22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.frutiPares1();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-56.5);

	this.instance_1 = new lib.frutiParesGrapes();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47,-57);

	this.instance_2 = new lib.frutiParesFrutilla();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-47,-57);

	this.instance_3 = new lib.frutiParesBerenjena();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-47,-57);

	this.instance_4 = new lib.frutiParesBanana();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-47,-57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-56.5,93,113);


(lib.CopiadefrutiparesTomate2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.frutiPares1();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-56.5);

	this.instance_1 = new lib.frutiParesFrutilla();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47,-57);

	this.instance_2 = new lib.frutiParesBerenjena();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-47,-57);

	this.instance_3 = new lib.frutiParesBanana();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-47,-57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-56.5,93,113);


(lib.CopiadefrutiparesTomate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.frutiPares1();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-56.5);

	this.instance_1 = new lib.frutiParesBanana();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47,-57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-56.5,93,113);


(lib.Interpolación6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0.1,-19.4,1,1,0,0,0,111,12.3);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9500").s().p("AwzELQhnAAhKhJQhJhKAAhnIAAghQAAhnBJhKQBKhJBnAAMAhnAAAQBnAABKBJQBJBKAABnIAAAhQAABnhJBKQhKBJhnAAg");
	this.shape.setTransform(0,-8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC7BB").s().p("AwzCGQhnAAhJhJQhJhIgBhmIAAgCIAAgSQACBjBHBHQBKBJBnAAMAhnAAAQBnAABKhJQBHhHAChjIAAAUQAABnhKBHQhJBJhnAAg");
	this.shape_1.setTransform(0,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF8128").s().p("AwzCPQhnAAhKhKQhJhJAAhnIAAgiIAAgBQABBnBJBIQBJBJBnAAMAhnAAAQBnAABJhJQBIhGAChkIAAAeQAABnhJBJQhKBKhnAAg");
	this.shape_2.setTransform(0,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AxfFWQhuAAhPheQhPheAAiEIAAgrQAAiEBPheQBPheBuAAMAi/AAAQBuAABPBeQBPBeAACEIAAArQAACEhPBeQhPBehuAAg");
	this.shape_3.setTransform(0,-3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BDBFC1").s().p("AxfCsQhuAAhPheQhPhdAAiFIAAgXQAEB9BLBZQBPBeBuAAMAi/AAAQBuAABPheQBLhZAEh9IAAAXQAACFhPBdQhPBehuAAg");
	this.shape_4.setTransform(0,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A8ABAE").s().p("AxfCtQhuAAhPheQhPhdAAiEIAAgaQAFB7BKBYQBPBeBuAAMAi/AAAQBuAABPheQBKhYAFh7IAAAaQAACEhPBdQhPBehuAAg");
	this.shape_5.setTransform(0,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.7,-38,277.6,76);


(lib.Interpolación5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0.1,-19.4,1,1,0,0,0,111,12.3);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9500").s().p("AwzELQhnAAhKhJQhJhKAAhnIAAghQAAhnBJhKQBKhJBnAAMAhnAAAQBnAABKBJQBJBKAABnIAAAhQAABnhJBKQhKBJhnAAg");
	this.shape.setTransform(0,-8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC7BB").s().p("AwzCGQhnAAhJhJQhJhIgBhmIAAgCIAAgSQACBjBHBHQBKBJBnAAMAhnAAAQBnAABKhJQBHhHAChjIAAAUQAABnhKBHQhJBJhnAAg");
	this.shape_1.setTransform(0,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF8128").s().p("AwzCPQhnAAhKhKQhJhJAAhnIAAgiIAAgBQABBnBJBIQBJBJBnAAMAhnAAAQBnAABJhJQBIhGAChkIAAAeQAABnhJBJQhKBKhnAAg");
	this.shape_2.setTransform(0,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AxfFWQhuAAhPheQhPheAAiEIAAgrQAAiEBPheQBPheBuAAMAi/AAAQBuAABPBeQBPBeAACEIAAArQAACEhPBeQhPBehuAAg");
	this.shape_3.setTransform(0,-3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BDBFC1").s().p("AxfCsQhuAAhPheQhPhdAAiFIAAgXQAEB9BLBZQBPBeBuAAMAi/AAAQBuAABPheQBLhZAEh9IAAAXQAACFhPBdQhPBehuAAg");
	this.shape_4.setTransform(0,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A8ABAE").s().p("AxfCtQhuAAhPheQhPhdAAiEIAAgaQAFB7BKBYQBPBeBuAAMAi/AAAQBuAABPheQBKhYAFh7IAAAaQAACEhPBdQhPBehuAAg");
	this.shape_5.setTransform(0,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.7,-38,277.6,76);


(lib.CopiadeSímbolo11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBWQgGgIAAgKQAAgLAGgHQAIgGAJgBQALABAHAGQAGAHAAALQAAAKgGAIQgGAGgMABQgKgBgHgGgAgOAeIgGh6IApAAIgFB6g");
	this.shape.setTransform(6.8,-20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAnBbIgOgvIgzAAIgNAvIgrAAIA4i1IA1AAIA4C1gAATANIgMglIgEgRIgEgSIAAAAIgEASIgFARIgLAlIAoAAg");
	this.shape_1.setTransform(-5.7,-21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVBbIAAhLIg5hqIAvAAIASAsIAIASIAFAQIABAAIAGgQIAIgSIASgsIAuAAIg8BpIAABMg");
	this.shape_2.setTransform(-20.1,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},48).wait(17));

	// Capa 3
	this.text = new cjs.Text("Listo", "bold 27px 'Myriad Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.parent = this;
	this.text.setTransform(0,-28.7,0.974,0.974);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(29).to({_off:false},0).to({scaleX:1.81,scaleY:1.81,x:0.1,y:-42.4},5).to({scaleX:1.36,scaleY:1.36,y:-35},3).wait(7).to({scaleX:0.33,scaleY:0.33,y:-17.9},3).to({_off:true},1).wait(17));

	// Capa 2
	this.instance = new lib.Interpolación7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-12.4,0.469,0.469);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1.07,scaleY:1.07},5).to({scaleX:1,scaleY:1},3).to({startPosition:0},6).to({regX:-0.1,scaleX:0.52,scaleY:0.52,x:-0.1},5).to({_off:true},1).wait(36));

	// Capa 1
	this.instance_1 = new lib.Interpolación5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.289,0.289);
	this.instance_1._off = true;

	this.instance_2 = new lib.Interpolación6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1.13,1.13);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true,scaleX:1.13,scaleY:1.13},6).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},6).to({scaleX:1,scaleY:1},2).wait(55).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Símbolo11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.instance = new lib.Interpolación7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-9.4);
	this.instance._off = true;

	this.instance_1 = new lib.Interpolación8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-9.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:-0.1,regY:-0.1,scaleX:0.6,scaleY:0.6,x:-0.1},2).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,x:0},3).wait(5).to({_off:false,regX:-0.1,regY:-0.1,scaleX:0.6,scaleY:0.6,x:-0.1},3).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0},2).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},3).wait(5).to({startPosition:0},0).to({_off:true,regX:-0.1,regY:-0.1,scaleX:0.6,scaleY:0.6,x:-0.1},3).wait(5));

	// Capa 1
	this.instance_2 = new lib.Interpolación5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.289,0.289);
	this.instance_2._off = true;

	this.instance_3 = new lib.Interpolación6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1.13,1.13);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true,scaleX:1.13,scaleY:1.13},6).wait(15).to({_off:false,scaleX:0.29,scaleY:0.29},3).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},6).to({scaleX:1,scaleY:1},2).wait(10).to({startPosition:0},0).to({scaleX:1.13,scaleY:1.13},3).to({_off:true,scaleX:0.29,scaleY:0.29},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.assets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.CopiadeSímbolo11();
	this.instance.parent = this;
	this.instance.setTransform(345.4,72.1);

	this.instance_1 = new lib.Símbolo11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(345.4,-78.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Capa 1
	this.instance_2 = new lib.CopiadefrutiparesTomate322();
	this.instance_2.parent = this;
	this.instance_2.setTransform(631.3,358.5);

	this.instance_3 = new lib.CopiadefrutiparesTomate32();
	this.instance_3.parent = this;
	this.instance_3.setTransform(294.3,358.5);

	this.instance_4 = new lib.CopiadefrutiparesTomate3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(189.3,358.5);

	this.instance_5 = new lib.CopiadefrutiparesTomate222();
	this.instance_5.parent = this;
	this.instance_5.setTransform(644.5,219.5);

	this.instance_6 = new lib.CopiadefrutiparesTomate22();
	this.instance_6.parent = this;
	this.instance_6.setTransform(530.7,219.5);

	this.instance_7 = new lib.CopiadefrutiparesTomate23();
	this.instance_7.parent = this;
	this.instance_7.setTransform(416.9,219.5);

	this.instance_8 = new lib.CopiadefrutiparesTomate2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(303.1,219.5);

	this.instance_9 = new lib.CopiadefrutiparesTomate();
	this.instance_9.parent = this;
	this.instance_9.setTransform(189.3,219.5);

	this.instance_10 = new lib.frutiparesTomate();
	this.instance_10.parent = this;
	this.instance_10.setTransform(75.5,219.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(389,403,662,252);
// library properties:
lib.properties = {
	width: 720,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/assets_atlas_.png?1497633998459", id:"assets_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;