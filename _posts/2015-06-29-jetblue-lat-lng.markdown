---
layout: post
title: Getting Lat, Lng from Jetblue FlyFi
date:   2015-06-29 14:21:10
tags: latlng travel web jetblue
---

Being a fairly regular [JetBlue](http://www.jetblue.com/) customer - they don't fly everywhere but do most major cities across the US - I have come to enjoy checking out the back-of-the-seat heads up display of flight tracking. For a while they were using **Google Maps** but that display now uses **OpenStreetMap** as a basemap. 

Ever since I started seeing wifi on JetBlue flights, via **FlyFi**, I also enjoyed looking at that flight tracker as well. If you are on a JetBlue flight go to [http://www.flyfi.com/travel/](http://www.flyfi.com/travel/) (this link won't work if not currently on a JetBlue flight). FlyFi uses **Google** for mapping but hopefully they will transition to **OpenStreetMap**.

![un](https://raw.githubusercontent.com/nygeog/nygeog.github.com/master/_posts/img/jetblue-flyfi-map.png)
*FlyFi flight tracker*

After staring at the FlyFi flight tracker map, I realized that since its served I could probably check out the code. After some searching through Google Chrome's Developer Tools I was able to track down the javascript file. The portion of the code that loads in the new Lat,Lng's was found below. (Note the highlighting of the word *maps* as finding that or *map* in a page is always a great way to track down map data, especially if there is a lot other stuff in the page. 


![un](https://raw.githubusercontent.com/nygeog/nygeog.github.com/master/_posts/img/jetblue-flyfi-screenshot.png)
*FlyFi javascript file with added Lat,Lng's shown*

Now using [Chris Albon's **Plot Points On A Map** blogpost](http://chrisalbon.com/python/matplotlib_plot_points_on_map.html), we can use **[Basemap](http://matplotlib.org/basemap/)** to plot these Lat,Lng's from this flight. 

I then worked with this [IPython notebook file](https://github.com/nygeog/nygeog.github.com/blob/master/posts_data/2015-06-29-jetblue-latlng/jetblue-latlng.ipynb) which I'll convert using a method I learned from an earlier blogpost **[Using IPython Notebook with Pandas and exporting to Markdown](http://nygeog.github.io/2015/01/27/ipython-notebook-to-markdown%20copy.html)**


	IPython nbconvert jetblue-latlng.ipynb --to markdown

## The IPython notebook code:
[IPython notebook file](https://github.com/nygeog/nygeog.github.com/blob/master/posts_data/2015-06-29-jetblue-latlng/jetblue-latlng.ipynb)


### Import the modules

    # Import pandas
    import pandas as pd
    
    # Import matplotlib and Basemap
    import matplotlib.pyplot as plt
    from mpl_toolkits.basemap import Basemap
    
    # Set iPython to display visualization inline
    %matplotlib inline

### Read the lat,lng's and format

    inCSV = 'jetblue-gps.csv'
    
    df = pd.read_csv(inCSV, header=None)
    
    df.columns = ['lat_work','lng_work','drop']
    
    df['latitude'] = df['lat_work'].str.replace('(','').str.replace('new google.maps.LatLng','')
    df['longitude'] = df['lng_work'].str.replace(')','')
    
    df['latitude'] = df['latitude'].astype(float)
    df['longitude'] = df['longitude'].astype(float)
    
    df = df[['latitude','longitude']]
    
    df.head(5)




<div style="max-height:1000px;max-width:1500px;overflow:auto;">
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>latitude</th>
      <th>longitude</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td> 40.472603</td>
      <td>-74.006310</td>
    </tr>
    <tr>
      <th>1</th>
      <td> 40.348148</td>
      <td>-74.177799</td>
    </tr>
    <tr>
      <th>2</th>
      <td> 40.167046</td>
      <td>-74.771404</td>
    </tr>
    <tr>
      <th>3</th>
      <td> 40.107994</td>
      <td>-75.466461</td>
    </tr>
    <tr>
      <th>4</th>
      <td> 39.916077</td>
      <td>-76.197224</td>
    </tr>
  </tbody>
</table>
</div>


### Make the plot with [Chris Albon's **Plot Points On A Map** blogpost](http://chrisalbon.com/python/matplotlib_plot_points_on_map.html)

    # Create a figure of size (i.e. pretty big)
    fig = plt.figure(figsize=(20,10))
    
    # Create a map, using the Gall–Peters projection, 
    map = Basemap(projection='gall',
                  # with low resolution,
                  resolution = 'l',
                  # And threshold 100000
                  area_thresh = 100000.0,
                  # Centered at 0,0 (i.e null island)
                  lat_0=35, lon_0=-85)
    
    # Draw the coastlines on the map
    map.drawcoastlines()
    
    # Draw country borders on the map
    map.drawcountries()
    
    # Fill the land with grey
    map.fillcontinents(color = '#888888')
    
    # Draw the map boundaries
    map.drawmapboundary(fill_color='#f4f4f4')
    
    # Define our longitude and latitude points
    # We have to use .values because of a wierd bug when passing pandas data
    # to basemap.
    x,y = map(df['longitude'].values, df['latitude'].values)
    
    # Plot them using round markers of size 6
    map.plot(x, y, 'ro', markersize=6)
    
    # Show the map
    plt.show()

### The points plotted
![png](https://raw.githubusercontent.com/nygeog/nygeog.github.com/master/posts_data/2015-06-29-jetblue-latlng/jetblue-latlng_files/jetblue-latlng_2_0.png)

