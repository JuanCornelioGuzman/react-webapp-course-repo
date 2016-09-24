var React = require('react');

//Presentational Component - no state
var WeatherMessage = React.createClass({
	render: function () {
		var city = this.props.city;
		return (
			<div>
				<p>It's 50 degrees in {city}</p>
			</div>
		);
	}
});

module.exports = WeatherMessage;
