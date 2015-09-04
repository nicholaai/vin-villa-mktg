var React = require('react');
var Router = require('react-router');
import '../../stylesheets/Global.css';

var Home = React.createClass({
  render: function() {
    return (
      <img
        src="img/albumArtwork.gif"
        className="img-responsive center-block album-artwork" />
    );
  }
});

module.exports = Home;
