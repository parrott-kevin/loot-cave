(function() {
  'use strict';

  angular
    .module('error.controller', [])
    .controller('ErrorController', ErrorController);

  ErrorController.$inject = [];
  function ErrorController() {
    var vm = this;
    vm.messege = 'We Apologize for the Inconvenience';

  }
})();
