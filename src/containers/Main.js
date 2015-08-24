var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var MainNav = require('../components/MainNav');
var MainFooter = require('../components/MainFooter');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <MainNav />
        <RouteHandler />
        <MainFooter />
      </div>

    );
  }
});

module.exports = Main;
