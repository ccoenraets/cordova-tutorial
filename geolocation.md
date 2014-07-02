---
layout: module
title: Module 12&#58; Using the Location API
---
In this section, we add the ability to tag an employee with his/her location information. In this sample application, we display the raw information (longitude/latitude) in an alert. In a real-life application, we would typically save the location in the database as part of the employee information and show it on a map.

> The code below works when running the application as a Cordova app on your device. It should also work in Chrome on the desktop when the page is served with the http:// protocol, and in Firefox, regardless of the protocol (http:// or file://).


## Steps

1. Add the geolocaton plugin to your project:

  ```
  cordova plugin add org.apache.cordova.geolocation
  ```

1. In index.html, add the following list item to the employee-tpl template:

  ```
  <li class="table-view-cell media">
      <a hre="#" class="push-right add-location-btn">
          <span class="media-object pull-left"></span>
          <div class="media-body">
              Add location
          </div>
      </a>
  </li>
  ```

1. In the initialize() function of EmployeeView, register an event listener for the click event of the *Add Location* list item.

  ```
  this.$el.on('click', '.add-location-btn', this.addLocation);
  ```

  Make sure you add this line as the last line of the initialize() function (after this.$el is assigned).

1. In EmployeeView, define the *addLocation* event handler as follows:

  ```
  this.addLocation = function(event) {
      event.preventDefault();
      navigator.geolocation.getCurrentPosition(
          function(position) {
              alert(position.coords.latitude + ',' + position.coords.longitude);
          },
          function() {
              alert('Error getting location');
          });
      return false;
  };
  ```

1. Test the Application


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="hardware-acceleration.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> 
Previous</a>
<a href="contacts-api.html" class="btn btn-default pull-right">Next <i class="glyphicon 
glyphicon-chevron-right"></i></a>
</div>
</div>


