var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs');
var WeatherClock = require('./weather_clock');
var Autocomplete = require('./autocomplete');

var Widgets = React.createClass({
  getInitialState: function () {
    return {info: [{title: "Weather Clock", content: <WeatherClock/>},
                   {title: "Autocomplete", content: <Autocomplete names={this.names}/>},
                   {title: "Ice cream", content: "Chocolate chip"}]};
  },

  names: ["Tony", "Tommy", "Alexander", "Alejango", "Alex", "Jack"],

  render: function() {
    return(
      <div>
        <Tabs information={this.state.info}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Widgets/>, document.getElementById('main'));
});
