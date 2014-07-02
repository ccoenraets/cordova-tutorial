---
layout: module
title: Module 14&#58; Using the Camera API
---
In this section, you use the Cordova Camera API to provide the user with the ability to take a picture of an employee, and use that picture as the employee's picture in the application. We do not persist that picture in this sample application.

> The code below only works when running the application on your device as a Cordova app. In other words, you can't test it in a browser on the desktop.


1. Add the camera plugin to your project:

  ```
  cordova plugin add org.apache.cordova.camera
  ```

1. In index.html, add the following list item to the employee template:

  ```
  <li class="table-view-cell media">
      <a hre="#" class="push-right change-pic-btn">
          <span class="media-object pull-left"></span>
          <div class="media-body">
              Change Picture
          </div>
      </a>
  </li>
  ```

1. In the initialize() function of EmployeeView, register an event listener for the click event of the Change Picture list item:

  ```
  this.$el.on('click', '.change-pic-btn', this.changePicture);
  ```

1. In EmployeeView, define the changePicture event handler as follows:

  ```
  this.changePicture = function(event) {
      event.preventDefault();
      if (!navigator.camera) {
          alert("Camera API not supported", "Error");
          return;
      }
      var options =   {   quality: 50,
                          destinationType: Camera.DestinationType.DATA_URL,
                          sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
                          encodingType: 0     // 0=JPG 1=PNG
                      };

      navigator.camera.getPicture(
          function(imgData) {
              $('.media-object', this.$el).attr('src', "data:image/jpeg;base64,"+imgData);
          },
          function() {
              alert('Error taking picture', 'Error');
          },
          options);

      return false;
  };
  ```

1. Test the Application

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="contacts-api.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> 
Previous</a>
<a href="camera-api.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>


