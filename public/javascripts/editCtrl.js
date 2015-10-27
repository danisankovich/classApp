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

  $scope.editFullName = function(user) {
    $http.post('http://localhost:3000/edit/fullname', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editEmail = function(user) {
    $http.post('http://localhost:3000/edit/email', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editBio = function(user) {
    $http.post('http://localhost:3000/edit/bio', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editCurrentJob = function(user) {
    $http.post('http://localhost:3000/edit/currentjob', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editHireable = function(user) {
    $http.post('http://localhost:3000/edit/hireable', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editHiring = function(user) {
    $http.post('http://localhost:3000/edit/hiring', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editPhoneNumber = function(user) {
    $http.post('http://localhost:3000/edit/phonenumber', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editAddress = function(user) {
    $http.post('http://localhost:3000/edit/address', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editPersonalWebsite = function(user) {
    $http.post('http://localhost:3000/edit/personal', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editTwitter = function(user) {
    $http.post('http://localhost:3000/edit/twitter', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editBlog = function(user) {
    $http.post('http://localhost:3000/edit/blog', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editGitHub = function(user) {
    $http.post('http://localhost:3000/edit/github', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editLinkedIn = function(user) {
    $http.post('http://localhost:3000/edit/linkedin', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editFacebook = function(user) {
    $http.post('http://localhost:3000/edit/facebook', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editAngelist = function(user) {
    $http.post('http://localhost:3000/edit/angelist', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editStackOverflow = function(user) {
    $http.post('http://localhost:3000/edit/stackoverflow', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editQuora = function(user) {
    $http.post('http://localhost:3000/edit/quora', user).success(function(response) {
      console.log(response);
    });
  };
});
