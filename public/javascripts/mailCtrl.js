app.controller('mailCtrl', function($scope, $state, $http){
  $scope.messages = [];
  $http.get('http://localhost:3000/user').success(function(user) {
    $scope.user = user;
    $http.get('http://localhost:3000/mail/mymail').success(function(messages) {
        messages.forEach(function(e) {
          if (e.recipientId === $scope.user._id) {
            $http.get("http://localhost:3000/mail/sender/" + e.senderId).success(function(sender) {
              e.senderName = sender.fullName;
              $scope.messages.push(e);
              console.log(messages);
            });
          }
        });
      });
    });

  $scope.showOneMessage = function() {
    console.log(this);
    var msgId = this.message._id;
    $state.go('oneMessage', {msgId: msgId});
  };

  $scope.sendMail = function() {
    //this may have to be in other controllers, based on how we are going to access another user's id.
    $http.post("http://localhost:3000/send/:id").success(function(sentMessage) {
      console.log(sentMessage);
      swal("Message Sent!", "Your message has been sent and will be delivered shortly!", "success");
    });
  };
});

app.controller('oneMsgCtrl', function($scope, $state, $http){
  console.log($state.params.msgId);
  $http.get('http://localhost:3000/mail/onemessage/' + $state.params.msgId).success(function(message) {
    console.log(message);
    $http.get("http://localhost:3000/mail/sender/" + message.senderId).success(function(sender) {
      message.senderName = sender.fullName;
      $scope.message = message;
      console.log("this", $scope.message);
    });
  });
});
