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

var user = {
    name: 'saad',
    age: 18,
    location: 'philedelphia'
};

function getlocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location : ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age >= 18 && React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    getlocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
