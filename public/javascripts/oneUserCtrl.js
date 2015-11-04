app.controller('oneUserCtrl', function($scope, $state, $http){
  console.log($state);
  $http.get('http://localhost:3000/' + $state.params.alumniId).success(function(user) {
    console.log("user", user);
    $scope.user = user;
    $scope.userId = user._id;
  });

  $scope.addFriend = function(friend) {
    var thisUserId = $scope.user._id;
    $http.post("http://localhost:3000/addfriend/" + thisUserId);
  };
  // $scope.addFriend = function(friend) {
  //   var thisUserId = $scope.user._id;
  //   $http.post('http://localhost:3000/users/addfriend/' + thisUserId, friend).success(function() {
  //     console.log("it worked");
  //   });
  // };

  $scope.mailUser = function(message) {
    var thisUserId = this.user._id;
    console.log("thisuserid", thisUserId);
    console.log("mymessage", message);
    //this may have to be in other controllers, based on how we are going to access another user's id.
    $http.post("http://localhost:3000/mail/send/" + thisUserId, message).success(function(sentMessage) {
      console.log(sentMessage);
      swal("Message Sent!", "Your message has been sent and will be delivered shortly!", "success");
    });
  };
});
