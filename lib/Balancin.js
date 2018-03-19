

var Balancin = function() {     
		console.log('dafuck');
		};
Balancin.prototype =   {


		init: function(){
	
			var isLoaded;
			var mouseBody;
			var tower1;
			var line;
			var mouseSpring;
			var drawLine;
			var oscilacion;
			var oscDireccion;
			var maxAngle;
			var soltar;
},


	
 		create: function  () {

 			this.oscilacion=10;
 			this.oscDireccion=1;
 			this.maxAngle=20
 			this.soltar=false;

	 		game.physics.startSystem(Phaser.Physics.P2JS);
	   		game.physics.p2.gravity.y = 300;
	    	game.physics.p2.restitution = 0.1;

			
			this.tower2 = game.add.sprite(this.game.world.centerX-100, 600, 'tower1p2');
			game.physics.p2.enable(this.tower2, true);
		  	 //this.tower1.body.setCircle(40);
		   	this.tower2.body.mass=20;
		  	this.tower2.body.fixedRotation=false;
			
			this.attachedBody = game.add.sprite(this.game.world.centerX, 300, 'cursor');
		 	game.physics.p2.enable(this.attachedBody, true);
		 	this.attachedBody.body.static = true;
		  	
 			this.constrain = game.physics.p2.createRevoluteConstraint(this.attachedBody, [0,0], this.tower2, [0,300]);
			
 	
	        this.line = new Phaser.Line(this.tower2.x, this.tower2.y, this.attachedBody.x, this.attachedBody.y);
		      
   	 		game.input.addMoveCallback(this.move, this);
  			game.input.onDown.add(this.click, this);
  			game.input.onUp.add(this.release, this);

  			this.drawLine = true;
        },

  

		click: function(pointer){
		
 		this.soltar=true;
		game.physics.p2.removeConstraint(this.constrain);
	   		 
		},

		release: function(){

			
		},

		move: function(pointer, x, y, isDown) {

		   
		  	
		  this.line.setTo(this.tower2.x, this.tower2.y, this.attachedBody.x, this.attachedBody.y);

		},

		preRender: function(){

		
			       this.line.setTo(this.tower2.x, this.tower2.y-100, this.attachedBody.x, this.attachedBody.y);
			  
		},
			   
		render:function(){
   				 if (this.drawLine)
			    {
			        game.debug.geom(this.line);
			    }
			},

		
		update: function() {
				
				
				//console.log(Math.round(this.attachedBody.body.angle));
				console.log(this.constrain);
				if(this.attachedBody.body.angle>=this.maxAngle){

				this.oscDireccion*=-1;
				}
				if(this.attachedBody.body.angle<=-this.maxAngle){

				this.oscDireccion*=-1;
				}

				if(!this.soltar){

				//this.tower2.body.rotateLeft(this.oscilacion*this.oscDireccion);

				}
				//this.attachedBody.body.rotateLeft(this.oscilacion*this.oscDireccion);	
					
				
			},
};
	
     

			
     
