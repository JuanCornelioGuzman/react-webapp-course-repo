var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function(){
		return {
			city: 'Pasay',
      temp: 25
		};
	},
	handleSearch: function(city){
		var that = this;
		openWeatherMap.getTemp(city).then(function(temp){
			that.setState({
				city: city,
				temp: temp
			});
		}, function(errorMessage){
			alert(errorMessage);
		});
	},
  render: function(){
		var {city,temp} = this.state;
		return (
			<div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
				<WeatherMessage city={city} temp={temp}/>
			</div>
		);
	}
});

module.exports = Weather;
