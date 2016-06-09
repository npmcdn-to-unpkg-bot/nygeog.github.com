---
layout: post
title:  "NYC Parks TreesCount! Data Jam 2016: Change over Time Category Winner"
date:   2016-06-08 06:30:10
tags: hackathon parks street trees hackforchange cartodb opendata
---

This past Saturday I participated in the [NYC Parks TreesCount! Data Jam](https://www.nycgovparks.org/events/2016/06/04/treescount-data-jam). Below is some info describing the event. 

[![datajam](https://raw.githubusercontent.com/nygeog/nygeog.github.com/master/_posts/img/data_jam2.png)](https://www.nycgovparks.org/events/2016/06/04/treescount-data-jam)


> NYC Parks will unveil NYC’s latest urban forest dataset. This is the most spatially accurate map of New York City’s street trees. Join NYC Parks, BetaNYC, TreesCount! partners, tree care volunteers, and other civic hackers to improve our understanding of, and plan for the future of our City’s urban forest!

> To spark and sustain public engagement, NYC Parks launched the TreesCount! 2015 campaign. To date, more than 2,300 New Yorkers have voluntreered helping complete the first comprehensive map of our city’s street trees. Now, we are looking for data scientists, statisticians, developers, designers, visualizers, cartographers, and quants to help us transform the data gathered thus far into actionable insights. Bring your skills, questions, and creativity to this data jam!


[![datajammap](https://raw.githubusercontent.com/nygeog/nygeog.github.com/master/_posts/img/datajammap.png)](http://nyctreescountdatajam.github.io/map/treesdn2015.html)
_Map of Street Tree Density per sq. mile from Census in 2015_

It was a long morning of talks and introductions and then around 11 am we got to working through some of the coding challenge options. I got started thinking I would try and find a team after getting the data organized and up into the [CartoDB](https://cartodb.com/) platform, but ended up working independently, though around some other folks working through the data. The challenge I decided to take on was looking at the Street Tree Census data over time. This challenge along with the others are described on the [Beta NYC NYC TreesCount! Data Jam Challenges blogpost](https://beta.nyc/2016/05/20/nyc-treescount-data-jam-challenges/). 

> ### 1. How has NYC’s urban forest changed over time — comparing 1995, 2005, and 2015?

> TreesCount! 2015 is the third decadal effort to completely inventory New York City’s street trees! To date, 530,000 trees, representing approximately 80% of the City’s streets, have been mapped as part of the 2015 census, and NYC Parks is releasing all the data that has been reviewed to date. The Bronx, Manhattan, and Staten Island have all been completed. It is the most spatially accurate street tree dataset New Yorkers have ever seen. We need your help visualizing, comparing, and understanding changes across tree census datasets.

> By building maps or visualizations, your goal is to help us begin to understand how changes in our urban forest affect NYC’s neighborhoods.

I documented all my code and made several maps in CartoDB that can be viewed at 
[my GitHub IO site for NYC Street Trees Census Data Maps & Code: 1995-2015](http://nyctreescountdatajam.github.io/)

I presented (as #4) my work for the review and managed to win in the Challenge #1 category (time). 

### Screencast of my Maps and Code:

The event coordinator asked the submitters to create a screencast after the event. So much of the information about my process can be found out by watching the video here: [https://www.youtube.com/watch?v=TOBbiIX-mP8](https://www.youtube.com/watch?v=TOBbiIX-mP8).

[![vid](https://raw.githubusercontent.com/nygeog/nygeog.github.com/master/_posts/img/youtube_street_trees_data_jam.png)](https://www.youtube.com/watch?v=TOBbiIX-mP8)



Apologies for the poor audio quality, had my laptop mic while in iMovie, thus fan is running quite loud. 

### Caveats, Limitations and Takeaways

* The 1995 and 2005 Street Tree Census data was geocoded and the 2015 used more accurate mapping methods, so some Census Block counts of street trees may differ due to the geocoding method differences combined with boundary effects in geoprocessing. 

* The 2015 Street Tree Census is about 80% complete as of the day event. Brooklyn and Queens being the areas missing the most data. This is shown in my final map [Percent Change in Tree Count Den. 1995 -> 2015 per Sq. Mile in Censu Block (2010) w/ Counts of 1995 and 2015 Street Trees](http://nyctreescountdatajam.github.io/map/pctchange9515den_tree_million.html). 

[![map](https://raw.githubusercontent.com/nygeog/nygeog.github.com/master/_posts/img/treesmaplast.png)](http://nyctreescountdatajam.github.io/map/pctchange9515den_tree_million.html)

* [CartoDB](https://cartodb.com/) allowed for some pretty quick intersects with their [SQL API](https://docs.cartodb.com/cartodb-platform/sql-api/).

* The hackathon portion was only about 4-5 hours. I would have liked to do some machine learning for predicting dead or trees in poor health with the data but time was limited. 

* Trees in the NYC Street Tree Census __do not have unique identifiers__ to track trees over time. Some fairly complicated geoprocessing and matching would be necessary to do so. This would be very useful for the next Street Tree Census. 
