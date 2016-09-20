var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'Juan Cornelio';
var customMessage = 'This is the default message.';

ReactDOM.render(
	<Greeter name={firstName} message={customMessage}/>,
	document.getElementById('app')
);
