---
layout: module
title: Module 4&#58; Choosing a Data Storage Strategy
---
## Step 1: Explore different persistence mechanisms

Open the following files and explore the different persistence services:

1. www/js/services/memory/EmployeeService.js

1. www/js/services/json/EmployeeService.js

1. www/js/services/localstorage/EmployeeService.js

1. www/js/services/websql/EmployeeService.js

## Step 2: Test the application with different persistence mechanisms

The application is initially configured to work with the in-memory datastore. To change the local persistence mechanism for the application:

1. In **index.html**: instead of js/services/memory/EmployeeService.js, import the .js file for the service  of your choice, for example: js/services/websql/EmployeeService.js.

2. Test the application.

To test the JSON service, make sure the Node.js server provided as part of the materials is running:

1. Open a terminal or command window, and navigate to the server directory under cordova-tutorial

2. Install the server dependencies:

  ```
  npm install
  ```

3. Start the server

  ```
  node server
  ```

    > The server implements CORS (Cross-Origin Resource Sharing) to support cross-site HTTP requests. You can therefore 
    invoke the services from a file loaded from another domain or from the file system.
    

  Since services/json/EmployeeService.js points to **localhost**, this will only work when running the 
  application in the browser on your computer, and not on your device because it doesn't know your computer 
  as "localhost". To make the JSON service work when running the application on your device, 
  make sure your computer and device are on the same subnet, identify the ip address of your computer, 
  and replace localhost with that ip address in services/json/EmployeeService.js. As an alternative, 
  you could also deploy the service on a publicly available server. In a real-life application, 
  you would typically externalize the host name in some sort of configuration file.
  
  All the other data storage services provided in www/js/services work out-of-the-box when running the application in
   the browser and 
  on device. 

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="setup-files.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> 
Previous</a>
<a href="native-notification.html" class="btn btn-default pull-right">Next <i class="glyphicon 
glyphicon-chevron-right"></i></a>
</div>
</div>


