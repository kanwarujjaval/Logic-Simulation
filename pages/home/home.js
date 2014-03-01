(function () {
    "use strict";
    var nav = WinJS.Navigation;
    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var listView = element.querySelector('#basicListView').winControl;

            // Notify the ListView to calculate its layout
            listView.forceLayout();

            function itemInvokedHandler(eventObject) {
                eventObject.detail.itemPromise.done(function (invokedItem) {
                    nav.navigate("/pages/" +invokedItem.data.link+ ".html");
                });
            }

            listView.addEventListener("iteminvoked", itemInvokedHandler, false);
        }
    });
})();
