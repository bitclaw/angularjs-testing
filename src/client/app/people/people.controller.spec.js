/* jshint -W117, -W030 */
describe('PeopleController', function() {
  var controller;
  var people = mockData.getMockPeople();

  beforeEach(function() {
    bard.appModule('app.people');
    bard.inject(this, '$controller', '$log', '$q', '$rootScope' , 'dataservice');

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
    it('should have people',function() {
      $rootScope.$apply;
      expect(controller.people).to.have.length.above(0);
    });

    it('should have mock people',function() {
      $rootScope.$apply;
      console.debug(people);
      console.debug(controller);
      expect(controller.people).to.have.length(people.length);
    });
  });

});
