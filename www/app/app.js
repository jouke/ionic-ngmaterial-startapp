(function() {
  // Is My Stable App
  var appDependencies = [
    'ionic', 
    'ngMaterial', 
    'ngMdIcons',
    'ui.router', 
  ];

  function appRun($rootScope, $ionicPlatform) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
      console.error(error);
    });
    
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
    });
  };

  function appConfig($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('indigo');
  };

  appConfig.$inject = ['$mdThemingProvider'];
  appRun.$inject    = ['$rootScope', '$ionicPlatform'];

  var app = angular.module('MyIonicApp', appDependencies)
              .config(appConfig)
              .run(appRun);

})();
