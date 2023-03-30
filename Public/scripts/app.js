'use strict';

console.log('APP.js is running');
// challenge 2 
// comppleted :}


var user = {
    title: 'Indesicion App',
    subtitle: 'Put your life in the hands of a computer'

};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.title
    ),
    React.createElement(
        'p',
        null,
        user.subtitle
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

//challenge 1

// *completed :]
var user = {
    name: 'saad',
    age: 16,
    location: 'karachi'
};

var userName = "ali";
var userAge = 27;
var userLocation = 'London';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
