/* jshint -W117, -W030 */
describe('dataservice', function() {
  beforeEach(function() {
    bard.appModule('app.core');
    bard.inject('$http','$httpBackend','$q');
  });

  it('hello test' , function(){
    expect('hello').to.equal('hello');
  });

});
