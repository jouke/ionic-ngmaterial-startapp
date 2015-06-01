(function() {
  angular.module('MyIonicApp')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        abstract: true,
        url: '/',
        controller: 'MainCtrl as mc',
        templateUrl: 'app/main/main.html',
      })
      .state('main.dashboard', {
        abstract: true,
        url: ':stableId',
        views: {
          '@main' : {
            controller: 'DashboardCtrl as dc',
            templateUrl: 'app/dashboard/dashboard.html'
          },
          'toolbar@main.dashboard' : {
            controller: 'ToolbarCtrl as tbc',
            templateUrl: 'app/toolbar/toolbar.html'
          },
          'sidemenu@main.dashboard' : {
            controller: 'SidemenuCtrl as smc',
            templateUrl: 'app/sidemenu/sidemenu.html'
          }
        }
      })
      .state('main.dashboard.recent', {
        url: 'recent',
        views: {
          'content' : {
            controller: 'RecentCtrl as rc',
            templateUrl: 'app/recent/recent.html'
          }
        }
      })
      .state('main.dashboard.favorites', {
        url: '/favorites',
        views: {
          'content' : {
            controller: 'FavoritesCtrl as fc',
            templateUrl: 'app/favorites/favorites.html'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  };
})();