---
layout: module
title: Module 6&#58; Avoiding the 300ms Click Delay
---
##Steps
1. Test the application on your iOS device or in the iOS emulator: Tap the Help button, and notice the delay before the dialog appears.
  
  >This delay occurs because the operating system is waiting roughly 300ms to see if the user is going to tap the target again (and therefore perform a double-tap).

2. In index.html, add the following script tag:

  ```
  <script src="lib/fastclick.js"></script>
  ```

  > FastClick is an open source library built by the Financial Times. More information [here](https://github
  .com/ftlabs/fastclick).

3. In app.js, register FastClick inside the deviceready event handler.

  ```
  FastClick.attach(document.body);
  ```

4. Test the application: Click the Help button. The message should now appear without delay.




<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="native-notification.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> 
Previous</a>
<a href="single-page-app.html" class="btn btn-default pull-right">Next <i class="glyphicon 
glyphicon-chevron-right"></i></a>
</div>
</div>


