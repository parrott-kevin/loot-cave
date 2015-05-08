(function() {
  'use strict';

  angular
    .module('fetch-account.factory', [])
    .factory('fetchAccount', fetchAccount);

  fetchAccount.$inject = ['$http'];

  function fetchAccount($http) {
    return {
      get: get
    };

    function get(platform, name) {
      return $http.get('/api/getAccount', {
        params: {
          platform: platform,
          name: name
        }
      }).success(function(data) {
        return data;
      });
    }
  }
})();
