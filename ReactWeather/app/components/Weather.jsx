var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getDefaultProps: function (){
		return {
			city: 'Pasay'
		};
	},
	getInitialState: function(){
		return {
			city: this.props.city,
		};
	},
	handleNewData: function(updates){
			this.setState(updates);
	},
  render: function(){
		var city = this.state.city;
		return (
			<div>
        <h3>Get Weather</h3>
        <WeatherForm onNewData={this.handleNewData}/>
				<WeatherMessage city={city}/>
			</div>
		);
	}
});

module.exports = Weather;
