'use strict';

console.log('APP.js is runninng');

// Real Code 

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'This is some list item'
        )
    )
);

//challenge code

// *completed :]

/*
var templateTwo = 
<div>
    <h1>Saad</h1>
    <p>16</p>
    <p>Location:Pakistan</p>
</div> */

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
