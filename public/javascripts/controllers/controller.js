app.controller('mainCtrl', function ($scope, $state, $http) {

  $http.get('http://localhost:3000/user')
    .success(function (user) {
      if (user) {
        console.log("user", user);
        $scope.user = user;
        $scope.currentUser = user.username;
        $scope.unreadMessages = user.unreadMessages;
        $scope.userId = user._id;
        instvsInsts(user);
      }
    }).catch(function (error) {
      console.log(error);
    });

  $scope.register = function (user) {
    $http.post('http://localhost:3000/register', user)
      .success(function (data) {
        console.log(data);
      })
      .error(function (error) {
        console.log(error);
        $scope.error = error.message;
      });
  };

  $scope.login = function (user) {
    $http.post('http://localhost:3000/login', user)
      .success(function (data) {
        console.log(data);

        // $state.go('/');
      })
      .error(function (error) {
        console.log(error);
        $scope.error = error.message;
      });
  };

  var instvsInsts = function (user) {
    if (user.institutions.length > 1) {
      $scope.memberOfOne = false;
    } else {
      $scope.memberOfOne = true;
    }
  };
});

app.controller('institutionCtrl', function ($scope, $state, $http) {
  $scope.alumni = [];
  $http.get('http://localhost:3000/institutions')
    .success(function (institution) {
      console.log("institution", institution);
      $scope.institutions = institution;
      console.log($scope.institutions);
    });

    $http.get('http://localhost:3000/user')
      .catch(function(error){
        console.log(error);
        $state.go('login');
      });

  // $http.post('http://localhost:3000/loggedIn')
  //   .then(function(data){
  //     console.log(data);
  //   })
  //   .catch(function(error){
  //     console.log(error);
  //     $state.go('login')
  //   });

  $scope.showOneInstitute = function () {
    instituteId = this.institution._id;
    console.log(instituteId);
    $state.go('institute', {
      instituteId: instituteId
    });
  };
});
