var React = require('react');

//Presentational Component - no state
var WeatherMessage = React.createClass({
	render: function () {
		var {city,temp} = this.props;
		return (
			<div>
				<p>It's {temp} degrees in {city}</p>
			</div>
		);
	}
});

module.exports = WeatherMessage;
