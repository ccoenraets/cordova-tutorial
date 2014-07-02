var HomeView = Backbone.View.extend({

    initialize: function () {
        this.employees = new EmployeeCollection();
        this.listView = new EmployeeListView({collection: this.employees});
    },

    render: function () {
        this.$el.html(this.template());
        $('.content', this.el).append(this.listView.render().el);
        return this;
    },

    events: {
        "keyup .search-key":    "search",
        "keypress .search-key": "onkeypress"
    },

    search: function (event) {
        var key = $('.search-key').val();
        console.log(key);
        this.employees.fetch({reset: true, data: {name: key}});
    },

    onkeypress: function (event) {
        if (event.keyCode === 13) { // enter key pressed
            event.preventDefault();
        }
    }

});