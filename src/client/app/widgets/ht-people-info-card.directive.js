(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive('htPeopleInfoCard', htPeopleInfoCard);

  htPeopleInfoCard.$inject = ['config'];
  /* @ngInject */
  function htPeopleInfoCard(config) {
    var directive = {
      //link: link,
      template: 'User Info Card',
      restrict: 'E'
    };

    return directive;

    // function link(scope, element, attrs) {
    //   attrs.$observe('htImgPerson', function(value) {
    //     value = basePath + (value || unknownImage);
    //     attrs.$set('src', value);
    //   });
    // }
  }
})();
