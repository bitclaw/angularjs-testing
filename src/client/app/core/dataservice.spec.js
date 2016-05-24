/* jshint -W117, -W030 */
describe('dataservice', function() {
  beforeEach(function() {
    bard.appModule('app.core');
    bard.inject('$http','$httpBackend','$q','dataservice','$rootScope');
  });

  it('exists' , function(){
    expect(dataservice).to.exist;
  });

  it('getMessageCount returns a value' , function() {
    dataservice.getMessageCount().then(function(data) {
      expect(data).to.exist;
    });
    $rootScope.$apply();
  });

  it.skip('getPeople returns an array of people' , function() {

  });

});
