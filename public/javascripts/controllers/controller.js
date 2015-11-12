app.controller('mainCtrl', function($scope, $state, $http){
  $scope.institutions = [];
  $http.get('https://stormy-woodland-5266.herokuapp.com/user').success(function(user) {
    if(user) {
      console.log("user", user);
      $scope.user = user;
      $scope.currentUser = user.username;
      $scope.unreadMessages = user.unreadMessages;
      $scope.userId = user._id;
      $http.get('https://stormy-woodland-5266.herokuapp.com/institutions').success(function(institutions) {
        institutions.forEach(function(e) {
          if (e.alumni.indexOf($scope.userId) > -1) {
            $scope.institutions.push(e);
          }
        });
        console.log("inst", $scope.institutions);
      });
    }
  });
  $scope.instvsInsts = function() {
    if ($scope.institutions.length > 1) {
      $scope.memberOfOne = false;
    }
    else {
      $scope.memberOfOne = true;
    }
  };

  $scope.register = function(newUser) {
    mixpanel.track("New User Registered");
    $scope.newUser = newUser;
    $http.post('https://stormy-woodland-5266.herokuapp.com/register', $scope.newUser).success(function(err, data) {
      if(err.hasOwnProperty('name') === true) {
        sweetAlert("Uh Oh", err.message, "error");
        return;
      }
      else if(err.hasOwnProperty('errmsg')) {
        console.log(err);
        sweetAlert("Uh Oh", newUser.email + "is already registered", "error");
        return;
      }
      else {
        $scope.user = $scope.newUser;
        $state.go('/').then(function() {
          location.reload();
        });
      }
    });
  };
});

app.controller('institutionCtrl', function($scope, $state, $http){
  $scope.alumni = [];
  $http.get('https://stormy-woodland-5266.herokuapp.com/institutions').success(function(institution) {
    console.log("institution", institution);
    $scope.institutions = institution;
    console.log($scope.institutions);
  });

  $scope.showOneInstitute = function() {
    instituteId = this.institution._id;
    console.log(instituteId);
    $state.go('institute', {instituteId:instituteId});
    console.log("yes");
  };
});
