# angularjs-splitbutton

> have multiple buttons in the same place

## Install

```sh
$ npm install --save angularjs-splitbutton
```

## Demo

- http://next.plnkr.co/plunk/okwSlKqP5RpyIM4b

## Use

- include dependencies
```html
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-animate.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-aria.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.1/angular-material.min.js"></script>

  <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.1/angular-material.min.css">
```
```js
  angular.module('app', ['ngMaterial'])
```

- include angularjs-splitbutton
```html
<link rel="stylesheet" href="./pathto/splitButton.css">
<script src="./pathto/splitButton.js"></script>
```
```js
angular.module('app', ['ngMaterial', 'splitButton'])
```

- create a list
```js
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
```
- Add the button and functionality 
Angularjs-splitbutton only needs an array of strings as options and a default string.
It uses the onChoice callback to execute actions when the user chooses an option.
The button will take the full width of its containing element to easily size it with other elements
Note: The argument for onChoice needs to be called 'option' in the markup
```html
<div class="container">
  <split-button options="v.options" default-option="v.defaultOption" on-choice="v.onChoice(option)"></split-button>
</div>
```
```js
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
```


## License

MIT
