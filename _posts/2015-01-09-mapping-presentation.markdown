---
layout: post
title:  "Presentation: Geospatial data visualization using Processing"
date:   2015-01-09 12:21:10
categories: Presentations GIS viz
---
---
Friday January 9th - 11 am

Dr. Catherine Richards

---

###Data Viz Course



####View the Presentation:
If you'd like [download Processing](https://processing.org/download/) at the beginning and if you are savvy, follow along with Exercise A (~9 minutes in).

* ###<a href="https://nygeog.github.io/big/processing_1" target="_blank">Part 1 - Intro</a>
* ###<a href="https://nygeog.github.io/big/processing_2" target="_blank">Part 2 - Life Before Processing</a>
* ###<a href="https://nygeog.github.io/big/processing_3" target="_blank">Part 3 - Seeing Processing</a>
* ###<a href="https://nygeog.github.io/big/processing_4" target="_blank">Part 4 - Shaking Hands with Processing</a>



###Exercise A Setup
Copy and paste this code into the processing interface.

    int ballSize = 150;

	void setup(){
  		size(400,400);
		}

	void draw(){
  		background(235,235,0);
  		ellipse(width/2,height/2,ballSize, ballSize);
		}
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


* ###<a href="https://nygeog.github.io/big/processing_5" target="_blank">Part 5</a>

####Useful Links
* [Processing.org](https://processing.org/)
* [Citi Bike Rides: September 17th & 18th, 2013](http://vimeo.com/89305412)
(http://vimeo.com/67708597)
* University of Washington GPS Viz via [**Schema Design**](https://www.schemadesign.com):
	* [Mapping Health: Shopping for Health](http://vimeo.com/67708596)
	* [Mapping Health: Slow/Fast Seattle](Mapping Health: Slow/Fast Seattle)
	
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