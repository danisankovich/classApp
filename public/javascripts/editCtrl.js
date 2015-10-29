app.controller('settingsCtrl', function($scope, $state, $http) {

  $http.get('http://localhost:3000/user').success(function(user) {
    if (user) {
      console.log('user', user);
      $scope.user = user;
      $scope.currentUser = user.username;
      $scope.userId = user._id;
      console.log($scope.userId);
    }
  });

  $scope.editFullName = function(user) {
    $http.post('http://localhost:3000/edit/fullname', user).success(function(response) {
      console.log(response);
      $scope.showName();
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

  $scope.editStreet = function(user) {
    $http.post('http://localhost:3000/edit/street', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editCity = function(user) {
    $http.post('http://localhost:3000/edit/city', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editState= function(user) {
    $http.post('http://localhost:3000/edit/state', user).success(function(response) {
      console.log(response);
    });
  };
  $scope.editZip = function(user) {
    $http.post('http://localhost:3000/edit/zip', user).success(function(response) {
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
  $scope.editProfilePic = function(user) {
    $http.post('http://localhost:3000/edit/profilepic', user).success(function(response) {
      console.log(response);
    });
  };

  $scope.showName = function() {
    if ($scope.showNameForm === true) { return $scope.showNameForm = false;
    } else { return $scope.showNameForm = true; }
  };

  $scope.showEmail = function() {
    if ($scope.showEmailForm === true) { $scope.showEmailForm = false;
    } else { return $scope.showEmailForm = true; }
  };

  $scope.showBio = function() {
    if ($scope.showBioForm === true) { $scope.showBioForm = false;
    } else { return $scope.showBioForm = true; }
  };

  $scope.showCurrentJob = function() {
    if ($scope.showJobForm === true) { $scope.showJobForm = false;
    } else { return $scope.showJobForm = true; }
  };

  $scope.showHireable = function() {
    if ($scope.showHireableForm === true) { $scope.showHireableForm = false;
    } else { return $scope.showHireableForm = true; }
  };

  $scope.showHiring = function() {
    if ($scope.showHiringForm === true) { $scope.showHiringForm = false;
    } else { return $scope.showHiringForm = true; }
  };

  $scope.showPhone = function() {
    if ($scope.showPhoneForm === true) { $scope.showPhoneForm = false;
    } else { return $scope.showPhoneForm = true; }
  };

  $scope.showStreet= function() {
    if ($scope.showStreetForm === true) { $scope.showStreetForm = false;
    } else { return $scope.showStreetForm = true; }
  };
  $scope.showCity= function() {
    if ($scope.showCityForm === true) { $scope.showCityForm = false;
    } else { return $scope.showCityForm = true; }
  };
  $scope.showState= function() {
    if ($scope.showStateForm === true) { $scope.showStateForm = false;
    } else { return $scope.showStateForm = true; }
  };
  $scope.showZip= function() {
    if ($scope.showZipForm === true) { $scope.showZipForm = false;
    } else { return $scope.showZipForm = true; }
  };

  $scope.showPersonalWebsite = function() {
    if ($scope.showPersonalWebsiteForm === true) { $scope.showPersonalWebsiteForm = false;
    } else { return $scope.showPersonalWebsiteForm = true; }
  };

  $scope.showTwitter = function() {
    if ($scope.showTwitterForm === true) { $scope.showTwitterForm = false;
    } else { return $scope.showTwitterForm = true; }
  };

  $scope.showBlog = function() {
    if ($scope.showBlogForm === true) { $scope.showBlogForm = false;
    } else { return $scope.showBlogForm = true; }
  };

  $scope.showGitHub = function() {
    if ($scope.showGitHubForm === true) { $scope.showGitHubForm = false;
    } else { return $scope.showGitHubForm = true; }
  };

  $scope.showLinkedIn = function() {
    if ($scope.showLinkedInForm === true) { $scope.showLinkedInForm = false;
    } else { return $scope.showLinkedInForm = true; }
  };

  $scope.showFacebook = function() {
    if ($scope.showFacebookForm === true) { $scope.showFacebookForm = false;
    } else { return $scope.showFacebookForm = true; }
  };

  $scope.showAngelist = function() {
    if ($scope.showAngelistForm === true) { $scope.showAngelistForm = false;
    } else { return $scope.showAngelistForm = true; }
  };

  $scope.showStackOverflow = function() {
    if ($scope.showStackOverflowForm === true) { $scope.showStackOverflowForm = false;
    } else { return $scope.showStackOverflowForm = true; }
  };

  $scope.showQuora = function() {
    if ($scope.showQuoraForm === true) { $scope.showQuoraForm = false;
    } else { return $scope.showQuoraForm = true; }
  };
  $scope.showProfilePic = function() {
    if ($scope.showProfilePicForm === true) { $scope.showProfilePicForm = false;
    } else { return $scope.showProfilePicForm = true; }
  };

});
