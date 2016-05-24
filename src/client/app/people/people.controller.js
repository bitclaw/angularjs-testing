(function() {
  'use strict';

  angular
    .module('app.people')
    .controller('PeopleController', PeopleController);

  PeopleController.$inject = ['$q','$state', 'dataservice', 'logger'];
  /* @ngInject */
  function PeopleController($q, dataservice, logger) {
    var vm = this;
    vm.people = [{}];
    //vm.goToPerson = goToPerson();
    getPeople();

    function getPeople() {
      dataservice.getPeople()
        .then(function(people) {
          vm.people = people;
          logger.success('Got some people');
        });
    }

    // function goToPerson(p) {
    //   $state.go('person',{id: p.id});
    //   logger.info('went to person: ' + p.id);
    // }

  }
})();
