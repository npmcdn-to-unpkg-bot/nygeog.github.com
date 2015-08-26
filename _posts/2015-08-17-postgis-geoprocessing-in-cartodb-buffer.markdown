---
layout: post
title: PostGIS Geoprocessing with SQL in CartoDB-Buffer
date:   2015-08-17 14:21:10
tags: postgis cartodb buffer sql
---

Note: This post was mostly written in early June. Summer has been busy. 

As part of my attempts to increasingly leverage PostGIS into my workflow, I'll be posting some pretty basic how-to's so I can better understand geoprocessing with SQL. One of the most rudimentary geoprocessing tasks is to construct a buffer. So I figured I'd tackle this one first. 

[CartoDB Academy's PostGIS in CartoDB Lesson: Show Buffers](http://academy.cartodb.com/courses/04-sql-postgis/lesson-2.html#show-buffers)

####The practice dataset
I grabbed this [volcano csv](https://data.hdx.rwlabs.org/dataset/volcano-population-exposure-index-gvm/resource/e3b1ecf0-ec47-49f7-9011-6bbb7403ef6d) from the [Humanitarian Data Exchange](https://data.hdx.rwlabs.org/) and imported it into my [CartoDB](https://cartodb.com/) account. 

###Input Volcano Point Dataset:
<iframe width='100%' height='520' frameborder='0' src='https://dms2203.cartodb.com/viz/52cc2ce0-14f1-11e5-b152-0e4fddd5de28/embed_map' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

![cartdob_buffer_1](https://raw.githubusercontent.com/nygeog/nygeog.github.com/master/_posts/img/cartodb_buffer_1.png)

###Volcano Point Dataset with 100 mile buffer:
<iframe width='100%' height='520' frameborder='0' src='https://dms2203.cartodb.com/viz/0cdb870c-14f2-11e5-9a9e-0e0c41326911/embed_map' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

![cartdob_buffer_2](https://raw.githubusercontent.com/nygeog/nygeog.github.com/master/_posts/img/cartodb_buffer_2.png)

Next up will be Convex Hulls...