'use strict';

/**
 * @ngdoc function
 * @name fitbitApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the fitbitApp
 */
angular.module('Fitbit')
  .controller('ProfileCtrl', function ($scope, $rootScope, $stateParams, $state) {
  	if($stateParams.oauth_token && $stateParams.userId) {
  		$rootScope.needsAuthentication = false;
  		$rootScope.Authenticated = true;
  		console.log("Switched!");
  	}
  });
