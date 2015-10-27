var app = angular.module('mainApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('/', { url: '/', templateUrl: 'views/home.ejs', controller: 'mainCtrl' })
  .state('settings', { url: '/settings', templateUrl: 'views/settings.ejs', controller: 'mainCtrl' })
  .state('profile', { url: '/profile/{userId}', templateUrl: 'views/profile.ejs', controller: 'mainCtrl' })
  .state('institutions', { url: '/institutions', templateUrl: 'views/institutions.ejs', controller: 'mainCtrl' })
  .state('login', { url: '/login', templateUrl: 'views/login.ejs', controller: 'mainCtrl' })
  .state('register', { url: '/register', templateUrl: 'views/register.ejs', controller: 'mainCtrl' });
}]);

app.controller('mainCtrl', function($scope, $state, $http){
  $http.get('http://localhost:3000/user').success(function(user) {
    if(user) {
      console.log("user", user);
      $scope.currentUser = user.username;
      $scope.userId = user._id;
      console.log($scope.userId);
    }
  });
  $http.get('http://localhost:3000/institutions').success(function(institution) {
      console.log("institution", institution);
      $scope.institutions = institution;
      console.log($scope.institutions);
  });

});
