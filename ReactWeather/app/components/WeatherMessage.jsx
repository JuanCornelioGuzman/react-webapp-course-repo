var React = require('react');

//Presentational Component - no state
var WeatherMessage = ({city,temp}) => {
	return (
		<div>
			<p>It's {temp} degrees in {city}</p>
		</div>
	);
}

module.exports = WeatherMessage;
