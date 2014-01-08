// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var adapter = new MemoryAdapter();
    var homeTpl = Handlebars.compile($("#home-tpl").html());
    var employeeTpl = Handlebars.compile($("#employee-tpl").html());
    var detailsURL = /^#employees\/(\d{1,})/;
    var employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
    var slider = new PageSlider($('body'));

    adapter.initialize().done(function () {
        console.log("Data adapter initialized");
        route();
    });

    /* --------------------------------- Event Registration -------------------------------- */
    $(window).on('hashchange', route);

    $('.help-btn').on('click', function() {
        alert("Some help here...")
    });

    document.addEventListener('deviceready', function () {
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "Workshop", // title
                    'OK'        // buttonName
                );
            };
        }

        FastClick.attach(document.body);

    }, false);


    /* ---------------------------------- Local Functions ---------------------------------- */
    function route() {
        var hash = window.location.hash;
        if (!hash) {
            slider.slidePage(new HomeView(adapter, homeTpl, employeeLiTpl).render().el);
            return;
        }
        var match = hash.match(detailsURL);
        if (match) {
            adapter.findById(Number(match[1])).done(function(employee) {
                slider.slidePage(new EmployeeView(adapter, employeeTpl, employee).render().el);
            });
        }
    }

}());