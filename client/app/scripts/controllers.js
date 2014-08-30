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

.controller('AuthenticationController', function($scope, $stateParams, localStorageService, $state) {
	if (localStorageService.get('fitbit-token') && isTokenInDate(localStorageService)) {
			$state.transitionTo('home');
			$scope.Authenticated = true;
			console.log("User Logged and Auth");

	} else {
		$scope.needsAuthentication = true;
		console.log("User Not Auth")
	}
	$scope.logout = function () {
		LocalStorageService.clearAll();
		location.href = location.path
	}
})

.controller('LoginController', function($scope, FitbitLoginService) {
	console.log("LoginCtrl");
	$scope.fitbitLogin = FitbitLoginService.login;
})

.controller('AccountCtrl', function($scope) {
});
