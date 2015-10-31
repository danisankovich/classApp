app.controller('mailCtrl', function($scope, $state, $http){
  $scope.messages = [];
  $http.get('http://localhost:3000/user').success(function(user) {
    $scope.user = user;
    $http.get('http://localhost:3000/mail/').success(function(messages) {
      console.log("messages", messages);
      messages.forEach(function(e) {
        if (e.recipient === $scope.user._id) {
          $http.get("http://localhost:3000/mail/sender").success(function(sender) {
            e.senderName = sender.fullName;
            $scope.messages.push(e);
          });
        }
      });
    });
  });

  $scope.showOneMessage = function() {
    console.log(this);
    var msgId = this.message._id;
    $state.go('mail/' + {msgId: msgId});
  };

  $scope.sendMailForm = function() {
    if ($scope.showNameForm === true) { return $scope.showNameForm = false;
    } else { return $scope.showNameForm = true; }
  };

  $scope.sendMail = function() {
    //this may have to be in other controllers, based on how we are going to access another user's id.
    $http.post("http://localhost:3000/send/:id").success(function(sentMessage) {
      console.log(sentMessage);
      swal("Message Sent!", "Your message has been sent and will be delivered shortly!", "success");
    });
  };
});
