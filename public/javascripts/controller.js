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
  $scope.alumni = [];
  $http.get('http://localhost:3000/institutions').success(function(institution) {
      console.log("institution", institution);
      $scope.institutions = institution;
      console.log($scope.institutions);
  });

  $scope.showOneInstitute = function() {
    instituteId = this.institution._id;
    console.log(instituteId);
    $state.go('institute', {instituteId:instituteId});
  };
});
