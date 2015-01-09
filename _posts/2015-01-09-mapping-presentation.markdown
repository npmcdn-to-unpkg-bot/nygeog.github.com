---
layout: post
title:  "Presentation: Intro to Processing for Spatial Data Viz"
date:   2015-01-09 12:21:10
categories: Presentations GIS viz
---

<a name="top"></a>

---
Friday, January 9th, 2014 - 11:00 am - Columbia University: CUMC - Hammer 410

For Dr. Catherine Richards Course

---

If you'd like **[download Processing](https://processing.org/download/)** at the beginning and if you are savvy, follow along with Exercise(s) (~9 minutes in).

* ###<a href="https://nygeog.github.io/big/processing_1" target="_blank">Part 1 - Intro</a>
* ###<a href="https://nygeog.github.io/big/processing_2" target="_blank">Part 2 - Life Before Processing</a>
* ###<a href="https://nygeog.github.io/big/processing_3" target="_blank">Part 3 - Seeing Processing</a>
* ###<a href="https://nygeog.github.io/big/processing_4" target="_blank">Part 4 - Shaking Hands with Processing</a>


* ####Code Exercises:

	* [Exercise A Setup](#e_a)
	* [Exercise B Bouncing Ball](#e_b)
	* [Exercise C Bouncing Ball with Changing Color and Speeds](#e_c)
	* [Exercise D Crazy Ball Orbits](#e_d)
	* [Exercise E Mouse Position](#e_e)

* ###<a href="https://nygeog.github.io/big/processing_5" target="_blank">Part 5 - Projecting Data onto a Map</a>

* ####Code Exercises:

	* [Download Exercise F Simple Mercator](https://www.dropbox.com/sh/8rumg04nukqihsf/AAAKfeNn2pXt-aZ8mCUS5vyna?dl=1)



* ###Part 6 - What we can create!
	* Show CitiMotion animation.
	* [NYC Traffic Crashes: Bikes & Pedestrians 1995-2009](https://www.youtube.com/watch?v=UIy3YyFizUo) (what YouTube does to raw video, fuzzy).




---

####Useful Links
* [Processing.org](https://processing.org/)
* [Citi Bike Rides: September 17th & 18th, 2013](http://vimeo.com/89305412)

* University of Washington GPS Viz via [**Schema Design**](https://www.schemadesign.com):
	* [Mapping Health: Shopping for Health](http://vimeo.com/67708596)
		* [CityLab Article](http://www.citylab.com/work/2013/06/what-happens-when-you-track-493-people-heading-grocery-store/5887/)
	* [Mapping Health: Slow/Fast Seattle](http://vimeo.com/67708597)
	
* [Till Nagel](http://tillnagel.com)
	* [Unfolding Map Library](http://tillnagel.com/2013/07/unfolding-map-library/)
	* [UnfoldingMaps.org](http://unfoldingmaps.org)


Thanks: Tom MacWright for creating the [Big presentation system](http://www.macwright.org/2011/10/28/big.html); Processing Instructor at 3rd Ward (forgot his name).


---

#Code Exercises



---



###<a name="e_a">Exercise A Setup</a>
Copy and paste this code into the processing interface.

    int ballSize = 150;

	void setup(){
  		size(400,400);
		}

	void draw(){
  		background(235,235,0);
  		ellipse(width/2,height/2,ballSize, ballSize);
		}
		
####It should look like this
![exercise a](https://raw.githubusercontent.com/nygeog/nygeog.github.com/master/img/e_a_code.png)		
		
####Exercise A Setup code broken down.
Here we create the **ballSize** variable and set it to **150**.

    int ballSize = 150;


Here we are creating out **setup** to build a 400 by 400 pixel window.

	void setup(){
  		size(400,400);
		}

Next, we create our **draw** loop, decide on a background color and position the 2D Primitive **[ellipse](https://processing.org/reference/ellipse_.html)**

	void draw(){
  		background(235,235,0);
  		ellipse(width/2,height/2,ballSize, ballSize);
		}

####Now hit the **PLAY** button.
You should see this pop-up on screen.

![play a](https://raw.githubusercontent.com/nygeog/nygeog.github.com/master/img/e_a_play.png)

[Top](#top)

---

###<a name="e_b">Exercise B Bouncing Ball</a>

	int movement = 0;
	boolean increase = true;
	int ballSize = 150;

	void setup(){
  		size(400,400);
	}

	void draw(){
  		background(235,235,235);
 		ellipse(movement,height/2,ballSize, ballSize);
  		if(increase == true){
    		movement++;
  		}
  		else
  		{
    		movement--;
 		}
  		if(movement > width - ballSize/2){
    	increase = false;
 		 }
  		if(movement < ballSize/2){  
    	increase = true;
  		}
  		print(movement);
		}	


Here we can make the ball move and interact with its surroundings, such as the extents you set for the window in the **Setup**.

[Top](#top)

---

###<a name="e_c">Exercise C Bouncing Ball with Changing Color and Speeds</a>

    Circle circleOne = new Circle(50,0,0,1,5,1,5,10,0,0,0);

    void setup(){
      size(600,800);
      noStroke();
      
    }

    void draw(){
      background(255,255,255);
      circleOne.drawCircle();
    }

    class Circle{
      int ballSize = 150;
      //bouncing a ball with diff. speeds in the y and x
      // int positions for xy
      int posX = 0;
      int posY = 0;

      boolean increaseX = true;
      boolean increaseY = true;

      boolean increaseRed = true;
      boolean increaseGreen = true;
      boolean increaseBlue = true;

      // speeds
      int speedX = 5;
      int speedY = 20;
      int speedRed = 1;
      int speedBlue = 5;
      int speedGreen = 10;
      
      int red = 0;
      int green = 0;
      int blue = 0;


      Circle(int bs, int x, int y, int sX, int sY, 
        int sR, int sG, int sB, int r, int g, int b){
      
        ballSize = bs; 
        
        posX = x;
        posY = y;
        
        speedX = sX;
        speedY = sY;
        speedRed = sR;
        speedGreen = sG;
        speedBlue = sB;
        
        red = r;
        green = g;
        blue = b;
    }

    void drawCircle(){
        
      fill(red, green, blue);
      ellipse(posX,posY,ballSize, ballSize);
      println(red +", "+ green +", "+ blue);
     
      //red++;
      if(increaseRed == true){
        red = red + speedRed;
      }
      else
        {red = red - speedRed;
      }
      
      if(red > 255){
        increaseRed = false;
      }
      if(red < 0){
        increaseRed = true;
      }
      
      //green
        if(increaseGreen == true){
        green = green + speedGreen;
      }
      else
        {green = green - speedGreen;
      }
      
      if(green > 255){
        increaseGreen = false;
      }
      if(green < 0){
        increaseGreen = true;
      }
      
        //blye
        if(increaseBlue == true){
        blue = blue + speedBlue;
      }
      else
        {blue = blue - speedBlue;
      }
      
      if(blue > 255){
        increaseBlue = false;
      }
      if(blue < 0){
        increaseBlue = true;
      }
      
      if(increaseX == true){
        posX = posX + speedX;
      }
      else
      {
        posX = posX - speedX;
      }
      
      if(posX > width - ballSize/2){
        increaseX = false;
      }
      if(posX < ballSize/2){  
        increaseX = true;
      }
      
      
      if(increaseY == true){
        posY = posY + speedY;
      }
      else
      {
        posY = posY - speedY;
      }
      
      if(posY > height - ballSize/2){
        increaseY = false;
      }
      if(posY < ballSize/2){  
        increaseY = true;
      }
      
      
        //print(movement);
        
         
    }
    }


[Top](#top)

---

###<a name="e_d">Exercise D Crazy Ball Orbits</a>

	float positionX = 400.0;
    float positionY = 200; //height/2.0;
    float a = 0;
    float inc = TWO_PI / 100.0;
    ArrayList<Orbit> orbits;



    //Orbit orbitOne;
    //Orbit orbitTwo;

    void setup(){
      size(800,400);
      println(positionY);
      orbits = new ArrayList<Orbit>();
      
      
      for(int i = 0; i < 100; i++){
        
         orbits.add(new Orbit(random(50.0, 200.0), random(50.0, 200.0), TWO_PI / random(5.0, 10.0), random(20,50), int(random(0,255)), int(random(0,255)), int(random(0,255))  ));
      }
      noStroke();
    }

    void draw(){
       background(255,255,255);
       for(int i = 0; i < orbits.size(); i++){
         Orbit orbit = orbits.get(i);
         orbit.drawFigure();
         orbit.modPos();
       }
       
    }

    class Orbit{
      float magnifierX;
      float magnifierY;
      float inc;
      float size;
      float a;
      int red;
      int green;
      int blue;

      
      Orbit (float mX, float mY, float i, float s, int r, int g, int b){  
      magnifierX = mX;
      magnifierY = mY;
      inc = i;
      size = s;
      red = r;
      green = g;
      blue = b;
    }

      void drawFigure(){
        fill(red, green, blue);
        ellipse(positionX + cos(a)*magnifierX, positionY + sin(a)*magnifierY, size, size); 
        //rect(positionX + cos(a)*magnifierX, positionY + sin(a)*magnifierY, 10, 50); 
      
    }

      void modPos(){
        a = a + inc;

    }
    }


[Top](#top)

---

###<a name="e_e">Exercise E Mouse Position</a>

	float positionX = 400.0;
    float positionY = 200; //height/2.0;
    float a = 0;
    float inc = TWO_PI / 100.0;
    ArrayList<Orbit> orbits;
    boolean frozen = false;



    //Orbit orbitOne;
    //Orbit orbitTwo;

    void setup(){
      size(800,600);
      println(positionY);
      orbits = new ArrayList<Orbit>();
      
      float mX;
      float mY;
      float s;
      int r;
      int g;
      int b;
      // variables for each of the things we modify in the class
      
      for(int i = 0; i < 400; i++){
        //for loop to decide how many things (400) 
         mX = random(100.0, 400.0);
         mY = random(100.0, 400.0);
         inc = TWO_PI / random(100.0, 200.0);
         s = random(10, 100);
         r = int(random(0, 255));
         g = int(random(0, 255));
         b = int(random(0, 255));
         
         // set the random vairables
         // and add to orbits
         
         orbits.add(new Orbit(mX, mY, inc, s, r, g, b));
      }
      noStroke();
    }

    void draw(){
       background(0,0,0);
       if(frozen == false){
       positionX = mouseX;
       positionY = mouseY;
       }
       for(int i = 0; i < orbits.size(); i++){
         // for loop handles all our orbits
         Orbit orbit = orbits.get(i);
         orbit.drawFigure();
         orbit.modifyVariables();
       }  
    }


    void keyPressed(){
     if(frozen == true){
       frozen = false;
     }else{
       frozen = true;
     }
    }

    class Orbit{
      float magnifierX;
      float magnifierY;
      float inc;
      float size;
      float a;
      float c;
      int red;
      int green;
      int blue;

      
      Orbit (float mX, float mY, float i, float s, int r, int g, int b){  
      magnifierX = mX;
      magnifierY = mY;
      inc = i;
      size = s;
      red = r;
      green = g;
      blue = b;
    }

      void drawFigure(){
        
        fill(red + sin(a)*100, green + cos(c)*200, blue + tan(c)*100);
        //ellipse(positionX + cos(a)*magnifierX, positionY + sin(a)*magnifierY,size + tan(a) *20, size + tan(a)*20); 
        rect(positionX + cos(a)*magnifierX, positionY + sin(a)*magnifierY, size + sin(a) *20, size + cos(a)*20);
      
    }

      void modifyVariables(){
        a = a + inc;
        c = c + inc*2;

    }
    }


[Top](#top)

---


<!--Ok great. What other tools were you thinking about? Just asking to make sure I didn't cover them


On Dec 30, 2014, at 7:29 AM, Daniel M Sheehan <dms2203@columbia.edu> wrote:

Catie, just confirming that I’ll be around and am able to do the talk Jan 9th. 

Should I give an overview of some of the other tools they could use for mapping and viz as well? 


On Dec 11, 2014, at 11:03 AM, Richards, Catherine <cr2320@cumc.columbia.edu> wrote:

Well I didn't even know there was a difference between processing and processing.js. so maybe you could explain that difference as well, if it's important.

The students will have computers and can follow along if you prefer. But if it requires downloading any software they don't already have I would maybe skip the following along part, unless them taking 10 minutes to download something is ok.

This lecture is for a class on data visualization in SAS. But I also introduce other software and tools that they can use. Gina gave a guest lecture talking about the importance of data viz in her research and showed animated maps you created. The students loved the maps and wanted to just hear about processing and what is required/necessary to make maps in processing.

Catherine

On Dec 11, 2014, at 7:37 AM, Daniel M Sheehan <dms2203@columbia.edu> wrote:

Disclaimer: I really only know some of the Processing application, not processing.js. Is this for a class, workshop or something else? Will the students have computers and work along? 

I’m 85% sure I can do it, I just need to see how some January travel plans pan out. I’ll put it in my calendar and plan for it. 

On Dec 8, 2014, at 1:36 PM, Richards, Catherine <cr2320@cumc.columbia.edu> wrote:

Hi Danny,

Would you be interested and have time to give a 30-45 minute lecture on processing.js. Mostly just an overview of what it is, what us required to make maps in processing (code and/or data manipulation) as well as some examples, on Friday January 9th at 11 am?

Catherine-->