/* jshint -W117, -W030 */
describe('PeopleController', function() {
    var controller;
    var people = mockData.getMockPeople();
    var $controller;
    var $log;
    var $q;
    var $rootScope;

    beforeEach(function() {
        module('app.people');
        inject(function(_$controller_,_$log_,_$q_,_$rootScope_){
            $controller = _$controller_;
            $log = _$log_;
            $q = _$q_;
            $rootScope = _$rootScope_;
        });
//        bard.appModule('app.people');
//        bard.inject('$controller', '$log', '$q', '$rootScope');

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
            $rootScope.$apply;
        });

        it('should have people',function() {
            $rootScope.$apply;
            expect(controller.people).to.have.length.above(0);
        });

        it('should have mock people',function() {
            $rootScope.$apply;
            console.debug(controller.people);
            expect(controller.people).to.have.length(people.length);
        });
    });

});
