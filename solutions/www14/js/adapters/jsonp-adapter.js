var JSONPAdapter = function() {

    this.initialize = function(data) {
        url = typeof data !== 'undefined' ? data : "http://coenraets.org/directory/api/employees";
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        return $.ajax({url: url + "/" + id, dataType: "jsonp"});
    }

    this.findByName = function(searchKey) {
        return $.ajax({url: url + "?name=" + searchKey, dataType: "jsonp"});
    }

    var url;

}