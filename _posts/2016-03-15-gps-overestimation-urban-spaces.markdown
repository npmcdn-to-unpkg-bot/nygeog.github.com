---
layout: post
title:  "Some GIS details about our paper: Quantifying Distance Overestimation From Global Positioning System in Urban Spaces"
date:   2016-03-15 14:31:10
tags: gps multipatherror walks buildings
---

While I spent some time reviewing [ArcGIS Pro in my last post](http://nygeog.github.io/2016/03/02/arcgis-pro-first-thoughts.html). Esri posted a response with all the proper settings they recommend for running [ArcGIS Pro in Mac OS X](https://blogs.esri.com/esri/arcgis/2016/03/08/arcgis-pro-in-mac-os-x/). I have yet to try their recommended settings but will when I have the time to. 

The research group I am currently working for, [The Built Environment and Health Research Group](http://beh.columbia.edu/) at Columbia University, recently published a paper in [The American Journal of Public Health](http://ajph.aphapublications.org/) titled [Quantifying Distance Overestimation From Global Positioning System in Urban Spaces](http://www.ncbi.nlm.nih.gov/pubmed/26890178). 

The basic gist is **can we predict overestimation of observed distance traveled (from GPS data) due to the effect of urban canyons (multipath error from buildings)?** More entropy in the built environment should increase GPS signal error, thereby increasing noise in the recording of a GPS path. 

![walks](https://raw.githubusercontent.com/nygeog/nygeog.github.com/master/_posts/img/gps_map_v02.png)

*Structured walks with multiple GPS units, with low Distributed Building Height on the left and high Distributed Building Height in the right panel.*

From the [BEH](http://beh.columbia.edu/) blogpost: [Measuring Pedestrian Activity Using GPS Logger Data](http://beh.columbia.edu/2016/02/20/measuring-pedestrian-activity-using-gps-logger-data/)

>It has been suggested that GPS monitoring data can be used to estimate distances traveled and speeds of travel during active and non-active travel journeys and, that when combined with accelerometer monitoring, GPS data can be used to identify travel mode.  We tested whether the distances between successively captured GPS way points can be used to measure distances walked in varying environments in NYC. **Students walked a series of structured routes in areas with high and low building bulk density and on streets with high and low tree canopy cover while wearing GPS monitors.  The sums of distances between successive GPS way points over estimated travel distances and over estimates were larger in areas with high building bulk density and on streets with high tree canopy cover.** Algorithms using distances between successive GPS points to infer speed or travel mode may misclassify trips differentially across built environment contexts.  

# What is Multipath Error?
From **[aboutcivil.org](http://www.aboutcivil.org/sources-of-errors-in-gps.html)**

>![multipath](http://www.aboutcivil.org/imajes/multipath-effects-GPS.jpg)

>### Multi-path error:
>
>Multipath Effects on GPSAs the GPS signal finally arrives at the earth’s surface, it may be reflected by local obstructions before it gets to the receiver’s antenna. This is called multi-path error as the signal is reaching the antenna in single line path as well as delayed path. The effect is similar to a double image on a tv set.

>The multipath effect is caused by reflection of satellite signals (radio waves) on objects. For GPS signals this effect mainly appears in the neighborhood of large buildings or other elevations. The reflected signal takes more time to reach the receiver than the direct signal. The resulting error typically lies in the range of a few meters.

More on [Effects of Multipath Reception on
GPS Positioning Performance](http://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=5606130).

# Modeling Distributed Building Height
I touch on the methodology for creating the **distributed building height** metric in my Exploratory Data Analysis and Visualization course presentation: [Using NYC Building Data (2013) to predict multipath GPS error in NYC Taxi Data (2013)](http://stat4701-edav-gps.github.io/) - [the slides where I discuss it in more detail](http://stat4701-edav-gps.github.io/presentation/#/20) - whereby I essentially sum all of the building volume for a given census block and uniformly distribute the height across the census block. 


![3d_buildings](http://stat4701-edav-gps.github.io/presentation/img/dist_bldg_hght_ani.gif)
*Modeling Distributed Building Height viewed from a few locations in New York City using ArcScene*


<iframe width="100%" height="520" frameborder="0" src="https://dms2203.cartodb.com/viz/ac88b602-ed20-11e4-aad3-0e018d66dc29/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
*Distributed Building Height Map in CartoDB - red areas expected to have more multipath error, yellow areas less*


### Abstract

**OBJECTIVES:**

To investigate accuracy of distance measures computed from Global Positioning System (GPS) points in New York City.

**METHODS:**

We performed structured walks along urban streets carrying Globalsat DG-100 GPS Data Logger devices in highest and lowest quartiles of building height and tree canopy cover. We used ArcGIS version 10.1 to select walks and compute the straight-line distance (Geographic Information System-measured) and sum of distances between consecutive GPS waypoints (GPS-measured) for each walk.

**RESULTS:**

GPS distance overestimates were associated with building height (median overestimate = 97% for high vs 14% for low building height) and to a lesser extent tree canopy (43% for high vs 28% for low tree canopy).

**CONCLUSIONS:**

Algorithms using distances between successive GPS points to infer speed or travel mode may misclassify trips differentially by context. Researchers studying urban spaces may prefer alternative mode identification techniques.

## GIS Info:

**Data:**

* [NYC Building Footprints](https://data.cityofnewyork.us/Housing-Development/Building-Footprints/tb92-6tj8) 2013-09 release with Roof Height and Ground Elevation - these attributes are no longer available via Open Data - that's why its important to archive data.
* [NYC Census Blocks 2010](http://www.nyc.gov/html/dcp/download/bytes/nycb2010_15a.zip) (I used v. 11a)

**Assumptions and Limitations:**

* All data used is publicly available.

* Buildings are extruded from the ground elevation to maximum height - building setbacks are not modeled with publicly available data.

* We did not use 3D GPS data, i.e. the Z-values: elevation/altitude of recorded GPS points. At some point it is possible the 3D distances could help inform cleaning algorithms, generalization and cleaning methods. 