---
layout: post
title:  "A Week of Car2Go Locations in Seattle with CARTO Builder"
date:   2016-08-28 13:30:10
tags: car2go cartodb 
---

I haven't posted in a while as I've started working for **[CARTO](https://carto.com/)** in late June. It has been a great opportunity to work with one of the most innovative mapping and locational data companies. I was only a CartoDB employee for a week before we dropped the 'DB.' 

Anyway, I have been super interested in **[Car2Go](https://www.car2go.com/US/en/)** ever since it came to Brooklyn. My partner Kim is in Seattle and I've been out there quite a bit and find it very useful there. 

What's most interesting (and I'd like to show some plots and do a deeper dive eventually to prove it) is how in Seattle, during the work day Car2Go's are all over downtown and South Lake Union (where Amazon and many other tech and medical companies are) but at night they are so much harder to find. It seems a lot of folks use Car2Go for commuting. 

So anyway, I scrapped their API every 5 minutes for a week (Sunday afternoon-Sunday afternoon). And then decided just to keep the points closest to the nearest hour, (thus rendering 5 min. scraping naught, could have just done on the hour), and then jittered the time for both privacy and better animation so its randomly within the hour. I brought this into **[CARTO Builder](https://carto.com/builder/)** and used our standard tools for vizualizaion for about 20 minutes. 

### Car2Go Week of 2016/8/7-2016/8/15

<iframe width="100%" height="750" frameborder="0" src="https://team.carto.com/u/sheehan-carto/builder/c4816a40-6d41-11e6-88c8-0e3ebc282e83/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
