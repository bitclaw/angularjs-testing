/* jshint -W117, -W030 */
describe('PeopleController', function() {
  var controller;
  var people = mockData.getMockPeople();

  beforeEach(function() {
    bard.appModule('app.people');
    bard.inject('$controller','$q', '$rootScope');

    var ds = {
      getPeople: function() {
        return $q.when(people);
      }
    };

    controller = $controller('PeopleController',{
      dataservice: ds
    });

  });

  it('should exist',function() {
    expect(controller).to.exist;
  });

  it('should have empty people array before activation',function() {
    expect(controller.people).to.exist;
  });

  describe('after activation', function() {
    beforeEach(function() {
      bard.inject('$state');
      $rootScope.$apply();
    });

    it('selecting a person triggers a state change',function() {
      controller.goToPerson({id: 3});
      expect($state.current.name).to.equal('person');
    });

    it('should have people',function() {
      expect(controller.people).to.have.length.above(0);
    });

    it('should have mock people',function() {
      expect(controller.people).to.have.length(people.length);
    });

  });

});
