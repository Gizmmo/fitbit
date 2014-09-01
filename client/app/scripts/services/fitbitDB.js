'use strict';

/**
* @ngdoc function
* @name bbiqApp.controller:ProfileCtrl
* @description
* # ProfileCtrl
* Controller of the bbiqApp
*/
angular.module('Fitbit')
   .factory('fitbitFactory', ['$http', '$rootScope', function($http, $rootScope) {

   var urlBase = 'http://127.0.0.1:1337' +'/user';
   var productFactory = {};

   productFactory.getProfile = function (id) {
      var options = {
        userId: id
      }
       return $http.post(urlBase + "/profile", options);
   };

   return productFactory;
}]);
