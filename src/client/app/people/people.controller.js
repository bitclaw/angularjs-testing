(function() {
  'use strict';

  angular
    .module('app.people')
    .controller('PeopleController', PeopleController);

  PeopleController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function PeopleController($q, dataservice, logger) {
    var vm = this;
    
  }
})();
