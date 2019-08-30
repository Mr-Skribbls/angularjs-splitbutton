/* global angular */
/*
    * @license
    * AngularJS SplitButton
    * Version: 1.0.0
    *
    * Copyright 2019 mr-skribbls.
    * All Rights Reserved.
    * Use, reproduction, distribution, and modification of this code is subject to the terms and
    * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
    *
    * Author: mr-skribbls
*/

(function (window, document) {
  'use strict';

  angular.module('splitButton', [])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('angularjs-split-button/split-button.html',
      '<div class="splitBtn-container">' +
        '<md-button ng-click="v.optionChosen(v.defaultOption)">' +
          '{{v.defaultOption}}' +
        '</md-button>' +
      
        '<select ng-model="v.chosenOption" ng-change="v.optionChosen(v.chosenOption)">' +
          '<option ng-value="option" ng-repeat="option in v.options">' +
            '{{option}}' +
          '</option>' +
        '</select>' +
      '</div>'
    );
  }])
  .component('splitButton', {
    templateUrl: 'angularjs-split-button/split-button.html',
    controller: splitButtonController,
    controllerAs: 'v',
    bindings: {
      options: '<',
      defaultOption: '<',
      onChoice: '&',
      isBusy: '&',
    },
  });

  splitButtonController.$inject = [];
  function splitButtonController() {
    this.optionChosen = function(option) {
      if(this.onChoice && typeof this.onChoice === 'function') {
        this.onChoice({option});
      }
      this.chosenOption = '';
    };
  }

})(window, document);
