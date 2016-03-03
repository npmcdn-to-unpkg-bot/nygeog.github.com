---
layout: post
title:  "First thoughts on ArcGIS Pro"
date:   2016-03-02 10:31:10
tags: arcgispro mac esri
---

While thinking about and starting to write a blogpost on a recent publication, [Quantifying Distance Overestimation From Global Positioning System in Urban Spaces](http://www.ncbi.nlm.nih.gov/pubmed/26890178), I thought it would be interesting to visualize some data with 3D software. I've used **ArcScene** in the past with great success, but thought to give **[ArcGIS Pro](http://pro.arcgis.com/en/pro-app/)** a shot. Below is my experience and first thoughts using ArcGIS Pro. 

Full disclosure:, I'm a **Mac** user, so **Windows** users may not share my experience. 

### Why have I waited to use ArcGIS Pro?

I have yet to see one **GIS User** or use case of **ArcGIS Pro** from anyone other than **[Esri](http://www.esri.com/)**. I've been afraid to spend the time testing ArcGIS Pro and figured there's more open source tools that would be more beneficial to learn. However, I had this use case where it prompted me to dive in to **ArcGIS Pro**. 

I do run **ArcGIS Desktop** on my **Mac** hardware and love it. I use [Parallels](http://www.parallels.com/). I mostly stick to **10.1** after experiencing a lot of bugs in **10.2 +**. I plan on upgrading to newer versions of ArcGIS after I finish my Data Science course-load this spring.  

### Getting Started

This summer I had to setup an [ArcGIS Online](https://www.arcgis.com/home/) account just to install and open **ArcGIS Pro**. Then I had to recently ask to have approval for access to use ArcGIS Pro in Columbia University's **Enterprise** account. While the folks that administer our **Esri** software and account are awesome, I feel that Esri should make it much easier to evaluate their software without a paywall or user id wall. 

### First impression

My first experience was that **ArcGIS Pro** was laggy and did not interact well with my **Virtual Machine using Parallels**. I couldn't pan around after I added my data (shapefile with Z values and about 400,000 records - GPS points). I use Windows 7 for my **Esri** software but mostly stick with **Mac OSX** for all my **[FOSS4G](http://foss4g.org/)** software. **Esri** does not support Apple hardware and it is evident. 

#### My machine thinking every mouse move was a identify gesture

![arcgispro](https://raw.githubusercontent.com/nygeog/nygeog.github.com/master/_posts/img/arcgispro1.gif)

I tweeted around and got some advice. First was to upgrade **ArcGIS Pro to version 1.2**, which required also updating **Microsoft .NET**. Second was to check out [Micah Williamson's blogpost:
PRO ON PRO (ON PRO)](http://www.cloudpointgeo.com/blog/2015/3/19/using-arcgis-pro-on-a-macbook-pro) which is a blogpost on using ArcGIS Pro on a Mac. Micah provides some good guidance on setting up your **Virtual Machine** on your Mac. 

*I upgraded my CPU settings...*
![arcgispro](https://raw.githubusercontent.com/nygeog/nygeog.github.com/master/_posts/img/arcgis_pro_cpu.png)

*...and my Video settings.*
![arcgispro](https://raw.githubusercontent.com/nygeog/nygeog.github.com/master/_posts/img/arcgis_pro_video.png)

### After some updates:

After doing all these updates. It still felt like I was playing with **beta** software. My Mac mouse and trackpad could not interact with the dataframe. It did not behave like most software behaves in a virtual environment. So I wonder (and would love to know but don't want to buy new hardware - I have 2 personal Mac machines and 1 at my office), what the experience is like on actual Windows hardware. Which if not much better (or the fact that most users don't have the minimum requirements for GPU, RAM and CPU), begs the question, **who is using ArcGIS Pro in production or a non-testing capacity?** 

### Ribbons:
Esri introduced the **Ribbon** toolbar system in **ArcGIS Pro**. I'll let the rest of the internet comment on the **Ribbon** toolbar interface that was popularized by **Microsoft**. 

* [Hate the Microsoft Office Ribbon? You may not be alone.](https://negativevacuum.wordpress.com/duck-n-cover/hate-the-ribbon/)
* [Why the Microsoft Office Ribbon is still rubbish](http://www.bit-tech.net/bits/software/2014/02/20/why-the-microsoft-office-ribbon-is-still-ru/1)
* [Don't Like the MS Office Ribbon? Bring Back Proper Menus.](http://www.techsupportalert.com/content/dont-ms-office-ribbon-bring-back-proper-menus.htm)
* [Microsoft's and Google's Problem Is That They Can't Leave ...](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=4&cad=rja&uact=8&ved=0ahUKEwidu5fOmaPLAhXLJR4KHYmRAwoQFggxMAM&url=http%3A%2F%2Fwww.forbes.com%2Fsites%2Flarrymagid%2F2013%2F09%2F12%2Fmicrosofts-and-google-problem-is-that-it-cant-leave-well-enough-alone%2F&usg=AFQjCNGlCOUn2mlgrRID1QXftzC-SUBGtA&sig2=_kRZ3DNU6-mJHnTBn9L_cw)
* [I hate the ribbon - give me my old menus back](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=11&cad=rja&uact=8&ved=0ahUKEwidu5fOmaPLAhXLJR4KHYmRAwoQFghUMAo&url=http%3A%2F%2Fanswers.microsoft.com%2Fen-us%2Foffice%2Fforum%2Foffice_2007-word%2Fi-hate-the-ribbon-give-me-my-old-menus-back%2F22f0885d-d4fa-4d1b-a857-dfce858b71f4&usg=AFQjCNFCoSb0uYqa8AAMnS6QYR_j_gg3-Q&sig2=qhwYb4FdDEGsoODuvMFOSA)
* [Dear Microsoft, the ribbon and start screen are both terrible ...](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=13&cad=rja&uact=8&ved=0ahUKEwidu5fOmaPLAhXLJR4KHYmRAwoQFghpMAw&url=http%3A%2F%2Fsegludian.com%2F2014%2F08%2F07%2Fdear-microsoft-the-ribbon-and-start-screen-are-both-terrible%2F&usg=AFQjCNElSyzacOK61ZJbMhBFaCNNdunqlg&sig2=tgHcnKeA3Ph7Cd0M1whjVQ)
* and many more examples... 

### Windows-only philosophy

As [Micah Williamson's blogpost:
PRO ON PRO (ON PRO)](http://www.cloudpointgeo.com/blog/2015/3/19/using-arcgis-pro-on-a-macbook-pro) points and references Mac sales trends, *"[Do I even need top point out how Apple was the only PC maker to have double digit growth in the past year?](http://www.macrumors.com/2014/01/09/gartner-pcmarket-statistics/)"*, **ArcGIS Pro**, like the Desktop product, is only supported for Windows. I would like to see 

### To reiterate: 
I have yet to see one **GIS User** or use case of **ArcGIS Pro** from anyone other than an **[Esri](http://www.esri.com/)** employee. Please let me know if you love **ArcGIS Pro** and why. I'd love to try it out more but I'm not sure I have the bandwidth or patience. I'm willing to change my mind and am open to civil conversation. A lot of my professional success is from learning to use Esri software so I'd love if they continued to put out great products but **at the moment I'm just not convinced ArcGIS Pro is for me**. :) 


### Notes:
Also, please note, a non-technical support role person, **a dedicated GISer and Esri employee** did provide some very helpful advice to help me get my VM configured optimally for ArcGIS Pro. So I want to thank him for his help (though I cautiously won't mention his name). I imagine there are great folks that work on ArcGIS Pro and I think it has great potential but it seems the failure is in the leadership at Esri for making a new product so hard to test (with all the paywalls and ArcGIS Online account setup) and then it feeling like it is unfinished. 
