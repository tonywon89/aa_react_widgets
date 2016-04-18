var React = require('react');

var WeatherClock = React.createClass({
  getInitialState: function () {
    return ({ time: new Date() });
  },

  componentDidMount: function () {
    this.interval = setInterval(this.tick, 1000);



  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
  },

  tick: function () {

    this.setState({time: new Date()});
    var self = this;

    navigator.geolocation.getCurrentPosition(function(position) {
      var request = new XMLHttpRequest();

      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      var apikey = "645c5d39c7603f17e23fcaffcea1a3c1";
      var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat +
                "&lon=" + lon + "&APPID=" + apikey;
      request.open('GET', url, true);

      request.onload = function () {
        var response = JSON.parse(request.responseText);

        if (request.status >= 200 && request.status < 300) {
          self.setState(
            {
              temperature: response.main.temp,
              weather: response.weather[0].description
            }
          );
        }
      };

      request.send();
    });
  },

  render: function () {
    var time = this.state.time;
    console.log(this.state.temperature);
    console.log(this.state.weather);
    return (
      <div>{time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()}</div>
    );

  }
});

module.exports = WeatherClock;
