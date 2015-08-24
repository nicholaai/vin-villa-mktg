var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var MainNav = require('../components/MainNav');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <MainNav />
        <RouteHandler />
      </div>

    );
  }
});

module.exports = Main;
