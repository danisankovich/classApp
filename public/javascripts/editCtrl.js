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

  $scope.showName = function() {
    if ($scope.showNameForm === true) { return $scope.showNameForm = false; }
    else { return $scope.showNameForm = true; }
  };
  $scope.showEmail = function() {
    if ($scope.showEmailForm === true) { return $scope.showEmailForm = false; }
    else { return $scope.showEmailForm = true; }
  };
  $scope.showBio = function() {
    if ($scope.showBioForm === true) { return $scope.showBioForm = false; }
    else { return $scope.showBioForm = true; }
  };
  $scope.showCurrentJob = function() {
    if ($scope.showJobForm === true) { return $scope.showJobForm = false; }
    else { return $scope.showJobForm = true; }
  };
  $scope.showHireable = function() {
    if ($scope.showHireableForm === true) { return $scope.showHireableForm = false; }
    else { return $scope.showHireableForm = true; }
  };
  $scope.showHiring = function() {
    if ($scope.showHiringForm === true) { return $scope.showHiringForm = false; }
    else { return $scope.showHiringForm = true; }
  };
  $scope.showPhone = function() {
    if ($scope.showPhoneForm === true) { return $scope.showPhoneForm = false; }
    else { return $scope.showPhoneForm = true; }
  };
  $scope.showAddress = function() {
    if ($scope.showAddressForm === true) { return $scope.showAddressForm = false; }
    else { return $scope.showAddressForm = true; }
  };
  $scope.showPersonalWebsite = function() {
    if ($scope.showPersonalWebsiteForm === true) { return $scope.showPersonalWebsiteForm = false; }
    else { return $scope.showPersonalWebsiteForm = true; }
  };
  $scope.showTwitter = function() {
    if ($scope.showTwitterForm === true) { return $scope.showTwitterForm = false; }
    else { return $scope.showTwitterForm = true; }
  };
  $scope.showBlog = function() {
    if ($scope.showBlogForm === true) { return $scope.showBlogForm = false; }
    else { return $scope.showBlogForm = true; }
  };
  $scope.showGitHub = function() {
    if ($scope.showGitHubForm === true) { return $scope.showGitHubForm = false; }
    else { return $scope.showGitHubForm = true; }
  };
  $scope.showLinkedIn = function() {
    if ($scope.showLinkedInForm === true) { return $scope.showLinkedInForm = false; }
    else { return $scope.showLinkedInForm = true; }
  };
  $scope.showFacebook = function() {
    if ($scope.showFacebookForm === true) { return $scope.showFacebookForm = false; }
    else { return $scope.showFacebookForm = true; }
  };
  $scope.showAngelist = function() {
    if ($scope.showAngelistForm === true) { return $scope.showAngelistForm = false; }
    else { return $scope.showAngelistForm = true; }
  };
  $scope.showStackOverflow = function() {
    if ($scope.showStackOverflowForm === true) { return $scope.showStackOverflowForm = false; }
    else { return $scope.showStackOverflowForm = true; }
  };
  $scope.showQuora = function() {
    if ($scope.showQuoraForm === true) { return $scope.showQuoraForm = false; }
    else { return $scope.showQuoraForm = true; }
  };

});
