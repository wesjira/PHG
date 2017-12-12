// Initialize app
 // var myApp = new Framework7();

//memfungsikan back button on android
var myApp = new Framework7({pushState: true,});

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});


// script pushNotification from apache.Cordova.org
var push = PushNotification.init({
    android: {
    },
    browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
    },
    ios: {
        alert: "true",
        badge: "true",
        sound: "true"
    },
    windows: {}
});

push.on('registration', function(data) {
    // data.registrationId
});

push.on('notification', function(data) {
    // data.message,
    // data.title,
    // data.count,
    // data.sound,
    // data.image,
    // data.additionalData
});

push.on('error', function(e) {
    // e.message
});



//framework7
// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Now we need to run the code that will be executed only for About page.
// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page
myApp.alert('cek');
})




// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;
    var user = localStorage.getItem('userInfo');

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page1');
        myApp.addNotification({
        title: 'Framework7',
        message: 'This is a simple notification message with title and message'
    });
    }

    if (page.name === 'login') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes index page');
        if (user !== null) {
            myApp.alert('ok');
        } else { myApp.alert('not ok'); }
    }


})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page2');
})
