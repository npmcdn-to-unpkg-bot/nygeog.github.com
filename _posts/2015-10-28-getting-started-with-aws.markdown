---
layout: post
title: Getting Started with AWS (Amazon Web Services) - free bootcamp class at the AWS Loft in NYC
date:   2015-10-28 08:00:00
tags: amazonwebservices aws rds nyc
---

Last month I blogged about [Installing PostGIS (PostgreSQL) on Amazon Web Services (RDS) after visiting the AWS Loft](http://nygeog.github.io/2015/09/25/postgis-on-aws-rds.html). After returning from my **Ask an Architect** session, I immediately found the first AWS intro class and registered. It was Monday, October 26th, 2015. The instructor was Amazon employee Mike Sutton. He was awesome. He was interesting, enthusiastic and had a great sense of humor. There were maybe 25 (don't quote me) students, mostly middle to late professionals. 

![aws_logo](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/AmazonWebservices_Logo.svg/1280px-AmazonWebservices_Logo.svg.png)
![aws_loft_logo](https://d0.awsstatic.com/Startups/test/pdp_loft.png)

Here is the overview of the course. The main bullets are the lectures, the sub-items are the labs. Full-disclosure, I skipped parts of the afternoon section labs to ask specific questions about my EC2 instances. 

##Activities

* Amazon EC2 Overview
	* Manually Building a Web Server 	
* Security Essentials
	* IAM Setup 
* Storage Options in the Cloud
	* Configure a Relational DB for Website 
* Automation Fundamentals, Part 1
	* Add Load Balancing to Website 
* Automation Fundamentals, Part 2	 
	* Deploy an Auto-Scaled Website
* Architecting for the Cloud
* Leveraging Multi-Availability Zones
	* Expand Website Across Availability Zones 


##Some definitions and notes
**Auto Scaling Group** - instances that scale and create and kill to meet demand. 

**Availability Zone** - Data Center Region

EC2 Pricing Options

* On-Demand
* Reserved Instances
* Spot Instances
	* Bid on unused EC2 capacity - could be good for running geoprocessing or big data tasks.  

##The takeaway
My immediate takeway was understanding more of the terms and concepts of AWS, especially **Regions** and **Availability Zones**. I also felt way more comfortable navigating around the AWS console. 

One of the things I'd like to learn more of is **Elastic BeanStalk**. Luckily though, I deployed my first **Flask** app via a tutorial and published via Elastic BeanStalk and hope to provide a post on that very soon. Other things I'd like to learn more about are **Chef** and **Docker**. 

Lastly, as someone who is often precious about their computer and production environment, I really loved this quote: *"stop treating computers like pets and treat them more like cattle."* While this quote reinforces our horribly unsustainable meat-addiction, it is apt for thinking about computing environments. Meaning, if an instance fails, shut it down and just build a new one (from a pre-built image). This is probably more applicable to someone who builds servers, but I also thought about it for when a GIS machine gets bogged down (or when your ArcGIS desktop build gets sluggish). If we compute in a virtual environment, there's really no reason to feel compelled to troubleshoot a system that goes haywire, simply build up a new one. Granted, that won't solve all your problems and sometimes a stable environment is better than rebuilding. 

Overall, I highly recommend taking this course. 

[Click more about the AWS Loft and Amazon Web Services (AWS) Pop-up Loft in New York City](https://aws.amazon.com/start-ups/loft/) 

![aws_loft_logo](https://d0.awsstatic.com/Startups/test/pdp_loft.png)






