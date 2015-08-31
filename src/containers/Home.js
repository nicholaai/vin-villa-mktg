var React = require('react');
var Router = require('react-router');
import '../../stylesheets/Global.css';

var Home = React.createClass({
  render: function() {
    return (
      <img
        src="img/vin1.gif"
        className="img-responsive center-block" />
    );
  }
});

module.exports = Home;
