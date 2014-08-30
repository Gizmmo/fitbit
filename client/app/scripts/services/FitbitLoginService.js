angular.module('Fitbit')
.factory('FitbitLoginService', function ($window, $ionicLoading, $state, $location, localStorageService) {
	var url = 'http://127.0.0.1:1337/auth/fitbit';
	var loginWindow, token, hasToken, userId, hasUserId;

	return {
		login: function () {
			loginWindow = $window.open(url, '_blank', 'location=yes,toolbar=yes,hidden=no');
			$ionicLoading.show({
		         template: '<p>Contacting Fitbit...</p><i class="icon ion-loading-c"></i>',
		         animation: 'fade-in',
		         showBackdrop: false,
		         maxWidth: 200,
		         showDelay: 200
		      });

			loginWindow.addEventListener("loadstop", function(e) {
		        $ionicLoading.hide();
		        loginWindow.show();
		    });

			loginWindow.addEventListener('loadstart', function (event) {
				hasToken = event.url.indexOf('?oauth_token=');
				hasUserId = event.url.indexOf('&userId=');
				if(hasToken > -1 && hasUserId > -1) {
					console.log("Found Token");
					token = event.url.match('oauth_token=(.*)&userId')[1];
					userId = event.url.match('&userId=(.*)')[1];
					localStorageService.set('fitbit-token', token);
					localStorageService.set('token-date', JSON.stringify(new Date()));
					localStorageService.set('userId', userId);
					loginWindow.close();
					location.href=location.pathname;
				}
			});
		}
	}
});