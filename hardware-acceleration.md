---
layout: module
title: Module 11&#58; Using Hardware Acceleration
---
In this module, you add hardware accelerated page transitions when the user navigates between the list and details 
views. 

##Steps

Modify index.html as follows:

1. Add pageslider.css inside the head tag in index.html:

  ```
  <link href="assets/css/pageslider.css" rel="stylesheet">
  ```


2. Add a script tag to include the pageslider.js library (**after** jquery.js):

  ```
  <script src="lib/pageslider.js"></script>
  ```

  >PageSlider is a micro library I host on GitHub <a href="https://github.com/ccoenraets/PageSlider">here</a>.


Modify app.js as follows:

1. In the Local Variables section, declare an instance of the PageSlider object as follows:

  ```
  var slider = new PageSlider($('body'));
  ```

1. In the routes, replace the calls to $('body').html() with calls to slider.slidePage() passing the same argument to the function.

  ```
  slider.slidePage(new HomeView(service).render().$el);

  ```

  and

  ```
  slider.slidePage(new EmployeeView(employee).render().$el);
  ```

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="routing.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> 
Previous</a>
<a href="geolocation.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>