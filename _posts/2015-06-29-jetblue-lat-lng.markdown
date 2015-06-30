---
layout: post
title: Getting Lat, Lng from Jetblue FlyFi
date:   2015-06-29 14:21:10
tags: latlng travel web jetblue
---

Being a fairly regular [JetBlue](http://www.jetblue.com/) customer - they don't fly everywhere but do most major cities across the US - I have come to enjoy checking out the back-of-the-seat heads up display of flight tracking. For a while they were using **Google Maps** but that display now uses **OpenStreetMap** as a basemap. 

Ever since I started seeing wifi on JetBlue flights, via **FlyFi**, I also enjoyed looking at that flight tracker as well. If you are on a JetBlue flight go to [http://www.flyfi.com/travel/](http://www.flyfi.com/travel/) (this link won't work if not currently on a JetBlue flight). 

![un](https://raw.githubusercontent.com/nygeog/nygeog.github.com/master/_posts/img/jetblue-flyfi-map.png)
*FlyFi flight tracker*

After staring at the FlyFi flight tracker map, I realized that since its served I could probably check out the code. After some searching through Google Chrome's Developer Tools I was able to track down the javascript file. The portion of the code that loads in the new Lat,Lng's was found below. (Note the highlighting of the word *maps* as finding that or *map* in a page is always a great way to track down map data, especially if there is a lot other stuff in the page. 


![un](https://raw.githubusercontent.com/nygeog/nygeog.github.com/master/_posts/img/jetblue-flyfi-screenshot.png)
*FlyFi javascript file with added Lat,Lng's shown*

Now using [Chris Albon's **Plot Points On A Map** blogpost](http://chrisalbon.com/python/matplotlib_plot_points_on_map.html), we can use **[Basemap](http://matplotlib.org/basemap/)** to plot these Lat,Lng's from this flight. 

![un](https://raw.githubusercontent.com/nygeog/nygeog.github.com/master/_posts/img/jetblue-flyfi-map.png)
