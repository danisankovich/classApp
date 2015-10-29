app.controller('oneInstitutionCtrl', function($scope, $state, $http){
  $scope.institutionAlumni = [];
  $http.get('http://localhost:3000/institute/' + $state.params.instituteId).success(function(institution) {
    $scope.institution = institution;
    console.log(institution);
    institution.alumni.forEach(function(e) {
      $http.get('http://localhost:3000/' + e).success(function(user) {
        $scope.institutionAlumni.push(user);
      });
    });
  });
  $scope.joinInstitution = function(user) {
    console.log($state.params.instituteId);
    $http.post("http://localhost:3000/institution/newalumni/" + $state.params.instituteId).success(function() {
      $http.post("http://localhost:3000/alumni/newinstitution/" + $state.params.instituteId);
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