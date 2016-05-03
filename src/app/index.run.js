(function() {
  'use strict';

  angular
    .module('myToDo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
