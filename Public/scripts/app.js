'use strict';

var visibilty = false;
var toggle = function toggle() {
    visibilty = !visibilty;
    render();
};
var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'VISIBILTY TOGGLE'
        ),
        React.createElement(
            'button',
            { onClick: toggle },
            visibilty ? 'hide detail' : 'show details'
        ),
        React.createElement('br', null),
        visibilty && React.createElement(
            'div',
            null,
            'some details'
        )
    );
    ReactDOM.render(jsx, document.getElementById('app'));
};
render();
