var React = require('react');

var Tabs = React.createClass({
  getInitialState: function() {
    return {index: 0};
  },

  clicked: function(i) {
    this.setState({index: i});
  },

  render: function () {
    var self = this;

    return (
      <div>
        <ul>
          {this.props.information.map(function(tab, idx) {
            var content;
            if (self.state.index === idx) {
              content = self.props.information[self.state.index].content;
            } else {
              content = "";
            }

            return (
              <div>
                <h1 key={idx} onClick={self.clicked.bind(self, idx)}>
                  {tab.title}
                </h1>

                <article>{content}</article>
              </div>
            );
          })}

        </ul>

      </div>
    );
  }

});

module.exports = Tabs;
