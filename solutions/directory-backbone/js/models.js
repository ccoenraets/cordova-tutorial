var Employee = Backbone.Model.extend({

    urlRoot: "http://localhost:5000/employees"

});

var EmployeeCollection = Backbone.Collection.extend({

    model: Employee,

    url: "http://localhost:5000/employees"

});
