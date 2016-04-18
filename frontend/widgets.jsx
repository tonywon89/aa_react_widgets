var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs');
var WeatherClock = require('./weather_clock');
var Autocomplete = require('./autocomplete');

var Widgets = React.createClass({
  getInitialState: function () {
    return {info: [{title: "Weather Clock", content: <WeatherClock/>},
                   {title: "Do Re Mi", content: "Fa So La Ti Da"},
                   {title: "Ice cream", content: "Chocolate chip"}]};
  },

  names: ["Tony", "Tommy", "Alexander", "Alejango", "Alex", "Jack"],

  render: function() {
    return(
      <div>
        <Tabs information={this.state.info}/>
        <Autocomplete names={this.names}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Widgets/>, document.getElementById('main'));
});
