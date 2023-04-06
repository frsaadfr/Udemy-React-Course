'use strict';

console.log('APP.js is running');
// challenge code 

// only render subtitle and p tag) if subtitle exists 
//render new p tag if options.legnth > 0 "here are your options "no options"

var app = {
    title: 'Indesicion App',
    subtitle: 'Put your life in the hands of a computer',
    Options: []

};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.Options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var appRoot = document.getElementById('app');

var wipe = function wipe() {
    app.Options = [];
    render();
};

var render = function render() {
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
            'p',
            null,
            app.Options.length
        ),
        React.createElement(
            'button',
            { onClick: wipe },
            'Remove All'
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
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
