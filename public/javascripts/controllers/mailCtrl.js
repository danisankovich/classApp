app.controller('mailCtrl', function($scope, $state, $http){
  $scope.messages = [];
  $scope.friends = [];
  $scope.friendsHidden = false;
  $http.get('http://localhost:3000/user')
    .success(function(user) {
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
        user.friends.forEach(function(friend) {
          $http.get('http://localhost:3000/friends/' + friend.friendId, friend).success(function(friend) {
            $scope.friends.push(friend);
            console.log("my friends", $scope.friends);
          });
        });
    })
    .catch(function(error){
      console.log(error);
      $state.go('login');
    });
    
    $scope.toggleFriends = function() {
       if ($scope.friendsHidden === false) {
         $scope.friendsHidden = true;
       }
       else {
         $scope.friendsHidden = false;
       }
    };
    //
    // $http.post('http://localhost:3000/loggedIn')
    //   .then(function(data){
    //     console.log(data);
    //   })
    //   .catch(function(error){
    //     console.log(error);
    //     $state.go('login')
    //   });

  $scope.showOneMessage = function() {
    console.log(this);
    var msgId = this.message._id;
    $state.go('oneMessage', {msgId: msgId});
  };

  $scope.mailUser = function() {
    $scope.friendId = this.friend._id;
    console.log($scope.friendId);
    $scope.msgdUser = this.friend.fullName;
  };
  $scope.sendMail = function(message) {
    var thisUserId = $scope.friendId;
    console.log("thisuserid", thisUserId);
    console.log("mymessage", message);
    $http.post("http://localhost:3000/mail/send/" + thisUserId, message).success(function(sentMessage) {
      console.log(sentMessage);
      swal("Message Sent!", "Your message has been sent and will be delivered shortly!", "success");
    });
  };
});

app.controller('oneMsgCtrl', function($scope, $state, $http){
  var thisUserId;
  console.log($state.params.msgId);
  $http.get('http://localhost:3000/mail/onemessage/' + $state.params.msgId).success(function(message) {
    console.log(message);
    $http.get("http://localhost:3000/mail/sender/" + message.senderId).success(function(sender) {
      message.senderName = sender.fullName;
      $scope.message = message;
      console.log("this", $scope.message);
    });
  });

  $scope.replyForm = function() {
    thisUserId = this.message.senderId;
    console.log(thisUserId);
  };

  $scope.replyUser = function(message) {
    console.log("thisuserid", thisUserId);
    console.log("mymessage", message);
    $http.post("http://localhost:3000/mail/reply/" + thisUserId, message).success(function(sentMessage) {
      console.log(sentMessage);
      swal("Message Sent!", "Your message has been sent and will be delivered shortly!", "success");
    });
  };
});
