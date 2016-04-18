var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs');


var Widgets = React.createClass({
  getInitialState: function () {
    return {info: [{title:"Hello" , content: "Goodbye"},
                   {title: "Do Re Mi", content: "Fa So La Ti Da"},
                   {title: "Ice cream", content: "Chocolate chip"}]};
  },

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
