---
layout: module
title: Module 13&#58; Using the Contacts API
---
In this section, you use the Cordova Contacts API to provide the user with the ability to add an employee to the device's contact list.

> The code below only works when running the application on your device as a Cordova app. In other words, you can't test it in a browser on your computer.


1. Add the contacts plugin to your project
  
    ```
    cordova plugin add org.apache.cordova.contacts
    ```

1. In index.html, add the following list item to the employee template:


    ```
    <li class="table-view-cell media">
        <a hre="#" class="push-right add-contact-btn">
            <span class="media-object pull-left"></span>
            <div class="media-body">
                Add to contacts
            </div>
        </a>
    </li>
    ```

1. In the initialize() function of EmployeeView, register an event listener for the click event of the *Add to Contacts* list item:

    ```
    this.$el.on('click', '.add-contact-btn', this.addToContacts);
    ```

1. In EmployeeView, define the <em>addToContacts</em> event handler as follows:

    ```
    this.addToContacts = function(event) {
        event.preventDefault();
        console.log('addToContacts');
        if (!navigator.contacts) {
            alert("Contacts API not supported", "Error");
            return;
        }
        var contact = navigator.contacts.create();
        contact.name = {givenName: employee.firstName, familyName: employee.lastName};
        var phoneNumbers = [];
        phoneNumbers[0] = new ContactField('work', employee.officePhone, false);
        phoneNumbers[1] = new ContactField('mobile', employee.cellPhone, true);
        contact.phoneNumbers = phoneNumbers;
        contact.save();
        return false;
    };
    ```

1. Test the Application

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="geolocation.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> 
Previous</a>
<a href="camera-api.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>


