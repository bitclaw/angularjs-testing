(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive('htPeopleInfoCard', htPeopleInfoCard);

  htPeopleInfoCard.$inject = ['config'];
  /* @ngInject */
  function htPeopleInfoCard(config) {

    return {
      //link: link,
      templateUrl: 'app/widgets/ht-people-info-card.html',
      restrict: 'E'
    };

    // function link(scope, element, attrs) {
    //   attrs.$observe('htImgPerson', function(value) {
    //     value = basePath + (value || unknownImage);
    //     attrs.$set('src', value);
    //   });
    // }
  }
})();
