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

    function get(user) {
      return $http.get('/api/getAccount', {
        params: {
          platform: user.platform,
          name: user.name
        }
      }).success(function(data){
        return data;
      });
    }
  }
})();
