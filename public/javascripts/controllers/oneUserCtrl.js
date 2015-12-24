app.controller('oneUserCtrl', function($scope, $state, $http){
  console.log($state);
  $http.get(url + '' + $state.params.alumniId).success(function(user) {
    // console.log('user', user);
    $scope.user = user;
    $scope.userId = user._id;
  });

  $scope.addFriend = function(friend) {
    var thisUserId = $scope.user._id;
    $http.post(url + 'addfriend/' + thisUserId)
      .success(function(data){
        mixpanel.track('New connection added');
        swal({
          title: 'Success!',
          text: 'You have added ' + $scope.user.fullName + ' as a friend!',
          type: 'success',
        },
        function(){
          $state.go($state.current, {}, {reload: true});
        });
      })
      .error(function(error){
        console.log(error);
      });
  };

  $scope.mailUser = function(message) {
    var thisUserId = this.user._id;
    console.log('thisuserid', thisUserId);
    console.log('mymessage', message);
    $http.post(url + 'mail/send/' + thisUserId, message).success(function(sentMessage) {
      console.log(sentMessage);
      mixpanel.track('New Message Sent');
      swal('Message Sent!', 'Your message has been sent and will be delivered shortly!', 'success');
    });
  };
});
