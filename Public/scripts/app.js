console.log('APP.js is runninng')

var template = <p>This is JSX from App.js!</p>;
var appRoot = document.getElementById('app');

ReactDom.render(template, appRoot);