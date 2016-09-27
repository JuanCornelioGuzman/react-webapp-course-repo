var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
	getInitialState: function(){
		return {
			city: 'Pasay',
      temp: 25
		};
	},
	handleSearch: function(city){
			this.setState({
        city: city,
        temp: 28
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
