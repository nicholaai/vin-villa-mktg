var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var MainNav = require('../components/MainNav');
var MainFooter = require('../components/MainFooter');
import { Grid } from 'react-bootstrap';
import '../../stylesheets/Global.css';

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Grid>
          <MainNav />
          <RouteHandler />
          <MainFooter />
        </Grid>
      </div>
    );
  }
});

module.exports = Main;
