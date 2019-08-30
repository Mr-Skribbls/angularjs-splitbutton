(function() {
  'use strict';

  angular.module('app', ['ngMaterial', 'splitButton'])
  .controller('mainCtrl', [function() {
    let v = this;
    v.output = '';

    const optionList = [
      {
        name: 'jump',
        action: function() {
          v.output = 'how high?';
        }
      }, {
        name: 'open dialog',
        action: function() {
          v.output = 'opening a dialog';
        }
      }, {
        name: 'find answer to everything',
        action: function() {
          v.output = '42';
        }
      }
    ];

    v.defaultOption = optionList[0].name;
    v.options = optionList.reduce((acc, o) => {
      if(o.name !== v.defaultOption) {
        acc.push(o.name);
      }
      return acc;
    }, []);

    v.onChoice = function onChoice(option) {
      optionList
        .find(o => o.name === option)
        .action();
    };
  }]);
})();