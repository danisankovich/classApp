app.controller('oneInstitutionCtrl', function($scope, $state, $http){
  $scope.institutionAlumni = [];
  $scope.urlId = $state.params.instituteId;
  console.log($scope.urlId);
  $http.get('http://localhost:3000/institute/' + $state.params.instituteId).success(function(institution) {
    $scope.institution = institution;
    console.log(institution);
    institution.alumni.forEach(function(e) {
      $http.get('http://localhost:3000/' + e).success(function(user) {
        $scope.institutionAlumni.push(user);
      });
    });
  });
  $http.get('http://localhost:3000/user').success(function(user) {
    if(user) {
      console.log("user", user);
      $scope.user = user;
      $scope.currentUser = user.username;
      $scope.userId = user._id;
      console.log($scope.userId);
    }
  });
  $scope.joinInstitution = function(user) {
    console.log($state.params.instituteId);
    $http.post("http://localhost:3000/institution/newalumni/" + $state.params.instituteId).success(function() {
      $http.post("http://localhost:3000/alumni/newinstitution/" + $state.params.instituteId);
    });
    swal("Edit Success!", "You have joined this institution", "success");
  };
  $scope.joinInstitutionOpen = function() {
    $scope.showJoinForm = true;
  };

  $scope.leaveInstitution = function() {
    console.log($scope.user._id);
    $http.post('http://localhost:3000/edit/institutionalumni/'+ $state.params.instituteId + "/" + $scope.user._id).success(function() {
      $http.post('http://localhost:3000/edit/leaveinstitution/' + $state.params.instituteId + "/" + $scope.user._id);
    });
  };

  $scope.addEvent = function(newEvent) {
    $http.post("http://localhost:3000/events/new/"+ $state.params.instituteId, newEvent).success(function(newEvent) {
      console.log(newEvent);
    });
  };

  $scope.showOneUser = function() {
    console.log(this.alumni._id);
    $state.go('oneUser', {alumniId:this.alumni._id});
  };
  $scope.showInstitutionEdit = function() {
    instituteId = this.institution._id;
    console.log(instituteId);
    $state.go('editinstitution', {instituteId:instituteId});
    console.log("yes");
  };
});
