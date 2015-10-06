---
layout: post
title: Viewing Your RunKeeper Data in CartoDB
date:   2015-10-06 17:21:10
tags: runkeeper cartodb ogr gdal osgeo4w gpx gps
---

#Viewing Your [RunKeeper](https://runkeeper.com/) Data in [CartoDB](https://cartodb.com/)
[RunKeeper](https://runkeeper.com/) is a great app for recording runs and other workout adventures. While its fun to see your workout on the app, it can also be exported and viewed and analyzed. [CartoDB](https://cartodb.com/) is a great mapping platform for visualizing your data. In this exercise, I'll show the following steps:

1. Export your RunKeeper data GPX files. 
2. Merge all RunKeeper GPX files to a single Shapefile using [GDAL/OGR](http://www.gdal.org/index.html) with [OSGEO4W](http://trac.osgeo.org/osgeo4w/). 
3. Zip shapefile and upload to CartoDB. 
4. Select time range (with SQL), style and map your favorite run. 
5. Display the data in IPython. 

##1. Export your RunKeeper data GPX files
[![select_time](https://raw.githubusercontent.com/nygeog/runkeeper/master/img/export_runkeeper.png)](https://runkeeper.com/exportDataForm)

First off, go out and do some runs with the [RunKeeper app](https://runkeeper.com/). After some runs, [export your RunKeeper Data with this link.](https://runkeeper.com/exportDataForm). Here is a webpage with more information on [how-to export your RunKeeper Data](https://support.runkeeper.com/hc/en-us/articles/201109886-How-to-Export-your-Runkeeper-data).
    
Unzip the file and note its directory location. 

##2. Merge all RunKeeper GPX files to a single Shapefile using [GDAL/OGR](http://www.gdal.org/index.html) with [OSGEO4W](http://trac.osgeo.org/osgeo4w/).
Any GDAL installation can merge all your files in the folder, for this example I used [OSGEO4Windows](http://trac.osgeo.org/osgeo4w/) as I already had a Windows VM up. You can easily run this on Mac as well. Here is a great resource for this operation from [this StackExchange post](http://gis.stackexchange.com/questions/159360/how-to-bulk-import-gpx-files-to-qgis-and-merge-into-a-single-shapefile).
    
    for %p in (W:\GIS\Data\Monitoring\RunKeeper\runkeeper-data-export-30244759-2015-10-06-1740\*.gpx) do ogr2ogr W:\GIS\Data\Monitoring\RunKeeper\RunKeeper_Points\RunKeeper_Points.shp -append %p track_points -fieldTypeToString DateTime    
    
Running the GDAL/OGR in OSGEO4W:
![osgoe4w](https://raw.githubusercontent.com/nygeog/runkeeper/master/img/osgeo4w.png)

##3. Zip shapefile and upload to CartoDB. 
Below we are going to zip our shapefile directory up for uploading to CartoDB. 


    import shutil
    
    shutil.make_archive("/Volumes/Kilo/Dropbox/GIS/Data/Monitoring/RunKeeper/RunKeeper_Points", "zip", "/Volumes/Kilo/Dropbox/GIS/Data/Monitoring/RunKeeper/RunKeeper_Points")




    '/Volumes/Kilo/Dropbox/GIS/Data/Monitoring/RunKeeper/RunKeeper_Points.zip'



Next, upload your data to CartoDB. You can simply drag-and-drop the zipped file onto your browser. 
![cartodb_upload](https://raw.githubusercontent.com/nygeog/runkeeper/master/img/cartodb_upload.png)

##4. Select time range (with SQL), style and map your favorite run. 
For this example, I'll select 1 run from 1 day this summer. June 29th, 2015 I did a fun run near Bolder, CO. The town of Louisville, CO has some great trails between development for running, biking and walking. 

![select_time](https://raw.githubusercontent.com/nygeog/runkeeper/master/img/select_time.png)
Here's the code if you'd like to copy and paste (remember to modify the dates to match the date of your favorite run). 
    
    SELECT * FROM runkeeper_points 
    WHERE time > '06/29/2015' AND time <= '06/30/2015'
    
####Style the map with [Torque](http://docs.cartodb.com/tutorials/introduction_torque.html)
![torque_wizard](https://raw.githubusercontent.com/nygeog/runkeeper/master/img/torque_wizard.png)   
    
    
##5. Display the data in IPython. 
Next I'll embed an **iframe** of the embeddable map into IPython. More **CartoDB/IPython** integration may be found here: [https://plot.ly/ipython-notebooks/cartodb/](https://plot.ly/ipython-notebooks/cartodb/).


    from IPython.display import HTML
    HTML('<iframe width="100%" height="520" frameborder="0" src="https://dms2203.cartodb.com/viz/447b9adc-6c57-11e5-9129-0e31c9be1b51/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>')




<iframe width="100%" height="520" frameborder="0" src="https://dms2203.cartodb.com/viz/447b9adc-6c57-11e5-9129-0e31c9be1b51/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>



#Next Steps and future things for consideration:

##Time between GPS observations
I'm not always running. Yes, I should be running more, but no matter if your an Ultramarathon runner or a casual stroller, you'll most likely always spend more time not running than running. In fact the distribution of my runs in the winter is pretty bad. 
![seasonal](https://raw.githubusercontent.com/nygeog/runkeeper/master/img/seasonal.png)

For animating my runs, perhaps using the **cartodb_id** rather than time (datetime) would be beneficial for showing consecutive runs rather than the units of time in Torque passing uniformly. 

####Here's an example of that for a few days of running in Brooklyn, NY.


    from IPython.display import HTML
    HTML('<iframe width="100%" height="520" frameborder="0" src="https://dms2203.cartodb.com/viz/06395e7a-6c62-11e5-a57f-0e674067d321/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>')




<iframe width="100%" height="520" frameborder="0" src="https://dms2203.cartodb.com/viz/06395e7a-6c62-11e5-a57f-0e674067d321/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>



##Zoom to events
Another feature that would be fun to work with is zooming to runs by day, perhaps set the bounding box of the map frame to the envelope of the GPS per day and then zoom to that box for every new day. 


    
