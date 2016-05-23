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
      expect('hello').to.equal('TEST');
      console.debug(data);
      //expect(data).exists;
    });
    $rootScope.$apply;
  });

  it.skip('getPeople returns an array of people' , function() {

  });

});
