app.controller('oneUserCtrl', function($scope, $state, $http){
  console.log($state);
  $http.get('http://localhost:3000/' + $state.params.alumniId).success(function(user) {
    console.log("user", user);
    $scope.user = user;
    $scope.userId = user._id;
  });
});
