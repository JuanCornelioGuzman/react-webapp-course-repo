var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

//Container Component - maintain state
//It must only render child component
var Greeter = React.createClass({
	getDefaultProps: function (){
		return {
			name: 'React',
			message: 'This is from a component!'
		};
	},
	getInitialState: function(){
		return {
			name: this.props.name,
			message: this.props.message
		};
	},
	handleNewData: function(updates){
			this.setState(updates);
	},
	render: function(){
		var name = this.state.name;
		var message = this.state.message;

		return (
			<div>
				<GreeterMessage name={name} message={message}/>
				<GreeterForm onNewData={this.handleNewData}/>
			</div>
		);
	}
});

module.exports = Greeter;
