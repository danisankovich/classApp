app.controller('settingsCtrl', function($scope, $state, $http) {
  $http.get('https://stormy-woodland-5266.herokuapp.com/user').success(function(user) {
    if (user) {
      $scope.user = user;
      $scope.currentUser = user.username;
      $scope.userId = user._id;
    }
  });
  $scope.editFullName = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/fullname', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your name is now!"+ $scope.user.fullName, "success");
  };
  $scope.editEmail = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/email', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your email is now!"+ $scope.user.email, "success");
  };
  $scope.editBio = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/bio', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your About Me section has been changed!", "success");
  };
  $scope.editCurrentJob = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/currentjob', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your Current Job is now!"+ $scope.user.currentJob, "success");
  };
  $scope.editHireable = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/hireable', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your hireability status is now!" + $scope.user.hireable, "success");
  };
  $scope.editHiring = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/hiring', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your hiring status is now!"+ $scope.user.hiring, "success");
  };
  $scope.editPhoneNumber = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/phonenumber', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your Phone Number is now!"+ $scope.user.phoneNumber, "success");
  };
  $scope.editStreet = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/street', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your Street is now!"+ $scope.user.street, "success");
  };
  $scope.editCity = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/city', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your City is now!"+ $scope.user.city, "success");
  };
  $scope.editState= function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/state', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your State is now!"+ $scope.user.state, "success");
  };
  $scope.editZip = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/zip', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your Zip Code is now!"+ $scope.user.zip, "success");
  };
  $scope.editPersonalWebsite = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/personal', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your Personal Website is now!"+ $scope.user.personalWebsite, "success");
  };
  $scope.editTwitter = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/twitter', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your Twitter is now!"+ $scope.user.twitter, "success");
  };
  $scope.editBlog = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/blog', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your Blog is now!"+ $scope.user.blog, "success");
  };
  $scope.editGitHub = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/github', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your GitHub is now!"+ $scope.user.github, "success");
  };
  $scope.editLinkedIn = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/linkedin', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your LinkedIn is now!"+ $scope.user.linkedIn, "success");
  };
  $scope.editFacebook = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/facebook', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your Facebook is now!"+ $scope.user.facebook, "success");
  };
  $scope.editAngelist = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/angelist', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your Angelist is now!"+ $scope.user.angelist, "success");
  };
  $scope.editStackOverflow = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/stackoverflow', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your Stack Overflow is now!"+ $scope.user.stackOverflow, "success");
  };
  $scope.editQuora = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/quora', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your Quora is now!"+ $scope.user.quora, "success");
  };
  $scope.editProfilePic = function(user) {
    $http.post('https://stormy-woodland-5266.herokuapp.com/edit/profilepic', user).success(function(response) {
      console.log(response);
    });
    swal("Edit Success!", "Your Profile Pic is now!"+ $scope.user.profilePic, "success");
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
