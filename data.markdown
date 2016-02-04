---
layout: page
title: Data
permalink: /data/
---

---

<a name="top"></a>*Menu*

* [New York City](#nyc)
* [New York State](#nys)
* [United States](#us)
* [Global](#global)
* [University Data Centers](#univ)


---


<a name="nyc"></a>New York City



* [Open Data](https://nycopendata.socrata.com/)
	* Parks
		* [Park Inspections Data (XML)](https://data.cityofnewyork.us/Housing-Development/Parks-Inspections-data/t9jy-gfev)
The Parks Inspection Program (PIP) is a comprehensive, outcome-based performance measurement system that generates frequent, random, and detailed inspections of our parks and playgrounds. A team of inspectors conducts nearly 5,000 inspections per year. Each site receives a rating of "Acceptable" or "Unacceptable" based upon the condition of specific park features.
		* [Parks (Shapefile)](https://data.cityofnewyork.us/City-Government/Parks-Properties/rjaj-zgq7)
Directory of Parks Properties (webpage)
			* [Direct Download of the Parks (Shapefile)](https://data.cityofnewyork.us/api/geospatial/rjaj-zgq7?method=export&format=Shapefile)
			
			
	* [Health Areas](https://data.cityofnewyork.us/Health/Health-Areas/5p78-k3zm) GIS data: Boundaries of Health Areas
	
	* [Schools Point Locations (Shapefile)](https://data.cityofnewyork.us/Education/School-Point-Locations/jfju-ynrr)
		* [Direct Download of School Point Locations (Shapefile)](https://data.cityofnewyork.us/download/jfju-ynrr/application/zip)
	This is an ESRI shape file of school point locations based on the official address.  It includes some additional basic and pertinent information needed to link to other data sources. It also includes some basic school information such as Name, Address, Principal, and Principal’s contact information.
	
	* [Building Footprints (Shapefile in Web Mercator)](https://data.cityofnewyork.us/Housing-Development/Building-Footprints/tb92-6tj8)
		* [Direct Download Building Footprints (Shapefile in Web Mercator)](https://data.cityofnewyork.us/download/tb92-6tj8/application/zip) Shapefile of footprint outlines of buildings in New York City.	
	
	* [NYC Address Points](https://data.cityofnewyork.us/City-Government/NYC-Address-Points/4iq4-tuhq)
		* [Direct Download NYC Address Points](https://data.cityofnewyork.us/download/4iq4-tuhq/application/zip)
	
* [Department of City Planning - Bytes of Big Apple](http://www.nyc.gov/html/dcp/html/bytes/applbyte.shtml)
	* [PLUTO and MapPLUTO](http://www.nyc.gov/html/dcp/html/bytes/applbyte.shtmlpluto) - [Check out my Python MapPluto download and merge python tool](http://nygeog.github.io/code/mappluto)
	* [Political & Election Districts](http://www.nyc.gov/html/dcp/html/bytes/districts_download_metadata.shtmlpod)
	* [Borough Boundaries & Community Districts](http://www.nyc.gov/html/dcp/html/bytes/districts_download_metadata.shtmlbcd)
	* [School, Police, Health & Fire](http://www.nyc.gov/html/dcp/html/bytes/districts_download_metadata.shtmlshfp)
	* [Census Geographies](http://www.nyc.gov/html/dcp/html/bytes/districts_download_metadata.shtmlcbt)
		* Census Tracts
			* [2010 Census Tracts (Clipped to Shoreline)](http://www.nyc.gov/html/dcp/download/bytes/nyct2010_14d.zip)
			* [2010 Census Tracts (Water Areas Included)](http://www.nyc.gov/html/dcp/download/bytes/nyct2010wi_14d.zip)
			* [2000 Census Tracts (Clipped to Shoreline)](http://www.nyc.gov/html/dcp/download/bytes/nyct2000_14d.zip)
			* [2000 Census Tracts (Water Areas Included)](http://www.nyc.gov/html/dcp/download/bytes/nyct2000wi_14d.zip)	
		* Census Blocks
			* [2010 Census Blocks (Clipped to Shoreline)](http://www.nyc.gov/html/dcp/download/bytes/nycb2010_14d.zip)
			* [2010 Census Blocks (Water Areas Included)](http://www.nyc.gov/html/dcp/download/bytes/nycb2010wi_14d.zip)
			* [2000 Census Blocks (Clipped to Shoreline)](http://www.nyc.gov/html/dcp/download/bytes/nycb2000_14d.zip)
			* [2000 Census Blocks (Water Areas Included)](http://www.nyc.gov/html/dcp/download/bytes/nycb2000wi_14d.zip)
			
	* [Selected Facilities and Program Sites](http://www.nyc.gov/html/dcp/html/bytes/dwnselfac.shtml)			
		* [Metadata](http://www.nyc.gov/html/dcp/pdf/bytes/selfac_metadata.pdf) Point features representing the geographic locations of facilities, programs or parkland properties in New York City contained in the master table in an Access database which was developed with the
cooperation and assistance of numerous governmental and non-profit agencies. Users can access the location, type, capacity and oversight agency of public and private educational, recreational, cultural, public safety, criminal justice, health, mental health, chemical dependency, developmentaldisabilities, day care, foster care, senior citizen, homeless facilities and programs. Data related to the location of transportation and waste management facilities have also been included since theprevious (2012) release . These facilities and programs are, with few exceptions, operated, funded, licensed, or certified by a government agency. Each facility or program site is geocoded for taxblock, tax lot, 2010 census tract, city council district, community district, school district, police precinct, health area, zip code, borough, and x and y coordinates, provided by the Department of City Planning's Geosupport Information System (GIS). Parkland properties are coded for borough, community district, tax block, taxt lot, and x and y coordinates only. The features in the shapefile are represented by points created with ArcGIS tool using the x and y coordinates mostly derived from the centroids of the tax lots where facilities, programs or parkland properties are located.		
	* [Neighborhood Tabulation Areas](http://www.nyc.gov/html/dcp/html/bytes/dwn_nynta.shtml) 
		* [Metadata](http://www.nyc.gov/html/dcp/pdf/bytes/nynta_metadata.pdf?r=15a) Neighborhood Tabulation Areas (NTAs) were created to project populations at a small area level, from 2000 to 2030 for PlaNYC, the long-term sustainability plan for New York City. Since population size affects the error associated with population projections, these geographic units needed to have a minimum population, which we determined to be 15,000.  This criterion resulted in combinations of neighborhoods that probably would not occur if one were solely designating boundaries of historical neighborhoods. Moreover, the neighborhood names associated with the neighborhood tabulation areas are not intended to be definitive. 
		Another feature of the sustainability plan, was the creation of projections for Public Use Microdata Areas (PUMAs), which are approximations of New York City's Community Districts developed for use with the Census Bureau's Public Use Microdata Samples (PUMS).  In order to make the boundaries consistent with PUMAs, NTAs were created using whole census tracts, from the 2010 census, within PUMAs. Since NTAs were not permitted to cross PUMA boundaries, this further restricted our ability to identify what may be thought of as historical neighborhood boundaries. 
		Thus, users need to be cognizant of the reason why NTAs were created and the demographic/geographic constraints inherent in how they were configured.  Despite these limitations, NTAs are a valuable summary level for use with both the 2010 Census and the American Community Survey (ACS).  Regarding the decennial census, these geographic areas offer a good compromise between the very detailed data for census tracts (2,168) and the broad strokes provided by community districts (59). For the ACS, NTAs offer a statistically reliable alternative to the high sampling error that renders data for most individual census tracts unusable.

* Crime Data
	* [NYC's Crime Map](http://maps.nyc.gov/crime/)
		* [The scraped data](http://small.dada.pink/nyc-crime-map-data/)
		* [The code](https://github.com/tlevine/nyc-crime-map)
			
* [DOTMap - New York City Department of Transportation](http://gis.nyc.gov/doitt/nycitymap/template?applicationName=DOT)
	

* [NYC Vision Zero](https://data.cityofnewyork.us/Public-Safety/Vision-Zero-View-Data/y74e-vkxy) Data that that populates the Vision Zero View map, which can be found at www.nycvzv.info Vision Zero is the City's goal for ending traffic deaths and injuries. The Vision Zero action plan can be found at http://www.nyc.gov/html/visionzero/pdf/nyc-vision-zero-action-plan.pdf Crash data is obtained from the Traffic Accident Management System (TAMS), which is maintained by the New York City Police Department (NYPD). Only crashes with valid geographic information are mapped. All midblock crashes are mapped to the nearest intersection. Injuries and fatalities are grouped by intersection and summarized by month and year. This data is queried and aggregated on a monthly basis and is current as of the query date. Current year data is January to the end of the latest full month. All mappable crash data is represented on the simplified NYC street model. Crashes occurring at complex intersections with multiple roadways are mapped onto a single point. Injury and fatality crashes occurring on highways are excluded from this data. Please note that this data is preliminary and may contain errors, accordingly, the data on this site is for informational purposes only. Although all attempts to provide the most accurate information are made, errors may be present and any person who relies upon this data does so at their own risk.



* [NYCityMap](http://maps.nyc.gov/doitt/nycitymap/)
* [NYC.gov Map Gallery](http://www1.nyc.gov/nyc-resources/nyc-maps.page)
* [MTA Developer Data Downloads](http://web.mta.info/developers/download.html)
* [SR Spatial (Steven Romalewski) from CUNY](http://spatialityblog.com)
	* [Subway Data](http://spatialityblog.com/2010/07/08/mta-gis-data-update/)

* [Citi Bike](https://www.citibikenyc.com)
	* [Station Data Feed](https://www.citibikenyc.com/stations/json) 

* Taxi Data Foiled by [Chris Wong](http://chriswhong.com)
	* [NYC Taxi Data 2013 - Trip and Fare Data](http://chriswhong.com/open-data/foil_nyc_taxi/)
	* [NYC Boro Taxi (Green Taxi) Trip Data 2013-2014](http://chriswhong.com/nycborotaxidata/)
	
	
[Top](top)

---

<a name="nys"></a>New York State
* [NYS Open Data](https://data.ny.gov/)
* [NYS GIS Clearinghouse](https://gis.ny.gov/)

[Top](top)

---

<a name="us"></a>United States
* US Census
	* [Table Comparisons: ACS 5-year estimates and Census 2000 SF3](http://www.census.gov/acs/www/guidance_for_data_users/table_comparisons/index.php)
	* [American FactFinder](http://factfinder.census.gov/faces/nav/jsf/pages/index.xhtml)
	* [Census APIs](http://www.census.gov/data/developers/data-sets.html)
	* [1990 Census](http://www.census.gov/main/www/cen1990.html)
		* [1990 Long Form Questionairre](http://www.census.gov/prod/1/90dec/cph4/appdxe.pdf)
* [US Open Data](https://www.data.gov/)
* [List of US FIPS codes for States](http://www.epa.gov/envirofw/html/codes/state.html)
* [HUD ZIP-Tract Crosswalk](http://www.huduser.org/portal/datasets/usps_crosswalk.html)

* Education

	* [Head Start Locations across US](http://eclkc.ohs.acf.hhs.gov/hslc/data/center-data)

[Top](top)

---

<a name="global"></a>Global
* [Global Data DIVA-GIS](http://www.diva-gis.org/)
* [Global Data OpenStreetMap](http://www.openstreetmap.org/)
* Business Data
	* [All the Starbucks in the World](https://opendata.socrata.com/Business/All-Starbucks-Locations-in-the-World-Point-Map/7sg8-44ed)
	
[Top](top)

---

<a name="univ"></a>University Data Centers
* [Columbia - Digital Social Science Center (DSSC) ](http://gis.columbia.edu/data.html)
* [Cornell University Geospatial Information Repository (CUGIR)](http://cugir.mannlib.cornell.edu/)
* [The National Historical Geographic Information System (NHGIS)](https://www.nhgis.org/)


[Top](top)
