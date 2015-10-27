app.controller('mainCtrl', function($scope, $state, $http){
  $http.get('http://localhost:3000/user').success(function(user) {
    if(user) {
      console.log("user", user);
      $scope.user = user;
      $scope.currentUser = user.username;
      $scope.userId = user._id;
      console.log($scope.userId);
    }
  });
});
app.controller('institutionCtrl', function($scope, $state, $http){
  $http.get('http://localhost:3000/institutions').success(function(institution) {
      console.log("institution", institution);
      $scope.institutions = institution;
      console.log($scope.institutions);
  });
});
app.controller('settingsCtrl', function($scope, $state, $http){
  $http.get('http://localhost:3000/user').success(function(user) {
    if(user) {
      console.log("user", user);
      $scope.user = user;
      $scope.currentUser = user.username;
      $scope.userId = user._id;
      console.log($scope.userId);
    }
  });
  $scope.editLinkedIn = function() {
    $http.post('http://localhost:3000/edit/linkedin', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editFacebook = function(user) {
    $http.post('http://localhost:3000/edit/facebook', user).success(function(response) {
      console.log(response);
    });
  };
});
