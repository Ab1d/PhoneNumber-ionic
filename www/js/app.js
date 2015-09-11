// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app =  angular.module('starter', ['ionic', 'starter.services']); 

 app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)



    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }


 /* window.PhoneCallTrap.onCall(function(state){



      if(state==0){
          alert("Hello");
      }
      else {
        alert("Calling : " +state);
      }
    
    */

    /*  switch (state) {
        case "RINGING" :

             alert("Phone is ringing");
   
            break;
        case "OFFHOOK":
             alert("Offthe hook");

            break;

        case "IDLE":
             alert("Phone is idle");

            break;
    } 

    */
  //  });
     
  });
});


 app.controller('MainCtrl', function($scope, myService){

 myService.GetNumber();

      
 });


