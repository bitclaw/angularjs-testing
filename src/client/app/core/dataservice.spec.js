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

  it('getPeople hits the right /api/people' , function() {
    $httpBackend.when('GET', '/api/people').respond(200,[{}]);
    dataservice.getPeople().then(function(data) {
      expect(data).to.exist;
    });
    $httpBackend.flush();
  });

  it('getPeople reports error if server fails' , function() {
    $httpBackend
      .when('GET', '/api/people')
      .respond(500,{data: {description: 'you fail'}});
    dataservice.getPeople().catch(function(error) {
      expect(true).to.be.false;
    });
    $httpBackend.flush();
  });

});
