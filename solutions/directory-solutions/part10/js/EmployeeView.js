var EmployeeView = function(employee) {

    this.initialize = function() {
        this.$el = $('<div/>');
    };

    this.render = function() {
        this.$el.html(this.template(employee));
        return this;
    };

    this.initialize();

}
