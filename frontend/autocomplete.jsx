var React = require("react");
var Autocomplete = React.createClass({
  getInitialState: function() {
    return {input: ""};
  },

  updateInput: function(event) {
    this.setState({input: event.target.value});
  },

  handleClick: function(event) {
    this.setState({input: event.target.innerHTML});
  },

  render: function() {
    var matches;

    if (this.state.input === "") {
      matches = [];
    } else {
      var regex = new RegExp("^" + this.state.input);
      matches = this.props.names.filter(function(name) {
        return name.match(regex);
      });
    }

    var self = this;

    matches = matches.map(function(name, i) {
      return <li key={i} onClick={self.handleClick}>{name}</li>;
    });

    return (
      <main>
        <input type="text" value={this.state.input} onChange={this.updateInput}/>
        <ul>
          {matches}
        </ul>
      </main>
    );
  }
});



module.exports = Autocomplete;
