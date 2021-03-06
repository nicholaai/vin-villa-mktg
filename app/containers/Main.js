var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var MainNav = require('../components/MainNav');
var MainFooter = require('../components/MainFooter');
import '../../stylesheets/Global.css';

var Main = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <MainNav />
        <section className="content">
          <div className="content-body">
            <RouteHandler />
          </div>
        </section>
        <MainFooter />
      </div>
    );
  }
});

module.exports = Main;
