app.controller('mailCtrl', function($scope, $state, $http){
  $scope.messages = [];
  $http.get('http://localhost:3000/user').success(function(user) {
    $scope.user = user;
    $http.get('http://localhost:3000/mail/').success(function(messages) {
      console.log("messages", messages);
      messages.forEach(function(e) {
        if (e.recipient === $scope.user._id) {
          $scope.messages.push(e);
        }
        //before escaping, have to do a find user by id for all messages.
      });
    });
  });
});
