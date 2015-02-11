---
layout: post
title: Wall Street Journal: Mapping the Bacteria in New York’s Subways Data (JSON)
date:   2015-02-11 10:21:10
tags: mapping bacteria subways 
---

If you haven't seen this yet, the Wall Street Journal featured an article [Mapping the Bacteria in New York’s Subways Data](http://graphics.wsj.com/patho-map/?sel=stn_311). It is a great map/infographic that allows the user to navigate the individual subway stations in New York City and see what bacteria the crowd sourced sampling found.

A screenshot of the interface.

![](https://raw.githubusercontent.com/nygeog/nygeog.github.com/master/img/wsj-subway-bacteria.png)

I was messing around with the map and looking at how it was created. I was also curious if the data was available. It was a little hidden but I was able to track down the data sources contributing to the map. I have yet to look at this data intimately so if you have any questions I'm probably not the best person to speak to. 

####Wall Street Journal Subway Bacteria Mapping Data (JSON)

* [Subway Stations](http://graphics.wsj.com/patho-map/js/stations.json)

* [Subway Routes](http://graphics.wsj.com/patho-map/js/subway_routes.json)

* [Map Data](http://graphics.wsj.com/patho-map/js/mapData.json)

* [Bacteria Data](http://graphics.wsj.com/patho-map/js/bacteriaNameLookup.json)

* [Bacteria List](http://graphics.wsj.com/patho-map/js/bacteria-list.json)