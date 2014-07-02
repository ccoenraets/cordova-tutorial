---
layout: module
title: Module 2&#58; Building a Cordova Project
---

This module is optional. If you didn't add support for any platform in the previous module, you can skip this module 
and go to [module 3](setup-files.html).

## Building for iOS

> You need the iOS SDK installed on your computer to build an iOS version of your application 
using the steps below.

On the command line, make sure you are in the **workshop** directory and type:

```
cordova build ios
```

The project is built in the **workshop/platforms/ios** folder. Double-click **Workshop.xcodeproj** to open the project
 in Xcode, and run it in the emulator or on your device.

You can also run the application in the iOS emulator directly from the command line. First install [ios-sim]
(https://github.com/phonegap/ios-sim):

```
npm install -g ios-sim
```

or

```
sudo npm install -g ios-sim
```

Then run the application in the iOS emulator:

```
cordova emulate ios
```

##Building for Android

> You need the Android SDK installed on your computer to build an Android version of your 
application using the steps below.

To build the project in the **workshop/platforms/android** folder and run it on an Android device connected to your 
computer using a USB cable, type:

```
cordova run android
```

To build the project in the **workshop/platforms/android** folder and run it in the Android emulator, type:

```
cordova emulate android
```

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="create-cordova-project.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> 
Previous</a>
<a href="setup-files.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>


