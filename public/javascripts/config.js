var app = angular.module('mainApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('/', { url: '/', templateUrl: 'views/home.ejs', controller: 'mainCtrl' })
  .state('settings', { url: '/settings', templateUrl: 'views/settings.ejs', controller: 'settingsCtrl' })
  .state('profile', { url: '/profile/{userId}', templateUrl: 'views/profile.ejs', controller: 'mainCtrl' })
  .state('institutions', { url: '/institutions', templateUrl: 'views/institutions.ejs', controller: 'institutionCtrl' })
  .state('login', { url: '/login', templateUrl: 'views/login.ejs', controller: 'mainCtrl' })
  .state('register', { url: '/register', templateUrl: 'views/register.ejs', controller: 'mainCtrl' });
}]);
