var Greeter = React.createClass({
	getDefaultProps: function (){
		return {
			name: 'React',
			msg: 'This is from a component!'
		};
	},
	render: function(){
		var name = this.props.name;
		var message = this.props.msg;

		return (
			<div>
				<h1>Hello {name}!</h1>
				<p>{message}</p>
			</div>
		);
	}
});

var firstName = 'Juan Cornelio';
var customMessage = 'This is just a try.';

ReactDOM.render(
	<Greeter name={firstName} msg={customMessage}/>,
	document.getElementById('app')
);
