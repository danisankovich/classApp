var app = angular.module('mainApp', ['ui.router']);
window.url = 'https://alumni-network.herokuapp.com/';
// window.url = 'http://localhost:3000/';

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('/', { url: '/', templateUrl: './views/home.ejs', controller: 'mainCtrl' })
  .state('settings', { url: '/settings', templateUrl: './views/settings.ejs', controller: 'settingsCtrl' })
  .state('profile', { url: '/profile/{userId}', templateUrl: './views/profile.ejs', controller: 'mainCtrl' })
  .state('institutions', { url: '/institutions', templateUrl: './views/institutions.ejs', controller: 'institutionCtrl' })
  .state('institute', { url: '/institute/{instituteId}', templateUrl: './views/institution.ejs', controller: 'oneInstitutionCtrl' })
  .state('editinstitution', { url: '/editinstitution/{instituteId}', templateUrl: './views/institutionEdit.ejs', controller: 'editInstitutionCtrl' })
  .state('login', { url: '/login', templateUrl: './views/login.ejs', controller: 'mainCtrl' })
  .state('loginfail', { url: '/loginfail', templateUrl: './views/loginfail.ejs', controller: 'mainCtrl' })
  .state('register', { url: '/register', templateUrl: './views/register.ejs', controller: 'mainCtrl' })
  .state('oneUser', { url: '/user/{alumniId}', templateUrl: './views/oneUser.ejs', controller: 'oneUserCtrl' })
  .state('mymail', { url: '/mymail', templateUrl: './views/mymail.ejs', controller: 'mailCtrl' })
  .state('oneMessage', { url: '/mymail/{msgId}', templateUrl: './views/oneMessage.ejs', controller: 'oneMsgCtrl' });
}]);
