

function UserService($http, $state) {
  this.loggedIn = function(user){
    $http.post('/loggedIn', user)
      .success(function(data, status){
        console.log('sucessful login');
        console.log('data: ', data);
        console.log('status: ', status);
        $state.go('somewhere');
      })
      .error(function(error){
        console.log('error: ', error);
      })
  }
}
