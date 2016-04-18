var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <h1 className={this.props.style} onClick={this.props.clickCallback}>{this.props.title}</h1>
    );
  }
});


var Tabs = React.createClass({
  getInitialState: function() {
    return {index: 0};
  },

  clicked: function(i) {
    this.setState({index: i});
  },

  render: function () {
    var self = this;

    var articles = this.props.information.map(function(tab, idx) {
      var content, style;

      if (self.state.index === idx) {
        style = "selected";
        content = self.props.information[self.state.index].content;
      } else {
        style = "";
        content = "";
      }

      return (
        <div>
          <Header clickCallback={self.clicked.bind(self, idx)}
                  title={tab.title} style={style}/>

          <article>{content}</article>
        </div>
      );
    });

    return (
      <div>
        <ul>
          {articles}
        </ul>
      </div>
    );
  }

});

module.exports = Tabs;
