var Carta = function () { 
	
		};
		
	Carta.prototype =   {

		init: function(){
		var pizza;
		var tipoCarta;
		var tiempoAbierta=2;
		var timeActive;
		},
		preload: function () {

			 this.timeActive =  false;
	
			 game.load.atlasXML('cartaModel', 'assets/loadCarta.png', 'assets/loadCarta.xml');
			 game.load.atlasXML('pizzaCard', 'assets/pizzaCard.png', 'assets/pizzaCard.xml');
			
			
			},
		create: function() {
	
			game.add.text(0, 0, "Welcome to pares");
			 
    		var carta = game.add.sprite(300, 200, 'cartaModel');
			carta.anchor.setTo(0.5);
			carta.animations.add('aparecer');
    		carta.animations.play('aparecer', 30, false);
			var entrada = game.add.tween(carta).to({ y: 150 }, 200, Phaser.Easing.Quadratic.InOut, true, 1, 0, true);
   			entrada.onComplete.addOnce(onComplete, this);
			
			function onComplete() {
			
				carta.destroy();
				pizza=game.add.button(300, 200, 'pizzaCard', girarCarta);
				
				pizza.anchor.setTo(0.5);
				
				
			}
			
			function girarCarta(){
				
				rotar();
			/*	
				
				if(this.timeActive){
				game.time.events.add(Phaser.Timer.SECOND * 3, rotar).autoDestroy = true;	
					
				game.time.events.onComplete.addOnce(function () {
					console.log('desactivando');
					this.timeActive=false;
					
				});
				}else{
					
					this.timeActive=false;
				}
				
				*/
				
				
				function rotar(){
				
				var tween1 = game.add.tween(pizza.scale);
				var tween2 = game.add.tween(pizza.scale);	
				tween1.to({ x: 0 }, 100, Phaser.Easing.Linear.NONE);
				tween1.onComplete.addOnce(function () {
			
						if(pizza.frame == 0)
							pizza.frame = 1;
									
						else
							pizza.frame = 0;
					});

				tween2.to({ x: 1 }, 100, Phaser.Easing.Linear.None);
				tween1.chain(tween2);
				tween1.start();	

					}
					}

				},
		
		
		
		
		};