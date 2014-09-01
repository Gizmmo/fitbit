'use strict';

/**
 * @ngdoc function
 * @name fitbitApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the fitbitApp
 */
angular.module('Fitbit')
  .controller('ProfileCtrl', function ($scope, $rootScope, $stateParams, localStorageService, $state) {
  	if($stateParams.oauth_token && $stateParams.userId) {
  		localStorageService.set('fitbit-token', $stateParams.oauth_token);
		localStorageService.set('token-date', JSON.stringify(new Date()));
		localStorageService.set('userId', $stateParams.userId);
  		$rootScope.needsAuthentication = false;
  		$rootScope.Authenticated = true;
  		console.log("Switched!");
  	}
  });
