[Research Project One Demo](http://www.06-90.com/projects/p1/index.html). 



## Welcome to my Research Project One

First, I want to introduce the game engine to you, a famous game engine, named Phaser.

Its URL is [Phaser](http://phaser.io/). You could read the instructions from its website first.

Maybe you'll ask me why you wanted to do some research on this thing?

I want to say. "In fact, I want to make one [Navigable Video](http://www.06-90.com/final/finalprojectChenLyu.html)(This is one of my compositions). Actually, It is **Not** a traditional games!" You know, the technology of this type of video is what I want to study. But I need to achieve my purpose as quickly as possible.    : )

Okey, let's go!

### Required technology

See the picture below.

![Image text](https://github.com/ChenLyu01/Research-Project-1/blob/master/image/image1.png) 

I need to put it on the top of a video, so that it can be clicked by the audience.



- Code without the game engine

```
 for(var i=0;i<3;i++){//img.length
	for(var a=0; a<4; a++){
		ctx.drawImage(img1,162*(a)+20 ,93*(i)+30);
	}
}
for(var i=0;i<2;i++){    
	for(var a=0; a<3; a++){
		ctx.drawImage(img2,162*(a)+20+81 ,93*(i)+30+46);
	}   
}
```




- Code after using the Phaser

![Image text](https://github.com/ChenLyu01/Research-Project-1/blob/master/image/image2.png)

This is a picture generated by this game engine. The graphics look the same, but the code is **completely** different.

```
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
	
```

You may click on this link [Research Project One](http://www.06-90.com/projects/p1/index.html). 
I hope I could have a chance to recode this function. It's a bit complicated to code like this.



### Source code description

var line1 = new Phaser.Geom.Line(100, 200, 100 + 4 * 162, 200);

// **line1** is a function for declaring a straight line (X1, Y2, X2, Y2) **X and Y** are the coordinates of the starting point and the end point.

var group1 = this.add.group({ key: 'honeycomb1', frameQuantity: 4 });

// **key** is the name of the image and **frameQuantity** means how many pictures it need to draw.

Phaser.Actions.PlaceOnLine(group1.getChildren(), line1);

// **Phaser.Actions.PlaceOnLine** It's an event that the engine draws the line.




### Reference
[The official example](https://labs.phaser.io/edit.html?src=src\actions\place%20on%20line.js) 

