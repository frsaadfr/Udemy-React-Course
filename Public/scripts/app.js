'use strict';

console.log('APP.js is runninng');

var template = React.createElement(
  'p',
  null,
  'This is JSX from App.js!'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
