app.controller('mailCtrl', function($scope, $state, $http){
  $scope.messages = [];
  $http.get('http://localhost:3000/user').success(function(user) {
    $scope.user = user;
    $http.get('http://localhost:3000/mail/mymail').success(function(messages) {
      // console.log("messages", messages);
      // if (messages.length > 0) {
        messages.forEach(function(e) {
          if (e.recipientId === $scope.user._id) {
            // console.log("messages", e);
            $http.get("http://localhost:3000/mail/sender/" + e.senderId).success(function(sender) {
              console.log("senderName");
              $scope.messages.push(e);
              console.log("messages", $scope.messages);
            });
          }
        });
      // }
    });
  });

  $scope.showOneMessage = function() {
    console.log(this);
    var msgId = this.message._id;
    $state.go('mail/' + {msgId: msgId});
  };

  // $scope.sendMailForm = function() {
  //   if ($scope.showNameForm === true) { return $scope.showNameForm = false;
  //   } else { return $scope.showNameForm = true; }
  // };

  $scope.sendMail = function() {
    //this may have to be in other controllers, based on how we are going to access another user's id.
    $http.post("http://localhost:3000/send/:id").success(function(sentMessage) {
      console.log(sentMessage);
      swal("Message Sent!", "Your message has been sent and will be delivered shortly!", "success");
    });
  };
});
