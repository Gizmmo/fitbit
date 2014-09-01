'use strict';
angular.module('Fitbit.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AuthenticationController', function($scope, $rootScope, $stateParams, localStorageService, $state) {
	if (localStorageService.get('fitbit-token') && isTokenInDate(localStorageService)) {
			$state.transitionTo('profile');
			$rootScope.Authenticated = true;
			console.log("User Logged and Auth");

	} else {
		$rootScope.needsAuthentication = true;
		console.log("User Not Auth")
	}
	$scope.logout = function () {
		LocalStorageService.clearAll();
		location.href = location.path
	}
})

.controller('LoginController', function($scope, FitbitLoginService) {
	$scope.fitbitLogin = FitbitLoginService.login;
})

.controller('AccountCtrl', function($scope, fitbitFactory, localStorageService) {
	fitbitFactory.getProfile(localStorageService.get('fitbit-token'))
				.success(function (profile) {
					console.log(profile);
					$('#fitbitResults').html('<h4>Hello ' + profile.user.nickname + ', here is your account information: <br></h4>' + '<pre>' + JSON.stringify(profile) + '</pre>');
				})
				.error(function (error) {
					$scope.status = 'Unable to create new Feed Item: ' + error.message;
				});
});

var isTokenInDate = function(localStorageService){
  var tokenDate = new Date(JSON.parse(localStorageService.get('token-date')));
  if (tokenDate) {
    var today = new Date();
    var timeDiff = Math.abs(today.getTime() - tokenDate.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if(diffDays > 10) {
      return false;
    }
  } else {
    return false;
  }
  return true;
};
