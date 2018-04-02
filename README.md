## Welcome to my Research Project One

First, I want to introduce the game engine to you, a famous game engine: Phaser.

Its URL first [Phaser](http://phaser.io/). You please read the instructions in the website first.

In fact, I want to make one [Navigable Video](http://www.06-90.com/final/finalprojectChenLyu.html) Not a traditional games. The technology of this kind of video is what I want to study.

### Required technology

Let's look at this picture together.![Image text](https://github.com/ChenLyu01/Research-Project-1/blob/master/image/image1.png) I need to put it on the top of the video so that it can be clicked by the audience.

```
 for(var i=0;i<3;i++){//img.length
	for(var a=0; a<4; a++){
		x=parseInt(Math.random()*(45-1));
		ctx.drawImage(img1,162*(a)+20 ,93*(i)+30);
		this.rects.push({
			blockID: this.blockID ++,
			coord: [162*(a)+20, 93*(i)+30, 108, 93],
			selected: 0,
			rnd: x
		});
	}
}
for(var i=0;i<2;i++){    
	for(var a=0; a<3; a++){
		x=parseInt(Math.random()*(45-1));
		ctx.drawImage(img2,162*(a)+20+81 ,93*(i)+30+46);
		this.rects.push({
			blockID: this.blockID ++,
			coord: [162*(a)+20+81, 93*(i)+30+46, 108, 93],
			selected: 0,
			rnd: x
		});
	}   
}
```

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/ChenLyu01/Research-Project-1/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
