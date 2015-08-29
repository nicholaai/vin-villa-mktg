var React = require('react');
var Router = require('react-router');
import '../../stylesheets/Global.css';

var Home = React.createClass({
  render: function() {
    return (
      <img
        src="http://cdn.narcity.com/wp-content/uploads/sites/2/2015/01/the-weeknd2.jpg"
        className="img-responsive center-block" />
    );
  }
});

module.exports = Home;
