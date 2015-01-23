
In order to create CartoDB on a virtual machine using [Parallels for Mac](https://www.parallels.com/) for Yosemite I first needed to create an external Yosemite USB drive. 

First, using Disk Utility I created a Mac OS X Journaled disk called **MyVolumeYosemite**. I used an 8GB thumb drive that was empty. Note: this drive will be erased so don't have any files you need on it. 

[Create a Bootable Version of Yosemite on a USB Drive](http://support.apple.com/en-us/HT201372)
Code copied from this site, but I renamed the disk to MyVolumeYosemite in the code below.

OS X Yosemite

	/Applications/Install\ OS\ X\ Yosemite.app/Contents/Resources/createinstallmedia
	
OS X Yosemite	

	sudo /Applications/Install\ OS\ X\ Yosemite.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolumeYosemite --applicationpath /Applications/Install\ OS\ X\ Yosemite.app
	
Enter your password from the **sudo** command and then hit **(Y)** to overwrite the bootable device. 

---
Screenshot of installing Yosemite...

![Screenshot of installing Yosemite](yosemite_usb.png)

**This may take a while**. So let it run a while from the *Copying installer files to disk...* 

![Screenshot of installing Yosemite Completed](yosemite_usb_done.png)