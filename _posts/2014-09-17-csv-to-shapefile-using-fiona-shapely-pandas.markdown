---
layout: post
title:  "CSV to Shapefile conversion with Pandas, Fiona and Shapely"
date:   2014-09-17 11:31:10
categories: 2014 CSV Shapefile Pandas Fiona Shapely
---


##The Problem:
I'm sick of having to open Windows, then an ArcPy script (#firstworldproblems), just to convert a CSV to a Shapefile. And I also want to program it so when I get updated files I can just run a Python program rather than go through some point and clicks in [QGIS](http://www.qgis.org). Though, I do think QGIS is awesome, I just don't enjoy programming with it. I really enjoy working with Python's R-like cousin [Pandas](http://pandas.pydata.org). 

##Sean Gilles of MapBox - Fiona and Rasterio: Data Access for Python Programmers and Future Python Programmers talk at FOSS4G
This morning approaching lunch I started listening/watching to [@SeanGilles](https://twitter.com/sgillies)' talk from [FOSS4G 2014](https://2014.foss4g.org/) [Fiona and Rasterio: Data Access for Python Programmers and Future Python Programmers — Sean Gillies, Mapbox](http://vimeo.com/106220666). I didn't even watch the whole thing before I started to see which Python modules I had. 

[![FOSS4G PDX- Sean Gillies](https://dl.dropboxusercontent.com/u/36281098/images/seangillies.png)](http://vimeo.com/106220666)

I realized the only thing I was missing to write some scripts to do this task without having to use [ArcPy](http://resources.arcgis.com/en/help/main/10.1/index.html#//000v000000v7000000) was [Fiona](https://pypi.python.org/pypi/Fiona). Luckily, I found [Installing Open Source Geo Software: Mac Edition](https://github.com/nvkelso/geo-how-to/wiki/Installing-Open-Source-Geo-Software:-Mac-Edition) which has a quick MaxOSX install command.

##Installing Fiona
From [Installing Open Source Geo Software: Mac Edition](https://github.com/nvkelso/geo-how-to/wiki/Installing-Open-Source-Geo-Software:-Mac-Edition):

1. Open your Terminal in mac (Ctrl + Spacebar then type Terminal to search)
2. Copy the code below and paste.

		sudo ARCHFLAGS='-arch x86_64' pip install Fiona
	
3. Type your password for installing software on the Mac - now you have Fiona installed! 

##Back to the task.
So now I have all the required modules; Fiona, Shapely and Pandas.

##Dharhas Pothina's Slides - where I got my code
For the code I went straight to [Dharhas Pothina's Slides from his talk: Python and GIS at TNRIS GeoRodeo - May 30th, 2014](http://slidedeck.io/dharhas/tnris-georodeo-2014) and [here's his GitHub](https://github.com/dharhas)

##Code to import a CSV into a Shapefile
I only slight modified his code, but here is a pretty straight-forward script for bringing a CSV into a DataFrame and then turning it into a Shapefile. 

	import pandas as pd
	from shapely.geometry import Point, mapping
	from fiona import collection

	inCSV  = '/Users/....../sites_xy_data.csv'
	shpOut = '/Users/....../sites.shp'
	lng = 'Longitude'
	lat = 'Latitude'
	
	schema = { 'geometry': 'Point', 'properties': { 'SITEID': 'str' } }

	df = pd.read_csv(inCSV) 

	data = df
	with collection(shpOut, "w", "ESRI Shapefile", schema) as output:
    	for index, row in data.iterrows():
        	point = Point(row[lng], row[lat])
        	output.write({
            	'properties': {'SITEID': row['SITEID']},
            	'geometry': mapping(point)
        	})
        	
This was a fairly simple file with just a Uniquie ID (SITEID) and some Latitude, Longitude data. More complex files may come in later posts. 

##Next Steps
I'm really looking forward to using some of the Geoprocessing functions - checkout [Tom MacWright Blog post - GIS with Python, Shapely, and Fiona](http://www.macwright.org/2012/10/31/gis-with-python-shapely-fiona.html) -  and comparing the run-time and output to ArcGIS.       	


##Other great resources
* [Fiona Guide on GitHub](https://github.com/Toblerity/Fiona)
* [Tom MacWright Blog post - GIS with Python, Shapely, and Fiona](http://www.macwright.org/2012/10/31/gis-with-python-shapely-fiona.html)
* [TMCW Gist - GIS with Python, Shapely, and Fiona Example 1 - CSV Files](https://gist.github.com/tmcw/3987512)
* [Installing Open Source Geo Software: Mac Edition](https://github.com/nvkelso/geo-how-to/wiki/Installing-Open-Source-Geo-Software:-Mac-Edition)