---
layout: post
title: Tutorial: Deploying a Flask application on AWS 
date: 2015-11-04 16:00:00
tags: amazonwebservices aws flask python elasticbeanstalk
---

If you missed my most recent blogpost on [Getting Started with AWS (Amazon Web Services) - free bootcamp class at the AWS Loft in NYC](http://nygeog.github.io/2015/10/28/getting-started-with-aws.html) go check it out, right now. It was/is amazing. 

#[Flask](http://flask.pocoo.org/)
![flask-logo](http://flask.pocoo.org/static/logo/flask.png)

>Flask is a microframework for Python based on Werkzeug, Jinja 2 and good intentions. And before you ask: It's BSD licensed!

I've messed around with [Django](https://www.djangoproject.com/) a little, with hopes of rolling out some [GeoDjango](http://geodjango.org/) projects but find that its a little too exciting to deploy. 

I mostly use **Python** at the desktop level for data management ([pandas](http://pandas.pydata.org/)), scripting and analysis (**GIS** processing w/ **arcpy** and/or open-source GIS tools). 

I came across **Flask** a few times and was sort of interested in what it was and how it works. I did a few short tutorials locally but after taking [Getting Started with AWS (Amazon Web Services) - free bootcamp class at the AWS Loft in NYC](http://nygeog.github.io/2015/10/28/getting-started-with-aws.html) I yearned to deploy some actual Flask on the web. Luckily, I found a great tutorial... 

#[Deploying a Flask application on AWS](https://medium.com/@rodkey/deploying-a-flask-application-on-aws-a72daba6bb80)
###An end-to-end example using Amazon’s Elastic Beanstalk and RDS

I found [Rodkey's](https://medium.com/@rodkey) tutorial [Deploying a Flask application on AWS](https://medium.com/@rodkey/deploying-a-flask-application-on-aws-a72daba6bb80) via a quick web-search. This is a great step-by-step guide for getting a quick **Flask template app** up and running on **AWS** quickly. 

After cloning the **Flask template app**, I setup and pushed the repository up to **AWS** via the **Elastic Beanstalk Command Line Interface (EBCLI)**. Amazon, they love goofy names and they love acronyms.

Without further ado, here's a quick text submission form I set up from the tutorial and Flask template app. It simply writes the input to a **MySQL** database on Amazon **RDS**. 

**Enter some text to submit to the DB.** Keep it clean. I'm prety sure I can check the IP of the submitter. 

<iframe src="http://nygeog-flask-aws-tutorial.elasticbeanstalk.com/" frameborder=0 width=100% height=300></iframe>

**Enter the number 9 in the bottom entry form and view the last 9 entries.**

If you want to use your **Elastic Beanstalk** app on your own domain, look no farther than [Rodkey's](https://medium.com/@rodkey) advice:
> The easiest way is to use Amazon’s Route 53 — you can easily map the yourapp.elasticbeanstalk.com domain to your domain.
If not, check out this document.





Flask-on friends... Flask-on.

![flask-logo](http://flask.pocoo.org/static/logo/flask.png)

##on

![aws_logo](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/AmazonWebservices_Logo.svg/1280px-AmazonWebservices_Logo.svg.png)







