var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
		e.preventDefault();

		var city = this.refs.city.value;

		if(city.length>0){
			this.refs.city.value = '';
      this.props.onSearch(city);
		}

	},
  render: function(){
    return(
			<form onSubmit={this.onFormSubmit}>
        <div>
          <input ref="city" placeholder="Enter city name"></input>
        </div>
        <div>
          <button>Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;
