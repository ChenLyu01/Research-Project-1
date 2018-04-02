
		var config = {
			type: Phaser.AUTO,
			width: 800,
			height: 600,
			backgroundColor: '#2d2d2d',
			scene: {
				preload: preload,
				create: create
			}
		};

		var game = new Phaser.Game(config);

		function preload ()
		{
			//this.load.setBaseURL('http://localhost/');
			this.load.setBaseURL('http://www.06-90.com/projects/p1/');
			
			this.load.image('honeycomb1', 'image/honeycombBlue.png');
			this.load.image('honeycomb2', 'image/honeycombRed.png');
		}

		function create ()
		{
			var line1 = new Phaser.Geom.Line(100, 200, 100 + 4 * 162, 200);
			var group1 = this.add.group({ key: 'honeycomb1', frameQuantity: 4 });
			Phaser.Actions.PlaceOnLine(group1.getChildren(), line1);
			
			var line2 = new Phaser.Geom.Line(100 + 81, 200+46, 100 + 81 +3* 162, 200+46);
			var group2 = this.add.group({ key: 'honeycomb2', frameQuantity: 3 });
			Phaser.Actions.PlaceOnLine(group2.getChildren(), line2);			

			var line3 = new Phaser.Geom.Line(100, 200+1 * 93, 100 + 4 * 162, 200+1 * 93);
			var group3 = this.add.group({ key: 'honeycomb1', frameQuantity: 4 });
			Phaser.Actions.PlaceOnLine(group3.getChildren(), line3);
			
			var line4 = new Phaser.Geom.Line(100 + 81 , 200+ 46+1 * 93, 100 + 81 +3* 162 , 200+ 46+1 * 93);
			var group4 = this.add.group({ key: 'honeycomb2', frameQuantity: 3 });
			Phaser.Actions.PlaceOnLine(group4.getChildren(), line4);	
			
			var line5 = new Phaser.Geom.Line(100, 200+2 * 93, 100 + 4 * 162, 200+2 * 93);
			var group5 = this.add.group({ key: 'honeycomb1', frameQuantity: 4 });
			Phaser.Actions.PlaceOnLine(group5.getChildren(), line5);			
			
		}

