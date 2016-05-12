/* jshint -W117, -W030 */
describe('PeopleController', function() {
    var controller;
    var people = mockData.getMockPeople();
    console.debug(people);

    beforeEach(function() {
        bard.appModule('app.people');
        bard.inject('$controller', '$log', '$q', '$rootScope');

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
            expect(controller.people).to.have.length.of.at.least(1);
        });
    });

});
