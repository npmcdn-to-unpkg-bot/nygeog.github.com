---
layout: post
title: PostGIS Geoprocessing with SQL in CartoDB-Buffer
date:   2015-09-25 14:21:10
tags: postgis amazonwebservices aws rds
---

Yesterday, I went to an appointment at the [Amazon Web Services (AWS) Pop-up Loft in New York City](https://aws.amazon.com/start-ups/loft/). 

I sat with one of their AWS support specialists and sorta explained an idea for a **GIS** web service project using [PostGIS](http://postgis.net/). The specialist hadn't heard of PostGIS but he was super familiar with **PostgreSQL** and was a networking expert (the guy talked me through how companies use AWS securely and with backup servers - it was fascinating for someone who knows so little about networking and security). From what I understand Amazon cycles some of their support specialists to these Pop-up lofts and they hang out and help AWS customers. It's sort of set up like the Genius Bar at an Apple Store but for AWS. 

###Amazon Web Services Pop-up Loft
<iframe width="100%" height="520" frameborder="0" src="https://dms2203.cartodb.com/viz/32a3beec-63b6-11e5-ae6e-0e73ffd62169/embed_map"></iframe>
*AWS Pop-up Loft in New York City*

I've toyed around with setting up instances and SSHing on and such on **EC2**. But usually I just turn them on, log in and then forget about them until I see that I'm being charged a couple bucks a month and shut it down. 

I figured I'd have to set up an **EC2** virtual server. But after sort of hashing out the whole GIS idea I had (more on that in a few months), he directed me to use **Amazon Relational Database Service (RDS)** as I could just run **PostgreSQL** on that. What is RDS? 

> Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while managing time-consuming database administration tasks, freeing you up to focus on your applications and business.

Wait, what? Read more about **[AWS RDS](http://aws.amazon.com/rds/)**.

I sat with the AWS specialist for about an hour and half and most of the time was talking through concepts and deciding whether I needed EC2 or RDS. When we figured out that RDS should be suitable, we then went to set up the RDS PostgreSQL database. It took *maaaaybe* a **half hour**. I'm not really sure because I wasn't keeping track of time. But when I was done I was able to connect to my database in **[QGIS](http://aws.amazon.com/rds/)** and through **[pgAdmin](http://www.pgadmin.org/)**. 

I'm super glad I checked the AWS Pop-up loft out. I will definitely head there again.

![tracts](https://pbs.twimg.com/media/CPsjLWeWwAA1i-a.png:large)
*NYC Census Tracts (exploded to multipolygon - b/c I'm not totally sure I understand PostGIS's support for multipolygons) in QGIS being served from an Amazon Web Services RDS instance.*


**If you have any questions about anything AWS-related. Schedule an appointment. Right now. You will not be dissappointed**. [Amazon Web Services (AWS) Pop-up Loft in New York City](https://aws.amazon.com/start-ups/loft/). 
