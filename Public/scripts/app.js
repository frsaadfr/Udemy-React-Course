'use strict';

console.log('APP.js is running');
// challenge code 

// only render subtitle and p tag) if subtitle exists 
//render new p tag if options.legnth > 0 "here are your options "no options"

var app = {
    title: 'Indesicion App',
    subtitle: 'Put your life in the hands of a computer',
    Options: ['one', 'two']

};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle && app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.Options.length > 0 ? "here are your optons" : "no Options"
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'This is some Item'
        ),
        React.createElement(
            'li',
            null,
            'This is some Item'
        )
    )
);

//work code
var count = 0;
//addition function
var addOne = function addOne() {
    console.log('addone');
};
//subtraction function
var minusOne = function minusOne() {
    console.log('minusOne');
};
//reset function
var reset = function reset() {
    console.log('reset');
};
//buttons
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'reset'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
