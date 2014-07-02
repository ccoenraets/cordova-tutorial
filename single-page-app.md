---
layout: module
title: Module 7&#58; Setting Up a Single-Page Application
---
A "Single-Page Application" is a web application that lives within a single HTML page. The "views" of the application are injected into and removed from the DOM as needed as the user navigates through the app. A single-page application architecture is particularly well suited for mobile apps:

- The absence of page refreshes provides a more fluid and closer to native experience.
- The UI is entirely created at the client-side with no dependency on a server to create the UI, making it an ideal architecture for applications that work offline.

In this module, we set up the basic infrastructure to turn Employee Directory into a single-page application.

##Steps

1. In index.html: remove the HTML markup inside the body tag (**with the exception of the script tags**).

2. Inside the immediate function in app.js, define a function named **renderHomeView()** (right after the findByName 
function). Implement the function to programmatically add the Home View markup to the body element.

    ```
    function renderHomeView() {
        var html =
          "<h1>Directory</h1>" +
          "<input class='search-key' type='search' placeholder='Enter name'/>" +
          "<ul class='employee-list'></ul>";
        $('body').html(html);
        $('.search-key').on('keyup', findByName);
    }
    ```

3. Modify the data service initialization logic: when the service has been successfully initialized, call the renderHomeView() function to programmatically display the Home View.

    ```
    var service = new EmployeeService();
    service.initialize().done(function () {
        renderHomeView();
    });
    ```

4. Since you moved the registration of the keyup event inside the renderHomeView() function, 
make sure you remove the original keyup event registration in the Event Registration section.

5. Since the Help button is no longer there, remove the click event handler for the help button (in the Event Registration section).

6. Test the application.


> Make sure you didn't overlook steps 4 and 5 above, otherwise you may run into hard-to-track issues related to 
events firing twice later in this tutorial.

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="avoid-300ms-delay.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> 
Previous</a>
<a href="handlebars-templates.html" class="btn btn-default pull-right">Next <i class="glyphicon 
glyphicon-chevron-right"></i></a>
</div>
</div>


